var Body = {
  setBackgroundColor : function (color){
      var target = document.querySelector('body')
      target.style.backgroundColor=color;
    },
    setColor : function (color){
        var target = document.querySelector('body')
        target.style.color=color;
      }
}

var Link = {
  setColor : function (color){
    var a_list = document.querySelectorAll('a');
    var i = 0;
    while(i < a_list.length){
    a_list[i].style.color=color;
    i = i+1;
  }
  }
}

function nightDayHandler(self){
  if(self.value==='night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Link.setColor('powderblue');

} else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Link.setColor('blue');
}
}
