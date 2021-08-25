const items = document.querySelectorAll('.food_info');

function openCloseAnswer() {
    const answerId_1 = this.id.replace('button_01', 'first_folder');
    const answerId_2 = this.id.replace('button_02', 'second_folder');
    const answerId_3 = this.id.replace('button_03', 'third_folder');

    if(document.getElementById(answerId_1).style.display === 'block') {
      alert('hi');
      document.getElementById(answerId_1).style.display = 'none';

      $("#1-first_folder").css("opacity","1"); //ON
      $("#1-second_folder").css("opacity","0"); //OFF
      $("#1-third_folder").css("opacity","0"); //OFF
      //구분선---------------------------
      //second_folder의 css 변경
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-width","1px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("height","40px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("line-height","40px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("margin-top","0");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-bottom-width","2px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-right-width","0px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-left-width","0px");
      //third_folder의 css 변경
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-width","1px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("height","40px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("line-height","40px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("margin-top","0");
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-bottom-width","2px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-left-width","1px");
      //first_folder의 css 변경 폴더 div 크게------------------
      $('#folder_choice>ul>a:first-child>li').css("border-width","2px");
      $('#folder_choice>ul>a:first-child>li').css("height","48px");
      $('#folder_choice>ul>a:first-child>li').css("line-height","48px");
      $('#folder_choice>ul>a:first-child>li').css("margin-top","-7px");
      $('#folder_choice>ul>a:first-child>li').css("border-bottom-width","0px");
      $('#folder_choice>ul>a:first-child>li').css("border-right-width","2px");
      $('#folder_choice>ul>a:first-child>li').css("border-left-width","2px");
      //z-index 속성 변경!------------------
      $('#1-first_folder').css("z-index","100");
      $('#1-second_folder').css("z-index","10");
      $('#1-third_folder').css("z-index","1");
    }
    else if(document.getElementById(answerId_2).style.display === 'block') {
      alert('hi');
      document.getElementById(answerId_2).style.display = 'none';

      //나머지 div OFF
      $("#1-second_folder").css("opacity","1");
      $("#1-first_folder").css("opacity","0");
      $("#1-third_folder").css("opacity","0");
      //구분선---------------------------
      //first_folder의 css 변경
      $('#folder_choice>ul>a:first-child>li').css("border-width","1px");
      $('#folder_choice>ul>a:first-child>li').css("height","40px");
      $('#folder_choice>ul>a:first-child>li').css("line-height","40px");
      $('#folder_choice>ul>a:first-child>li').css("margin-top","0");
      $('#folder_choice>ul>a:first-child>li').css("border-bottom-width","2px");
      $('#folder_choice>ul>a:first-child>li').css("border-right-width","0px");
      //third_folder의 css 변경
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-width","1px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("height","40px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("line-height","40px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("margin-top","0");
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-bottom-width","2px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-left-width","0px");
      //second_folder의 css 변경 폴더 div 크게------------------
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-width","2px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("height","48px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("line-height","48px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("margin-top","-7px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-bottom-width","0px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-right-width","2px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-left-width","2px");
      //z-index 속성 변경!------------------
      $('#1-first_folder').css("z-index","10");
      $('#1-second_folder').css("z-index","100");
      $('#1-third_folder').css("z-index","1");
    }
    else if(document.getElementById(answerId_3).style.display === 'block') {
      document.getElementById(answerId_3).style.display = 'none';

      $("#1-second_folder").css("opacity","0");
      $("#1-first_folder").css("opacity","0");
      $("#1-third_folder").css("opacity","1");
      //구분선---------------------------
      //first_folder의 css 변경
      $('#folder_choice>ul>a:first-child>li').css("border-width","1px");
      $('#folder_choice>ul>a:first-child>li').css("height","40px");
      $('#folder_choice>ul>a:first-child>li').css("line-height","40px");
      $('#folder_choice>ul>a:first-child>li').css("margin-top","0");
      $('#folder_choice>ul>a:first-child>li').css("border-bottom-width","2px");
      $('#folder_choice>ul>a:first-child>li').css("border-right-width","0px");
      //second_folder의 css 변경
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-width","1px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("height","40px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("line-height","40px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("margin-top","0");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-bottom-width","2px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-right-width","0px");
      $('#folder_choice>ul>a:nth-child(2)>li').css("border-left-width","1px");
      //third_folder의 css 변경 폴더 div 크게------------------
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-width","2px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("height","48px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("line-height","48px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("margin-top","-7px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-bottom-width","0px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-right-width","2px");
      $('#folder_choice>ul>a:nth-child(3)>li').css("border-left-width","2px");
      //z-index 속성 변경!------------------
      $('#1-first_folder').css("z-index","1");
      $('#1-second_folder').css("z-index","10");
      $('#1-third_folder').css("z-index","100");
    } else {
      document.getElementById(answerId_3).style.display = 'block';
      alert('hi');
    }
}

items.forEach(item => item.addEventListener('click', openCloseAnswer));