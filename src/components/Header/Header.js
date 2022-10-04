import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const mapStateToProps = state => ({
  user: state.authReducer.user,
});

function Header({user}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeftSection}>
        <View style={styles.headerLeftSectionUpper}></View>
        <View style={styles.headerLeftSectionBottom}>
          <Text style={styles.headerLeftSectionName}>Hi, {user.name}</Text>
          <Text style={styles.headerLeftSectionDesc}>Some description</Text>
        </View>
      </View>
      <View style={styles.headerRightSection}>
        <Image
          source={require('../../Assets/images/avatar.png')}
          style={styles.headerImage}
        />
      </View>
    </View>
  );
}

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  headerContainer: {
    width: WIDTH,
    height: HEIGHT * 0.27,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#0096FF',
    flexDirection: 'row',
  },
  headerLeftSection: {
    width: '50%',
    height: '100%',
  },
  headerLeftSectionUpper: {
    height: '47%',
  },
  headerLeftSectionBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: WIDTH * 0.05,
  },
  headerLeftSectionName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: HEIGHT * 0.005,
  },
  headerLeftSectionDesc: {
    fontSize: 16,
    fontWeight: '400',
  },
  headerRightSection: {
    paddingTop: 0.06 * HEIGHT,
    paddingLeft: 0.145 * HEIGHT,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  headerImage: {
    height: 0.065 * HEIGHT,
    width: 0.065 * HEIGHT,
    borderRadius: 12,
  },
});
