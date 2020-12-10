class StorageService {
  constructor(storageType, prefix) {
      this.storageType = storageType;
      this.storagePrefix = prefix;
  }

  setItem(key, data) {
      this.storageType.setItem(this.storagePrefix + key, data);
  }

  getItem(key) {
      return this.storageType.getItem(this.storagePrefix + key);
  }

  removeItem(key) {
      this.storageType.removeItem(this.storagePrefix + key);
  }

  clear() {
      const arr = []; // Array to hold the keys
      const storagePrefix = this.storagePrefix;

      for (let i = 0; i < this.storageType.length; i++) {
          if (this.storageType.key(i).substring(0, storagePrefix.length) === storagePrefix) {
              arr.push(this.storageType.key(i));
          }
      }

      // Iterate over arr and remove the items by key
      for (let i = 0; i < arr.length; i++) {
          this.storageType.removeItem(arr[i]);
      }
  }

  get length() {
      let storageCount = 0;
      const storagePrefix = this.storagePrefix;

      for (let i = 0; i < this.storageType.length; i++) {
          if (this.storageType.key(i).substring(0, storagePrefix.length) === storagePrefix) {
              storageCount++;
          }
      }

      return storageCount;
  }
}

(function () {
  try {
      const prefix = document.currentScript.getAttribute('prefix');
      const _localStorage_ = new StorageService(localStorage, prefix);
      const _sessionStorage_ = new StorageService(sessionStorage, prefix);
      const isCreateNewQuotation = new URL(`https://amr.com?${url.split("?")[1]}`).searchParams.get("new");
    debugger;
      if (!!isCreateNewQuotation) {
          // _localStorage_.clear();
          _sessionStorage_.clear();
      }
  } catch (e) {}
})();
