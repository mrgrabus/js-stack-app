import { useEffect, useState } from "react";
import firebase from "../../lib/Firebase";
import Sentence from "../../components/Sentence/Sentence";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import BackButton from "../../components/BackButton/BackButton";
import SuggestedWords from "../../components/SuggestedWords/SuggestedWords";
import ActionButton from "../../components/ActionButton/ActionButton";
import PopupAlert from "../../components/PopupAlert/PopupAlert";
import shuffle from "shuffle-array";

const Home = () => {
  const ref = firebase.firestore().collection("sentences");
  const [sentences, setSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [successfullyGuessed, setSuccessfullyGuessed] = useState(0);
  const [clickedWord, setClickedWord] = useState("");
  const [popupState, setPopupState] = useState({
    visible: false,
    success: false,
  });

  const checkAnswer = () => {
    if (clickedWord === sentences[currentSentence].correctWord) {
      setSuccessfullyGuessed(successfullyGuessed + 1);
      
      setSentences([...sentences, ])
      setPopupState({ visible: true, success: true });
      if(successfullyGuessed === 9) {
        alert("Congratulations! Game over");
      }
    } else {
      setPopupState({ visible: true, success: false });
    }
  };

  const continueHandler = () => {
    setSentences([...sentences, sentences[currentSentence]])
    setCurrentSentence(currentSentence + 1);
    setClickedWord("");
    setPopupState({ visible: false, success: true });
  };

  const backAction = () => {
    setCurrentSentence(currentSentence - 1);
  };

  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSentences(shuffle(items));
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="main-wrapper">
        <div className="top-panel">
          {currentSentence !== 0 && <BackButton backAction={backAction} />}
          <ProgressBar width={successfullyGuessed} />
        </div>
        <div className="main-panel">
          <p className="mt-40">Fill in the missing word</p>
          <Sentence
            englishSentence={sentences[currentSentence]?.englishSentence}
            germanSentence={sentences[currentSentence]?.germanSentence}
            correctWord={sentences[currentSentence]?.correctWord}
            englishCorrectWord={sentences[currentSentence]?.englishCorrectWord}
            clickedWord={clickedWord}
            setClickedWord={setClickedWord}
            popupState={popupState}
          />
          <SuggestedWords
            className="mt-40"
            words={sentences[currentSentence]?.suggestedWords}
            setClickedWord={setClickedWord}
            clickedWord={clickedWord}
          />
          <ActionButton
            clickedWord={clickedWord}
            checkAnswer={checkAnswer}
            continueHandler={continueHandler}
          />
        </div>
        {popupState.visible && (
          <PopupAlert
            correctWord={sentences[currentSentence]?.correctWord}
            success={popupState.success}
            continueHandler={continueHandler}
          />
        )}
      </div>
    </>
  );
};
export default Home;
