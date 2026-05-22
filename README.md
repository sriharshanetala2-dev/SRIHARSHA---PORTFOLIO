# NETALA SRIHARSHA | Professional Portfolio

A high-performance, AI-integrated portfolio showcasing expertise in Java Full Stack Engineering and Generative AI.

## 🚀 Features
- **AI Brand Engine**: A sophisticated Genkit-powered tool that architects project identities (tech stacks + visual marks) from user blueprints.
- **Enterprise Student Dashboard**: A simulated environment demonstrating complex data visualization and management using ShadCN UI and Recharts.
- **Dynamic Projects**: Interactive showcase of Java, AI, and Network Engineering innovations.
- **Firebase Core**: Integrated with Firestore for real-time contact management and persistence.

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, ShadCN UI, Lucide Icons
- **Database**: Firebase Firestore
- **AI Engine**: Google Genkit (Gemini 2.5 Flash & Imagen 4.0)

## 🌐 Free Deployment Guide

You can host this portfolio for free using one of the following methods:

### Option 1: Firebase App Hosting (Recommended)
Firebase App Hosting is optimized for Next.js and offers a generous free tier.
1. **Push to GitHub**: Create a repository and push your code.
2. **Firebase Console**: Go to [Firebase Console](https://console.firebase.google.com/), select your project.
3. **App Hosting**: Click "App Hosting" in the sidebar and click "Get Started".
4. **Connect GitHub**: Connect your account and select this repository.
5. **Configure**: Firebase will automatically detect Next.js. Use the default settings.
6. **Secrets**: In the "Settings" tab of your backend, add your environment variables (`GOOGLE_GENAI_API_KEY`, etc.) as Secrets.

### Option 2: Vercel (Fastest for Next.js)
Vercel is the creator of Next.js and provides an excellent free tier for personal portfolios.
1. **Push to GitHub**: Ensure your code is in a public or private GitHub repo.
2. **Import Project**: Go to [Vercel](https://vercel.com/new) and import your repository.
3. **Environment Variables**: Add your `NEXT_PUBLIC_FIREBASE_*` variables and your `GOOGLE_GENAI_API_KEY` in the project settings.
4. **Deploy**: Click "Deploy" and your site will be live in seconds.

## 📦 Local Development

1. **Environment Setup**:
   Copy `.env.example` to `.env` and fill in your Firebase credentials.
2. **Installation**:
   ```bash
   npm install
   ```
3. **Run**:
   ```bash
   npm run dev
   ```

## 📝 License
&copy; NETALA SRIHARSHA. All rights reserved.
