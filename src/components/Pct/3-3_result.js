import React, { useEffect } from "react";
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

import spring_bright_color from "../../photo/spring_bright_color.png";
import spring_light_color from "../../photo/spring_light_color.png";
import summer_light_color from "../../photo/summer_light_color.png";
import summer_mute_color from "../../photo/summer_mute_color.png";
import autumn_mute_color from "../../photo/autumn_mute_color.png";
import autumn_deep_color from "../../photo/autumn_deep_color.png";
import winter_deep_color from "../../photo/winter_deep_color.png";
import winter_bright_color from "../../photo/winter_bright_color.png";

import hair_spring from "../../photo/hair_spring.png";
import hair_summer from "../../photo/hair_summer.png";
import hair_autumn from "../../photo/hair_autumn.png";
import hair_winter from "../../photo/hair_winter.png";


import cos_spring_light from '../../photo/cos_spring_light.png'
import cos_spring_bright from '../../photo/cos_spring_bright.png'
import cos_summer_light from '../../photo/cos_summer_light.png'
import cos_summer_mute from '../../photo/cos_summer_light.png'
import cos_autumn_mute from '../../photo/cos_autumn_mute.png'
import cos_autumn_deep from '../../photo/cos_autumn_deep.png'
import cos_winter_deep from '../../photo/cos_winter_deep.png'
import cos_winter_bright from '../../photo/cos_winter_bright.png'


