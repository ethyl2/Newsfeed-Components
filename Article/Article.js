/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Dev in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  /*
  Step 5: Add a new article to the array. Make sure it is in the same 
  format as the others. Refresh the page to see the new article.
  */
 {
 title: 'The Free Software Song',
 date: 'Oct 30st, 2019',
 firstParagraph: `By Richard Stallman. The lyrics of the “Free Software Song” are sung to the melody of the Bulgarian folk song “Sadi moma bela loza”`,

 secondParagraph: `Join us now and share the software;
 You'll be free, hackers, you'll be free.
 Join us now and share the software;
 You'll be free, hackers, you'll be free.
 
 Hoarders can get piles of money,
 That is true, hackers, that is true.
 But they cannot help their neighbors;
 That's not good, hackers, that's not good.
 
 When we have enough free software
 At our call, hackers, at our call,
 We'll kick out those dirty licenses
 Ever more, hackers, ever more.
 
 Join us now and share the software;
 You'll be free, hackers, you'll be free.
 Join us now and share the software;
 You'll be free, hackers, you'll be free.`,

 thirdParagraph: `When Stallman makes a personal appearance, he’ll sometimes surprise his audience by closing with an a capella rendition of the song, as a kind of benediction:

 “Join us now and share the software;
 You’ll be free, hackers, you’ll be free.
 Hoarders can get piles of money,
 That is true, hackers, that is true.
 But they cannot help their neighbors;
 That’s not good, hackers, that’s not good.”`
 },
 /*Part 2: Add Articles -- Now that we have our components built, 
 add a few articles of your own to the data array.*/

 {title: 'Model View Controller',
    date: 'Oct 30, 2019',
    firstParagraph: `© 2003-2012 James Dempsey`,

    secondParagraph: `James Dempsey, an Apple engineer, introduced his heartfelt 
    ode to the popular software architectural pattern back in 2003. 
    With an acoustic guitar on the stage at Apple’s Worldwide Developer’s 
    Conference (WWDC), he explained its inspiration. “As sometimes happens 
    with technologies that I get stoked about, the first thing I do is go to 
    the iTunes music store, and type in some keywords to see if there are 
    any songs about it.” And when there weren’t any, he’d decided to write one up himself.`,

    thirdParagraph: `MVC’s a paradigm for factoring your code,
    Into functional segments, so your brain does not explode.
    To achieve reusability, you’ve got to keep those boundaries clean,
    Model on the one side, view on the other, the controller’s in between.
    
    Model View
    Yeah, it’s got three layers like them Oreos do
    Model View Creamy Controller
    
    Model objects represent your application’s raison d’être
    Custom objects that contain data, logic, and et cetera
    You create custom classes in your app’s problem domain
    Then you can choose to reuse them with other views
    But the model objects stay the same
    
    You can model a throttle and a manifold
    Model the toddle of a two year old
    Model a bottle of fine chardonnay
    Model all the glottal stops people say
    Model the coddling of boiling eggs
    You can model the waddle in Hexley’s legs
    
    Model View
    You can model all the models that pose for GQ
    Model View Controller
    
    View object tend to be controls used to display and edit
    Cocoa’s got a lot of those, well written, to its credit
    Take a Cocoa text view, hand it any old Unicode string
    The user can interact with it
    It can hold most anything
    
    Oh but the view don’t know about the model
    That string could be a phone number or the works of Aristotle
    Keep the coupling loose
    And so achieve a massive level of reuse
    
    Model View
    Yeah on a retina display y’know it’s all times two
    Model View Controller
    
    I’ll bet you’re wondering now
    I’ll bet you’re wondering how
    Data flows between model and view
    The controller has to mediate
    Between each layer’s changing state
    To synchronize the data of the two
    It pulls and pushes every changed value.
    
    Yeah.
    
    Model View
    Mad props to the SmallTalk crew
    For Model View Controller
    
    Model View
    It’s pronounced ‘oh-oh’, not ‘ooh-ooh’
    Model View Controller
    
    Controllers know the model and view very intimately
    They gotta know just enough to do all the right stuff in this ménage à three
    They’ve got a lot on their plate, also need to integrate OS functionality
    In their coordinating role
    They give your app its soul
    Making it all that it can be
    
    Model View
    Notification, delegation, target action too
    Model View Controller
    
    Model View
    Model View
    Model View Controller
    
    Model View
    Now you can claim to be an MVC guru
    Model View Controller
    
    `},
    {
      title: 'Debugging Angst',
      date: 'Oct 30, 2019',
      firstParagraph: `Eric Siegel wrote and performed this song when he was a computer science professor at Columbia University, 1997 - 2000.`,
  
      secondParagraph: `This version is specific to C programming; there is also a Java programming version.`,
  
      thirdParagraph: `"syntax error", "parsing error"; did you forget your ;?
      Programming is 99% debugging, so you better keep it scrollin'.
      "unterminated string", did you match your ''?
      /* Comment your code, label your node, write yourself a note! */
      Chorus:
      It's the pain of finally figuring out what went wrong ("doh!").
      Who's to blame when you confuse two equal signs with one?
      Compiler warnings should not be ignored; you'll dereference a NULL pointer.
      If you screw up and find your butt in an infinite loop, ^C will control C.
      Don't disrespect your teaching assistant -- she's your biggest hero.
      "floating point exception" is a run-time error when you divide by 0.
      "segmentation fault" can bring you to tears -- in your throat there'll be a lump,
      'cause when it's time to submit your homework all you'll get is a "core dump"
      Chorus
      Bridge:
      Ultimately what you've got to do is narrow down the problem.
      It's like finding a needle in a haystack; you're never gonna solve them,
      unless you put in some printf()'s, comment half that haystack.
      "stack overflow", you've no place to go, your program is a lame hack!
      Chorus`
    },
    {
      title: 'Learning C After Java',
      date: 'Oct 30, 2019',
      firstParagraph: `By David Arnow (arnow@sci.brooklyn.cuny.edu)`,
  
      secondParagraph: `Imagine there's no classes,
      It isn't hard to do.
      No objects to send messages
      No references too
      Imagine all the methods
      Static and you've got C.`,
  
      thirdParagraph: `O-ho you might say that that's a nightmare
      And you're not the only one
      But the language has its uses
      And like Java can be fun.`
    }
];

