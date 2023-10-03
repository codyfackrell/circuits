require('dotenv').config();
const {CONNECTION_STRING} = process.env;

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    define: {
      timestamps: false
    }
});

//Track Information and Facts Data

const Track = sequelize.define('track', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    trackName: DataTypes.STRING,
    trackCode: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    capacity: DataTypes.STRING,
    distance: DataTypes.STRING,
    surface: DataTypes.STRING,
    events: DataTypes.STRING,
    opened: DataTypes.INTEGER,
    random1: DataTypes.TEXT,
    random2: DataTypes.TEXT,
    random3: DataTypes.TEXT,
    trackImg: DataTypes.TEXT,
    carousel1: DataTypes.TEXT,
    carousel2: DataTypes.TEXT,
    carousel3: DataTypes.TEXT, 
});

const trackData = [
    {trackName: 'Daytona International Speedway',
    trackCode: 'daytona',
    location: 'Daytona Beach, Florida, United States',
    type: 'Tri-Oval',
    capacity: 'Approximately 101,500',
    distance: '2.5 miles (4.0 km)',
    surface: 'Asphalt',
    events: 'Daytona 500, Coke Zero Sugar 400, Rolex 24 at Daytona',
    opened: 1959,
    random1: 'The speedway features the largest video screen in motorsports, which measures approximately 60 feet high by 500 feet wide.',
    random2: 'The Daytona 500, the most prestigious race at the speedway, has been run annually since 1959 and is widely considered to be the "Super Bowl" of stock car racing.',
    random3: 'The track has undergone several major renovations and upgrades over the years, including the addition of lights to enable nighttime racing, and the construction of new grandstands and hospitality areas.',
    trackImg: '../../assets/daytona/daytona.png',
    carousel1: '../../assets/daytona/daytona1.jpg',
    carousel2: '../../assets/daytona/daytona2.jpg',
    carousel3: '../../assets/daytona/daytona3.jpg'
    },

    {trackName: 'Circuit of the Americas',
    trackCode: 'cota',
    location: 'Austin, Texas, United States',
    type: 'Road Course',
    capacity: '120,000',
    distance: '3.41 miles (5.5 km )',
    surface: 'Asphalt and Concrete',
    events: 'Formula One United States Grand Prix, MotoGP Red Bull Grand Prix of the Americas, NASCAR Cup Series EchoPark Automotive Grand Prix',
    opened: 2012,
    random1: 'COTA has a 360-degree observation tower that offers stunning views of the track and surrounding areas.',
    random2: 'The track is built on a 1,500-acre site and features a challenging uphill Turn 1.',
    random3: 'COTA has a unique "Bat Bridge" on the track, which is a reference to the millions of bats that reside under a nearby bridge.',
    trackImg: '../../assets/cota/cota.png',
    carousel1: '../../assets/cota/cota1.jpg',
    carousel2: '../../assets/cota/cota2.jpg',
    carousel3: '../../assets/cota/cota3.jpg'
    },

    {trackName: 'Circuit de Monaco',
    trackCode: 'monaco',
    location: 'Monte Carlo, Monaco',
    type: 'Street Circuit',
    capacity: '37,000',
    distance: '2.08 miles (3.34 km)',
    surface: 'Asphalt',
    events: 'Monaco Grand Prix, Historic Grand Prix',
    opened: 1929,
    random1: 'The circuit is known for its tight corners and narrow roads, making it one of the most challenging tracks in the world.',
    random2: 'The Monaco Grand Prix is one of the oldest and most prestigious races in motorsport, and has been held annually since 1929 (except during World War II).',
    random3: 'The track passes through the streets of Monte Carlo and La Condamine, two of the most famous and luxurious districts in Monaco.',
    trackImg: '../../assets/monaco/monaco.png', 
    carousel1: '../../assets/monaco/monaco1.jpg',
    carousel2: '../../assets/monaco/monaco2.jpg',
    carousel3: '../../assets/monaco/monaco3.jpg'
    },

    {trackName: 'Circuit de la Sarthe',
    trackCode: 'lemans',
    location: 'Le Mans, France',
    type: 'Road Course',
    capacity: '263,500',
    distance: '8.46 miles (13.626 km)',
    surface: 'Asphalt and Concrete',
    events: '24 Hours of Le Mans',
    opened: 1923,
    random1: 'The 24 Hours of Le Mans is the oldest active sports car endurance race in the world, having been held annually since 1923.',
    random2: 'The Circuit de la Sarthe is a mix of permanent track and public roads, which are closed to the public during the race.',
    random3: 'The famous "Mulsanne Straight" on the track was once more than 3 miles long, but it was shortened in 1990 for safety reasons, and now measures just over a mile in length.',
    trackImg: '../../assets/lemans/lemans.png',
    carousel1: '../../assets/lemans/lemans1.jpg',
    carousel2: '../../assets/lemans/lemans2.jpg',
    carousel3: '../../assets/lemans/lemans3.jpg'
    },

    {trackName: 'Indianapolis Motor Speedway',
    trackCode: 'indy',
    location: 'Indianapolis, Indiana, United States',
    type: 'Rectangular Oval',
    capacity: '257,325',
    distance: '2.5 miles (4.023 km)',
    surface: 'Asphalt and Brick',
    events: 'Indianapolis 500, Brickyard 400, IndyCar Grand Prix',
    opened: 1909,
    random1: `The original surface of the track was made entirely of bricks, giving it the nickname "The Brickyard." While the track has since been paved with asphalt, a 36-inch strip of bricks remains at the start-finish line as a tribute to the track's history.`,
    random2: 'The Indianapolis 500 is the largest single-day sporting event in the world, with an estimated attendance of over 300,000 people.',
    random3: 'In addition to racing, the Indianapolis Motor Speedway has also been used for a variety of non-motorsport events over the years, including a golf course, balloon races, and music concerts featuring famous performers such as Elvis Presley and the Rolling Stones.',
    trackImg: '../../assets/indy/indy.png',
    carousel1: '../../assets/indy/indy1.jpg',
    carousel2: '../../assets/indy/indy2.jpg',
    carousel3: '../../assets/indy/indy3.jpg'
    },

    {trackName: 'Silverstone Circuit',
    trackCode: 'silverstone',
    location: 'Silverstone, England, United Kingdom',
    type: 'Road Course',
    capacity: '150,000',
    distance: '3.66 miles (5.891 km)',
    surface: 'Asphalt',
    events: 'British Grand Prix, MotoGP British Grand Prix',
    opened: 1948,
    random1: 'The circuit was originally built as a World War II bomber base, and the track itself was created by connecting the perimeter roads of the airfield. The first event held at the track was a car race in 1947, and the British Grand Prix was first held there in 1948.',
    random2: 'The layout of the track has changed numerous times over the years, with the most recent major redesign occurring in 2010. The current layout features a series of fast corners and long straights, making it a popular track for both drivers and spectators.',
    random3: `Silverstone Circuit is home to the British Racing Drivers' Club, an exclusive organization of elite British drivers. Members have included famous names such as Stirling Moss, Jackie Stewart, and Lewis Hamilton.`,
    trackImg: '../../assets/silverstone/silverstone.png',
    carousel1: '../../assets/silverstone/silverstone1.jpg',
    carousel2: '../../assets/silverstone/silverstone2.jpg',
    carousel3: '../../assets/silverstone/silverstone3.jpg'
    }
]; 


