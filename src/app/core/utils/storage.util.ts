export default class Storage {

  static saveLocalStorage(name: string, value: string | boolean) {
    localStorage.setItem(name, value.toString());
  }

  static deleteLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

}
