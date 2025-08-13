/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kpautomation.co.in',
  generateRobotsTxt: true,      
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,

  //key pages (works with /pages or /app router)
  additionalPaths: async (config) => {
    const pages = [
      '/', // Home
      '/products',
      '/corporatetraining',
      '/smartfactory',
      '/industry',
      '/contact',

      // Corporate Training
      '/corporate-training/drives-motors',
      '/corporate-training/industrial-automation-training',
      '/corporate-training/plc-training',
      '/corporate-training/plc-networking',
      '/corporate-training/process-instrumentation',
      '/corporate-training/scada-and-hmi',
      '/corporate-training/servo-motor',

      // Smart Factory
      '/smart-factory/smart-machine',
      '/smart-factory/smart-worker',
      '/smart-factory/smart-security',
      '/smart-factory/smart-vision',

      // Industry
      '/industry/automotive',
      '/industry/food-and-beverages',
      '/industry/manufacturing',
      '/industry/warehouse-and-logistics',
    ];

    return pages.map((p) => config.transform(config, p));
  },
};
