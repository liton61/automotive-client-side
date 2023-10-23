import { useEffect, useState } from "react";
import theme from '../../assets/mode.png';


const Theme = () => {
    const [mode, setMode] = useState("light");
    function handleChangeTheme() {
        const html = document.documentElement
        if (mode === "light") {
            html.classList.remove("light")
            html.classList.add("dark")
            setMode("dark")
            localStorage.setItem("mode", "dark")
        }
        else {
            html.classList.remove("dark")
            html.classList.add("light")
            setMode("light")
            localStorage.setItem("mode", "light")
        }
    }
    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light"
        document.documentElement.classList.add(currentMode)
        setMode(currentMode)
    }, [])
    return (
        <div>
            <img className="w-10 cursor-pointer" onClick={handleChangeTheme} src={theme} alt="" />
        </div>
    );
};

export default Theme;