import { css } from "styled-components";
const CardStyle = css`
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 16px;
  margin: 8px;
  margin-bottom: 16px;
  display: block;
  cursor: pointer;

  input[type="radio"] {
    display: none;
  }
  &.selected,
  &:hover {
    border-color: red;
  }

  .card__sub-info {
    display: flex;
    justify-content: space-between;
  }

  img {
    margin: 16px auto;
  }
  .card__sub-info__value {
    font-size: 20px;
  }
  figcaption {
    display: none;
  }
`;
export default CardStyle;
