import { forwardRef, type SelectHTMLAttributes, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Select — native <select> styled to the brand.
 *
 * Same Stone Light field + hairline-underline pattern as Input. Native
 * dropdown chrome is reset, with a small Stone Dark chevron rendered on
 * the right via a lucide icon.
 *
 * Native select gives us free keyboard navigation, mobile pickers, and
 * screen-reader support — no need to roll a Listbox.
 */

type SelectProps = {
  hasError?: boolean;
  hint?: string;
  children: ReactNode;
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { hasError = false, hint, children, className, ...rest },
  ref,
) {
  return (
    <div className="w-full">
      <div className="relative">
        <select
          ref={ref}
          aria-invalid={hasError || undefined}
          className={cn(
            "block w-full appearance-none bg-stone-light px-0 py-3 pr-8",
            "font-body text-base text-ink",
            "border-0 border-b-[0.5px]",
            hasError ? "border-oxblood" : "border-rule",
            "focus:outline-none focus:border-ink",
            "transition-colors duration-150",
            className,
          )}
          {...rest}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-stone-dark"
          size={16}
          aria-hidden="true"
        />
      </div>
      {hint && (
        <p
          className={cn(
            "mt-2 font-body text-xs",
            hasError ? "text-oxblood" : "text-stone-dark",
          )}
        >
          {hint}
        </p>
      )}
    </div>
  );
});
