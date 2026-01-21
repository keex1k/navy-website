import { sanityClient } from "../lib/sanity";

export const getPromoBar = async () => {
  const data = await sanityClient.fetch(
    `*[_type == "promoBar"][0]{ text, isActive }`
  );

  console.log("SANITY DATA:", data);
  return data;
};
