import { Button } from "@/components/ui/button";

/**
 * 404 — copy verbatim from site_copy.md "404 Page".
 * Centered, type-forward, on Stone. The brand keeps its dry humor here.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="text-center">
        <h1 className="font-display text-display-lg font-normal text-ink">
          Nothing here<span className="text-oxblood">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md font-body text-lg text-stone-dark">
          This page doesn&apos;t exist, never did, or got moved. Probably the
          third one.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" variant="secondary" size="md">
            Back to home →
          </Button>
        </div>
      </div>
    </div>
  );
}
