import React from "react";
import { useState } from "react";

const Second = () => {
  const [permission, setPermission] = useState();
  return (
    <div>
      <h3>{permission}</h3>
      <input
        type="radio"
        name="permission"
        value="yes"
        onChange={(e) => setPermission(e.target.value)}
      />
      <input
        type="radio"
        name="permission"
        value="no"
        onChange={(e) => setPermission(e.target.value)}
      />
    </div>
  );
};

export default Second;
