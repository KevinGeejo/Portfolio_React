#!/usr/bin/env node

/**
 * Sitemap Generator for Kevin Geejo Portfolio
 * Run this script to generate an updated sitemap.xml
 */

const fs = require('fs');
const path = require('path');

const currentDate = new Date().toISOString().split('T')[0];
const baseUrl = 'https://kevingeejo.me'; // Update this with your actual domain

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#hero</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#projects</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

try {
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated successfully!');
  console.log(`📅 Last updated: ${currentDate}`);
  console.log(`🌐 Base URL: ${baseUrl}`);
  console.log(`📁 Location: ${sitemapPath}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
}

console.log('\n📋 Next steps:');
console.log('1. Update the baseUrl variable with your actual domain');
console.log('2. Add this script to your package.json scripts section');
console.log('3. Run "npm run generate-sitemap" before each deployment');
console.log('4. Submit your sitemap to Google Search Console');