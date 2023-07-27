import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import VanList from "../Shared/VanList";
import "./HostVans.css";

function HostVans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetchVansData();
  }, []);
  const fetchVansData = async () => {
    try {
      const res = await axios.get(`/api/vans`);
      setVans(res.data.vans);
    } catch (error) {}
  };
  return (
    <div className='host-vans'>
      <div className='host-vans__heading'></div>

      <div className='host-van__list' style={{ margin: "30px" }}>
        {vans.length > 0 &&
          vans.map((van) => (
            <Link to={`/host/vans/${van.id}`} key={van.id}>
              <VanList van={van} edit={false} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default HostVans;
