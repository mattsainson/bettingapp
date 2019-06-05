import axios from 'axios';

export default {
  getGamesFromAPI: function (token) {
    return axios.get('/api/admin/getGamesFromAPI', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  loadGames: function (token) {
    return axios.get('/api/admin/loadgames', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  },
  loadBets: function (token) {
    return axios.get('/api/admin/loadbets', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  playGames: function (token) {
    return axios.get('/api/admin/playgames', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  payBets: function (token) {
    return axios.get('/api/admin/paybets', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  getGames: function (token) {
    return axios.get('/api/games', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  getUserBets: function (userId, token) {
    return axios.get('/api/bets/user/' + userId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  },
  signup: function (userData) {
    return axios.post("api/users/register", userData);
  },
  login: function (userData) {
    return axios.post("api/users/login", userData);
  },
  getGame: function (id) {
    return axios.get('/api/games/' + id);
  },
  getTeamsForGame: function (id) {
    return axios.get('/api/teams/game/' + id);
  },
  placeBet: function (data) {
    return axios.post('/api/bets', data);
  },
  getprofile: function () {
    return axios.get("api/users/");
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