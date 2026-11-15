# SnapFaktura — Business rules and flows (part 6)

## Users and roles

| Role | Who | Can do | Cannot do |
|---|---|---|---|
| **Office owner** | Owner of the accounting office; the paying customer | Create the office account, add accountants, add client businesses, see everything, review and export, manage the subscription | Change a month that is already exported and locked (without unlocking it, which is logged) |
| **Accountant** | Staff in the office | See the client businesses assigned to them, review and correct documents, export months | See clients not assigned to them, manage billing, delete the office |
| **Business client** | The small business that the office keeps books for | Upload invoice and receipt photos or PDFs through their link, see what they've uploaded and its status, answer the accountant's questions on a document | See or change the extracted numbers, see other businesses, export anything |
| **SnapFaktura admin** | Me / the SnapFaktura team | Support, fix accounts, see usage numbers | Open invoices or client data without the office owner's permission |

---

## The three most important flows

### Flow 1: Sign up and add a client business
1. The office owner opens snapfaktura.com and signs up with name, email, phone and office name.
2. They confirm their email.
3. They choose their accounting program (e.g. WinGK, Financa 5, Alpha, Bilanc, other / Excel). WinGK is first, because the accountants I interviewed use it, which sets the export format.
4. They add a client business: business name, tax number (NUI/ЕДБ), VAT registered yes/no, contact phone/email.
5. SnapFaktura creates a **personal upload link** for that business, and the owner sends it by email, Viber or WhatsApp (or shows a QR code in the office).
6. The free 30-day trial starts (up to 200 documents).
7. On day 25 the owner gets a reminder to choose a plan. If they don't pay by day 30, uploads stop, but existing data stays and can still be exported.

### Flow 2: The business uploads an invoice
1. The business owner opens their upload link on their phone (no password: the link is personal and can be reset by the accountant).
2. They tap **Take photo** (or choose a PDF/photo from the phone). Several pages or documents can be added at once.
3. They see a preview, can retake a blurry photo, and tap **Send**.
4. SnapFaktura confirms "Received: 3 documents for November", and the documents go to the accountant's queue for that business and month.
5. Around the 3rd of every month, the business gets an automatic reminder: "Send the rest of last month's invoices to your accountant."

### Flow 3: AI reads it, the accountant checks and exports
1. Within a minute of upload, AI reads each document: **supplier name, supplier tax number, invoice number, date, net amount, VAT rate(s), VAT amount, total, currency, and document type** (invoice, receipt/fiscal coupon, credit note).
2. Each field gets a confidence level. Fields the AI isn't sure about are **highlighted in orange**.
3. The accountant opens the business and month, and sees the photo on the left and the fields on the right.
4. They correct anything wrong and tap **Approve** (or press Enter to move fast through the list).
5. If something is missing or unreadable, they tap **Ask client**, and the business gets a message about that document.
6. When all documents in the month are approved, the accountant taps **Export month**, and gets an Excel/CSV in their program's import format.
7. The month is then **locked** for that business, so the exported numbers can't change by accident.

---

## Business rules

1. **Every document belongs to exactly one business and one month.** The month comes from the invoice date, and the accountant can move it (e.g. a late invoice booked in the next month).
2. **Nothing is exported without a human check.** Only documents an accountant has approved go into an export. The AI never posts anything directly into the books.
3. **Uncertain fields must be looked at.** A document with any orange (low-confidence) field can't be approved until the accountant confirms or corrects that field.
4. **The maths must add up.** If net + VAT ≠ total (more than €0.02 off), the document is flagged and can't be approved until fixed.
5. **Duplicates are blocked.** If a document has the same supplier tax number, invoice number and total as one already uploaded for that business, it's marked "possible duplicate" and isn't exported twice.
6. **A month is locked after export.** Changes need the office owner to unlock it. Every unlock is logged with who, when and why.
7. **Businesses only see their own uploads** and never the extracted numbers, other businesses or the office's notes.
8. **Original photos are never edited or deleted by the AI.** Corrections change only the extracted data; the original image stays attached to the document.
9. **Pricing counts documents, not pages.** A three-page invoice is one document. Unused documents don't roll over to the next month.
10. **Data belongs to the accounting office.** It can export everything (data + original images) at any time. If the subscription ends, data is kept for 12 months in read-only mode, then deleted after a warning by email. Keeping documents for the legally required period is still the office's responsibility.
11. **Cancelling stops the next payment.** The account stays active until the end of the paid month. No refunds for partial months.
12. **Upload links can be reset.** If a business link is shared by mistake, the accountant resets it and the old link stops working immediately.

---

## What version 1 will NOT do
- No **native iOS/Android app**: the business uploads through a mobile web link; the accountant uses a web browser.
- No **direct integration (API) with accounting programs**: v1 exports Excel/CSV files that the program imports.
- No **WhatsApp or email-forward upload** yet: that's version 2.
- No **bookkeeping itself**: no chart of accounts, no automatic posting to accounts, no VAT returns. The accountant still does the accounting.
- No **line items** (each product on the invoice): v1 reads header totals and VAT only.
- No **bank statements**.
- No **e-invoice XML import** yet: planned for when North Macedonia's e-invoicing becomes mandatory.
- No **payments to suppliers**.
- No **languages other than Albanian, Macedonian and English** for the interface.
