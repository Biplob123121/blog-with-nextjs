import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from "swiper"
import Author from "./_child/author";

export default function section1() {

    SwiperCore.use([Autoplay]);

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right",
    }

    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto px-2 md:px-0">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000
                    }}
                >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    ...
                </Swiper>
            </div>
        </section>
    )
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2 gap-6 md:gap-16">
            <div className="image flex justify-center">
                <div>
                    <Link href={"/"}><Image src={"/images/Sea-beach.jpg"} width={600} height={800} alt="" /></Link>
                </div>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800 ">Business, Travel </Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600 ">November 30, 2022</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
                </div>
                <p className="text-gray-500 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat voluptatem iure libero pariatur, culpa quis esse doloremque accusamus, sunt blanditiis, </p>
                <Author></Author>
            </div>
        </div>
    )
}
