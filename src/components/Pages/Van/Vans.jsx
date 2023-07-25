import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Vans.css";
import { Link } from "react-router-dom";

function Van() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetchVanDataApi();
  }, []);

  const fetchVanDataApi = async () => {
    try {
      const res = await axios.get(`/api/vans`);
      setVans(res.data.vans);
    } catch (error) {}
  };
  return (
    <section>
      <div className='van'>
        <div className='van__heading'>
          <h2>Explore our van options</h2>
        </div>
        <div className='van__btn'>
          <button className='van__btn-btn'>
            <span className='van__btn-btn-span'>Simple</span>
          </button>
          <button className='van__btn-btn'>
            <span className='van__btn-btn-span'>Luxury</span>
          </button>
          <button className='van__btn-btn'>
            <span className='van__btn-btn-span'>Rugged</span>
          </button>
          <div className='van__btn-filter'>
            <button className='van__btn-filter__btn'>
              <span>Clear Filter</span>
            </button>
          </div>
        </div>
        <div className='van__card'>
          {vans &&
            vans.map((van) => (
              <div className='van__card-indivisual' key={van.id}>
                <Link to={`/van/${van.id}`}>
                  <div className='van__card-img'>
                    <img src={van.imageUrl} alt='img' />
                  </div>
                  <div className='van__card-description'>
                    <div className='van__card-description-name'>
                      <h3>{van.name} </h3>
                    </div>
                    <div className='van__card-description-price'>
                      <h4>{van.price}/ day</h4>
                    </div>
                  </div>
                  <div className='van__card-btn'>
                    <button style={styles(van)}>{van.type}</button>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

const styles = (van) => {
  if (van.type === "simple") return { background: "#E17654" };
  else if (van.type === "rugged") return { background: "#115E59" };
  else if (van.type === "luxury") return { background: "#161616" };
  else return { background: "#E17654" };
};

export default Van;
