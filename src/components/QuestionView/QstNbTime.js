import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import React, {useState} from 'react';

export default function QstNbTime({questionNumber, questions}) {
  const TIME = questions[questionNumber].time;
  const minutes = Math.floor(TIME / 60);
  const seconds = TIME - minutes * 60;

  const [mins, setMins] = useState(minutes);
  const [secs, setSecs] = useState(seconds);

  const timedOut = () => {
    Alert.alert('Time out !');
  };

  setTimeout(() => {
    mins > 0 || secs > 0
      ? secs > 0
        ? setSecs(secs - 1)
        : (setMins(mins - 1), setSecs(59))
      : null;
  }, 1000);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftSection}>
        <Text style={styles.leftSectionLabel}>Question</Text>
        <View style={styles.questionNumberContainer}>
          <Text style={styles.qstNbText}>
            {questionNumber} / {questions.length}
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.leftSectionLabel}>Temps écoulé</Text>
        <View style={styles.timeContainer}>
          <View style={styles.mins}>
            <Text style={styles.minsText}>{mins}</Text>
          </View>
          <View style={styles.seconds}>
            <Text style={styles.secondsText}>{secs}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('window').height * 0.116,
    width: '80%',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingLeft: Dimensions.get('window').width * 0.05,
    elevation: 1,
  },
  leftSection: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    marginRight: Dimensions.get('window').width * 0.05,
  },
  leftSectionLabel: {
    color: '#000',
    fontSize: 14,
    flexDirection: 'row',
    fontWeight: '500',
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  questionNumberContainer: {
    width: '80%',
    height: '50%',
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
  rightSection: {
    width: '65%',
    height: '100%',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    width: '60%',
    height: '50%',
    justifyContent: 'space-around',
  },
  mins: {
    width: '35%',
    color: '#00008B',
    borderRadius: 5,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minsText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#00008B',
  },
  seconds: {
    width: '35%',
    color: '#00008B',
    borderRadius: 5,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondsText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'orange',
  },
});
