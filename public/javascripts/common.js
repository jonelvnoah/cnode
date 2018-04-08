(function(global){

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
})
