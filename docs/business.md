# SnapInvoice — Business (parts 1–4)

> **SnapInvoice** lets small businesses photograph their invoices with a phone, and AI turns them into ready-to-import data for their accountant, so accountants stop typing invoices by hand.

---

## 1. The problem

**One sentence:**
Accountants in Kosovo and North Macedonia who keep the books for small businesses lose whole working days every month at deadline time, typing hundreds of paper invoices and receipts by hand from the bags their clients bring in, which costs them hours they can't bill, late nights before VAT deadlines, and typing mistakes they have to fix later.

**When it hurts**
- In the first days of every month, when clients bring a bag or a box of invoices, often late and incomplete.
- Right before the monthly VAT and tax deadlines, when everything has to be entered at once.
- When a typing mistake (wrong amount, wrong VAT, wrong supplier number) has to be found and fixed later.
- When an accountant can't take on more clients because the data entry has no room left.

**What it costs today**
- **Time:** both accountants I interviewed spend **3–4 working days every month** typing invoices into their accounting program (WinGK).
- **Money:** those hours could be spent on more clients or better-paid advisory work.
- **Stress:** working at weekends (they take the office computer home to finish), late nights before deadlines, chasing clients for missing documents, and the risk of fines for the client if something is wrong.

### Interviews (in their own words)

I talked to **two accountants** who enter invoices for small-business clients. They described the same situation, almost in the same way.

**What they told me (summary of both)**
- **Time:** entering all the invoice documents for the month, with all the data, into their accounting program takes them **3–4 days every month**.
- **Program:** both use **WinGK** as their accounting program, so everything is typed by hand into WinGK.
- **Working after hours:** sometimes they had to **take the company's computer home** to finish invoices over the **weekend**, because there weren't enough working hours during the week to get them all done.

**In their words**
> _Add one or two short sentences as close as possible to what they said, translated into English. For example, what they said about taking the computer home._
> - "…" (Accountant 1)
> - "…" (Accountant 2)

### How they work today (what they showed me)

They showed me their real workflow on the office computer:

- **The program:** WinGK (version 0.91), an older Windows desktop accounting program with a **Macedonian-language interface**. The main menus are Financial, Material (inventory), Code lists and System. At the top they choose the **company** (client) and the **year** they're working on.
- **Many tabs open at once:** posting bank statements, updating business partners, account cards, analytics cards and the trial balance. They jump between them all day.
- **Partners first:** before a supplier's invoice can be entered, the supplier has to exist as a **partner** in WinGK, with a partner code, name, price type, address, place, country, bank accounts and contacts. A new supplier means filling in this form by hand first.
- **Paper next to the keyboard:** on the desk there was a pile of paper documents waiting to be typed in: supplier invoices, **handwritten delivery notes**, and printed **bank payment confirmations**. Every one of these is read by eye and typed in by hand.
- **The entry table:** they also showed me a screen that looks like **Excel, with columns and rows**, where each document becomes a row of data. This is where most of the 3–4 days go.

**What this means for SnapInvoice**
- The export must produce **rows and columns in the same order as that WinGK table**, so they can import it or copy it in instead of typing. _Next step: write down the exact column names of that table._
- SnapInvoice must **match each supplier to its WinGK partner code**, and show clearly when a supplier is new, so the accountant creates the partner once and SnapInvoice remembers it.
- SnapInvoice must read **handwritten delivery notes and bank payment slips**, not only clean printed invoices.

**What the interviews changed in my thinking**
- The pain is bigger than I estimated: I guessed 2–4 days a month, and both said **3–4 days**, every month.
- The pain isn't only time at work, it's **their weekends and their personal life**. Taking the work computer home is a strong sign that this hurts and that they'd pay to fix it.
- **WinGK** is the program my first customers use, so the first export format must be one that **WinGK can import**. I need to find out exactly which import format (Excel/CSV columns) WinGK accepts.

---

## 2. The big picture

**Product in one sentence a stranger understands:**
Businesses take a photo of each invoice, and their accountant gets the supplier, date, amounts and VAT already typed, ready for their accounting program.

