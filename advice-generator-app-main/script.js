const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');
const resID = document.querySelector('#getID');

resBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice()
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        const ADVICE = adviceData.slip.advice;
        const ID = adviceData.slip.id;
        resDiv.innerHTML = `<p>"${ADVICE}"</p>`;
        resID.innerHTML = `<p>${ID}</p>`
    }).catch(error => {
        console.log(error);
    })
}