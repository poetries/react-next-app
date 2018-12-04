
const DB = (function () {
  function Storage(path, opts) {
    opts = opts || {};
    var db = {}

    Object.defineProperty(this, '___priv_bk___', {
      value: {
        path: path
      }
    , writable: false
    , enumerable: false
    });

    Object.defineProperty(this, '___priv_strict___', {
      value: !!opts.strict
    , writable: false
    , enumerable: false
    });

    Object.defineProperty(this, '___priv_ws___', {
      value: opts.ws || '  '
    , writable: false
    , enumerable: false
    });

    Object.keys(db).forEach(function (key) {
      this[key] = db[key];
    }, this);
  }

  Storage.prototype.getItem = function (key) {
    if (this.hasOwnProperty(key)) {
      if (this.___priv_strict___) {
        return String(this[key]);
      } else {
        return this[key];
      }
    }
    return null;
  };

  Storage.prototype.setItem = function (key, val) {
    if (val === undefined) {
      this[key] = null;
    } else if (this.___priv_strict___) {
      this[key] = String(val);
    } else {
      this[key] = val;
    }
    this.___save___();
  };

  Storage.prototype.removeItem = function (key) {
    delete this[key];
    this.___save___();
  };

  Storage.prototype.clear = function () {
    var self = this;
    // filters out prototype keys
    Object.keys(self).forEach(function (key) {
      self[key] = undefined;
      delete self[key];
    });
  };

  Storage.prototype.key = function (i) {
    i = i || 0;
    return Object.keys(this)[i];
  };

  Object.defineProperty(Storage.prototype, 'length', {
    get: function() {
      return Object.keys(this).length;
    }
  });

  Storage.prototype.___save___ = function () {
    var self = this
      ;

    if (!this.___priv_bk___.path) {
      return;
    }

    if (this.___priv_bk___.lock) {
      this.___priv_bk___.wait = true;
      return;
    }

    this.___priv_bk___.lock = true;
  };

  Object.defineProperty(Storage, 'create', {
    value: function (path, opts) {
      return new Storage(path, opts);
    }
  , writable: false
  , enumerable: false
  });

  return new Storage(null, { strict: true })
}());


/**
 * 本地存储实现,封装localStorage
 */
let store = {
  /* eslint-disable no-undef */
  version: '1.1.0',
  storage: typeof window !=='undefined' ? window.localStorage :DB //区分客户端和服务端
}

const api = {
  set(key, val) {
    if (this.disabled) {
      return
    }
    if (val === undefined) {
      return this.remove(key)
    }
    this.storage.setItem(key, serialize(val))
    return val
  },

  get(key, def) {
    if (this.disabled) {
      return def
    }
    let val = deserialize(this.storage.getItem(key))
    return (val === undefined ? def : val)
  },

  has(key) {
    return this.get(key) !== undefined
  },

  remove(key) {
    if (this.disabled) {
      return
    }
    this.storage.removeItem(key)
  },

  clear() {
    if (this.disabled) {
      return
    }
    this.storage.clear()
  },

  getAll() {
    if (this.disabled) {
      return null
    }
    let ret = {}
    this.forEach((key, val) => {
      ret[key] = val
    })
    return ret
  },

  forEach(callback) {
    if (this.disabled) {
      return
    }
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.storage.key(i)
      callback(key, this.get(key))
    }
  }
}

Object.assign(store, api)


function serialize(val) {
  return JSON.stringify(val)
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(val)
  } catch (e) {
    return val || undefined
  }
}

try {
  const testKey = '__storejs__'
  store.set(testKey, testKey)
  if (store.get(testKey) !== testKey) {
    store.disabled = true
  }
  store.remove(testKey)
} catch (e) {
  store.disabled = true
}

export default store
