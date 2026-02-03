"use client";

import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Counter from "@/app/general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "@/app/general/Button";
import Comment from "./Comment";
import Heading from "@/app/general/Heading";
import UseCart from "@/hooks/UseCart";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  instock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket, cartPrdcts } = UseCart();
  const [displayButton, setDisplayButton] = useState(false);

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    instock: product.instock,
  });

  console.log(cartPrdcts, "cartPrdcts");

  useEffect(() => {
    setDisplayButton(false);

    const controlDisplay =
      cartPrdcts?.findIndex((cart) => cart.id == product.id) ?? -1;

    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [cartPrdcts, product.id]);

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;
  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[200px] md:h-[400px] md:w-[200px] w-[400px] mb-3 md:mb-0 ">
            <Image src={product?.image} fill alt="" />
          </div>
          <div className="w-full md:2/3 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} precision={0.5} />

            <div className="text-slate-500">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div>Stok Durumu:</div>
              {product.instock ? (
                <div className="text-green-500">Ürün Stokda Mevcut</div>
              ) : (
                <div className="text-red-500">Ürün stokda bulunmamakta</div>
              )}
            </div>
            <div className="text-lg md:text-2xl text-orange-600 font-bold">
              {product.price} ₺
            </div>
            {displayButton ? (
              <>
                <Button
                  small
                  outline
                  onClick={() => {}}
                  text="Ürün sepete ekli"
                />
              </>
            ) : (
              <>
                {" "}
                <Counter
                  increaseFunc={increaseFunc}
                  decreaseFunc={decreaseFunc}
                  cardProduct={cardProduct}
                />
                <Button
                  small
                  onClick={() => addToBasket(cardProduct)}
                  text="Sepete Ekle"
                />
              </>
            )}
          </div>
        </div>
        <Heading text="Yorumlar" />
        <div>
          {product?.reviews?.map((prd: any) => (
            <Comment key={prd.id} prd={prd} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
