import '@/app/ui/global.css';
import { jetBrains } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Roshan Dashboard',
    default: 'Roshan Dashboard',
  },
  description: "I'm a Fullstack Web Developer. ",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh")
}

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