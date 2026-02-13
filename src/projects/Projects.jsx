import Card from "./Card";

 

export function Project(){

     const cardsData = [
    {
      id: 1,
      title: "Web Development",
      description: "Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale.",
      image: "img1.jpg",
      live: "https://www.mihircodes.in/",
      github: "https://www.mihircodes.in/"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale.",
      image: "img2.jpg",
      live: "",
      github: ""
    },
    {
      id: 3,
      title: "UI Design",
      description: "Redefined UI building for developers. Quickly add components, themes, and responsive layouts to your app at any scale",
      image: "img3.jpg",
      live: "",
      github: ""
    },
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



