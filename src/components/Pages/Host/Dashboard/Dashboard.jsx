import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import VanList from "../Shared/VanList";
function Dashboard() {
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
    <section>
      <div className='dashboard'>
        <div className='dashboard__welcome'>
          <h2>Welcome!</h2>
          <div className='dashboard__welcome-mid'>
            <div className='p1'>
              {" "}
              <Link>
                <p>Income in last 30 days</p>
              </Link>
            </div>

            <div className='p2'>
              {" "}
              <Link>
                <p>Details</p>
              </Link>
            </div>
          </div>
          <h2>$2,260</h2>
        </div>
        <div className='dashboard__reviews'>
          <div className='dashboard__reviews-score'>
            <h3>Review SCORE 4.7/5</h3>
          </div>
          <div className='dashboard__reviews-details'>
            <Link>Details</Link>
          </div>
        </div>
        <div className='dashboard__vans'>
          <div className='dashboard__vans-heading'>
            <h2>Your listed vans </h2>
            <div className='dashboard__vans-heading__link'>
              <Link>View All</Link>
            </div>
          </div>
          {vans.length > 0 &&
            vans
              .slice(0, 3)
              .map((van) => <VanList van={van} key={van.id} edit={true} />)}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
