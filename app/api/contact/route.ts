import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  website: z.string().max(0).optional(), // honeypot
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid data" }, { status: 400 })
    }
    // Basic anti-spam: reject if honeypot filled
    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    // TODO: Wire up EmailJS or an email provider here.
    // For now we just simulate successful send.
    await new Promise((r) => setTimeout(r, 500))
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}
