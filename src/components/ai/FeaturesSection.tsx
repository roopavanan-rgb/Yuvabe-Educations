import { Card, CardContent } from "@/components/ai/ui/card";

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 border-[#58AEE9] rounded-3xl">
            <CardContent className="p-6 md:p-10 text-center">
              {/* Title Inside Card */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                What's In It For You?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                Our 3-month AI First Full Stack Internship is designed to provide hands-on experience. You won't just
                learn the theory—you'll apply it to real-world problems, gaining the kind of practical skills that make
                you stand out to employers!.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="absolute text-5xl top-0 -left-60 opacity-40 blur-2xl border-none w-96 h-96 border rounded-full bg-gradient-to-r from-[#3991BD] to-blue-300"></div>
    </section>
  );
}
