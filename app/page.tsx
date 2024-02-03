'use client';

import Achievements from "@/components/Achievements";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Story from "@/components/Story";
import { STORIES } from "@/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      {STORIES.map((story, index) => (
        <Story 
          image={story.visual}
          header={story.title}
          narrative={story.narrative}
          reverse={index % 2 !== 0}
          index = {index}
        />
      ))}
      <Achievements />
      <Services />
    </main>
  );
}
