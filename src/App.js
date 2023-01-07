import logo from "./logo.svg";
import "./App.css";
import Productlists from "./component/Productlists";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cardlists from "./component/Cardlists";
function App() {
    return (
        <div>
           
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Productlists />} />
                    <Route path="/cardlist" element={<Cardlists/>} />

                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;
