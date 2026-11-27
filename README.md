# Iesh Punde — Personal Portfolio

A responsive, single-page personal website. It uses plain HTML, CSS, and JavaScript with a tiny Node.js server—no framework, database, or third-party npm packages are required.

## Run locally

1. Install Node.js (version 18 or newer).
2. Open Terminal / PowerShell in this project folder.
3. Run:

   ```bash
   npm start
   ```

   Or run `node server.js` directly.

4. Open **http://localhost:3000** in your browser.
5. To stop the server, return to the terminal and press `Ctrl + C`.

## Update your profile

Edit `profile.js`. It contains the main profile details, employment history, work highlights, and skills. Replace the placeholder email, LinkedIn, and GitHub URLs before sharing the site publicly.

To add your resume, copy its PDF into this project folder and set `resumePath` in `profile.js` to its filename, for example `/iesh-punde-resume.pdf`.

## Project files

- `index.html` — page structure
- `styles.css` — visual design and responsive layout
- `script.js` — renders profile sections and handles the mobile navigation
- `profile.js` — editable profile content
- `server.js` — local Node.js web server

## Important

The page is a static front end; it does not collect or store visitor data. Review role dates, metrics, and descriptions in `profile.js` before publishing it.
