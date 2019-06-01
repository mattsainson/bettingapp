import axios from 'axios';

export default {
  getGamesFromAPI: function(token) {
    return axios.get('/api/admin/getGamesFromAPI', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  loadGames: function() {
    return axios.get('/api/admin/loadgames');
  },
  loadBets: function() {
    return axios.get('/api/admin/loadbets');
  },
  playGames: function() {
    return axios.get('/api/admin/playgames');
  },
  payBets: function() {
    return axios.get('/api/admin/paybets');
  },
  getGames: function() {
    return axios.get('/api/games');
  },
  getUserBets: function(userId) {
    return axios.get('/api/bets/user/'+userId);
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};