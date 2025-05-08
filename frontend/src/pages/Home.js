import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="container ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={80} 
        slidesPerView={1} 
        navigation 
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} 
        
      >
        {listOfPosts.map((value, key) => (
          <SwiperSlide key={key}>
            <div 
              className="post bg-white shadow-md rounded p-4" 
              onClick={() => navigate(`/post/${value.id}`)}
            >
              <div className="title bg-stone-600 font-bold text-lg mb-2">{value.title}</div>
              <div className="body text-gray-700 mb-4">{value.postText}</div>
              <div className="footer bg-stone-600 text-gray-500 text-right">{value.username}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
