import type { Metadata } from "next";

export const metadata: Metadata = {
  keywords: "профайлинг, методика FASON, функциональная модель человека, психолог исследователь, командная коммуникация",
  title: "Михаил — Профайлинг и методика FASON",
  description: "Учёный-исследователь, автор авторской методики FASON. Профайлинг личности, командная коммуникация, психологические исследования.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Onest:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
