import React, { useState } from "react";
import { useAsteroidList } from "../../providers/AsteroidProvider";
import Asteroid from "./Asteroid/Asteroid";
import './Asteroids.scss'

const Asteroids = () => {
  const { filteredAsteroids, dangerOn, setDangerOn } = useAsteroidList();
  const [inLunar, setInLunar] = useState(false);
  const handleCheckboxChange = (e) => {
    setDangerOn(e.target.checked);
  };

  return (<main className="main">
    <div className="section-inner">
      <div className="main-pannel">
        <div className="main-pannel-checkbox">
          <input type="checkbox"
            name="dangerOn"
            onChange={handleCheckboxChange}
          />{" "}
          <div className="main-pannel-checkbox-description">Показать только опасные</div>
        </div>
        <div className="main-pannel-info">
          Расстояние{" "}
          <button onClick={() => setInLunar(false)}>в километрах</button>
          <button onClick={() => setInLunar(true)}>в дистанциях до луны</button>
        </div>
      </div>
      {filteredAsteroids.map((asteroid) => {
        return (
          <Asteroid
            key={asteroid.id}
            asteroid={asteroid}
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
