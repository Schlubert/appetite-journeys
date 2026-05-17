// data/cakes.ts
import { getImagePath } from '../utils/paths';

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

export const cakes: Tour = {
  name: "The Cakes Trail",
  durationDays: 17,
  price: {
    en: "From NZ$18,990",
    fr: "À partir de NZ$18 990",
    de: "Ab NZ$18.990",
  },
  singleSupplement: {
    en: "NZ$6,450",
    fr: "NZ$6 450",
    de: "NZ$6.450",
  },
  departureDates: [
    { date: "2026-05-15", status: "available" },
    { date: "2026-09-10", status: "limited" }
  ],
  mapImage: getImagePath('Cake.png'),
  summary: {
    en: [
      "Indulge your sweet tooth on a delectable 17-day journey through Central Europe, exploring the rich culinary traditions of Switzerland, France, Germany, and Austria. From the iconic Black Forest Cake in Germany to the exquisite Sachertorte in Austria, this tour is a celebration of the region's most famous cakes and pastries.",
      "Along the way, immerse yourself in the local culture, visit historic landmarks, enjoy hands-on baking workshops, and savor the flavors of each destination.",
      "Whether you're a seasoned baker or simply a lover of all things sweet, this tour promises an unforgettable experience filled with delicious treats and cultural delights."
    ],
    fr: [
      "Régalez-vous lors d'un voyage gastronomique de 17 jours à travers l'Europe centrale, explorant les riches traditions culinaires de la Suisse, la France, l'Allemagne et l'Autriche. Du célèbre Gâteau de la Forêt-Noire allemand à la délicieuse Sachertorte autrichienne, ce voyage est une célébration des gâteaux et pâtisseries les plus renommés de la région.",
      "En chemin, immergez-vous dans la culture locale, visitez des monuments historiques, participez à des ateliers de pâtisserie pratiques et savourez les saveurs de chaque destination.",
      "Que vous soyez un pâtissier expérimenté ou simplement un amoureux des sucreries, ce voyage vous promet une expérience inoubliable remplie de délices délicieux et de richesses culturelles."
    ],
    de: [
      "Verwöhnen Sie sich auf einer köstlichen 17-tägigen Reise durch Mitteleuropa und erforschen die reichen kulinarischen Traditionen der Schweiz, Frankreichs, Deutschlands und Österreichs. Von der ikonischen Schwarzwälder Kirschtorte in Deutschland bis zur exquisiten Sachertorte in Österreich ist diese Reise eine Feier der berühmtesten Torten und Gebäcke der Region.",
      "Unterwegs tauchen Sie in die lokale Kultur ein, besuchen historische Sehenswürdigkeiten, nehmen an praktischen Backworkshops teil und genießen die Aromen jedes Reiseziels.",
      "Ob erfahrener Bäcker oder einfach nur Liebhaber von Süßem, diese Reise verspricht ein unvergessliches Erlebnis voller köstlicher Leckereien und kultureller Highlights."
    ]
  },
  heroImages: [
    getImagePath('linzer_sml.jpg'),
    getImagePath('schoenbrunn.jpg'),
    getImagePath('sacher1.jpg'),
  ],
  itinerary: [
    {
      day: 1,
      title: {
        en: "Arrival in Zurich",
        fr: "Arrivée à Zurich",
        de: "Ankunft in Zürich"
      },
      description: {
        en: [
          "Guten Tag, Bonjour, and Grüezi mitenand! Welcome to an unforgettable culinary journey through 5 countries as we go in search of some of the worlds most famous and delicious cakes and pastries, all while exploring the rich culture and stunning landscapes of Central Europe",
          "Your adventure begins at 6 pm with a welcome meeting to meet your fellow travellers and group leader. If you arrive early, maybe visit the Swiss National Museum. If you're looking for a different type of cultural experience, then you can discover a unique and fascinating part of Zurich at the Kunsthaus Zurich.",
          "This evening, celebrate the beginning of a new adventure with a welcome dinner with your group and learn about what the next 12 days have in store.",
          "It's very important that you attend the welcome meeting as we will be going through information that will help you make the most of your trip."
        ],
        fr: [
          "Guten Tag, Bonjour, et Grüezi mitenand! Bienvenue dans un voyage culinaire inoubliable à travers 5 pays à la recherche de certains des gâteaux et pâtisseries les plus fameux et délicieux du monde, tout en explorant la riche culture et les paysages époustouflants de l'Europe centrale.",
          "Votre aventure commence à 18h avec une réunion de bienvenue pour rencontrer vos compagnons de voyage et votre chef de groupe. Si vous arrivez tôt, vous pouvez visiter le Musée national suisse. Si vous cherchez un type d'expérience culturelle différent, découvrez une partie unique et fascinante de Zurich au Kunsthaus Zurich.",
          "Ce soir, célébrez le début d'une nouvelle aventure avec un dîner de bienvenue en groupe et découvrez ce que les 12 prochains jours vous réservent.",
          "Il est très important que vous assistiez à la réunion de bienvenue car nous passerons en revue les informations qui vous aideront à tirer le meilleur parti de votre voyage."
        ],
        de: [
          "Guten Tag, Bonjour, und Grüezi mitenand! Willkommen zu einer unvergesslichen kulinarischen Reise durch 5 Länder auf der Suche nach einigen der berühmtesten und köstlichsten Torten und Gebäcke der Welt, während wir die reiche Kultur und atemberaubende Landschaft Mitteleuropas erkunden.",
          "Ihr Abenteuer beginnt um 18 Uhr mit einem Willkommenstreffen, um Ihre Mitreisenden und den Gruppenleiter zu treffen. Wenn Sie früh ankommen, können Sie das Schweizer Nationalmuseum besuchen. Wenn Sie ein anderes kulturelles Erlebnis suchen, entdecken Sie einen einzigartigen und faszinierenden Teil Zürichs im Kunsthaus Zürich.",
          "Heute Abend feiern Sie den Beginn eines neuen Abenteuers mit einem Willkommensdinner mit Ihrer Gruppe und erfahren, was die nächsten 12 Tage für Sie bereithalten.",
          "Es ist sehr wichtig, dass Sie am Willkommenstreffen teilnehmen, da wir Informationen durchgehen, die Ihnen helfen, das Beste aus Ihrer Reise herauszuholen."
        ]
      },
      accommodation: {
        en: "Zurich",
        fr: "Zurich",
        de: "Zürich"
      },
      includedActivities: {
        en: ["Welcome Dinner"],
        fr: ["Dîner de bienvenue"],
        de: ["Willkommensdinner"]
      },
      meals: {
        en: ["Dinner"],
        fr: ["Dîner"],
        de: ["Abendessen"]
      },
      images: [
        getImagePath('colmar.jpg'),
        getImagePath('hoffkeller_li2.jpg'),
        getImagePath('stras1.jpg'),
      ]
    },
    {
      day: 2,
      title: {
        en: "Zurich to Strasbourg via The Black Forest",
        fr: "Zurich à Strasbourg via la Forêt-Noire",
        de: "Zürich nach Straßburg über den Schwarzwald"
      },
      description: {
        en: [
          "Dive straight into a tour dedicated to cakes and pastries with a visit to the world-famous Black Forest region, home of the iconic Black Forest Cake (Schwarzwälder Kirschtorte).",
          "Continue towards Strasbourg, stopping at a winery & distillery to learn about the production of a variety of local wines & spirits, and enjoy a tasting session.",
          "Arrive in Strasbourg in the evening and check into your accommodation before heading out for a group dinner at a local restaurant."
        ],
        fr: [
          "Plongez directement dans une visite dédiée aux gâteaux et pâtisseries avec une visite de la célèbre région de la Forêt-Noire, lieu de naissance du légendaire Gâteau de la Forêt-Noire (Schwarzwälder Kirschtorte).",
          "Continuez vers Strasbourg, en vous arrêtant dans un vignoble et une distillerie pour en savoir plus sur la production de divers vins et spiritueux locaux, et profiter d'une séance de dégustation.",
          "Arrivez à Strasbourg en soirée et enregistrez-vous à votre logement avant de partir dîner en groupe dans un restaurant local."
        ],
        de: [
          "Tauchen Sie direkt in eine Besichtigungstour ein, die den Torten und Gebäcken gewidmet ist, mit einem Besuch in der weltberühmten Schwarzwaldregion, der Heimat der legendären Schwarzwälder Kirschtorte.",
          "Fahren Sie weiter nach Straßburg, halten Sie an einem Weingut und einer Destillerie an, um mehr über die Herstellung verschiedener lokaler Weine und Spirituosen zu erfahren, und genießen Sie eine Verkostungssitzung.",
          "Kommen Sie abends in Straßburg an und melden Sie sich in Ihrer Unterkunft an, bevor Sie zum Gruppenabendessen in einem lokalen Restaurant aufbrechen."
        ]
      },
      accommodation: {
        en: "Strasbourg",
        fr: "Strasbourg",
        de: "Straßburg"
      },
      includedActivities: {
        en: ["Guided city tour", "Local bakery visit"],
        fr: ["Visite guidée de la ville", "Visite de boulangerie locale"],
        de: ["Geführte Stadtrundfahrt", "Besuch einer lokalen Bäckerei"]
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
      images: [
        getImagePath('triberg2.jpg'),
        getImagePath('black_forest_gat.jpg'),
        getImagePath('StrasbourgCathedral.jpg'),
      ]
    },
    {
      day: 3,
      title: {
        en: "Strasbourg",
        fr: "Strasbourg",
        de: "Straßburg"
      },
      description: {
        en: [
          "Spend the morning on a guided walking tour of Strasbourg's historic center, a UNESCO World Heritage site, exploring its charming streets and iconic landmarks. Along the way, visit bicuiteries, patisseries, and be introduced to a very Alsatian specialty: the Kougelhopf, a delightful cake that perfectly encapsulates the region's rich culinary heritage.",
          "The afternoon is then yours to explore Strasbourg at your leisure."
        ],
        fr: [
          "Passez la matinée sur une visite guidée à pied du centre historique de Strasbourg, un site du patrimoine mondial de l'UNESCO, en explorant ses charmantes rues et ses monuments emblématiques. En chemin, visitez des biscuiteries, des pâtisseries, et découvrez une spécialité très alsacienne : le Kougelhopf, un gâteau délicieux qui encapsule parfaitement le riche patrimoine culinaire de la région.",
          "L'après-midi est ensuite vôtre pour explorer Strasbourg à votre rythme."
        ],
        de: [
          "Verbringen Sie den Morgen auf einer geführten Wandertour durch die Altstadt von Straßburg, ein UNESCO-Weltkulturerbe, und erkunden Sie ihre charmanten Straßen und ikonischen Sehenswürdigkeiten. Unterwegs besuchen Sie Bäckereien und Konditoreien und lernen eine echte elsässische Spezialität kennen: den Kougelhopf, einen köstlichen Kuchen, der das reiche kulinarische Erbe der Region perfekt verkörpert.",
          "Der Nachmittag steht Ihnen zur freien Verfügung, um Straßburg in Ihrem eigenen Tempo zu erkunden."
        ]
      },
      accommodation: {
        en: "Strasbourg",
        fr: "Strasbourg",
        de: "Straßburg"
      },
      includedActivities: {
        en: ["Morning pastry workshop", "Afternoon free time"],
        fr: ["Atelier de pâtisserie le matin", "Après-midi libre"],
        de: ["Gebäck-Workshop am Morgen", "Freier Nachmittag"]
      },
      optionalActivities: {
        en: ["Mountain excursion"],
        fr: ["Excursion en montagne"],
        de: ["Bergausflug"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [
        getImagePath('stras1.jpg'),
        getImagePath('stras2.jpg'),
        getImagePath('biscuiterie.jpg'),
      ]
    },
    {
      day: 4,
      title: {
        en: "Strasbourg to Zug",
        fr: "Strasbourg à Zoug",
        de: "Straßburg nach Zug"
      },
      description: {
        en: [
          "Today, journey from Strasbourg to Zug, Switzerland, known for its picturesque landscapes and rich culinary traditions.",
          "Along the way we stop at one of the most photographed cities in France, Colmar. A place so like a fairytale that Disney is said to have used it as inspiration for the setting of Beauty and the Beast.",
          "There is one more stop on the way to Zug - a visit to Läckerli Huus in Basel, where you can learn about and sample Basel's famous spiced cookies, Läckerli."
        ],
        fr: [
          "Aujourd'hui, voyagez de Strasbourg à Zoug, en Suisse, connue pour ses paysages pittoresques et ses riches traditions culinaires.",
          "En route, nous nous arrêtons dans l'une des villes les plus photographiées de France, Colmar. Un endroit si conté de fées que Disney aurait utilisé comme inspiration pour le décor de La Belle et la Bête.",
          "Il y a un dernier arrêt avant Zoug - une visite à Läckerli Huus à Bâle, où vous pouvez en savoir plus et déguster les célèbres biscuits épicés de Bâle, le Läckerli."
        ],
        de: [
          "Heute fahren Sie von Straßburg nach Zug in der Schweiz, bekannt für seine malerischen Landschaften und reichen kulinarischen Traditionen.",
          "Unterwegs halten wir in einer der meistfotografierten Städte Frankreichs, Colmar. Ein Ort, so märchenhaft, dass Disney ihn angeblich als Inspiration für die Kulisse von Die Schöne und das Biest nutzte.",
          "Es gibt noch einen Stopp auf dem Weg nach Zug - einen Besuch im Läckerli Huus in Basel, wo Sie mehr über Basels berühmte würzige Kekse, das Läckerli, erfahren und kosten können."
        ]
      },
      accommodation: {
        en: "Zug",
        fr: "Zoug",
        de: "Zug"
      },
      includedActivities: {
        en: ["Chocolate factory tour", "Tasting session"],
        fr: ["Visite de l'usine de chocolat", "Séance de dégustation"],
        de: ["Führung durch die Schokoladenfabrik", "Verkostungssitzung"]
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
      images: [
        getImagePath('colmar.jpg'),
        getImagePath('ch/BaselOldTown.jpg'),
        getImagePath('ch/Lackerli.jpeg'),
      ]
    },
    {
      day: 5,
      title: {
        en: "Zug",
        fr: "Zoug",
        de: "Zug"
      },
      description: {
        en: [
          "Learn how to make Zuger Kirschtorte, a delectable cherry cake that is a specialty of the region, during a hands-on baking workshop with a local pastry chef.",
          "Another distillery beckons today, this time to learn about the production of Kirsch in Zug and sample a selection of schnapps."
        ],
        fr: [
          "Apprenez à préparer la Zuger Kirschtorte, un gâteau aux cerises délicieux qui est une spécialité de la région, lors d'un atelier de pâtisserie pratique avec un pâtissier local.",
          "Une autre distillerie nous attend aujourd'hui, cette fois pour en savoir plus sur la production de Kirsch à Zoug et déguster une sélection de schnaps."
        ],
        de: [
          "Lernen Sie, wie man Zuger Kirschtorte, einen köstlichen Kirschkuchen, der eine Spezialität der Region ist, in einem praktischen Backworkshop mit einem lokalen Konditor zubereitet.",
          "Heute wartet eine weitere Destillerie auf uns, diesmal um mehr über die Herstellung von Kirsch in Zug zu erfahren und eine Auswahl von Schnaps zu kosten."
        ]
      },
      accommodation: {
        en: "Zug",
        fr: "Zoug",
        de: "Zug"
      },
      includedActivities: {
        en: ["Historic bakery visit", "Traditional baking demonstration"],
        fr: ["Visite d'une boulangerie historique", "Démonstration de cuisson traditionnelle"],
        de: ["Besuch einer historischen Bäckerei", "Vorführung von traditionellem Backen"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [
        getImagePath('ch/kirschtorte.jpg'),
        getImagePath('ch/etter.jpeg'),
      ]
    },
    {
      day: 6,
      title: {
        en: "Zug to the Bavarian Alps",
        fr: "Zoug aux Alpes bavaroises",
        de: "Zug in die Bayerischen Alpen"
      },
      description: {
        en: [
          "Four countries in one day!",
          "Today we travel from Switzerland, stopping at in Liechtenstein for a visit to the Princely Winery and sample some wines from the royal estate, then on to Austria for lunch, before crossing into Germany and arriving in the Bavarian Alps."
        ],
        fr: [
          "Quatre pays en un jour!",
          "Aujourd'hui, nous voyageons depuis la Suisse, nous arrêtons au Liechtenstein pour visiter le vignoble princier et déguster des vins du domaine royal, puis nous allons en Autriche pour le déjeuner, avant de traverser en Allemagne et d'arriver aux Alpes bavaroises."
        ],
        de: [
          "Vier Länder an einem Tag!",
          "Heute fahren wir von der Schweiz aus, halten im Fürstentum Liechtenstein an, um das fürstliche Weingut zu besuchen und Weine aus dem königlichen Anwesen zu kosten, dann nach Österreich zum Mittagessen, bevor wir nach Deutschland fahren und in den Bayerischen Alpen ankommen."
        ]
      },
      accommodation: {
        en: "Garmisch-Partenkirchen",
        fr: "Garmisch-Partenkirchen",
        de: "Garmisch-Partenkirchen"
      },
      includedActivities: {
        en: ["Morning market tour", "Cooking class"],
        fr: ["Visite du marché du matin", "Cours de cuisine"],
        de: ["Morgens Marktrundgang", "Kochkurs"]
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
      images: [
        getImagePath('hoffkeller_li.jpg'),
        getImagePath('hoffkeller_li2.jpg'),
      ]
    },
    {
      day: 7,
      title: {
        en: "Up the Zugspitze",
        fr: "Ascension de la Zugspitze",
        de: "Aufstieg zur Zugspitze"
      },
      description: {
        en: [
          "Today we ascend Germany's highest peak, the Zugspitze, via cogwheel train and cable car, taking in breathtaking alpine views along the way.",
          "The afternoon is yours to enjoy. Maybe you want to explore the charming alpine village at the base of the mountain, spend some time at (or on) lake Eibsee, or relax and soak in the scenery."
        ],
        fr: [
          "Aujourd'hui, nous montons au plus haut sommet de l'Allemagne, la Zugspitze, via un train à crémaillère et un téléphérique, en profitant de vues alpines à couper le souffle en chemin.",
          "L'après-midi est vôtre pour en profiter. Peut-être voudrez-vous explorer le charmant village alpin au pied de la montagne, passer du temps au lac Eibsee, ou vous détendre et profiter du paysage."
        ],
        de: [
          "Heute besteigen wir Deutschlands höchsten Gipfel, die Zugspitze, mit Zahnradbahn und Seilbahn und genießen unterwegs atemberaubende Alpenausblicke.",
          "Der Nachmittag steht Ihnen zur Verfügung. Vielleicht möchten Sie das charmante Alpendorf am Fuße des Berges erkunden, Zeit am Eibsee verbringen oder sich entspannen und die Landschaft genießen."
        ]
      },
      accommodation: {
        en: "Garmisch-Partenkirchen",
        fr: "Garmisch-Partenkirchen",
        de: "Garmisch-Partenkirchen"
      },
      includedActivities: {
        en: ["Scenic train journey", "Village exploration"],
        fr: ["Voyage en train pittoresque", "Exploration du village"],
        de: ["Malerische Zugfahrt", "Dorf-Erkundung"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [
        getImagePath('zugspitze.jpg'),
        getImagePath('zugspitze2.jpg'),
      ]
    },
    {
      day: 8,
      title: {
        en: "To Salzburg",
        fr: "À Salzbourg",
        de: "Nach Salzburg"
      },
      description: {
        en: [
          "Spend a relaxing day travelling through the bavarian region, visiting various villages, towns, and lakes along the way.",
          "Enjoy lunch in a Bräustüberl (brewery/pub) that dates back to 1675 and savour some traditional Bavarian cuisine like weisswurst, pretzels, pork knuckles, apple Kiacherl (doughnut) and, of course, a stein of locally brewed beer.",
          "After enjoying the hospitality of the region, we continue our journey taking in the stunning scenery, visiting a few more villages, and stopping at Bavaria's largest lake, before arriving in Salzburg."
        ],
        fr: [
          "Passez une journée relaxante à voyager dans la région bavaroise, visitant divers villages, villes et lacs en chemin.",
          "Déjeunez dans une Bräustüberl (brasserie/pub) qui date de 1675 et savourez quelques plats bavarois traditionnels comme la weisswurst, les bretzels, les jarrets de porc, les Kiacherl aux pommes (beignets) et bien sûr, une chope de bière brassée localement.",
          "Après avoir profité de l'hospitalité de la région, nous continuons notre voyage en admirant les paysages époustouflants, en visitant quelques villages supplémentaires, et en s'arrêtant au plus grand lac de Bavière, avant d'arriver à Salzbourg."
        ],
        de: [
          "Verbringen Sie einen entspannten Tag damit, durch die bayerische Region zu fahren und verschiedene Dörfer, Städte und Seen unterwegs zu besuchen.",
          "Genießen Sie ein Mittagessen in einer Bräustüberl (Brauerei/Kneipe) aus dem Jahr 1675 und kosten Sie traditionelle bayerische Gerichte wie Weißwurst, Brezeln, Schweinshaxe, Apfel-Kiacherl (Donut) und natürlich ein Bier aus lokaler Brauerei.",
          "Nach dem Genuss der Gastfreundschaft der Region fahren wir weiter, bewundern die atemberaubenden Landschaften, besuchen noch ein paar weitere Dörfer und halten am größten See Bayerns an, bevor wir in Salzburg ankommen."
        ]
      },
      accommodation: {
        en: "Salzburg",
        fr: "Salzbourg",
        de: "Salzburg"
      },
      includedActivities: {
        en: ["Patisserie workshop", "Afternoon tea experience"],
        fr: ["Atelier de pâtisserie", "Expérience du thé de l'après-midi"],
        de: ["Konditorei-Workshop", "Nachmittags-Tee-Erlebnis"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [
        getImagePath('beer_bretzel.jpg'),
        getImagePath('seebruck.jpg'),
      ]
    },
    {
      day: 9,
      title: {
        en: "Salzburg and Surrounds",
        fr: "Salzbourg et environs",
        de: "Salzburg und Umgebung"
      },
      description: {
        en: [
          "Plenty to do today starting with a visit to one of the salt mines that give the city its name.",
          "Then, off to a konditorei for lunch and an introduction to Mozartkugeln, a local specialty created in Salzburg in 1890.",
          "In the afternoon, we have another hands-on workshop, this time learning how to make another local specialty - nockerln - and the world famous Apfelstrudel"
        ],
        fr: [
          "Beaucoup de choses à faire aujourd'hui en commençant par une visite aux mines de sel qui ont donné son nom à la ville.",
          "Ensuite, direction une pâtisserie pour le déjeuner et une introduction aux Mozartkugeln, une spécialité locale créée à Salzbourg en 1890.",
          "L'après-midi, nous avons un autre atelier pratique, cette fois pour apprendre à fabriquer une autre spécialité locale - les nockerln - et le célèbre Apfelstrudel du monde entier"
        ],
        de: [
          "Heute gibt es viel zu tun, beginnend mit einem Besuch in einer der Salzgruben, die der Stadt ihren Namen geben.",
          "Dann ab zu einer Konditorei zum Mittagessen und einer Einführung in die Mozartkugeln, eine Salzburger Spezialität aus dem Jahr 1890.",
          "Am Nachmittag haben wir einen weiteren praktischen Workshop, diesmal um eine weitere lokale Spezialität zu lernen - Nockerl - und den weltberühmten Apfelstrudel"
        ]
      },
      accommodation: {
        en: "Salzburg",
        fr: "Salzbourg",
        de: "Salzburg"
      },
      includedActivities: {
        en: ["Museum visit", "Guided walking tour"],
        fr: ["Visite du musée", "Visite guidée à pied"],
        de: ["Museumsbesuch", "Geführte Wandertour"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [
        getImagePath('strudel.jpg'),
        getImagePath('nockerl.jpg'),
      ]
    },
    {
      day: 10,
      title: {
        en: "Salzburg Free Day",
        fr: "Jour libre à Salzbourg",
        de: "Freier Tag in Salzburg"
      },
      description: {
        en: [
          "A day to explore Salzburg at your leisure. Maybe visit the Hohensalzburg Fortress, Mirabell Palace, Mozart's birthplace, or take a Sound of Music tour.",
          "There are plenty of options and no shortage of cafes and patisseries to discover.",
          "Remember that Salzburg is the birthplace of Mozart and a great place to take in a classical music concert."
        ],
        fr: [
          "Une journée pour explorer Salzbourg à votre rythme. Peut-être visiter la forteresse de Hohensalzburg, le palais Mirabell, le lieu de naissance de Mozart, ou faire une visite de La Mélodie du bonheur.",
          "Il y a de nombreuses options et pas de pénurie de cafés et de pâtisseries à découvrir.",
          "N'oubliez pas que Salzbourg est le lieu de naissance de Mozart et un excellent endroit pour assister à un concert de musique classique."
        ],
        de: [
          "Ein Tag, um Salzburg in Ihrem eigenen Tempo zu erkunden. Vielleicht besuchen Sie die Hohensalzburg Festung, den Mirabell-Palast, Mozarts Geburtshaus oder machen eine Klangmusik-Tour.",
          "Es gibt viele Möglichkeiten und einen Überfluss an Cafés und Konditoreien zu entdecken.",
          "Vergessen Sie nicht, dass Salzburg Mozarts Geburtsstadt ist und ein großartiger Ort, um ein klassisches Musikkonzert zu besuchen."
        ]
      },
      accommodation: {
        en: "Salzburg",
        fr: "Salzbourg",
        de: "Salzburg"
      },
      includedActivities: {
        en: ["Cheese dairy visit", "Tasting session"],
        fr: ["Visite d'une fromagerie", "Séance de dégustation"],
        de: ["Besuch einer Käserei", "Verkostungssitzung"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [
        getImagePath('salzburg1.jpg'),
        getImagePath('mozartkugeln.jpg'),
        getImagePath('salzburg2.jpg'),
      ]
    },
    {
      day: 11,
      title: {
        en: "Salzburg to Linz",
        fr: "Salzbourg à Linz",
        de: "Salzburg nach Linz"
      },
      description: {
        en: [
          "With plenty of stops and much to see along the way, we spend today driving through some of the most photographed villages and mountain vistas in Austria.",
          "Along the way we visit postcard-perfect villages with histories dating back thousands of years, including the home of the world's oldest salt mine - Hallstatt.",
          "Continuing on, we visit the picturesque town of Gmunden on the shores of Lake Traunsee, known for its beautiful ceramics and stunning lakeside views.",
          "Finally, after a day of exploring, we head to the home of what is reported to be the oldest known cake recipe in the world - Linz and the Linzertorte."
        ],
        fr: [
          "Avec de nombreux arrêts et beaucoup à voir en chemin, nous passons aujourd'hui à travers certains des villages et vues de montagnes les plus photographiés d'Autriche.",
          "En chemin, nous visitons des villages dignes d'une carte postale avec des histoires remontant à des milliers d'années, y compris la maison de la plus ancienne mine de sel du monde - Hallstatt.",
          "En continuant, nous visitons la pittoresque ville de Gmunden sur les rives du lac Traunsee, connue pour ses belles céramiques et ses vues spectaculaires au bord du lac.",
          "Enfin, après une journée d'exploration, nous nous dirigeons vers la maison de ce qui est censé être la plus ancienne recette de gâteau connue au monde - Linz et la Linzertorte."
        ],
        de: [
          "Mit vielen Haltestellen und viel zu sehen unterwegs verbringen wir heute die Fahrt durch einige der meistfotografierten Dörfer und Bergpanoramen Österreichs.",
          "Unterwegs besuchen wir postkartenperfekte Dörfer mit Geschichten, die Tausende von Jahren zurückgehen, einschließlich der Heimat der ältesten Salzmine der Welt - Hallstatt.",
          "Weiterhin besuchen wir die malerische Stadt Gmunden am Ufer des Traunsees, bekannt für ihre wunderschöne Keramik und atemberaubende Seeuferaussichten.",
          "Abschließend fahren wir nach einem Tag der Erkundung zum Ort, der angeblich das älteste bekannte Kuchenrezept der Welt beherbergt - Linz und die Linzertorte."
        ]
      },
      accommodation: {
        en: "Linz",
        fr: "Linz",
        de: "Linz"
      },
      includedActivities: {
        en: ["Artisan bakery tour", "Bread making workshop"],
        fr: ["Visite de boulangerie artisanale", "Atelier de fabrication de pain"],
        de: ["Handwerksbäckerei-Tour", "Brotbackkurs"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [
        getImagePath('hallstatt.jpg'),
        getImagePath('gmunder.jpg'),
        getImagePath('gosau.jpg'),
      ]
    },
    {
      day: 12,
      title: {
        en: "Linz",
        fr: "Linz",
        de: "Linz"
      },
      description: {
        en: [
          "Learn how to make the famous Linzertorte in a hands-on baking workshop with a local pastry chef, discovering the secrets behind this delicious treat.",
          "The afternoon is yours to explore the city. Maybe stroll along the Danube River, marvel at the architecture of the Mariendom (New Cathedral), or take in a performance at the Brucknerhaus.",
          "If art is your thing, then visit the Lentos Art Museum, or wander one of the biggest Graffiti parks in Europe - the Mural Harbor."
        ],
        fr: [
          "Apprenez à préparer la célèbre Linzertorte lors d'un atelier de pâtisserie pratique avec un pâtissier local, en découvrant les secrets de cette délicieuse gâterie.",
          "L'après-midi est vôtre pour explorer la ville. Peut-être faire une promenade le long du Danube, admirer l'architecture de la Mariendom (Nouvelle Cathédrale), ou assister à un spectacle au Brucknerhaus.",
          "Si l'art est votre passion, visitez le Musée d'art Lentos, ou flânez dans l'un des plus grands parcs de graffiti d'Europe - le Mural Harbor."
        ],
        de: [
          "Lernen Sie in einem praktischen Backworkshop mit einem lokalen Konditor, wie man die berühmte Linzertorte zubereitet, und entdecken Sie die Geheimnisse dieser köstlichen Köstlichkeit.",
          "Der Nachmittag steht Ihnen zur freien Erkundung der Stadt zur Verfügung. Vielleicht ein Spaziergang entlang der Donau, bewundern Sie die Architektur der Mariendom (Neue Kathedrale), oder genießen Sie eine Aufführung im Brucknerhaus.",
          "Wenn Kunst Ihr Ding ist, dann besuchen Sie das Lentos Kunstmuseum, oder wandern Sie durch einen der größten Graffiti-Parks Europas - den Mural Harbor."
        ]
      },
      accommodation: {
        en: "Linz",
        fr: "Linz",
        de: "Linz"
      },
      includedActivities: {
        en: ["Morning at leisure", "Evening cultural performance"],
        fr: ["Matin libre", "Performance culturelle du soir"],
        de: ["Morgens Freizeit", "Abendliche Kulturveranstaltung"]
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
      images: [
        getImagePath('linzer.jpg'),
        getImagePath('linz.jpg'),
        getImagePath('linz2.jpg'),
      ]
    },
    {
      day: 13,
      title: {
        en: "Linz to Vienna",
        fr: "Linz à Vienne",
        de: "Linz nach Wien"
      },
      description: {
        en: [
          "Follow the Danube as we drive through the Wachau Valley, a UNESCO World Heritage site, before taking to the water and enjoying a cruise along the river, passing vineyards, charming villages, and historic castles.",
          "The bus meets us at the other end of the cruise and we head off to visit a local winery to sample some of the regions finest wines.",
          "Then, on to another regional specialty - Marillonlikör - a delicious apricot liqueur produced in the Wachau Valley. We'll visit a distillery to learn about the production process and enjoy a tasting session.",
          "Then, relax and enjoy the scenic drive to Vienna.",
          "Finish the day with dinner at the restaurant that actually created the famous Wiener Schnitzel and, dessert at one of Vienna's most famous coffee houses."
        ],
        fr: [
          "Suivez le Danube en traversant la vallée de la Wachau, un site du patrimoine mondial de l'UNESCO, avant de prendre l'eau et de profiter d'une croisière le long du fleuve, passant par des vignobles, des villages pittoresques et des châteaux historiques.",
          "Le bus nous attend à l'autre extrémité de la croisière et nous nous dirigeons vers une cave locale pour déguster certains des meilleurs vins de la région.",
          "Ensuite, une autre spécialité régionale - Marillonlikör - une délicieuse liqueur aux abricots produite dans la vallée de la Wachau. Nous visiterons une distillerie pour en savoir plus sur le processus de production et profiter d'une séance de dégustation.",
          "Puis, détendez-vous et profitez de la promenade pittoresque jusqu'à Vienne.",
          "Terminez la journée avec un dîner au restaurant qui a réellement créé le célèbre Wiener Schnitzel et un dessert dans l'une des plus célèbres maisons de café de Vienne."
        ],
        de: [
          "Folgen Sie der Donau, während wir durch das Wachau-Tal fahren, ein UNESCO-Weltkulturerbe, bevor wir Wasser nehmen und eine Flusskreuzfahrt genießen, vorbei an Weingärten, charmanten Dörfern und historischen Schlössern.",
          "Der Bus holt uns am anderen Ende der Kreuzfahrt ab und wir fahren zu einem lokalen Weingut, um einige der besten Weine der Region zu kosten.",
          "Dann zu einer weiteren regionalen Spezialität - Marillonlikör - ein köstlicher Aprikosenlikör, der im Wachau-Tal hergestellt wird. Wir besuchen eine Destillerie, um mehr über den Herstellungsprozess zu erfahren und eine Verkostungssitzung zu genießen.",
          "Dann entspannen Sie sich und genießen Sie die malerische Fahrt nach Wien.",
          "Beenden Sie den Tag mit einem Abendessen im Restaurant, das das berühmte Wiener Schnitzel tatsächlich kreiert hat, und Dessert in einem der berühmtesten Kaffeehäuser Wiens."
        ]
      },
      accommodation: {
        en: "Vienna",
        fr: "Vienne",
        de: "Wien"
      },
      includedActivities: {
        en: ["Confectionery workshop", "Sweet treats tasting"],
        fr: ["Atelier de confiserie", "Dégustation de friandises"],
        de: ["Konditorei-Workshop", "Kostprobe von Süßigkeiten"]
      },
      meals: {
        en: ["Breakfast", "Lunch"],
        fr: ["Petit-déjeuner", "Déjeuner"],
        de: ["Frühstück", "Mittagessen"]
      },
      images: [
        getImagePath('wachau1.jpg'),
        getImagePath('melk.jpg'),
        getImagePath('cafe_central.jpg'),
      ]
    },
    {
      day: 14,
      title: {
        en: "Vienna",
        fr: "Vienne",
        de: "Wien"
      },
      description: {
        en: [
          "Start the day with a walking tour of Vienna's historic center, a UNESCO World Heritage site, exploring iconic landmarks such as St. Stephen's Cathedral, Hofburg Palace, and the State Opera House.",
          "Along the way we'll visit both The Hotel Sacher and Demel, the two most famous patisseries in Vienna, and the participants in what has become known as the 'Vienna Cake War' - a rivalry that has lasted over 100 years.",
          "The afternoon is then yours to start exploring Vienna."
        ],
        fr: [
          "Commencez la journée par une visite guidée du centre historique de Vienne, un site du patrimoine mondial de l'UNESCO, en explorant des monuments emblématiques tels que la cathédrale Saint-Étienne, le palais de la Hofburg et le Staatsoper.",
          "En chemin, nous visiterons à la fois l'Hotel Sacher et Demel, les deux pâtisseries les plus célèbres de Vienne, et les participants à ce qui est devenu la 'Guerre des gâteaux de Vienne' - une rivalité qui dure depuis plus de 100 ans.",
          "L'après-midi est alors vôtre pour commencer à explorer Vienne."
        ],
        de: [
          "Beginnen Sie den Tag mit einer geführten Wandertour durch Wiens historisches Zentrum, ein UNESCO-Weltkulturerbe, und erkunden Sie ikonische Sehenswürdigkeiten wie den Stephansdom, den Hofburg-Palast und das Staatsoper-Haus.",
          "Unterwegs besuchen wir sowohl das Hotel Sacher als auch Demel, die zwei berühmtesten Konditoreien Wiens, und die Beteiligten an dem, was als 'Wiener Tortenkrieg' bekannt geworden ist - eine Rivalität, die seit über 100 Jahren andauert.",
          "Der Nachmittag steht Ihnen dann zur Verfügung, um Wien zu erkunden."
        ]
      },
      accommodation: {
        en: "Vienna",
        fr: "Vienne",
        de: "Wien"
      },
      includedActivities: {
        en: ["Historic site visit", "Traditional lunch experience"],
        fr: ["Visite historique", "Expérience de déjeuner traditionnel"],
        de: ["Besuch der historischen Stätte", "Traditionelles Mittagessen"]
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
      images: [
        getImagePath('vienna1.jpg'),
        getImagePath('demel1.jpg'),
        getImagePath('sacher1.jpg'),
      ]
    },
    {
      day: 15,
      title: {
        en: "Vienna Free Day",
        fr: "Jour libre à Vienne",
        de: "Freier Tag in Wien"
      },
      description: {
        en: [
          "There is so much to see and do in Vienna and one day is not enough to experience it all. So, today is yours to explore as much of as you can.",
          "The list of things to see and do is endless - visit the Belvedere Palace, explore the Kunsthistorisches Museum, stroll through the Naschmarkt, walk in the Prater park, or take in a classical music concert at one of the city's many venues.",
          "We'll happily provide suggestions and assistance to help you make the most of your day."
        ],
        fr: [
          "Il y a tellement à voir et à faire à Vienne et un jour ne suffit pas pour tout découvrir. Donc, aujourd'hui, c'est à vous d'explorer autant que vous le pouvez.",
          "La liste des choses à voir et à faire est infinie - visitez le palais Belvedere, explorez le Kunsthistorisches Museum, flânez dans le Naschmarkt, promenez-vous dans le parc Prater, ou assistez à un concert de musique classique dans l'une des nombreuses salles de la ville.",
          "Nous serons heureux de vous fournir des suggestions et une assistance pour vous aider à tirer le meilleur parti de votre journée."
        ],
        de: [
          "Es gibt so viel zu sehen und zu tun in Wien und ein Tag reicht nicht aus, um alles zu erleben. Also ist heute dein Tag, um so viel zu erkunden, wie du kannst.",
          "Die Liste der Dinge zu sehen und zu tun ist endlos - besuchen Sie den Belvedere-Palast, erkunden Sie das Kunsthistorisches Museum, schlendern Sie durch den Naschmarkt, spazieren Sie im Prater-Park oder genießen Sie ein klassisches Musikkonzert in einem der vielen Veranstaltungsorte der Stadt.",
          "Wir helfen Ihnen gerne mit Vorschlägen und Unterstützung, damit Sie das Beste aus Ihrem Tag herausholen."
        ]
      },
      accommodation: {
        en: "Vienna",
        fr: "Vienne",
        de: "Wien"
      },
      includedActivities: {
        en: ["Morning baking session", "Farewell market visit"],
        fr: ["Séance de cuisson du matin", "Visite du marché d'adieu"],
        de: ["Morgens Backsitzung", "Abschiedsmarktbesuch"]
      },
      meals: {
        en: ["Breakfast", "Dinner"],
        fr: ["Petit-déjeuner", "Dîner"],
        de: ["Frühstück", "Abendessen"]
      },
      images: [
        getImagePath('vienna5.jpg'),
        getImagePath('naschmarkt.jpg'),
        getImagePath('vienna3.jpg'),
      ]
    },
    {
      day: 16,
      title: {
        en: "Schönbrunn Palace and farewell dinner",
        fr: "Palais de Schönbrunn et dîner d'adieu",
        de: "Schloss Schönbrunn und Abschlussdinner"
      },
      description: {
        en: [
          "Visit the magnificent Schönbrunn Palace, a UNESCO World Heritage site and former imperial summer residence, exploring its opulent rooms and stunning gardens.",
          "Take a break from touring the palace and enjoy a special demonstration by the team from Gerstner Imperial and Royal Court Confectionery, demonstrating how they make apfelstrudel fit for the imperial court.",
          "In the evening, gather with your fellow travellers for a farewell dinner to celebrate the end of an unforgettable journey through Central Europe."
        ],
        fr: [
          "Visitez le magnifique palais de Schönbrunn, un site du patrimoine mondial de l'UNESCO et ancienne résidence d'été impériale, en explorant ses pièces somptueuses et ses jardins époustouflants.",
          "Faites une pause dans la visite du palais et profitez d'une démonstration spéciale par l'équipe de la pâtisserie Gerstner Imperial and Royal Court, montrant comment ils font un apfelstrudel digne de la cour impériale.",
          "En soirée, réunissez-vous avec vos compagnons de voyage pour un dîner d'adieu célébrant la fin d'un voyage inoubliable en Europe centrale."
        ],
        de: [
          "Besuchen Sie das prächtige Schloss Schönbrunn, ein UNESCO-Weltkulturerbe und ehemaliger kaiserlicher Sommersitz, und erkunden Sie seine prächtigen Zimmer und atemberaubenden Gärten.",
          "Machen Sie eine Pause von der Schlossbesichtigung und genießen Sie eine spezielle Demonstration des Teams von Gerstner Imperial and Royal Court Confectionery, die zeigt, wie sie Apfelstrudel fit für den kaiserlichen Hof machen.",
          "Am Abend treffen Sie sich mit Ihren Mitreisenden zu einem Abschlussdinner, um das Ende einer unvergesslichen Reise durch Mitteleuropa zu feiern."
        ]
      },
      accommodation: {
        en: "Vienna",
        fr: "Vienne",
        de: "Wien"
      },
      includedActivities: {
        en: ["Breakfast", "Free time for shopping"],
        fr: ["Petit-déjeuner", "Temps libre pour faire du shopping"],
        de: ["Frühstück", "Freizeit zum Einkaufen"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [
        getImagePath('schoenbrunn.jpg'),
        getImagePath('schoenbrunn2.jpg'),
        getImagePath('gerstner.jpg'),
      ]
    },
    {
      day: 17,
      title: {
        en: "Departure",
        fr: "Départ",
        de: "Abfahrt"
      },
      description: {
        en: [
          "After the last group breakfast, and a chance to say goodbye to your new friends, our tour, sadly, comes to an end.",
          "If you can extend your stay in Vienna, we highly recommend it - there is so much more to see and do in this incredible city.",
          "For those needing airport or train station transfers, group transport will be provided."
        ],
        fr: [
          "Après le dernier petit-déjeuner en groupe et une chance de dire au revoir à vos nouveaux amis, notre visite, hélas, arrive à sa fin.",
          "Si vous pouvez prolonger votre séjour à Vienne, nous vous le recommandons vivement - il y a tellement plus à voir et à faire dans cette ville incroyable.",
          "Pour ceux qui ont besoin de transports vers l'aéroport ou la gare, un transport en groupe sera fourni."
        ],
        de: [
          "Nach dem letzten Gruppenfrühstück und einer Chance, sich von Ihren neuen Freunden zu verabschieden, endet unsere Reise leider.",
          "Wenn Sie Ihren Aufenthalt in Wien verlängern können, empfehlen wir dies sehr - es gibt so viel mehr zu sehen und zu tun in dieser unglaublichen Stadt.",
          "Für diejenigen, die Transporte zum Flughafen oder Bahnhof benötigen, wird ein Gruppentransport zur Verfügung gestellt."
        ]
      },
      accommodation: {
        en: "-",
        fr: "-",
        de: "-"
      },
      includedActivities: {
        en: ["Group transfer to airport", "Tour concludes"],
        fr: ["Transfert de groupe à l'aéroport", "Fin du voyage"],
        de: ["Gruppentransfer zum Flughafen", "Reise endet"]
      },
      meals: {
        en: ["Breakfast"],
        fr: ["Petit-déjeuner"],
        de: ["Frühstück"]
      },
      images: [
        getImagePath('placeholder16.jpg'),
      ]
    }
  ],
  whatsIncluded: {
    en: [
      "Services of an experienced tour leader born and raised in Switzerland and fluent in the languages of all 5 countries you'll visit",
      "Insights and explanations from a baker and chef with more than 30 years experience in the food industry",
      "Hotel accommodation (twin share)",
      "Daily breakfasts",
      "6 dinners and a multitude of delicacies along the way",
      "Activities and entries including:",
      "Transportation in an air-conditioned coach",
      "Cake and chocolate making class in Switzerland",
      "Traditional Austrian dessert class in Salzburg",
      "Linzer Torte class in Linz",
      "Strudel making demonstration in Vienna",
      "Tours and tastings at 3 distilleries and 2 wineries",
      "Tour of a salt mine",
      "Cablecar up the highest peak in Germany",
      "Cruise on the Danube River",
      "Guided walking tours of destinations including Strasbourg, Salzburg, and Vienna",
      "All applicable taxes",
      "Luggage transfers between hotels",
      "Advice and support prior to and during the tour including travel tips, plus lots of foodie and insider recommendations",
      "Small group size (max 12)",
      "A few extra surprises and mementos along the way"
    ],
    fr: [
      "Services d'un chef de voyage expérimenté né et élevé en Suisse et parlant couramment les langues des 5 pays que vous visiterez",
      "Conseils et explications d'un boulanger et chef ayant plus de 30 ans d'expérience dans l'industrie alimentaire",
      "Hébergement hôtelier (chambre double)",
      "Petits-déjeuners quotidiens",
      "6 dîners et une multitude de délices en chemin",
      "Activités et entrées incluant:",
      "Transport en autocar climatisé",
      "Classe de fabrication de gâteaux et de chocolat en Suisse",
      "Cours de desserts autrichiens traditionnels à Salzbourg",
      "Cours de Linzer Torte à Linz",
      "Démonstration de fabrication de strudel à Vienne",
      "Visites et dégustations dans 3 distilleries et 2 vignobles",
      "Visite d'une mine de sel",
      "Téléphérique jusqu'au plus haut sommet d'Allemagne",
      "Croisière sur le Danube",
      "Visites guidées à pied des destinations y compris Strasbourg, Salzbourg et Vienne",
      "Toutes les taxes applicables",
      "Transferts de bagages entre les hôtels",
      "Conseils et assistance avant et pendant la visite, y compris des conseils de voyage, plus beaucoup de recommandations culinaires et d'initiés",
      "Petite taille de groupe (max 12)",
      "Quelques surprises supplémentaires et des souvenirs en chemin"
    ],
    de: [
      "Leistungen eines erfahrenen Reiseleiters, der in der Schweiz geboren und aufgewachsen ist und die Sprachen aller 5 Länder, die Sie besuchen, fließend spricht",
      "Einblicke und Erklärungen von einem Bäcker und Chef mit mehr als 30 Jahren Erfahrung in der Lebensmittelindustrie",
      "Hotelunterkunft (Doppelzimmer)",
      "Tägliche Frühstücke",
      "6 Abendessen und eine Vielzahl von Köstlichkeiten unterwegs",
      "Aktivitäten und Eintragungen einschließlich:",
      "Transport in einem klimatisierten Bus",
      "Kurs zur Herstellung von Torten und Schokolade in der Schweiz",
      "Traditioneller Österreichischer Nachtischkurs in Salzburg",
      "Linzer Torte Kurs in Linz",
      "Strudel-Herstellungsvorführung in Wien",
      "Führungen und Verkostungen in 3 Brennereien und 2 Weingütern",
      "Führung durch ein Salzbergwerk",
      "Zahnradbahn zum höchsten Gipfel Deutschlands",
      "Kreuzfahrt auf der Donau",
      "Geführte Wandertouren zu Zielen einschließlich Straßburg, Salzburg und Wien",
      "Alle anwendbaren Steuern",
      "Koffertransfer zwischen Hotels",
      "Beratung und Unterstützung vor und während der Reise, einschließlich Reisetipps sowie viele Feinschmecker- und Insidertipps",
      "Kleine Gruppengröße (max. 12)",
      "Ein paar zusätzliche Überraschungen und Andenken unterwegs"
    ]
  }
};