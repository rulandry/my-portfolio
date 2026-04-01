# Landry Portfolio

Welcome to my personal portfolio project! This website showcases my background, projects, technical skills, and professional interests in Azure support, Microsoft 365, cloud technologies, identity management, and security-focused growth.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and a **FastAPI** backend, the portfolio is more than a static site - it includes a live contact form, theme switching, interactive skill explanations, and responsive design for desktop and mobile users.

## Live Project

- **Frontend:** https://ruglan.vercel.app

---

# Features

This portfolio includes both a polished frontend and a working backend integration.

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Light & Dark Mode**: Theme toggle for better user experience
- **Interactive Skills Section**: Clickable skills with centered modal explanations
- **Project Showcase**: Featured personal projects with descriptions and technologies used
- **Live Contact Form**: Connected to a FastAPI backend and Gmail delivery
- **Phone QR Contact**: Scan-to-call modal for mobile convenience
- **Accessible Footer Tooltips**: Hover and keyboard-focus labels for footer icons
- **Modern UI**: Clean layout with a strong purple/dark visual identity
- **Backend API Integration**: FastAPI-powered contact handling with validation and spam protection

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
- **About Me**: Overview of my background and career direction
- **Skills**: Interactive skill list with explanations in a modal
- **Experience**: Work experience and technical focus areas
- **Projects**: Featured projects including Personal Vault App and LoanLux
- **Contact**: Working contact form, email link, CV download, phone QR, GitHub, and LinkedIn

---

# Featured Projects

## Personal Vault App

Personal Vault App is a tenant-aware secure workspace built to give each user group its own isolated environment for managing sensitive files and records. It includes secure authentication, MFA, encrypted text and file storage, folder organization, role-based admin controls, audit logging, and recycle-bin retention to support stronger privacy, visibility, and control.

## LoanLux

LoanLux is a secure loan management application built to help users track loans, record payments, monitor upcoming due dates, and keep a clearer view of repayment progress in one place. It includes private account access, optional MFA, exportable loan and payment records, activity history, deleted-item recovery, and admin oversight features for more organized and auditable financial tracking.

---

# Contact Form Notes

The contact form is fully implemented in the frontend and connected to backend logic prepared for email delivery.

At the moment, direct form-to-email sending is temporarily unavailable on the current free hosting setup because of outbound email restrictions on the backend hosting provider.

As a temporary solution, the site displays a notice encouraging visitors to contact me directly by email or phone. The original backend submission logic is still preserved in the codebase and can be re-enabled later.

## Disclaimer

This project is intended for **learning, demonstration, and portfolio purposes**.
Do not use it to store highly sensitive real-world secrets in production without additional security hardening, testing, and infrastructure controls.

