function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

$("#wrapper .m").hover(function(){
  
  let v = $(this).attr("isa");
  
  console.log(v);
  
  $(".isa").html(v.toUpperCase());
  
});


var viewmode = "box";

$("#websiteisa a").click(function(){

  $("#websiteisa a").removeAttr("active");
  let v = $(this).attr("type");
  $(this).attr("active", "")
  console.log( v );
  
  viewmode = v;
  
  
  if( viewmode == "list" ){
    
    
    
  }
  
  if( viewmode == "popup" ){
    
    $("#wrapper .m p").css("display", "none")
    
  }
  
});

$("#wrapper .m").click(function(){
  
  
  
  if(viewmode == "popup"){
    
    confirm( $(this).find("p:first-of-type").text() );
    
    $(this).find(".example").each(function(i, obj){
      
      let _top = randInt(0, screen.availHeight - 150);
      let _left = randInt(0, screen.availWidth - 300);
      
      console.log( obj );
      
      window.open( $(obj).attr("href"), "", "top="+_top+",left=" + _left + ",width=500, height=250, location=no,toolbar=no,menubar=no,popup" )
    });
    
    
  }
  
  
})

$(window).on('scroll', function() {
  
  if(viewmode !== "box") return;
  
  $("#wrapper.box").css("left", -$(window).scrollTop());
});

