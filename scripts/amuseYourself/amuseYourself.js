$(function(){
  resetName();
})
// 解决输入框失去焦点后无法回弹
function temporaryRepair() {
  var currentPosition, timer;
  var speed = 1; //页面滚动距离
  timer = setInterval(function() {
    currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    currentPosition -= speed;
    window.scrollTo(0, currentPosition); //页面向上滚动
    currentPosition += speed; //speed变量
    window.scrollTo(0, currentPosition); //页面向下滚动
    clearInterval(timer);
  }, 1);
}

//设置名字
function setName() {
  // $('#otherWrap').toggleClass('active');
  if($('#otherWrap').hasClass('active')){
    $('#otherWrap').removeClass('active');
    $('.masker').hide();
  } else {
    $('#otherWrap').addClass('active');
    $('.masker').show();
  }
}

// 设置其他人员的名称
var nameZH = [];  //中文
var nameEN = [];  //英文
function addOtherName() {
  var newNameZH = $('#nameInputZH').val();
  var newNameEN = $('#nameInputEN').val();
  if(newNameZH && newNameEN) {
    // 中文
    if($.inArray(newNameZH, nameZH) < 0) {
      nameZH.push(newNameZH);
      nameEN.push(newNameEN);
      var charItem = '<li class="char-item" onclick="chooseChar(this)">' + newNameEN + '</li>';
      $('#charWrap').append(charItem);
    }
    $('#nameInput').val("");
  } else {
    alert('请将中英文名填写完整');
  }
}

// 重置其他人员的名称
function resetName() {
  nameZH = [];
  nameEN = [];
  $('#charWrap').html('<li class="char-item" onclick="chooseChar(this)">sf</li>');
  charSign = 0;
}

// 人物名称
var currNameEN = 'sf';
var currNameZH = '本人';
// 人物标识
var charSign = 0;
function showChars() {
  // $('#charBox').toggleClass('active');
  if($('#charBox').hasClass('active')){
    $('#charBox').removeClass('active');
    $('.masker').hide();
  } else {
    $('#charBox').addClass('active');
    $('.masker').show();
  }
}
function chooseChar(obj){
  currNameEN = $(obj).text();
  $.each(nameEN, function(i,n){
    if(currNameEN == n){
      currNameZH = nameZH[i];
    }
  })
  if(currNameEN != 'sf') {
    charSign = 1;
  } else {
    charSign = 0;
  }
  showChars();
}

// 发送内容
function addCont() {
  /**
   * 判断当前是否是本人
   * charSign: 0; 本人
   */
  
  //输入的内容
  var currTxt = $.trim($('#simInput').text());
  if(currTxt != '') {
    var str = ''
    if(charSign == 0) {
      str += '<div class="mainBox mainPerson">';
    } else {
      str += '<div class="mainBox">';
    }
    str += '<div class="clearfix">'
        +    '<div class="nameImg">'
        +      '<img src="../images/amuseYourself/' + currNameEN + '.jpg" />'
        +    '</div>'
        +    '<div class="tdBox">';
    // 判断当前是否需要显示其他成员名称
    if(isShowName == true) {
      str += '<p class="name show">' + currNameZH + '</p>';
    } else {
      str += '<p class="name">' + currNameZH + '</p>';
    }
    str += '<div class="textDiv">';
    if(charSign == 0) {
      str += '<p class="content1">' + currTxt + '</p>';
    } else {
      str += '<p class="content">' + currTxt + '</p>';
    }
    str += '</div></div></div></div>';
    $('#main').append(str);
    var h = $('#main')[0].scrollHeight;
    // console.log(h)
    $('#main').scrollTop(h);
    $('#simInput').html('');
  }
}

//显示所有的其他人的名称
var isShowName = false; //默认不显示其它成员名称
function showName() {
  if(isShowName) {
    $('.name').fadeOut();
    $('.name').removeClass('show');
    isShowName = false;
  } else {
    $('.name').fadeIn();
    isShowName = true;
  }
  $(".mainPerson .name").css('display', 'none');
}

//点击背景隐藏全部
function hideAll() {
  $('#otherWrap').removeClass('active'); // 隐藏输入其他人员名称
  $('#charBox').removeClass('active'); // 隐藏选择其他人员名称
  $('.masker').hide(); // 隐藏遮罩层
}