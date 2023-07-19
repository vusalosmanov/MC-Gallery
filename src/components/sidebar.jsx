import React from "react";
import { slide as Menu } from "react-burger-menu";

export default () => {
  return (
    <Menu>
      <a className="menu-item" href="/kampaniyalar">
        Kampaniyalar
      </a>

      <a className="menu-item" href="/brendlər">
        Brendlər
      </a>

      <a className="menu-item" href="/filiallar">
        Filiallar
      </a>

      <a className="menu-item" href="/əlaqə">
        Əlaqə
      </a>
      <a className="menu-item" href="/qeydiyyat">
        Qeydiyyat
      </a>
    </Menu>
  );
};
