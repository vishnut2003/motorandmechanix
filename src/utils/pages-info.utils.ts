
export const pagesInfo: {
  [key: string]: {
    key: string,
    label: string,
    footer_label: string,
    path: string,
    regex: RegExp,
    subpages?: {
      label: string,
      href: string,
    }[]
  }
} = {
  home: {
    key: "home",
    label: "Home",
    footer_label: "Home",
    path: "/",
    regex: /^\/$/,
  },
  services: {
    key: "services",
    label: "SERVICES",
    footer_label: "Our Services",
    path: "/services",
    regex: /^\/services$/,
    subpages: [
      {
        label: "auto glass repair in noida",
        href: "/auto-glass-repair-in-noida",
      },
      {
        label: "auto repair shop in noida",
        href: "/auto-repair-shop-in-noida",
      },
      {
        label: "body shop in noida",
        href: "/body-shop-in-noida"
      },
      {
        label: "brake repair in noida",
        href: "/brake-repair-in-noida",
      },
      {
        label: "car ac repair in noida",
        href: "/car-ac-repair-in-noida"
      },
      {
        label: "car mechanic in noida",
        href: "/car-mechanic-in-noida"
      },
      {
        label: "car repair in noida",
        href: "/car-repair-in-noida"
      },
      {
        label: "car servicing in noida",
        href: "/car-servicing-in-noida"
      },
      {
        label: "cashless car insurance claim in noida",
        href: "/cashless-car-insurance-claim-in-noida"
      },
      {
        label: "emergency car mechanic in noida",
        href: "/emergency-car-mechanic-in-noida",
      },
      {
        label: "transmission repair in noida",
        href: "/transmission-repair-in-noida"
      },
      {
        label: "wheel alignment balancing in noida",
        href: "/wheel-alignment-balancing-in-noida"
      }
    ]
  },
  tyres: {
    key: "tyres",
    label: "TYRES",
    footer_label: "Tyres",
    path: "/tyres",
    regex: /^\/tyres$/,
    subpages: [
      {
        label: "tyre shop in noida",
        href: "/tyre-shop-in-noida"
      },
    ]
  },
  multibrand: {
    key: "multibrand",
    label: "MULTI-BRAND CAR SERVICE",
    footer_label: "Multi-brand Car Service",
    path: "/multi-brand",
    regex: /^\/multi-brand$/,
  },
  why_us: {
    key: "why_us",
    label: "WHY US",
    footer_label: "Why Choose Us for Car Repairs",
    path: "/why-us",
    regex: /^\/why-us$/,
  },
  blogs: {
    key: "blogs",
    label: "BLOGS",
    footer_label: "Blogs",
    path: "/blogs",
    regex: /^\/blogs$/,
  },
  contact_us: {
    key: "contact_us",
    label: "CONTACT US",
    footer_label: "Contact Us | Expert Car Repair Solutions in Noida",
    path: "/contact-us",
    regex: /^\/contact-us$/,
  },
  workshop: {
    key: "workshop",
    label: "Our Workshop",
    footer_label: "Our Workshop",
    path: "/tyres",
    regex: /^\/tyres$/,
  },
  brands: {
    key: "brands",
    label: "Brands",
    footer_label: "Brands",
    path: "/multi-brand",
    regex: /^\/multi-brand$/,
  },
  tyres_wheel_care: {
    key: "tyres_wheel_care",
    label: "Tyres & Wheel Care",
    footer_label: "Tyres & Wheel Care",
    path: "/tyres",
    regex: /^\/tyres$/,
  }
};

export const navbarLinks = [
  pagesInfo.tyres,
  pagesInfo.services,
  pagesInfo.multibrand,
  pagesInfo.why_us,
  pagesInfo.blogs,
  pagesInfo.contact_us,
];

export const footerNavigation = [
  pagesInfo.workshop,
  pagesInfo.services,
  pagesInfo.brands,
  pagesInfo.why_us,
  pagesInfo.blogs,
  pagesInfo.contact_us,
  pagesInfo.tyres_wheel_care,
];
