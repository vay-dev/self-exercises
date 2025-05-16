const data = [
  {
    name: 'victor',
    isAdmin: true
  },
  {
    name: 'ope',
    isAdmin: false
  },
  {
    name: 'nicolas',
    isAdmin: true
  },
  {
    name: 'ayo',
    isAdmin: true
  }
]

function verifyAdmin() {
  const selectedAdmin = document.querySelector('#select').value;
  const output = document.getElementById('output');

  if (!selectedAdmin) {
    output.textContent = 'Please choose a User to verify first!'
    return;
  }

  const matchingAdmin = data.find( (d) => d.name.toLowerCase() === selectedAdmin.toLowerCase());

  if (matchingAdmin) {
    if (matchingAdmin.isAdmin === true) {
      output.textContent = `yes ${selectedAdmin} is an admin`
    } else {
      output.textContent = `no ${selectedAdmin} is not an admin`
    }
  } else {
    output.textContent = `Sorry Admin not found try again later`
  }
};

const verifyButton = document.getElementById('verify');
verifyButton.addEventListener('click', verifyAdmin);