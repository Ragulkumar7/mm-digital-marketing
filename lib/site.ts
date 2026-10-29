export const CONTACT = {
  phoneDisplay: "+91 99765 84928",
  phoneHref: "tel:+919976584928",
  email: "mmdigitalmarketing786@gmail.com",
  emailHref: "mailto:mmdigitalmarketing786@gmail.com",
} as const;

export type SocialKey = "facebook" | "linkedin" | "instagram";

export const SOCIAL_LINKS: {
  key: SocialKey;
  label: string;
  href: string;
}[] = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1E7RKzio3k/",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mm-brandvista-a0899241a/",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/mmbrandvista?mdxt=cTExOHp6cmxpMnFm",
  },
];
