# The Way Back Resources Site

This is a deploy-ready Vite + React site for the companion resources page for *The Way Back*.

## What is included

- React/Vite website
- Free resource download cards
- Companion Kit email signup placeholder
- Join the Brotherhood section
- PDF downloads in `public/downloads/`

## Local setup

1. Install Node.js.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

The site will open locally at the URL shown in your terminal.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Create a GitHub account if needed.
2. Create a new GitHub repository.
3. Upload these files to the repository.
4. Go to Vercel and choose "Add New Project".
5. Import the GitHub repository.
6. Vercel should detect Vite automatically.
7. Click Deploy.

## Important placeholders to replace

### Email form

The current form shows an alert. Replace `handleSubmit` in `src/App.jsx` with your MailerLite embedded form or form action.

### Brotherhood button

The Join the Brotherhood button currently links to `#`. Replace it with your Discord, waitlist, payment, or Brotherhood page URL.

### Legal links

Add Privacy Policy, Terms, Disclaimer, and Contact links in the footer before launch.

## Suggested KDP link wording

Free Companion Resources  
Printable worksheets and companion materials for *The Way Back* are available at:  
`https://yourdomain.com/resources`
