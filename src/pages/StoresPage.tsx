import { Layout } from "../components/Layout";
import { stores } from "../const";
import { useEffect, useState } from "react";
import { Store as StoreType } from "../types";
import { Card } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Button } from "../components/ui/button";

export const StoresPage = () => {

    const [ storeSelected, setStoreSelected ] = useState<StoreType | undefined> (undefined)

    useEffect(()=>{
        if(stores.length > 0) handleStoreSelected(stores[0])
    }, [])

    const handleStoreSelected = (store: StoreType) => {
        setStoreSelected(store)
    }

    return(
        <Layout className="grid grid-cols-3 h-[70vh] gap-1">
            <ScrollArea className="border p-3">
                <div className="flex flex-col gap-2">
                    {
                        stores.map((store)=>{
                            return(
                                <Button
                                    key={store.id}
                                    variant='secondary'
                                    className={`h-20 border ${store.id === storeSelected?.id ? 'border-black' : undefined}`}
                                    onClick={() => handleStoreSelected(store)}
                                >
                                    {store.name}
                                </Button>
                            )
                        })
                    }
                </div>
            </ScrollArea>
            <Card className={`col-span-2 flex p-5 gap-5 border`}>
                <figure className="h-96 w-96">
                    <img src={storeSelected?.img} alt={storeSelected?.name} className="object-cover object-center h-full w-full" />
                </figure>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">
                        {storeSelected?.name}
                    </h2>
                    <p>
                        {storeSelected?.description}
                    </p>
                    <p>
                        {storeSelected?.location}
                    </p>
                    <p>
                        {storeSelected?.openingHours}
                    </p>
                </div>

            </Card>
        </Layout>
    )
}