import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/webfarm/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebFarm — Digital Products for Businesses & Startups" },
      {
        name: "description",
        content:
          "WebFarm builds websites, web applications, mobile apps, AI solutions, automation and custom business software.",
      },
      { property: "og:title", content: "WebFarm — Your Ideas, Our Technology." },
      {
        property: "og:description",
        content: "Digital products designed and engineered for businesses and startups.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
