export const onRequest: PagesFunction = async () => {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "<APPLE_TEAM_ID>.com.example.skkumap",
          paths: [
            "NOT /",
            "NOT /privacy",
            "NOT /terms",
            "/bus/*",
            "/campus",
            "/map/*",
            "/search",
            "/notice/*",
          ],
        },
      ],
    },
  };

  return new Response(JSON.stringify(aasa), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
