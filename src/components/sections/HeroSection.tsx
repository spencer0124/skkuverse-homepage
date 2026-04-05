"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-light via-white to-grey-50">
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand/5" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-brand/3" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-t5 font-bold text-brand mb-6">
            성균관대 캠퍼스 슈퍼앱
          </p>
        </motion.div>

        <motion.h1
          className="text-t1 md:text-hero font-bold text-grey-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          셔틀버스부터 캠퍼스 맵까지,
          <br />
          <span className="text-brand">하나의 앱</span>으로
        </motion.h1>

        <motion.p
          className="mt-6 text-t5 md:text-t4 text-grey-500 font-normal max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          실시간 버스 위치, 건물 층별 안내, 캠퍼스 지도.
          <br />
          인사캠과 자과캠, 두 캠퍼스 생활을
          <br />
          스꾸버스 하나로 시작하세요.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Button href="#download" size="lg">
            앱 다운로드
          </Button>
          <Button href="#features" variant="secondary" size="lg">
            기능 살펴보기
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-grey-300 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-grey-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
