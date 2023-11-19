import React from "react"
import { Category } from "../types"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

interface Props {
    category: Category
}

export const CategoryCard: React.FC<Props> = ({category}) => {
    return(
        <>
            <figure className="h-full w-full absolute">
                <img src={category.img} alt={category.title} className="object-cover object-center h-full w-full" />
            </figure>
            <div className="h-full w-full absolute border z-10 flex justify-center items-center flex-col text-white" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                {category.title}
                <Link to={`/products/${category.title}`}>
                    <Button className="m-5" variant='secondary'>
                        View
                    </Button>
                </Link>
            </div>
        </>
    )
}