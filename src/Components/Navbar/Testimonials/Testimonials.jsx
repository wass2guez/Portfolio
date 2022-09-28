import React from 'react'
import './Testimonials.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import profilePic1 from '../../../img/profile1.jpg'
import profilePic2 from '../../../img/profile2.jpg'
import profilePic3 from '../../../img/profile3.jpg'
import profilePic4 from '../../../img/profile4.jpg'

import {Pagination} from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'
const Testimonials = () => {

   const clients = [
        {
            img : profilePic1,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error officia quo explicabo deleniti voluptatum rerum expedita nobis libero fuga ut recusandae fugit sunt eum, perferendis vel ullam numquam porro! ",

        },
        
    
        {
            img : profilePic2 ,
        review : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nisi! Quos eius ea facilis ex quas iure exercitationem fugit tenetur! Asperiores ut eius suscipit placeat maxime eligendi accusantium, unde hic!" ,

        },
        {
            img : profilePic3,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea praesentium consequatur alias dolor ipsa magnam, dignissimos reprehenderit tempore itaque enim quas laudantium neque ex asperiores facere, numquam accusamus nobis? ",

        },
        {
            img : profilePic4,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea praesentium consequatur alias dolor ipsa magnam, dignissimos reprehenderit tempore itaque enim quas laudantium neque ex asperiores facere, numquam accusamus nobis? ",

        }
    ]
  return (
<div className="t-wrapper" id='Testimonials'>
    <div className="t-heading">
        <span>Clients Always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div className=" blur t-blur1"></div>
        <div className="blur t-blur2"></div>
    </div>
    <Swiper 
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{clickable : true}}
    >
       {clients.map((client ,  index)=> {
        return (
            <SwiperSlide key={index} >
                <div className="testimonial">

                <img src={client.img}/>
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        )
       })}
    </Swiper>
</div>
    )
}

export default Testimonials