"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6">
        <div className="text-center space-y-8 max-w-md">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
          >
            <AlertTriangle className="mx-auto h-24 w-24 text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
          >
            <h1 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase shimmer-text">
              404 - Endpoint Lost
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium opacity-80">
              The requested resource has been moved or could not be found. Let's get you back on track.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base tracking-wider uppercase group hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Return to Command Center
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
