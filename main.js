
  var isChromium = navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15;
  if (!isChromium) {
    console.log('Not Chrome');
    
  }


let haveClasss = $( "#iconArea" ).hasClass( "oneClick" );
interact('#iconArea')
  .on('tap', function (event) {
    // console.log(haveClasss);
    
    // if ($( "#iconArea" ).hasClass( "oneClick" )) {
    //     $( "#iconArea" ).removeClass( "oneClick" );

    // }
    // else{
    //     event.currentTarget.classList.toggle('oneClick');
    //     event.preventDefault();
    // }
  })
  .on('doubletap', function (event) {
    event.currentTarget.classList.toggle('large');
    event.currentTarget.classList.remove('rotate');
    event.preventDefault();
  })

 // target elements with the "draggable" class
interact('.draggable')
.draggable({
  // enable inertial throwing
  inertia: false,
  // keep the element within the area of it's parent
  restrict: {
    restriction: "parent",
    endOnly: false,
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  },
  // enable autoScroll
  autoScroll: true,

  // call this function on every dragmove event
  onmove: dragMoveListener,

});

function dragMoveListener (event) {
  var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;



$('#IeCloseBtn').click(function() {
  $("#internetWindow").css("display", "none");
  
});
$('#Works').click(function() {
  $("#internetWindow").css("display", "unset");
  
});
$('#AboutCloseBtn').click(function() {
  $("#aboutMe").css("display", "none");
  
});
$('#About').click(function() {
  $("#aboutMe").css("display", "unset");
  
});
$('#ContactCloseBtn').click(function() {
  $("#Contact").css("display", "none");
  
});
$('#ContactIcon').click(function() {
  $("#Contact").css("display", "unset");
  
});


function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 3000);

  function checkReady() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalID);
          callback.call(this);
      }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? '-webkit-box' : 'none';
}

onReady(function () {
  show('page', true);
  show('imgBg', true);
  show('Loading', false);
  document.getElementById('imgBg').style.display = "unset";
  $("#imgBg").css("display", "unset");
});