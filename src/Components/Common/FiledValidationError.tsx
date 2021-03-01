import React, { FC } from "react";
import { FieldError } from "react-hook-form";
import styled from 'styled-components';
const Wrapper = styled.div`
color:red;
`;
interface IProps {
  message?: string;
  error: (FieldError | undefined)[] | undefined | FieldError;
}
const FiledValidationError: FC<IProps> = props => {
  let { message, error } = props;
  console.log(error);
  let defaultMessage;
  // @ts-ignore
  switch (error?.type) {
    case "required":
      defaultMessage = "This filed is required!";
      break;
    case "minLength":
      defaultMessage = "Pleas check filed length!";
      break;

    default:
      defaultMessage = "";
      break;
  }
  const e: FieldError | undefined = error && (error instanceof Array ? error[0] : error);

  return error ? <Wrapper>{e?.message || message || defaultMessage}</Wrapper> : null;
};

export default FiledValidationError;
