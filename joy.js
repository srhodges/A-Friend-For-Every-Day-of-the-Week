const bibleUrl = "https://bible-api.com";
const weekdayBox = document.querySelector(".weekday-container.weekday");


const messageInput = document.querySelector(".message")

const saveMessage = () => {
  window.localStorage.setItem("message", messageInput.value)
}

const loadMessage = () => {
let content = window.localStorage.getItem(messageInput)
  message.append(content);
}

saveButton = document.querySelector(".save");
saveButton.addEventListener("click", () => {
  saveMessage();
});

loadButton = document.querySelector(".load");
loadButton.addEventListener("click", () => {
  loadMessage();
});



async function accessBible(str, day) {
  try {
    console.log(str);
    let res = await axios.get(`${bibleUrl}/${str}`);
    console.log(res);
    let verses = res.data.verses;
    if (day === "alert") {
      displayAlert(verses);
    } else {
      renderVerse(verses, day);
    }   console.log(verses);
    } catch (error) {
      console.log(error);
    }
  };

function displayAlert(verses) {
  let str = "";
  verses.forEach((verse) => {
    str += `${verse.book_name} ${verse.chapter}:${verse.verse} ${verse.text}`
   
  })
  alert(str);
}


let input = document.querySelector("#search-input");

let button = document.querySelector("button");
button.addEventListener("click", () => {

  accessBible(input.value, "alert");
});




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
  h2.innerText = `${chapter}:${verse}`
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
        accessBible("John 15:12", "sunday");
        break;
      case "monday":
        accessBible("James 5:16", "monday");
        break;
        case "tuesday":
          accessBible("Ephesians 4:31", "tuesday");
        break;
        case "wednesday":
          accessBible("Psalm 34:17", "wednesday");
        break;
        case "thursday":
          accessBible("Psalm 27:14", "thursday");
        break;
        case "friday":
          accessBible("Romans 15:13", "friday");
          break;
          case "saturday":
        accessBible("John 16:33", "saturday");
        break;
    
    }
})
})


// Still need to create on click function that replace the
// weekday with the information from the access bible function