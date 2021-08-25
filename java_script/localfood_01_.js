

function openCloseAnswer(button1, button2) {
  const contents = button2;
  const answerId_1 = contents;
  const answerId_2 = contents.replace('first', 'second');
  const answerId_3 = contents.replace('first', 'third');

    document.getElementById(answerId_1).style.display ='block';
    document.getElementById(answerId_2).style.display ='none';
    document.getElementById(answerId_3).style.display ='none';

    const menu = button1;
    const menu_1 = menu;
    const menu_2 = menu.replace('01', '02');
    const menu_3 = menu.replace('01', '03');

    //first_folder의 css 변경
    document.getElementById(menu_1).style.borderWidth = '2px';
    document.getElementById(menu_1).style.height = '48px';
    document.getElementById(menu_1).style.lineHeight = '48px';
    document.getElementById(menu_1).style.marginTop = '-7px';
    document.getElementById(menu_1).style.borderBottomWidth = '0px';
    document.getElementById(menu_1).style.borderRightWidth = "2px";
    document.getElementById(menu_1).style.borderLeftWidth = "2px";


//second_folder의 css 변경 폴더 div 크게------------------
    document.getElementById(menu_2).style.borderWidth = '1px';
    document.getElementById(menu_2).style.height = '40px';
    document.getElementById(menu_2).style.lineHeight = '40px';
    document.getElementById(menu_2).style.marginTop = '0px';
    document.getElementById(menu_2).style.borderBottomWidth = '2px';
    document.getElementById(menu_2).style.borderRightWidth = "0px";
    document.getElementById(menu_2).style.borderLeftWidth = "0px";

    // third
    document.getElementById(menu_3).style.borderWidth = '1px';
    document.getElementById(menu_3).style.height = '40px';
    document.getElementById(menu_3).style.lineHeight = '40px';
    document.getElementById(menu_3).style.marginTop = 0;
    document.getElementById(menu_3).style.borderBottomWidth = '2px';
    document.getElementById(menu_3).style.borderLeftWidth = "1px";
    
}

function openCloseAnswer2(button1, button2) {

  const contents = button2;
  const answerId_1 = contents.replace('second', 'first');
  const answerId_2 = contents;
  const answerId_3 = contents.replace('second', 'third');

    document.getElementById(answerId_1).style.display ='none';
    document.getElementById(answerId_2).style.display ='block';
    document.getElementById(answerId_3).style.display ='none';

    const menu = button1;
    const menu_1 = menu.replace('02', '01');
    const menu_2 = menu;
    const menu_3 = menu.replace('02', '03');

    //first_folder의 css 변경
    document.getElementById(menu_1).style.borderWidth = '1px';
    document.getElementById(menu_1).style.height = '40px';
    document.getElementById(menu_1).style.lineHeight = '40px';
    document.getElementById(menu_1).style.marginTop = 0;
    document.getElementById(menu_1).style.borderBottomWidth = '2px';
    document.getElementById(menu_1).style.borderRightWidth = "0px";


//second_folder의 css 변경 폴더 div 크게------------------
    document.getElementById(menu_2).style.borderWidth = '2px';
    document.getElementById(menu_2).style.height = '48px';
    document.getElementById(menu_2).style.lineHeight = '48px';
    document.getElementById(menu_2).style.marginTop = '-7px';
    document.getElementById(menu_2).style.borderBottomWidth = '0px';
    document.getElementById(menu_2).style.borderRightWidth = "2px";
    document.getElementById(menu_2).style.borderLeftWidth = "2px";

    // third
    document.getElementById(menu_3).style.borderWidth = '1px';
    document.getElementById(menu_3).style.height = '40px';
    document.getElementById(menu_3).style.lineHeight = '40px';
    document.getElementById(menu_3).style.marginTop = 0;
    document.getElementById(menu_3).style.borderBottomWidth = '2px';
    document.getElementById(menu_3).style.borderLeftWidth = "0px";
}

function openCloseAnswer3(button1, button2) {
  const contents = button2;
  const answerId_1 = contents.replace('third', 'first');
  const answerId_2 = contents.replace('third', 'second');
  const answerId_3 = contents;

    document.getElementById(answerId_1).style.display ='none';
    document.getElementById(answerId_2).style.display ='none';
    document.getElementById(answerId_3).style.display ='block';

    const menu = button1;
    const menu_1 = menu.replace('03', '01');
    const menu_2 = menu.replace('03', '02');
    const menu_3 = menu;

    //first_folder의 css 변경
    document.getElementById(menu_1).style.borderWidth = '1px';
    document.getElementById(menu_1).style.height = '40px';
    document.getElementById(menu_1).style.lineHeight = '40px';
    document.getElementById(menu_1).style.marginTop = 0;
    document.getElementById(menu_1).style.borderBottomWidth = '2px';
    document.getElementById(menu_1).style.borderRightWidth = "0px";


//second_folder의 css 변경 폴더 div 크게------------------
    document.getElementById(menu_2).style.borderWidth = '1px';
    document.getElementById(menu_2).style.height = '40px';
    document.getElementById(menu_2).style.lineHeight = '40px';
    document.getElementById(menu_2).style.marginTop = '0px';
    document.getElementById(menu_2).style.borderBottomWidth = '2px';
    document.getElementById(menu_2).style.borderRightWidth = "0px";
    document.getElementById(menu_2).style.borderLeftWidth = "1px";

    // third
    document.getElementById(menu_3).style.borderWidth = '2px';
    document.getElementById(menu_3).style.height = '48px';
    document.getElementById(menu_3).style.lineHeight = '48px';
    document.getElementById(menu_3).style.marginTop = '-7px';
    document.getElementById(menu_3).style.borderBottomWidth = '0px';
    document.getElementById(menu_3).style.borderLeftWidth = "2px";
    document.getElementById(menu_3).style.borderRightWidth = "2px";
}

// items.forEach(item => item.addEventListener('click', openCloseAnswer));