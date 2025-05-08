import React from 'react'
import { useEffect ,useState} from 'react'
import Gambar0 from '../Img2/Produk 10.jpeg'
import { Link } from 'react-router-dom'
import Gambar1 from '../img/leaf-1.png'
import Gambar2 from '../img/leaf-2.png'
import Gambar001 from '../img/leaf-3.png'
import Gambar002 from '../Img2/Produk 4.jpeg'
import Gambar003 from '../Img2/Produk 3.jpeg'
import Gambar004 from '../Img2/Produk 2.jpeg'
import Gambar005 from '../Img2/Produk 5.jpeg'
import Gambar006 from '../Img2/Produk 6.jpeg'
import Gambar007 from '../Img2/Produk 7.jpeg'
import Gambar008 from '../img/leaf-4.png'
import Gambar010 from '../Img2/Produk 8.jpeg'
import Gambar011 from '../Img2/Produk 9.jpeg'
import Home from './Home'
import Gambar009 from'../img/floral-1.png'
import ScrollReveal from "scrollreveal";




function Content() {
   

    useEffect(() => {
        ScrollReveal().reveal(".reveal", {
          origin: "right", 
          distance: "1000px", 
          duration: 1000,  
          delay: 200,       
          reset: true,   
        });

        ScrollReveal().reveal(".reveal-left", {
            origin: "left", 
            distance: "1000px",
            duration: 1000,  
            delay: 200,     
            reset: true,     
          });

          ScrollReveal().reveal(".reveal-right", {
            origin: "left",
            distance: "1000px", 
            duration: 1000,   
            delay: 200,      
            reset: true,      
          });

        ScrollReveal().reveal(".fade-in", {
            opacity: 0,
            duration: 1200,
            scale: 0.85, 
            reset:true,
            
          });

        ScrollReveal().reveal('.zoom', {
            scale: 1.8,
            opacity: 0,
            duration: 1000,
            easing: 'ease-out',
            reset:true
          });
          
          




      }, []);



   
  return (
    <>
        <header id="navbar" className=" fixed w-full top-0 left-0 z-50">
        <nav className="container flex items-center justify-between h-16 sm:h-20">
            <div className="zoom font-Lobster sm:text-2x1 xl:text-xl ">
                RichBakers.
            </div>


            <div id="nav-menu" className=" absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 
            overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto" >
                <ul className="flex flex-col items-center gap-8 lg:flex-row">
                    <li>
                        <a href="" className="nav-link active"><Link to="/home">Home</Link></a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li>
                        <a href="#popular" className="nav-link">Popular</a>
                    </li>
                    <li>
                        <a href="#review" className="nav-link">Review</a>
                    </li>
                    <li>
                        <a href='# 'className='nav-link'><Link to='/login' >Logout</Link>  </a>
                    </li>
                    
                </ul>

           

                <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden
                ">
                    <img className='' src={Gambar1}/>
                </div>

                <div className="absolute -top-5 left-5 rotate-90 opacity-90 lg:hidden">
                   
                   <img src={Gambar2}/>
        
                </div>

            </div>            

                <div className="text-xl sm:text-xl cursor-pointer z-50 lg:hidden ">
                    <i className="ri-menu-4-line" id="hamburger"></i>
                </div>
            
        </nav>
        </header>

        <section id="home" className="relative">
            <div className="container">
            

                <div className="flex flex-col items-center gap-7 lg:flex-row">              
                    <div className="home__data w-full space-y-5 lg:w-1/2">
                        <h1>
                            <span className="reveal text-yellow-500 font-Lobster">Freshly</span> Baked
                            <br />
                                
                            <span className="reveal text-yellow-500 font-Lobster">Heong Peah</span> Every <br />
                                Day
                        </h1>

                        <p className="fade-in text-lg font-Lobster">
                        Add a touch of sweetness to your environment with our daily baked Heong Peah. Fresh, flavorful, and made with love, every bite brings joy to your day! 🌟
                        </p>
                        
                        <div className="flex justify-center flex-col gap-2 content-center sm:flex-row md:gap-4
                        lg:pt-5 ">
                            <button className="btn border-yellow-300 ">
                                <a href='https://maps.app.goo.gl/E2WBTPZM6kBQPP6n6' target="_blank" className='mr-2'>
                                <span>Visit Now</span>
                                </a>
                                <i className="ri-map-pin-line "></i>
                               
                            </button>
                            
                            <button className="btn btn_outline border-amber-400 ">

                                <a href='https://linktr.ee/richbakery99?fbclid=PAY2xjawHCK9FleHRuA2FlbQIxMQABphqhvMI0b4WqoOJgyjugYJPtEdTb2C47v-lNtaGBqG2XdTyXpgXEDg3Urg_aem_-qVJjUke-_-Wx_kaI3cGxw'target="_blank" className='mr-2'><span>Know More</span>
                                </a>
                                <i className="ri-information-line"></i>

                            </button>

                        </div>

                       

                        <div className="flex items-center gap-5 text-3xl lg:pt-10">
                            <a href='https://www.facebook.com/people/Rich-Bakers/pfbid02EVdoqLi4c58bNvJ3huHqgn6yBTJrbQCBAaWjoDdKzZkkDq8167ZtDVxLuBA88mQwl/' target='_blank'><i className="ri-facebook-fill  hover:text-yellow-500 duration-300 cursor-pointer" href=""></i></a>
                            <i className="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                            <i className="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                            <i className="ri-mail-line hover:text-yellow-500 duration-300 cursor-pointer"></i>


                        </div>
                        
                    </div>

                    <div className="home__image w-full relative lg:w-1/2 ml-12">
                        <img src={Gambar0} alt="home_image" className='reveal' />

                    </div>
                </div>
            </div>
        </section>

        <div className="bg-slate-200 text-green-900 py-20 ">
            <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-4">
              
                <div className="services__card border border-green-900 p-5 cursor-pointer 
                rounded-md hover:shadow-2xl hover:translate-x-5 duration-300 space-y-5">
                    <div className="flex items-center gap-5 ">
                        <i className="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
                        <p className="md-text-lg font-bold">
                            Grab & <br />
                            Gojek
                        </p>
                    </div>

                    <p className="font-Lobster">
                        Available On Grab & Gojek! So You Can Still Enjoy At Home.
                    </p>
                </div>

              
                <div className="services__card border border-green-900 p-5 cursor-pointer 
                rounded-md hover:shadow-2xl hover:translate-x-5 duration-300 space-y-5">
                    <div className="flex items-center gap-5 ">
                        <i className="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl"></i>
                        <p className="md-text-lg font-bold">
                            Fast Respond <br />
                            Service
                        </p>
                    </div>

                    <p className="font-Lobster">
                        Contact +62 822 6885 7326 For Further Information Or Order.
                    </p>
                </div>

                
                <div className="services__card border border-green-900 p-5 cursor-pointer 
                rounded-md hover:shadow-2xl hover:translate-x-5 duration-300 space-y-5">
                    <div className="flex items-center gap-5 ">
                        <i className="ri-cake-3-line text-3xl md:text-4xl xl:text-5xl"></i>
                        <p className="md-text-lg font-bold">
                            Fresh <br />
                            Baked
                        </p>
                    </div>

                    <p className="font-Lobster">
                    Daily-made, ensuring soft texture, rich flavor, and delightful aroma straight from the oven to you. 
                    </p>
                </div>

                <div className="services__card border border-green-900 p-5 cursor-pointer 
                rounded-md hover:shadow-2xl hover:translate-x-5 duration-300 space-y-5">
                    <div className="flex items-center gap-5 ">
                        <i className="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
                        <p className="md-text-lg font-bold">
                            Affordable <br />
                            Price
                        </p>
                    </div>

                    <p className="font-Lobster">
                        High-quality treats that fit your budget, giving you the best value for your money. 
                    </p>
                </div>
            </div>
        </div>

        

        <section id="about" className="relative overflow-hidden">
            <div className="about__leaf absolute -top-8 -right-12 opacity-50">
                <img src={Gambar001}
                className="reveal w-40 md:w-52 xl:w-64"/>
            </div>

            <div className="zoom about__top flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
                <h2 className="title font-Lobster text-yellow-400">
                    About Us
                </h2>
                <p className="max-w-2xl">Follow Instruction for more</p>
            </div>

            <div className="container space-y-10 xl:space-y-0">
                
                <div className="flex flex-col items-center lg:flex-row gap-5">
                
                    <div className="about__item__1-img w-full lg:w-1/2">
                        <img src={Gambar002}alt=""
                        className=" reveal-left w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"/>
                    </div>

                    

                    <div className=" about__item__1-content w-full lg:w-1/2 ">
                        <div className="space-y-5">
                            <h3 className='reveal'>
                            Savor the <span className="text-yellow-500">Taste of</span>  <br />
                            Organic Goodness
                            </h3>
                            <p className="reveal text-slate-200 font-Lobster">
                            At RichBakers, we believe in the power of nature. Our treats are crafted from fresh, organic ingredients to ensure every bite is not only delicious but also good for your health. Join us in celebrating the simplicity and purity of natural living."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
                 
                    <div className=" about__item__2-img w-full lg:w-1/2">
                        <img src={Gambar003} alt="" 
                        className="reveal w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"/>
                    </div>


                    <div className=" about__item__2-content w-full lg:w-1/2 ">
                        <div className="space-y-5">
                            <h3 className='reveal-left'>
                            Discover<br />
                                <span className="text-yellow-500">Health</span> 
                                <br />
                                  in Every Bite
                            </h3>
                            <p className="reveal-left text-slate-200 font-Lobster">
                            "RichBakers is more than just a bakery; it’s a commitment to quality and sustainability. Every product we create is a reflection of our passion for wholesome ingredients and mindful living. Together, let’s make every meal a step towards a healthier, happier you."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="popular" className='bg-slate-200'>
            <div className="popular__top flex flex-col items-center gap-4 text-center mb-10 md:mb-28 ">
                <h2 className="fade-in title font-Lobster text-yellow-400">
                    Our Best Seller
                </h2>
                <p className="fade-in max-w-2xl text-yellow-700">Most Favorito Of Customer</p>
            </div>


            <div className="container w-full grid sm:grid-cols-1 gap-x-8 gap-y-44  md:grid-cols-2  lg:grid-cols-4 py-10">
                
                <div className="reveal-left popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar004}alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className="italic ">
                    Lotus seed paste & salted egg yolk combined with pandan.
                    </p>
                    <h3>
                        Pandan Yolk Lotus
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 18.000</p>

                      
                    </div>
                </div>


                  
                  <div className="reveal-left popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar005} alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className="italic ">
                    Red bean filling made from sweetened & smooth red bean paste.
                    </p>
                    <h3 className='mt-6'>
                        Pia Red Bean
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3">
                         <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 5.000</p>

        
                    </div>
                </div>

                   
                   <div className="reveal popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar006} alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className="italic">
                    Yellow bean filling, made from finely ground yellow beans.


                    </p>
                    <h3 className='mt-6'>
                       Tau Sar <br />Pia
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 5.000</p>
                    </div>

                    
                </div>


                  
                   <div className="reveal popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar007} alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className='italic '>
                    Butter milk filling, made from a rich blend of butter and milk.

                    </p>
                    <h3>
                        Premium Sun Cake
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3 ">
                          <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>    
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 6.000</p>
                    </div>
                </div>   

                <div className="reveal-left popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar010} alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className='italic '>
                    A classic mooncake that combines the richness of salted egg yolk with the smooth sweetness of lotus seed paste.

                    </p>
                    <h3>
                        Signature Yolk Lotus
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3 ">
                          <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>    
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 18.000</p>
                    </div>
                </div>    

                <div className="reveal-left popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar011} alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className='italic '>
                    A traditional pastry filled with sweet and smooth mung bean paste, wrapped in a thin, flaky, and layered crust.

                    </p>
                    <h3>
                        Pia Green Bean
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3 ">
                          <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>    
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 5.000</p>
                    </div>
                </div>    




                <div className="reveal popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar0} alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className='italic '>
                    A Portugese pastry layered crust filled with creamy,sweet,egg custard and  topped with a slightly caramelized surface.

                    </p>
                    <h3>
                        Portugis Egg Tart
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3 ">
                          <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>    
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 6.000</p>
                    </div>
                </div>   

                <div className="reveal popular__card bg-stone-500 p-10 pt-24 rounded-md relative">
                    <img src={Gambar002} alt=""
                    className="w-44 absolute -top-5 left-1/2 transform
                    -translate-x-1/2 -translate-y-1/2 duration-500"/>

                    <p className='italic '>
                    A traditional Chinese pastry with a thin, flaky crust and a sweet filling made from winter melon, flour, and sugar.

                    </p>
                    <h3>
                        Wife <br /> Cake
                    </h3>


                    <div className="flex items-center justify-center text-yellow-500 text-xs py-3 ">
                          <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>    
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="text-xl">Rp 6.000</p>
                    </div>
                </div>   




            </div>
        </section>

        <section id="review" className="relative mb-20 md:mb-28 overflow-hidden">

            <div className="reveal-left review__leaf absolute -top-8 -left-12 opacity-50" >
                <img src={Gambar008} alt=""
                className="w-40 md:w-52 xl:w-64"/>
            </div>    



            <div className=" review__top flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
                <h2 className="fade-in title font-Lobster text-yellow-400">Customer Review</h2>
                <p className="fade-in max-w-2xl">"What Did Our Customers Say?"</p>
            </div>

            <div className=" container">
                <div className="swiper ">
            
                    <Home />

                    <div className="swiper-pagination"></div>

                <div className='flex justify-center'>
                    <button className='bg-emerald-50 text-gray-600'><Link to='/createpost'>Give Us A Review</Link></button>
                </div>
                
                </div>
            </div>
            

        </section>

        <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
     
     
     <div className="footer_icon container mt-16 mb-10 ">
         <div className="border-b border-green-500 relative">
             <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
                 <div className="bg-yellow-100 text-lg text-center space-x-2">
                     <i className="ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                     <i className="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                     <i className="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                     <i className="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                 </div>
             </div>
         </div>
     </div>
 
   
     <div className="footer__content container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 text-center md:text-start">
         
         <div className='reveal-left'>
             <div className="text-7xl text-yellow-300 text-center inline-block">
                 <i className="ri-cake-2-line"></i>
                 <p className="font-Lobster text-xl sm:text-2xl">RichBakers. <br/>
                 All We Care About
                 </p>
             </div>
         </div>
 
         
         <div className='reveal-left'>
             <p className="mb-5 font-bold text-xl ">Rich's</p>
             <div className="flex flex-col gap-1">
                 <a href="#">Rich Baker's</a>
                 <a href="#">Rich Coffee</a>
                 <a href="#">Rich Burger</a>
             </div>
         </div>
 
 
    
         <div className='reveal'> 
             <p className="mb-5 font-bold text-xl ">Service</p>
             <div className="flex flex-col gap-1">
                 <a href="#">Hampers CNY 2024</a>
                 <a href="#">Birthday Cake</a>
                 <a href="#">Sangjit Pia </a>
             </div>
         </div>
 
       
         <div className='reveal'>
             <p className="mb-5 font-bold text-xl ">Contact Us</p>
             <div className="flex flex-col gap-1">
                 <a href="#">+62 822 6885 7326</a>
                 <a href="#">richbakery99@gmail.com</a>
                 <a href="#">Lucky Estate, Blok B No 51 (Besides of Hotel Cardinal Lucky Star)</a>
             </div>
         </div>

         <div className='reveal'>
             <p className="mb-5 font-bold text-xl ">Ordinary Team</p>
             <div className="flex flex-col gap-2">
                 <a href="#">2331028-Wilson</a>
                 <a href="#">2331109-ChrisJohn</a>
                 <a href="#">2331121-Leo</a>
                 <a href="#">2331091-Ricky Andresen</a>
                 <a href="#">2331072-Chandra Susanto</a>
                 
             </div>
         </div>

      
 
     
     </div>
 
   
     <div className="copy__right container "> 
         <p className="text-center mt-10 opacity-50">Copyright &copy; 2024 RichBakers All rights reserved.</p>
     </div>
 
     
     <div className="footer__floral absolute bottom-0 left-0 opacity-25 pointer-events-none">
         <img src={Gambar009} alt="" className="w-full lg:w-1/2" />
     </div>
 </footer>







        </>
 
  )
}

export default Content
