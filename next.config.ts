import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// En dev, React/Turbopack necesitan 'unsafe-eval' para debugging.
// En producción React nunca usa eval(), así que lo removemos.
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

const securityHeaders = [
  // Evita que la página sea embebida en iframes de otros dominios
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Evita que el navegador detecte MIME types incorrectamente
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controla cuánta info de referrer se envía al navegar
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Fuerza HTTPS por 1 año e incluye subdominios
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Desactiva funciones del navegador que no necesitas
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      // 'self' + dominios de Vercel (Speed Insights, Analytics, hot-reload en dev)
      "connect-src 'self' https://*.vercel-insights.com https://*.vercel-analytics.com https://vitals.vercel-insights.com wss://*.vercel.app",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Aplica los headers a todas las rutas
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Elimina console.log en producción
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
