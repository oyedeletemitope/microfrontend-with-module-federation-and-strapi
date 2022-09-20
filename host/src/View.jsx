import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import * as component from "./components/index";

function View() {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await component.readDisplay();

      setDisplay(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section id="intro">
        <p className="name">
          <span>MICRO FRONTEND</span>
        </p>
        <p>
          sit amet consectetur adipisicing elit. Sed, ad inventore deserunt
          omnis numquam cumque quisquam quos, molestiae quaerat assumenda earum
          quis nihil ea explicabo illo tempora labore? Distinctio, officia.{" "}
          <a href="/" target="_blank">
            click here
          </a>
          .
        </p>
      </section>

      <div className="cards_wrapper">
        <div classNmae="pricing_card">
          {display.map((display) => (
            <div className="pricing">
              <h2 class="title">{display.attributes.title}</h2>
              <p class="plan_description">{display.attributes.description}</p>
              <p class="price">${display.attributes.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default View;
