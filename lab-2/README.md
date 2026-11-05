# ЛР-2. Компоненти, дерево компонентів і пропси

Стартовий проєкт лабораторної роботи № 2 курсу «Розробка вебзастосунків на
React»: сторінка «Команда проєкту». Інструкція:
https://denysmatsevych.github.io/web-development-2026/react/labs/lab-2/

У проєкті вже є налаштування ESLint і Prettier з ЛР-1, стилі сторінки
(`src/index.css`), дані команди (`src/data.js`) і аватари
(`public/avatars/`). Компоненти ви пишете самі, у теці `src/components/`.

## Команди

`npm install` виконуйте в корені репозиторію `react-labs`, решту — у теці
`lab-2/`:

- `npm run dev`: dev-сервер на http://localhost:5173
- `npm run lint`: ESLint
- `npm run format:check`: перевірка форматування Prettier
- `npm run build`: production-збірка в `dist/`

## Дерево рендерингу

Заповніть за вкладкою **Components ⚛** у React DevTools (§4.6).

```mermaid
graph TD;
    App-->Header;
    App-->Card1["Card (Тімлід)"];
    Card1-->Avatar1["Avatar (size: 120)"];
    App-->Card2["Card (Команда)"];
    Card2-->Profile1["Profile (key: 1)"];
    Profile1-->Avatar2["Avatar"];
    Card2-->Profile2["Profile (key: 2)"];
    Profile2-->Avatar3["Avatar"];
    Card2-->Profile3["Profile (key: 3)"];
    Profile3-->Avatar4["Avatar"];
    Card2-->Profile4["Profile (key: 4)"];
    Profile4-->Avatar5["Avatar"];
```

## Дерево залежностей модулів

Заповніть за рядками `import` у файлах `src/` (§4.6).

```mermaid
graph TD;
    main["main.jsx"]-->index["index.css"];
    main-->App["App.jsx"];
    App-->Header["Header.jsx"];
    App-->Avatar1["Avatar.jsx"];
    App-->Card["Card.jsx"];
    App-->data["data.js"];
    App-->Profile["Profile.jsx"];
    Profile-->Avatar2["Avatar.jsx"];
```
