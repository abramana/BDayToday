import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Button from "./components/Button";
import ScrollViewBDays from "./components/ScrollViewBDays";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Birthday List</Text>
      <StatusBar style="auto" />
      <ScrollViewBDays></ScrollViewBDays>
      <Button title={'Add new'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6ebd0',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 46, 
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#C45C1B',
  },
  text: {
    marginTop: 150,
    fontSize: 42,
    lineHeight: 42,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#C45C1B',
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 300,
    maxHeight: 150,
  },
  item: {
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#C45C1B',
  }
});


