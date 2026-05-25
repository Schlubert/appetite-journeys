import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ContentDisplay from '../components/ContentDisplay';
import { useTranslation } from 'react-i18next';

type Lang = 'en' | 'fr' | 'de';

interface FaqItem {
  question: { en: string; fr: string; de: string };
  answer: { en: string; fr: string; de: string };
}

const FAQS: FaqItem[] = [
  {
    question: {
      en: "What is included in the tour price?",
      fr: "Qu'est-ce qui est inclus dans le prix du circuit ?",
      de: "Was ist im Tourpreis inbegriffen?",
    },
    answer: {
      en: `
        <p>We've tried to include as much as possible in the tour price while still leaving the chance for you to make the trip 'yours'. Included in the price are:</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Hotel accommodation (twin share)</li>
          <li>Daily breakfasts</li>
          <li>Lunches and dinners provided varies by tour.</li>
          <li>All transportation within Switzerland including air conditioned coach transport, trains, and funiculars (when as part of the tour)</li>
          <li>All activities mentioned in the itinerary</li>
          <li>Services of an experienced tour leader fluent in the languages of Switzerland</li>
          <li>Insights and explanations from a baker and chef with more than 30 years experience in the food industry</li>
          <li>All entrance fees for places visited as part of the tour</li>
          <li>All applicable taxes</li>
          <li>Luggage transfers between hotels</li>
          <li>Special Appetite Journeys gifts</li>
          <li>Advice and support prior to and during the tour including travel tips, plus lots of foodie and insider recommendations</li>
        </ul>
      `,
      fr: `
        <p>Nous avons essayé d'inclure autant que possible dans le prix du circuit tout en vous laissant la possibilité de personnaliser votre voyage. Le prix comprend :</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Hébergement en hôtel (chambre double)</li>
          <li>Petits-déjeuners quotidiens</li>
          <li>Les déjeuners et dîners inclus varient selon le circuit.</li>
          <li>Tous les transports en Suisse, y compris le car climatisé, les trains et les funiculaires (lorsqu'ils font partie du circuit)</li>
          <li>Toutes les activités mentionnées dans l'itinéraire</li>
          <li>Services d'un guide expérimenté parlant couramment les langues de Suisse</li>
          <li>Conseils et explications d'un boulanger et chef cuisinier avec plus de 30 ans d'expérience</li>
          <li>Tous les droits d'entrée pour les lieux visités dans le cadre du circuit</li>
          <li>Toutes taxes applicables</li>
          <li>Transferts de bagages entre les hôtels</li>
          <li>Cadeaux spéciaux Appetite Journeys</li>
          <li>Conseils et soutien avant et pendant le circuit, y compris des recommandations gastronomiques et d'initiés</li>
        </ul>
      `,
      de: `
        <p>Wir haben versucht, so viel wie möglich im Tourpreis zu inkludieren. Im Preis inbegriffen sind:</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Hotelunterkunft (Doppelzimmer)</li>
          <li>Tägliches Frühstück</li>
          <li>Mittagessen und Abendessen variieren je nach Tour.</li>
          <li>Alle Transporte in der Schweiz inkl. klimatisiertem Reisebus, Zügen und Seilbahnen</li>
          <li>Alle im Reiseplan erwähnten Aktivitäten</li>
          <li>Leistungen eines erfahrenen Reiseleiters mit Sprachkenntnissen</li>
          <li>Einblicke eines Bäckers und Kochs mit mehr als 30 Jahren Erfahrung</li>
          <li>Alle Eintrittsgelder für besuchte Orte</li>
          <li>Alle anfallenden Steuern</li>
          <li>Gepäcktransfer zwischen den Hotels</li>
          <li>Besondere Appetite Journeys Geschenke</li>
          <li>Beratung und Unterstützung vor und während der Tour</li>
        </ul>
      `,
    },
  },
  {
    question: {
      en: "What is NOT included in the tour price?",
      fr: "Qu'est-ce qui N'est PAS inclus dans le prix du circuit ?",
      de: "Was ist NICHT im Tourpreis inbegriffen?",
    },
    answer: {
      en: `
        <ul class="list-disc list-inside space-y-1">
          <li>International flights or travel to/from start/end points</li>
          <li>Travel insurance (obligatory)</li>
          <li>Visa / ETAs</li>
          <li>Beverages and snacks (when not as part of the activities)</li>
          <li>Personal expenses</li>
          <li>Tip kitty</li>
          <li>Optional excursions</li>
          <li>Meals not mentioned in the itinerary</li>
        </ul>
      `,
      fr: `
        <ul class="list-disc list-inside space-y-1">
          <li>Vols internationaux ou transport vers/depuis les points de départ/arrivée</li>
          <li>Assurance voyage (obligatoire)</li>
          <li>Visa / AVE</li>
          <li>Boissons et collations (hors activités incluses)</li>
          <li>Dépenses personnelles</li>
          <li>Cagnotte pour les pourboires</li>
          <li>Excursions optionnelles</li>
          <li>Repas non mentionnés dans l'itinéraire</li>
        </ul>
      `,
      de: `
        <ul class="list-disc list-inside space-y-1">
          <li>Internationale Flüge oder Anreise zu/von den Start-/Endpunkten</li>
          <li>Reiseversicherung (obligatorisch)</li>
          <li>Visa / ETAs</li>
          <li>Getränke und Snacks (außerhalb der inkludierten Aktivitäten)</li>
          <li>Persönliche Ausgaben</li>
          <li>Trinkgeldkasse</li>
          <li>Optionale Ausflüge</li>
          <li>Im Reiseplan nicht erwähnte Mahlzeiten</li>
        </ul>
      `,
    },
  },
  {
    question: {
      en: "What are the payment terms?",
      fr: "Quelles sont les conditions de paiement ?",
      de: "Was sind die Zahlungsbedingungen?",
    },
    answer: {
      en: `
        <ul class="list-disc list-inside space-y-1">
          <li>All pricing is correct as at October 2025</li>
          <li>Prices are subject to change based on exchange rate fluctuations</li>
          <li>Payment Method:
            <ul class="list-[circle] pl-6 mt-1 space-y-1">
              <li>Bank Transfer</li>
              <li>All payments are made in New Zealand dollars</li>
              <li>20% deposit is required at time of booking (non-refundable*)</li>
              <li>Final balance is due 90 days before departure.</li>
            </ul>
          </li>
        </ul>
        <p class="mt-4 text-xs italic text-gray-600">
          *For more information on our cancellation policy, please see our Terms and Conditions.
        </p>
      `,
      fr: `
        <ul class="list-disc list-inside space-y-1">
          <li>Tous les prix sont corrects à partir d'octobre 2025</li>
          <li>Les prix peuvent être modifiés en fonction des fluctuations des taux de change</li>
          <li>Mode de paiement :
            <ul class="list-[circle] pl-6 mt-1 space-y-1">
              <li>Virement bancaire</li>
              <li>Tous les paiements sont effectués en dollars néo-zélandais</li>
              <li>Un acompte de 20 % est requis au moment de la réservation (non remboursable*)</li>
              <li>Le solde final est dû 90 jours avant le départ.</li>
            </ul>
          </li>
        </ul>
        <p class="mt-4 text-xs italic text-gray-600">
          *Pour plus d'informations sur notre politique d'annulation, veuillez consulter nos Conditions générales.
        </p>
      `,
      de: `
        <ul class="list-disc list-inside space-y-1">
          <li>Alle Preise sind korrekt ab Oktober 2025</li>
          <li>Preise können sich aufgrund von Wechselkursschwankungen ändern</li>
          <li>Zahlungsmethode:
            <ul class="list-[circle] pl-6 mt-1 space-y-1">
              <li>Banküberweisung</li>
              <li>Alle Zahlungen erfolgen in Neuseeland-Dollar</li>
              <li>20 % Anzahlung bei Buchung erforderlich (nicht erstattungsfähig*)</li>
              <li>Restbetrag ist 90 Tage vor Abreise fällig.</li>
            </ul>
          </li>
        </ul>
        <p class="mt-4 text-xs italic text-gray-600">
          *Weitere Informationen zu unserer Stornierungsrichtlinie finden Sie in unseren Allgemeinen Geschäftsbedingungen.
        </p>
      `,
    },
  },
  {
    question: {
      en: "What fitness level is required?",
      fr: "Quel niveau de forme physique est requis ?",
      de: "Welches Fitnessniveau ist erforderlich?",
    },
    answer: {
      en: "To enjoy this trip, you'll need to be able to spend time on your feet and regularly walk for 3-4 hours without assistance, including regular stints walking uphill. Daily activities might include: walking on uneven and hilly ground, getting on and off various forms of transportation, climbing stairs. You may also encounter over-the-bath showers in some of the accommodations. It will be impossible to enjoy your trip if you're not able to do a walking tour for a full afternoon and be able to keep up with the group. Unfortunately, this tour cannot accommodate people requiring a walking aid.",
      fr: "Pour profiter pleinement de ce voyage, vous devrez être capable de marcher debout pendant 3 à 4 heures sans assistance, y compris des montées régulières. Les activités quotidiennes peuvent inclure : marcher sur un terrain accidenté et vallonné, monter et descendre de différents moyens de transport, gravir des escaliers. Certains hébergements peuvent avoir des douches au-dessus de la baignoire. Il sera impossible de profiter du voyage si vous n'êtes pas capable de faire une visite à pied tout un après-midi et de suivre le groupe. Malheureusement, ce circuit ne peut pas accueillir les personnes nécessitant une aide à la marche.",
      de: "Um diese Reise zu genießen, müssen Sie in der Lage sein, 3-4 Stunden ohne Unterstützung auf den Beinen zu sein, einschließlich regelmäßiger Bergaufstiege. Tägliche Aktivitäten können umfassen: Gehen auf unebenem und hügeligem Gelände, Ein- und Aussteigen aus verschiedenen Transportmitteln, Treppensteigen. Diese Tour kann leider keine Personen aufnehmen, die eine Gehhilfe benötigen.",
    },
  },
  {
    question: {
      en: "How many people are on the tour?",
      fr: "Combien de personnes participent au circuit ?",
      de: "Wie viele Personen nehmen an der Tour teil?",
    },
    answer: {
      en: "Our tours are intimate and personalized, with a maximum of 12 guests per group. That being said, we do require a minimum of 8 guests to run a tour. If we do not reach this minimum, you will be offered a full refund or the option to transfer to another tour.",
      fr: "Nos circuits sont intimes et personnalisés, avec un maximum de 12 participants par groupe. Cela dit, nous exigeons un minimum de 8 participants pour effectuer un circuit. Si nous n'atteignons pas ce minimum, vous vous verrez proposer un remboursement intégral ou la possibilité de vous transférer sur un autre circuit.",
      de: "Unsere Touren sind intim und persönlich, mit maximal 12 Gästen pro Gruppe. Wir benötigen jedoch mindestens 8 Gäste, um eine Tour durchzuführen. Wenn wir dieses Minimum nicht erreichen, wird Ihnen eine vollständige Rückerstattung oder die Möglichkeit einer Umbuchung angeboten.",
    },
  },
  {
    question: {
      en: "What luggage can I bring?",
      fr: "Quels bagages puis-je apporter ?",
      de: "Welches Gepäck kann ich mitbringen?",
    },
    answer: {
      en: "1 piece (max 23kg) per person with 1 day pack. There is only so much room in the bus, so please keep your luggage to a minimum. We recommend a suitcase or duffel bag with wheels and a day pack for daily excursions.",
      fr: "1 bagage (max 23 kg) par personne avec 1 sac à dos de jour. L'espace dans le bus est limité, veuillez donc réduire vos bagages au minimum. Nous recommandons une valise ou un sac de voyage à roulettes et un sac à dos pour les excursions quotidiennes.",
      de: "1 Gepäckstück (max. 23 kg) pro Person plus 1 Tagesrucksack. Der Platz im Bus ist begrenzt, daher bitten wir Sie, Ihr Gepäck auf ein Minimum zu reduzieren. Wir empfehlen einen Koffer oder eine Reisetasche mit Rollen und einen Tagesrucksack.",
    },
  },
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const { t, i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;

  const handleToggle = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    if (newIndex !== null && faqRefs.current[newIndex]) {
      setTimeout(() => {
        const element = faqRefs.current[newIndex];
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <>
      <SEO {...seoConfig.faq} />
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-alpine-green mb-12 text-center">
          {t('faq.title')}
        </h1>

        <div className="space-y-6">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                ref={(el) => { faqRefs.current[index] = el; }}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition hover:shadow-md"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-mountain-blue text-left">
                    {faq.question[lang]}
                  </h2>
                  {isOpen ? (
                    <ChevronUp className="text-alpine-green w-6 h-6" />
                  ) : (
                    <ChevronDown className="text-alpine-green w-6 h-6" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 bg-white text-gray-700 leading-relaxed animate-fadeIn">
                    <ContentDisplay content={faq.answer[lang]} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FaqPage;