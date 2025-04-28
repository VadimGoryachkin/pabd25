// Функция для отправки данных на сервер
async function submitForm() {
    // Получение значений полей
    const area = document.querySelector('#area').value.trim();
    const rooms = document.querySelector('#rooms').value.trim();
    const totalFloors = document.querySelector('#totalFloors').value.trim();
    const floor = document.querySelector('#floor').value.trim();

    if (!isValid(area)) return showError("Площадь должна быть числом больше нуля");
    if (!isValid(rooms)) return showError("Количество комнат должно быть целым числом больше нуля");
    if (!isValid(totalFloors)) return showError("Общее количество этажей должно быть целым числом больше нуля");
    if (!isValid(floor)) return showError("Номер этажа должен быть целым числом больше нуля");

    // Форматируем объект для передачи на сервер
    const data = {
        area: parseFloat(area),
        rooms: parseInt(rooms),
        total_floors: parseInt(totalFloors),
        floor: parseInt(floor)
    };

    try {
        const response = await fetch('/api/numbers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById('response').innerHTML = '<strong>Ответ сервера:</strong> ' + JSON.stringify(result);
    } catch (err) {
        console.error(err);
        document.getElementById('response').innerHTML = '<span style="color: red;">Произошла ошибка при отправке данных.</span>';
    }
}

// Проверяем валидность числа
function isValid(value) {
    return !Number.isNaN(parseFloat(value)) && value > 0;
}

// Показываем сообщение об ошибке
function showError(message) {
    alert(message);
    return false;
}