# Game of Thrones Characters API

### Overview
This is an API of the Game of Thrones characters. Users can see all character profiles, see individual profiles, create new profiles, update profiles, and delete profiles.

### Endpoints
* '/profiles' : INDEX. See all existing character profiles
```json
[
  {
    "AKA": [
      "King of the Andals and the First Men"
    ],
    "house": [
      "Baratheon"
    ],
    "allies": [
      "Tywin Lannister",
      "Eddard Stark"
    ],
    "against": [
      "Daenerys Targaryen",
      "Cersei Lannister"
    ],
    "_id": "5c819b6f71330ddafadeff5e",
    "name": "Robert Baratheon",
    "status": "deceased"
  },
  {
    "AKA": [
      "The Rainbow King"
    ],
    "house": [
      "Baratheon"
    ],
    "allies": [
      "House Tyrell"
    ],
    "against": [
      "Stannis Baratheon",
      "Cersei Lannister"
    ],
    "_id": "5c819c5971330ddafadf1abf",
    "name": "Renly Baratheon",
    "status": "deceased"
  },
  {
    "AKA": [
      "Stannis the Mannis"
    ],
    "house": [
      "Baratheon"
    ],
    "allies": [
      "Eddard Stark",
      "Davos Seaworth"
    ],
    "against": [
      "Cersei Lannister",
      "Daenerys Targaryen",
      "Robb Stark"
    ],
    "_id": "5c819c7d71330ddafadf1ee6",
    "name": "Stannis Baratheon",
    "status": "deceased"
  },
  {
    "AKA": [
      "Lioness",
      "the Mother of Madness",
      "Queen of the Andals and the First Men"
    ],
    "house": [
      "Lannister"
    ],
    "allies": [
      "Iron Bank of Braavos"
    ],
    "against": [
      "Aegon Targaryen",
      "Daenerys Targaryen",
      "House Stark",
      "Jaime Lannister",
      "Tyrion Lannister"
    ],
    "_id": "5c819c8c71330ddafadf2061",
    "name": "Cersei Lannister",
    "status": "alive"
  },
  {
    "AKA": [
      "Kingslayer",
      "Oathbreaker"
    ],
    "house": [
      "Lannister"
    ],
    "allies": [
      "none"
    ],
    "against": [
      "Night King",
      "Cersei Lannister"
    ],
    "_id": "5c819ca271330ddafadf22f9",
    "name": "Jaime Lannister",
    "status": "alive"
  },
  {
    "AKA": [
      "the Dwarf",
      "the Imp",
      "Half-Man"
    ],
    "house": [
      "Lannister"
    ],
    "allies": [
      "Daenerys Targaryen",
      "Aegon Targaryen"
    ],
    "against": [
      "Night King",
      "Cersei Lannister"
    ],
    "_id": "5c819cac71330ddafadf241b",
    "name": "Tyrion Lannister",
    "status": "alive"
  },
  {
    "AKA": [
      "Lord of Casterly Rock",
      "Savior of the City"
    ],
    "house": [
      "Lannister"
    ],
    "allies": [
      "Cersei Lannister",
      "Jaime Lannister",
      "House Tyrell",
      "House Frey",
      "House Bolton"
    ],
    "against": [
      "Tyrion Lannister",
      "Daenerys Targaryen",
      "Aegon Targaryen",
      "House Martell",
      "House Stark"
    ],
    "_id": "5c819cb471330ddafadf2521",
    "name": "Tywin Lannister",
    "status": "deceased"
  },
  {
    "AKA": [
      "Unknown"
    ],
    "house": [
      "Unknown"
    ],
    "allies": [
      "the undead"
    ],
    "against": [
      "the living"
    ],
    "_id": "5c819cbe71330ddafadf2621",
    "name": "Night King",
    "status": "alive"
  },
  {
    "AKA": [
      "Ned",
      "Lord of Winterfell",
      "the Honorable Ned Stark"
    ],
    "house": [
      "Stark"
    ],
    "allies": [
      "House Baratheon",
      "House Tully",
      "the North"
    ],
    "against": [
      "House Lannister"
    ],
    "_id": "5c819cd071330ddafadf28c8",
    "name": "Eddard Stark",
    "status": "deceased"
  },
  {
    "AKA": [
      "King in the North",
      "Lord of Winterfell",
      "the Young Wolf"
    ],
    "house": [
      "Stark"
    ],
    "allies": [
      "the North"
    ],
    "against": [
      "House Lannister",
      "House Frey",
      "House Bolton"
    ],
    "_id": "5c819cd771330ddafadf29c1",
    "name": "Robb Stark",
    "status": "deceased"
  },
  {
    "AKA": [
      "Alayne",
      "Little Dove"
    ],
    "house": [
      "Stark"
    ],
    "allies": [
      "Aegon Targaryen",
      "the North"
    ],
    "against": [
      "House Lannister",
      "House Frey",
      "House Bolton"
    ],
    "_id": "5c819cdf71330ddafadf2a40",
    "name": "Sansa Stark",
    "status": "alive"
  },
  {
    "AKA": [
      "Jon Snow",
      "King in the North"
    ],
    "house": [
      "Targaryen",
      "Stark"
    ],
    "allies": [
      "Daenerys Targaryen",
      "the North"
    ],
    "against": [
      "House Lannister",
      "House Frey",
      "House Bolton"
    ],
    "_id": "5c819ce871330ddafadf2b6d",
    "name": "Aegon Targaryen",
    "status": "alive"
  },
  {
    "AKA": [
      "Daenerys Stormborn",
      "Dany",
      "the Unburnt",
      "the Queen of the Great Grass Sea",
      "Queen of the Andals, the Rhoynar, and the First Men",
      "Mhysa",
      "the Dragon Queen"
    ],
    "house": [
      "Targaryen"
    ],
    "allies": [
      "Aegon Targaryen",
      "the Dothraki"
    ],
    "against": [
      "Night King",
      "Cersei Lannister"
    ],
    "_id": "5c819cf571330ddafadf2c9b",
    "name": "Daenerys Targaryen",
    "status": "alive"
  },
  {
    "AKA": [
      "The Rainbow King"
    ],
    "house": [
      "Baratheon"
    ],
    "allies": [
      "House Tyrell"
    ],
    "against": [
      "Stannis Baratheon",
      "Cersei Lannister"
    ],
    "_id": "5c82bee260c543104d15f966",
    "name": "Renly Baratheon",
    "status": "deceased",
    "__v": 0
  },
  {
    "AKA": [
      "The Rainbow King"
    ],
    "house": [
      "Baratheon"
    ],
    "allies": [
      "House Tyrell"
    ],
    "against": [
      "Stannis Baratheon",
      "Cersei Lannister"
    ],
    "_id": "5c82eea122b8360937c30abd",
    "name": "asdfasdf Baratheon",
    "status": "deceased",
    "__v": 0
  }
]
```
* '/profiles/new' : CREATE a new character profile
  * must include JSON body
  ```json
  [
  {
    "AKA": ["nickname(s) if any"],
    "house": ["family name(s) if any"],
    "allies": ["allies"],
    "against": ["enemies"],
    "_id": "id",
    "name": "name",
    "status": "either deceased or alive"
  }
  ]
  ```
