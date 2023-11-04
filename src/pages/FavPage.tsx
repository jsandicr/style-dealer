import { Layout } from "../components/Layout"
import { Separator } from '../components/ui/separator'
import { Trend } from "../components/Trend"
import { ProductCard } from "../components/ProductCard"
import { useFav } from "../hooks/useFav"

export const FavPage = () => {

    const { fav } = useFav()

    return(
        <div>
            <Layout className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 grid-rows-1 md:grid-rows-1 lg:grid-rows-1 gap-10'>
                <div className="col-span-1 md:col-span-3 lg:col-span-3">
                    <span className="text-2xl font-medium">
                        Fav
                    </span>
                    {
                        fav.length === 0 ? <p className="my-5">No hay productos...</p>
                        :
                        <ul className="my-5 flex flex-col gap-5">
                            {
                                fav.map((item)=>{
                                    return (
                                        <li key={item._id}>
                                            <ProductCard isFavorite={true} item={{quantity: 0, product: item, size: undefined}} />
                                            <Separator style={{marginTop: '10px'}}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            </Layout>
            <Layout className='mt-8'>
                <span className="text-2xl font-medium">
                    Tambien te podria interesar
                </span>
                <Trend />
            </Layout>
        </div>
    )
}