// Activity 1: Understanding Promises
// task 1
const pt1 = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res("promise resolved");
  //   }, 1000);
}).then((data) => console.log(data));

// task 2
const pt2 = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     rej("promise rejected");
  //   }, 1000);
})
  .then((data) => console.log(data))
  .catch((err) => console.log("pt2 has been rejected:", err));

// Activity 2: Chaining Promises
// task 3
const url = "https://api.github.com/users/mdaffanwd";
function fetchData(url) {
  return fetch(url).then((response) => {
    try {
      return response.json();
    } catch (error) {
      console.error("Network response was not ok");
    }
  });
}
fetchData(url)
  .then((data) => {
    console.log("User Info:", data);
    // Simulate another fetch call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Simulated fetch step 1 complete");
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result);
    // Simulate another fetch call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Simulated fetch step 2 complete");
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result);
    // Simulate another fetch call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Simulated fetch step 3 complete");
      }, 1000);
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Fetching data failed:", error);
  });

// Activity 3: Using Async/Await
// task 4
let p4 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise resloved");
  }, 10000);
});
async function waitResovle() {
  let promise = await p4;
  console.log(promise);
}
waitResovle();

// task 5
const pt5 = new Promise((res, rej) => {
  rej("pt5 has been rejected");
});
async function pt5Async() {
  try {
    const pt5Val = await pt5;
    console.log(pt5Val);
  } catch (error) {
    console.log(error);
  }
}
pt5Async();

// Activity 4: Fetching Data from an API.
// task 6
fetch("https://api.github.com/users/mdaffanwd")
  .then((res) => {
    console.log("without converting to json", res);
    return res.json();
  })
  .then((res) => {
    console.log("after converting to json", res);
  })
  .catch((error) => console.error("Fetch error:", error));

// task 7
async function fetchPublicAPI() {
  try {
    const response = await fetch("https://api.github.com/users/mdaffanwd");
    const res = await response.json();
    console.log("from async/await:-", res);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchPublicAPI();

// Activity 5: Concurrent Promises.
// task 8
const p8_1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("1st resloved in 1secs");
    res("1st promise resolved");
  }, 1000);
});
const p8_2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("2nd rejected in 1sec");
    rej("2nd promise rejected");
  }, 1000);
});
const p8_3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3nd resloved in 3secs");
  }, 3000);
});
// task 8
// Promise.all([p8_1, p8_2, p8_3]);

// task 9
Promise.race([p8_1, p8_2, p8_3])
  .then((result) => {
    console.log("Race resolved with:", result);
  })
  .catch((error) => {
    console.log("Race rejected with:", error);
  });
