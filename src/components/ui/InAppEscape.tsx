"use client";

import { useEffect, useState } from "react";

const INAPP_REGEX =
  /KAKAOTALK|kakaotalk|line\/|inapp|snapchat|instagram|everytimeapp|whatsApp|wadiz|FB_IAB|FB4A|FBAN|FBIOS|FBSS|DaumApps|kakaostory|band|twitter|TikTok/i;

export default function InAppEscape() {
  const [escaping, setEscaping] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (!INAPP_REGEX.test(ua)) return;

    const currentUrl = location.href;
    const isIOS = /iPhone|iPad|iPod/.test(ua);

    // 카카오톡
    if (/KAKAOTALK|kakaotalk/i.test(ua)) {
      setEscaping(true);
      location.href =
        "kakaotalk://web/openExternal?url=" + encodeURIComponent(currentUrl);

      setTimeout(() => {
        location.href = isIOS
          ? "kakaoweb://closeBrowser"
          : "kakaotalk://inappbrowser/close";
      }, 300);
      return;
    }

    // Line
    if (/line\//i.test(ua)) {
      setEscaping(true);
      const separator = currentUrl.includes("?") ? "&" : "?";
      location.href = currentUrl + separator + "openExternalBrowser=1";
      return;
    }

    // Android 기타 인앱 → intent로 시스템 기본 브라우저
    if (/Android/i.test(ua)) {
      setEscaping(true);
      const intentUrl = currentUrl.replace(/https?:\/\//i, "");
      location.href = `intent://${intentUrl}#Intent;scheme=https;end`;
      return;
    }

    // iOS 기타 인앱 → 탈출 불가, 안내만 표시
    // (AppBanner에서 처리하지 않으므로 여기서 별도 처리 안 함)
  }, []);

  if (!escaping) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-3 border-brand border-t-transparent rounded-full animate-spin" />
      <p className="text-t5 text-grey-700 font-medium">
        브라우저로 이동 중...
      </p>
    </div>
  );
}
