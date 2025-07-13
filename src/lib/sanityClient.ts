import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-07-13', // use a UTC date in YYYY-MM-DD format
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
} 