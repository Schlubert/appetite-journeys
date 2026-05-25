// data/slowRoad.ts
import { getImagePath } from "../utils/paths";

export type OptionalActivity = {
  name: string;
  description: string;
  price: string;
  duration?: string;
  included?: string[];
  images?: string[];
  bookingNote?: string;
};

export type ItineraryStop = {
  day: number;
  title: { en: string; fr: string; de: string };
  description: { en: string[]; fr: string[]; de: string[] };
  accommodation?: { en: string; fr: string; de: string };
  includedActivities?: { en: string[]; fr: string[]; de: string[] };
  optionalActivities?: { en: string[]; fr: string[]; de: string[] };
  optionalActivitiesDetailed?: OptionalActivity[];
  meals?: { en: string[]; fr: string[]; de: string[] };
  images?: string[];
};

export type DepartureDate = {
  date: string;
  status?: "sold-out" | "limited" | "available";
};

export type Tour = {
  name: string;
  durationDays: number;
  price?: { en: string; fr: string; de: string };
  singleSupplement?: { en: string; fr: string; de: string };
  departureDates?: DepartureDate[];
  summary: { en: string[]; fr: string[]; de: string[] };
  heroImages: string[];
  itinerary: ItineraryStop[];
  mapImage?: string;
  whatsIncluded?: { en: string[]; fr: string[]; de: string[] };
};

