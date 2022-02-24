import Vue from 'vue';
import App from './App.vue';
setMargin(document.documentElement,"0","0","0","0");
setMargin(document.body,"0","0","0","0");
document.documentElement.style.height = "100%";
document.body.style.height = "100%";

function setMargin(el,top,right,bottom,left){
    el.style.marginTop = top;
    el.style.marginRight = right;
    el.style.marginBottom = bottom;
    el.style.marginLeft = left;
}

new Vue({
    el:"#app",
    render:f=>f(App),
});
