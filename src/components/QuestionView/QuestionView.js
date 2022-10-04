import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Header/Header';
import QstNbTime from './QstNbTime';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const mapStateToProps = state => ({
  questions: state.scoreReducer.questions,
  index: state.scoreReducer.index,
  userAnswers: state.scoreReducer.userAnswers,
});

function QuestionView({index, questions, userAnswers, dispatch, navigation}) {
  const [selection, setSelection] = useState(false);

  const _submitAction = () => {
    if (index < questions.length) {
      var action = {type: 'INCREMENT_INDEX', value: {index: index + 1}};
      dispatch(action);
      action = {
        type: 'SET_USER_ANSWERS',
        value: {userAnswers: [...userAnswers, selection]},
      };
      dispatch(action);
    } else {
      navigation.navigate('ScoreView');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.timeContainer}>
        <QstNbTime questionNumber={index} questions={questions} />
      </View>
      <View style={styles.form}>
        <Text style={styles.question}>Question {index + 1}</Text>
        <Text style={styles.questionLabel}>{questions[index].label}</Text>
        {questions[index].answers &&
          questions[index].answers.map(answer => {
            return (
              <View style={styles.answerContainer} key={answer.id}>
                <CheckBox
                  value={selection == answer.id ? true : false}
                  onValueChange={() => {
                    setSelection(answer.id);
                  }}
                  style={styles.checkbox}
                />
                <Text style={styles.answerLabel}>{answer.label}</Text>
              </View>
            );
          })}
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          _submitAction();
        }}>
        <Text style={styles.submitButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

export default connect(mapStateToProps)(QuestionView);

const styles = StyleSheet.create({
  mainContainer: {
    height: HEIGHT,
    width: WIDTH,
    alignItems: 'center',
  },
  timeContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: HEIGHT * 0.215,
  },
  form: {
    height: '35%',
    width: '85%',
    marginTop: HEIGHT * 0.18,
  },
  question: {
    marginBottom: HEIGHT * 0.01,
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
  questionLabel: {
    marginBottom: HEIGHT * 0.02,
    color: '#000',
    fontWeight: '500',
    fontSize: 15,
    marginLeft: WIDTH * 0.01,
  },
  answerContainer: {
    marginBottom: HEIGHT * 0.01,
    flexDirection: 'row',
  },
  answerLabel: {
    paddingTop: 5,
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#0096FF',
    width: WIDTH * 0.7,
    height: HEIGHT * 0.05,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
