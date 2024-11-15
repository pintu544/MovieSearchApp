import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

const MovieDetailsModal = ({ open, onClose, movie }) => {
  if (!movie) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {movie.Title}
        <Button
          onClick={onClose}
          style={{ float: "right", marginTop: "-8px" }}
          color="secondary"
        >
          Close
        </Button>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          <strong>Plot:</strong> {movie.Plot}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Genre:</strong> {movie.Genre}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Year:</strong> {movie.Year}
        </Typography>
        <Typography variant="body1">
          <strong>Ratings:</strong> {movie.imdbRating}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetailsModal;
