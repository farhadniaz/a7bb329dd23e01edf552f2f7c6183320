import { Link } from "react-router-dom";
import { pageLinks } from "./utils"
const NotFound = () => {
    return <div>
        404 <br />
        <Link to={pageLinks.home}>Ana sayfa</Link>
    </div>
}

export default NotFound;