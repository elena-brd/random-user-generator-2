const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

function fetchUser() {
    fetch('https://randomuser.me/api')
        .then(responce => responce.json())
        .then((data => randomUser(data.results[0])))
}

function randomUser(user) {
    const displayUser = document.querySelector('.user-content')
    if (user.gender === 'female') {
        container.style.backgroundColor = '#ffe5ec';
    } else if (user.gender === 'male') {
        container.style.backgroundColor = '#caf0f8';
    }


    displayUser.innerHTML = `
    <img src="${user.picture.medium}" alt="image">


    <div class="info">
        <p class="name"><strong>Name: </strong>${user.name.first} ${user.name.last}</p>
        <p class="email"><strong>Email: </strong>${user.email}</p>
        <p class="phone"><strong>Phone: </strong>${user.phone}</p>
        <p class="location"><strong>Location: </strong>${user.location.city}, ${user.location.state}</p>
        <p class="age"><strong>Age: </strong>${user.age}</p>
    </div>
    
    `
}

btn.addEventListener('click', fetchUser)

fetchUser();