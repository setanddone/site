import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose Tailwind class strings with conflict resolution.
 *
 *   cn("px-4", condition && "px-6")        // → "px-6"
 *   cn("bg-stone", inverted && "bg-ink")   // → "bg-ink"
 *
 * Use this anywhere you'd otherwise template-string class names. Keeps
 * conditional + overridable variants honest.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
