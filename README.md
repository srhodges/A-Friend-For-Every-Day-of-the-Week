# A-Friend-For-Every-Day-of-the-Week

# Project Overview

## Project Name

A Friend for Every Day of the Week

## Project Description

This application will first display the days of the week then display an affirmation or word of encouragement from the Bible when clicked.

## API and Data Sample

bible-api.com/

```"reference": "John 3:16",
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
}```

## Wireframes

https://wireframe.cc/pro/pp/543d4ba6e467781

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Successfully use external api
- Render data on page
- Allow user to choose day
- 
#### PostMVP  

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

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Formatting HTML     |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| Styling with CSS    |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| Working with API    |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| Functionality in JS |    H     |     6 hrs      |     0 hrs     |    0 hrs    |
| Total               |    H     |     24 hrs     |     0 hrs     |    0 hrs    |

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

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
