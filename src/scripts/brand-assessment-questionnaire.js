
const ctx = document.getElementById('chart');



var chart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'CC',
            'CS',
            'IT',
            'ES',
            'EC',
            'ICI',
            'CCE',
            'ACL',
            'PCS',
            'ECE'
        ],
        datasets: [{
            label: "You",
            data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            fill: true,
            clip: 0,
            backgroundColor: '#ffb7ab88',
            borderColor: '#ffb7ab',
            borderWidth: 2,
            pointBackgroundColor: '#ffb7ab',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ffb7ab',
        }, {
            label: "Apple",
            data: [15, 14, 15, 14, 13, 12, 14, 14, 15, 15],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#ffffff66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Nike",
            data: [15, 12, 14, 11, 13, 14, 11, 12, 13, 14],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#ea553b66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Red Bull",
            data: [13, 14, 12, 15, 13, 12, 15, 9, 11, 9],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#1d19ac99',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "McDonald's",
            data: [12, 10, 8, 12, 11, 10, 13, 13, 8, 5],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#FFC72C66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Porsche",
            data: [15, 12, 13, 13, 12, 12, 13, 12, 13, 11],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#02a64d66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }]
    },
    options: {
        plugins: {
            subtitle: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                display: true,
                position: 'bottom',
                align: 'middle',
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#333333'
                },
                min: 3,
                max: 15,
                ticks: {
                    display: false,
                    backdropColor: 'transparent'
                },
                pointLabels: {
                    color: 'white',
                    display: true,
                    centerPointLabels: false,
                    font: {
                        size: 16,
                        family: 'Brooklyn, sans-serif'
                    },
                    pointStyleWidth: 0,
                    padding: 10,
                },
                grid: {
                    color: '#ffffff00',
                    drawTicks: false,
                    circular: true,
                }
            }
        },
        tension: 0.2,
        point: {
            pointBackgroundColor: '#ffffff00'
        }
    },
    maintainAspectRatio: false,
});

let sum;

const scoreHiddenInputs = document.querySelectorAll('.score_inputs input[type="hidden"]')

const userScoreURL = document.getElementById('userScoreURL')

function getFieldsetValues() {
    for (i = 0; i < formFieldsets.length; i++) {
        sum = 0;

        var innerAnswers = formFieldsets[i].querySelectorAll('input[type="range"]')

        for (var j = 0; j < innerAnswers.length; j++) {
            var value = parseInt(innerAnswers[j].value); // Parse the input value as an integer
            sum += value;
            scoreHiddenInputs[i].value = sum;
        }

        function updateChart(sum) {
            chart.data.datasets[0].data[i] = sum;
            chart.update();

            sum = 0;
        }

        updateChart(sum)
    }

    updateURL()
}

// getFieldsetValues()

chart.canvas.parentNode.style.height = 'clamp(10rem, 85vw, 45rem)';
chart.canvas.parentNode.style.width = 'clamp(10rem, 85vw, 45rem)';












