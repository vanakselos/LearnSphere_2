import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { Screen } from '../../components/layout/Screen';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';
import { SearchBar } from '../../components/inputs/SearchBar';

const SearchScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanning(false);
    setSearchQuery(data);
    // Process the scanned data
    Alert.alert('Scan Result', `Resource code: ${data}`);
  };

  return (
    <Screen>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search resources or scan QR code"
      />

      {!scanning ? (
        <PrimaryButton
          title="Scan QR Code"
          onPress={() => setScanning(true)}
        />
      ) : (
        <View style={styles.scannerContainer}>
          <Camera
            type={Camera.Constants.Type.back}
            onBarCodeScanned={handleBarCodeScanned}
            barCodeScannerSettings={{
              barCodeTypes: ['qr', 'pdf417'],
            }}
            style={StyleSheet.absoluteFillObject}
          />
          <PrimaryButton
            title="Cancel"
            onPress={() => setScanning(false)}
          />
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  scannerContainer: {
    flex: 1,
    marginVertical: 20,
    position: 'relative',
  },
});

export default SearchScreen;