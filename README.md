# A-Friend-For-Every-Day-of-the-Week

# Project Overview

## Project Name

A Friend for Every Day of the Week

## Project Description

This application will first display the days of the week then display an affirmation or word of encouragement from the Bible.

## API and Data Sample

bible-api.com/

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

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

_These are examples only. Replace with your own MVP features._

- Successfully use external api
- Render data on page
- Allow user to choose day

#### PostMVP

_These are examples only. Replace with your own Post-MVP features._

- Make weekday tiles float on page
- Use local storage to save user notes for individual weekdays
- Give translation options

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day           | Deliverable                                        | Status     |
| ------------- | -------------------------------------------------- | ---------- |
| August 27 -29 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| August 30     | Project Approval                                   | Incomplete |
| August 31     | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| Sept 1        | Pseudocode / actual code                           | Incomplete |
| Sept 2        | Initial Clickable Model                            | Incomplete |
| Sept 3        | MVP                                                | Incomplete |
| Sept 6        | Presentations                                      | Incomplete |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Formatting HTML     |    H     |     4 hrs      |     0 hrs     |    0 hrs    |
| Styling with CSS    |    H     |     5 hrs      |     0 hrs     |    0 hrs    |
| Working with API    |    H     |     5 hrs      |     0 hrs     |    0 hrs    |
| Functionality in JS |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| Total               |    H     |     20 hrs     |     0 hrs     |    0 hrs    |

## Code Snippet

<strong> This code snippet will display the alt text for the weekday image/object after it's been clicked.</strong>

onclick = displayHope();

function displayHope() {

let weekdays = document.body.getElementById('weekdays');
let weekday = weekdays[i];

if (weekday.alt) {
let text = document.createTextNode(weekday.alt);
weekday.parentNode.replaceChild(text, weekday);
}
}
}

<!-- let alt = get axios random verse -->

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
