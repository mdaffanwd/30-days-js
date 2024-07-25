import axios from "axios";
// task 7
const pr = axios.get("https://api.github.com/users/mdaffanwd");
pr.then(function (res) {
  console.log(res.data);
})
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Data fetched with AXIOS");
  });

// axios with async/await
async function fetchData() {
    try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
    console.log('userId is:- ',response.data.userId);
    console.log('title is:- ',response.data.title);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
