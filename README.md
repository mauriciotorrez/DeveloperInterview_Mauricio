# Overview
React front-end and .net core web api interview 2022

Develop a website that displays a random company name and 10 random cat images from the Cats as a Service (http://cataas.com) api.

## Setup:
* There is a .NET Core 3.1 WebAPI API that exists in this repo, which contains a service that wraps around the Cats as a Service web api. You will need to run this locally and make requests to this from your react application. The default url for this api is `localhost:44356`. 

## Technical Requirements:
* React app that in the directory `/ui` that can launch on `localhost:3000` when the repository is cloned and dependencies are installed (either via `npm` or `yarn`).
* Single page application
* Display a random company name:
  * Get exactly one word from the aptly named https://random-word-api.herokuapp.com/. The api endpoint to use for this is `/word`.
  * Use `fetch` (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to obtain the random word from the api. 
  * Display that company name front and center at the top of the page for everyone to admire.
* Display 10 images of cats on the page:
  * Images are sourced from a GET request to the api endpoint api/cats,
  * Use `fetch` to obtain the random cat image URL as well as the tags from the api.
  * Display images with the `src` property obtained from the  `url` field of the api response.
  * Beneath each image of a cat, display a string list of corresponding tags from the `tags` array property of the api response.
  * Each image should be unique.
  * The images are displayed in a responsive grid:
    * desktop ( `w > 1000`) should display a `5 x 2` grid,
    * tablet ( `500 < w < 1000`) should display a `2 x 5` grid,
    * mobile ( `w < 500` ) should display a `1 x 5` column. 
  * *Bonus*: Tint each image of a cat a random color.

## Things to Consider:
* If you are familiar w/ Hooks (React 16+) please use them.
* Everyone uses stack overflow. If you have any problems while coding, and you find the solution on stack overflow, please add a link to that answer in comments near the relevant code.

## Bonus Points:
* Currently the web api has a GET endpoint for `/api/cats`. This returns a single cat image. More effective api usage would contain an api endpoint for a list of `n` cats.
  * New API cats controller endpoint, `GetCats` that accepts a parameter `n`.
  * Responds with a `List<Cat>` of size `n`.
  * Unit Tests on `GetCats` should be set up in the `APITests` project and passing.
