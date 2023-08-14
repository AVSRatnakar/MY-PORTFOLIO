var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

const seeMoreButton = document.getElementById('seeMore');
const cards = document.querySelectorAll('.work');


let visibleIndex = 0; // Index of the first invisible card

seeMoreButton.addEventListener('click', () => {
  for (let i = visibleIndex; i < cards.length; i++) {
    cards[i].classList.add('visible');
  }

  seeMoreButton.style.display = 'none';
});





// JavaScript for handling the mobile navigation menu
// document.querySelector('.fas.fa-bars').addEventListener('click', function () {
//     document.querySelector('nav ul').classList.add('show');
// });

// document.querySelector('.fas.fa-times').addEventListener('click', function () {
//     document.querySelector('nav ul').classList.remove('show');
// });
const hiddenIframe = document.querySelector('iframe[name="hidden-iframe"]');
hiddenIframe.onload = function () {
    const iframeContent = hiddenIframe.contentDocument.body.textContent;
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = iframeContent;
};
