# SiteTrail — Business (parts 1–4)

> **SiteTrail** turns a site manager's daily photos and voice notes into dated site reports and client-approved changes, so small builders have proof instead of arguments.

---

## 1. The problem

**One sentence:**
Small construction firms and architects in Kosovo and North Macedonia lose money, days and client trust every time a client disputes a change or a delay, because what happens on site lives on paper, in WhatsApp groups and in people's heads.

**When it hurts**
- At the end of a project, when the client refuses to pay for "extra" work they asked for by phone.
- When the project is late and nobody can prove why (weather, late materials, client changes).
- When the architect finds out weeks later that something was built differently from the drawings.
- Every week, when the client calls asking "how is it going?" and someone has to send photos by hand.

**What it costs today**
- **Money:** unpaid change work and the cost of rebuilding things done wrong.
- **Time:** hours spent scrolling through WhatsApp, calling people and rebuilding what happened.
- **Stress:** arguments with clients and damaged relationships that cost the next job.

### Interviews (in their own words)

> ⚠️ **TO FILL IN WITH REAL INTERVIEWS. Do not hand in with placeholder text.**

**Interview 1: Architect**
- Who: _role, size of studio, city_
- Date and format: _in person / phone / voice messages_
- Quotes, word for word (Albanian is fine, add an English translation):
  - "…"
  - "…"
  - "…"
- Biggest pain:
- Money or time lost (number):
- What surprised me:

**Interview 2: Contractor / site manager**
- Who: _role, size of firm, city_
- Date and format:
- Quotes, word for word:
  - "…"
  - "…"
  - "…"
- Biggest pain:
- Money or time lost (number):
- What surprised me:

**What the interviews changed in my thinking:** _one or two sentences_

**Observation before the interviews:** architects and engineers in Kosovo say *"jam në teren sot"* ("I'm in the field today"), not "kantier". Macedonian speakers say *"на терен сум"* in the same way. So the product talks about **"teren"** in Albanian and Macedonian, and the brand name is neutral English (SiteTrail) so it works in both countries.

---

## 2. The big picture

**Product in one sentence a stranger understands:**
An app where builders record each day on site with photos and a voice note, and their clients confirm every change with one tap.

| | Who |
|---|---|
| **Main user** | The site manager / foreman: records the day in under 2 minutes |
| **Pays** | The owner of the construction firm (or the architecture studio supervising the build) |
| **Also uses it, free** | The client / investor: reads the reports, confirms the changes. The architect: sends instructions, follows progress |

**Why now**
- Construction is one of the biggest and busiest sectors in Kosovo and North Macedonia, with a lot of it paid for by diaspora clients who live abroad and can't see the site.
- Speech-to-text AI is now good and cheap enough to understand Albanian and Macedonian voice notes, so site managers don't have to type.
- Everyone on site already uses WhatsApp/Viber and a smartphone camera, so the habit is already there.

### Three ways to solve the same problem

| Option | How it works | Good | Bad |
|---|---|---|---|
| **A. Service** | Someone visits each site weekly, takes photos and writes the report | No tech needed from the builder | Expensive, slow, doesn't scale, nobody records changes between visits |
| **B. WhatsApp bot only** | The site manager sends photos and a voice note to a number, and a report comes back | Zero learning, works on any phone | Hard to give the client a clean history and approve button. You depend on Meta's rules |
| **C. Web app + WhatsApp entry (chosen)** | Entries come in by a simple mobile web app (and later WhatsApp). The owner, client and architect see one clean project timeline with approvals | Easy capture plus a real record that holds up in a dispute | More to build than a bot |

**Why I chose C:** the value isn't the report, it's the **proof**: a dated, shared timeline and a client tap that says "I approved this change and its price." That needs a real place the client opens. Capture must feel as easy as WhatsApp, so version 1 is a phone-first web app with voice recording, and WhatsApp entry comes next.

---

## 3. The market

### Competitors

Prices were checked in November 2026 from public listings and may change. Confirm before the hand-in.

