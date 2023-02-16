import React from 'react';
import styled from 'styled-components';
import PangImage from '../asset/images/slamdunk.jpg';
import back from '../asset/images/common.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../style/home.css';
import '../asset/font/font.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/qustions');
  };
  return (
    <Wrapper className="main">
      <Header className="header">
        나와 어울리는🏀 <br />
        슬램덩크 속 캐릭터는?
      </Header>
      <Contents>
        <Title className="contents">나와 어울리는 인물은?</Title>
        <LogoImage className="img">
          <img src={PangImage} />
        </LogoImage>
        <Desc className="contents">가벼운 설문으로 나와 잘 어울리는 인물을 찾아봅시다.</Desc>
        <Button style={{ marginTop: '10px', backgroundColor: '#FF6E31', border: 'none', marginBottom: '30px' }} onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-width: 350px;
  max-width: 520px;
`;

const Header = styled.div`
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2em;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 1.3em;
  margin: 20px;
`;
