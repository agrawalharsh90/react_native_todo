import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

interface TodoState {
  key: number,
  value: string,
}
export default function App() {
  const [data, setTask] = useState('');
  const [todos, setTodo] = useState(Array<TodoState>());

  return (<>
    <View style={styles.container}>
      <ScrollView>
        {todos.map((v) => {
          return <View style={styles.card} key={v.key}>
            <Text
              style={styles.textIfno}>
              {v.value}
            </Text>
          </View>
        })}</ScrollView>
    </View>
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder={'e.g. ToDo'}
        value={data}
        onChangeText={(v) => setTask(v)} />
      <Button title={"Add task"} onPress={() => {
        if (data != null && data.length > 0) {
          const d = todos;
          d.push({ value: data, key: d.length + 1 });
          setTodo(d);
          setTask('');
        }
      }} />
    </View>

  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: "#000002"
  },
  textIfno: {
    fontSize: 18,
    color: '#dfd',
  },
  body: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#777',
    marginBottom: 20,
  },
});
