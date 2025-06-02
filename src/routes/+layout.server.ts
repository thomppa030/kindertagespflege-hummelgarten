import { createClient } from "$lib/prismicio";

export const prerender = "auto";

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  try {
    const footer = await client.getSingle("footer");
    return { footer };
  } catch {
    return { footer: null };
  }
}
