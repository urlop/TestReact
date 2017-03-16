import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//ReactDOM.render(
//    React.createElement('h1', null, 'Hello!'),
//    document.getElementById('container')
//  );



let myApiUrl = 'http://localhost:8080'  
let usersPath = 'users'

const ul = document.getElementById('container');


fetch('http://localhost:8080/users', {  
  method: 'GET'
})
.then(function(response) {
  usersResult(response)
})
.catch(function(error) {
  console.log(error);
});


function usersResult(response) {
  //return response.json();
  console.log("response usersResult");
  console.log(response);


  let users = response.results;
  return users.map(function(user) {
    let li = createNode('li');
    let span = createNode('span');
    span.innerHTML = `${user.name}`;
    append(li, span);
    append(ul, li);
  })

  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }
}
//[{"name":"Lindsey Rippin","username":"Rey_Harber75","email":"Emma27@hotmail.com","address":{"street":"Orn Burgs","suite":"Apt. 811","city":"Andymouth","zipcode":"72284","geo":{"lat":"-85.6778","lng":"0.0794"}},"phone":"1-530-372-8797","website":"lazaro.info","company":{"name":"Hermann - Stracke","catchPhrase":"Vision-oriented actuating customer loyalty","bs":"cross-media disintermediate synergies"}}
