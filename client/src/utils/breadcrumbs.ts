import { lang } from "@/lang";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

export const matchesBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.matches,
  href: useHref ? "/matches" : undefined,
});

export const homeBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.home,
  href: useHref ? "/" : undefined,
});

export const teamsBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.teams,
  href: useHref ? "/teams" : undefined,
});

export const playersBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.players,
  href: useHref ? "/players" : undefined,
});

export const tournamentsBreadcrumb = (useHref = true): ItemType => ({
  title: lang.sidebar.tournaments,
  href: useHref ? "/tournaments" : undefined,
});
