// mobile menu icon auto switch
function mobileMenuButtonOnclick() {
  // Find any menu items that are open  
  var ariaExpanded = document.getElementById('mobile-menu-button').getAttribute("aria-expanded");
  if(ariaExpanded == "false") {
    document.getElementById('mobile-menu-button').setAttribute("aria-expanded", "true");
    document.getElementById('mobile-menu').setAttribute("aria-expanded", "true");
    document.getElementById('mobile-search-button').setAttribute("aria-hidden", "true");
    document.getElementById('mobile-menu-logo').setAttribute("aria-hidden", "true");
  }else{
    document.getElementById('mobile-menu-button').setAttribute("aria-expanded", "false");
    document.getElementById('mobile-menu').setAttribute("aria-expanded", "false");
    document.getElementById('mobile-search-button').setAttribute("aria-hidden", "false");
    document.getElementById('mobile-menu-logo').setAttribute("aria-hidden", "false");
  }
}

// mobile submenu icon auto switch
function mobileSubMenuButtonDocsOnclick() {
  // Find any menu items that are open  
  var ariaExpanded = document.getElementById('mobile-submenu-button-docs').getAttribute("aria-expanded");
  if(ariaExpanded == "false") {
    document.getElementById('mobile-submenu-button-docs').setAttribute("aria-expanded", "true");
    document.getElementById('mobile-submenu-docs').setAttribute("aria-expanded", "true");
  }else{
    document.getElementById('mobile-submenu-button-docs').setAttribute("aria-expanded", "false");
    document.getElementById('mobile-submenu-docs').setAttribute("aria-expanded", "false");
  }
}
// mobile submenu icon auto switch
function mobileSubMenuButtonDocsPageOnclick() {
  // Find any menu items that are open  
  var ariaExpanded = document.getElementById('mobile-submenu-button-docs-page').getAttribute("aria-expanded");
  if(ariaExpanded == "false") {
    document.getElementById('mobile-submenu-button-docs-page').setAttribute("aria-expanded", "true");
    document.getElementById('mobile-submenu-docs-page').setAttribute("aria-expanded", "true");
  }else{
    document.getElementById('mobile-submenu-button-docs-page').setAttribute("aria-expanded", "false");
    document.getElementById('mobile-submenu-docs-page').setAttribute("aria-expanded", "false");
  }
}

// mobile search icon auto switch
function mobileSearchButtonOnclick() {  
  var ariaExpanded = document.getElementById('mobile-search-button').getAttribute("aria-expanded");
  if(ariaExpanded == "false") {
    document.getElementById('mobile-search-button').setAttribute("aria-expanded", "true");
    document.getElementById('mobile-menu-button').setAttribute("aria-hidden", "true");
    document.getElementById('mobile-menu-logo').setAttribute("aria-hidden", "true");
    document.getElementById('menu-search-input').setAttribute("aria-hidden", "false");
    document.getElementById('menu-search-input').setAttribute("aria-expanded", "true");
    document.getElementById('nav-mobile').setAttribute("aria-expanded", "true");
  }else{
    document.getElementById('mobile-search-button').setAttribute("aria-expanded", "false");
    document.getElementById('mobile-menu-button').setAttribute("aria-hidden", "false");
    document.getElementById('mobile-menu-logo').setAttribute("aria-hidden", "false");
    document.getElementById('menu-search-input').setAttribute("aria-hidden", "true");
    document.getElementById('menu-search-input').setAttribute("aria-expanded", "false");
    document.getElementById('nav-mobile').setAttribute("aria-expanded", "false");
  }
}

window.onresize = function(){
  //获取网页可见区域宽度
  var ariaExpanded = document.getElementById('mobile-search-button').getAttribute("aria-expanded");
  var docWidth = document.body.clientWidth;
  if(ariaExpanded == "true") {
    if(docWidth > 960){
      //document.getElementById('menu-search-input').setAttribute("aria-hidden", "true");
    }else{
      document.getElementById('menu-search-input').setAttribute("aria-hidden", "false");
    }
  }else{
    if(docWidth > 960){
      document.getElementById('menu-search-input').setAttribute("aria-hidden", "false");
    }else{
      document.getElementById('menu-search-input').setAttribute("aria-hidden", "true");
    }
  }
};

window.onload = function(){
  //获取网页可见区域宽度
  var docWidth = document.body.clientWidth;
  if(docWidth > 960){
    document.getElementById('menu-search-input').setAttribute("aria-hidden", "false");
  }else{
    document.getElementById('menu-search-input').setAttribute("aria-hidden", "true");
  }
};