/* Step 1: Create a function that creates a component. You will want your 
component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as its one argument, 
  or 5 separate arguments mapping to each piece of the data object above.
*/

function createArticle(artObj) {
  // Create DOM elements
  const articleDiv = document.createElement("div");
  articleDiv.classList.add('article');

  const articleHeading = document.createElement("h2");
  articleHeading.textContent = artObj.title;

  const articleDate = document.createElement("p");
  articleDate.textContent = artObj.date;
  articleDate.classList.add('date');

  const articleP1 = document.createElement("p");
  articleP1.textContent = artObj.firstParagraph;
  const articleP2 = document.createElement("p");
  articleP2.textContent = artObj.secondParagraph;
  const articleP3 = document.createElement("p");
  articleP3.textContent = artObj.thirdParagraph;
  

  const articleBtn = document.createElement("span");
  articleBtn.textContent = "Read";
  articleBtn.classList.add('expandButton');

  /*
  Step 2: Add an event listener to the expandButton span. 
  This event listener should toggle the class 'article-open' on the 'article' div.
  */
  articleBtn.addEventListener('click', (event) => {
    articleDiv.classList.toggle('article-open');
    articleDiv.style.overflow = "auto";
  });

  //Append children to parent div
  const children = [articleHeading, articleDate, articleP1, articleP2, articleP3, articleBtn];
  children.forEach(child => articleDiv.appendChild(child));

  // Step 3: return the entire component.
  return articleDiv;

}

/*
  Step 4: Map over the data, creating a component for each object 
  and add each component to the DOM as children of the 'articles' div.
  */
const articlesDiv = document.querySelector(".articles");
const articleArray = data.map((articleData) => { 
  articlesDiv.appendChild(createArticle(articleData));
});

/* Stretch Goal Component Constructor

Create a function that builds Article components. 
You are not expected to finish this. 
This goal is simply an exercise in thinking about how you would 
implement a function that took some data, created a new Article from it, 
and appended it to the HTML (without actually writing anything in 
  the HTML file). */

function componentContructor(myDataObj, targetEl=document.querySelector("body")) {
  // How it appends to the HTML:
  // If no target element is specified, appends component to the body.
  // If target element is added as the 2nd argument, appends component to target element.
  targetEl.appendChild(createArticle(myDataObj));
}

/* Stretch Goal: Implement a way to write your own articles using the 
Component Constructor and some input fields. */

const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', function(event) {
  let title = document.getElementById("user-input-title").value;
  let date = document.getElementById("user-input-date").value;
  
  let firstParagraph = document.getElementById("user-input-first-paragraph").value;
  let secondParagraph = document.getElementById("user-input-second-paragraph").value;
  let thirdParagraph = document.getElementById("user-input-third-paragraph").value;

  let myObj = {};
  myObj.title = title;
  myObj.date = date;
  myObj.firstParagraph = firstParagraph;
  myObj.secondParagraph = secondParagraph;
  myObj.thirdParagraph = thirdParagraph;

  componentContructor(myObj, articlesDiv);
});
