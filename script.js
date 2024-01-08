$(function(){

// AjaxでSTATIC FORMSにデータを送信
$('#submit').on('click', function (event) {
    // formタグによる送信を拒否

  
    // 入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();
    event.preventDefault();
         // エラー判定とメッセージを取得
         let error = result.error;
         let message = result.message;


              // エラーが無かったらフォームを送信する
     if (error == false) {
        // Ajaxでformを送信する
        $.ajax({
            url: 'https://formspree.io/f/mjvnvlkd',
            type: 'POST',
            dataType: 'json',
            data: $('#form').serialize(),
            success: function (result) {
              alert('お問い合わせを送信しました。')
            },
            error: function (xhr, resp, text) {
              alert('お問い合わせを送信できませんでした。')
            }
          })

      } else {
        // エラーメッセージを表示する
        alert(message);
      }
  });

   // フォーカスが外れたとき（blur）にフォームの入力チェックをする
   $('#name2').blur(function () {
     inputCheck();
   });
   $('#furigana').blur(function () {
     inputCheck();
   });
   $('#email').blur(function () {
     inputCheck();
   });
   $('#tel').blur(function () {
     inputCheck();
   });
   $('#message').blur(function () {
     inputCheck();
   });



  //お問い合わせフォームの入力チェック
  function inputCheck() {
       // エラーのチェック結果
       let result;
 
       // エラーメッセージのテキスト
       let message = '';
   
       // エラーがなければfalse、エラーがあればtrue
       let error = false;

       //お名前のチェック
       if ($("#name2").val() == ""){
        //エラーあり
        $("#name").css("background-color", "#f79999")
        error = true;
        message += "お名前を入力してください。\n";

       } else{
        //エラーなし
        $('#name').css('background-color', '#fafafa');
       }

            // フリガナのチェック
     if ($('#furigana').val() == '') {
        // エラーあり
        $('#furigana').css('background-color', '#f79999');
        error = true;
        message += 'フリガナを入力してください。\n';
      } else {
        // エラーなし
        $('#furigana').css('background-color', '#fafafa');
      }
  
      // お問い合わせのチェック
      if ($('#message').val() == '') {
        // エラーあり
        $('#message').css('background-color', '#f79999');
        error = true;
        message += 'お問い合わせ内容を入力してください。\n';
      } else {
        // エラーなし
        $('#message').css('background-color', '#fafafa');
      }

           // メールアドレスのチェック
     if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
        // エラーあり
        $('#email').css('background-color', '#f79999');
        error = true;
        message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
      } else {
        // エラーなし
        $('#email').css('background-color', '#fafafa');
      }

           // 電話番号のチェック
      if ($('#tel').val() == '') {
        // エラーあり
        $('#tel').css('background-color', '#f79999');
        error = true;
        message += '電話番号を入力してください。\n';
      } else {
        // エラーなし
        $('#tel').css('background-color', '#fafafa');
      }

      


           // エラーの有無で送信ボタンを切り替え
           if (error == true) {
            $('#submit').attr('src', 'image/image22.png');
          } else {
            $('#submit').attr('src', 'image/image21.png');
          }

           // オブジェクトでエラー判定とメッセージを返す
     result = {
        error: error,
        message: message,
      }
  
      // 戻り値としてエラーがあるかどうかを返す
      return result;

    }
  });


    $(function(){
        $(".image10").on("mouseover", function(){
            $(this).animate({
                opacity:0.5,
                paddingLeft:20,
            },100);
        });
        $(".image10").on("mouseout", function(){
            $(this).animate({
                opacity:1.0,
                paddingLeft:0,
            },100);
        });
    
        $(".image10-1").on("mouseover", function(){
            $(this).animate({
                opacity:0.5,
                paddingLeft:20,
            },100);
        });
        $(".image10-1").on("mouseout", function(){
            $(this).animate({
                opacity:1.0,
                paddingLeft:0,
            },100);
        });
    });
    


    if (window.matchMedia('(min-width: 768px)').matches) {
      // ウィンドウサイズ768px以上のときの処理

    /*スクロール時に反応*/
    
    window.addEventListener("scroll",function(){
        const elm = document.getElementById("About");
        const scroll = this.window.pageYOffset;
    
        if(scroll>350){
            elm.classList.add("active");
        } else {
            elm.classList.remove("active");
        }
    });
    
    window.addEventListener("scroll",function(){
        const elm = document.getElementById("Safe");
        const scroll = this.window.pageYOffset;
    
        if(scroll>600){
            elm.classList.add("active");
        } else {
            elm.classList.remove("active");
        }
    });
    
    window.addEventListener("scroll",function(){
        const elm = document.getElementById("Flexbox2");
        const scroll = this.window.pageYOffset;
    
        if(scroll>850){
            elm.classList.add("active");
        } else {
            elm.classList.remove("active");
        }
    });

  } else {
    // それ以外の処理

    window.addEventListener("scroll",function(){
      const elm = document.getElementById("About");
      const scroll = this.window.pageYOffset;
  
      if(scroll>20){
          elm.classList.add("active");
      } else {
          elm.classList.remove("active");
      }
  });
  
  window.addEventListener("scroll",function(){
      const elm = document.getElementById("Safe");
      const scroll = this.window.pageYOffset;
  
      if(scroll>150){
          elm.classList.add("active");
      } else {
          elm.classList.remove("active");
      }
  });
  
  window.addEventListener("scroll",function(){
      const elm = document.getElementById("Flexbox2");
      const scroll = this.window.pageYOffset;
  
      if(scroll>250){
          elm.classList.add("active");
      } else {
          elm.classList.remove("active");
      }
  })
};




/*ハンバーガー*/
$(function() {
  $('.Toggle').click(function() {
     $(this).toggleClass('active');
    $('.menu').toggleClass('open');

    // 以下の行を追加してbody要素にクラスをトグルする
    $('body').toggleClass('menu-open');
   });
});

// ドキュメントが読み込まれたら実行
$(document).ready(function() {
  // ページが読み込まれたときに.openクラスを削除
  $('.menu').removeClass('open');
});


// トグルフェードアウト
window.addEventListener("scroll", function() {
  const elms = document.getElementsByClassName("Toggle");
  const scroll = this.window.pageYOffset;

  for (let i = 0; i < elms.length; i++) {
    if (scroll > 20) {
      elms[i].classList.add("inactive");
    } else {
      elms[i].classList.remove("inactive");
    }
  }
});
