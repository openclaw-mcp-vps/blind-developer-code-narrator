import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Narrator — Audio Code Navigation for Visually Impaired Developers",
  description: "Browser extension with AI-powered audio narration of code structure, changes, and navigation context for visually impaired developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4c839e68-8c10-4bc6-9bbd-9dc4e317589e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
