"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function HomeSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1140px] px-6">
        <SectionHeading
          label="홈"
          title={"내 캠퍼스 생활,\n시간표부터 학식까지 똑똑하게"}
          description="한눈에 오늘의 일정과 학식 메뉴를 확인하고, 내 학점도 관리하세요."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedReveal delay={0.2}>
            <PhoneMockup>
              <div className="w-full h-full bg-gradient-to-b from-brand-light to-white p-5 pt-10">
                <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-3">
                  <p className="text-[11px] font-bold text-grey-500 mb-2">
                    오늘의 시간표
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-8 rounded-full bg-brand" />
                      <div>
                        <p className="text-[12px] font-bold text-grey-900">
                          데이터구조
                        </p>
                        <p className="text-[10px] text-grey-500">
                          09:00 - 10:30 | 호암관 301
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-8 rounded-full bg-blue-500" />
                      <div>
                        <p className="text-[12px] font-bold text-grey-900">
                          운영체제
                        </p>
                        <p className="text-[10px] text-grey-500">
                          13:00 - 14:30 | 제2공학관 204
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  <p className="text-[11px] font-bold text-grey-500 mb-2">
                    오늘의 학식
                  </p>
                  <p className="text-[12px] font-bold text-grey-900">
                    돈까스 정식
                  </p>
                  <p className="text-[10px] text-grey-500">
                    금봉산방 | 5,000원
                  </p>
                </div>
              </div>
            </PhoneMockup>
          </AnimatedReveal>

          <div className="space-y-8">
            <AnimatedReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  📅
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    오늘의 시간표
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    수업 시간과 강의실을 한눈에 확인하세요. 수업 전 알림도
                    받을 수 있어요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  🍚
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    학식 메뉴
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    캠퍼스 내 모든 식당의 오늘 메뉴를 확인하세요. 가격 정보도
                    함께 제공해요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    학점 관리
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    내 학점 현황을 한눈에 파악하고, 졸업 요건 충족 여부도
                    확인해 보세요.
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
