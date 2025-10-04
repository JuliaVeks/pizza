window.onload = function () {


    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    }

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })

    document.getElementById('choose-pizza').onclick = function () {
        document.getElementsByClassName('products')[0].scrollIntoView({behavior: 'smooth'});
    }

    let productInput = document.getElementById('product-input');
    let addToCardButtons = document.getElementsByClassName('btn-add-to-cart');

    for (let i = 0; i < addToCardButtons.length; i++) {
        addToCardButtons[i].onclick = function (e) {
            productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            document.getElementsByClassName('order')[0].scrollIntoView({behavior: 'smooth'});

        }
    }

    document.getElementById('create-order').onclick = function () {
        let addressInput = document.getElementById('address-input');
        let phoneInput = document.getElementById('phone-input');


        if (!productInput.value) {
            alert('Please enter a pizza');
            return;
        }

        if (!addressInput.value) {
            alert('Please enter an address');
            return;
        }

        if (!phoneInput.value) {
            alert('Please enter a phone number');
            return;
        }

        alert('Thank you for your order!');

    }
}