import React, { useEffect, useState } from "react";
import { Link, useParams, NavLink, Outlet } from "react-router-dom";
import axios from "axios";

import "./HostVanDetail.css";

function HostVanDetail() {
  const [van, setVan] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchVanById();
  }, []);

  //   ID BASED GET API CALL
  const fetchVanById = async () => {
    try {
      const res = await axios.get(`/api/host/vans/${params.id}`);
      setVan(...res.data.vans);
    } catch (error) {}
  };
  return (
    <section className='VanDetail'>
      <div className='VanDetail__link'>
        <Link to='/vans'>Back to all vans</Link>
      </div>
      {Object.keys(van).length > 0 && (
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
              <h4>${van.price}/day </h4>
            </div>
            <div className='van-detail__header'>
              <ul className='van-detail__header-list'>
                <li>
                  <NavLink to='.'>Details</NavLink>
                </li>
                <li>
                  <NavLink to='price'>Pricing</NavLink>
                </li>
                <li>
                  <NavLink to='photos'>Photos</NavLink>
                </li>
              </ul>
            </div>
            <Outlet context={{ van }} />
          </div>
        </div>
      )}
    </section>
  );
}

const styles = (van) => {
  if (van.type === "simple") return { background: "#E17654" };
  else if (van.type === "rugged") return { background: "#115E59" };
  else if (van.type === "luxury") return { background: "#161616" };
  else return { background: "#E17654" };
};

export default HostVanDetail;
