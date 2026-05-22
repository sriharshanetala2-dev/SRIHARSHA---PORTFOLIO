# NETALA SRIHARSHA | Professional Portfolio

A high-performance portfolio showcasing expertise in Software Development, Full Stack Engineering, and Computer Science. Designed with a focus on clean code and modern architectural solutions.

## 🚀 Features
- **Architectural Project Timeline**: Showcases progression from core engineering to full-stack & AI solutions.
- **Enterprise Student Dashboard**: A simulated environment demonstrating complex data visualization using ShadCN UI and Recharts.
- **Firebase Integration**: Real-time contact management using Firestore.
- **Junior-Level Focused Content**: Professional descriptions highlighting foundational skills and technical growth.

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS, ShadCN UI, Lucide Icons
- **Database**: Firebase Firestore
- **AI Engine**: Google Genkit

---

## 💻 Local Development
To run this application manually on your local machine:

1. **Clone or Download**: Ensure you have the source code on your machine.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Setup Environment Variables**:
   Create a `.env.local` file in the root directory and add your Firebase and Google AI keys:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   GOOGLE_GENAI_API_KEY=your_google_ai_key
   ```
4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

---

## 📤 Publishing to GitHub
Follow these steps to host your code on GitHub:

1. **Initialize Git**:
   ```bash
   git init
   ```
2. **Add Files**:
   ```bash
   git add .
   ```
3. **Commit Changes**:
   ```bash
   git commit -m "feat: initial portfolio release"
   ```
4. **Create a Repository on GitHub**:
   - Go to [GitHub](https://github.com/new) and create a new repository.
   - Do **not** initialize it with a README or License (you already have them).
5. **Link and Push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## 🇮🇳 Deployment (India-Optimized)
To ensure the fastest access for users in India via Firebase:

1. **Firebase Console**: Go to the [Firebase Console](https://console.firebase.google.com/).
2. **Create Hosting Backend**: When setting up App Hosting, select **asia-south1 (Mumbai)** or **asia-south2 (Delhi)** as your region.
3. **Database Region**: Ensure your Firestore database is also provisioned in the **asia-south1** region.
4. **Environment Variables**: Add your `NEXT_PUBLIC_FIREBASE_*` keys in the App Hosting dashboard under "Environment Variables" for production.

---

## 📝 License
&copy; 2024 NETALA SRIHARSHA. All rights reserved.
