import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAsteroidList } from "../../../providers/AsteroidProvider";
import MIX from "../../common/img/MIX.jpg";
import './AsteroidInfo.scss'

const AsteroidInfo = () => {
    const { getAsterFullInfoById } = useAsteroidList();
    const { id } = useParams();
    const [asterInfo, setAsterInfo] = useState(null);

    useEffect(() => {
        const asteroidInfo = getAsterFullInfoById(id);
        if (asteroidInfo || !asterInfo) {
            setAsterInfo(asteroidInfo);
        } // eslint-disable-next-line
    }, [getAsterFullInfoById, id]);

    return (
        <>
            {asterInfo && (
                <section className="info">
                    <div className="section-inner">
                        <div className="info-header" style={{ background: `url(${MIX}) no-repeat` }}>
                        </div>
                        <div className="info-body">
                            <div className="info-body-title">
                                Дополнительная информация {asterInfo.name}:
                            </div>
                            <div className="info-body-description">
                                <ul className="card-first-info">
                                    <li className="card-first-info-item">
                                        <div className="card-first-info-item-1">Время максимального сближения</div>
                                        <div className="card-first-info-item-2"></div>
                                        <div className="card-first-info-item-3">{asterInfo.date}.</div>
                                    </li>
                                    <li className="card-first-info-item">
                                        <div className="card-first-info-item-1">Расстояние</div>
                                        <div className="card-first-info-item-2"></div>
                                        <div className="card-first-info-item-3">{asterInfo.distance} км</div>
                                    </li>
                                    <li className="card-first-info-item">
                                        <div className="card-first-info-item-1">В дистанциях до луны</div>
                                        <div className="card-first-info-item-2"></div>
                                        <div className="card-first-info-item-3">{asterInfo.distance_lunar}</div>
                                    </li>
                                    <li className="card-first-info-item">
                                        <div className="card-first-info-item-1">Размер</div>
                                        <div className="card-first-info-item-2"></div>
                                        <div className="card-first-info-item-3">{asterInfo.size} м</div>
                                    </li>
                                    <li className="card-first-info-item">
                                        <div className="card-first-info-item-1">Скорость</div>
                                        <div className="card-first-info-item-2"></div>
                                        <div className="card-first-info-item-3">{asterInfo.velocity} км/с</div>
                                    </li>
                                    <li className="card-first-info-item">
                                        <div className="card-first-info-item-1">Орбита</div>
                                        <div className="card-first-info-item-2"></div>
                                        <div className="card-first-info-item-3">{asterInfo.orbitBody}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>




                // <div>
                //     <h1>Дополнительная информация к {asterInfo.name}: </h1>

                //     <div>
                //         <span>Время максимального сближения{"................."}</span>
                //         <span>{asterInfo.date}</span>
                //     </div>

                //     <div>
                //         <span>Расстояние {"..."}</span>
                //         <span>{asterInfo.distance} км</span>
                //     </div>

                //     <div>
                //         <span>Размер {"..."}</span>
                //         <span>{asterInfo.size} м</span>
                //     </div>

                //     <div>
                //         <span>Скорость {"..."}</span>
                //         <span>{asterInfo.velocity} км/сек</span>
                //     </div>

                //     <div>
                //         <span>Орбита {"..."}</span>
                //         <span>{asterInfo.orbitBody}</span>
                //     </div>
                // </div>
            )}
        </>
    );
};

export default AsteroidInfo;
