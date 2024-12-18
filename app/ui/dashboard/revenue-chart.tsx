import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { jetBrains } from '@/app/ui/fonts';

import { fetchRevenue } from '@/app/lib/data';



export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  const chartHeight = 350;

  // NOTE: Uncomment this code in Chapter 7

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">

    </div>
  );
}
