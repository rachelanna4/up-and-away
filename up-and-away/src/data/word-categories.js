// const words = [
//     // {category: "animals", words: ["giraffe", "elephant", "hippopotamus", "zebra", "gorilla", "koala bear", "kangaroo", "beaver", "badger", "mouse", "whale", "dolphin", "cheetah", "snow leopard", "wolf", "polar bear", "penguin"]}
//     // {category: "countries", words: ["scotland", "south africa", "canada", "england", "wales", "egypt", "kenya", "thailand", "australia", "new zealand", "brazil", "spain", "portugal", "france", "india", "morocco", "iceland", "singapore", "mexico", "chile", "united states of america", "sweden", "denmark", "finland", "ireland", "cambodia"]}
//     // {category: "books", words: ["the hobbit", "gangsta granny"]}
//     // {category: "disney films", words: ["frozen", "pocahontas", "the little mermaid", "the jungle book", "the princess and the frog", ""]}
//     // {category: "harry potter characters", words: ["ron weasley", "harry potter", "hermione granger", "hagrid", "dumbledore", "severus snape", "voldemort", "neville longbottom", "luna lovegood"]}
//     // {category: "christmas", words: ["snowman", "reindeer", "santa claus", "rudolph"]}
//     // {category: "halloween", words: ["pumpkin", ""]}
//     // {category: "food", words: []}

// ]

const wordCategories = [
  {
    name: "animals",
    options: [
      { word: "giraffe", clue: "This animal has a very long neck" },
      { word: "zebra", clue: "This animal has stripes" },
      { word: "whale", clue: "This animal is the largest mammal" },
      { word: "polar bear", clue: "This animal lives in the Arctic" },
      { word: "kangaroo", clue: "This animal has a pouch to carry its babies" },
    ],
  },
  {
    name: "halloween",
    options: [
      { word: "pumpkin", clue: "You can carve a face into this vegetable" },
      { word: "black cat", clue: "A witch might have this pet" },
    ],
  },
];

export default wordCategories;
