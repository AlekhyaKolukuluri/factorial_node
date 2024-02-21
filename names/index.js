const names = require("../country/state/city/index");
const first = require("../utilities/utils/index");

const getPeopleInCity = (names) => {
  return first(names);
};

module.exports = getPeopleInCity;
