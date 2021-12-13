let radio = {
    stations: [{
        name: 'hot97',
        songs: [
        
        {     
        artist: 'Beyonce',
        title: 'Ring On It'
        },
        
        {
        artist: 'Shakira',
        title: 'Hips Dont Lie'
        }
        ]
        }]
    }

radio.radioName = "example"
//radio.stations[1].songs.push({artist: "Mike", song: "ThreeEra"})

//radio.stations[0].songs[]
console.log (radio.stations[0].songs[1].title)

const stations = ["Hot97", "Power105", "La Mega 97.9", "KTU"];
const random = Math.floor(Math.random() * stations.length);
console.log(random, stations[random]);

// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station 

console.log("Now Playing:" + song,title + "by" + song.artist)
// Animal Class

// Create an Animal class that will have name, color, age, and legs properties.
// Create different methods for Animal class.

// Encapsulation - allows us to keep things inside where they're supposed to be

// This is encapsulation
//Superclass=parent
class Animal {
    // creating our properties for our class
    constructor(name, color, age, legs) {
      this.name = name
      this.color = color
      this.age = age
      this.legs = legs
    }
  
    // method
    genericSound() {
      console.log('This is a generic animal sound! WOOO')
  
      // this will point at the current object we are working with
      // console.log('we are inside genericSound', this)
    }
  }
  
  // Instiated Animal class using new keyword
  // const dog = new Animal('Spot', 'brown', 2, 4)
  // console.log(typeof dog)
  
  // const dog = 'Dillon'
  
  // dog.genericSound()
  
  // const cat = new Animal('Meow', 'blue', 2, 4)
  // cat.genericSound()
  
  // genericSound()
  
  
  // this doesn't belong anywhere
  // console.log(this)
  
  //Inheritance
  //The way we inherit from our parents is by extending
  //We use the extends keyword to inherit from our parent Class

  //Subclass=child
  class Dog extends Animal {
    constructor(name, color, age, legs, owner){
    super(name, color, age, legs)
    this.owner=owner
    }

    playFetch (){
        console.log ('Playing fetch with owner.')
    }

    genericSound(){
        console.log ('Bow, wow!')
        super.genericSound()
        this.playFetch()
    }
  }

  const spot = new Dog('Spot', 'Purple', 99, 4, 'Liv' )
  //console.log(spot)

  spot.genericSound()
 // spot.playFetch()