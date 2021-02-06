import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Platform, } from 'react-native';
import { useLinkProps, useTheme } from '@react-navigation/native';

const Link = ({ children, action, to = "/#", style, hoverStyle, ...otherProps}) => {
  const { onPress, ...props } = useLinkProps({ to, action });
  const [isHovered, setIsHovered] = useState(false);
  const { colors } = useTheme();
  if (Platform.OS == "web") {
    return(
      <Text
        accessibilityRole="link"
        style={[{ color: colors.text }, style, isHovered && { color: colors.primary }, isHovered && hoverStyle ]}
        draggable={false}
        onPress={() => Linking.openURL(to)}
        action={action}
        tabIndex={0}
        onClick={onPress}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
        {...otherProps}
      >
        {children}
      </Text>
    )
  }

  return (
    <TouchableOpacity onPress={onPress} {...props} {...otherProps}>
      <Text style={[style]}>{children}</Text>
    </TouchableOpacity>
  )
};

export default Link;
