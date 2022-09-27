// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
// import a1 from "./Images/b1.jpg";
// import a2 from "./Images/b2.jpg";
// import a3 from "./Images/b3.jpg";
// import a4 from "./Images/b4.jpg";
// import a5 from "./Images/b5.jpg";
// import a6 from "./Images/b6.jpg";
// import a7 from "./Images/b7.jpg";
// import a8 from "./Images/b8.jpg";
// import a9 from "./Images/b9.jpg";
// import a10 from "./Images/b10.jpg";
// import a11 from "./Images/b11.jpg";
// import a12 from "./Images/b12.jpg";
// import a13 from "./Images/b13.jpg";
// import { useState } from "react";

// const images = [a1,a2,a3,a4,a5,a6,a7,a9,a10,a11,a12,a13]

// export const ReactGallery = () => {
//     const [data, setData] = useState({img:"", i: 0})

//     const viewImage = (img, i) => {
//         setData({img, i})
//     }
//     const imgAction = (action) => {
//         let i = data.i;
//         if(action === "next-img"){
//             setData({img: images[i+1], i: i+1})
//         }
//         if(action === "prev-img"){
//             setData({img: images[i-1], i: i-1})
//         }
//         if(!action){
//             setData({img: "", i: 0})
//         }
//     }
//     return(
//         <>
//         {data.img && 
//             <div style={{
//                 width: "30%",
//                 height: "30vh",
//                 background: "black",
//                 position: "fixed",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 margin:"auto",
//                 overflow: "hidden",
//                 marginLeft:"20%"
//             }}>
//                 <button onClick={() => imgAction()} style={{position: "absolute", top: "10px", right: "10px"}}>X</button>
//                 <button onClick={() => imgAction("prev-img")}>Prev</button>
//                 <img src={data.img} alt="" style={{width: "auto", maxWidth: "50%", maxWidth: "50%"}} />
//                 <button onClick={() => imgAction("prev-img")}>Prev</button>
//             </div>
//         }
//         <div style={{padding: "10px"}}>
//             <ResponsiveMasonry
//                 columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
//             >
//                 <Masonry gutter="20px">
//                     {images.map((e,i) => (
//                         <img key={i} src={e} alt=""
//                         style={{width: "100%", display: "block", cursor: "pointer"}}
//                         onClick={() => viewImage(e,i)}/>
                        
//                     ))}
                   
//                 </Masonry>
//             </ResponsiveMasonry>
//         </div>
//         </>
//     )
// }