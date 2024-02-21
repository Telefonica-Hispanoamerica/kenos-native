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

// export const dataCard = style([
//     sprinkles({
//         display: 'flex',
//         flex: 1,
//         paddingY: 24,
//         paddingX: 16,
//         flexDirection: 'column',
//         width: '100%',
//     }),
//     {
//         '@media': {
//             [mq.desktopOrBigger]: {
//                 paddingTop: 32,
//                 paddingBottom: 32,
//                 paddingLeft: 24,
//                 paddingRight: 24,
//             },
//         },
//     },
// ]);


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