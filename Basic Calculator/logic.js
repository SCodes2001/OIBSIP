let view = document.getElementById('screen');
numpads = document.querySelectorAll('button');
let screenValue = '';
var ans = 0;
for (item of numpads) {
  item.addEventListener('click', (e) => {
    buttontext = e.target.innerText;
    console.log(buttontext);
    if (buttontext == 'X') {
      buttontext = '*';
      screenValue += buttontext
      view.value = screenValue;
    }
    else if (buttontext == 'Clear') {
      view.value = ""
      screenValue = ''
    }
    else if (buttontext == '+') {
      buttontext = '+';
      screenValue += buttontext
      view.value = screenValue;
    }
    else if (buttontext == 'ans') {
      screenValue += ans;
      view.value += "ans";
    }
    else if (buttontext == '-') {
      buttontext = '-';
      screenValue += buttontext
      view.value = screenValue;
    }
    else if (buttontext == '/') {
      buttontext = '/';
      screenValue += buttontext
      view.value = screenValue;
    }
    else if (buttontext == 'Enter') {
      view.value = eval(screenValue).toString();
      screenValue = view.value;
      ans = view.value;
    }
    else if (buttontext == 'del') {
      if (view.value.indexOf("ans") != -1) {
        view.value = screenValue.substring(0, screenValue.length - (ans.length));
        screenValue=view.value;
      }
      else {
        view.value = screenValue.substring(0, screenValue.length - 1);
        screenValue = view.value;
      }
    }
    else if (buttontext == '±') {
      buttontext = '-1';
      screenValue = eval(screenValue * buttontext).toString();
      view.value = screenValue;
    }
    else if (buttontext == '%') {
      let percentage = eval(screenValue).toString();
      let show = percentage.substring(0, percentage.length);
      screenValue = eval(show / 100).toString();
      view.value = screenValue;
    }
    else if (buttontext == '√') {

      screenValue = Math.sqrt(eval(screenValue)).toString();
      view.value = screenValue;
    }
    else {
      screenValue += buttontext
      view.value = screenValue;
    }
    if (screenValue.length > 20) {
      view.style.fontSize = "large";
    }
    if (screenValue.length > 35) {
      view.style.fontSize = "medium";
    }
  })


}