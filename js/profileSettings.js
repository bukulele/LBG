let profileSettingsBlockForm = document.querySelector('.profile-settings-block__form');
let profileSettingsPhotoUploadFake = profileSettingsBlockForm.querySelector('.profile-settings-block__photo-upload');
let profileSettingsPhotoUploadReal = profileSettingsBlockForm.querySelector('#profileSettingsPhotoUpload');

function uploadPhoto () {
  profileSettingsPhotoUploadReal.click();
}

profileSettingsPhotoUploadFake.addEventListener('click', uploadPhoto);
