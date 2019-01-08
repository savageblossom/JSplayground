window.onload = function() {
  var paragraphs = document.getElementsByTagName('p');

  for(let i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if(paragraph.addEventListener)
       paragraph.addEventListener('click', hide);
  }
}

function hide(event){
  event.target.style.visibility = 'hidden';
  //confirm('wow')
}
