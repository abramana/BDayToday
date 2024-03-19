import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from "./components/Button";

const persons = [
  {
    name: 'Nastya Abramova',
    date: '29.08.1995'
  },
  {
    name: 'Viktor Tumanov',
    date: '30.05.1995'
  },
  {
    name: 'Max Tumanov',
    date: '30.05.1995'
  },
  {
    name: 'Alice Tumanov',
    date: '30.05.1995'
  },
  {
    name: 'Marie Tumanov',
    date: '30.05.1995'
  },
  {
    name: 'Alex Tumanov',
    date: '30.05.1995'
  },
]
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Birthday List</Text>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView} >
        {persons.map((person) => {
          return (
              <View>
                <Text style={styles.item}>{person.name} {person.date}</Text>
              </View>
          );
        })}
      </ScrollView>
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


