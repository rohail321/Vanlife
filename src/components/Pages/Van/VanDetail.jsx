import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./VanDetail.css";

function VanDetail() {
  const [van, setVan] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchVanById();
  }, []);

  //   ID BASED GET API CALL
  const fetchVanById = async () => {
    try {
      const res = await axios.get(`/api/vans/${params.id}`);
      setVan(res.data.vans);
    } catch (error) {}
  };
  return (
    <section className='VanDetail'>
      <div className='VanDetail__link'>
        <Link to='/vans'>Back to all vans</Link>
      </div>

      <div className='van-detail'>
        <div className='van-detail__left'>
          <div className='van-detail__left-img'>
            <img src={van.imageUrl} alt='img' />
          </div>
        </div>
        <div className='van-detail__right'>
          <div className='van-detail__right-type' style={styles(van)}>
            {van.type}
          </div>
          <div className='van-detail__right-name'>
            <h2>{van.name} </h2>
          </div>
          <div className='van-detail__right-price'>
            <h4>{van.price}/day </h4>
          </div>
          <div className='van-detail__right-description'>
            <p>{van.description}</p>
          </div>
          <div className='van-detail__right-btn'>
            <button>Rent this van</button>
          </div>
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

export default VanDetail;
