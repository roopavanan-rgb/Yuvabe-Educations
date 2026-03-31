import { NextResponse } from "next/server";

// Using an environment variable so the script URL isn't hardcoded in git
// The user should set NEXT_PUBLIC_AI_APPS_SCRIPT_URL or AI_APPS_SCRIPT_URL in .env.local
const SCRIPT_URL = process.env.AI_APPS_SCRIPT_URL || process.env.NEXT_PUBLIC_AI_APPS_SCRIPT_URL;

export async function POST(req: Request) {
  try {
    if (!SCRIPT_URL) {
      console.error("Missing Google Apps Script URL environment variable.");
      return NextResponse.json(
        { error: "Server Configuration Error: Missing Google Apps Script Web App URL." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain", // Apps Script sometimes expects text/plain for CORS bypassing
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("Apps Script error:", text);
      return NextResponse.json(
        { error: "Apps Script failed", details: text },
        { status: 500 }
      );
    }

    // Attempt to parse response from Apps script
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(text);
      if (jsonResponse.error) {
        throw new Error(jsonResponse.error);
      }
    } catch (e) {
      console.error("Error parsing Apps script response: ", text);
    }

    return NextResponse.json({ success: true, data: jsonResponse });
  } catch (err) {
    console.error("API submit error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
