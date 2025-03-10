import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { useTheme } from '../../hooks/useTheme';

interface QRScannerProps {
  onScan: (data: string) => void;
  onError?: (error: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan, onError }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const getCameraPermissions = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (error) {
        onError?.(error.message);
      }
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    if (scanned) return;
    setScanned(true);
    onScan(data);
    // Reset scanned state after a short delay to prevent multiple scans
    setTimeout(() => setScanned(false), 2000);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { color: colors.textSecondary }]}>
          Requesting camera permission...
        </Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { color: colors.error }]}>
          No access to camera
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 16,
  },
});

export default QRScanner;