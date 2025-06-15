export type TechBadge = {
  alt: string;
  src: string;
};

export const BADGES = {
  next: "https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white",
  react: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  tailwind: "https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
} as const;

export type BadgeKey = keyof typeof BADGES;

export function getTechBadges(keys: BadgeKey[]): TechBadge[] {
    return keys.map((key) => ({
        alt: key,
        src: BADGES[key],
    }));
};