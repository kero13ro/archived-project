import React, { useContext } from "react";
import TitleBlock from "../UI/TitleBlock";
import { CartContext } from "../store/CartProvider";
import { AddTrack } from "../store/api";
import Button from "../UI/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function SectionCartList() {
  const { HandleUpdate, HandleRemove, cartList } = useContext(CartContext);

  // 全部總額
  const totalSum = (cartList) => {
    if (cartList.length === 0) return 0;

    return cartList
      .map((item) => item.origin.price * item.amount)
      .reduce((a, b) => a + b, 0);
  };

  // 下次再買
  function CartToTrack(id) {
    HandleRemove(id);
    AddTrack(id);
  }

  return (
    <div id="SectionCartList">
      <TitleBlock trackList>商品名稱</TitleBlock>
      {cartList.map((item) => {
        return (
          <div key={item.id} className="flex mb-3 border-b-2">
            <div>
              <img src={item.origin.thumb} alt="" className="h-32 mr-3" />
            </div>
            <div className="w-1/2">{item.origin.name}</div>
            <div className="flex flex-col items-end ml-auto text-right">
              <div className="flex mb-3">
                <div
                  onClick={() => CartToTrack(item.id)}
                  className="mr-2 px-2 py-1 bg-gray-100  rounded border border-gray-300 text-xs text-center text-gray-500 hover:bg-gray-200 cursor-pointer"
                >
                  下次再買
                </div>
                <div
                  onClick={() => HandleRemove(item.id)}
                  className="w-12 px-2 py-1 bg-gray-100  rounded border border-gray-300 text-xs text-center text-gray-500 hover:bg-gray-200 cursor-pointer"
                >
                  刪除
                </div>
              </div>
              <div className="flex w-24">
                <div>數量：</div>
                <input
                  className="w-12 border text-right"
                  value={item.amount}
                  type="number"
                  step="1"
                  onChange={(event) => HandleUpdate(event.target.value, item)}
                />
              </div>
              <div className="flex">
                價格：
                <div className="w-12">{item.origin.price}</div>
              </div>
              <div className="flex">
                小計：
                <div className="w-12">{item.origin.price * item.amount}</div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex justify-between font-bold mb-6">
        <span>總計</span>
        <span>TWD ${totalSum(cartList)}</span>
      </div>

      <div className="text-right mt-auto">
        <div className="flex justify-between">
          <Button to="/" type="secondary">
            <ArrowBackIosIcon fontSize="small" className="mr-2" />
            繼續購物
          </Button>
          <Button to="buyDetail" type="main">
            進行結帳
            <ArrowForwardIosIcon fontSize="small" className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
