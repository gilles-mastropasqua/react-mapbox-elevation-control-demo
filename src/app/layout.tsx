import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "React Mapbox Elevation Control Demo",
  description: "A Mapbox GL JS control that allows users to measure the elevation of a point on the map. Once activated, click on a location on the map to display the elevation at that point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
