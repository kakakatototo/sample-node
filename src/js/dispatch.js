'use strict';

var dispatcher = $({});

var select = select || ['tab1', 'tab2'];
var visibleTab = '';

var updateView = function () {
   updateTab();
}

function updateTab() {
  for (var i = 0; i < select.length; i++) {
    var key = select[i];
    var content = $(getContentsSelector(key));
    if (visibleTab === key) {
      content.show();
    } else {
      content.hide();
    }
  }
}

function getContentsSelector(key) {
  return '.' + key + '-content';
}

var setVisibleTab = function (value) {
  visibleTab = value;
  dispatcher.trigger('tabChange');
}

dispatcher.on('tabChange', updateView);

$(function () {
  $('.tab1').on('click', function () {
    setVisibleTab('tab1');
  });

  $('.tab2').on('click', function () {
    setVisibleTab('tab2');
  });
  setVisibleTab('tab1');
});