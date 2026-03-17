# Landry Portfolio

Welcome to my personal portfolio project! This website showcases my background, projects, technical skills, and professional interests in Azure support, Microsoft 365, cloud technologies, identity management, and security-focused growth.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and a **FastAPI** backend, the portfolio is more than a static site — it includes a live contact form, theme switching, interactive skill explanations, and responsive design for desktop and mobile users.

## Live Project

- **Frontend:** https://my-portfolio-opal-ten-76.vercel.app
- **Backend API:** https://my-portfolio-api-nq3c.onrender.com
- **Health Check:** https://my-portfolio-api-nq3c.onrender.com/api/health

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
- **Projects**: Featured projects including Personal Vault App and Loan Tracker App
- **Contact**: Working contact form, email link, CV download, phone QR, GitHub, and LinkedIn

---

# Contact Form Notes

The contact form is fully implemented in the frontend and connected to backend logic prepared for email delivery.

At the moment, direct form-to-email sending is temporarily unavailable on the current free hosting setup because of outbound email restrictions on the backend hosting provider.

As a temporary solution, the site displays a notice encouraging visitors to contact me directly by email or phone. The original backend submission logic is still preserved in the codebase and can be re-enabled later.

# Development

## Clone the project

```bash
git clone https://github.com/rulandry/my-portfolio.git
cd my-portfolio