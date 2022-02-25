import React, { useContext } from "react";
import { useImmer } from "use-immer";
import { GetCart, PostCart, PutCart, DeleteCart } from "./api";
import { ModalContext } from "./ModalProvider";

export const CartContext = React.createContext({
  cartList: [],
  HandleRemove: (id) => {},
  HandleAdd: () => {},
  HandleUpdate: () => {},
});

const CartProvider = (props) => {
  const { setModalShow } = useContext(ModalContext);
  const [cartList, setCartList] = useImmer([]);

  function FetchCart() {
    return GetCart().then((data) => {
      setCartList(data);
      return data;
    });
  }

  function HandleAdd(item) {
    setModalShow(true);

    // 若已經在購物車，增加數量
    const index = cartList.findIndex((ele) => ele.id === item.id);
    if (index !== -1) {
      setCartList((draft) => {
        draft[index].amount++;
        PutCart(item.id, draft[index]);
      });
      return;
    }

    // 若不在購物車，額外增加 amount 的項目
    const newItem = { id: item.id, origin: item, amount: 1 };
    setCartList((draft) => [...draft, newItem]);
    PostCart(newItem);
  }

  function HandleUpdate(number, item) {
    let amount = Number(Math.round(number));
    if (amount === 0) {
      HandleRemove(item.id);
      return;
    }

    setCartList((draft) => {
      const target = draft.find((ele) => ele.id === item.id);
      target.amount = amount;
      PutCart(item.id, target);
    });
  }

  const HandleRemove = (id) => {
    setCartList((draft) => draft.filter((item) => item.id !== id));
    DeleteCart(id);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        FetchCart,
        HandleAdd,
        HandleUpdate,
        HandleRemove,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
