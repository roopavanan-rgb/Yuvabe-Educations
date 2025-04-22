import { HeroSection } from "@/components/ai/HeroSection"
import { WhatForYou } from "@/components/ai/WhatForYou"
import { WhatYouLearn } from "@/components/ai/WhatYouLearn"
import { ProgramOutcome } from "@/components/ai/ProgramOutcome"
import { ApplicantCategories } from "@/components/ai/ApplicantCategories"
import { Outcomes } from "@/components/ai/Outcomes"
import { CareerBoost } from "@/components/ai/CareerBoost"
import { Instructors } from "@/components/ai/Instructors"
import FaqSection from "@/components/ai/FaqSection"
import Scholarship from "@/components/ai/Scholarship"
import HowToApply from "@/components/ai/HowToApply"


export default function Home() {
  return (
    <main className="relative min-h-screen bg-background  text-white overflow-hidden">
      <HeroSection />
      <WhatForYou />
      <WhatYouLearn/>
      <ProgramOutcome/>
      <ApplicantCategories/>
      <Outcomes/>
      <CareerBoost/>
      <Instructors/>
      <FaqSection/>
      <Scholarship/>
      <HowToApply/>
    </main>
  )
}





