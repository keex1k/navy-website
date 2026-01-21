import { defineType, defineField } from "sanity";

export const promoBar = defineType({
  name: "promoBar",
  title: "Promo Bar",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
  ],
});
