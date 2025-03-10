import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useTheme } from '../../hooks/useTheme';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
  backgroundColor?: string;
  color?: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  value,
  size = 200,
  backgroundColor,
  color,
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <QRCode
        value={value}
        size={size}
        backgroundColor={backgroundColor || colors.background}
        color={color || colors.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default QRCodeGenerator; 