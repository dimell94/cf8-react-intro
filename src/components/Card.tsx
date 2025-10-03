import type {ReactNode} from "react";

type CardProps = {
    title: string;
    children: ReactNode
}

const Card = ({title, children} :CardProps) => {
    return(
        <>
            <div className="card text-center text-cf-dark-red bg-gray-400 mx-40">
                <h2>{title}</h2>
                {children}
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

        </>
    )
}
export default Card;