# Создание проекта node.js + google sheet (google таблицы)

Гайд - https://www.youtube.com/watch?v=Bf8KHZtcxnA

Консоль разработчика - https://console.cloud.google.com/cloud-resource-manager

1. Создаём новый проект
2. Проходим по _гайду_
3. В разделе service Account в поле keys создаём ключ типа json
4. Переносим файл в папку проекта
5. Создаём таблицу
6. В настройках доступа даём доступ созданному аккаунту на редактирование
7. Из url-а таблицы достаём ключ
   1. пример ссылки - https://docs.google.com/spreadsheets/d/95ZtAx7EgwevFt3c9RQd6yVr4B1KI47/edit#gid=0
   2. пример ключа - 95ZtAx7EgwevFt3c9RQd6yVr4B1KI47
