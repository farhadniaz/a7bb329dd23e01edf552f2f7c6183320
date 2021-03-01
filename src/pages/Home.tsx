import { Link } from "react-router-dom";
import { pageLinks } from "./utils"
import { Col, Container } from "../Components/Layout";
import Logo from "../Components/Logo";
import Button from "../Components/Common/Button"
const HomePage = () => {
    return <Container gutter={12}>
        <Col span={12}>
            <Logo />
        </Col>
        <Col span={12}
            style={{ textAlign: "center" }}
        >
            <h1>Frontend Task</h1>
            <br />
            <p>Please click the button to book a hotel with a great view!!!</p>
            <br />
            <Button>
                <Link to={pageLinks.hotelSelection}>hotel Selection</Link>
            </Button>
            <br />
            <br />
            <img src={process.env.PUBLIC_URL + '/hotel.png'} />

        </Col>
    </Container >
}

export default HomePage;