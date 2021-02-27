import { Link } from "react-router-dom";
import { pageLinks } from "./utils"

const NotFound = () => {
    return <div>
        home
        <Link to={pageLinks.hotelSelection}>hotel Selection</Link>
    </div>
}

export default NotFound;