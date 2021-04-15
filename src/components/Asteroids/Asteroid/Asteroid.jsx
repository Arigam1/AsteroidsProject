import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Asteroid.scss'
import dangerBG from './../../common/img/big.jpg'
import small from './../../common/img/small.svg'
import medium from './../../common/img/medium.jpg'
import { useAsteroidList } from "../../../providers/AsteroidProvider";
import { useDestroyService } from "../../../providers/DestroyProvider";

const Asteroid = ({ asterId, inLunar }) => {

  const { addAsterToDestroyList } = useDestroyService();
  const {
    deleteAsterFromTheMainList,
    getAsterFullInfoById,
  } = useAsteroidList();

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
            <button onClick={() => {
              addAsterToDestroyList(asterId);
              deleteAsterFromTheMainList(asterId);
            }}>На уничтожение</button>
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
          <button onClick={() => {
            addAsterToDestroyList(asterId);
            deleteAsterFromTheMainList(asterId);
          }}>На уничтожение</button>
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
        <button onClick={() => {
          addAsterToDestroyList(asterId);
          deleteAsterFromTheMainList(asterId);
        }}>На уничтожение</button>
      </div>
    </div>
  </div>

};

export default Asteroid;
