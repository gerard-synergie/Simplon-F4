  let user = {
    name: 'John',
    surname: 'Smith'
  };
  
  fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })
  .then(response =>response.json())
  .then(result => result.message)
  
  alert(result.message);

