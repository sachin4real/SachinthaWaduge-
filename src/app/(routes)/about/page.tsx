import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Sachin",
  description: "Learn more about Sachintha Waduge",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <Skills />
        <Achievements />
      </div>
    </>
  );
}