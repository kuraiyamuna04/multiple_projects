const button = document.getElementById("btn");
const quote = document.getElementById("quote");
const url = "https://api.quotable.io/random";

    let getQuote = () => {
        fetch(url)
          .then((data) => data.json())
          .then((item) => {
            quote.innerText = item.content;
          });
      };

button.addEventListener("click",getQuote);
getQuote();