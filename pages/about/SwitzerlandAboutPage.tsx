// pages/about/SwitzerlandAboutPage.tsx
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
    heroTitle: 'Switzerland',
    heroSubtitle: 'Alpine Terroir. Lakeside Vineyards. Generations of Craft.',
    regionShapedTitle: 'A Region Shaped by Tradition, Landscape, and Hospitality',
    regionShapedText: 'Switzerland\'s culinary identity has been shaped by mountains, lakes, trade routes, and generations of fiercely proud regional traditions. In a country where geography changes dramatically within a few hours, so too do the flavours, techniques, and cultural influences that define each region.\n\nFrench, German, and Italian influences all leave their mark, yet Swiss cuisine remains unmistakably its own—deeply connected to seasonality, craftsmanship, and local provenance. From alpine cheesemaking traditions passed through generations to vineyard terraces overlooking glacial lakes, food here is not simply consumed; it reflects place, climate, and community.\n\nHospitality also forms an essential part of the Swiss experience. Grand lakeside hotels, mountain auberges, historic cafés, and family-run wineries all contribute to a culture where quality, care, and attention to detail are quietly embedded in everyday life.\n\nFor Appetite Journeys, Switzerland offers something rare: extraordinary scenery paired with equally rich culinary heritage, experienced at a slower, more personal pace.',
    uniqueTitle: 'What Makes This Region Unique',
    uniqueItems: [
      {
        title: 'Landscapes That Shape the Cuisine',
        description: 'From alpine valleys to lakeside vineyards, geography directly influences what is grown, produced, and served across the region.',
      },
      {
        title: 'Deeply Regional Food Culture',
        description: 'Swiss cuisine changes dramatically from canton to canton, with distinct traditions, cheeses, wines, breads, and specialties tied to local identity.',
      },
      {
        title: 'Small-Scale Artisan Production',
        description: 'Many producers remain family-owned, preserving techniques and traditions that have been refined over generations.',
      },
      {
        title: 'A Meeting Point of European Influences',
        description: 'French elegance, German heartiness, and Italian warmth combine to create a culinary culture unlike anywhere else in Europe.',
      },
    ],
    seasonalTitle: 'Experience Across the Seasons',
    seasonalMonths: [
      {
        month: 'April',
        highlights: [
          'Spring alpine produce and wildflowers awakening the valleys',
          'Quieter villages before summer crowds arrive',
          'Fresh asparagus, herbs, early cheeses, and regional wines',
          'Easter celebrations and local spring festivals',
          'Perfect timing for exploring at a leisurely pace',
        ],
      },
      {
        month: 'September',
        highlights: [
          'Harvest season in full swing across all regions',
          'Wine festivals and grape celebrations throughout the country',
          'Golden autumn light illuminating vineyard terraces',
          'Mushrooms, chestnuts, and rich alpine cuisine at their peak',
          'Producers welcoming visitors for tastings and harvest events',
        ],
      },
    ],
    experiencesTitle: 'Signature Experiences',
    experiences: [
      {
        title: 'Meet the Makers',
        description: 'Spend time with passionate local producers, winemakers, cheesemakers, bakers, and artisans who generously share their craft and stories.',
        image: 'wetliweinkeller.jpg',
      },
      {
        title: 'Scenic Rail Journeys',
        description: 'Travel through some of Europe\'s most spectacular landscapes aboard iconic panoramic trains and regional routes.',
        image: 'gexpress1.jpg',
      },
      {
        title: 'Hands-on workshops',
        description: 'Engage in immersive workshops where you can learn traditional Swiss techniques, from alpine cheesemaking to chocolate crafting, guided by local experts.',
        image: 'gottlieben2.jpeg',
      },
      {
        title: 'Get a birds-eye view',
        description: 'The best way to see the mountains and alps is to go UP.',
        image: 'niesen_view.jpg',
      },
    ],
    differenceTitle: 'The Appetite Journeys Difference',
    differenceItems: [
      {
        title: 'More Than a Tour',
        description: 'Our journeys are designed around genuine connection—with local people, regional traditions, and the stories behind what you taste.',
      },
      {
        title: 'Small Groups, Meaningful Access',
        description: 'With groups intentionally limited in size, we can enjoy experiences that larger tours simply cannot offer, from intimate tastings to personal introductions with local producers.',
      },
      {
        title: 'Curated Through Hospitality Experience',
        description: 'Our background in food, beverage, and hospitality shapes every journey. We focus not only on where you go, but how each experience feels.',
      },
      {
        title: 'Slower, More Immersive Travel',
        description: 'Rather than rushing between destinations, we spend time experiencing places properly—lingering over meals, exploring local culture, and embracing the rhythm of each region.',
      },
    ],
    ctaText: 'Explore Our Tours',
  },

  fr: {
    heroTitle: 'Suisse',
    heroSubtitle: 'Terroir Alpin. Vignobles au Bord des Lacs. Générations de Savoir-Faire.',
    regionShapedTitle: 'Une Région Façonnée par la Tradition, le Paysage et l\'Hospitalité',
    regionShapedText: 'L\'identité culinaire suisse a été façonnée par les montagnes, les lacs, les routes commerciales et des générations de traditions régionales fièrement préservées. Dans un pays où la géographie change dramatiquement en quelques heures, les saveurs, les techniques et les influences culturelles qui définissent chaque région en font autant.\n\nLes influences françaises, allemandes et italiennes laissent toutes leur marque, mais la cuisine suisse reste incontestablement la sienne—profondément liée à la saisonnalité, à l\'artisanat et à la provenance locale. Des traditions fromagères alpines transmises de génération en génération aux terrasses de vignobles surplombant les lacs glaciaires, la nourriture n\'est pas simplement consommée ici ; elle reflète le lieu, le climat et la communauté.\n\nL\'hospitalité forme également une partie essentielle de l\'expérience suisse. Les grands hôtels au bord des lacs, les auberges de montagne, les cafés historiques et les caves familiales contribuent tous à une culture où la qualité, le soin et l\'attention aux détails sont tranquillement intégrés à la vie quotidienne.\n\nPour Appetite Journeys, la Suisse offre quelque chose de rare : des paysages extraordinaires associés à un patrimoine culinaire tout aussi riche, vécu à un rythme plus lent et plus personnel.',
    uniqueTitle: 'Ce Qui Rend Cette Région Unique',
    uniqueItems: [
      {
        title: 'Les Paysages Qui Façonnent la Cuisine',
        description: 'Des vallées alpines aux vignobles au bord des lacs, la géographie influence directement ce qui est cultivé, produit et servi dans la région.',
      },
      {
        title: 'Une Culture Alimentaire Profondément Régionale',
        description: 'La cuisine suisse change dramatiquement d\'un canton à l\'autre, avec des traditions distinctes, des fromages, des vins, des pains et des spécialités liés à l\'identité locale.',
      },
      {
        title: 'Production Artisanale à Petite Échelle',
        description: 'De nombreux producteurs restent familiaux, préservant les techniques et traditions qui ont été affinées au fil des générations.',
      },
      {
        title: 'Un Carrefour d\'Influences Européennes',
        description: 'L\'élégance française, la générosité allemande et la chaleur italienne se combinent pour créer une culture culinaire unique en Europe.',
      },
    ],
    seasonalTitle: 'Expériences à Travers les Saisons',
    seasonalMonths: [
      {
        month: 'Avril',
        highlights: [
          'Les produits alpins de printemps et les fleurs sauvages s\'éveillent dans les vallées',
          'Les villages calmes avant l\'arrivée des foules estivales',
          'Asperges fraîches, herbes, fromages de printemps et vins régionaux',
          'Les célébrations de Pâques et les festivals locaux du printemps',
          'Timing parfait pour explorer à un rythme tranquille',
        ],
      },
      {
        month: 'Septembre',
        highlights: [
          'La saison des récoltes en plein essor dans toutes les régions',
          'Festivals de vin et célébrations des vendanges partout dans le pays',
          'Lumière d\'automne dorée illuminant les terrasses de vignobles',
          'Champignons, châtaignes et cuisine alpine riche à leur apogée',
          'Les producteurs accueillent les visiteurs pour les dégustations et les événements des vendanges',
        ],
      },
    ],
    experiencesTitle: 'Expériences Emblématiques',
    experiences: [
      {
        title: 'Rencontrer les Producteurs',
        description: 'Passez du temps avec des producteurs locaux passionnés, des vignerons, des fromagers, des boulangers et des artisans qui partagent généreusement leur savoir-faire et leurs histoires.',
        image: 'wetliweinkeller.jpg',
      },
      {
        title: 'Voyages Ferroviaires Pittoresques',
        description: 'Voyagez à travers certains des paysages les plus spectaculaires d\'Europe à bord de trains panoramiques emblématiques et de trajets régionaux.',
        image: 'gexpress1.jpg',
      },
      {
        title: 'Ateliers Pratiques',
        description: 'Participez à des ateliers immersifs où vous pouvez apprendre des techniques suisses traditionnelles, de la fabrication de fromage alpin à l\'artisanat du chocolat, guidé par des experts locaux.',
        image: 'gottlieben2.jpeg',
      },
      {
        title: 'Vue Panoramique',
        description: 'La meilleure façon de voir les montagnes et les alpes est de monter.',
        image: 'niesen_view.jpg',
      },
    ],
    differenceTitle: 'La Différence d\'Appetite Journeys',
    differenceItems: [
      {
        title: 'Plus Qu\'une Visite',
        description: 'Nos voyages sont conçus autour d\'une véritable connexion—avec les gens, les traditions régionales et les histoires derrière ce que vous goûtez.',
      },
      {
        title: 'Petits Groupes, Accès Significatif',
        description: 'Avec des groupes intentionnellement limités en taille, nous pouvons profiter d\'expériences que les plus grands circuits ne peuvent tout simplement pas offrir, des dégustations intimes aux présentations personnelles avec les producteurs locaux.',
      },
      {
        title: 'Curé par l\'Expérience de l\'Hospitalité',
        description: 'Notre expérience en gastronomie, boisson et hospitalité façonne chaque voyage. Nous nous concentrons non seulement sur où vous allez, mais sur la façon dont chaque expérience se déroule.',
      },
      {
        title: 'Voyage Plus Lent et Plus Immersif',
        description: 'Plutôt que de nous précipiter entre les destinations, nous prenons le temps d\'expérimenter les lieux correctement—en savourant les repas, en explorant la culture locale et en embrassant le rythme de chaque région.',
      },
    ],
    ctaText: 'Explorez Nos Voyages',
  },

  de: {
    heroTitle: 'Schweiz',
    heroSubtitle: 'Alpines Terroir. Seeufer-Weinberge. Generationen von Handwerk.',
    regionShapedTitle: 'Eine Region geprägt von Tradition, Landschaft und Gastfreundschaft',
    regionShapedText: 'Die kulinarische Identität der Schweiz wurde durch Berge, Seen, Handelsrouten und Generationen stolz bewahrter regionaler Traditionen geprägt. In einem Land, in dem sich die Geographie innerhalb weniger Stunden dramatisch verändert, tun dies auch die Aromen, Techniken und kulturellen Einflüsse, die jede Region definieren.\n\nFranzösische, deutsche und italienische Einflüsse hinterlassen ihre Spuren, doch die Schweizer Küche bleibt unverkennbar ihre eigene—tief verbunden mit Saisonalität, Handwerk und lokaler Herkunft. Von alpinen Käsetraditionen, die von Generation zu Generation weitergegeben werden, bis zu Weinbergterrassen mit Blick auf Gletscherseen, wird Essen hier nicht einfach konsumiert; es spiegelt Ort, Klima und Gemeinschaft wider.\n\nGastfreundschaft ist auch ein wesentlicher Teil der Schweizer Erfahrung. Große Seeufer-Hotels, Berghütten, historische Cafés und familiengeführte Weinkeller tragen alle zu einer Kultur bei, in der Qualität, Sorgfalt und Aufmerksamkeit zum Detail ruhig in den Alltag eingebettet sind.\n\nFür Appetite Journeys bietet die Schweiz etwas Seltenes: außergewöhnliche Landschaften gepaart mit ebenso reichem kulinarischem Erbe, erlebt in einem langsameren, persönlicheren Tempo.',
    uniqueTitle: 'Was Diese Region Einzigartig Macht',
    uniqueItems: [
      {
        title: 'Landschaften, Die die Küche Prägen',
        description: 'Von alpinen Tälern bis zu Seeufer-Weinbergen beeinflusst die Geographie direkt, was in der Region angebaut, produziert und serviert wird.',
      },
      {
        title: 'Tiefe Regionale Esskultur',
        description: 'Die Schweizer Küche ändert sich dramatisch von Kanton zu Kanton, mit unterschiedlichen Traditionen, Käsesorten, Weinen, Broten und Spezialitäten, die mit lokaler Identität verbunden sind.',
      },
      {
        title: 'Kleinmaßstäbliche Kunsthandwerk-Produktion',
        description: 'Viele Produzenten bleiben familiengeführt und bewahren Techniken und Traditionen, die über Generationen verfeinert wurden.',
      },
      {
        title: 'Ein Treffpunkt Europäischer Einflüsse',
        description: 'Französische Eleganz, deutsche Herzlichkeit und italienische Wärme verbinden sich zu einer kulinarischen Kultur, die es nirgendwo sonst in Europa gibt.',
      },
    ],
    seasonalTitle: 'Erlebnisse das Ganze Jahr Über',
    seasonalMonths: [
      {
        month: 'April',
        highlights: [
          'Frühjahrals Alpenproduzenten und Wildblumen erwachen in den Tälern',
          'Ruhige Dörfer vor der Ankunft von Sommermassen',
          'Frischer Spargel, Kräuter, Frühjahrskäse und Regionalweine',
          'Oster-Feierlichkeiten und lokale Frühlingsfeste',
          'Perfektes Timing für eine gemächliche Erkundung',
        ],
      },
      {
        month: 'September',
        highlights: [
          'Erntezeit in vollem Gange in allen Regionen',
          'Weinfeste und Traubenfeiern im ganzen Land',
          'Goldenes Herbstlicht beleuchtet Weinbergterrassen',
          'Pilze, Kastanien und reichhaltige alpine Küche auf ihrem Höhepunkt',
          'Produzenten heißen Besucher zu Verkostungen und Ernteereignissen willkommen',
        ],
      },
    ],
    experiencesTitle: 'Charakteristische Erlebnisse',
    experiences: [
      {
        title: 'Die Hersteller Treffen',
        description: 'Verbringen Sie Zeit mit leidenschaftlichen lokalen Produzenten, Winzern, Käsemachern, Bäckern und Kunsthandwerkern, die großzügig ihr Handwerk und ihre Geschichten teilen.',
        image: 'wetliweinkeller.jpg',
      },
      {
        title: 'Malerische Zugfahrten',
        description: 'Reisen Sie durch einige der spektakulärsten Landschaften Europas an Bord ikonischer Panoramabahnen und regionaler Strecken.',
        image: 'gexpress1.jpg',
      },
      {
        title: 'Praktische Workshops',
        description: 'Nehmen Sie an immersiven Workshops teil, um traditionelle schweizerische Techniken zu erlernen, von der Käseherstellung bis hin zum Schokoladenhandwerk, begleitet von lokalen Experten.',
        image: 'gottlieben2.jpeg',
      },
      {
        title: 'Vogelperspektive Genießen',
        description: 'Die beste Möglichkeit, die Berge und Alpen zu sehen, ist nach OBEN zu gehen.',
        image: 'niesen_view.jpg',
      },
    ],
    differenceTitle: 'Der Unterschied von Appetite Journeys',
    differenceItems: [
      {
        title: 'Mehr Als Eine Reise',
        description: 'Unsere Reisen sind um echte Verbindung herum gestaltet—mit lokalen Menschen, regionalen Traditionen und den Geschichten hinter dem, was Sie kosten.',
      },
      {
        title: 'Kleine Gruppen, Sinnvoller Zugang',
        description: 'Mit absichtlich kleinen Gruppen können wir Erlebnisse genießen, die größere Reisen einfach nicht bieten können, von intimen Verkostungen bis hin zu persönlichen Vorstellungen bei lokalen Produzenten.',
      },
      {
        title: 'Kuratiert Durch Gastfreundschaftserfahrung',
        description: 'Unsere Erfahrung in Gastronomie, Getränken und Gastfreundschaft prägt jede Reise. Wir konzentrieren uns nicht nur darauf, wohin Sie gehen, sondern wie sich jedes Erlebnis anfühlt.',
      },
      {
        title: 'Langsamere, Immersivere Reise',
        description: 'Anstatt zwischen Zielen zu eilen, nehmen wir uns Zeit, um Orte richtig zu erleben—indem wir über Mahlzeiten verweilen, lokale Kultur erkunden und den Rhythmus jeder Region annehmen.',
      },
    ],
    ctaText: 'Entdecken Sie Unsere Reisen',
  },
};

const SwitzerlandAboutPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;
  const content = CONTENT[lang];

  useEffect(() => {
    document.body.setAttribute('data-page', 'switzerland-about');
    return () => document.body.removeAttribute('data-page');
  }, []);

  return (
    <>
      {/* SEO */}
      <SEO {...seoConfig.cheeseChocolateRiviera} />

      {/* Hero Section */}
      <section className="relative h-[52vh] -mx-4 sm:-mx-2 lg:-mx-8 overflow-hidden">
        <img
          src={getImagePath('ch/davos.jpg')}
          alt="Switzerland"
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
            {[('ch/luzern.jpg'), ('ch/bern1.jpg'), ('ch/lavaux3.jpeg')].map((imagePath) => (
              <img
                key={imagePath}
                src={getImagePath(imagePath)}
                alt={`Switzerland landscape`}
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
            src={getImagePath('ch/bern2.jpg')}
            alt="Switzerland culture"
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
            src={getImagePath('ch/GlacierLandwasser.jpg')}
            alt="Switzerland experiences"
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
                  src={getImagePath(`ch/${exp.image}`)}
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
            backgroundImage: `url('${getImagePath('ch/lavaux.jpeg')}')`,
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
            to="/switzerland"
            className="inline-block bg-alpine-green hover:bg-opacity-90 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            {content.ctaText}
          </Link>
        </section>

      </div>
    </>
  );
};

export default SwitzerlandAboutPage;