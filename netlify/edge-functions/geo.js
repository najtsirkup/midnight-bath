// Netlify edge function: returns the visitor's country for same-origin region
// detection (used by the cookie banner to decide when consent is required).
export default async (request: Request, context: { geo?: { country?: { code?: string } } }) => {
  const country = context.geo?.country?.code ?? "XX";
  return new Response(JSON.stringify({ country }), {
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
};

export const config = { path: "/geo" };
