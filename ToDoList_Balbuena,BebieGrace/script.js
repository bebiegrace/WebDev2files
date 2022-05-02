$(document).ready(function(){


    $("#subtn").click(function(){
        var addItem = $("input[name=list_item]").val();
        $("ol").append("<li><p>"+addItem+'</p><button class="Remove_btn">Remove</button></li>' )
      


    $(document).on('click','.Remove_btn', function(){
        $(this).parent('li').addClass("strike").fadeOut('slow'); 
    
     });

     $("#cons").sortable()
        
    });
 
   });

