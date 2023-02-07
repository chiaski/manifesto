function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

$("#wrapper .m").hover(function(){
  
  let v = $(this).attr("isa");
  

  $(".isa").html(v.toUpperCase());
  document.title = "A WEBSITE " + v.toUpperCase();
  
});


var viewmode = "box";

$( document ).ready(function() {
   viewmode = $("#websiteisa a[active]").attr("type");
  changeViewmode(viewmode);

  // handle flowers
    $("#flowers a").each(function(i, obj){
  
      let _left = randInt(0, 9000);
      let _top = randInt(0, 100);
      let _opacity = randInt(50, 100) * 0.01;
      
      $(obj)
      .css("opacity", _opacity)
      .css("left", _left + "px")
      .css("top", _top + "px");
      
    });
  
});


$("#websiteisa a").click(function(){

  $("#websiteisa a").removeAttr("active");
  let v = $(this).attr("type");
  $(this).attr("active", "")
  
  viewmode = v;
  
  changeViewmode(viewmode);
  
});


function changeViewmode(what){
  
  if( what == "box" ){
    $("#wrapper")
    .removeClass("list")
    .addClass("box");
    
    $(".fake").show();
    
  }
  
  if( what == "list" ){
    $("#wrapper")
    .removeClass("box")
    .addClass("list");
    
    $(".fake").hide();
    
  }
  
  if( what == "popup" ){
    
    $("#wrapper .m").each(function(i, obj){
      
      let _t =  $(obj).find("summary").text() + " " + $(obj).find("p:first-of-type").text();
      let _top = randInt(0, screen.availHeight - 300);
      let _left = randInt(0, screen.availWidth - 400);
      
     window.open("manifesto.html?=" + _t, "", "top="+_top+",left=" + _left + ",width=400, height=300, location=no,toolbar=no,menubar=no,popup" );
    
      
      
    })
    
  }
  
  
}

$("#wrapper .m").click(function(){
  
  
  
  if(viewmode == "popup"){
    
    confirm( $(this).find("p:first-of-type").text() );
    
    $(this).find(".example").each(function(i, obj){
      
      let _top = randInt(0, screen.availHeight - 150);
      let _left = randInt(0, screen.availWidth - 300);
      
      
      window.open( $(obj).attr("href"), "", "top="+_top+",left=" + _left + ",width=500, height=250, location=no,toolbar=no,menubar=no,popup" )
    });
    
    
  }
  
  
})

$(window).on('scroll', function() {
  
  if(viewmode == "list") return;
  
  $(".extra-wrapper").css("left", -$(window).scrollTop());
  $("#flowers .wrapper").css("left", -$(window).scrollTop());
  
  let d = document.getElementsByClassName("fake")[0];
//  
        if ( viewmode == "box" && $(document).scrollTop() >= (Math.floor(d.scrollHeight)) - 950) $(document).scrollTop({
          top: 0,
          behavior: 'smooth'
        });

  
  
  
});

