import React, { useEffect, useState, useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TitleBlock from "../UI/TitleBlock";
import { GetBookList } from "../store/api.js";
import { ModalContext } from "../store/ModalProvider";
import { CartContext } from "../store/CartProvider";
import Modal from "../components/Modal.js";

export default function HomePage() {
  const [bookList, setBookList] = useState([]);
  const { isShow, setModalShow } = useContext(ModalContext);
  const { HandleAdd } = useContext(CartContext);

  useEffect(() => {
    GetBookList().then((data) => {
      setBookList(data);
    });
  }, []);

  return (
    <div id="HomePage" className="p-10">
      {isShow && (
        <Modal onClose={() => setModalShow(false)}>
          <div className="font-bold text-main tracking-wider text-xl">
            已加入購物車
          </div>
        </Modal>
      )}

      <TitleBlock>商品資訊</TitleBlock>

      <div className="wrap">
        {bookList.length &&
          bookList.map((item) => {
            return (
              <div
                className="card flex flex-col items-center text-sm"
                key={item.id}
              >
                <img src={item.thumb} alt="" className="h-52 mb-3" />

                <div className="flex items-center mb-1">
                  <div className="text-red italic text-red-900 font-bold mr-1">
                    ${item.price}
                  </div>
                  <div className="bg-gray-100 px-2 text-blue-500 hover:bg-blue-500 hover:text-white rounded">
                    <ShoppingCartIcon
                      onClick={() => HandleAdd(item)}
                      sx={{ fontSize: 16 }}
                    />
                  </div>
                </div>

                <div className="">{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
