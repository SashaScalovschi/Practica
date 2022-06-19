import React from "react";
import { Navbar } from '../../components' ;
import "./header.css";

export const Header = () => {
    return (

        <section className="header">
        <section className="header-top">
          <section className="header-top__logo">
            <a href="/" className="header-logo">Game</a>
          </section>
          <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navbar />
            </section>
            <hr className="header-top__seperator" />
          </section>
        </section>
        {/* <section className="header-bottom">
          <section className="header-bottom__phone">
            666
          </section>
          <section className="header-bottom__email">
            Beld
          </section>
        </section> */}
      </section>
    );
}