| Competitor | Price | What it does well | Where it fails for a small Kosovo/MK builder | Link |
|---|---|---|---|---|
| **PlanRadar** (Austria) | From ~€26/user/month; Starter ~€89 and Pro ~€129/user/month | Strong defect and site documentation on plans, used across Europe | Priced per user, so a 6-person team gets expensive fast; built for bigger firms; no Albanian | [planradar.com](https://www.planradar.com) |
| **Fieldwire** (Hilti) | Free up to 5 users; Pro ~$39–54/user/month | Great task and plan management, good free tier | Task-oriented rather than diary-oriented, English-first, no client approval of changes | [fieldwire.com](https://www.fieldwire.com/pricing/) |
| **Raken** (USA) | Not public; third-party listings show roughly $12–90/user/month | Made exactly for daily reports | US-focused, USD, English, aimed at US crews | [rakenapp.com](https://www.rakenapp.com) |
| **Valoon** (Switzerland/Germany) | Not public; ask for a quote | WhatsApp-style chat and voice notes turned into reports, the closest to my idea | German/DACH market, no Albanian/Macedonian, priced for Western Europe | [valoon.chat](https://valoon.chat/en/) |
| **Sifu** (new, AI) | Not public | Connects to WhatsApp and uses AI to draft daily reports | Early-stage and English-first, no local presence | [producthunt.com/products/sifu](https://www.producthunt.com/products/sifu) |
| **Do nothing:** WhatsApp groups, a notebook, Excel, phone calls | €0 | Free, everyone already uses it, no training | No structure and no proof; messages get lost; the client never formally approves anything; nothing is searchable later | n/a |

**What this tells me:** the idea is proven (Valoon and Sifu are going in the same direction), so the market is real. But **nobody serves Albanian- and Macedonian-speaking builders, at local prices, with in-person setup**. My real competitor is the WhatsApp group.

### How many possible customers?

**Kosovo**
1. The Kosovo Business Registration Agency (ARBK) lists **8,458** businesses registered for residential and non-residential building construction (NACE 41.20), of which **4,661 (55%) are active**. Source: [ARBK data via arbk.atlas-studio.eu](https://arbk.atlas-studio.eu/activity/4120).
2. Many of these are one-person firms or firms with no running project. I assume **40%** have 5+ workers and run their own sites → **~1,860 firms**.

**North Macedonia**
1. The Macedonian Chamber of Commerce reports **4,938** active construction companies (all of NACE section F, 2018 figure). Source: [mchamber.mk](https://mchamber.mk/en/home/grupacii/6).
2. I assume about **50%** do building construction (the rest are civil engineering and specialised trades) → ~2,470.
3. Same **40%** assumption for firms with 5+ workers that run sites → **~990 firms**.

**Architecture studios that supervise construction** (second buyer)
- I did not find an official number. My assumption is **~300 in Kosovo and ~300 in North Macedonia** → **~600**. _To verify with the chambers of architects._

| | Firms |
|---|---|
| Kosovo builders | ~1,860 |
| North Macedonia builders | ~990 |
| Architecture studios (assumption) | ~600 |
| **Total possible customers** | **~3,450** |

**Realistic goal:** 3% in two years → **~100 paying firms × €39 = ~€3,900/month**.

The weakest numbers are the 40% and 50% assumptions and the architecture-studio count. I'll test them in interviews by asking "how many people work for you and how many sites do you run at once?"

### Why a customer would choose SiteTrail
**Because it's the only site diary in Albanian and Macedonian that is as easy as sending a WhatsApp voice note, costs one flat price for the whole firm, and gives you the client's signed approval for every change.**

---

## 4. Business model and price

### Lean Canvas

| | |
|---|---|
| **Problem** | 1. Disputes about changes ("I never asked for that"). 2. Delays nobody can explain or prove. 3. Clients, often abroad, constantly asking "how is it going?" |
| **Customer segments** | Small and medium construction firms (5–50 workers) in Kosovo and North Macedonia. Architecture studios that supervise builds. **Early adopters:** firms building for diaspora clients |
| **Unique value proposition** | Record your site in 2 minutes a day by voice, and get your client's approval on every change. Proof, not arguments |
| **Solution** | Daily entries by photo and voice note, turned into structured entries by AI. Change requests with one-tap client approval. Automatic weekly PDF report for the client |
| **Channels** | In-person visits to sites and firms, the DALT-Architects network, building material stores, architecture Facebook/Instagram groups, referrals from clients |
| **Revenue streams** | Monthly subscription per firm (flat, unlimited users) |
| **Cost structure** | Hosting, database, AI transcription, WhatsApp/email messages, domain, my time |
| **Key metrics** | Active sites per week, % of days with an entry, changes approved by clients, firms paying after the free project |
| **Unfair advantage** | Local language and on-site setup in person, plus direct access to architects and builders through DALT-Architects |

### Price and why

| Plan | Price | For |
|---|---|---|
| **Free first project** | €0 for 30 days, 1 site | So they can try it on a real project |
| **SiteTrail** | **€39/month** per firm, up to 5 active sites, unlimited users | Most small builders |
| **SiteTrail Pro** | **€69/month**, unlimited sites, firm logo on the reports | Bigger firms and architecture studios |
| **Yearly** | 2 months free | Cash up front |

**Why monthly, flat per firm:**
- Builders are afraid of paying "per user". Flat pricing means they invite everyone, including the client and the architect, and more users make the product more valuable.
- €39 is much less than one dispute. If SiteTrail saves a single argument about a €500 change, it pays for a year.
- It's far below PlanRadar or Fieldwire for a 6-person team (~€150–500/month).

### Monthly costs (first 10–30 customers)

| Item | Estimate / month | Notes |
|---|---|---|
| Hosting (web app) | ~€20 | e.g. Vercel or Railway |
| Database + file storage (photos) | ~€25 | e.g. Supabase Pro |
| AI: speech-to-text + structuring | ~€10–20 | ~30 sites × 1 min/day of voice is cheap |
| Email (reports, invites) | €0 | Free tier, e.g. Resend |
| WhatsApp/SMS (approval links) | ~€10–20 | Pay per message. Start with email + link to keep it low |
| Domain (sitetrail.app) | ~€1.5 | ~€15–20 per year |
| **Total** | **~€70–90/month** | Break-even at **3 paying firms** |

These are estimates for planning; I'll check real prices when I choose the tools.

### How the first 10 customers will find me
1. **DALT-Architects network:** ask for introductions to the contractors they work with (target: 3 firms).
2. **Walking onto sites:** visit 20 active sites in Prishtina and nearby cities, talk to the site manager, offer a free first project (target: 3 firms).
3. **Building material stores:** ask the owners of 5 stores to introduce me to their regular builders (target: 2 firms).
4. **Facebook and Instagram groups** for architecture and construction in Kosovo and North Macedonia, with a short video of a voice note turning into a report (target: 1–2 firms).
5. **Referrals from clients:** every weekly report sent to a client says "Made with SiteTrail", so the client becomes a salesperson for their next build (target: 1 firm).
