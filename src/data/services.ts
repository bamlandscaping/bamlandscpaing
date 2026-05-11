export interface Service {
  titleKey: string;
  descKey: string;
  icon: string; // SVG path(s)
}

export const services: Service[] = [
  {
    titleKey: "svc1",
    descKey: "svc1",
    icon: '<path d="M12 10a4 4 0 0 0-4 4H4a8 8 0 0 1 16 0h-4a4 4 0 0 0-4-4z"/><path d="M12 2v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M19.07 4.93l-2.83 2.83"/><line x1="2" y1="20" x2="22" y2="20"/>',
  },
  {
    titleKey: "svc2",
    descKey: "svc2",
    icon: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/><path d="M12 4v16"/>',
  },
  {
    titleKey: "svc3",
    descKey: "svc3",
    icon: '<path d="M6 20V10"/><path d="M18 20V4"/><path d="M12 20V7"/><path d="M3 20h18"/>',
  },
  {
    titleKey: "svc4",
    descKey: "svc4",
    icon: '<rect x="1" y="14" width="6" height="6"/><rect x="9" y="10" width="6" height="10"/><rect x="17" y="6" width="6" height="14"/>',
  },
  {
    titleKey: "svc5",
    descKey: "svc5",
    icon: '<path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/>',
  },
  {
    titleKey: "svc6",
    descKey: "svc6",
    icon: '<path d="M2 12h5l3-9 4 18 3-9h5"/>',
  },
  {
    titleKey: "svc7",
    descKey: "svc7",
    icon: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12L12 12"/><path d="M20 4L8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8L20 20"/>',
  },
  {
    titleKey: "svc8",
    descKey: "svc8",
    icon: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5 8-8 6-13"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3"/><path d="M14.1 6a7 7 0 0 0-1.5 4c-1.7-.3-2.8-1-3.5-2.1"/>',
  },
  {
    titleKey: "svc9",
    descKey: "svc9",
    icon: '<path d="M12 2v6"/><path d="M12 22v-6"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M2 12h6"/><path d="M16 12h6"/><path d="M4.93 19.07l4.24-4.24"/><path d="M14.83 9.17l4.24-4.24"/>',
  },
];

// Service titles/descriptions keyed by language
export const serviceTranslations: Record<string, Record<string, string>> = {
  en: {
    svc1_title: "Lawn Mowing & Maintenance",
    svc1_desc: "Regular mowing, edging, and lawn care to keep your yard looking pristine all season long.",
    svc2_title: "Mulch Installation",
    svc2_desc: "Fresh mulch application to enrich soil, prevent weeds, and give your beds a clean, polished look.",
    svc3_title: "Pine Straw Installation",
    svc3_desc: "Professional pine straw spreading for a natural, attractive ground cover that retains moisture.",
    svc4_title: "Retaining Walls",
    svc4_desc: "Sturdy, expertly built retaining walls to manage slopes, prevent erosion, and enhance your landscape.",
    svc5_title: "Garden Bed Maintenance",
    svc5_desc: "Weeding, planting, and ongoing care to keep your flower beds and garden areas vibrant and healthy.",
    svc6_title: "Landscape Design",
    svc6_desc: "Custom landscape design and installation that transforms your outdoor vision into reality.",
    svc7_title: "Bush & Shrub Trimming",
    svc7_desc: "Expert pruning and shaping of bushes and shrubs to maintain a clean, manicured appearance.",
    svc8_title: "Leaf Removal & Cleanup",
    svc8_desc: "Thorough seasonal cleanups including leaf removal, debris clearing, and yard waste hauling.",
    svc9_title: "Pressure Washing",
    svc9_desc: "High-pressure cleaning for driveways, patios, walkways, decks, and exterior surfaces.",
  },
  es: {
    svc1_title: "Corte y Mantenimiento de Césped",
    svc1_desc: "Corte regular, bordeado y cuidado del césped para mantener su jardín impecable toda la temporada.",
    svc2_title: "Instalación de Mantillo",
    svc2_desc: "Aplicación de mantillo fresco para enriquecer el suelo, prevenir malezas y dar un aspecto limpio y pulido.",
    svc3_title: "Instalación de Paja de Pino",
    svc3_desc: "Esparcido profesional de paja de pino para una cobertura natural y atractiva que retiene la humedad.",
    svc4_title: "Muros de Contención",
    svc4_desc: "Muros de contención resistentes y construidos por expertos para manejar pendientes y mejorar su paisaje.",
    svc5_title: "Mantenimiento de Jardines",
    svc5_desc: "Deshierbe, plantación y cuidado continuo para mantener sus áreas de jardín vibrantes y saludables.",
    svc6_title: "Diseño de Paisaje",
    svc6_desc: "Diseño e instalación de paisaje personalizado que transforma su visión exterior en realidad.",
    svc7_title: "Poda de Arbustos",
    svc7_desc: "Poda experta y formación de arbustos para mantener una apariencia limpia y cuidada.",
    svc8_title: "Limpieza y Remoción de Hojas",
    svc8_desc: "Limpiezas estacionales completas incluyendo remoción de hojas, escombros y desechos de jardín.",
    svc9_title: "Lavado a Presión",
    svc9_desc: "Limpieza a alta presión para entradas, patios, caminos, terrazas y superficies exteriores.",
  },
};
