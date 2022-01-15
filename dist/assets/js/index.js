(function () {
  'use strict';

  jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる
    var topBtn = $('.pagetop');
    topBtn.hide(); // ボタンの表示設定

    $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
      }
    }); // ボタンをクリックしたらスクロールして上に戻る

    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 300, 'swing');
      return false;
    }); //ドロワーメニュー

    $("#MenuButton").click(function () {
      // $(".l-drawer-menu").toggleClass("is-show");
      // $(".p-drawer-menu").toggleClass("is-show");
      $(".js-drawer-open").toggleClass("open");
      $(".drawer-menu").toggleClass("open");
      $("html").toggleClass("is-fixed");
    }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

    $(document).on('click', 'a[href*="#"]', function () {
      var time = 400;
      var header = $('header').innerHeight();
      var target = $(this.hash);
      if (!target.length) return;
      var targetY = target.offset().top - header;
      $('html,body').animate({
        scrollTop: targetY
      }, time, 'swing');
      return false;
    });
    $(function () {
      $(document).ready(function () {
        $('.search-detail__item--default').addClass('active');
        $('.search-tab__default').addClass('show');
      });
    }); //Topページの案件検索タブ②

    $(function () {
      $('.search-detail__item').click(function () {
        //現在activeが付いているクラスからactiveを外す
        $('.active').removeClass('active'); //クリックされたタブメニューにactiveクラスを付与。

        $(this).addClass('active'); //一旦showクラスを外す

        $('.show').removeClass('show'); //クリックしたタブのインデックス番号取得

        var index = $(this).index(); //タブのインデックス番号と同じコンテンツにshowクラスをつけて表示する

        $('.search-tab').eq(index).addClass('show');
      });
    });
  }); // 案件検索ページサイドバーのアコーディオンメニュー

  var parentMenu = document.querySelectorAll(".search-select__item > a");

  for (var i = 0; i < parentMenu.length; i++) {
    parentMenu[i].addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    });
  } // Topページの案件を探すタブ①


  document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.search-check__item > a');
    var contents = document.querySelectorAll('.search-check-tab__items');

    var _loop = function _loop(_i) {
      tabs[_i].addEventListener("click", function (e) {
        e.preventDefault();

        for (var j = 0; j < tabs.length; j++) {
          if (tabs[_i] !== tabs[j]) {
            tabs[j].classList.remove("active");
          }
        }

        for (var _j = 0; _j < contents.length; _j++) {
          if (contents[_i] !== contents[_j]) {
            contents[_j].classList.remove("open");
          }
        }

        tabs[_i].classList.toggle('active');

        contents[_i].classList.toggle('open');
      });
    };

    for (var _i = 0; _i < tabs.length; _i++) {
      _loop(_i);
    }
  }); // faqページアコーディオン

  $(".faq-list dd").hide();
  $(".faq-list dl").on("click", function (e) {
    $('dd', this).slideToggle('fast');

    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  }); // ハンバーガーメニュー開閉

  $(function () {
    $('.hamburger').click(function () {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
        $('.global-nav').addClass('active');
      } else {
        $('.global-nav').removeClass('active');
      }
    });
  });
  var menuItemLabel = $(".global-nav__item span");
  menuItemLabel.on("click", function () {
    $(this).next().children().toggleClass("active");
  });

}());
