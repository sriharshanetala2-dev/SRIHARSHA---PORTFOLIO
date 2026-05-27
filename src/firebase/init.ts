'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';

/**
 * Initializes Firebase services safely for the client side.
 * Skips initialization during server-side rendering to prevent 500 errors.
 */
export function initializeFirebase() {
  // Guard against server-side execution
  if (typeof window === 'undefined') {
    return { firebaseApp: null, firestore: null, auth: null };
  }

  const { apiKey } = firebaseConfig;
  const isConfigValid = !!apiKey && apiKey !== "undefined";

  if (!isConfigValid) {
    return { firebaseApp: null, firestore: null, auth: null };
  }

  try {
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    return { firebaseApp: app, firestore: db, auth };
  } catch (error) {
    console.error("Firebase architecture initialization failed:", error);
    return { firebaseApp: null, firestore: null, auth: null };
  }
}
