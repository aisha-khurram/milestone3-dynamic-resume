//listing element
var resume = document.getElementById('resume');
var nameElement = document.getElementById('name');
var genderElement = document.getElementById('gender');
var dobElement = document.getElementById('date');
var emailElement = document.getElementById('email');
var phoneElement = document.getElementById('phone');
var addressElement = document.getElementById('address');
var profileInput = document.getElementById('profilePicture');
var qualificationElement = document.getElementById('education');
var experienceElement = document.getElementById('experience');
var skillsElement = document.getElementById('skills');
resume.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    if (profileInput && nameElement && genderElement && dobElement && emailElement && phoneElement && addressElement && qualificationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var gender = genderElement.value;
        var dob = dobElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var qualification = qualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\"class=\"profilePicture\">") : '', "\n        <p><strong>Name:</strong>").concat(name_1, "</p>\n        <p><strong>Gender:</strong>").concat(gender, "</p>\n        <p><strong>Date of Birth:</strong>").concat(dob, "</p>\n        <p><strong>Email address:</strong>").concat(email, "</p>\n        <p><strong>Mobile No:</strong>").concat(phone, "</p>\n        <p><strong>Address:</strong>").concat(address, "</p>\n        <p><strong>Qualification:</strong>").concat(qualification, "</p>\n        <p><strong>Work Experience</strong>").concat(experience, "</p>\n        <p><strong>Skills:</strong>").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.error('One or more form elements are missing.');
    }
});
