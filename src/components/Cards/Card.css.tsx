import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  boxed: {
    flex: 1,
    display: 'flex',
  },
  dataCard: {
    display: 'flex',
    flex: 1,
    paddingY: 24,
    paddingX: 16,
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
