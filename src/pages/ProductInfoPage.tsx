import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { AddToCartBtn } from "../components/AddToCartBtn";
import { Trend } from "../components/Trend";
import { Product } from '../types';
import { useSize } from "../hooks/useSize";
import { AddToFavBtn } from "../components/AddToFavBtn";

export const ProductInfoPage = () => {
    const { id } = useParams();

    const { sizes } = useSize()

    const [product, setProduct] = useState<Product | undefined>(undefined); 

    useEffect(()=>{
        const fetchProducts = async(id: string) => {
            try{
                const uri_api = import.meta.env.VITE_API_URI+"products";
                const response = await fetch(uri_api+"/"+id)
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const productResult = await response.json()
                setProduct(productResult.product)
                setHoverElement({
                    img: productResult.product.img
                })
            }catch(error){
                console.error("Error fetching data:", error);
            }
        }
        if(id){
            fetchProducts(id)
        }
    }, [id])

    const [hoverElement, setHoverElement] = useState({
        img: ''
    })

    const [sizeSelected, setSizeSelected] = useState('')

    return(
        <div className="relative lg:px-10">
            {!product ? (<p>No se encontro ningun producto</p>) :
            (
            <Layout className="relative grid md:grid-cols-2 lg:grid-cols-2 my-5 gap-2">
                <div>
                    <div className="sticky top-0 flex gap-4 justify-center py-5">
                        <div className="overflow-scroll h-[500px] w-10 md:w-16 lg:w-16 no-scrollbar">
                            <div className="flex flex-col gap-3">
                                <div className="relative">
                                    <figure className="h-16 md:h-20 lg:h-20">
                                        <img
                                            className="object-cover object-center h-full w-full bg-white"
                                            src={product.img}
                                            alt={product.title}
                                            onMouseEnter={() => setHoverElement({
                                                img: product.img
                                            })}
                                        />
                                    </figure>
                                    <div className={`${product.img === hoverElement.img ? 'absolute' : 'hidden'} w-full h-full z-10 top-0 left-0`} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}/>
                                </div>
                                {
                                    product.additionalImages.map((img) => 
                                        <div key={id} className="relative">
                                            <figure className="h-16 md:h-20 lg:h-2">
                                                <img
                                                    className="object-cover object-center h-full w-full bg-white"
                                                    src={img}
                                                    alt={img}
                                                    onMouseEnter={() => setHoverElement({
                                                        img: img
                                                    })}
                                                />
                                            </figure>
                                            <div className={`${img === hoverElement.img ? 'absolute' : 'hidden'} w-full h-full z-10 top-0 left-0`} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}/>
                                        </div>
                                        
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <figure className="h-[450px] md:h-[500px] lg:h-[550px] w-80 lg:w-96">
                                <img
                                    className="object-cover object-center h-full w-full bg-white"
                                    src={hoverElement.img}
                                    alt={hoverElement.img}
                                />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl">{product.title}</span>
                    <span>{product.category}</span>
                    <span>{product.price}€</span>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between my-3">
                            <span>Select size</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {
                                sizes.map(({_id, size, available})=>
                                    <Button
                                        variant='outline'
                                        key={_id}
                                        disabled={available !== true}
                                        className={`p-5 ${sizeSelected === _id ? 'border-black border-2': ''}`}
                                        onClick={() => sizeSelected !== _id ? setSizeSelected(_id) : setSizeSelected('')}>{size} </Button>
                                )
                            }
                        </div>
                        <div className="flex gap-3">
                            <AddToCartBtn className="w-full p-7" product={product} sizeId={sizeSelected} />
                            <AddToFavBtn className="w-full p-7" product={product}/>
                        </div>
                    </div>
                    <span className="py-5">
                        {product.description}
                    </span>
                    <div className="flex flex-col gap-2">
                        <span>Color: {product.color} </span>
                        <span>Category: {product.category} </span>
                    </div>
                </div>
            </Layout>
            )
        }
            <Layout className="my-10">
                <Trend />
            </Layout>
        </div>
    )
}