class Storage {
    constructor() {
      this.name = 'bstUser';
      this.localStorage = window.localStorage;
    }
  
    setUser(user) {
      this.localStorage.setItem(this.name, JSON.stringify(user));
    }
  
    getUser() {
      const user = this.localStorage.getItem(this.name);
      return JSON.parse(user);
    }
  
    removeUser() {
      this.localStorage.removeItem(this.name);
    }
  
    getToken() {
      const user = this.localStorage.getItem(this.name);
      return user ? (JSON.parse(user)).token : '';
    }
  }
  
  const storage = new Storage();
  
  export default storage;
  