const daytonaImg = require("./daytona/daytona.png");
const daytona1 = require("./daytona/daytona1.jpg");
const daytona2 = require("./daytona/daytona2.jpg");
const daytona3 = require("./daytona/daytona3.jpg");
const cotaImg = require("./cota/cota.png");
const cota1 = require("./cota/cota1.jpg")
const cota2 = require("./cota/cota2.jpg")
const cota3 = require("./cota/cota3.jpg")
const monacoImg = require("./monaco/monaco.png");
const monaco1 = require("./monaco/monaco1.jpg")
const monaco2 = require("./monaco/monaco2.jpg")
const monaco3 = require("./monaco/monaco3.jpg")
const lemansImg = require("./lemans/lemans.png");
const lemans1 = require("./lemans/lemans1.jpg")
const lemans2 = require("./lemans/lemans2.jpg")
const lemans3 = require("./lemans/lemans3.jpg")
const indyImg = require("./indy/indy.png");
const indy1 = require ("./indy/indy1.jpg")
const indy2 = require ("./indy/indy2.jpg")
const indy3 = require ("./indy/indy3.jpg")
const silverstoneImg = require("./silverstone/silverstone.png");
const silverstone1 = require("./silverstone/silverstone1.jpg")
const silverstone2 = require("./silverstone/silverstone2.jpg")
const silverstone3 = require("./silverstone/silverstone3.jpg")

module.exports = {
  tracks: [
    {
      id: "daytona", 
      img: daytonaImg,
      carouselImgs: [
        daytona1,
        daytona2,
        daytona3,
      ],
      name: "Daytona International Speedway",
      location: "Daytona Beach, Florida, United States",
    },
    {
      id: "cota",
      img: cotaImg,
      carouselImgs: [
        cota1,
        cota2,
        cota3,
      ],
      name: "Circuit of the Americas",
      location: "Austin, Texas, United States",
    },
    {
      id: "monaco",
      img: monacoImg,
      carouselImgs: [
        monaco1,
        monaco2,
        monaco3,
      ],
      name: "Circuit de Monaco",
      location: "Monte Carlo, Monaco",
    },
    {
      id: "lemans",
      img: lemansImg,
      carouselImgs: [
        lemans1,
        lemans2,
        lemans3,
      ],
      name: "Circuit de la Sarthe",
      location: "Le Mans, France",
    },
    {
      id: "indy",
      img: indyImg,
      carouselImgs: [
        indy1,
        indy2,
        indy3,
      ],
      name: "Indianapolis Motor Speedway",
      location: "Indianapolis, Indiana, United States",
    },
    {
      id: "silverstone",
      img: silverstoneImg,
      carouselImgs: [
        silverstone1,
        silverstone2,
        silverstone3,
      ],
      name: "Silverstone Circuit",
      location: "Silverstone, England, United Kingdom",
    },
  ],
};
