import axios from 'axios';

export default {
  getGames: function() {
    return axios.get('/api/admin/getgames');
  },
  loadGames: function(data) {
    return axios.get('/api/admin/loadgames');
  },
  loadBets: function(data) {
    return axios.get('/api/admin/loadbets');
  },
  playGames: function(data) {
    return axios.get('/api/admin/playgames');
  },
  payBets: function(data) {
    return axios.get('/api/admin/paybets');
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