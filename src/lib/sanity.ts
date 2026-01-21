import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: '0be9r30j',
  dataset: 'production',
  apiVersion: 'v2026-01-21',
  useCdn: false,
});
