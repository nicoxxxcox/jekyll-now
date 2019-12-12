// limit number of displaying characters

/**
 * 
 * @param {string} str 
 * @param {number} limit 
 */
function limitChars(str, limit) {
  if (str.length > limit) return `${str.substring(0, limit)} ...`;
}


// title cards

const title = document.getElementsByClassName('post-title')[0];
title.innerHTML = limitChars(title.textContent , 55);


// excerpt card
 const excerpt = document.getElementsByClassName('post-excerpt')[0];
excerpt.innerHTML = limitChars(excerpt.textContent , 96);
