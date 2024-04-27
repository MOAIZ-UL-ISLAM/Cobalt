import { z, defineCollection } from "astro:content";

const ItemsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  items: ItemsCollection,
};
