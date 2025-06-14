## Housing Price Prediction Model

Лекции и тех задание на семинары доступны на [Я.диске](https://disk.yandex.ru/d/vDb3HPumZ2xK0w)  

Ссылки на свои репо присылайте на ailabintsev@fa.ru  

### Описание проекта
Проект направлен на создание модели машинного обучения для прогнозирования цен на жилье. Модель использует различные характеристики объектов недвижимости для предсказания их рыночной стоимости.

### Структура проекта
```
house-price-prediction/
├── data/
│   ├── raw/                # Исходные данные
│   ├── processed/          # Обработанные данные
├── models/                 # Обученные модели
├── notebooks/             # Jupyter notebooks
│   ├── EDA.ipynb
│   └── train.ipynb
│   service/
│   ├── templates/
│   │   └── index.html
│   ├── app.py
│   └── flask.log
├── src/                   
│   ├── cian_parse.py
│   └── lifecycle.py           
├── requirements.txt       # Требования к зависимостям
└── README.md
```

### Архитектура сервиса ПА
![](img/arch.png)

### Данные
Используемые данные включают следующие характеристики:
* Площадь жилья
* Количество комнат
* Этажей в доме
* Этаж квартиры

### Как запустить
1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/housing_price_prediction.git
```

2. Установите зависимости:
```bash
pip install -r requirements.txt
```

3. Запустите Jupyter Notebook:
```bash
jupyter notebook
```

### Модели машинного обучения
* **XGBoost** - экстремальный градиентный бустинг

### Метрики оценки
* **Mean Absolute Error (MAE)**
* **Mean Squared Error (MSE)**
* **Root Mean Squared Error (RMSE)**
* **R² Score**

### Результаты
После обучения модели достигаются следующие результаты:
* MAE (×10⁶): 11.40
* MSE (×10¹⁴): 2.291
* RMSE (×10⁶): 15.14
* R² Score: 0.7225

### Как использовать модель
1. Загрузите данные в формате CSV
2. Обработайте данные с помощью предобработчиков
3. Загрузите обученную модель
4. Сделайте предсказания

### Команда
* **Data Scientist**: Горячкин Вадим
* **ML Engineer**: Горячкин Вадим
* **Product Manager**: Горячкин Вадим

### Лицензирование
Этот проект распространяется под лицензией MIT. Смотрите файл LICENSE для деталей.

### Контакты
Для вопросов и предложений обращайтесь:
* Email: your.email@example.com
* GitHub: @yourusername
* LinkedIn: linkedin.com/in/yourusername
