// String
var courseName = "TypeScript";
// Number
var courseDuration = 3;
// Boolean
var isAdmit = true;
// Any type
var unpredictable = "hello";
unpredictable = 25;
unpredictable = true;
// unpredictable();
// When implicitly use type annotation
var movies = ["Gravity", "12 Angry Man", "The Godfather", "The Dark Knight"];
var searchMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "The Dark Knight") {
        searchMovie = movie;
        console.log(searchMovie);
    }
}
