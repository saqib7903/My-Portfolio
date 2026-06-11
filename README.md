# Mohd Saqib — Portfolio

Personal developer portfolio built with React + Vite. Dark theme, custom cursor, animated hero, and EmailJS contact form that sends messages directly to your Gmail.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📧 EmailJS Setup (Contact Form → Your Gmail)

Follow these steps so form submissions arrive in your inbox.

### Step 1 — Create a free EmailJS account
Go to https://www.emailjs.com and sign up (free tier allows 200 emails/month).

### Step 2 — Add a Gmail service
1. In the EmailJS dashboard, go to **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** and sign in with `saqib08011@gmail.com`
4. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Step 3 — Create an email template
1. Go to **Email Templates** → **Create New Template**
2. Set the template body like this:

```
From: {{name}} ({{email}})

{{message}}
```

3. Set **To Email** to `saqib08011@gmail.com`
4. Set **Subject** to: `New Portfolio Contact from {{name}}`
5. Save and copy the **Template ID** (looks like `template_xxxxxxx`)

### Step 4 — Get your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5 — Paste credentials into the code

Open `src/sections/Contact.jsx` and replace these 3 lines at the top:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'     // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'   // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'      // e.g. 'abcDEF123ghiJKL'
```

That's it — the form will now send emails directly to your Gmail.

## 🌐 Deployment (Vercel — recommended)

```bash
npm run build
```

Then:
1. Push to GitHub
2. Go to https://vercel.com → Import your repo
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy ✓

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Footer.jsx / .css
│   └── Cursor.jsx / .css
├── sections/
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Skills.jsx / .css
│   └── Contact.jsx / .css
├── App.jsx / .css
├── index.css
└── main.jsx
```

## 🛠 Tech Stack

- React 18 + Vite
- Plain CSS (no framework — full control)
- EmailJS (contact form)
- Google Fonts: Syne, Space Grotesk, JetBrains Mono
