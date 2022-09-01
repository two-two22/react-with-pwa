import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import "./3-3_result.css";
import { Link } from "react-router-dom";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { blue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function PctResult() {
  console.log("pctresult");
  const result = useLocation();
  console.log(result);

  const [personal_color, set_personal_color] = useState("가을 웜 딥");
  const [personal_color_exp, set_personal_color_exp] = useState(
    "어쩌구 어쩌구"
  );

  // npm install react-awesome-button // 결과화면 버튼
  // npm install @mui/material @emotion/styled @emotion/react // 결과화면 사진

  return (
    <>
      <h1 className="header">분석 결과</h1>
      <h2 className="header">퍼스널컬러 분석</h2>
      <br />
      <br />

      <div>
        <Stack id="avatar">
          <Avatar
            src={require("../../photo/sekyung.jpg")}
            sx={{ width: 120, height: 120, bgcolor: blue[700] }}
          />
        </Stack>
      </div>
      <br />
      <br />
      <br />

      <div>
        <h1 id="personal_color">
          <span className="quotation_mark">"</span>

          {personal_color}

          <span className="quotation_mark">"</span>
        </h1>
      </div>

      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box
              sx={{ bgcolor: "#cfe8fc", height: "30vh", borderRadius: "16px" }}
            >
              <br />
              ‘가을 웜 딥 톤’은 저명도의 어둡고 음영 있는 색이 잘 어울리는
              타입이다. 이 타입은 고급스럽고 안정된 에너지를 갖고 있다. 옅은
              색부터 깊은 색까지 모두 어울려 ‘색조의 여왕’이라고 불리기도
              하지만, 흰 빛이 섞인 파스텔 톤은 소화하기 힘들 수 있다.
            </Box>
          </Container>
        </React.Fragment>
      </div>
      <br />
      <br />

      <h2 className="header">AI가 추천하는 나의 키워드</h2>
      <br />

      <h2 className="header">나와 어울리는 색상</h2>
      <br />

      <h2 className="header">추천하는 헤어</h2>
      <br />

      <h2 className="header">추천하는 화장품</h2>
      <br />

      <h2 className="header">같은 퍼스널컬러를 가진 연예인</h2>
      <br />

      <p>
        * 화장을 한 상태면 결과가 정확하지 않을 수 있습니다.
        <br />
        <br />
        * 조명에 따라서 결과가 다르게 나타날 수 있습니다
        <br />
        <br />
      </p>

      <Link to="/3-1-1_ai">
        <AwesomeButton type="secondary">AI 퍼스널컬러 분석하기</AwesomeButton>
      </Link>
      <br />
      <br />

      <Link to="/3-2-1_self">
        <AwesomeButton type="secondary">직접 퍼스널컬러 분석하기</AwesomeButton>
      </Link>
      <br />
      <br />

      <Link to="/">
        <AwesomeButton type="secondary">나의 얼굴 분석하기</AwesomeButton>
      </Link>
      <br />
      <br />
    </>
  );
}

export default PctResult;
