import Image from 'next/image';
import Link from 'next/link';
import { MARQUEE_ICONS } from '@/lib/COSTANTS';

export default function Marquee() {
  return (
    <div className="flex overflow-hidden bg-transparent border-b-4 border-t-4 border-emerald-500 group">
      {[...Array(2)].map((_, i) => (
        <div
          className="flex items-center whitespace-nowrap animate-loop-scroll group-hover:paused"
          key={i}
        >
          {MARQUEE_ICONS.concat(MARQUEE_ICONS).map((icon) => (
            <span key={icon.alt}>
              <Link href={icon.src} className="cursor-pointer">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={1200}
                  height={1200}
                />
              </Link>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
