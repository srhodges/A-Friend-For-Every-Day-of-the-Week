const bibleUrl = "https://bible-api";
const weekdayBox = document.querySelector(".weekday-container.weekday");

weekdayBox.createTextNode(message());

function message() {
  // 
}


onclick = displayHope();

function displayHope() {
  let weekdays = document.body.getElementById('weekdays');
  for (let i = weekdays.length - 1; i >= 0; i--) {
    let weekday = weekdays[i];
    if (weekday.alt) {
      let text = document.createTextNode(weekday.alt);
      weekday.parentNode.replaceChild(text, weekday);
    }
  }
}