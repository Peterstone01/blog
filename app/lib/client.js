import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "kbz5fqmn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-28",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
