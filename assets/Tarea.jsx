import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{task.name}</Text>
      <Text>{task.description}</Text>
      <TouchableOpacity onPress={handleComplete}>
        <Text>Complete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskItem;
