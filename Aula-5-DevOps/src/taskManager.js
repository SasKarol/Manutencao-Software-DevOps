function toggleTask(task) {
  return { ...task, completed: !task.completed };
}

function removeTask(tasks, taskId) {
  return tasks.filter(task => task.id !== taskId);
}

function filterTasks(tasks, status) {
  if (status === 'completed') {
    return tasks.filter(task => task.completed);
  }

  return tasks;
}

module.exports = {
  toggleTask,
  removeTask,
  filterTasks
};