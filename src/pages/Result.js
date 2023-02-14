import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import queryString from "query-string";
import { ResultData } from '../asset/data/resultdata';
// import KakaoShareButton from "../components/KakaoShareButton";

const Result = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [searchParams] = useSearchParams();
  // const mbti = queryString.parse(location.search).mbti;
  const mbti = searchParams.get('mbti');
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find(s => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  // React.useEffect(() => {
  //   // window.location.reload();
  // }, [mbti]);

  return (
    <>
      <Container>
        <Header>🏀 바로 이 사람 🏀</Header>
        <Wrapper>
          <Title>결과 보기</Title>
          <LogoImage>
            <img src={resultData.image} alt="옴팡사진" className="rounded-circle" width={350} height={350} />
          </LogoImage>
          <Desc>
            당신과 찰떡궁합인 인물은 바로 이 사람, <br />'{resultData.name}' 입니다.
          </Desc>
          <Desc
            style={{
              marginTop: 10,
            }}
          >
            {resultData.info} <br />
            {resultData.desc}
            <br />
            {resultData.desc1}
            <br />
            {resultData.desc2}
            <br />
          </Desc>
          {/* <ShareButtonGroup>
            <div className="addthis_inline_share_toolbox" />
          </ShareButtonGroup> */}
          <div>
            <Button
              onClick={() => navigate('/')}
              className="btn-danger"
              style={{
                width: 170,
                fontFamily: '강원교육모두 OTF',
                fontSize: 25,
                marginTop: 20,
              }}
            >
              Retry
            </Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Result;

const Container = styled.div`
  display: flex;
  height: 120vh;
  width: 100%;
  background: #fffacd;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  font-size: 35pt;
  font-family: 'GangwonEdu_OTFBoldA', 'Noto Sans KR', sans-serif;
  height: 10vh;
  width: 100%;
  background: #ffa07a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 70px;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'GangwonEdu_OTFBoldA', 'Noto Sans KR', sans-serif;
`;

const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 30pt;
  font-family: 'GangwonEdu_OTFBoldA', 'Noto Sans KR', sans-serif;
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 15pt;
  font-family: 'GangwonEdu_OTFBoldA', 'Noto Sans KR', sans-serif;
  font-weight: 500;
  width: 90%;
  text-align: center;
`;

// const ShareButtonGroup = styled.div`
//   margin-top: 20px;
//   display: flex;
//   // flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
