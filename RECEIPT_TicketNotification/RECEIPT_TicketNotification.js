let n = localStorage.getItem("name");
namee = JSON.parse(n);
let e = localStorage.getItem("email");
email = JSON.parse(e);
let p = localStorage.getItem("phone");
phone = JSON.parse(p);
let a = localStorage.getItem("address");
addresss = JSON.parse(a);
var date = localStorage.getItem("date");
let time = localStorage.getItem("time");
var showTime = date + ` | ` + time ;
let title = localStorage.getItem("moviee");
let number = localStorage.getItem("b");
let c = localStorage.getItem("c");
selectedSeats = JSON.parse(c);

window.onload = function() {
    var cinemass = "University Cinema Booking"
    var cinema = document.getElementById("cinemas")
    let address = document.getElementById("add")
    let date = document.getElementById("date")
    console.log(title);

    // You can update the content of the paragraph as needed
document.getElementById("cinemas").innerHTML = "Cinema:<span class='tabbed-text'>\t\t\t\t</span>University Cinema Booking";
document.getElementById("add").innerHTML = "Address:<span class='tabbed-text'>\t\t\t</span>College of Computer Studies Rm. 247-B, \n<span class='tabbed-text'>\t\t\t\t\t</span>High School Annex B, New Era University";
document.getElementById("date").innerHTML = `Date and Time:<span class='tabbed-text'>\t\t</span>${dateTimeString}`;
document.getElementById("name").innerHTML = `Name:<span class='tabbed-text'>\t\t\t\t</span> ${namee}`;
document.getElementById("email").innerHTML = `Email:<span class='tabbed-text'>\t\t\t\t</span> ${email}`;
document.getElementById("phone").innerHTML = `Phone Number:<span class='tabbed-text'>\t\t</span> ${phone}`;
document.getElementById("addre").innerHTML = `Address:<span class='tabbed-text'>\t\t\t</span> ${addresss}`;

document.getElementById("mov").innerHTML = `Movie:<span class='tabbed-text'>\t\t\t\t</span>${title}`;
document.getElementById("showTime").innerHTML = `Movie:<span class='tabbed-text'>\t\t\t\t</span>${showTime}`;
document.getElementById("seatNumber").innerHTML = `Seat Number:<span class='tabbed-text'>\t\t</span>${selectedSeats}`;
document.getElementById("number").innerHTML = `Number of Tickets:<span class='tabbed-text'>\t</span>${number}`;



};

// Create a new Date object
var currentDate = new Date();

// Get the current date
var day = currentDate.getDate();
var month = currentDate.getMonth(); // Months are zero-indexed
var year = currentDate.getFullYear();

// Get the current time
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Array of month names
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Format the date
var formattedDate = monthNames[month] + ' ' + day + ', ' + year;

// Format the time in 12-hour format with AM/PM
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // Handle midnight (0:00) as 12 AM
var formattedTime = pad(hours) + ':' + pad(minutes) + ' ' + ampm;


// Combine date and time into a single string
var dateTimeString = formattedTime + ', ' + formattedDate ;

// Display the result
console.log('Current Date and Time: '+' '+ dateTimeString);

// Function to pad single-digit numbers with a leading zero
function pad(number) {
    return number < 10 ? '0' + number : number;
}
