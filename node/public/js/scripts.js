$(function(){

  $('#btn-like').on('click',function(event){
      event.preventDefault();

      var attributeID = $(this).data('id');

      $.get(`/attribute/${attributeID}`).done(function(data){
        console.log( "attributeDetails" + data );
          // $('.likes-count').text(data.likes);
      });
  });

});
