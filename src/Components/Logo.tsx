import { Link } from "react-router-dom";
import styled from "styled-components";
import { pageLinks } from "../pages/utils"
const Wrapper = styled.div`
display:flex;
height: 300px;
.Logo{
    &__link{
        margin:auto;
    }
}
`;
const Logo = () => {
    return <Wrapper className="Logo">
        <Link to={pageLinks.home} className="Logo__link">
            <img src={process.env.PUBLIC_URL + '/teknasyon-logo.png'} />
        </Link>
    </Wrapper>
}

export default Logo;