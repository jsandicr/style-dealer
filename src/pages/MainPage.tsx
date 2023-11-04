import { Layout } from "../components/Layout"
import { Trend } from '../components/Trend'
import { categories } from '../const'
import { CategoryCard } from "../components/CategoryCard"

export const MainPage = () => {
    return(
        <div className="flex flex-col gap-20">
            <Layout>
                <div className="grid lg:grid-cols-3 grid-row-5 lg:grid-rows-2 gap-5 border h-[130vh] md:h-[80vh]">
                    {
                        categories.map((category, index)=>{
                            return(
                                <div key={category.title} className={`relative ${index === 0 ? 'md:col-span-2' : undefined}`}>
                                    <CategoryCard category={category} />
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
            <Layout>
                <Trend />
            </Layout>
        </div>

    )
}