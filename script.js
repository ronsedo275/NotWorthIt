const quotes = [
    { text: "Plagiarism saves time."},
    { text: "Life is short; eat chalk."},
    { text:" Dont follow your friend off a bridge; lead them"},
    { text: "You miss 100% of the naps you don’t take"},
    { text: "If Plan A fails, there is always Plan.. stop trying"},
    { text: "You could chase your dreams… but they’re faster than you"},
    { text: "It’s never too late to give up"},
    { text: "If your going to slow, just stop"},
    { text: "Expect nothing and you’ll never be disappointed"},
    { text: "Just quit now"},
    { text: "Giving up isn’t a sign of weakness – its a sign of excellent time management"},
    { text: "If you think ur smart, know there is always someone smarter"},
    { text: "The best time to quit was yesterday. The second best time is today."}
];

let currentIndex = 0;

        function updateQuote() {
            document.getElementById("quote-text").innerText = quotes[currentIndex].text;
        }

        function nextQuote() {
            currentIndex = (currentIndex + 1) % quotes.length;
            updateQuote();
        }

        function prevQuote() {
            currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
            updateQuote();
        }

        document.getElementById("scroll-btn").addEventListener("click", function() {
            document.getElementById("quote-container-whole").scrollIntoView({ behavior: "smooth" });
        });