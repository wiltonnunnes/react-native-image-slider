import React from 'react';
import { FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Item = ({
  image,
  onPress,
  index,
  height
}) => {
  return (
    <TouchableOpacity 
      onPress={() => onPress(index)} 
    >
      <Image 
        style={{ height: height }} 
        source={[styles.image, { uri: image }]}
      />
    </TouchableOpacity>
  );
}

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList 
        horizontal 
        data={this.props.images} 
        showsHorizontalScrollIndicator={false} 
        renderItem={(item, index) => (
          <Item 
            image={item} 
            index={index} 
            height={this.props.height} 
            onPress={(index) => {}}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'stretch'
  }
});

export default ImageSlider;