import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// IMPORTANT: Replace with your deployed backend URL
const API_URL = 'http://localhost:3000';

const Banner = ({ message, type }) => {
  if (!message) return null;

  const bannerStyle = type === 'success' ? styles.successBanner : styles.errorBanner;
  const textStyle = type === 'success' ? styles.successBannerText : styles.errorBannerText;

  return (
    <View style={[styles.banner, bannerStyle]}>
      <Text style={textStyle}>{message}</Text>
    </View>
  );
};

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [banner, setBanner] = useState({ message: '', type: '' });

  const showBanner = (message, type) => {
    setBanner({ message, type });
    setTimeout(() => {
      setBanner({ message: '', type: '' });
    }, 3000);
  };

  const handleAuth = async () => {
    if (isLogin) {
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          showBanner('Login successful', 'success');
          setTimeout(() => {
            navigation.navigate('Dashboard');
          }, 1000);
        } else {
          showBanner('Invalid email or password', 'error');
        }
      } catch (error) {
        showBanner('Could not log in', 'error');
      }
    } else {
      try {
        const response = await fetch(`${API_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, hospitalName }),
        });
        if (response.ok) {
          showBanner('Signup successful', 'success');
          setTimeout(() => {
            navigation.navigate('Dashboard');
          }, 1000);
        } else {
          showBanner('Could not sign up', 'error');
        }
      } catch (error) {
        showBanner('Could not sign up', 'error');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Banner message={banner.message} type={banner.type} />
      <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Hospital Name"
          placeholderTextColor="#888"
          value={hospitalName}
          onChangeText={setHospitalName}
        />
      )}
      <TouchableOpacity style={[styles.button, styles.mainButton]} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.switchButton]} onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.buttonText}>{`Switch to ${isLogin ? 'Sign Up' : 'Login'}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  banner: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  successBanner: {
    backgroundColor: '#4CAF50',
  },
  errorBanner: {
    backgroundColor: '#f44336',
  },
  successBannerText: {
    color: '#fff',
    textAlign: 'center',
  },
  errorBannerText: {
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
  },
  mainButton: {
    backgroundColor: '#e53935',
  },
  switchButton: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AuthScreen;
