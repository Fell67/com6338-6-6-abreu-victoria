# Assignment 6 - Multiple Choice Quiz Game
<h2>Instructions</h2>
<p>For this assignment, you'll be creating a multiple choice quiz game using JavaScript, similar to the game from Module 2. However, this time you will be using JavaScript to manipulate the HTML instead of using <span class="mono">alert</span>, <span class="mono">confirm</span>, and <span class="mono">prompt</span>. Also, the user will only have 30 seconds to answer each question.</p>

<h3>Setup</h3>
<p>The markup for the todo app is as follows:</p>
<pre><code class="language-markup">&lt;div id="quiz">&lt;/div></code></pre>
<p><u>Do NOT modify this <span class="mono">index.html</span> file.</u> The included automated tests depend on this markup to run. All markup needed to complete this assignment is already included. There is also no need to write any CSS to complete this assignment; all required CSS for the assignment is already included.</p>
<p>Note that for this assignment all you are given for markup is <code class="language-markup">&lt;div id="quiz">&lt;/div></code>. That means that all the elements for the quiz must be created with JavaScript.</p>
<p>In the <span class="mono">index.js</span> file, you must also create a variable named <span class="mono">questionsArr</span> similar to the previous quiz assignment. This variable will contain all of the quiz data that the app will use.</p>
<p>Like the previous quiz game, this variable must follow a specific format. It must be an array of objects, with each object having <span class="mono">question</span> and <span class="mono">answer</span> properties, as well as a <span class="mono">options</span> property that is another array full of the possible choices for each question. See the code below for an example of the <span class="mono">questionsArr</span> variable with one sample question:</p>
<pre><code class="language-js">var questionsArr = [
{
question: 'Who created JavaScript?',
answer: 'Brendan Eich',
options: [
    'Linus Torvalds',
    'Brendan Eich',
    'Dan Abramov',
    'Douglas Crockford',
]
},
]</code></pre>
<p>Your <span class="mono">questionsArr</span> variable should contain <u>at least FIVE question objects</u>. Additionally, each set of possible choices in <span class="mono">options</span> should have at least two choices.</p>
<p>As for the content of the questions and answers, you may create them around whatever theme or topic you wish.</p>

<h3 id="game-behavior">Game Behavior</h3>
<p>When the page loads, if the user has never played the game before, the game should display a "start quiz" button. The button <u>MUST have an id attribute of "start-quiz"</u> (<a href="#fig-1">figure 1</a>). The included automated tests require this id and will fail without it.</p>
<div class="quiz-example">
<span class="tag" id="fig-1">Figure 1: On first page load</span>
<div>
    <button>Start Quiz!</button>
</div>
</div>
<pre><code class="language-markup">&lt;div id="quiz">
&lt;button id="start-quiz">Start Quiz!&lt;/button>
&lt;/div></code></pre>
<p>If the user has taken the quiz before, the app should display the previous score (<a href="#fig-2">figure 2</a>).</p>
<div class="quiz-example">
<span class="tag" id="fig-2">Figure 2: On page load</span>
<div>
    <p>Previous Score: 60%</p>
    <button>Start Quiz!</button>
</div>
</div>
<p>After starting the quiz, your program should select the first question in <span class="mono">questionsArr</span> and display the question as well as the possible choices (<a href="#fig-3">figure 3</a>). The quiz should also display a timer that counts down from 30 one second at a time (<a href="#fig-3.1">figure 3.1</a>). Please use JavaScript's <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval"><span class="mono">setInterval</span></a> and <a href="https://www.w3schools.com/jsref/met_win_clearinterval.asp"><span class="mono">clearInterval</span></a> methods to create the timer.</p>
<div class="quiz-example">
<span class="tag" id="fig-3">Figure 3: after clicking "Start Quiz!"</span>
<div>
    <p>Who created JavaScript?</p>
    <div>
    <button>Linus Torvalds</button>
    <button>Brendan Eich</button>
    <button>Dan Abramov</button>
    <button>Douglas Crockford</button>
    </div>
    <p>30</p>
</div>
</div>
<pre><code class="language-markup">
&lt;div id="quiz">
&lt;p>Who created JavaScript?&lt;/p>
&lt;div>
&lt;button>Linus Torvalds&lt;/button>
&lt;button>Brendan Eich&lt;/button>
&lt;button>Dan Abramov&lt;/button>
&lt;button>Douglas Crockford&lt;/button>
&lt;/div>
&lt;p>30&lt;/p>
&lt;/div>
</code></pre>
<div class="quiz-example">
<span class="tag" id="fig-3.1">Figure 3.1: 3 seconds after clicking "Start Quiz!"</span>
<div>
    <p>Who created JavaScript?</p>
    <div>
    <button>Linus Torvalds</button>
    <button>Brendan Eich</button>
    <button>Dan Abramov</button>
    <button>Douglas Crockford</button>
    </div>
    <p>27</p>
</div>
</div>
<p>Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in <span class="mono">questionsArr</span>. There should be no messaging or feedback displayed to the user after making a selection or running out of time(<a href="#fig-4">figure 4</a>).</p>
<div class="quiz-example">
<span class="tag" id="fig-4">Figure 4: after selecting a choice or running out of time</span>
<div>
    <p>In what year was JavaScript created?</p>
    <div>
    <button>1999</button>
    <button>1975</button>
    <button>1995</button>
    <button>2005</button>
    </div>
    <p>30</p>
</div>
</div>
<p>After the last question is answered or time runs out, the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions (<a href="#fig-2">figure 2</a>). This number should be rounded to the <u>nearest whole number</u>.</p>
<p>To persist score data between games, the application should use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#example">JavaScript localStorage API</a> to store the user's most recent score under the key <span class="mono">previous-score</span> after each game and retrieve the score on page load. This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.</p>

<h2>Tests</h2>
<p>Automated tests are included with this assignment. Click the "run tests" button in the bottom right of the screen to run the test suite. To close the tests, click "close tests". To receive full credit, all automated tests must pass.</p>

<h2>Requirements for full credit</h2>
<p>
To receive full credit for this assignment, your program MUST:
<ul>
    <li>Operate in the same manner as described above in the <a href="#game-behavior">game behavior</a> section.</li>
    <li>Pass all automated tests.</li>
    <li>Be deployed to GitHub Pages.</li>
</ul>
</p>
<h2>Submission</h2>
<p>
When submitting this assignment, please include <u>BOTH</u>:
<ol>
    <li>A link to the assignment's GitHub repository.</li>
    <li>A link to the assignment's deployed, live site on GitHub Pages.</li>
</ol>
</p>

Website URL: https://fell67.github.io/com6338-6-6-abreu-victoria/