// data/waterfallsWalnuts.ts
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

export const waterfallsWalnuts: Tour = {
  name: "Waterfalls and Walnuts",
  durationDays: 12,
  price: ["From NZ$14,990", "per person (twin share)"],
  singleSupplement: "NZ$5,775",
  departureDates: [{ date: "September 13th, 2026", status: "limited" }],
  mapImage: getImagePath('ch/East.png'),
  summary: {
    en: [
      "Explore the East of Switzerland and discover flavours like Kirsch (Cherry Brandy), the walnut and caramel tart from Graubünden, and Swiss-made whiskey.",
      "Along the way we'll learn how to make liqueur-filled chocolates, create a 'slightly' boozy cake celebrating cherries, and sample wines from the country's easternmost wineries among many other culinary delights.",
      "Stand in awe of the mighty Rhine Falls, explore UNESCO World Heritage-listed sites, and take in stunning alpine scenery.",
      "Gaze over 6 countries at once from the summit of the highest peak in the Alpstein massif.",
      "This journey also crosses into Germany, Austria and Liechtensteinplenty of opportunities to sample regional delicacies.",
    ],
    fr: [
      "Explorez l'est de la Suisse et découvrez des saveurs comme le Kirsch (eau-de-vie de cerise), la tarte aux noix et au caramel de Graubünden, et le whisky suisse.",
      "En chemin, nous apprendrons à fabriquer des chocolats fourrés à la liqueur, à créer un gâteau 'légèrement' alcoolisé célébrant les cerises, et à déguster des vins des vignobles les plus orientaux du pays, parmi bien d'autres délices culinaires.",
      "Restez bouche bée devant les majestueuses chutes du Rhin, explorez des sites classés au patrimoine mondial de l'UNESCO et admirez de superbes paysages alpins.",
      "Contemplez 6 pays à la fois depuis le sommet du point culminant du massif de l'Alpstein.",
      "Ce voyage traverse également l'Allemagne, l'Autriche et le Liechtensteinde nombreuses occasions de goûter aux spécialités régionales.",
    ],
    de: [
      "Erkunden Sie den Osten der Schweiz und entdecken Sie Geschmäcker wie Kirsch (Kirschbrand), die Walnuss- und Karamell-Tarte aus Graubünden und schweizerischen Whiskey.",
      "Unterwegs lernen wir, liqueurgefüllte Schokoladen herzustellen, einen 'leicht' alkoholischen Kuchen zu backen, der Kirschen feiert, und Weine aus den östlichsten Weingütern des Landes zu probieren.",
      "Staunen Sie über die mächtigen Rheinfälle, erkunden Sie UNESCO-Weltkulturerbestätten und genießen Sie atemberaubende Alpenlandschaften.",
      "Blicken Sie vom Gipfel des höchsten Punktes im Alpsteinmassiv über 6 Länder auf einmal.",
      "Diese Reise führt auch nach Deutschland, Österreich und Liechtensteinviele Möglichkeiten, regionale Spezialitäten zu probieren.",
    ],
  },
  heroImages: [
    getImagePath("ch/davos.jpg"),
    getImagePath("ch/kirschstaengeli.jpg"),
    getImagePath("ch/stgallenlibrary2.jpg"),
  ],
  whatsIncluded: {
    en: [
      "Services of an experienced tour leader born and raised in Switzerland and fluent in the main languages of Switzerland",
      "Insights and explanations from a baker and chef with more than 30 years experience in the food industry",
      "Hotel accommodation (twin share)",
      "Daily breakfasts",
      "4 dinners and a multitude of Swiss delicacies along the way",
      "Transportation in an air conditioned coach",
      "Glacier Express train, 1st class seat",
      "Chocolate making class and entry to Gottlieben Hüppen chocolate factory",
      "Cake and chocolate making class in Zug",
      "Boat journey on the Bodensee",
      "Cablecar up Säntis",
      "Entry to Library and Museum of the Abbey of St. Gallen",
      "Tours and tastings at 3 distilleries, 1 Brewery, and a winery",
      "Guided walking tours of destinations including Shaffhausen, St Gallen, and Appenzell",
      "All applicable taxes",
      "Luggage transfers between hotels",
      "Advice and support prior to and during the tour including travel tips, plus foodie and insider recommendations",
      "Small group size (max 12)",
      "A few extra surprises and mementos along the way",
    ],
    fr: [
      "Services d'un guide expérimenté né et élevé en Suisse, parlant couramment les principales langues de Suisse",
      "Conseils et explications d'un boulanger et chef cuisinier avec plus de 30 ans d'expérience dans l'industrie alimentaire",
      "Hébergement en hôtel (chambre double)",
      "Petits-déjeuners quotidiens",
      "4 dîners et une multitude de spécialités suisses tout au long du voyage",
      "Transport en car climatisé",
      "Train Glacier Express, siège de 1ère classe",
      "Cours de fabrication de chocolat et entrée à la chocolaterie Gottlieben Hüppen",
      "Cours de pâtisserie et chocolaterie à Zoug",
      "Traversée en bateau du lac de Constance",
      "Téléphérique jusqu'au Säntis",
      "Entrée à la Bibliothèque et au Musée de l'Abbaye de Saint-Gall",
      "Visites et dégustations dans 3 distilleries, 1 brasserie et un vignoble",
      "Visites guidées de destinations dont Schaffhouse, Saint-Gall et Appenzell",
      "Toutes taxes applicables",
      "Transferts de bagages entre les hôtels",
      "Conseils et soutien avant et pendant le circuit, y compris des conseils de voyage et des recommandations gastronomiques",
      "Petit groupe (max 12)",
      "Quelques surprises supplémentaires et souvenirs en chemin",
    ],
    de: [
      "Leistungen eines erfahrenen Reiseleiters, der in der Schweiz geboren und aufgewachsen ist und die wichtigsten Schweizer Sprachen fließend spricht",
      "Einblicke eines Bäckers und Kochs mit mehr als 30 Jahren Erfahrung in der Lebensmittelbranche",
      "Hotelunterkunft (Doppelzimmer)",
      "Tägliches Frühstück",
      "4 Abendessen und eine Vielzahl von Schweizer Spezialitäten unterwegs",
      "Transport in einem klimatisierten Reisebus",
      "Glacier Express, 1. Klasse Sitzplatz",
      "Schokoladenherstellungskurs und Eintritt in die Gottlieben Hüppen Schokoladenfabrik",
      "Kuchen- und Schokoladenherstellungskurs in Zug",
      "Bootsfahrt auf dem Bodensee",
      "Seilbahn auf den Säntis",
      "Eintritt in die Bibliothek und das Museum der Abtei St. Gallen",
      "Touren und Verkostungen in 3 Destillerien, 1 Brauerei und einem Weingut",
      "Geführte Stadtrundgänge in Schaffhausen, St. Gallen und Appenzell",
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
        en: "Arrival in Zurich",
        fr: "Arrivée à Zurich",
        de: "Ankunft in Zürich",
      },
      description: {
        en: [
          "Grüezi mitenand! Welcome to Switzerland. Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If you're looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.",
          "This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.",
          "It's very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip.",
        ],
        fr: [
          "Grüezi mitenand! Bienvenue en Suisse. Votre aventure commence à 18h avec une réunion de bienvenue pour rencontrer vos compagnons de voyage et votre guide. Si vous arrivez tôt, vous pouvez visiter le Musée national suisse ou le Kunsthaus de Zurich.",
          "Ce soir, célébrez le début d'une nouvelle aventure avec un dîner de bienvenue et découvrez ce que les 12 prochains jours ont à offrir.",
          "Il est très important d'assister à la réunion de bienvenue car nous passerons en revue des informations essentielles pour profiter au maximum de votre voyage.",
        ],
        de: [
          "Grüezi mitenand! Willkommen in der Schweiz. Ihr Abenteuer beginnt um 18 Uhr mit einem Willkommenstreffen.",
          "Feiern Sie heute Abend den Beginn eines neuen Abenteuers mit einem Willkommensdinner.",
          "Es ist sehr wichtig, dass Sie am Willkommenstreffen teilnehmen.",
        ],
      },
      accommodation: {
        en: "Zurich",
        fr: "Zurich",
        de: "Zürich",
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
      images: [getImagePath('ch/schaffhausen3.jpg'), getImagePath('ch/gottlieben1.jpeg')],
    },
    {
      day: 2,
      title: {
        en: "Zurich to Gottlieben via Rhine Falls & Stein am Rhein",
        fr: "Zurich à Gottlieben via les chutes du Rhin et Stein am Rhein",
        de: "Zürich nach Gottlieben über den Rheinfall und Stein am Rhein",
      },
      description: {
        en: [
          "After enjoying breakfast at the hotel, board the bus as the journey begins. We head north, towards the Rhine River and the most powerful waterfalls in mainland Europe.",
          "We then head to Shaffhausen, and the view from its hilltop fortress known as the Munot before wandering down through the old town and the chance for something to eat.",
          "Stein am Rhein is our next, and last stop for the day. Complete with timber-framed houses, some of which date back as far as the 15th century, Stein a. R. is a feast for the eyes.",
          "After arriving at the hotel, the rest of the day is yours to relax and wander the streets and discover this beautiful place before dinner at a restaurant that offers some local specialties.",
        ],
        fr: [
          "Après le petit-déjeuner à l'hôtel, montez dans le bus pour commencer le voyage. Nous nous dirigeons vers le nord, vers le Rhin et les chutes les plus puissantes d'Europe continentale.",
          "Nous rejoignons ensuite Schaffhouse et la vue depuis sa forteresse perchée, le Munot, avant de descendre dans la vieille ville.",
          "Stein am Rhein est notre prochaine et dernière étape de la journée, avec ses maisons à colombages datant du XVe siècle.",
          "Après l'arrivée à l'hôtel, le reste de la journée est libre avant le dîner dans un restaurant proposant des spécialités locales.",
        ],
        de: [
          "Nach dem Frühstück im Hotel geht es los. Wir fahren nach Norden, zum Rhein und den mächtigsten Wasserfällen Mitteleuropas.",
          "Dann geht es nach Schaffhausen und zur Aussicht von der Festung Munot.",
          "Stein am Rhein ist unsere nächste und letzte Station des Tages mit seinen Fachwerkhäusern.",
          "Nach der Ankunft im Hotel gehört der Rest des Tages Ihnen.",
        ],
      },
      accommodation: {
        en: "Konstanz",
        fr: "Constance",
        de: "Konstanz",
      },
      includedActivities: {
        en: [""],
        fr: [""],
        de: [""],
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
      images: [getImagePath('ch/rhinefalls.jpg'), getImagePath('ch/schaffhausen.jpg'), getImagePath('ch/munotview.jpg')],
    },
    {
      day: 3,
      title: {
        en: "Chocolate making course and Konstanz visit",
        fr: "Cours de fabrication de chocolat et visite de Constance",
        de: "Schokoladenherstellungskurs und Besuch in Konstanz",
      },
      description: {
        en: [
          "A short drive to the nearby village of Gottlieben, where we will have the first of our chocolate-making classes at the renowned Huppe chocolatier.",
          "All chocolated up, we head to Konstanz, just across the border in Germany. Here you can explore the old town, visit the Sea Life Centre, or simply relax by the lake.",
        ],
        fr: [
          "Un court trajet jusqu'au village voisin de Gottlieben, où nous aurons notre premier cours de fabrication de chocolat chez le célèbre chocolatier Huppe.",
          "Repus de chocolat, nous nous dirigeons vers Constance, juste de l'autre côté de la frontière en Allemagne, pour explorer la vieille ville ou simplement se détendre au bord du lac.",
        ],
        de: [
          "Eine kurze Fahrt in das nahe gelegene Dorf Gottlieben, wo wir unseren ersten Schokoladenherstellungskurs beim renommierten Chocolatier Huppe haben werden.",
          "Voller Schokolade fahren wir nach Konstanz, gleich hinter der Grenze in Deutschland.",
        ],
      },
      accommodation: {
        en: "Konstanz",
        fr: "Constance",
        de: "Konstanz",
      },
      includedActivities: {
        en: ["Chocolate making class at Gottlieben Hüppen"],
        fr: ["Cours de fabrication de chocolat chez Gottlieben Hüppen"],
        de: ["Schokoladenherstellungskurs bei Gottlieben Hüppen"],
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
      images: [getImagePath('ch/gottlieben1.jpeg'), getImagePath('ch/gottlieben2.jpeg'), getImagePath('Konstanz1.jpeg')],
    },
    {
      day: 4,
      title: {
        en: "Konstanz to St Gallen",
        fr: "Constance à Saint-Gall",
        de: "Konstanz nach St. Gallen",
      },
      description: {
        en: [
          "Today we take to the water as we board a boat to travel across Lake Constance to the Bavarian town of Lindau.",
          "After lunch in the old town of Lindau island, we rejoin the bus and make our way, through Austria and back into Switzerland, to the Wetli Winery and a tour of their cellar, the world of winemaking and, of course, some tastings.",
          "Then, relax as we head to our hotel in St Gallen, where the rest of the evening is free to relax.",
        ],
        fr: [
          "Aujourd'hui, nous prenons le large en montant à bord d'un bateau pour traverser le lac de Constance jusqu'à la ville bavaroise de Lindau.",
          "Après le déjeuner dans la vieille ville de l'île de Lindau, nous reprenons le bus en passant par l'Autriche pour rejoindre le vignoble Wetli et une visite de leur cave.",
          "Puis, détendez-vous pendant que nous rejoignons notre hôtel à Saint-Gall.",
        ],
        de: [
          "Heute begeben wir uns aufs Wasser und fahren mit einem Boot über den Bodensee in die bayerische Stadt Lindau.",
          "Nach dem Mittagessen in der Altstadt von Lindau fahren wir durch Österreich zurück in die Schweiz zum Weingut Wetli.",
          "Dann entspannen Sie sich auf dem Weg zu unserem Hotel in St. Gallen.",
        ],
      },
      accommodation: {
        en: "St. Gallen",
        fr: "Saint-Gall",
        de: "St. Gallen",
      },
      includedActivities: {
        en: ["Boat trip on Lake Constance", "Lunch at Wissingers im Schlechterbräu", "Winery Tour and tasting"],
        fr: ["Traversée en bateau du lac de Constance", "Déjeuner au Wissingers im Schlechterbräu", "Visite et dégustation au vignoble"],
        de: ["Bootsfahrt auf dem Bodensee", "Mittagessen im Wissingers im Schlechterbräu", "Weingutsbesichtigung und Weinprobe"],
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
      images: [getImagePath('bodensee.jpeg'), getImagePath('lindau.jpeg'), getImagePath('ch/wetliweinkeller.jpg')],
    },
    {
      day: 5,
      title: {
        en: "Säntis then Appenzell and the brewer/distillery",
        fr: "Säntis puis Appenzell et la brasserie/distillerie",
        de: "Säntis, dann Appenzell und die Brauerei/Destillerie",
      },
      description: {
        en: [
          "Today we head 'up'... taking the cable car to the summit of the Säntis, the highest peak in the Alpstein massif, where on a clear day you can see six countries at once.",
          "We then head to Appenzell for a tour and tasting at the famous Appenzeller brewery and distillery.",
          "If fine dining is something that appeals, then you have the option of joining us for wine tasting in the hotel cellar followed by a gourmet dinner at the hotel's two Michelin-starred restaurant.",
        ],
        fr: [
          "Aujourd'hui, nous montons en prenant le téléphérique jusqu'au sommet du Säntis, le point culminant du massif de l'Alpstein, d'où l'on peut voir six pays par temps clair.",
          "Nous nous rendons ensuite à Appenzell pour une visite et une dégustation à la célèbre brasserie et distillerie Appenzeller.",
          "Pour les amateurs de gastronomie, vous avez la possibilité de nous rejoindre pour une dégustation de vins dans la cave de l'hôtel suivie d'un dîner gastronomique au restaurant deux étoiles Michelin.",
        ],
        de: [
          "Heute fahren wir mit der Seilbahn auf den Gipfel des Säntis, den höchsten Punkt des Alpsteinmassivs.",
          "Dann geht es nach Appenzell für eine Führung und Verkostung in der berühmten Appenzeller Brauerei und Destillerie.",
          "Für Feinschmecker gibt es die Möglichkeit, an einer Weinprobe im Hotelkeller und einem Gourmetdinner im Zwei-Sterne-Restaurant teilzunehmen.",
        ],
      },
      accommodation: {
        en: "St. Gallen",
        fr: "Saint-Gall",
        de: "St. Gallen",
      },
      includedActivities: {
        en: ["Cable car up Säntis", "Tour & tasting at Appenzeller brewery/distillery"],
        fr: ["Téléphérique jusqu'au Säntis", "Visite et dégustation à la brasserie/distillerie Appenzeller"],
        de: ["Seilbahn auf den Säntis", "Führung und Verkostung in der Appenzeller Brauerei/Destillerie"],
      },
      optionalActivities: {
        en: ["2 Michelin-star dinner at Einstein hotel"],
        fr: ["Dîner 2 étoiles Michelin à l'hôtel Einstein"],
        de: ["2-Sterne-Michelin-Dinner im Hotel Einstein"],
      },
      optionalActivitiesDetailed: [
        {
          name: "Einstein Gourmet Dinner Experience",
          description:
            "Begin with a private wine tasting in the hotel's cellar before indulging in a multi-course tasting menu crafted by the Einstein Gourmet team (2 Michelin Stars, 18 GaultMillau points). An unforgettable evening of flavour and finesse in St Gallen.",
          price: "NZ$420 per person",
          duration: "3–4 hours",
          included: [
            "Private wine tasting with sommelier",
            "7-course tasting menu",
            "Paired wines",
            "Coffee and petit fours",
          ],
          bookingNote:
            "Limited availability. Must be booked at least 14 days in advance. Formal dress required.",
        },
      ],
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"],
      },
      images: [getImagePath("ch/appenzell.jpeg"), getImagePath("ch/santisccar.jpeg"), getImagePath("ch/santisbarrel.jpg")],
    },
    {
      day: 6,
      title: {
        en: "Old town and Abbey tour then free time",
        fr: "Visite de la vieille ville et de l'abbaye puis temps libre",
        de: "Altstadt- und Klosterbesichtigung, dann Freizeit",
      },
      description: {
        en: [
          "A more relaxed day today, with a visit to the UNESCO World Heritage-listed Abbey of St Gallen, founded in 612 AD. The library is one of the oldest and most beautiful in the world, and contains more than 170,000 texts, some dating back to the 8th century.",
          "After the visit, the rest of the day is free to explore St Gallen at your own pace. Maybe visit the Textile Museum, or simply wander the streets and discover the many shops and cafes.",
        ],
        fr: [
          "Une journée plus détendue aujourd'hui, avec une visite de l'abbaye de Saint-Gall, classée au patrimoine mondial de l'UNESCO et fondée en 612 ap. J.-C. La bibliothèque est l'une des plus anciennes et des plus belles du monde.",
          "Après la visite, le reste de la journée est libre pour explorer Saint-Gall à votre rythme.",
        ],
        de: [
          "Ein entspannterer Tag mit einem Besuch der UNESCO-Weltkulturerbe-Stiftskirche St. Gallen, gegründet 612 n. Chr.",
          "Nach dem Besuch gehört der Rest des Tages Ihnen, um St. Gallen in Ihrem eigenen Tempo zu erkunden.",
        ],
      },
      accommodation: {
        en: "St. Gallen",
        fr: "Saint-Gall",
        de: "St. Gallen",
      },
      includedActivities: {
        en: ["Walking tour of Old town St. Gallen", "'All Abbey Pass' for Abbey of St Gallen"],
        fr: ["Visite guidée de la vieille ville de Saint-Gall", "Pass 'Toute l'Abbaye' pour l'Abbaye de Saint-Gall"],
        de: ["Stadtführung durch die Altstadt von St. Gallen", "'All Abbey Pass' für die Stiftskirche St. Gallen"],
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
      images: [getImagePath('ch/stgallen1.jpeg'), getImagePath('ch/stgallen2.jpg'), getImagePath('ch/abbey.jpg')],
    },
    {
      day: 7,
      title: {
        en: "To St Moritz via Liechtenstein",
        fr: "Vers Saint-Moritz via le Liechtenstein",
        de: "Nach St. Moritz über Liechtenstein",
      },
      description: {
        en: [
          "Heading south, we cross into the tiny country of Liechtenstein, and its capital Vaduz. After a short stop to explore the old town and maybe grab a coffee, we cross back into Switzerland and the Graubünden region where we arrive in Davos for lunch.",
          "After lunch, there is time to explore Davos, before we continue our journey to St Moritz, our home for the next couple of nights. On the way, we will stop at a bakery to sample the famous Bündner Nusstorte (walnut and caramel tart).",
        ],
        fr: [
          "En direction du sud, nous entrons dans le minuscule pays du Liechtenstein et sa capitale Vaduz. Après un court arrêt, nous revenons en Suisse dans la région des Grisons pour arriver à Davos pour le déjeuner.",
          "Après le déjeuner, il y a le temps d'explorer Davos avant de continuer vers Saint-Moritz. En chemin, nous nous arrêterons dans une boulangerie pour goûter la fameuse Bündner Nusstorte.",
        ],
        de: [
          "In Richtung Süden überqueren wir die Grenze zum kleinen Land Liechtenstein und seiner Hauptstadt Vaduz.",
          "Nach dem Mittagessen gibt es Zeit, Davos zu erkunden, bevor wir unsere Reise nach St. Moritz fortsetzen.",
        ],
      },
      accommodation: {
        en: "St Moritz",
        fr: "Saint-Moritz",
        de: "St. Moritz",
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
      images: [getImagePath('vaduz.jpg'), getImagePath('ch/davos.jpg'), getImagePath('ch/engadiner.jpg')],
    },
    {
      day: 8,
      title: {
        en: "St. Moritz Free Day",
        fr: "Journée libre à Saint-Moritz",
        de: "Freier Tag in St. Moritz",
      },
      description: {
        en: [
          "Your day to relax or join an optional excursion to Muottas Muragl for panoramic views of the Engadin valley.",
        ],
        fr: [
          "Votre journée pour vous détendre ou rejoindre une excursion optionnelle à Muottas Muragl pour des vues panoramiques sur la vallée de l'Engadine.",
        ],
        de: [
          "Ihr Tag zum Entspannen oder für einen optionalen Ausflug nach Muottas Muragl mit Panoramablick auf das Engadin.",
        ],
      },
      accommodation: {
        en: "St Moritz",
        fr: "Saint-Moritz",
        de: "St. Moritz",
      },
      optionalActivities: {
        en: ["Muottas Muragl funicular and scenic lunch"],
        fr: ["Funiculaire de Muottas Muragl et déjeuner panoramique"],
        de: ["Standseilbahn Muottas Muragl und Mittagessen mit Aussicht"],
      },
      optionalActivitiesDetailed: [
        {
          name: "Muottas Muragl Scenic Experience",
          description:
            "Ride the historic funicular to 2,456 meters for breathtaking alpine views. Enjoy a gourmet lunch at the panoramic restaurant or explore one of several summit walking trails.",
          price: "NZ$195 per person",
          duration: "Half day (4–5 hours)",
          included: [
            "Return funicular tickets",
            "Lunch at panoramic restaurant",
            "Local guide and transfers",
          ],
          bookingNote:
            "Weather dependent. Operates May–October. Warm clothing recommended.",
        },
      ],
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"],
      },
      images: [getImagePath("ch/muottas_muragl.jpg"), getImagePath("ch/muottas_muragl2.jpg")],
    },
    {
      day: 9,
      title: {
        en: "St Moritz to Andermatt (Glacier Express)",
        fr: "Saint-Moritz à Andermatt (Glacier Express)",
        de: "St. Moritz nach Andermatt (Glacier Express)",
      },
      description: {
        en: [
          "All aboard the Glacier Express! One of the most scenic train journeys in the world, the Glacier Express takes us from St Moritz to Andermatt, crossing 291 bridges and 91 tunnels along the way. Sit back, relax and enjoy the stunning scenery as we make our way through the Swiss Alps and the Oberalp Pass.",
          "Arriving in Andermatt, we'll be collected by the bus and taken to our hotel. For those wanting to stretch their legs, there is a short walk from the hotel to the village centre where you can explore the shops and cafes.",
          "Dinner this evening is at a local restaurant that specialises in Swiss cuisine and is well known for its cheese fondue.",
        ],
        fr: [
          "Tous à bord du Glacier Express! L'un des voyages en train les plus panoramiques au monde, le Glacier Express nous emmène de Saint-Moritz à Andermatt en franchissant 291 ponts et 91 tunnels.",
          "À l'arrivée à Andermatt, le bus nous conduira à notre hôtel. Pour ceux qui souhaitent se dégourdir les jambes, une courte promenade mène au centre du village.",
          "Le dîner de ce soir est dans un restaurant local spécialisé dans la cuisine suisse, réputé pour sa fondue au fromage.",
        ],
        de: [
          "Alle an Bord des Glacier Express! Einer der landschaftlich schönsten Zugreisen der Welt, von St. Moritz nach Andermatt.",
          "Bei der Ankunft in Andermatt bringt uns der Bus zum Hotel.",
          "Das Abendessen ist in einem lokalen Restaurant, das für sein Käsefondue bekannt ist.",
        ],
      },
      accommodation: {
        en: "Andermatt",
        fr: "Andermatt",
        de: "Andermatt",
      },
      includedActivities: {
        en: ["1st-Class Glacier Express seat"],
        fr: ["Siège de 1ère classe dans le Glacier Express"],
        de: ["1. Klasse Sitzplatz im Glacier Express"],
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
      images: [getImagePath('ch/GlacierLandwasser.jpg'), getImagePath('ch/gexpress1.jpg'), getImagePath('ch/gexpress2.jpg')],
    },
    {
      day: 10,
      title: {
        en: "Andermatt to Zug via Glarus and Oberarth",
        fr: "Andermatt à Zoug via Glaris et Oberarth",
        de: "Andermatt nach Zug über Glarus und Oberarth",
      },
      description: {
        en: [
          "Leaving Andermatt we head towards Zug and through the territory of William Tell. We'll stop in on the statue memorializing the legend in the town where he made his stand – Altdorf – before grabbing some lunch.",
          "Next is the smallest cantonal capital in Switzerland that dates back to the 9th century and is one of the last places that still practice Landsgemeindeplatz - Glarus.",
          "We then head to the oldest distillery in Switzerland, take a tour and taste our way through some of their offerings - be sure to try their Chrüter (Kevin's favourite is the honey one).",
          "Relax as we then head to our stop for the night - Zug.",
        ],
        fr: [
          "Quittant Andermatt, nous nous dirigeons vers Zoug en traversant le territoire de Guillaume Tell. Nous nous arrêterons à la statue commémorant la légende à Altdorf.",
          "Ensuite, Glaris, la plus petite capitale cantonale de Suisse qui remonte au IXe siècle.",
          "Nous nous rendons ensuite à la plus ancienne distillerie de Suisse pour une visite et une dégustation.",
          "Détendez-vous pendant que nous rejoignons Zoug pour la nuit.",
        ],
        de: [
          "Wir verlassen Andermatt und fahren nach Zug durch das Gebiet von Wilhelm Tell, mit einem Halt an der Statue in Altdorf.",
          "Als nächstes besuchen wir Glarus, die kleinste Kantonshauptstadt der Schweiz.",
          "Dann geht es zur ältesten Destillerie der Schweiz für eine Führung und Verkostung.",
          "Entspannen Sie sich auf dem Weg nach Zug für die Nacht.",
        ],
      },
      accommodation: {
        en: "Luzern",
        fr: "Lucerne",
        de: "Luzern",
      },
      includedActivities: {
        en: ["Tour & tasting at Fassbind distillery", "Visit to Glarus", "Visit to Altdorf"],
        fr: ["Visite et dégustation à la distillerie Fassbind", "Visite de Glaris", "Visite d'Altdorf"],
        de: ["Führung und Verkostung in der Destillerie Fassbind", "Besuch in Glarus", "Besuch in Altdorf"],
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
      images: [getImagePath('ch/andermatt.jpg'), getImagePath('ch/glarus.jpg'), getImagePath('ch/fassbind.jpeg')],
    },
    {
      day: 11,
      title: {
        en: "Zug & final dinner",
        fr: "Zoug et dîner d'adieu",
        de: "Zug und Abschiedsdinner",
      },
      description: {
        en: [
          "After breakfast we head to the workshop at Speck where we'll learn how to make two iconic Swiss desserts – the Zuger Kirschtorte and the Kirschstängeli. Both contain cherries and alcohol (Kirsch) and are synonymous with the canton of Zug.",
          "In the afternoon we'll head to Etter, a distillery that specialises in fruit brandies. We will see how they make their products and taste a few of them.",
          "Then it's time for our farewell dinner.",
        ],
        fr: [
          "Après le petit-déjeuner, nous nous rendons à l'atelier Speck où nous apprendrons à réaliser deux desserts suisses emblématiques : la Zuger Kirschtorte et le Kirschstängeli.",
          "L'après-midi, nous irons chez Etter, une distillerie spécialisée dans les eaux-de-vie de fruits.",
          "Puis vient l'heure du dîner d'adieu.",
        ],
        de: [
          "Nach dem Frühstück geht es in die Werkstatt von Speck, wo wir lernen, zwei ikonische Schweizer Desserts herzustellen: die Zuger Kirschtorte und den Kirschstängeli.",
          "Am Nachmittag besuchen wir Etter, eine auf Obstbrände spezialisierte Destillerie.",
          "Dann ist es Zeit für unser Abschiedsdinner.",
        ],
      },
      accommodation: {
        en: "Luzern",
        fr: "Lucerne",
        de: "Luzern",
      },
      includedActivities: {
        en: ["Combined course at a confiserie", "Tour and tasting at Etter distillery"],
        fr: ["Cours combiné dans une confiserie", "Visite et dégustation à la distillerie Etter"],
        de: ["Kombinierter Kurs in einer Confiserie", "Führung und Verkostung in der Destillerie Etter"],
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
      images: [getImagePath('ch/etter.jpeg'), getImagePath('ch/kirschtorte.jpg'), getImagePath('ch/kirschstaengeli.jpg')],
    },
    {
      day: 12,
      title: {
        en: "Zurich drop off",
        fr: "Retour à Zurich",
        de: "Rückkehr nach Zürich",
      },
      description: {
        en: [
          "After the last group breakfast, and a chance to say goodbye to your new friends, we head to Zurich where the tour, sadly, ends.",
          "If you have a late flight, consider a visit to the Lindt Home of Chocolate, or the beautiful lakeside city of Rapperswil, known as the town of roses.",
          "We hope to see you again on another of our tours. Uf widerluege!",
        ],
        fr: [
          "Après le dernier petit-déjeuner en groupe et une chance de dire au revoir à vos nouveaux amis, nous nous dirigeons vers Zurich où le circuit, malheureusement, se termine.",
          "Si votre vol est tardif, envisagez une visite à la Maison du chocolat Lindt ou à la belle ville lacustre de Rapperswil, connue comme la ville des roses.",
          "Nous espérons vous revoir lors d'un autre de nos circuits. Uf widerluege!",
        ],
        de: [
          "Nach dem letzten Gruppenfrühstück und der Gelegenheit, sich von Ihren neuen Freunden zu verabschieden, fahren wir nach Zürich, wo die Tour leider endet.",
          "Wenn Ihr Flug spät ist, besuchen Sie das Lindt Home of Chocolate oder die schöne Seestadt Rapperswil.",
          "Wir hoffen, Sie auf einer unserer nächsten Touren wiederzusehen. Uf widerluege!",
        ],
      },
      includedActivities: {
        en: ["Return to Zurich airport or train station"],
        fr: ["Retour à l'aéroport ou à la gare de Zurich"],
        de: ["Rücktransfer zum Flughafen oder Bahnhof Zürich"],
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
      images: [getImagePath('ch/rhinefalls2.jpg'), getImagePath('ch/basel1.jpg')],
    },
  ],
};