import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/styles/colors'; // Assuming this is your custom color file

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#ffffff', '#f0f0f0']} // Light gradient background for depth
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
        
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        
        <Text style={styles.title}>Welcome to Snaki!</Text>
        <Text style={styles.subtitle}>The Classic Snake Game Reimagined</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push('/play')}>
          <Text style={styles.buttonText}>Play Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/about')}>
          <Text style={styles.buttonText}>Credits</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
    resizeMode: 'contain', // Keep the logo aspect ratio
  },
  title: {
    fontSize: 38,
    color: '#000000', // Black text for high contrast
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 1.5, // Add some spacing for elegance
  },
  subtitle: {
    fontSize: 20,
    color: '#555555', // Gray text for subtle contrast
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '300',
    letterSpacing: 1, // Consistent with the title
  },
  button: {
    backgroundColor: '#000000', // Black button
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#000', // Add shadow for better visual depth
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // For Android shadow
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff', // White text for contrast
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
