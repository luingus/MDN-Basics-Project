let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');//retreives the attribute for the image source
    if(mySrc === 'images/firefox-icon.png') {//if the image source is in default change it to the next image
      myImage.setAttribute('src','images/firefox2.png');
    } else {//if the image is the next image switch it back
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

//initialize variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');//Prompt the user for their name//
  localStorage.setItem('name', myName);//Puts the results of that prompt onto a variable on the localhost//
  myHeading.textContent = 'Mozilla is cool, ' + myName;//Sets the localhost variable to the text content in the heading
}

if(!localStorage.getItem('name')) {//if there is nothing in the local storage run the setUserName command
  setUserName();
} 

else {//if there is something in the localstorage get it and add it to the header
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {// run the function on click.
  setUserName();
}