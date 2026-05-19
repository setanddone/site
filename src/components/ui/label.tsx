import type { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Label — small-cap eyebrow over a form field.
 *
 * Always sits above the input, never to the left. Stone Dark text, small
 * caps with 0.18em tracking. Adds a subtle "required" mark (an oxblood
 * dot) when `required` is true — restrained, brand-correct.
 */

type LabelProps = {
  children: ReactNode;
  className?: string;
  required?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export function Label({
  children,
  className,
  required = false,
  ...rest
}: LabelProps) {
  return (
    <label
      className={cn(
        "block font-body text-xs font-medium uppercase tracking-small-cap text-stone-dark",
        className,
      )}
      {...rest}
    >
      {children}
      {required && (
        <span className="ml-1 text-oxblood" aria-hidden="true">
          ·
        </span>
      )}
    </label>
  );
}
