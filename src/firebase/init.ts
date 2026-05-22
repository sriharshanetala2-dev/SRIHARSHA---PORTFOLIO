
'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from './config';

export function initializeFirebase() {
  const isConfigValid = firebaseConfig.apiKey && firebaseConfig.apiKey !== "undefined";

  if (!isConfigValid) {
    if (typeof window !== 'undefined') {
      console.warn("Firebase configuration is missing or incomplete.");
    }
    return { firebaseApp: null, firestore: null, auth: null };
  }

  try {
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    return { firebaseApp: app, firestore: db, auth };
  } catch (error) {
    if (typeof window !== 'undefined') {
      console.error("Error initializing Firebase:", error);
    }
    return { firebaseApp: null, firestore: null, auth: null };
  }
}
