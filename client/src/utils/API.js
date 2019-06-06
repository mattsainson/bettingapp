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
  getGame: function (id, token) {
    return axios.get('/api/games/' + id,{
      headers: {
        'Authorization': `Bearer ${token}`
      } 
    });
  },
  getTeamsForGame: function (id, token) {
    return axios.get('/api/teams/game/' + id, {
      headers: {
        'Authorization': `Bearer ${token}`
      } 
    });
  },
  placeBet: function (data, token) {
    return axios.post('/api/bets', data, {
      headers: {
        'Authorization': `Bearer ${token}`
      } 
    });
  },
  getprofile: function () {
    return axios.get("api/users/");
  },
  updateProfile: function (data, token) {
    return axios.put('/api/users/'+data.id, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      } 
    });
  }
};
