"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function BusSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1140px] px-6">
        <SectionHeading
          label="실시간 버스"
          title={"셔틀버스, 이제\n기다리지 마세요"}
          description="실시간 위치 추적부터 시간표까지. 버스 타이밍을 딱 맞출 수 있어요."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedReveal delay={0.2}>
            <PhoneMockup>
              <div className="w-full h-full bg-gradient-to-b from-brand-light to-white p-5 pt-10">
                {/* Realtime bus tracking UI */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[13px] font-bold text-grey-900">
                    혜화역 셔틀
                  </p>
                  <span className="text-[10px] text-brand font-bold bg-brand-light px-2 py-0.5 rounded-full">
                    운행중
                  </span>
                </div>

                {/* Station timeline */}
                <div className="space-y-0">
                  {[
                    { name: "혜화역 2번 출구", active: false, bus: null },
                    { name: "혜화로터리", active: false, bus: "서울70바 3921" },
                    { name: "성대입구", active: false, bus: null },
                    { name: "정문", active: true, bus: null },
                    { name: "대운동장", active: false, bus: null },
                    { name: "법학관 앞", active: false, bus: null },
                    { name: "600주년기념관", active: false, bus: null },
                  ].map((station, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-2.5 h-2.5 rounded-full border-2 ${
                            station.active
                              ? "bg-brand border-brand"
                              : "bg-white border-grey-300"
                          }`}
                        />
                        {i < 6 && (
                          <div className="w-0.5 h-6 bg-grey-200" />
                        )}
                      </div>
                      <div className="flex-1 -mt-1">
                        <p
                          className={`text-[11px] ${
                            station.active
                              ? "font-bold text-brand"
                              : "text-grey-700"
                          }`}
                        >
                          {station.name}
                        </p>
                        {station.bus && (
                          <div className="mt-0.5 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                            <span className="text-[9px] text-brand font-bold">
                              {station.bus}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                  <p className="text-[10px] text-grey-500">다음 버스</p>
                  <p className="text-[12px] font-bold text-brand">
                    3분 후 도착 예정
                  </p>
                </div>
              </div>
            </PhoneMockup>
          </AnimatedReveal>

          <div className="space-y-8">
            <AnimatedReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    실시간 위치 추적
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    셔틀버스가 지금 어디에 있는지 실시간으로 확인하세요.
                    정류장별 도착 예정 시간도 알려드려요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  🕐
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    시간표 & 스케줄
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    학기 중, 방학, 주말별 운행 시간표를 한눈에.
                    다음 버스 시간도 자동으로 하이라이트해 드려요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  🚌
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    혜화역 셔틀 & 캠퍼스 셔틀
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    인사캠 혜화역 셔틀(400원)과 인사-자과 캠퍼스 셔틀(무료)
                    정보를 모두 제공해요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center text-2xl">
                  ⏱️
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    캠퍼스 도착 예정 시간
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    인사캠/자과캠까지 실시간 예상 소요 시간을 히어로 카드로
                    보여드려요.
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
