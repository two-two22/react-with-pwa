import React from "react";
import { Background, LoadingText } from "./Styles";
import Spinner from "./assets/loading.png";

export default () => {
  return (
    <Background>
      <LoadingText>��ø� ��ٷ� �ּ���.</LoadingText>
      <img src={Spinner} alt="�ε���" width="5%" />
    </Background>
  );
};
