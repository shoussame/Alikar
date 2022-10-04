import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  questions: state.scoreReducer.questions,
  userAnswers: state.scoreReducer.userAnswers,
});

function ScoreView({questions, userAnswers}) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    var result = 0;
    for (i = 0; i < questions.length; i++) {
      if (questions[i].answers[userAnswers[i]].correct === true) {
        result++;
      }
    }

    setScore(result * 5);
  });
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <Text style={styles.h1}>Félicitations !</Text>
        <Text style={styles.h2}>Voici votre score</Text>
        <View style={styles.questionNumberContainer}>
          <Text style={styles.qstNbText}>
            {score} / {questions.length * 5}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps)(ScoreView);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height * 0.12,
  },
  h1: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    color: '#000',
    marginTop: Dimensions.get('window').height * 0.01,
    fontSize: 18,
    fontWeight: '400',
  },
  questionNumberContainer: {
    marginTop: Dimensions.get('window').height * 0.01,
    width: '20%',
    height: '35%',
    borderRadius: 5,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qstNbText: {
    color: '#00008B',
    fontWeight: '700',
    fontSize: 20,
  },
});
