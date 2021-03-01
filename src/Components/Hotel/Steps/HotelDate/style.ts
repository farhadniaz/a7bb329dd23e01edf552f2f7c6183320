import styled from "styled-components";
import { medias } from "../../../Layout";
const Wrapper = styled.section`
  padding: 34px;
  border: 1px solid #ccc;
  border-radius: 12px;
  /***/
  .hotel-date-wrapper__inner {
    display: flex;
    border: 1px solid;
    margin-top: 24px;
    flex-direction: column;
  }
  .hotel-date-wrapper__inner .date-picker-item,
  .hotel-date-wrapper__inner .hotel-date__item {
    flex: 1;
  
    padding: 24px 12px;

    width: 100%;
    border-right: 0;

  }
  /***/

  .date-picker-item {
    flex: 1;
  }

  .hotel-date-wrapper__inner .hotel-date__item:last-child {
    border-right: 0;
  }

  .date-picker-item label,
  .hotel-date-wrapper__inner .hotel-date__item label {
    display: block;
    margin-bottom: 12px;
  }

  .hotel-date-wrapper__inner .hotel-date__item select {
    width: 100%;
  }

  @media ${medias.lg}{ {
    .hotel-date-wrapper__inner .date-picker-item,
    .hotel-date-wrapper__inner .hotel-date__item {
      border-right: 1px solid;
    }

    .hotel-date-wrapper__inner {
      flex-direction: row;
    }
  }
`;
export default Wrapper;
