let container, child, lastHeight;

document.addEventListener('DOMContentLoaded', () => {
    container = document.querySelector('[data-contain]');
    console.log('contain', container.dataset.contain);
    child = document.querySelector(container.dataset.contain);
    console.log(container, child);
    updateBgSize();
    const nav = $('#nav');
    nav.on('shown.bs.collapse', updateBgSize);
    nav.on('hidden.bs.collapse', updateBgSize);
});


window.addEventListener('resize', updateBgSize);

function updateBgSize() {
    if (container && child) {
        let childBottom = child.getBoundingClientRect().bottom;
        let newHeight = Math.max(300, childBottom);
        if (newHeight >= 300 && newHeight !== lastHeight) {
            container.style.backgroundSize = '100% ' + newHeight + 'px';
            lastHeight = newHeight;
        }
    }
}
