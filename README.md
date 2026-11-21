# Landry Portfolio

Welcome to my personal portfolio project. This website showcases my background, projects, technical skills, professional experience, certificates, and interests in Azure support, Microsoft 365, cloud technologies, identity management, and cybersecurity.

Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, the portfolio includes responsive UI, theme switching, interactive skills, sliding experience and certificate sections, certificate image previews, and contact options for visitors. A separate **FastAPI** contact API is retained in the repository; the live contact form currently shows an availability notice instead of submitting to it.

## Live Portfolio

- **Website:** [ruglan.vercel.app](https://ruglan.vercel.app)
- **Repository:** [rulandry/my-portfolio](https://github.com/rulandry/my-portfolio)

---

## Features

The portfolio combines a responsive frontend with interactive sections and direct contact options.

- **Responsive Design**: Optimized for desktop, tablet, mobile, and touch-enabled devices
- **Light and Dark Mode**: Theme selection persists across navigation and refreshes; dialogs, previews, notices, and other interactive surfaces use the active theme
- **Interactive Skills Section**: Skills displayed in a horizontal carousel with clickable modal explanations
- **Sliding Experience Section**: Experience cards displayed in a single-row carousel with touch, mouse drag, and arrow navigation
- **Certificates and Badges**: Certificate carousel with local images, modal previews, keyboard close support, and mobile-friendly interaction
- **Project Showcase**: Personal Vault App and LoanLux remain featured with detailed previews and migration notices while their live applications may be unavailable
- **Contact Options**: Email link, CV download, phone QR modal, GitHub, and LinkedIn links
- **Accessible Tooltips**: Hover and keyboard-focus labels for icon-based navigation and footer actions
- **Contact API Code**: FastAPI contact validation and email-delivery logic are retained, but the live form does not currently call the API
- **Theme-Aware UI**: Shared theme variables keep cards, forms, tooltips, and overlays consistent with the selected appearance

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- next-themes
- qrcode.react

### Backend

- FastAPI
- Python
- Uvicorn
- Pydantic
- SQLAlchemy
- Python Dotenv

## Deployment

- **Frontend:** Vercel, serving [ruglan.vercel.app](https://ruglan.vercel.app)
- **Source repository:** `rulandry/my-portfolio`, production branch `main`
- **Latest verified production source:** `90ff7e43a41126ba2852ef725dd67b8b60d9bf23`
- **Production restoration:** Deployed through the Vercel CLI on November 21, 2026

Automatic GitHub-to-Vercel deployment triggering is still under investigation. The backend source is present in `backend/`, but its current hosting status has not been verified.

---

## Main Sections

The portfolio currently includes:

- **Hero Section**: Introduction, animated typing effect, and profile image
- **About Me**: Overview of my background, focus areas, and career direction
- **Skills**: Interactive skill carousel with detailed modal explanations
- **Experience**: Technical experience cards in a horizontal carousel
- **Certificates and Badges**: Certificate carousel with clickable image previews
- **Projects**: Featured projects including Personal Vault App and LoanLux
- **Contact**: Contact form notice, email link, CV download, phone QR, GitHub, and LinkedIn

---

## Run Locally

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd run dev
```

Open the app locally:

```text
http://localhost:3000
```

Run the available checks from the repository root:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd test
npm.cmd run build
```

TypeScript checking uses the installed compiler directly; there is no separate `type-check` script. The `npm.cmd` form works in Windows PowerShell if PowerShell blocks the `npm` script shim.

## Project Structure

- `app/`: Next.js homepage, layout, global styles, and UI components
- `public/`: Images, project screenshots, logo, and CV PDF
- `backend/`: FastAPI contact API source and Python requirements
- `tests/`: Automated theme contrast checks

---

## Featured Projects

### Personal Vault App

Personal Vault App is a tenant-aware secure workspace built to give each user group its own isolated environment for managing sensitive files and records. It includes secure authentication, MFA, encrypted text and file storage, folder organization, role-based admin controls, audit logging, and recycle-bin retention to support stronger privacy, visibility, and control.

### LoanLux

LoanLux is a secure loan management application built to help users track loans, record payments, monitor upcoming due dates, and keep a clearer view of repayment progress in one place. It includes private account access, optional MFA, exportable loan and payment records, activity history, deleted-item recovery, and admin oversight features for more organized and auditable financial tracking.

Both projects are undergoing migration and their live applications may temporarily be unavailable. Visitors can select **View Project** to read each project's details. Selecting **Open Live Project** displays a **Project Under Migration** notice with only a **Cancel** button; navigation to the unavailable deployments is disabled.

---

## Contact Form Notes

The frontend form currently shows a notice that direct messaging is unavailable instead of sending a request. The FastAPI contact endpoint and email-delivery code remain in the repository for future use; their live operation is not confirmed.

The live site provides direct email and phone contact options so visitors can still reach me reliably.

---

## Disclaimer

This project is part of my **professional portfolio** and reflects practical work in frontend development, backend integration, UI design, cloud support, identity, and security-conscious application building.

It is suitable for showcasing real skills and project experience, but any production use involving sensitive workloads should include additional security hardening, testing, monitoring, and infrastructure review.
