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
  window.__prefixStorage__ = document.currentScript.getAttribute('prefix')
  const clear = function () {
    try {
      const rawUrl = window.location.href.split('?');
      const url = rawUrl[0];
      const isCreateNewQuotation = new URL(`https://amr.com?${rawUrl[1]}`).searchParams.get("new");

      if (!!isCreateNewQuotation) {
        const prefix = window.__prefixStorage__;
        const _localStorage_ = new StorageService(localStorage, prefix);
        const _sessionStorage_ = new StorageService(sessionStorage, prefix);        
        // _localStorage_.clear();
        _sessionStorage_.clear();
        
        window.location.href = url;
        window.location.reload();
      }
    } catch(e) {}
  };
  clear();
  addEventListener('hashchange', clear, false);
})();
