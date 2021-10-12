import ipad_pro from '../images/ipad_pro.png';

function addImage() {
    const body = document.querySelector('body');
    const img = document.createElement('img');
    img.alt = 'ipad_pro';
    img.width = 185;
    img.height = 212;
    img.src = ipad_pro;
    body.appendChild(img);
}
export default addImage; // add-image.js