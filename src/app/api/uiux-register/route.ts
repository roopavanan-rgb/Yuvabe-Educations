import { NextResponse } from "next/server";

const SCRIPT_URL = process.env.UIUX_APPS_SCRIPT_URL;

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    if (!SCRIPT_URL) {
      console.error("[uiux-register] Missing UIUX_APPS_SCRIPT_URL");
      return NextResponse.json(
        { error: "Server configuration error: missing Apps Script URL." },
        { status: 500 }
      );
    }

    const formData = await req.formData();

    // ── Build resume base64 ───────────────────────────────────────────────────
    const resumeFile = formData.get("resume") as File | null;
    let resumeBase64 = "";
    let resumeFileName = "";
    let resumeMimeType = "";

    if (resumeFile && resumeFile.size > 0) {
      const buffer = await resumeFile.arrayBuffer();
      resumeBase64 = Buffer.from(buffer).toString("base64");
      resumeFileName = resumeFile.name;
      resumeMimeType = resumeFile.type || "application/octet-stream";
    }

    // ── Build payload ─────────────────────────────────────────────────────────
    const payload = {
      fullName:        formData.get("fullName")        ?? "",
      email:           formData.get("email")           ?? "",
      phone:           formData.get("phone")           ?? "",
      age:             formData.get("age")             ?? "",
      location:        formData.get("location")        ?? "",
      education:       formData.get("education")       ?? "",
      isStudent:       formData.get("isStudent")       ?? "",
      currentYear:     formData.get("currentYear")     ?? "",
      college:         formData.get("college")         ?? "",
      isEmployed:      formData.get("isEmployed")      ?? "",
      organization:    formData.get("organization")    ?? "",
      whyJoin:         formData.get("whyJoin")         ?? "",
      source:          formData.get("source")          ?? "",
      additionalNotes: formData.get("additionalNotes") ?? "",
      resumeBase64,
      resumeFileName,
      resumeMimeType,
    };

    // ── Call Apps Script ──────────────────────────────────────────────────────
    const scriptRes = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const rawText = await scriptRes.text();
    console.log("[uiux-register] Apps Script raw response:", rawText);

    // Parse the JSON the Apps Script returns
    let scriptJson: { status?: string; message?: string } = {};
    try {
      scriptJson = JSON.parse(rawText);
    } catch {
      // Apps Script returned non-JSON (e.g. HTML redirect / auth page)
      console.error("[uiux-register] Non-JSON response from Apps Script:", rawText.slice(0, 300));
      return NextResponse.json(
        { error: "Unexpected response from Apps Script. Check deployment settings." },
        { status: 502 }
      );
    }

    // Check the Apps Script's own status field
    if (scriptJson.status === "error") {
      console.error("[uiux-register] Apps Script returned error:", scriptJson.message);
      return NextResponse.json(
        { error: scriptJson.message ?? "Apps Script reported an error." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("[uiux-register] Unhandled error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
