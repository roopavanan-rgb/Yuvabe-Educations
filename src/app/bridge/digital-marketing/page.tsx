import { AboutCourse } from "@/components/dm/AboutCourse";
import { AdditionalLearnings } from "@/components/dm/AdditionalLearnings";
import { ContactUs } from "@/components/dm/ContactUs";
import { CourseStructure } from "@/components/dm/CourseStructure";
import { EnrollmentProcess } from "@/components/dm/EnrollmentProcess";
import { EvolveProgram } from "@/components/dm/EvolveProgram";
import FaqSection from "@/components/dm/FaqSection";
import Hero from "@/components/dm/Hero";
import { KeyHighlights } from "@/components/dm/KeyHighlights";
import ModulesSlider, { ModuleItem } from "@/components/dm/ModulesSlider";
import { OurTeam } from "@/components/dm/OurTeam";
import { PostCourseOpportunities } from "@/components/dm/PostCourseOpportunities";
import { CourseFeesAndScholarships } from "@/components/dm/Scholarships";
import { StudentTestimonial } from "@/components/dm/Testimonial";
import WhatYouLearn from "@/components/dm/WhatYouLearn";
import { WhoShouldJoin } from "@/components/dm/WhoShouldJoin";
import { WhyChoose } from "@/components/dm/WhyChoose";

const modules: ModuleItem[] = [
   { title: "Introduction to Digital Marketing", description: "Fundamentals, scope, and industry trends.", icon: "/dm/icons/idm.png" },
  { title: "Website & Blog Creation ", description: "Building a strong online presence.", icon: "/dm/icons/wbc.png" },
  { title: "Digital Marketing Landscape", description: "Navigating evolving strategies and channels.", icon: "/dm/icons/dml.png" },
  { title: "Behavioral Marketing", description: "Understanding consumer psychology and targeting.", icon: "/dm/icons/bm.png" },
  { title: "Search Engine Optimization (SEO)", description: "Boosting organic visibility and rankings.", icon: "/dm/icons/seo.png" },
  { title: "Search Engine Marketing (SEM) ", description: "Paid search strategies for maximum reach.", icon: "/dm/icons/sem.png" },
  { title: "Social Media & Content Strategies", description: "Engaging customers, building brand advocacy, and crafting compelling messages.", icon: "/dm/icons/smcs.png" },
  { title: "Email Marketing", description: "Leveraging personalization for customer engagement.", icon: "/dm/icons/em.png" },
  { title: "Mobile Marketing", description: "Capturing audiences in the mobile-first era.", icon: "/dm/icons/mm.png" },
  { title: "Brand Design & Strategy", description: "Crafting a compelling brand identity.", icon: "/dm/icons/bds.png" },
  { title: "AI in Digital Marketing ", description: "Harnessing automation and emerging technologies.", icon: "/dm/icons/ai.png" },
  { title: "Analytics & ROI Optimization ", description: "Measuring success and refining strategies.", icon: "/dm/icons/ao.png" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutCourse />
      <ModulesSlider modules={modules} />
      <KeyHighlights />
      <WhyChoose />
      <WhatYouLearn />
      <CourseStructure />
      <WhoShouldJoin />
      <AdditionalLearnings />
      <EvolveProgram />
      <EnrollmentProcess />
      <PostCourseOpportunities />
      <CourseFeesAndScholarships />
      <FaqSection />
      <OurTeam />
      <StudentTestimonial />
      <ContactUs />
    </main>
  );
}
