const list_pages = ["home-page","archives","about","founders"];
function change_page(target) {
    for(var i in list_pages){
        document.getElementById(list_pages[i]).style.display="none";
    }
    document.getElementById(target).style.display="block";
}