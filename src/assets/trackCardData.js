const daytonaImg = require("./daytona/daytona.png");
const cotaImg = require("./cota/cota.png");
const monacoImg = require("./monaco/monaco.png");
const lemansImg = require("./lemans/lemans.png");
const indyImg = require("./indy/indy.png");
const silverstoneImg = require("./silverstone/silverstone.png");

module.exports = {
  tracks: [
    {
      id: "daytona",
      img: daytonaImg,
      name: "Daytona International Speedway",
      location: "Daytona Beach, Florida, United States",
    },
    {
      id: "cota",
      img: cotaImg,
      name: "Circuit of the Americas",
      location: "Austin, Texas, United States",
    },
    {
      id: "monaco",
      img: monacoImg,
      name: "Circuit de Monaco",
      location: "Monte Carlo, Monaco",
    },
    {
      id: "lemans",
      img: lemansImg,
      name: "Circuit de la Sarthe",
      location: "Le Mans, France",
    },
    {
      id: "indy",
      img: indyImg,
      name: "Indianapolis Motor Speedway",
      location: "Indianapolis, Indiana, United States",
    },
    {
      id: "silverstone",
      img: silverstoneImg,
      name: "Silverstone Circuit",
      location: "Silverstone, England, United Kingdom",
    },
  ],
};
