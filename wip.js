function onTabClick(event) {
    let clickedTab = event.target.parentElement;
    let currentGroup = clickedTab.parentElement.parentElement;
    let allTabs = currentGroup.querySelectorAll('.tab');

    allTabs.forEach(function(tab) {
        tab.classList.remove('active');

        let panel = document.getElementById(tab.querySelector('a').href.split('#')[1]);
        panel.classList.remove('active');
    });

    clickedTab.classList.add('active');

    let clickedPanel = document.getElementById(
        clickedTab.querySelector('a').href.split('#')[1]
    );

    clickedPanel.classList.add('active');
}

const tabElements = document.querySelectorAll('.tab');

tabElements.forEach(function(tabElement) {
    tabElement.addEventListener('click', onTabClick);
});