class StorageService{constructor(e,t){this.storageType=e,this.storagePrefix=t}setItem(e,t){this.storageType.setItem(this.storagePrefix+e,t)}getItem(e){return this.storageType.getItem(this.storagePrefix+e)}removeItem(e){this.storageType.removeItem(this.storagePrefix+e)}clear(){const e=[],t=this.storagePrefix;for(let r=0;r<this.storageType.length;r++)this.storageType.key(r).substring(0,t.length)===t&&e.push(this.storageType.key(r));for(let t=0;t<e.length;t++)this.storageType.removeItem(e[t])}get length(){let e=0;const t=this.storagePrefix;for(let r=0;r<this.storageType.length;r++)this.storageType.key(r).substring(0,t.length)===t&&e++;return e}}!function(){try{const e=document.currentScript.getAttribute("prefix"),t=(new StorageService(localStorage,e),new StorageService(sessionStorage,e));new URLSearchParams(window.location.search).get("new")&&t.clear()}catch(e){}}();
