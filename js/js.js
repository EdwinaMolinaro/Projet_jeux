$(document).ready(function(){
  var positionHorror=$("#poursuivre_accueil").offset().top;

  $(document).scroll(function(){
    if($(document).scrollTop() >=positionHorror){
      $(".navbar").addClass("navbar-visible")
    }else {
      $(".navbar").removeClass("navbar-visible")
    }
  })
})
