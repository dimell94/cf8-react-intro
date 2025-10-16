import {Link} from "react-router";
import {useEffect} from "react";

const HomePage = () => {
    const links = [
        {path: "/", label: "Home Page"},
        {path: "/name-changer", label: "Name Changer Example"},
        {path: "/examples/timer", label: "Timer Example"}
    ]

    useEffect(() => {
        document.title = "cf8 homepage"
    },[])

    return (
        <>
            <h1 className="text-center my-4 font-bold">Home Page</h1>

            <div className="flex flex-col items-start max-w-sm mx-auto gap-4">
                {links.map((link) => (

                    <Link
                        key={link.path}
                        to={link.path}

                          className="bg-gray-200 w-full px-4 py-2 rounded"
                    >{link.label}</Link>
                ))}






            </div>


        </>
    )
}
export default HomePage;