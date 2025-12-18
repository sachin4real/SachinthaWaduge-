"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { ScrollReveal, GradientText } from "@/components/animations";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full-stack developer focused on building modern web experiences with
              scalable backends and clean, responsive UI.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* About Text */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hi! I&apos;m{" "}
                <span className="font-semibold">Sachintha Waduge</span>, a Software
                Engineering undergraduate at SLIIT. I enjoy building end-to-end
                products with strong attention to UI quality, performance, and
                clean architecture.
              </p>

              <p className="text-lg leading-relaxed">
                During my internship, I contributed to web application development
                by delivering responsive features, implementing and integrating
                REST APIs, and working with both{" "}
                <span className="font-medium">SQL</span> and{" "}
                <span className="font-medium">MongoDB</span> for data management.
                I mainly worked with{" "}
                <span className="font-medium">React/Next.js</span>,{" "}
                <span className="font-medium">Node.js/Express.js</span>, and{" "}
                <span className="font-medium">Spring Boot</span> in an Agile/Scrum
                workflow using Git-based collaboration.
              </p>

              <p className="text-lg leading-relaxed">
                I&apos;ve built multiple real-world projects, including{" "}
                <span className="font-medium">
                  DreamFit.LK (3D Virtual Dressing Room)
                </span>{" "}
                and other full-stack platforms like Nestwell, Helasuwa, and EV
                systems—focusing on scalable backend design, smooth user flows,
                and polished UI.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>

                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>

                      {edu.gpa && (
                        <p className="mt-2 text-sm font-medium">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
