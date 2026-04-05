"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function CourseSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1140px] px-6">
        <SectionHeading
          label="수강 후기"
          title={"수강신청 전에\n꼭 확인하세요"}
          description="실제 수강한 학생들의 솔직한 후기와 평점을 확인할 수 있어요."
          titleColor="#1A8A5C"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedReveal delay={0.2}>
            <PhoneMockup>
              <div className="w-full h-full bg-white p-5 pt-10">
                <p className="text-[13px] font-bold text-grey-900 mb-1">
                  데이터구조
                </p>
                <p className="text-[10px] text-grey-500 mb-4">
                  김교수 | 소프트웨어학과
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} className="text-[14px]">
                        ⭐
                      </span>
                    ))}
                    <span key={5} className="text-[14px] opacity-30">
                      ⭐
                    </span>
                  </div>
                  <span className="text-[12px] font-bold text-grey-900">
                    4.2
                  </span>
                  <span className="text-[10px] text-grey-400">
                    (128명 평가)
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      text: "과제가 많지만 확실히 실력이 늘어요",
                      rating: "4.5",
                    },
                    {
                      text: "설명이 친절하고 질문에 잘 답해주세요",
                      rating: "4.0",
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-grey-50 border border-grey-100"
                    >
                      <p className="text-[11px] text-grey-700">{review.text}</p>
                      <p className="mt-1 text-[10px] text-brand font-bold">
                        ★ {review.rating}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneMockup>
          </AnimatedReveal>

          <div className="space-y-8">
            <AnimatedReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    실제 평점
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    수강한 학생들이 직접 남긴 평점으로 강의 품질을 한눈에
                    파악하세요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  📝
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    솔직한 후기
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    과제량, 시험 난이도, 교수님 스타일까지. 수강신청 전에 꼭
                    알아야 할 정보를 확인하세요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  📈
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    학기별 비교
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    같은 과목의 학기별 평점 변화를 비교해 보세요. 더 나은
                    선택을 할 수 있어요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
