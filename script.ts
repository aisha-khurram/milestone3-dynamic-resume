//listing element
    const resume=document.getElementById('resume')as HTMLInputElement;
    const nameElement=document.getElementById('name')as HTMLInputElement;
    const genderElement=document.getElementById('gender')as HTMLInputElement;
    const dobElement=document.getElementById('date')as HTMLInputElement;
    const emailElement=document.getElementById('email')as HTMLInputElement;
    const phoneElement=document.getElementById('phone')as HTMLInputElement;
    const addressElement=document.getElementById('address')as HTMLInputElement;
    const profileInput=document.getElementById('profilePicture')as HTMLInputElement;
    const qualificationElement=document.getElementById('education')as HTMLInputElement;
    const experienceElement=document.getElementById('experience')as HTMLInputElement;
    const skillsElement=document.getElementById('skills')as HTMLInputElement;
    


resume.addEventListener('submit',function(event){
    event.preventDefault();
    


    if(profileInput && nameElement && genderElement && dobElement && emailElement && phoneElement &&addressElement && qualificationElement && experienceElement && skillsElement){
        const name=nameElement.value;
        const gender=genderElement.value;
        const dob=dobElement.value;
        const email=emailElement.value;
        const phone=phoneElement.value;
        const address=addressElement.value;
        const qualification=qualificationElement.value;
        const experience=experienceElement.value;
        const skills=skillsElement.value;


        const profilePictureFile=profileInput.files?.[0]
        const profilePictureURL=profilePictureFile ? URL.createObjectURL(profilePictureFile):'';

        const resumeOutput=`
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture"class="profilePicture">`:''}
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Gender:</strong>${gender}</p>
        <p><strong>Date of Birth:</strong>${dob}</p>
        <p><strong>Email address:</strong>${email}</p>
        <p><strong>Mobile No:</strong>${phone}</p>
        <p><strong>Address:</strong>${address}</p>
        <p><strong>Qualification:</strong>${qualification}</p>
        <p><strong>Work Experience</strong>${experience}</p>
        <p><strong>Skills:</strong>${skills}</p>`
        ;

        const resumeOutputElement=document.getElementById('resumeOutput');
        if(resumeOutputElement){
            resumeOutputElement.innerHTML=resumeOutput;
            resumeOutputElement.style.display='block';
        }

    }else{
        console.error('One or more form elements are missing.')
    }



})