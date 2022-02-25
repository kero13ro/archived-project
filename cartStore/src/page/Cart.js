import React, { useState } from "react";
import SectionTrackList from "../components/SectionTrackList";
import SectionCartList from "../components/SectionCartList";

export default function Cart() {
  const [tabCurrent, setTab] = useState("cart");

  return (
    <>
      <div className="tabs">
        <div
          className={tabCurrent === "cart" ? "active" : ""}
          onClick={() => setTab("cart")}
        >
          購物明細
        </div>
        <div
          className={tabCurrent === "track" ? "active" : ""}
          onClick={() => setTab("track")}
        >
          追蹤清單
        </div>
      </div>
      <div id="Cart" className="p-10">
        {tabCurrent === "cart" && <SectionCartList />}
        {tabCurrent === "track" && <SectionTrackList />}
      </div>
    </>
  );
}
