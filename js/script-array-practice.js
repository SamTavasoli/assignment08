//STEP 1
let favoriteMovies = ["Inception", "Interstellar", "The Matrix", "Avatar", "The Dark Knight"];
console.log("Second Favorite Movie:", favoriteMovies[1]);
//STEP 2
let movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Interstellar";
movies[2] = "The Matrix";
movies[3] = "Avatar";
movies[4] = "The Dark Knight";
console.log("First Movie:", movies[0]);
//STEP 3
movies.splice(2, 0, "The Godfather");
console.log("New Length:", movies.length);
//STEP 4
let moviesLiteral = [...movies]; // Clone the movies array
delete moviesLiteral[0];
console.log("Movies after delete:", moviesLiteral);
//STEP 5
console.log("For/in Loop:");
for (let index in moviesLiteral) {
    console.log(moviesLiteral[index]);
}

//STEP 6
console.log("For/of Loop:");
for (let movie of moviesLiteral) {
    console.log(movie);
}
//STEP 7
console.log("Sorted Movies:");
for (let movie of moviesLiteral.sort()) {
    console.log(movie);
}
//STEP 8
let leastFavMovies = ["Movie 6", "Movie 7", "Movie 8"];
console.log("Movies I like:\n" + favoriteMovies.join("\n") + "\nMovies I regret watching:\n" + leastFavMovies.join("\n"));
//STEP 9
let allMovies = favoriteMovies.concat(leastFavMovies);
console.log("All Movies, Reverse Sorted:\n" + allMovies.sort().reverse().join("\n"));
//STEP 10
console.log("Last Movie:", allMovies[allMovies.length - 1]);
//STEP 11
console.log("First Movie:", allMovies[0]);
//STEP 12
let replacementMovies = ["New Movie 1", "New Movie 2", "New Movie 3"];
for (let i = 0; i < leastFavMovies.length; i++) {
    let index = allMovies.indexOf(leastFavMovies[i]);
    if (index !== -1) {
        allMovies[index] = replacementMovies[i];
    }
}
console.log("Updated Movies:", allMovies.join(", "));
//STEP 13
let moviesRanking = [["Inception", 1], ["Interstellar", 2], ["The Matrix", 3], ["Avatar", 4], ["The Dark Knight", 5]];
let movieNames = moviesRanking.filter(item => typeof item[0] === "string").map(item => item[0]);
console.log("Movie names from ranking:\n" + movieNames.join("\n"));
//STEP 14
let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
function showEmployee(empArray) {
    console.log("Employees:\n" + empArray.map(emp => emp.toUpperCase()).join("\n"));
}
showEmployee(employees);
//STEP 15
function filterValues(array) {
    return array.filter(item => item);
}
console.log("Filtered Values:", filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
console.log("Random Item:", getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//STEP 17
function getLargestNumber(array) {
    return Math.max(...array);
}
console.log("Largest Number:", getLargestNumber([10, 20, 30, 40, 50]));