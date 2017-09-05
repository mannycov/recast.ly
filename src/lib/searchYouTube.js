var searchYouTube = ({key, query, max=5}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {

    key: key,
    q: query,
    maxResults: max,
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video'

  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.each((err) => console.error(err));
    });
};


window.searchYouTube = searchYouTube;
