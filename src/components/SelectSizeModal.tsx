import { useCart } from "../hooks/useCart";
import { useFav } from "../hooks/useFav";
import { useSize } from "../hooks/useSize";
import { Product } from "../types";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

interface Props {
    product: Product,
    handleShowSizeSelected: (value: boolean) => void
}

export const SelectSizeModal: React.FC<Props> = ({product, handleShowSizeSelected}) => {

    const { addProduct } = useCart();
    const { removeFav } = useFav();

    const { sizes } = useSize()

    return(
        <Dialog defaultOpen>
            <DialogContent onCloseAutoFocus={() => handleShowSizeSelected(false)}>
                <DialogHeader>
                <DialogTitle>Select size</DialogTitle>
                <ul className="grid grid-cols-3 justify-between gap-2 p-5">
                    {
                        sizes.map(({_id, size, available})=>{
                            return(
                                <li key={size}>
                                    <Button
                                        variant='outline'
                                        key={size}
                                        disabled={available !== true}
                                        className={`p-5 hover:border-black`}
                                        onClick={() => {
                                            removeFav(product)
                                            addProduct(product, _id)
                                            handleShowSizeSelected(false)
                                        }}>{size}</Button>
                                </li>
                            )
                        })
                    }
                </ul>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}