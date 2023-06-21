/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Creating the 'quotes' array and the objects that will be contained within it
***/
const quotes = [
  {
    quote: "If my life is going to mean anything, I have to live it myself.", 
    source: "Rick Riordan", 
    citation: "The Lightning Thief", 
    year: 2005,
    medium: "Book" 
  },
  {
    quote: "It is not this day.", 
    source: "J.R.R. Tolkien", 
    citation: "The Return of the King", 
    year: 1955,
    medium: "Book"
  },
  {
    quote: "That's one small step for a man, a giant leap for mankind.", 
    source: "Neil Armstrong", 
    year: 1969
  },
  {
    quote: "Dedication is a talent all on its own", 
    source: "Alphonse Elric", 
    citation: "Full Metal Alchemist: Brotherhood", 
    year: 2009,
    medium: "Anime"
  },
  {
    quote: "No matter what people tell you, words and ideas can change the world", 
    source: "Robin Williams", 
    citation: "Dead Poets Society", 
    year: 1989,
    medium: "Movie"
  }
];


/***
 * The 'getRandomQuote' function generates a random number that is used as an index value to return an object from the 'quotes' array
***/
function getRandomQuote (quotes) {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * Creating the 'printQuote' function. This builds a string of html based on conditional statements that gets displayed on the web page
***/
function printQuote () {
  let randomQuote = getRandomQuote(quotes);
  let html = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}
  `;
  if (randomQuote.citation !== undefined) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year !== undefined) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }
  if (randomQuote.medium !== undefined) {
    html += `<span class="medium"> ${randomQuote.medium} </span>`;
  }
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html;
}


// setInterval function that changes the quote on the page every ten seconds
setInterval(printQuote, 10000);

/***
 * Code provided with project by TeamTreehouse staff to create a click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);