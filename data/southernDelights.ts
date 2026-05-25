// data/southernDelights.ts
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
  price?: string[];
  singleSupplement?: string;
  departureDates?: DepartureDate[];
  summary: { en: string[]; fr: string[]; de: string[] };
  heroImages: string[];
  itinerary: ItineraryStop[];
  mapImage?: string;
  whatsIncluded?: { en: string[]; fr: string[]; de: string[] };
};

export const southernDelights: Tour = {
  name: "Southern Delights",
  durationDays: 12,
  price: ["From NZ$14,990", "per person (twin share)"],
  singleSupplement: "NZ$5,775",
  departureDates: [{ date: "September 13th, 2026", status: "limited" }],
  mapImage: getImagePath('nz/nz-south-island.png'),
  summary: {
    en: [
      "Spend 11 days exploring the culinary delights of New Zealand's South Island. From the rugged coastlines and majestic fjords to the vibrant cities and charming towns, this tour offers an unforgettable journey through the mainland of Aotearoa.",
      "Discover world-class wineries in Marlborough and Central Otago, meet the artisans behind New Zealand's finest food products, and experience the incredible landscapes that make the South Island one of the most spectacular destinations on earth.",
      "From Christchurch to Queenstown via Kaikōura, Marlborough, Nelson, the West Coast, and Central Otagothis is New Zealand at its most delicious.",
    ],
    fr: [
      "Passez 11 jours à explorer les délices culinaires de l'île du Sud de la Nouvelle-Zélande. Des côtes accidentées et des fjords majestueux aux villes animées et aux charmantes bourgades, ce circuit offre un voyage inoubliable à travers l'île principale de l'Aotearoa.",
      "Découvrez des vignobles de renommée mondiale à Marlborough et dans le Central Otago, rencontrez les artisans derrière les meilleurs produits alimentaires néo-zélandais et vivez les paysages incroyables qui font de l'île du Sud l'une des destinations les plus spectaculaires de la planète.",
      "De Christchurch à Queenstown en passant par Kaikōura, Marlborough, Nelson, la Côte Ouest et le Central Otagoc'est la Nouvelle-Zélande à son meilleur.",
    ],
    de: [
      "Verbringen Sie 11 Tage damit, die kulinarischen Köstlichkeiten der Südinsel Neuseelands zu erkunden. Von den zerklüfteten Küsten und majestätischen Fjorden bis zu den lebhaften Städten und charmanten Städtchen.",
      "Entdecken Sie weltberühmte Weingüter in Marlborough und Central Otago, treffen Sie die Handwerker hinter Neuseelands feinsten Lebensmitteln.",
      "Von Christchurch nach Queenstown über Kaikōura, Marlborough, Nelson, die Westküste und Central Otago.",
    ],
  },
  heroImages: [
    getImagePath("nz/nz-hero.jpg"),
    getImagePath("nz/station.jpg"),
    getImagePath("nz/queenstown.jpg"),
  ],
  whatsIncluded: {
    en: [
      "Services of an experienced local tour leader fluent in English, French and German",
      "Insights and explanations from a kiwi baker and chef with more than 30 years experience in the food industry",
      "Hotel accommodation (twin share)",
      "Daily breakfasts",
      "4 dinners and a multitude of New Zealand culinary delights along the way",
      "Transportation in an air conditioned vehicle throughout",
      "Behind the scenes access at local producers",
      "Wine tastings at Marlborough and Central Otago wineries",
      "Scenic ferry crossing of the Marlborough Sounds",
      "Visit to a working sheep and beef farm",
      "Artisan food and beverage tastings throughout",
      "Guided tour of Christchurch's revitalised city centre",
      "All applicable taxes",
      "Luggage transfers between hotels",
      "Advice and support prior to and during the tour including travel tips, plus foodie and insider recommendations",
      "Small group size (max 12)",
      "A few extra surprises and mementos along the way",
    ],
    fr: [
      "Services d'un guide local expérimenté, parlant couramment l'anglais, le français et l'allemand",
      "Conseils et explications d'un cuisinier et boulanger néo-zélandais avec plus de 30 ans d'expérience dans l'industrie alimentaire",
      "Hébergement en hôtel (chambre double)",
      "Petits-déjeuners quotidiens",
      "4 dîners et une multitude de délices culinaires néo-zélandais tout au long du voyage",
      "Transport en véhicule climatisé tout au long du circuit",
      "Accès aux coulisses chez les producteurs locaux",
      "Dégustations de vins dans les vignobles de Marlborough et du Central Otago",
      "Traversée panoramique en ferry des Marlborough Sounds",
      "Visite d'une ferme ovine et bovine en activité",
      "Dégustations de produits artisanaux tout au long du voyage",
      "Visite guidée du centre-ville revitalisé de Christchurch",
      "Toutes taxes applicables",
      "Transferts de bagages entre les hôtels",
      "Conseils et soutien avant et pendant le circuit, y compris des conseils de voyage et des recommandations gastronomiques",
      "Petit groupe (max 12)",
      "Quelques surprises supplémentaires et souvenirs en chemin",
    ],
    de: [
      "Leistungen eines erfahrenen lokalen Reiseleiters, der fließend Englisch, Französisch und Deutsch spricht",
      "Einblicke eines neuseeländischen Bäckers und Kochs mit mehr als 30 Jahren Erfahrung in der Lebensmittelbranche",
      "Hotelunterkunft (Doppelzimmer)",
      "Tägliches Frühstück",
      "4 Abendessen und viele kulinarische Köstlichkeiten aus Neuseeland",
      "Transport in einem klimatisierten Fahrzeug",
      "Zugang hinter die Kulissen bei lokalen Produzenten",
      "Weinproben in Weingütern in Marlborough und Central Otago",
      "Malerische Fährüberfahrt durch die Marlborough Sounds",
      "Besuch einer arbeitenden Schaf- und Rinderfarm",
      "Handwerkliche Lebensmittel- und Getränkeverkostungen",
      "Geführte Tour durch Christchurchs revitalisiertes Stadtzentrum",
      "Alle anfallenden Steuern",
      "Gepäcktransfer zwischen den Hotels",
      "Beratung und Unterstützung vor und während der Tour",
      "Kleine Gruppengröße (max. 12)",
      "Ein paar extra Überraschungen und Andenken unterwegs",
    ],
  },
  itinerary: [
    {
      day: 1,
      title: {
        en: "Arrival in Christchurch and welcome dinner",
        fr: "Arrivée à Christchurch et dîner de bienvenue",
        de: "Ankunft in Christchurch und Willkommensdinner",
      },
      description: {
        en: [
          "Kia ora and welcome to New Zealand! Your adventure begins in Christchurch, the largest city on the South Island. After checking into your hotel, we will gather for a welcome dinner where you can meet your fellow travellers and tour leaders.",
          "If you have some extra time before the welcome dinner, consider exploring Christchurch's vibrant city centre, the beautiful Botanic Gardens, or the fascinating Canterbury Museum.",
          "It's very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip.",
        ],
        fr: [
          "Bienvenue en Nouvelle-Zélande! Votre aventure commence à Christchurch. Après l'enregistrement à l'hôtel, nous nous réunirons pour un dîner de bienvenue où vous pourrez rencontrer vos compagnons de voyage.",
          "Si vous avez du temps avant le dîner, explorez le centre-ville animé de Christchurch, les magnifiques jardins botaniques ou le fascinant musée du Canterbury.",
          "Il est très important d'assister à la réunion de bienvenue car nous passerons en revue des informations essentielles pour votre voyage.",
        ],
        de: [
          "Willkommen in Neuseeland! Ihr Abenteuer beginnt in Christchurch. Nach dem Check-in versammeln wir uns zum Willkommensdinner.",
          "Falls Sie Zeit vor dem Dinner haben, erkunden Sie das lebhafte Stadtzentrum, die Botanischen Gärten oder das Canterbury Museum.",
          "Es ist sehr wichtig, dass Sie am Willkommenstreffen teilnehmen.",
        ],
      },
      accommodation: {
        en: "Christchurch",
        fr: "Christchurch",
        de: "Christchurch",
      },
      includedActivities: {
        en: ["Welcome dinner"],
        fr: ["Dîner de bienvenue"],
        de: ["Willkommensdinner"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Dinner"],
        fr: ["Dîner"],
        de: ["Abendessen"],
      },
      images: [getImagePath('nz/christchurch.jpg'), getImagePath('nz/botanic.jpg')],
    },
    {
      day: 2,
      title: {
        en: "Christchurch to Kaikōura",
        fr: "Christchurch à Kaikōura",
        de: "Christchurch nach Kaikōura",
      },
      description: {
        en: [
          "After breakfast we head north along the coast to Kaikōura, one of New Zealand's most spectacular coastal towns. The drive itself is breathtaking, hugging the cliffs above the Pacific Ocean.",
          "Kaikōura is famous for its marine lifewhales, dolphins, and the resident seal colony. We'll visit the local artisan food producers before settling in for the evening.",
        ],
        fr: [
          "Après le petit-déjeuner, nous nous dirigeons vers le nord le long de la côte jusqu'à Kaikōura, l'une des villes côtières les plus spectaculaires de Nouvelle-Zélande.",
          "Kaikōura est célèbre pour sa vie marine. Nous visiterons les producteurs alimentaires artisanaux locaux avant de nous installer pour la soirée.",
        ],
        de: [
          "Nach dem Frühstück fahren wir nordwärts entlang der Küste nach Kaikōura, einer der spektakulärsten Küstenstädte Neuseelands.",
          "Kaikōura ist berühmt für sein Meeresleben. Wir besuchen lokale Handwerksproduzenten.",
        ],
      },
      accommodation: {
        en: "Kaikōura",
        fr: "Kaikōura",
        de: "Kaikōura",
      },
      includedActivities: {
        en: ["Artisan food producer visits", "Scenic coastal drive"],
        fr: ["Visites de producteurs artisanaux", "Route côtière panoramique"],
        de: ["Besuche bei Handwerksproduzenten", "Malerische Küstenfahrt"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [getImagePath('nz/kaikoura.jpg'), getImagePath('nz/kaikoura2.jpg')],
    },
    {
      day: 3,
      title: {
        en: "Kaikōura to Marlborough",
        fr: "Kaikōura à Marlborough",
        de: "Kaikōura nach Marlborough",
      },
      description: {
        en: [
          "Today we continue north into the Marlborough wine region, home to some of the world's finest Sauvignon Blanc. We'll visit two carefully selected wineries for tours and tastings.",
          "Marlborough is also famous for its artisan food producersfrom craft breweries to olive oil producers and salmon farms. We'll visit some of the best.",
        ],
        fr: [
          "Aujourd'hui nous continuons vers le nord dans la région viticole de Marlborough, connue pour ses Sauvignon Blanc parmi les meilleurs au monde. Nous visiterons deux vignobles soigneusement sélectionnés.",
          "Marlborough est également réputée pour ses producteurs alimentaires artisanaux.",
        ],
        de: [
          "Heute fahren wir weiter nach Norden in die Marlborough-Weinregion, bekannt für einige der weltbesten Sauvignon Blancs.",
          "Marlborough ist auch für seine handwerklichen Lebensmittelproduzenten bekannt.",
        ],
      },
      accommodation: {
        en: "Marlborough",
        fr: "Marlborough",
        de: "Marlborough",
      },
      includedActivities: {
        en: ["Two winery tours and tastings", "Artisan producer visits"],
        fr: ["Visites et dégustations dans deux vignobles", "Visites de producteurs artisanaux"],
        de: ["Zwei Weinguts-Touren und Verkostungen", "Besuche bei Handwerksproduzenten"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Lunch"],
        fr: ["Petit-déjeuner", "Déjeuner"],
        de: ["Frühstück", "Mittagessen"],
      },
      images: [getImagePath('nz/marlborough.jpg'), getImagePath('nz/marlborough2.jpg')],
    },
    {
      day: 4,
      title: {
        en: "Marlborough Sounds and ferry to Nelson",
        fr: "Marlborough Sounds et ferry vers Nelson",
        de: "Marlborough Sounds und Fähre nach Nelson",
      },
      description: {
        en: [
          "A morning exploring the stunning Marlborough Soundsa network of sea-drowned valleys creating a labyrinth of waterways, inlets, and islands.",
          "In the afternoon we board the ferry to cross to Nelson, New Zealand's sunniest city and home to a thriving arts and food scene.",
        ],
        fr: [
          "Matinée d'exploration des magnifiques Marlborough Soundsun réseau de vallées submergées créant un labyrinthe de voies navigables, d'anses et d'îles.",
          "L'après-midi, nous prenons le ferry pour rejoindre Nelson, la ville la plus ensoleillée de Nouvelle-Zélande.",
        ],
        de: [
          "Ein Morgen in den atemberaubenden Marlborough Soundsein Netzwerk von versunkenen Tälern, das ein Labyrinth aus Wasserstraßen schafft.",
          "Am Nachmittag nehmen wir die Fähre nach Nelson, der sonnigsten Stadt Neuseelands.",
        ],
      },
      accommodation: {
        en: "Nelson",
        fr: "Nelson",
        de: "Nelson",
      },
      includedActivities: {
        en: ["Scenic ferry crossing of the Marlborough Sounds", "Morning exploration of the Sounds"],
        fr: ["Traversée panoramique en ferry des Marlborough Sounds", "Exploration matinale des Sounds"],
        de: ["Malerische Fährüberfahrt durch die Marlborough Sounds", "Morgenliche Erkundung der Sounds"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"],
      },
      images: [getImagePath('nz/sounds.jpg'), getImagePath('nz/nelson.jpg')],
    },
    {
      day: 5,
      title: {
        en: "Nelsonfood, art and craft",
        fr: "Nelsongastronomie, art et artisanat",
        de: "NelsonEssen, Kunst und Handwerk",
      },
      description: {
        en: [
          "Nelson is a special placea city that punches well above its weight in terms of food, wine, and the arts. Today we explore its famous farmers market, visit local craft breweries, and meet some of the artisans who call this city home.",
          "In the afternoon there is free time to explore Nelson's galleries, boutiques, and café culture at your own pace.",
        ],
        fr: [
          "Nelson est une ville spéciale qui dépasse largement son poids en matière de gastronomie, de vins et d'arts. Nous explorons son célèbre marché de producteurs, visitons des brasseries artisanales locales et rencontrons des artisans.",
          "L'après-midi est libre pour explorer les galeries, boutiques et cafés de Nelson.",
        ],
        de: [
          "Nelson ist eine besondere Stadt mit einer weit überdurchschnittlichen Lebensmittel-, Wein- und Kunstszene. Wir erkunden den Bauernmarkt und besuchen lokale Craft-Brauereien.",
          "Am Nachmittag gibt es Freizeit zur Erkundung von Nelsons Galerien und Cafés.",
        ],
      },
      accommodation: {
        en: "Nelson",
        fr: "Nelson",
        de: "Nelson",
      },
      includedActivities: {
        en: ["Nelson Farmers Market visit", "Craft brewery tour and tasting"],
        fr: ["Visite du marché de producteurs de Nelson", "Visite et dégustation dans une brasserie artisanale"],
        de: ["Besuch des Nelson Farmers Market", "Craft-Brauerei-Tour und Verkostung"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [getImagePath('nz/nelson2.jpg'), getImagePath('nz/nelson3.jpg')],
    },
    {
      day: 6,
      title: {
        en: "Nelson to the West Coast",
        fr: "Nelson vers la Côte Ouest",
        de: "Nelson zur Westküste",
      },
      description: {
        en: [
          "Today we cross the Southern Alps to New Zealand's wild and magnificent West Coast. The drive through the mountains is spectacularwatch for the moment the vegetation changes as we descend into the rainforest.",
          "The West Coast has a raw, pioneering character all its own. We'll visit a local jade (pounamu) workshop and learn about this stone's significance in Māori culture.",
        ],
        fr: [
          "Aujourd'hui, nous traversons les Alpes du Sud vers la magnifique Côte Ouest de Nouvelle-Zélande. La route à travers les montagnes est spectaculaire.",
          "La Côte Ouest a un caractère brut et pionnier qui lui est propre. Nous visiterons un atelier de jade (pounamu) local.",
        ],
        de: [
          "Heute überqueren wir die Südalpen zur wilden und prächtigen Westküste Neuseelands.",
          "Die Westküste hat einen rau-ursprünglichen Charakter. Wir besuchen eine lokale Jade-Werkstatt.",
        ],
      },
      accommodation: {
        en: "West Coast",
        fr: "Côte Ouest",
        de: "Westküste",
      },
      includedActivities: {
        en: ["Scenic mountain pass drive", "Pounamu (jade) workshop visit"],
        fr: ["Route panoramique à travers le col de montagne", "Visite d'un atelier de pounamu (jade)"],
        de: ["Malerische Bergpassfahrt", "Besuch einer Pounamu-Werkstatt"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"],
      },
      images: [getImagePath('nz/westcoast.jpg'), getImagePath('nz/alps.jpg')],
    },
    {
      day: 7,
      title: {
        en: "Franz Josef Glacier and surrounds",
        fr: "Glacier Franz Josef et environs",
        de: "Franz Josef Gletscher und Umgebung",
      },
      description: {
        en: [
          "Today is about one of the great natural wonders of the worldthe Franz Josef Glacier. We'll walk to the glacier terminal face and learn about its remarkable history and the impact of climate change.",
          "The surrounding rainforest is also extraordinarya World Heritage landscape where glacier and rainforest meet, found nowhere else on earth.",
        ],
        fr: [
          "Aujourd'hui, nous découvrons l'une des grandes merveilles naturelles du mondele glacier Franz Josef. Nous marcherons jusqu'au front du glacier.",
          "La forêt pluviale environnante est également extraordinaireun paysage du patrimoine mondial où glacier et forêt tropicale se rencontrent.",
        ],
        de: [
          "Heute geht es zu einem der großen Naturwunder der Weltdem Franz Josef Gletscher.",
          "Der umliegende Regenwald ist ebenfalls außergewöhnlich.",
        ],
      },
      accommodation: {
        en: "West Coast",
        fr: "Côte Ouest",
        de: "Westküste",
      },
      includedActivities: {
        en: ["Guided glacier walk", "Rainforest walk"],
        fr: ["Marche guidée sur le glacier", "Promenade en forêt pluviale"],
        de: ["Geführte Gletscherwanderung", "Regenwald-Spaziergang"],
      },
      optionalActivities: {
        en: ["Glacier helicopter flight"],
        fr: ["Vol en hélicoptère sur le glacier"],
        de: ["Hubschrauberflug über den Gletscher"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [getImagePath('nz/franzjosef.jpg'), getImagePath('nz/rainforest.jpg')],
    },
    {
      day: 8,
      title: {
        en: "West Coast to Wānaka",
        fr: "Côte Ouest à Wānaka",
        de: "Westküste nach Wānaka",
      },
      description: {
        en: [
          "We cross back through the Southern Alps via the Haast Passone of the most dramatic mountain passes in New Zealandand descend into the lake district of Central Otago.",
          "Our destination is beautiful Wānaka, home to one of New Zealand's most celebrated wineries. We'll finish the day with a winery tour and tasting before dinner.",
        ],
        fr: [
          "Nous retraversons les Alpes du Sud via le col de Haastl'un des cols de montagne les plus dramatiques de Nouvelle-Zélandeet descendons dans la région des lacs du Central Otago.",
          "Notre destination est la belle Wānaka, accueillant l'un des vignobles les plus célèbres de Nouvelle-Zélande.",
        ],
        de: [
          "Wir überqueren die Südalpen erneut über den Haast Pass und steigen in die Seenregion von Central Otago ab.",
          "Unser Ziel ist das schöne Wānaka mit einem der bekanntesten Weingüter Neuseelands.",
        ],
      },
      accommodation: {
        en: "Wānaka",
        fr: "Wānaka",
        de: "Wānaka",
      },
      includedActivities: {
        en: ["Haast Pass scenic drive", "Winery tour and tasting"],
        fr: ["Route panoramique du col de Haast", "Visite et dégustation au vignoble"],
        de: ["Malerische Fahrt über den Haast Pass", "Weinguts-Tour und Verkostung"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"],
      },
      images: [getImagePath('nz/wanaka.jpg'), getImagePath('nz/haast.jpg')],
    },
    {
      day: 9,
      title: {
        en: "Wānaka and Central Otago wineries",
        fr: "Wānaka et vignobles du Central Otago",
        de: "Wānaka und Central Otago Weingüter",
      },
      description: {
        en: [
          "Central Otago is the world's southernmost wine region and produces some of the most highly regarded Pinot Noir on earth. Today we visit two of its finest wineries.",
          "Between visits, we'll stop at a cherry orchard (seasonal), a local olive oil producer, and enjoy a long lunch at a vineyard restaurant overlooking the mountains.",
        ],
        fr: [
          "Le Central Otago est la région viticole la plus australe du monde et produit certains des Pinot Noir les plus réputés de la planète. Nous visitons deux de ses meilleurs vignobles.",
          "Entre les visites, nous nous arrêterons dans un verger de cerises (selon saison) et chez un producteur d'huile d'olive local.",
        ],
        de: [
          "Central Otago ist die südlichste Weinregion der Welt und produziert einige der angesehensten Pinot Noirs der Erde.",
          "Zwischen den Besuchen halten wir an einem Kirschenobstgarten und bei einem lokalen Olivenölproduzenten.",
        ],
      },
      accommodation: {
        en: "Wānaka",
        fr: "Wānaka",
        de: "Wānaka",
      },
      includedActivities: {
        en: ["Two Central Otago winery tours and tastings", "Long lunch at vineyard restaurant"],
        fr: ["Visites et dégustations dans deux vignobles du Central Otago", "Long déjeuner au restaurant du vignoble"],
        de: ["Zwei Central Otago Weinguts-Touren und Verkostungen", "Ausgiebiges Mittagessen im Weingut-Restaurant"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast", "Lunch"],
        fr: ["Petit-déjeuner", "Déjeuner"],
        de: ["Frühstück", "Mittagessen"],
      },
      images: [getImagePath('nz/centralotago.jpg'), getImagePath('nz/pinotnoir.jpg')],
    },
    {
      day: 10,
      title: {
        en: "Wānaka to Queenstown",
        fr: "Wānaka à Queenstown",
        de: "Wānaka nach Queenstown",
      },
      description: {
        en: [
          "A short but scenic drive brings us to QueenstownNew Zealand's adventure capital and one of the most spectacularly situated cities in the world, nestled beneath the Remarkables mountain range on the shores of Lake Wakatipu.",
          "This afternoon is yours to explore. Tonight we have a special dinner at one of Queenstown's finest restaurants.",
        ],
        fr: [
          "Une courte mais panoramique route nous amène à Queenstownla capitale de l'aventure de Nouvelle-Zélande, nichée sous la chaîne des Remarkables sur les rives du lac Wakatipu.",
          "Cet après-midi est libre. Ce soir, nous avons un dîner spécial dans l'un des meilleurs restaurants de Queenstown.",
        ],
        de: [
          "Eine kurze, aber malerische Fahrt bringt uns nach QueenstownNeuseelands Abenteuerhauptstadt, eingebettet unter den Remarkables am Ufer des Lake Wakatipu.",
          "Dieser Nachmittag gehört Ihnen. Heute Abend gibt es ein besonderes Dinner.",
        ],
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown",
      },
      includedActivities: {
        en: ["Scenic drive via Crown Range", "Special farewell dinner"],
        fr: ["Route panoramique via Crown Range", "Dîner d'adieu spécial"],
        de: ["Malerische Fahrt über den Crown Range", "Besonderes Abschiedsdinner"],
      },
      optionalActivities: {
        en: ["Milford Sound day trip", "Bungy jumping", "Jet boat"],
        fr: ["Excursion d'une journée à Milford Sound", "Saut à l'élastique", "Jet boat"],
        de: ["Tagesausflug nach Milford Sound", "Bungee-Jumping", "Jet Boot"],
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"],
      },
      images: [getImagePath('nz/queenstown.jpg'), getImagePath('nz/remarkables.jpg')],
    },
    {
      day: 11,
      title: {
        en: "Queenstown free day",
        fr: "Journée libre à Queenstown",
        de: "Freier Tag in Queenstown",
      },
      description: {
        en: [
          "Your day to explore Queenstown at your own pace. The options are endlesstake a gondola up Bob's Peak for panoramic views, cruise on Lake Wakatipu on the historic TSS Earnslaw steamship, visit the farmers market, or simply wander the lakefront.",
          "For the adventurous, Queenstown is the home of bungy jumping, skydiving, jet boating, and white water rafting.",
        ],
        fr: [
          "Votre journée pour explorer Queenstown à votre rythme. Les options sont infiniesprenez la télécabine jusqu'au sommet de Bob's Peak, faites une croisière sur le lac Wakatipu à bord du vapeur historique TSS Earnslaw, ou flânez au bord du lac.",
          "Pour les aventuriers, Queenstown est la maison du saut à l'élastique, du parachutisme, du jet boat et du rafting.",
        ],
        de: [
          "Ihr Tag zur freien Erkundung von Queenstown. Die Möglichkeiten sind endlosGondel auf den Bob's Peak, Kreuzfahrt auf dem Lake Wakatipu oder Bummel am See.",
          "Für Abenteuerlustige bietet Queenstown Bungee-Jumping, Fallschirmspringen, Jet Boot und Wildwasser-Rafting.",
        ],
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown",
      },
      includedActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      optionalActivities: {
        en: ["Milford Sound day trip", "TSS Earnslaw cruise", "Gondola to Bob's Peak"],
        fr: ["Excursion à Milford Sound", "Croisière TSS Earnslaw", "Télécabine jusqu'au sommet de Bob's Peak"],
        de: ["Tagesausflug nach Milford Sound", "TSS Earnslaw Kreuzfahrt", "Gondel auf den Bob's Peak"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [getImagePath('nz/queenstown2.jpg'), getImagePath('nz/earnslaw.jpg')],
    },
    {
      day: 12,
      title: {
        en: "Queenstown departure",
        fr: "Départ de Queenstown",
        de: "Abreise aus Queenstown",
      },
      description: {
        en: [
          "After the last group breakfast, and a chance to say goodbye to your new friends, we head to Queenstown airport where the tour, sadly, ends.",
          "If you have a late flight, consider a visit to nearby Arrowtowna charming gold rush town with wonderful cafes and boutiques.",
          "We hope to see you again on another of our tours. Ka kite anō!",
        ],
        fr: [
          "Après le dernier petit-déjeuner en groupe et l'occasion de dire au revoir à vos nouveaux amis, nous nous rendons à l'aéroport de Queenstown où le circuit se termine.",
          "Si votre vol est tardif, visitez Arrowtownune charmante ville de la ruée vers l'or avec de merveilleux cafés et boutiques.",
          "Nous espérons vous revoir sur un autre de nos circuits. Ka kite anō!",
        ],
        de: [
          "Nach dem letzten Gruppenfrühstück und dem Abschied von neuen Freunden fahren wir zum Flughafen Queenstown.",
          "Falls Ihr Flug spät ist, besuchen Sie Arrowtowneine charmante Goldgräberstadt.",
          "Wir hoffen, Sie auf einer anderen unserer Touren wiederzusehen. Ka kite anō!",
        ],
      },
      includedActivities: {
        en: ["Transfer to Queenstown airport"],
        fr: ["Transfert à l'aéroport de Queenstown"],
        de: ["Transfer zum Flughafen Queenstown"],
      },
      optionalActivities: {
        en: ["-"],
        fr: ["-"],
        de: ["-"],
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [getImagePath('nz/arrowtown.jpg'), getImagePath('nz/queenstown3.jpg')],
    },
  ],
};