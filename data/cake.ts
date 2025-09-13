export const cake = {
  name: "The cake Trail",
  heroImage: "images/cake-banner.jpg",
  theme: "Festive Tour",
  durationDays: 14,
  price: "COMING SOON",
  departureDates: ["COMING SOON"],
  summary:
    "Get yourself in the festive spirit with this 14-day tour of Switzerland. From Zurich’s cake markets to Lucerne’s twinkling lights, this tour is a magical experience.",
  itinerary: [
    {
      day: 1,
      title: "Basel Free Day",
      description:[ `Your opportunity to explore the city of Basel at your leisure. You can visit the Kunstmuseum, the Fondation Beyeler, or the Vitra Design Museum. 
If those don't interest you, then you can take a walk along the Rhine river or visit the Tinguely Fountain.`],
      accommodation: "Hotel Basel or similar",
      includedActivities: ["Museum entry suggestions", "City walking map provided"],
      optionalActivities: [
        "Excursion to the Black Forest (Germany) to visit Café Schäfer and taste the original Schwarzwälder Kirschtorte (Black Forest Gateau)"
      ],
      meals: ["Breakfast"],
      images: ["../images/black_forest_gat.jpg", "../images/triberg1.jpg", "../images/triberg2.jpg"]
    },
    // ➕ add more days as needed
  ]
}
