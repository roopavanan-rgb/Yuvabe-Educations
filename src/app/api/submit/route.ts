import { NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxU0Meh487-cKPbUoEg2LfP0okaIHz8UE8UZKuG6IEEESsuPEScm2jH8B-DwFFXNGs2ng/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text(); // IMPORTANT: log raw response

    if (!res.ok) {
      console.error("Apps Script error:", text);
      return NextResponse.json(
        { error: "Apps Script failed", details: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API submit error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
