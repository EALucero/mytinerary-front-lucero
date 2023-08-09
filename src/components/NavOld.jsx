export default function NavBar() {
    return (
        <div className="flex justify-evenly mt-5 p-5">
            <h3>My Tinerary</h3>
            <nav className="flex justify-evenly gap-5">
                <a className="p-1" href="">Home</a>
                <a href="">Cities</a>
                <a href="">
                    <button className="bg-indigo-500 rounded text-white p-1" style={"backgroundColor: #4F46E5"}>Login</button>
                </a>
            </nav>
        </div>
    )
}