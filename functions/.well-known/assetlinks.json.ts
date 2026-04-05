export const onRequest: PagesFunction = async () => {
  const assetlinks = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.zoyoong.skkubus",
        sha256_cert_fingerprints: [
          "<EAS_UPLOAD_KEY_SHA256>",
          "<GOOGLE_PLAY_APP_SIGNING_KEY_SHA256>",
        ],
      },
    },
  ];

  return new Response(JSON.stringify(assetlinks), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
