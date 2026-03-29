import Card from "./Card";

 

export function Project(){

     const cardsData = [
    {
      id: 1,
      title: "Script Generator",
      description: "Script Generator application that helps users quickly create structured and engaging scripts for various purposes. The project focuses on simplicity and efficiency, allowing users to generate content with minimal input while maintaining quality output.",
      image: "/thumbnails/scriptgenerator.png",
      live: "https://v0-you-tube-shorts-script-rosy.vercel.app/",
      github: "https://github.com/ayan-011/script_generator"
    },
    {
      id: 2,
      title: "Ecommerce Project",
      description: "A responsive e-commerce web application with product listings, cart management, and a streamlined checkout flow. Built with a focus on performance, clean UI, and intuitive user experience.",
      image: "/thumbnails/ecommerce.png",
      live: "https://online-store-one-pi.vercel.app/",
      github: "https://github.com/ayan-011/online-store"
    },
    {
      id: 3,
      title: "Sportech",
      description: "Sportech is a sleek showcase website for a modern garage, highlighting its work, services, and features. Get a glimpse of the team's expertise, past projects, and what makes Sportech the go-to garage for car enthusiasts.",
      image: "/thumbnails/sportech.png",
      live: "https://sportech-w5nx.vercel.app/",
      github: "https://github.com/ayan-011/sportech"
    },
    // {
    //   id: 3,
    //   title: "UI Design",
    //   description: "Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale",
    //   image: "img3.jpg",
    //   live: "",
    //   github: "https://github.com/ayan-011"
    // },
  ];

    return (
        <>
           <div className="w-full px-2 py-1 text-sm border-b-[1px] border-[#525252] bg-red-90 text-zinc-300 ">Projects</div>
          
           <div className="bg- grid sm:grid-cols-2 grid-cols-1 md:p-5  gap-2 py-2" >
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          live={card.live}
          github={card.github}
        />
      ))}
    </div>

        </>
    )
}



