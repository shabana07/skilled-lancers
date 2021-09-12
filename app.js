// //// home ////
window.addEventListener('scroll',function(){
    var navbar = document.getElementById('navbar');
    var sideBar = document.getElementById('sideBar');
    var y = window.scrollY
    if(y > 2){
        navbar.classList.add('backGround')
    }
    if(y < 2){
        navbar.classList.remove('backGround');
    }
    if(y > 350){
        sideBar.classList.add('backGround')
    }
    if(y < 350){
        sideBar.classList.remove('backGround')
    }
    if(y > 7000){
        sideBar.classList.add('d-none')
    }
    if(y < 7500){
        sideBar.classList.remove('d-none')
    }
})
// //// services ////
    var quickbook = document.getElementById('quickbook');
    var manychat = document.getElementById('manychat');
    var amazon = document.getElementById('amazon');
    var dropshiping = document.getElementById('dropshiping');
    var webDevelopment = document.getElementById('webDevelopment');
    var wordpress = document.getElementById('wordpress');
    var facebookAds=  document.getElementById('facebookAds');
    var emailMarket = document.getElementById('emailMarket');
var quickCount = 0;
function showPlan(){
if(quickCount%2 == 0){
    quickbook.classList.remove('d-none');
    manychat.classList.add('d-none');
    amazon.classList.add('d-none');
    dropshiping.classList.add('d-none');
    webDevelopment.classList.add('d-none');
    wordpress.classList.add('d-none');
    facebookAds.classList.add('d-none');
    emailMarket.classList.add('d-none');
}else{
    quickbook.classList.add('d-none');
}
quickCount++;
 }
 var chatCount = 0;
 function showChat(){
    if(chatCount%2 == 0){
        manychat.classList.remove('d-none');
        quickbook.classList.add('d-none');
        amazon.classList.add('d-none');
        dropshiping.classList.add('d-none');
        webDevelopment.classList.add('d-none');
        wordpress.classList.add('d-none');
        facebookAds.classList.add('d-none');
        emailMarket.classList.add('d-none');
    }else{
        manychat.classList.add('d-none');
    }chatCount++;
 }
var amazonCount = 0;
 function showAmazon(){
    if(amazonCount%2 == 0){
        amazon.classList.remove('d-none');
        manychat.classList.add('d-none');
        quickbook.classList.add('d-none');
        dropshiping.classList.add('d-none');
        webDevelopment.classList.add('d-none');
        wordpress.classList.add('d-none');
        facebookAds.classList.add('d-none');
        emailMarket.classList.add('d-none');
    }else{
        amazon.classList.add('d-none');
    }amazonCount++;
 }
 var shopCount = 0;
 function showShopify(){
    if(shopCount%2 == 0){
        dropshiping.classList.remove('d-none');
        manychat.classList.add('d-none');
        amazon.classList.add('d-none');
        quickbook.classList.add('d-none');
        webDevelopment.classList.add('d-none');
        wordpress.classList.add('d-none');
        facebookAds.classList.add('d-none');
        emailMarket.classList.add('d-none');
    }else{
        dropshiping.classList.add('d-none'); 
    }shopCount++;
 }
 var webCount = 0;
 function showWeb(){
    if(webCount%2 == 0){
        webDevelopment.classList.remove('d-none');
        manychat.classList.add('d-none');
        amazon.classList.add('d-none');
        dropshiping.classList.add('d-none');
        quickbook.classList.add('d-none');
        wordpress.classList.add('d-none');
        facebookAds.classList.add('d-none');
        emailMarket.classList.add('d-none');
    }else{
        webDevelopment.classList.add('d-none');
    }webCount++;
 }
 var wordCount = 0;
 function showWord(){
    if(wordCount%2 == 0){
        wordpress.classList.remove('d-none');
        manychat.classList.add('d-none');
        amazon.classList.add('d-none');
        dropshiping.classList.add('d-none');
        webDevelopment.classList.add('d-none');
        quickbook.classList.add('d-none');
        facebookAds.classList.add('d-none');
        emailMarket.classList.add('d-none');
    }else{
        wordpress.classList.add('d-none');
    }wordCount++;
 }
 var faceCount = 0;
 function showFace(){
    if(faceCount%2 == 0){
        facebookAds.classList.remove('d-none');
        manychat.classList.add('d-none');
        amazon.classList.add('d-none');
        dropshiping.classList.add('d-none');
        webDevelopment.classList.add('d-none');
        wordpress.classList.add('d-none');
        quickbook.classList.add('d-none');
        emailMarket.classList.add('d-none');
    }else{        
     facebookAds.classList.add('d-none');
    }faceCount++;
 }
 var emailCount = 0;
 function showEmail(){
    if(emailCount%2 == 0){
        emailMarket.classList.remove('d-none');
        manychat.classList.add('d-none');
        amazon.classList.add('d-none');
        dropshiping.classList.add('d-none');
        webDevelopment.classList.add('d-none');
        wordpress.classList.add('d-none');
        facebookAds.classList.add('d-none');
        quickbook.classList.add('d-none');
    }else{
        emailMarket.classList.add('d-none');
    }
    emailCount++;
 }
 // FORM VALDATION //
var userName = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');
var greet = document.getElementById('greet');
var sign = new RegExp("@");
var fullStop = new RegExp(".");

function submit() {
    if (userName.value == '') {
        alert('All input must be filled out!');
    }else if(userName.email < 65 && userName.email > 90 || userName.email < 97 && userName.email > 122) {
         alert('Name only contain letters!');
    }
    else if (email.value == '') {
        alert('All input must be filled out!');
    }
    else if (!(sign.test(email.value))) {
        alert('Inappropriate email!');
    }
    else if (!(fullStop.test(email.value))) {
        alert('Inappropriate email!');
    }
    else if (message.value == '') {
        alert('All input must be filled out!');
    }
     else {
        var key = firebase.database().ref('user messages').push().key;
        var responses = {
            name: userName.value,
            email: email.value,
            message: message.value,
            key: key
        }
        firebase.database().ref('users message').child(key).set(responses)
        console.log(responses);
        userName.value = '';
        email.value = '';
        message.value = '';
    }
}
 function checkForLastName() {
     if (document.getElementById("lastNameField").value.length === 0) {
     alert("Please enter your last name");
     return false;
     }
     }
