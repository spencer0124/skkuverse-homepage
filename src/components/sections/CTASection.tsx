"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section
      id="download"
      className="py-24 md:py-32 bg-gradient-to-b from-white to-brand-light"
    >
      <div className="mx-auto max-w-[1140px] px-6 text-center">
        <AnimatedReveal>
          <h2 className="text-t2 md:text-display font-bold text-grey-900">
            지금 스꾸버스를
            <br />
            시작하세요
          </h2>
        </AnimatedReveal>
        <AnimatedReveal delay={0.15}>
          <p className="mt-4 text-t5 text-grey-500 font-normal">
            성균관대 캠퍼스 생활, 하나의 앱으로 달라질 거예요.
          </p>
        </AnimatedReveal>
        <AnimatedReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#" size="lg">
              App Store
            </Button>
            <Button href="#" size="lg">
              Google Play
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
