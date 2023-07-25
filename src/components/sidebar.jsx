import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <Menu
      isOpen={isMenuOpen}
      onStateChange={handleMenuStateChange}
      onClose={handleMenuClose}
    >
      <a className="menu-item" href="/kampaniyalar">
        Kampaniyalar
      </a>

      <a className="menu-item" href="/brendler">
        Brendlər
      </a>

      <a className="menu-item" href="/filiallar">
        Filiallar
      </a>

      <a className="menu-item" href="/əlaqə">
        Əlaqə
      </a>
      <a className="menu-item" href="/register">
        Qeydiyyat
      </a>
    </Menu>
  );
};

export default BurgerMenu;
