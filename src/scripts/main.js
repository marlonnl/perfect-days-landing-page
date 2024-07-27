document.addEventListener('DOMContentLoaded', function() {
    const nominationList = document.querySelectorAll('[data-nomination]');

    for (let i = 0; i < nominationList.length; i++) {
        nominationList[i].addEventListener('click', toggleAward);
    }
});

// awards accordeon
function toggleAward(element) {
    const className = 'nominations__list__award--is-open';
    const awardNode = element.target.parentNode;

    awardNode.classList.toggle(className);
}