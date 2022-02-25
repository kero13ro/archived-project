import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../store/ModalProvider";
import Modal from "../components/Modal.js";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "../UI/Button";
import TitleBlock from "../UI/TitleBlock";
import { CartContext } from "../store/CartProvider";

export default function BuyDetail() {
  const { isShow, setModalShow } = useContext(ModalContext);
  const { cartList } = useContext(CartContext);

  const [params, setParams] = useState({
    buyerName: "",
    phone: "",
    shipment: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setModalShow(true);
    setParams(data);
    console.log({ ...data });
  };

  // eslint-disable-next-line
  const shipOption = [
    { label: "分次出貨: 有現貨的商品先出貨", value: "shipmentBulk" },
    { label: "一次出貨: 商品到齊一次出貨", value: "shipmentOnce" },
  ];

  const sendOption = [
    { label: "超商取貨", value: "sendMall" },
    { label: "宅配郵寄", value: "sendHome" },
    { label: "門市取貨", value: "selfCollect" },
  ];

  const totalSum = cartList
    .map((item) => item.origin.price * item.amount)
    .reduce((a, b) => a + b, 0);

  function HandleUpdate(event) {
    // console.log(event.target.value);
  }

  function ShipmentMapLabel(val) {
    return shipOption.find((item) => item.value === val)?.label;
  }

  return (
    <div id="BuyDetail" className="p-10">
      {isShow && (
        <Modal onClose={() => setModalShow(false)}>
          <TitleBlock>確認訂購人資訊</TitleBlock>
          <div className="mb-10 text-main text-left">
            <div className="flex py-1">
              <div className="w-24 text-main-light font-bold">收件人姓名</div>
              {params.buyerName}
            </div>
            <div className="flex py-1">
              <div className="w-24 text-main-light font-bold">收件人電話</div>
              {params.phone}
            </div>
            <div className="flex py-1">
              <div className="w-24 text-main-light font-bold">出貨偏好</div>
              {ShipmentMapLabel(params.shipment)}
            </div>
          </div>

          <div className="flex">
            <div
              onClick={() => setModalShow(false)}
              className="ml-auto px-4 py-2 bg-gray-100 border border-gray-300 text-gray-500 rounded cursor-pointer hover:bg-gray-200"
            >
              取消
            </div>
            <div
              onClick={() => setModalShow(false)}
              className="ml-3 w-24 px-4 py-2 bg-indigo-900 text-white rounded cursor-pointer hover:bg-indigo-700"
            >
              確認
            </div>
          </div>
        </Modal>
      )}

      <TitleBlock>購物明細</TitleBlock>
      {cartList.map((item) => {
        return (
          <div key={item.id} className="flex mb-3 border-b-2 text-sm">
            <div>
              <img src={item.origin.thumb} alt="" className="h-20 mr-3" />
            </div>
            <div className="w-1/2">{item.origin.name}</div>
            <div className="flex flex-col ml-auto text-right">
              <div className="flex w-24">
                <div>數量：</div>
                <div className="w-12">{item.amount}</div>
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
      <div className="mb-6 flex justify-between font-bold">
        <span>總計</span>
        <span>TWD ${totalSum}</span>
      </div>

      <TitleBlock>收件人資訊</TitleBlock>

      <div className="mb-5 flex items-center">
        <div className="w-24">收件人姓名</div>
        <div>
          <input
            autoComplete="off"
            {...register("buyerName", { required: true })}
            className={`border p-1 ${errors.buyerName && "border-red-700"} `}
            onChange={HandleUpdate}
          />
          {errors.buyerName && (
            <div className="fixed text-xs text-red-700">* 必填欄位</div>
          )}
        </div>
      </div>
      <div className="mb-5 flex items-center">
        <div className="w-24">收件人電話</div>
        <div>
          <input
            autoComplete="off"
            maxLength="10"
            {...register("phone", {
              required: true,
              validate: (val) => val.length === 10,
            })}
            onChange={HandleUpdate}
            className={`border p-1 ${errors.phone && "border-red-700"} `}
          />
          <div className="fixed text-xs text-red-700">
            {errors.phone?.type === "required" && <span>* 必填欄位</span>}
            {errors.phone?.type === "validate" && <span>* 長度不符</span>}
          </div>
        </div>
      </div>

      <div className="mb-5 flex">
        <div className="w-24">出貨偏好</div>
        <div>
          {shipOption.map((ele) => (
            <label className="flex items-center py-1" key={ele.value}>
              <input
                type="radio"
                name="radio"
                value={ele.value}
                {...register("shipment", { required: true })}
                onChange={HandleUpdate}
              />
              <span className="ml-2">{ele.label}</span>
            </label>
          ))}
          {errors.shipment && (
            <div className="fixed text-xs text-red-700">* 必填欄位</div>
          )}
        </div>
      </div>

      <div className="mb-5 flex">
        <div className="w-24">寄送方式</div>
        <div>
          {sendOption.map((ele) => (
            <label className="flex items-center py-1" key={ele.value}>
              <input
                type="radio"
                name="radio"
                value={ele.value}
                {...register("sendType", { required: true })}
                onChange={HandleUpdate}
              />
              <span className="ml-2">{ele.label}</span>
            </label>
          ))}
          {errors.shipment && (
            <div className="fixed text-xs text-red-700">* 必填欄位</div>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-auto">
        <Button to="cart" type="secondary">
          <ArrowBackIosIcon fontSize="small" className="mr-2" />
          購物車內容
        </Button>
        <Button type="main" onClick={handleSubmit(onSubmit)}>
          確認訂單
          <ArrowForwardIosIcon fontSize="small" className="ml-1" />
        </Button>
      </div>
    </div>
  );
}
