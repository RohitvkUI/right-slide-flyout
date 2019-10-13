import "./../scss/styles.scss";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

export const toggleSideBar = () => {
  $(".back-drop").toggle();
  $("nav.sidebar").toggleClass("sidebar--effect");
  $(".header-button-target").attr("aria-expanded", (i,attr)=>{
    return attr == 'true' ? 'false' : 'true'
  });
}
