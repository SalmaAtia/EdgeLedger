var map;
function initMap() {
    const loc={lat:30.013651, lng: 31.208139}
  map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 8
  });
  const marker= new google.maps.Marker({position:localStorage,map:map})
}


// (function(exports) {
//     "use strict";

//     function initMap() {
//       exports.map = new google.maps.Map(document.getElementById("map"), {
//         center: {
//           lat: -34.397,
//           lng: 150.644
//         },
//         zoom: 8
//       });
//     }

//     exports.initMap = initMap;
//   })((this.window = this.window || {}));


window.addEventListener('scroll',function() {
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity=0.9;
  }
  else{
    document.querySelector('#navbar').style.opacity=1;
}
});

$('#navbar a, .btn').on('click', function(event){
  if (this.hash !== ''){
    event.preventDefault();
    const hash=this.hash;
    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top-100
      },
      800
    );

  }
});
