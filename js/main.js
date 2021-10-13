$(function () {
    // headerテンプレート読み込み
    $('.header').load('header.html');

    // SP用メニューの開閉
    $(document).on('click', '.drawer-menu-btn', function () {
        const btn = $('.drawer-menu-btn');
        if (btn.text() == 'close') {
            btn.text('menu');
        } else {
            btn.text('close');
        }

        $('.navbar__nav__menu').toggleClass('show');
    });
});
