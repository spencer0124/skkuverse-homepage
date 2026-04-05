"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const utilities = [
  {
    icon: "🚌",
    title: "버스 운행 정보",
    description:
      "혜화역 셔틀 운행시간(07:00-23:00), 요금(400원), 결제수단, 정류장 안내를 한눈에.",
  },
  {
    icon: "📦",
    title: "분실물 센터",
    description:
      "분실물 신고 및 조회. 인사캠 600주년기념관 1F, 자과캠 학생회관 1F에서 찾을 수 있어요.",
  },
  {
    icon: "🗺️",
    title: "인터랙티브 플로어 맵",
    description:
      "인사캠 12개 건물 SVG 기반 층별 지도. 터치해서 시설 위치와 소요 시간을 확인하세요.",
  },
  {
    icon: "🧭",
    title: "네이버/카카오맵 연동",
    description:
      "버스 정류장, 건물 위치를 네이버·카카오·애플 지도 앱으로 바로 열어 길찾기하세요.",
  },
];

/* ── 추후 확장 예정 유틸리티 ──
  {
    icon: "📚",
    title: "도서관 좌석",
    description: "도서관 잔여 좌석을 실시간으로 확인하고, 여유 있는 곳을 찾아보세요.",
  },
  {
    icon: "📅",
    title: "시간표",
    description: "수업 시간과 강의실을 한눈에 확인하세요. 수업 전 알림도 받을 수 있어요.",
  },
  {
    icon: "🍚",
    title: "학식 메뉴",
    description: "캠퍼스 내 모든 식당의 오늘 메���를 확인하세요.",
  },
  {
    icon: "💬",
    title: "커뮤니티",
    description: "자유롭게 질문하고 정보를 나눠요. 성균관대 학생만 참여할 수 있어요.",
  },
  {
    icon: "⭐",
    title: "수강 후기",
    description: "실제 수강한 학생들의 솔직한 후기와 평점을 확인할 수 있어요.",
  },
  {
    icon: "🤖",
    title: "AI 학습 도우미",
    description: "AI가 강의 내용을 요약하고, 맞춤형 학습 자료를 추천해 드려요.",
  },
*/

export default function UtilitySection() {
  return (
    <section className="py-24 md:py-32 bg-grey-50">
      <div className="mx-auto max-w-[1140px] px-6">
        <SectionHeading
          label="캠퍼스 유틸리티"
          title={"캠퍼스 생활에\n꼭 필요한 것들"}
          description="자주 쓰는 캠퍼스 정보를 빠르게 확인하세요."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {utilities.map((util, i) => (
            <FeatureCard
              key={util.title}
              icon={util.icon}
              title={util.title}
              description={util.description}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
