// JavaScript Document
'use strict';

var applicationTagLine = 'continuously looking forward into the light...';

var appData = {
	title: 'inside out - js',
	tagLine: 'continuously looking forward into the light...'
	
	
	
};

window.addEventListener('load', initializeApplication);

function initializeApplication() {
	
	document.title = appData.title;
	
	document.body.style.backgroundColor = '#BBB';
	document.body.style.textAlign = 'center';
	document.body.style.fontSize = '3em';
	
	var elWrapper = document.createElement('div');
	elWrapper.id = 'appliactionWrapper';
	document.body.appendChild(elWrapper);
	
	
	var elHeader = document.createElement('header');
	elWrapper.appendChild(elHeader);
	
	var elHeaderTitle = document.createElement('h1');
	elHeaderTitle.innerHTML = appData.title;
	elHeaderTitle.className = 'animated bounceInDown';
	elHeader.appendChild(elHeaderTitle);
	
	var elHeaderTagline = document.createElement('h2');
	elHeaderTagline.textContent = appData.tagLine;
	elHeaderTagline.style.fontSize = '.4em';
	elHeader.appendChild(elHeaderTagline);
	elHeaderTagline.className = 'animated bounceInLeft';

	
	var elMain = document.createElement('main');
	elMain.innerHTML = '<p>Hello World!</p>';
	elWrapper.appendChild(elMain);
	elMain.className = 'animated zoomIn';

	
	var elFooter = document.createElement('footer');
	elFooter.innerHTML = '<h4>get excited about learning JavaScript...</h4>';
	elWrapper.appendChild(elFooter);
	elFooter.className = 'animated bounceInRight';
	
	
}