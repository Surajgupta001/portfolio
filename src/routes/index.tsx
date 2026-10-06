import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

const title = "Suraj Kumar Gupta — Full-Stack Developer & AI Engineer";
const description = "Portfolio of Suraj Kumar Gupta, a Full-Stack Developer and AI & LLM Engineer building modern web applications, RAG systems, AI-powered products, and machine learning solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PortfolioPage,
});
