import React, { useState, useEffect, useContext } from "react";
import TitleBlock from "../UI/TitleBlock";
import { DeletetTrack, PostCart, GetTrack } from "../store/api";
import { CartContext } from "../store/CartProvider";

export default function SectionTrackList() {
  const { FetchCart } = useContext(CartContext);
  const [trackList, setTrack] = useState([]);

  // 抓取列表
  const FetchList = () => {
    GetTrack().then((data) => {
      setTrack(data);
    });
  };

  // 從追蹤列表加到購物車
  async function ToCart(item) {
    DeletetTrack(item.id);
    await PostCart({ ...item, amount: 1 });

    setTimeout(async () => {
      FetchList();
      await FetchCart();
    }, 100);
  }

  /*
  todo：因為追蹤清單資料在下層，導致增加購物車時，無法檢查是否重複
  理想上資料全部儲存 redux 共用
  */

  // 抓取追蹤清單
  useEffect(() => {
    FetchList();
  }, []);

  return (
    <div>
      <TitleBlock trackList>追蹤清單</TitleBlock>
      {trackList.map((item) => {
        return (
          <div key={item.id} className="flex mb-3 border-b-2">
            <div>
              <img src={item.origin.thumb} alt="" className="h-32 mr-3" />
            </div>
            <div className="w-1/2">{item.origin.name}</div>
            <div className="flex flex-col items-end ml-auto text-right">
              <div
                onClick={() => ToCart(item)}
                className="mb-2 px-2 py-1 bg-gray-100  rounded border border-gray-300 text-xs text-center text-gray-500 hover:bg-gray-200 cursor-pointer"
              >
                放入購物車
              </div>
              <div>價格：{item.origin.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
