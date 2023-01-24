## LEVEL 1 - ответы на вопросы

*1.*

> Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения: пользователя, менеджера проекта, дизайнера, верстальщика, клиентского программиста, серверного программиста. 

Хорошая верстка отличается от плохой с точки зрения:

*Пользователя*: хорошая верстка проста в использовании, навигация по сайту интуитивно понятна, контент отображается корректно на различных устройствах и разрешениях экрана.

*Менеджера проекта*: хорошая верстка позволяет минимизировать риски и обеспечивает соблюдение сроков выполнения проекта.

*Дизайнера*: хорошая верстка соответствует макету и сохраняет дизайнерскую идею.

*Верстальщика*: код легко поддерживать и расширять, соответствует стандартам и лучшим практикам.

*Клиентского программиста*: хорошая верстка имеет хорошо организованный и читаемый код, который легко интегрировать с javascript.

*Серверного программиста*: хорошая верстка имеет чистый код, который соответствует рекомендациям SEO, оптимизированные медиа для уменьшения нагрузки на сервер, легко интегрируется с серверной частью приложения, предоставляя необходимые данные и информацию для динамического отображения на странице.

2.

> Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике. 

Основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки, включают:

- Использование компонентной архитектуры: крупные сайты часто состоят из множества различных элементов, которые можно использовать на различных страницах. Использование компонентной архитектуры позволяет создавать и поддерживать компоненты отдельно друг от друга, что облегчает изменение дизайна и разработку.

- Использование методологий БЭМ или других методологий для создания и организации кода: методологии БЭМ или другие методологии помогают создавать и организовывать код, чтобы он был легко поддерживаемым и масштабируемым.

- Использование систем шаблонизации, таких как Twig, Jinja или Mustache, чтобы упростить разделение логики и представления. Это позволяет отделить код, отвечающий за отображение данных от кода, отвечающего за логику приложения, что упрощает изменение дизайна и поддержку сайта.

- Использование медиа-запросов CSS и адаптивного дизайна, чтобы обеспечить корректное отображение на различных устройствах и разрешениях экрана.

- Использование инструментов для автоматизации, таких как gulp или webpack, чтобы облегчить процесс сборки, минимизации и оптимизации файлов, что повышает производительность сайта.

- Использование ветвления и контроля версий с использованием Git, чтобы отслеживать изменения в коде и управлять версиями сайта.

- Использование инструментов для автоматического тестирования, таких как Selenium или Nightwatch.js, чтобы обеспечить качество кода и снизить вероятность возникновения ошибок.

Какие методологии, инструменты и технологии применяла на практике:
- испоьзование дизайн-систем: это помогает создавать reusable элементы в css и react, и когда нужно что-то быстро обновить, это что-то (а) легко найти, (б) легко и быстро подправить без полного разрушения всего, что строилось неделями/месяцами
- БЭМ методология: в принципе, решает те же проблемы, что описала пунктом выше. БЭМ позволяет создавать reusable элементы, делать код более легким, понятным и читаемым, а также избегать тавтологий (повторов кода). Чем чище код - тем легче его поддерживать.
- Препроцессоры и фреймворки CSS (вроде SASS или BootStrap) - однако, я пришла к выводу, что писать на обыкновенном CSS выигрывает в производительности и скорости обработки.
- Фреймворки JavaScript - я для себя выбрала React, и с помощью него можно легко добиваться и модульности, и пользовательской интерактивности без кода длиной в миллионы строк.
- Использование контроля версий (в частности Git) - тут гланые плюсы заключаются в том, что (а) если что-то пошло не так, можно вернуться к последней стабильной версии, (б) работать параллельно в команде над одной задачей и не разрушать код.
- Инструменты для сборки: WebPack чтобы собирать множество модулей скрипта в один. Еще знаю есть GULP и Grunt, но с ними я еще не знакомилась :) 

3.

>Опишите основные особенности верстки сайтов, которые должны одинаково хорошо  отображаться как на любом современном компьютере, так и на смартфонах и
планшетах под управлением iOS и Android. Расскажите о своем опыте верстки  подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Чтобы сделать сайт отзывчивым, в коде существуют такие вещи как media-queries (@media в CSS), flexbox и fluid css grid. В UI/UX дизайне есть правило mobile-first, которое заключается в том, что начинать дизайн следует с мобильной версии, тк большинство пользователей сегодня заходят на сайты с помощью мобильных устройств. В верстке я все-таки чаще начинаю верстать либо с десктоп версии, либо параллельно для всех версий размера.
Если говорить про особенности верстки, то, с моей точки зрения, вот основные:
- Отзывчивые медиа - с помощью атрибутов srcset, sizes, object-fit и тп отображать ту версию медиа, которая бы наиболее подходила к устройству, с которого просматривают сайт. Тут, кстати, кроется деталь, отличающая верстку под iOS - здесь можно указать, что если, например, сайт просматривают с retina-screen, то стоит подгрузить изображение в 2 раза более pixel-dense, чем стандартная версия (для этого я просто скачиваю изображение в двойном размере, а потом устанавливаю ему необходимые размеры в css файле)
- Еще одна особенность различия в верстке для Android и iOS заключается в дизайнерских стандартах: для Android устройств этот стандарт - гугловский Material UI, для iOS - Human Interface Guidlines. И, если речь уже зашла о дизайне, то для мобильных устройств нужно держать в голове принцип touch-friendly - делать кнопки более крупныи и доступными.
- Для оптимизации производительности можно подключать ленивый рендеринг, так сайт будет быстрее загружаться и рендериться
- Чтобы протестировать, как сайт будет вести себя на разных устройствах, можно либо проверить сайт, собственно, на разных устройствах, либо же просто открыть инструменты разработки внутри браузера (в google chrome это функция inspect)

