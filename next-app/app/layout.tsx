
export const metadata = { title: 'Inline Copilot API', description: 'Companion app for the Chrome extension' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, sans-serif", padding:20}}>{children}</body>
    </html>
  );
}
