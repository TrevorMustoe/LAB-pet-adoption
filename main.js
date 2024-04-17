const pets = [
    {
      id: 1,
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
    },
    {
        id: 2,
      imageUrl: "https://cdn.pixabay.com/photo/2018/07/16/18/32/dinosaur-3542561_1280.jpg",
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",

    },
    {
      id: 3,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      
    },
    {
      id: 4,
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
    },
    {
      id: 5,
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
    },
    {
      id: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
    },
    {
      id: 7,
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
    },
    {
      id: 8,
      imageUrl: "https://cdn.pixabay.com/photo/2019/09/14/05/49/dinosaur-4475295_1280.jpg",
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
    },
    {
      id: 9,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
    },
    {
      id: 10,
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      
    },
    {
      id: 11,
      imageUrl: "https://cdn.pixabay.com/photo/2019/09/14/05/50/dinosaur-4475299_1280.jpg",
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
    },
    {
      id: 12,
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
    },
    {
      id: 13,
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
    },
    {
      id: 14,
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
    },
    {
      id: 15,
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
    },
    {
      id: 16,
      imageUrl: "https://cdn.pixabay.com/photo/2020/05/25/11/55/dinosaur-5218265_1280.jpg",
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
    },
    {
     id: 17,
     imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you havent seen his favorite movie (The Big Lebowski).",
      type: "cat",
    },
    {
      id: 18,
      imageUrl: "https://cdn.pixabay.com/photo/2017/09/10/13/06/pterosaur-2735500_1280.jpg",
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
    },
    {
      id: 19,
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
    },
    {
      id: 20,
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
    },
    {
      id: 21,
      imageUrl: "https://cdn.pixabay.com/photo/2016/03/15/09/01/prehistoric-times-1257162_1280.jpg",
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
    },
    {
        id: 22,
        imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg",
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
    },
    {
        id: 23,
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
    },
    {
        id: 24,
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
    },
    {
      id: 25,
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg",
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
    },
    {
        id: 26,
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
    },
    {
        id: 27,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
    },
    {
        id: 28,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
    },
    {
        id: 29,
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
    },
    {
        id: 30,
      imageUrl: "https://cdn.pixabay.com/photo/2022/10/02/18/33/dinosaur-7494195_1280.jpg",
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
    }
  ];

  //TODO (TM): Replace all broken images with new ones. 
  //TODO (TM): Find and replace 4 cat photos. 
  //TODO (TM): Find and replace 3 dog photos. 
  //TODO (TM): Find and replace 7 din0 photos. 

  //This creates a function called render to dom that takes in a div id and somesort of html that will go where the selected div lives
  const renderToDom = (divId, htmlToRender) => {
  // Creates a const and uses a query selector to grab the div we want to target
    const selectedDiv = document.querySelector(divId);
  // Accessing the inner html of the selected div and setting it to be whatever html we need to render here
    selectedDiv.innerHTML = htmlToRender;
  };
  
  // get the cards on the DOM
  const cardsOnDom = (array) => {
  // creates an emptys string where we can store this info
    let domString = "";
  // for loop iterating through the pets array
    for (const pets of array) {
  // adding the boostrap card to the empty string element
      domString += 
  // boostrap card
      `<div class="card" id="card-container" >
      <div class="card-body">
      <h5 id="cardTitle" class="card-title">${pets.name}</h5>
      <img class="card-img-top" src="${pets.imageUrl}" alt="Card image cap" style="width: 100%;">
      <p>${pets.color}</p>
        <p id="cardText"class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <hr></hr>
        <p>${pets.type}</p>
      </div>
  </div>
    `

    }
  // calling the renderToDom function with the properties of the div app and the string element which now contains our card
    renderToDom("#app", domString);
  };
  
  // function to filter animals with specific favorite color this takes in an array and it takes in a string that we are checking
  const filter = (array, typeOf) => {
  // creates anohter empty array to store our filterd items
    const typeOfArray= [];
  
  // takes the array we added and iterates through
    array.forEach((item) => {
  // while iterating checking if item in array is equal to the type of animal that we are looking for with typeOf
      if (item.type === typeOf) {
  // Pushes the newly assigned item to the array we selected
        typeOfArray.push(item);
      }
    });
  
    // returns the new array only containng the filtered items 
    return typeOfArray;
  };
  
  
  // Targeting each button needed
  const showAllButton = document.querySelector("#show-btn");
  const catButton = document.querySelector("#cat-button");
  const dogButton = document.querySelector("#dog-button");
  const dinoButton = document.querySelector("#dino-button");
  
  // show all button that shows all pets available
  showAllButton.addEventListener("click", () => {
  // this renders the type of pet we have selected at the top of the screen
    renderToDom("#type", "All Pets")
    cardsOnDom(pets);
  });
  
  // 3. Add click event to filter all the instructors whose favorite color is blue on button click
  catButton.addEventListener("click", () => {
    // this creates a new variable that calls the filter function and passes in the pets array and checking for the string "cat"
    const blueTeamMembers = filter(pets, "cat");
    // this renders the type of pet we have selected at the top of the screen
    renderToDom("#type", "Cats")
    cardsOnDom(blueTeamMembers);
  });
  

  dogButton.addEventListener("click", () => {
     // this creates a new variable that calls the filter function and passes in the pets array and checking for the string "dog"
    const blueTeamMembers = filter(pets, "dog");
    // this renders the type of pet we have selected at the top of the screen
    renderToDom("#type", "Dogs")
    cardsOnDom(blueTeamMembers);
  });

 
  dinoButton.addEventListener("click", () => {
    // this creates a new variable that calls the filter function and passes in the pets array and checking for the string "dino"
    const blueTeamMembers = filter(pets, "dino");
    // this renders the type of pet we have selected at the top of the screen
    renderToDom("#type", "Dinos")
    // this takes in the newly filtered variable and uses it as an arugment to provide info to the boostrap card
    cardsOnDom(blueTeamMembers);
  });



  



  