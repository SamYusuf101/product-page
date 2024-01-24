import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://i.postimg.cc/SKCmLZCc/image-product-1.jpg",
    img2: "https://i.postimg.cc/YSbbP767/image-product-2.jpg",
    img3: "https://i.postimg.cc/sD46W5M1/image-product-3.jpg",
    img4: "https://i.postimg.cc/QCbQFkf3/image-product-4.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center ">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.5 }}
        >
          <div>
            <span className=" text-[hsl(26,100%,55%)] font-semibold font-Kumbh">
              Sneaker Company
            </span>
            <h1 className="text-2xl font-bold ">Nike Invincible 3</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.5 }}
        >
          <p className="text-gray-700 font-Kumbh">
            These low-profile sneakers are your perfect casual wear companion.
            Feauturing a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </motion.div>
        <div className="flex-row flex space-x-4 items-center">
          <h6 className="text-2xl ">$ 199.00</h6>
          <h6 className="text-1xl bg-[hsl(25,100%,94%)]  py-1 px-2 rounded-lg text-[hsl(26,100%,55%)]">
            50%
          </h6>
        </div>

        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-[hsl(25,100%,94%)] py-2 px-5 rounded-lg text-[hsl(26,100%,55%)] text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-[hsl(25,100%,94%)]  py-2 px-4 rounded-lg text-[hsl(26,100%,55%)] text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="bg-[hsl(26,100%,55%)] font-Kumbh
           text-white font-semibold py-3 px-16 rounded-xl h-full "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
