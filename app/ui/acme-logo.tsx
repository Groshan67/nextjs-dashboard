import { HeartIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <HeartIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <HeartIcon className="h-12 w-12" />
      <p className="text-[37x]">Health-AI</p>
    </div>
  );
}
