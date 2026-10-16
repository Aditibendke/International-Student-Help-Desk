# International Student Help Desk

A beginner-friendly web application that helps international students with
admissions, visa guidance, accommodation, campus life, daily life, and FAQs.

Built as a college project using **pure HTML, CSS, and JavaScript** —
no frameworks, no build tools, no paid APIs.

---

## Project Files

| File | What it does |
|------|-------------|
| `index.html` | The main web page — contains the hero header, navigation tabs, chatbot section, and category section placeholders. Open this file in a browser to run the app. |
| `style.css` | All visual styling — blue-and-white colour scheme, responsive layout for both mobile and desktop. |
| `categories.js` | All content for the six topic areas (Admissions, Visa, Accommodation, Campus Life, Daily Life, FAQs) stored as JavaScript data. Also builds the accordion panels on the page. |
| `chatbot.js` | Rule-based chatbot with built-in keyword matching. Contains sample questions and answers across all six topics. No external API needed. |
| `app.js` | Wires everything together — initialises the chatbot, builds the category panels, and handles tab switching. |
| `README.md` | This file — explains the project and how to run it. |

---

## Requirements

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- **No installation required** — the app runs entirely in the browser.

---

## How to Run the Application

### Option A — Open directly (simplest, recommended)

1. Download or clone this project folder to your computer.
2. Open the project folder in your file explorer.
3. Double-click **`index.html`**.
4. The application opens in your default web browser. Done!

### Option B — Use a local development server (optional, for a better experience)

If you have **Node.js** installed (check by running `node --version` in a terminal):

```bash
# Navigate to the project folder
cd "path/to/international-student-help-desk"

# Start a simple local server
npx serve .
```

Then open `http://localhost:3000` in your browser.

Alternatively, if you have **Python** installed:

```bash
# Python 3
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### Option C — Use VS Code Live Server

1. Open the project folder in [VS Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` in the file explorer panel.
4. Select **"Open with Live Server"**.
5. The app opens automatically in your browser with auto-reload on save.

---

## How to Test the Application

### Manual testing checklist

**Welcome / Home tab**
- [ ] The page loads with the blue hero header and project name.
- [ ] All six category cards (Admissions, Visa, Accommodation, Campus Life, Daily Life, FAQs) are visible.
- [ ] Clicking a category card switches to the correct tab.

**Navigation tabs**
- [ ] All eight tabs are visible: Home, Chatbot, Admissions, Visa Guidance, Accommodation, Campus Life, Daily Life, FAQs.
- [ ] Clicking each tab shows the correct content and highlights the active tab.

**Chatbot**
- [ ] The chatbot tab shows a welcome message from the bot.
- [ ] Suggestion chips are displayed below the welcome message.
- [ ] Clicking a suggestion chip sends the question and shows a response.
- [ ] Typing a custom question and pressing Enter or clicking **Send** shows a response.
- [ ] The chat window scrolls to show the latest message.

**Sample questions to test in the chatbot**

| Type this… | Expected response topic |
|------------|------------------------|
| `hello` | Greeting |
| `How do I apply to a university?` | Admissions process |
| `What documents do I need for a visa?` | Visa documents |
| `Where can I stay on campus?` | Accommodation |
| `How do I open a bank account?` | Daily life — banking |
| `Can I work while studying?` | Visa work conditions |
| `I feel homesick` | Well-being / making friends |
| `What clubs can I join?` | Campus life |
| `How do I get a SIM card?` | Daily life — mobile |
| `banana bread recipe` | Fallback / unknown response |

**Category accordion panels**
- [ ] Each category tab (Admissions, Visa, etc.) shows a list of collapsible sections.
- [ ] Clicking a section heading opens it and shows the content.
- [ ] Clicking it again closes it.

**Responsive layout**
- [ ] On a narrow screen (or with browser DevTools in mobile view), the navigation tabs scroll horizontally.
- [ ] Category cards stack into one or two columns on mobile.
- [ ] The chatbot is fully usable on mobile.

---

## Technology Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Structure | HTML5 | Standard, runs in every browser |
| Styling | CSS3 | No library needed; custom responsive design |
| Logic | Vanilla JavaScript | No framework needed for this scale |
| Server | None (or optional `npx serve`) | Files are static |
| API | None | All chatbot responses are built-in |

---

## Important Notes

- This application provides **general guidance only**.
- Visa rules, immigration policies, application deadlines, and university-specific details change frequently. Always verify with:
  - The **official website** of the university you are applying to.
  - The **official immigration authority** of the country where you plan to study.
  - Your university's **International Student Office**.
- No official immigration rules, specific university policies, deadlines, or contact details have been invented in this application.

---

## Extending the Project (ideas for future versions)

- Add a live AI chatbot using a free-tier API (ask before adding)
- Connect to a real university database of programmes
- Add a user registration / login system
- Support multiple languages
- Add a document checklist that students can tick off

---

*International Student Help Desk — College Project*
