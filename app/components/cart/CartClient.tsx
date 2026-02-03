"use client";

import UseCart from "@/hooks/UseCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "@/app/general/Button";

const CartClient = () => {
  const { cartPrdcts } = UseCart();
  console.log(cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length == 0) {
    return <div>Sepetinizde ürün bulunmamaktadır.</div>;
  }
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
              <div className="w-1/5">2</div>
              <div className="w-1/5 text-orange-600 text-lg">{cart.price}</div>
              <div className="w-1/5 ">
                <Button text="ürünü sil" onClick={() => {}} />
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
