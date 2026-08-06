import Image from "next/image";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  icon: LucideIcon;
  href:string;
}

export default function IndustryCard({
  title,
  image,
  icon: Icon,
  href = "/industries",
}: Props) {
  return (
    <div className="group relative h-80 overflow-hidden rounded-3xl">

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute bottom-0 p-6 text-white">

        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
          <Icon size={28} />
        </div>

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-white/80">
          Industrial automation solutions
          tailored for the {title.toLowerCase()} industry.
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 font-medium text-primary"
        >
          Learn more

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

    </div>
  );
}