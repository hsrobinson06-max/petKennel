import angrycat from './assets/angrycat.jpeg';
import angrydog from './assets/angrydog.jpeg';
import happycat from './assets/happycat.jpg';
import happydog from './assets/happydog.jpg';
import hungrycat from './assets/hungrycat.jpg';
import hungrydog from './assets/hungrydog.jpeg';

export const initialData = [
  {
    id: 1,
    name: "Dog",
    status: ["Hungry", "Happy", "Angry"],
    images: [hungrydog, happydog, angrydog],
    currentIndex: 0
  },
  {
    id: 2,
    name: "Cat",
    status: ["Hungry", "Happy", "Angry"],
    images: [hungrycat, happycat, angrycat],
    currentIndex: 0
  },
  {
    //setting up third pet
    id: 3,
    name: "pet3",
    status: ["Hungry", "Happy", "Angry"],
    images: [],
    currentIndex: 0
  }
];