* '/profiles/trait?[trait]=[value]', ex. 'profiles/trait?name=Cersei%20Lannister' : Show a character by name
```json
  [
  {
    "AKA": [
      "Lioness",
      "the Mother of Madness",
      "Queen of the Andals and the First Men"
    ],
    "house": [
      "Lannister"
    ],
    "allies": [
      "Iron Bank of Braavos"
    ],
    "against": [
      "Aegon Targaryen",
      "Daenerys Targaryen",
      "House Stark",
      "Jaime Lannister",
      "Tyrion Lannister"
    ],
    "_id": "5c819c8c71330ddafadf2061",
    "name": "Cersei Lannister",
    "status": "alive"
  }
]```
* '/profiles/:id', ex. 'profiles/5c819cf571330ddafadf2c9b' : SHOW a single character profile by ID
```json
{
  "AKA": [
    "Daenerys Stormborn",
    "Dany",
    "the Unburnt",
    "the Queen of the Great Grass Sea",
    "Queen of the Andals, the Rhoynar, and the First Men",
    "Mhysa",
    "the Dragon Queen"
  ],
  "house": [
    "Targaryen"
  ],
  "allies": [
    "Aegon Targaryen",
    "the Dothraki"
  ],
  "against": [
    "Night King",
    "Cersei Lannister"
  ],
  "_id": "5c819cf571330ddafadf2c9b",
  "name": "Daenerys Targaryen",
  "status": "alive"
}
```
* '/profiles/:id/edit' : edit an existing character profile
  * include JSON body
  ```json
  [
  {
    "AKA": ["REVISED nickname(s) if any"],
    "house": ["REVISED family name(s) if any"],
    "allies": ["REVISED allies"],
    "against": ["REVISED enemies"],
    "_id": "id",
    "name": "REVISED name",
    "status": "REVISED either deceased or alive"
  }
  ]
  ```
* '/profiles/:id/delete' : delete a character profile by ID