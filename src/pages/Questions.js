import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { QuestionData } from '../asset/data/qustionsdata';
import { createSearchParams, useNavigate } from 'react-router-dom';

const Question = () => {
  // const [selectedData, setSelectedData] = React.useState({});
  const [questionNo, setQuestionNo] = React.useState(0);
  const navigate = useNavigate();

  const [totalScore, setTotalScore] = React.useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);

  const handleClickAnswer = (add, type) => {
    const newScore = totalScore.map(s => (s.id === type ? { id: s.id, score: s.score + add } : s));
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce((acc, curr) => acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), '');
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }

    // if (type === "EI") {
    //   // 기존 스코어에 더한 객체 배열 대체
    //   const addScore = score[0].score + add;
    //   // 새로운 객체
    //   const object = { id: "EI", score: addScore };
    //   // splice 통해 새로운 객체로 해당 객체 변경
    //   score.splice(0, 1, object);
    // } else if (type === "SN") {
    //   const addScore = score[1].score + add;
    //   const object = { id: "SN", score: addScore };
    //   score.splice(1, 1, object);
    // } else if (type === "TF") {
    //   const addScore = score[2].score + add;
    //   const object = { id: "TF", score: addScore };
    //   score.splice(2, 1, object);
    // } else {
    //   const addScore = score[3].score + add;
    //   const object = { id: "JP", score: addScore };
    //   score.splice(3, 1, object);
    // }

    // if (QuestionData.length === questionNo + 1) {
    //   navigate("/result");
    // } else {
    // }
  };

  // React.useEffect(() => {
  //   questionNo === 12 && navigate("/result");
  // }, [questionNo]);

  // const handleCLickAnswerA = (no) => {

  //   // setSelectedData(QuestionData[no + 1]);
  //   setQuestionNo(no + 1);

  //   if (QuestionData.length === no + 1) {
  //     navigate("/result");
  //   }
  // };

  // const handleCLickAnswerB = (no) => {
  //   // setSelectedData(QuestionData[no + 1]);
  //   setQuestionNo(no + 1);
  // };

  return (
    <Container>
      <ProgressBar
        variant="warning"
        animated
        now={(questionNo / QuestionData.length) * 100}
        style={{
          width: '80%',
          marginTop: 20,
        }}
      />
      <Contents>
        <Title>
          {/* {questionNo > 0 ? selectedData.title : QuestionData[0].title} */}
          {QuestionData[questionNo].title}
        </Title>
        <ButtonGroup>
          <Button variant="warning" onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)} style={{ width: '40%', minHeight: '200px', fontSize: '15pt' }}>
            {QuestionData[questionNo].answera}
            {/* {questionNo > 0 ? selectedData.answera : QuestionData[0].answera} */}
          </Button>
          <Button
            variant="warning"
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
            style={{
              width: '40%',
              marginLeft: '20px',
              minHeight: '200px',
              fontSize: '15pt',
            }}
          >
            {QuestionData[questionNo].answerb}
            {/* {questionNo > 0 ? selectedData.answerb : QuestionData[0].answerb} */}
          </Button>
        </ButtonGroup>
      </Contents>
      <div className="adfit" />
    </Container>
  );
};

export default Question;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-width: 350px;
  max-width: 520px;
  margin: 0 auto;
  background: #ffa07a;
  align-items: center;
  flex-direction: column;
  font-family: 'GangwonEdu_OTFBoldA', 'Noto Sans KR', 'Pretendard Variable', sans-serif;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 100%;
`;

const Title = styled.div`
  width: 90%;
  text-align: center;
  color: white;
  font-size: 30pt;
  font-family: 'GangwonEdu_OTFBoldA', 'Noto Sans KR', 'Pretendard Variable', sans-serif;
  font-weight: 550;
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  font-family: 'GangwonEdu_OTFBoldA', 'Noto Sans KR', 'Pretendard Variable', sans-serif;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
