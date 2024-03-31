
const navbarToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.header-list');


navbarToggle.addEventListener('click', function() {
    navMenu.classList.toggle('js-active');
    navbarToggle.classList.toggle('js-active');
    document.body.classList.toggle('js-active');

});



// let itemWidth = document.querySelector('.business-item').getBoundingClientRect().width

// const itemArray =  [...document.querySelectorAll('.business-item')]


// const itemMargin = itemArray[1].getBoundingClientRect().left - itemArray[0].getBoundingClientRect().right;

// itemWidth += itemMargin;
// // let totalWidth = itemWidth;
// let totalWidth = 0;
// document.getElementById('left').addEventListener('click',() => {
//     totalWidth += itemWidth;
//     document.querySelector('.business-list').style.transform = `translateX(${totalWidth}px)`
//     // console.log(totalWidth)
// });
// document.getElementById('right').addEventListener('click',() => {
//     totalWidth -= itemWidth;
//     document.querySelector('.business-list').style.transform = `translateX(${totalWidth}px)`
//     // console.log(itemArray[0].getBoundingClientRect().right)

// });


let wHeight = window.innerHeight;
window.addEventListener('scroll', function() {
	let wScroll = window.scrollY;

	let elements = document.querySelectorAll('.js-trigger');
	
	elements.forEach(function(element) {
		let position = element.getBoundingClientRect().top + wScroll;
		
		if (wScroll > position - wHeight * 5/6) {
			element.classList.add('js-show');
            // console.log('ok')
		} else if (wScroll <= position - wHeight) {
			element.classList.remove('js-show');
		}
	});
});

