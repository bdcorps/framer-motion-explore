import animation3 from "./animated-search";
import blogCard from "./blog-card";
import ctaButton1 from "./cta-button-1";
import ctaButton2 from "./cta-button-2";
import landingHeroTestimonials from "./landing-hero-testimonials";
import animation2 from "./light-up-icons";
import metricsCard from "./metrics-card";
import animation1 from "./saas-onboarding-modal";
import skiff from "./skiff";

export const sources = [animation1, animation2, animation3, skiff, ctaButton1, ctaButton2, landingHeroTestimonials, metricsCard, blogCard];

export const getPostBySlug = (slug: string) => {
  return sources.find((source) => source.slug === slug);
};


export const IndexFile = `import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);`
