import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import HotelSelectin from "./HotelSelectin";
import NotFound from "./NotFound";

export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hotel-selectin"  component={HotelSelectin} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}