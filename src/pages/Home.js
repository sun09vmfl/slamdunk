import React from 'react';
import styled from 'styled-components';
import PangImage from '../asset/images/slamdunk.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/qustions');
  };
  return (
    <Wrapper style={{ maxWidth: '920px', margin: '0 auto' }}>
      <Header>
        🏀 나와 어울리는 <br />
        슬램덩크 속 캐릭터는? 🏀
      </Header>
      <Contents>
        <Title>나와 어울리는 인물은?</Title>
        <LogoImage>
          <img src={PangImage} className="rounded-circle" alt="..." width={550} height={550} />
        </LogoImage>
        <Desc>가벼운 설문으로 나와 잘 어울리는 인물을 찾아봅시다.</Desc>
        <Button style={{ marginTop: '10px', backgroundColor: '#FF6E31', border: 'none', marginBottom: '30px' }} onClick={handleClickButton}>
          테스트 시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
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
