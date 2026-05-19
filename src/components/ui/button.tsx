import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Button — the only place Oxblood is allowed as a fill.
 *
 * Variants:
 *   - primary    Oxblood field, Cream text. Reserved for the page's primary CTA.
 *   - secondary  Ink outline on Stone. The default for everything else.
 *   - ghost      No border, Oxblood text + underline-on-hover. Inline links.
 *   - inverted   Cream outline for use on Ink/Oxblood backgrounds.
 *
 * Sizes:
 *   - sm  inline within paragraphs
 *   - md  default (most CTAs)
 *   - lg  hero CTAs only
 *
 * Brand notes:
 *   - Never use multiple primary buttons in one section.
 *   - Use an arrow → in the label when the action moves the user forward.
 */

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  /** When `href` is set, renders as <Link> (or <a> if external). */
  href: string;
  /** External link target — opens in new tab and adds noopener. */
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses = cn(
  // Layout / typography
  "inline-flex items-center justify-center gap-2",
  "font-body font-medium",
  "transition-colors duration-200",
  // Focus ring uses oxblood at low opacity for restraint
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oxblood",
  "disabled:opacity-50 disabled:cursor-not-allowed",
);

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-oxblood text-cream",
    "hover:bg-ink",
    // Oxblood field — focus ring would be invisible. Switch to cream.
    "focus-visible:outline-cream",
  ),
  secondary: cn(
    "bg-transparent text-ink",
    "border-[0.5px] border-ink",
    "hover:bg-ink hover:text-cream",
  ),
  ghost: cn(
    "bg-transparent text-oxblood px-0",
    // Underline expressed as a hairline beneath the text on hover
    "hover:underline underline-offset-4 decoration-[0.5px]",
  ),
  inverted: cn(
    "bg-transparent text-cream",
    "border-[0.5px] border-cream",
    "hover:bg-cream hover:text-ink",
    "focus-visible:outline-cream",
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2 tracking-small-cap-tight uppercase",
  md: "text-sm px-6 py-3 tracking-small-cap-tight uppercase",
  lg: "text-base px-8 py-4 tracking-small-cap-tight uppercase",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref,
) {
  // Ghost ignores padding to read inline; size still controls type scale.
  const isGhost = variant === "ghost";
  const cls = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    isGhost && "px-0 py-0",
    className,
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...anchorRest } = rest;
    if (external) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cls}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});