function updateURLParameter(url, param, paramVal) {
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempurlLocationay = url.split("?");
    var baseURL = tempurlLocationay[0];
    var additionalURL = tempurlLocationay[1];
    var temp = "";

    if (additionalURL) {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
        TheAnchor = tmpAnchor[1];
        if (TheAnchor)
            additionalURL = TheParams;

        tempurlLocationay = additionalURL.split("&");

        for (var i = 0; i < tempurlLocationay.length; i++) {
            if (tempurlLocationay[i].split('=')[0] != param) {
                newAdditionalURL += temp + tempurlLocationay[i];
                temp = "&";
            }
        }
    }
    else {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
        TheAnchor = tmpAnchor[1];

        if (TheParams)
            baseURL = TheParams;
    }

    if (TheAnchor) {
        url = baseURL + "?" + newAdditionalURL + "#" + TheAnchor;
    } else {
        url = baseURL + "?" + newAdditionalURL;
    }


    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

var url = window.location.href;

const mainEl = document.querySelector('main')

const paramHideable = document.querySelectorAll('section.intro, .questions_ctnr, .fieldset_controls, .reveal.cta, .contact_form')

const scoreDisplay = document.querySelector('.result h2')

function hasParams() {
    document.querySelector('.result').classList.remove('hidden')

    for (i = 0; i < paramHideable.length; i++) {
        paramHideable[i].style.display = 'none'
        // console.log(paramHideable[i])
    }

    const openFullPageBt = document.createElement("a");
    openFullPageBt.setAttribute('href', 'index.html')
    document.body.appendChild(openFullPageBt)
    openFullPageBt.classList.add('open_full_page')
    openFullPageBt.innerHTML = 'Asses Your Brand'
    openFullPageBt.style.display = 'block'

    mainEl.style.height = '100vh'
    mainEl.style.paddingBottom = '0'
    mainEl.style.justifyContent = 'unset'
    document.querySelector('.result').style.margin = '10rem 0'
}

// Check if there's params
if (url.includes('?')) {

    hasParams()

    function updateGraphFromURL(url) {
        // const paramPairs = url.split('&');
        const params = [];

        let totalScoreFromURL = 0;

        // paramPairs.forEach(pair => {
        //     const [key, value] = pair.split('=');
        //     params.push({ key, value });
        // });

        var queryString = url.split("?")[1];
        if (queryString) {
            var pairs = queryString.split("&");
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split("=");
                var key = decodeURIComponent(pair[0]);
                var value = decodeURIComponent(pair[1]);
                params.push({ key: key, value: value });
            }
        }

        for (let w = 0; w < params.length; w++) {
            chart.data.datasets[0].data[w] = params[w].value;

            totalScoreFromURL += Number(params[w].value)
        }

        chart.update();

        scoreDisplay.innerHTML = `Score:<span class="score"><span class="current">${totalScoreFromURL}</span><span class="total">/150</span></span>`
        scoreDisplay.classList.add('preset')
        return params;
    }

    updateGraphFromURL(url);
} else {
    console.log('no params')
}

var newURL;

function updateURL() {
    for (i = 0; i < scoreHiddenInputs.length; i++) {
        newURL = updateURLParameter(window.location.href, scoreHiddenInputs[i].id, scoreHiddenInputs[i].value);
        window.history.pushState('', '', newURL);
    }
    userScoreURL.value = window.location.href
}































let score;

let answers = document.querySelectorAll('.answer input[type="range"]');

let allFilled = false;

let resultCtnr = document.querySelector('.result');
let resultCtnrOffset;

let maxScore = 0;
let totalStatements = 0;

let totalFilled = document.querySelectorAll('.answer input[type="range"][class="unset"]').length
let relativeFilled = 0;

const progressBar = document.querySelector('.progress .bar')
const progressRelative = document.querySelector('.progress .relative')
const progressTotal = document.querySelector('.progress .total')


const resultText = document.querySelector('.result .general.txt')

const ScoreDisplay = document.querySelector('.score .current')

const fillingWarning = document.querySelector('.warning.require_fields')

function vibrate() {
    if (!window) {
        return;
    }

    if (!window.navigator) {
        return;
    }

    if (!window.navigator.vibrate) {
        return;
    }

    window.navigator.vibrate(60);
}

const revealBt = document.querySelector('.reveal.cta')

function checkProgressBar() {
    if (allFilled == false) {
        totalFilled = document.querySelectorAll('.answer input[type="range"]:not([class="unset"])').length

        relativeFilled = Math.floor((totalFilled * 100) / totalStatements)

        progressBar.style.width = relativeFilled + "%"

        progressRelative.innerHTML = totalFilled;

        progressTotal.innerHTML = totalStatements
    }

    if (relativeFilled == 100) {
        progressBar.style.backgroundColor = 'var(--c2a)'

        revealBt.classList.add('show')
        nextBt.remove()
    }
}

