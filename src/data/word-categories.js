const wordCategories = [
  {
    name: "animals",
    options: [
      { word: "giraffe", clue: "This animal has a very long neck" },
      { word: "zebra", clue: "This animal has stripes" },
      { word: "whale", clue: "This animal is the largest mammal" },
      { word: "polar bear", clue: "This animal lives in the Arctic" },
      { word: "kangaroo", clue: "This animal has a pouch to carry its babies" },
      { word: "flamingo", clue: "This animal usually stands on one leg" },
      { word: "crocodile", clue: "This animal is very snappy" },
      { word: "jellyfish", clue: "This animal might sting you in the sea" },
      { word: "squirrel", clue: "This animal loves to climb trees" },
      { word: "koala bear", clue: "This animal is found in Australia" },
      { word: "panda", clue: "This animal loves to eat bamboo" },
      { word: "chicken", clue: "This animal lays eggs" },
      { word: "cheetah", clue: "This animal is the fastest land animal" },
      { word: "beaver", clue: "This animal builds dams" },
      {
        word: "penguin",
        clue: "This animal is the only bird that can swim but can't fly",
      },
      {
        word: "parrot",
        clue: "This animal is a bird that can talk",
      },
      {
        word: "peacock",
        clue: "This animal is a bird that has magnificent multi-coloured feathers",
      },
    ],
  },
  {
    name: "halloween",
    options: [
      { word: "pumpkin", clue: "You can carve a face into this vegetable" },
      { word: "black cat", clue: "A witch might have this pet" },
      { word: "broomstick", clue: "A witch flies on one of these" },
      { word: "cauldron", clue: "You would mix potions in one of these" },
      { word: "wizard", clue: "A man who has magic powers" },
      { word: "vampire", clue: "These mythical people do not like garlic" },
      { word: "bat", clue: "Vampires can turn into this flying animal" },
      { word: "cobweb", clue: "A spider spins one of these" },
      {
        word: "werewolf",
        clue: "A mythical animal someone transforms into during a full moon",
      },
      { word: "witch", clue: "A woman who casts magic spells" },
      {
        word: "costume",
        clue: "You would wear one of these to a Halloween party",
      },
      { word: "dracula", clue: "He is a famous vampire" },
      {
        word: "trick or treat",
        clue: "A phrase you say when somebody opens the door on Halloween",
      },
    ],
  },
  {
    name: "harryPotter",
    options: [
      { word: "harry potter", clue: "He is known as the boy who lived" },
      { word: "ron weasley", clue: "He has a rat called scabbers" },
      { word: "hermione granger", clue: "Her parents are both muggles" },
      { word: "remus lupin", clue: "His biggest fear is a full moon" },
      { word: "draco malfoy", clue: "His best friends are Crabbe and Goyle" },
      { word: "lucius malfoy", clue: "He is Draco's father" },
      {
        word: "moaning myrtle",
        clue: "She lives in the girls bathroom at Hogwarts",
      },
      {
        word: "nearly headless nick",
        clue: "He is the house ghost of Gryffindor",
      },
      { word: "george weasley", clue: "He is one of the Weasley twins" },
      { word: "argus filch", clue: "He has a cat called Mrs Norris" },
      { word: "crookshanks", clue: "He is Hermione's pet cat" },
      {
        word: "neville longbottom",
        clue: "He is a talented herbology student",
      },
      {
        word: "ginny weasley",
        clue: "She is the youngest of the Weasley family",
      },
      {
        word: "professor dumbledore",
        clue: "He is the wise headmaster of Hogwarts",
      },
      { word: "voldemort", clue: "He is known as the Dark Lord" },
      { word: "scabbers", clue: "He was Ron's pet rat" },
      { word: "dobby", clue: "He is a kind house elf" },
      {
        word: "luna lovegood",
        clue: "She is a Ravenclaw witch who believes in Nargles",
      },
      { word: "hedwig", clue: "He is Harry's pet owl" },
      { word: "sirius black", clue: "He is Harry's godfather" },
      { word: "rubeus hagrid", clue: "He is the gamekeeper at Hogwards" },
      {
        word: "madame hooch",
        clue: "She taught Hogwarts students how to play Quidditch",
      },
      {
        word: "sorting hat",
        clue: "It decides which Hogwarts house to put students in",
      },
      { word: "severus snape", clue: "He was head of Slytherin house" },
    ],
  },
  {
    name: "superheroes",
    options: [
      { word: "spiderman", clue: "This superhero can climb up buildings" },
      { word: "batman", clue: "This superhero has a butler called Alfred" },
      { word: "superman", clue: "This superhero's real name is Clark Kent" },
      { word: "the hulk", clue: "This superhero turns green when he is angry" },
      { word: "black widow", clue: "She is a spy and one of the Avengers" },
      { word: "thor", clue: "His brother is Loki" },
      { word: "iron man", clue: "This superhero owns Stark Industries" },
      { word: "black panther", clue: "This superhero is the King of Wakanda" },
      { word: "wolverine", clue: "He has 3 metallic claws on each hand" },
      { word: "catwoman", clue: "She is a Gotham City burglar" },
      {
        word: "magneto",
        clue: "He used to be a member of the X-Men but then became their enemy",
      },
      {
        word: "the joker",
        clue: "He is known as the Clown Prince of Crime",
      },
      {
        word: "wonder woman",
        clue: "She is one of the original members of the Justice League",
      },
      { word: "lex luthor", clue: "He is Superman's arch-nemesis" },
      { word: "loki", clue: "He is the brother of Thor" },
    ],
  },
  {
    name: "nintendo",
    options: [
      { word: "yoshi", clue: "He is the dinosaur sidekick of Mario and Luigi" },
      { word: "bowser", clue: "He always tries to kidnap Princess Peach" },
      {
        word: "princess peach",
        clue: "She is the princess of the Mushroom Kingdom",
      },
      { word: "luigi", clue: "He is the younger brother of Mario" },
      { word: "mario", clue: "He is a plumber who wears a red cap" },
      {
        word: "link",
        clue: "He is the hero who fights to save Princess Zelda",
      },
      { word: "donkey kong", clue: "He is an ape who loves bananas" },
      { word: "princess zelda", clue: " She is the ruler of Hyrule" },
      {
        word: "pikachu",
        clue: "It is a pokemon species with a lightening bolt-shaped electric tail",
      },
      { word: "wario", clue: "He is an arch-nemesis of Mario" },
      {
        word: "sonic the hedgehog",
        clue: "This blue character can run faster than the speed of sound",
      },
      {
        word: "isabelle",
        clue: "She is the friendly secretary of Animal Crossing",
      },
      {
        word: "koopa troopa",
        clue: "This character is one of Bowser's minions",
      },
      {
        word: "toadette",
        clue: "She is a pink and white Toad who loves to drive on the kart track",
      },
      {
        word: "kirby",
        clue: "This pink character lives in Dream Land on Planet Popstar",
      },
      { word: "toad", clue: "He is the loyal servant of Princess Peach" },
      { word: "king boo", clue: "He is the leader of the Boos" },
      {
        word: "shy guys",
        clue: "They are enemies of Mario who wear masks to hide their faces",
      },
    ],
  },
  {
    name: "countries",
    options: [
      {
        word: "france",
        clue: "You can visit the Eiffel Tower in this country",
      },
      {
        word: "england",
        clue: "the old and mysterious Stonehenge can be found in this country",
      },
      {
        word: "scotland ",
        clue: "The mythical Loch Ness Monster is believed to live in this country",
      },
      {
        word: "wales",
        clue: "This UK country has a red dragon on its flag",
      },
      {
        word: "ireland",
        clue: "Leprechauns are mythical creatures believed to live in this country",
      },
      {
        word: "spain",
        clue: "Tapas are a popular way to serve food in this country",
      },
      {
        word: "germany",
        clue: "The tradition of having a Christmas tree started in this country",
      },
      {
        word: "japan",
        clue: "Karaoke singing originated in this country",
      },
      {
        word: "poland",
        clue: "The capital city of this country is Warsaw",
      },
      {
        word: "cuba",
        clue: "This country is the largest island in the Caribbean",
      },
      {
        word: "jamaica",
        clue: "The reggae music style originated in this Caribbean country",
      },
      {
        word: "morocco",
        clue: "The capital city of this North African country is Rabat",
      },
      {
        word: "chilé",
        clue: "One of the driest places on earth, the Atacama Desert, is located in this country",
      },
      {
        word: "perú",
        clue: "Machu Picchu, a site of ancient Inca ruins, can be found in this country",
      },
      {
        word: "Mount Everest is located on the border of China and this country",
        clue: "Nepal",
      },
      {
        word: "brazil",
        clue: "Portuguese is the official language of this South-American country",
      },
      {
        word: "egypt",
        clue: "In the past, this country was rules by the Pharaohs",
      },
      {
        word: "australia",
        clue: "The largest eco-system on Earth, the Great Barrier Reef, is on the coast of this country",
      },
      {
        word: "new zealand",
        clue: "The Māori are the indigenous Polynesian people of this country",
      },
      {
        word: "mexico",
        clue: "Tacos, burritos, and quesadillas are traditional foods from this country",
      },
      {
        word: "thailand",
        clue: "Siamese cats are native to this country",
      },
      {
        word: "united states of america",
        clue: "The Grand Canyon can be found in this country",
      },
      {
        word: "canada",
        clue: "The official languages of this North American country are English and French",
      },
      {
        word: "kenya",
        clue: "The capital city of this country is Nairobi",
      },
      {
        word: "tanzania",
        clue: "The dormant volcano, Mount Kilimanjaro can be found in this country",
      },
      {
        word: "italy",
        clue: "The Mediterranean islands of Sicily and Sardinia are regions of this country",
      },
      {
        word: "india",
        clue: "Chapati, Naan, and Roti are types of bread that originate from this country",
      },
      {
        word: "greece",
        clue: "The first Olympic games took place in this country",
      },
      {
        word: "russia",
        clue: "This country is the largest in the world",
      },
      {
        word: "iceland",
        clue: "Almost 11% of this island country is covered by glaciers",
      },
      {
        word: "indonesia",
        clue: "This country has more active volcanos than any other country",
      },
      {
        word: "norway",
        clue: "The capital of this country is Oslo",
      },
    ],
  },
];

export default wordCategories;
