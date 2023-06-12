import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

import { Loading } from "@components/Loading";
import theme from "@theme/index";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
