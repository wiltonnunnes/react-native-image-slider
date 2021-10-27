import React from 'react';
import ImageSlider from './ImageSlider';
import { View } from 'react-native';

export default function App() {
  const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ];

  return (
    <View>
      <ImageSlider 
        images={images} 
        height={400}
      />
    </View>
  );
}