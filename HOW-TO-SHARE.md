# How to share this portfolio

Three options, from easiest to most polished. Pick the one that fits how your viewer will see it.

---

## Option 1 (recommended): Put it online with a real URL

This gives your viewer a link like `https://drlevidruin.github.io/ai-portfolio/` that they can text, email, or share with anyone. It is free, takes about 5 minutes, and looks serious.

### Step-by-step

1. **Open GitHub in your browser.** Sign in at [github.com](https://github.com) with the account you already use (`drlevidruin`).

2. **Create a new repository.** In the top-right, click the + icon, then "New repository."
   - Repository name: `ai-portfolio` (recommended, because the social preview links inside the HTML already use this name)
   - Description: `A working portfolio of AI tools built for a small school`
   - Visibility: **Public** (required for free GitHub Pages)
   - Do NOT check "Add a README" (we already have one)
   - Click **Create repository**

   > If you pick a different name, open `index.html` in any text editor and find the two lines near the top that say `drlevidruin.github.io/ai-portfolio/`. Replace `ai-portfolio` with your actual repo name so link previews in iMessage and Slack render correctly.

3. **Upload the folder.** On the empty repository page, click the "uploading an existing file" link near the middle. Then:
   - Open Finder on your Mac.
   - Open `~/Desktop/pardes-ai-portfolio/`.
   - Select ALL the contents of that folder (command + A). Drag them into the GitHub browser window.
   - Wait for the upload to finish (a minute or two for the three PDFs).
   - Scroll down. Commit message: "Initial portfolio upload."
   - Click **Commit changes**.

4. **Turn on GitHub Pages.** In your new repo, click **Settings** (top right), then **Pages** (left sidebar).
   - Under "Source," pick `Deploy from a branch`.
   - Branch: `main`, folder: `/ (root)`.
   - Click **Save**.

5. **Wait 1-2 minutes**, then refresh the Pages settings screen. You will see: "Your site is live at `https://drlevidruin.github.io/ai-portfolio/`." That is your URL.

6. **Test it.** Open the URL in a new tab or text it to yourself. Click through the slides. Open a demo. Confirm it all works.

7. **Share the URL.** That one link is everything you need to text, email, or post.

### Updating the site later

If you want to change any text, copy, or numbers: edit the file on your laptop, then re-upload that file in the GitHub web UI (`Add file > Upload files`). It will rebuild automatically in about 30 seconds. No command line needed.

### Optional: custom domain

If you want a fancier URL like `ai.pardesdayschool.org` you can add a custom domain in the same Pages settings screen. You would need to add a CNAME record with your DNS provider. Ask if you want step-by-step help with that.

---

## Option 2: Share as a Google Drive folder

Less polished than a URL, but works if your viewer cannot click a public URL.

### Step-by-step

1. **Zip the portfolio folder.** In Finder, right-click `pardes-ai-portfolio`, pick "Compress 'pardes-ai-portfolio'." You get a `pardes-ai-portfolio.zip` file.

2. **Upload to Google Drive.** Go to [drive.google.com](https://drive.google.com), drag the zip in. Wait for the upload.

3. **Share the folder.** Right-click the zip, click **Share**, set to "Anyone with the link can view," copy the link.

4. **Tell your viewer how to use it.** They download the zip, unzip it on their laptop, and double-click `index.html`. The demos will work locally. Some file-to-file links may be blocked on certain browsers opened from a zip.

**Watch out:** The Haggadah PDFs open in a new browser tab, which works when the portfolio is hosted at a URL but can behave differently when opened straight from a zip. Safari is the most reliable browser for the local-file case.

---

## Option 3: Email the zip

Simplest for one-off sharing.

1. Zip the folder as in Option 2.
2. The zip is about 5-10 MB, fine for email.
3. Attach to an email. Subject line idea: "What AI looks like in a small school."
4. In the body, tell them: "Unzip this and double-click index.html. Works in Safari or Chrome. No login needed."

---

## Before you share: final checklist

Run through this once so nothing embarrassing goes out.

- [ ] Open `index.html` locally. Page loads, scrolls, arrow keys work.
- [ ] Slide 3 has 5 demo cards. Click each one. Each demo opens and is clickable.
- [ ] On the SIS demo, click a student. AI summary and charts show. Ask a sample question.
- [ ] On the PTC demo, sign in, book a slot, confirm.
- [ ] On the Reflect demo, answer 5 questions, see the report.
- [ ] On the Kriah demo, click any student.
- [ ] On the WhatsApp demo, type a message and watch it get routed.
- [ ] The artifacts cards in the gallery slide open the PDFs.
- [ ] The "Back to portfolio" link in each demo works.

If any of the above breaks, text me or open the file in a different browser. Safari and Chrome are both tested; older versions of Firefox sometimes have CSS quirks.

---

## Changing the title or copy

The main title "AI Inside a Small School" is set in `index.html` near the top. You can change it by opening that file in any text editor (TextEdit works) and searching for `AI Inside a Small School`. Replace it with whatever you want. Same for the hero subtitle.

If you want me to change any copy or reorder anything, just ask.

---

## If something goes wrong

The whole portfolio is static HTML, CSS, and JavaScript. Nothing is running on a server, no database, no API keys. If a demo misbehaves, reload the page. If the main page misbehaves, make sure `assets/css/deck.css` and `assets/deck.js` are in their folders.

You can also always ask me to rebuild it.
