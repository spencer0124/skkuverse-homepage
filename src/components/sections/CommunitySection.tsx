"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 md:py-32 bg-grey-50">
      <div className="mx-auto max-w-[1140px] px-6">
        <SectionHeading
          label="커뮤니티"
          title={"성균인과 자유롭게,\n익명 커뮤니티부터 멘토링까지"}
          description="같은 고민을 나누고, 선배의 경험을 들어보세요."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <AnimatedReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  💬
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    익명 게시판
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    자유롭게 질문하고 정보를 나눠요. 성균관대 학생만 참여할 수
                    있어요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  🤝
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    선배 멘토링
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    진로, 수강신청, 대외활동까지. 경험 있는 선배에게 직접
                    물어보세요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  🔔
                </div>
                <div>
                  <h3 className="text-t5 font-bold text-grey-900">
                    실시간 알림
                  </h3>
                  <p className="mt-1 text-t6 text-grey-500">
                    관심 글에 댓글이 달리면 바로 알림을 받아요. 중요한 소식을
                    놓치지 마세요.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={0.2} className="order-1 md:order-2">
            <PhoneMockup>
              <div className="w-full h-full bg-white p-5 pt-10">
                <p className="text-[13px] font-bold text-grey-900 mb-4">
                  자유게시판
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "데구 중간고사 범위 아시는 분",
                      time: "3분 전",
                      comments: 12,
                      likes: 5,
                    },
                    {
                      title: "기숙사 세탁기 고장 신고 어디서 하나요",
                      time: "15분 전",
                      comments: 8,
                      likes: 3,
                    },
                    {
                      title: "율전 맛집 추천 부탁드립니다",
                      time: "32분 전",
                      comments: 24,
                      likes: 17,
                    },
                  ].map((post, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-grey-50 border border-grey-100"
                    >
                      <p className="text-[12px] font-bold text-grey-900">
                        {post.title}
                      </p>
                      <div className="mt-1.5 flex items-center gap-3 text-[10px] text-grey-400">
                        <span>{post.time}</span>
                        <span>💬 {post.comments}</span>
                        <span>❤️ {post.likes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneMockup>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
