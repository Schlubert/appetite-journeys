// pages/about/EuropeAboutPage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getImagePath } from '@/utils/paths';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

type Lang = 'en' | 'fr' | 'de';

interface RegionContent {
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  countriesTitle: string;
  countries: Array<{
    name: string;
    subtitle: string;
    description: string;
    highlights: string[];
    images: string[];
  }>;
  whyVisitTitle: string;
  whyVisitItems: Array<{ country: string; reason: string; image: string }>;
  ctaText: string;
}

const CONTENT: Record<Lang, RegionContent> = {
  en: {
    heroTitle: 'European Alps & Beyond',
    heroSubtitle: 'Four Countries. One Culinary Journey. Endless Borders.',
    introTitle: 'Connected Lands, Shared Traditions',
    introText: 'France, Germany, Liechtenstein, and Austria form a connected tapestry of alpine peaks, vineyard terraces, and deeply rooted food traditions. While each nation has fiercely protected its own culinary identity, the borders here are fluid—shaped by mountains, wars, and time. They don\'t respect lines on maps.\n\nWhat unites these regions is a shared reverence for craft, seasonality, tradition, and place. Whether it\'s the elegant wines of Alsace, the hearty traditions of the Austrian countryside, the precision of German baking, or the quiet sophistication of Liechtenstein\'s alpine villages, European cuisine is deeply connected to landscape, heritage, and an unwavering commitment to quality.',
    countriesTitle: 'Featured Regions',
    countries: [
      {
        name: 'France',
        subtitle: 'Where Tradition Meets Excellence',
        description: "Chefs often call France the culinary capital of the world, and it's easy to see why. The country's gastronomic heritage is legendary. But while most people flock to France for familiar favourites like rich beef bourguignon or flaky, buttery pastries, the region of Alsace tells a different story. Nestled against the German and Swiss borders, Alsace boasts a distinct identity all its own. Here, remarkable white wines pair with hearty, German-influenced dishes, blending French sophistication with Central European warmth. This is the home of choucroute, kougelhopf, tarte flambée, Riesling and Gewürztraminer wines.\n\nIn both the mainstream and the margins, French food is never just sustenance—it is a proud language of place and family.",
        highlights: [
          'Colmar\'s half-timbered charm and fairytale beauty',
          'Strasbourg\'s blend of French elegance and German warmth',
          'Alsatian wines, biscuiteries, patisseries',
          'Choucroute garnie and tarte flambée in traditional winstubs',
          'Centuries of fascinating history on display around every corner',
        ],
        images: ['colmar.jpg', 'stras1.jpg', 'biscuiterie.jpg', 'StrasbourgCathedral.jpg'],
      },
      {
        name: 'Germany',
        subtitle: 'The Black Forest: Heritage and Invention',
        description: "German culinary culture is grounded in an unmistakable hearty warmth, but its true depth rewards those willing to look closer. While the world often reduces the country\'s food scene to simple comfort classics, Germany\'s diverse landscapes tell a far more sophisticated story. In the sun-drenched Rhine Valley, centuries-old estates produce some of Europe's finest white wines, while the mysterious Black Forest champions artisan baking and traditional wood-smoked meats. This is a landscape shaped by tarte flambée (flammkuchen), rich black forest gateau, hearty knödel, and elegant Spätburgunder wines. From bustling urban markets to quiet village squares, German food is never just sustenance—it is a celebration of quality ingredients, precision, and generational pride.",
        highlights: [
          'Black Forest gateau the way it was meant to be: rich, boozy, and deeply chocolatey',
          'Black Forest Ham and other smoked and cured meats',
          'Fruit brandies and traditional beer culture',
          'Triberg - Half-timbered charm and home to the world\'s largest cuckoo clock',
          'Konstanz - Stunning lakeside city with a blend of German and Swiss influences',
          'Lindau - Picturesque island city on Lake Constance with a vibrant food scene',
        ],
        images: ['black_forest_gat.jpg', 'triberg2.jpg', 'zugspitze.jpg', 'beer_bretzel.jpg'],
      },
      {
        name: 'Liechtenstein',
        subtitle: 'The Princely Principality',
        description: "Liechtenstein's food scene has a lovely, down-to-earth alpine feel, but there's a real touch of royalty to it if you look closer. People tend to overlook this tiny Principality, but its sun-drenched valley slopes tell a different story. Thanks to the warm Föhn wind, boutique vineyard estates—including the Prince's own—produce some seriously impressive, world-class wines, while the high pastures turn out incredible artisan cheeses. It's a place where you\'ll find comforting käsknöpfle smothered in crispy onions, traditional riebel cornmeal, and elegant Pinot Noir.",
        highlights: [
          'Wine tasting at the Prince of Liechtenstein\'s vineyard',
          'Vaduz - the charming capital city',
          'Dramatic mountain scenery and alpine charm',
        ],
        images: ['hoffkeller_li.jpg', 'vines_li.jpg', 'vaduz2.jpg', 'hoffkeller_li2.jpg'],
      },
      {
        name: 'Austria',
        subtitle: 'Vienna, The Danube & the Wachau Valley',
        description: "Austria's food culture has a wonderful, elegant warmth to it, balancing grand imperial traditions with comforting alpine soul. While the world easily falls for classic Vienna—with its crisp Wiener Schnitzel, rich tafelspitz, and historic coffeehouse culture—venturing along the Danube and into the mountains opens up a completely different menu. In the spectacular, steeply terraced Wachau Valley, historic estates produce some of Europe's finest Federspiel and Smaragd white wines, while further upriver, the creative city of Linz prides itself on the rich, almond-and-currant Linzer Torte. Travel toward the peaks to Salzburg, and the focus shifts to dramatic alpine landscapes, famous street-food bosna sausages, and fluffy Salzburger Nockerl. From grand city cafes to sun-drenched vineyard taverns, Austrian food is never just sustenance—it is a proud language of place and family.",
        highlights: [
          'Vienna\'s coffee culture and pastry traditions',
          'Austrian wine regions and vineyard terraces',
          'Heuriger wine taverns and traditional alpine inns',
          'Game cuisine and forest traditions',
          'Michelin-starred restaurants and family establishments',
        ],
        images: ['linzer.jpg', 'vienna5.jpg', 'wachau1.jpg', 'sacher1.jpg'],
      },
    ],
    whyVisitTitle: 'What Each Region Brings to the Journey',
    whyVisitItems: [
      {
        country: 'France',
        reason: 'Established culinary excellence. France set the standard for fine dining and wine culture—visiting France means experiencing the foundations of modern gastronomy.',
        image: 'colmar.jpg',
      },
      {
        country: 'Germany',
        reason: 'Artisan precision and authenticity. German food culture rewards curiosity—small bakeries, forest traditions, and wine estates that have never compromised quality.',
        image: 'triberg2.jpg',
      },
      {
        country: 'Liechtenstein',
        reason: 'Intimate local experience. This tiny country offers what larger neighbours cannot: direct access without tourist infrastructure.',
        image: 'vines_li.jpg',
      },
      {
        country: 'Austria',
        reason: 'Elegant sophistication and warmth. From Vienna\'s coffee houses to alpine inns, Austrian hospitality balances refinement with genuine human warmth.',
        image: 'hallstatt.jpg',
      },
    ],
    ctaText: 'Explore Our European Tours',
  },

  fr: {
    heroTitle: 'Alpes Européennes et Au-Delà',
    heroSubtitle: 'Quatre Pays. Un Voyage Culinaire. Des Frontières Sans Fin.',
    introTitle: 'Terres Connectées, Traditions Partagées',
    introText: 'La France, l\'Allemagne, le Liechtenstein et l\'Autriche forment une tapisserie connectée de pics alpins, de terrasses de vignobles et de traditions alimentaires profondément enracinées. Bien que chaque nation ait férocement protégé sa propre identité culinaire, les frontières ici sont fluides—façonnées par les montagnes, les guerres et le temps. Elles ne respectent pas les lignes sur les cartes.\n\nCe qui unit ces régions, c\'est un respect partagé pour l\'artisanat, la saisonnalité, la tradition et le lieu. Qu\'il s\'agisse des vins élégants d\'Alsace, des traditions généreuses de la campagne autrichienne, de la précision de la boulangerie allemande ou de la sophistication tranquille des villages alpins du Liechtenstein, la cuisine alpine européenne est profondément liée au paysage, au patrimoine et à un engagement inébranlable envers la qualité.',
    countriesTitle: 'Régions Vedettes',
    countries: [
      {
        name: 'France',
        subtitle: 'Où la Tradition Rencontre l\'Excellence',
        description: 'Les chefs appellent souvent la France la capitale culinaire du monde, et c\'est facile à voir. Le patrimoine gastronomique du pays est légendaire. Mais tandis que la plupart des gens se précipitent en France pour des favoris familiers comme le riche boeuf bourguignon ou les pâtisseries feuilletées et beurrées, la région d\'Alsace raconte une histoire différente. Nichée contre les frontières allemande et suisse, l\'Alsace possède une identité tout à fait unique. Ici, des vins blancs remarquables s\'associent à des plats généreux d\'influence allemande, mélangeant la sophistication française avec la chaleur d\'Europe centrale. C\'est le pays de la choucroute, du kougelhopf, de la tarte flambée, des vins Riesling et Gewürztraminer.\n\nDans le courant dominant comme dans les marges, la nourriture française n\'est jamais simplement une subsistance—c\'est une langue fière du lieu et de la famille.',
        highlights: [
          'Le charme à colombages de Colmar et sa beauté de conte de fées',
          'Le mélange de Strasbourg entre l\'élégance française et la chaleur allemande',
          'Vins alsaciens, biscuiteries, pâtisseries',
          'Choucroute garnie et tarte flambée dans les traditionnels winstubs',
          'Des siècles d\'histoire fascinante à chaque coin de rue',
        ],
        images: ['colmar.jpg', 'stras1.jpg', 'biscuiterie.jpg', 'StrasbourgCathedral.jpg'],
      },
      {
        name: 'Allemagne',
        subtitle: 'La Forêt-Noire : Héritage et Invention',
        description: 'La culture culinaire allemande est enracinée dans une chaleur généreuse incontestable, mais sa véritable profondeur récompense ceux qui regardent de plus près. Bien que le monde réduise souvent la scène alimentaire du pays à des classiques de confort simples, les paysages diversifiés de l\'Allemagne racontent une histoire bien plus sophistiquée. Dans la vallée du Rhin ensoleillée, les domaines séculaires produisent certains des meilleurs vins blancs d\'Europe, tandis que la mystérieuse Forêt-Noire champignonne la cuisson artisanale et les viandes fumées traditionnelles. C\'est un paysage façonné par la tarte flambée (flammkuchen), le riche gâteau de la Forêt-Noire, les knödels généreux et les élégants vins Spätburgunder. Des marchés urbains animés aux places de village tranquilles, la nourriture allemande n\'est jamais simplement une subsistance—c\'est une célébration des ingrédients de qualité, de la précision et de la fierté générationelle.',
        highlights: [
          'Gâteau de la Forêt-Noire comme il était censé être : riche, alcoolisé et profondément chocolaté',
          'Jambon de la Forêt-Noire et autres viandes fumées et curées',
          'Eaux-de-vie de fruits et culture brassicole traditionnelle',
          'Triberg - charme à colombages et maison de la plus grande horloge à coucou du monde',
          'Konstanz - Ville lacustre époustouflante avec un mélange d\'influences allemandes et suisses',
          'Lindau - Ville insulaire pittoresque sur le lac de Constance avec une scène alimentaire dynamique',
        ],
        images: ['black_forest_gat.jpg', 'triberg2.jpg', 'zugspitze.jpg', 'beer_bretzel.jpg'],
      },
      {
        name: 'Liechtenstein',
        subtitle: 'La Principauté Princière',
        description: 'La scène alimentaire du Liechtenstein a une belle ambiance alpine terre-à-terre, mais il y a une vraie touche de royauté si vous regardez de plus près. Les gens ont tendance à ignorer cette petite Principauté, mais ses pentes de vallée ensoleillées racontent une histoire différente. Grâce au vent chaud du Föhn, les petits domaines vinicoles—y compris celui du Prince lui-même—produisent des vins sérieusement impressionnants et de classe mondiale, tandis que les hauts pâturages produisent des fromages artisanaux incroyables. C\'est un endroit où vous trouverez un confortable käsknöpfle étouffé dans des oignons croustillants, un riebel maïs traditionnel et un élégant Pinot Noir.',
        highlights: [
          'Dégustation de vin au vignoble du Prince du Liechtenstein',
          'Vaduz - la charmante capitale',
          'Charme montagneux dramatique et alpin',
        ],
        images: ['hoffkeller_li.jpg', 'vines_li.jpg', 'vaduz2.jpg', 'hoffkeller_li2.jpg'],
      },
      {
        name: 'Autriche',
        subtitle: 'Vienne, le Danube et la Vallée de la Wachau',
        description: 'La culture alimentaire autrichienne a une chaleur élégante et merveilleuse, équilibrant les grandes traditions impériales avec une âme alpine réconfortante. Bien que le monde tombe facilement pour la Vienne classique—avec ses Wiener Schnitzel croustillants, ses tafelspitz riches et sa culture de la maison de café historique—s\'aventurer le long du Danube et dans les montagnes ouvre un menu complètement différent. Dans la spectaculaire vallée de Wachau en terrasses abruptes, les domaines historiques produisent certains des meilleurs vins Federspiel et Smaragd d\'Europe, tandis que plus haut sur la rivière, la ville créative de Linz est fière de son Linzer Torte riche à base d\'amande et de cassis. Voyagez vers les pics jusqu\'à Salzbourg, et l\'accent se déplace vers les paysages alpins dramatiques, les célèbres saucisses bosna de rue et les fluffy Salzburger Nockerl. Des grands cafés de la ville aux tavernes de vignoble baignées de soleil, la nourriture autrichienne n\'est jamais simplement une subsistance—c\'est une langue fière du lieu et de la famille.',
        highlights: [
          'Culture du café viennoise et traditions de pâtisserie',
          'Régions vinicoles autrichiennes et terrasses de vignobles',
          'Tavernes à vin Heuriger et auberges alpines traditionnelles',
          'Cuisine du gibier et traditions forestières',
          'Restaurants étoilés Michelin et établissements familiaux',
        ],
        images: ['linzer.jpg', 'vienna5.jpg', 'wachau1.jpg', 'sacher1.jpg'],
      },
    ],
    whyVisitTitle: 'Ce Que Chaque Région Apporte au Voyage',
    whyVisitItems: [
      {
        country: 'France',
        reason: 'Excellence culinaire établie. La France a établi la norme pour la gastronomie fine et la culture du vin—visiter la France signifie expérimenter les fondations de la gastronomie moderne.',
        image: 'colmar.jpg',
      },
      {
        country: 'Allemagne',
        reason: 'Précision artisanale et authenticité. La culture alimentaire allemande récompense la curiosité—les petites boulangeries, les traditions forestières et les domaines vinicoles qui n\'ont jamais compromis la qualité.',
        image: 'triberg2.jpg',
      },
      {
        country: 'Liechtenstein',
        reason: 'Expérience locale intime. Ce petit pays offre ce que les voisins plus grands ne peuvent pas : un accès direct sans infrastructure touristique.',
        image: 'vines_li.jpg',
      },
      {
        country: 'Autriche',
        reason: 'Sophistication élégante et chaleur. Des maisons de café viennoises aux auberges alpines, l\'hospitalité autrichienne équilibre le raffinement avec une chaleur humaine sincère.',
        image: 'hallstatt.jpg',
      },
    ],
    ctaText: 'Explorez Nos Voyages Européens',
  },

  de: {
    heroTitle: 'Europäische Alpen und Darüber Hinaus',
    heroSubtitle: 'Vier Länder. Eine Kulinarische Reise. Grenzenlose Grenzen.',
    introTitle: 'Verbundene Länder, Gemeinsame Traditionen',
    introText: 'Frankreich, Deutschland, Liechtenstein und Österreich bilden ein verbundenes Mosaik aus alpinen Gipfeln, Weinterrassen und tief verwurzelten Lebensmitteltraditionen. Obwohl jede Nation ihre eigene kulinarische Identität hartnäckig geschützt hat, sind die Grenzen hier fließend—geprägt von Bergen, Kriegen und Zeit. Sie halten sich nicht an Linien auf Karten.\n\nWas diese Regionen vereint, ist gegenseitige Verehrung für Handwerk, Saisonalität, Tradition und Ort. Ob es sich um die eleganten Weine des Elsass, die herzhaften Traditionen des österreichischen Landes, die Präzision des deutschen Backens oder die ruhige Raffinesse der Alpendörfer Liechtensteins handelt—die europäische alpine Küche ist tief mit Landschaft, Erbe und einem unerschütterlichen Engagement für Qualität verbunden.',
    countriesTitle: 'Hervorgehobene Regionen',
    countries: [
      {
        name: 'Frankreich',
        subtitle: 'Wo Tradition auf Exzellenz Trifft',
        description: 'Köche nennen Frankreich oft die kulinarische Hauptstadt der Welt, und das ist leicht zu sehen. Das gastronomische Erbe des Landes ist legendär. Aber während die meisten Menschen in Frankreich für vertraute Favoriten wie reichhaltiges Rindergulasch oder blättriges, butteriges Gebäck fliehen, erzählt die Region Elsass eine andere Geschichte. Das Elsass liegt an den deutschen und Schweizer Grenzen und hat eine ganz eigene Identität. Hier paaren sich bemerkenswerte Weißweine mit herzhaften, deutschbeeinflussten Gerichten und verbinden französische Raffinesse mit mitteleuropäischer Wärme. Dies ist die Heimat von Choucroute, Kugelhopf, Tarte Flambée, Riesling und Gewürztraminer Weinen.\n\nIn der Mainstream- und an den Rändern ist französisches Essen niemals nur Lebensunterhalt—es ist eine stolze Sprache des Ortes und der Familie.',
        highlights: [
          'Kolmars Fachwerkcharme und Märchenschönheit',
          'Straßburgs Mischung aus französischer Eleganz und deutscher Wärme',
          'Elsässische Weine, Biscuiteries, Patisserien',
          'Choucroute garnie und Tarte Flambée in traditionellen Weinstuben',
          'Jahrhunderte faszinierende Geschichte an jeder Ecke',
        ],
        images: ['colmar.jpg', 'stras1.jpg', 'biscuiterie.jpg', 'StrasbourgCathedral.jpg'],
      },
      {
        name: 'Deutschland',
        subtitle: 'Der Schwarzwald: Erbe und Erfindung',
        description: 'Die deutsche Esskultur ist in unverkennbarer herzhafter Wärme verankert, aber ihre wahre Tiefe belohnt diejenigen, die genauer hinschauen. Während die Welt die Lebensmittelszene des Landes oft auf einfache Komfortklassiker reduziert, erzählen Deutschlands vielfältige Landschaften eine weit ausgefeiltere Geschichte. In der sonnenverwöhnten Rheintal produzieren jahrhundertealte Herrenhäuser einige der besten Weißweine Europas, während der mysteriöse Schwarzwald handwerkliches Backen und traditionell geräucherte Fleischwaren fördert. Dies ist eine Landschaft, die durch Tarte Flambée (Flammkuchen), reiche Schwarzwälder Kirschtorte, herzhafte Knödel und elegante Spätburgunder-Weine geprägt ist. Von belebten Stadtmärkten bis zu ruhigen Dorfplätzen ist deutsches Essen niemals nur Lebensunterhalt—es ist eine Feier von Qualitätszutaten, Präzision und generationeller Stolz.',
        highlights: [
          'Schwarzwälder Kirschtorte wie sie sein sollte: reich, alkoholreich und tiefscharf schokoladig',
          'Schwarzwälder Schinken und andere geräucherte und gepökelte Fleischwaren',
          'Obstbrandy und traditionelle Bierkultur',
          'Triberg - Fachwerkcharme und Heimat der größten Kuckucksuhr der Welt',
          'Konstanz - Wunderschöne Seenstadt mit einer Mischung aus deutschen und Schweizer Einflüssen',
          'Lindau - Malerische Inselstadt am Bodensee mit lebendiger Lebensmittelszene',
        ],
        images: ['black_forest_gat.jpg', 'triberg2.jpg', 'zugspitze.jpg', 'beer_bretzel.jpg'],
      },
      {
        name: 'Liechtenstein',
        subtitle: 'Das Fürstentum',
        description: 'Die Lebensmittelszene Liechtensteins hat ein schönes, bodenständiges Alpengefühl, aber es gibt einen wahren Hauch von Königtum, wenn man genauer hinschaut. Menschen neigen dazu, dieses winzige Fürstentum zu übersehen, aber seine sonnenverwöhnten Talabhänge erzählen eine andere Geschichte. Dank des warmen Föhn-Windes produzieren Boutique-Weingüter—einschließlich des eigenen des Fürsten—ernsthaft beeindruckende, weltklasse Weine, während die Hochalmen unglaubliche handwerkliche Käsesorten produzieren. Es ist ein Ort, an dem Sie komfortable Käsknöpfle erstickt in knusprigen Zwiebeln, traditionelle Riebel-Maismehl und eleganten Pinot Noir finden.',
        highlights: [
          'Weinverkostung am Weingut des Fürsten von Liechtenstein',
          'Vaduz - die charmante Hauptstadt',
          'Dramatische Berglandschaft und alpiner Charme',
        ],
        images: ['hoffkeller_li.jpg', 'vines_li.jpg', 'vaduz2.jpg', 'hoffkeller_li2.jpg'],
      },
      {
        name: 'Österreich',
        subtitle: 'Wien, die Donau und das Wachautal',
        description: 'Österreichs Esskultur hat eine wunderbare, elegante Wärme, die großartige kaiserliche Traditionen mit gemütlicher alpiner Seele in Einklang bringt. Während die Welt leicht für klassisches Wien mit seinem knusprigen Wiener Schnitzel, reichem Tafelspitz und historischer Kaffeehaus-Kultur fällt, eröffnet sich eine völlig andere Speisekarte, wenn man sich die Donau hinunter und in die Berge wagt. Im spektakulären, steil terrassierten Wachautal produzieren historische Herrenhäuser einige der besten Federspiel- und Smaragd-Weißweine Europas, während weiter flussaufwärts die kreative Stadt Linz stolz auf ihre reiche, Mandel- und Johannisbeer-Linzer Torte ist. Reisen Sie zu den Gipfeln bis Salzburg, und der Fokus verlagert sich auf dramatische Berglandschaften, berühmte Straßen-Bosna-Würstchen und fluffige Salzburger Nockerl. Von großartigen Stadtkafés bis zu sonnenverwöhnten Weingutskneipen ist österreichisches Essen niemals nur Lebensunterhalt—es ist eine stolze Sprache des Ortes und der Familie.',
        highlights: [
          'Wiener Kaffeekultur und Gebäcktradition',
          'Österreichische Weinregionen und Weinterrassen',
          'Heuriger Weintavern und traditionelle Alpengasthöfe',
          'Wildküche und Waldtraditionen',
          'Mit Michelin-Sternen ausgezeichnete Restaurants und Familienestablishments',
        ],
        images: ['linzer.jpg', 'vienna5.jpg', 'wachau1.jpg', 'sacher1.jpg'],
      },
    ],
    whyVisitTitle: 'Was Jede Region zur Reise Bringt',
    whyVisitItems: [
      {
        country: 'Frankreich',
        reason: 'Etablierte kulinarische Exzellenz. Frankreich setzte den Standard für Feinküche und Weinkultur—Frankreich zu besuchen bedeutet, die Grundlagen der modernen Gastronomie zu erleben.',
        image: 'colmar.jpg',
      },
      {
        country: 'Deutschland',
        reason: 'Handwerkliche Präzision und Authentizität. Die deutsche Esskultur belohnt Neugier—kleine Bäckereien, Waldtraditionen und Weingüter, die niemals Qualität kompromittiert haben.',
        image: 'triberg2.jpg',
      },
      {
        country: 'Liechtenstein',
        reason: 'Intime lokale Erfahrung. Dieses winzige Land bietet, was größere Nachbarn nicht können: direkter Zugang ohne Tourismusinfrastruktur.',
        image: 'vines_li.jpg',
      },
      {
        country: 'Österreich',
        reason: 'Elegante Raffinesse und Wärme. Von Wiener Kaffeehäusern bis zu Alpengasthöfen balanciert österreichische Gastfreundschaft Raffinesse mit echter menschlicher Wärme.',
        image: 'hallstatt.jpg',
      },
    ],
    ctaText: 'Entdecken Sie Unsere Europäischen Reisen',
  },
};

const EuropeAboutPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;
  const content = CONTENT[lang];

  useEffect(() => {
    document.body.setAttribute('data-page', 'europe-about');
    return () => document.body.removeAttribute('data-page');
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[52vh] -mx-4 sm:-mx-2 lg:-mx-8 overflow-hidden">
        <img
          src={getImagePath('schoenbrunn.jpg')}
          alt="European Alps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
          <div className="text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-2xl mb-3 leading-tight">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg">
              {content.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="space-y-12 py-12">

        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-6">
            {content.introTitle}
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            {content.introText.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Countries Section with Masonry Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-12 text-center">
            {content.countriesTitle}
          </h2>
          <div className="space-y-16">
            {content.countries.map((country, idx) => (
              <div key={country.name}>
                <div className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start mb-8`}>
                  <div className="flex-1">
                    <h3 className="text-3xl font-serif font-bold text-alpine-green mb-2">
                      {country.name}
                    </h3>
                    <h4 className="text-lg text-gray-600 italic mb-4">
                      {country.subtitle}
                    </h4>
                    <div className="text-gray-700 leading-relaxed mb-6 space-y-4">
                      {country.description.split('\n\n').map((para, pidx) => (
                        <p key={pidx}>{para}</p>
                      ))}
                    </div>
                    <div>
                      <h5 className="font-bold text-alpine-green mb-3">Key Experiences:</h5>
                      <ul className="space-y-2">
                        {country.highlights.map((highlight, hidx) => (
                          <li key={hidx} className="flex gap-3 text-gray-700 text-sm">
                            <span className="text-alpine-green font-bold">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Masonry Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {country.images.map((image, imidx) => (
                    <img
                      key={imidx}
                      src={getImagePath(image)}
                      alt={`${country.name} image ${imidx + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Each Region Brings */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-8 text-center">
            {content.whyVisitTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.whyVisitItems.map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={getImagePath(item.image)}
                  alt={item.country}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-alpine-green mb-3">
                    {item.country}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <Link
            to="/europe"
            className="inline-block bg-alpine-green hover:bg-opacity-90 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            {content.ctaText}
          </Link>
        </section>

      </div>
    </>
  );
};

export default EuropeAboutPage;