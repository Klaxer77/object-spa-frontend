import type { Metadata } from 'next';
import '../globals.css';
import { QueryProvider } from '@/shared/api/QueryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={`antialiased`}>{children}</body>
      </QueryProvider>
    </html>
  );
}
