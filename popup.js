chrome.storage.local.get('userEmail', function (result) {
 if (result.userEmail) {
  showUserForm(result.userEmail);
 } else {
  showEmailForm();
 }
});

function showEmailForm() {
 document.getElementById('emailForm').style.display = 'block';
 document.getElementById('userForm').style.display = 'none';
}

function showUserForm(email) {
 document.getElementById('emailForm').style.display = 'none';
 document.getElementById('userForm').style.display = 'block';
}

document.getElementById('emailFormSubmit').addEventListener('submit', function (event) {
 event.preventDefault();
 const email = document.getElementById('emailInput').value;

 chrome.storage.local.set({ userEmail: email }, function () {
  showUserForm(email);
 });
});

document.getElementById('userFormSubmit').addEventListener('submit', function (event) {
 event.preventDefault();

 const name = document.getElementById('nameInput').value;
 const motive = document.getElementById('motiveInput').value;

 chrome.storage.local.get('userEmail', function (result) {
  const userData = {
   name: name,
   email: result.userEmail,
   motive: motive,
  };

  window.close();


 });
});
