// mobile menu icon auto switch
function mobilemenu() {
  // Find any menu items that are open
  var mobileCurrentlyOpen = document.querySelector('.mobilemenu:not(.dn)')
  if (mobileCurrentlyOpen) {
    document.getElementById('mobilemenu').innerHTML = "&#xE700";
  }else{      
    document.getElementById('mobilemenu').innerHTML = "&#xE711";
  }
}