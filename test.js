async function fetchWrongURL() {
    try {
      const res = await fetch("https://api.github.com/users/mdaffanwd");
  
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("ERROR:", error.message);
    }
  }
  
  fetchWrongURL();
  