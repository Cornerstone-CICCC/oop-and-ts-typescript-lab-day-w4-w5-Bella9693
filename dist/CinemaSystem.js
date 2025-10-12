"use strict";
// 🎟️ Movie Ticket Booking System
// 🍿 Create a system where users can book tickets and check seat availability.
//
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    MovieGenre[MovieGenre["Comedy"] = 1] = "Comedy";
    MovieGenre[MovieGenre["Drama"] = 2] = "Drama";
    MovieGenre[MovieGenre["Horror"] = 3] = "Horror";
    MovieGenre[MovieGenre["SciFi"] = 4] = "SciFi";
})(MovieGenre || (MovieGenre = {}));
const movies = [];
function addMovie(movieId, title, genre, availableSeats) {
    const newMovie = { movieId, title, genre, availableSeats };
    movies.push(newMovie);
    return newMovie;
}
function bookSeat(movieId, rowLetter, seatNumber) {
    const movie = movies.find((m) => m.movieId === movieId);
    if (!movie)
        return "Movie not found";
    const seatIndex = movie.availableSeats.findIndex((seat) => seat[0] === rowLetter && seat[1] === seatNumber);
    if (seatIndex === -1) {
        return `Seat ${rowLetter}${seatNumber} is not available`;
    }
    movie.availableSeats.splice(seatIndex, 1);
    return `Seat ${rowLetter}${seatNumber} booked successfully`;
}
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    const movie = movies.find((m) => m.movieId === movieId);
    if (!movie)
        return false;
    return movie.availableSeats.some((seat) => seat[0] === rowLetter && seat[1] === seatNumber);
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [
    ["A", 1],
    ["A", 2],
])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
