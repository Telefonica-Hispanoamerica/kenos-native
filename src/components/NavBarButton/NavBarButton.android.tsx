import {Pressable, View} from 'react-native';

type NavBarButtonProps = {
  onPress: Function;
  children: JSX.Element;
};

function NavBarButton({onPress, children}: NavBarButtonProps) {
  return (
    <View style={{height: 28, width: 28, borderRadius: 50, overflow: 'hidden'}}>
      <Pressable
        onPress={onPress}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        android_ripple={{color: 'white', foreground: true}}>
        {children}
      </Pressable>
    </View>
  );
}

export default NavBarButton;
