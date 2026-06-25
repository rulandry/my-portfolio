# Landry Portfolio

Welcome to my personal portfolio project. This website showcases my background, projects, technical skills, professional experience, certificates, and interests in Azure support, Microsoft 365, cloud technologies, identity management, and cybersecurity.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and a **FastAPI** backend, the portfolio includes responsive UI, theme switching, interactive skills, sliding experience and certificate sections, certificate image previews, and contact options for visitors.

## Live Project

- **Frontend:** https://ruglan.vercel.app

---

# Features

This portfolio combines a polished frontend with backend contact-form logic and interactive portfolio sections.

- **Responsive Design**: Optimized for desktop, tablet, mobile, and touch-enabled devices
- **Light & Dark Mode**: Theme toggle for a flexible viewing experience
- **Interactive Skills Section**: Skills displayed in a horizontal carousel with clickable modal explanations
- **Sliding Experience Section**: Experience cards displayed in a single-row carousel with touch, mouse drag, and arrow navigation
- **Certificates and Badges**: Certificate carousel with local images, modal previews, keyboard close support, and mobile-friendly interaction
- **Project Showcase**: Featured personal projects with descriptions and technologies used
- **Contact Options**: Email link, CV download, phone QR modal, GitHub, and LinkedIn links
- **Accessible Tooltips**: Hover and keyboard-focus labels for icon-based navigation and footer actions
- **Backend API Integration**: FastAPI-powered contact handling with validation and preserved email-delivery logic
- **Modern UI**: Clean, responsive interface using the existing design system and theme variables

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- next-themes
- qrcode.react

## Backend

- FastAPI
- Python
- Uvicorn
- Pydantic
- Python Dotenv

## Deployment

- Vercel (Frontend)
- Render (Backend)

---

# Main Sections

The portfolio currently includes:

- **Hero Section**: Introduction, animated typing effect, and profile image
- **About Me**: Overview of my background, focus areas, and career direction
- **Skills**: Interactive skill carousel with detailed modal explanations
- **Experience**: Technical experience cards in a horizontal carousel
- **Certificates and Badges**: Certificate carousel with clickable image previews
- **Projects**: Featured projects including Personal Vault App and LoanLux
- **Contact**: Contact form notice, email link, CV download, phone QR, GitHub, and LinkedIn

---

# Run Locally

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

If PowerShell blocks `npm`, use `npm.cmd` as shown above.

---

# Featured Projects

## Personal Vault App

Personal Vault App is a tenant-aware secure workspace built to give each user group its own isolated environment for managing sensitive files and records. It includes secure authentication, MFA, encrypted text and file storage, folder organization, role-based admin controls, audit logging, and recycle-bin retention to support stronger privacy, visibility, and control.

## LoanLux

LoanLux is a secure loan management application built to help users track loans, record payments, monitor upcoming due dates, and keep a clearer view of repayment progress in one place. It includes private account access, optional MFA, exportable loan and payment records, activity history, deleted-item recovery, and admin oversight features for more organized and auditable financial tracking.

---

# Contact Form Notes

The contact form frontend and backend logic are preserved in the project. Direct form-to-email delivery may be limited on the current free hosting setup because of outbound email restrictions from the backend host.

The live site provides direct email and phone contact options so visitors can still reach me reliably.

---

# Disclaimer

This project is part of my **professional portfolio** and reflects practical work in frontend development, backend integration, UI design, cloud support, identity, and security-conscious application building.

It is suitable for showcasing real skills and project experience, but any production use involving sensitive workloads should include additional security hardening, testing, monitoring, and infrastructure review.
