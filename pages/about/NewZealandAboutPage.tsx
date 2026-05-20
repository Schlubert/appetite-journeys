// pages/about/NewZealandAboutPage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getImagePath } from '@/utils/paths';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seoConfig';

type Lang = 'en' | 'fr' | 'de';

interface RegionContent {
  heroTitle: string;
  heroSubtitle: string;
  regionShapedTitle: string;
  regionShapedText: string;
  uniqueTitle: string;
  uniqueItems: Array<{ title: string; description: string }>;
  seasonalTitle: string;
  seasonalMonths: Array<{ month: string; highlights: string[] }>;
  experiencesTitle: string;
  experiences: Array<{ title: string; description: string; image: string }>;
  differenceTitle: string;
  differenceItems: Array<{ title: string; description: string }>;
  ctaText: string;
}

const CONTENT: Record<Lang, RegionContent> = {
  en: {
    heroTitle: 'New Zealand',
    heroSubtitle: 'Pristine Landscapes. Progressive Cuisine. Māori Heritage.',
    regionShapedTitle: 'A Region Shaped by Innovation, Land, and Māori Culture',
    regionShapedText: 'New Zealand\'s culinary identity is a living story of isolation, innovation, and deep respect for the land. In a country where dramatic landscapes change within hours—from fjords to vineyards, rainforests to alpine peaks—food reflects both place and a uniquely progressive approach to cooking.\n\nMāori traditions form the spiritual and cultural foundation of New Zealand food, with techniques like hangi cooking, foraged kai moana (seafood), and native ingredients connecting modern cuisine to centuries of indigenous knowledge. European settlement brought influence, yet contemporary New Zealand cuisine stands boldly apart—celebrated globally for its farm-to-table ethos, exceptional wines, and willingness to challenge culinary conventions.\n\nHospitality here is warm and genuine, rooted in the Māori concept of manaakitanga—the obligation to care for guests. Boutique wineries, pioneering restaurants, family farms, and Māori cultural experiences all contribute to a food culture defined by authenticity, sustainability, and a sense of adventure.\n\nFor Appetite Journeys, New Zealand offers something extraordinary: landscapes of impossible beauty paired with innovative cuisine, experienced with genuine warmth and the freedom to explore at your own pace.',
    uniqueTitle: 'What Makes This Region Unique',
    uniqueItems: [
      {
        title: 'Landscapes That Define the Cuisine',
        description: 'From coastal foraging grounds to remote mountain vineyards, geography shapes what is grown, caught, and celebrated across both islands.',
      },
      {
        title: 'Māori Heritage and Foodways',
        description: 'Indigenous traditions—hangi cooking, seasonal harvesting, kai moana—are woven into contemporary cuisine, creating a uniquely New Zealand food culture.',
      },
      {
        title: 'World-Class Wine Regions',
        description: 'Marlborough, Central Otago, and boutique producers create world-renowned wines in some of the world\'s most spectacular vineyard settings.',
      },
      {
        title: 'A Pioneer Spirit in Cooking',
        description: 'New Zealand chefs and producers embrace innovation while celebrating local ingredients, sustainability, and a fearless approach to flavour.',
      },
    ],
    seasonalTitle: 'Experience Across the Seasons',
    seasonalMonths: [
      {
        month: 'September',
        highlights: [
          'Spring arrives with fresh local produce and the beginning of the growing season',
          'Spring lamb and New Zealand\'s beloved Greenshell mussels at their best',
          'Wineries opening their doors after harvest as vines come into leaf',
          'Wildflowers and birdsong returning to forests and gardens',
          'Perfect timing for outdoor exploration and festival season begins',
        ],
      },
      {
        month: 'March',
        highlights: [
          'Autumn harvest in full swing across all wine regions',
          'Exceptional wild mushrooms, stone fruits, and autumn vegetables at peak season',
          'Golden light illuminating vineyards during final harvest celebrations',
          'Māori cultural festivals and harvest celebrations throughout the country',
          'Wine harvest events, tastings, and direct access to winemakers and producers',
        ],
      },
    ],
    experiencesTitle: 'Signature Experiences',
    experiences: [
      {
        title: 'Meet the Makers',
        description: 'Spend time with passionate local producers, winemakers, farmers, and artisans who generously share their craft, stories, and vision for New Zealand food.',
        image: 'nz/craft_distillers.jpg',
      },
      {
        title: 'Go where the Locals Go',
        description: 'Social media will tell you one thing, but the best way to discover a region\'s food culture is to go where the locals go—whether that\'s a beloved hole-in-the-wall eatery, a bustling farmers market, or a hidden gem of a winery.',
        image: 'nz/fatbastard2.jpg',
      },
      {
        title: 'See some of the most famous views NZ has to offer',
        description: 'New Zealand\'s landscapes are legendary, and no tour to the region would be complete without experiencing them firsthand. From the fjords of Milford Sound to the vineyards of Central Otago, the scenery is as much a part of the experience as the food.',
        image: 'nz/mtCook.jpg',
      },
      {
        title: 'The road less traveled',
        description: 'New Zealand is full of incredible places that don\'t make the typical tourist itinerary. We seek out those hidden gems—whether it\'s a remote beech, a disillery tucked away in the Mackenzie Country, or a petrified forest on the Otago coast—to give you a deeper, more authentic experience of the region.',
        image: 'nz/bluff-signpost.jpg',
      },
    ],
    differenceTitle: 'The Appetite Journeys Difference',
    differenceItems: [
      {
        title: 'More Than a Tour',
        description: 'Our journeys are designed around genuine connection—with local people, Māori culture, regional food traditions, and the stories behind what you taste.',
      },
      {
        title: 'Small Groups, Meaningful Access',
        description: 'With groups intentionally limited in size, we can enjoy experiences that larger tours simply cannot offer, from intimate winery visits to authentic Māori cultural exchanges.',
      },
      {
        title: 'Curated Through Hospitality Experience',
        description: 'Our background in food, beverage, and hospitality shapes every journey. We focus not only on where you go, but how each experience feels and what you take away.',
      },
      {
        title: 'Slower, More Immersive Travel',
        description: 'Rather than rushing between destinations, we spend time experiencing places properly—dining with locals, exploring Māori heritage, embracing the pace of the land.',
      },
    ],
    ctaText: 'Explore Our Tours',
  },

  fr: {
    heroTitle: 'Nouvelle-Zélande',
    heroSubtitle: 'Paysages Vierges. Cuisine Progressive. Patrimoine Māori.',
    regionShapedTitle: 'Une Région Façonnée par l\'Innovation, la Terre et la Culture Māori',
    regionShapedText: 'L\'identité culinaire de la Nouvelle-Zélande est une histoire vivante d\'isolement, d\'innovation et de profond respect pour la terre. Dans un pays où les paysages dramatiques changent en quelques heures—des fjords aux vignobles, des forêts tropicales aux pics alpins—la nourriture reflète à la fois le lieu et une approche culinaire unique et progressive.\n\nLes traditions māori forment le fondement spirituel et culturel de la cuisine néo-zélandaise, avec des techniques comme la cuisson au hangi, les kai moana (fruits de mer) récoltés, et les ingrédients autochtones qui connectent la cuisine moderne à des siècles de savoir autochtone. L\'établissement européen a apporté son influence, mais la cuisine contemporaine de la Nouvelle-Zélande se distingue audacieusement—célébrée mondialement pour son approche de la ferme à la table, ses vins exceptionnels et sa volonté de défier les conventions culinaires.\n\nL\'hospitalité ici est chaleureuse et sincère, enracinée dans le concept māori de manaakitanga—l\'obligation de s\'occuper des invités. Les vignobles artisanaux, les restaurants pionniers, les fermes familiales et les expériences culturelles māori contribuent tous à une culture alimentaire définie par l\'authenticité, la durabilité et un sens de l\'aventure.\n\nPour Appetite Journeys, la Nouvelle-Zélande offre quelque chose d\'extraordinaire : des paysages d\'une beauté impossible associés à une cuisine innovante, vécue avec chaleur sincère et la liberté d\'explorer à votre propre rythme.',
    uniqueTitle: 'Ce Qui Rend Cette Région Unique',
    uniqueItems: [
      {
        title: 'Les Paysages Qui Définissent la Cuisine',
        description: 'Des côtes de récolte côtière aux vignobles de montagne reculés, la géographie façonne ce qui est cultivé, récolté et célébré dans les deux îles.',
      },
      {
        title: 'Patrimoine Māori et Traditions Alimentaires',
        description: 'Les traditions autochtones—cuisson au hangi, récolte saisonnière, kai moana—sont tissées dans la cuisine contemporaine, créant une culture alimentaire unique à la Nouvelle-Zélande.',
      },
      {
        title: 'Régions Vinicoles de Classe Mondiale',
        description: 'Marlborough, Central Otago et les producteurs artisanaux créent des vins de renommée mondiale dans certains des plus beaux vignobles du monde.',
      },
      {
        title: 'Un Esprit Pionnier en Cuisine',
        description: 'Les chefs et producteurs néo-zélandais embrassent l\'innovation tout en célébrant les ingrédients locaux, la durabilité et une approche sans peur de la saveur.',
      },
    ],
    seasonalTitle: 'Expériences à Travers les Saisons',
    seasonalMonths: [
      {
        month: 'Septembre',
        highlights: [
          'Le printemps arrive avec des produits locaux frais et le début de la saison de croissance',
          'L\'agneau de printemps et les moules Greenshell néo-zélandaises adorées à leur meilleur',
          'Les vignobles ouvrent leurs portes après la récolte alors que les vignes entrent en feuille',
          'Les fleurs sauvages et le chant des oiseaux reviennent dans les forêts et les jardins',
          'Moment parfait pour l\'exploration en plein air et le début de la saison des festivals',
        ],
      },
      {
        month: 'Mars',
        highlights: [
          'La récolte d\'automne en plein essor dans toutes les régions vinicoles',
          'Champignons sauvages exceptionnels, fruits à noyau et légumes d\'automne à la saison de pointe',
          'Lumière dorée illuminant les vignobles lors des célébrations finales des vendanges',
          'Festivals culturels māori et célébrations des récoltes dans tout le pays',
          'Événements de récolte de vin, dégustations et accès direct aux vignerons et producteurs',
        ],
      },
    ],
    experiencesTitle: 'Expériences Emblématiques',
    experiences: [
      {
        title: 'Rencontrer les Producteurs',
        description: 'Passez du temps avec des producteurs locaux passionnés, des vignerons, des agriculteurs et des artisans qui partagent généreusement leur savoir-faire, leurs histoires et leur vision de la cuisine néo-zélandaise.',
        image: 'nz/craft_distillers.jpg',
      },
      {
        title: 'Aller Où les Locaux Vont',
        description: 'Les médias sociaux vous diront une chose, mais la meilleure façon de découvrir la culture alimentaire d\'une région est d\'aller où les locaux vont—que ce soit un restaurant de quartier adoré, un marché fermier animé ou une pépite cachée de vignoble.',
        image: 'nz/fatbastard2.jpg',
      },
      {
        title: 'Voir certaines des vues les plus célèbres de NZ',
        description: 'Les paysages de la Nouvelle-Zélande sont légendaires, et aucun tour dans la région ne serait complet sans les vivre de première main. Des fjords de Milford Sound aux vignobles de Central Otago, le paysage fait autant partie de l\'expérience que la nourriture.',
        image: 'nz/mtCook.jpeg',
      },
      {
        title: 'Explorer les Paysages Moins Fréquentés',
        description: 'La Nouvelle-Zélande regorge d\'endroits incroyables qui ne font pas partie de l\'itinéraire touristique typique. Nous recherchons ces joyaux cachés—qu\'il s\'agisse d\'une forêt de hêtres reculée, d\'une distillerie nichée dans le Mackenzie Country ou d\'une forêt pétrifiée sur la côte d\'Otago—pour vous offrir une expérience plus profonde et plus authentique de la région.',
        image: 'nz/bluff-signpost.jpg',
      },
    ],
    differenceTitle: 'La Différence d\'Appetite Journeys',
    differenceItems: [
      {
        title: 'Plus Qu\'une Visite',
        description: 'Nos voyages sont conçus autour d\'une véritable connexion—avec les gens, la culture māori, les traditions alimentaires régionales et les histoires derrière ce que vous goûtez.',
      },
      {
        title: 'Petits Groupes, Accès Significatif',
        description: 'Avec des groupes intentionnellement limités en taille, nous pouvons profiter d\'expériences que les plus grands circuits ne peuvent tout simplement pas offrir, des visites intimes de vignobles aux échanges culturels māori authentiques.',
      },
      {
        title: 'Curé par l\'Expérience de l\'Hospitalité',
        description: 'Notre expérience en gastronomie, boisson et hospitalité façonne chaque voyage. Nous nous concentrons non seulement sur où vous allez, mais sur la façon dont chaque expérience se déroule et ce que vous en emportez.',
      },
      {
        title: 'Voyage Plus Lent et Plus Immersif',
        description: 'Plutôt que de nous précipiter entre les destinations, nous prenons le temps d\'expérimenter les lieux correctement—en dînant avec les habitants, en explorant le patrimoine māori, en embrassant le rythme de la terre.',
      },
    ],
    ctaText: 'Explorez Nos Voyages',
  },

  de: {
    heroTitle: 'Neuseeland',
    heroSubtitle: 'Unberührte Landschaften. Progressive Küche. Māori-Erbe.',
    regionShapedTitle: 'Eine Region geprägt von Innovation, Land und Māori-Kultur',
    regionShapedText: 'Neuseelands kulinarische Identität ist eine lebendige Geschichte von Isolation, Innovation und tiefem Respekt vor dem Land. In einem Land, in dem sich die Landschaft dramatisch verändert—von Fjorden über Weinberge bis hin zu Regenwäldern und Alpengipfeln—spiegelt Essen sowohl den Ort als auch einen einzigartigen progressiven Kochansatz wider.\n\nMāori-Traditionen bilden das spirituelle und kulturelle Fundament der neuseeländischen Küche, mit Techniken wie Hangi-Kochen, geernteten kai moana (Meeresfrüchten) und heimischen Zutaten, die die moderne Küche mit Jahrhunderten indigenen Wissens verbinden. Die europäische Besiedlung brachte Einfluss, doch die zeitgenössische neuseeländische Küche hebt sich kühn ab—weltweit gefeiert für ihren Farm-to-Table-Ansatz, außergewöhnliche Weine und ihre Bereitschaft, kulinarische Konventionen herauszufordern.\n\nGastfreundschaft hier ist warm und authentisch, verwurzelt im māori-Konzept von Manaakitanga—die Verpflichtung, sich um Gäste zu kümmern. Boutique-Weingüter, Pionierrestaurants, Familienbetriebe und māori-Kulturerfahrungen tragen alle zu einer Esskultur bei, die durch Authentizität, Nachhaltigkeit und Abenteuersinn definiert wird.\n\nFür Appetite Journeys bietet Neuseeland etwas Außergewöhnliches: Landschaften von unmöglicher Schönheit gepaart mit innovativer Küche, erlebt mit echtwärmter Wärme und der Freiheit, in Ihrem eigenen Tempo zu erkunden.',
    uniqueTitle: 'Was Diese Region Einzigartig Macht',
    uniqueItems: [
      {
        title: 'Landschaften, Die die Küche Definieren',
        description: 'Von Küstensammelgebieten bis zu abgelegenen Bergweingärten prägt die Geographie, was in beiden Inseln angebaut, geerntet und gefeiert wird.',
      },
      {
        title: 'Māori-Erbe und Lebensmitteltraditionen',
        description: 'Indigene Traditionen—Hangi-Kochen, saisonale Ernte, kai moana—sind in die zeitgenössische Küche eingewoben und schaffen eine einzigartig neuseeländische Esskultur.',
      },
      {
        title: 'Weltklasse-Weinregionen',
        description: 'Marlborough, Central Otago und Boutique-Produzenten schaffen weltberühmte Weine in einigen der spektakulärsten Weinbergseinstellungen der Welt.',
      },
      {
        title: 'Ein Geist des Pioniers in der Küche',
        description: 'Neuseeländische Köche und Produzenten umarmen Innovation, während sie lokale Zutaten, Nachhaltigkeit und einen furchtlosen Ansatz zu Geschmack feiern.',
      },
    ],
    seasonalTitle: 'Erlebnisse das Ganze Jahr Über',
    seasonalMonths: [
      {
        month: 'September',
        highlights: [
          'Der Frühling kommt mit frischen lokalen Produkten und dem Beginn der Wachstumssaison an',
          'Frühjahrslamm und Neuseelands geliebte Greenshell-Muscheln sind am besten',
          'Weingüter öffnen ihre Türen nach der Ernte, wenn die Reben in Blatt kommen',
          'Wildblumen und Vogelgesang kehren in Wälder und Gärten zurück',
          'Perfekte Zeit für Außenerkundung und Festivalsaison beginnt',
        ],
      },
      {
        month: 'März',
        highlights: [
          'Herbsternte in vollem Gange in allen Weinregionen',
          'Außergewöhnliche Wildpilze, Steinobst und Herbstgemüse in der Spitzensaison',
          'Goldenes Licht beleuchtet Weinberge während der finalen Erntefeiern',
          'Māori-Kulturfestivals und Erntefeiern im ganzen Land',
          'Weinernteereignisse, Verkostungen und direkter Zugang zu Winzern und Produzenten',
        ],
      },
    ],
    experiencesTitle: 'Charakteristische Erlebnisse',
    experiences: [
      {
        title: 'Die Hersteller Treffen',
        description: 'Verbringen Sie Zeit mit leidenschaftlichen lokalen Produzenten, Winzern, Bauern und Kunsthandwerkern, die großzügig ihr Handwerk, ihre Geschichten und ihre Vision für neuseeländische Lebensmittel teilen.',
        image: 'nz/craft_distillers.jpg',
      },
      {
        title: 'Dorthin gehen, wo die Einheimischen hingehen',
        description: 'Soziale Medien werden Ihnen eine Sache sagen, aber die beste Möglichkeit, die Esskultur einer Region zu entdecken, besteht darin, dorthin zu gehen, wo die Einheimischen hingehen—ob es sich um ein geliebtes Restaurant in der Nachbarschaft, einen belebten Bauernmarkt oder ein verstecktes Juwel eines Weinguts handelt.',
        image: 'nz/fatbastard2.jpg',
      },
      {
        title: 'Einige der berühmtesten Aussichten NZs genießen',
        description: 'Die Landschaften Neuseelands sind legendär, und keine Tour durch die Region wäre vollständig, ohne sie aus erster Hand zu erleben. Von den Fjorden des Milford Sound bis zu den Weinbergen von Central Otago ist die Landschaft genauso Teil des Erlebnisses wie das Essen.',
        image: 'nz/mtCook.jpeg',
      },
      {
        title: 'Die weniger bereisten Pfade erkunden',
        description: 'Neuseeland ist voller unglaublicher Orte, die nicht auf der typischen Touristenroute liegen. Wir suchen diese versteckten Juwelen—ob es sich um einen abgelegenen Buchenwald, eine Destillerie im Mackenzie Country oder einen versteinerten Wald an der Otago-Küste handelt—um Ihnen ein tieferes, authentischeres Erlebnis der Region zu bieten.',
        image: 'nz/bluff-signpost.jpg',
      },
    ],
    differenceTitle: 'Der Unterschied von Appetite Journeys',
    differenceItems: [
      {
        title: 'Mehr Als Eine Reise',
        description: 'Unsere Reisen sind um echte Verbindung herum gestaltet—mit lokalen Menschen, Māori-Kultur, regionalen Lebensmitteltraditionen und den Geschichten hinter dem, was Sie kosten.',
      },
      {
        title: 'Kleine Gruppen, Sinnvoller Zugang',
        description: 'Mit absichtlich kleinen Gruppen können wir Erlebnisse genießen, die größere Reisen einfach nicht bieten können, von intimen Weingut-Besuchen bis zu authentischen Māori-Kulturaustausch.',
      },
      {
        title: 'Kuratiert Durch Gastfreundschaftserfahrung',
        description: 'Unsere Erfahrung in Gastronomie, Getränken und Gastfreundschaft prägt jede Reise. Wir konzentrieren uns nicht nur darauf, wohin Sie gehen, sondern wie sich jedes Erlebnis anfühlt und was Sie mitnehmen.',
      },
      {
        title: 'Langsamere, Immersivere Reise',
        description: 'Anstatt zwischen Zielen zu eilen, nehmen wir uns Zeit, um Orte richtig zu erleben—dining mit Einheimischen, Erkundung des Māori-Erbes, Umarmung des Rhythmus des Landes.',
      },
    ],
    ctaText: 'Entdecken Sie Unsere Reisen',
  },
};

const NewZealandAboutPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;
  const content = CONTENT[lang];

  useEffect(() => {
    document.body.setAttribute('data-page', 'newzealand-about');
    return () => document.body.removeAttribute('data-page');
  }, []);

  return (
    <>
         {/* Hero Section */}
      <section className="relative h-[52vh] -mx-4 sm:-mx-2 lg:-mx-8 overflow-hidden">
        <img
          src={getImagePath('nz/mtCook.jpg')}
          alt="New Zealand"
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

        {/* Section 1: A Region Shaped By... */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-6">
            {content.regionShapedTitle}
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            {content.regionShapedText.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Image Grid 1 */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[('nz/nugget-point.jpg'), ('nz/purakaunui-falls.jpg'), ('nz/milford-sound.jpg')].map((imagePath) => (
              <img
                key={imagePath}
                src={getImagePath(imagePath)}
                alt={`New Zealand landscape`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>

        {/* Section 2: What Makes Unique */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-8 text-center">
            {content.uniqueTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.uniqueItems.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-alpine-green mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Image 2 */}
        <section className="px-4 sm:px-6 lg:px-8">
          <img
            src={getImagePath('nz/cheese-rolls.jpg')}
            alt="New Zealand culture"
            className="w-full h-80 object-cover rounded-lg shadow-md max-w-6xl mx-auto"
          />
        </section>

        {/* Section 3: Seasonal Experiences */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-8 text-center">
            {content.seasonalTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.seasonalMonths.map((seasonal, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-alpine-green/20 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-alpine-green mb-4">
                  Join us in {seasonal.month}
                </h3>
                <ul className="space-y-3">
                  {seasonal.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="flex gap-3 text-gray-700">
                      <span className="text-alpine-green font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Image 3 */}
        <section className="px-4 sm:px-6 lg:px-8">
          <img
            src={getImagePath('nz/station.jpg')}
            alt="New Zealand experiences"
            className="w-full h-80 object-cover rounded-lg shadow-md max-w-6xl mx-auto"
          />
        </section>

        {/* Section 4: Signature Experiences */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-8 text-center">
            {content.experiencesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.experiences.map((exp) => (
              <div key={exp.title} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={getImagePath(exp.image)}
                  alt={exp.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-alpine-green mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: The Difference */}
        <section 
          className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 relative"
          style={{
            backgroundImage: `url('${getImagePath('nz/queenstown.jpg')}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Faded overlay - adjust opacity here (0.3 = 30% image visibility, 0.7 = 70% fade) */}
          <div 
            className="absolute inset-0 bg-gray-100"
            style={{ opacity: 0.5 }}
          />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-alpine-green mb-8 text-center">
              {content.differenceTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.differenceItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }} 
                >
                  <h3 className="text-lg font-bold text-alpine-green mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <Link
            to="/newzealand"
            className="inline-block bg-alpine-green hover:bg-opacity-90 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            {content.ctaText}
          </Link>
        </section>

      </div>
    </>
  );
};

export default NewZealandAboutPage;