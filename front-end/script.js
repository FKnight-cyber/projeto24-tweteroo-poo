let _username = '';

class User {
  constructor(username, avatar) {
    this.username = username;
    this.avatar = avatar;
  }

  register() {
    axios
      .post('http://localhost:5001/sign-up', {
        username: this.username,
        avatar: this.avatar
      })
      .then(() => {
        _username = this.username;
        loadTweets();
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao fazer cadastro! Consulte os logs.');
      });
  }
};

function signUp() {
  const username = document.querySelector('#username').value;
  const picture = document.querySelector('#picture').value;

  const user = new User(username, picture);

  user.register();
}

function loadTweets() {
  axios.get('http://localhost:5001/tweets').then(res => {
    const tweets = res.data;
    let tweetsHtml = '';

    for (const tweet of tweets) {
      tweetsHtml += `
        <div class="tweet">
          <div class="avatar">
            <img src="${tweet.avatar}" />
          </div>
          <div class="content">
            <div class="user">
              @${tweet.username}
            </div>
            <div class="body">
              ${escapeHtml(tweet.tweet)}
            </div>
          </div>
        </div>
      `;
    }

    document.querySelector('.tweets').innerHTML = tweetsHtml;
    document.querySelector('.pagina-inicial').classList.add('hidden');
    document.querySelector('.tweets-page').classList.remove('hidden');
  });
}

function postTweet() {
  const tweet = document.querySelector('#tweet').value;

  axios
    .post('http://localhost:5001/tweets', {
      username: _username,
      tweet
    })
    .then(() => {
      document.querySelector('#tweet').value = '';
      loadTweets();
    })
    .catch(err => {
      console.error(err);
      alert('Erro ao fazer tweet! Consulte os logs.');
    });
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
