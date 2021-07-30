import axios from 'axios';
import React, { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Navigate } from '../navigation';

interface TodoListScreenProps {
  navigate: Navigate;
}

type Todo = {
  id: string;
  title: string;
};

const TodoListScreen: FC<TodoListScreenProps> = ({ navigate }) => {
  const [items, setItems] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('http://18.234.201.114:5000/demoTodo').then((response) => {
      setItems(response.data?.userTodoLists?.reverse() || []);
    });
  }, []);

  const handleAddTodoItemPress = () => {
    if (!input) return;
    axios.post('http://18.234.201.114:5000/demoTodo', { name: input }).then((response) => {
      setInput('');
      setItems((array) => [response.data, ...array]);
    });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Button title="Back" onPress={() => navigate('home')} />
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} value={input} onChangeText={setInput} />
        <Button title="Add" onPress={handleAddTodoItemPress} />
      </View>
      {items.map((item) => (
        <Text key={item.id || item._id} style={styles.item}>
          {item.title}
        </Text>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  item: {
    marginVertical: 8,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 20,
  },
});

export default TodoListScreen;
