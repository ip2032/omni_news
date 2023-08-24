$( document ).ready(function() {
    /**
     * Ваш сайт, для примеров работы с запросами
     */
    var URL = 'http://example.com';

    /**
     * Некоторые переменные, доступные в глобальной видимости Омнидеска:
     * CurrentCaseId
     * CurrentUserId
     * CurrentStaffId
     * CurrentClientId
     *
     * Данные в этих переменных уже можно использовать чтобы получить более развернутый результат по API Омнидеска
     * https://omnidesk.ru/api/introduction/intro
     */

    var STAFF_ID = CurrentStaffId;

    /**
     * Некоторые селекторы для примеров
     */

    var HORIZONTAL_MENU_SELECTOR = '.header-container';
    var HORIZONTAL_MENU_BUTTONS_SELECTOR = '.global-actions > .global-actions-list:last-child';
    var HORIZONTAL_MENU_ELEMENTS_SELECTOR = '.primary-nav';

    var TOP_PANEL_SELECTOR = '#alpha1_panel';
    var RECORD_SELECTOR = '.req-tr.req-data-row';
    var RECORD_INFO_SELECTOR = '.req-td.req-inf';

    /** HELPERS */

    /**
     * Проверяем на undefined
     */
    var checkNotUndefined = function(data) {
        return (typeof data === 'undefined') ? false : true;
    }


    /**
     * Вставка в конец или в начало элемента
     */
    var addCode = function(selector, htmlCode, after) {
        var element = $(selector);

        if(checkNotUndefined(after) === true && after === true) {
            element.append(htmlCode);
        } else {
            element.prepend(htmlCode);
        }
    };

    /** EXAMPLES */

    /**
     * Добавляем кастомную информацию над списком обращений
     *
     * Сначала заголовок
     */

    addCode(
        TOP_PANEL_SELECTOR,
        `<div style="color:red;">
            <strong>Данные Example</strong>
        </div>`,
        true
    );

    /**
     * Пример добавления пункта в меню
     * Результат в коде Омнидеска https://www.dropbox.com/s/ymscgj7q7loj09o/02_custom_menu_item.png?dl=0
     */
    addCode(
        HORIZONTAL_MENU_ELEMENTS_SELECTOR,
        `<li class="nav-item nav-item-companies inlb">
            <a class="nav-item-url " href="#example">Example</a>
        </li>`,
        true
    );

    /**
     * Пример добавления кнопки в блоках справа
     * Результат в коде Омнидеска https://www.dropbox.com/s/i0orxacnfrjwtwo/03_custom_button_in_header.png?dl=0
     */
    addCode(
        HORIZONTAL_MENU_BUTTONS_SELECTOR,
        `<li class="global-action-item inlb force-login" title="Example">
            <a class="nav-item-url" href="#example">
                <i class="icon fi-star"></i>
            </a>
        </li>`,
        false
    );


     /**
      * Добавляем в горизонтальное меню цвета своей компании
      * Результат в коде Омнидеска https://www.dropbox.com/s/3vtzym61el1659z/04_custom_styles.png?dl=0
      * Результат на странице https://www.dropbox.com/s/hfo696yiffw455a/04_2_custom_styles.png?dl=0
      */
     $(document).find(HORIZONTAL_MENU_SELECTOR).css({
         'border-bottom': 'solid 2px red',
     });
});
