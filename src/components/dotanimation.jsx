// import { useEffect, useRef } from "react";

// function RedCursor() {
//   const dotRef = useRef(null);

//   useEffect(() => {
//     const dot = dotRef.current;

//     let mouseX = 0;
//     let mouseY = 0;
//     let posX = 0;
//     let posY = 0;

//     const speed = 0.08;

//     const animate = () => {
//       posX += (mouseX - posX) * speed;
//       posY += (mouseY - posY) * speed;

//       dot.style.transform = `translate(${posX}px, ${posY}px)`;
//       requestAnimationFrame(animate);
//     };

//     const moveCursor = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     window.addEventListener("mousemove", moveCursor);
//     requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <div
//       ref={dotRef}
//       className="fixed top-0 left-0 w-5 h-5 bg-red-500 rounded-full 
//       pointer-events-none 
//       z-0 
//       blur-[2px] 
//       shadow-[0_0_40px_15px_rgba(239,68,68,0.6)]"
//     />
//   );
// }

// export default RedCursor;
