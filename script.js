/**
 * Переключение блоков с описаниями карточек
 */
if (document.querySelector('.descrition-btn')) {
    const btnDescription = document.querySelector('.btn__description'),
    btnCharacteristic = document.querySelector('.btn__characteristic'),
    btnSize = document.querySelector('.btn__size'),
    descritionMain = document.querySelector('.descrition-main__description'),
    characteristicMain = document.querySelector('.descrition-main__characteristic'),
    sizeMain = document.querySelector('.descrition-main__size');

    btnDescription.onclick = () => {
        btnDescription.style.color = 'black';
        btnDescription.style.borderBottom = '1px solid black';
        descritionMain.style.display = 'flex';
        btnCharacteristic.style.color = '#838383';
        btnCharacteristic.style.borderBottom = 'none';
        characteristicMain.style.display = 'none';
        btnSize.style.color = '#838383';
        btnSize.style.borderBottom = 'none';
        sizeMain.style.display = 'none';
    }

    btnCharacteristic.onclick = () => {
        btnDescription.style.color = '#838383';
        btnDescription.style.borderBottom = 'none';
        descritionMain.style.display = 'none';
        btnCharacteristic.style.color = 'black';
        btnCharacteristic.style.borderBottom = '1px solid black';
        characteristicMain.style.display = 'flex';
        btnSize.style.color = '#838383';
        btnSize.style.borderBottom = 'none';
        sizeMain.style.display = 'none';
    }

    btnSize.onclick = () => {
        btnDescription.style.color = '#838383';
        btnDescription.style.borderBottom = 'none';
        descritionMain.style.display = 'none';
        btnCharacteristic.style.color = '#838383';
        btnCharacteristic.style.borderBottom = 'none';
        characteristicMain.style.display = 'none';
        btnSize.style.color = 'black';
        btnSize.style.borderBottom = '1px solid black';
        sizeMain.style.display = 'flex';
    }
}

/**
 * Слайдер карточки
 */
if (document.querySelector('.dots-product')) {
    const boxImages = document.querySelector('.boxImages');

    document.querySelector('.dotImages1').onclick = () => {
        boxImages.setAttribute('src', document.querySelector('.dotImages1').getAttribute('src'));
    }

    document.querySelector('.dotImages2').onclick = () => {
        boxImages.setAttribute('src', document.querySelector('.dotImages2').getAttribute('src'));
    }

    document.querySelector('.dotImages3').onclick = () => {
        boxImages.setAttribute('src', document.querySelector('.dotImages3').getAttribute('src'));
    }

    document.querySelector('.dotImages4').onclick = () => {
        boxImages.setAttribute('src', document.querySelector('.dotImages4').getAttribute('src'));
    }

    const imgPrev = document.querySelector('.img-prev'),
    btnImgClose = document.querySelector('.btn-img-close'),
    imgPrevBoxImg = document.querySelector('.img-prev-box__img');

    boxImages.onclick = () => {
        imgPrev.style.display = 'flex';
        imgPrevBoxImg.setAttribute('src', document.querySelector('.boxImages').getAttribute('src'));
    }

    btnImgClose.onclick = () => {
        imgPrev.style.display = 'none';
    }
}

/**
 * слайдер
 */
if (document.querySelector('.home-popular-products')) {
    const sliderLeftBtn = document.querySelector('.home-slider-btns_left'),
    sliderRightBtn = document.querySelector('.home-slider-btns_right');

    sliderLeftBtn.onclick = () => {
        let x = document.querySelector('.home-popular-products__main-card').offsetWidth;
        document.querySelector('.home-popular-products__main-slider').scrollBy('-' + x, 0);
    }

    sliderRightBtn.onclick = () => {
        let x = document.querySelector('.home-popular-products__main-card').offsetWidth;
        document.querySelector('.home-popular-products__main-slider').scrollBy(x, 0);
    }
}

/**
 * диапазон цен
 */
if (document.querySelector('.range-line')) {
    const minPrice = document.querySelector('#minPrice'),
          maxPrice = document.querySelector('#maxPrice'),
          rangeValuesMin = document.querySelector('.range-values__min'),
          rangeValuesMax = document.querySelector('.range-values__max');
 
    minPrice.oninput = () => {
        rangeValuesMin.innerHTML = minPrice.value;
    } 

    maxPrice.oninput = () => {
        rangeValuesMax.innerHTML = maxPrice.value;
    } 
}
