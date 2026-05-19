import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Input — single-line text field.
 *
 * Style: no all-around box. A 0.5px Stone Dark hairline beneath the field,
 * Stone Light background, Ink text. The field reads as a letterpressed
 * blank, not a rounded UI rectangle.
 *
 * The visible error state replaces the bottom hairline with Oxblood and
 * sets the help text to Oxblood — minimal but unmistakable.
 */

type InputProps = {
  /** Render an Oxblood-bordered error state. */
  hasError?: boolean;
  /** Optional help / error message rendered beneath the input. */
  hint?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { hasError = false, hint, className, ...rest },
  ref,
) {
  return (
    <div className="w-full">
      <input
        ref={ref}
        aria-invalid={hasError || undefined}
        className={cn(
          "block w-full bg-stone-light px-0 py-3",
          "font-body text-base text-ink",
          "placeholder:text-stone-dark placeholder:font-normal",
          // Hairline underline carries the field weight; no other borders.
          "border-0 border-b-[0.5px]",
          hasError ? "border-oxblood" : "border-rule",
          "focus:outline-none focus:border-ink",
          "transition-colors duration-150",
          className,
        )}
        {...rest}
      />
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
