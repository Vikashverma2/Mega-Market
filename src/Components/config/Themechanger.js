import { useEffect, useState } from "react";

function ThemeChanger() {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else if (theme === "light-theme") {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <>
  <button onClick={toggleTheme}>changer theme</button>
  </>;
}

export default ThemeChanger;
