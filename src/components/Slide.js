import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './slide.css'
import { Link } from "react-router-dom";
function Slide(){
    return(
        <>
        <Swiper modules={[Navigation
            , Pagination, Autoplay
        ]} className="swiper-container" navigation={true} pagination={{clickable:true}} autoplay={{delay:5000}} loop={true}>
            
        <SwiperSlide className="slide-item">
        <Link to="/melhor-esporte"><img src={require('./pages/imagens/desk_1400x400.avif')} alt=""/> </Link>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
        <img src={require('./pages/imagens/Desk_1400x400_V2.jpg')} alt=""/>
        </SwiperSlide>
        </Swiper>
        </>
    )
}
export default Slide;