const projects = [
  { id: 1, name: 'Learn React Native' },
  { id: 2, name: 'Workout' },
];

const tasks = [
  { id: 1, title: 'Install Node', completed: true, projectID: 1 },
  { id: 2, title: 'Install React Native CLI:', completed: false, projectID: 1 },
  { id: 3, title: 'Install Xcode', completed: false, projectID: 1 },
  { id: 4, title: 'Morning Jog', completed: true, projectID: 2 },
  { id: 5, title: 'Visit the gym', completed: false, projectID: 2 }
];

const users = [
  { id: '12223323431', name: 'zhangsan', sex: 'male'},
  { id: '12223323432', name: 'lisi', sex: 'female'},
  { id: '12223323433', name: 'wangwu', sex: 'male'},
  { id: '12223323434', name: 'zhaoliu', sex: 'female'},
  { id: '12223323435', name: 'liuer', sex: 'male'}
]

module.exports = { projects, tasks, users };