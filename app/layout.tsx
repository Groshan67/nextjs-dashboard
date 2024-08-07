import '@/app/ui/global.css';
import { jetbrains } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${jetbrains.className} antialiased`}>{children}</body>
    </html>
  );
}
