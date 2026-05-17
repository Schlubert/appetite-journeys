import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import React from "react";
import { getImagePath } from '../utils/paths';
import { useTranslation } from 'react-i18next';

type Lang = 'en' | 'fr' | 'de';

const CONTENT = {
  intro: {
    en: [
      "Between them, Esther and Kevin ensure that every detail is thoughtfully planned, so guests can relax and immerse themselves in the beauty and flavours of Switzerland.",
      "Both bring something special to each tour. Whether it is the insights of someone born and raised in Switzerland, or the knowledge from a lifetime in food and hospitality, their unique understanding of the food and culture of this area means that each tour is an enjoyable, rewarding, and tasty exploration.",
    ],
    fr: [
      "Ensemble, Esther et Kevin veillent à ce que chaque détail soit soigneusement planifié, afin que les voyageurs puissent se détendre et s'immerger dans la beauté et les saveurs de la Suisse.",
      "Tous deux apportent quelque chose de spécial à chaque circuit. Que ce soit les connaissances de quelqu'un né et élevé en Suisse, ou le savoir acquis au cours d'une vie dans l'alimentation et l'hôtellerie, leur compréhension unique de la gastronomie et de la culture de cette région fait de chaque circuit une exploration agréable, enrichissante et savoureuse.",
    ],
    de: [
      "Gemeinsam sorgen Esther und Kevin dafür, dass jedes Detail sorgfältig geplant wird, damit sich die Gäste entspannen und in die Schönheit und die Aromen der Schweiz eintauchen können.",
      "Beide bringen etwas Besonderes in jede Tour ein. Ob die Einblicke einer in der Schweiz geborenen und aufgewachsenen Person oder das Wissen aus einem Leben in der Lebensmittel- und Gastronomiebranche.",
    ],
  },
  esther: {
    en: [
      "Born and raised in Switzerland Esther brings a local's perspective to every tour. Her deep knowledge of Swiss culture, history, and cuisine ensures guests experience the very best of the country and culture.",
      "With the understanding and insights that come from a lifetime in hospitality, Esther is the day to day guide for all activities. Her keen eye for creating meaningful connections with local artisans and communities, along with her fluency in the main 4 languages of Switzerland, help to make each tour welcoming, and unforgettable.",
      "Her knowledge of, and passion for, Swiss food and culture means that every experience is authentic, engaging, and delicious.",
    ],
    fr: [
      "Née et élevée en Suisse, Esther apporte la perspective d'une locale à chaque circuit. Sa connaissance approfondie de la culture, de l'histoire et de la cuisine suisses garantit aux voyageurs de vivre le meilleur du pays et de sa culture.",
      "Forte de la compréhension et des connaissances acquises au cours d'une vie dans l'hôtellerie, Esther est le guide quotidien de toutes les activités. Son sens aigu pour créer des liens significatifs avec les artisans et les communautés locales, ainsi que sa maîtrise des 4 principales langues de Suisse, contribuent à rendre chaque circuit accueillant et inoubliable.",
      "Sa connaissance et sa passion pour la gastronomie et la culture suisses font que chaque expérience est authentique, engageante et délicieuse.",
    ],
    de: [
      "In der Schweiz geboren und aufgewachsen, bringt Esther die Perspektive einer Einheimischen in jede Tour ein. Ihr fundiertes Wissen über Schweizer Kultur, Geschichte und Küche stellt sicher, dass die Gäste das Beste des Landes erleben.",
      "Mit dem Verständnis und den Einblicken, die ein Leben in der Hotellerie mit sich bringt, ist Esther die tägliche Reiseleiterin für alle Aktivitäten. Ihr Gespür für bedeutungsvolle Verbindungen mit lokalen Handwerkern und Gemeinschaften sowie ihre Kenntnisse der 4 Hauptsprachen der Schweiz machen jede Tour willkommen und unvergesslich.",
      "Ihr Wissen und ihre Leidenschaft für Schweizer Lebensmittel und Kultur bedeuten, dass jedes Erlebnis authentisch, ansprechend und köstlich ist.",
    ],
  },
  kevin: {
    en: [
      "Kevin has spent his life in food, beverage, and hospitality. Be it as a baker, chef, pastry chef, managing hotels, wine bars, restaurants, it is fair to say that he has extensive experience.",
      "His experience in the food and beverage industry, combined with his passion for travel, makes him the perfect partner to Esther in creating unforgettable culinary journeys through Switzerland.",
      "Having judged at some the worlds most prestigious culinary competitions, and taught apprentices, bakers, and chefs around the world, Kevin brings a wealth of knowledge and expertise to every tour and is the perfect person to help translate, explain and teach the culinary side of your journey.",
    ],
    fr: [
      "Kevin a passé sa vie dans l'alimentation, les boissons et l'hôtellerie. Que ce soit en tant que boulanger, chef cuisinier, pâtissier, gestionnaire d'hôtels, bars à vins et restaurants, on peut dire qu'il a une expérience étendue.",
      "Son expérience dans l'industrie alimentaire et des boissons, combinée à sa passion pour les voyages, en fait le partenaire idéal d'Esther pour créer des voyages culinaires inoubliables à travers la Suisse.",
      "Ayant officié comme juge dans certaines des compétitions culinaires les plus prestigieuses du monde, et enseigné à des apprentis, boulangers et chefs aux quatre coins du globe, Kevin apporte une richesse de connaissances et d'expertise à chaque circuit.",
    ],
    de: [
      "Kevin hat sein Leben der Lebensmittel-, Getränke- und Gastronomiebranche gewidmet. Ob als Bäcker, Koch, Konditor oder Manager von Hotels, Weinbars und Restaurants – er verfügt über umfangreiche Erfahrung.",
      "Seine Erfahrung in der Lebensmittel- und Getränkebranche, kombiniert mit seiner Reiselleidenschaft, macht ihn zum perfekten Partner für Esther bei der Gestaltung unvergesslicher kulinarischer Reisen durch die Schweiz.",
      "Als Juror bei einigen der renommiertesten Kochwettbewerbe der Welt und als Lehrer für Lehrlinge, Bäcker und Köche auf der ganzen Welt bringt Kevin ein umfangreiches Wissen und Fachwissen in jede Tour ein.",
    ],
  },
  philosophy: {
    en: [
      "At Appetite Journeys, we believe that travel is about more than just visiting beautiful placesit's about creating experiences that leave lasting memories. Our tours are carefully designed to balance comfort with adventure, tradition with discovery, and fun with meaning. We want every guest to feel like they're traveling with friends, not just guides.",
      "From savoring the finest Swiss cheese and chocolate to uncovering hidden alpine villages, we strive to share the Switzerland we loveauthentic, welcoming, and unforgettable.",
    ],
    fr: [
      "Chez Appetite Journeys, nous croyons que le voyage est bien plus que visiter de beaux endroitsil s'agit de créer des expériences qui laissent des souvenirs durables. Nos circuits sont soigneusement conçus pour équilibrer confort et aventure, tradition et découverte, plaisir et sens. Nous voulons que chaque voyageur ait l'impression de voyager avec des amis, pas seulement des guides.",
      "De la dégustation des meilleurs fromages et chocolats suisses à la découverte de villages alpins cachés, nous nous efforçons de partager la Suisse que nous aimonsauthentique, accueillante et inoubliable.",
    ],
    de: [
      "Bei Appetite Journeys glauben wir, dass Reisen mehr bedeutet als nur schöne Orte zu besuchenes geht darum, Erlebnisse zu schaffen, die bleibende Erinnerungen hinterlassen. Unsere Touren sind sorgfältig darauf ausgelegt, Komfort mit Abenteuer, Tradition mit Entdeckung und Spaß mit Bedeutung zu verbinden.",
      "Von der Verkostung der feinsten Schweizer Käse- und Schokoladenspezialitäten bis zur Entdeckung versteckter Alpendörferwir teilen die Schweiz, die wir lieben: authentisch, einladend und unvergesslich.",
    ],
  },
};

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;

  return (
    <>
      <SEO {...seoConfig.about} />
      <div className="space-y-16">

        {/* Hero Banner */}
        <section className="relative h-[45vh] -mx-4 sm:-mx-6 lg:-mx-8">
          <img
            src={getImagePath('about-banner.jpg')}
            alt="Scenic Swiss Alps"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">
                {t('about.heroTitle')}
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="text-gray-700 text-lg leading-relaxed mt-4 mx-8 lg:mx-16">
          {CONTENT.intro[lang].map((para, idx) => (
            <p key={idx} className={idx > 0 ? "mt-4" : ""}>
              {para}
            </p>
          ))}
        </section>

        {/* Profiles Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">

            {/* Esther */}
            <div>
              <img
                src={getImagePath('esther.jpg')}
                alt="Esther Gilbert"
                className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-6"
              />
              <h2 className="text-2xl font-serif font-bold text-alpine-green mb-2">
                Esther Gilbert
              </h2>
              {CONTENT.esther[lang].map((para, idx) => (
                <p key={idx} className={`text-gray-700 text-lg leading-relaxed${idx > 0 ? " mt-4" : ""}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* Kevin */}
            <div>
              <img
                src={getImagePath('kevin.jpg')}
                alt="Kevin Gilbert"
                className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-6"
              />
              <h2 className="text-2xl font-serif font-bold text-alpine-green mb-2">
                Kevin Gilbert
              </h2>
              {CONTENT.kevin[lang].map((para, idx) => (
                <p key={idx} className={`text-gray-700 text-lg leading-relaxed${idx > 0 ? " mt-4" : ""}`}>
                  {para}
                </p>
              ))}
            </div>

          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-snow-white py-6 px-6 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-alpine-green mb-6">
              {t('about.philosophy')}
            </h2>
            {CONTENT.philosophy[lang].map((para, idx) => (
              <p key={idx} className={`text-gray-700 text-lg leading-relaxed${idx > 0 ? " mt-6" : ""}`}>
                {para}
              </p>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;