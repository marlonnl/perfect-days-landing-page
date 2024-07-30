document.addEventListener('DOMContentLoaded', function() {
    const nominationList = document.querySelectorAll('[data-nomination]');
    const tabButtons = document.querySelectorAll('[data-tab-btn]');

    for (let i = 0; i < nominationList.length; i++) {
        nominationList[i].addEventListener('click', toggleAward);
    }

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function(btn) {
            const tabId = btn.target.dataset.tabBtn;
            const tabBtnId = document.querySelector(`[data-tab-id=${tabId}]`);

            removeActiveClasses();
            hideAllTabs();

            tabBtnId.classList.add('cast__contents--is-active');
            btn.target.classList.add('cast__tabs__tab--is-active');
        });
    }
});

// awards accordeon
function toggleAward(element) {
    const className = 'nominations__list__award--is-open';
    const awardNode = element.target.parentNode;

    awardNode.classList.toggle(className);
}

function removeActiveClasses() {
    const tabButtons = document.querySelectorAll('[data-tab-btn');

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('cast__tabs__tab--is-active');
    }
}


function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('cast__contents--is-active');
    }
}