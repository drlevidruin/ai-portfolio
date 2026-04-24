# AI Inside a Small School

A portfolio of the AI tools built at Pardes Day School this year. Designed to be shared with other principals, founders, and leaders who want to see what is possible.

**Everything in here is synthetic.** Every student, parent, family, teacher, staff member, schedule, payroll line, incident, observation note, PTO request, dispute, and account in any of the demos is invented for the demo. No real Pardes records, names, contact info, or systems are connected. The only real names you will see are mine and the public school contact email. The student roster uses Hebrew-letter first names (Alef, Bet, Gimmel...) to make this obvious. Staff names are placeholder names invented to make the UI feel real and may share a surname with real people by coincidence; they are not real records. You can hand the link to anyone with zero privacy risk.

The five demos do not call any external APIs and do not write back to any real Pardes system. Anything a viewer types, books, approves, denies, or edits lives in the page's memory only and resets when the page is closed.

---

## What is in this folder

```
ai-portfolio/
├── index.html              Single-page landing with the demo grid
├── README.md               This file
├── HOW-TO-SHARE.md         How to put this online or hand it to someone
├── demos/                  5 working demos anyone can click through
│   ├── sis-dashboard/      K-5 student information system
│   ├── reflect-survey/     Leadership 360 survey + sample report
│   ├── ptc-scheduling/     Parent-teacher conference booking flow
│   ├── whatsapp-bot/       Simulated school WhatsApp bot with Claude routing
│   └── kriah-coach/        Hebrew reading tracker prototype
└── assets/
    ├── pardes-logo.png     School logo used across the demos
    ├── css/deck.css        Landing page stylesheet
    ├── og-image.png/svg    Social link preview card
    └── favicon.svg         Browser tab icon
```

---

## How to preview it on your laptop

Double-click `index.html`. The landing page opens in your browser with a 3-by-2 grid of demo cards above the fold. Click any card to open that demo in a new page. Each demo has a "Back to portfolio" pill in the top-left corner.

Below the demo grid, the landing page also has: the math story that started everything, an architecture diagram, a list of classroom modules inside the SIS, a Reflect feature panel, an artifact gallery (currently all marked "On request"), and a "what's next" section.

---

## What each demo shows

**1. Pardes SIS** (`demos/sis-dashboard/`)
A fake K-5 student information system. Sign in as Admin, Teacher, or HR Admin (the role switcher lives on the login screen). Each role sees a different sidebar. Routes include: Dashboard with stat cards and Ask-the-SIS, Students directory with profile tabs, Staff Directory (HR only), Staff Clock with edit override, My Clock with disputes (teacher), Attendance with editable grade rows, Payroll (HR only) with sortable table and CSV stub, PTO with calendar grid and approve/deny, Incidents with file/resolve flow, Accounts (admin) with create/reset/toggle, Academics, Resources, Settings.

**2. Reflect** (`demos/reflect-survey/`)
The leadership 360 survey app. Pick a stakeholder (Teacher / Parent / Supervisor / Self), take the full question set with the real wording from the Reflect item bank, and at the end land on a sample report with overall score, domain table, Johari gap analysis, and Keep / Start / Stop action plan. There is also an admin dashboard with Overview, Tokens, Results, and Export tabs.

**3. Parent-Teacher Conferences** (`demos/ptc-scheduling/`)
The PTC booking flow with three views accessible from demo shortcuts on the login screen: parent (the Cohen family with three kids across grades 1, 3, 5), teacher (Mrs. Levi's MY CONFERENCES list), and admin (stats grid + grouped bookings). Slot picker offers five days of availability with greyed-out taken slots; confirmation panel includes the optional in-person request and note.

**4. WhatsApp Bot** (`demos/whatsapp-bot/`)
A phone mockup showing the staff WhatsApp flow. Type a request or click one of five canned scenarios (PTO happy path, PTO with follow-up, supply request, multi-day PTO, off-topic). The page runs a JavaScript keyword classifier that mirrors the real Claude prompt's output schema and shows the JSON in a side console. A routing log shows how the request would flow through Cloudflare Worker, Apps Script, Claude Haiku, and either the SIS API or the supply sheet plus office email.

**5. Kriah Coach** (`demos/kriah-coach/`)
A prototype concept for tracking Hebrew reading fluency per child. Pick from 10 students, see their progression milestones, fluency line chart, 22-letter mastery grid with click-to-expand letter detail, AI insight, teacher log, draft parent communication, and a class-wide letter heatmap. Clearly labeled as a prototype.

---

## What is on the landing page

A single vertical scroll. Above the fold: a compact header and a 3-by-2 grid of clickable demo tiles (the five apps plus the school website rebuild). Below the fold, in order: the budget-wisdom math story, the architecture diagram, the classroom modules grid, the Reflect feature panel, the artifact gallery (six cards, all marked "On request" by design), the "what's next" cards, and the footer.

---

## Three things worth knowing

1. **Nothing in the portfolio talks to a real system.** Classification, AI summaries, the Reflect report, and every form action are pattern-matched or pre-written in the page. There is no API key anywhere in the source. Safe to host publicly.

2. **Every link stays inside the portfolio.** The demo tiles open the interactive demos in this folder. The website tile links to the GitHub Pages copy of the school website (`drlevidruin.github.io/pardes-website`), not the live site. The artifact cards are intentionally non-interactive ("On request") so nothing on the site has to host or version-control PDFs.

3. **The design uses Pardes brand colors.** Forest green, navy, cream. Montserrat for body, Caveat for handwritten section labels, with each demo also pulling in whatever its real-app fonts are (DM Sans for the SIS, DM Serif Display + Source Sans for Reflect, Frank Ruhl Libre for Hebrew in Kriah Coach).

---

## Sharing it

See `HOW-TO-SHARE.md`.

---

## Credits

Built by Principal Rabbi Dr. Levi Druin at Pardes Day School, Miami Beach.

The real versions of these tools run daily at Pardes. The demos in this portfolio are safe-data simulations for sharing with people who want to see what is possible.

Questions: office@pardesdayschool.org
