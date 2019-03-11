let bgGradientDynamic, header, sidenav, lastBgHeight;

document.addEventListener('DOMContentLoaded', () => {
    bgGradientDynamic = document.querySelector('.bg-gradient-dynamic');
    header = document.querySelector('header');
    sidenav = document.querySelector('.sidenav');
    updateBgSize();
});

window.addEventListener('resize', updateBgSize);

function updateBgSize() {
    if (header && sidenav && bgGradientDynamic) {
        let headerHeight = header.getBoundingClientRect().height;
        let sidenavHeight = sidenav.getBoundingClientRect().height;
        let bgHeight = Math.max(300, headerHeight + sidenavHeight);
        if (bgHeight >= 300 && bgHeight !== lastBgHeight) {
            bgGradientDynamic.style.setProperty('--sidenav-height', bgHeight + 'px');
            lastBgHeight = bgHeight;
        }
    }
}
