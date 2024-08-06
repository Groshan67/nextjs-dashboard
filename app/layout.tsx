import '@/app/ui/global.css'
import { jetbrain} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrain.className} antialiased `}>{children}</body>
    </html>
  );
}
