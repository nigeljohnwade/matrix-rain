const uniCycle = (selector, start, interval, idx) => {
    document.querySelectorAll(selector).forEach(function(element, index, array){
        element.classList.add('uniCycle-' + idx);
    });
    const uniCycleStyleSheet = getStyleSheet("uniCycle");
    uniCycleStyleSheet.insertRule(".uniCycle-" + idx + "::before{content: '\\" + start + "';}", idx);
    var current = start + 1; 
    setInterval(function(){
        let uniCycleStyleSheet = getStyleSheet("uniCycle");
        uniCycleStyleSheet.removeRule(idx);
        uniCycleStyleSheet.insertRule(".uniCycle-" + idx + "::before{content: '\\" + (current++) + "';}", idx);
        }, interval
    );
};

function getStyleSheet(unique_title) {
  for(var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if(sheet.title == unique_title) {
      return sheet;
    }
  }
}

function listStyleSheetTitles() {
  for(var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    console.log(sheet.title);
  }
}