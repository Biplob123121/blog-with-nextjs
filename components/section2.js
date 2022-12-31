import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";


export default function section2() {
    return (
        <section className="container mx-auto px-2 md:px-0 py-10">
            <h1 className="font-bold text-4xl text-center py-12">Latest Posts</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="item">
            <div className="images">
                <Link href={"/"}><Image src={"/images/Sea-beach.jpg"} width={500} height={350} className="rounded" alt="" /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-sm text-orange-600 hover:text-orange-800 ">Business, Travel </Link>
                    <Link href={"/"} className="text-sm text-gray-800 hover:text-gray-600 ">November 30, 2022</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
                </div>
                <p className="text-gray-500 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat voluptatem iure libero pariatur, culpa quis esse doloremque accusamus, sunt blanditiis, </p>
                <Author></Author>
            </div>
        </div>
    )
}
