import $ from "jquery";

try {
    document.querySelector('.questionForm').addEventListener('submit', (e) => {
        e.preventDefault();
    
        let formData = {
            name: e.target.querySelector('#fio').value.trim(),
            phone: e.target.querySelector('#phone').value.trim(),
            email: e.target.querySelector('#email').value.trim()
        }
    
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneRegex = /^\d{10,11}$/;
    
        if (formData.name != '') {
            console.log('Успешно прошло');
        } else {
            $('.error-message').text('Введите имя')
            return false;
        }
    
        if (phoneRegex.test(formData.phone)) {
            console.log('Успешно прошло');
        } else {
            console.log('Введите корректный номер телефона');
            $('.error-message').text('Введите корректный номер телефона');
            return false;
        }
    
        if (emailRegex.test(formData.email)) {
            console.log('Успешно прошло');
        } else {
            console.log('Введите корректный адрес email');
            $('.error-message').text('Введите корректный адрес email');
            return false;
        }
    
        $.ajax({
            url: 'static/index.php',
            type: 'POST',
            data: formData,
            success: (data) => {
                console.log(data);
                $('.questionForm').hide();
                $('.error-message').text('');
                $('.success-message').text('Данные успешно отправлены!').show();
            },
            error: (xhr, status, error) => {
                console.error("Ошибка: " + xhr.status + " " + error);
            }
        });
    
    })
    
} catch(e) {}
