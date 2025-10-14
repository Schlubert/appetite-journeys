import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-slate-800 px-6 sm:px-10 lg:px-24 py-16 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-alpine-green mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="mb-6 text-slate-600">
          At Appetite Journeys (a division of The Gilbert’s Group), we respect
          your privacy and are committed to protecting the personal information
          you share with us. This policy explains how we collect, use, and
          safeguard your data in accordance with the New Zealand Privacy Act
          2020 and international best practices.
        </p>

        {/* 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal details:</strong> such as your name, address,
              phone number, and email address provided when you make an enquiry
              or booking.
            </li>
            <li>
              <strong>Travel information:</strong> including passport details,
              dietary preferences, emergency contacts, and medical notes when
              relevant to tour participation.
            </li>
            <li>
              <strong>Payment information:</strong> such as bank transfer or
              credit card details, used solely for processing bookings.
            </li>
            <li>
              <strong>Website and marketing data:</strong> when you visit our
              website, we may collect anonymous analytical information (such as
              page views and browser type) to improve your experience.
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To process and confirm your tour bookings.</li>
            <li>To communicate with you before, during, and after your journey.</li>
            <li>
              To personalise itineraries, special requests, and travel
              arrangements.
            </li>
            <li>
              To meet regulatory, insurance, and health & safety obligations.
            </li>
            <li>
              To send you updates, newsletters, or promotional offers (only if
              you have opted in).
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            3. How We Protect Your Information
          </h2>
          <p>
            Appetite Journeys takes data security seriously. We use secure
            systems and encrypted communication methods to protect personal
            information from loss, misuse, or unauthorised access. Access to
            client data is limited to authorised team members and essential
            service providers.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            4. Sharing Your Information
          </h2>
          <p className="mb-2">
            We share information only when necessary to provide our services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              With trusted travel partners such as hotels, transport operators,
              and guides for operational purposes.
            </li>
            <li>
              With financial institutions to process payments securely.
            </li>
            <li>
              With government agencies or insurers when legally required or
              necessary for travel safety.
            </li>
          </ul>
          <p className="mt-2">
            We never sell or lease your personal information to third parties.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            5. Data Retention
          </h2>
          <p>
            We retain personal information only for as long as necessary to
            fulfil the purpose for which it was collected or to comply with
            legal and accounting requirements. When data is no longer needed, it
            is securely deleted or anonymised.
          </p>
        </section>

        {/* 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            6. Access and Correction
          </h2>
          <p>
            You have the right to request access to the personal information we
            hold about you, and to request corrections if it is inaccurate or
            incomplete. To do so, please contact us at{" "}
            <a
              href="mailto:info@appetitejourneys.com"
              className="text-alpine-green underline hover:text-mountain-blue"
            >
              info@appetitejourneys.com
            </a>
            .
          </p>
        </section>

        {/* 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            7. Cookies and Website Analytics
          </h2>
          <p className="mb-2">
            Our website uses cookies and analytics tools to enhance user
            experience and measure performance. Cookies are small data files
            stored on your device that help us understand how our site is used.
          </p>
          <p>
            You can disable cookies in your browser settings, but some features
            of our website may not function properly without them.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            8. Links to Other Websites
          </h2>
          <p>
            Our website and tour materials may contain links to third-party
            websites. We are not responsible for the content or privacy
            practices of these external sites. We encourage you to review their
            privacy policies before providing personal information.
          </p>
        </section>

        {/* 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            9. Updates to This Policy
          </h2>
          <p>
            This Privacy Policy may be updated periodically to reflect changes
            in legislation or operational practices. The updated version will be
            posted on our website with the revision date clearly shown.
          </p>
        </section>

        {/* 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            10. Contact Us
          </h2>
          <p>
            If you have questions or concerns about this Privacy Policy or how
            your information is handled, please contact us at:
          </p>
          <div className="mt-2 text-slate-700">
            <p><strong>Appetite Journeys</strong></p>
            <p>Dunedin, New Zealand</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@appetitejourneys.com"
                className="text-alpine-green underline hover:text-mountain-blue"
              >
                info@appetitejourneys.com
              </a>
            </p>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-8 text-center">
          Last updated: {new Date().toLocaleDateString("en-NZ", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
