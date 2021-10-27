# A Friend For Every Day of the Week

## Overview

This application will first display the days of the week, then on click will display an affirmation or word of encouragement from the Christian Bible.

https://srhodges.github.io/A-Friend-For-Every-Day-of-the-Week/


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

- Successfully use external api
- Render data on page
- Ability to search for specific verses
- Allow user to record thoughts in local storage

<br>

## API and Data Sample

bible-api.com/

```
"reference": "John 3:16",
"verses": [
{
"book_id": "JHN",
"book_name": "John",
"chapter": 3,
"verse": 16,
"text": "\nFor God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\n\n"
}
],
"text": "\nFor God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\n\n",
"translation_id": "web",
"translation_name": "World English Bible",
"translation_note": "Public Domain"
}

```

## Wireframes

https://wireframe.cc/pro/pp/543d4ba6e467781


## Project Schedule

> This schedule will be used to keep track of progress throughout the week and align expectations.


| Day           | Deliverable                                        | Status     |
| ------------- | -------------------------------------------------- | ---------- |
| August 27 -29 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete |
| August 30     | Project Approval                                   | Complete |
| August 31     | Core Application Structure (HTML, CSS, etc.)       | Complete |
| Sept 1        | Pseudocode / actual code                           | Complete |
| Sept 2        | Initial Clickable Model                            | Complete |
| Sept 3        | MVP                                                | Complete |
| Sept 6        | Presentations                                      | Complete |


## Timeframes

> Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.


| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Formatting HTML     |    H     |     6 hrs      |     3 hrs     |    3 hrs    |
| Styling with CSS    |    H     |     6 hrs      |     6 hrs     |    6 hrs    |
| Working with API    |    H     |     6 hrs      |     4 hrs     |    4 hrs    |
| Functionality in JS |    H     |     6 hrs      |     5 hrs     |    5 hrs    |
| Total               |    H     |     24 hrs     |     18 hrs    |    18 hrs    |

## Code Snippet

```
const messageInput = document.querySelector(".message")

const saveMessage = () => {
  window.localStorage.setItem("message", messageInput.value)
  messageInput.value = "";
}

const loadMessage = () => {
  const message = window.localStorage.getItem('message')
  console.log(message);
  messageInput.value = message
}

saveButton = document.querySelector(".save");
saveButton.addEventListener("click", () => {
  saveMessage();
});

loadButton = document.querySelector(".load");
loadButton.addEventListener("click", () => {
  loadMessage();
});

```

