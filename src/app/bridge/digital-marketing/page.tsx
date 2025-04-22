import { AboutCourse } from "@/components/dm/AboutCourse";
import { AdditionalLearnings } from "@/components/dm/AdditionalLearnings";
import { ContactUs } from "@/components/dm/ContactUs";
import { CourseStructure } from "@/components/dm/CourseStructure";
import { EnrollmentProcess } from "@/components/dm/EnrollmentProcess";
import { EvolveProgram } from "@/components/dm/EvolveProgram";
import FaqSection from "@/components/dm/FaqSection";
import Hero from "@/components/dm/Hero";
import { KeyHighlights } from "@/components/dm/KeyHighlights";
import { ModulesSlider } from "@/components/dm/ModuleSlider";
import { OurTeam } from "@/components/dm/OurTeam";
import { PostCourseOpportunities } from "@/components/dm/PostCourseOpportunities";
import { CourseFeesAndScholarships } from "@/components/dm/Scholarships";
import { StudentTestimonial } from "@/components/dm/Testimonial";
import WhatYouLearn from "@/components/dm/WhatYouLearn";
import { WhoShouldJoin } from "@/components/dm/WhoShouldJoin";
import { WhyChoose } from "@/components/dm/WhyChoose";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutCourse />
      <ModulesSlider />
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
