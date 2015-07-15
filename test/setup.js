var jsdom = require('jsdom');


function setupFakeDom() {
  var fakeDom = '<doctype html><html><body></body></html></html>';


  if (typeof document !== 'undefined') {
    return false;
  } else {
    global.document = jsdom.jsdom(fakeDom);
    global.window = document.parentWindow || document.defaultView;
  }
}

setupFakeDom();