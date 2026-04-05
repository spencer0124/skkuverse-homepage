interface Env {
  ANDROID_PACKAGE_NAME: string;
  ANDROID_SHA256_UPLOAD: string;
  ANDROID_SHA256_SIGNING: string;
}

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const assetlinks = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: env.ANDROID_PACKAGE_NAME,
        sha256_cert_fingerprints: [
          env.ANDROID_SHA256_UPLOAD,
          env.ANDROID_SHA256_SIGNING,
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
