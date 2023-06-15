import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    localStorage.setItem("darkMode", updatedDarkMode.toString());
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <div className="container_dark_mode_btn">
        <button className="dark_mode_btn" onClick={toggleDarkMode}>
          <span className="icon_sum">
            <i className="fa-solid fa-sun icon_sun"></i>
          </span>
          <span className="icon_moon">
            <i className="fa-solid fa-moon icon_moon"></i>
          </span>
          <span className="ball"></span>
        </button>
      </div>
    </>
  );
};

export default DarkMode;
