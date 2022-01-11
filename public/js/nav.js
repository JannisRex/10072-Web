/**
 * helperFunctions for the nav inside the header
 * essentially just toggle for the nav and searchBar
 */

// those are the events, which get fired when
// dropdown or wrapper gets clicked and should collapse
let navToggle = document.querySelector('.navToggle')
let navWrapper = document.querySelector('.navWrapper')

// (expand toggle the nav menu with js)
// the menu either only has 2 states
// so we just invert the current state
navToggle.addEventListener('click', () => {
  if (navWrapper.classList.contains('active')) {
    this.setAttribute('aria-expanded', 'false')
    this.setAttribute('aria-label', 'menu')
    navWrapper.classList.remove('active')
  } else {
    navWrapper.classList.add('active')
    this.setAttribute('aria-label', 'close menu')
    this.setAttribute('aria-expanded', 'true')
    searchForm.classList.remove('active')
    searchToggle.classList.remove('active')
  }
})

// this is for the searchbar, located in the header
let searchToggle = document.querySelector('.searchToggle')
let searchForm = document.querySelector('.searchForm')

searchToggle.addEventListener('click', showSearch)

// checks wether or not the serachBar is "clicked"
function showSearch() {
  searchForm.classList.toggle('active')
  searchToggle.classList.toggle('active')

  navToggle.setAttribute('aria-expanded', 'false')
  navToggle.setAttribute('aria-label', 'menu')
  navWrapper.classList.remove('active')

  if (searchToggle.classList.contains('active')) {
    searchToggle.setAttribute('aria-label', 'Close search')
  } else {
    searchToggle.setAttribute('aria-label', 'Open search')
  }
}
