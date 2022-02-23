# react-interview
React front-end interview 2020

Develop a website that displays a random company name and 10 random cat images from the Cats as a Service (http://cataas.com) api.

## Technical Requirements:
* React app that can launch on localhost:3000 when the repository is cloned and dependencies are installed (either via `npm` or `yarn`).
* Single page application
* Display a random company name:
  * Get exactly one word from the aptly named https://random-word-api.herokuapp.com/. The api endpoint to use for this is `/word`.
  * Use `fetch` (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to obtain the random word from the api. 
  * Display that company name front and center at the top of the page for everyone to admire.
* Display 10 images of cats on the page:
  * Images are sourced from the api endpoint of your choosing on http://cataas.com
  * Each image should be unique
  * The images are displayed in a responsive grid:
    * desktop ( `w > 1000`) should display a `5 x 2` grid
    * tablet ( `500 < w < 1000`) should display a `2 x 5` grid
    * mobile ( `w < 500` ) should display a `1 x 5` column. 
  * *Bonus*: Tint each image of a cat a random color.

## Things to Consider:
* I am a nerd for git. Bonus points for demonstrating your git-fu.
* If you are familiar w/ Hooks (React 16+) please use them.
* Everyone uses stack overflow. If you have any problems while coding, and you find the solution on stack overflow, please add a link to that answer in comments near the relevant code.
