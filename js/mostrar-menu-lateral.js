const menu_icon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const fechar = document.getElementById('fechar-side-bar');
let controlador_num = -1;

function sidebarActions(object) {
    object.addEventListener('click', function() {
        controlador_num *= -1;
        switch (controlador_num) {
            case 1:
                sidebar.style.animation="fade_in 500ms forwards";
                break;
            case -1:
                sidebar.style.animation="fade_out 500ms forwards";
                break;
        }
    });
}
sidebarActions(menu_icon);
sidebarActions(fechar);
