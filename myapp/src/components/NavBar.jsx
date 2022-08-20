import React, { useEffect } from "react";

const pizzaData = [
  {
    name: "all",
    label: "Hamısı",
  },
  {
    name: "meaty",
    label: "Ətli",
  },
  {
    name: "chicken",
    label: "Toyuqlu",
  },
  {
    name: "spicy",
    label: "Acılı",
  },
  {
    name: "vegeterian",
    label: "Vegeterian",
  },
];

//Filter bölməsi üçün lazım olan filter tipini set edir
const NavBar = ({ setType }) => {
  useEffect(() => {
    // scroll detector
    const handleScroll = (event) => {
      const li = document.querySelectorAll(".Filter li");
      const pizza = document.querySelector(".pizza");
      if (window.scrollY > 271) {
        li.forEach((li) => {
          pizza.style.position = "sticky";
          pizza.style.top = "0";
          li.style.cssFloat = "left";
        });
      } else if (window.scrollY === 0) {
        li.forEach((li) => {
          li.style.cssFloat = "none";
          pizza.style.position = "relative";
          // pizza.style.top = "0";
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Filter">
      <ul>
        {pizzaData.map((item) => (
          <li key={item.name}>
            <a
              className="active"
              name={item.name}
              href="#rr"
              onClick={() => setType(item.name)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
