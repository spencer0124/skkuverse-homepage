"use client";

import AnimatedReveal from "@/components/ui/AnimatedReveal";

const features = [
  {
    icon: "🎭",
    title: "동아리 관리",
    description: "회원 관리, 활동 기록, 회비 정산을 한 곳에서 관리하세요.",
  },
  {
    icon: "🎪",
    title: "행사 홍보",
    description: "캠퍼스 행사를 등록하고, 성균인에게 바로 알릴 수 있어요.",
  },
  {
    icon: "🏛️",
    title: "학생회 공지",
    description: "학생회 공지사항을 빠르게 전달하고, 의견을 수렴하세요.",
  },
];

export default function BusinessSection() {
  return (
    <section className="py-24 md:py-32 bg-grey-900">
      <div className="mx-auto max-w-[1140px] px-6">
        <AnimatedReveal>
          <p className="text-t6 font-bold text-brand mb-3 text-center">
            단체 관리
          </p>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <h2 className="text-t2 md:text-display font-bold text-white text-center">
            동아리 & 학생회도
            <br />
            스꾸버스와 함께
          </h2>
        </AnimatedReveal>
        <AnimatedReveal delay={0.2}>
          <p className="mt-4 text-t5 text-grey-400 text-center font-normal">
            캠퍼스 단체 운영에 필요한 모든 도구를 제공해 드려요.
          </p>
        </AnimatedReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <AnimatedReveal key={feat.title} delay={0.1 * (i + 1)}>
              <div className="bg-grey-800 rounded-2xl p-7 hover:bg-grey-700 transition-colors">
                <div className="text-[36px] mb-4">{feat.icon}</div>
                <h3 className="text-t5 font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-t6 text-grey-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
