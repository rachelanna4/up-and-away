(this["webpackJsonpup-and-away"]=this["webpackJsonpup-and-away"]||[]).push([[0],{13:function(e,a,r){},14:function(e,a,r){},16:function(e,a,r){"use strict";r.r(a);var o=r(1),s=r.n(o),t=r(6),i=r.n(t),n=(r(13),r(2)),c=r(8),l=(r(14),r(0)),h=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{className:"heading",children:"Up and Away"}),Object(l.jsxs)("p",{className:"intro",children:["It turns out that pigs ",Object(l.jsx)("em",{children:"can"})," fly... but only with the help of some balloons!",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Help Penelope the pig stay high in the sky by guessing the word correctly.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"For every letter you get wrong, one of her balloons will burst. Get the word right before the last balloon pops!"]}),Object(l.jsxs)("section",{className:"play",children:[Object(l.jsx)("p",{children:"Let's play!"}),Object(l.jsx)("a",{href:"#start",children:Object(l.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"angles-down",className:"svg-inline--fa fa-angles-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Object(l.jsx)("path",{fill:"currentColor",d:"M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"})})})]})]})},u=r(7),d=function(e){var a=e.currLetters,r=e.setLetters,o=e.gameFinished;return Object(l.jsx)("section",{className:"Keyboard",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((function(e){return Object(l.jsx)("button",{onClick:function(){return function(e){var o=[].concat(Object(u.a)(a),[e]);r(o)}(e)},disabled:a.includes(e)||o,children:e},e)}))})},w=function(e){var a=e.currLives,r=e.winStatus,o=e.restartGame;return r?Object(l.jsx)("img",{className:"GameImage",src:"./game-images/pig-win.png",alt:"pig flying with wings",onClick:function(){o()}}):0===a?Object(l.jsx)("img",{className:"GameImage",src:"./game-images/pig-0.png",alt:"pig on the ground sat in a mud puddle",onClick:function(){o()}}):1===a?Object(l.jsx)("img",{className:"GameImage",src:"./game-images/pig-1.png",alt:"pig with 1 balloon"}):Object(l.jsx)("img",{className:"GameImage",src:"./game-images/pig-".concat(a,".png"),alt:"pig with ".concat(a," balloons")})},m=function(e){return 1===e?"life":"lives"},g=function(e){var a=e.word,r=e.currLetters,o=e.disableGamePlay,s=e.restartGame,t=9;t-=r.filter((function(e){return!a.includes(e)})).length;var i=function(e,a){return!!e.replace(" ","").split("").every((function(e){return a.includes(e)}))}(a,r);return(i||0===t)&&o(),i?Object(l.jsxs)("section",{className:"score-area",children:[Object(l.jsx)(w,{lives:t,winStatus:i,restartGame:s}),Object(l.jsxs)("h3",{className:"GameStatus",children:["You have won and pigs ",Object(l.jsx)("em",{children:"CAN"})," fly! ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"play-again",children:"Click on Penelope to play again"})]})]}):0===t?Object(l.jsxs)("section",{className:"score-area",children:[Object(l.jsx)(w,{currLives:t,winStatus:i,restartGame:s}),Object(l.jsxs)("h3",{className:"GameStatus",children:["Penelope has fallen from the sky! ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"play-again",children:"Click on her to play again"})]})]}):Object(l.jsxs)("section",{className:"score-area",children:[Object(l.jsx)(w,{currLives:t,winStatus:i}),Object(l.jsxs)("h3",{className:"GameStatus",children:["You have ",Object(l.jsx)("span",{children:t})," ",m(t)," left!"]})]})},b=function(e){var a=e.word,r=e.letters,o="";if(e.gameFinished)o=a;else for(var s=0;s<a.length;s++)" "===a[s]?o+=" ":r.includes(a[s])?o+=a[s]:o+="_";return Object(l.jsxs)("section",{className:"WordDisplay",children:[Object(l.jsx)("h4",{children:"The word to guess is:"}),Object(l.jsx)("p",{children:o})]})},p=function(e){var a=e.clue,r=e.clueReveal,o=e.setClueReveal;return Object(l.jsxs)("section",{className:"ClueDisplay",children:[Object(l.jsx)("button",{onClick:function(){o(!0)},className:r?"hidden":"",children:"I'm stuck! Give me a clue."}),Object(l.jsx)("p",{className:r?"":"hidden",children:a})]})},f=function(e){var a=e.category,r=(e.setCategory,e.restartGame);return Object(l.jsxs)("select",{name:"category",className:"CategorySelector",value:a,onChange:function(e){r(e.target.value)},children:[Object(l.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Choose a category"}),Object(l.jsx)("option",{value:"animals",children:"Animals \ud83e\udd8a"}),Object(l.jsx)("option",{value:"countries",children:"Countries \ud83c\udf0d "}),Object(l.jsx)("option",{value:"nintendo",children:"Nintendo Characters \ud83c\udfae "}),Object(l.jsx)("option",{value:"harryPotter",children:"Harry Potter Characters \ud83e\ude84"}),Object(l.jsx)("option",{value:"superheroes",children:"Superheroes and Villians \ud83e\uddb8\ud83c\udffb"}),Object(l.jsx)("option",{value:"halloween",children:"Halloween \ud83c\udf83"}),Object(l.jsx)("option",{value:"christmas",children:"Christmas \ud83c\udf84"})]})},y=[{name:"animals",options:[{word:"giraffe",clue:"This animal has a very long neck"},{word:"zebra",clue:"This animal has stripes"},{word:"whale",clue:"This animal is the largest mammal"},{word:"polar bear",clue:"This animal lives in the Arctic"},{word:"kangaroo",clue:"This animal has a pouch to carry its babies"},{word:"flamingo",clue:"This animal usually stands on one leg"},{word:"crocodile",clue:"This animal is very snappy"},{word:"jellyfish",clue:"This animal might sting you in the sea"},{word:"squirrel",clue:"This animal loves to climb trees"},{word:"koala bear",clue:"This animal is found in Australia"},{word:"panda",clue:"This animal loves to eat bamboo"},{word:"chicken",clue:"This animal lays eggs"},{word:"cheetah",clue:"This animal is the fastest land animal"},{word:"beaver",clue:"This animal builds dams"},{word:"penguin",clue:"This animal is the only bird that can swim but can't fly"},{word:"parrot",clue:"This animal is a bird that can talk"},{word:"peacock",clue:"This animal is a bird that has magnificent multi-coloured feathers"}]},{name:"halloween",options:[{word:"pumpkin",clue:"You can carve a face into this vegetable"},{word:"black cat",clue:"A witch might have this pet"},{word:"broomstick",clue:"A witch flies on one of these"},{word:"cauldron",clue:"You would mix potions in one of these"},{word:"wizard",clue:"A man who has magic powers"},{word:"vampire",clue:"These mythical people do not like garlic"},{word:"bat",clue:"Vampires can turn into this flying animal"},{word:"cobweb",clue:"A spider spins one of these"},{word:"werewolf",clue:"A mythical animal someone transforms into during a full moon"},{word:"witch",clue:"A woman who casts magic spells"},{word:"costume",clue:"You would wear one of these to a Halloween party"},{word:"dracula",clue:"He is a famous vampire"},{word:"trick or treat",clue:"A phrase you say when somebody opens the door on Halloween"}]},{name:"harryPotter",options:[{word:"harry potter",clue:"He is known as the boy who lived"},{word:"ron weasley",clue:"He has a rat called scabbers"},{word:"hermione granger",clue:"Her parents are both muggles"},{word:"remus lupin",clue:"His biggest fear is a full moon"},{word:"draco malfoy",clue:"His best friends are Crabbe and Goyle"},{word:"lucius malfoy",clue:"He is Draco's father"},{word:"moaning myrtle",clue:"She lives in the girls bathroom at Hogwarts"},{word:"nearly headless nick",clue:"He is the house ghost of Gryffindor"},{word:"george weasley",clue:"He is one of the Weasley twins"},{word:"argus filch",clue:"He has a cat called Mrs Norris"},{word:"crookshanks",clue:"He is Hermione's pet cat"},{word:"neville longbottom",clue:"He is a talented herbology student"},{word:"ginny weasley",clue:"She is the youngest of the Weasley family"},{word:"professor dumbledore",clue:"He is the wise headmaster of Hogwarts"},{word:"voldemort",clue:"He is known as the Dark Lord"},{word:"scabbers",clue:"He was Ron's pet rat"},{word:"dobby",clue:"He is a kind house elf"},{word:"luna lovegood",clue:"She is a Ravenclaw witch who believes in Nargles"},{word:"hedwig",clue:"He is Harry's pet owl"},{word:"sirius black",clue:"He is Harry's godfather"},{word:"rubeus hagrid",clue:"He is the gamekeeper at Hogwards"},{word:"madame hooch",clue:"She taught Hogwarts students how to play Quidditch"},{word:"sorting hat",clue:"It decides which Hogwarts house to put students in"},{word:"severus snape",clue:"He was head of Slytherin house"}]},{name:"superheroes",options:[{word:"spiderman",clue:"This superhero can climb up buildings"},{word:"batman",clue:"This superhero has a butler called Alfred"},{word:"superman",clue:"This superhero's real name is Clark Kent"},{word:"the hulk",clue:"This superhero turns green when he is angry"},{word:"black widow",clue:"She is a spy and one of the Avengers"},{word:"thor",clue:"His brother is Loki"},{word:"iron man",clue:"This superhero owns Stark Industries"},{word:"black panther",clue:"This superhero is the King of Wakanda"},{word:"wolverine",clue:"He has 3 metallic claws on each hand"},{word:"catwoman",clue:"She is a Gotham City burglar"},{word:"magneto",clue:"He used to be a member of the X-Men but then became their enemy"},{word:"the joker",clue:"He is known as the Clown Prince of Crime"},{word:"wonder woman",clue:"She is one of the original members of the Justice League"},{word:"lex luthor",clue:"He is Superman's arch-nemesis"},{word:"loki",clue:"He is the brother of Thor"}]},{name:"nintendo",options:[{word:"yoshi",clue:"He is the dinosaur sidekick of Mario and Luigi"},{word:"bowser",clue:"He always tries to kidnap Princess Peach"},{word:"princess peach",clue:"She is the princess of the Mushroom Kingdom"},{word:"luigi",clue:"He is the younger brother of Mario"},{word:"mario",clue:"He is a plumber who wears a red cap"},{word:"link",clue:"He is the hero who fights to save Princess Zelda"},{word:"donkey kong",clue:"He is an ape who loves bananas"},{word:"princess zelda",clue:" She is the ruler of Hyrule"},{word:"pikachu",clue:"It is a pokemon species with a lightening bolt-shaped electric tail"},{word:"wario",clue:"He is an arch-nemesis of Mario"},{word:"sonic the hedgehog",clue:"This blue character can run faster than the speed of sound"},{word:"isabelle",clue:"She is the friendly secretary of Animal Crossing"},{word:"koopa troopa",clue:"This character is one of Bowser's minions"},{word:"toadette",clue:"She is a pink and white Toad who loves to drive on the kart track"},{word:"kirby",clue:"This pink character lives in Dream Land on Planet Popstar"},{word:"toad",clue:"He is the loyal servant of Princess Peach"},{word:"king boo",clue:"He is the leader of the Boos"},{word:"shy guys",clue:"They are enemies of Mario who wear masks to hide their faces"}]},{name:"countries",options:[{word:"france",clue:"You can visit the Eiffel Tower in this country"},{word:"england",clue:"the old and mysterious Stonehenge can be found in this country"},{word:"scotland ",clue:"The mythical Loch Ness Monster is believed to live in this country"},{word:"wales",clue:"This UK country has a red dragon on its flag"},{word:"ireland",clue:"Leprechauns are mythical creatures believed to live in this country"},{word:"spain",clue:"Tapas are a popular way to serve food in this country"},{word:"germany",clue:"The tradition of having a Christmas tree started in this country"},{word:"japan",clue:"Karaoke singing originated in this country"},{word:"poland",clue:"The capital city of this country is Warsaw"},{word:"cuba",clue:"This country is the largest island in the Caribbean"},{word:"jamaica",clue:"The reggae music style originated in this Caribbean country"},{word:"morocco",clue:"The capital city of this North African country is Rabat"},{word:"chil\xe9",clue:"One of the driest places on earth, the Atacama Desert, is located in this country"},{word:"per\xfa",clue:"Machu Picchu, a site of ancient Inca ruins, can be found in this country"},{word:"Mount Everest is located on the border of China and this country",clue:"Nepal"},{word:"brazil",clue:"Portuguese is the official language of this South-American country"},{word:"egypt",clue:"In the past, this country was rules by the Pharaohs"},{word:"australia",clue:"The largest eco-system on Earth, the Great Barrier Reef, is on the coast of this country"},{word:"new zealand",clue:"The M\u0101ori are the indigenous Polynesian people of this country"},{word:"mexico",clue:"Tacos, burritos, and quesadillas are traditional foods from this country"},{word:"thailand",clue:"Siamese cats are native to this country"},{word:"united states of america",clue:"The Grand Canyon can be found in this country"},{word:"canada",clue:"The official languages of this North American country are English and French"},{word:"kenya",clue:"The capital city of this country is Nairobi"},{word:"tanzania",clue:"The dormant volcano, Mount Kilimanjaro can be found in this country"},{word:"italy",clue:"The Mediterranean islands of Sicily and Sardinia are regions of this country"},{word:"india",clue:"Chapati, Naan, and Roti are types of bread that originate from this country"},{word:"greece",clue:"The first Olympic games took place in this country"},{word:"russia",clue:"This country is the largest in the world"},{word:"iceland",clue:"Almost 11% of this island country is covered by glaciers"},{word:"indonesia",clue:"This country has more active volcanos than any other country"},{word:"norway",clue:"The capital of this country is Oslo"}]},{name:"christmas",options:[{word:"santa claus",clue:"He travels around the world on a sleigh delivering presents"},{word:"the nativity",clue:"This is the story of Jesus' birth"},{word:"rudolph",clue:"He is a reindeer with a red nose"},{word:"baubles",clue:"You might hang these on your christmas tree"},{word:"reindeer",clue:"Santa uses these animals to fly his sleigh"},{word:"mince pies",clue:"A traditional English sweet christmas snack made of fruit and pastry"},{word:"eggnog",clue:"A traditional creamy christmas drink"},{word:"christmas tree",clue:"You might put a star or an angel on top of one of these"},{word:"advent calendar",clue:"You can open a door on one of these each day during December to find a chocolate or a picture behind it"},{word:"christmas carols",clue:"You sing these at Christmas-time"},{word:"elves",clue:"They live in the North Pole and work for Santa"},{word:"stocking",clue:"You might find your Christmas presents inside one of these"},{word:"snowman",clue:"This festive creation often has a carrot for a nose"},{word:"december",clue:"Christmas is during this month"},{word:"the north pole",clue:"This is the place where Santa Claus lives"},{word:"wreath",clue:"You might hang these on your front door"},{word:"nutcracker",clue:"A wooden toy soldier thought to bring good luck"},{word:"mistletoe",clue:"It is tradition to kiss underneath this plant "},{word:"christmas eve",clue:"The day before Christmas "}]}],j=function(e){e||(e="animals");var a=y.filter((function(a){return a.name===e}))[0].options,r=a.length,o=Math.floor(Math.random()*r),s=Object(c.a)({},a[o]);return s.word=s.word.toUpperCase(),s},v=function(){var e=Object(o.useState)(j()),a=Object(n.a)(e,2),r=a[0],s=a[1],t=Object(o.useState)([]),i=Object(n.a)(t,2),c=i[0],u=i[1],w=Object(o.useState)(!1),m=Object(n.a)(w,2),y=m[0],v=m[1],O=Object(o.useState)(!1),k=Object(n.a)(O,2),x=k[0],T=k[1],H=Object(o.useState)(""),C=Object(n.a)(H,2),S=C[0],N=C[1],A=function(e){var a=S;e&&(a=e,N(e)),s(j(a)),u([]),v(!1),T(!1)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(h,{})}),Object(l.jsxs)("div",{className:"game-area",id:"start",children:[Object(l.jsx)(g,{className:"GameStatus",word:r.word,currLetters:c,disableGamePlay:function(){v(!0)},restartGame:A}),Object(l.jsxs)("div",{className:"word-area",children:[Object(l.jsx)(f,{category:S,setCategory:N,restartGame:A}),Object(l.jsx)(b,{word:r.word,letters:c,gameFinished:y}),Object(l.jsx)(p,{clue:r.clue,clueReveal:x,setClueReveal:T}),Object(l.jsx)(d,{currLetters:c,setLetters:u,gameFinished:y})]})]})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3ff09d77.chunk.js.map