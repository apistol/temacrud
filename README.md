let xhr = new XMLHTttpRequest();
xhr.open('GET', "http://localhost:3001/users")
xhr.onload = () => xhr.responseText
xhr.onerror = ...
xhr.send()