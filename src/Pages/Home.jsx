import React from 'react'
import './Home.css'


// -----------------------------------
import SliderData from '../Assets/products'
import { serviceData } from '../Assets/products'
  
function Home() {
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner bg-light">
                    {SliderData.length > 0 ? (
                        SliderData.map((item, id) => (

                            <div className="carousel-item active" key={item.id}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                                <div>
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>

                        ))
                    ) :
                        <div class="spinner-grow text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='service'>
            {serviceData.length > 0 ? (
            serviceData.map((service, index) => (
                 <div key={index} style={{background:service.bg}}>
                    <h2>{service.icon}</h2>
                    <h4>{service.title}</h4>
                    <p>{service.subtitle}</p>
                </div>
                ))):
                <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}
                
            </div>
        </>
    )
}
export default Home

// import { PlusCircle, ShoppingBag, Star } from "react-feather"
// import hero from "../Assets/hero-img.png"

// import productImg01 from '../Assets/double-sofa-01.png';
// import { MdOutlineWallet } from "react-icons/md";
// import { FaCar } from "react-icons/fa";
// import { RiSecurePaymentFill } from "react-icons/ri";
// import { FaHeadphones } from "react-icons/fa";
// import  "./Home.css"
// import { useState } from "react";

// const Home =({count})=>{
//     const [shopping]=useState(
//         {
//         heading:"50% Off For Your\nFirst Shopping",
//         para:"Lorem ipsum dolor sit amet,consectetur adipiscing elit.\n Quit lobortis consequent eu,quam etiam at quis ut\n convallis",

//         }
//     )
//     const [shopping2]=useState(
//         {
//         heading:"Free Shipping",
//         para:"Lorem ipsum dolor sit amet",
//         safe:"Safe Payment",
//         secure:"Secure Payment",
//         guarantee :"Back Guarantee"
        

//         }
//     )

//     const [Discount]=useState({
//         para:"Stone and Beam Westview",
//         rate:"193"
      

//     })
//     // break
//     const headingLines=shopping.heading.split("\n")
//     const paraline=shopping.para.split("\n")
//     const starsArray = new Array(5).fill(null);

//     function click(){
//         alert("hello")
//     }


    

   
//     return(
        
//         <div>
//          <div className="container"> 
//             <div className="row" >
                
//                 <div className="col-md-6" style={{marginTop:"80px"}} >
//                     <h2>
//                      {headingLines.map((line, index) => (
//                 <span key={index}>
//                   {line}
//                   {index !== headingLines.length - 1 && <br />}
//                 </span>
//               ))}</h2>
//                     <p>
//                         {
//                             paraline.map((para,index)=>(
//                                 <span>{para} {index !== paraline.length - 1 && <br />}</span>
//                             ))
//                         }
//                     </p>
//                     <button>Visit collections</button>

//                 </div>
//                 <div className="col-md-6">
//                     <img src={hero} alt="Hero Image"/>
//                  </div>
                
           
//             </div>
                
            
//             </div>

//             {/* cards */}
//             <div className="container" >
//                 <div className="row">
//                         <div className="col-md-3">
//                             <div className="card" style={{backgroundColor:"yellow",width:"265px"}}>
//                                 <h1><FaCar /></h1>
//                                 <h2>{shopping2.heading}</h2>
//                                  <p>{shopping2.para}</p>
//                             </div>
                       
//                         </div>

//                         <div className="col-md-3">
//                             <div className="card" style={{backgroundColor:"skyblue",width:"265px"}}>
//                                 <h1><MdOutlineWallet/></h1>
//                                 <h2>{shopping2.safe}</h2>
//                                 <p>{shopping2.para}</p>

//                             </div>
                       
//                         </div>

//                         <div className="col-md-3">
//                             <div className="card" style={{backgroundColor:"lightgreen", width:"295px"}}>
//                                 <h1><RiSecurePaymentFill /></h1>
//                                 <h2>{shopping2.secure}</h2>
//                                 <p>{shopping2.para}</p>

//                             </div>
                       
//                         </div>

//                         <div className="col-md-3">
//                             <div className="card" style={{backgroundColor:"purple",width:"295px",marginLeft:"30px"}}>
//                                  <h1><FaHeadphones /></h1>
//                                  <h2>{shopping2.guarantee}</h2>
//                                 <p>{shopping2.para}</p>

//                             </div>
                       
//                         </div>
                    

//                 </div>

//             </div>


