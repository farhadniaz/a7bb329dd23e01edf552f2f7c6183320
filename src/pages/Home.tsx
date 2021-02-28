import { Link } from "react-router-dom";
import { pageLinks } from "./utils"
import { Col, Container } from "../Components/Layout";
import Logo from "../Components/Logo";

const HomePage = () => {
    return <Container gutter={12}>
        <Col span={12}>
            <Logo />
        </Col>
        <Col span={12} style={
            { textAlign: "center" }}
        >
            <h1>
                Front end task
              </h1>
            <button>
                <Link to={pageLinks.hotelSelection}>hotel Selection</Link>
            </button>
        </Col>
    </Container >
}

export default HomePage;