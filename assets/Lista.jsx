import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import TaskItem from './Tarea';
import TaskModal from './Modal';

const NUM_COLUMNS = 3; // Define el número de columnas que deseas

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTask = (name, description) => {
    const newTask = {
      id: Date.now().toString(),
      name,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo App</Text>
        <Button title="Add Task" onPress={() => setModalVisible(true)} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        numColumns={NUM_COLUMNS} // Establece el número de columnas
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        )}
      />
      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={addTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
