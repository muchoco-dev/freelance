$(function () {
    // headerテンプレート読み込み
    $('.header').load('header.html');

    // SP用メニューの開閉
    $('.drawer-menu-btn').on('click', function () {
        $('.navbar__nav__menu').toggleClass('show');
    });
})
