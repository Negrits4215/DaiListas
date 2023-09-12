import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    onComplete(task.id);
    setCompleted(!completed);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const icon = completed ? '✓' : '✗';

  // Define un estilo condicional para el texto de la tarea
  const taskTextStyle = {
    color: completed ? 'green' : 'black',
  };

  return (
    <View style={styles.taskContainer}>
      <Text style={[styles.taskName, taskTextStyle]}>{task.name}</Text>
      <Text style={taskTextStyle}>{task.description}</Text>
      <TouchableOpacity onPress={handleComplete}>
        <Text>Complete</Text>
        <Text>{icon}</Text>
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
