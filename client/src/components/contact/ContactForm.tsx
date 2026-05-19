import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import { api } from '../../lib/api'
import { BracketButton } from '../ui/BracketButton'

export function ContactForm() {
  const [status, setStatus] = useState('Ready to help shape your route.')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await api.contact(form)
      setStatus('Message sent. We will reply with a route suggestion.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('Backend unavailable. Your draft is preserved locally.')
    }
  }

  return (
    <section className="border-t border-border bg-muted py-24">
      <div className="mx-auto grid max-w-7xl gap-20 px-5 md:grid-cols-2 md:px-10">
        <div>
          <h1 className="font-serif text-[clamp(2.8rem,5vw,5rem)] italic leading-tight">Plan the next road.</h1>
          <div className="mt-8 flex flex-col gap-7">
            {[
              ['LOCATION', 'Marrakech · Essaouira · Safi · Lalla Takerkoust · Aghmat'],
              ['EMAIL', 'hello@atlasatlantic.ma'],
              ['SOCIAL', 'Instagram · TikTok · YouTube'],
            ].map(([label, text]) => (
              <div key={label} className="border-t border-border pt-5">
                <p className="font-inter text-[0.62rem] uppercase tracking-[0.25em] text-accent">{label}</p>
                <p className="mt-2 font-inter text-sm font-light leading-[1.75] text-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 inline-block border border-border bg-background p-4">
            <QRCodeSVG value="https://atlasatlantic.ma/marrakech-safi" size={96} />
          </div>
        </div>

        <div>
          <form onSubmit={submit} className="grid gap-4">
            {(['name', 'email', 'subject'] as const).map((field) => (
              <input
                key={field}
                value={form[field]}
                onChange={(event) => setForm({ ...form, [field]: event.target.value })}
                className="h-12 border border-border bg-background px-4 font-inter text-sm outline-none"
                placeholder={field}
                type={field === 'email' ? 'email' : 'text'}
                required
              />
            ))}
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="min-h-40 border border-border bg-background p-4 font-inter text-sm outline-none"
              placeholder="Tell us your budget, dates and interests."
              required
            />
            <BracketButton>Send Message</BracketButton>
          </form>
          <p className="mt-5 font-inter text-sm font-light text-accent">{status}</p>
          <div className="mt-10 aspect-[4/3] border border-border bg-background p-5">
            <iframe
              title="Marrakech map"
              src="https://www.google.com/maps?q=Marrakech%20Morocco&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
