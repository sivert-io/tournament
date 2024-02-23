import { eng } from "./eng";
import { nor } from "./nor";

const languages = {
  nor,
  eng,
} as const;

const currentLang = process.env.NEXT_PUBLIC_LANGUAGE as keyof typeof languages;

export const lang = languages[currentLang] || eng;
