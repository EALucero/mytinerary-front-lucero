export default function Slider() {
    return (
        <div className="flex m-48 justify-between">
            <article className="flex-col w-7/12">
                <h2 className="text-3xl font-bold">Find the perfect destination</h2>
                <p className="w-9/12 mt-5">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className="bg-indigo-500 rounded text-white">View More</button>
            </article>
            <img className="w-40 h-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png" alt="" />
        </div>
    )
}