import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Textarea — multi-line text field. Same visual rules as Input:
 * Stone Light background, hairline beneath, no all-around border.
 *
 * Defaults to 5 rows; resize is set to "vertical" so the user can
 * stretch but not introduce horizontal overflow.
 */

type TextareaProps = {
  hasError?: boolean;
  hint?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ hasError = false, hint, className, rows = 5, ...rest }, ref) {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          rows={rows}
          aria-invalid={hasError || undefined}
          className={cn(
            "block w-full bg-stone-light px-0 py-3",
            "font-body text-base text-ink",
            "placeholder:text-stone-dark placeholder:font-normal",
            "border-0 border-b-[0.5px] resize-y",
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
  },
);
