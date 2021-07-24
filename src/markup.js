import menuList from './menu.json';
import cardTemplate from './templates/cardTemplate.hbs';


const gallery = document.querySelector('.js-menu');

function createMenu  (menuList){
	return menuList.map(cardTemplate).join('')
}

const itemGallery = createMenu(menuList)

gallery.insertAdjacentHTML('beforeend',itemGallery )

