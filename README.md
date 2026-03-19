# Willed Company Limited — Website

> **"Seeing further, delivering better."**  
> Edwin William Otieno · Managing Director & Founder · Nairobi, Kenya · Est. 2026

---

## 📁 Project Structure

```
willed-co/
├── index.html                  ← Homepage
├── css/
│   └── style.css               ← All styles (shared across every page)
├── js/
│   ├── shell.js                ← Auto-injects nav + footer on every page
│   └── app.js                  ← Scroll animations, interactions
└── pages/
    ├── about.html              ← About Us — story, values, team
    ├── services.html           ← Services — both divisions + pricing
    ├── market.html             ← Market — opportunity, SWOT, segments
    ├── partnership.html        ← Partnership — ownership, profiles, agreement
    ├── financials.html         ← Financials — costs, projections, cost structure
    ├── roadmap.html            ← Roadmap — 3-phase plan + milestone table
    └── contact.html            ← Contact — form for partners & clients
```

---

## 🚀 Publishing on GitHub Pages — Step by Step

### Step 1: Create a New Repository

1. Go to **https://github.com** and sign in
2. Click the **＋** button (top right) → **New repository**
3. Repository name: `willed-company` (or anything you like)
4. Set visibility to **Public** ✅ *(required for free GitHub Pages)*
5. Do **NOT** tick "Add a README file" (you already have one)
6. Click **Create repository**

---

### Step 2: Upload Your Files

**Easiest method — drag and drop on GitHub.com:**

1. Inside your new empty repository, click **"uploading an existing file"** (shown on the empty repo page)
2. Open your `willed-co/` folder on your computer
3. Select **ALL files and folders** inside it (`index.html`, `css/`, `js/`, `pages/`, `README.md`)
4. Drag them all into the GitHub upload area
5. Scroll down, write a commit message: `"Launch Willed Company website"`
6. Click **Commit changes**

> ⚠️ Make sure the folder structure is preserved — `css/style.css` must stay inside a `css/` folder, and `pages/` must stay as a folder.

---

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings** (top menu bar)
2. In the left sidebar, scroll to and click **Pages**
3. Under **"Source"**, select: **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Click **Save**
6. Wait 1–3 minutes

✅ Your site is now live at:
```
https://YOUR-GITHUB-USERNAME.github.io/willed-company/
```

---

## 🌐 Your 7 Live Pages

| Page | Purpose |
|------|---------|
| `/index.html` | Homepage — hero, about, services, market, partnership preview, CTA |
| `/pages/about.html` | Full company story, mission, values, founding team |
| `/pages/services.html` | Both divisions in detail + advisory pricing |
| `/pages/market.html` | Market opportunity, drivers, segments, SWOT |
| `/pages/partnership.html` | Ownership table, partner profiles, 7 agreement principles |
| `/pages/financials.html` | Startup costs, 3-year projections, cost structure |
| `/pages/roadmap.html` | 3-phase growth plan + full milestone table |
| `/pages/contact.html` | Contact form for partners, clients & suppliers |

---

## ✏️ Personalise Before Sharing

Search and replace these placeholders:

| Find | Replace With |
|------|-------------|
| `[Partner Name]` | Your partner's actual name |
| `+254 7XX XXX XXX` | Your actual phone number |
| `your@email.com` | Your actual email |

You can do this with **Ctrl+F → Replace All** in any text editor (Notepad, VS Code, etc.)

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Primary colour | Navy `#0C1A28` |
| Accent colour | Gold `#C9A84C` |
| Background | Cream `#F8F5EF` |
| Heading font | Playfair Display (serif) |
| Body font | DM Sans (sans-serif) |
| Quote font | Cormorant Garamond |

---

## 💡 How the Nav & Footer Work

The `js/shell.js` file automatically injects the navigation bar and footer into every page. This means:
- **You only update nav/footer in ONE place** (`js/shell.js`) and it updates everywhere
- If you add a new page, just add a link to `shell.js` and it appears on all pages

---

*© 2026 Willed Company Limited · Nairobi, Kenya*  
*Confidential — For Authorised Parties Only*
