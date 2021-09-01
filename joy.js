const bibleUrl = "https://bible-api.com";
const weekdayBox = document.querySelector(".weekday-container.weekday");

// let verseDiv = document.querySelectorAll("section");
// console.log(verseDiv);

// weekdayBox.createTextNode(displayHope());

async function accessBible(str, day) {
  try {
    let res = await axios.get(`${bibleUrl}/${str}`);
    console.log(res);
    let verses = res.data.verses;
    renderVerse(verses, day);
    console.log(verses);
  } catch (error) {
    console.log(error);
  }
};


// let button = document.querySelector("button");
// button.onclick(accessBible("input", "search-return"));
// accessBible("input", "search-return");
// this code is breaking everything 

function renderVerse(verses, day) {
  let verseDiv = document.querySelector(`#${day}`)
  verses.forEach((verse) => {
    let verseTextDiv = document.createElement("div")
    verseDiv.appendChild(verseTextDiv);
    console.log(verse);
    verseData(verseTextDiv, verse.book_name, verse.chapter, verse.verse, verse.text)
  })
}

function verseData(verseTextDiv, book_name, chapter, verse, text) {
  console.log(book_name, chapter, verse, text);
  const h3 = document.createElement("h3");
  h3.innerText = book_name;
    verseTextDiv.append(h3);
  const h2 = document.createElement("h2");
  h2.innerText = chapter, verse;
  verseTextDiv.append(h2);
  const p = document.createElement("p");
  p.innerText = text;
    verseTextDiv.append(p);
}


let days = document.querySelectorAll(".weekday");
days.forEach(day => {
  day.addEventListener("click", (e) => {
    console.log(day.innerText);
    day.innerHTML = "";
    switch (e.target.id) {
      case "sunday":
        accessBible("1Corinthians 13", "sunday");
        break;
      case "monday":
        accessBible("Hebrews 11:6", "monday");
        break;
        case "tuesday":
          accessBible("Hebrews 11:6", "tuesday");
        break;
        case "wednesday":
          accessBible("Hebrews 11:6", "wednesday");
        break;
        case "thursday":
          accessBible("Hebrews 11:6", "thursday");
        break;
        case "friday":
          accessBible("Hebrews 11:6", "friday");
          break;
          case "saturday":
        accessBible("Hebrews 11:6", "saturday");
        break;
    
    }
})
})


// Still need to create on click function that replace the
// weekday with the information from the access bible function