import React from "react";
import { useState } from "react";

function Sidenav2() {
  const [sidenav, setsidenav] = useState(false);
  const [icon, seticon] = useState(false);

  function click() {
    setsidenav(!sidenav);
    seticon(!icon);
  }

  return (
    <>
      <a className={icon === true ? "icon2" : "icon"} onClick={click}></a>

      {sidenav === false ? null : (
        <div className="sidenav2">
          <h1>navbar</h1>
        </div>
      )}
    </>
  );
}

export default Sidenav2;
