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
      "Discover world-class wineries in Central Otago, meet the artisans behind some of New Zealand's finest food products, and experience the incredible landscapes that make the South Island one of the most spectacular destinations on earth.",
      "From Christchurch to Bluff and back again, this is New Zealand at its most delicious.",
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
      "Wine tastings at Central Otago wineries",
      "Scenic cruise on Milford Sound",
      "Artisan food and beverage tastings throughout",
      "All applicable taxes",
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
        de: "Ankunft in Christchurch und Willkommensessen",
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
        en: "Christchurch to Tekapo",
        fr: "Christchurch à Tekapo",
        de: "Christchurch nach Tekapo",
      },
      description: {
        en: [
          "This morning we first head towards the stunning river canyon of Rakaia Gorge, where we will stop for a walk and plenty of chances to take in the views and snap some photos of the turquoise waters and dramatic cliffs.",
          "Saying Ka Kite Ano (see you again) to the Rakaia River we continue on to Geraldine, a charming town and home to Barker's Foodstore, a wonderful artisan food producer and shop where we will stop for a tasting and something to eat.",
          "Then we continue on to the Mackenzie Country, and the world famous Fairlie Bakehouse, where we will stop for another bite to eat (there is a lot of grazing on a food tour). The Fairlie Bakehouse is an institution in the South Island and is best known for serving up delicious pies since 2009.",
          "finally, we head to our accommodation in Tekapo, a small town on the shores of the stunning Lake Tekapo and surrounded by the majestic Southern Alps.",
        ],
        fr: [
          "Ce matin, nous nous dirigeons d'abord vers le magnifique canyon de la rivière Rakaia, où nous ferons une promenade et prendrons beaucoup de photos des eaux turquoise et des falaises spectaculaires.",
          "En disant Ka Kite Ano (à bientôt) à la rivière Rakaia, nous continuons vers Geraldine, une charmante ville et foyer du Barker's Foodstore, un merveilleux producteur et magasin d'aliments artisanaux où nous ferons une dégustation et prendrons quelque chose à manger.",
          "Ensuite, nous continuons vers le pays de Mackenzie, et la célèbre pâtisserie Fairlie, où nous ferons une pause pour un goûter (il y a beaucoup de dégustations lors d'une tournée culinaire). La pâtisserie Fairlie est une institution dans l'île du Sud et est surtout connue pour ses délicieux tartes depuis 2009.",
          "Enfin, nous nous rendons à notre hébergement à Tekapo, une petite ville sur les rives du magnifique lac Tekapo et entourée par les majestueuses Alpes du Sud.",
        ],
        de: [
          "Heute Morgen fahren wir zunächst zum atemberaubenden Flusscanion Rakaia Gorge, wo wir eine Wanderung machen und viele Gelegenheiten haben, die Aussichten zu genießen und Fotos der turquoise Farbe des Wassers und der dramatischen Klippen zu schießen.",
          "Mit dem Abschied von der Rakaia River sagen wir Ka Kite Ano (bis später) und fahren nach Geraldine, einer charmanten Stadt und dem Zuhause des Barker's Foodstore, eines wunderbaren Handwerksproduzenten und Shops, wo wir eine Verkostung durchführen werden und etwas zu essen.",
          "Dann fahren wir weiter nach Mackenzie Country und zur weltberühmten Fairlie Bakehouse, wo wir für ein weiteres Snack aufhalten werden (es gibt viel Probieren bei einer Lebensmittel-Tour). Die Fairlie Bakehouse ist eine Institution in der Südinsel und ist am besten dafür bekannt, seit 2009 köstliche Kuchen anzubieten.",
          "Schließlich erreichen wir unser Quartier in Tekapo, einer kleinen Stadt an den Ufern des atemberaubenden Lake Tekapo und umgeben von den majestätischen Südalpen.",
        ],
      },
      accommodation: {
        en: "Tekapo",
        fr: "Tekapo",
        de: "Tekapo",
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
        en: "Tekapo to Wānaka",
        fr: "Tekapo à Wānaka",
        de: "Tekapo nach Wānaka",
      },
      description: {
        en: [
          "This morning, we travel through The Mackenzie Country, a region of stunning alpine scenery well-known as the home to some of New Zealand's most iconic views. We'll also introduce to some of the delicious food and drink that the region has to offer.",
          " We'll start with a visit to a lavendar farm on the way to the world famous Aoraki/Mount Cook, the highest mountain in New Zealand. We will stop for a walk and to take in the views of the mountain and the surrounding glaciers (weather permitting).",
          "Then we stop in at a distillery making some uniquely New Zealand spirits, before visiting a salmon farm for a tasting of their delicious smoked salmon and other products. Finally, we head to Wānaka, a charming town on the shores of Lake Wānaka and surrounded by mountains.",

        ],
        fr: [
          "Ce matin, nous voyageons à travers le pays de Mackenzie, une région de paysages alpins époustouflants, connue pour être le foyer de certaines des vues les plus emblématiques de la Nouvelle-Zélande. Nous découvrirons également quelques-uns des délices alimentaires et des boissons que cette région a à offrir.",
          "Nous commencerons par une visite d'une ferme de lavande sur le chemin du célèbre Aoraki/Mount Cook, la plus haute montagne de Nouvelle-Zélande. Nous nous arrêterons pour une promenade et pour admirer les vues sur la montagne et les glaciers environnants (si le temps le permet).",
          "Ensuite, nous nous arrêtons dans une distillerie qui fabrique des spiritueux uniques en Nouvelle-Zélande, avant de visiter une ferme de saumon pour une dégustation de leur délicieux saumon fumé et d'autres produits. Enfin, nous nous dirigeons vers Wānaka, une charmante ville sur les rives du lac Wānaka et entourée de montagnes.",
        ],
        de: [
          "Heute morgen reisen wir durch das Mackenzie-Gebiet, eine Region mit atemberaubenden Alpenszenen, die als Heimat einiger der ikonischsten Aussichten Neuseelands bekannt ist. Wir werden auch einige der köstlichen Lebensmittel und Getränke kennenlernen, die diese Region zu bieten hat.",
          "Wir beginnen mit einem Besuch auf einer Lavendelfarm auf dem Weg zum weltberühmten Aoraki/Mount Cook, dem höchsten Berg Neuseelands. Wir werden anhalten, um eine Wanderung zu machen und die Aussicht auf den Berg und die umliegenden Gletscher zu genießen (wetterabhängig).",
          "Dann halten wir bei einer Destillerie, die einige einzigartige neuseeländische Spirituosen herstellt, bevor wir eine Lachsfarm besuchen, um eine Verkostung ihres köstlichen geräucherten Lachses und anderer Produkte zu genießen. Schließlich fahren wir nach Wānaka, einer charmanten Stadt an den Ufern des Lake Wānaka und umgeben von Bergen.",
        ],
      },
      accommodation: {
        en: "Wānaka",
        fr: "Wānaka",
        de: "Wānaka",
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
        en: "Wānaka to Queenstown via some Central Otago wineries",
        fr: "Wānaka à Queenstown via quelques vignobles du Central Otago",
        de: "Wānaka nach Queenstown über einige zentrale Otago Weingüter",
      },
      description: {
        en: [
          "After a leisurely morning in Wānaka that includes a visit to a patisserie for a pastry and coffee, we head along the shores of Lake Dunstan where eagle-eyed Lord of the Rings fans might recognise a few spots from the films.",
          "The Central Otago region is renowned for its stone-fruit orchards and world-class wineries, particularly for its Pinot Noir. We will make sure that you get to experience both during our drive to Queenstown, with stops at a couple of the region's best wineries for tours and tastings.",
          "Queenstown is our destination for the next few days, and there is no better way to arrive than with a scenic drive through the stunning landscapes of Central Otago and a few delicious stops along the way.",
        ],
        fr: [
          "Après une matinée tranquille à Wānaka qui comprend une visite à une pâtisserie pour un café et une viennoiserie, nous longeons les rives du lac Dunstan où les fans de Lord of the Rings pourraient reconnaître quelques endroits des films.",
          "La région du Central Otago est réputée pour ses vergers à fruits à coque et ses vignobles de classe mondiale, en particulier pour son Pinot Noir. Nous nous assurerons que vous puissiez expérimenter les deux pendant notre trajet vers Queenstown, avec des arrêts dans quelques-uns des meilleurs vignobles de la région pour des visites et des dégustations.",
          "Queenstown est notre destination pour les quelques jours à venir, et il n'y a pas de meilleur moyen d'arriver que par une balade pittoresque à travers les paysages époustouflants du Central Otago et quelques arrêts délicieux en chemin.",
        ],
        de: [
          "Nach einem entspannten Morgen in Wānaka, bei dem wir in einer Patisserie einen Kuchen und einen Kaffee genießen, fahren wir entlang der Ufer des Lake Dunstan, wo Augen wie Lord of the Rings-Fans einige Orte aus den Filmen erkennen könnten.",
          "Die Region Central Otago ist für ihre Steinobstplantagen und Weltklasse-Weingüter bekannt, insbesondere für ihren Pinot Noir. Wir werden sicherstellen, dass Sie beides während unserer Fahrt nach Queenstown erleben können, wobei wir an einigen der besten Weingüter der Region für Touren und Verkostungen machen werden.",
          "Queenstown ist unsere Zielstadt für die nächsten paar Tage, und es gibt keinen besseren Weg, um anzukommen als mit einer landschaftlichen Fahrt durch die atemberaubenden Landschaften von Central Otago und einigen köstlichen Stopps unterwegs.",
        ],
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown",
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
        en: "Arrowtown day trip",
        fr: "Excursion d'une journée à Arrowtown",
        de: "Tagesausflug nach Arrowtown",
      },
      description: {
        en: [
          "Arrowtown is a charming historic town known for its well-preserved buildings and rich gold mining history. We will explore the town's main street, visit the Arrowtown Museum, and take a guided tour of the historic buildings.",
          "After exploring the town, we'll then make our way, slowly, back to Queenstown, stopping at some of the wineries along the way for tastings and to take in the stunning scenery of the region.",
          "After a day of exploring Arrowtown and the surrounding wineries, we will return to Queenstown for a relaxing evening. You can choose to have dinner at one of the many excellent restaurants in town or simply unwind and enjoy the stunning views of Lake Wakatipu and the surrounding mountains.",
        ],
        fr: [
          "Arrowtown est une charmante ville historique connue pour ses bâtiments bien conservés et sa riche histoire minière. Nous explorerons la principale rue de la ville, visiterons le musée d'Arrowtown et prendrons une visite guidée des bâtiments historiques.",
          "Après avoir exploré la ville, nous retournerons lentement à Queenstown, en faisant quelques stops dans les vignobles du chemin pour des dégustations et pour profiter du paysage époustouflant de la région.",
          "Après une journée d'exploration d'Arrowtown et des vignobles environnants, nous reviendrons à Queenstown pour une soirée relaxante. Vous pouvez choisir de dîner dans l'un des nombreux restaurants excellents de la ville ou simplement vous détendre et profiter des vues époustouflantes du lac Wakatipu et des montagnes environnantes.",
        ],
        de: [
          "Arrowtown ist eine charmante historische Stadt, die für ihre gut erhaltenen Gebäude und ihre reiche Goldgräbergeschichte bekannt ist. Wir werden die Hauptstraße der Stadt erkunden, das Arrowtown Museum besuchen und eine geführte Tour durch die historischen Gebäude machen.",
          "Nach der Erkundung der Stadt werden wir langsam zurück nach Queenstown fahren und an einigen der Weingüter unterwegs für Verkostungen und um das atemberaubende Panorama der Region zu genießen.",
          "Nach einem Tag voller Erkundungen in Arrowtown und den umliegenden Weingütern kehren wir zu Queenstown zurück, um einen entspannten Abend zu verbringen. Sie können wählen, ob Sie im Restaurant einer der vielen hervorragenden Restaurants in der Stadt zu Abend essen oder einfach entspannen und die atemberaubenden Aussichten auf den Lake Wakatipu und die umliegenden Berge genießen.",
          "",
        ],
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown",
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
        en: "Queenstown Free Day",
        fr: "Journée libre à Queenstown",
        de: "Freier Tag in Queenstown",
      },
      description: {
        en: [
          "Today is a free day to explore Queenstown at your own pace. The options are endlesstake a gondola up Bob's Peak for panoramic views, cruise on Lake Wakatipu on the historic TSS Earnslaw steamship, find something thrill seeking, or simply wander the lakefront.",
          "There is an almost endless array of activities on offer in Queenstown, from bungy jumping and skydiving to jet boating and white water rafting. If you are looking for something a little more relaxed, there are also wonderful restaurants, cafes, shops, and galleries to explore.",
        ],
        fr: [
          "Aujourd'hui est une journée libre pour explorer Queenstown à votre rythme. Les options sont infiniesprenez la télécabine jusqu'au sommet de Bob's Peak, faites une croisière sur le lac Wakatipu à bord du vapeur historique TSS Earnslaw, trouvez quelque chose de palpitant ou flânez simplement au bord du lac.",
          "Il y a une multitude d'activités à Queenstown, du saut à l'élastique et du parachutisme au jet boat et au rafting en eaux vives. Si vous cherchez quelque chose d'un peu plus détendu, il y a aussi de merveilleux restaurants, cafés, boutiques et galeries à explorer.",
        ],
        de: [
          "Heute ist ein freier Tag, um Queenstown in Ihrem eigenen Tempo zu erkunden. Die Möglichkeiten sind endlosGondel auf den Bob's Peak, Kreuzfahrt auf dem Lake Wakatipu oder Bummel am See.",
          "Es gibt eine fast endlose Auswahl an Aktivitäten in Queenstown, von Bungee-Jumping und Fallschirmspringen bis zu Jet Boot und Wildwasser-Rafting. Wenn Sie etwas Entspannteres suchen, gibt es auch wunderbare Restaurants, Cafés, Geschäfte und Galerien zu erkunden.",
        ],
      },
      accommodation: {
        en: "Queenstown",
        fr: "Queenstown",
        de: "Queenstown",
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
        en: "Milford Sound",
        fr: "Sound de Milford",
        de: "Milford Sound",
      },
      description: {
        en: [
          "Today is a long day but the destination is one of the most spectacular places on earth. We head to Milford Sound, a fjord carved by glaciers and surrounded by towering peaks. Along the way, we will stop at some of the most scenic spots in Fiordland National Park.",
          "Once we arrive at Milford Sound, we will take a scenic cruise to experience the full majesty of this incredible place. Keep an eye out for wildlife including seals, dolphins, and penguins.",
          "Then we head to the Te Anau, a charming town on the shores of Lake Te Anau and the gateway to Fiordland. If time allows, you can visit the nearby glowworm caves for a magical underground experience.",
        ],
        fr: [
          "Aujourd'hui est une longue journée mais la destination est l'un des endroits les plus spectaculaires de la planète. Nous nous dirigeons vers Milford Sound, un fjord sculpté par les glaciers et entouré de pics imposants. En chemin, nous nous arrêterons à certains des endroits les plus pittoresques du parc national de Fiordland.",
          "Une fois arrivés à Milford Sound, nous ferons une croisière panoramique pour découvrir toute la majesté de cet endroit incroyable. Gardez un œil sur la faune, notamment les phoques, les dauphins et les pingouins.",
          "Ensuite, nous nous dirigeons vers Te Anau, une charmante ville sur les rives du lac Te Anau et la porte d'entrée de Fiordland. Si le temps le permet, vous pouvez visiter les grottes aux vers luisants à proximité pour une expérience souterraine magique.",
        ],
        de: [
          "Heute ist ein langer Tag, aber das Ziel ist einer der spektakulärsten Orte der Erde. Wir fahren zum Milford Sound, einem Fjord, der von Gletschern geformt und von imposanten Gipfeln umgeben ist. Unterwegs halten wir an einigen der malerischsten Orte im Fiordland National Park.",
          "Sobald wir am Milford Sound angekommen sind, unternehmen wir eine malerische Kreuzfahrt, um die volle Pracht dieses unglaublichen Ortes zu erleben. Halten Sie Ausschau nach Wildtieren, darunter Robben, Delfine und Pinguine.",
          "Dann fahren wir nach Te Anau, einer charmanten Stadt am Ufer des Lake Te Anau und dem Tor zum Fiordland. Wenn die Zeit es erlaubt, können Sie die nahe gelegenen Glühwürmchenhöhlen für ein magisches unterirdisches Erlebnis besuchen.",
        ],
      },
      accommodation: {
        en: "Te Anau",
        fr: "Te Anau",
        de: "Te Anau",
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
        en: "Te Anau to Invercargill via the Southern Scenic Route",
        fr: "Te Anau à Invercargill via la route panoramique du sud",
        de: "Te Anau nach Invercargill über die südliche Sehenswürdigkeitsroute",
      },
      description: {
        en: [
          "We head south today, following the Southern Scenic Route through some of the most beautiful and remote parts of the South Island. Along the way, we will stop at one of the few seed-to-sip farm distilleries in the world, the town fondly referred to as the 'Riviera of the South', and the town that holds the title as the 'Sausage Capital of New Zealand'.",
          "Our destination is Invercargill, the southernmost city in New Zealand and the gateway to the Catlins, a rugged and wild coastal region known for its stunning scenery and abundant wildlife.",
        ],
        fr: [
          "Nous nous dirigeons vers le sud aujourd'hui, en suivant la route panoramique du sud à travers certaines des parties les plus belles et les plus reculées de l'île du Sud. En chemin, nous nous arrêterons dans l'une des rares distilleries de la ferme à la tasse au monde, la ville affectueusement appelée 'Riviera du Sud' et la ville qui détient le titre de 'Capitale de la Saucisse de Nouvelle-Zélande'.",
          "Notre destination est Invercargill, la ville la plus australe de Nouvelle-Zélande et la porte d'entrée des Catlins, une région côtière sauvage et accidentée connue pour ses paysages à couper le souffle et sa faune abondante.",
        ],
        de: [
          "Wir fahren heute nach Süden, entlang der Southern Scenic Route durch einige der schönsten und abgelegensten Teile der Südinsel. Unterwegs halten wir bei einer der wenigen Farm-Destillerien von Samen bis Tasse der Welt, der Stadt, die liebevoll als 'Riviera des Südens' bezeichnet wird, und der Stadt, die den Titel 'Wursthauptstadt Neuseelands' trägt.",
          "Unser Ziel ist Invercargill, die südlichste Stadt Neuseelands und das Tor zu den Catlins, einer wilden Küstenregion, die für ihre atemberaubende Landschaft und ihre reiche Tierwelt bekannt ist.",
        ],
      },
      accommodation: {
        en: "Invercargill",
        fr: "Invercargill",
        de: "Invercargill",
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
        en: "The Catlins",
        fr: "Les Catlins",
        de: "Die Catlins",
      },
      description: {
        en: [
          "Start the day by visiting Bluff, the southernmost town in New Zealand, before picking up morning tea from a local iconic bakery and heading to the Catlins",
          "One of the most beautiful and least visited regions of New Zealand, the Catlins is a rugged and wild coastal area known for waterfalls, wildlife, and petrified forest.",
          "We'll visit one of the most famous waterfalls in the country, see the petrified forest, and keep an eye out for wildlife along the way.",
          "We'll end the day in New Zealand's city of firsts, Dunedin, home to the country's first university, first cathedral, first newspaper, and even the nation's first phonecall (among many other claims to fame).",
        ],
        fr: [
          "Commencez la journée en visitant Bluff, la ville la plus australe de Nouvelle-Zélande, avant de prendre le thé du matin dans une boulangerie locale emblématique et de vous diriger vers les Catlins.",
          "L'une des régions les plus belles et les moins visitées de Nouvelle-Zélande, les Catlins est une région côtière rude et sauvage, connue pour ses chutes d'eau, sa faune et sa forêt pétrifiée.",
          "Nous visiterons l'une des chutes d'eau les plus célèbres du pays, verrons la forêt pétrifiée et resterons attentifs à la faune en chemin.",
          "Nous terminerons la journée dans la ville des premiers de Nouvelle-Zélande, Dunedin, qui abrite la première université du pays, la première cathédrale, le premier journal et même le premier appel téléphonique (entre bien d'autres prouesses).",
        ],
        de: [
          "Beginnen Sie den Tag mit einem Besuch in Bluff, der südlichsten Stadt Neuseelands, bevor Sie Ihren Morgenkaffee in einer lokalen ikonischen Bäckerei holen und zu den Catlins fahren.",
          "Eine der schönsten und am wenigsten besuchten Regionen Neuseelands, sind die Catlins, eine rauhe und wilde Küstenregion, bekannt für Wasserfälle, Tierwelt und petrifizierte Wälder.",
          "Wir werden einen der berühmtesten Wasserfälle des Landes besuchen, die petrifizierte Waldregion sehen und auf Tierwelt unterwegs aufpassen.",
          "Wir werden den Tag in New Zealand's Stadt der ersten, Dunedin, beenden, die Heimat der ersten Universität des Landes, der ersten Kathedrale, des ersten Zeitungsausgangs und sogar des ersten Telefonanrufs (unter vielen anderen Verdiensten).",
        ],
      },
      accommodation: {
        en: "Dunedin",
        fr: "Dunedin",
        de: "Dunedin",
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
        en: "Dunedin",
        fr: "Dunedin",
        de: "Dunedin",
      },
      description: {
        en: [
          "Start the day by walking the steepest street in the world, Baldwin Street, before getting a view over the city from the top of Signal Hill.",
          "After visiting the iconic railway station and the country's first university, we head to Ocho Chocolate, a local artisan chocolatier, for a tour and tastingg followed by a tour and samples at the clever team at Dunedin Craft Distillers",
          "Then it's out onto the Otago Peninsula. Home to the world’s only mainland breeding colony of royal albatross, the Otago Peninsula is a haven for wildlife and offers stunning coastal views. We will visit the Royal Albatross Centre to learn about these magnificent birds and have the chance to see them up close.",
        ],
        fr: [
          "Commencez la journée en marchant dans la rue la plus raide du monde, Baldwin Street, avant d'avoir une vue sur la ville depuis le sommet de Signal Hill.",
          "Après avoir visité la gare emblématique et la première université du pays, nous nous rendons à Ocho Chocolate, un chocolatier artisanal local, pour une visite et une dégustation, suivies d'une visite et d'échantillons de l'équipe intelligente de Dunedin Craft Distillers.",
          "Ensuite, c'est sur la péninsule d'Otago. Abritant la seule colonie de reproduction continentale au monde d'albatros royaux, la péninsule d'Otago est un havre pour la faune et offre des vues côtières à couper le souffle. Nous visiterons le Royal Albatross Centre pour en apprendre davantage sur ces magnifiques oiseaux et avoir la chance de les voir de près.",
        ],
        de: [
          "Beginnen Sie den Tag mit einem Spaziergang durch die steilste Straße der Welt, die Baldwin Street, bevor Sie von Signal Hill aus einen Blick über die Stadt genießen.",
          "Nach dem Besuch des ikonischen Bahnhofs und der ersten Universität des Landes fahren wir zu Ocho Chocolate, einem lokalen handwerklichen Chocolatier, für eine Tour und Verkostung, gefolgt von einer Tour und Proben bei dem cleveren Team von Dunedin Craft Distillers.",
          "Dann geht es auf die Otago Peninsula. Heimat der einzigen Festlandbrutkolonie der königlichen Albatrosse der Welt, ist die Otago Peninsula ein Zufluchtsort für Wildtiere und bietet atemberaubende Küstenblicke. Wir werden das Royal Albatross Centre besuchen, um mehr über diese prächtigen Vögel zu erfahren und die Chance zu haben, sie aus nächster Nähe zu sehen.",
        ],
      },
      accommodation: {
        en: "Dunedin",
        fr: "Dunedin",
        de: "Dunedin",
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
      images: [getImagePath('nz/dunedin.jpg'), getImagePath('nz/remarkables.jpg')],
    },
    {
      day: 11,
      title: {
        en: "Dunedin free day",
        fr: "Journée libre à Dunedin",
        de: "Freier Tag in Dunedin",
      },
      description: {
        en: [
          "A day to explore Dunedin at your own pace. Maybe take a tour of the Speight's Brewery, visit the Otago Museum, or simply wander the streets and soak up the unique atmosphere of this vibrant city.",
          "There are a multitude of activities on offer in and around Dunedin, from wildlife tours to art galleries, so there is something for everyone to enjoy.",
        ],
        fr: [
          "Une journée pour explorer Dunedin à votre rythme. Vous pouvez visiter la brasserie Speight's, rendre visite au musée Otago ou simplement flâner dans les rues et profiter de l'atmosphère unique de cette ville vibrante.",
          "De nombreuses activités sont proposées dans et autour de Dunedin, des visites de la faune aux galeries d'art, il y en a pour tous les goûts.",
        ],
        de: [
          "Ein Tag, um Dunedin in Ihrem eigenen Tempo zu erkunden. Vielleicht besuchen Sie die Speight's Brewery, besuchen Sie das Otago Museum oder schlendern einfach durch die Straßen und atmen die einzigartige Atmosphäre dieser lebhaften Stadt.",
          "Es gibt eine Vielzahl von Aktivitäten in und um Dunedin, von Wildtierführungen bis hin zu Kunsthallen, es gibt für jeden etwas.",
        ],
      },
      accommodation: {
        en: "Dunedin",
        fr: "Dunedin",
        de: "Dunedin",
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
        en: "Dunedin to Christchurch",
        fr: "Dunedin à Christchurch",
        de: "Dunedin nach Christchurch",
      },
      description: {
        en: [
          "The final day of the tour takes us back to Christchurch where we will say our goodbyes... But there is still time for a few more adventures along the way!",
          "We'll visit Moeraki Boulders, a fascinating geological formation of large spherical boulders on the beach, before heading to the charming town of Oamaru, known for its Victorian architecture and vibrant arts scene not to mention being the steampunk capital of New Zealand.",
          "We'll stop in at the small town of Waimate for lunch before making our last stop at the longest road bridge in New Zealand, over the Rakaia River (once more), for one last photo opportunity before we head to Christchurch and say our goodbyes or Haere Rā.",
        ],
        fr: [
          "Le dernier jour du circuit nous ramène à Christchurch où nous dirons au revoir... Mais il reste encore du temps pour quelques aventures supplémentaires en chemin!",
          "Nous visiterons les Moeraki Boulders, une formation géologique fascinante de grosses pierres sphériques sur la plage, avant de nous rendre dans la charmante ville d'Oamaru, connue pour son architecture victorienne et sa scène artistique vibrante, sans oublier d'être la capitale du steampunk en Nouvelle-Zélande.",
          "Nous ferons une halte dans la petite ville de Waimate pour le déjeuner avant de faire notre dernière étape au plus long pont routier de la Nouvelle-Zélande, au-dessus de la rivière Rakaia (encore une fois), pour une dernière opportunité de photo avant de nous rendre à Christchurch et dire au revoir ou Haere Rā.",
        ],
        de: [
          "Der letzte Tag der Tour führt uns zurück nach Christchurch, wo wir uns verabschieden werden... Aber es ist noch Zeit für ein paar weitere Abenteuer auf dem Weg!",
          "Wir besuchen die Moeraki Boulders, eine faszinierende geologische Formation großer kugelförmiger Felsen am Strand, bevor wir in die charmante Stadt Oamaru fahren, die für ihre viktorianische Architektur und lebendige Kunstszene bekannt ist, ganz zu schweigen davon, dass sie die Steampunk-Hauptstadt Neuseelands ist.",
          "Wir machen eine Pause in der kleinen Stadt Waimate zum Mittagessen, bevor wir unsere letzte Station an der längsten Straßenbrücke Neuseelands über den Rakaia River (noch einmal) für eine letzte Foto-Gelegenheit machen, bevor wir nach Christchurch fahren und uns verabschieden oder Haere Rā sagen.",
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