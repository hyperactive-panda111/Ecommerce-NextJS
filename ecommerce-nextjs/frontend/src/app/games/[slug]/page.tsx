'use client';

import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import { FaShoppingCart } from 'react-icons/fa';
import { getGame } from "@/libs/apis";
import { useState } from "react";

const GameItem = async (props: { params: {slug: string} }) => {
    //console.log(props);

    const {
        params: { slug}
    } = props;

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const gameDetails = await getGame(slug);

    
  const handleDecrease = () => {
    if (!gameDetails) return;
    if (quantity > 0) 
    {
      setQuantity(quantity - 1);
      setPrice(Number(((quantity - 1) * gameDetails.price).toFixed(2)));
    }
  };

  
  const handleIncrease = () => {
    if (!gameDetails) return;
    if (quantity < gameDetails.quantity) 
    {
      setQuantity(quantity + 1);
      setPrice(Number(((quantity + 1) * gameDetails.price).toFixed(2)));
    }
  };

    return (
        <div>
            <CarouselSlider images={gameDetails.images} />

            <div className={classNames.container}>
                <div className={classNames.productInfo}>
                    <div className={classNames.cartContainer}>
                        <button
                        className={`${classNames.button} ${
                            quantity === 0 && classNames.disabledButton
                        }`}
                        disabled={quantity === 0}
                        onClick={handleDecrease}
                        >
                        -
                        </button>
                        
                        <input 
                            type="text"
                            className={classNames.quantityInput}
                            value={quantity}
                            readOnly
                        />

                        <button
                        onClick={handleIncrease}
                        className={`${classNames.button} ${
                            quantity === gameDetails.quantity && classNames.disabledButton
                        }`}
                        disabled={quantity === gameDetails.quantity}
                        >
                        +
                        </button>
                        <div className={classNames.cartPrice}>$ {price}</div>
                        <button 
                        className={`${classNames.button} ${
                            quantity === 0 && classNames.disabledButton
                        }`}
                        disabled={quantity === 0}
                         >
                            <FaShoppingCart />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GameItem;

const classNames = {
    container:
      "py-10 max-w-xs md:max-w-3xl mx-auto flex flex-col items-center justify-center",
    carousel: "relative w-full h-64 mb-4",
    previousButton:
      "absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-l",
    nextButton:
      "absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-r",
    productInfo: "text-center",
    description: "text-lg text-gray-300 mb-2",
    name: "text-4xl pt-5 text-gray-300 font-bold mb-2",
    price: "text-2xl text-primary font-bold",
    cartPrice: "text-xl text-primary-light",
    addToCartButton: "px-4 py-2 mt-4 bg-blue-500 text-white rounded",
    cartContainer: "flex justify-center items-center space-x-4",
    quantityInput:
      "border outline-none border-gray-300 rounded px-2 py-1 text-center w-12",
    button: "px-4 py-2 rounded bg-blue-500 text-white",
    disabledButton: "bg-gray-300 cursor-not-allowed",
  };