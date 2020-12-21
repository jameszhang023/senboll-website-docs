// mobile menu icon auto switch
function mobileMenuButtonOnclick() {
  // Find any menu items that are open  
  var ariaExpanded = document.getElementById('mobile-menu-button').getAttribute("aria-expanded");
  if(ariaExpanded === "false") {
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
  if(ariaExpanded === "false") {
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
  if(ariaExpanded === "false") {
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
  if(ariaExpanded === "true") {
    if(docWidth > 960){
      document.getElementById('menu-search-input').setAttribute("aria-hidden", "true");
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
  MenuSearchInputResetDiplay();
  PreviewImageInit();
  jQuery(".jquery-accordion-menu").jqueryAccordionMenu();
};

jQuery(document).ready(function ($) {
  jQuery(".jquery-accordion-menu").jqueryAccordionMenu();
});

function MenuSearchInputResetDiplay(){
  //获取网页可见区域宽度
  var docWidth = document.body.clientWidth;
  if(docWidth > 960){
    document.getElementById('menu-search-input').setAttribute("aria-hidden", "false");
  }else{
    document.getElementById('menu-search-input').setAttribute("aria-hidden", "true");
  }
};

function PreviewImageInit(){
  var $ = {};
  /**
   * get multiple elements
   * @public
   */
  $.all = function(selector, contextElement) {
    var nodeList,
      list = [];
    if (contextElement) {
      nodeList = contextElement.querySelectorAll(selector);
    } else {
      nodeList = document.querySelectorAll(selector);
    }
    if (nodeList && nodeList.length > 0) {
      list = Array.prototype.slice.call(nodeList);
    }
    return list;
  }

  /**
   * delegate an event to a parent element
   * @public
   * @param  array     $el        parent element
   * @param  string    eventType  name of the event
   * @param  string    selector   target's selector
   * @param  function  fn
   */
  $.delegate = function($el, eventType, selector, fn) {
    if (!$el) { return; }
    $el.addEventListener(eventType, function(e) {
      var targets = $.all(selector, $el);
      if (!targets) {
        return;
      }
      // findTarget:
      for (var i=0; i<targets.length; i++) {
        var $node = e.target;
        while ($node) {
          if ($node == targets[i]) {
            fn.call($node, e);
            break; //findTarget;
          }
          $node = $node.parentNode;
          if ($node == $el) {
            break;
          }
        }
      }
    }, false);
  };

  var urls = [];
  var imgs = $.all('img',$.all('#prose')[0]);
  imgs.forEach(function(v,i){
      urls.push(v.src);
  })

  $.delegate(document.querySelector('#prose'), 'click','img',function(){
      var current = this.src;
      var obj = {
          urls : urls,
          current : current
      };
      previewImage.start(obj);
  });
};

// fixed container when scrolling
var oTop = $("#left-container").offset().top;//默认上边距离
$(document).scroll(function(){//body滚动事件
  var topp = $(document).scrollTop();
  if( topp > oTop ){
      $("#right-container").addClass("top-0 mt3-l");
      $("#left-container").addClass("top-0 pt3-ns");
  }else{
      $("#right-container").removeClass(" top-0 mt3-l");
      $("#left-container").removeClass("top-0 pt3-ns");
  }
});

// go to top
function goTop(min_height) {
  $(".goTop").click(
      function() {
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  //获取页面的最小高度，无传入值则默认为600像素
  min_height=min_height?min_height:400;
  //为窗口的scroll事件绑定处理函数
  $(window).scroll(function() {
      //获取窗口的滚动条的垂直位置
      var s = $(window).scrollTop();
      //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
      if (s > min_height) {
          $(".goTop").fadeIn(100);
      } else {
          $(".goTop").fadeOut(200);
      }
  });
}
$(function() {
  goTop();
});
