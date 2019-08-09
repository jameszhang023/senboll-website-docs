// mobile menu icon auto switch
function mobilemenubutton_onclick() {
  // Find any menu items that are open  
  var ariaExpanded = document.getElementById('mobile-menu-button').getAttribute("aria-expanded");
  if(ariaExpanded == "false") {
    document.getElementById('mobile-menu-button').setAttribute("aria-expanded", "true");
    document.getElementById('mobile-menu').setAttribute("aria-expanded", "true");
  }else{
    document.getElementById('mobile-menu-button').setAttribute("aria-expanded", "false");
    document.getElementById('mobile-menu').setAttribute("aria-expanded", "false");
  }
}