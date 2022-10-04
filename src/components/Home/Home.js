import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import QuestionView from '../QuestionView/QuestionView';
import ScoreView from '../ScoreView/ScoreView';

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    questions: state.scoreReducer.questions,
  };
};

const QUESTIONS = [
  {
    id: 1,
    answers: [
      {id: 0, label: 'Rabat', correct: true},
      {id: 1, label: 'Casablanca', correct: false},
    ],
    image: null,
    label: 'Capitale du maroc ?',
    time: 60,
  },
  {
    id: 2,
    answers: [
      {id: 0, label: 'Espagne', correct: true},
      {id: 1, label: 'italie', correct: false},
    ],
    label:
      'Dans quel pays peut-on trouver la Catalogne, l’Andalousie et la Castille ?',
    time: 30,
  },
  {
    id: 3,
    answers: [
      {id: 0, label: 'Vercingétorix', correct: false},
      {id: 1, label: 'César', correct: true},
      {id: 2, label: 'Attila', correct: false},
    ],
    label: 'Qui a dit : « Le sort en est jeté » (Alea jacta est) ?',
    time: 60,
  },
];

function Home({dispatch}) {
  const user = {
    name: 'Houssame',
  };

  useState(() => {
    // We suppose the user logged in

    var action = {type: 'SIGN_IN', value: {user}};
    dispatch(action);
    action = {type: 'SET_QUESTIONS', value: {questions: QUESTIONS}};
    dispatch(action);
  });

  return (
    <SafeAreaView>
      <QuestionView />
    </SafeAreaView>
  );
}

export default connect(mapStateToProps)(Home);
