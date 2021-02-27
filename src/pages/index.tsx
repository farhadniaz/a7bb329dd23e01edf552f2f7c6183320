import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import HotelSelection from "./HotelSelection";
import NotFound from "./NotFound";
import { pageLinks } from "./utils"
import { GlobalStyle } from "../Components/Layout";
export default function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Switch>
                <Route path={pageLinks.home} exact component={Home} />
                <Route path={pageLinks.hotelSelection} component={HotelSelection} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}