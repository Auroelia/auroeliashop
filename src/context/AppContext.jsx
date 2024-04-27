import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {


  const [subtotal, setSubtotal] = useState(0);
  const [iva, setIva] = useState(0)
  const [envio, setEnvio] = useState(500);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [isCartInitialized, setIsCartInitialized] = useState(false);



  useEffect(() => {
    const localData = localStorage.getItem('cart');
    if (localData) {
      setCart(JSON.parse(localData));
    }
    setIsCartInitialized(true);
  }, []);

  useEffect(() => {
    if (isCartInitialized) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isCartInitialized]);



  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
        total += item.product.price * item.qty;
    });
    setSubtotal(total);
}, [cart]);

useEffect(() => {
  setIva((subtotal * 0.16));
}, [subtotal]);

useEffect(() => {
  setTotal((subtotal+iva+envio));
}, [subtotal,iva,envio]);

const addToCart = (product, qty) => {
  setCart((currentCart) => {
    // Buscar el producto en el carrito
    const index = currentCart.findIndex(
      (item) => item.product._id === product._id 
    );

    // Si el producto ya está en el carrito, incrementar su cantidad
    if (index !== -1) {
      const newCart = [...currentCart];
      console.log(newCart[index].qty)
      newCart[index].qty += qty;
      return newCart;
    }

    // Si el producto no está en el carrito, agregarlo
    return [...currentCart, { product,  qty }];
  });
};

  // Read
  const getCart = () => cart;

  // Update
  const updateCartItem = (productId,  qty) => {
    setCart((currentCart) => {
      return currentCart.map((item) => 
        item.product._id === productId 
          ? {product: item.product,  qty} 
          : item
      );
    });
  };

   // Delete
   const removeFromCart = (productId) => {
    console.log("entre")
    console.log(productId)
    setCart((currentCart) => currentCart.filter((item) => item.product._id !== productId));
  };

 

  return (
    <AppContext.Provider value={{ 
      cart,
      subtotal,
      iva,
      envio,
      total,
      setEnvio,
      setSubtotal,
      setIva,
       addToCart,
        getCart,
         updateCartItem,
          removeFromCart
    
    }}>
      {children}
    </AppContext.Provider>
  );
};