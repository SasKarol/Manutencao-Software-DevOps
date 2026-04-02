const { toggleTask, removeTask, filterTasks } = require('../src/taskManager');

describe('toggleTask', () => {
  test('tarefa pendente vira concluída', () => {
    const task = { id: 1, title: 'Estudar', completed: false };
    const result = toggleTask(task);
    expect(result.completed).toBe(true);
  });
});

describe('removeTask', () => {
  test('remove tarefa pelo ID', () => {
    const tasks = [
      { id: 1, title: 'A', completed: false },
      { id: 2, title: 'B', completed: true }
    ];

    const result = removeTask(tasks, 1);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });
});

describe('filterTasks', () => {
  test('filtra tarefas concluídas', () => {
    const tasks = [
      { id: 1, completed: false },
      { id: 2, completed: true }
    ];

    const result = filterTasks(tasks, 'completed');

    expect(result).toHaveLength(1);
    expect(result[0].completed).toBe(true);
  });
});