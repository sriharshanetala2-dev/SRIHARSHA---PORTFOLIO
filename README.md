# NETALA SRIHARSHA | Professional Portfolio & AI Architect

A high-performance, AI-integrated portfolio showcasing expertise in Software Development, Full Stack Engineering, and Generative AI.

## 🚀 Features
- **Identity Architect Terminal**: A high-tech Genkit-powered command center that synthesizes project blueprints into full brand identities (tech stacks + visual marks).
- **Enterprise Student Dashboard**: A simulated environment demonstrating complex data visualization using ShadCN UI and Recharts.
- **Dynamic Projects**: Interactive showcase of Java, AI, and Network Engineering innovations.
- **Firebase Integration**: Wired for Firestore to handle real-time contact management.

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, ShadCN UI, Lucide Icons
- **Database**: Firebase Firestore
- **AI Engine**: Google Genkit (Gemini 2.5 Flash & Imagen 4.0)

## 💻 Running Locally (Manual Setup)

Follow these steps to run the application on your computer:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   Create a file named `.env.local` in the root directory and add your keys:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   GOOGLE_GENAI_API_KEY=your_gemini_api_key
   ```
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

## 🌐 Publishing to GitHub (Step-by-Step)

1. **Initialize Git**:
   ```bash
   git init
   ```
2. **Add Files**:
   ```bash
   git add .
   ```
3. **Commit**:
   ```bash
   git commit -m "Initial commit: Premium Portfolio with AI Brand Engine"
   ```
4. **Create a Repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it (e.g., `portfolio`) and click **Create repository**.

5. **Link and Push**:
   - Replace `<your-repo-name>` with the name you chose:
   ```bash
   git remote add origin https://github.com/sriharshanetala2-dev/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

## 🚀 Free Deployment Guide

### Option 1: Firebase App Hosting (Recommended)
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project and navigate to **App Hosting**.
3. Connect your GitHub repository.
4. Set your environment variables (like `GOOGLE_GENAI_API_KEY`) in the App Hosting settings as **Secrets**.

### Option 2: Vercel
1. Import your repository to [Vercel](https://vercel.com/new).
2. Add your environment variables in the project settings.
3. Click **Deploy**.

## 📝 License
&copy; 2024 NETALA SRIHARSHA. All rights reserved.
