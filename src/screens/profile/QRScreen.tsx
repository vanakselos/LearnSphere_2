import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import QRCodeGenerator from '../../components/common/QRCode';
import QRScanner from '../../components/common/QRScanner';
import Header from '../../components/navigation/Header';
import { useTheme } from '../../hooks/useTheme';
import { RootState } from '../../store';

const QRScreen = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);

  // Generate user profile data for QR code
  const userQRData = user ? JSON.stringify({
    id: user.id,
    name: user.name,
    email: user.email,
  }) : '';

  const handleScan = (data: string) => {
    setScannedData(data);
    setIsScanning(false);
  };

  const handleError = (error: string) => {
    console.error('QR Scanner Error:', error);
    setIsScanning(false);
  };

  return (
    <View style={styles.container}>
      <Header
        title={isScanning ? 'Scan QR Code' : 'QR Code'}
        leftIcon="arrow-left"
        onLeftPress={() => navigation.goBack()}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        {isScanning ? (
          <View style={styles.scannerContainer}>
            <QRScanner onScan={handleScan} onError={handleError} />
          </View>
        ) : (
          <>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Your QR Code
              </Text>
              <QRCodeGenerator value={userQRData} size={250} />
              <Text style={[styles.description, { color: colors.textSecondary }]}>
                Share your profile with other users by showing them this QR code
              </Text>
            </View>

            {scannedData && (
              <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  Scanned Data
                </Text>
                <Text style={[styles.scannedData, { color: colors.textSecondary }]}>
                  {scannedData}
                </Text>
              </View>
            )}

            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.primary }]}
              onPress={() => setIsScanning(true)}
            >
              <Text style={styles.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
  scannerContainer: {
    height: 300,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 24,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scannedData: {
    fontSize: 14,
    textAlign: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
});

export default QRScreen; 