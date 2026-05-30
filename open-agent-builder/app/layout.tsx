import "styles/main.css";
import "@xyflow/react/dist/style.css";
import "styles/fluo.css";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>fluo</title>
        <meta
          name="description"
          content="Secure visual workflow layer for defence procurement assurance."
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
