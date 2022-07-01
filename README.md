# Getting Started with Create React App

Simple React App which mimics the steampunk model of the Solar System.
From the understandable reasons (at least I think these are known to everyone), the sizes of all the presented celestial bodies (i.e. sun, planets and moons) and additionally, the distances between them are not proportional. These differences, compared to real Solar System data, is shown in details in the table below.

However, my goal was to reproduce the corellation of the move between all the bodies as well as it is possible. As for the real watchmaker's model, although the dimenions are not reliable, the relative angular speeds for all the planets and all the moons as kept. The very base, to which other speeds are relative is Earth sidereal period, equal to 365.2421896698 - which is mean tropical year duration value. I plan to be even more precise, using the Newcomb's expression (https://en.wikipedia.org/wiki/Tropical_year), but the change won't be visible within the canvas.

| Planet Name | Value (rel to Earth) | Model |       Other info       |
| ----------- | :------------------: | :---: | :--------------------: |
| Mercury     |        0.383         | 0.383 |           OK           |
| Venus       |        0.949         | 0.949 |           OK           |
| Earth       |        1.000         | 1.000 |           OK           |
| Mars        |        0.532         | 0.532 |           OK           |
| Jupiter     |        11.209        | 3.000 | Should be 3.763 bigger |
| Saturn      |        9.499         | 3.000 | Should be 3.166 bigger |
| Uranus      |        4.007         | 2.000 | Should be 2.003 bigger |
| Neptune     |        3.882         | 2.000 | Should be 1.941 bigger |

All the satellites are 1.25x bigger than they should be (but the scale in colrellation to the Earth size and between them is kept).

| Satellite Name | Value (rel to Moon) | Value (rel to Earth) | Model (1.25x) |
| -------------- | :-----------------: | :------------------: | :-----------: |
| Moon           |        1.000        |        0.2727        |    0.3409     |
| Callisto       |        1.387        |        0.3782        |    0.4727     |
| Ganymede       |        1.516        |        0.4133        |    0.5166     |
| Iapetus        |        0.432        |        0.1154        |    0.1433     |
| Titan          |        1.481        |        0.4040        |    0.5050     |
| Titania        |        0.454        |        0.1238        |    0.1547     |
| Oberon         |        0.438        |        0.1195        |    0.1493     |
| Trition        |        0.779        |        0.2124        |    0.2654     |

## TODO's

Find the starting point(!)\
Canvas.jsx => Canvas.tsx (null ref error)

## Page URL:

https://mroch4.github.io/SolarSystem/
