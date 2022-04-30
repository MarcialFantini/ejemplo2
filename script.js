const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Red', 'Blue', 'Red', 'Blue', 'Red', 'Blue', 'Red', 'Blue', 'Red', 'Blue', 'Red', 'Blue'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 2, 27, 3, 12, 1, 4, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const btnActiveNav = document.querySelector(".navActiveBtn")

btnActiveNav.addEventListener('click', () => {

    const nav = document.querySelector('nav')

    nav.classList.toggle('nav_active')

    nav.classList.forEach(item => {
        if (item === 'nav_active') {
            btnActiveNav.textContent = 'X'
            btnActiveNav.classList.toggle('traslate_action')

        } else {

            btnActiveNav.textContent = '|||'

        }
    })


})


const graficor2 = document.getElementById("graficoVisitor").getContext('2d');
const graficor_2 = new Chart(graficor2, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Purple', "yellow"],
        datasets: [{
            label: '# of Votes',
            data: [12, 3, 57, 43, 1],
            backgroundColor: [
                'Red', 'Blue', 'Green', 'Purple', "yellow"

            ],
            borderColor: [
                'white'

            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const graficor3 = document.getElementById('graficoVisitor3').getContext('2d');
const graficor_3 = new Chart(graficor3, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Purple', "yellow"],
        datasets: [{
            label: '# of Votes',
            data: [34, 32, 57, 43, 31],
            backgroundColor: [
                'Red', 'Blue', 'Green', 'Purple', "yellow"

            ],
            borderColor: [
                'white'

            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const graficor4 = document.getElementById('graficoVisitor4').getContext('2d');
const graficor_4 = new Chart(graficor4, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Purple', "yellow"],
        datasets: [{
            label: '# of Votes',
            data: [34, 32, 57, 43, 31],
            backgroundColor: [
                'Red', 'Blue', 'Green', 'Purple', "yellow"

            ],
            borderColor: [
                'white'

            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const graficor5 = document.getElementById('graficoVisitor5').getContext('2d');
const graficor_5 = new Chart(graficor5, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Purple', "yellow"],
        datasets: [{
            label: '# of Votes',
            data: [34, 32, 57, 43, 31],
            backgroundColor: [
                'Red', 'Blue', 'Green', 'Purple', "yellow"

            ],
            color: 'white',
            borderColor: [
                'black'

            ],
            borderWidth: 2
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});