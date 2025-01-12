const { fetchData } = require("../fancyLibrary");

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// fetchData that returns a promise.
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData().then((resolve) => {
  console.log(resolve);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fetchingData = async () => {
  try {
    const fetchedData = await fetchData();
    console.log(fetchedData);
  } catch (e) {
    console.log(e);
  }
};

fetchingData();
