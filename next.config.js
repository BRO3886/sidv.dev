module.exports = {
  target: 'serverless',
  async headers() {
    return [
      {
        source: '/(.*).webp',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
          },
        ],
      },
      {
        source: '/(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
          },
        ],
      },
      {
        source: '/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
          },
        ],
      },
    ];
  },
};
