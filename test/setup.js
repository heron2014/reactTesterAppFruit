var jsdom = require('jsdom');

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access

function setupFakeDom(){

var fakeDOM = '<!doctype html><html><body></body></html>';
	if(typeof document !== 'undefined'){
		return;
	}else{
	global.document = jsdom.jsdom(fakeDOM);
	global.window = document.parentWindow || document.defaultView;

	}
}

setupFakeDom();
