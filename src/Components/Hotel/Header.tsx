import styled from "styled-components";
import { useResetHotelState } from "../../store/hotel/actions";
import Button from "../../Components/Common/Button";
import { Col, Container } from "../Layout"
import { blue } from "../../styles/colors";

const Wrapper = styled.header`
background:${blue};
color: white;
margin-bottom: 60px;
.header__rest-btn {
    margin: auto;
    margin-right: 0;
}
`;
const Header = () => {

    const restHotelState = useResetHotelState();

    const reset = () => {
        restHotelState()
    }
    return <Wrapper className="header">
        <Container style={{ justifyContent: "space-between" }} >
            <Col span={4}>
                <h1>Otel</h1>
                <span>Rezervsyon Sistemi</span>
            </Col>
            <Col span={4} style={{ display: "flex" }}>
                <Button className="header__rest-btn" onClick={reset}>Yeni Rezervsyon Yap</Button>
            </Col>
        </Container>
    </Wrapper>
}

export default Header;