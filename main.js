// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.getElementsByTagName("article");

  const numberOfArticles = articles.length;

  for (i = 0; i < numberOfArticles; i++) {
    articles[i]
      .getElementsByTagName("span")[1]
      .addEventListener("click", function () {
        console.log(articles[i]);
      });
  }
}); 
then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.style.color = "red";
        heart.className = "activated-heart";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.style.color = "";
        heart.className = "";
      }
    })
    .catch(function(error) { const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
