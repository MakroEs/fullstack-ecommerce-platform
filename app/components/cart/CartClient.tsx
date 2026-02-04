"use client";

import UseCart from "@/hooks/UseCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "@/app/general/Button";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "@/app/general/Counter";

const CartClient = () => {
  const {
    cartPrdcts,
    removeFromCard,
    removeCart,
    addToBasketIncrease,
    addToBasketDeccrease,
  } = UseCart();
  console.log(cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length == 0) {
    return <div>Sepetinizde ürün bulunmamaktadır.</div>;
  }

  let cartPrdctsTotal = cartPrdcts.reduce(
    (acc: any, item: CardProductProps) => acc + item.quantity * item.price,
    0,
  );
  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center border-b py-3 ">
          <div className="w-1/5">Ürün Resmi</div>
          <div className="w-1/5">Ürün Adı</div>
          <div className="w-1/5">Ürün Miktarı</div>
          <div className="w-1/5">Ürün Fiyatı</div>
          <div className="w-1/5"></div>
        </div>
        <div>
          {cartPrdcts.map((cart) => (
            <div
              key={cart.id}
              className="flex items-center  justify-between text-center   "
            >
              <div className="w-1/5 flex items-center justify-center my-5">
                <Image
                  height={40}
                  width={40}
                  src={cart.image}
                  alt={cart.name}
                />
              </div>
              <div className="w-1/5">{cart.name}</div>
              <div className="w-1/5 flex justify-center">
                <Counter
                  cardProduct={cart}
                  increaseFunc={() => addToBasketIncrease(cart)}
                  decreaseFunc={() => addToBasketDeccrease(cart)}
                />
              </div>
              <div className="w-1/5 text-orange-600 text-lg">{cart.price}</div>
              <div className="w-1/5 ">
                <Button text="ürünü sil" onClick={() => removeFromCard(cart)} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between my-5 py-5 border-t-2">
          <button
            onClick={() => removeCart()}
            className="w-1/5 underline text-sm"
          >
            Sepeti Sil
          </button>
          <div className="text-lg md:text-2xl text-orange-600 font-bold">
            {cartPrdctsTotal}₺
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