//             {/* Bigg Discount */}
//             <div className="container" >
//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className="card" style={{width:"200px"}}>
//                             <button className="position-absolute top-0 start-0 m-3" 
//                             style={{backgroundColor:"violet",borderRadius:"25px",width:"90px",marginRight:"50px"}}>30%</button>
//                             <img src={productImg01}/>
//                             <p>{Discount.para}</p>
//                             <div className="stars-container">
//                                 {starsArray.map((user, index) => (
//                                 <Star key={index} fill="gold" /> 
//                                 ))}
//                             </div>
//                             <h2>${Discount.rate}</h2>
//                             <h2 onClick={()=>{click()}} className="position-absolute bottom-0 end-0 m-3" 
//                             style={{borderRadius:"50px",width:"25px",height:"25px"}}><PlusCircle/> </h2>



//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                     <div className="card" style={{width:"200px"}}>
//                             <button className="position-absolute top-0 start-0 m-3" 
//                             style={{backgroundColor:"violet",borderRadius:"25px",width:"90px",marginRight:"50px"}}>30%</button>
//                             <img src={productImg01}/>
//                             <p>{Discount.para}</p>
//                             <div className="stars-container">
//                                 {starsArray.map((user, index) => (
//                                 <Star key={index} fill="gold" /> 
//                                 ))}
//                             </div>
//                             <h2>${Discount.rate}</h2>
//                             <h2 onClick={()=>{click()}} className="position-absolute bottom-0 end-0 m-3" 
//                             style={{borderRadius:"50px",width:"25px",height:"25px"}}><PlusCircle/> </h2>



//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                     <div className="card" style={{width:"200px"}}>
//                             <button className="position-absolute top-0 start-0 m-3" 
//                             style={{backgroundColor:"violet",borderRadius:"25px",width:"90px",marginRight:"50px"}}>30%</button>
//                             <img src={productImg01}/>
//                             <p>{Discount.para}</p>
//                             <div className="stars-container">
//                                 {starsArray.map((user, index) => (
//                                 <Star key={index} fill="gold" /> 
//                                 ))}
//                             </div>
//                             <h2>${Discount.rate}</h2>
//                             <h2 onClick={()=>{click()}} className="position-absolute bottom-0 end-0 m-3" 
//                             style={{borderRadius:"50px",width:"25px",height:"25px"}}><PlusCircle/> </h2>



//                         </div>
//                     </div>

//                 </div>

//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className="card" style={{width:"200px"}}>
//                             <button className="position-absolute top-0 start-0 m-3" 
//                             style={{backgroundColor:"violet",borderRadius:"25px",width:"90px",marginRight:"50px"}}>30%</button>
//                             <img src={productImg01}/>
//                             <p>{Discount.para}</p>
//                             <div className="stars-container">
//                                 {starsArray.map((user, index) => (
//                                 <Star key={index} fill="gold" /> 
//                                 ))}
//                             </div>
//                             <h2>${Discount.rate}</h2>
//                             <h2 onClick={()=>{click()}} className="position-absolute bottom-0 end-0 m-3" 
//                             style={{borderRadius:"50px",width:"25px",height:"25px"}}><PlusCircle/> </h2>



//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                     <div className="card" style={{width:"200px"}}>
//                             <button className="position-absolute top-0 start-0 m-3" 
//                             style={{backgroundColor:"violet",borderRadius:"25px",width:"90px",marginRight:"50px"}}>30%</button>
//                             <img src={productImg01}/>
//                             <p>{Discount.para}</p>
//                             <div className="stars-container">
//                                 {starsArray.map((user, index) => (
//                                 <Star key={index} fill="gold" /> 
//                                 ))}
//                             </div>
//                             <h2>${Discount.rate}</h2>
//                             <h2 onClick={()=>{click()}} className="position-absolute bottom-0 end-0 m-3" 
//                             style={{borderRadius:"50px",width:"25px",height:"25px"}}><PlusCircle/> </h2>



//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                     <div className="card" style={{width:"200px"}}>
//                             <button className="position-absolute top-0 start-0 m-3" 
//                             style={{backgroundColor:"violet",borderRadius:"25px",width:"90px",marginRight:"50px"}}>30%</button>
//                             <img src={productImg01}/>
//                             <p>{Discount.para}</p>
//                             <div className="stars-container">
//                                 {starsArray.map((user, index) => (
//                                 <Star key={index} fill="gold" /> 
//                                 ))}
//                             </div>
//                             <h2>${Discount.rate}</h2>
//                             <h2 onClick={()=>{click()}} className="position-absolute bottom-0 end-0 m-3" 
//                             style={{borderRadius:"50px",width:"25px",height:"25px"}}><PlusCircle/> </h2>



//                         </div>
//                     </div>

//                 </div>

//             </div>

            
  
       
//         </div>
//     )
      
// }
// export default Home