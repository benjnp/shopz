'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const StateContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems?.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => {
      localStorage.setItem("totalPrice", prevTotalPrice + product.price * quantity)
      return prevTotalPrice + product.price * quantity
    });
    setTotalQuantities((prevTotalQuantities) => {
      localStorage.setItem('qty', prevTotalQuantities + quantity)
      return prevTotalQuantities + quantity;
    });

    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
        else 
          return {...cartProduct}
      })
      
      setCartItems(() => {
        localStorage.setItem("cart", JSON.stringify(updatedCartItems))
        return updatedCartItems
      }
      );

    } else {
      product.quantity = quantity;
      
      setCartItems(() => {
        localStorage.setItem("cart", JSON.stringify([...cartItems, { ...product }]))
        return [...cartItems, { ...product }]
      }
      );
    }
    
    toast.success(`${quantity} ${product.name} added to the cart.`);
    
  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => {
      localStorage.setItem("totalPrice", prevTotalPrice - foundProduct.price * foundProduct.quantity)
      return prevTotalPrice - foundProduct.price * foundProduct.quantity
    });
    setTotalQuantities(prevTotalQuantities => {
      localStorage.setItem('qty', prevTotalQuantities - foundProduct.quantity)
      return prevTotalQuantities - foundProduct.quantity
    });
    setCartItems(() => {
      localStorage.setItem("cart", newCartItems)
      return (newCartItems)
    })

  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems(() => {
        localStorage.setItem("cart", JSON.stringify(
          [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]
        ))
        return [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]      
      });
      setTotalPrice((prevTotalPrice) => {
        localStorage.setItem("totalPrice", prevTotalPrice + foundProduct.price)
        return prevTotalPrice + foundProduct.price
      })
      setTotalQuantities(prevTotalQuantities => {
        localStorage.setItem('qty', prevTotalQuantities + 1)
        return prevTotalQuantities + 1
      })
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems(() => {
          localStorage.setItem("cart", JSON.stringify(
            [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]
          ))
          return [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]
        });
        setTotalPrice((prevTotalPrice) => {
          localStorage.setItem("totalPrice", prevTotalPrice - foundProduct.price)
          return prevTotalPrice - foundProduct.price
        })
        setTotalQuantities(prevTotalQuantities => {
          localStorage.setItem('qty', prevTotalQuantities - 1)
          return prevTotalQuantities - 1
        })
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <StateContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);