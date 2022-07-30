const arr = [
  {
    id: 1,
    name: "Dope",
    author: "Yellawolf",
    duration: "280s",
    createdAt: "nie wiem",
    pubishedAt: "też nie wiem",
  },
  {
    id: 2,
    name: "Szprycer",
    author: "Tacohemingway",
    duration: "330s",
    createdAt: "nie wiem1",
    pubishedAt: "też nie wiem2",
  },
  {
    id: 3,
    name: "Kushkoma",
    author: "Guzior",
    duration: "260s",
    createdAt: "nie wiem3",
    pubishedAt: "też nie wiem3",
  },
  {
    id: 4,
    name: "Dziwny jest ten świat",
    author: "Niemen",
    duration: "220s",
    createdAt: "nie wiem4",
    pubishedAt: "też nie wiem4",
  },
  {
    id: 5,
    name: "Jaźmin",
    author: "H4j4",
    duration: "240s",
    createdAt: "nie wiem5",
    pubishedAt: "też nie wiem5",
  },
];

const promise = new Promise((resolve, reject) => {
  let i = -1;
  i++;
  if (arr.length > 0) {
    resolve(arr[i]);
  } else {
    reject("заяц! Ну погоди!");
  }
});

promise
  .then((obj) => {
    arr.forEach((obj) => console.log(obj));
  })
  .catch((msg) => {
    console.log(msg);
  });
