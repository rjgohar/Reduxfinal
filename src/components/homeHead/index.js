import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleApi } from "../../feature/singleApi/singleapi.action";
import { Button } from "../button";
import "./styles.css";
export const Homecard = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleApi());
  }, []);
  const {
    singleApiSlice: { singleApi },
  } = useSelector((state) => state);
  console.log(singleApi.nfts, "hhh");
  return (
    <div className="mainSection">
      {singleApi.nfts &&
        singleApi.nfts.map((item) => {
          return (
            <div className="containerHome">
              <div className="img_container">
                <img src={item.creator_img} alt="imgg" />
              </div>
              <div className="information__container">
                <Button name={item.creator_name} img={item.creator_img} />
                <div className="title_container">
                  <h4>{item.art_name}</h4>
                </div>

                <div className="price_container">
                  <div className="price_">
                    <div>
                      <p className="price__title">Reserved price</p>
                      <h1>{item.art_price}</h1>
                    </div>
                    <hr className="hr__tag" />
                  </div>

                  <div className="owner__container">
                    <p className="price__title">Owned By</p>
                    <Button name={item.creator_name} img={item.creator_img} />
                  </div>
                </div>
                <div className="viewart__button">
                  <button>View Art Work </button>
                </div>
              </div>
            </div>
          );
        })}

      <hr className="divder" />
    </div>
  );
};
