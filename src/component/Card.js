import React, { useState } from 'react';
import {
  Card,
  Text,
  IconButton,
  Colors,
} from 'react-native-paper';
import { Icon, Rating } from 'react-native-elements';
import { ImageBackground, StyleSheet, View } from 'react-native';



const Card_c = ({url}) => {

const image = { uri: url };
  const [color, setColor] = useState(Colors.grey50);

  return (
    <Card>
      <View>
        <ImageBackground source={image} style={styles.image}>
          <IconButton
            style={{ marginLeft: 'auto', marginTop: 'auto' }}
            icon="heart"
            color={color}
            size={20}
            onPress={() =>
              setColor(color === Colors.grey50 ? Colors.red900 : Colors.grey50)
            }
          />
        </ImageBackground>
      </View>
      <div>
        <Text>Gillian Piroth</Text>
        <div style={{ float: 'right', display: 'flex' }}>
          <Rating
             startingValue={4.3}
            style={{ paddingVertical: 1 }}
            imageSize={12}
          /> 12
        </div>
      </div>
      <Text style={{ fontSize: 22 }}>
        Traditional African Cooking with Gillian
      </Text>
      <Text style={{ marginTop: 9 }}>Ticket price</Text>
      <div>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>£30.00</Text>
        <div style={{ float: 'right', display: 'flex' }}>
        <div style={{ paddingRight: 9 }}>
          <Icon size={13} name="circle" color="green" />
          <Text style={styles.text}>Online</Text>
          </div>
          <div style={{ paddingRight: 9 }}>
          <Icon size={13} name="circle" color="black" />
          <Text style={styles.text}>Group</Text>
          </div>
          <div style={{ paddingRight: 9 }}>
          <Icon size={13} name="circle" color="black" />
          <Text style={styles.text}>Cooking</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '60vh',
    justifyContent: 'center',
  },
  text: {
     fontSize: 8,
  },
});

export default Card_c; 