4.

> Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

WebPack собирает модули скрипта вместе, линтеры (JSHint) подсказывают, где может возникнуть ошибка, Git помогает контролировать версии и в чрезвычайной ситуации откатывать все назад, Jest тестирует код, инструменты разработчика Google Chrome помогают найти сбежавший div, StackOverflow, GitHub и YouTube подсказывают, что куда и где стоит писать :)

5.

>Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?  Сталкивались ли вы с подобными проблемами на практике? 

На практике сама таким не занималась, однако, если бы пришлось, то:
1. Зашла бы в инструменты разработчика браузера и сперва попыталась бы "словить" ошибку в них - с помощью инструментов можно найти, в каком месте DOM возникает неприятность и, тем самым, быстро пофиксить код. А еще инструменты разработчиков разных браузеров помогут понять, в каком месте браузеры по-разному трактуют код. Здесь же можно посмотреть, что отправляется в консоль - может быть, описание ошибки уже лежит там и особенно искать не надо :)
2. Проверить код на то, поддерживается ли он браузерами. IE имеет не самую лучшую репутацию среди браузеров, может быть, что какой-то функционал им просто-напросто не поддерживается.
3. Проверить, все ли в порядке с внешними библиотеками / API / модулями, использумыми на сайте (все еще ли они поддерживаются, сталкивались ли другие разработчики с такими же проблемами и тп)
4. Ну и, конечно же, гуглить, если что-то осталось неразрешенным!

6. 

>Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Я бы начала верстать, что есть в макете, добавляя cursor: pointer при наведении мыши на интерактивные элементы, чтобы хоть как-то было понятно, что они интерактивные. Параллельно я бы связалась с дизайнером (лично или через продакта) и уточнила бы этот вопрос - действительно ли так и предполагалось, или же он забыл включить элементы в дизайн. Если же все горит а дизайн нужен, то я бы могла сама "доработать" дизайн - раньше я работала в UI/UX и имею художественное образование, фигмой пользоваться умею и верстать по ее макетам тоже!

7.

>Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

Не думаю, что использую что-то экстраординарное: обучаюсь в основном по YouTube видео, ищу ответы на вопросы на Гитхабе или StackOverflow (бывает еще Habr, если совсем ничего не нашла). Изначально коду я училась в freeCodeCamp, теперь практикуюсь сама либо решаю задачки на CodeWars / LeetCode. Когда изучала React, пользовалась официальной документацией. Еще один ресурс, который могу привести - NeetCode - там мужчина очень хорошо объясняет то, как работают разные алгоритмы и как их использовать и оптимизировать.

>Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или что-то ещё?

Из представленного я бы выбрала JS программирование - мне больше нравится внедрение алгоритмов и использование фреймворков :)

>Какие еще области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Это сложный и очень обширный вопрос! Поделю ответ на две части:

связанное с программированием и компьютерами:
- искуственный интеллект
- дополненная и виртуальная реальность
- data-science

не связанное с программированием и компьютерами:
- изучение языков (я свободно владею английским, на среднем уровне немецким (B1-B2), на начальном уровне японским (A2) и на элементарном уровне корейским)
- музыка (играю на 4 музыкальных инструментах и пою, чем вызываю возмущение соседей...)
- рисование (я увлекаюсь digital артом, рисую на графическом планшете и какой-то период своей жизни зарабатывала рисованием на заказ)
- фундаментальные науки (читать большие теоретические книги из разных областей знаний и потом сидеть с важным видом объяснять младшей сестре что такое теория относительности и почему эйнштейн был сдвгшником и тд)

8.

>Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Меня зовут Софья Вибе, мне 22 года, родилась и живу в России. В этом году получила степень бакалавра в исследованиях коммуникаций и сразу же после выпускного в воздухе начала переобуваться в совершенно другую специальность. Последние полгода я полностью посвятила себя веб-разработке, самостоятельно освоила огромные пласты информации и научилась строить вебсайты и приложения с помощью JS и ReactJS. Я не останавливаюсь на достигнутом: в ближайших планах освоить фреймворки Vue.js, Angular и Next.js, а также выучить Python и SQL для работы с данными и бэкендом. Своими главными преимуществами считаю очень быструю обучаемость, любознательность и самостоятельность: в короткие сроки я могу выучить что-то совершенно новое, самостоятельно с помощью этого что-то построить и при этом не выгореть. Я умею работать в команде, соблюдать сроки и вести здоровую коммуникацию.

Все свои работы я выкладываю в свой гитхаб - все проекты оформлены и задеплоены на github pages: https://github.com/sonyavibe


##LEVEL 2 - практическое задание

ссылка -> 
исходный код находится в этом репозитории в папке cat-food
