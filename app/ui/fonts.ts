import { JetBrains_Mono, Noto_Kufi_Arabic, Lusitana } from 'next/font/google';

export const jetbrains = JetBrains_Mono({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});
export const noto = Noto_Kufi_Arabic({ subsets: ['arabic'] });
