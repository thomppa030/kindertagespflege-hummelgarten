import type { RequestHandler } from "./$types";

// Replace this with your actual Google verification code
const GOOGLE_VERIFICATION_CODE = "2QRx2JuSv_dv-r-S2BhlwbTk9zhbeXOW3V4Ewkl2jY0";

export const GET: RequestHandler = async () => {
  const html = `google-site-verification: ${GOOGLE_VERIFICATION_CODE}`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "public, max-age=31536000", // Cache for 1 year
    },
  });
};

