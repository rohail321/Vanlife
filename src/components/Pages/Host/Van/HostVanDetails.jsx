import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetails() {
  const { van } = useOutletContext();
  return (
    <div>
      <h3>Name: {van.name}</h3>
      <h3>Type: {van.type}</h3>
      <p>Description:{van.description}</p>
      <p>Visibilt:public</p>
    </div>
  );
}

export default HostVanDetails;
