<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="movie-search-app">Movie Search App</h1>
<p>A simple, responsive web application to search and view details of movies using the OMDB API. This app allows users to see a list of popular movies by default, search for movies dynamically with suggestions as they type, and view detailed information about a selected movie in a modal.</p>
<hr>
<h2 id="features"><strong>Features</strong></h2>
<ul>
<li><strong>Search Movies</strong>: Type in the search bar to see live suggestions.</li>
<li><strong>Popular Movies</strong>: Displays a default list of popular movies.</li>
<li><strong>Movie Details</strong>: Click on a movie to view detailed information such as plot, genre, year, and IMDb rating in a modal.</li>
<li><strong>Responsive Design</strong>: Optimized for all screen sizes.</li>
<li><strong>Clean and Modern UI</strong>: Styled using Material-UI (MUI).</li>
</ul>
<hr>
<h2 id="demo"><strong>Demo</strong></h2>
<p><a href="https://moviesappomdb.netlify.app/">https://moviesappomdb.netlify.app/</a></p>
<hr>
<h2 id="technologies-used"><strong>Technologies Used</strong></h2>
<ul>
<li><strong>React.js</strong>: Frontend framework.</li>
<li><strong>Material-UI (MUI)</strong>: For styling components and ensuring responsiveness.</li>
<li><strong>OMDB API</strong>: External API for movie data.</li>
<li><strong>Axios</strong>: For API requests.</li>
<li><strong>Environment Variables</strong>: To securely store the API key.</li>
</ul>
<hr>
<h2 id="installation-and-setup"><strong>Installation and Setup</strong></h2>
<ol>
<li>
<p>Clone the repository:</p>
<p>bash</p>
</li>
</ol>
<p><code>git clone https://github.com/yourusername/movie-search-app.git cd movie-search-app</code></p>
<ol start="2">
<li>
<p>Install dependencies:</p>
<p>bash</p>
<pre><code>
npm install
</code></pre>
</li>
<li>
<p>Create a <code>.env</code> file in the root directory and add your OMDB API key:</p>
<p>env</p>
<p><code>REACT_APP_OMDB_API_KEY=your_api_key_here</code></p>
</li>
<li>
<p>Start the development server:</p>
<p>bash</p>
<p><code>npm start</code></p>
</li>
<li>
<p>Open the app in your browser at <code>http://localhost:5173</code>.</p>
</li>
</ol>
<hr>
<h2 id="how-to-use"><strong>How to Use</strong></h2>
<ol>
<li>Launch the app.</li>
<li>Use the search bar to find a movie. Suggestions will appear dynamically as you type.</li>
<li>Click on a movie title from the suggestions or the popular movies list to view its details in a modal.</li>
<li>Use the close button in the modal to exit the details view.</li>
</ol>
<hr>
<h2 id="file-structure"><strong>File Structure</strong></h2>
<p>scss</p>
<p>Copy code</p>
<p><code>src/ ├── pages/ │ ├── MovieDetailsModal.js // Component for the movie details modal ├── App.js // Main application logic ├── Main.js // Entry point └── .env // Environment variables (not included in repo)</code></p>
<hr>
<h2 id="assumptions"><strong>Assumptions</strong></h2>
<ul>
<li>Popular movies are hardcoded with specific IMDb IDs (<code>tt0111161</code>, <code>tt0068646</code>, <code>tt0071562</code>) for demonstration purposes.</li>
<li>The OMDB API is free-tier and has limited request rates.</li>
</ul>
<hr>
<h2 id="future-enhancements"><strong>Future Enhancements</strong></h2>
<ul>
<li>Add pagination for search results.</li>
<li>Support switching between different movie databases.</li>
<li>Add user authentication for personalized features.</li>
<li>Implement dark mode for the app.</li>
</ul>
<hr>
<h2 id="acknowledgments"><strong>Acknowledgments</strong></h2>
<ul>
<li><strong>OMDB API</strong> for providing the movie data.</li>
<li><strong>Material-UI</strong> for the design components.</li>
</ul>
<p>Enjoy the app! 🎥🍿</p>
</div>
</body>

</html>
