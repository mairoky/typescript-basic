// String
let courseName: string = "TypeScript";

// Number
let courseDuration: number = 3;

// Boolean
let isAdmit = true;

// Any type
let unpredictable: any = "hello";
unpredictable = 25;
unpredictable = true;
// unpredictable();

// When implicitly use type annotation
const movies = ["Gravity", "12 Angry Man", "The Godfather", "The Dark Knight"];

let searchMovie: string;
for (let movie of movies) {
  if (movie === "The Dark Knight") {
    searchMovie = movie;
    console.log(searchMovie);
  }
}
