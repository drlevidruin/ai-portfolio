# AI Inside a Small School

A portfolio of everything I have built at Pardes with AI this year. Designed to be shared with other principals, founders, and leaders who want to see what is possible.

**The demos use fake data only.** No real student records, no real teacher observation notes, no real grades pulled from our actual systems. Student names are Hebrew-letter placeholders (Alef, Bet, Gimmel, etc). The only real names you will see in this portfolio are mine and the school's public contact info. You can hand this folder to anyone with zero privacy risk to students or staff.

---

## What is in this folder

```
pardes-ai-portfolio/
├── index.html              Main landing page, open this first
├── README.md               This file
├── HOW-TO-SHARE.md         Step-by-step guide for putting this online
├── demos/                  5 working demos anyone can click through
│   ├── whatsapp-bot/       Simulated school WhatsApp bot with Claude routing
│   ├── sis-dashboard/      Student information system with 10 fake students
│   ├── ptc-scheduling/     Parent-teacher conference booking flow
│   ├── reflect-survey/     Working leadership feedback survey + sample report
│   └── kriah-coach/        Hebrew reading tracker with 10 fake students
├── artifacts/              Safe-to-share PDFs
│   ├── 2nd-grade-haggadah-sample.pdf
│   ├── 5th-grade-haggadah-cheat-sheet.pdf
│   └── rosh-chodesh-dad-jokes.pdf
└── assets/
    ├── css/deck.css        Main stylesheet
    ├── deck.js             Keyboard + button navigation
    ├── og-image.svg        Social link preview card (1200x630)
    └── favicon.svg         Browser tab icon
```

---

## How to preview it on your laptop

Just double-click `index.html`. It opens in your browser. Use the arrow keys or the buttons at the bottom to move through the 13 slides. Click any card on the page to open the demo or the real project.

Every demo has a "Back to portfolio" link in its top-left corner so your viewer never gets lost.

---

## What each demo shows

**1. WhatsApp Bot** (`demos/whatsapp-bot/`)
The user types a message or taps a suggestion. The simulation shows Claude classifying the intent (time-off, supplies, absence, general question) and routing it to the right place. Running cost meter increments at $0.0017 per message, which is the real-life cost.

**2. SIS Dashboard** (`demos/sis-dashboard/`)
A fake 2nd grade class with 10 students. First names are the first ten Hebrew letters (Alef, Bet, Gimmel, Dalet, Hei, Vav, Zayin, Chet, Tet, Yud) paired with common placeholder last names (Cohen, Levi, Friedman, Goldberg, Shapiro, Stein, Rosen, Klein, Katz, Berg). Click any student and see a full record: AI-generated weekly summary, subject grades, kriah progress, attendance heatmap, Waggle math level, teacher observations, and the five "connected systems" that feed into the view. There is also an "Ask the SIS" box where visitors can type natural-language questions.

**3. PTC Scheduling** (`demos/ptc-scheduling/`)
A fake family with three kids across three grades. Seven teachers in total. Visitor signs in with any values, sees every teacher on one screen, books time slots, and gets a confirmation with calendar invites.

**4. Reflect Survey** (`demos/reflect-survey/`)
The full Reflect flow. Intro, five questions (three scale, two text), a "Claude is analyzing" processing screen, then an aggregated sample report with overall score, strength and growth areas, a radar chart across five leadership dimensions, and a theme cloud.

**5. Kriah Coach** (`demos/kriah-coach/`)
The same 10 students from the SIS, viewed through a Hebrew-reading lens. Click a student: see their current workbook level, letter-by-letter mastery grid (22 Hebrew letters with three statuses), weekly fluency chart, AI insight on what to do next, and teacher activity log.

---

## What is on the main landing page

13 slides, in order:

1. Hero with top-line stats
2. The Waggle math story that saved a teaching line
3. "Try the 5 demos" grid
4. Act 1 intro: Running the school smarter
5. The daily ops stack (5 apps)
6. Data architecture: how everything connects
7. Website showcase: pardesdayschool.org
8. Act 2 intro: Helping kids actually learn
9. Six classroom modules
10. Act 3 intro: The soul of the school
11. Artifact gallery
12. Reflect (standalone)
13. Closing with what is coming next

---

## Three things worth knowing

1. **Nothing in the portfolio makes real API calls.** Classification, AI summaries, and the Reflect report are all pattern-matched or pre-written. There is no API key anywhere in the source code. Safe to host publicly.

2. **Every link is real and stays within the portfolio.** The five main app cards on slide 5 open the interactive demos in this folder. The website card opens the GitHub Pages URL for the Pardes site rebuild. The artifact cards in the gallery open the PDFs in `artifacts/`. The classroom modules in Act 2 are informational cards (not all of them have demos yet).

3. **The design uses Pardes brand colors.** Forest green, navy, cream, dark forest. Montserrat for body, Caveat for handwritten section labels. Matches `pardesdayschool.org`.

---

## Sharing it

See `HOW-TO-SHARE.md` for three ways to get this into other people's hands, in increasing order of polish.

---

## Credits

Built by Principal Rabbi Dr. Levi Druin at Pardes Day School, Miami Beach.

The real versions of these tools run daily at Pardes. The demos in this portfolio are safe-data simulations for sharing with people who want to see what is possible.

Questions: office@pardesdayschool.org
