import Image from "next/image";
import Formate from "../../layout/formate";
import Author from "../../components/_child/author";
import Related from "../../components/_child/related";

export default function page() {
    return (
        <Formate>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author></Author>
                </div>
                <div className="post py-10">
                    <h1 className="font-bold text-xl md:text-2xl text-center pb-5">Your most unhappy customers are your greatest source of learning</h1>
                    <p className="text-gray-500 text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolore illum, molestiae quisquam debitis nisi, dignissimos possimus esse est enim repudiandae aliquam?</p>
                    <div className="py-10">
                        <Image src={"/images/sea-beach-2.jpg"} width={900} height={600} alt=""/>
                    </div>
                    <div className="content text-gray-600 text-lg flex flex-col gap-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eaque ut aliquid quibusdam eum culpa labore magni asperiores? Unde, rerum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eaque ut aliquid quibusdam eum culpa labore magni asperiores? Unde, rerum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eaque ut aliquid quibusdam eum culpa labore magni asperiores? Unde, rerum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eaque ut aliquid quibusdam eum culpa labore magni asperiores? Unde, rerum.</p>
                    </div>
                </div>
                <Related></Related>
            </section>
        </Formate>
    )
}
