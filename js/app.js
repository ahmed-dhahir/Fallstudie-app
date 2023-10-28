document.querySelector('.start-button').addEventListener('click', function() {
    // Hide the start section and show the intolerance section
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.intolerance-section').style.display = 'block';
});

document.querySelector('.save-button').addEventListener('click', function() {
    // Save selected intolerances to local storage
    const intolerances = document.querySelectorAll('.intolerance-list input[type="checkbox"]');
    const selectedIntolerances = [];
    intolerances.forEach(intolerance => {
        if (intolerance.checked) {
            selectedIntolerances.push(intolerance.id);
        }
    });
    localStorage.setItem('selectedIntolerances', JSON.stringify(selectedIntolerances));
});
