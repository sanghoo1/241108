/* 
  jQuery() 기본구조
  $('대상').method();


  



  .method();
  traversing
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().prevall(); 이전 형제 노드 '모두' 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().nextAll(); 다음 형제 노드 '모두' 탐색
  $().first(); 일치하는 요소에서 첫 번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
  $().filter(); 일치하는 노드 탐색(주로 삭제시 사용)


$().css('속성'); css 속성 탐색
$().css('속성','값'); 속성과 값 적용
$().css({'속성':'값','속성':'값','속성':'값'}); 여러 개의 속성과 값 적용
*/
/*문서 준비 이벤트가 필요함 
window.onload = function () {}

document.addEventListener('DOMContentLoaded', function () {});
jQuery
$(document).ready(function () {}); 문서를 불러온 다음 함수 실행

$(function(){}); 함께 실행
*/
$(document).ready(function(){
  $('body').css('background-color','#ddd');
  $('body *').css({'border': '3px solid #000', 'padding' : 10, 'margin': '0.9rem'});

  $('a').parent().css({'border-color':'red'}); //a의 부모를 탐색
  $('a').parents().css({'border-style':'dashed'});

  $('.container').children(); // 자식 노드 탐색. 매개변수를 지정하지 않으면 같은 라인의 모든 자식 노드 탐색
  $('.container').children('h1').css({backgroundColor : 'orange'});

  $('li.part').siblings(); // li.part의 형제 탐색
  $('li.part').siblings().css({backgroundColor : 'lightblue'}); // li.part의 형제 탐색
  $('li.part').siblings('li:last-child').children('a').css({display : 'block'});

  //.first(); 첫 번째 탐색한 노드 반환
  $('li.part').siblings('li:last-child').children('a').first().css({
    textDecoration : 'none',
    color: '#000',
    borderStyle : 'dotted'
  });

  $('.p2').prev(); // .p2의 앞에 작성된 형제 노드 탐색
  $('.p2').prev().css({backgroundColor : 'blue'}); 
  $('.p2').next(); // .p2의 뒤에 작성된 형제 노드 탐색
  $('.p2').next().css({backgroundColor : 'green'}); 

  //.find(); 하위 노드 탐색. 반드시! 매개변수가 필요
  $('#header').siblings().last().children().last().find('a').css({
    color : 'red'
  })
});

