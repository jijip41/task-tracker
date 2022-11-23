import TaskPresenter from '../task_presenter';

describe('TaskPresenter', () => {
  const tasks = [
    {
      id: 1,
      name: 'task1',
      count: 1,
    },
    {
      id: 2,
      name: 'task2',
      count: 0,
    },
  ];
  const maxTasks = 3;

  let presenter;
  let update;

  beforeEach(() => {
    presenter = new TaskPresenter(tasks, maxTasks);
    update = jest.fn();
  });

  it('inits with tasks', () => {
    expect(presenter.getTasks()).toEqual(tasks);
  });

  it('increments task count and call update callback', () => {
    presenter.increment(tasks[0], update);

    expect(presenter.getTasks()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it('decrements task count and call update callback', () => {
    presenter.decrement(tasks[0], update);

    expect(presenter.getTasks()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('does not set the count value below 0 when decrementing', () => {
    presenter.decrement(tasks[0], update);
    presenter.decrement(tasks[0], update);
    presenter.decrement(tasks[0], update);

    expect(presenter.getTasks()[0].count).toBe(0);
  });

  it('deletes task from the list and update callback', () => {
    presenter.delete(tasks[0], update);

    expect(presenter.getTasks().length).toBe(1);
    checkUpdateIsCalled();
    expect(presenter.getTasks()[0].name).toBe('task2');
    checkUpdateIsCalled();
  });

  it('adds new task to the list and update callback', () => {
    presenter.add('Cooking', update);

    expect(presenter.getTasks().length).toBe(3);
    expect(presenter.getTasks()[2].name).toBe('Cooking');
    expect(presenter.getTasks()[2].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('deletes all tasks', () => {
    presenter.deleteAll(update);

    expect(presenter.getTasks().length).toBe(0);
    checkUpdateIsCalled();
  });

  it('resets all tasks count', () => {
    presenter.reset(update);

    expect(presenter.getTasks()[0].count).toBe(0);
    expect(presenter.getTasks()[1].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('throws an error if number of tasks exceeds limit', () => {
    presenter.add('Cooking', update);

    expect(() => {
      presenter.add('Walking', update);
    }).toThrow(`Tasks can't exceed ${maxTasks}`);
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getTasks());
  }
});
