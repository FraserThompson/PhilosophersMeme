(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h2>' + item.title + '</h2></a><h5>' + item.date + '</h5>';
        if (item.content) {
          appendString += '<p>' + item.content.substring(0, 250) + '...</p></li>';
        } else {
          appendString += "<p>No content.</p></li>";
        }
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');
  var type = getQueryVariable('type');

  if (searchTerm && type == "tags"){

    var idx = lunr(function () {
      this.field('id');
      this.field('tags');
    });

    document.getElementById(searchTerm).classList.add('active');

    for (var key in window.store) {
      idx.add({
        'id': key,
        'tags': window.store[key].tags
      });
      
      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section

    }
  } if (searchTerm && type == "author"){

    var idx = lunr(function () {
      this.field('id');
      this.field('author');
    });

    document.getElementById('author-title').innerHTML = searchTerm;

    for (var key in window.store) {
      idx.add({
        'id': key,
        'author': window.store[key].author
      });
      
      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section

    }
  
  } else if (searchTerm && !type) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('tags');
      this.field('author');
      this.field('category');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'tags': window.store[key].tags,
        'category': window.store[key].category,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();