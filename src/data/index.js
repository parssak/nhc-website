import { ROUTES_SOURCE } from "./routes";
import { getRoutes, getNavigation } from "./utils";

export const routes = getRoutes(ROUTES_SOURCE);
export const navigation = getNavigation(ROUTES_SOURCE);

export const members = Array(15)
  .fill(0)
  .map((_, i) => ({
    id: i,
    title: "First Last",
    role: "Role Title",
  }));
export const newsItems = Array(20)
  .fill(0)
  .map((_, i) => ({
    id: i,
    title: "News Headline Title",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    publisher: "First Last",
    date: "May 25, 2020",
  }));
export const publicationItems = Array(20)
  .fill(0)
  .map((_, i) => ({
    id: i,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus iaculis turpis in sit.",
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    publisher: "First Last",
    date: "May 25, 2020",
  }));
