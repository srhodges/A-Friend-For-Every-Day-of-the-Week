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