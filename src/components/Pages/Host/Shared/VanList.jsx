import React from "react";
import "./VanList.css";
function VanList({ van: { imageUrl, name, price }, edit }) {
  return (
    <div className='dashboard__vans-list'>
      <div className='dashboard__vans-list__img'>
        <img src={imageUrl} alt='vans' />
      </div>
      <div className='dashboard__vans-list__title'>
        <div className='dashboard__vans-list__title-hd'>
          <h4>{name}</h4>
          <p>${price}/day</p>
        </div>
      </div>
      <div className='dashboard__vans-list__edit'>
        {edit && <button>Edit</button>}
      </div>
    </div>
  );
}

export default VanList;
