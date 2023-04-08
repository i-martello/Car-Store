import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import mongoose from "mongoose";
import { AppProvider } from "@/context";


export default function App({ Component, pageProps }: AppProps) {
  (async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI!);
      console.log("Base de datos funcionando");
    } catch (error) {
      console.log(error);
    }
  })();

  return (
    <AppProvider>
      <div className="principal-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="pages">
          <Component {...pageProps} />
        </div>
      </div>
    </AppProvider>
  );
}
