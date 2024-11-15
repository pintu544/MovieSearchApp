import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import MovieDetailsModal from "./pages/MovieDetailsModal";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_KEY = import.meta.env.VITE_OMDb_API;

  // Fetch default popular movies
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMovieIds = ["tt0111161", "tt0068646", "tt0071562"]; // Example IDs
        const promises = popularMovieIds.map((id) =>
          axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        );
        const responses = await Promise.all(promises);
        setMovies(responses.map((res) => res.data));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  // Fetch suggestions based on search term
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
        );
        if (data.Search) {
          setSuggestions(data.Search);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleMovieClick = async (imdbID) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
      );
      setSelectedMovie(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <Container>
      <Box
        sx={{
          padding: 4,
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: 3,
          marginY: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Movie Search App
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        {suggestions.length > 0 && (
          <Paper elevation={3}>
            <List>
              {suggestions.map((movie) => (
                <ListItem
                  button
                  key={movie.imdbID}
                  onClick={() => handleMovieClick(movie.imdbID)}
                >
                  <ListItemText primary={`${movie.Title} (${movie.Year})`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
        {searchTerm.trim() === "" && (
          <>
            <Typography variant="h5" marginTop={4}>
              Popular Movies
            </Typography>
            <Paper elevation={3}>
              <List>
                {movies.map((movie) => (
                  <ListItem
                    button
                    key={movie.imdbID}
                    onClick={() => handleMovieClick(movie.imdbID)}
                  >
                    <ListItemText primary={`${movie.Title} (${movie.Year})`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </>
        )}
      </Box>
      <MovieDetailsModal
        open={isModalOpen}
        onClose={handleModalClose}
        movie={selectedMovie}
      />
    </Container>
  );
};

export default App;
