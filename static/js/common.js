// mobile menu icon auto switch
function mobilemenubutton() {
  // Find any menu items that are open  
  var ariaExpanded = document.getElementById('mobilemenubutton').getAttribute("aria-expanded");
  if(ariaExpanded == "false") {
    document.getElementById('mobilemenubutton').setAttribute("aria-expanded", "true");
    document.getElementById('mobilemenu').setAttribute("aria-expanded", "true");
  }else{
    document.getElementById('mobilemenubutton').setAttribute("aria-expanded", "false");
    document.getElementById('mobilemenu').setAttribute("aria-expanded", "false");
  }
}