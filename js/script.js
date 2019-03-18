$(document).ready(function (){
    
    //Scroll from first page to second page
    $("#section-one-button").click(function (){
       $('html, body').animate({scrollTop: $("#section-two").offset().top}, 400);
       });
    
    
    //Scroll from second page to third page
    $("#section-two-button").click(function (){
       $('html, body').animate({scrollTop: $("#section-three").offset().top}, 400);
       });
    
    //Scroll from third page to fourth page
    $("#section-three-button").click(function (){
       $('html, body').animate({scrollTop: $("#section-four").offset().top}, 400);
       });
    
    //Scroll from fourth page to fith page
    $("#section-four-button").click(function (){
       $('html, body').animate({scrollTop: $("#section-five").offset().top}, 400);
       });
    
    //Scroll from fith page to top page
    $("#section-five-button").click(function (){
       $('html, body').animate({scrollTop: $("#section-one").offset().top}, 400);
       });
    
});