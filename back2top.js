/*
	Project Name: BACK2TOP JS
	Author: Chiranjit Karmakar
	Date: 22-12-2020
	Version: 1.0
*/

'use strict';
function BACK2TOP(selector,offset,prop='all',time='300',effect='ease',delay=0){
	const WIN_SCROLLED = function(){
		if(document.body.scrollTop > offset || document.documentElement.scrollTop > offset){
			const STYLES = {
				opacity : '1',
				visibility : 'visible',
				transform : 'translateY(0)',
				transition: `${prop} ${time}ms ${effect} ${delay}ms`
			}
			Object.assign(selector.style, STYLES);

		}else{
			const STYLES = {
				opacity : '0',
				visibility : 'hidden',
				transform : 'translateY(100%)',
				transition: `${prop} ${time}ms ${effect} ${delay}ms`
			}
			Object.assign(selector.style, STYLES);
		}
	};

	const SCROLL_EVT = function(){

		document.documentElement.scrollTo({
			top: 0,
			left:0,
			behavior: 'smooth'
		});


	};

	//Target Element i.e Button
	const SELECTOR_LISTENER = selector.addEventListener("click", SCROLL_EVT);

	//Target Element i.e Button Show/Hide on scroll
	const WINDOW_LISTENER = window.addEventListener('scroll', WIN_SCROLLED);

	return SELECTOR_LISTENER;
	return WINDOW_LISTENER;
}

/*
	* BACK2TOP(html element, offset, transition-property, transition-duration, transition-timing-function, transition-delay);

	* Transition Property will be Visibility, Opacity and Transform

	* Default value is set for - 
		transition-property = all,
		transition-duration = 300,
		transition-timing-function = ease,
		transition-delay = 0.

	* You can avoid those above parameters if you want.
*/