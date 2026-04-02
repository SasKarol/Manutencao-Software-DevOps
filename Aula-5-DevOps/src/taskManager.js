function toggleTask(task) {
  return { ...task, completed: !task.completed };
}

function removeTask(tasks, taskId) {
  return tasks.filter(task => task.id !== taskId);
}

function filterTasks(tasks, status) {
  switch (status) {
    case 'pending':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'all':
    default:
      return [...tasks];
  }
}

module.exports = {
  toggleTask,
  removeTask,
  filterTasks
};