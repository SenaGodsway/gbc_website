import React from "react";

const Card = ({ title, description, imageSrc, buttonText, buttonAction }) => {
  return (
    <div className="relative flex flex-col justify-between bg-green-100 shadow-lg p-4 rounded-lg w-64 overflow-hidden">
      <div className="absolute inset-0 bg-green-700 opacity-40"></div>
      <div className="relative z-10">
        <img src={imageSrc} alt={title} className="mb-4 rounded-lg w-full h-32 object-cover" />
        <h2 className="font-bold text-white text-xl">{title}</h2>
        <p className="mt-2 text-white">{description}</p>
      </div>
      <button 
        onClick={buttonAction} 
        className="bg-yellow-500 hover:bg-yellow-400 mt-4 px-4 py-2 rounded-full font-semibold text-black transition">
        {buttonText}
      </button>
    </div>
  );
};

const CardsGrid = () => {
  const cardsData = [
    {
      title: "65%",
      description: "17 Thousand People Died. Thousands Injured, Houses and Buildings Destroyed",
      imageSrc: "path_to_image_1",
      buttonText: "Donate now",
      buttonAction: () => alert("Donating"),
    },
    {
      title: "Lifeskills for Children",
      description: "Lifeskills for 2,587 Children in South Africa",
      imageSrc: "path_to_image_2",
      buttonText: "Join community",
      buttonAction: () => alert("Joining community"),
    },
    {
      title: "Education for Orphans",
      description: "Sponsor food, education to Orphans Kenya",
      imageSrc: "path_to_image_3",
      buttonText: "Explore more",
      buttonAction: () => alert("Exploring"),
    },
    // Add more cards here
  ];

  return (
    <div className="flex justify-center gap-6 py-10">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          buttonText={card.buttonText}
          buttonAction={card.buttonAction}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
