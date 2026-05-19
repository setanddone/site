import { cn } from "@/lib/cn";

/**
 * Hairline — 0.5px Stone Dark divider.
 *
 * Brand Book §14: "Hairline rules in Stone Dark." The visual rhythm
 * of the brand. Use generously between sections, beneath eyebrows,
 * separating list items.
 *
 * Renders as <hr> by default. Pass `as="div"` to use as a vertical
 * rule or in places where semantic <hr> is wrong.
 */

type HairlineProps = {
  className?: string;
  /** "horizontal" (default) or "vertical". */
  orientation?: "horizontal" | "vertical";
  /** Render as <div> instead of <hr>. */
  as?: "hr" | "div";
};

export function Hairline({
  className,
  orientation = "horizontal",
  as = "hr",
}: HairlineProps) {
  const Tag = as;
  return (
    <Tag
      role={as === "div" ? "separator" : undefined}
      aria-orientation={as === "div" ? orientation : undefined}
      className={cn(
        "border-0 bg-transparent",
        orientation === "horizontal"
          ? "h-px w-full border-t-[0.5px] border-rule"
          : "h-full w-px border-l-[0.5px] border-rule",
        className,
      )}
    />
  );
}
