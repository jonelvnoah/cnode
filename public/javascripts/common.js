(function(global){

  var util = {
  global.ajax = function(config){

    var type = config.type || 'GET';
    var url = config.url;
    var success = config.success;
    var fail = config.fail;
    var xhr = new XmlHttpRequest();

    xhr.open(type,url,true)


    if (type === 'GET') {
      xhr.send(null)
    }else{
      xhr.send(data)
    }

    xhr.onreadystatechange = function(){
      if( xhr.status === 200){
        success(xhr.responseText)
      }else{
        fail(xhr.responseText)
      }
    };

  };

})(window)

window.ajax({
  type: 'POST',
  url: '/api/login',
  success: function(resp){
    alert('Success!');
  },
  fail: function(resp){
    alert('Fail!')
  }

  var navLoginItem = document.querySeletor('#nav-login-item > a');
  var loginDropdown = document.getElementById('user-login-dropdown');
  var loginButton = document.getElementById('login-button');
  var loginInput = document.getElementById('input-token');
  var loginUserInfo = document.querySeletor('.login-user-info');
  var loginUserAvatar = document.querySeletor('.login-user-avatar');
  var loginUserName = document.querySeletor('.login-user-name');
  var notLogin = document.querySeletor('.not-login')
  navLoginItem.addEventListener('click',function(e){
    e.preventDefault();
    var display = loginDropdown.style.display
    if(e.target)
      display === 'block';
    else{
      display === 'none';
    }
  })

  loginButton.addEventListener('click',function(e){
    e.preventDefault();
    var token = loginInput.value;
    util.ajax({
      type: 'POST',
      url: '/api/login',
      data: {
        accesstoken: token;
      },
      success: function(user){
        if(user.success){
          window.location.reload();
        }
      }
    })
  })
})