//Quiz Question and Answer Data

const Quiz = sequelize.define('quiz', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  }, 
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

const Question = sequelize.define('question', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Quiz,
      key: 'id'
    }
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Answer = sequelize.define('answer', {
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: 'id'
    }
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

Quiz.hasMany(Question);
Question.hasMany(Answer);
Answer.belongsTo(Question);
  
const quizzes = [
    {
      name: 'daytona',
      questions: [
        {
          question: 'How many years did Dale Earnhardt Sr. try to win the Daytona 500 before finally achieving victory in 1998?',
          answers: [
            { answer: '5 years', isCorrect: false },
            { answer: '15 years', isCorrect: false },
            { answer: '20 years', isCorrect: true },
            { answer: '25 years', isCorrect: false }
          ]
        },
        {
          question: 'Which famous NASCAR driver won the Daytona 500 a record 7 times?',
          answers: [
            { answer: 'Richard Petty', isCorrect: true },
            { answer: 'Dale Earnhardt', isCorrect: false },
            { answer: 'Jeff Gordon', isCorrect: false },
            { answer: 'Jimmie Johnson', isCorrect: false }
          ]
        },
        {
          question: 'The Daytona International Speedway has a 180-acre infield lake, what is the name of this lake?',
            answers: [
              { answer: 'Lake Lewis', isCorrect: false },
              { answer: 'Lake Superior', isCorrect: false },
              { answer: 'Lake Daytona', isCorrect: false },
              { answer: 'Lake Lloyd', isCorrect: true }
            ]
          },
      ]
    },

    {
        name: 'cota',
        questions: [
          {
            question: 'How many turns does Circuit of the Americas have in total?',
            answers: [
              { answer: '16', isCorrect: false },
              { answer: '20', isCorrect: true },
              { answer: '24', isCorrect: false },
              { answer: '28', isCorrect: false }
            ]
          },
          {
            question: 'How long is the main straight at Circuit of the Americas, which features a steep uphill climb towards Turn 1?',
            answers: [
              { answer: '1/2 mile (0.8 km)', isCorrect: false },
              { answer: '3/4 mile (1.2 km)', isCorrect: false },
              { answer: '1 mile (1.6 km)', isCorrect: true },
              { answer: '1.2 miles (1.9 km)', isCorrect: false }
            ]
          },
          {
            question: 'Which driver holds the lap record for Circuit of the Americas, set during the 2018 United States Grand Prix?',
              answers: [
                { answer: 'Sebastian Vettel', isCorrect: false },
                { answer: 'Valtteri Bottas', isCorrect: false },
                { answer: 'Max Verstappen', isCorrect: false },
                { answer: 'Lewis Hamilton', isCorrect: true }
              ]
            },
        ]
      },
    
      {
        name: 'monaco',
        questions: [
          {
            question: 'Which driver has the most wins at the Monaco Grand Prix?',
            answers: [
              { answer: 'Michael Schumacher', isCorrect: false },
              { answer: 'Ayrton Senna', isCorrect: true },
              { answer: 'Alain Prost', isCorrect: false },
              { answer: 'Lewis Hamilton', isCorrect: false }
            ]
          },
          {
            question: `Which year's Monaco Grand Prix holds the record for the fewest cars to finish the race, with only three drivers making it to the end?`,
            answers: [
              { answer: '1982', isCorrect: true },
              { answer: '1996', isCorrect: false },
              { answer: '2003', isCorrect: false },
              { answer: '2010', isCorrect: false }
            ]
          },
          {
            question: 'How many times has the Monaco Grand Prix been canceled since its inception in 1929?',
              answers: [
                { answer: 'Once', isCorrect: false },
                { answer: 'Twice', isCorrect: true },
                { answer: 'Three times', isCorrect: false },
                { answer: 'Four times', isCorrect: false }
              ]
            },
        ]
      },

      {
        name: 'lemans',
        questions: [
          {
            question: 'What is the name of the trophy awarded to the winning manufacturer of the 24 Hours of Le Mans?',
            answers: [
              { answer: 'Trophée du Mans', isCorrect: false },
              { answer: 'Coupe de la Sarthe', isCorrect: false },
              { answer: 'Coupe du Monde', isCorrect: false },
              { answer: 'Coupe des 24 Heures', isCorrect: true }
            ]
          },
          {
            question: 'Who holds the record for the most overall victories at the 24 Hours of Le Mans?',
            answers: [
              { answer: 'Tom Kristensen', isCorrect: true },
              { answer: 'Jacky Ickx', isCorrect: false },
              { answer: 'Derek Bell', isCorrect: false },
              { answer: 'Emanuele Pirro', isCorrect: false }
            ]
          },
          {
            question: 'What is the name of the long straight on the Circuit de la Sarthe that connects the village of Arnage to the Porsche Curves?',
              answers: [
                { answer: 'Mulsanne Straight', isCorrect: false },
                { answer: 'Hunaudières Straight', isCorrect: true },
                { answer: 'Tertre Rouge Straight', isCorrect: false },
                { answer: 'Indianapolis Straight', isCorrect: false }
              ]
            },
        ]
      },

      {
        name: 'indy',
        questions: [
          {
            question: 'Who was the first winner of the Indianapolis 500?',
            answers: [
              { answer: 'Wilbur Shaw', isCorrect: false },
              { answer: 'Ray Harroun', isCorrect: true },
              { answer: 'Louis Meyer', isCorrect: false },
              { answer: 'Mario Andretti', isCorrect: false }
            ]
          },
          {
            question: 'Who was the first female driver to qualify for the Indianapolis 500 in 1977?',
            answers: [
              { answer: 'Lyn St. James', isCorrect: false },
              { answer: 'Danica Patrick', isCorrect: false },
              { answer: 'Sarah Fisher,', isCorrect: false },
              { answer: 'Janet Guthrie', isCorrect: true }
            ]
          },
          {
            question: 'In 2013, Tony Kanaan won the Indianapolis 500 after numerous attempts. How many times had he previously raced in the Indy 500 before winning?',
              answers: [
                { answer: '7', isCorrect: false },
                { answer: '10', isCorrect: false },
                { answer: '11', isCorrect: true },
                { answer: '13', isCorrect: false }
              ]
            },
        ]
      },

      {
        name: 'silverstone',
        questions: [
          {
            question: 'In what year was the first British Grand Prix held at Silverstone?',
            answers: [
              { answer: '1948', isCorrect: false },
              { answer: '1950', isCorrect: true },
              { answer: '1987', isCorrect: false },
              { answer: '2001', isCorrect: false }
            ]
          },
          {
            question: 'What is the name of the high-speed straight at Silverstone that leads to the tight right-hander at Stowe corner?',
            answers: [
              { answer: 'Hanger Straight', isCorrect: true },
              { answer: 'Wellington Straight', isCorrect: false },
              { answer: 'Woodcote Straight', isCorrect: false },
              { answer: 'Silverstone Straight', isCorrect: false }
            ]
          },
          {
            question: `In 2013, a blowout in one of Pirelli's tires caused controversy at the British Grand Prix. Which driver's tire blew out on the final lap of the race, costing him the win?`,
              answers: [
                { answer: 'Lewis Hamilton', isCorrect: true },
                { answer: 'Nico Rosberg', isCorrect: false },
                { answer: 'Sebastian Vettel', isCorrect: false },
                { answer: 'Felipe Massa', isCorrect: false }
              ]
            },
        ]
      }
];


//Seed Database

(async () => {
  await sequelize.sync({ force: true });

  await Track.bulkCreate(trackData);
  
  for (const quizData of quizzes) {
    const quiz = await Quiz.create({
      name: quizData.name 
    });
  
    for (const questionData of quizData.questions) {
      const question = await Question.create({
        quizId: quiz.id,
        question: questionData.question
      });
  
      for (const answerData of questionData.answers) {
        await Answer.create({
          questionId: question.id,
          answer: answerData.answer,
          isCorrect: answerData.isCorrect
        });
      }
    }
  }
})();