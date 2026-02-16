
export const pagesInfo = {
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
  },
  tyres: {
    key: "tyres",
    label: "TYRES",
    footer_label: "Tyres",
    path: "/tyres",
    regex: /^\/tyres$/,
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