function checkNextBt() {
    let y;

    for (y = 0; y < document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input').length; y++) {
        if (document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input')[y].classList.contains('unset')) {
            nextBt.classList.add('disabled');
            break
        }

        if (y == document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input').length - 1) {
            if (!document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input')[y].classList.contains('unset')) {
                if (formPosition == lastFieldPos) {
                    nextBt.classList.add('disabled');
                } else {
                    nextBt.classList.remove('disabled');
                }
            }
        }
    }
}

for (i = 0; i < answers.length; i++) {

    maxScore += Number(answers[i].getAttribute('max'))

    totalStatements = answers.length;
    // console.log(totalStatements)

    if (i == answers.length - 1) {
        document.querySelector('.score .total').innerHTML = '/ ' + maxScore
    }

    answers[i].addEventListener("input", (event) => {
        updateThumb(event)
        resultCtnr.classList.add('hidden');
        checkNextBt()
    });

    answers[i].addEventListener("mousedown", updateThumb);

    answers[i].addEventListener("touchstart", (event) => {
        updateThumb(event)
        iosPolyfill(event)
        checkNextBt()
    });

    if (!!navigator.platform.match(/iPhone|iPod|iPad/)) {
        answers[i].addEventListener("touchend", iosPolyfill, { passive: true });
    }
}




function iosPolyfill(event) {
    var val = (event.pageX - event.target.getBoundingClientRect().left) /
        (event.target.getBoundingClientRect().right - event.target.getBoundingClientRect().left),
        max = event.target.getAttribute("max"),
        segment = 1 / (max - 1),
        segmentArr = [];

    max++;

    for (var i = 0; i < max; i++) {
        segmentArr.push(segment * i);
    }

    var segCopy = segmentArr.slice(),
        ind = segmentArr.sort((a, b) => Math.abs(val - a) - Math.abs(val - b))[0];

    event.target.value = segCopy.indexOf(ind) + 1;
}
























progressRelative.innerHTML = relativeFilled;
progressTotal.innerHTML = totalStatements;

function showFillingWarning() {
    fillingWarning.classList.add('visible')

    setTimeout(() => {
        fillingWarning.classList.remove('visible')
    }, 2500);
}

function calculateScore() {

    for (i = 0; i < answers.length; i++) {
        if (answers[i].classList.contains('unset')) {
            showFillingWarning()

            allFilled = false;
            return
        } else {
            allFilled = true;
        }
    }

    const totalScoreInput = document.getElementById('totalScore')

    if (allFilled == true) {
        score = 0;

        for (i = 0; i < answers.length; i++) {
            score += Number(answers[i].value)
        }

        resultCtnr.classList.remove('hidden')
        resultCtnrOffset = resultCtnr.offsetTop - 100

        ScoreDisplay.innerHTML = score

        totalScoreInput.value = score

        setTimeout(() => {
            window.scrollTo(0, resultCtnrOffset)
        }, 100);

        if (score < 60) {
            resultText.innerHTML = "<p>Your brand is in the early stages of developing its consciousness. <b>Don't worry - with focus and effort, you can build a strong brand consciousness.</b></p>"

            ScoreDisplay.style.color = 'crimson'

        } else if (score >= 60 && score <= 89) {
            resultText.innerHTML = "<p>Your brand is on its way to <b>developing consciousness</b>, but there are many areas to improve. <b>A structured approach could help strengthen your brand's identity.</b></p>"

            ScoreDisplay.style.color = 'crimson'

        } else if (score >= 90 && score <= 119) {
            resultText.innerHTML = "<p>Your brand has a <b>good level of consciousness</b>, but there's still room for improvement. <b>Consider focusing on areas where your score was lower.</b></p>"

            ScoreDisplay.style.color = 'crimson'

        } else if (score >= 120) {
            resultText.innerHTML = "<p>Your brand has a <b>strong consciousness</b> and a <b>loyal tribe.</b></p>"

            ScoreDisplay.style.color = 'var(--c2a)'
        }
    }
}

revealBt.addEventListener('click', calculateScore)


















let randomAudioNo;

