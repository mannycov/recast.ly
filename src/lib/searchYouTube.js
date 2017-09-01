var searchYouTube = (options, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {

    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video'
  })
    .done((items) => {
      callback(window.exampleVideoData, items);
    })
    .fail((items) => {
      console.log(failed);
    });
};


window.searchYouTube = searchYouTube;
