import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import TaskItem from './Tarea';
import TaskModal from './Modal';

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
    <View>
      <Text>Todo App</Text>
      <Button title="Add Task" onPress={() => setModalVisible(true)} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
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

export default HomeScreen;
