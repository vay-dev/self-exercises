const data = [
    {
        username: 'johnnydoe',
        password: '23123443'
    },
    {
        username: 'emilys',
        password: 'emilyspass'
    },
    {
        username: 'mikebrown',
        password: 'mike12345'
    },
    {
        username: 'sarawilson',
        password: 'sara9876'
    },
    {
        username: 'davidlee',
        password: 'pass4321'
    },
    {
        username: 'angelaj',
        password: 'angie2025'
    },
    {
        username: 'kevinw',
        password: 'kwsecure'
    },
    {
        username: 'natalieb',
        password: 'natpass77'
    },
    {
        username: 'chrisp',
        password: 'chrislogin'
    }
];

function login() {
  const user = document.getElementById('select').value;
  const displayElement = document.getElementById('output');
  const password = document.querySelector('#password').value;

  if (!user || !password) {
    displayElement.textContent = 'Please Select Type In Both A Username And A Password';
    setTimeout(() => {
      displayElement.textContent = '';
    }, (1500));

    return;
  }

  const matchingUser = data.find(d => d.username.toLowerCase() === user.toLowerCase());

  if (!matchingUser || matchingUser.password !== password.toLowerCase()) {
    displayElement.textContent = "sorry user not found"
    setTimeout(() => {
      displayElement.textContent = '';
    }, 1500);

    return;
  } else {
    alert('Login Succesful');
  }

};

document.getElementById('submit').addEventListener('click', login);
document.addEventListener('keydown', (event) => {
  // console.log(`user pressed the "${event.key}" key`);
  if (event.key === 'Enter') {
    login();
  }
})