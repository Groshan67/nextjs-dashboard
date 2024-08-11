import '@/app/ui/global.css';
import { inter, jetBrains } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className} antialiased`}>{children}</body>
    </html>
  );
}