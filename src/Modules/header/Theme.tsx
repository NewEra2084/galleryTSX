import { useEffect, useState } from "react";

export const Theme = () => {
  const [theme, setTheme] = useState("light");
  function lightDark() {
    if (localStorage.theme === "dark") {
      setTheme(() => "light");
      localStorage.theme = "light";
    } else {
      setTheme(() => "dark");
      localStorage.theme = "dark";
    }
  }
  useEffect(() => {
    setTheme(localStorage.theme);
  }, []);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      className=""
      onClick={() => {
        lightDark();
      }}
    >Сменить тему</button>
  );
}
