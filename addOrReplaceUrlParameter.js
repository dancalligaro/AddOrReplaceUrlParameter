  function addOrReplaceUrlParameter(url, paramName, paramValue){
    var hashSplit = url.split('#');
    var paramSplit = hashSplit[0].split('?');
    var encodedParamName = encodeURIComponent(paramName);
    var encodedParamValue = encodeURIComponent(paramValue);
    if(paramSplit[1]) {
      if(paramSplit[1].indexOf(encodedParamName) > -1){
        var match = new RegExp( '(' + encodedParamName + ')' + "=.*?(\\&|$)");
        paramSplit[1] = paramSplit[1].replace(match, '$1=' + encodedParamValue + '$2');
      }else{
        paramSplit[1] += "&" + encodedParamName + '=' + encodedParamValue;
      }
    } else {
      paramSplit.push(encodedParamName + '=' + encodedParamValue);
    }
    return paramSplit.join('?') + (hashSplit[1] ? "#" + hashSplit[1] : '') ;
  }