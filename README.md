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
- **Visuals**: Framer-style interactive components & custom glassmorphism

## 📦 Getting Started

1. **Environment Setup**:
   Copy `.env.example` to `.env.local` and fill in your Firebase credentials.
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   GOOGLE_GENAI_API_KEY=your_gemini_key
   ```

2. **Installation**:
   ```bash
   npm install
   ```

3. **Local Development**:
   ```bash
   npm run dev
   ```

## 🌐 Publishing to Production

This app is optimized for **Firebase App Hosting**.

### 1. Connect to GitHub
Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial production-ready commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy with Firebase
Go to the [Firebase Console](https://console.firebase.google.com/), select your project, and navigate to **App Hosting**.
- Click "Get Started" and connect your GitHub repo.
- Firebase will automatically detect the Next.js framework and build settings.
- Add your secret environment variables (like API keys) in the Firebase console settings for the backend.

## 📝 License
&copy; NETALA SRIHARSHA. All rights reserved.
