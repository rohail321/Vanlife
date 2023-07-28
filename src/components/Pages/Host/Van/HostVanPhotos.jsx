import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { van } = useOutletContext();

  return (
    <div>
      <img
        src={van.imageUrl}
        alt='img'
        style={{ width: "220px", height: "220px" }}
      />
    </div>
  );
}

export default HostVanPhotos;
