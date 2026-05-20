import { z } from "zod";

/**
 * Inquiry form schema — shared by the client form (react-hook-form
 * resolver) and the server API route (re-validation before sending email).
 *
 * Field set per INSTRUCTIONS + site_copy.md Page 6. eventType enum maps to
 * the dropdown options; budget/source are free-form optional selects.
 */
export const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  eventType: z.enum(
    ["community", "milestone", "wedding", "corporate", "other"],
    { message: "Pick the closest match" },
  ),
  description: z.string().min(20, "Please tell us a bit more"),
  date: z.string().optional(),
  budget: z.string().optional(),
  source: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

/** Dropdown option sets — single source for the form selects. */
export const EVENT_TYPE_OPTIONS = [
  { value: "community", label: "Community event (festival, market, downtown activation)" },
  { value: "milestone", label: "Milestone (birthday, anniversary, retirement)" },
  { value: "wedding", label: "Wedding (microwedding, farm wedding, casual)" },
  { value: "corporate", label: "Corporate (grand opening, ribbon cutting, party)" },
  { value: "other", label: "Something else" },
] as const;

export const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000 – $100,000",
  "Over $100,000",
  "Not sure yet",
] as const;

export const SOURCE_OPTIONS = [
  "Referral",
  "Instagram",
  "Google search",
  "A friend",
  "An event we worked on",
  "Other",
] as const;
