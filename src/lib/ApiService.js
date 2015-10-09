function(f, Maybe, $http, $q) {
    var get = f.get;
    var compose = f.compose;
    var ifElse = f.ifElse;

    var execute = function(request) {
      var result = $q.defer();
      $http({
        method: request.method,
        url: request.url,
        params: request.query,
        headers: request.headers,
        data: request.body}).success(function(data, status, headers) {
          result.resolve({
            status: status,
            data: data,
            headers: headers()
          });
        }).error(function(data, status, headers) {
          result.reject({
            status: status,
            data: data,
            headers: headers()
          });
        });
      return result.promise;
    };

    var hasValidMethod = compose(
      f(f.contains, f, ['POST', 'GET', 'PUT', 'DELETE']),
      get('method'));

    var send = function(request) {
      return ifElse( // HttpRequest -> Promise[HttpResponse]
        hasValidMethod,
          execute,
          f.die('invalid http method'))(request);
    };

    return {
      send: send,
    };
