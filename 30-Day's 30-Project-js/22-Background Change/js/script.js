const imgBox = document.querySelector('.img-box');
const imgWrap = document.querySelector('.img-wrap');
const orignalImg = document.getElementById('orignalImg');
const line = document.getElementById('line');

orignalImg.style.width = imgBox.offsetWidth = "px";

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (e) {
    let boxWidth = (e.pageX - leftSpace) + 'px';
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
};