let snap01 = new Audio(`/sfx/snap01.mp3`)
let snap02 = new Audio(`/sfx/snap02.mp3`)
let snap03 = new Audio(`/sfx/snap03.mp3`)
let snap04 = new Audio(`/sfx/snap04.mp3`)
let snap05 = new Audio(`/sfx/snap05.mp3`)
let snap06 = new Audio(`/sfx/snap06.mp3`)
let snap07 = new Audio(`/sfx/snap07.mp3`)

snap01.volume = 0.6;
snap02.volume = 0.6;
snap03.volume = 0.6;
snap04.volume = 0.6;
snap05.volume = 0.6;
snap06.volume = 0.6;
snap07.volume = 0.6;

function updateThumb(event) {
    const element = event.target;
    element.classList.remove('unset');
    element.setAttribute('value', element.value);

    checkProgressBar()

    randomAudioNo = Math.round(Math.random() * 6 + 1)
    if (randomAudioNo == 1) {
        snap01.play()
    } else if (randomAudioNo == 2) {
        snap02.play()
    } else if (randomAudioNo == 3) {
        snap03.play()
    } else if (randomAudioNo == 4) {
        snap04.play()
    } else if (randomAudioNo == 5) {
        snap05.play()
    } else if (randomAudioNo == 6) {
        snap06.play()
    } else if (randomAudioNo == 7) {
        snap07.play()
    }
    // new Audio(`../assets/sfx/snap0${randomAudioNo}.mp3`).play()

    vibrate()

    getFieldsetValues()
}















// FORMFIELDS TOGGLING

const backBt = document.querySelector('.fieldset_controls .back')
const nextBt = document.querySelector('.fieldset_controls .next')

let formPosition = 0;

const formFieldsets = document.querySelectorAll('form fieldset')

formFieldsets[formPosition].classList.add('visible')

const lastFieldPos = formFieldsets.length - 1

const quizCtnrDistance = window.scrollY + document.querySelector('.quiz_ctnr').getBoundingClientRect().top

function checkFieldsets(direction) {
    if (direction == 'forwards') {

        for (i = 0; i < document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input').length; i++) {
            if (document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input')[i].classList.contains('unset')) {
                showFillingWarning()
                nextBt.classList.add('disabled');
                break
            }

            if (i == document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input').length - 1) {
                if (document.querySelector('.questions_ctnr fieldset[class="visible"]').querySelectorAll('input')[i].classList.contains('unset')) {
                    showFillingWarning()
                } else {
                    if (!formFieldsets[lastFieldPos].classList.contains('visible')) {
                        backBt.classList.remove('disabled');
                        formFieldsets[formPosition].classList.remove('visible');
                        formPosition++;
                        formFieldsets[formPosition].classList.add('visible');

                        window.scrollTo(0, quizCtnrDistance - (window.innerHeight / 10))

                        if (formPosition === lastFieldPos) {
                            nextBt.classList.add('disabled');
                        }
                    }
                }
            }
        }
        
        checkNextBt()

    } else if (direction == 'backwards') {
        if (!formFieldsets[0].classList.contains('visible')) {
            nextBt.classList.remove('disabled');
            formFieldsets[formPosition].classList.remove('visible');
            formPosition--;
            formFieldsets[formPosition].classList.add('visible');

            if (formPosition === 0) {
                backBt.classList.add('disabled');
            }
        }
    }
}

nextBt.addEventListener('click', function () {
    checkFieldsets('forwards')
})

backBt.addEventListener('click', function () {
    checkFieldsets('backwards')
})


const firstFields = document.querySelectorAll('.contact fieldset:first-child input, .contact fieldset:first-child select')

for (i = 0; i < firstFields.length; i++) {
    firstFields[i].addEventListener('input', function () {
        const allFilled = Array.from(firstFields).every(input => input.value.trim() !== '');

        if (allFilled) {
            submitBt.classList.remove('disabled')
        } else {
            submitBt.classList.add('disabled')
        }
    })
}






const shareBt = document.querySelector('.share_bt')

shareBt.addEventListener('click', function () {
    navigator.share({ title: 'My score: Brand Assessment Questionnaire', text: 'Check out my score at Croitor.co.uk', url: window.location.href })
})