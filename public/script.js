document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
  
    const correctUsername = "almira";
    const correctPassword = "almira";
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
  
  
    if (username === correctUsername && password === correctPassword){
      alert('mantap bro');
      window.location.href = 'index.html';
    }else{
      alert('Username atau password salah')
    }
  });