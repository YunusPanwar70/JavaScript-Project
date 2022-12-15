const profilePic = document.getElementById('profile-pic');
const inputFile = document.getElementById('imageUpload');

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}