const express = require('express')
const mysql = require('mysql');
const app = express()

// Соединение с базой данных
const connection = mysql.createConnection({
  host: "127.0.0.1",
  database: "pin",
  user: "root",
  password: "secret"
});

connection.connect(function (err) { if (err) throw err; });

// Путь к директории файлов ресурсов (css, js, images)
app.use(express.static('public'))

// Настройка шаблонизатора
app.set('view engine', 'ejs')

// Путь к директории файлов отображения контента
app.set('views', path.join(__dirname, 'views'))

// Обработка POST-запросов из форм
app.use(express.urlencoded({ extended: true }))

// Инициализация сессии
app.use(session({secret: "Secret", resave: false, saveUninitialized: true}));


// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000)

/** * Маршруты*/
app.get('/', (req, res) => {
  connection.query("SELECT * FROM dada", (err, data, fields) => {
    if (err) throw err;

    res.render('home', {
      items: data,
    });
  });
})
