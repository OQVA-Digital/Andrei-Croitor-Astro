const pageTitle = document.querySelector('h1').textContent

document.title = pageTitle

// SHARE BUTTON

const shareBt = document.querySelectorAll('.sharebt')

let shareTitle;
let shareUrl;

for (i = 0; i < shareBt.length; i++) {
  shareBt[i].addEventListener('click', function () {

    shareTitle = "Read Andrei Croitor Blog: " + document.title;
    shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        url: shareUrl
      }).then(() => {
        return;
      })
        .catch(console.error);
    }
  }
  );
}





