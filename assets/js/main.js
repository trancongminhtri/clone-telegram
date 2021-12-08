// focus vào input search
function focusSearch(){
   document.getElementById('border-search').classList.add('border-search-focus');
   document.getElementById('i-icon-search').style.color = 'var(--focus-search)';
   document.getElementById('input-search').style.backgroundColor = "#fff";
   document.getElementById('bars-left').style.cssText = `
                                                        opacity: 1;
                                                        width: 0px;
                                                        height: 0px;`;
   document.getElementById('arrow-right').style.cssText = `
                                                        opacity: 1;
                                                        width: 40px;
                                                        height: 40px;
                                                        transform: rotateZ(180deg);
                                                        transition: transform ease 0.3s;`;
}

// blur ra khỏi input search
function blurSearch() {
    document.getElementById('border-search').classList.remove('border-search-focus');
    document.getElementById('i-icon-search').style.color = 'var(--color-icon-search)';
    document.getElementById('input-search').style.backgroundColor = "var(--background-search)";
}

// mousemove vào icon bars
function mouseMoveBars() {
    document.getElementById('bars-left').classList.add('bars-left-mousemove');
    document.getElementById('arrow-right').classList.add('bars-left-mousemove');
}

// mousemove ra khỏi icon bars
function mouseOutBars() {
    document.getElementById('bars-left').classList.remove('bars-left-mousemove');
    document.getElementById('arrow-right').classList.remove('bars-left-mousemove');
}

// clink show menu left
function clickShowMenuLeft() {
    var nav_menu_left = document.getElementById('nav-menu-left');
    var nav_overlay = document.getElementById('nav-overlay');
    // lấy giá trị từ css
    if(getComputedStyle(nav_menu_left).opacity == 1){
        nav_menu_left.style.cssText = `opacity: 0; animation: fadeOut linear 0.3s;`;
        nav_overlay.style.display = 'none';
    }else{
        nav_menu_left.style.cssText = 'opacity: 1;  z-index: 3;animation: fadeIn linear 0.3s;';
        nav_overlay.style.display = 'block';
    }
}

// hover vào tag li bên menu left
let nav_menu_link = document.getElementsByClassName('nav-menu-link');
for(let i = 0; i < nav_menu_link.length; i++){
    nav_menu_link[i].addEventListener('mouseover', function(){
        nav_menu_link[i].style.backgroundColor = 'var(--background-search)';
    });

    nav_menu_link[i].addEventListener('mouseout', function(){
        nav_menu_link[i].style.backgroundColor = '#fff';
    })
}