function PctResult() {
  console.log("pctresult");
  const location = useLocation();
  const season = location.state.season;
  const tone = location.state.tone;
  console.log(season);

  const [personal_color, set_personal_color] = useState("");
  const [personal_color_exp, set_personal_color_exp] = useState("");
  const [personal_color_keyword, set_personal_color_keyword] = useState("");
  const [personal_color_color, set_personal_color_color] = useState("");
  const [personal_color_hair, set_personal_color_hair] = useState("");
  const [personal_color_hair_exp, set_personal_color_hair_exp] = useState("");
  const [personal_color_cos, set_personal_color_cos] = useState("");
  const [personal_color_star, set_personal_color_star] = useState("");

  var Color = {
    spring_bright: (
      <img
        alt="spring_bright"
        src={spring_bright_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
    spring_light: (
      <img
        alt="face_2"
        src={spring_light_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
    summer_light: (
      <img
        alt="summer_light"
        src={summer_light_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
    summer_mute: (
      <img
        alt="summer_mute"
        src={summer_mute_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
    autumn_mute: (
      <img
        alt="autumn_mute"
        src={autumn_mute_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
    autumn_deep: (
      <img
        alt="autumn_deep"
        src={autumn_deep_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
    winter_deep: (
      <img
        alt="winter_deep"
        src={winter_deep_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
    winter_bright: (
      <img
        alt="winter_bright"
        src={winter_bright_color}
        height="200"
        width="300"
        border-radius="30px"
      />
    ),
  };

  var result;

  // npm install react-awesome-button // 결과화면 버튼
  // npm install @mui/material @emotion/styled @emotion/react // 결과화면 사진

  switch (season) {
    case "spring":
      if (tone === "first") {
        useEffect(() => {
          result = "spring_bright";
          set_personal_color("봄 웜 브라이트");
          set_personal_color_exp(
            "봄 웜 브라이트는 선명하고 밝으며 흰 기가 많이 도는 순한 파스텔 톤으로, 상큼하고 또렷한 얼굴을 가지고 있다. 노란 베이스의 중명도~고명도, 고채도의 선명한 색상이다. 화사하며 생동감과 에너지를 느끼게 하며, 눈에 잘 띈다. 고명도, 고채도의 색감이 잘 어울리나 차갑고 텁텁한 느낌의 색감은 얼굴을 칙칙하게 만들 수 있다는 점을 주의해야 한다."
          );
          set_personal_color_keyword(
            "#걸리쉬한, #순한, #생기넘치는 #여리여리한 #부드러운 #귀여운 #따듯한"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_spring);
          set_personal_color_hair_exp(
            "오렌지계열의 쿠퍼브라운이나 옐로계열의 골드브라운, 밀크브라운을 추천한다. \n피부톤에 따라 색상의 밝고 어두운 정도를 조절하되 푸른계열과 녹색계열의 색상은 피한다."
          )
          set_personal_color_cos(cos_spring_bright);
        });
  }
       else {
        useEffect(() => {
          result = "spring_light";
          set_personal_color("봄 웜 라이트");
          set_personal_color_exp(
            "봄 웜 라이트는 따듯한 유형으로, 선명하고 밝으며 흰 기가 많이 도는 파스텔 톤이다. 맑고 생기있는 피부톤을 가지고 있으며, 가볍고 순한 느낌을 줄 수 있다. 봄 웜 라이트는 노란 베이스의 부드러운 색과 잘 어울리며, 흰 색이 섞인 고명도의 색상과 매치했을 때 가장 잘 어울린다. 하지만, 블랙-화이트처럼 극단적인 느낌의 대비감은 소화하기 힘들 수 있다."
          );
          set_personal_color_keyword(
            "#밝은 #생기넘치는 #발랄한 #선명한 #귀여운 #로맨틱한 #따뜻한"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_spring);
          set_personal_color_hair_exp(
            "오렌지계열의 쿠퍼브라운이나 옐로계열의 골드브라운, 밀크브라운을 추천한다.\n 피부톤에 따라 색상의 밝고 어두운 정도를 조절하되 푸른계열과 녹색계열의 색상은 피한다."
          );
          set_personal_color_cos(cos_spring_light);
        });
      }
      break;
    case "summer":
      if (tone === "first") {
        useEffect(() => {
          result = "summer_light";
          set_personal_color("여름 쿨 라이트");
          set_personal_color_exp(
            "여름 쿨 라이트는 싱그럽고 밝고 투명한 피부를 가지고 있으며, 흰색이나 연하고 밝은 회색이 섞여 싱싱한 느낌을 준다. 대체로 고명도의 은은한 파스텔 톤과, 부드럽고 맑은 색감이 잘 어울리며, 흰색의 옷을 입었을 때 깔끔한 여름 쿨 라이트 특유의 느낌이 살아나고 은은한 광채도 느낄 수 있다. 다만, 인위적인 느낌을 소화하기 힘들 수 있으니 검은색 보다는 부드러운 먹색이나 차콜과 같은 색을 추천한다."
          );
          set_personal_color_keyword(
            "#엘레강스한, #맑은, #싱그러운, #시원한, #깨끗한, #은은한, #청량한"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_summer);
          set_personal_color_hair_exp(
            "애쉬계열의 애쉬블론드, 애쉬브라운이나 와인브라운, 내추럴블랙, 브라운블랙을 추천한다. 노란계열의 색상은 피한다."
          )
          set_personal_color_cos(cos_summer_light)
        });
      }else {
        useEffect(() => {
          result = "summer_mute";
          set_personal_color("여름 쿨 뮤트");
          set_personal_color_exp(
            "여름 쿨 뮤트는 명도가 낮아 눈이 피곤하지 않은 은은한 느낌을 준다. 대체로 회색기가 많이 섞인 톤 다운된 파스텔 계열의 색상이 잘 어울린다. 팔레트의 범위가 넓어 소화할 수 있는 색상이 풍부하다는 장점이 있고, 탁색의 옷을 입었을 때 성숙해보이는 특유한 느낌이 살아나 차분한 무드를 낼 수 있다. 다만 여름 쿨 뮤트는 검은색과 같이 어두운 색을 사용하면 피곤해보이는 인상을 줄 수 있으므로 어두운 색을 사용하고 싶다면 흰 기가 들어간 색을 사용하는 것을 추천한다.  "
          );
          set_personal_color_keyword(
            "#청초한, #분위기있는, #시원한, #깨끗한, #우아한, #세련된, #차분한"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_summer);
          set_personal_color_hair_exp(
            "애쉬계열의 애쉬블론드, 애쉬브라운이나 와인브라운, 내추럴블랙, 브라운블랙을 추천한다. 노란계열의 색상은 피한다."
          )
          set_personal_color_cos(cos_summer_mute)
        });
      }
      break;
    case "autumn":
      if (tone === "first") {
        useEffect(() => {
          result = "autumn_mute";
          set_personal_color("가을 웜 뮤트");
          set_personal_color_exp(
            "가을 웜 뮤트는 차분하고 무거운 분위기의 부드러운 색상으로, 대체적으로 고급스러우면서도 편안한 느낌을 가지고 있다. 가을 웜 뮤트는 전반적으로 톤 다운되어있으면서도 너무 어둡지는 않은 색상이 가장 잘 어울린다. 밝은 카키, 올리브, 인디코랄, 아이보리 색상이 베스트 컬러이며, 쨍한 오렌지나 진한 빨간 색의 컬러는 피하는 것이 좋다."
          );
          set_personal_color_keyword(
            " #클래식한, #따뜻한 #부드러운 #유연한 #그윽한 #편안한 #차분한"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_autumn);
          set_personal_color_hair_exp(
            "골드색상을 기본으로 한 골드브라운과 다크브라운이 가장 잘 어울린다. 초록, 빨강계열의 색은 피하는게 좋다."
          )
          set_personal_color_cos(cos_autumn_mute);
        });
      } else {
        useEffect(() => {
          result = "autumn_deep";
          set_personal_color("가을 웜 딥");
          set_personal_color_exp(
            "가을 웜 딥은 저명도의 어둡고 음영 있는 색이 잘 어울리는 타입이다. 이 타입은 고급스럽고 안정된 에너지를 갖고 있다. 옅은 색부터 깊은 색까지 모두 어울려 ‘색조의 여왕’이라고 불리기도 하지만, 흰 빛이 섞인 파스텔 톤은 소화하기 힘들 수 있다."
          );
          set_personal_color_keyword(
            "#클래식한, #고져스한, #깊은,#그윽한, #고급스러운"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_autumn);
          set_personal_color_hair_exp(
            "골드색상을 기본으로 한 골드브라운과 다크브라운이 가장 잘 어울린다. 초록, 빨강계열의 색은 피하는게 좋다."
          )
          set_personal_color_cos(cos_autumn_deep)

        });
      }
      break;
    case "winter":
      if (tone === "first") {
        useEffect(() => {
          result = "winter_deep";
          set_personal_color("겨울 쿨 딥");
          set_personal_color_exp(
            "겨울 쿨 딥은 하얀 스킨톤 덕분에 시크하고 도도한 매력을 풍긴다. 겨울 쿨 딥은 저채도, 저명도의 어둡고 진한 색으로, 흰 빛이 섞인 파스텔 톤보다는 진한 레드나 블랙이 섞인 어두운 컬러와 무게감이 있는 깊은 색감이 잘 어울린다. 검은색이 잘 어울리는 타입으로, 올블랙도 고급지고 세련되게 소화할 수 있다. 다만 회색기가 돌거나 따뜻한 컬러는 연출이 어렵다. 또한 탁하거나 노란기가 많이 섞인 색상은 얼굴과 조화되지 못하여 안색을 칙칙하게 만들 수 있다. 올리브, 오렌지, 코랄 등 주황빛이 들어간 색을 사용할 경우 얼굴의 잡티나 주름이 부각되고, 자칫하면 피곤한 인상을 줄 수 있다."
          );
          set_personal_color_keyword(
            "#시크한, #모던한, #깊은, #도도한, #그윽한"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_winter);
          set_personal_color_hair_exp(
            "블랙색상을 기본으로 한 브라운블랙, 블루블랙이나 다크브라운, 버건디를 추천한다. 골드계열이나 흐린 색은 피한다."
          )
          set_personal_color_cos(cos_winter_deep)
        });
      }else {
        useEffect(() => {
          result = "winter_bright";
          set_personal_color("겨울 쿨 브라이트");
          set_personal_color_exp(
            "겨울 쿨 브라이트는 화사하고 정적인 에너지를 가지고 있으며, 하얗고 맑은 피부톤을 가지고 있다. 고채도의 원색에 가까운 쨍한 색이 잘 어울리는 타입이다. 형광펜을 연상시킬 정도의 밝은색과 잘 맞으며, 액세서리나 검은 머리카락 등의 포인트 디테일로 대비감을 주면 좋다. 다만 탁하거나 노란 기가 많이 섞인 색상은 얼굴과 조화되지 못하여 색만 둥둥 떠보이게 하거나 안색을 칙칙하게 만들 수 있다. 또한 코랄, 오렌지, 골드 등 주황빛이 들어간 색상은 얼굴의 잡티와 주름이 부각되어 보이게하고 자칫하면 피곤한 인상을 줄 수 있다."
          );
          set_personal_color_keyword(
            "#시크한, #모던한, #선명한, #맑은, #과감한, #희귀한, #시원한"
          );
          set_personal_color_color(result);
          set_personal_color_hair(hair_winter);
          set_personal_color_hair_exp(
            "블랙색상을 기본으로 한 브라운블랙, 블루블랙이나 다크브라운, 버건디를 추천한다. 골드계열이나 흐린 색은 피한다."
          )
          set_personal_color_cos(cos_winter_bright)
        });
      }
      break;
  }

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
          <span className="quotation_mark">" </span>

          {personal_color}

          <span className="quotation_mark"> "</span>
        </h1>
      </div>

      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: "#cfe8fc",
                height: "30vh",
                borderRadius: "16px",
                padding: "4%",
              }}
            >
              <br />
              <p className="body">{personal_color_exp}</p>
            </Box>
          </Container>
        </React.Fragment>
      </div>
      <br />
      <br />

      <h2 className="header">AI가 추천하는 나의 키워드</h2>
      <div className="body">{personal_color_keyword}</div>
      <br />

      <h2 className="header">나와 어울리는 색상</h2>
      <div className="photo">{Color[personal_color_color]}</div>
      <br />

      <h2 className="header">추천하는 헤어</h2>
      <div>
        <img src={personal_color_hair} alt="no_hair_image" width="350"></img>
      </div>
      <div className="body">{personal_color_hair_exp}</div>
      <br />

      <h2 className="header">추천하는 화장품</h2>
      <div><img src={personal_color_cos} alt="no_cos_image" width="450"></img></div>
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
