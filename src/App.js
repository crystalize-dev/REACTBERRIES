import './App.css';
import AppRouter from "./routing/appRouter";
import {useState} from "react";


function App() {
    const [lang, setLang] = useState('ru')
    const [location, setLocation] = useState('Москва')


  return (
    <div className="container">
        <AppRouter/>
    </div>
  );
}

export default App;
