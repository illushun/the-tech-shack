window.onscroll = function() {
	pageScrolling();
	toggleSidebar();
}

var cItemIndex = 1;
displayItem(cItemIndex);

/* set the current carousel item */
function getItem(i) {
	displayItem(cItemIndex = i);
}

/* for displaying individual carousel items */
function displayItem(i) {
	// get all elements with the same class name
	var items = document.getElementsByClassName("carousel-item");
	var dots = document.getElementsByClassName("dot");

	// if current item is greater than max items, set it to the first item
	if (i > items.length) {
		cItemIndex = 1;
	}

	// if current item is less than 1, set it to the biggest item
	if (i < 1) {
		cItemIndex = items.length;
	}

	// loop through all carousel items and set their display to none
	for (var j = 0; j < items.length; j++) {
		items[j].style.display = "none";
	}

	// loop through all dots and remove " active-dot" from their class name
	for (var j = 0; j < dots.length; j++) {
		dots[j].className = dots[j].className.replace(" active-dot", "");
		
	}

	// display the current carousel item
	items[cItemIndex - 1].style.display = "block";
	// highlight the current dot
	dots[cItemIndex - 1].className += " active-dot";
}

function setDropdown() {
		var navigation = document.getElementById("mobile-nav");
		var dropdown = document.getElementById("drop-content");

		if (dropdown.style.display === "block") {
			dropdown.style.display = "none";
		}
		else {
			dropdown.style.display = "block";
		}
}


/* For scrolling usability */

/* Returns how far you have scrolled on a page in a certain direction (X or Y) */
function getScroll(type) {
  switch (type) {
    case "x":
      return window.pageXOffset;
    case "y":
      return window.pageYOffset;
    
    default:
      return window.pageYOffset;
  }
}

/* Check the size of the users page */
function pageSize(type) {
	switch (type) {
    case "w":
      return window.innerWidth || document.body.clientWidth;
    case "h":
      return window.innerHeight || document.body.clientHeight;
    
    default:
      return window.innerWidth || document.body.clientWidth;
  }
}

function pageScrolling() {
  var eTopBtn = document.getElementById("top");

	// Check how far the user has scrolled down the page.
	if (getScroll() > 300) {
			eTopBtn.style.display = "block";
		}
		else {
			eTopBtn.style.display = "none";
	}
}

function scrollToTop() {
	// Places user back to the top of page.
  // Need to use this to get compatibility with different types of browsers.
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

/* Sidebar scrolling */

function toggleSidebar() {
	/*alert("size -> " + pageSize());*/

	// Check page size to ensure sidebar doesn't overlap with footer.

	// If it is smaller than 1920, the sidebar will stay in position, otherwise, it will follow the user down the page.
	if (pageSize() >= 1920) {
		document.getElementById("side-nav").style.position = "fixed";

		// Check how far the user has scrolled down the page.
		if (getScroll() > 300) {
			document.getElementById("side-nav").style.top = "20px";
		}
		else {
			document.getElementById("side-nav").style.top = "240px";
		}
	}
	else {
		document.getElementById("side-nav").style.position = "unset";
	}
}