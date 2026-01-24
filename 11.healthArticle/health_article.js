// 1. Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// 2. Define the URL of the JSON file
var url = './health_article.json';

// 3. Prepare a GET request (asynchronous)
xhr.open('GET', url, true);

// 4. Tell XHR that the response will be JSON
xhr.responseType = 'json';

// 5. Define what happens when data is successfully loaded
xhr.onload = function () {
  // Check if the request was successful
  if (xhr.status === 200) {

    // Retrieve articles array from JSON response
    var articles = xhr.response.articles;

    // Get the div where articles will be displayed
    var articlesDiv = document.getElementById('articles');

    // Loop through each article
    articles.forEach(function (article) {

      // Create main article container
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      // Create and add title
      var title = document.createElement('h2');
      title.textContent = article.title;

      // Create and add description
      var description = document.createElement('p');
      description.textContent = article.description;

      // Create "Ways to Achieve" header
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      // Create list for ways to achieve
      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function (way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      // Create "Benefits" header
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      // Create list for benefits
      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function (benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Append all elements to articleDiv
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      // Append articleDiv to main container
      articlesDiv.appendChild(articleDiv);
    });
  }
};

// 6. Send the request
xhr.send();
