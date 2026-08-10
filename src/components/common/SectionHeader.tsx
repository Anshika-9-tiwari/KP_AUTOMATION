import clsx from "clsx";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-9 max-w-4xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Badge */}

      {badge && (
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          {badge}
        </span>
      )}

      {/* Title */}

      <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[var(--heading)] lg:text-5xl">
        {title}

        {highlight && (
          <>
            <br />
            <span className="text-primary">{highlight}</span>
          </>
        )}
      </h2>

      {/* Description */}

      {description && (
        <p className="mt-5 text-lg leading-8 text-[var(--text)]">
          {description}
        </p>
      )}
    </div>
  );
}