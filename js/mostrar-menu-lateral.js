const menu_icon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const fechar = document.getElementById('fechar-side-bar');

function sidebarActions(object) {
    object.addEventListener('click', function() {
        if(sidebar.getClientRects()[0]["x"]==-300){
                sidebar.style.animation="fade_in 500ms forwards";
        }
        else{
                sidebar.style.animation="fade_out 500ms forwards";
        }
    });
}
sidebarActions(menu_icon);
sidebarActions(fechar);