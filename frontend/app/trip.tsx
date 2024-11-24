import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const BusTracker = () => {
  // Static location examples (you can adjust these coordinates)
  const [busLocations, setBusLocations] = useState([
    {
      latitude: 37.7749,
      longitude: -122.4194,
      title: 'Bus 1',
      description: 'San Francisco',
    },
    {
      latitude: 34.0522,
      longitude: -118.2437,
      title: 'Bus 2',
      description: 'Los Angeles',
    },
    {
      latitude: 40.7128,
      longitude: -74.0060,
      title: 'Bus 3',
      description: 'New York City',
    },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,  // You can set the initial region to one of the bus locations
          longitude: -122.4194,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}>
        {busLocations.map((bus, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: bus.latitude, longitude: bus.longitude }}
            title={bus.title}
            description={bus.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default BusTracker;