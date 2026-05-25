import React from "react";
import { useTranslation } from 'react-i18next';

type Lang = 'en' | 'fr' | 'de';

interface Section {
  heading: { en: string; fr: string; de: string };
  content: { en: React.ReactNode; fr: React.ReactNode; de: React.ReactNode };
}

const TermsAndConditions: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = (['en', 'fr', 'de'].includes(i18n.language) ? i18n.language : 'en') as Lang;

  const pageTitle = {
    en: "Terms & Conditions",
    fr: "Conditions générales",
    de: "Allgemeine Geschäftsbedingungen",
  };

  const subTitle = {
    en: "Gipfel Limited Terms & Conditions",
    fr: "Conditions générales de Gipfel Limited",
    de: "Allgemeine Geschäftsbedingungen der Gipfel Limited",
  };

  const sections: Section[] = [
    {
      heading: {
        en: "1. Operator",
        fr: "1. Opérateur",
        de: "1. Betreiber",
      },
      content: {
        en: <p>Gipfel Limited trading as Gilbert's Group | Appetite Journeys is a tour operator based in Dunedin, New Zealand, specialising in small group tours to Europe, with a particular focus on Switzerland.</p>,
        fr: <p>Gipfel Limited, exerçant sous le nom de Gilbert's Group | Appetite Journeys, est un voyagiste basé à Dunedin, Nouvelle-Zélande, spécialisé dans les circuits en petit groupe en Europe, avec un accent particulier sur la Suisse.</p>,
        de: <p>Gipfel Limited, handelnd als Gilbert's Group | Appetite Journeys, ist ein Reiseveranstalter mit Sitz in Dunedin, Neuseeland, spezialisiert auf Kleingruppenreisen nach Europa, mit besonderem Fokus auf die Schweiz.</p>,
      },
    },
    {
      heading: {
        en: "2. Acknowledgement",
        fr: "2. Acceptation",
        de: "2. Anerkennung",
      },
      content: {
        en: <p>By completing the Tour Registration Form, you acknowledge and accept these Terms and Conditions, as well as any other terms, services, inclusion and exclusions that form part of each tour, as part of the terms of travel.</p>,
        fr: <p>En remplissant le formulaire d'inscription au circuit, vous reconnaissez et acceptez ces conditions générales, ainsi que tout autre terme, service, inclusion et exclusion faisant partie de chaque circuit, dans le cadre des conditions de voyage.</p>,
        de: <p>Mit dem Ausfüllen des Reiseanmeldeformulars erkennen Sie diese Allgemeinen Geschäftsbedingungen sowie alle anderen Bedingungen, Leistungen, Ein- und Ausschlüsse, die Teil jeder Tour sind, an und akzeptieren diese.</p>,
      },
    },
    {
      heading: {
        en: "3. Deposit",
        fr: "3. Acompte",
        de: "3. Anzahlung",
      },
      content: {
        en: (
          <>
            <p className="mb-3">A non-refundable "lifetime" deposit is required at the time of booking. "Lifetime deposit" means this can be transferred to another tour up until 90 days before your original tour departure date.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Should a major event occur which precludes international travel, the deposit will be refunded.</li>
              <li>For cancellations made between 89 and 50 days before tour departure, 50% of the tour cost (less non-refundable deposit) will be made.</li>
              <li>For cancellations made within 49 days of departure, no refunds will be made.</li>
            </ul>
          </>
        ),
        fr: (
          <>
            <p className="mb-3">Un acompte non remboursable « à vie » est requis au moment de la réservation. « Acompte à vie » signifie qu'il peut être transféré à un autre circuit jusqu'à 90 jours avant la date de départ du circuit initial.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Si un événement majeur survient qui empêche les voyages internationaux, l'acompte sera remboursé.</li>
              <li>Pour les annulations effectuées entre 89 et 50 jours avant le départ du circuit, 50 % du coût du circuit (moins l'acompte non remboursable) sera remboursé.</li>
              <li>Pour les annulations effectuées dans les 49 jours précédant le départ, aucun remboursement ne sera effectué.</li>
            </ul>
          </>
        ),
        de: (
          <>
            <p className="mb-3">Bei der Buchung ist eine nicht erstattungsfähige „lebenslange" Anzahlung erforderlich. „Lebenslange Anzahlung" bedeutet, dass diese bis zu 90 Tage vor dem ursprünglichen Abreisedatum auf eine andere Tour übertragen werden kann.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sollte ein schwerwiegendes Ereignis eintreten, das internationale Reisen verhindert, wird die Anzahlung erstattet.</li>
              <li>Bei Stornierungen zwischen 89 und 50 Tagen vor Abreise werden 50 % der Tourkosten (abzüglich der nicht erstattungsfähigen Anzahlung) erstattet.</li>
              <li>Bei Stornierungen innerhalb von 49 Tagen vor Abreise erfolgt keine Erstattung.</li>
            </ul>
          </>
        ),
      },
    },
    {
      heading: {
        en: "4. Payment dates",
        fr: "4. Dates de paiement",
        de: "4. Zahlungstermine",
      },
      content: {
        en: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Deposit (see clause 3 for details) when booking is made.</li>
            <li>Full payment no later than 90 days before tour departure.</li>
          </ul>
        ),
        fr: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Acompte (voir clause 3 pour les détails) au moment de la réservation.</li>
            <li>Paiement intégral au plus tard 90 jours avant le départ du circuit.</li>
          </ul>
        ),
        de: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Anzahlung (siehe Klausel 3 für Details) bei der Buchung.</li>
            <li>Vollständige Zahlung spätestens 90 Tage vor Tourstart.</li>
          </ul>
        ),
      },
    },
    {
      heading: {
        en: "5. Cancellation",
        fr: "5. Annulation",
        de: "5. Stornierung",
      },
      content: {
        en: <p>We reserve the right to cancel any tour, for example if minimum guest numbers are not met. In this case, you are entitled to a full refund; or you can choose to use funds towards a future tour.</p>,
        fr: <p>Nous nous réservons le droit d'annuler tout circuit, par exemple si le nombre minimum de participants n'est pas atteint. Dans ce cas, vous avez droit à un remboursement intégral ; ou vous pouvez choisir d'utiliser les fonds pour un futur circuit.</p>,
        de: <p>Wir behalten uns das Recht vor, jede Tour zu stornieren, zum Beispiel wenn die Mindestanzahl an Gästen nicht erreicht wird. In diesem Fall haben Sie Anspruch auf eine vollständige Rückerstattung oder können die Mittel für eine zukünftige Tour verwenden.</p>,
      },
    },
    {
      heading: {
        en: "6. Pricing",
        fr: "6. Tarification",
        de: "6. Preisgestaltung",
      },
      content: {
        en: <p>Tour costs are correct as posted online at any stage. Final payments due may change depending on currency fluctuations at the time payment is made.</p>,
        fr: <p>Les coûts des circuits sont corrects tels qu'affichés en ligne à tout moment. Les paiements finaux dus peuvent varier en fonction des fluctuations des devises au moment du paiement.</p>,
        de: <p>Die Tourkosten sind korrekt, wie sie zu jedem Zeitpunkt online veröffentlicht werden. Die fälligen Abschlusszahlungen können sich je nach Währungsschwankungen zum Zeitpunkt der Zahlung ändern.</p>,
      },
    },
    {
      heading: {
        en: "7. Solo travellers",
        fr: "7. Voyageurs solo",
        de: "7. Alleinreisende",
      },
      content: {
        en: <p>Tour pricing is based on twin-share arrangements. Solo travellers are required to pay the solo supplement as outlined in the tour information.</p>,
        fr: <p>Le prix du circuit est basé sur un arrangement en chambre double. Les voyageurs solo sont tenus de payer le supplément solo tel qu'indiqué dans les informations sur le circuit.</p>,
        de: <p>Die Tourpreise basieren auf Doppelzimmerbelegung. Alleinreisende müssen den Einzelzimmerzuschlag bezahlen, wie in den Tourinformationen angegeben.</p>,
      },
    },
    {
      heading: {
        en: "8. Passport",
        fr: "8. Passeport",
        de: "8. Reisepass",
      },
      content: {
        en: <p>Your passport must be valid for at least 6 months after the end of your tour. We will require a copy of your passport.</p>,
        fr: <p>Votre passeport doit être valable au moins 6 mois après la fin de votre circuit. Nous aurons besoin d'une copie de votre passeport.</p>,
        de: <p>Ihr Reisepass muss mindestens 6 Monate nach Ende Ihrer Tour gültig sein. Wir benötigen eine Kopie Ihres Reisepasses.</p>,
      },
    },
    {
      heading: {
        en: "9. Visa",
        fr: "9. Visa",
        de: "9. Visum",
      },
      content: {
        en: <p>It is your responsibility to ensure you have visas and any other permits required to visit the countries included in your itinerary.</p>,
        fr: <p>Il vous incombe de vous assurer que vous disposez des visas et de tous autres permis requis pour visiter les pays inclus dans votre itinéraire.</p>,
        de: <p>Es liegt in Ihrer Verantwortung sicherzustellen, dass Sie über die erforderlichen Visa und sonstigen Genehmigungen für die Einreise in die in Ihrem Reiseplan enthaltenen Länder verfügen.</p>,
      },
    },
    {
      heading: {
        en: "10. Travel insurance",
        fr: "10. Assurance voyage",
        de: "10. Reiseversicherung",
      },
      content: {
        en: <p>You are required to have comprehensive travel insurance in place. We recommend this is purchased at the time you book your trip.</p>,
        fr: <p>Vous devez disposer d'une assurance voyage complète. Nous vous recommandons de la souscrire au moment de la réservation de votre voyage.</p>,
        de: <p>Sie müssen über eine umfassende Reiseversicherung verfügen. Wir empfehlen, diese zum Zeitpunkt der Buchung Ihrer Reise abzuschließen.</p>,
      },
    },
    {
      heading: {
        en: "11. Arrival/departure travel",
        fr: "11. Voyage d'arrivée/départ",
        de: "11. An-/Abreise",
      },
      content: {
        en: <p>This is not included in any tour and you are responsible for ensuring you will arrive at your first location by the date and time specified on your tour itinerary.</p>,
        fr: <p>Cela n'est inclus dans aucun circuit et vous êtes responsable de vous assurer que vous arriverez à votre premier lieu à la date et à l'heure spécifiées dans votre itinéraire de circuit.</p>,
        de: <p>Dies ist in keiner Tour inbegriffen und Sie sind dafür verantwortlich, dass Sie zu dem in Ihrem Reiseplan angegebenen Datum und Uhrzeit an Ihrem ersten Ort ankommen.</p>,
      },
    },
    {
      heading: {
        en: "12. Age",
        fr: "12. Âge",
        de: "12. Alter",
      },
      content: {
        en: <p>The minimum age for our tours is 15; all guests under the age of 18 must be accompanied by a guardian. If you are over 75, we may ask for proof of medical clearance to travel.</p>,
        fr: <p>L'âge minimum pour nos circuits est de 15 ans ; tous les participants de moins de 18 ans doivent être accompagnés d'un tuteur. Si vous avez plus de 75 ans, nous pouvons vous demander un certificat médical d'aptitude au voyage.</p>,
        de: <p>Das Mindestalter für unsere Touren beträgt 15 Jahre; alle Gäste unter 18 Jahren müssen von einem Erziehungsberechtigten begleitet werden. Wenn Sie über 75 Jahre alt sind, können wir eine ärztliche Reisefreigabe verlangen.</p>,
      },
    },
    {
      heading: {
        en: "13. Health issues",
        fr: "13. Problèmes de santé",
        de: "13. Gesundheitsfragen",
      },
      content: {
        en: <p>It is your responsibility to ensure your vaccinations are current. We cannot provide any assistance with this and recommend you discuss this with your medical professional.</p>,
        fr: <p>Il vous incombe de vous assurer que vos vaccinations sont à jour. Nous ne pouvons fournir aucune assistance à cet égard et vous recommandons d'en discuter avec votre professionnel de santé.</p>,
        de: <p>Es liegt in Ihrer Verantwortung sicherzustellen, dass Ihre Impfungen aktuell sind. Wir können dabei keine Unterstützung leisten und empfehlen Ihnen, dies mit Ihrem Arzt zu besprechen.</p>,
      },
    },
    {
      heading: {
        en: "14. Communication",
        fr: "14. Communication",
        de: "14. Kommunikation",
      },
      content: {
        en: <p>You are requested to join a tour WhatsApp group to enable ease and timeliness of communication. This will be set up about two weeks before departure.</p>,
        fr: <p>Vous êtes invité à rejoindre un groupe WhatsApp du circuit pour faciliter et accélérer la communication. Ce groupe sera créé environ deux semaines avant le départ.</p>,
        de: <p>Sie werden gebeten, einer Tour-WhatsApp-Gruppe beizutreten, um eine einfache und zeitnahe Kommunikation zu ermöglichen. Diese wird etwa zwei Wochen vor der Abreise eingerichtet.</p>,
      },
    },
    {
      heading: {
        en: "15. Luggage",
        fr: "15. Bagages",
        de: "15. Gepäck",
      },
      content: {
        en: <p>Please keep luggage to a minimum. We recommend no more than one suitcase of 23kg, and hand luggage. You must be able to carry and handle your own luggage at all times.</p>,
        fr: <p>Veuillez limiter vos bagages au minimum. Nous recommandons pas plus d'une valise de 23 kg et des bagages à main. Vous devez être en mesure de porter et de manipuler vos propres bagages à tout moment.</p>,
        de: <p>Bitte reduzieren Sie Ihr Gepäck auf ein Minimum. Wir empfehlen nicht mehr als einen Koffer mit 23 kg und Handgepäck. Sie müssen Ihr eigenes Gepäck jederzeit tragen und handhaben können.</p>,
      },
    },
    {
      heading: {
        en: "16. Smoking/vaping",
        fr: "16. Tabac/vapotage",
        de: "16. Rauchen/Dampfen",
      },
      content: {
        en: <p>Smoking and vaping are not permitted on any of our tour transport, hotel rooms, restaurant or in the general vicinity of group members.</p>,
        fr: <p>Il est interdit de fumer et de vapoter dans tous nos transports de circuit, chambres d'hôtel, restaurants ou à proximité générale des membres du groupe.</p>,
        de: <p>Rauchen und Dampfen sind in unseren Tourfahrzeugen, Hotelzimmern, Restaurants oder in der unmittelbaren Umgebung von Gruppenmitgliedern nicht gestattet.</p>,
      },
    },
    {
      heading: {
        en: "17. Exclusions",
        fr: "17. Exclusions",
        de: "17. Ausschlüsse",
      },
      content: {
        en: <p>Our tour prices do not include extras such as visa fees | personal items | meals, drinks and activities not included in the itinerary | vaccinations | tips/gratuities | laundry | mini bar | data | insurance.</p>,
        fr: <p>Nos prix de circuit n'incluent pas les suppléments tels que les frais de visa | les effets personnels | les repas, boissons et activités non inclus dans l'itinéraire | les vaccinations | les pourboires/gratifications | la blanchisserie | le minibar | les données | l'assurance.</p>,
        de: <p>Unsere Tourpreise beinhalten keine Extras wie Visagebühren | persönliche Gegenstände | Mahlzeiten, Getränke und Aktivitäten, die nicht im Reiseplan enthalten sind | Impfungen | Trinkgelder | Wäscherei | Minibar | Daten | Versicherung.</p>,
      },
    },
    {
      heading: {
        en: "18. Use of images",
        fr: "18. Utilisation des images",
        de: "18. Verwendung von Bildern",
      },
      content: {
        en: <p>You agree that we can use any photo, video or other imagery created during the tour. This includes any media available on the WhatsApp group. Please advise if you do not grant permission for this.</p>,
        fr: <p>Vous acceptez que nous puissions utiliser toute photo, vidéo ou autre image créée pendant le circuit. Cela inclut tout média disponible sur le groupe WhatsApp. Veuillez nous informer si vous n'accordez pas cette permission.</p>,
        de: <p>Sie stimmen zu, dass wir alle während der Tour erstellten Fotos, Videos oder anderen Bilder verwenden dürfen. Dies schließt alle in der WhatsApp-Gruppe verfügbaren Medien ein. Bitte teilen Sie uns mit, wenn Sie diese Genehmigung nicht erteilen.</p>,
      },
    },
    {
      heading: {
        en: "19. Authority",
        fr: "19. Autorité",
        de: "19. Autorität",
      },
      content: {
        en: <p>You are expected to respect the authority of your guides. The guides' decision is final on all matters likely to affect the safety and wellbeing of any member of the tour group. You must comply with local laws and regulations at all times.</p>,
        fr: <p>Vous êtes tenu de respecter l'autorité de vos guides. La décision des guides est définitive pour toutes les questions susceptibles d'affecter la sécurité et le bien-être de tout membre du groupe de circuit. Vous devez vous conformer aux lois et réglementations locales à tout moment.</p>,
        de: <p>Von Ihnen wird erwartet, dass Sie die Autorität Ihrer Reiseleiter respektieren. Die Entscheidung der Reiseleiter ist in allen Fragen, die die Sicherheit und das Wohlbefinden eines Mitglieds der Reisegruppe beeinflussen könnten, endgültig.</p>,
      },
    },
    {
      heading: {
        en: "20. Respect",
        fr: "20. Respect",
        de: "20. Respekt",
      },
      content: {
        en: <p>We ask you to be kind and show respect. Rude, aggressive or abusive behaviour will not be tolerated, and if we are unable to resolve any issues, may result in cancellation of a booking. Unacceptable behaviour includes, but is not limited to: bullying, use of offensive language, threats and discrimination | making ongoing unreasonable demands and/or complaints | generally disruptive behaviour and/or causing communication problems.</p>,
        fr: <p>Nous vous demandons d'être aimable et de faire preuve de respect. Un comportement grossier, agressif ou abusif ne sera pas toléré et, si nous ne pouvons pas résoudre les problèmes, pourrait entraîner l'annulation d'une réservation. Les comportements inacceptables incluent, sans s'y limiter : l'intimidation, l'utilisation d'un langage offensant, les menaces et la discrimination | faire des demandes déraisonnables et/ou des plaintes continues | comportement généralement perturbateur et/ou causant des problèmes de communication.</p>,
        de: <p>Wir bitten Sie, freundlich zu sein und Respekt zu zeigen. Unhöfliches, aggressives oder missbräuchliches Verhalten wird nicht toleriert und kann, wenn wir keine Probleme lösen können, zur Stornierung einer Buchung führen.</p>,
      },
    },
    {
      heading: {
        en: "21. Values",
        fr: "21. Valeurs",
        de: "21. Werte",
      },
      content: {
        en: <p>You are expected to join us in demonstrating high values. This includes, but is not limited to: respecting the environment, local cultures, guides, and other guests | dressing or behaving appropriately according to local customs.</p>,
        fr: <p>Vous êtes invité à partager nos valeurs élevées. Cela inclut, sans s'y limiter : respecter l'environnement, les cultures locales, les guides et les autres participants | s'habiller ou se comporter de manière appropriée selon les coutumes locales.</p>,
        de: <p>Von Ihnen wird erwartet, dass Sie sich uns anschließen und hohe Werte demonstrieren. Dazu gehören u. a.: Respektierung der Umwelt, lokaler Kulturen, Reiseleiter und anderer Gäste | angemessenes Kleiden oder Verhalten gemäß lokalen Gepflogenheiten.</p>,
      },
    },
    {
      heading: {
        en: "22. Safety",
        fr: "22. Sécurité",
        de: "22. Sicherheit",
      },
      content: {
        en: <p>We prioritise the group's safety and enjoyment. We may need to take action, or ask a guest to leave a tour, where behaviour puts anyone at risk. This includes, but is not limited to: ignoring instructions from guides | engaging in reckless, illegal or dangerous behaviour | unmanaged mental health issues that might pose a risk. Dangerous and/or illegal activity will result in immediate removal from the tour, and possible reporting to local authorities.</p>,
        fr: <p>Nous privilégions la sécurité et le plaisir du groupe. Nous pourrions devoir intervenir ou demander à un participant de quitter un circuit si son comportement met quiconque en danger. Cela inclut, sans s'y limiter : ignorer les instructions des guides | se livrer à un comportement imprudent, illégal ou dangereux | problèmes de santé mentale non gérés pouvant présenter un risque.</p>,
        de: <p>Wir priorisieren die Sicherheit und den Genuss der Gruppe. Wir müssen möglicherweise Maßnahmen ergreifen oder einen Gast bitten, eine Tour zu verlassen, wenn das Verhalten jemanden gefährdet.</p>,
      },
    },
    {
      heading: {
        en: "23. No refunds",
        fr: "23. Aucun remboursement",
        de: "23. Keine Erstattungen",
      },
      content: {
        en: <p>There will be no refunds provided where a guest does not use all parts of a tour. This includes early departure (for any reason), or choosing to not partake in accommodation, travel or meals provided as part of the itinerary.</p>,
        fr: <p>Aucun remboursement ne sera effectué si un participant n'utilise pas toutes les parties d'un circuit. Cela inclut le départ anticipé (pour quelque raison que ce soit), ou le choix de ne pas participer à l'hébergement, aux voyages ou aux repas fournis dans le cadre de l'itinéraire.</p>,
        de: <p>Es werden keine Erstattungen geleistet, wenn ein Gast nicht alle Teile einer Tour nutzt. Dies schließt die vorzeitige Abreise (aus welchem Grund auch immer) oder die Entscheidung ein, nicht an der im Reiseplan vorgesehenen Unterkunft, Reise oder den Mahlzeiten teilzunehmen.</p>,
      },
    },
    {
      heading: {
        en: "24. Voiding of agreement",
        fr: "24. Annulation de l'accord",
        de: "24. Ungültigmachung des Vertrags",
      },
      content: {
        en: <p>Your contract with us may be terminated without notice if you do not comply with all reasonable and legal requests. This includes, but is not limited to: not signing required liability waivers | providing false information during the booking process | using suspicious or fraudulent payment methods | not meeting payment deadlines or providing necessary documents | failing to have a valid passport, visas, or necessary permits | not sharing essential safety and trip coordination information with us.</p>,
        fr: <p>Votre contrat avec nous peut être résilié sans préavis si vous ne respectez pas toutes les demandes raisonnables et légales. Cela inclut, sans s'y limiter : ne pas signer les décharges de responsabilité requises | fournir de fausses informations pendant le processus de réservation | utiliser des méthodes de paiement suspectes ou frauduleuses | ne pas respecter les délais de paiement ou fournir les documents nécessaires.</p>,
        de: <p>Ihr Vertrag mit uns kann ohne Vorankündigung gekündigt werden, wenn Sie nicht allen zumutbaren und gesetzlichen Anforderungen entsprechen. Dies schließt u. a. ein: Nichteinhaltung erforderlicher Haftungsverzichte | Angabe falscher Informationen während des Buchungsprozesses | Verwendung verdächtiger oder betrügerischer Zahlungsmethoden.</p>,
      },
    },
    {
      heading: {
        en: "25. Legal jurisdiction",
        fr: "25. Juridiction légale",
        de: "25. Rechtliche Zuständigkeit",
      },
      content: {
        en: <p>These terms and conditions, and any contract to which they apply, are governed by New Zealand law.</p>,
        fr: <p>Ces conditions générales, et tout contrat auquel elles s'appliquent, sont régis par le droit néo-zélandais.</p>,
        de: <p>Diese Allgemeinen Geschäftsbedingungen und alle Verträge, auf die sie Anwendung finden, unterliegen dem neuseeländischen Recht.</p>,
      },
    },
    {
      heading: {
        en: "26. Disclaimers",
        fr: "26. Avertissements",
        de: "26. Haftungsausschlüsse",
      },
      content: {
        en: (
          <ul className="list-disc pl-6 space-y-2">
            <li>We act solely as facilitator of travel experiences and do not own or operate any of the accommodation or activity providers used during any tour.</li>
            <li>We cannot be held liable for any injury, loss, damage, accident, delay, or irregularity that may occur due to circumstances beyond our control. This includes, but is not limited to, changes made by third-party service providers, weather events, political disruptions, or health-related incidents.</li>
            <li>Itineraries are subject to change at any time due to local conditions or operational requirements. We reserve the right to alter or substitute activities, accommodation or transportation where necessary, always with the aim of maintaining the quality and intent of the overall experience.</li>
            <li>We cannot be held liable if a participant is refused entry into a country due to lack of valid passport, visa, vaccinations or other travel documentation.</li>
          </ul>
        ),
        fr: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Nous agissons uniquement en tant que facilitateur d'expériences de voyage et ne possédons ni n'exploitons aucun des prestataires d'hébergement ou d'activités utilisés pendant un circuit.</li>
            <li>Nous ne pouvons être tenus responsables de toute blessure, perte, dommage, accident, retard ou irrégularité pouvant survenir en raison de circonstances indépendantes de notre volonté.</li>
            <li>Les itinéraires sont susceptibles d'être modifiés à tout moment en raison de conditions locales ou d'exigences opérationnelles. Nous nous réservons le droit de modifier ou de substituer des activités, des hébergements ou des transports si nécessaire.</li>
            <li>Nous ne pouvons être tenus responsables si un participant se voit refuser l'entrée dans un pays en raison d'un manque de passeport valide, de visa, de vaccinations ou d'autres documents de voyage.</li>
          </ul>
        ),
        de: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Wir handeln ausschließlich als Vermittler von Reiseerlebnissen und besitzen oder betreiben keine der während einer Tour genutzten Unterkunfts- oder Aktivitätsanbieter.</li>
            <li>Wir können nicht für Verletzungen, Verluste, Schäden, Unfälle, Verzögerungen oder Unregelmäßigkeiten haftbar gemacht werden, die aufgrund von Umständen auftreten, die außerhalb unserer Kontrolle liegen.</li>
            <li>Reisepläne können jederzeit aufgrund lokaler Bedingungen oder betrieblicher Anforderungen geändert werden.</li>
            <li>Wir können nicht haftbar gemacht werden, wenn einem Teilnehmer aufgrund eines fehlenden gültigen Reisepasses, Visums, Impfungen oder anderer Reisedokumente die Einreise in ein Land verweigert wird.</li>
          </ul>
        ),
      },
    },
  ];

  return (
    <div className="bg-white text-slate-800 px-6 sm:px-10 lg:px-24 py-16 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-alpine-green mb-8 text-center">
          {pageTitle[lang]}
        </h1>
        <p className="mb-8 text-center font-semibold">
          {subTitle[lang]}
        </p>

        {sections.map((section, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {section.heading[lang]}
            </h2>
            {section.content[lang]}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;