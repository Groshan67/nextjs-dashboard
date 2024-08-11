import { Inter, Lusitana, JetBrains_Mono } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: ['200', '400'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});