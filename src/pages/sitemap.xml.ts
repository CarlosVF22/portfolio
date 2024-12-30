import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
    const pages = [{ url: "/", lastmod: "2024-12-29" }];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map(
            (page) => `
    <url>
        <loc>${site?.origin}${page.url}</loc>
        <lastmod>${page.lastmod}</lastmod>
    </url>`
        )
        .join("")}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};
