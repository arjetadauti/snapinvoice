# Kantieri — Business rules and flows (part 6)

## Users and roles

| Role | Who | Can do | Cannot do |
|---|---|---|---|
| **Firm owner** | Owner of the construction firm or architecture studio; the paying customer | Create the firm account, create and close projects, invite and remove people, see all projects, manage the subscription, edit any entry within the edit window | Change an approval the client already gave |
| **Site manager** | Foreman or engineer on site | Add daily entries (photos, voice, text) on their projects, create change requests, mark problems | See projects they are not assigned to, delete entries, manage billing |
| **Architect** | The project architect (in or outside the firm) | See the project timeline, add instructions and drawings, comment on entries, create change requests | Edit or delete other people's entries, manage billing |
| **Client** | The person or investor paying for the building | See the timeline and weekly reports of **their** project, approve or reject change requests, comment | Edit entries, see other projects, see internal notes |
| **Kantieri admin** | Me / the Kantieri team | Support, fix accounts, see usage numbers | Approve changes for anyone, read projects without the owner's permission |

---

## The three most important flows

### Flow 1: Sign up and start a project
1. The firm owner opens kantieri.app and signs up with name, phone number, email and firm name.
2. They confirm their email (or phone code).
3. They create the first project: name, address, client name, start date, planned end date.
4. They invite the site manager by phone or email (link by WhatsApp/SMS/email).
5. They invite the client, and optionally the architect, by link.
6. The free 30-day first project starts.
7. On day 25 the owner gets a reminder to choose a plan. If they don't pay by day 30, the project becomes read-only (nothing is deleted).

### Flow 2: Record the day on site (daily entry)
1. At the end of the day, the site manager opens the project on their phone.
2. They take 1–10 photos.
3. They hold the microphone button and speak for up to 2 minutes (Albanian, Macedonian or English).
4. AI turns the voice note into a structured entry: **work done, workers on site, materials delivered, problems/delays, weather, change requests mentioned**.
5. The site manager checks the draft, fixes anything wrong and taps **Save**.
6. The entry is saved with date, time and author, and appears on the project timeline.
7. If the voice note mentioned a client change, Kantieri suggests **"Create a change request?"** (Flow 3).
8. Every Friday, the client automatically gets a weekly report (link + PDF) built from that week's entries.

### Flow 3: Change request and client approval
1. The site manager, architect or owner creates a change request: what changes, why, photos/drawing, **extra cost (€)** and **extra days**.
2. The owner reviews it and taps **Send to client** (the site manager cannot send it alone).
3. The client gets a link by email/WhatsApp, opens the change, and sees the description, cost and delay.
4. The client taps **Approve** or **Reject** (with an optional comment).
5. The decision is saved with date, time and the client's name, and everyone on the project is notified.
6. Approved changes are added to the project's **change list** with a running total of extra cost and extra days.
7. If the client doesn't answer within 3 days, Kantieri sends one reminder. After 7 days the request shows as **No answer**, and the owner decides what to do.

---

## Business rules

1. **A project needs one owner and one client.** It can't start without a client name and contact, because approvals are the main point of the product.
2. **Entries can be edited only for 24 hours** after they are saved. After that they are locked, so the timeline can be trusted as proof. Corrections are added as a new note linked to the old entry.
3. **Entries are never deleted** by site managers. Only the firm owner can hide an entry, and the hide is logged with who and when.
4. **Only one entry per site per day** per site manager. More photos or notes on the same day are added to that day's entry.
5. **A change request must have a cost and a delay**, even if both are zero ("€0, 0 days" is a valid, explicit answer).
6. **Only the firm owner can send a change request to the client.** Site managers and architects can prepare it, but the owner approves the price.
7. **A client's approval can't be changed.** If the client changes their mind, a new change request is created that reverses the first one.
8. **Clients see only their own project** and never see entries marked "internal" (e.g. problems with workers or suppliers).
9. **The first project is free for 30 days.** After that, without a paid plan, projects become read-only. Data is kept for 12 months, and the owner can export everything as PDF at any time.
10. **The subscription is per firm, not per user.** The basic plan allows up to 5 active projects. A closed project doesn't count toward the limit.
11. **Cancelling stops the next payment**, and the account stays active until the end of the paid month. No refunds for partial months.
12. **Voice notes are kept for 90 days**, and the text transcript is kept for as long as the project exists.

---

## What version 1 will NOT do
- No **native iOS/Android app**: v1 is a mobile web app that works in the phone browser.
- No **WhatsApp bot** for entries yet: that's version 2.
- No **plans/drawings markup** (drawing on PDFs like PlanRadar).
- No **budgets, invoices or accounting**: only the cost of change requests.
- No **worker time tracking or payroll**.
- No **scheduling / Gantt charts**.
- No **offline mode**: it needs mobile internet to save.
- No **legal e-signature**: approval is a dated, logged tap, not a qualified electronic signature.
- No **languages other than Albanian, Macedonian and English**.