| | Who |
|---|---|
| **Pays** | The accountant or accounting office: they save the hours |
| **Main user** | The accountant: reviews what AI read and exports it |
| **Also uses it, free** | The small business (the accountant's client): photographs invoices with their phone instead of collecting them in a bag |

**Why now**
- **AI can now read invoices** written in local languages (Latin and Cyrillic script) and English, including photos taken on a phone, at a cost of fractions of a cent per invoice. A few years ago this needed expensive, rigid OCR templates.
- **Tax systems are going digital.** Kosovo is moving from fiscal devices to Electronic Fiscal Software with fiscal QR codes ([fiscal-requirements.com](https://www.fiscal-requirements.com/countries/43-jurisdiction-of-kosovo)), and North Macedonia is preparing mandatory e-invoicing (draft law, phased from 2027) ([fiscal-requirements.com](https://www.fiscal-requirements.com/news/5054-north-macedonia-introduces-mandatory-real-time-e-invoicing-e-faktura)). Accountants know they must change how they work, so this is the moment they're open to new tools.
- **Accountants are overloaded.** More registered businesses means more bookkeeping with the same number of people.

### Three ways to solve the same problem

| Option | How it works | Good | Bad |
|---|---|---|---|
| **A. Data-entry service** | A team in Prishtina types invoices for accountants, paid per document | No tech needed from anyone, works tomorrow | Low margins, depends on hiring people, slow at deadline peaks, doesn't scale |
| **B. WhatsApp bot only** | The business sends invoice photos to a WhatsApp number, and the accountant gets an Excel by email | Zero learning for the business | Hard to review, correct and organise per client and month. Depends on Meta's rules |
| **C. Web app for accountants + phone upload for businesses (chosen)** | Each business gets a simple upload link on their phone. AI reads the invoices, and the accountant reviews and exports per client and month | Fast capture **and** a proper place to check, fix and export | More to build than a bot |

**Why I chose C:** accountants are responsible for the numbers, so they must be able to **see and check** what AI read before it goes into the books. That needs a real review screen organised by client and month. The business side stays as easy as WhatsApp: open a link, take a photo, done. WhatsApp upload is a good next step for version 2.

---

## 3. The market

### Competitors

Prices were checked in November 2026 from public listings. Several aren't public or are sales-led, so confirm before the hand-in.

| Competitor | Price | What it does well | Where it fails for an accountant in Kosovo/MK | Link |
|---|---|---|---|---|
| **Dext Prepare** (UK) | Sales-led; per-client tiers for accounting firms (third-party listings show ~£165+/month for firms) | The market leader in receipt and invoice capture for accountants | Built for Xero/QuickBooks/Sage, not local programs; priced for UK firms; no support for local languages and invoice formats | [dext.com](https://dext.com) |
| **Datamolino** (Slovakia) | ~$9–65/month depending on document volume (third-party listings) | Cheap, pay by volume, unlimited users | Integrates with Western programs, not Financa 5 / Alpha / Bilanc; English interface | [datamolino.com](https://www.datamolino.com) |
| **Hubdoc** (Xero) | Included with Xero subscriptions | Free if you already use Xero | Only useful for Xero users, which local accountants mostly aren't | [hubdoc.com](https://www.hubdoc.com) |
| **Odoo AI invoice capture** | Part of Odoo Enterprise (paid per user); Kosovo localisation module available | Full ERP with built-in AI scanning | Accountants would have to switch their whole program; expensive and complex for a small office | [odoo.com](https://www.odoo.com/app/accounting) |
| **Do nothing:** typing by hand into WinGK / Financa 5 / Alpha / Bilanc / Excel | €0 extra (just the accountant's time) | Familiar, full control, no new tool | Days of typing every month, mistakes, deadline stress, can't take more clients | n/a |

**Local accounting programs** (WinGK, which both accountants I interviewed use, plus Financa 5, Alpha, Bilanc and others) aren't competitors yet. They're where my data goes, so SnapInvoice must export in a format they can import. **Risk:** they could add AI scanning themselves. My answer is to be faster and to work with *all* of them, not just one.

**What this tells me:** the idea is proven abroad (Dext and Datamolino are real businesses), but **nobody does it for local invoices, local languages and local accounting programs at local prices.**

### How many possible customers?

**Kosovo**
1. The Kosovo Business Registration Agency (ARBK) lists **2,295** businesses registered under accounting, bookkeeping, auditing and tax consultancy (NACE 69.20), of which **1,792 (78%) are active**. Source: [ARBK data via arbk.atlas-studio.eu](https://arbk.atlas-studio.eu/activity/6920) _(third-party aggregator of ARBK data, to verify)_.
2. Some are audit firms or big firms that don't do daily bookkeeping for small businesses. I assume **70%** keep books for small businesses → **~1,250 accounting offices**.
3. For context: SCAAK, the main professional body, has about **7,000 members** ([IFAC](https://ifac.org/about-ifac/membership/profile/kosovo)), many of them working inside these offices or in companies.

**North Macedonia**
1. Accountants must be certified and registered with **ISOS** (Institute of Accountants and Certified Accountants). I didn't find a public count of registered accounting offices.
2. My assumption: North Macedonia has a similar number of businesses to support as Kosovo, so **~1,500 active accounting offices**, of which 70% keep books for small businesses → **~1,050**. _To verify with the ISOS register._

| | Accounting offices |
|---|---|
| Kosovo | ~1,250 |
| North Macedonia (assumption) | ~1,050 |
| **Total possible customers** | **~2,300** |

Each office serves many businesses (roughly 20–100 each), so ~2,300 offices reach **tens of thousands of small businesses** without selling to each one.

**Realistic goal:** 5% in two years → **~115 offices × ~€49 average = ~€5,600/month**.

The weakest numbers are the North Macedonia estimate and the 70% assumption. I'll test them by asking accountants how many offices like theirs they know in their city.

### The biggest risk: e-invoicing
If North Macedonia's mandatory e-invoicing starts in 2027–2028, many **B2B invoices will arrive as digital files instead of paper**. That reduces the need for photos in the long term. My plan:
- Receipts, fiscal coupons, foreign invoices and small suppliers will stay on paper for years, and Kosovo has no e-invoicing mandate yet.
- SnapInvoice will also **import digital e-invoice files** (XML/PDF), so the accountant has one place for everything, paper or digital.

### Why a customer would choose SnapInvoice
**Because it's the only invoice-scanning tool that reads local invoices (Latin and Cyrillic), exports straight into the accounting programs local accountants already use, and costs less per month than one day of typing.**

---

## 4. Business model and price

### Lean Canvas

| | |
|---|---|
| **Problem** | 1. Typing hundreds of invoices by hand every month. 2. Clients bring documents late, in bags, incomplete. 3. Typing mistakes and deadline stress |
| **Customer segments** | Accounting offices that keep books for small businesses in Kosovo and North Macedonia. **Early adopters:** offices with 30+ business clients and young accountants open to AI |
| **Unique value proposition** | Your clients photograph invoices, and you get them typed. Stop typing, start checking |
| **Solution** | Phone upload link for each business. AI reads supplier, tax number, date, invoice number, amounts and VAT. A review screen with flagged fields. Export to Excel/CSV in the format of the accountant's program |
| **Channels** | Visiting accounting offices in person, SCAAK/ISOS events and trainings, accountant Facebook groups, referrals between accountants, my AI training network |
| **Revenue streams** | Monthly subscription per accounting office, priced by the number of documents |
| **Cost structure** | AI (vision model) per document, hosting, database and file storage, email, domain, my time |
| **Key metrics** | Documents processed per month, % of fields correct without edits, minutes saved per document, offices still paying after 3 months |
| **Unfair advantage** | Local invoice formats (including handwritten and Cyrillic documents), exports built for local programs, setup in person, and my AI skills to keep improving accuracy |

### Price and why

| Plan | Price | Documents / month | For |
|---|---|---|---|
| **Free trial** | €0 for 30 days | up to 200 | Try it on a real month |
| **Start** | **€29/month** | up to 500 | A single accountant |
| **Office** | **€59/month** | up to 1,500 | Small accounting offices |
| **Pro** | **€99/month** | up to 4,000 | Bigger offices |
| Extra documents | €0.03 each | above the plan | Busy months |

**Why monthly, priced by documents:**
- Accountants think in documents and clients, not users. Pricing by volume is fair, and it grows with the office.
- **The maths sells it:** the accountants I interviewed lose 3–4 days a month. Even if SnapInvoice saves only half of that, it gives them back ~1.5–2 days, and their weekends, for €29–59 a month.
- Unlimited users and unlimited client businesses, so the accountant can invite all their clients without thinking about cost.
- Far below Dext's firm pricing, and comparable to Datamolino but built for local programs and languages.

### Monthly costs (first 10–30 customers)

| Item | Estimate / month | Notes |
|---|---|---|
| AI (reading invoices) | ~€15–40 | ~10,000–20,000 documents at ~€0.002 each with a vision model; to measure |
| Hosting (web app) | ~€20 | e.g. Vercel or Railway |
| Database + file storage (invoice photos) | ~€25 | e.g. Supabase Pro |
| Email (upload links, reminders) | €0 | Free tier, e.g. Resend |
| SMS / WhatsApp reminders | ~€0–15 | Start with email and links; add later |
| Domain (snapinvoice.app) | ~€1.5 | ~€15–20 per year |
| **Total** | **~€60–100/month** | Break-even at **2–3 paying offices** |

These are estimates for planning; I'll check real prices when I choose the tools.

### How the first 10 customers will find me
1. **Personal network and my AI training group:** ask everyone "who is your accountant?" and get introductions (target: 3 offices).
2. **Walking into accounting offices** in Prishtina and nearby cities in the first week of the month, when the pain is highest, offering a free month (target: 3 offices).
3. **Accountant Facebook and Viber groups** in Kosovo and North Macedonia, with a 30-second video showing a phone photo turning into an Excel row (target: 2 offices).
4. **SCAAK / ISOS trainings and events:** accountants need continuing education hours, so offer a short talk on "AI for accountants" (target: 1–2 offices).
5. **Referrals:** one free month for every accountant who brings another one (target: 1 office).
