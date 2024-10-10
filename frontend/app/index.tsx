import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Page Title */}
      <Text style={styles.title}>Welcome to MyApp</Text>

      {/* Input field for Username */}
      <TextInput 
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />

      {/* Input field for Password */}
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}  // This hides the password input
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

// Defining styles using StyleSheet for better readability
const styles = StyleSheet.create({
  container: {
    flex: 1,                        // Take up full screen
    justifyContent: 'center',       // Center content vertically
    alignItems: 'center',           // Center content horizontally
    backgroundColor: '#f5f5f5',     // Light background color for a clean look
    padding: 20                     // Padding to avoid edges
  },
  title: {
    fontSize: 28,                   // Large text for the title
    fontWeight: 'bold',             // Bold for emphasis
    marginBottom: 40,               // Spacing below title
    color: '#333',                  // Dark color for contrast
  },
  input: {
    width: '80%',                   // Input width relative to screen
    padding: 15,                    // Padding inside the input
    marginBottom: 20,               // Spacing between inputs
    borderWidth: 1,                 // Border for input field
    borderColor: '#ccc',            // Light grey border
    borderRadius: 10,               // Rounded corners
    backgroundColor: '#fff'         // White background
  },
  button: {
    width: '80%',                   // Button width relative to screen
    backgroundColor: '#007BFF',     // Blue background for the button
    padding: 15,                    // Padding inside button
    borderRadius: 10,               // Rounded button corners
    alignItems: 'center'            // Center button text
  },
  buttonText: {
    color: '#fff',                  // White text for contrast on blue
    fontSize: 16,                   // Medium text size
    fontWeight: '600'               // Semi-bold for emphasis
  }
});

export default Index;
