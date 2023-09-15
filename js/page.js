function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

  $().ready(function(){
    let a = getQueryString("a");
    a = decodeURI(a);
    a = decodeURI(a);
    
    let b = getQueryString("b");
    b = decodeURI(b);
    b = decodeURI(b);
        
    $('#imgaaaa').attr('src', a);
    $('#imgbbbb').attr('src', b);
  })