import Image from "next/image";
import { cn } from "@/lib/cn";
import { Mark } from "@/components/brand/mark";

/**
 * ImageFrame — renders a photo, or a branded fallback when none exists.
 *
 * Launch reality: photography (Visit Frederick press library + commissioned
 * work) arrives over months 2–3. Until a file is present, we don't want a
 * broken <img> — we want something that looks deliberate. So when `src` is
 * empty, this renders a Linen panel with a centered Mark and an optional
 * label. The composition reads as "image to come," not "missing asset."
 *
 * When a real `src` is provided, it renders next/image with `fill`, so the
 * parent controls dimensions (set a ratio + position: relative on the
 * wrapper, which this component does).
 *
 * Per Brand Book photography rules, real images get a subtle Ink overlay
 * only where text sits on top (callers pass `overlay`).
 */

type ImageFrameProps = {
  src?: string;
  alt: string;
  /** Aspect ratio utility, e.g. "aspect-[3/2]", "aspect-square". */
  ratio?: string;
  /** Small label shown on the fallback panel (e.g. project type). */
  fallbackLabel?: string;
  /** Add a subtle Ink overlay (for text legibility on real photos). */
  overlay?: boolean;
  /** Prioritize loading (above-the-fold heroes). */
  priority?: boolean;
  /** Sizes attribute for responsive loading. */
  sizes?: string;
  className?: string;
};

export function ImageFrame({
  src,
  alt,
  ratio = "aspect-[3/2]",
  fallbackLabel,
  overlay = false,
  priority = false,
  sizes = "100vw",
  className,
}: ImageFrameProps) {
  const hasImage = Boolean(src);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        ratio,
        !hasImage && "bg-linen",
        className,
      )}
    >
      {hasImage ? (
        <>
          <Image
            src={src as string}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
          {overlay && <div className="absolute inset-0 bg-ink/30" />}
        </>
      ) : (
        // Branded fallback — Linen panel, centered Mark, optional label.
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <Mark size="md" />
          {fallbackLabel && (
            <span className="font-body text-[0.625rem] font-medium uppercase tracking-small-cap-wide text-stone-dark">
              {fallbackLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
