const { toggleTask, removeTask, filterTasks } = require('../src/taskManager');

describe('toggleTask', () => {
  test('tarefa pendente vira concluída', () => {
    const task = { id: 1, title: 'Estudar', completed: false };

    const result = toggleTask(task);

    expect(result.completed).toBe(true);
  });

  test('tarefa concluída volta a pendente', () => {
    const task = { id: 1, title: 'Estudar', completed: true };

    const result = toggleTask(task);

    expect(result.completed).toBe(false);
  });

  test('não altera id e title', () => {
    const task = { id: 1, title: 'Estudar', completed: false };

    const result = toggleTask(task);

    expect(result.id).toBe(1);
    expect(result.title).toBe('Estudar');
  });

  test('retorna novo objeto (imutabilidade)', () => {
    const task = { id: 1, title: 'Estudar', completed: false };

    const result = toggleTask(task);

    expect(result).not.toBe(task);
  });
});


describe('removeTask', () => {
  const tasks = [
    { id: 1, title: 'A', completed: false },
    { id: 2, title: 'B', completed: true }
  ];

  test('remove tarefa pelo ID', () => {
    const result = removeTask(tasks, 1);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  test('mantém outras tarefas', () => {
    const result = removeTask(tasks, 1);
    expect(result[0].title).toBe('B');
  });

  test('retorna novo array', () => {
    const result = removeTask(tasks, 1);
    expect(result).not.toBe(tasks);
  });

  test('ID inexistente retorna lista completa', () => {
    const result = removeTask(tasks, 99);
    expect(result).toEqual(tasks);
  });

  test('lista vazia retorna vazio', () => {
    const result = removeTask([], 1);
    expect(result).toEqual([]);
  });
});


describe('filterTasks', () => {
  const tasks = [
    { id: 1, title: 'A', completed: false },
    { id: 2, title: 'B', completed: true }
  ];

  test('filtro all retorna todas', () => {
    expect(filterTasks(tasks, 'all')).toEqual(tasks);
  });

  test('filtro pending retorna pendentes', () => {
    const result = filterTasks(tasks, 'pending');
    expect(result).toHaveLength(1);
    expect(result[0].completed).toBe(false);
  });

  test('filtro completed retorna concluídas', () => {
    const result = filterTasks(tasks, 'completed');
    expect(result).toHaveLength(1);
    expect(result[0].completed).toBe(true);
  });

  test('filtro inválido retorna todas', () => {
    expect(filterTasks(tasks, 'xyz')).toEqual(tasks);
  });

  test('lista vazia retorna vazio', () => {
    expect(filterTasks([], 'all')).toEqual([]);
  });

  test('retorna novo array', () => {
    const result = filterTasks(tasks, 'pending');
    expect(result).not.toBe(tasks);
  });
});