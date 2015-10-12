'use strict';

import axios from 'axios';

class ApiService{
  static Send(request){
    return axios(request);
  }
}

export default ApiService;

//example of request
//url: '/user',
//method: 'get', // default
//transformRequest: [function (data) { return data;}]
//headers: {'X-Requested-With': 'XMLHttpRequest'}
//params: { ID: 12345}
//data: { firstName: 'Fred'}
