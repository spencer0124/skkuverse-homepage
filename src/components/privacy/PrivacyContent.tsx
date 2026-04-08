"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { privacyPolicy } from "@/data/privacy-policy";

type Lang = "ko" | "zh" | "en";

const langLabels: Record<Lang, string> = {
  ko: "한국어",
  zh: "中文",
  en: "English",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(
        "transition-transform duration-300 shrink-0",
        open && "rotate-180"
      )}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PrivacyContent() {
  const [lang, setLang] = useState<Lang>("ko");
  const [openArticles, setOpenArticles] = useState<Set<number>>(new Set());

  const policy = privacyPolicy[lang];

  const toggleArticle = (index: number) => {
    setOpenArticles((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div>
      {/* Language Tabs */}
      <div className="flex gap-2 mb-10">
        {(Object.keys(langLabels) as Lang[]).map((key) => (
          <button
            key={key}
            onClick={() => {
              setLang(key);
              setOpenArticles(new Set());
            }}
            className={cn(
              "rounded-full px-5 py-2 text-t6 font-medium transition-colors",
              lang === key
                ? "bg-grey-900 text-white"
                : "bg-grey-100 text-grey-600 hover:bg-grey-200"
            )}
          >
            {langLabels[key]}
          </button>
        ))}
      </div>

      {/* Effective Date */}
      <p className="text-t6 text-grey-500 mb-8">{policy.effectiveDate}</p>

      {/* Accordion Articles */}
      <div className="divide-y divide-grey-200">
        {policy.articles.map((article, index) => {
          const isOpen = openArticles.has(index);
          return (
            <div key={`${lang}-${index}`}>
              <button
                onClick={() => toggleArticle(index)}
                className="flex items-center justify-between w-full py-5 text-left cursor-pointer"
              >
                <span className="text-t5 font-bold text-grey-900 pr-4">
                  {article.title}
                </span>
                <ChevronIcon open={isOpen} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-t6 text-grey-700 leading-relaxed whitespace-pre-line">
                      {article.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
