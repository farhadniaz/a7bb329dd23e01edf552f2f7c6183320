import styled from "styled-components";
import Header from "../Components/Hotel/Header"
import HotelSelection from "../Components/Hotel/Selection";

const Wrapper = styled.div`
.step-bar-container {
    margin-bottom: 24px;
}
.step-bar { margin-top: 24px;}
`;
const HotelSelectionPage = () => {
    return <Wrapper>
        <Header />
        <HotelSelection />
    </Wrapper>
}

export default HotelSelectionPage;