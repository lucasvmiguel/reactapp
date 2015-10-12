import cookie from 'react-cookie';

class CookieService{
  static Write(name, value){
    cookie.save(name, value);
  }
  static Read(name){
    return cookie.load(name);
  }
  static Remove(name){
    cookie.remove(name);
  }
}

export default CookieService;
