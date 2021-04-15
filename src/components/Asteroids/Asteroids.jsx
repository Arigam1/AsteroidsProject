import React, { useState } from "react";
import { useAsteroidList } from "../../providers/AsteroidProvider";
import Asteroid from "./Asteroid/Asteroid";
import './Asteroids.scss'

const Asteroids = () => {
  const {
    filteredAsteroids,
    dangerOn,
    setDangerOn,
    inLunar,
    setInLunar,
  } = useAsteroidList();


  const handleCheckboxChange = (e) => {
    setDangerOn(!dangerOn);
  };

  return (<main className="main">
    <div className="section-inner">
      <div className="main-pannel">
        <div className="main-pannel-checkbox">
          <input type="checkbox"
            type="checkbox"
            name="dangerOn"
            onChange={handleCheckboxChange}
            checked={dangerOn}
          />{" "}
          <div className="main-pannel-checkbox-description">Показать только опасные</div>
        </div>
        <div className="main-pannel-info">
          Расстояние{" "}
          <button onClick={() => setInLunar(false)} style={{ fontWeight: 700 }}>в километрах,</button>
          <button onClick={() => setInLunar(true)} style={{ textDecoration: "underline" }}>в дистанциях до луны</button>
        </div>
      </div>
      {filteredAsteroids.map((asteroid) => {
        return (
          <Asteroid
            key={asteroid.id}
            asterId={asteroid.id}
            inLunar={inLunar}
            dangerOn={dangerOn}
          />
        );
      })}
    </div>
  </main>
  );
};

export default Asteroids;