export const slowRoad: Tour = {
  name: "Slow Road to Queenstown",
  durationDays: 12,
  price: {
    en: "From NZ$14,990",
    fr: "À partir de NZ$14 990",
    de: "Ab NZ$14.990",
  },
  singleSupplement: {
    en: "NZ$5,775",
    fr: "NZ$5 775",
    de: "NZ$5.775",
  },
  departureDates: [
    { date: "2026-09-13", status: "limited" }
  ],
  mapImage: getImagePath('ch/East.png'),
  summary: {
    en: [
      "Spend some time exploring the scenic routes and charming towns between New Zealand's wildlife capital and heritage city of Dunedin and the adventurous city of Queenstown.",
      "This leisurely 12-day journey takes you through the heart of the South Island, with plenty of time to discover local culinary delights, stunning natural landscapes, and vibrant communities.",
      "From wine tastings to artisan bakeries, from dramatic fjords to golden beaches, experience the true essence of Aotearoa at a pace that lets you savour every moment."
    ],
    fr: [
      "Prenez le temps d'explorer les routes pittoresques et les charmantes villes entre Dunedin, la capitale faunique et ville du patrimoine de Nouvelle-Zélande, et la ville aventureuse de Queenstown.",
      "Ce voyage tranquille de 12 jours vous fait découvrir le cœur de l'île du Sud, avec beaucoup de temps pour découvrir les délices culinaires locaux, les paysages naturels époustouflants et les communautés dynamiques.",
      "Des dégustations de vins aux boulangeries artisanales, des fjords spectaculaires aux plages dorées, expérimentez l'essence véritable d'Aotearoa à un rythme qui vous permet de savourer chaque instant."
    ],
    de: [
      "Nehmen Sie sich Zeit, um die malerischen Routen und charmanten Städte zwischen Dunedin, Neuseelands Tierhaubuptstadt und Kulturstadt, und der abenteuerlichen Stadt Queenstown zu erkunden.",
      "Diese gemächliche 12-tägige Reise führt Sie ins Herz der Südinsel mit viel Zeit, um lokale kulinarische Köstlichkeiten, atemberaubende Naturlandschaften und lebendige Gemeinschaften zu entdecken.",
      "Von Weinverkostungen bis zu Handwerksbäckereien, von dramatischen Fjorden bis zu goldenen Stränden, erleben Sie das wahre Wesen von Aotearoa in einem Tempo, das es Ihnen ermöglicht, jeden Moment zu genießen."
    ]
  },
  heroImages: [
    getImagePath("nz/nz-hero.jpg"),
    getImagePath("nz/station.jpg"),
    getImagePath("nz/queenstown.jpg"),
  ],
  itinerary: [
    {
      day: 1,
      title: {
        en: "Arrival in Christchurch and welcome dinner",
        fr: "Arrivée à Christchurch et dîner de bienvenue",
        de: "Ankunft in Christchurch und Willkommensdinner"
      },
      description: {
        en: [
          "Welcome to the South Island of New Zealand! You'll be met at Christchurch Airport and transferred to your accommodation.",
          "Settle in, relax, and join your group this evening for a welcome dinner where you'll meet your fellow travellers and your experienced tour leader.",
          "The rest of the evening is yours to enjoy and prepare for the adventures that lie ahead."
        ],
        fr: [
          "Bienvenue sur l'île du Sud de la Nouvelle-Zélande! Vous serez accueilli à l'aéroport de Christchurch et transféré à votre logement.",
          "Installez-vous, détendez-vous, et rejoignez votre groupe ce soir pour un dîner de bienvenue où vous rencontrerez vos compagnons de voyage et votre chef de groupe expérimenté.",
          "Le reste de la soirée est vôtre pour profiter et vous préparer aux aventures qui vous attendent."
        ],
        de: [
          "Willkommen auf der Südinsel Neuseelands! Sie werden am Flughafen Christchurch abgeholt und zu Ihrer Unterkunft gebracht.",
          "Machen Sie es sich gemütlich, entspannen Sie sich, und treten Sie heute Abend Ihrer Gruppe zum Willkommensdinner bei, wo Sie Ihre Mitreisenden und Ihren erfahrenen Reiseleiter treffen.",
          "Der Rest des Abends gehört Ihnen, um zu genießen und sich auf die Abenteuer vorzubereiten, die vor Ihnen liegen."
        ]
      },
      accommodation: {
        en: "Christchurch",
        fr: "Christchurch",
        de: "Christchurch"
      },
      includedActivities: {
        en: ["Welcome dinner"],
        fr: ["Dîner de bienvenue"],
        de: ["Willkommensdinner"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Dinner"],
        fr: ["Dîner"],
        de: ["Abendessen"]
      },
      images: [getImagePath('nz/curio-bay.jpg'), getImagePath('nz/purakaunui-falls.jpg'), getImagePath('nz/te-anau.jpg')]
    },
    {
      day: 2,
      title: {
        en: "Christchurch to Tekapo via the Rakaia Gorge",
        fr: "Christchurch à Tekapo via les Gorges du Rakaia",
        de: "Christchurch nach Tekapo über die Rakaia-Schlucht"
      },
      description: {
        en: [
          "Depart Christchurch and head toward the dramatic Rakaia Gorge, one of New Zealand's most spectacular natural features.",
          "The winding road offers breathtaking views as you climb toward the high country.",
          "Arrive in Tekapo, a charming alpine village famous for its stunning turquoise lake and clear night skies. The evening is yours to explore the town or relax at your accommodation."
        ],
        fr: [
          "Quittez Christchurch et dirigez-vous vers les spectaculaires Gorges du Rakaia, l'une des formations naturelles les plus impressionnantes de la Nouvelle-Zélande.",
          "La route sinueuse offre des vues à couper le souffle alors que vous grimpez vers le haut pays.",
          "Arrivez à Tekapo, un charmant village alpin célèbre pour son magnifique lac turquoise et ses ciels nocturnes clairs. La soirée est vôtre pour explorer la ville ou vous détendre à votre logement."
        ],
        de: [
          "Verlassen Sie Christchurch und fahren Sie zu den dramatischen Rakaia-Schluchten, einem der spektakulärsten Naturmerkmale Neuseelands.",
          "Die gewundene Straße bietet atemberaubende Ausblicke, während Sie sich dem Hochland nähern.",
          "Kommen Sie in Tekapo an, einem charmanten Alpendorf, das für seinen atemberaubenden türkisfarbenen See und klare Nachthimmel berühmt ist. Der Abend gehört Ihnen, um die Stadt zu erkunden oder sich in Ihrer Unterkunft zu entspannen."
        ]
      },
      accommodation: {
        en: "Tekapo",
        fr: "Tekapo",
        de: "Tekapo"
      },
      includedActivities: {
        en: ["Scenic drive through high country"],
        fr: ["Promenade pittoresque à travers le haut pays"],
        de: ["Malerische Fahrt durch das Hochland"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [getImagePath('ch/rhinefalls.jpg'), getImagePath('ch/schaffhausen.jpg'), getImagePath('ch/munotview.jpg')]
    },
    {
      day: 3,
      title: {
        en: "Tekapo to Wanaka",
        fr: "Tekapo à Wanaka",
        de: "Tekapo nach Wanaka"
      },
      description: {
        en: [
          "Today's journey takes you through some of New Zealand's most spectacular mountain scenery.",
          "You'll cross through the Pisa Range and descend into the Wanaka basin, surrounded by stunning peaks and pristine wilderness.",
          "Arrive in Wanaka, a picturesque lakeside town known for its outdoor activities and welcoming atmosphere. Spend the afternoon exploring at your leisure."
        ],
        fr: [
          "Le voyage d'aujourd'hui vous fait traverser certains des paysages montagneux les plus spectaculaires de la Nouvelle-Zélande.",
          "Vous traverserez la chaîne de Pisa et descendrez dans le bassin de Wanaka, entouré de pics époustouflants et de nature vierge.",
          "Arrivez à Wanaka, une charmante ville au bord du lac connue pour ses activités de plein air et son atmosphère accueillante. Passez l'après-midi à explorer à votre rythme."
        ],
        de: [
          "Die heutige Reise führt Sie durch einige der spektakulärsten Berglandschaften Neuseelands.",
          "Sie werden die Pisa-Kette überqueren und in das Wanaka-Becken hinabsteigen, umgeben von atemberaubenden Gipfeln und unberührter Wildnis.",
          "Kommen Sie in Wanaka an, einer malerischen Seeuferstadt, die für ihre Outdoor-Aktivitäten und gastfreundliche Atmosphäre bekannt ist. Verbringen Sie den Nachmittag damit, die Gegend in Ihrem eigenen Tempo zu erkunden."
        ]
      },
      accommodation: {
        en: "Wanaka",
        fr: "Wanaka",
        de: "Wanaka"
      },
      includedActivities: {
        en: ["Mountain scenery drive"],
        fr: ["Promenade pittoresque en montagne"],
        de: ["Fahrt durch Berglandschaften"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [getImagePath('ch/gottlieben1.jpeg'), getImagePath('ch/gottlieben2.jpeg'), getImagePath('Konstanz1.jpeg')]
    },
    {
      day: 4,
      title: {
        en: "Wanaka to Queenstown via Pembroke Patisserie, Cloudy Bay Shed, and Mount Difficulty Winery",
        fr: "Wanaka à Queenstown via Pembroke Patisserie, Cloudy Bay Shed et Mount Difficulty Winery",
        de: "Wanaka nach Queenstown über Pembroke Patisserie, Cloudy Bay Shed und Mount Difficulty Winery"
      },
      description: {
        en: [
          "Start the day with a visit to Pembroke Patisserie, a family-run bakery renowned for its delicious pastries and cakes.",
          "Next, we head to the Cloudy Bay Shed winery for a tour and tasting of their renowned Sauvignon Blanc and Pinot Noir wines.",
          "We then visit Mount Difficulty Winery in the Bannockburn region for lunch and a tasting of their exceptional wines.",
          "After lunch, continue to Queenstown, where the evening is yours to explore the vibrant town centre, stroll along the lakefront, or relax and enjoy the stunning alpine scenery."
        ],
        fr: [
          "Commencez la journée avec une visite à Pembroke Patisserie, une boulangerie familiale renommée pour ses délicieuses pâtisseries et gâteaux.",
          "Ensuite, nous nous dirigeons vers la cave Cloudy Bay Shed pour une visite et une dégustation de leurs célèbres vins Sauvignon Blanc et Pinot Noir.",
          "Nous visitons ensuite Mount Difficulty Winery dans la région de Bannockburn pour le déjeuner et une dégustation de leurs vins exceptionnels.",
          "Après le déjeuner, continuez vers Queenstown, où la soirée est vôtre pour explorer le centre-ville dynamique, faire une promenade le long du front de lac, ou vous détendre et profiter de la vue alpine époustouflante."
        ],
        de: [
          "Beginnen Sie den Tag mit einem Besuch in Pembroke Patisserie, einer familiengeführten Bäckerei, die für ihre köstlichen Gebäcke und Kuchen bekannt ist.",
          "Als nächstes fahren wir zum Weingut Cloudy Bay Shed für eine Führung und Verkostung ihrer berühmten Sauvignon Blanc und Pinot Noir Weine.",
          "Wir besuchen dann Mount Difficulty Winery in der Region Bannockburn zum Mittagessen und zur Verkostung ihrer außergewöhnlichen Weine.",
          "Nach dem Mittagessen fahren Sie nach Queenstown, wo der Abend Ihnen gehört, um das lebendige Stadtzentrum zu erkunden, am Seeufer spazieren zu gehen oder sich zu entspannen und die atemberaubende Alpenlandschaft zu genießen."
        ]
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown"
      },
      includedActivities: {
        en: ["Pembroke Patisserie visit", "Cloudy Bay Shed winery tour and tasting", "Mount Difficulty winery lunch and tasting"],
        fr: ["Visite de Pembroke Patisserie", "Visite et dégustation au domaine vinicole Cloudy Bay Shed", "Déjeuner et dégustation à Mount Difficulty"],
        de: ["Besuch von Pembroke Patisserie", "Führung und Verkostung im Weingut Cloudy Bay Shed", "Mittagessen und Verkostung bei Mount Difficulty"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast", "Lunch"],
        fr: ["Petit-déjeuner", "Déjeuner"],
        de: ["Frühstück", "Mittagessen"]
      },
      images: [getImagePath('bodensee.jpeg'), getImagePath('lindau.jpeg'), getImagePath('ch/wetliweinkeller.jpg')]
    },
    {
      day: 5,
      title: {
        en: "Arrowtown and the Gibbston Valley",
        fr: "Arrowtown et la Vallée de Gibbston",
        de: "Arrowtown und das Gibbston Valley"
      },
      description: {
        en: [
          "Today we head to the charming town of Arrowtown, known for its gold rush history and vibrant autumn colours.",
          "After exploring the town, we visit two wineries in the Gibbston Valley, one of New Zealand's most prestigious wine regions.",
          "The rest of the day is free to explore Queenstown at your leisure. You might want to take a ride on the Skyline Gondola for panoramic views, or perhaps book an adventure activity like jet boating or bungee jumping."
        ],
        fr: [
          "Aujourd'hui, nous nous dirigeons vers la charmante ville d'Arrowtown, connue pour son histoire de ruée vers l'or et ses couleurs automnales vibrantes.",
          "Après avoir exploré la ville, nous visitons deux domaines vinicoles dans la vallée de Gibbston, l'une des régions vinicoles les plus prestigieuses de la Nouvelle-Zélande.",
          "Le reste de la journée est libre pour explorer Queenstown à votre rythme. Vous pouvez faire un tour en téléphérique de Skyline pour des vues panoramiques, ou peut-être réserver une activité d'aventure comme le jet ski ou le saut à l'élastique."
        ],
        de: [
          "Heute fahren wir in die charmante Stadt Arrowtown, die für ihre Goldgräbergeschichte und leuchtenden Herbstfarben bekannt ist.",
          "Nach der Erkundung der Stadt besuchen wir zwei Weingüter im Gibbston Valley, einer der renommiertesten Weinregionen Neuseelands.",
          "Der Rest des Tages steht Ihnen frei, um Queenstown in Ihrem eigenen Tempo zu erkunden. Sie können eine Fahrt mit der Skyline Gondel für Panoramablicke machen oder vielleicht eine Abenteueraktivität wie Jetbootfahren oder Bungee-Jumping buchen."
        ]
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown"
      },
      includedActivities: {
        en: ["Arrowtown town exploration", "Two winery tours and tastings"],
        fr: ["Exploration de la ville d'Arrowtown", "Deux visites et dégustations de domaines vinicoles"],
        de: ["Erkundung der Stadt Arrowtown", "Zwei Weingut-Führungen und Verkostungen"]
      },
      optionalActivities: {
        en: ["Skyline Gondola", "Adventure activities (jet boating, bungee jumping)"],
        fr: ["Remontée mécanique Skyline", "Activités d'aventure (jet ski, saut à l'élastique)"],
        de: ["Skyline Gondel", "Abenteueraktivitäten (Jetbootfahren, Bungee-Jumping)"]
      },
      optionalActivitiesDetailed: [
        {
          name: "Gourmet Dinner Experience",
          description: "Enjoy a multi-course gourmet dinner at a premier Queenstown restaurant with wine pairings and views over Lake Wakatipu.",
          price: "NZ$185 per person",
          duration: "3 hours",
          included: ["3-course dinner", "Wine pairings", "Lake views"],
          bookingNote: "Must be booked in advance. Smart casual dress recommended."
        }
      ],
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [getImagePath("ch/appenzell.jpeg"), getImagePath("ch/santisccar.jpeg"), getImagePath("ch/santisbarrel.jpg")]
    },
    {
      day: 6,
      title: {
        en: "Queenstown Free Day",
        fr: "Jour libre à Queenstown",
        de: "Freier Tag in Queenstown"
      },
      description: {
        en: [
          "Today is yours to discover Queenstown at your own pace.",
          "Options include: scenic walks around the lake, a visit to the Jet Boat Thrills for an adrenaline-pumping experience, exploring the shops and cafes, or taking a scenic flight over the region.",
          "You could also relax at a spa, visit a local gallery, or enjoy a leisurely lunch overlooking Lake Wakatipu."
        ],
        fr: [
          "Aujourd'hui est vôtre pour découvrir Queenstown à votre rythme.",
          "Les options incluent: des promenades pittoresques autour du lac, une visite aux Jet Boat Thrills pour une expérience palpitante, l'exploration des boutiques et cafés, ou un vol panoramique au-dessus de la région.",
          "Vous pourriez également vous détendre dans un spa, visiter une galerie locale, ou profiter d'un déjeuner tranquille avec vue sur le lac Wakatipu."
        ],
        de: [
          "Heute gehört Ihnen, um Queenstown in Ihrem eigenen Tempo zu entdecken.",
          "Optionen sind: Malerische Spaziergänge rund um den See, ein Besuch bei Jet Boat Thrills für ein spannendes Erlebnis, Erkundung von Läden und Cafés oder ein Panoramaflug über die Region.",
          "Sie könnten auch in einem Spa entspannen, eine lokale Galerie besuchen oder ein gemütliches Mittagessen mit Blick auf den Lake Wakatipu genießen."
        ]
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown"
      },
      includedActivities: {
        en: ["Free day to explore"],
        fr: ["Journée libre pour explorer"],
        de: ["Freier Tag zum Erkunden"]
      },
      optionalActivities: {
        en: ["Scenic walks", "Jet boat thrills", "Scenic flights", "Spa", "Shopping"],
        fr: ["Promenades pittoresques", "Jet boat thrills", "Vols panoramiques", "Spa", "Shopping"],
        de: ["Malerische Spaziergänge", "Jet Boat Thrills", "Panoramaflüge", "Spa", "Shopping"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [getImagePath('ch/stgallen1.jpeg'), getImagePath('ch/stgallen2.jpg'), getImagePath('ch/abbey.jpg')]
    },
    {
      day: 7,
      title: {
        en: "Queenstown to Te Anau via Milford Sound",
        fr: "Queenstown à Te Anau via Milford Sound",
        de: "Queenstown nach Te Anau über den Milford Sound"
      },
      description: {
        en: [
          "Depart Queenstown and head toward Milford Sound, one of the world's greatest natural wonders.",
          "The journey takes you through dramatic mountain passes, past cascading waterfalls, and through thick native bush.",
          "Upon arrival at Milford, board a scenic cruise through the fjord, where you'll witness towering peaks, pristine rainforest, and possibly waterfalls and marine wildlife.",
          "Later, drive to Te Anau, a gateway town to Fiordland National Park, where you'll settle in for the evening."
        ],
        fr: [
          "Quittez Queenstown et dirigez-vous vers Milford Sound, l'une des plus grandes merveilles naturelles du monde.",
          "Le voyage vous fait traverser des cols montagneux dramatiques, passer des chutes d'eau en cascade et traverser une brousse indigène épaisse.",
          "À votre arrivée à Milford, embarquez pour une croisière pittoresque à travers le fjord, où vous verrez des pics imposants, une forêt tropicale vierge et peut-être des chutes d'eau et de la faune marine.",
          "Plus tard, conduisez à Te Anau, une ville d'accès au Parc national de Fiordland, où vous vous installerez pour la soirée."
        ],
        de: [
          "Verlassen Sie Queenstown und fahren Sie zu Milford Sound, einem der größten Naturwunder der Welt.",
          "Die Reise führt Sie durch dramatische Bergpässe, vorbei an kaskadierenden Wasserfällen und durch dichten einheimischen Busch.",
          "Nach Ihrer Ankunft in Milford besteigen Sie eine malerische Kreuzfahrt durch den Fjord, wo Sie imposante Gipfel, unberührten Regenwald und möglicherweise Wasserfälle und Meerestiere sehen werden.",
          "Später fahren Sie nach Te Anau, einer Eingangstadt zum Fiordland National Park, wo Sie sich für den Abend einrichten werden."
        ]
      },
      accommodation: {
        en: "Te Anau",
        fr: "Te Anau",
        de: "Te Anau"
      },
      includedActivities: {
        en: ["Scenic drive to Milford Sound", "Milford Sound cruise"],
        fr: ["Promenade pittoresque à Milford Sound", "Croisière Milford Sound"],
        de: ["Malerische Fahrt zum Milford Sound", "Milford Sound Kreuzfahrt"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [getImagePath('vaduz.jpg'), getImagePath('ch/davos.jpg'), getImagePath('ch/engadiner.jpg')]
    },
    {
      day: 8,
      title: {
        en: "Te Anau to Invercargill via Riverton and the Southern Scenic Route",
        fr: "Te Anau à Invercargill via Riverton et la Route Pittoresque du Sud",
        de: "Te Anau nach Invercargill über Riverton und die Southern Scenic Route"
      },
      description: {
        en: [
          "Leave Te Anau and travel south through New Zealand's wilderness toward Invercargill.",
          "We pass through charming Riverton, a historic gold rush settlement nestled between two rivers.",
          "Continue on the Southern Scenic Route, one of New Zealand's most spectacular drives, passing through pristine rainforest and alongside dramatic coastlines.",
          "Visit a local distillery to learn about and sample spirits produced in this region.",
          "Arrive in Invercargill, New Zealand's southernmost city, for an evening of relaxation."
        ],
        fr: [
          "Quittez Te Anau et voyagez vers le sud à travers la nature sauvage de la Nouvelle-Zélande en direction d'Invercargill.",
          "Nous passons par la charmante Riverton, un établissement historique de ruée vers l'or niché entre deux rivières.",
          "Continuez sur la Route Pittoresque du Sud, l'une des routes les plus spectaculaires de la Nouvelle-Zélande, passant par une forêt tropicale vierge et le long de côtes dramatiques.",
          "Visitez une distillerie locale pour en savoir plus et déguster les alcools produits dans cette région.",
          "Arrivez à Invercargill, la ville la plus méridionale de la Nouvelle-Zélande, pour une soirée de détente."
        ],
        de: [
          "Verlassen Sie Te Anau und fahren Sie südlich durch die Wildnis Neuseelands nach Invercargill.",
          "Wir fahren durch das charmante Riverton, eine historische Goldgräbersiedlung, die zwischen zwei Flüssen liegt.",
          "Fahren Sie weiter auf der Southern Scenic Route, einer der spektakulärsten Fahrten Neuseelands, vorbei an unberührtem Regenwald und dramatischen Küsten.",
          "Besuchen Sie eine lokale Destillerie, um mehr über die in dieser Region hergestellten Spirituosen zu erfahren und sie zu kosten.",
          "Kommen Sie in Invercargill an, Neuseelands südlichste Stadt, für einen entspannten Abend."
        ]
      },
      accommodation: {
        en: "Invercargill",
        fr: "Invercargill",
        de: "Invercargill"
      },
      includedActivities: {
        en: ["Southern Scenic Route drive", "Distillery visit and tasting"],
        fr: ["Promenade de la Route Pittoresque du Sud", "Visite de distillerie et dégustation"],
        de: ["Fahrt auf der Southern Scenic Route", "Destilleriebesuch und Verkostung"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [getImagePath("ch/muottas_muragl.jpg"), getImagePath("ch/muottas_muragl2.jpg")]
    },
    {
      day: 9,
      title: {
        en: "Invercargill to Dunedin via the Catlins, Curio Bay, and Nugget Point",
        fr: "Invercargill à Dunedin via les Catlins, Curio Bay et Nugget Point",
        de: "Invercargill nach Dunedin über die Catlins, Curio Bay und Nugget Point"
      },
      description: {
        en: [
          "Embark on one of New Zealand's most scenic coastal drives through the Catlins region.",
          "Stop at Curio Bay to see the ancient Jurassic forest fossils and experience the raw power of the Southern Ocean.",
          "Visit Nugget Point, where you'll spot nesting yellow-eyed penguins and seals in their natural habitat.",
          "Continue north along the dramatic coastline before arriving in Dunedin, a vibrant cultural city with Scottish heritage and a rich food scene.",
          "The evening is yours to explore Dunedin's historic streets and local eateries."
        ],
        fr: [
          "Embarquez pour l'une des promenades côtières les plus pittoresques de la Nouvelle-Zélande à travers la région des Catlins.",
          "Arrêtez-vous à Curio Bay pour voir les fossiles de forêt jurassique ancienne et expérimenter la puissance brute de l'océan austral.",
          "Visitez Nugget Point, où vous verrez des manchots aux yeux jaunes nichant et des phoques dans leur habitat naturel.",
          "Continuez vers le nord le long de la côte dramatique avant d'arriver à Dunedin, une ville culturelle dynamique avec un patrimoine écossais et une riche scène gastronomique.",
          "La soirée est vôtre pour explorer les rues historiques de Dunedin et les restaurants locaux."
        ],
        de: [
          "Machen Sie sich auf zu einem der malerischsten Küstenfahrten Neuseelands durch die Region Catlins.",
          "Halten Sie in Curio Bay an, um die alten Fossilien des Jurassic Forest zu sehen und die rohe Kraft des südlichen Ozeans zu erleben.",
          "Besuchen Sie Nugget Point, wo Sie nistende gelbäugige Pinguine und Robben in ihrem natürlichen Lebensraum sehen werden.",
          "Fahren Sie weiter nach Norden entlang der dramatischen Küstenlinie, bevor Sie in Dunedin ankommen, einer lebendigen Kulturstadt mit schottischem Erbe und reichhaltiger Gastronomieszene.",
          "Der Abend gehört Ihnen, um die historischen Straßen von Dunedin und lokale Restaurants zu erkunden."
        ]
      },
      accommodation: {
        en: "Dunedin",
        fr: "Dunedin",
        de: "Dunedin"
      },
      includedActivities: {
        en: ["Catlins coastal drive", "Curio Bay visit", "Nugget Point wildlife viewing"],
        fr: ["Promenade côtière des Catlins", "Visite de Curio Bay", "Observation de la faune de Nugget Point"],
        de: ["Küstenfahrt durch Catlins", "Besuch in Curio Bay", "Wildtierbeobachtung bei Nugget Point"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [getImagePath('ch/GlacierLandwasser.jpg'), getImagePath('ch/gexpress1.jpg'), getImagePath('ch/gexpress2.jpg')]
    },
    {
      day: 10,
      title: {
        en: "Dunedin highlights and culinary exploration",
        fr: "Points forts de Dunedin et exploration culinaire",
        de: "Höhepunkte von Dunedin und kulinarische Erkundung"
      },
      description: {
        en: [
          "Explore Dunedin, home to New Zealand's only castle and a vibrant cultural scene.",
          "Visit the historic Larnach Castle, perched on a hilltop with panoramic views of Dunedin and the Otago Peninsula.",
          "Join a walking tour of the city centre, discovering Victorian architecture, local galleries, and hidden laneways filled with cafes and restaurants.",
          "This evening, enjoy a special culinary experience showcasing Dunedin's local food scene and regional producers."
        ],
        fr: [
          "Explorez Dunedin, la seule maison d'un château de la Nouvelle-Zélande et une scène culturelle dynamique.",
          "Visitez le château historique de Larnach, perché sur une colline avec une vue panoramique sur Dunedin et la péninsule d'Otago.",
          "Rejoignez une visite guidée du centre-ville, découvrant l'architecture victorienne, les galeries locales et les petites rues cachées remplies de cafés et de restaurants.",
          "Ce soir, profitez d'une expérience culinaire spéciale mettant en valeur la scène alimentaire locale de Dunedin et les producteurs régionaux."
        ],
        de: [
          "Erkunden Sie Dunedin, Heimat von Neuseelands einzigem Schloss und einer lebendigen Kulturszene.",
          "Besuchen Sie das historische Schloss Larnach, auf einem Hügel mit Panoramablick auf Dunedin und die Otago-Halbinsel gelegen.",
          "Nehmen Sie an einer Führung durch das Stadtzentrum teil und entdecken Sie viktorianische Architektur, lokale Galerien und verborgene Gassen voller Cafés und Restaurants.",
          "Genießen Sie heute Abend ein besonderes kulinarisches Erlebnis, das Dunedins lokale Gastronomieszene und regionale Produzenten präsentiert."
        ]
      },
      accommodation: {
        en: "Dunedin",
        fr: "Dunedin",
        de: "Dunedin"
      },
      includedActivities: {
        en: ["Larnach Castle tour", "City centre walking tour", "Culinary experience"],
        fr: ["Visite du château Larnach", "Visite guidée du centre-ville", "Expérience culinaire"],
        de: ["Schloss Larnach Führung", "Stadtzentrum Wandertour", "Kulinarisches Erlebnis"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [getImagePath('ch/andermatt.jpg'), getImagePath('ch/glarus.jpg'), getImagePath('ch/fassbind.jpeg')]
    },
    {
      day: 11,
      title: {
        en: "Dunedin Free Day with optional return to Christchurch",
        fr: "Jour libre à Dunedin avec retour optionnel à Christchurch",
        de: "Freier Tag in Dunedin mit optionaler Rückkehr nach Christchurch"
      },
      description: {
        en: [
          "Today is yours to enjoy Dunedin at your leisure, or you may choose to return to Christchurch to extend your stay in New Zealand.",
          "If staying in Dunedin, consider visiting the Otago Peninsula to see fur seals and penguins, exploring the Otago Museum, or enjoying a leisurely lunch at a local cafe.",
          "For those returning to Christchurch, internal flights or scenic drives are available.",
          "Your tour leader will assist with arrangements for either option."
        ],
        fr: [
          "Aujourd'hui est vôtre pour profiter de Dunedin à votre rythme, ou vous pouvez choisir de retourner à Christchurch pour prolonger votre séjour en Nouvelle-Zélande.",
          "Si vous restez à Dunedin, envisagez de visiter la péninsule d'Otago pour voir les otaries et les manchots, d'explorer le musée d'Otago, ou de profiter d'un déjeuner tranquille dans un café local.",
          "Pour ceux qui retournent à Christchurch, des vols intérieurs ou des promenades pittoresques sont disponibles.",
          "Votre chef de groupe vous aidera avec les arrangements pour l'une ou l'autre option."
        ],
        de: [
          "Heute gehört Ihnen, um Dunedin in Ihrem eigenen Tempo zu genießen, oder Sie können sich entscheiden, nach Christchurch zurückzukehren, um Ihren Aufenthalt in Neuseeland zu verlängern.",
          "Wenn Sie in Dunedin bleiben, erwägen Sie die Halbinsel Otago zu besuchen, um Robben und Pinguine zu sehen, das Otago Museum zu erkunden oder ein gemütliches Mittagessen in einem lokalen Café zu genießen.",
          "Für diejenigen, die nach Christchurch zurückkehren, stehen Inlandsflüge oder malerische Fahrten zur Verfügung.",
          "Ihr Reiseleiter hilft Ihnen bei den Vorkehrungen für eine oder beide Optionen."
        ]
      },
      accommodation: {
        en: "Dunedin or Christchurch",
        fr: "Dunedin ou Christchurch",
        de: "Dunedin oder Christchurch"
      },
      includedActivities: {
        en: ["Free day to explore"],
        fr: ["Jour libre pour explorer"],
        de: ["Freier Tag zum Erkunden"]
      },
      optionalActivities: {
        en: ["Otago Peninsula wildlife tour", "Otago Museum visit", "Return to Christchurch"],
        fr: ["Visite de la faune de la péninsule d'Otago", "Visite du musée d'Otago", "Retour à Christchurch"],
        de: ["Otago Peninsula Wildtier-Tour", "Otago Museum Besuch", "Rückkehr nach Christchurch"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [getImagePath('ch/etter.jpeg'), getImagePath('ch/kirschtorte.jpg'), getImagePath('ch/kirschstaengeli.jpg')]
    },
    {
      day: 12,
      title: {
        en: "The final leg: Moeraki Boulders, Oamaru, and return to Christchurch",
        fr: "L'étape finale: Moeraki Boulders, Oamaru et retour à Christchurch",
        de: "Die letzte Etappe: Moeraki Boulders, Oamaru und Rückkehr nach Christchurch"
      },
      description: {
        en: [
          "Depart Dunedin for the final leg of your journey back to Christchurch.",
          "Visit the iconic Moeraki Boulders, massive spherical rocks scattered along the beach, creating one of New Zealand's most unique geological formations.",
          "Continue to Oamaru, a historic port town known for its whitestone buildings and Victorian charm.",
          "Return to Christchurch, where your adventure concludes.",
          "Depending on your flight time, you may have time for final shopping or a farewell meal before heading to the airport."
        ],
        fr: [
          "Quittez Dunedin pour la dernière étape de votre voyage de retour à Christchurch.",
          "Visitez les légendaires Moeraki Boulders, des roches sphériques massives dispersées le long de la plage, créant l'une des formations géologiques les plus uniques de la Nouvelle-Zélande.",
          "Continuez vers Oamaru, une ville portuaire historique connue pour ses bâtiments en pierres blanches et son charme victorien.",
          "Retournez à Christchurch, où votre aventure se termine.",
          "Selon l'heure de votre vol, vous pouvez avoir du temps pour faire les derniers achats ou un repas d'adieu avant de vous diriger vers l'aéroport."
        ],
        de: [
          "Verlassen Sie Dunedin für die letzte Etappe Ihrer Rückreise nach Christchurch.",
          "Besuchen Sie die ikonischen Moeraki Boulders, massive kugelförmige Felsen, die entlang des Strandes verstreut sind und eine der einzigartigsten geologischen Formationen Neuseelands bilden.",
          "Fahren Sie weiter nach Oamaru, einer historischen Hafenstadt, die für ihre Kalksteingebäude und viktorianischen Charme bekannt ist.",
          "Kehren Sie nach Christchurch zurück, wo Ihr Abenteuer endet.",
          "Je nach Flugzeit haben Sie möglicherweise Zeit für letzte Einkäufe oder ein Abschiedsessen, bevor Sie sich zum Flughafen begeben."
        ]
      },
      accommodation: {
        en: "-",
        fr: "-",
        de: "-"
      },
      includedActivities: {
        en: ["Moeraki Boulders visit", "Oamaru town exploration", "Return to Christchurch airport or CBD"],
        fr: ["Visite des Moeraki Boulders", "Exploration de la ville d'Oamaru", "Retour à l'aéroport de Christchurch ou au CBD"],
        de: ["Besuch der Moeraki Boulders", "Erkundung der Stadt Oamaru", "Rückkehr zum Flughafen Christchurch oder CBD"]
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [getImagePath('ch/rhinefalls2.jpg'), getImagePath('ch/basel1.jpg')]
    }
  ],
  whatsIncluded: {
    en: [
      "Services of an experienced tour leader knowledgeable about New Zealand's culture and cuisine",
      "Insights and explanations from local food and wine experts",
      "Hotel accommodation (twin share)",
      "Daily breakfasts",
      "4 dinners and gourmet experiences at select locations",
      "Activities and entries including:",
      "Transportation in a comfortable, air-conditioned coach",
      "Pembroke Patisserie visit and pastry sampling",
      "Cloudy Bay Shed winery tour and tasting",
      "Mount Difficulty winery lunch and tasting",
      "Gibbston Valley winery tours",
      "Milford Sound scenic cruise",
      "Southern Scenic Route drive",
      "Distillery visit and tasting",
      "Catlins coastal drive",
      "Larnach Castle tour",
      "City centre walking tours",
      "All entrance fees and activities mentioned",
      "All applicable taxes",
      "Luggage transfers between accommodations",
      "Advice and support prior to and during the tour",
      "Small group size (max 12)",
      "Special surprises and mementos along the way"
    ],
    fr: [
      "Services d'un chef de groupe expérimenté connaissant bien la culture et la cuisine de la Nouvelle-Zélande",
      "Conseils et explications d'experts locaux en alimentation et vin",
      "Hébergement hôtelier (chambre double)",
      "Petits-déjeuners quotidiens",
      "4 dîners et expériences gastronomiques dans des lieux sélectionnés",
      "Activités et entrées incluant:",
      "Transport dans un bus confortable et climatisé",
      "Visite de Pembroke Patisserie et dégustation de pâtisseries",
      "Visite et dégustation du domaine vinicole Cloudy Bay Shed",
      "Déjeuner et dégustation à Mount Difficulty",
      "Visites de domaines vinicoles de Gibbston Valley",
      "Croisière pittoresque de Milford Sound",
      "Promenade de la Route Pittoresque du Sud",
      "Visite de distillerie et dégustation",
      "Promenade côtière des Catlins",
      "Visite du château Larnach",
      "Visites guidées du centre-ville",
      "Tous les droits d'entrée et activités mentionnés",
      "Toutes les taxes applicables",
      "Transferts de bagages entre les logements",
      "Conseils et assistance avant et pendant le voyage",
      "Petite taille de groupe (max 12)",
      "Surprises spéciales et souvenirs en chemin"
    ],
    de: [
      "Leistungen eines erfahrenen Reiseleiters mit Kenntnissen der Kultur und Küche Neuseelands",
      "Einblicke und Erklärungen von lokalen Lebensmittel- und Weinexperten",
      "Hotelunterkunft (Doppelzimmer)",
      "Tägliche Frühstücke",
      "4 Abendessen und Gourmeterlebnisse an ausgewählten Orten",
      "Aktivitäten und Eintritte einschließlich:",
      "Transport in einem komfortablen, klimatisierten Bus",
      "Besuch von Pembroke Patisserie und Gebäck-Verkostung",
      "Führung und Verkostung im Weingut Cloudy Bay Shed",
      "Mittagessen und Verkostung bei Mount Difficulty",
      "Führungen durch Weingüter im Gibbston Valley",
      "Malerische Kreuzfahrt durch Milford Sound",
      "Fahrt auf der Southern Scenic Route",
      "Destilleriebesuch und Verkostung",
      "Küstenfahrt durch die Catlins",
      "Schloss Larnach Führung",
      "Stadtzentrum Wandertouren",
      "Alle Eintrittsgebühren und erwähnten Aktivitäten",
      "Alle anwendbaren Steuern",
      "Koffertransfer zwischen Unterkünften",
      "Beratung und Unterstützung vor und während der Reise",
      "Kleine Gruppengröße (max. 12)",
      "Besondere Überraschungen und Souvenirs unterwegs"
    ]
  }
};