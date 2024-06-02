document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + 
    new Date(document.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) + 
    " " + 
    new Date(document.lastModified).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

    document.getElementById('moreInfoButton').addEventListener('click', function() {
        var moreInfo = document.getElementById('moreInfo');
        var button = document.getElementById('moreInfoButton');
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            button.innerHTML = '<i class="fas fa-caret-up"></i>'; // Change to up arrow
        } else {
            moreInfo.style.display = 'none';
            button.innerHTML = '<i class="fas fa-caret-down"></i>'; // Change to down arrow
        }
    });

    document.getElementById('untapInfoButton').addEventListener('click', function() {
        var untapMoreInfo = document.getElementById('moreUntapInfo');
        var untapButton = document.getElementById('untapInfoButton');
        if (untapMoreInfo.style.display === 'none') {
            untapMoreInfo.style.display = 'block';
            untapButton.innerHTML = '<i class="fas fa-caret-up"></i>'; // Change to up arrow
        } else {
            untapMoreInfo.style.display = 'none';
            untapButton.innerHTML = '<i class="fas fa-caret-down"></i>'; // Change to down arrow
        }
    });

    document.getElementById('upkeepInfoButton').addEventListener('click', function() {
        var upkeepMoreInfo = document.getElementById('moreUpkeepInfo');
        var upkeepButton = document.getElementById('upkeepInfoButton');
        if (upkeepMoreInfo.style.display === 'none') {
            upkeepMoreInfo.style.display = 'block';
            upkeepButton.innerHTML = '<i class="fas fa-caret-up"></i>'; // Change to up arrow
        } else {
            upkeepMoreInfo.style.display = 'none';
            upkeepButton.innerHTML = '<i class="fas fa-caret-down"></i>'; // Change to down arrow
        }
    });

    document.getElementById('pcmInfoButton').addEventListener('click', function() {
        var pcmMoreInfo = document.getElementById('morePcmInfo');
        var pcmButton = document.getElementById('pcmInfoButton');
        if (pcmMoreInfo.style.display === 'none') {
            pcmMoreInfo.style.display = 'block';
            pcmButton.innerHTML = '<i class="fas fa-caret-up"></i>'; // Change to up arrow
        } else {
            pcmMoreInfo.style.display = 'none';
            pcmButton.innerHTML = '<i class="fas fa-caret-down"></i>'; // Change to down arrow
        }
    });

    document.getElementById('combatInfoButton').addEventListener('click', function() {
        var combatMoreInfo = document.getElementById('moreCombatInfo');
        var combatButton = document.getElementById('combatInfoButton');
        if (combatMoreInfo.style.display === 'none') {
            combatMoreInfo.style.display = 'block';
            combatButton.innerHTML = '<i class="fas fa-caret-up"></i>'; // Change to up arrow
        } else {
            combatMoreInfo.style.display = 'none';
            combatButton.innerHTML = '<i class="fas fa-caret-down"></i>'; // Change to down arrow
        }
    });

    document.getElementById('postCombatInfoButton').addEventListener('click', function() {
        var postCombatMoreInfo = document.getElementById('morePostCombatInfo');
        var postCombatButton = document.getElementById('postCombatInfoButton');
        if (postCombatMoreInfo.style.display === 'none') {
            postCombatMoreInfo.style.display = 'block';
            postCombatButton.innerHTML = '<i class="fas fa-caret-up"></i>'; // Change to up arrow
        } else {
            postCombatMoreInfo.style.display = 'none';
            postCombatButton.innerHTML = '<i class="fas fa-caret-down"></i>'; // Change to down arrow
        }
    });
    document.getElementById('endInfoButton').addEventListener('click', function() {
        var endMoreInfo = document.getElementById('moreEndInfo');
        var endButton = document.getElementById('endInfoButton');
        if (endMoreInfo.style.display === 'none') {
            endMoreInfo.style.display = 'block';
            endButton.innerHTML = '<i class="fas fa-caret-up"></i>'; // Change to up arrow
        } else {
            endMoreInfo.style.display = 'none';
            endButton.innerHTML = '<i class="fas fa-caret-down"></i>'; // Change to down arrow
        }
    });
