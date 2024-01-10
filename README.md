# Etch-A-Sketch

<img width="1091" alt="etch-a-sketch-sample" src="https://github.com/erlopez11/etch-a-sketch/assets/101296798/2d9886e8-2426-4735-9288-75b672edc047">

A reminagined etch-a-sketch for drawing using colored squared boxes that can change size based on the size of the grid.

## Description
This project allows the user to create a continuous line drawing similar to that of a real life etch-a-sketch. Unlike a normal etch-a-sketch, the user is able to adjust the size of the grid using a slider at the bottom of that screen. The grid sizes range from a length and height of 1 square to 64 squares. The round button allows the user to toggel between light and dark mode. This project was built as an assignment for _The Odin Project_ foundations course.

## Design
Prior to starting the project, I created mock-up of the design using figma. To design this project I drew inspiration from a character from the show _Adventure Time_ called Beemo; he is a little character designed to resemble a portable video game system like the Game Boy. I made the etch-a-sketch canvas to resemble the shape and structure of Beemo and included the button and slider for the grid size and mode adjustments. I moved the facial features out side of the screen, so that the screen could act as the drawing canvas. I used Beemo's color scheme within the light-mode color palette of the etch-a-sketch and adjusted those colors into more cool-toned darker colors for the night mode. The background is made up of clouds that I illustrated using Krita. For the text I used the _Google Font_ Anton. 

<img width="1535" alt="Etch-A-Sketch Mockups" src="https://github.com/erlopez11/etch-a-sketch/assets/101296798/d5af236e-6932-4f31-b994-de85092f2709">



## Challenges
One of the difficult challenges of this project was creating the functionality that allows the grid to change based on the chosen grid size. Up until now, my project have mostly used flexbox as a way of organizing content. With this specific part of the project I had to not only use grid to organize it, but I also had to use it within javascript. I kept running into the obstacle where my grid wouldn't fill the entire space of drawing canvas. Another obstacle I ran into was in getting the drawn line to follow the movement of the mouse. When I first started, a line wasn't drawn when the mouse moved, instead the color of the first square on the drawing canvas would change  color with the mouse movement, but only one square would remain drawn. I also ran into the challege of having to figure out how to create a dark mode that would not only change the color scheme, but that would also change the arrangement of the face, give the screen a glowing effect, and change to color of the clouds in the background. I tried doing it all in that same css file, but found that only the background would change and everything else remained the same. Doing this also added more styling to my css file which made it less organized. After some research and looking at tutorials, I decided to make a seperate css file just for the dark mode and have the page switch to that file when the mode button was pressed.

## Future Implemetation
Currently, I have found that when the mouse passes over the first square at the top of the canvas, the square does not fill with color, it remains the base color. This is something that I would like to fix in the future. A reset button needs to be added as well since in its current state the grid only resets when the size of the grid is adjusted. I would also like to see if there is anyway to reduce that amount of styling in my css file, specifically within the media queries. I found that I had to make changes to all of the styling using media queries so that the content could fit within different screen sizes. While this made it responsive to the different screen sizes, it created a lot of repetative code. I have been thinking about methods to reduce all the repetion in order to improve the files and make the code cleaner.

## Live Demo
[Etch-A-Sketch](https://erlopez11.github.io/etch-a-sketch/)
