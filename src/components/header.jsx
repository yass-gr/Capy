import React from "react";
import { Feather } from "lucide-react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <Feather className="logo" />
          <h1>CAPY</h1>
        </div>

        <ul>
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">ASORTEMENTS</a>
          </li>
          <li>
            <a href="">ADVANTAGES</a>
          </li>
          <li>
            <a href="">SELECTION</a>
          </li>
        </ul>

        <div className="right">
          <button>
            {" "}
            <span>COMMING SOON</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
