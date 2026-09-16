import { createSocialCard, socialImageAlt } from "./social-card";

export const alt = socialImageAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialCard();
}
