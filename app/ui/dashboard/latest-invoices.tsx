import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana, jetBrains } from '@/app/ui/fonts';

import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className="flex w-full flex-col md:col-span-4">


    </div >
  );
}
