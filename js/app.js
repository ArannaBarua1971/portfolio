$(function(){
    
})

// sllde up and down in about section
function about(value){
    new_value="#about .about_other_info .information "+value+" .more_info"
     $(new_value).slideToggle() 
}