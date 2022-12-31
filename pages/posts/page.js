import Formate from "../../layout/formate";
import Author from "../../components/_child/author";

export default function page() {
    return (
        <Formate>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author></Author>
                </div>
            </section>
        </Formate>
    )
}
