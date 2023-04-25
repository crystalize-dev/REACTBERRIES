import './App.css';
import AppRouter from "./routing/appRouter";
import {LocationContext} from "./context/locationContext";
import {useLocation} from "./hooks/useLocation";


function App() {
    const [location, setLocation] = useLocation()

    return (
        <LocationContext.Provider value={{location, setLocation}}>
            <div className="container">
                <AppRouter/>
            </div>
        </LocationContext.Provider>
    );
}

export default App;
