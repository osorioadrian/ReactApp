import { useState } from 'react';
import { ProductInCard, Product } from '../interfaces/product.interface';

export const useShoppingCard = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCard}>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    
        setShoppingCart( oldShoppingCard => {
    
          const productInCart: ProductInCard = oldShoppingCard[product.id] || { ...product, count: 0 };
    
          if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
            productInCart.count += count;
            return {
              ...oldShoppingCard,
              [product.id]: productInCart
            } 
          } 
    
          const { [product.id]: toDelete, ...rest } = oldShoppingCard;
    
          return rest
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}