import styled from "styled-components";
import { Col, Container } from "../Layout"
import { blue } from "../../styles/colors";

const Wrapper = styled.header`
background:${blue};
color: white;
margin-bottom: 60px;
`;
const Header = () => {
    return <Wrapper className="header">
        <Container style={{ justifyContent: "space-between" }} >
            <Col span={4}>
                <h1>Otel</h1>
                <span>Rezervsyon Sistemi</span>
            </Col>
            <Col span={4}>
                <button  >Yeni Rezervsyon Yap</button>
            </Col>
        </Container>

    </Wrapper>
}

export default Header;