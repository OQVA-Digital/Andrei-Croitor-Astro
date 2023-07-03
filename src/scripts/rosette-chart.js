
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
