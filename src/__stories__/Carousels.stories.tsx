import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Slideshow from '../components/Carousels/Slideshow/Slideshow';
import Carousel from '../components/Carousels/Carousel/Carousel';
import { View, Image } from 'react-native';
import { DataCard } from '../components/Cards/DataCard/DataCard';
import { Circle } from '../components';

const argsCard = {
  icon: <Circle size={40} backgroundImage="https://i.imgur.com/QwNlo5s.png" />,
  headline: 'Headline',
  pretitle: 'Pretitle',
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'This is a description for the card',
  'aria-label': 'aria-label',
  onClose: undefined,
}

const itemsSlide = [
  'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?w=1800&t=st=1709580328~exp=1709580928~hmac=c2df24ff8e3d38e8c3d909c684d86e50664f6f59b2021732d435e7f298339dfc',
  'https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?w=2000&t=st=1709580352~exp=1709580952~hmac=fa81d3dd62a10502b9de2c84566bbceaf9a619f4e5f86c5e0b822df57c1675ac',
  'https://img.freepik.com/foto-gratis/viejo-barco-pesquero-oxidado-ladera-lo-largo-orilla-lago_181624-44902.jpg?w=2000&t=st=1709580379~exp=1709580979~hmac=e19a313f9105a30aae155cd88a9b5108dd12ae41119f41e817b1a0b5abd1da1c',
];

const itemsCarousel = [
  <Image source={{ uri: 'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?w=1800&t=st=1709580328~exp=1709580928~hmac=c2df24ff8e3d38e8c3d909c684d86e50664f6f59b2021732d435e7f298339dfc'  }} style={{ width: '100%', height: '100%' }} />,
  <Image source={{ uri: 'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg?w=1800&t=st=1709580328~exp=1709580928~hmac=c2df24ff8e3d38e8c3d909c684d86e50664f6f59b2021732d435e7f298339dfc'  }} style={{ width: '100%', height: '100%' }} />,
  <DataCard {...argsCard} />,
  <DataCard {...argsCard} />
  // Aquí puedes agregar más imágenes o cualquier otro componente
];

storiesOf('Carousel', module)
.add('Slideshow', () => (
    <>
    <Slideshow items={itemsSlide} />
    </>
))
.add('Carousel', () => (
    <View style={{ flex: 1}}>
     <Carousel items={itemsCarousel} />
    </View>
));

