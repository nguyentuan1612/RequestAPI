API : hhttps://api.escuelajs.co/api/v1/products

![image](https://user-images.githubusercontent.com/104414771/209476362-b179a078-6078-4f2c-a304-b3e3d41026bc.png)
![image](https://user-images.githubusercontent.com/104414771/209476374-818d3d9d-cf03-4b6f-bfbd-9bce7ca99eec.png)
Making requests
In order to fetch content from an arbitrary URL, you can pass the URL to fetch:

fetch('https://mywebsite.com/mydata.json');

Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request:

fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});

Take a look at the Fetch Request docs for a full list of properties.

Handling the response
The above examples show how you can make a request. In many cases, you will want to do something with the response.

Networking is an inherently asynchronous operation. Fetch method will return a Promise that makes it straightforward to write code that works in an asynchronous manner:

const getMoviesFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
      return json.movies;
    })
    .catch(error => {
      console.error(error);
    });
};

You can also use the async / await syntax in a React Native app:

const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      'https://reactnative.dev/movies.json',
    );
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

Don't forget to catch any errors that may be thrown by fetch, otherwise they will be dropped silently.

