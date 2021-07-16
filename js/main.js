// DROPDOWN in LIGHT
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function toggleLanguage(language) {
  let description = document.getElementById("description");
  let elem = '<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  if (window.innerWidth >= 1024){
    if (language === "Қазақ"){
      description.innerHTML = "Қазақ⠀" +elem;
    }
    else {
      description.innerHTML = "Русский⠀" + elem;
    }
  }
  else {
    if (language === "Қазақ"){
      description.innerHTML = "Қазақ⠀"+ elem;
    }
    else {
      description.innerHTML = "Русский⠀"+ elem;
    }
  }
}

// DROPDOWN in DARK


// CONFIRM 
const codes = document.querySelectorAll('#confirmCode');
if(codes.length){
  codes[0].focus();
  codes.forEach((code, index) => {
      code.addEventListener('keydown', (ev) => {
          if(ev.key >= 0 && ev.key <= 9){
              codes[index].value = '';
              setTimeout(() => codes[index + 1].focus(), 10);
          }
          else if(ev.key === 'Backspace'){
              setTimeout(() => codes[index - 1].focus(), 10);
          }
      });
  });
}
// IIN MASK
var regExpMask = IMask(
  document.getElementById('regexp-mask'),
  {
    mask: /^[0-9]\d{0,11}$/
  });
  document.getElementById("info_client").addEventListener('submit', function(e) {
    e.preventDefault()
    let iin =  document.getElementById('regexp-mask')
    if(iin.value.length < 12){
      iin.style.border = '1px solid red';
      return
    }
    this.submit()
  })

// PHONE MASK
var phoneMask = IMask(
  document.getElementById('phone_number'), {
    mask: '+{7}(000)000-00-00',
  });
  document.getElementById("info_client").addEventListener('submit', function(e) {
  e.preventDefault()
  let phone =  document.getElementById('phone_number')
  if(phone.value.length < 16){
    phone.style.border = '1px solid red';
    return
  }
  this.submit()
})





