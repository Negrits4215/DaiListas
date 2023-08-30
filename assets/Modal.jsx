import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button } from 'react-native';

const TaskModal = ({ visible, onClose, onSave }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSave = () => {
    if (taskName.trim() === '') return;
    onSave(taskName, taskDescription);
    setTaskName('');
    setTaskDescription('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <Text>Add Task</Text>
        <TextInput
          placeholder="Task Name"
          onChangeText={(text) => setTaskName(text)}
          value={taskName}
        />
        <TextInput
          placeholder="Description"
          onChangeText={(text) => setTaskDescription(text)}
          value={taskDescription}
        />
        <Button title="Save" onPress={handleSave} />
      </View>
    </Modal>
  );
};

export default TaskModal;
