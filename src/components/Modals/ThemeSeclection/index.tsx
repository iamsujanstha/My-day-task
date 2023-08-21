import { StyledThemeContainer } from "./style"; // Correct the import path
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setThemeColor } from "@/redux/tasks/action";
import Theme1 from '@/assets/images/theme1.jpg'
import bgImage from "@/assets/images/background.jpg";
import Theme2 from '@/assets/images/theme2.jpg'
import Theme3 from '@/assets/images/theme3.jpg'

const colorTheme = [
  { color: "#FFD6D6" },
  { color: "#358e89" },
  { color: "#b372b4" },
  { color: "#f7b801" },
  { color: "#043c1f" },
  { color: "#00b801" },
  { color: "#c7beef" },
  { color: "#bdd11f" },
  { color: "#e0bfd1" },
  { color: "#99c0cf" },
  { img: Theme1.src },
  { img: bgImage.src },
  { img: Theme2.src },
  { img: Theme3.src },
  
];

const ThemeModal = () => {
  const [active, setActive] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (theme: any, index: number) => {
    dispatch(setThemeColor(theme));
    localStorage.setItem("theme", JSON.stringify(theme));
    setActive(index);
  };

  return (
    <StyledThemeContainer>
      <div className="theme-container">
        <p>Sort by</p>
        <p>Theme</p>
        <ul className="theme-list">
          {colorTheme.map((theme, index) => (
            <li
              key={index}
              style={{ backgroundColor: theme.color }}
              onClick={() => handleClick(theme, index)}
              className={active === index ? "active" : ""}
            >
              {theme.img ? (
                <img src={theme.img} alt="img" layout="fill" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </StyledThemeContainer>
  );
};

export default ThemeModal;
