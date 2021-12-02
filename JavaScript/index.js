//DOM manipulation
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitter = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");
const load = document.getElementById("load")


// Show loading
function loading()
{
    load.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete()
{
    quoteContainer.hidden = false;
    load.style.visibility = "hidden";
    
}

//let quoteApi = [];

// Show new quote
function newQuotes()
{
    loading();
//    Pick a random number from API quotes array
const quote = quoteSheet[Math.floor(Math.random() * quoteSheet.length)];
// Check if author field is blank
if(!quote.author)
{
    authorText.textContent = "Unknown";
}
else
{
    authorText.textContent = quote.author;
}

// Check the quote length to determine the styling

if(quote.text.length > 50)
{
    quoteText.classList.add("long-quote")
}
else
{
    quoteText.classList.remove("long-quote")
}
quoteText.textContent = quote.text;
// Set Quote, Hide Loader
complete();
}
/* async function getQuotes()
{
    const quoteUrl = "https://type.fit/api/quotes";
    try
    {
        const responce = await fetch(quoteUrl);
        quoteSheet = await responce.json();
        newQuote();
        
    }
    catch(error)
    {

    }
}

quotes();
*/
// Tweet Quote

function tweetQuote()
{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

//Add event listeners
newQuote.addEventListener("click", newQuotes)
twitter.addEventListener("click", tweetQuote)

// loading();
newQuotes();



