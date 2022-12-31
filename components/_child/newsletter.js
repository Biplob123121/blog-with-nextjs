
export default function newsletter() {
  return (
    <section className="bg-gray-50 mt-20">

        <div className="container mx-auto px-2 md:px-0 py-16 text-center">
            <h1 className="font-bold text-xl">Subscribe Newsletter</h1>
            <div className="py-4">
                <input type="text" className="border rounded shadow w-9/12 px-2 py-2 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter Your Email"/>
            </div>
            <button className="bg-orange-400 px-20 py-2 rounded-full text-gray-50 text-lg font-bold hover:bg-orange-600">
                Subscribe
            </button>
        </div>
    </section>
  )
}
