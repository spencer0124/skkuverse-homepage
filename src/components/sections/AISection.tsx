"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function AISection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1140px] px-6 text-center">
        <SectionHeading
          label="AI 학습 도우미"
          title={"공부도 스꾸버스와 함께,\n모두가 쉽게"}
          description="AI가 강의 내용을 요약하고, 맞춤형 학습 자료를 추천해 드려요."
        />

        <AnimatedReveal delay={0.3} className="mt-16">
          <PhoneMockup className="mx-auto">
            <div className="w-full h-full bg-gradient-to-b from-[#F0F7FF] to-white p-5 pt-10">
              <p className="text-[13px] font-bold text-grey-900 mb-4">
                AI 학습 도우미
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-grey-100 text-left">
                  <p className="text-[10px] text-grey-500 mb-1">나</p>
                  <p className="text-[11px] text-grey-800">
                    데이터구조 이진트리 설명해줘
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-brand-light text-left">
                  <p className="text-[10px] text-brand mb-1">AI 도우미</p>
                  <p className="text-[11px] text-grey-800">
                    이진트리(Binary Tree)는 각 노드가 최대 2개의 자식 노드를
                    가지는 트리 구조예요. 왼쪽 자식과 오른쪽 자식으로
                    구분됩니다.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-brand-light text-left">
                  <p className="text-[10px] text-brand mb-1">
                    관련 강의 자료
                  </p>
                  <p className="text-[11px] text-grey-800">
                    📎 데이터구조 5주차 - 트리의 기초
                  </p>
                </div>
              </div>
            </div>
          </PhoneMockup>
        </AnimatedReveal>
      </div>
    </section>
  );
}
