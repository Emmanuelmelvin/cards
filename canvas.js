


function generateSnippet(){
// Assuming you want to execute this code when some event occurs, like clicking a button
  var codeContainer = document.getElementById('codeContainer');
  var head = document.getElementById('head').value
  var body = document.getElementById('body').value
  var code = document.getElementById('code').value;

  
  var headEl = document.createElement('h1')
  headEl.style.color = 'white'
  headEl.textContent = head

  var bodyEL = document.createElement('div')
  bodyEL.style.color = 'white'
  bodyEL.innerHTML = body

  var preEl = document.createElement('pre');
  var codeEl = document.createElement('code');
  
  codeEl.className = "language-javascript";
  preEl.style.backgroundColor = 'black'
  codeEl.style.backgroundColor = 'black'
  codeEl.style.color = 'white'
  codeEl.style.textShadow = '2px 2px 2px rgba(0,0,0,0.5)'
  codeEl.style.filter = 'brightness(150%)'
  codeEl.textContent = code;
  
  preEl.appendChild(codeEl);

  codeContainer.appendChild(headEl)
  codeContainer.appendChild(bodyEL)
  codeContainer.appendChild(preEl);


  Prism.highlightAll();
}


function downloadSnippet() {
  var codeContainer = document.getElementById('codeContainer');
  domtoimage.toBlob(codeContainer, { bgcolor: '#000000' }) // Set background color to black
    .then(function (blob) {
      var link = document.createElement('a');
      link.download = 'code_snippet.png';
      link.href = URL.createObjectURL(blob);
      link.click();
    });
}

  document.getElementById('clickMe').addEventListener('click' , generateSnippet)