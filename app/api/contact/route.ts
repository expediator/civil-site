import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = "akshanshyadav26220.dpskln@gmail.com"
const FROM = "Plinth Civil Consultancy <onboarding@resend.dev>"

export async function POST(req: Request) {
  try {
    const { name, phone, location, service, projectDetails, message } = await req.json()
    if (!name || !phone || !projectDetails) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: TO,
      subject: `New Enquiry: ${name} — ${service || "General"} (${location || "Kanpur"})`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#111">
          <div style="background:#1e3a5f;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0">
            <h2 style="margin:0;font-size:18px">New Consultation Enquiry</h2>
            <p style="margin:4px 0 0;opacity:.7;font-size:13px">Plinth Civil Consultancy — civil-site-gray.vercel.app</p>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 8px 8px">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                ["Name", name],
                ["Phone", phone],
                ["Location", location || "—"],
                ["Service", service || "General"],
              ].map(([k, v]) => `
                <tr>
                  <td style="padding:6px 0;color:#6b7280;font-size:13px;width:120px;vertical-align:top">${k}</td>
                  <td style="padding:6px 0;font-size:14px;font-weight:600">${v}</td>
                </tr>
              `).join("")}
            </table>
            <div style="margin-top:16px;background:#f9fafb;border-radius:6px;padding:14px">
              <p style="margin:0 0 4px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Project Details</p>
              <p style="margin:0;font-size:14px;line-height:1.6">${projectDetails}</p>
            </div>
            ${message ? `
            <div style="margin-top:12px;background:#f9fafb;border-radius:6px;padding:14px">
              <p style="margin:0 0 4px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:.5px">Additional Message</p>
              <p style="margin:0;font-size:14px;line-height:1.6">${message}</p>
            </div>` : ""}
            <p style="margin:20px 0 0;font-size:13px;color:#9ca3af">
              Reply to this email or call <strong>${phone}</strong> to respond.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact] error:", err)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
