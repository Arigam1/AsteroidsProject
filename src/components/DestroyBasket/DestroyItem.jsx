import React from "react";
import { NavLink } from "react-router-dom";
import { useAsteroidList } from "../../providers/AsteroidProvider";
import { useDestroyService } from "../../providers/DestroyProvider";
import '../Asteroids/Asteroid/Asteroid.scss'
import dangerBG from './../common/img/big.jpg'
import small from './../common/img/small.svg'
import medium from './../common/img/medium.jpg'


const DestroyItem = ({ asterId }) => {
  const {
    removeAsterFromDestroyList,
    getAsterFullInfoById,
  } = useDestroyService();
  const { inLunar } = useAsteroidList();
  const asteroid = getAsterFullInfoById(asterId);

  if (asteroid.isHazardous === false) {
    if (asteroid.size > 299) {
      return <div className="card" style={{ background: `url(${medium}) no-repeat` }}>
        <div className="section-inner">
          <div className="card-first">
            <div className="card-first-name"><NavLink to={`/asteroid/${asterId}`}>{asteroid.name}</NavLink></div>
            <ul className="card-first-info">
              <li className="card-first-info-item">
                <div className="card-first-info-item-1">Дата</div>
                <div className="card-first-info-item-2"></div>
                <div className="card-first-info-item-3">{asteroid.date_short}</div>
              </li>
              {inLunar ?
                (
                  <li className="card-first-info-item">
                    <div className="card-first-info-item-1">В дистанциях до луны</div>
                    <div className="card-first-info-item-2"></div>
                    <div className="card-first-info-item-3">{asteroid.distance_lunar}</div>
                  </li>
                )
                : (
                  <li className="card-first-info-item">
                    <div className="card-first-info-item-1">Расстояние</div>
                    <div className="card-first-info-item-2"></div>
                    <div className="card-first-info-item-3">{asteroid.distance} км</div>
                  </li>)}
              <li className="card-first-info-item">
                <div className="card-first-info-item-1">Размер</div>
                <div className="card-first-info-item-2"></div>
                <div className="card-first-info-item-3">{asteroid.size} м</div>
              </li>
            </ul>
          </div>
          <div className="card-second">
            <div className="card-second-lvl">Оценка:</div>
            <div className="card-second-lvl-check"><b>Не опасен</b></div>
            <div className="card-second-lvl-check"></div>
            <button onClick={() => removeAsterFromDestroyList(asteroid.id)}>
              Вызвать бригаду Брюса
            </button>
          </div>
        </div>
      </div>
    }
    return <div className="card" style={{ background: `url(${small}) no-repeat` }}>
      <div className="section-inner">
        <div className="card-first">
          <div className="card-first-name"><NavLink to={`/asteroid/${asterId}`}>{asteroid.name}</NavLink></div>
          <ul className="card-first-info">
            <li className="card-first-info-item">
              <div className="card-first-info-item-1">Дата</div>
              <div className="card-first-info-item-2"></div>
              <div className="card-first-info-item-3">{asteroid.date_short}</div>
            </li>
            {inLunar ?
              (
                <li className="card-first-info-item">
                  <div className="card-first-info-item-1">В дистанциях до луны</div>
                  <div className="card-first-info-item-2"></div>
                  <div className="card-first-info-item-3">{asteroid.distance_lunar}</div>
                </li>
              )
              : (
                <li className="card-first-info-item">
                  <div className="card-first-info-item-1">Расстояние</div>
                  <div className="card-first-info-item-2"></div>
                  <div className="card-first-info-item-3">{asteroid.distance} км</div>
                </li>)}
            <li className="card-first-info-item">
              <div className="card-first-info-item-1">Размер</div>
              <div className="card-first-info-item-2"></div>
              <div className="card-first-info-item-3">{asteroid.size} м</div>
            </li>
          </ul>
        </div>
        <div className="card-second">
          <div className="card-second-lvl">Оценка:</div>
          <div className="card-second-lvl-check"><b>Не опасен</b></div>
          <div className="card-second-lvl-check"></div>
          <button onClick={() => removeAsterFromDestroyList(asteroid.id)}>
            Вызвать бригаду Брюса
          </button>
        </div>
      </div>
    </div>
  }
  return <div className="card" style={{ background: `url(${dangerBG}) no-repeat` }}>
    <div className="section-inner">
      <div className="card-first">
        <div className="card-first-name"><NavLink to={`/asteroid/${asterId}`}>{asteroid.name}</NavLink></div>
        <ul className="card-first-info">
          <li className="card-first-info-item">
            <div className="card-first-info-item-1">Дата</div>
            <div className="card-first-info-item-2"></div>
            <div className="card-first-info-item-3">{asteroid.date_short}</div>
          </li>
          {inLunar ?
            (
              <li className="card-first-info-item">
                <div className="card-first-info-item-1">В дистанциях до луны</div>
                <div className="card-first-info-item-2"></div>
                <div className="card-first-info-item-3">{asteroid.distance_lunar}</div>
              </li>
            )
            : (
              <li className="card-first-info-item">
                <div className="card-first-info-item-1">Расстояние</div>
                <div className="card-first-info-item-2"></div>
                <div className="card-first-info-item-3">{asteroid.distance} км</div>
              </li>)}
          <li className="card-first-info-item">
            <div className="card-first-info-item-1">Размер</div>
            <div className="card-first-info-item-2"></div>
            <div className="card-first-info-item-3">{asteroid.size} м</div>
          </li>
        </ul>
      </div>
      <div className="card-second">
        <div className="card-second-lvl">Оценка:</div>
        <div className="card-second-lvl-check"><b>Опасен</b></div>
        <div className="card-second-lvl-check"></div>
        <button onClick={() => removeAsterFromDestroyList(asteroid.id)}>
          Вызвать бригаду Брюса
        </button>
      </div>
    </div>
  </div>

  // return (
  //   <div className="asterToDestroy" style={{ marginBottom: "1rem" }}>
  //     <div>
  //       <Link to={`/asteroid/${asterId}`}>
  //         <h2>{asteroid.name}</h2>
  //       </Link>

  //       <div>Дата ... {asteroid.date_short}</div>

  //       <div>
  //         Расстояние {"..."}{" "}
  //         <span>
  //           {inLunar
  //             ? asteroid.distance_lunar + " луны"
  //             : asteroid.distance + " км"}
  //         </span>
  //       </div>

  //       <div>
  //         Размер {"..."} {asteroid.size + " м"}
  //       </div>
  //     </div>

  //     <div>
  //       <div>
  //         Оценка:
  //         {asteroid.isHazardous ? "Опасный" : "Неопасный"}
  //       </div>
  //       <button onClick={() => removeAsterFromDestroyList(asteroid.id)}>
  //         Вызвать бригаду Брюса
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default DestroyItem;
