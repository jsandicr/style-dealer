import { Link } from "react-router-dom"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "./ui/navigation-menu"
import { categories } from "../const"

export const CategoriesNav = () => {
    return(
        <NavigationMenu className="z-20">
            <NavigationMenuList>
                {
                    categories.map(({title: categoryTitle, subcategories})=>
                        <NavigationMenuItem key={categoryTitle}>
                            <NavigationMenuTrigger>{categoryTitle}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-${subcategories.length <= 2 ? subcategories.length + 1 : subcategories.length} lg:w-[600px]`}>
                                    {
                                        subcategories.map(({title, list}) => 
                                            <li key={title} className="flex flex-col">
                                                    <span className="text-xl font-medium">{title}</span>
                                                    {
                                                        list.map(({title})=> 
                                                            <Link key={title} to={`/products/${categoryTitle}/${title}`}>
                                                                {title}
                                                            </Link>
                                                        )
                                                    }
                                            </li>
                                        )
                                    }
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}