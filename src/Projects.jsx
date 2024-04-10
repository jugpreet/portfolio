const projectsData = [
  {
    key: "GC",
    title: "Giftcards.com",
    date:"(10/2022 -Present)",
    description:
      "A D2C product is a leading gift card website which provides smiles to customers by offering personalized and custom gift cards.",
  },
  {
    key: "Nimble",
    title: "Nimble",
    date: "(12/2021 -10/2022)",
    description:
      "B2B product which provides giftcards selling platform to n number of different merchants which might help the merchants to grow their business.",
  },
  {
    key: "ShipIn",
    title: "ShipIn",
    date: "(03/2021 – 12/2021)",
    description:
      "Monitoring activities in all the ships of a particular Fleet so that management can get real time information of their ships and take actions if any ALERT situation occurs.",
  },
  {
    key: "Dexox",
    title: "Dexos",
    date: " (01/2021 - 03/2021)",
    description: "A commenting widget that can be integrated in platform.",
  },
  {
    key: "360view",
    title: "360View",
    date: "(11/2020 - 02/2021)",
    description:
      "A platform to monitor the flow of audience in Social platforms such as Twitter, Facebook and others with the help of hashtags, videos, URLs and images shared between audience.",
  },
  {
    key: "ATAI",
    title: "ATAI chat app",
    date: "(10/2020 - 12/2020)",
    description: "A chat app for communication between doctors and patients",
  },
  {
    key: "forex",
    title: "Forex",
    date: " (10/2019 - 01/2020)",
    description:
      "Forex Inbound application is developed to facilitate the automation of data flow between two diﬀerent businesses, bridging them together as an interface.",
  },
];

const Projects = () => {
  return (
    <div className="p-5 lg:px-40 items-center">
      <h3 className="mb-5">My Projects</h3>
      <div className="grid md:grid-cols-3 md:gap-6 grid-cols-1 gap-1 ">{projectsData.map((item) => (
        <div className="w-9/12 text-xl font-thin  border-solid border-2 rounded-tl-2xl shadow-2xl shadow-grey-500/50 p-4 flex flex-col" key={item.key}>
          <p className="text-orange-950">{item.title}</p>
          <span className="border-b-2">{item.date}</span>
          <p className="mt-2">{item.description}</p>
        </div>
      ))}</div>
    </div>
  );
};
export default Projects;
