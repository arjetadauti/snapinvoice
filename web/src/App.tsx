import { Logo } from './Logo'

const steps = [
  { n: '1', title: 'Your client snaps', text: 'They open their personal link and photograph each invoice. No app to install.' },
  { n: '2', title: 'AI does the typing', text: 'Supplier, tax number, date, amounts and VAT are read and filled in for you.' },
  { n: '3', title: 'You check and export', text: 'Unsure fields are highlighted. Approve, then export the month for your accounting program.' },
]

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <Logo />
        <span className="badge">For accounting offices in Kosovo and North Macedonia</span>
      </header>

      <main>
        <section className="hero">
          <h1>
            Snap the invoice.
            <br />
            <span className="accent">Skip the typing.</span>
          </h1>
          <p className="pitch">
            SnapInvoice lets small businesses photograph their invoices with a phone, and AI turns
            them into ready-to-import data for their accountant, so accountants stop typing invoices
            by hand.
          </p>
          <p className="soon">Coming soon. Free 30-day trial for the first offices.</p>

          <div className="preview" aria-hidden="true">
            <div className="preview-row preview-head">
              <span>Supplier</span><span>Invoice no.</span><span>Date</span><span className="num">VAT</span><span className="num">Total</span>
            </div>
            <div className="preview-row">
              <span>Viva Fresh</span><span>F-2026/1184</span><span>03.11.2026</span><span className="num">7.32</span><span className="num">48.00</span>
            </div>
            <div className="preview-row">
              <span>ТЕХНОМАРКЕТ ДООЕЛ</span><span>0457/26</span><span>05.11.2026</span><span className="num">549.15</span><span className="num flag">3,600.00</span>
            </div>
            <div className="preview-row">
              <span>Ferizaj Print</span><span>112</span><span>06.11.2026</span><span className="num">19.07</span><span className="num">125.00</span>
            </div>
          </div>
        </section>

        <section className="steps" aria-label="How it works">
          {steps.map((s) => (
            <article key={s.n} className="step">
              <span className="step-n">{s.n}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 SnapInvoice</span>
        <span>Stop typing invoices. Just check them.</span>
      </footer>
    </div>
  )
}
