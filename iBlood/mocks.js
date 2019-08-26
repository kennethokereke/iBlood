const requests = [
  {
    id: 1,
    bloodType: "B+",
    name: "Steven Martin",
    age: 24,
    gender: "Male",
    distance: 28,
    time: 12,
    priority: "urgent",
  },
  {
    id: 2,
    bloodType: "O-",
    name: "Kathy Berry",
    age: 23,
    gender: "Female",
    distance: 10,
    time: 21,
    priority: "urgent",
  },
  {
    id: 3,
    bloodType: "A+",
    name: "Kenny Gregory",
    age: 9,
    gender: "Male",
    distance: 15.3,
    time: 24,
    priority: "urgent",
  },

];
//The chart increases
const chart = [
  1.1,
  3,
  1.5,
  2.3,
  3.2,
  7,
  8.2,
  1.2,
  2,
  1.2,
  8,
  3.8,
  5.8,
  3.9,
  5.1,
  0.1,
  8
];

const user = {
  avatar: require('./assets/avatar.png')
};

export { requests, chart, user }