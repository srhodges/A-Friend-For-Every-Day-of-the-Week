const bibleUrl = "https://bible-api";
const weekdayBox = document.querySelector(".weekday-container.weekday");

let verseDiv = document.querySelectorAll("section");
console.log(verseDiv);

weekdayBox.createTextNode(displayHope());

function accessBible() {
  try {
    let res = await axios.get(`${bibleUrl}`);
    console.log(res);
    let verses = res.data;
    renderVerse(verses);
    console.log(verses);
  } catch (error) {
    console.log(error);
  }
};

function renderVerse(verses) {
  verses.forEach((verse) => {
    let verseTextDiv = document.createElement("div")
    verseDiv.appendChild(verseTextDiv);
    console.log(verse);
    verseData(verseTextDiv, verses.book_name, verses.chapter, verses.verse, verses.text)
  })
}

function verseData(verseTextDiv, book_name, chapter, verse, text) {
  const h2 = document.createElement("h2");
  h2.innerText = book_name, chapter, verse;
    verseTextDiv.append(h2);
  const h3 = document.createElement("h3");
  h3.innerText = text;
    verseTextDiv.append(h3);
}


// function displayHope() {
//   let weekdays = document.body.getElementById('weekdays');
//   for (let i = weekdays.length - 1; i >= 0; i--) {
//     let weekday = weekdays[i];
//     if (weekday.alt) {
//       let text = document.createTextNode(weekday.alt);
//       weekday.parentNode.replaceChild(text, weekday);
//     }
//   }
// }
// onclick = displayHope();

// Still need to create on click function that replace the
// weekday with the information from the access bible function