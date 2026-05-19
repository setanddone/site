import { cn } from "@/lib/cn";

/**
 * The Stamp — numbered edition for recurring events.
 *
 * Brand Book §14 ("Always" list): "Numbered editions on recurring events."
 *
 * Used wherever we want to signal that an event has provenance — the
 * Carroll Creek Harvest Market Vol. III, the third year of a holiday
 * program, the fifth annual cocktail dinner. Reads like a letterpress
 * edition stamp; sits quietly as a label, not a logo.
 *
 * Shape: a small rectangle with a hairline border, two lines of type —
 *   Top:    EDITION  (small-cap, Stone Dark)
 *   Bottom: III      (Fraunces, Ink, oversized)
 *
 * For one-off events, use <Wordmark size="sm" /> instead.
 */

type StampProps = {
  /** Edition number — pass the Roman numeral or Arabic digit you want shown. */
  edition: string | number;
  /** Optional label that replaces "EDITION" (e.g. "VOL.", "YEAR"). */
  label?: string;
  /** Stretch to fill parent. By default the stamp is tightly sized to content. */
  block?: boolean;
  className?: string;
};

export function Stamp({
  edition,
  label = "Edition",
  block = false,
  className,
}: StampProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-center gap-1 border-[0.5px] border-rule",
        "px-4 py-2",
        block && "w-full",
        className,
      )}
    >
      <span className="font-body text-[0.625rem] font-medium uppercase tracking-small-cap-wide text-stone-dark">
        {label}
      </span>
      <span className="font-display text-2xl font-medium leading-none text-ink">
        {edition}
      </span>
    </div>
  );
}
