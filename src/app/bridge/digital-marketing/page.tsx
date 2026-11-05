import { AboutCourse } from "@/components/dm/AboutCourse";
import { ContactUs } from "@/components/dm/ContactUs";
import { CourseStructure } from "@/components/dm/CourseStructure";
import DmGsapEffects from "@/components/dm/DmGsapEffects";
import { EnrollmentProcess } from "@/components/dm/EnrollmentProcess";
import { EvolveProgram } from "@/components/dm/EvolveProgram";
import FaqSection from "@/components/dm/FaqSection";
import Hero from "@/components/dm/Hero";
import { KeyHighlights } from "@/components/dm/KeyHighlights";
import ModulesSlider from "@/components/dm/ModulesSlider";
import { OurTeam } from "@/components/dm/OurTeam";
import { PostCourseOpportunities } from "@/components/dm/PostCourseOpportunities";
import { StudentSupport } from "@/components/dm/StudentSupport";
import { CourseFeesAndScholarships } from "@/components/dm/Scholarships";
import { StudentTestimonial } from "@/components/dm/Testimonial";
import WhatYouLearn from "@/components/dm/WhatYouLearn";
import { WhoShouldJoin } from "@/components/dm/WhoShouldJoin";
import { WhyChoose } from "@/components/dm/WhyChoose";

export default function Home() {
  return (
    <main id="dm-page" className="overflow-x-hidden">
      <Hero />
      <AboutCourse />
      <ModulesSlider />
      <KeyHighlights />
      <WhyChoose />
      <WhatYouLearn />
      <CourseStructure />
      <WhoShouldJoin />
      <EvolveProgram />
      <EnrollmentProcess />
      <StudentSupport />
      <PostCourseOpportunities />
      <CourseFeesAndScholarships />
      <FaqSection />
      <OurTeam />
      <StudentTestimonial />
      <ContactUs />
      <DmGsapEffects scope="#dm-page" />
    </main>
  );
}
