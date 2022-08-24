import "./DarkMode.css";
import { ChangeEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from 'src/modules/settings/settingsActions';
import selectors from 'src/modules/settings/settingsSelectors';

const DarkMode = () => {
    const dispatch = useDispatch();
    const settings = useSelector(selectors.selectSettings);

    useEffect(() => {
        if (!settings) {
            localStorage.setItem("theme", "dark");
        }
    }, [])

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        // document.documentElement.setAttribute("data-theme", "dark");
    };
    
    const setLight = () => {
        localStorage.setItem("theme", "light");
        // document.documentElement.setAttribute("data-theme", "light");
    };
    
    const storedTheme = localStorage.getItem("theme");
    
    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);
    
    if (defaultDark) {
        setDark();
    }
    
    const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
        let theme = ''
        if (e.target.checked) {
            theme = 'default';
            setDark();
        } else {
            theme = 'light';
            setLight();
        }
        var values = {
            backgroundImages: [],
            logos: [],
            theme: theme
        }
        dispatch(actions.doSave(values));
    };
    return (
        <div className="toggle-theme-wrapper">
            
            
            <label className="dropdown-item" htmlFor="checkbox">
            <div className="darkmode-toggle" 
                              style={{
                                display: 'none',}}
                              ><i className="fas fa-moon"></i> Darkmode</div>
            <div className="lightmode-toggle"><i className="fas fa-sun"></i> Lightmode</div>
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                />
               
            </label>
          
        </div>
        
    );
};

export default DarkMode;