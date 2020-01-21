SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
//song1
  SC.stream('/tracks/18626108',function(sound){
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
//song2
SC.stream('/tracks/353766911',function(sound){
  $('#start2').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop2').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song3
SC.stream('/tracks/135307692',function(sound){
  $('#start3').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop3').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song4
SC.stream('/tracks/62899723',function(sound){
  $('#start4').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop4').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});



});
