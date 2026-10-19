import type { APIRoute } from 'astro';

const routes = ['/', '/sobre/', '/solucoes/', '/solucoes/residencial/', '/solucoes/condominial/', '/solucoes/corporativo/', '/solucoes/consultoria/', '/solucoes/consultoria/estudo-viabilidade-carregador-eletrico/', '/projetos/', '/areas-atendidas/', '/sao-paulo/', '/sao-paulo/zona-oeste/', '/guias/', '/guias/estudo-de-viabilidade-para-carregador-eletrico/', '/guias/quanto-custa-instalar-wallbox/', '/guias/como-aprovar-carregador-carro-eletrico-no-condominio/', '/guias/wallbox-7-4-11-22-kw/', '/guias/wallbox-ou-carregador-portatil/', '/privacidade/'];

export const GET: APIRoute = ({ site }) => {
  if (!site) return new Response('Configure SITE_URL before publishing the sitemap.', { status: 503 });
  const urls = routes.map((route) => `<url><loc>${new URL(route, site).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
