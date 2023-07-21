import "@/styles/globals.css";
import "@/styles/section4.css";
import "@/styles/Section1.css";
import "@/styles/About.css";
import "@/styles/Header.css";
import "@/styles/SinglePage.css";
import "@/styles/section2.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
