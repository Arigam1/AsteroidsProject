import React from "react";
import DestroyItem from "./DestroyItem";
import './DestroyBasket.scss'
import { useDestroyService } from "../../providers/DestroyProvider";

const DestroyBasket = () => {
  const { destroyList, removeAllAstersFromDestroyList } = useDestroyService();
  return (
    <div className="inner">
      {destroyList.length === 0 &&
        <h1 className="inner-h1">Нет астероидов для ликвидации</h1>}
      {destroyList.length > 0 && (
        <div>
          {destroyList.map((aster) => {
            return <DestroyItem key={aster.id} asterId={aster.id} />;
          })}
          <div>
            <button onClick={() => removeAllAstersFromDestroyList()}>
              Секретное оружие
            </button>
            <span> Только Брюсу не говорите об этом</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestroyBasket;
