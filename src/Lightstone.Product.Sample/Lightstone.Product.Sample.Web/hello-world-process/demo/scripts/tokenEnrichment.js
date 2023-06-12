(function(open, fetch) {

  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
      open.apply(this, arguments);
      var headers = getHeaderValues(url);
      if (headers.length > 0){

          this.setRequestHeader('Authorization', headers[0].Authorization);
          this.setRequestHeader('Ocp-Apim-Subscription-Key', headers[0]['Ocp-Apim-Subscription-Key']);
      }
  };

  window.fetch = function() {
      var url = arguments[0];
      var headers = getHeaderValues(url);
      if (headers.length > 0){
          arguments[1].headers = arguments[1].headers || {};
          arguments[1].headers.Authorization = headers[0].Authorization;
          arguments[1].headers['Ocp-Apim-Subscription-Key'] = headers[0]['Ocp-Apim-Subscription-Key'];
      }
      return fetch.apply(this, arguments)
  }

  function getHeaderValues(url){
      if (typeof(Storage) !== "undefined" && localStorage["msal.idtoken"] && url.indexOf('http') == 0) {
          var urlObj = new URL(url);
          if (urlObj.hostname.includes("apis.lightstone.co.za"))
          {
              var bearerToken = localStorage["msal.idtoken"];
              return [{
                  Authorization: 'Bearer ' + bearerToken,
                 'Ocp-Apim-Subscription-Key' : '_LS_ApiKey_LS_'
               }]
          }
      }
      return [];
  }

})(XMLHttpRequest.prototype.open, window.fetch);
