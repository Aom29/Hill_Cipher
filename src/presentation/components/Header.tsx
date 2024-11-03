import { View, Text } from "react-native";
import { styles } from "../../config/theme/app-theme";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={[styles.header]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
