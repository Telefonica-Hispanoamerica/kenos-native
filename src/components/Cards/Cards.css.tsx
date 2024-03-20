import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  boxed: {
    flex: 1,
    display: 'flex',
  },
  dataCard: {
    display: 'flex',
    flex: 1,
    paddingBottom: 24,
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'column',
    width: '100%',
  },
});

export const mediaCard = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
});

export const mediaCardContent = StyleSheet.create({
  default: {
    flex: 2,
    padding: 16,
    flexDirection: 'column',
  },
  large: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
});

export const cardConsumption = StyleSheet.create({
  container:{
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:20,
  },
  card:{
      width: 130,
      height: 'auto',
      borderRadius: 8,
      border: 1,
  },
  cardDefault:{
      gap: 8,
      alignItems: 'center',
      paddingTop: 16,
      paddingRight:4,
      paddingLeft:4,
      marginRight:5
  },
  cardSeeMore:{
      gap: 14,
      alignItems: 'center',
      paddingTop: 56,
      paddingRight:4,
      paddingLeft:4,
      paddingBottom:54,
  }
})