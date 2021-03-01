import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  .steps {
    &__item {
      flex: 1;
      display: inline-block;
      position: relative;
      &.passed:after {
        background: #ac2020;
      }
      &.passed .steps__item__info,
      &.current .steps__item__info {
        color: #333;
      }

      &.passed .steps__item__icon,
      &.current .steps__item__icon {
        border-color: black;
      }
      &:last-child {
        flex: none;
        text-align: right;
      }
      &__info {
        position: relative;
        z-index: 2;
        color: #ccc;
      }
      &__icon {
        border: 1px solid #ccc;
        background: white;
        border-radius: 100%;
        font-size: 30px;
        text-align: center;
        width: 70px;
        display: inline-block;
        height: 70px;
        line-height: 70px;
      }
      &__title {
        display: block;
        text-align: left;
        padding: 4px 8px;
        margin-top: 8px;
      }
      &:after {
        content: " ";
        width: 100%;
        height: 2px;
        background: #ccc;
        display: block;
        position: absolute;
        top: 38px;
        z-index: 1;
      }
    }
  }
`;
