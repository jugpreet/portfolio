const projectsData = [
  {
    key: "GC",
    title: "Giftcards.com (10/2022 -Present)",
    description:
      "A D2C product is a leading gift card website which provides smiles to customers by offering personalized and custom gift cards.",
  },
  {
    key: "Nimble",
    title: "Nimble (12/2021 -10/2022)",
    description:
      "B2B product which provides giftcards selling platform to n number of different merchants which might help the merchants to grow their business.",
  },
  {
    key: "ShipIn",
    title: "ShipIn (03/2021 – 12/2021)",
    description:
      "Monitoring activities in all the ships of a particular Fleet so that management can get real time information of their ships and take actions if any ALERT situation occurs.",
  },
  {
    key: "Dexox",
    title: "Dexos (01/2021 - 03/2021)",
    description: "A commenting widget that can be integrated in platform.",
  },
  {
    key: "360view",
    title: "360View (11/2020 - 02/2021)",
    description:
      "A platform to monitor the flow of audience in Social platforms such as Twitter, Facebook and others with the help of hashtags, videos, URLs and images shared between audience.",
  },
  {
    key: "ATAI",
    title: "ATAI chat app (10/2020 - 12/2020)",
    description: "A chat app for communication between doctors and patients",
  },
  {
    key: "forex",
    title: "Forex (10/2019 - 01/2020)",
    description:
      "Forex Inbound application is developed to facilitate the automation of data flow between two diﬀerent businesses, bridging them together as an interface.",
  },
];

const Projects = () => {
  return (
    <div className="lg:h-[100vh] p-5 lg:px-40 items-center">
      <h3>My Projects</h3>
      {projectsData.map((item) => (
        <div className="w-9/12 text-xl font-thin" key={item.key}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Projects;
