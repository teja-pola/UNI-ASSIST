document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');
    const universityInput = document.getElementById('university');
    const courseInput = document.getElementById('course');
    const yearInput = document.getElementById('year');
    const universityList = document.getElementById('university-list');
    const courseList = document.getElementById('course-list');

    // Fetch the list of universities from the JSON file
    fetch('universities.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(university => {
                const option = document.createElement('option');
                option.value = university;
                universityList.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching university data:', error));

    // Fetch the list of courses from the JSON file
    fetch('courses.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(course => {
                const option = document.createElement('option');
                option.value = course;
                courseList.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching course data:', error));

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedUniversity = universityInput.value;
        const selectedCourse = courseInput.value;
        const selectedYear = yearInput.value;

        console.log('University:', selectedUniversity);
        console.log('Course:', selectedCourse);
        console.log('Year:', selectedYear);

        // Perform any additional actions with the form data here
        // For example, you can redirect to another page or fetch related documents
    });
});


