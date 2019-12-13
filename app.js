// limit number of displaying characters

/**
 * 
 * @param {string} str 
 * @param {number} limit 
 */
function limitChars(str, limit) {
  if (str.length > limit) return `${str.substring(0, limit)} ...`
  else{ return str }
}




// function limitChars to titles
const titles = document.getElementsByClassName('post-title');
for(let i = 0 ; i < titles.length ; i++){
  const str = titles[i].innerHTML;
  titles[i].innerHTML = limitChars(str,55) 
}


// function limitChars to excerpts
const excerpts = document.getElementsByClassName('post-excerpt');
for(let i = 0 ; i < excerpts.length ; i++){
  const str = excerpts[i].innerHTML;
  excerpts[i].innerHTML = limitChars(str,80) 
}

