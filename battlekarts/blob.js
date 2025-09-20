var unityFramework = (() => {
  var _0x171afe = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") {
    _0x171afe = _0x171afe || __filename;
  }
  return function (_0x1baab9) {
    _0x1baab9 = _0x1baab9 || {};
    var _0x134a3a = typeof _0x1baab9 != "undefined" ? _0x1baab9 : {};
    var _0x6450cc;
    var _0x1b5b77;
    _0x134a3a.ready = new Promise(function (_0x4dc6a8, _0x207e2c) {
      _0x6450cc = _0x4dc6a8;
      _0x1b5b77 = _0x207e2c;
    });
    function _0x4f9b04(_0x409f65, _0x100d03) {
      _0xab9b0c("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
      return _0x409f65 ? _0x227981(_0x1dd929, _0x409f65, _0x100d03) : '';
    }
    _0x134a3a.Pointer_stringify = _0x4f9b04;
    var _0x5e8d33 = _0x159631().match(new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)"));
    if (_0x5e8d33) {
      _0x134a3a.stackTraceRegExp = new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)".replace("([^\\n]+)", _0x5e8d33[0x4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
    }
    var _0x29fff3 = function (_0x490aa9) {
      if (_0x548ac1) {
        return;
      }
      _0x548ac1 = true;
      _0xeccca7 = 0x1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
        console.error("Pthread aborting at " + new Error().stack);
      }
      if (_0x490aa9 !== undefined) {
        _0x3de750(_0x490aa9);
        _0x314449(_0x490aa9);
        _0x490aa9 = JSON.stringify(_0x490aa9);
      } else {
        _0x490aa9 = '';
      }
      var _0x14be3a = "abort(" + _0x490aa9 + ") at " + _0x7c2ca9();
      if (_0x134a3a.abortHandler && _0x134a3a.abortHandler(_0x14be3a)) {
        return;
      }
      throw _0x14be3a;
    };
    _0x134a3a.SetFullscreen = function (_0x18617c) {
      if (typeof _0x1dd27b === "undefined" || !_0x1dd27b) {
        console.log("Runtime not initialized yet.");
      } else {
        if (typeof _0x2892f3 === "undefined") {
          console.log("Player not loaded yet.");
        } else {
          var _0x20578f = _0x2892f3.canPerformEventHandlerRequests;
          _0x2892f3.canPerformEventHandlerRequests = function () {
            return 0x1;
          };
          _0x134a3a.ccall("SetFullscreen", null, ["number"], [_0x18617c]);
          _0x2892f3.canPerformEventHandlerRequests = _0x20578f;
        }
      }
    };
    if (!_0x134a3a.ENVIRONMENT_IS_PTHREAD) {
      _0x134a3a.preRun.push(function () {
        function _0x4b4731() {
          _0x5e0b9d.queuePersist = function (_0x27b842) {
            function _0x42f8c5() {
              if (_0x27b842.idbPersistState === "again") {
                _0x1ee39b();
              } else {
                _0x27b842.idbPersistState = 0x0;
              }
            }
            function _0x1ee39b() {
              _0x27b842.idbPersistState = "idb";
              _0x5e0b9d.syncfs(_0x27b842, false, _0x42f8c5);
            }
            if (!_0x27b842.idbPersistState) {
              _0x27b842.idbPersistState = setTimeout(_0x1ee39b, 0x0);
            } else if (_0x27b842.idbPersistState === "idb") {
              _0x27b842.idbPersistState = "again";
            }
          };
          _0x5e0b9d.mount = function (_0x16400f) {
            var _0xa32bb9 = _0x65510e.createNode(null, "/", 16895, 0x0);
            if (typeof _0x16400f !== "undefined" && _0x16400f.opts && _0x16400f.opts.autoPersist) {
              _0xa32bb9.idbPersistState = 0x0;
              var _0x1662db = _0xa32bb9.node_ops;
              _0xa32bb9.node_ops = Object.assign({}, _0xa32bb9.node_ops);
              _0xa32bb9.node_ops.mknod = function (_0x2e39d2, _0x5442bd, _0x15d777, _0x33e21f) {
                var _0x3547e3 = _0x1662db.mknod(_0x2e39d2, _0x5442bd, _0x15d777, _0x33e21f);
                _0x3547e3.node_ops = _0xa32bb9.node_ops;
                _0x3547e3.idbfs_mount = _0xa32bb9.mount;
                _0x3547e3.memfs_stream_ops = _0x3547e3.stream_ops;
                _0x3547e3.stream_ops = Object.assign({}, _0x3547e3.stream_ops);
                _0x3547e3.stream_ops.write = function (_0x26aa57, _0x5b28b9, _0x36fadf, _0x14b3a2, _0x202f56, _0x2615d4) {
                  _0x26aa57.node.isModified = true;
                  return _0x3547e3.memfs_stream_ops.write(_0x26aa57, _0x5b28b9, _0x36fadf, _0x14b3a2, _0x202f56, _0x2615d4);
                };
                _0x3547e3.stream_ops.close = function (_0x1b578e) {
                  var _0x508230 = _0x1b578e.node;
                  if (_0x508230.isModified) {
                    _0x5e0b9d.queuePersist(_0x508230.idbfs_mount);
                    _0x508230.isModified = false;
                  }
                  if (_0x508230.memfs_stream_ops.close) {
                    return _0x508230.memfs_stream_ops.close(_0x1b578e);
                  }
                };
                return _0x3547e3;
              };
              _0xa32bb9.node_ops.rmdir = function (_0x5c3cda) {
                _0x5e0b9d.queuePersist(_0xa32bb9.mount);
                return _0x1662db.rmdir(_0x5c3cda);
              };
              _0xa32bb9.node_ops.unlink = function (_0x9c8ee2) {
                _0x5e0b9d.queuePersist(_0xa32bb9.mount);
                return _0x1662db.unlink(_0x9c8ee2);
              };
              _0xa32bb9.node_ops.mkdir = function (_0x435c9c, _0x3f4730) {
                _0x5e0b9d.queuePersist(_0xa32bb9.mount);
                return _0x1662db.mkdir(_0x435c9c, _0x3f4730);
              };
              _0xa32bb9.node_ops.symlink = function (_0x11be88, _0x183980, _0x4c9215) {
                _0x5e0b9d.queuePersist(_0xa32bb9.mount);
                return _0x1662db.symlink(_0x11be88, _0x183980, _0x4c9215);
              };
              _0xa32bb9.node_ops.rename = function (_0x3e4741, _0x5ef9a4, _0x29b4d0) {
                _0x5e0b9d.queuePersist(_0xa32bb9.mount);
                return _0x1662db.rename(_0x3e4741, _0x5ef9a4, _0x29b4d0);
              };
            }
            return _0xa32bb9;
          };
        }
        _0x4b4731();
        var _0x3a7f12 = _0x134a3a.unityFileSystemInit || function () {
          _0x1279a6.mkdir("/idbfs");
          _0x134a3a.__unityIdbfsMount = _0x1279a6.mount(_0x5e0b9d, {
            "autoPersist": !!_0x134a3a.autoSyncPersistentDataPath
          }, "/idbfs");
          _0x134a3a.addRunDependency("JS_FileSystem_Mount");
          _0x1279a6.syncfs(true, function (_0x18f91f) {
            if (_0x18f91f) {
              console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
            }
            _0x134a3a.removeRunDependency("JS_FileSystem_Mount");
          });
        };
        _0x3a7f12();
      });
    }
    var _0x30e322 = [];
    var _0x5ed392 = false;
    var _0x551768;
    var _0x312b53 = null;
    function _0x57a8c7(_0x3a8b5b) {
      var _0x34e729 = Object.keys(_0x30e322);
      for (var _0x421ade = 0x0; _0x421ade < _0x34e729.length; ++_0x421ade) {
        var _0x46f0cd = _0x30e322[_0x34e729[_0x421ade]];
        if (_0x46f0cd.deviceId && _0x46f0cd.deviceId == _0x3a8b5b.deviceId) {
          return _0x46f0cd;
        }
      }
      for (var _0x421ade = 0x0; _0x421ade < _0x34e729.length; ++_0x421ade) {
        var _0x46f0cd = _0x30e322[_0x34e729[_0x421ade]];
        if (_0x46f0cd == _0x3a8b5b) {
          return _0x46f0cd;
        }
      }
      for (var _0x421ade = 0x0; _0x421ade < _0x34e729.length; ++_0x421ade) {
        var _0x46f0cd = _0x30e322[_0x34e729[_0x421ade]];
        if (_0x46f0cd.label && _0x46f0cd.label == _0x3a8b5b.label) {
          return _0x46f0cd;
        }
      }
      for (var _0x421ade = 0x0; _0x421ade < _0x34e729.length; ++_0x421ade) {
        var _0x46f0cd = _0x30e322[_0x34e729[_0x421ade]];
        if (_0x46f0cd.groupId && _0x46f0cd.kind && _0x46f0cd.groupId == _0x3a8b5b.groupId && _0x46f0cd.kind == _0x3a8b5b.kind) {
          return _0x46f0cd;
        }
      }
    }
    function _0x312127() {
      for (var _0x1b0763 = 0x0;; ++_0x1b0763) {
        if (!_0x30e322[_0x1b0763]) {
          return _0x1b0763;
        }
      }
    }
    function _0x30aa16(_0x21db3a) {
      _0x551768();
      _0x30e322 = [];
      var _0x458e95 = {};
      var _0x4f42fa = [];
      _0x21db3a.forEach(function (_0x461f47) {
        if (_0x461f47.kind === "videoinput") {
          var _0x25b024 = _0x57a8c7(_0x461f47);
          if (_0x25b024) {
            _0x458e95[_0x25b024.id] = _0x25b024;
          } else {
            _0x4f42fa.push(_0x461f47);
          }
        }
      });
      _0x30e322 = _0x458e95;
      _0x4f42fa.forEach(function (_0x508e74) {
        if (!_0x508e74.id) {
          _0x508e74.id = _0x312127();
          _0x508e74.name = _0x508e74.label || "Video input #" + (_0x508e74.id + 0x1);
          _0x508e74.isFrontFacing = _0x508e74.name.toLowerCase().includes("front") || !_0x508e74.name.toLowerCase().includes("front") && !_0x508e74.name.toLowerCase().includes("back");
          _0x30e322[_0x508e74.id] = _0x508e74;
        }
      });
    }
    function _0x100652() {
      if (!_0x30e322) {
        return;
      }
      navigator.mediaDevices.enumerateDevices().then(function (_0x139a5d) {
        _0x30aa16(_0x139a5d);
        _0x5ed392 = true;
      })["catch"](function (_0x3d5e00) {
        console.warn("Unable to enumerate media devices: " + _0x3d5e00 + "\nWebcams will not be available.");
        _0x237163();
      });
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(_0x100652, 0xea60);
        _0xab9b0c("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
      }
    }
    function _0x237163() {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener("devicechange", _0x100652);
      }
      _0x30e322 = null;
    }
    _0x134a3a.disableAccessToMediaDevices = _0x237163;
    if (!navigator.mediaDevices) {
      console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? '' : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
      _0x237163();
    } else {
      if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
        setTimeout(function () {
          try {
            _0x15c051("enumerateMediaDevices");
            _0x551768 = function () {
              if (_0x312b53 !== null) {
                clearTimeout(_0x312b53);
              }
              _0x5ddd77("enumerateMediaDevices");
              if (navigator.mediaDevices) {
                console.log("navigator.mediaDevices support available");
              }
              _0x551768 = function () {};
            };
            _0x100652();
            _0x312b53 = setTimeout(_0x551768, 0x3e8);
            navigator.mediaDevices.addEventListener("devicechange", _0x100652);
          } catch (_0xf59e70) {
            console.warn("Unable to enumerate media devices: " + _0xf59e70);
            _0x237163();
          }
        }, 0x0);
      }
    }
    function _0x452bc7(_0x59c156, _0x123e5b, _0x531a1d) {
      var _0x133613 = _0x1e2432(_0x123e5b);
      var _0x2d1af2 = _0x1e2432(_0x59c156);
      var _0x1369ce = 0x0;
      try {
        if (_0x531a1d === undefined) {
          _0x41f0ab(_0x2d1af2, _0x133613);
        } else {
          if (typeof _0x531a1d === "string") {
            _0x1369ce = _0x1e2432(_0x531a1d);
            _0x400c1d(_0x2d1af2, _0x133613, _0x1369ce);
          } else {
            if (typeof _0x531a1d === "number") {
              _0x4e87c3(_0x2d1af2, _0x133613, _0x531a1d);
            } else {
              throw '' + _0x531a1d + " is does not have a type which is supported by SendMessage.";
            }
          }
        }
      } finally {
        _0x484a7c(_0x1369ce);
        _0x484a7c(_0x2d1af2);
        _0x484a7c(_0x133613);
      }
    }
    _0x134a3a.SendMessage = _0x452bc7;
    var _0x155e1b = Object.assign({}, _0x134a3a);
    var _0x3b7379 = [];
    var _0x170acd = "./this.program";
    var _0x1a100c = (_0x3f42be, _0x57b71d) => {
      throw _0x57b71d;
    };
    var _0x7fb3a8 = typeof window == "object";
    var _0x4a386c = typeof importScripts == "function";
    var _0x5527da = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var _0xdeb0b = '';
    function _0x38a6d2(_0x3cb4bf) {
      if (_0x134a3a.locateFile) {
        return _0x134a3a.locateFile(_0x3cb4bf, _0xdeb0b);
      }
      return _0xdeb0b + _0x3cb4bf;
    }
    var _0x3be273;
    var _0x348b7b;
    var _0x4da118;
    var _0x1032d1;
    function _0x262897(_0x7eb96c) {
      if (_0x7eb96c instanceof _0x5b2d15) {
        return;
      }
      _0x314449("exiting due to exception: " + _0x7eb96c);
    }
    var _0x5aa999;
    var _0x29ee29;
    var _0x15d37a;
    if (_0x5527da) {
      if (_0x4a386c) {
        _0xdeb0b = require("path").dirname(_0xdeb0b) + "/";
      } else {
        _0xdeb0b = __dirname + "/";
      }
      _0x15d37a = () => {
        if (!_0x29ee29) {
          _0x5aa999 = require("fs");
          _0x29ee29 = require("path");
        }
      };
      _0x3be273 = function _0x3b09f4(_0x227acd, _0x4c85c) {
        _0x15d37a();
        _0x227acd = _0x29ee29.normalize(_0x227acd);
        return _0x5aa999.readFileSync(_0x227acd, _0x4c85c ? undefined : "utf8");
      };
      _0x4da118 = _0x31ada0 => {
        var _0x55f182 = _0x3be273(_0x31ada0, true);
        if (!_0x55f182.buffer) {
          _0x55f182 = new Uint8Array(_0x55f182);
        }
        return _0x55f182;
      };
      _0x348b7b = (_0x7a2426, _0x12edeb, _0x44527a) => {
        _0x15d37a();
        _0x7a2426 = _0x29ee29.normalize(_0x7a2426);
        _0x5aa999.readFile(_0x7a2426, function (_0x3bb5f7, _0x1e7313) {
          if (_0x3bb5f7) {
            _0x44527a(_0x3bb5f7);
          } else {
            _0x12edeb(_0x1e7313.buffer);
          }
        });
      };
      if (process.argv.length > 0x1) {
        _0x170acd = process.argv[0x1].replace(/\\/g, "/");
      }
      _0x3b7379 = process.argv.slice(0x2);
      process.on("uncaughtException", function (_0x40e007) {
        if (!(_0x40e007 instanceof _0x5b2d15)) {
          throw _0x40e007;
        }
      });
      process.on("unhandledRejection", function (_0x37113f) {
        throw _0x37113f;
      });
      _0x1a100c = (_0x275ce3, _0x45c6f6) => {
        if (_0x18c15f) {
          process.exitCode = _0x275ce3;
          throw _0x45c6f6;
        }
        _0x262897(_0x45c6f6);
        process.exit(_0x275ce3);
      };
      _0x134a3a.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else {
      if (_0x7fb3a8 || _0x4a386c) {
        if (_0x4a386c) {
          _0xdeb0b = self.location.href;
        } else if (typeof document != "undefined" && document.currentScript) {
          _0xdeb0b = document.currentScript.src;
        }
        if (_0x171afe) {
          _0xdeb0b = _0x171afe;
        }
        if (_0xdeb0b.indexOf("blob:") !== 0x0) {
          _0xdeb0b = _0xdeb0b.substr(0x0, _0xdeb0b.replace(/[?#].*/, '').lastIndexOf("/") + 0x1);
        } else {
          _0xdeb0b = '';
        }
        {
          _0x3be273 = _0x293ff5 => {
            var _0x27bf4e = new XMLHttpRequest();
            _0x27bf4e.open("GET", _0x293ff5, false);
            _0x27bf4e.send(null);
            return _0x27bf4e.responseText;
          };
          if (_0x4a386c) {
            _0x4da118 = _0x233dfe => {
              var _0x4a44a0 = new XMLHttpRequest();
              _0x4a44a0.open("GET", _0x233dfe, false);
              _0x4a44a0.responseType = "arraybuffer";
              _0x4a44a0.send(null);
              return new Uint8Array(_0x4a44a0.response);
            };
          }
          _0x348b7b = (_0x7f1743, _0x510112, _0x4951d0) => {
            var _0x5d8648 = new XMLHttpRequest();
            _0x5d8648.open("GET", _0x7f1743, true);
            _0x5d8648.responseType = "arraybuffer";
            _0x5d8648.onload = () => {
              if (_0x5d8648.status == 0xc8 || _0x5d8648.status == 0x0 && _0x5d8648.response) {
                _0x510112(_0x5d8648.response);
                return;
              }
              _0x4951d0();
            };
            _0x5d8648.onerror = _0x4951d0;
            _0x5d8648.send(null);
          };
        }
        _0x1032d1 = _0x1910bc => document.title = _0x1910bc;
      } else {}
    }
    var _0x3de750 = _0x134a3a.print || console.log.bind(console);
    var _0x314449 = _0x134a3a.printErr || console.warn.bind(console);
    Object.assign(_0x134a3a, _0x155e1b);
    _0x155e1b = null;
    if (_0x134a3a.arguments) {
      _0x3b7379 = _0x134a3a.arguments;
    }
    if (_0x134a3a.thisProgram) {
      _0x170acd = _0x134a3a.thisProgram;
    }
    if (_0x134a3a.quit) {
      _0x1a100c = _0x134a3a.quit;
    }
    function _0xab9b0c(_0x534a3d) {
      if (!_0xab9b0c.shown) {
        _0xab9b0c.shown = {};
      }
      if (!_0xab9b0c.shown[_0x534a3d]) {
        _0xab9b0c.shown[_0x534a3d] = 0x1;
        _0x314449(_0x534a3d);
      }
    }
    var _0x318aef;
    if (_0x134a3a.wasmBinary) {
      _0x318aef = _0x134a3a.wasmBinary;
    }
    var _0x18c15f = _0x134a3a.noExitRuntime || true;
    if (typeof WebAssembly != "object") {
      _0x29fff3("no native wasm support detected");
    }
    var _0x548ac1 = false;
    var _0xeccca7;
    function _0x29a3fa(_0x416771, _0x555167) {
      if (!_0x416771) {
        _0x29fff3(_0x555167);
      }
    }
    function _0x57f260(_0x474d5e) {
      var _0x4446fc = _0x134a3a["_" + _0x474d5e];
      return _0x4446fc;
    }
    function _0x7ef751(_0x46c65f, _0x4800ba, _0x27c9b7, _0x1ff270, _0x593482) {
      var _0x9d905a = {
        "string": function (_0x54c083) {
          var _0x2ca544 = 0x0;
          if (_0x54c083 !== null && _0x54c083 !== undefined && _0x54c083 !== 0x0) {
            var _0x464b46 = (_0x54c083.length << 0x2) + 0x1;
            _0x2ca544 = _0xd0a0f2(_0x464b46);
            _0x57a287(_0x54c083, _0x1dd929, _0x2ca544, _0x464b46);
          }
          return _0x2ca544;
        },
        "array": function (_0x2bc17c) {
          var _0x5a263e = _0xd0a0f2(_0x2bc17c.length);
          _0x5f5c99(_0x2bc17c, _0x5a263e);
          return _0x5a263e;
        }
      };
      function _0x587415(_0x42ee87) {
        if (_0x4800ba === "string") {
          return _0x42ee87 ? _0x227981(_0x1dd929, _0x42ee87, undefined) : '';
        }
        if (_0x4800ba === "boolean") {
          return Boolean(_0x42ee87);
        }
        return _0x42ee87;
      }
      var _0x5124fd = _0x57f260(_0x46c65f);
      var _0x23166f = [];
      var _0x4a4240 = 0x0;
      if (_0x1ff270) {
        for (var _0x857b82 = 0x0; _0x857b82 < _0x1ff270.length; _0x857b82++) {
          var _0x5e583b = _0x9d905a[_0x27c9b7[_0x857b82]];
          if (_0x5e583b) {
            if (_0x4a4240 === 0x0) {
              _0x4a4240 = _0x134f9e();
            }
            _0x23166f[_0x857b82] = _0x5e583b(_0x1ff270[_0x857b82]);
          } else {
            _0x23166f[_0x857b82] = _0x1ff270[_0x857b82];
          }
        }
      }
      var _0x58538f = _0x5124fd.apply(null, _0x23166f);
      function _0x34378f(_0x38f84e) {
        if (_0x4a4240 !== 0x0) {
          _0x40ed6c(_0x4a4240);
        }
        return _0x587415(_0x38f84e);
      }
      _0x58538f = _0x34378f(_0x58538f);
      return _0x58538f;
    }
    function _0x1b7265(_0x56f985, _0x193a2a, _0x4622fb, _0x275b93) {
      _0x4622fb = _0x4622fb || [];
      var _0x228027 = _0x4622fb.every(function (_0x55f3f4) {
        return _0x55f3f4 === "number";
      });
      var _0x12e014 = _0x193a2a !== "string";
      if (_0x12e014 && _0x228027 && !_0x275b93) {
        return _0x57f260(_0x56f985);
      }
      return function () {
        return _0x7ef751(_0x56f985, _0x193a2a, _0x4622fb, arguments, _0x275b93);
      };
    }
    var _0x1ab05e = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x227981(_0x788aff, _0x3330ab, _0x59c1f2) {
      var _0xfaf6e1 = _0x3330ab + _0x59c1f2;
      var _0x4d473a = _0x3330ab;
      while (_0x788aff[_0x4d473a] && !(_0x4d473a >= _0xfaf6e1)) {
        ++_0x4d473a;
      }
      if (_0x4d473a - _0x3330ab > 0x10 && _0x788aff.buffer && _0x1ab05e) {
        return _0x1ab05e.decode(_0x788aff.subarray(_0x3330ab, _0x4d473a));
      } else {
        var _0x4d7162 = '';
        while (_0x3330ab < _0x4d473a) {
          var _0x3023ed = _0x788aff[_0x3330ab++];
          if (!(_0x3023ed & 0x80)) {
            _0x4d7162 += String.fromCharCode(_0x3023ed);
            continue;
          }
          var _0x59a15e = _0x788aff[_0x3330ab++] & 0x3f;
          if ((_0x3023ed & 0xe0) == 0xc0) {
            _0x4d7162 += String.fromCharCode((_0x3023ed & 0x1f) << 0x6 | _0x59a15e);
            continue;
          }
          var _0x245542 = _0x788aff[_0x3330ab++] & 0x3f;
          if ((_0x3023ed & 0xf0) == 0xe0) {
            _0x3023ed = (_0x3023ed & 0xf) << 0xc | _0x59a15e << 0x6 | _0x245542;
          } else {
            _0x3023ed = (_0x3023ed & 0x7) << 0x12 | _0x59a15e << 0xc | _0x245542 << 0x6 | _0x788aff[_0x3330ab++] & 0x3f;
          }
          if (_0x3023ed < 0x10000) {
            _0x4d7162 += String.fromCharCode(_0x3023ed);
          } else {
            var _0x23edfd = _0x3023ed - 0x10000;
            _0x4d7162 += String.fromCharCode(0xd800 | _0x23edfd >> 0xa, 0xdc00 | _0x23edfd & 0x3ff);
          }
        }
      }
      return _0x4d7162;
    }
    function _0x57a287(_0x1b4b99, _0x231750, _0x2c2df4, _0x591da2) {
      if (!(_0x591da2 > 0x0)) {
        return 0x0;
      }
      var _0x3fd846 = _0x2c2df4;
      var _0x33707f = _0x2c2df4 + _0x591da2 - 0x1;
      for (var _0x37302a = 0x0; _0x37302a < _0x1b4b99.length; ++_0x37302a) {
        var _0x4f82ed = _0x1b4b99.charCodeAt(_0x37302a);
        if (_0x4f82ed >= 0xd800 && _0x4f82ed <= 0xdfff) {
          var _0x42ec2d = _0x1b4b99.charCodeAt(++_0x37302a);
          _0x4f82ed = 0x10000 + ((_0x4f82ed & 0x3ff) << 0xa) | _0x42ec2d & 0x3ff;
        }
        if (_0x4f82ed <= 0x7f) {
          if (_0x2c2df4 >= _0x33707f) {
            break;
          }
          _0x231750[_0x2c2df4++] = _0x4f82ed;
        } else {
          if (_0x4f82ed <= 0x7ff) {
            if (_0x2c2df4 + 0x1 >= _0x33707f) {
              break;
            }
            _0x231750[_0x2c2df4++] = 0xc0 | _0x4f82ed >> 0x6;
            _0x231750[_0x2c2df4++] = 0x80 | _0x4f82ed & 0x3f;
          } else {
            if (_0x4f82ed <= 0xffff) {
              if (_0x2c2df4 + 0x2 >= _0x33707f) {
                break;
              }
              _0x231750[_0x2c2df4++] = 0xe0 | _0x4f82ed >> 0xc;
              _0x231750[_0x2c2df4++] = 0x80 | _0x4f82ed >> 0x6 & 0x3f;
              _0x231750[_0x2c2df4++] = 0x80 | _0x4f82ed & 0x3f;
            } else {
              if (_0x2c2df4 + 0x3 >= _0x33707f) {
                break;
              }
              _0x231750[_0x2c2df4++] = 0xf0 | _0x4f82ed >> 0x12;
              _0x231750[_0x2c2df4++] = 0x80 | _0x4f82ed >> 0xc & 0x3f;
              _0x231750[_0x2c2df4++] = 0x80 | _0x4f82ed >> 0x6 & 0x3f;
              _0x231750[_0x2c2df4++] = 0x80 | _0x4f82ed & 0x3f;
            }
          }
        }
      }
      _0x231750[_0x2c2df4] = 0x0;
      return _0x2c2df4 - _0x3fd846;
    }
    function _0x169ac9(_0x5f1654) {
      var _0x171194 = 0x0;
      for (var _0x1c2524 = 0x0; _0x1c2524 < _0x5f1654.length; ++_0x1c2524) {
        var _0x105ddc = _0x5f1654.charCodeAt(_0x1c2524);
        if (_0x105ddc >= 0xd800 && _0x105ddc <= 0xdfff) {
          _0x105ddc = 0x10000 + ((_0x105ddc & 0x3ff) << 0xa) | _0x5f1654.charCodeAt(++_0x1c2524) & 0x3ff;
        }
        if (_0x105ddc <= 0x7f) {
          ++_0x171194;
        } else {
          if (_0x105ddc <= 0x7ff) {
            _0x171194 += 0x2;
          } else {
            if (_0x105ddc <= 0xffff) {
              _0x171194 += 0x3;
            } else {
              _0x171194 += 0x4;
            }
          }
        }
      }
      return _0x171194;
    }
    function _0x42d3c7(_0x391df4) {
      var _0x3f9e32 = _0x169ac9(_0x391df4) + 0x1;
      var _0x2ea4fa = _0x1f7001(_0x3f9e32);
      if (_0x2ea4fa) {
        _0x57a287(_0x391df4, _0x53fd76, _0x2ea4fa, _0x3f9e32);
      }
      return _0x2ea4fa;
    }
    function _0x2e28c8(_0x5200d1) {
      var _0x29c8df = _0x169ac9(_0x5200d1) + 0x1;
      var _0x157023 = _0xd0a0f2(_0x29c8df);
      _0x57a287(_0x5200d1, _0x53fd76, _0x157023, _0x29c8df);
      return _0x157023;
    }
    function _0x5f5c99(_0x5ad7ca, _0x4cad63) {
      _0x53fd76.set(_0x5ad7ca, _0x4cad63);
    }
    var _0x5263d6;
    var _0x53fd76;
    var _0x1dd929;
    var _0x2aac64;
    var _0x398095;
    var _0x196bb4 = [];
    var _0x467ff5 = [];
    var _0x3cc698 = [];
    var _0xe8f2c7 = [];
    var _0x3eaea9 = [];
    var _0x1dd27b = false;
    function _0xffb3ea() {
      if (_0x134a3a.preRun) {
        if (typeof _0x134a3a.preRun == "function") {
          _0x134a3a.preRun = [_0x134a3a.preRun];
        }
        while (_0x134a3a.preRun.length) {
          _0x3c43e8(_0x134a3a.preRun.shift());
        }
      }
      _0x583873(_0x196bb4);
    }
    function _0x3f60de() {
      _0x1dd27b = true;
      if (!_0x134a3a.noFSInit && !_0x1279a6.init.initialized) {
        _0x1279a6.init();
      }
      _0x1279a6.ignorePermissions = false;
      _0x1e4cfb.init();
      _0x34b7f8.root = _0x1279a6.mount(_0x34b7f8, {}, null);
      _0x4397a3.root = _0x1279a6.mount(_0x4397a3, {}, null);
      _0x583873(_0x467ff5);
    }
    function _0xafbfd3() {
      _0x583873(_0x3cc698);
    }
    function _0x2f5297() {
      if (_0x134a3a.postRun) {
        if (typeof _0x134a3a.postRun == "function") {
          _0x134a3a.postRun = [_0x134a3a.postRun];
        }
        while (_0x134a3a.postRun.length) {
          _0x2f8da0(_0x134a3a.postRun.shift());
        }
      }
      _0x583873(_0x3eaea9);
    }
    function _0x3c43e8(_0x54f82a) {
      _0x196bb4.unshift(_0x54f82a);
    }
    function _0x2f8da0(_0x58b397) {
      _0x3eaea9.unshift(_0x58b397);
    }
    var _0x654abb = 0x0;
    var _0x4a26f7 = null;
    var _0x578dfa = null;
    function _0x15c051(_0x42eaf2) {
      _0x654abb++;
      if (_0x134a3a.monitorRunDependencies) {
        _0x134a3a.monitorRunDependencies(_0x654abb);
      }
    }
    function _0x5ddd77(_0xcdd680) {
      _0x654abb--;
      if (_0x134a3a.monitorRunDependencies) {
        _0x134a3a.monitorRunDependencies(_0x654abb);
      }
      if (_0x654abb == 0x0) {
        if (_0x4a26f7 !== null) {
          clearInterval(_0x4a26f7);
          _0x4a26f7 = null;
        }
        if (_0x578dfa) {
          var _0x13dbb5 = _0x578dfa;
          _0x578dfa = null;
          _0x13dbb5();
        }
      }
    }
    _0x134a3a.preloadedImages = {};
    _0x134a3a.preloadedAudios = {};
    function _0x29fff3(_0x3210f6) {
      {
        if (_0x134a3a.onAbort) {
          _0x134a3a.onAbort(_0x3210f6);
        }
      }
      _0x3210f6 = "Aborted(" + _0x3210f6 + ")";
      _0x314449(_0x3210f6);
      _0x548ac1 = true;
      _0xeccca7 = 0x1;
      _0x3210f6 += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x16d5a5 = new WebAssembly.RuntimeError(_0x3210f6);
      _0x1b5b77(_0x16d5a5);
      throw _0x16d5a5;
    }
    var _0x2c479e;
    _0x2c479e = "build.wasm";
    if (!_0x2c479e.startsWith("data:application/octet-stream;base64,")) {
      _0x2c479e = _0x38a6d2(_0x2c479e);
    }
    var _0x20e456;
    var _0x522a75;
    function _0x583873(_0x24fe90) {
      while (_0x24fe90.length > 0x0) {
        var _0xb331b9 = _0x24fe90.shift();
        if (typeof _0xb331b9 == "function") {
          _0xb331b9(_0x134a3a);
          continue;
        }
        var _0x273f87 = _0xb331b9.func;
        if (typeof _0x273f87 == "number") {
          if (_0xb331b9.arg === undefined) {
            (function () {
              _0x14bc8b.call(null, _0x273f87);
            })();
          } else {
            (function (_0x12624d) {
              _0xd34a60.apply(null, [_0x273f87, _0x12624d]);
            })(_0xb331b9.arg);
          }
        } else {
          _0x273f87(_0xb331b9.arg === undefined ? null : _0xb331b9.arg);
        }
      }
    }
    function _0x3175b2(_0x165a64) {
      var _0x138285 = /\b_Z[\w\d_]+/g;
      return _0x165a64.replace(_0x138285, function (_0x1effc8) {
        return _0x1effc8 === _0x2e9ec1 ? _0x1effc8 : _0x2e9ec1 + " [" + _0x1effc8 + "]";
      });
    }
    function _0x4f1fa6(_0x4ccb75) {
      if (_0x4ccb75 instanceof _0x5b2d15 || _0x4ccb75 == "unwind") {
        return _0xeccca7;
      }
      _0x1a100c(0x1, _0x4ccb75);
    }
    function _0x159631() {
      var _0x327c6c = new Error();
      if (!_0x327c6c.stack) {
        try {
          throw new Error();
        } catch (_0x2a6951) {
          _0x327c6c = _0x2a6951;
        }
        if (!_0x327c6c.stack) {
          return "(no stack trace available)";
        }
      }
      return _0x327c6c.stack.toString();
    }
    function _0x7c2ca9() {
      var _0xa8fbbe = _0x159631();
      if (_0x134a3a.extraStackTrace) {
        _0xa8fbbe += "\n" + _0x134a3a.extraStackTrace();
      }
      return _0x3175b2(_0xa8fbbe);
    }
    function _0xa712db(_0x28e007) {
      if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
        return window.CSS.escape(_0x28e007);
      }
      return _0x28e007.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x15266a() {
      var _0x2e6f15 = _0x134a3a.canvas ? _0x134a3a.canvas.id : "unity-canvas";
      return "#" + _0xa712db(_0x2e6f15);
    }
    function _0x1e2432(_0x41bb86) {
      var _0x1d1ada = _0x169ac9(_0x41bb86) + 0x1;
      var _0x4b460a = _0x1f7001(_0x1d1ada);
      _0x57a287(_0x41bb86, _0x1dd929, _0x4b460a, _0x1d1ada);
      return _0x4b460a;
    }
    function _0x198b80() {
      var _0x2bc018 = _0x15266a();
      if (_0x198b80.selector != _0x2bc018) {
        _0x484a7c(_0x198b80.ptr);
        _0x198b80.ptr = _0x1e2432(_0x2bc018);
        _0x198b80.selector = _0x2bc018;
      }
      return _0x198b80.ptr;
    }
    function _0x5c82bb(_0x80697f) {
      window.wgUnityInstance = _0x134a3a;
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
        window[preroll.config.loaderObjectName].ping(_0x80697f);
      } catch (_0x58a682) {
        console.log("WGSDK: No production WGSDK resources found, loading development resources.");
        var _0x1bb3f5 = document.createElement("script");
        _0x1bb3f5.addEventListener("load", function (_0x3e51fc) {
          var _0x2a5c69 = document.createElement("script");
          _0x2a5c69.addEventListener("load", function (_0x4f1ed8) {
            console.log("WGSDK: Development resources loaded.");
            _0x3ee63e(_0x80697f, true);
          }.bind(this));
          document.getElementsByTagName("head")[0x0].appendChild(_0x2a5c69);
          _0x2a5c69.src = "https://afg.wgplayer.com/wgplayer.com/js/RkQDh8KWt62VoH09FPNYqA/2357995679/wgAds.js";
        }.bind(this));
        document.getElementsByTagName("head")[0x0].appendChild(_0x1bb3f5);
        _0x1bb3f5.src = "https://afg.wgplayer.com/wgplayer.com/wgAds.iframe.conf.js";
      }
    }
    function _0x3ee63e(_0x36615f, _0x6cbaaf) {
      var _0x2544ae;
      if (_0x6cbaaf === true) {
        _0x2544ae = _0x36615f;
      } else {
        _0x2544ae = _0x4f9b04(_0x36615f);
      }
      setTimeout(function () {
        _0x5c82bb(_0x2544ae);
      }, 0xfa);
    }
    function _0x4401b4() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
        window[window.preroll.config.loaderObjectName].registerGameControls(_0x134a3a);
      } catch (_0xe509f1) {
        console.log("WGSDK: Can not register game controls.");
        setTimeout(function () {
          _0x4401b4();
        }, 0xfa);
      }
    }
    function _0x2528a3() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          "onReady": "OnReadyMethod",
          "onSuccess": "OnSuccessMethod",
          "onFail": "OnFailMethod"
        });
      } catch (_0x3a6268) {
        console.log("WGSDK: Can not register reward ad callbacks.");
        _0x336d25();
      }
    }
    function _0x336d25() {
      setTimeout(function () {
        _0x2528a3();
      }, 0xfa);
    }
    var _0x44c05e = {
      "requestInstances": {},
      "nextRequestId": 0x1,
      "loglevel": 0x2,
      "SendTextToCSharpSide": function (_0x14f9a2, _0x50c79c, _0x50e2c6) {
        const _0x34e223 = new TextEncoder();
        const _0x3c1c09 = _0x34e223.encode(_0x50e2c6);
        const _0x54a2ca = function (_0x312017, _0x1ca71f) {
          return _0x2cefa4.apply(null, [_0x44c05e.onallocbuffer, _0x312017, _0x1ca71f]);
        }(_0x14f9a2, _0x3c1c09.length);
        _0x1dd929.set(_0x3c1c09, _0x54a2ca);
        (function (_0xe2e7a7, _0x23882a, _0x7fb8b5) {
          _0x44285b.apply(null, [_0x50c79c, _0xe2e7a7, _0x23882a, _0x7fb8b5]);
        })(_0x14f9a2, _0x54a2ca, _0x3c1c09.length);
      },
      "GetResponseHeaders": function (_0x1c6acb, _0xf2f243) {
        var _0x22a30b = '';
        if (document && document.cookie) {
          var _0x1ed40a = document.cookie.split(";");
          for (var _0x539047 = 0x0; _0x539047 < _0x1ed40a.length; ++_0x539047) {
            const _0x281aa8 = _0x1ed40a[_0x539047].trim();
            if (_0x281aa8.length > 0x0) {
              _0x22a30b += "Set-Cookie:" + _0x281aa8 + "\n";
            }
          }
        }
        const _0x3ca4bc = _0x44c05e.requestInstances[_0x1c6acb].getAllResponseHeaders().trim().split(/[\r\n]+/);
        _0x3ca4bc.forEach(_0x53ed6e => {
          const _0x3dc602 = _0x53ed6e.split(": ");
          const _0x19afc9 = _0x3dc602.shift();
          const _0x10aa86 = _0x3dc602.join(": ");
          if (_0x19afc9 !== "content-length") {
            _0x22a30b += _0x19afc9 + ":" + _0x10aa86 + "\n";
          }
        });
        _0x44c05e.SendTextToCSharpSide(_0x1c6acb, _0xf2f243, _0x22a30b);
      }
    };
    var _0x2d0e3b = {
      "splitPath": function (_0x6056be) {
        var _0x36fb19 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return _0x36fb19.exec(_0x6056be).slice(0x1);
      },
      "normalizeArray": function (_0x2b926e, _0x3a47be) {
        var _0x15e469 = 0x0;
        for (var _0x2b23de = _0x2b926e.length - 0x1; _0x2b23de >= 0x0; _0x2b23de--) {
          var _0x35ef27 = _0x2b926e[_0x2b23de];
          if (_0x35ef27 === ".") {
            _0x2b926e.splice(_0x2b23de, 0x1);
          } else {
            if (_0x35ef27 === "..") {
              _0x2b926e.splice(_0x2b23de, 0x1);
              _0x15e469++;
            } else if (_0x15e469) {
              _0x2b926e.splice(_0x2b23de, 0x1);
              _0x15e469--;
            }
          }
        }
        if (_0x3a47be) {
          for (; _0x15e469; _0x15e469--) {
            _0x2b926e.unshift("..");
          }
        }
        return _0x2b926e;
      },
      "normalize": function (_0x2c1a0e) {
        var _0x2895bb = _0x2c1a0e.charAt(0x0) === "/";
        var _0x64a6b0 = _0x2c1a0e.substr(-0x1) === "/";
        _0x2c1a0e = _0x2d0e3b.normalizeArray(_0x2c1a0e.split("/").filter(function (_0x216971) {
          return !!_0x216971;
        }), !_0x2895bb).join("/");
        if (!_0x2c1a0e && !_0x2895bb) {
          _0x2c1a0e = ".";
        }
        if (_0x2c1a0e && _0x64a6b0) {
          _0x2c1a0e += "/";
        }
        return (_0x2895bb ? "/" : '') + _0x2c1a0e;
      },
      "dirname": function (_0x5438d2) {
        var _0x29e211 = _0x2d0e3b.splitPath(_0x5438d2);
        var _0x1c6dc5 = _0x29e211[0x0];
        var _0x1112b0 = _0x29e211[0x1];
        if (!_0x1c6dc5 && !_0x1112b0) {
          return ".";
        }
        if (_0x1112b0) {
          _0x1112b0 = _0x1112b0.substr(0x0, _0x1112b0.length - 0x1);
        }
        return _0x1c6dc5 + _0x1112b0;
      },
      "basename": function (_0x83f37f) {
        if (_0x83f37f === "/") {
          return "/";
        }
        _0x83f37f = _0x2d0e3b.normalize(_0x83f37f);
        _0x83f37f = _0x83f37f.replace(/\/$/, '');
        var _0x2e1ced = _0x83f37f.lastIndexOf("/");
        if (_0x2e1ced === -0x1) {
          return _0x83f37f;
        }
        return _0x83f37f.substr(_0x2e1ced + 0x1);
      },
      "extname": function (_0x1913e1) {
        return _0x2d0e3b.splitPath(_0x1913e1)[0x3];
      },
      "join": function () {
        var _0x57343e = Array.prototype.slice.call(arguments, 0x0);
        return _0x2d0e3b.normalize(_0x57343e.join("/"));
      },
      "join2": function (_0x1d7b0e, _0x4e081e) {
        return _0x2d0e3b.normalize(_0x1d7b0e + "/" + _0x4e081e);
      }
    };
    function _0x1550b9() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var _0x194853 = new Uint8Array(0x1);
        return function () {
          crypto.getRandomValues(_0x194853);
          return _0x194853[0x0];
        };
      } else {
        if (_0x5527da) {
          try {
            var _0x2f924b = require("crypto");
            return function () {
              return _0x2f924b.randomBytes(0x1)[0x0];
            };
          } catch (_0x5a6b8f) {}
        }
      }
      return function () {
        _0x29fff3("randomDevice");
      };
    }
    var _0x1c536c = {
      "resolve": function () {
        var _0x30b8ef = '';
        var _0x3aa92a = false;
        for (var _0x777b41 = arguments.length - 0x1; _0x777b41 >= -0x1 && !_0x3aa92a; _0x777b41--) {
          var _0x4bb179 = _0x777b41 >= 0x0 ? arguments[_0x777b41] : "/";
          if (typeof _0x4bb179 != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else {
            if (!_0x4bb179) {
              return '';
            }
          }
          _0x30b8ef = _0x4bb179 + "/" + _0x30b8ef;
          _0x3aa92a = _0x4bb179.charAt(0x0) === "/";
        }
        _0x30b8ef = _0x2d0e3b.normalizeArray(_0x30b8ef.split("/").filter(function (_0x1f32bc) {
          return !!_0x1f32bc;
        }), !_0x3aa92a).join("/");
        return (_0x3aa92a ? "/" : '') + _0x30b8ef || ".";
      },
      "relative": function (_0x5426e7, _0x3cc7b8) {
        _0x5426e7 = _0x1c536c.resolve(_0x5426e7).substr(0x1);
        _0x3cc7b8 = _0x1c536c.resolve(_0x3cc7b8).substr(0x1);
        function _0xe263d4(_0x59732f) {
          var _0x2f8351 = 0x0;
          for (; _0x2f8351 < _0x59732f.length; _0x2f8351++) {
            if (_0x59732f[_0x2f8351] !== '') {
              break;
            }
          }
          var _0x512f57 = _0x59732f.length - 0x1;
          for (; _0x512f57 >= 0x0; _0x512f57--) {
            if (_0x59732f[_0x512f57] !== '') {
              break;
            }
          }
          if (_0x2f8351 > _0x512f57) {
            return [];
          }
          return _0x59732f.slice(_0x2f8351, _0x512f57 - _0x2f8351 + 0x1);
        }
        var _0x119264 = _0xe263d4(_0x5426e7.split("/"));
        var _0x3d1e7e = _0xe263d4(_0x3cc7b8.split("/"));
        var _0x320088 = Math.min(_0x119264.length, _0x3d1e7e.length);
        var _0x573358 = _0x320088;
        for (var _0x3f74dc = 0x0; _0x3f74dc < _0x320088; _0x3f74dc++) {
          if (_0x119264[_0x3f74dc] !== _0x3d1e7e[_0x3f74dc]) {
            _0x573358 = _0x3f74dc;
            break;
          }
        }
        var _0x37f78f = [];
        for (var _0x3f74dc = _0x573358; _0x3f74dc < _0x119264.length; _0x3f74dc++) {
          _0x37f78f.push("..");
        }
        _0x37f78f = _0x37f78f.concat(_0x3d1e7e.slice(_0x573358));
        return _0x37f78f.join("/");
      }
    };
    var _0x1e4cfb = {
      "ttys": [],
      "init": function () {},
      "shutdown": function () {},
      "register": function (_0x33a16d, _0x4f9c50) {
        _0x1e4cfb.ttys[_0x33a16d] = {
          "input": [],
          "output": [],
          "ops": _0x4f9c50
        };
        _0x1279a6.registerDevice(_0x33a16d, _0x1e4cfb.stream_ops);
      },
      "stream_ops": {
        "open": function (_0x4b5330) {
          var _0xe949f9 = _0x1e4cfb.ttys[_0x4b5330.node.rdev];
          if (!_0xe949f9) {
            throw new null(0x2b);
          }
          _0x4b5330.tty = _0xe949f9;
          _0x4b5330.seekable = false;
        },
        "close": function (_0x5811aa) {
          _0x5811aa.tty.ops.flush(_0x5811aa.tty);
        },
        "flush": function (_0x3aa25f) {
          _0x3aa25f.tty.ops.flush(_0x3aa25f.tty);
        },
        "read": function (_0x44dfcc, _0x1ef275, _0x1431f3, _0x56667a, _0xe6cd1a) {
          if (!_0x44dfcc.tty || !_0x44dfcc.tty.ops.get_char) {
            throw new null(0x3c);
          }
          var _0x5bd86a = 0x0;
          for (var _0x5833ca = 0x0; _0x5833ca < _0x56667a; _0x5833ca++) {
            var _0x417d5b;
            try {
              _0x417d5b = _0x44dfcc.tty.ops.get_char(_0x44dfcc.tty);
            } catch (_0x24a3b2) {
              throw new null(0x1d);
            }
            if (_0x417d5b === undefined && _0x5bd86a === 0x0) {
              throw new null(0x6);
            }
            if (_0x417d5b === null || _0x417d5b === undefined) {
              break;
            }
            _0x5bd86a++;
            _0x1ef275[_0x1431f3 + _0x5833ca] = _0x417d5b;
          }
          if (_0x5bd86a) {
            _0x44dfcc.node.timestamp = Date.now();
          }
          return _0x5bd86a;
        },
        "write": function (_0x900805, _0x3f47f8, _0x1f0009, _0x5183f8, _0x5eb999) {
          if (!_0x900805.tty || !_0x900805.tty.ops.put_char) {
            throw new null(0x3c);
          }
          try {
            for (var _0x334dda = 0x0; _0x334dda < _0x5183f8; _0x334dda++) {
              _0x900805.tty.ops.put_char(_0x900805.tty, _0x3f47f8[_0x1f0009 + _0x334dda]);
            }
          } catch (_0x2e9f41) {
            throw new null(0x1d);
          }
          if (_0x5183f8) {
            _0x900805.node.timestamp = Date.now();
          }
          return _0x334dda;
        }
      },
      "default_tty_ops": {
        "get_char": function (_0x3c58f2) {
          if (!_0x3c58f2.input.length) {
            var _0x5b3511 = null;
            if (_0x5527da) {
              var _0x380213 = Buffer.alloc(0x100);
              var _0x120ffa = 0x0;
              try {
                _0x120ffa = _0x5aa999.readSync(process.stdin.fd, _0x380213, 0x0, 0x100, -0x1);
              } catch (_0x26fcf1) {
                if (_0x26fcf1.toString().includes("EOF")) {
                  _0x120ffa = 0x0;
                } else {
                  throw _0x26fcf1;
                }
              }
              if (_0x120ffa > 0x0) {
                _0x5b3511 = _0x380213.slice(0x0, _0x120ffa).toString("utf-8");
              } else {
                _0x5b3511 = null;
              }
            } else {
              if (typeof window != "undefined" && typeof window.prompt == "function") {
                _0x5b3511 = window.prompt("Input: ");
                if (_0x5b3511 !== null) {
                  _0x5b3511 += "\n";
                }
              } else if (typeof readline == "function") {
                _0x5b3511 = readline();
                if (_0x5b3511 !== null) {
                  _0x5b3511 += "\n";
                }
              }
            }
            if (!_0x5b3511) {
              return null;
            }
            _0x3c58f2.input = _0x2ae60e(_0x5b3511, true);
          }
          return _0x3c58f2.input.shift();
        },
        "put_char": function (_0xc3ed47, _0x38dba1) {
          if (_0x38dba1 === null || _0x38dba1 === 0xa) {
            _0x3de750(_0x227981(_0xc3ed47.output, 0x0));
            _0xc3ed47.output = [];
          } else {
            if (_0x38dba1 != 0x0) {
              _0xc3ed47.output.push(_0x38dba1);
            }
          }
        },
        "flush": function (_0x3c2774) {
          if (_0x3c2774.output && _0x3c2774.output.length > 0x0) {
            _0x3de750(_0x227981(_0x3c2774.output, 0x0));
            _0x3c2774.output = [];
          }
        }
      },
      "default_tty1_ops": {
        "put_char": function (_0x33ad98, _0x3108df) {
          if (_0x3108df === null || _0x3108df === 0xa) {
            _0x314449(_0x227981(_0x33ad98.output, 0x0));
            _0x33ad98.output = [];
          } else {
            if (_0x3108df != 0x0) {
              _0x33ad98.output.push(_0x3108df);
            }
          }
        },
        "flush": function (_0x3ecc64) {
          if (_0x3ecc64.output && _0x3ecc64.output.length > 0x0) {
            _0x314449(_0x227981(_0x3ecc64.output, 0x0));
            _0x3ecc64.output = [];
          }
        }
      }
    };
    function _0x4cd8e6(_0x4fe7c2, _0x3e09e4) {
      _0x1dd929.fill(0x0, _0x4fe7c2, _0x4fe7c2 + _0x3e09e4);
    }
    function _0x3d78e3(_0x239e03) {
      _0x239e03 = Math.ceil(_0x239e03 / 0x10000) * 0x10000;
      var _0x44b551 = _0x1286cb(0x10000, _0x239e03);
      if (!_0x44b551) {
        return 0x0;
      }
      _0x4cd8e6(_0x44b551, _0x239e03);
      return _0x44b551;
    }
    var _0x65510e = {
      "ops_table": null,
      "mount": function (_0x41ddcd) {
        return _0x65510e.createNode(null, "/", 16895, 0x0);
      },
      "createNode": function (_0x4aca5d, _0x5e599c, _0xc7f152, _0x2247bd) {
        if ((_0xc7f152 & 0xf000) === 0x6000 || (_0xc7f152 & 0xf000) === 0x1000) {
          throw new null(0x3f);
        }
        _0x65510e.ops_table = {
          "dir": {
            "node": {
              "getattr": _0x65510e.node_ops.getattr,
              "setattr": _0x65510e.node_ops.setattr,
              "lookup": _0x65510e.node_ops.lookup,
              "mknod": _0x65510e.node_ops.mknod,
              "rename": _0x65510e.node_ops.rename,
              "unlink": _0x65510e.node_ops.unlink,
              "rmdir": _0x65510e.node_ops.rmdir,
              "readdir": _0x65510e.node_ops.readdir,
              "symlink": _0x65510e.node_ops.symlink
            },
            "stream": {
              "llseek": _0x65510e.stream_ops.llseek
            }
          },
          "file": {
            "node": {
              "getattr": _0x65510e.node_ops.getattr,
              "setattr": _0x65510e.node_ops.setattr
            },
            "stream": {
              "llseek": _0x65510e.stream_ops.llseek,
              "read": _0x65510e.stream_ops.read,
              "write": _0x65510e.stream_ops.write,
              "allocate": _0x65510e.stream_ops.allocate,
              "mmap": _0x65510e.stream_ops.mmap,
              "msync": _0x65510e.stream_ops.msync
            }
          },
          "link": {
            "node": {
              "getattr": _0x65510e.node_ops.getattr,
              "setattr": _0x65510e.node_ops.setattr,
              "readlink": _0x65510e.node_ops.readlink
            },
            "stream": {}
          },
          "chrdev": {
            "node": {
              "getattr": _0x65510e.node_ops.getattr,
              "setattr": _0x65510e.node_ops.setattr
            },
            "stream": _0x1279a6.chrdev_stream_ops
          }
        };
        var _0x57c479 = _0x1279a6.createNode(_0x4aca5d, _0x5e599c, _0xc7f152, _0x2247bd);
        if ((_0x57c479.mode & 0xf000) === 0x4000) {
          _0x57c479.node_ops = null.dir.node;
          _0x57c479.stream_ops = null.dir.stream;
          _0x57c479.contents = {};
        } else {
          if ((_0x57c479.mode & 0xf000) === 0x8000) {
            _0x57c479.node_ops = null.file.node;
            _0x57c479.stream_ops = null.file.stream;
            _0x57c479.usedBytes = 0x0;
            _0x57c479.contents = null;
          } else {
            if ((_0x57c479.mode & 0xf000) === 0xa000) {
              _0x57c479.node_ops = null.link.node;
              _0x57c479.stream_ops = null.link.stream;
            } else if ((_0x57c479.mode & 0xf000) === 0x2000) {
              _0x57c479.node_ops = null.chrdev.node;
              _0x57c479.stream_ops = null.chrdev.stream;
            }
          }
        }
        _0x57c479.timestamp = Date.now();
        if (_0x4aca5d) {
          _0x4aca5d.contents[_0x5e599c] = _0x57c479;
          _0x4aca5d.timestamp = _0x57c479.timestamp;
        }
        return _0x57c479;
      },
      "getFileDataAsTypedArray": function (_0x54b67f) {
        if (!_0x54b67f.contents) {
          return new Uint8Array(0x0);
        }
        if (_0x54b67f.contents.subarray) {
          return _0x54b67f.contents.subarray(0x0, _0x54b67f.usedBytes);
        }
        return new Uint8Array(_0x54b67f.contents);
      },
      "expandFileStorage": function (_0x2b7dc3, _0x500a7b) {
        var _0x4f7198 = _0x2b7dc3.contents ? _0x2b7dc3.contents.length : 0x0;
        if (_0x4f7198 >= _0x500a7b) {
          return;
        }
        _0x500a7b = Math.max(_0x500a7b, _0x4f7198 * (_0x4f7198 < 1048576 ? 0x2 : 1.125) >>> 0x0);
        if (_0x4f7198 != 0x0) {
          _0x500a7b = Math.max(_0x500a7b, 0x100);
        }
        var _0x177233 = _0x2b7dc3.contents;
        _0x2b7dc3.contents = new Uint8Array(_0x500a7b);
        if (_0x2b7dc3.usedBytes > 0x0) {
          _0x2b7dc3.contents.set(_0x177233.subarray(0x0, _0x2b7dc3.usedBytes), 0x0);
        }
      },
      "resizeFileStorage": function (_0x128a09, _0x1596d2) {
        if (_0x128a09.usedBytes == _0x1596d2) {
          return;
        }
        if (_0x1596d2 == 0x0) {
          _0x128a09.contents = null;
          _0x128a09.usedBytes = 0x0;
        } else {
          var _0x44d8b3 = _0x128a09.contents;
          _0x128a09.contents = new Uint8Array(_0x1596d2);
          if (_0x44d8b3) {
            _0x128a09.contents.set(_0x44d8b3.subarray(0x0, Math.min(_0x1596d2, _0x128a09.usedBytes)));
          }
          _0x128a09.usedBytes = _0x1596d2;
        }
      },
      "node_ops": {
        "getattr": function (_0x12aa39) {
          var _0x1017d9 = {
            dev: (_0x12aa39.mode & 0xf000) === 0x2000 ? _0x12aa39.id : 0x1,
            ino: _0x12aa39.id,
            mode: _0x12aa39.mode,
            nlink: 0x1,
            uid: 0x0,
            gid: 0x0,
            rdev: _0x12aa39.rdev
          };
          if ((_0x12aa39.mode & 0xf000) === 0x4000) {
            _0x1017d9.size = 0x1000;
          } else {
            if ((_0x12aa39.mode & 0xf000) === 0x8000) {
              _0x1017d9.size = _0x12aa39.usedBytes;
            } else if ((_0x12aa39.mode & 0xf000) === 0xa000) {
              _0x1017d9.size = _0x12aa39.link.length;
            } else {
              _0x1017d9.size = 0x0;
            }
          }
          _0x1017d9.atime = new Date(_0x12aa39.timestamp);
          _0x1017d9.mtime = new Date(_0x12aa39.timestamp);
          _0x1017d9.ctime = new Date(_0x12aa39.timestamp);
          _0x1017d9.blksize = 0x1000;
          _0x1017d9.blocks = Math.ceil(_0x1017d9.size / _0x1017d9.blksize);
          return _0x1017d9;
        },
        "setattr": function (_0x58f4b0, _0x3867ad) {
          if (_0x3867ad.mode !== undefined) {
            _0x58f4b0.mode = _0x3867ad.mode;
          }
          if (_0x3867ad.timestamp !== undefined) {
            _0x58f4b0.timestamp = _0x3867ad.timestamp;
          }
          if (_0x3867ad.size !== undefined) {
            _0x65510e.resizeFileStorage(_0x58f4b0, _0x3867ad.size);
          }
        },
        "lookup": function (_0x2e077e, _0x336bf4) {
          throw _0x1279a6.genericErrors[0x2c];
        },
        "mknod": function (_0x4a0815, _0x44049c, _0x3f5228, _0x5d6cee) {
          return _0x65510e.createNode(_0x4a0815, _0x44049c, _0x3f5228, _0x5d6cee);
        },
        "rename": function (_0x3988cb, _0x11e4ea, _0x335471) {
          if ((_0x3988cb.mode & 0xf000) === 0x4000) {
            var _0x2c8e83;
            try {
              _0x2c8e83 = _0x1279a6.lookupNode(_0x11e4ea, _0x335471);
            } catch (_0x539b64) {}
            if (_0x2c8e83) {
              for (var _0x1f9503 in _0x2c8e83.contents) {
                throw new null(0x37);
              }
            }
          }
          delete _0x3988cb.parent.contents[_0x3988cb.name];
          _0x3988cb.parent.timestamp = Date.now();
          _0x3988cb.name = _0x335471;
          _0x11e4ea.contents[_0x335471] = _0x3988cb;
          _0x11e4ea.timestamp = _0x3988cb.parent.timestamp;
          _0x3988cb.parent = _0x11e4ea;
        },
        "unlink": function (_0x1e980c, _0x712e5e) {
          delete _0x1e980c.contents[_0x712e5e];
          _0x1e980c.timestamp = Date.now();
        },
        "rmdir": function (_0x4121bb, _0x115878) {
          var _0x536351 = _0x1279a6.lookupNode(_0x4121bb, _0x115878);
          for (var _0x2e089 in _0x536351.contents) {
            throw new null(0x37);
          }
          delete _0x4121bb.contents[_0x115878];
          _0x4121bb.timestamp = Date.now();
        },
        "readdir": function (_0x2e298a) {
          var _0x16788c = [".", ".."];
          for (var _0x13a138 in _0x2e298a.contents) {
            if (!_0x2e298a.contents.hasOwnProperty(_0x13a138)) {
              continue;
            }
            _0x16788c.push(_0x13a138);
          }
          return _0x16788c;
        },
        "symlink": function (_0x1649ac, _0x1501f2, _0x424d1c) {
          var _0x205844 = _0x65510e.createNode(_0x1649ac, _0x1501f2, 41471, 0x0);
          _0x205844.link = _0x424d1c;
          return _0x205844;
        },
        "readlink": function (_0xed591f) {
          if (!((_0xed591f.mode & 0xf000) === 0xa000)) {
            throw new null(0x1c);
          }
          return _0xed591f.link;
        }
      },
      "stream_ops": {
        "read": function (_0x5b4ec9, _0x54c578, _0x5ec31a, _0x48592b, _0x979c0b) {
          var _0x4b7d6c = _0x5b4ec9.node.contents;
          if (_0x979c0b >= _0x5b4ec9.node.usedBytes) {
            return 0x0;
          }
          var _0x781f10 = Math.min(_0x5b4ec9.node.usedBytes - _0x979c0b, _0x48592b);
          if (_0x781f10 > 0x8 && _0x4b7d6c.subarray) {
            _0x54c578.set(_0x4b7d6c.subarray(_0x979c0b, _0x979c0b + _0x781f10), _0x5ec31a);
          } else {
            for (var _0x116ded = 0x0; _0x116ded < _0x781f10; _0x116ded++) {
              _0x54c578[_0x5ec31a + _0x116ded] = _0x4b7d6c[_0x979c0b + _0x116ded];
            }
          }
          return _0x781f10;
        },
        "write": function (_0x54bf5b, _0x147e03, _0x884703, _0x52442f, _0x56f7f5, _0x5d30a5) {
          if (_0x147e03.buffer === _0x53fd76.buffer) {
            _0x5d30a5 = false;
          }
          if (!_0x52442f) {
            return 0x0;
          }
          var _0x3a92c2 = _0x54bf5b.node;
          _0x3a92c2.timestamp = Date.now();
          if (_0x147e03.subarray && (!_0x3a92c2.contents || _0x3a92c2.contents.subarray)) {
            if (_0x5d30a5) {
              _0x3a92c2.contents = _0x147e03.subarray(_0x884703, _0x884703 + _0x52442f);
              _0x3a92c2.usedBytes = _0x52442f;
              return _0x52442f;
            } else {
              if (_0x3a92c2.usedBytes === 0x0 && _0x56f7f5 === 0x0) {
                _0x3a92c2.contents = _0x147e03.slice(_0x884703, _0x884703 + _0x52442f);
                _0x3a92c2.usedBytes = _0x52442f;
                return _0x52442f;
              } else {
                if (_0x56f7f5 + _0x52442f <= _0x3a92c2.usedBytes) {
                  _0x3a92c2.contents.set(_0x147e03.subarray(_0x884703, _0x884703 + _0x52442f), _0x56f7f5);
                  return _0x52442f;
                }
              }
            }
          }
          _0x65510e.expandFileStorage(_0x3a92c2, _0x56f7f5 + _0x52442f);
          if (_0x3a92c2.contents.subarray && _0x147e03.subarray) {
            _0x3a92c2.contents.set(_0x147e03.subarray(_0x884703, _0x884703 + _0x52442f), _0x56f7f5);
          } else {
            for (var _0x1751ac = 0x0; _0x1751ac < _0x52442f; _0x1751ac++) {
              _0x3a92c2.contents[_0x56f7f5 + _0x1751ac] = _0x147e03[_0x884703 + _0x1751ac];
            }
          }
          _0x3a92c2.usedBytes = Math.max(_0x3a92c2.usedBytes, _0x56f7f5 + _0x52442f);
          return _0x52442f;
        },
        "llseek": function (_0x158502, _0x2f0f32, _0xb0e39e) {
          var _0x398807 = _0x2f0f32;
          if (_0xb0e39e === 0x1) {
            _0x398807 += _0x158502.position;
          } else if (_0xb0e39e === 0x2) {
            if ((_0x158502.node.mode & 0xf000) === 0x8000) {
              _0x398807 += _0x158502.node.usedBytes;
            }
          }
          if (_0x398807 < 0x0) {
            throw new null(0x1c);
          }
          return _0x398807;
        },
        "allocate": function (_0x5b3a6c, _0x6dc537, _0x15f73d) {
          _0x65510e.expandFileStorage(_0x5b3a6c.node, _0x6dc537 + _0x15f73d);
          _0x5b3a6c.node.usedBytes = Math.max(_0x5b3a6c.node.usedBytes, _0x6dc537 + _0x15f73d);
        },
        "mmap": function (_0x1c3a68, _0x5e44f9, _0x1d843e, _0x4d5cb1, _0x2eb2bd, _0x593a97) {
          if (_0x5e44f9 !== 0x0) {
            throw new null(0x1c);
          }
          if (!((_0x1c3a68.node.mode & 0xf000) === 0x8000)) {
            throw new null(0x2b);
          }
          var _0x318bf1;
          var _0x40b6c8;
          var _0x109a3e = _0x1c3a68.node.contents;
          if (!(_0x593a97 & 0x2) && _0x109a3e.buffer === _0x5263d6) {
            _0x40b6c8 = false;
            _0x318bf1 = _0x109a3e.byteOffset;
          } else {
            if (_0x4d5cb1 > 0x0 || _0x4d5cb1 + _0x1d843e < _0x109a3e.length) {
              if (_0x109a3e.subarray) {
                _0x109a3e = _0x109a3e.subarray(_0x4d5cb1, _0x4d5cb1 + _0x1d843e);
              } else {
                _0x109a3e = Array.prototype.slice.call(_0x109a3e, _0x4d5cb1, _0x4d5cb1 + _0x1d843e);
              }
            }
            _0x40b6c8 = true;
            _0x318bf1 = _0x3d78e3(_0x1d843e);
            if (!_0x318bf1) {
              throw new null(0x30);
            }
            _0x53fd76.set(_0x109a3e, _0x318bf1);
          }
          return {
            "ptr": _0x318bf1,
            "allocated": _0x40b6c8
          };
        },
        "msync": function (_0x48d20c, _0x4a6f2c, _0x474c8a, _0x46c1a4, _0x37108d) {
          if (!((_0x48d20c.node.mode & 0xf000) === 0x8000)) {
            throw new null(0x2b);
          }
          if (_0x37108d & 0x2) {
            return 0x0;
          }
          return 0x0;
        }
      }
    };
    function _0x72654a(_0x5979fa, _0x275d74, _0x132364, _0x12dc68) {
      var _0x23a13a = !_0x12dc68 ? _0x1b448c : '';
      _0x348b7b(_0x5979fa, function (_0x25a307) {
        _0x29a3fa(_0x25a307, "Loading data file \"" + _0x5979fa + "\" failed (no arrayBuffer).");
        _0x275d74(new Uint8Array(_0x25a307));
        if (_0x23a13a) {
          _0x5ddd77(_0x23a13a);
        }
      }, function (_0x57263a) {
        if (_0x132364) {
          _0x132364();
        } else {
          throw "Loading data file \"" + _0x5979fa + "\" failed.";
        }
      });
      if (_0x23a13a) {
        _0x15c051(_0x23a13a);
      }
    }
    var _0x5e0b9d = {
      "dbs": {},
      "indexedDB": () => {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        var _0x299d02 = null;
        if (typeof window == "object") {
          _0x299d02 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }
        _0x29a3fa(_0x299d02, "IDBFS used, but indexedDB not supported");
        return _0x299d02;
      },
      "DB_VERSION": 0x15,
      "DB_STORE_NAME": "FILE_DATA",
      "mount": function (_0xacd1b2) {
        return _0x65510e.mount.apply(null, arguments);
      },
      "syncfs": (_0x139d8e, _0xfb6c16, _0x191d61) => {
        _0x5e0b9d.getLocalSet(_0x139d8e, (_0x2e3a71, _0x490267) => {
          if (_0x2e3a71) {
            return _0x191d61(_0x2e3a71);
          }
          _0x5e0b9d.getRemoteSet(_0x139d8e, (_0x1d2855, _0x46c361) => {
            if (_0x1d2855) {
              return _0x191d61(_0x1d2855);
            }
            var _0x6cea47 = _0xfb6c16 ? _0x46c361 : _0x490267;
            var _0x1ace76 = _0xfb6c16 ? _0x490267 : _0x46c361;
            _0x5e0b9d.reconcile(_0x6cea47, _0x1ace76, _0x191d61);
          });
        });
      },
      "getDB": (_0x463847, _0x42c7bf) => {
        var _0x1686c0 = _0x5e0b9d.dbs[_0x463847];
        if (_0x1686c0) {
          return _0x42c7bf(null, _0x1686c0);
        }
        var _0x2c5026;
        try {
          _0x2c5026 = _0x5e0b9d.indexedDB().open(_0x463847, 0x15);
        } catch (_0x19c404) {
          return _0x42c7bf(_0x19c404);
        }
        if (!_0x2c5026) {
          return _0x42c7bf("Unable to connect to IndexedDB");
        }
        _0x2c5026.onupgradeneeded = _0x76c419 => {
          var _0x2fb28a = _0x76c419.target.result;
          var _0x735a1a = _0x76c419.target.transaction;
          var _0x3d5da2;
          if (_0x2fb28a.objectStoreNames.contains("FILE_DATA")) {
            _0x3d5da2 = _0x735a1a.objectStore("FILE_DATA");
          } else {
            _0x3d5da2 = _0x2fb28a.createObjectStore("FILE_DATA");
          }
          if (!_0x3d5da2.indexNames.contains("timestamp")) {
            _0x3d5da2.createIndex("timestamp", "timestamp", {
              "unique": false
            });
          }
        };
        _0x2c5026.onsuccess = () => {
          _0x1686c0 = _0x2c5026.result;
          _0x5e0b9d.dbs[_0x463847] = _0x1686c0;
          _0x42c7bf(null, _0x1686c0);
        };
        _0x2c5026.onerror = _0x362b67 => {
          _0x42c7bf(this.error);
          _0x362b67.preventDefault();
        };
      },
      "getLocalSet": (_0x48da6d, _0x148a94) => {
        var _0x7759b7 = {};
        function _0x279c2a(_0x3ce670) {
          return _0x3ce670 !== "." && _0x3ce670 !== "..";
        }
        function _0x3eea7d(_0x260980) {
          return _0x277ebb => {
            return _0x2d0e3b.normalize(_0x260980 + "/" + _0x277ebb);
          };
        }
        var _0x25a741 = _0x1279a6.readdir(_0x48da6d.mountpoint).filter(_0x279c2a).map(_0x3eea7d(_0x48da6d.mountpoint));
        while (_0x25a741.length) {
          var _0x9782df = _0x25a741.pop();
          var _0x210146;
          try {
            _0x210146 = _0x1279a6.stat(_0x9782df);
          } catch (_0x493bee) {
            return _0x148a94(_0x493bee);
          }
          if ((_0x210146.mode & 0xf000) === 0x4000) {
            _0x25a741.push.apply(_0x25a741, _0x1279a6.readdir(_0x9782df).filter(_0x279c2a).map(_0x3eea7d(_0x9782df)));
          }
          _0x7759b7[_0x9782df] = {
            "timestamp": _0x210146.mtime
          };
        }
        return _0x148a94(null, {
          "type": "local",
          "entries": _0x7759b7
        });
      },
      "getRemoteSet": (_0x21bf48, _0x1a56b5) => {
        var _0x332996 = {};
        _0x5e0b9d.getDB(_0x21bf48.mountpoint, (_0x3bdbdc, _0x57243a) => {
          if (_0x3bdbdc) {
            return _0x1a56b5(_0x3bdbdc);
          }
          try {
            var _0x2a40df = _0x57243a.transaction(["FILE_DATA"], "readonly");
            _0x2a40df.onerror = _0x57c127 => {
              _0x1a56b5(this.error);
              _0x57c127.preventDefault();
            };
            var _0x2ced33 = _0x2a40df.objectStore("FILE_DATA");
            var _0x3df1f8 = _0x2ced33.index("timestamp");
            _0x3df1f8.openKeyCursor().onsuccess = _0x1c43df => {
              var _0x52c156 = _0x1c43df.target.result;
              if (!_0x52c156) {
                return _0x1a56b5(null, {
                  "type": "remote",
                  "db": _0x57243a,
                  "entries": _0x332996
                });
              }
              _0x332996[_0x52c156.primaryKey] = {
                "timestamp": _0x52c156.key
              };
              _0x52c156["continue"]();
            };
          } catch (_0x3ed951) {
            return _0x1a56b5(_0x3ed951);
          }
        });
      },
      "loadLocalEntry": (_0x5db23c, _0x5bef5a) => {
        var _0x2cbb45;
        var _0x3922af;
        try {
          var _0x23471d = _0x1279a6.lookupPath(_0x5db23c);
          _0x3922af = _0x23471d.node;
          _0x2cbb45 = _0x1279a6.stat(_0x5db23c);
        } catch (_0x46ecbf) {
          return _0x5bef5a(_0x46ecbf);
        }
        if ((_0x2cbb45.mode & 0xf000) === 0x4000) {
          return _0x5bef5a(null, {
            "timestamp": _0x2cbb45.mtime,
            "mode": _0x2cbb45.mode
          });
        } else {
          return (_0x2cbb45.mode & 0xf000) === 0x8000 ? (_0x3922af.contents = _0x65510e.getFileDataAsTypedArray(_0x3922af), _0x5bef5a(null, {
            "timestamp": _0x2cbb45.mtime,
            "mode": _0x2cbb45.mode,
            "contents": _0x3922af.contents
          })) : _0x5bef5a(new Error("node type not supported"));
        }
      },
      "storeLocalEntry": (_0x3fbe53, _0x469be9, _0x1159d6) => {
        try {
          if ((_0x469be9.mode & 0xf000) === 0x4000) {
            _0x1279a6.mkdirTree(_0x3fbe53, _0x469be9.mode);
          } else {
            if ((_0x469be9.mode & 0xf000) === 0x8000) {
              _0x1279a6.writeFile(_0x3fbe53, _0x469be9.contents, {
                "canOwn": true
              });
            } else {
              return _0x1159d6(new Error("node type not supported"));
            }
          }
          _0x1279a6.chmod(_0x3fbe53, _0x469be9.mode);
          _0x1279a6.utime(_0x3fbe53, _0x469be9.timestamp, _0x469be9.timestamp);
        } catch (_0x3b5212) {
          return _0x1159d6(_0x3b5212);
        }
        _0x1159d6(null);
      },
      "removeLocalEntry": (_0xf56446, _0x103fa8) => {
        try {
          var _0x3ad18d = _0x1279a6.stat(_0xf56446);
          if ((_0x3ad18d.mode & 0xf000) === 0x4000) {
            _0x1279a6.rmdir(_0xf56446);
          } else if ((_0x3ad18d.mode & 0xf000) === 0x8000) {
            _0x1279a6.unlink(_0xf56446);
          }
        } catch (_0x2a4251) {
          return _0x103fa8(_0x2a4251);
        }
        _0x103fa8(null);
      },
      "loadRemoteEntry": (_0x5aae94, _0x5a0dfd, _0x5bca46) => {
        var _0x1fcab9 = _0x5aae94.get(_0x5a0dfd);
        _0x1fcab9.onsuccess = _0x3a5c53 => {
          _0x5bca46(null, _0x3a5c53.target.result);
        };
        _0x1fcab9.onerror = _0xcba949 => {
          _0x5bca46(this.error);
          _0xcba949.preventDefault();
        };
      },
      "storeRemoteEntry": (_0x17cc62, _0x585b21, _0x260461, _0x1d4d42) => {
        try {
          var _0x1f8189 = _0x17cc62.put(_0x260461, _0x585b21);
        } catch (_0x508cc0) {
          _0x1d4d42(_0x508cc0);
          return;
        }
        _0x1f8189.onsuccess = () => {
          _0x1d4d42(null);
        };
        _0x1f8189.onerror = _0x22835c => {
          _0x1d4d42(this.error);
          _0x22835c.preventDefault();
        };
      },
      "removeRemoteEntry": (_0x4229fc, _0x338eaf, _0x134293) => {
        var _0x233c6b = _0x4229fc["delete"](_0x338eaf);
        _0x233c6b.onsuccess = () => {
          _0x134293(null);
        };
        _0x233c6b.onerror = _0x39237d => {
          _0x134293(this.error);
          _0x39237d.preventDefault();
        };
      },
      "reconcile": (_0x279de0, _0x1135b4, _0x9c1ff) => {
        var _0xab728a = 0x0;
        var _0x3e8bb4 = [];
        Object.keys(_0x279de0.entries).forEach(function (_0xe029a3) {
          var _0x4dd327 = _0x279de0.entries[_0xe029a3];
          var _0xe8636 = _0x1135b4.entries[_0xe029a3];
          if (!_0xe8636 || _0x4dd327.timestamp.getTime() != _0xe8636.timestamp.getTime()) {
            _0x3e8bb4.push(_0xe029a3);
            _0xab728a++;
          }
        });
        var _0x3ac6d4 = [];
        Object.keys(_0x1135b4.entries).forEach(function (_0x17c84a) {
          if (!_0x279de0.entries[_0x17c84a]) {
            _0x3ac6d4.push(_0x17c84a);
            _0xab728a++;
          }
        });
        if (!_0xab728a) {
          return _0x9c1ff(null);
        }
        var _0x5a83db = false;
        var _0x5dd246 = _0x279de0.type === "remote" ? _0x279de0.db : _0x1135b4.db;
        var _0x487257 = _0x5dd246.transaction(["FILE_DATA"], "readwrite");
        var _0xc810fc = _0x487257.objectStore("FILE_DATA");
        function _0x29d1d3(_0x13feb7) {
          if (_0x13feb7 && !_0x5a83db) {
            _0x5a83db = true;
            return _0x9c1ff(_0x13feb7);
          }
        }
        _0x487257.onerror = _0x5baf84 => {
          _0x29d1d3(this.error);
          _0x5baf84.preventDefault();
        };
        _0x487257.oncomplete = _0x4bd171 => {
          if (!_0x5a83db) {
            _0x9c1ff(null);
          }
        };
        _0x3e8bb4.sort().forEach(_0x2c5ec5 => {
          if (_0x1135b4.type === "local") {
            _0x5e0b9d.loadRemoteEntry(_0xc810fc, _0x2c5ec5, (_0x52e9d2, _0x8ba48d) => {
              if (_0x52e9d2) {
                return _0x29d1d3(_0x52e9d2);
              }
              _0x5e0b9d.storeLocalEntry(_0x2c5ec5, _0x8ba48d, _0x29d1d3);
            });
          } else {
            _0x5e0b9d.loadLocalEntry(_0x2c5ec5, (_0x4c2778, _0x2db4e8) => {
              if (_0x4c2778) {
                return _0x29d1d3(_0x4c2778);
              }
              _0x5e0b9d.storeRemoteEntry(_0xc810fc, _0x2c5ec5, _0x2db4e8, _0x29d1d3);
            });
          }
        });
        _0x3ac6d4.sort().reverse().forEach(_0x37cddf => {
          if (_0x1135b4.type === "local") {
            _0x5e0b9d.removeLocalEntry(_0x37cddf, _0x29d1d3);
          } else {
            _0x5e0b9d.removeRemoteEntry(_0xc810fc, _0x37cddf, _0x29d1d3);
          }
        });
      }
    };
    var _0x1279a6 = {
      "root": null,
      "mounts": [],
      "devices": {},
      "streams": [],
      "nextInode": 0x1,
      "nameTable": null,
      "currentPath": "/",
      "initialized": false,
      "ignorePermissions": true,
      "ErrnoError": null,
      "genericErrors": {},
      "filesystems": null,
      "syncFSRequests": 0x0,
      "lookupPath": (_0x2692a8, _0x406e5f = {}) => {
        _0x2692a8 = _0x1c536c.resolve("/", _0x2692a8);
        if (!_0x2692a8) {
          return {
            "path": '',
            "node": null
          };
        }
        var _0x73f7d1 = {
          "follow_mount": true,
          "recurse_count": 0x0
        };
        _0x406e5f = Object.assign(_0x73f7d1, _0x406e5f);
        if (_0x406e5f.recurse_count > 0x8) {
          throw new null(0x20);
        }
        var _0x5e6183 = _0x2d0e3b.normalizeArray(_0x2692a8.split("/").filter(_0x24effc => !!_0x24effc), false);
        var _0x37396c = null;
        var _0x1e0aeb = "/";
        for (var _0x59e126 = 0x0; _0x59e126 < _0x5e6183.length; _0x59e126++) {
          var _0x4acd55 = _0x59e126 === _0x5e6183.length - 0x1;
          if (_0x4acd55 && _0x406e5f.parent) {
            break;
          }
          _0x37396c = _0x1279a6.lookupNode(_0x37396c, _0x5e6183[_0x59e126]);
          _0x1e0aeb = _0x2d0e3b.normalize(_0x1e0aeb + "/" + _0x5e6183[_0x59e126]);
          if (!!_0x37396c.mounted) {
            if (!_0x4acd55 || _0x4acd55 && _0x406e5f.follow_mount) {
              _0x37396c = _0x37396c.mounted.root;
            }
          }
          if (!_0x4acd55 || _0x406e5f.follow) {
            var _0x463836 = 0x0;
            while ((_0x37396c.mode & 0xf000) === 0xa000) {
              var _0x5b0856 = _0x1279a6.readlink(_0x1e0aeb);
              _0x1e0aeb = _0x1c536c.resolve(_0x2d0e3b.dirname(_0x1e0aeb), _0x5b0856);
              var _0x49f986 = _0x1279a6.lookupPath(_0x1e0aeb, {
                "recurse_count": _0x406e5f.recurse_count + 0x1
              });
              _0x37396c = _0x49f986.node;
              if (_0x463836++ > 0x28) {
                throw new null(0x20);
              }
            }
          }
        }
        return {
          "path": _0x1e0aeb,
          "node": _0x37396c
        };
      },
      "getPath": _0x4a3265 => {
        var _0x7a3fd2;
        while (true) {
          if (_0x4a3265 === _0x4a3265.parent) {
            var _0x3f1ab0 = _0x4a3265.mount.mountpoint;
            if (!_0x7a3fd2) {
              return _0x3f1ab0;
            }
            return _0x3f1ab0[_0x3f1ab0.length - 0x1] !== "/" ? _0x3f1ab0 + "/" + _0x7a3fd2 : _0x3f1ab0 + _0x7a3fd2;
          }
          _0x7a3fd2 = _0x7a3fd2 ? _0x4a3265.name + "/" + _0x7a3fd2 : _0x4a3265.name;
          _0x4a3265 = _0x4a3265.parent;
        }
      },
      "hashName": (_0x2f982e, _0x4d39ca) => {
        var _0x394155 = 0x0;
        for (var _0x431011 = 0x0; _0x431011 < _0x4d39ca.length; _0x431011++) {
          _0x394155 = (_0x394155 << 0x5) - _0x394155 + _0x4d39ca.charCodeAt(_0x431011) | 0x0;
        }
        return (_0x2f982e + _0x394155 >>> 0x0) % null.length;
      },
      "hashAddNode": _0x5e72d5 => {
        var _0x4ef70b = _0x1279a6.hashName(_0x5e72d5.parent.id, _0x5e72d5.name);
        _0x5e72d5.name_next = null[_0x4ef70b];
        null[_0x4ef70b] = _0x5e72d5;
      },
      "hashRemoveNode": _0x454a20 => {
        var _0x1dc19e = _0x1279a6.hashName(_0x454a20.parent.id, _0x454a20.name);
        if (null[_0x1dc19e] === _0x454a20) {
          null[_0x1dc19e] = _0x454a20.name_next;
        } else {
          var _0x5d0100 = null[_0x1dc19e];
          while (_0x5d0100) {
            if (_0x5d0100.name_next === _0x454a20) {
              _0x5d0100.name_next = _0x454a20.name_next;
              break;
            }
            _0x5d0100 = _0x5d0100.name_next;
          }
        }
      },
      "lookupNode": (_0xcbd197, _0x37240b) => {
        var _0x29017c = _0x1279a6.mayLookup(_0xcbd197);
        if (_0x29017c) {
          throw new null(_0x29017c, _0xcbd197);
        }
        var _0x26a81e = _0x1279a6.hashName(_0xcbd197.id, _0x37240b);
        for (var _0x46e6b0 = null[_0x26a81e]; _0x46e6b0; _0x46e6b0 = _0x46e6b0.name_next) {
          var _0x3ea48f = _0x46e6b0.name;
          if (_0x46e6b0.parent.id === _0xcbd197.id && _0x3ea48f === _0x37240b) {
            return _0x46e6b0;
          }
        }
        return _0xcbd197.node_ops.lookup(_0xcbd197, _0x37240b);
      },
      "createNode": (_0x3aa36c, _0x4bab40, _0x4f9052, _0x17900a) => {
        var _0x2f162e = new _0x1279a6.FSNode(_0x3aa36c, _0x4bab40, _0x4f9052, _0x17900a);
        _0x1279a6.hashAddNode(_0x2f162e);
        return _0x2f162e;
      },
      "destroyNode": _0x48ceb5 => {
        _0x1279a6.hashRemoveNode(_0x48ceb5);
      },
      "isRoot": _0x26d37c => {
        return _0x26d37c === _0x26d37c.parent;
      },
      "isMountpoint": _0x578a91 => {
        return !!_0x578a91.mounted;
      },
      "isFile": _0x3a3ef4 => {
        return (_0x3a3ef4 & 0xf000) === 0x8000;
      },
      "isDir": _0x2d152b => {
        return (_0x2d152b & 0xf000) === 0x4000;
      },
      "isLink": _0x41db15 => {
        return (_0x41db15 & 0xf000) === 0xa000;
      },
      "isChrdev": _0x486dc8 => {
        return (_0x486dc8 & 0xf000) === 0x2000;
      },
      "isBlkdev": _0x582aec => {
        return (_0x582aec & 0xf000) === 0x6000;
      },
      "isFIFO": _0x9cfe01 => {
        return (_0x9cfe01 & 0xf000) === 0x1000;
      },
      "isSocket": _0x2b0466 => {
        return (_0x2b0466 & 0xc000) === 0xc000;
      },
      "flagModes": {
        "r": 0x0,
        "r+": 0x2,
        "w": 0x241,
        "w+": 0x242,
        "a": 0x441,
        "a+": 0x442
      },
      "modeStringToFlags": _0x1e7c76 => {
        var _0x46a162 = _0x1279a6.flagModes[_0x1e7c76];
        if (typeof _0x46a162 == "undefined") {
          throw new Error("Unknown file open mode: " + _0x1e7c76);
        }
        return _0x46a162;
      },
      "flagsToPermissionString": _0x5d4a50 => {
        var _0x2f7cb9 = ["r", "w", "rw"][_0x5d4a50 & 0x3];
        if (_0x5d4a50 & 0x200) {
          _0x2f7cb9 += "w";
        }
        return _0x2f7cb9;
      },
      "nodePermissions": (_0x3e4eef, _0x3d07d8) => {
        return 0x0;
        if (_0x3d07d8.includes("r") && !(_0x3e4eef.mode & 0x124)) {
          return 0x2;
        } else {
          if (_0x3d07d8.includes("w") && !(_0x3e4eef.mode & 0x92)) {
            return 0x2;
          } else {
            if (_0x3d07d8.includes("x") && !(_0x3e4eef.mode & 0x49)) {
              return 0x2;
            }
          }
        }
        return 0x0;
      },
      "mayLookup": _0x3a4711 => {
        var _0x41c0b6 = _0x1279a6.nodePermissions(_0x3a4711, "x");
        if (_0x41c0b6) {
          return _0x41c0b6;
        }
        if (!_0x3a4711.node_ops.lookup) {
          return 0x2;
        }
        return 0x0;
      },
      "mayCreate": (_0xdb1d75, _0x458fd7) => {
        try {
          return 0x14;
        } catch (_0x110c2a) {}
        return _0x1279a6.nodePermissions(_0xdb1d75, "wx");
      },
      "mayDelete": (_0x3f1ba9, _0x32c9e7, _0x15769a) => {
        var _0x59393c;
        try {
          _0x59393c = _0x1279a6.lookupNode(_0x3f1ba9, _0x32c9e7);
        } catch (_0x11c1ff) {
          return _0x11c1ff.errno;
        }
        var _0x813b2a = _0x1279a6.nodePermissions(_0x3f1ba9, "wx");
        if (_0x813b2a) {
          return _0x813b2a;
        }
        if (_0x15769a) {
          if (!((_0x59393c.mode & 0xf000) === 0x4000)) {
            return 0x36;
          }
          if (_0x59393c === _0x59393c.parent || _0x1279a6.getPath(_0x59393c) === "/") {
            return 0xa;
          }
        } else {
          if ((_0x59393c.mode & 0xf000) === 0x4000) {
            return 0x1f;
          }
        }
        return 0x0;
      },
      "mayOpen": (_0x1184f1, _0x248c3d) => {
        if (!_0x1184f1) {
          return 0x2c;
        }
        if ((_0x1184f1.mode & 0xf000) === 0xa000) {
          return 0x20;
        } else {
          if ((_0x1184f1.mode & 0xf000) === 0x4000) {
            if (_0x1279a6.flagsToPermissionString(_0x248c3d) !== "r" || _0x248c3d & 0x200) {
              return 0x1f;
            }
          }
        }
        return _0x1279a6.nodePermissions(_0x1184f1, _0x1279a6.flagsToPermissionString(_0x248c3d));
      },
      "MAX_OPEN_FDS": 0x1000,
      "nextfd": (_0x28cdf7 = 0x0, _0x47d427 = 0x1000) => {
        for (var _0x1cf841 = _0x28cdf7; _0x1cf841 <= _0x47d427; _0x1cf841++) {
          if (!_0x1279a6.streams[_0x1cf841]) {
            return _0x1cf841;
          }
        }
        throw new null(0x21);
      },
      "getStream": _0x266764 => _0x1279a6.streams[_0x266764],
      "createStream": (_0x3b4dc7, _0x4bdeb4, _0x23e5eb) => {
        if (!_0x1279a6.FSStream) {
          _0x1279a6.FSStream = function () {};
          _0x1279a6.FSStream.prototype = {
            "object": {
              "get": function () {
                return this.node;
              },
              "set": function (_0x4343a9) {
                this.node = _0x4343a9;
              }
            },
            "isRead": {
              "get": function () {
                return (this.flags & 0x200003) !== 0x1;
              }
            },
            "isWrite": {
              "get": function () {
                return (this.flags & 0x200003) !== 0x0;
              }
            },
            "isAppend": {
              "get": function () {
                return this.flags & 0x400;
              }
            }
          };
        }
        _0x3b4dc7 = Object.assign(new _0x1279a6.FSStream(), _0x3b4dc7);
        var _0x306d4b = _0x1279a6.nextfd(_0x4bdeb4, _0x23e5eb);
        _0x3b4dc7.fd = _0x306d4b;
        _0x1279a6.streams[_0x306d4b] = _0x3b4dc7;
        return _0x3b4dc7;
      },
      "closeStream": _0x37275a => {
        _0x1279a6.streams[_0x37275a] = null;
      },
      "chrdev_stream_ops": {
        "open": _0x37819a => {
          var _0x32c5b4 = _0x1279a6.devices[_0x37819a.node.rdev];
          _0x37819a.stream_ops = _0x32c5b4.stream_ops;
          if (_0x37819a.stream_ops.open) {
            _0x37819a.stream_ops.open(_0x37819a);
          }
        },
        "llseek": () => {
          throw new null(0x46);
        }
      },
      "major": _0x6ddaab => _0x6ddaab >> 0x8,
      "minor": _0x568243 => _0x568243 & 0xff,
      "makedev": (_0x560508, _0x27f2d6) => _0x560508 << 0x8 | _0x27f2d6,
      "registerDevice": (_0x27f6e2, _0x5a3ec3) => {
        _0x1279a6.devices[_0x27f6e2] = {
          "stream_ops": _0x5a3ec3
        };
      },
      "getDevice": _0x2c577c => _0x1279a6.devices[_0x2c577c],
      "getMounts": _0x44cfab => {
        var _0x59d0fc = [];
        var _0x346eea = [_0x44cfab];
        while (_0x346eea.length) {
          var _0x187786 = _0x346eea.pop();
          _0x59d0fc.push(_0x187786);
          _0x346eea.push.apply(_0x346eea, _0x187786.mounts);
        }
        return _0x59d0fc;
      },
      "syncfs": (_0x1724e1, _0x12f9ad) => {
        if (typeof _0x1724e1 == "function") {
          _0x12f9ad = _0x1724e1;
          _0x1724e1 = false;
        }
        0x0++;
        var _0x514bc9 = _0x1279a6.getMounts(null.mount);
        var _0x9a4485 = 0x0;
        function _0x5897bd(_0x5350ff) {
          0x0--;
          return _0x12f9ad(_0x5350ff);
        }
        function _0x162df5(_0xfe9bf5) {
          if (_0xfe9bf5) {
            if (!_0x162df5.errored) {
              _0x162df5.errored = true;
              return _0x5897bd(_0xfe9bf5);
            }
            return;
          }
          if (++_0x9a4485 >= _0x514bc9.length) {
            _0x5897bd(null);
          }
        }
        _0x514bc9.forEach(_0x560e17 => {
          if (!_0x560e17.type.syncfs) {
            return _0x162df5(null);
          }
          _0x560e17.type.syncfs(_0x560e17, _0x1724e1, _0x162df5);
        });
      },
      "mount": (_0x2301de, _0x548b2f, _0x3abd67) => {
        var _0x2af131 = _0x3abd67 === "/";
        var _0x5f04c3 = !_0x3abd67;
        var _0x1e75a1;
        if (_0x2af131 && null) {
          throw new null(0xa);
        } else {
          if (!_0x2af131 && !_0x5f04c3) {
            var _0x5a856b = _0x1279a6.lookupPath(_0x3abd67, {
              "follow_mount": false
            });
            _0x3abd67 = _0x5a856b.path;
            _0x1e75a1 = _0x5a856b.node;
            if (!!_0x1e75a1.mounted) {
              throw new null(0xa);
            }
            if (!((_0x1e75a1.mode & 0xf000) === 0x4000)) {
              throw new null(0x36);
            }
          }
        }
        var _0x15be7b = {
          "type": _0x2301de,
          "opts": _0x548b2f,
          "mountpoint": _0x3abd67,
          "mounts": []
        };
        var _0x135365 = _0x2301de.mount(_0x15be7b);
        _0x135365.mount = _0x15be7b;
        _0x15be7b.root = _0x135365;
        if (_0x2af131) {
          _0x1279a6.root = _0x135365;
        } else if (_0x1e75a1) {
          _0x1e75a1.mounted = _0x15be7b;
          if (_0x1e75a1.mount) {
            _0x1e75a1.mount.mounts.push(_0x15be7b);
          }
        }
        return _0x135365;
      },
      "unmount": _0x38e62e => {
        var _0x408bb2 = _0x1279a6.lookupPath(_0x38e62e, {
          "follow_mount": false
        });
        if (!!!_0x408bb2.node.mounted) {
          throw new null(0x1c);
        }
        var _0x127312 = _0x408bb2.node;
        var _0x5c9527 = _0x127312.mounted;
        var _0x5dca2f = _0x1279a6.getMounts(_0x5c9527);
        Object.keys(null).forEach(_0x368bea => {
          var _0x7af9ee = null[_0x368bea];
          while (_0x7af9ee) {
            var _0x2b2fb9 = _0x7af9ee.name_next;
            if (_0x5dca2f.includes(_0x7af9ee.mount)) {
              _0x1279a6.destroyNode(_0x7af9ee);
            }
            _0x7af9ee = _0x2b2fb9;
          }
        });
        _0x127312.mounted = null;
        var _0x1c2718 = _0x127312.mount.mounts.indexOf(_0x5c9527);
        _0x127312.mount.mounts.splice(_0x1c2718, 0x1);
      },
      "lookup": (_0x3a720e, _0x1d513a) => {
        return _0x3a720e.node_ops.lookup(_0x3a720e, _0x1d513a);
      },
      "mknod": (_0x35f096, _0x1610dd, _0x863e47) => {
        var _0x472efa = _0x1279a6.lookupPath(_0x35f096, {
          "parent": true
        });
        var _0x1268e4 = _0x472efa.node;
        var _0x8fa053 = _0x2d0e3b.basename(_0x35f096);
        if (!_0x8fa053 || _0x8fa053 === "." || _0x8fa053 === "..") {
          throw new null(0x1c);
        }
        var _0x3a47db = _0x1279a6.mayCreate(_0x1268e4, _0x8fa053);
        if (_0x3a47db) {
          throw new null(_0x3a47db);
        }
        if (!_0x1268e4.node_ops.mknod) {
          throw new null(0x3f);
        }
        return _0x1268e4.node_ops.mknod(_0x1268e4, _0x8fa053, _0x1610dd, _0x863e47);
      },
      "create": (_0x2ec151, _0x4bd8f6) => {
        _0x4bd8f6 = _0x4bd8f6 !== undefined ? _0x4bd8f6 : 0x1b6;
        _0x4bd8f6 &= 0xfff;
        _0x4bd8f6 |= 0x8000;
        return _0x1279a6.mknod(_0x2ec151, _0x4bd8f6, 0x0);
      },
      "mkdir": (_0xd5735d, _0x1528d1) => {
        _0x1528d1 = _0x1528d1 !== undefined ? _0x1528d1 : 0x1ff;
        _0x1528d1 &= 1023;
        _0x1528d1 |= 0x4000;
        return _0x1279a6.mknod(_0xd5735d, _0x1528d1, 0x0);
      },
      "mkdirTree": (_0x5c8020, _0x4c7574) => {
        var _0xc5b29c = _0x5c8020.split("/");
        var _0x81f57a = '';
        for (var _0x556dcc = 0x0; _0x556dcc < _0xc5b29c.length; ++_0x556dcc) {
          if (!_0xc5b29c[_0x556dcc]) {
            continue;
          }
          _0x81f57a += "/" + _0xc5b29c[_0x556dcc];
          try {
            _0x1279a6.mkdir(_0x81f57a, _0x4c7574);
          } catch (_0x54e3a6) {
            if (_0x54e3a6.errno != 0x14) {
              throw _0x54e3a6;
            }
          }
        }
      },
      "mkdev": (_0x572057, _0x25816b, _0x654fea) => {
        if (typeof _0x654fea == "undefined") {
          _0x654fea = _0x25816b;
          _0x25816b = 0x1b6;
        }
        _0x25816b |= 0x2000;
        return _0x1279a6.mknod(_0x572057, _0x25816b, _0x654fea);
      },
      "symlink": (_0x3f0df8, _0x227b1c) => {
        if (!_0x1c536c.resolve(_0x3f0df8)) {
          throw new null(0x2c);
        }
        var _0x248ee3 = _0x1279a6.lookupPath(_0x227b1c, {
          "parent": true
        });
        var _0x56c89d = _0x248ee3.node;
        if (!_0x56c89d) {
          throw new null(0x2c);
        }
        var _0x49a001 = _0x2d0e3b.basename(_0x227b1c);
        var _0x39fdc7 = _0x1279a6.mayCreate(_0x56c89d, _0x49a001);
        if (_0x39fdc7) {
          throw new null(_0x39fdc7);
        }
        if (!_0x56c89d.node_ops.symlink) {
          throw new null(0x3f);
        }
        return _0x56c89d.node_ops.symlink(_0x56c89d, _0x49a001, _0x3f0df8);
      },
      "rename": (_0x28aa19, _0x3d5e8e) => {
        var _0x46f783 = _0x2d0e3b.dirname(_0x28aa19);
        var _0x202711 = _0x2d0e3b.dirname(_0x3d5e8e);
        var _0x187933 = _0x2d0e3b.basename(_0x28aa19);
        var _0xbd625a = _0x2d0e3b.basename(_0x3d5e8e);
        var _0x1fec47;
        var _0x2f02f1;
        var _0x495481;
        _0x1fec47 = _0x1279a6.lookupPath(_0x28aa19, {
          "parent": true
        });
        _0x2f02f1 = _0x1fec47.node;
        _0x1fec47 = _0x1279a6.lookupPath(_0x3d5e8e, {
          "parent": true
        });
        _0x495481 = _0x1fec47.node;
        if (!_0x2f02f1 || !_0x495481) {
          throw new null(0x2c);
        }
        if (_0x2f02f1.mount !== _0x495481.mount) {
          throw new null(0x4b);
        }
        var _0x5369f3 = _0x1279a6.lookupNode(_0x2f02f1, _0x187933);
        var _0x117a4b = _0x1c536c.relative(_0x28aa19, _0x202711);
        if (_0x117a4b.charAt(0x0) !== ".") {
          throw new null(0x1c);
        }
        _0x117a4b = _0x1c536c.relative(_0x3d5e8e, _0x46f783);
        if (_0x117a4b.charAt(0x0) !== ".") {
          throw new null(0x37);
        }
        var _0x5858f2;
        try {
          _0x5858f2 = _0x1279a6.lookupNode(_0x495481, _0xbd625a);
        } catch (_0x562b6a) {}
        if (_0x5369f3 === _0x5858f2) {
          return;
        }
        var _0x6ca506 = (_0x5369f3.mode & 0xf000) === 0x4000;
        var _0x1195e5 = _0x1279a6.mayDelete(_0x2f02f1, _0x187933, _0x6ca506);
        if (_0x1195e5) {
          throw new null(_0x1195e5);
        }
        _0x1195e5 = _0x5858f2 ? _0x1279a6.mayDelete(_0x495481, _0xbd625a, _0x6ca506) : _0x1279a6.mayCreate(_0x495481, _0xbd625a);
        if (_0x1195e5) {
          throw new null(_0x1195e5);
        }
        if (!_0x2f02f1.node_ops.rename) {
          throw new null(0x3f);
        }
        if (!!_0x5369f3.mounted || _0x5858f2 && !!_0x5858f2.mounted) {
          throw new null(0xa);
        }
        if (_0x495481 !== _0x2f02f1) {
          _0x1195e5 = _0x1279a6.nodePermissions(_0x2f02f1, "w");
          if (_0x1195e5) {
            throw new null(_0x1195e5);
          }
        }
        _0x1279a6.hashRemoveNode(_0x5369f3);
        try {
          _0x2f02f1.node_ops.rename(_0x5369f3, _0x495481, _0xbd625a);
        } catch (_0x1e9655) {
          throw _0x1e9655;
        } finally {
          _0x1279a6.hashAddNode(_0x5369f3);
        }
      },
      "rmdir": _0x596ffd => {
        var _0x2dceaa = _0x1279a6.lookupPath(_0x596ffd, {
          "parent": true
        });
        var _0x264a28 = _0x2dceaa.node;
        var _0x134e72 = _0x2d0e3b.basename(_0x596ffd);
        var _0x51fd01 = _0x1279a6.lookupNode(_0x264a28, _0x134e72);
        var _0x2a5c1e = _0x1279a6.mayDelete(_0x264a28, _0x134e72, true);
        if (_0x2a5c1e) {
          throw new null(_0x2a5c1e);
        }
        if (!_0x264a28.node_ops.rmdir) {
          throw new null(0x3f);
        }
        if (!!_0x51fd01.mounted) {
          throw new null(0xa);
        }
        _0x264a28.node_ops.rmdir(_0x264a28, _0x134e72);
        _0x1279a6.destroyNode(_0x51fd01);
      },
      "readdir": _0x40977e => {
        var _0x46a791 = _0x1279a6.lookupPath(_0x40977e, {
          "follow": true
        });
        var _0x70cdeb = _0x46a791.node;
        if (!_0x70cdeb.node_ops.readdir) {
          throw new null(0x36);
        }
        return _0x70cdeb.node_ops.readdir(_0x70cdeb);
      },
      "unlink": _0x24f4d6 => {
        var _0x2dcf9a = _0x1279a6.lookupPath(_0x24f4d6, {
          "parent": true
        });
        var _0xa6a57b = _0x2dcf9a.node;
        if (!_0xa6a57b) {
          throw new null(0x2c);
        }
        var _0x5c3d72 = _0x2d0e3b.basename(_0x24f4d6);
        var _0x16a711 = _0x1279a6.lookupNode(_0xa6a57b, _0x5c3d72);
        var _0x23009b = _0x1279a6.mayDelete(_0xa6a57b, _0x5c3d72, false);
        if (_0x23009b) {
          throw new null(_0x23009b);
        }
        if (!_0xa6a57b.node_ops.unlink) {
          throw new null(0x3f);
        }
        if (!!_0x16a711.mounted) {
          throw new null(0xa);
        }
        _0xa6a57b.node_ops.unlink(_0xa6a57b, _0x5c3d72);
        _0x1279a6.destroyNode(_0x16a711);
      },
      "readlink": _0x5e4d8f => {
        var _0x426ce6 = _0x1279a6.lookupPath(_0x5e4d8f);
        var _0x1c9918 = _0x426ce6.node;
        if (!_0x1c9918) {
          throw new null(0x2c);
        }
        if (!_0x1c9918.node_ops.readlink) {
          throw new null(0x1c);
        }
        return _0x1c536c.resolve(_0x1279a6.getPath(_0x1c9918.parent), _0x1c9918.node_ops.readlink(_0x1c9918));
      },
      "stat": (_0x3480c9, _0x8eea5f) => {
        var _0x395c37 = _0x1279a6.lookupPath(_0x3480c9, {
          "follow": !_0x8eea5f
        });
        var _0x27f329 = _0x395c37.node;
        if (!_0x27f329) {
          throw new null(0x2c);
        }
        if (!_0x27f329.node_ops.getattr) {
          throw new null(0x3f);
        }
        return _0x27f329.node_ops.getattr(_0x27f329);
      },
      "lstat": _0x37af89 => {
        return _0x1279a6.stat(_0x37af89, true);
      },
      "chmod": (_0x1595e6, _0x4d7f61, _0x71899b) => {
        var _0x4e27c6;
        if (typeof _0x1595e6 == "string") {
          var _0x1ad40a = _0x1279a6.lookupPath(_0x1595e6, {
            "follow": !_0x71899b
          });
          _0x4e27c6 = _0x1ad40a.node;
        } else {
          _0x4e27c6 = _0x1595e6;
        }
        if (!_0x4e27c6.node_ops.setattr) {
          throw new null(0x3f);
        }
        _0x4e27c6.node_ops.setattr(_0x4e27c6, {
          "mode": _0x4d7f61 & 0xfff | _0x4e27c6.mode & -4096,
          "timestamp": Date.now()
        });
      },
      "lchmod": (_0x40e043, _0x18c6b3) => {
        _0x1279a6.chmod(_0x40e043, _0x18c6b3, true);
      },
      "fchmod": (_0x405427, _0x182333) => {
        var _0x45a13c = _0x1279a6.streams[_0x405427];
        if (!_0x45a13c) {
          throw new null(0x8);
        }
        _0x1279a6.chmod(_0x45a13c.node, _0x182333);
      },
      "chown": (_0x126d69, _0x319005, _0x4e7208, _0x9d26c1) => {
        var _0x2ca9e2;
        if (typeof _0x126d69 == "string") {
          var _0x318903 = _0x1279a6.lookupPath(_0x126d69, {
            "follow": !_0x9d26c1
          });
          _0x2ca9e2 = _0x318903.node;
        } else {
          _0x2ca9e2 = _0x126d69;
        }
        if (!_0x2ca9e2.node_ops.setattr) {
          throw new null(0x3f);
        }
        _0x2ca9e2.node_ops.setattr(_0x2ca9e2, {
          "timestamp": Date.now()
        });
      },
      "lchown": (_0x506277, _0x110dac, _0x1c5885) => {
        _0x1279a6.chown(_0x506277, _0x110dac, _0x1c5885, true);
      },
      "fchown": (_0x2d2f22, _0x2d9f01, _0x18b13c) => {
        var _0x4d1bbc = _0x1279a6.streams[_0x2d2f22];
        if (!_0x4d1bbc) {
          throw new null(0x8);
        }
        _0x1279a6.chown(_0x4d1bbc.node, _0x2d9f01, _0x18b13c);
      },
      "truncate": (_0xa8bb6, _0x12a568) => {
        if (_0x12a568 < 0x0) {
          throw new null(0x1c);
        }
        var _0x1ae311;
        if (typeof _0xa8bb6 == "string") {
          var _0x1faa20 = _0x1279a6.lookupPath(_0xa8bb6, {
            "follow": true
          });
          _0x1ae311 = _0x1faa20.node;
        } else {
          _0x1ae311 = _0xa8bb6;
        }
        if (!_0x1ae311.node_ops.setattr) {
          throw new null(0x3f);
        }
        if ((_0x1ae311.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!((_0x1ae311.mode & 0xf000) === 0x8000)) {
          throw new null(0x1c);
        }
        var _0x3fbd7b = _0x1279a6.nodePermissions(_0x1ae311, "w");
        if (_0x3fbd7b) {
          throw new null(_0x3fbd7b);
        }
        _0x1ae311.node_ops.setattr(_0x1ae311, {
          "size": _0x12a568,
          "timestamp": Date.now()
        });
      },
      "ftruncate": (_0x362662, _0x3fee62) => {
        var _0xbec50d = _0x1279a6.streams[_0x362662];
        if (!_0xbec50d) {
          throw new null(0x8);
        }
        if ((_0xbec50d.flags & 0x200003) === 0x0) {
          throw new null(0x1c);
        }
        _0x1279a6.truncate(_0xbec50d.node, _0x3fee62);
      },
      "utime": (_0x391bbc, _0x3d01ed, _0x4c38f8) => {
        var _0x3e3e51 = _0x1279a6.lookupPath(_0x391bbc, {
          "follow": true
        });
        var _0x308dbb = _0x3e3e51.node;
        _0x308dbb.node_ops.setattr(_0x308dbb, {
          "timestamp": Math.max(_0x3d01ed, _0x4c38f8)
        });
      },
      "open": (_0x511371, _0x2be935, _0x12ec1f, _0x3acfc8, _0x11e067) => {
        if (_0x511371 === '') {
          throw new null(0x2c);
        }
        _0x2be935 = typeof _0x2be935 == "string" ? _0x1279a6.modeStringToFlags(_0x2be935) : _0x2be935;
        _0x12ec1f = typeof _0x12ec1f == "undefined" ? 0x1b6 : _0x12ec1f;
        if (_0x2be935 & 0x40) {
          _0x12ec1f = _0x12ec1f & 0xfff | 0x8000;
        } else {
          _0x12ec1f = 0x0;
        }
        var _0x436fc8;
        if (typeof _0x511371 == "object") {
          _0x436fc8 = _0x511371;
        } else {
          _0x511371 = _0x2d0e3b.normalize(_0x511371);
          try {
            var _0x2d8400 = _0x1279a6.lookupPath(_0x511371, {
              "follow": !(_0x2be935 & 0x20000)
            });
            _0x436fc8 = _0x2d8400.node;
          } catch (_0x24367a) {}
        }
        var _0x5b5337 = false;
        if (_0x2be935 & 0x40) {
          if (_0x436fc8) {
            if (_0x2be935 & 0x80) {
              throw new null(0x14);
            }
          } else {
            _0x436fc8 = _0x1279a6.mknod(_0x511371, _0x12ec1f, 0x0);
            _0x5b5337 = true;
          }
        }
        if (!_0x436fc8) {
          throw new null(0x2c);
        }
        if ((_0x436fc8.mode & 0xf000) === 0x2000) {
          _0x2be935 &= -513;
        }
        if (_0x2be935 & 0x10000 && !((_0x436fc8.mode & 0xf000) === 0x4000)) {
          throw new null(0x36);
        }
        if (!_0x5b5337) {
          var _0x37ebc5 = _0x1279a6.mayOpen(_0x436fc8, _0x2be935);
          if (_0x37ebc5) {
            throw new null(_0x37ebc5);
          }
        }
        if (_0x2be935 & 0x200) {
          _0x1279a6.truncate(_0x436fc8, 0x0);
        }
        _0x2be935 &= -131713;
        var _0x15ca7a = _0x1279a6.createStream({
          "node": _0x436fc8,
          "path": _0x1279a6.getPath(_0x436fc8),
          "flags": _0x2be935,
          "seekable": true,
          "position": 0x0,
          "stream_ops": _0x436fc8.stream_ops,
          "ungotten": [],
          "error": false
        }, _0x3acfc8, _0x11e067);
        if (_0x15ca7a.stream_ops.open) {
          _0x15ca7a.stream_ops.open(_0x15ca7a);
        }
        if (_0x134a3a.logReadFiles && !(_0x2be935 & 0x1)) {
          if (!_0x1279a6.readFiles) {
            _0x1279a6.readFiles = {};
          }
          if (!(_0x511371 in _0x1279a6.readFiles)) {
            _0x1279a6.readFiles[_0x511371] = 0x1;
          }
        }
        return _0x15ca7a;
      },
      "close": _0x381cb9 => {
        if (_0x381cb9.fd === null) {
          throw new null(0x8);
        }
        if (_0x381cb9.getdents) {
          _0x381cb9.getdents = null;
        }
        try {
          if (_0x381cb9.stream_ops.close) {
            _0x381cb9.stream_ops.close(_0x381cb9);
          }
        } catch (_0x2b71a6) {
          throw _0x2b71a6;
        } finally {
          _0x1279a6.closeStream(_0x381cb9.fd);
        }
        _0x381cb9.fd = null;
      },
      "isClosed": _0x33aec2 => {
        return _0x33aec2.fd === null;
      },
      "llseek": (_0x43de9b, _0x1eaee7, _0x4a8d98) => {
        if (_0x43de9b.fd === null) {
          throw new null(0x8);
        }
        if (!_0x43de9b.seekable || !_0x43de9b.stream_ops.llseek) {
          throw new null(0x46);
        }
        if (_0x4a8d98 != 0x0 && _0x4a8d98 != 0x1 && _0x4a8d98 != 0x2) {
          throw new null(0x1c);
        }
        _0x43de9b.position = _0x43de9b.stream_ops.llseek(_0x43de9b, _0x1eaee7, _0x4a8d98);
        _0x43de9b.ungotten = [];
        return _0x43de9b.position;
      },
      "read": (_0x2a9583, _0x1802b6, _0x310a65, _0x332314, _0x345117) => {
        if (_0x332314 < 0x0 || _0x345117 < 0x0) {
          throw new null(0x1c);
        }
        if (_0x2a9583.fd === null) {
          throw new null(0x8);
        }
        if ((_0x2a9583.flags & 0x200003) === 0x1) {
          throw new null(0x8);
        }
        if ((_0x2a9583.node.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!_0x2a9583.stream_ops.read) {
          throw new null(0x1c);
        }
        var _0x4f802e = typeof _0x345117 != "undefined";
        if (!_0x4f802e) {
          _0x345117 = _0x2a9583.position;
        } else {
          if (!_0x2a9583.seekable) {
            throw new null(0x46);
          }
        }
        var _0x16a43f = _0x2a9583.stream_ops.read(_0x2a9583, _0x1802b6, _0x310a65, _0x332314, _0x345117);
        if (!_0x4f802e) {
          _0x2a9583.position += _0x16a43f;
        }
        return _0x16a43f;
      },
      "write": (_0x3252ec, _0x4df7b2, _0x1d978d, _0x4205ba, _0x26003a, _0x2770d3) => {
        if (_0x4205ba < 0x0 || _0x26003a < 0x0) {
          throw new null(0x1c);
        }
        if (_0x3252ec.fd === null) {
          throw new null(0x8);
        }
        if ((_0x3252ec.flags & 0x200003) === 0x0) {
          throw new null(0x8);
        }
        if ((_0x3252ec.node.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!_0x3252ec.stream_ops.write) {
          throw new null(0x1c);
        }
        if (_0x3252ec.seekable && _0x3252ec.flags & 0x400) {
          _0x1279a6.llseek(_0x3252ec, 0x0, 0x2);
        }
        var _0x36494f = typeof _0x26003a != "undefined";
        if (!_0x36494f) {
          _0x26003a = _0x3252ec.position;
        } else {
          if (!_0x3252ec.seekable) {
            throw new null(0x46);
          }
        }
        var _0x8f3158 = _0x3252ec.stream_ops.write(_0x3252ec, _0x4df7b2, _0x1d978d, _0x4205ba, _0x26003a, _0x2770d3);
        if (!_0x36494f) {
          _0x3252ec.position += _0x8f3158;
        }
        return _0x8f3158;
      },
      "allocate": (_0x3d73f4, _0x4e8942, _0x1b3c40) => {
        if (_0x3d73f4.fd === null) {
          throw new null(0x8);
        }
        if (_0x4e8942 < 0x0 || _0x1b3c40 <= 0x0) {
          throw new null(0x1c);
        }
        if ((_0x3d73f4.flags & 0x200003) === 0x0) {
          throw new null(0x8);
        }
        if (!((_0x3d73f4.node.mode & 0xf000) === 0x8000) && !((_0x3d73f4.node.mode & 0xf000) === 0x4000)) {
          throw new null(0x2b);
        }
        if (!_0x3d73f4.stream_ops.allocate) {
          throw new null(0x8a);
        }
        _0x3d73f4.stream_ops.allocate(_0x3d73f4, _0x4e8942, _0x1b3c40);
      },
      "mmap": (_0x3c2fa5, _0x5aa154, _0xa601d6, _0xa6fc60, _0x1b4381, _0x25690d) => {
        if ((_0x1b4381 & 0x2) !== 0x0 && (_0x25690d & 0x2) === 0x0 && (_0x3c2fa5.flags & 0x200003) !== 0x2) {
          throw new null(0x2);
        }
        if ((_0x3c2fa5.flags & 0x200003) === 0x1) {
          throw new null(0x2);
        }
        if (!_0x3c2fa5.stream_ops.mmap) {
          throw new null(0x2b);
        }
        return _0x3c2fa5.stream_ops.mmap(_0x3c2fa5, _0x5aa154, _0xa601d6, _0xa6fc60, _0x1b4381, _0x25690d);
      },
      "msync": (_0x30a60e, _0x57de5d, _0x12de8e, _0x45199a, _0x61d82e) => {
        if (!_0x30a60e || !_0x30a60e.stream_ops.msync) {
          return 0x0;
        }
        return _0x30a60e.stream_ops.msync(_0x30a60e, _0x57de5d, _0x12de8e, _0x45199a, _0x61d82e);
      },
      "munmap": _0x3ce07e => 0x0,
      "ioctl": (_0x3c39a1, _0x357c87, _0x43bf63) => {
        if (!_0x3c39a1.stream_ops.ioctl) {
          throw new null(0x3b);
        }
        return _0x3c39a1.stream_ops.ioctl(_0x3c39a1, _0x357c87, _0x43bf63);
      },
      "readFile": (_0xca2d7f, _0x441d98 = {}) => {
        _0x441d98.flags = _0x441d98.flags || 0x0;
        _0x441d98.encoding = _0x441d98.encoding || "binary";
        if (_0x441d98.encoding !== "utf8" && _0x441d98.encoding !== "binary") {
          throw new Error("Invalid encoding type \"" + _0x441d98.encoding + "\"");
        }
        var _0x606f3e;
        var _0x5ddcce = _0x1279a6.open(_0xca2d7f, _0x441d98.flags);
        var _0x1fc39f = _0x1279a6.stat(_0xca2d7f);
        var _0x4e9f8 = _0x1fc39f.size;
        var _0x156ccb = new Uint8Array(_0x4e9f8);
        _0x1279a6.read(_0x5ddcce, _0x156ccb, 0x0, _0x4e9f8, 0x0);
        if (_0x441d98.encoding === "utf8") {
          _0x606f3e = _0x227981(_0x156ccb, 0x0);
        } else if (_0x441d98.encoding === "binary") {
          _0x606f3e = _0x156ccb;
        }
        _0x1279a6.close(_0x5ddcce);
        return _0x606f3e;
      },
      "writeFile": (_0x30b57a, _0xe1a6a9, _0x5d75ff = {}) => {
        _0x5d75ff.flags = _0x5d75ff.flags || 0x241;
        var _0x2a64ff = _0x1279a6.open(_0x30b57a, _0x5d75ff.flags, _0x5d75ff.mode);
        if (typeof _0xe1a6a9 == "string") {
          var _0x2679b0 = new Uint8Array(_0x169ac9(_0xe1a6a9) + 0x1);
          var _0x64d657 = _0x57a287(_0xe1a6a9, _0x2679b0, 0x0, _0x2679b0.length);
          _0x1279a6.write(_0x2a64ff, _0x2679b0, 0x0, _0x64d657, undefined, _0x5d75ff.canOwn);
        } else {
          if (ArrayBuffer.isView(_0xe1a6a9)) {
            _0x1279a6.write(_0x2a64ff, _0xe1a6a9, 0x0, _0xe1a6a9.byteLength, undefined, _0x5d75ff.canOwn);
          } else {
            throw new Error("Unsupported data type");
          }
        }
        _0x1279a6.close(_0x2a64ff);
      },
      "cwd": () => "/",
      "chdir": _0x595a9c => {
        var _0xb94914 = _0x1279a6.lookupPath(_0x595a9c, {
          "follow": true
        });
        if (_0xb94914.node === null) {
          throw new null(0x2c);
        }
        if (!((_0xb94914.node.mode & 0xf000) === 0x4000)) {
          throw new null(0x36);
        }
        var _0xe78906 = _0x1279a6.nodePermissions(_0xb94914.node, "x");
        if (_0xe78906) {
          throw new null(_0xe78906);
        }
        _0x1279a6.currentPath = _0xb94914.path;
      },
      "createDefaultDirectories": () => {
        _0x1279a6.mkdir("/tmp");
        _0x1279a6.mkdir("/home");
        _0x1279a6.mkdir("/home/web_user");
      },
      "createDefaultDevices": () => {
        _0x1279a6.mkdir("/dev");
        _0x1279a6.registerDevice(259, {
          "read": () => 0x0,
          "write": (_0x5f43a5, _0x10c728, _0x52b7a1, _0x1862f0, _0x2281a4) => _0x1862f0
        });
        _0x1279a6.mkdev("/dev/null", 259);
        _0x1e4cfb.register(1280, _0x1e4cfb.default_tty_ops);
        _0x1e4cfb.register(1536, _0x1e4cfb.default_tty1_ops);
        _0x1279a6.mkdev("/dev/tty", 1280);
        _0x1279a6.mkdev("/dev/tty1", 1536);
        var _0x145d6c = _0x1550b9();
        _0x1279a6.createDevice("/dev", "random", _0x145d6c);
        _0x1279a6.createDevice("/dev", "urandom", _0x145d6c);
        _0x1279a6.mkdir("/dev/shm");
        _0x1279a6.mkdir("/dev/shm/tmp");
      },
      "createSpecialDirectories": () => {
        _0x1279a6.mkdir("/proc");
        var _0x48eb1d = _0x1279a6.mkdir("/proc/self");
        _0x1279a6.mkdir("/proc/self/fd");
        _0x1279a6.mount({
          "mount": () => {
            var _0x54da21 = _0x1279a6.createNode(_0x48eb1d, "fd", 16895, 0x49);
            _0x54da21.node_ops = {
              "lookup": (_0x82ecb0, _0x23f916) => {
                var _0x195bb7 = +_0x23f916;
                var _0x3854d4 = _0x1279a6.streams[_0x195bb7];
                if (!_0x3854d4) {
                  throw new null(0x8);
                }
                var _0x4294ef = {
                  "parent": null,
                  "mount": {
                    "mountpoint": "fake"
                  },
                  "node_ops": {
                    "readlink": () => _0x3854d4.path
                  }
                };
                _0x4294ef.parent = _0x4294ef;
                return _0x4294ef;
              }
            };
            return _0x54da21;
          }
        }, {}, "/proc/self/fd");
      },
      "createStandardStreams": () => {
        if (_0x134a3a.stdin) {
          _0x1279a6.createDevice("/dev", "stdin", _0x134a3a.stdin);
        } else {
          _0x1279a6.symlink("/dev/tty", "/dev/stdin");
        }
        if (_0x134a3a.stdout) {
          _0x1279a6.createDevice("/dev", "stdout", null, _0x134a3a.stdout);
        } else {
          _0x1279a6.symlink("/dev/tty", "/dev/stdout");
        }
        if (_0x134a3a.stderr) {
          _0x1279a6.createDevice("/dev", "stderr", null, _0x134a3a.stderr);
        } else {
          _0x1279a6.symlink("/dev/tty1", "/dev/stderr");
        }
      },
      "ensureErrnoError": () => {
        return;
        _0x1279a6.ErrnoError = function _0x856432(_0x434732, _0x1ac945) {
          this.node = _0x1ac945;
          this.setErrno = function (_0x3b9169) {
            this.errno = _0x3b9169;
          };
          this.setErrno(_0x434732);
          this.message = "FS error";
        };
        null.prototype = new Error();
        null.prototype.constructor = null;
        [0x2c].forEach(_0x53cf30 => {
          _0x1279a6.genericErrors[_0x53cf30] = new null(_0x53cf30);
          _0x1279a6.genericErrors[_0x53cf30].stack = "<generic error, no stack>";
        });
      },
      "staticInit": () => {
        _0x1279a6.ensureErrnoError();
        _0x1279a6.nameTable = new Array(0x1000);
        _0x1279a6.mount(_0x65510e, {}, "/");
        _0x1279a6.createDefaultDirectories();
        _0x1279a6.createDefaultDevices();
        _0x1279a6.createSpecialDirectories();
        _0x1279a6.filesystems = {
          "MEMFS": _0x65510e,
          "IDBFS": _0x5e0b9d
        };
      },
      "init": (_0x1fb52b, _0x268009, _0x6ca1ad) => {
        _0x1279a6.init.initialized = true;
        _0x1279a6.ensureErrnoError();
        _0x134a3a.stdin = _0x1fb52b || _0x134a3a.stdin;
        _0x134a3a.stdout = _0x268009 || _0x134a3a.stdout;
        _0x134a3a.stderr = _0x6ca1ad || _0x134a3a.stderr;
        _0x1279a6.createStandardStreams();
      },
      "quit": () => {
        _0x1279a6.init.initialized = false;
        for (var _0x1a25e7 = 0x0; _0x1a25e7 < _0x1279a6.streams.length; _0x1a25e7++) {
          var _0x13f89a = _0x1279a6.streams[_0x1a25e7];
          if (!_0x13f89a) {
            continue;
          }
          _0x1279a6.close(_0x13f89a);
        }
      },
      "getMode": (_0x2ae4a0, _0x2080c2) => {
        var _0x1860e0 = 0x0;
        if (_0x2ae4a0) {
          _0x1860e0 |= 365;
        }
        if (_0x2080c2) {
          _0x1860e0 |= 0x92;
        }
        return _0x1860e0;
      },
      "findObject": (_0x3f4ae5, _0x304bcd) => {
        var _0xce3a45 = _0x1279a6.analyzePath(_0x3f4ae5, _0x304bcd);
        return _0xce3a45.exists ? _0xce3a45.object : null;
      },
      "analyzePath": (_0x5c123f, _0xf845d2) => {
        try {
          var _0x389d04 = _0x1279a6.lookupPath(_0x5c123f, {
            "follow": !_0xf845d2
          });
          _0x5c123f = _0x389d04.path;
        } catch (_0x42d116) {}
        var _0x101a4c = {
          "isRoot": false,
          "exists": false,
          "error": 0x0,
          "name": null,
          "path": null,
          "object": null,
          "parentExists": false,
          "parentPath": null,
          "parentObject": null
        };
        try {
          var _0x389d04 = _0x1279a6.lookupPath(_0x5c123f, {
            "parent": true
          });
          _0x101a4c.parentExists = true;
          _0x101a4c.parentPath = _0x389d04.path;
          _0x101a4c.parentObject = _0x389d04.node;
          _0x101a4c.name = _0x2d0e3b.basename(_0x5c123f);
          _0x389d04 = _0x1279a6.lookupPath(_0x5c123f, {
            "follow": !_0xf845d2
          });
          _0x101a4c.exists = true;
          _0x101a4c.path = _0x389d04.path;
          _0x101a4c.object = _0x389d04.node;
          _0x101a4c.name = _0x389d04.node.name;
          _0x101a4c.isRoot = _0x389d04.path === "/";
        } catch (_0x2e92d9) {
          _0x101a4c.error = _0x2e92d9.errno;
        }
        return _0x101a4c;
      },
      "createPath": (_0x37fc6a, _0x4447dd, _0x4ffa88, _0x55b119) => {
        _0x37fc6a = typeof _0x37fc6a == "string" ? _0x37fc6a : _0x1279a6.getPath(_0x37fc6a);
        var _0x427e33 = _0x4447dd.split("/").reverse();
        while (_0x427e33.length) {
          var _0x2c084e = _0x427e33.pop();
          if (!_0x2c084e) {
            continue;
          }
          var _0x461f8c = _0x2d0e3b.normalize(_0x37fc6a + "/" + _0x2c084e);
          try {
            _0x1279a6.mkdir(_0x461f8c);
          } catch (_0x32716b) {}
          _0x37fc6a = _0x461f8c;
        }
        return _0x461f8c;
      },
      "createFile": (_0x338f6f, _0xbfa8d, _0x5219f6, _0xdd8ab5, _0x2de2c6) => {
        var _0x3bb1de = _0x2d0e3b.normalize((typeof _0x338f6f == "string" ? _0x338f6f : _0x1279a6.getPath(_0x338f6f)) + "/" + _0xbfa8d);
        var _0x2cad46 = _0x1279a6.getMode(_0xdd8ab5, _0x2de2c6);
        return _0x1279a6.create(_0x3bb1de, _0x2cad46);
      },
      "createDataFile": (_0x2656dd, _0xcb4444, _0x50dd33, _0x20875c, _0x4025cb, _0x16d789) => {
        var _0x5d6f77 = _0xcb4444;
        if (_0x2656dd) {
          _0x2656dd = typeof _0x2656dd == "string" ? _0x2656dd : _0x1279a6.getPath(_0x2656dd);
          _0x5d6f77 = _0xcb4444 ? _0x2d0e3b.normalize(_0x2656dd + "/" + _0xcb4444) : _0x2656dd;
        }
        var _0x6bb971 = _0x1279a6.getMode(_0x20875c, _0x4025cb);
        var _0x1e944e = _0x1279a6.create(_0x5d6f77, _0x6bb971);
        if (_0x50dd33) {
          if (typeof _0x50dd33 == "string") {
            var _0x20d485 = new Array(_0x50dd33.length);
            var _0x5d7f17 = 0x0;
            for (var _0x4f8747 = _0x50dd33.length; _0x5d7f17 < _0x4f8747; ++_0x5d7f17) {
              _0x20d485[_0x5d7f17] = _0x50dd33.charCodeAt(_0x5d7f17);
            }
            _0x50dd33 = _0x20d485;
          }
          _0x1279a6.chmod(_0x1e944e, _0x6bb971 | 0x92);
          var _0x1e043e = _0x1279a6.open(_0x1e944e, 0x241);
          _0x1279a6.write(_0x1e043e, _0x50dd33, 0x0, _0x50dd33.length, 0x0, _0x16d789);
          _0x1279a6.close(_0x1e043e);
          _0x1279a6.chmod(_0x1e944e, _0x6bb971);
        }
        return _0x1e944e;
      },
      "createDevice": (_0x9b7b80, _0x57a9e6, _0x18b0dd, _0x4dff4b) => {
        var _0x25c7bc = _0x2d0e3b.normalize((typeof _0x9b7b80 == "string" ? _0x9b7b80 : _0x1279a6.getPath(_0x9b7b80)) + "/" + _0x57a9e6);
        var _0x4ee754 = _0x1279a6.getMode(!!_0x18b0dd, !!_0x4dff4b);
        if (!_0x1279a6.createDevice.major) {
          _0x1279a6.createDevice.major = 0x40;
        }
        var _0x9818 = _0x1279a6.createDevice.major++ << 0x8 | 0x0;
        _0x1279a6.registerDevice(_0x9818, {
          "open": _0x55d62c => {
            _0x55d62c.seekable = false;
          },
          "close": _0x2dd6cc => {
            if (_0x4dff4b && _0x4dff4b.buffer && _0x4dff4b.buffer.length) {
              _0x4dff4b(0xa);
            }
          },
          "read": (_0x95e7ff, _0x15282d, _0x20d259, _0x562cfa, _0x206ac4) => {
            var _0x5d7d03 = 0x0;
            for (var _0x4a5874 = 0x0; _0x4a5874 < _0x562cfa; _0x4a5874++) {
              var _0x4ac0fa;
              try {
                _0x4ac0fa = _0x18b0dd();
              } catch (_0x4cc1b5) {
                throw new null(0x1d);
              }
              if (_0x4ac0fa === undefined && _0x5d7d03 === 0x0) {
                throw new null(0x6);
              }
              if (_0x4ac0fa === null || _0x4ac0fa === undefined) {
                break;
              }
              _0x5d7d03++;
              _0x15282d[_0x20d259 + _0x4a5874] = _0x4ac0fa;
            }
            if (_0x5d7d03) {
              _0x95e7ff.node.timestamp = Date.now();
            }
            return _0x5d7d03;
          },
          "write": (_0x369739, _0x2621df, _0xe0b283, _0x14e3e2, _0x27d854) => {
            for (var _0x42461c = 0x0; _0x42461c < _0x14e3e2; _0x42461c++) {
              try {
                _0x4dff4b(_0x2621df[_0xe0b283 + _0x42461c]);
              } catch (_0x290703) {
                throw new null(0x1d);
              }
            }
            if (_0x14e3e2) {
              _0x369739.node.timestamp = Date.now();
            }
            return _0x42461c;
          }
        });
        return _0x1279a6.mkdev(_0x25c7bc, _0x4ee754, _0x9818);
      },
      "forceLoadFile": _0x34d734 => {
        if (_0x34d734.isDevice || _0x34d734.isFolder || _0x34d734.link || _0x34d734.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else {
          if (_0x3be273) {
            try {
              _0x34d734.contents = _0x2ae60e(_0x3be273(_0x34d734.url), true);
              _0x34d734.usedBytes = _0x34d734.contents.length;
            } catch (_0x1b9619) {
              throw new null(0x1d);
            }
          } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.");
          }
        }
      },
      "createLazyFile": (_0x505594, _0x8b65f6, _0x268bdf, _0x3f2a1a, _0x4a9d9a) => {
        function _0x33507a() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        _0x33507a.prototype.get = function _0x1ffd67(_0x1d6d5e) {
          if (_0x1d6d5e > this.length - 0x1 || _0x1d6d5e < 0x0) {
            return undefined;
          }
          var _0x42d3a1 = _0x1d6d5e % this.chunkSize;
          var _0x388d1a = _0x1d6d5e / this.chunkSize | 0x0;
          return this.getter(_0x388d1a)[_0x42d3a1];
        };
        _0x33507a.prototype.setDataGetter = function _0x24afed(_0x3e39ae) {
          this.getter = _0x3e39ae;
        };
        _0x33507a.prototype.cacheLength = function _0x3367e4() {
          var _0xea92ac = new XMLHttpRequest();
          _0xea92ac.open("HEAD", _0x268bdf, false);
          _0xea92ac.send(null);
          if (!(_0xea92ac.status >= 0xc8 && _0xea92ac.status < 0x12c || _0xea92ac.status === 0x130)) {
            throw new Error("Couldn't load " + _0x268bdf + ". Status: " + _0xea92ac.status);
          }
          var _0x504e46 = Number(_0xea92ac.getResponseHeader("Content-length"));
          var _0x53ecf0;
          var _0x5a8de4 = (_0x53ecf0 = _0xea92ac.getResponseHeader("Accept-Ranges")) && _0x53ecf0 === "bytes";
          var _0x42eea5 = (_0x53ecf0 = _0xea92ac.getResponseHeader("Content-Encoding")) && _0x53ecf0 === "gzip";
          var _0x3d0e1a = 1048576;
          if (!_0x5a8de4) {
            _0x3d0e1a = _0x504e46;
          }
          var _0x54ec41 = (_0x186a8a, _0x38c462) => {
            if (_0x186a8a > _0x38c462) {
              throw new Error("invalid range (" + _0x186a8a + ", " + _0x38c462 + ") or no bytes requested!");
            }
            if (_0x38c462 > _0x504e46 - 0x1) {
              throw new Error("only " + _0x504e46 + " bytes available! programmer error!");
            }
            var _0x24045c = new XMLHttpRequest();
            _0x24045c.open("GET", _0x268bdf, false);
            if (_0x504e46 !== _0x3d0e1a) {
              _0x24045c.setRequestHeader("Range", "bytes=" + _0x186a8a + "-" + _0x38c462);
            }
            _0x24045c.responseType = "arraybuffer";
            if (_0x24045c.overrideMimeType) {
              _0x24045c.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x24045c.send(null);
            if (!(_0x24045c.status >= 0xc8 && _0x24045c.status < 0x12c || _0x24045c.status === 0x130)) {
              throw new Error("Couldn't load " + _0x268bdf + ". Status: " + _0x24045c.status);
            }
            return _0x24045c.response !== undefined ? new Uint8Array(_0x24045c.response || []) : _0x2ae60e(_0x24045c.responseText || '', true);
          };
          var _0x162545 = this;
          _0x162545.setDataGetter(_0x25f4c5 => {
            var _0x5d90f7 = _0x25f4c5 * _0x3d0e1a;
            var _0x1dd395 = (_0x25f4c5 + 0x1) * _0x3d0e1a - 0x1;
            _0x1dd395 = Math.min(_0x1dd395, _0x504e46 - 0x1);
            if (typeof _0x162545.chunks[_0x25f4c5] == "undefined") {
              _0x162545.chunks[_0x25f4c5] = _0x54ec41(_0x5d90f7, _0x1dd395);
            }
            if (typeof _0x162545.chunks[_0x25f4c5] == "undefined") {
              throw new Error("doXHR failed!");
            }
            return _0x162545.chunks[_0x25f4c5];
          });
          if (_0x42eea5 || !_0x504e46) {
            _0x3d0e1a = _0x504e46 = 0x1;
            _0x504e46 = this.getter(0x0).length;
            _0x3d0e1a = _0x504e46;
            _0x3de750("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = _0x504e46;
          this._chunkSize = _0x3d0e1a;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != "undefined") {
          if (!_0x4a386c) {
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          }
          var _0x4f73b5 = new _0x33507a();
          Object.defineProperties(_0x4f73b5, {
            "length": {
              "get": function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            "chunkSize": {
              "get": function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var _0x2fc0d0 = {
            "isDevice": false,
            "contents": _0x4f73b5
          };
        } else {
          var _0x2fc0d0 = {
            "isDevice": false,
            "url": _0x268bdf
          };
        }
        var _0x339b71 = _0x1279a6.createFile(_0x505594, _0x8b65f6, _0x2fc0d0, _0x3f2a1a, _0x4a9d9a);
        if (_0x2fc0d0.contents) {
          _0x339b71.contents = _0x2fc0d0.contents;
        } else if (_0x2fc0d0.url) {
          _0x339b71.contents = null;
          _0x339b71.url = _0x2fc0d0.url;
        }
        Object.defineProperties(_0x339b71, {
          "usedBytes": {
            "get": function () {
              return this.contents.length;
            }
          }
        });
        var _0x195510 = {};
        var _0xf475ac = Object.keys(_0x339b71.stream_ops);
        _0xf475ac.forEach(_0x1a4ea4 => {
          var _0x4afe8f = _0x339b71.stream_ops[_0x1a4ea4];
          _0x195510[_0x1a4ea4] = function _0x3f4979() {
            _0x1279a6.forceLoadFile(_0x339b71);
            return _0x4afe8f.apply(null, arguments);
          };
        });
        _0x195510.read = (_0x2361c5, _0x5c0bba, _0xc4b601, _0x39d202, _0x43b8b4) => {
          _0x1279a6.forceLoadFile(_0x339b71);
          var _0x26f9d5 = _0x2361c5.node.contents;
          if (_0x43b8b4 >= _0x26f9d5.length) {
            return 0x0;
          }
          var _0x575522 = Math.min(_0x26f9d5.length - _0x43b8b4, _0x39d202);
          if (_0x26f9d5.slice) {
            for (var _0x4db802 = 0x0; _0x4db802 < _0x575522; _0x4db802++) {
              _0x5c0bba[_0xc4b601 + _0x4db802] = _0x26f9d5[_0x43b8b4 + _0x4db802];
            }
          } else {
            for (var _0x4db802 = 0x0; _0x4db802 < _0x575522; _0x4db802++) {
              _0x5c0bba[_0xc4b601 + _0x4db802] = _0x26f9d5.get(_0x43b8b4 + _0x4db802);
            }
          }
          return _0x575522;
        };
        _0x339b71.stream_ops = _0x195510;
        return _0x339b71;
      },
      "createPreloadedFile": (_0x5c3b5c, _0x4280c4, _0x321101, _0x522eb3, _0x39efd0, _0x29864f, _0x231907, _0x1f7e9a, _0x3035a2, _0x4558ab) => {
        var _0x4f4c23 = _0x4280c4 ? _0x1c536c.resolve(_0x2d0e3b.normalize(_0x5c3b5c + "/" + _0x4280c4)) : _0x5c3b5c;
        function _0x3f86c6(_0x28068b) {
          function _0x364a24(_0x1f0de6) {
            if (_0x4558ab) {
              _0x4558ab();
            }
            if (!_0x1f7e9a) {
              _0x1279a6.createDataFile(_0x5c3b5c, _0x4280c4, _0x1f0de6, _0x522eb3, _0x39efd0, _0x3035a2);
            }
            if (_0x29864f) {
              _0x29864f();
            }
            _0x5ddd77(_0x1b448c);
          }
          if (_0x156bb6.handledByPreloadPlugin(_0x28068b, _0x4f4c23, _0x364a24, () => {
            if (_0x231907) {
              _0x231907();
            }
            _0x5ddd77(_0x1b448c);
          })) {
            return;
          }
          _0x364a24(_0x28068b);
        }
        _0x15c051(_0x1b448c);
        if (typeof _0x321101 == "string") {
          _0x72654a(_0x321101, _0x2c0577 => _0x3f86c6(_0x2c0577), _0x231907);
        } else {
          _0x3f86c6(_0x321101);
        }
      },
      "indexedDB": () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      "DB_NAME": () => {
        return "EM_FS_" + window.location.pathname;
      },
      "DB_VERSION": 0x14,
      "DB_STORE_NAME": "FILE_DATA",
      "saveFilesToDB": (_0x191219, _0x192a13, _0x300012) => {
        _0x192a13 = _0x192a13 || (() => {});
        _0x300012 = _0x300012 || (() => {});
        var _0x3e982d = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        try {
          var _0x52271b = _0x3e982d.open("EM_FS_" + window.location.pathname, 0x14);
        } catch (_0x297168) {
          return _0x300012(_0x297168);
        }
        _0x52271b.onupgradeneeded = () => {
          _0x3de750("creating db");
          var _0x75504e = _0x52271b.result;
          _0x75504e.createObjectStore("FILE_DATA");
        };
        _0x52271b.onsuccess = () => {
          var _0x5c2601 = _0x52271b.result;
          var _0x3fb718 = _0x5c2601.transaction(["FILE_DATA"], "readwrite");
          var _0x1f480b = _0x3fb718.objectStore("FILE_DATA");
          var _0x549da6 = 0x0;
          var _0xf85508 = 0x0;
          var _0x7f082e = _0x191219.length;
          function _0xa1a05e() {
            if (_0xf85508 == 0x0) {
              _0x192a13();
            } else {
              _0x300012();
            }
          }
          _0x191219.forEach(_0x5e3525 => {
            var _0x1a6839 = _0x1f480b.put(_0x1279a6.analyzePath(_0x5e3525).object.contents, _0x5e3525);
            _0x1a6839.onsuccess = () => {
              _0x549da6++;
              if (_0x549da6 + _0xf85508 == _0x7f082e) {
                _0xa1a05e();
              }
            };
            _0x1a6839.onerror = () => {
              _0xf85508++;
              if (_0x549da6 + _0xf85508 == _0x7f082e) {
                _0xa1a05e();
              }
            };
          });
          _0x3fb718.onerror = _0x300012;
        };
        _0x52271b.onerror = _0x300012;
      },
      "loadFilesFromDB": (_0x886a8b, _0x5bbc0b, _0x184441) => {
        _0x5bbc0b = _0x5bbc0b || (() => {});
        _0x184441 = _0x184441 || (() => {});
        var _0x53cdcd = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        try {
          var _0x381f6b = _0x53cdcd.open("EM_FS_" + window.location.pathname, 0x14);
        } catch (_0x3eba86) {
          return _0x184441(_0x3eba86);
        }
        _0x381f6b.onupgradeneeded = _0x184441;
        _0x381f6b.onsuccess = () => {
          var _0x34a92d = _0x381f6b.result;
          try {
            var _0x13bbd0 = _0x34a92d.transaction(["FILE_DATA"], "readonly");
          } catch (_0x4dd374) {
            _0x184441(_0x4dd374);
            return;
          }
          var _0x5cd32d = _0x13bbd0.objectStore("FILE_DATA");
          var _0x4fb4a5 = 0x0;
          var _0x172be5 = 0x0;
          var _0x464857 = _0x886a8b.length;
          function _0x18ad8a() {
            if (_0x172be5 == 0x0) {
              _0x5bbc0b();
            } else {
              _0x184441();
            }
          }
          _0x886a8b.forEach(_0x38d16c => {
            var _0x11509e = _0x5cd32d.get(_0x38d16c);
            _0x11509e.onsuccess = () => {
              if (_0x1279a6.analyzePath(_0x38d16c).exists) {
                _0x1279a6.unlink(_0x38d16c);
              }
              _0x1279a6.createDataFile(_0x2d0e3b.dirname(_0x38d16c), _0x2d0e3b.basename(_0x38d16c), _0x11509e.result, true, true, true);
              _0x4fb4a5++;
              if (_0x4fb4a5 + _0x172be5 == _0x464857) {
                _0x18ad8a();
              }
            };
            _0x11509e.onerror = () => {
              _0x172be5++;
              if (_0x4fb4a5 + _0x172be5 == _0x464857) {
                _0x18ad8a();
              }
            };
          });
          _0x13bbd0.onerror = _0x184441;
        };
        _0x381f6b.onerror = _0x184441;
      }
    };
    var _0x238fbc = {
      "DEFAULT_POLLMASK": 0x5,
      "calculateAt": function (_0x2e2f54, _0x2b5789, _0x10613f) {
        if (_0x2b5789[0x0] === "/") {
          return _0x2b5789;
        }
        var _0x1e06e1;
        if (_0x2e2f54 === -0x64) {
          _0x1e06e1 = "/";
        } else {
          var _0x34b0e4 = _0x1279a6.streams[_0x2e2f54];
          if (!_0x34b0e4) {
            throw new null(0x8);
          }
          _0x1e06e1 = _0x34b0e4.path;
        }
        if (_0x2b5789.length == 0x0) {
          if (!_0x10613f) {
            throw new null(0x2c);
          }
          return _0x1e06e1;
        }
        return _0x2d0e3b.normalize(_0x1e06e1 + "/" + _0x2b5789);
      },
      "doStat": function (_0x23576f, _0x3bdfba, _0x583917) {
        try {
          var _0x529234 = _0x23576f(_0x3bdfba);
        } catch (_0x1c71fb) {
          if (_0x1c71fb && _0x1c71fb.node && _0x2d0e3b.normalize(_0x3bdfba) !== _0x2d0e3b.normalize(_0x1279a6.getPath(_0x1c71fb.node))) {
            return -0x36;
          }
          throw _0x1c71fb;
        }
        _0x2aac64[_0x583917 >> 0x2] = _0x529234.dev;
        _0x2aac64[_0x583917 + 0x4 >> 0x2] = 0x0;
        _0x2aac64[_0x583917 + 0x8 >> 0x2] = _0x529234.ino;
        _0x2aac64[_0x583917 + 0xc >> 0x2] = _0x529234.mode;
        _0x2aac64[_0x583917 + 0x10 >> 0x2] = _0x529234.nlink;
        _0x2aac64[_0x583917 + 0x14 >> 0x2] = _0x529234.uid;
        _0x2aac64[_0x583917 + 0x18 >> 0x2] = _0x529234.gid;
        _0x2aac64[_0x583917 + 0x1c >> 0x2] = _0x529234.rdev;
        _0x2aac64[_0x583917 + 0x20 >> 0x2] = 0x0;
        _0x20e456 = _0x529234.size;
        _0x522a75 = [_0x529234.size >>> 0x0, +Math.abs(_0x20e456) >= 0x1 ? _0x20e456 > 0x0 ? (Math.min(+Math.floor(_0x20e456 / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x20e456 - +(~~_0x20e456 >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
        _0x2aac64[_0x583917 + 0x28 >> 0x2] = _0x522a75[0x0];
        _0x2aac64[_0x583917 + 0x2c >> 0x2] = _0x522a75[0x1];
        _0x2aac64[_0x583917 + 0x30 >> 0x2] = 0x1000;
        _0x2aac64[_0x583917 + 0x34 >> 0x2] = _0x529234.blocks;
        _0x2aac64[_0x583917 + 0x38 >> 0x2] = _0x529234.atime.getTime() / 0x3e8 | 0x0;
        _0x2aac64[_0x583917 + 0x3c >> 0x2] = 0x0;
        _0x2aac64[_0x583917 + 0x40 >> 0x2] = _0x529234.mtime.getTime() / 0x3e8 | 0x0;
        _0x2aac64[_0x583917 + 0x44 >> 0x2] = 0x0;
        _0x2aac64[_0x583917 + 0x48 >> 0x2] = _0x529234.ctime.getTime() / 0x3e8 | 0x0;
        _0x2aac64[_0x583917 + 0x4c >> 0x2] = 0x0;
        _0x20e456 = _0x529234.ino;
        _0x522a75 = [_0x529234.ino >>> 0x0, +Math.abs(_0x20e456) >= 0x1 ? _0x20e456 > 0x0 ? (Math.min(+Math.floor(_0x20e456 / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x20e456 - +(~~_0x20e456 >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
        _0x2aac64[_0x583917 + 0x50 >> 0x2] = _0x522a75[0x0];
        _0x2aac64[_0x583917 + 0x54 >> 0x2] = _0x522a75[0x1];
        return 0x0;
      },
      "doMsync": function (_0x1a9cd9, _0x28d242, _0x55cfdf, _0x1cb232, _0x3a4e03) {
        var _0x590800 = _0x1dd929.slice(_0x1a9cd9, _0x1a9cd9 + _0x55cfdf);
        _0x1279a6.msync(_0x28d242, _0x590800, _0x3a4e03, _0x55cfdf, _0x1cb232);
      },
      "doMkdir": function (_0xad7f42, _0xc490c9) {
        _0xad7f42 = _0x2d0e3b.normalize(_0xad7f42);
        if (_0xad7f42[_0xad7f42.length - 0x1] === "/") {
          _0xad7f42 = _0xad7f42.substr(0x0, _0xad7f42.length - 0x1);
        }
        _0x1279a6.mkdir(_0xad7f42, _0xc490c9, 0x0);
        return 0x0;
      },
      "doMknod": function (_0x49b43b, _0x596093, _0x339cb0) {
        switch (_0x596093 & 0xf000) {
          case 0x8000:
          case 0x2000:
          case 0x6000:
          case 0x1000:
          case 0xc000:
            break;
          default:
            return -0x1c;
        }
        _0x1279a6.mknod(_0x49b43b, _0x596093, _0x339cb0);
        return 0x0;
      },
      "doReadlink": function (_0x5b13e0, _0x4a6bd7, _0x43096e) {
        if (_0x43096e <= 0x0) {
          return -0x1c;
        }
        var _0x50ed86 = _0x1279a6.readlink(_0x5b13e0);
        var _0x49db02 = Math.min(_0x43096e, _0x169ac9(_0x50ed86));
        var _0x1a01b7 = _0x53fd76[_0x4a6bd7 + _0x49db02];
        _0x57a287(_0x50ed86, _0x1dd929, _0x4a6bd7, _0x43096e + 0x1);
        _0x53fd76[_0x4a6bd7 + _0x49db02] = _0x1a01b7;
        return _0x49db02;
      },
      "doAccess": function (_0x168266, _0x460070) {
        if (_0x460070 & -8) {
          return -0x1c;
        }
        var _0x2ca167 = _0x1279a6.lookupPath(_0x168266, {
          "follow": true
        });
        var _0x1802e0 = _0x2ca167.node;
        if (!_0x1802e0) {
          return -0x2c;
        }
        var _0x462d8c = '';
        if (_0x460070 & 0x4) {
          _0x462d8c += "r";
        }
        if (_0x460070 & 0x2) {
          _0x462d8c += "w";
        }
        if (_0x460070 & 0x1) {
          _0x462d8c += "x";
        }
        if (_0x462d8c && _0x1279a6.nodePermissions(_0x1802e0, _0x462d8c)) {
          return -0x2;
        }
        return 0x0;
      },
      "doReadv": function (_0x20e02d, _0x3672c1, _0x2d2075, _0x3111d7) {
        var _0x1108a6 = 0x0;
        for (var _0x26b56e = 0x0; _0x26b56e < _0x2d2075; _0x26b56e++) {
          var _0x4d71e6 = _0x2aac64[_0x3672c1 + _0x26b56e * 0x8 >> 0x2];
          var _0x1b1aa3 = _0x2aac64[_0x3672c1 + (_0x26b56e * 0x8 + 0x4) >> 0x2];
          var _0x33fab5 = _0x1279a6.read(_0x20e02d, _0x53fd76, _0x4d71e6, _0x1b1aa3, _0x3111d7);
          if (_0x33fab5 < 0x0) {
            return -0x1;
          }
          _0x1108a6 += _0x33fab5;
          if (_0x33fab5 < _0x1b1aa3) {
            break;
          }
        }
        return _0x1108a6;
      },
      "doWritev": function (_0x58348c, _0x1d675f, _0x11876e, _0x16785e) {
        var _0x328816 = 0x0;
        for (var _0x350f69 = 0x0; _0x350f69 < _0x11876e; _0x350f69++) {
          var _0x164838 = _0x2aac64[_0x1d675f + _0x350f69 * 0x8 >> 0x2];
          var _0x5450a0 = _0x2aac64[_0x1d675f + (_0x350f69 * 0x8 + 0x4) >> 0x2];
          var _0x5d9f82 = _0x1279a6.write(_0x58348c, _0x53fd76, _0x164838, _0x5450a0, _0x16785e);
          if (_0x5d9f82 < 0x0) {
            return -0x1;
          }
          _0x328816 += _0x5d9f82;
        }
        return _0x328816;
      },
      "varargs": undefined,
      "get": function () {
        _0x238fbc.varargs += 0x4;
        var _0x535fd8 = _0x2aac64[_0x238fbc.varargs - 0x4 >> 0x2];
        return _0x535fd8;
      },
      "getStr": function (_0x686242) {
        var _0x4405e8 = _0x686242 ? _0x227981(_0x1dd929, _0x686242, undefined) : '';
        return _0x4405e8;
      },
      "getStreamFromFD": function (_0x52a921) {
        var _0x288445 = _0x1279a6.streams[_0x52a921];
        if (!_0x288445) {
          throw new null(0x8);
        }
        return _0x288445;
      },
      "get64": function (_0x21c220, _0xf3d927) {
        return _0x21c220;
      }
    };
    var _0x34b7f8 = {
      "mount": function (_0x421a5d) {
        _0x134a3a.websocket = _0x134a3a.websocket && "object" === typeof _0x134a3a.websocket ? _0x134a3a.websocket : {};
        _0x134a3a.websocket._callbacks = {};
        _0x134a3a.websocket.on = function (_0x4bfcf3, _0x1b1385) {
          if ("function" === typeof _0x1b1385) {
            this._callbacks[_0x4bfcf3] = _0x1b1385;
          }
          return this;
        };
        _0x134a3a.websocket.emit = function (_0x2b52e5, _0x47c547) {
          if ("function" === typeof this._callbacks[_0x2b52e5]) {
            this._callbacks[_0x2b52e5].call(this, _0x47c547);
          }
        };
        return _0x1279a6.createNode(null, "/", 16895, 0x0);
      },
      "createSocket": function (_0x1259eb, _0x2b93d6, _0x575da7) {
        _0x2b93d6 &= -526337;
        var _0x3d1674 = _0x2b93d6 == 0x1;
        if (_0x3d1674 && _0x575da7 && _0x575da7 != 0x6) {
          throw new null(0x42);
        }
        var _0x4c1f15 = {
          "family": _0x1259eb,
          "type": _0x2b93d6,
          "protocol": _0x575da7,
          "server": null,
          "error": null,
          "peers": {},
          "pending": [],
          "recv_queue": [],
          "sock_ops": _0x34b7f8.websocket_sock_ops
        };
        var _0x3e64f3 = _0x34b7f8.nextname();
        var _0x4ebfb7 = _0x1279a6.createNode(_0x34b7f8.root, _0x3e64f3, 0xc000, 0x0);
        _0x4ebfb7.sock = _0x4c1f15;
        var _0x3b3869 = _0x1279a6.createStream({
          "path": _0x3e64f3,
          "node": _0x4ebfb7,
          "flags": 0x2,
          "seekable": false,
          "stream_ops": _0x34b7f8.stream_ops
        });
        _0x4c1f15.stream = _0x3b3869;
        return _0x4c1f15;
      },
      "getSocket": function (_0x553f49) {
        var _0x99eba2 = _0x1279a6.streams[_0x553f49];
        if (!_0x99eba2 || !((_0x99eba2.node.mode & 0xc000) === 0xc000)) {
          return null;
        }
        return _0x99eba2.node.sock;
      },
      "stream_ops": {
        "poll": function (_0x136a29) {
          var _0x2a5aa2 = _0x136a29.node.sock;
          return _0x2a5aa2.sock_ops.poll(_0x2a5aa2);
        },
        "ioctl": function (_0xdb2306, _0x4bd8a2, _0x2d9312) {
          var _0xf420ac = _0xdb2306.node.sock;
          return _0xf420ac.sock_ops.ioctl(_0xf420ac, _0x4bd8a2, _0x2d9312);
        },
        "read": function (_0x27a029, _0xb6335d, _0x5c795b, _0x17a527, _0xeb77bd) {
          var _0x115460 = _0x27a029.node.sock;
          var _0x3893a2 = _0x115460.sock_ops.recvmsg(_0x115460, _0x17a527);
          if (!_0x3893a2) {
            return 0x0;
          }
          _0xb6335d.set(_0x3893a2.buffer, _0x5c795b);
          return _0x3893a2.buffer.length;
        },
        "write": function (_0x493d3a, _0x47be3a, _0x74bcfc, _0x27756d, _0x19b050) {
          var _0x46732d = _0x493d3a.node.sock;
          return _0x46732d.sock_ops.sendmsg(_0x46732d, _0x47be3a, _0x74bcfc, _0x27756d);
        },
        "close": function (_0x3c95bc) {
          var _0x9eeea4 = _0x3c95bc.node.sock;
          _0x9eeea4.sock_ops.close(_0x9eeea4);
        }
      },
      "nextname": function () {
        if (!_0x34b7f8.nextname.current) {
          _0x34b7f8.nextname.current = 0x0;
        }
        return "socket[" + _0x34b7f8.nextname.current++ + "]";
      },
      "websocket_sock_ops": {
        "createPeer": function (_0x49cebc, _0x1f87aa, _0x44e19d) {
          var _0x413360;
          if (typeof _0x1f87aa == "object") {
            _0x413360 = _0x1f87aa;
            _0x1f87aa = null;
            _0x44e19d = null;
          }
          if (_0x413360) {
            if (_0x413360._socket) {
              _0x1f87aa = _0x413360._socket.remoteAddress;
              _0x44e19d = _0x413360._socket.remotePort;
            } else {
              var _0x3e4c96 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x413360.url);
              if (!_0x3e4c96) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              _0x1f87aa = _0x3e4c96[0x1];
              _0x44e19d = parseInt(_0x3e4c96[0x2], 0xa);
            }
          } else {
            try {
              var _0x2b81f1 = _0x134a3a.websocket && "object" === typeof _0x134a3a.websocket;
              var _0x34ea22 = "ws:#".replace("#", "//");
              if (_0x2b81f1) {
                if ("string" === typeof _0x134a3a.websocket.url) {
                  _0x34ea22 = _0x134a3a.websocket.url;
                }
              }
              if (_0x34ea22 === "ws://" || _0x34ea22 === "wss://") {
                var _0x1b8c9e = _0x1f87aa.split("/");
                _0x34ea22 = _0x34ea22 + _0x1b8c9e[0x0] + ":" + _0x44e19d + "/" + _0x1b8c9e.slice(0x1).join("/");
              }
              var _0x59bb3d = "binary";
              if (_0x2b81f1) {
                if ("string" === typeof _0x134a3a.websocket.subprotocol) {
                  _0x59bb3d = _0x134a3a.websocket.subprotocol;
                }
              }
              var _0x2ebd5e = undefined;
              if (_0x59bb3d !== "null") {
                _0x59bb3d = _0x59bb3d.replace(/^ +| +$/g, '').split(/ *, */);
                _0x2ebd5e = _0x5527da ? {
                  "protocol": _0x59bb3d.toString()
                } : _0x59bb3d;
              }
              if (_0x2b81f1 && null === _0x134a3a.websocket.subprotocol) {
                _0x59bb3d = "null";
                _0x2ebd5e = undefined;
              }
              var _0x56f677;
              if (_0x5527da) {
                _0x56f677 = require("ws");
              } else {
                _0x56f677 = WebSocket;
              }
              _0x413360 = new _0x56f677(_0x34ea22, _0x2ebd5e);
              _0x413360.binaryType = "arraybuffer";
            } catch (_0x389e0d) {
              throw new null(0x17);
            }
          }
          var _0x3e476a = {
            "addr": _0x1f87aa,
            "port": _0x44e19d,
            "socket": _0x413360,
            "dgram_send_queue": []
          };
          _0x34b7f8.websocket_sock_ops.addPeer(_0x49cebc, _0x3e476a);
          _0x34b7f8.websocket_sock_ops.handlePeerEvents(_0x49cebc, _0x3e476a);
          if (_0x49cebc.type === 0x2 && typeof _0x49cebc.sport != "undefined") {
            _0x3e476a.dgram_send_queue.push(new Uint8Array([0xff, 0xff, 0xff, 0xff, "p".charCodeAt(0x0), "o".charCodeAt(0x0), "r".charCodeAt(0x0), "t".charCodeAt(0x0), (_0x49cebc.sport & 0xff00) >> 0x8, _0x49cebc.sport & 0xff]));
          }
          return _0x3e476a;
        },
        "getPeer": function (_0x1baedb, _0x1dc5e5, _0x2c74ef) {
          return _0x1baedb.peers[_0x1dc5e5 + ":" + _0x2c74ef];
        },
        "addPeer": function (_0x42e46b, _0x385b8b) {
          _0x42e46b.peers[_0x385b8b.addr + ":" + _0x385b8b.port] = _0x385b8b;
        },
        "removePeer": function (_0x43b8c1, _0x4061df) {
          delete _0x43b8c1.peers[_0x4061df.addr + ":" + _0x4061df.port];
        },
        "handlePeerEvents": function (_0x393798, _0x3d53a0) {
          var _0x213b04 = true;
          var _0x288142 = function () {
            _0x134a3a.websocket.emit("open", _0x393798.stream.fd);
            try {
              var _0x291822 = _0x3d53a0.dgram_send_queue.shift();
              while (_0x291822) {
                _0x3d53a0.socket.send(_0x291822);
                _0x291822 = _0x3d53a0.dgram_send_queue.shift();
              }
            } catch (_0x60c2ef) {
              _0x3d53a0.socket.close();
            }
          };
          function _0x1b2ff7(_0x320531) {
            if (typeof _0x320531 == "string") {
              var _0x121d76 = new TextEncoder();
              _0x320531 = _0x121d76.encode(_0x320531);
            } else {
              _0x29a3fa(_0x320531.byteLength !== undefined);
              if (_0x320531.byteLength == 0x0) {
                return;
              } else {
                _0x320531 = new Uint8Array(_0x320531);
              }
            }
            var _0x130a7e = _0x213b04;
            _0x213b04 = false;
            if (_0x130a7e && _0x320531.length === 0xa && _0x320531[0x0] === 0xff && _0x320531[0x1] === 0xff && _0x320531[0x2] === 0xff && _0x320531[0x3] === 0xff && _0x320531[0x4] === "p".charCodeAt(0x0) && _0x320531[0x5] === "o".charCodeAt(0x0) && _0x320531[0x6] === "r".charCodeAt(0x0) && _0x320531[0x7] === "t".charCodeAt(0x0)) {
              var _0x2426f8 = _0x320531[0x8] << 0x8 | _0x320531[0x9];
              _0x34b7f8.websocket_sock_ops.removePeer(_0x393798, _0x3d53a0);
              _0x3d53a0.port = _0x2426f8;
              _0x34b7f8.websocket_sock_ops.addPeer(_0x393798, _0x3d53a0);
              return;
            }
            _0x393798.recv_queue.push({
              "addr": _0x3d53a0.addr,
              "port": _0x3d53a0.port,
              "data": _0x320531
            });
            _0x134a3a.websocket.emit("message", _0x393798.stream.fd);
          }
          if (_0x5527da) {
            _0x3d53a0.socket.on("open", _0x288142);
            _0x3d53a0.socket.on("message", function (_0x4d570f, _0x23eb00) {
              if (!_0x23eb00.binary) {
                return;
              }
              _0x1b2ff7(new Uint8Array(_0x4d570f).buffer);
            });
            _0x3d53a0.socket.on("close", function () {
              _0x134a3a.websocket.emit("close", _0x393798.stream.fd);
            });
            _0x3d53a0.socket.on("error", function (_0x16ce49) {
              _0x393798.error = 0xe;
              _0x134a3a.websocket.emit("error", [_0x393798.stream.fd, _0x393798.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            _0x3d53a0.socket.onopen = _0x288142;
            _0x3d53a0.socket.onclose = function () {
              _0x134a3a.websocket.emit("close", _0x393798.stream.fd);
            };
            _0x3d53a0.socket.onmessage = function _0x20cb97(_0x4aef60) {
              _0x1b2ff7(_0x4aef60.data);
            };
            _0x3d53a0.socket.onerror = function (_0x205d68) {
              _0x393798.error = 0xe;
              _0x134a3a.websocket.emit("error", [_0x393798.stream.fd, _0x393798.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        },
        "poll": function (_0x2b3b25) {
          if (_0x2b3b25.type === 0x1 && _0x2b3b25.server) {
            return _0x2b3b25.pending.length ? 65 : 0x0;
          }
          var _0x239db7 = 0x0;
          var _0x503c99 = _0x2b3b25.type === 0x1 ? _0x34b7f8.websocket_sock_ops.getPeer(_0x2b3b25, _0x2b3b25.daddr, _0x2b3b25.dport) : null;
          if (_0x2b3b25.recv_queue.length || !_0x503c99 || _0x503c99 && _0x503c99.socket.readyState === _0x503c99.socket.CLOSING || _0x503c99 && _0x503c99.socket.readyState === _0x503c99.socket.CLOSED) {
            _0x239db7 |= 65;
          }
          if (!_0x503c99 || _0x503c99 && _0x503c99.socket.readyState === _0x503c99.socket.OPEN) {
            _0x239db7 |= 0x4;
          }
          if (_0x503c99 && _0x503c99.socket.readyState === _0x503c99.socket.CLOSING || _0x503c99 && _0x503c99.socket.readyState === _0x503c99.socket.CLOSED) {
            _0x239db7 |= 0x10;
          }
          return _0x239db7;
        },
        "ioctl": function (_0x46243f, _0x3eb3cd, _0x5c931d) {
          switch (_0x3eb3cd) {
            case 0x541b:
              var _0x4ccccd = 0x0;
              if (_0x46243f.recv_queue.length) {
                _0x4ccccd = _0x46243f.recv_queue[0x0].data.length;
              }
              _0x2aac64[_0x5c931d >> 0x2] = _0x4ccccd;
              return 0x0;
            default:
              return 0x1c;
          }
        },
        "close": function (_0x30c743) {
          if (_0x30c743.server) {
            try {
              _0x30c743.server.close();
            } catch (_0x309423) {}
            _0x30c743.server = null;
          }
          var _0x2c8045 = Object.keys(_0x30c743.peers);
          for (var _0x522147 = 0x0; _0x522147 < _0x2c8045.length; _0x522147++) {
            var _0x42103c = _0x30c743.peers[_0x2c8045[_0x522147]];
            try {
              _0x42103c.socket.close();
            } catch (_0x3e92d2) {}
            _0x34b7f8.websocket_sock_ops.removePeer(_0x30c743, _0x42103c);
          }
          return 0x0;
        },
        "bind": function (_0x3084f2, _0x508a49, _0x44392c) {
          if (typeof _0x3084f2.saddr != "undefined" || typeof _0x3084f2.sport != "undefined") {
            throw new null(0x1c);
          }
          _0x3084f2.saddr = _0x508a49;
          _0x3084f2.sport = _0x44392c;
          if (_0x3084f2.type === 0x2) {
            if (_0x3084f2.server) {
              _0x3084f2.server.close();
              _0x3084f2.server = null;
            }
            try {
              _0x3084f2.sock_ops.listen(_0x3084f2, 0x0);
            } catch (_0x3cdf2b) {
              if (!(_0x3cdf2b instanceof null)) {
                throw _0x3cdf2b;
              }
              if (_0x3cdf2b.errno !== 0x8a) {
                throw _0x3cdf2b;
              }
            }
          }
        },
        "connect": function (_0x271ecf, _0x45f6c0, _0x137b10) {
          if (_0x271ecf.server) {
            throw new null(0x8a);
          }
          if (typeof _0x271ecf.daddr != "undefined" && typeof _0x271ecf.dport != "undefined") {
            var _0x547da3 = _0x34b7f8.websocket_sock_ops.getPeer(_0x271ecf, _0x271ecf.daddr, _0x271ecf.dport);
            if (_0x547da3) {
              if (_0x547da3.socket.readyState === _0x547da3.socket.CONNECTING) {
                throw new null(0x7);
              } else {
                throw new null(0x1e);
              }
            }
          }
          var _0x31d3bd = _0x34b7f8.websocket_sock_ops.createPeer(_0x271ecf, _0x45f6c0, _0x137b10);
          _0x271ecf.daddr = _0x31d3bd.addr;
          _0x271ecf.dport = _0x31d3bd.port;
          throw new null(0x1a);
        },
        "listen": function (_0x47ba80, _0x319c7a) {
          if (!_0x5527da) {
            throw new null(0x8a);
          }
          if (_0x47ba80.server) {
            throw new null(0x1c);
          }
          var _0x3eed6d = require("ws").Server;
          var _0x1bbecc = _0x47ba80.saddr;
          _0x47ba80.server = new _0x3eed6d({
            "host": _0x1bbecc,
            "port": _0x47ba80.sport
          });
          _0x134a3a.websocket.emit("listen", _0x47ba80.stream.fd);
          _0x47ba80.server.on("connection", function (_0x5a2ff6) {
            if (_0x47ba80.type === 0x1) {
              var _0x565646 = _0x34b7f8.createSocket(_0x47ba80.family, _0x47ba80.type, _0x47ba80.protocol);
              var _0x91130c = _0x34b7f8.websocket_sock_ops.createPeer(_0x565646, _0x5a2ff6);
              _0x565646.daddr = _0x91130c.addr;
              _0x565646.dport = _0x91130c.port;
              _0x47ba80.pending.push(_0x565646);
              _0x134a3a.websocket.emit("connection", _0x565646.stream.fd);
            } else {
              _0x34b7f8.websocket_sock_ops.createPeer(_0x47ba80, _0x5a2ff6);
              _0x134a3a.websocket.emit("connection", _0x47ba80.stream.fd);
            }
          });
          _0x47ba80.server.on("closed", function () {
            _0x134a3a.websocket.emit("close", _0x47ba80.stream.fd);
            _0x47ba80.server = null;
          });
          _0x47ba80.server.on("error", function (_0x3056b8) {
            _0x47ba80.error = 0x17;
            _0x134a3a.websocket.emit("error", [_0x47ba80.stream.fd, _0x47ba80.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        },
        "accept": function (_0x54f7c1) {
          if (!_0x54f7c1.server || !_0x54f7c1.pending.length) {
            throw new null(0x1c);
          }
          var _0x230d2c = _0x54f7c1.pending.shift();
          _0x230d2c.stream.flags = _0x54f7c1.stream.flags;
          return _0x230d2c;
        },
        "getname": function (_0x75ac17, _0x3b79e4) {
          var _0x9e85e0;
          var _0x4f9689;
          if (_0x3b79e4) {
            if (_0x75ac17.daddr === undefined || _0x75ac17.dport === undefined) {
              throw new null(0x35);
            }
            _0x9e85e0 = _0x75ac17.daddr;
            _0x4f9689 = _0x75ac17.dport;
          } else {
            _0x9e85e0 = _0x75ac17.saddr || 0x0;
            _0x4f9689 = _0x75ac17.sport || 0x0;
          }
          return {
            "addr": _0x9e85e0,
            "port": _0x4f9689
          };
        },
        "sendmsg": function (_0x4b65c5, _0x3ac172, _0x48390b, _0x36786b, _0x233972, _0x6d173e) {
          if (_0x4b65c5.type === 0x2) {
            if (_0x233972 === undefined || _0x6d173e === undefined) {
              _0x233972 = _0x4b65c5.daddr;
              _0x6d173e = _0x4b65c5.dport;
            }
            if (_0x233972 === undefined || _0x6d173e === undefined) {
              throw new null(0x11);
            }
          } else {
            _0x233972 = _0x4b65c5.daddr;
            _0x6d173e = _0x4b65c5.dport;
          }
          var _0x30b404 = _0x34b7f8.websocket_sock_ops.getPeer(_0x4b65c5, _0x233972, _0x6d173e);
          if (_0x4b65c5.type === 0x1) {
            if (!_0x30b404 || _0x30b404.socket.readyState === _0x30b404.socket.CLOSING || _0x30b404.socket.readyState === _0x30b404.socket.CLOSED) {
              throw new null(0x35);
            } else {
              if (_0x30b404.socket.readyState === _0x30b404.socket.CONNECTING) {
                throw new null(0x6);
              }
            }
          }
          if (ArrayBuffer.isView(_0x3ac172)) {
            _0x48390b += _0x3ac172.byteOffset;
            _0x3ac172 = _0x3ac172.buffer;
          }
          var _0xd4adfd;
          _0xd4adfd = _0x3ac172.slice(_0x48390b, _0x48390b + _0x36786b);
          if (_0x4b65c5.type === 0x2) {
            if (!_0x30b404 || _0x30b404.socket.readyState !== _0x30b404.socket.OPEN) {
              if (!_0x30b404 || _0x30b404.socket.readyState === _0x30b404.socket.CLOSING || _0x30b404.socket.readyState === _0x30b404.socket.CLOSED) {
                _0x30b404 = _0x34b7f8.websocket_sock_ops.createPeer(_0x4b65c5, _0x233972, _0x6d173e);
              }
              _0x30b404.dgram_send_queue.push(_0xd4adfd);
              return _0x36786b;
            }
          }
          try {
            _0x30b404.socket.send(_0xd4adfd);
            return _0x36786b;
          } catch (_0x42c2c4) {
            throw new null(0x1c);
          }
        },
        "recvmsg": function (_0x4f8ee2, _0x1d4d5b) {
          if (_0x4f8ee2.type === 0x1 && _0x4f8ee2.server) {
            throw new null(0x35);
          }
          var _0x1f2d8b = _0x4f8ee2.recv_queue.shift();
          if (!_0x1f2d8b) {
            if (_0x4f8ee2.type === 0x1) {
              var _0x401f80 = _0x34b7f8.websocket_sock_ops.getPeer(_0x4f8ee2, _0x4f8ee2.daddr, _0x4f8ee2.dport);
              if (!_0x401f80) {
                throw new null(0x35);
              } else {
                if (_0x401f80.socket.readyState === _0x401f80.socket.CLOSING || _0x401f80.socket.readyState === _0x401f80.socket.CLOSED) {
                  return null;
                } else {
                  throw new null(0x6);
                }
              }
            } else {
              throw new null(0x6);
            }
          }
          var _0x363603 = _0x1f2d8b.data.byteLength || _0x1f2d8b.data.length;
          var _0x49b815 = _0x1f2d8b.data.byteOffset || 0x0;
          var _0x185d66 = _0x1f2d8b.data.buffer || _0x1f2d8b.data;
          var _0x41bf81 = Math.min(_0x1d4d5b, _0x363603);
          var _0x5ea6b8 = {
            "buffer": new Uint8Array(_0x185d66, _0x49b815, _0x41bf81),
            "addr": _0x1f2d8b.addr,
            "port": _0x1f2d8b.port
          };
          if (_0x4f8ee2.type === 0x1 && _0x41bf81 < _0x363603) {
            var _0x355a06 = _0x363603 - _0x41bf81;
            _0x1f2d8b.data = new Uint8Array(_0x185d66, _0x49b815 + _0x41bf81, _0x355a06);
            _0x4f8ee2.recv_queue.unshift(_0x1f2d8b);
          }
          return _0x5ea6b8;
        }
      }
    };
    function _0x2296fc(_0x51a348) {
      var _0x4079b5 = _0x51a348.split(".");
      for (var _0x33559b = 0x0; _0x33559b < 0x4; _0x33559b++) {
        var _0x2cd8d8 = Number(_0x4079b5[_0x33559b]);
        if (isNaN(_0x2cd8d8)) {
          return null;
        }
        _0x4079b5[_0x33559b] = _0x2cd8d8;
      }
      return (_0x4079b5[0x0] | _0x4079b5[0x1] << 0x8 | _0x4079b5[0x2] << 0x10 | _0x4079b5[0x3] << 0x18) >>> 0x0;
    }
    function _0x48194d(_0x2980a7) {
      var _0x3edda3;
      var _0x186c98;
      var _0x4228a9;
      var _0x3c7d0f;
      var _0x274e01 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var _0x462fdc = [];
      if (!_0x274e01.test(_0x2980a7)) {
        return null;
      }
      if (_0x2980a7 === "::") {
        return [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
      }
      if (_0x2980a7.startsWith("::")) {
        _0x2980a7 = _0x2980a7.replace("::", "Z:");
      } else {
        _0x2980a7 = _0x2980a7.replace("::", ":Z:");
      }
      if (_0x2980a7.indexOf(".") > 0x0) {
        _0x2980a7 = _0x2980a7.replace(new RegExp("[.]", "g"), ":");
        _0x3edda3 = _0x2980a7.split(":");
        _0x3edda3[_0x3edda3.length - 0x4] = parseInt(_0x3edda3[_0x3edda3.length - 0x4]) + parseInt(_0x3edda3[_0x3edda3.length - 0x3]) * 0x100;
        _0x3edda3[_0x3edda3.length - 0x3] = parseInt(_0x3edda3[_0x3edda3.length - 0x2]) + parseInt(_0x3edda3[_0x3edda3.length - 0x1]) * 0x100;
        _0x3edda3 = _0x3edda3.slice(0x0, _0x3edda3.length - 0x2);
      } else {
        _0x3edda3 = _0x2980a7.split(":");
      }
      _0x4228a9 = 0x0;
      _0x3c7d0f = 0x0;
      for (_0x186c98 = 0x0; _0x186c98 < _0x3edda3.length; _0x186c98++) {
        if (typeof _0x3edda3[_0x186c98] == "string") {
          if (_0x3edda3[_0x186c98] === "Z") {
            for (_0x3c7d0f = 0x0; _0x3c7d0f < 0x8 - _0x3edda3.length + 0x1; _0x3c7d0f++) {
              _0x462fdc[_0x186c98 + _0x3c7d0f] = 0x0;
            }
            _0x4228a9 = _0x3c7d0f - 0x1;
          } else {
            _0x462fdc[_0x186c98 + _0x4228a9] = _0x4ef37f(parseInt(_0x3edda3[_0x186c98], 0x10));
          }
        } else {
          _0x462fdc[_0x186c98 + _0x4228a9] = _0x3edda3[_0x186c98];
        }
      }
      return [_0x462fdc[0x1] << 0x10 | _0x462fdc[0x0], _0x462fdc[0x3] << 0x10 | _0x462fdc[0x2], _0x462fdc[0x5] << 0x10 | _0x462fdc[0x4], _0x462fdc[0x7] << 0x10 | _0x462fdc[0x6]];
    }
    var _0x53f91f = {
      "address_map": {
        "id": 0x1,
        "addrs": {},
        "names": {}
      },
      "lookup_name": function (_0x3b7d2d) {
        var _0x474274 = _0x2296fc(_0x3b7d2d);
        if (_0x474274 !== null) {
          return _0x3b7d2d;
        }
        _0x474274 = _0x48194d(_0x3b7d2d);
        if (_0x474274 !== null) {
          return _0x3b7d2d;
        }
        var _0x20fd70;
        if (_0x53f91f.address_map.addrs[_0x3b7d2d]) {
          _0x20fd70 = _0x53f91f.address_map.addrs[_0x3b7d2d];
        } else {
          var _0x3cf9da = _0x53f91f.address_map.id++;
          _0x29a3fa(_0x3cf9da < 0xffff, "exceeded max address mappings of 65535");
          _0x20fd70 = "172.29." + (_0x3cf9da & 0xff) + "." + (_0x3cf9da & 0xff00);
          _0x53f91f.address_map.names[_0x20fd70] = _0x3b7d2d;
          _0x53f91f.address_map.addrs[_0x3b7d2d] = _0x20fd70;
        }
        return _0x20fd70;
      },
      "lookup_addr": function (_0x80d097) {
        if (_0x53f91f.address_map.names[_0x80d097]) {
          return _0x53f91f.address_map.names[_0x80d097];
        }
        return null;
      }
    };
    var _0x4397a3 = {
      "BUCKET_BUFFER_SIZE": 0x2000,
      "mount": function (_0x4741c0) {
        return _0x1279a6.createNode(null, "/", 16895, 0x0);
      },
      "createPipe": function () {
        var _0x33d492 = {
          "buckets": [],
          "refcnt": 0x2
        };
        _0x33d492.buckets.push({
          "buffer": new Uint8Array(0x2000),
          "offset": 0x0,
          "roffset": 0x0
        });
        var _0x3c3514 = _0x4397a3.nextname();
        var _0x12a364 = _0x4397a3.nextname();
        var _0x4c6f7c = _0x1279a6.createNode(_0x4397a3.root, _0x3c3514, 0x1000, 0x0);
        var _0xf93d0b = _0x1279a6.createNode(_0x4397a3.root, _0x12a364, 0x1000, 0x0);
        _0x4c6f7c.pipe = _0x33d492;
        _0xf93d0b.pipe = _0x33d492;
        var _0x10ec06 = _0x1279a6.createStream({
          "path": _0x3c3514,
          "node": _0x4c6f7c,
          "flags": 0x0,
          "seekable": false,
          "stream_ops": _0x4397a3.stream_ops
        });
        _0x4c6f7c.stream = _0x10ec06;
        var _0x3ab4ee = _0x1279a6.createStream({
          "path": _0x12a364,
          "node": _0xf93d0b,
          "flags": 0x1,
          "seekable": false,
          "stream_ops": _0x4397a3.stream_ops
        });
        _0xf93d0b.stream = _0x3ab4ee;
        return {
          "readable_fd": _0x10ec06.fd,
          "writable_fd": _0x3ab4ee.fd
        };
      },
      "stream_ops": {
        "poll": function (_0xe596d) {
          var _0x132136 = _0xe596d.node.pipe;
          if ((_0xe596d.flags & 0x200003) === 0x1) {
            return 260;
          } else {
            if (_0x132136.buckets.length > 0x0) {
              for (var _0x3b7766 = 0x0; _0x3b7766 < _0x132136.buckets.length; _0x3b7766++) {
                var _0x5bdcb9 = _0x132136.buckets[_0x3b7766];
                if (_0x5bdcb9.offset - _0x5bdcb9.roffset > 0x0) {
                  return 65;
                }
              }
            }
          }
          return 0x0;
        },
        "ioctl": function (_0x1f35ad, _0xb3cc34, _0x40986a) {
          return 0x1c;
        },
        "fsync": function (_0x4c99fb) {
          return 0x1c;
        },
        "read": function (_0x3e3cb7, _0x4bdf91, _0x47ba06, _0x4d9dc0, _0x57f6bf) {
          var _0x18f9d4 = _0x3e3cb7.node.pipe;
          var _0x3f4d51 = 0x0;
          for (var _0x476d43 = 0x0; _0x476d43 < _0x18f9d4.buckets.length; _0x476d43++) {
            var _0x35e408 = _0x18f9d4.buckets[_0x476d43];
            _0x3f4d51 += _0x35e408.offset - _0x35e408.roffset;
          }
          _0x29a3fa(_0x4bdf91 instanceof ArrayBuffer || ArrayBuffer.isView(_0x4bdf91));
          var _0x239ddc = _0x4bdf91.subarray(_0x47ba06, _0x47ba06 + _0x4d9dc0);
          if (_0x4d9dc0 <= 0x0) {
            return 0x0;
          }
          if (_0x3f4d51 == 0x0) {
            throw new null(0x6);
          }
          var _0x3fdeaa = Math.min(_0x3f4d51, _0x4d9dc0);
          var _0x3c7a7d = _0x3fdeaa;
          var _0xef772c = 0x0;
          for (var _0x476d43 = 0x0; _0x476d43 < _0x18f9d4.buckets.length; _0x476d43++) {
            var _0x4bc4de = _0x18f9d4.buckets[_0x476d43];
            var _0x5605f8 = _0x4bc4de.offset - _0x4bc4de.roffset;
            if (_0x3fdeaa <= _0x5605f8) {
              var _0x3a82fb = _0x4bc4de.buffer.subarray(_0x4bc4de.roffset, _0x4bc4de.offset);
              if (_0x3fdeaa < _0x5605f8) {
                _0x3a82fb = _0x3a82fb.subarray(0x0, _0x3fdeaa);
                _0x4bc4de.roffset += _0x3fdeaa;
              } else {
                _0xef772c++;
              }
              _0x239ddc.set(_0x3a82fb);
              break;
            } else {
              var _0x3a82fb = _0x4bc4de.buffer.subarray(_0x4bc4de.roffset, _0x4bc4de.offset);
              _0x239ddc.set(_0x3a82fb);
              _0x239ddc = _0x239ddc.subarray(_0x3a82fb.byteLength);
              _0x3fdeaa -= _0x3a82fb.byteLength;
              _0xef772c++;
            }
          }
          if (_0xef772c && _0xef772c == _0x18f9d4.buckets.length) {
            _0xef772c--;
            _0x18f9d4.buckets[_0xef772c].offset = 0x0;
            _0x18f9d4.buckets[_0xef772c].roffset = 0x0;
          }
          _0x18f9d4.buckets.splice(0x0, _0xef772c);
          return _0x3c7a7d;
        },
        "write": function (_0x422a94, _0x29cc4f, _0x40efa7, _0x29725d, _0x4f7184) {
          var _0x35d695 = _0x422a94.node.pipe;
          _0x29a3fa(_0x29cc4f instanceof ArrayBuffer || ArrayBuffer.isView(_0x29cc4f));
          var _0x38f774 = _0x29cc4f.subarray(_0x40efa7, _0x40efa7 + _0x29725d);
          var _0x42e88d = _0x38f774.byteLength;
          if (_0x42e88d <= 0x0) {
            return 0x0;
          }
          var _0x3c4db0 = null;
          if (_0x35d695.buckets.length == 0x0) {
            _0x3c4db0 = {
              "buffer": new Uint8Array(0x2000),
              "offset": 0x0,
              "roffset": 0x0
            };
            _0x35d695.buckets.push(_0x3c4db0);
          } else {
            _0x3c4db0 = _0x35d695.buckets[_0x35d695.buckets.length - 0x1];
          }
          _0x29a3fa(_0x3c4db0.offset <= 0x2000);
          var _0x1f25fb = 0x2000 - _0x3c4db0.offset;
          if (_0x1f25fb >= _0x42e88d) {
            _0x3c4db0.buffer.set(_0x38f774, _0x3c4db0.offset);
            _0x3c4db0.offset += _0x42e88d;
            return _0x42e88d;
          } else if (_0x1f25fb > 0x0) {
            _0x3c4db0.buffer.set(_0x38f774.subarray(0x0, _0x1f25fb), _0x3c4db0.offset);
            _0x3c4db0.offset += _0x1f25fb;
            _0x38f774 = _0x38f774.subarray(_0x1f25fb, _0x38f774.byteLength);
          }
          var _0x509444 = _0x38f774.byteLength / 0x2000 | 0x0;
          var _0x337c54 = _0x38f774.byteLength % 0x2000;
          for (var _0x590015 = 0x0; _0x590015 < _0x509444; _0x590015++) {
            var _0x4a0f1b = {
              "buffer": new Uint8Array(0x2000),
              "offset": 0x2000,
              "roffset": 0x0
            };
            _0x35d695.buckets.push(_0x4a0f1b);
            _0x4a0f1b.buffer.set(_0x38f774.subarray(0x0, 0x2000));
            _0x38f774 = _0x38f774.subarray(0x2000, _0x38f774.byteLength);
          }
          if (_0x337c54 > 0x0) {
            var _0x4a0f1b = {
              "buffer": new Uint8Array(0x2000),
              "offset": _0x38f774.byteLength,
              "roffset": 0x0
            };
            _0x35d695.buckets.push(_0x4a0f1b);
            _0x4a0f1b.buffer.set(_0x38f774);
          }
          return _0x42e88d;
        },
        "close": function (_0x17a88b) {
          var _0x2be158 = _0x17a88b.node.pipe;
          _0x2be158.refcnt--;
          if (_0x2be158.refcnt === 0x0) {
            _0x2be158.buckets = null;
          }
        }
      },
      "nextname": function () {
        if (!_0x4397a3.nextname.current) {
          _0x4397a3.nextname.current = 0x0;
        }
        return "pipe[" + _0x4397a3.nextname.current++ + "]";
      }
    };
    function _0x1cf906(_0x52701f, _0x1237f2, _0x2926b2) {
      var _0xc0728e = new Date().getFullYear();
      var _0x1b560b = new Date(_0xc0728e, 0x0, 0x1);
      var _0x123561 = new Date(_0xc0728e, 0x6, 0x1);
      var _0x13a683 = _0x1b560b.getTimezoneOffset();
      var _0x3ecba9 = _0x123561.getTimezoneOffset();
      var _0x4c9a1c = Math.max(_0x13a683, _0x3ecba9);
      _0x2aac64[_0x52701f >> 0x2] = _0x4c9a1c * 0x3c;
      _0x2aac64[_0x1237f2 >> 0x2] = Number(_0x13a683 != _0x3ecba9);
      function _0x1e4aae(_0x1d8b9a) {
        var _0x458b93 = _0x1d8b9a.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return _0x458b93 ? _0x458b93[0x1] : "GMT";
      }
      var _0xe298e7 = _0x1e4aae(_0x1b560b);
      var _0x4fc457 = _0x1e4aae(_0x123561);
      var _0x1deb12 = _0x42d3c7(_0xe298e7);
      var _0x3bee42 = _0x42d3c7(_0x4fc457);
      if (_0x3ecba9 < _0x13a683) {
        _0x2aac64[_0x2926b2 >> 0x2] = _0x1deb12;
        _0x2aac64[_0x2926b2 + 0x4 >> 0x2] = _0x3bee42;
      } else {
        _0x2aac64[_0x2926b2 >> 0x2] = _0x3bee42;
        _0x2aac64[_0x2926b2 + 0x4 >> 0x2] = _0x1deb12;
      }
    }
    function _0x2bccc6(_0x2831dd, _0x39902d, _0x279708) {
      if (_0x2bccc6.called) {
        return;
      }
      _0x2bccc6.called = true;
      _0x1cf906(_0x2831dd, _0x39902d, _0x279708);
    }
    function _0x1b78d8(_0x16c4dd, _0x3db62f) {
      _0x156bb6.mainLoop.timingMode = _0x16c4dd;
      _0x156bb6.mainLoop.timingValue = _0x3db62f;
      if (!_0x156bb6.mainLoop.func) {
        return 0x1;
      }
      if (!_0x156bb6.mainLoop.running) {
        _0x156bb6.mainLoop.running = true;
      }
      if (_0x16c4dd == 0x0) {
        _0x156bb6.mainLoop.scheduler = function _0x42be95() {
          var _0x530213 = Math.max(0x0, _0x156bb6.mainLoop.tickStartTime + _0x3db62f - _0x101e9c()) | 0x0;
          setTimeout(_0x156bb6.mainLoop.runner, _0x530213);
        };
        _0x156bb6.mainLoop.method = "timeout";
      } else {
        if (_0x16c4dd == 0x1) {
          _0x156bb6.mainLoop.scheduler = function _0x2a051f() {
            _0x156bb6.requestAnimationFrame(_0x156bb6.mainLoop.runner);
          };
          _0x156bb6.mainLoop.method = "rAF";
        } else {
          if (_0x16c4dd == 0x2) {
            if (typeof setImmediate == "undefined") {
              var _0x1a7e82 = [];
              var _0x1b8275 = function (_0x5960b7) {
                if (_0x5960b7.data === "setimmediate" || _0x5960b7.data.target === "setimmediate") {
                  _0x5960b7.stopPropagation();
                  _0x1a7e82.shift()();
                }
              };
              addEventListener("message", _0x1b8275, true);
              setImmediate = function _0x85169(_0x26ff00) {
                _0x1a7e82.push(_0x26ff00);
                if (_0x4a386c) {
                  if (_0x134a3a.setImmediates === undefined) {
                    _0x134a3a.setImmediates = [];
                  }
                  _0x134a3a.setImmediates.push(_0x26ff00);
                  postMessage({
                    "target": "setimmediate"
                  });
                } else {
                  postMessage("setimmediate", "*");
                }
              };
            }
            _0x156bb6.mainLoop.scheduler = function _0x4b5e96() {
              setImmediate(_0x156bb6.mainLoop.runner);
            };
            _0x156bb6.mainLoop.method = "immediate";
          }
        }
      }
      return 0x0;
    }
    var _0x101e9c;
    if (_0x5527da) {
      _0x101e9c = () => {
        var _0x36e1b3 = process.hrtime();
        return _0x36e1b3[0x0] * 0x3e8 + _0x36e1b3[0x1] / 0xf4240;
      };
    } else {
      _0x101e9c = () => performance.now();
    }
    function _0x2d5aff() {}
    function _0x44da03(_0xe11f80, _0x2b6056, _0x5a8cce, _0x32c8fc, _0x140573) {
      _0x29a3fa(!_0x156bb6.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      _0x156bb6.mainLoop.func = _0xe11f80;
      _0x156bb6.mainLoop.arg = _0x32c8fc;
      var _0x4e6591 = _0x156bb6.mainLoop.currentlyRunningMainloop;
      function _0x1749e2() {
        if (_0x4e6591 < _0x156bb6.mainLoop.currentlyRunningMainloop) {
          _0x2d5aff();
          return false;
        }
        return true;
      }
      _0x156bb6.mainLoop.running = false;
      _0x156bb6.mainLoop.runner = function _0x47e635() {
        if (_0x548ac1) {
          return;
        }
        if (_0x156bb6.mainLoop.queue.length > 0x0) {
          var _0x282cde = Date.now();
          var _0x4a37d5 = _0x156bb6.mainLoop.queue.shift();
          _0x4a37d5.func(_0x4a37d5.arg);
          if (_0x156bb6.mainLoop.remainingBlockers) {
            var _0x1ad2fe = _0x156bb6.mainLoop.remainingBlockers;
            var _0x1e85a8 = _0x1ad2fe % 0x1 == 0x0 ? _0x1ad2fe - 0x1 : Math.floor(_0x1ad2fe);
            if (_0x4a37d5.counted) {
              _0x156bb6.mainLoop.remainingBlockers = _0x1e85a8;
            } else {
              _0x1e85a8 = _0x1e85a8 + 0.5;
              _0x156bb6.mainLoop.remainingBlockers = (0x8 * _0x1ad2fe + _0x1e85a8) / 0x9;
            }
          }
          _0x3de750("main loop blocker \"" + _0x4a37d5.name + "\" took " + (Date.now() - _0x282cde) + " ms");
          _0x156bb6.mainLoop.updateStatus();
          if (!_0x1749e2()) {
            return;
          }
          setTimeout(_0x156bb6.mainLoop.runner, 0x0);
          return;
        }
        if (!_0x1749e2()) {
          return;
        }
        _0x156bb6.mainLoop.currentFrameNumber = _0x156bb6.mainLoop.currentFrameNumber + 0x1 | 0x0;
        if (_0x156bb6.mainLoop.timingMode == 0x1 && _0x156bb6.mainLoop.timingValue > 0x1 && _0x156bb6.mainLoop.currentFrameNumber % _0x156bb6.mainLoop.timingValue != 0x0) {
          _0x156bb6.mainLoop.scheduler();
          return;
        } else if (_0x156bb6.mainLoop.timingMode == 0x0) {
          _0x156bb6.mainLoop.tickStartTime = _0x101e9c();
        }
        _0x6698b2.newRenderingFrameStarted();
        _0x156bb6.mainLoop.runIter(_0xe11f80);
        if (!_0x1749e2()) {
          return;
        }
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) {
          SDL.audio.queueNewAudioData();
        }
        _0x156bb6.mainLoop.scheduler();
      };
      if (!_0x140573) {
        if (_0x2b6056 && _0x2b6056 > 0x0) {
          _0x1b78d8(0x0, 0x3e8 / _0x2b6056);
        } else {
          _0x1b78d8(0x1, 0x1);
        }
        _0x156bb6.mainLoop.scheduler();
      }
      if (_0x5a8cce) {
        throw "unwind";
      }
    }
    function _0x221762(_0xda71a7, _0x16dcb7) {
      if (_0x548ac1) {
        return;
      }
      if (_0x16dcb7) {
        _0xda71a7();
        return;
      }
      try {
        _0xda71a7();
      } catch (_0x732117) {
        _0x4f1fa6(_0x732117);
      }
    }
    function _0x93bbb3(_0x5adf7d, _0x1634a1) {
      return setTimeout(function () {
        _0x221762(_0x5adf7d);
      }, _0x1634a1);
    }
    var _0x156bb6 = {
      "mainLoop": {
        "running": false,
        "scheduler": null,
        "method": '',
        "currentlyRunningMainloop": 0x0,
        "func": null,
        "arg": 0x0,
        "timingMode": 0x0,
        "timingValue": 0x0,
        "currentFrameNumber": 0x0,
        "queue": [],
        "pause": function () {
          _0x156bb6.mainLoop.scheduler = null;
          _0x156bb6.mainLoop.currentlyRunningMainloop++;
        },
        "resume": function () {
          _0x156bb6.mainLoop.currentlyRunningMainloop++;
          var _0x16438a = _0x156bb6.mainLoop.timingMode;
          var _0x3c047d = _0x156bb6.mainLoop.timingValue;
          var _0x40ce2c = _0x156bb6.mainLoop.func;
          _0x156bb6.mainLoop.func = null;
          _0x44da03(_0x40ce2c, 0x0, false, _0x156bb6.mainLoop.arg, true);
          _0x1b78d8(_0x16438a, _0x3c047d);
          _0x156bb6.mainLoop.scheduler();
        },
        "updateStatus": function () {
          if (_0x134a3a.setStatus) {
            var _0x3a4bdc = _0x134a3a.statusMessage || "Please wait...";
            var _0x3470e3 = _0x156bb6.mainLoop.remainingBlockers;
            var _0xd80716 = _0x156bb6.mainLoop.expectedBlockers;
            if (_0x3470e3) {
              if (_0x3470e3 < _0xd80716) {
                _0x134a3a.setStatus(_0x3a4bdc + " (" + (_0xd80716 - _0x3470e3) + "/" + _0xd80716 + ")");
              } else {
                _0x134a3a.setStatus(_0x3a4bdc);
              }
            } else {
              _0x134a3a.setStatus('');
            }
          }
        },
        "runIter": function (_0x5e6f2a) {
          if (_0x548ac1) {
            return;
          }
          if (_0x134a3a.preMainLoop) {
            var _0x5b006b = _0x134a3a.preMainLoop();
            if (_0x5b006b === false) {
              return;
            }
          }
          _0x221762(_0x5e6f2a);
          if (_0x134a3a.postMainLoop) {
            _0x134a3a.postMainLoop();
          }
        }
      },
      "isFullscreen": false,
      "pointerLock": false,
      "moduleContextCreatedCallbacks": [],
      "workers": [],
      "init": function () {
        if (!_0x134a3a.preloadPlugins) {
          _0x134a3a.preloadPlugins = [];
        }
        if (_0x156bb6.initted) {
          return;
        }
        _0x156bb6.initted = true;
        try {
          new Blob();
          _0x156bb6.hasBlobConstructor = true;
        } catch (_0x1d08bc) {
          _0x156bb6.hasBlobConstructor = false;
          _0x3de750("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        _0x156bb6.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x156bb6.hasBlobConstructor ? _0x3de750("warning: no BlobBuilder") : null;
        _0x156bb6.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!_0x134a3a.noImageDecoding && typeof _0x156bb6.URLObject == "undefined") {
          _0x3de750("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          _0x134a3a.noImageDecoding = true;
        }
        var _0xdf2452 = {
          canHandle: function _0x55b849(_0x1be70e) {
            return !_0x134a3a.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x1be70e);
          },
          handle: function _0x519ff9(_0x2b93bd, _0x38e97e, _0x60de5a, _0x57c962) {
            var _0x473865 = null;
            if (_0x156bb6.hasBlobConstructor) {
              try {
                _0x473865 = new Blob([_0x2b93bd], {
                  "type": {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                  }[_0x38e97e.substr(_0x38e97e.lastIndexOf(".") + 0x1)]
                });
                if (_0x473865.size !== _0x2b93bd.length) {
                  _0x473865 = new Blob([new Uint8Array(_0x2b93bd).buffer], {
                    "type": {
                      "jpg": "image/jpeg",
                      "jpeg": "image/jpeg",
                      "png": "image/png",
                      "bmp": "image/bmp",
                      "ogg": "audio/ogg",
                      "wav": "audio/wav",
                      "mp3": "audio/mpeg"
                    }[_0x38e97e.substr(_0x38e97e.lastIndexOf(".") + 0x1)]
                  });
                }
              } catch (_0x3ae25c) {
                _0xab9b0c("Blob constructor present but fails: " + _0x3ae25c + "; falling back to blob builder");
              }
            }
            if (!_0x473865) {
              var _0x37a11a = new _0x156bb6.BlobBuilder();
              _0x37a11a.append(new Uint8Array(_0x2b93bd).buffer);
              _0x473865 = _0x37a11a.getBlob();
            }
            var _0x3a6e49 = _0x156bb6.URLObject.createObjectURL(_0x473865);
            var _0x5a5c3b = new Image();
            _0x5a5c3b.onload = () => {
              _0x29a3fa(_0x5a5c3b.complete, "Image " + _0x38e97e + " could not be decoded");
              var _0xad85d3 = document.createElement("canvas");
              _0xad85d3.width = _0x5a5c3b.width;
              _0xad85d3.height = _0x5a5c3b.height;
              var _0x302732 = _0xad85d3.getContext("2d");
              _0x302732.drawImage(_0x5a5c3b, 0x0, 0x0);
              _0x134a3a.preloadedImages[_0x38e97e] = _0xad85d3;
              _0x156bb6.URLObject.revokeObjectURL(_0x3a6e49);
              if (_0x60de5a) {
                _0x60de5a(_0x2b93bd);
              }
            };
            _0x5a5c3b.onerror = _0x30958a => {
              _0x3de750("Image " + _0x3a6e49 + " could not be decoded");
              if (_0x57c962) {
                _0x57c962();
              }
            };
            _0x5a5c3b.src = _0x3a6e49;
          }
        };
        _0x134a3a.preloadPlugins.push(_0xdf2452);
        var _0x15ad58 = {
          canHandle: function _0x21d09a(_0x48f5f3) {
            return !_0x134a3a.noAudioDecoding && _0x48f5f3.substr(-0x4) in {
              ".ogg": 0x1,
              ".wav": 0x1,
              ".mp3": 0x1
            };
          },
          handle: function _0x25b2de(_0x4cf823, _0x37a3bc, _0x4dc69b, _0x3a779e) {
            var _0xfb1367 = false;
            function _0x50caaa(_0x5c97af) {
              if (_0xfb1367) {
                return;
              }
              _0xfb1367 = true;
              _0x134a3a.preloadedAudios[_0x37a3bc] = _0x5c97af;
              if (_0x4dc69b) {
                _0x4dc69b(_0x4cf823);
              }
            }
            function _0x4abce4() {
              if (_0xfb1367) {
                return;
              }
              _0xfb1367 = true;
              _0x134a3a.preloadedAudios[_0x37a3bc] = new Audio();
              if (_0x3a779e) {
                _0x3a779e();
              }
            }
            if (_0x156bb6.hasBlobConstructor) {
              try {
                var _0x37f835 = new Blob([_0x4cf823], {
                  "type": {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                  }[_0x37a3bc.substr(_0x37a3bc.lastIndexOf(".") + 0x1)]
                });
              } catch (_0x219c12) {
                return _0x4abce4();
              }
              var _0x1bbaa7 = _0x156bb6.URLObject.createObjectURL(_0x37f835);
              var _0x5ddef8 = new Audio();
              _0x5ddef8.addEventListener("canplaythrough", function () {
                _0x50caaa(_0x5ddef8);
              }, false);
              _0x5ddef8.onerror = function _0x46df7a(_0x285793) {
                if (_0xfb1367) {
                  return;
                }
                _0x3de750("warning: browser could not fully decode audio " + _0x37a3bc + ", trying slower base64 approach");
                function _0x51df7b(_0x5f4e9d) {
                  var _0xcd99e = '';
                  var _0x41edaf = 0x0;
                  var _0x3ff5b9 = 0x0;
                  for (var _0x4eedf2 = 0x0; _0x4eedf2 < _0x5f4e9d.length; _0x4eedf2++) {
                    _0x41edaf = _0x41edaf << 0x8 | _0x5f4e9d[_0x4eedf2];
                    _0x3ff5b9 += 0x8;
                    while (_0x3ff5b9 >= 0x6) {
                      var _0x584d1b = _0x41edaf >> _0x3ff5b9 - 0x6 & 0x3f;
                      _0x3ff5b9 -= 0x6;
                      _0xcd99e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[_0x584d1b];
                    }
                  }
                  if (_0x3ff5b9 == 0x2) {
                    _0xcd99e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x41edaf & 0x3) << 0x4];
                    _0xcd99e += "==";
                  } else if (_0x3ff5b9 == 0x4) {
                    _0xcd99e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x41edaf & 0xf) << 0x2];
                    _0xcd99e += "=";
                  }
                  return _0xcd99e;
                }
                _0x5ddef8.src = "data:audio/x-" + _0x37a3bc.substr(-0x3) + ";base64," + _0x51df7b(_0x4cf823);
                _0x50caaa(_0x5ddef8);
              };
              _0x5ddef8.src = _0x1bbaa7;
              _0x93bbb3(function () {
                _0x50caaa(_0x5ddef8);
              }, 0x2710);
            } else {
              return _0x4abce4();
            }
          }
        };
        _0x134a3a.preloadPlugins.push(_0x15ad58);
        function _0x123078() {
          _0x156bb6.pointerLock = document.pointerLockElement === _0x134a3a.canvas || document.mozPointerLockElement === _0x134a3a.canvas || document.webkitPointerLockElement === _0x134a3a.canvas || document.msPointerLockElement === _0x134a3a.canvas;
        }
        var _0x15caa7 = _0x134a3a.canvas;
        if (_0x15caa7) {
          _0x15caa7.requestPointerLock = _0x15caa7.requestPointerLock || _0x15caa7.mozRequestPointerLock || _0x15caa7.webkitRequestPointerLock || _0x15caa7.msRequestPointerLock || function () {};
          _0x15caa7.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
          _0x15caa7.exitPointerLock = _0x15caa7.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", _0x123078, false);
          document.addEventListener("mozpointerlockchange", _0x123078, false);
          document.addEventListener("webkitpointerlockchange", _0x123078, false);
          document.addEventListener("mspointerlockchange", _0x123078, false);
          if (_0x134a3a.elementPointerLock) {
            _0x15caa7.addEventListener("click", function (_0x4de382) {
              if (true && _0x134a3a.canvas.requestPointerLock) {
                _0x134a3a.canvas.requestPointerLock();
                _0x4de382.preventDefault();
              }
            }, false);
          }
        }
      },
      "handledByPreloadPlugin": function (_0x3cfbea, _0x591fce, _0x2cfb61, _0x36f15d) {
        _0x156bb6.init();
        var _0x10e79e = false;
        _0x134a3a.preloadPlugins.forEach(function (_0x5d5068) {
          if (_0x10e79e) {
            return;
          }
          if (_0x5d5068.canHandle(_0x591fce)) {
            _0x5d5068.handle(_0x3cfbea, _0x591fce, _0x2cfb61, _0x36f15d);
            _0x10e79e = true;
          }
        });
        return _0x10e79e;
      },
      "createContext": function (_0x27138a, _0x184ac8, _0x3def7d, _0xc33beb) {
        if (_0x184ac8 && _0x134a3a.ctx && _0x27138a == _0x134a3a.canvas) {
          return _0x134a3a.ctx;
        }
        var _0x326d72;
        var _0x2f513d;
        if (_0x184ac8) {
          var _0xc40d33 = {
            "antialias": false,
            "alpha": false,
            "majorVersion": typeof WebGL2RenderingContext != "undefined" ? 0x2 : 0x1
          };
          if (_0xc33beb) {
            for (var _0x2e9d17 in _0xc33beb) {
              _0xc40d33[_0x2e9d17] = _0xc33beb[_0x2e9d17];
            }
          }
          if (typeof _0x6698b2 != "undefined") {
            _0x2f513d = _0x6698b2.createContext(_0x27138a, _0xc40d33);
            if (_0x2f513d) {
              _0x326d72 = _0x6698b2.contexts[_0x2f513d].GLctx;
            }
          }
        } else {
          _0x326d72 = _0x27138a.getContext("2d");
        }
        if (!_0x326d72) {
          return null;
        }
        if (_0x3def7d) {
          if (!_0x184ac8) {
            _0x29a3fa(typeof _0x17a18a == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          }
          _0x134a3a.ctx = _0x326d72;
          if (_0x184ac8) {
            _0x6698b2.makeContextCurrent(_0x2f513d);
          }
          _0x134a3a.useWebGL = _0x184ac8;
          _0x156bb6.moduleContextCreatedCallbacks.forEach(function (_0x1525d3) {
            _0x1525d3();
          });
          _0x156bb6.init();
        }
        return _0x326d72;
      },
      "destroyContext": function (_0x322eca, _0x37e55c, _0x1810ee) {},
      "fullscreenHandlersInstalled": false,
      "lockPointer": undefined,
      "resizeCanvas": undefined,
      "requestFullscreen": function (_0x3a136f, _0x3120cd) {
        _0x156bb6.lockPointer = _0x3a136f;
        _0x156bb6.resizeCanvas = _0x3120cd;
        if (typeof _0x156bb6.lockPointer == "undefined") {
          _0x156bb6.lockPointer = true;
        }
        if (typeof _0x156bb6.resizeCanvas == "undefined") {
          _0x156bb6.resizeCanvas = false;
        }
        var _0x4fa59e = _0x134a3a.canvas;
        function _0x208039() {
          _0x156bb6.isFullscreen = false;
          var _0x420961 = _0x4fa59e.parentNode;
          if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x420961) {
            _0x4fa59e.exitFullscreen = _0x156bb6.exitFullscreen;
            if (_0x156bb6.lockPointer) {
              _0x4fa59e.requestPointerLock();
            }
            _0x156bb6.isFullscreen = true;
            if (_0x156bb6.resizeCanvas) {
              _0x156bb6.setFullscreenCanvasSize();
            } else {
              _0x156bb6.updateCanvasDimensions(_0x4fa59e);
            }
          } else {
            _0x420961.parentNode.insertBefore(_0x4fa59e, _0x420961);
            _0x420961.parentNode.removeChild(_0x420961);
            if (_0x156bb6.resizeCanvas) {
              _0x156bb6.setWindowedCanvasSize();
            } else {
              _0x156bb6.updateCanvasDimensions(_0x4fa59e);
            }
          }
          if (_0x134a3a.onFullScreen) {
            _0x134a3a.onFullScreen(false);
          }
          if (_0x134a3a.onFullscreen) {
            _0x134a3a.onFullscreen(false);
          }
        }
        _0x156bb6.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x208039, false);
        document.addEventListener("mozfullscreenchange", _0x208039, false);
        document.addEventListener("webkitfullscreenchange", _0x208039, false);
        document.addEventListener("MSFullscreenChange", _0x208039, false);
        var _0x5917a7 = document.createElement("div");
        _0x4fa59e.parentNode.insertBefore(_0x5917a7, _0x4fa59e);
        _0x5917a7.appendChild(_0x4fa59e);
        _0x5917a7.requestFullscreen = _0x5917a7.requestFullscreen || _0x5917a7.mozRequestFullScreen || _0x5917a7.msRequestFullscreen || (_0x5917a7.webkitRequestFullscreen ? function () {
          _0x5917a7.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (_0x5917a7.webkitRequestFullScreen ? function () {
          _0x5917a7.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        _0x5917a7.requestFullscreen();
      },
      "exitFullscreen": function () {
        return false;
        var _0x10e716 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
        _0x10e716.apply(document, []);
        return true;
      },
      "nextRAF": 0x0,
      "fakeRequestAnimationFrame": function (_0x3c8e2a) {
        var _0x16eb7f = Date.now();
        _0x156bb6.nextRAF = _0x16eb7f + 16.666666666666668;
        var _0x2ce4c6 = Math.max(0x0 - _0x16eb7f, 0x0);
        setTimeout(_0x3c8e2a, _0x2ce4c6);
      },
      "requestAnimationFrame": function (_0x59d3b2) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(_0x59d3b2);
          return;
        }
        var _0x37cf5f = _0x156bb6.fakeRequestAnimationFrame;
        _0x37cf5f(_0x59d3b2);
      },
      "safeSetTimeout": function (_0x40517b) {
        return _0x93bbb3(_0x40517b);
      },
      "safeRequestAnimationFrame": function (_0x5eeb61) {
        return _0x156bb6.requestAnimationFrame(function () {
          _0x221762(_0x5eeb61);
        });
      },
      "getMimetype": function (_0x8d3327) {
        return {
          "jpg": "image/jpeg",
          "jpeg": "image/jpeg",
          "png": "image/png",
          "bmp": "image/bmp",
          "ogg": "audio/ogg",
          "wav": "audio/wav",
          "mp3": "audio/mpeg"
        }[_0x8d3327.substr(_0x8d3327.lastIndexOf(".") + 0x1)];
      },
      "getUserMedia": function (_0x4e0694) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
        }
        window.getUserMedia(_0x4e0694);
      },
      "getMovementX": function (_0x167df3) {
        return _0x167df3.movementX || _0x167df3.mozMovementX || _0x167df3.webkitMovementX || 0x0;
      },
      "getMovementY": function (_0x42f374) {
        return _0x42f374.movementY || _0x42f374.mozMovementY || _0x42f374.webkitMovementY || 0x0;
      },
      "getMouseWheelDelta": function (_0x5afa79) {
        var _0x37efd0 = 0x0;
        switch (_0x5afa79.type) {
          case "DOMMouseScroll":
            _0x37efd0 = _0x5afa79.detail / 0x3;
            break;
          case "mousewheel":
            _0x37efd0 = _0x5afa79.wheelDelta / 0x78;
            break;
          case "wheel":
            _0x37efd0 = _0x5afa79.deltaY;
            switch (_0x5afa79.deltaMode) {
              case 0x0:
                _0x37efd0 /= 0x64;
                break;
              case 0x1:
                _0x37efd0 /= 0x3;
                break;
              case 0x2:
                _0x37efd0 *= 0x50;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + _0x5afa79.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + _0x5afa79.type;
        }
        return _0x37efd0;
      },
      "mouseX": 0x0,
      "mouseY": 0x0,
      "mouseMovementX": 0x0,
      "mouseMovementY": 0x0,
      "touches": {},
      "lastTouches": {},
      "calculateMouseEvent": function (_0x1b04b9) {
        var _0x229e83 = _0x134a3a.canvas.getBoundingClientRect();
        var _0x3208f4 = _0x134a3a.canvas.width;
        var _0x43c9a5 = _0x134a3a.canvas.height;
        var _0x2e72f9 = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
        var _0x3a6048 = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x1b04b9.type === "touchstart" || _0x1b04b9.type === "touchend" || _0x1b04b9.type === "touchmove") {
          var _0x9c92d = _0x1b04b9.touch;
          if (_0x9c92d === undefined) {
            return;
          }
          var _0x489ee7 = _0x9c92d.pageX - (_0x2e72f9 + _0x229e83.left);
          var _0x434b04 = _0x9c92d.pageY - (_0x3a6048 + _0x229e83.top);
          _0x489ee7 = _0x489ee7 * (_0x3208f4 / _0x229e83.width);
          _0x434b04 = _0x434b04 * (_0x43c9a5 / _0x229e83.height);
          var _0x8523aa = {
            "x": _0x489ee7,
            "y": _0x434b04
          };
          if (_0x1b04b9.type === "touchstart") {
            _0x156bb6.lastTouches[_0x9c92d.identifier] = _0x8523aa;
            _0x156bb6.touches[_0x9c92d.identifier] = _0x8523aa;
          } else {
            if (_0x1b04b9.type === "touchend" || _0x1b04b9.type === "touchmove") {
              var _0x57bb5d = _0x156bb6.touches[_0x9c92d.identifier];
              if (!_0x57bb5d) {
                _0x57bb5d = _0x8523aa;
              }
              _0x156bb6.lastTouches[_0x9c92d.identifier] = _0x57bb5d;
              _0x156bb6.touches[_0x9c92d.identifier] = _0x8523aa;
            }
          }
          return;
        }
        var _0x56b703 = _0x1b04b9.pageX - (_0x2e72f9 + _0x229e83.left);
        var _0x366a6f = _0x1b04b9.pageY - (_0x3a6048 + _0x229e83.top);
        _0x56b703 = _0x56b703 * (_0x3208f4 / _0x229e83.width);
        _0x366a6f = _0x366a6f * (_0x43c9a5 / _0x229e83.height);
        _0x156bb6.mouseMovementX = _0x56b703 - 0x0;
        _0x156bb6.mouseMovementY = _0x366a6f - 0x0;
        _0x156bb6.mouseX = _0x56b703;
        _0x156bb6.mouseY = _0x366a6f;
      },
      "resizeListeners": [],
      "updateResizeListeners": function () {
        var _0x33795f = _0x134a3a.canvas;
        _0x156bb6.resizeListeners.forEach(function (_0x5377cb) {
          _0x5377cb(_0x33795f.width, _0x33795f.height);
        });
      },
      "setCanvasSize": function (_0x47baee, _0x5041ec, _0x894ad1) {
        var _0x22f83a = _0x134a3a.canvas;
        _0x156bb6.updateCanvasDimensions(_0x22f83a, _0x47baee, _0x5041ec);
        if (!_0x894ad1) {
          _0x156bb6.updateResizeListeners();
        }
      },
      "windowedWidth": 0x0,
      "windowedHeight": 0x0,
      "setFullscreenCanvasSize": function () {
        if (typeof SDL != "undefined") {
          var _0x6881e5 = _0x398095[SDL.screen >> 0x2];
          _0x6881e5 = _0x6881e5 | 0x800000;
          _0x2aac64[SDL.screen >> 0x2] = _0x6881e5;
        }
        _0x156bb6.updateCanvasDimensions(_0x134a3a.canvas);
        _0x156bb6.updateResizeListeners();
      },
      "setWindowedCanvasSize": function () {
        if (typeof SDL != "undefined") {
          var _0x2698c4 = _0x398095[SDL.screen >> 0x2];
          _0x2698c4 = _0x2698c4 & -8388609;
          _0x2aac64[SDL.screen >> 0x2] = _0x2698c4;
        }
        _0x156bb6.updateCanvasDimensions(_0x134a3a.canvas);
        _0x156bb6.updateResizeListeners();
      },
      "updateCanvasDimensions": function (_0x4ea34f, _0x3d897b, _0x32a8a0) {
        if (_0x3d897b && _0x32a8a0) {
          _0x4ea34f.widthNative = _0x3d897b;
          _0x4ea34f.heightNative = _0x32a8a0;
        } else {
          _0x3d897b = _0x4ea34f.widthNative;
          _0x32a8a0 = _0x4ea34f.heightNative;
        }
        var _0x1c868a = _0x3d897b;
        var _0x306407 = _0x32a8a0;
        if (_0x134a3a.forcedAspectRatio && _0x134a3a.forcedAspectRatio > 0x0) {
          if (_0x1c868a / _0x306407 < _0x134a3a.forcedAspectRatio) {
            _0x1c868a = Math.round(_0x306407 * _0x134a3a.forcedAspectRatio);
          } else {
            _0x306407 = Math.round(_0x1c868a / _0x134a3a.forcedAspectRatio);
          }
        }
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x4ea34f.parentNode && typeof screen != "undefined") {
          var _0x4abfc4 = Math.min(screen.width / _0x1c868a, screen.height / _0x306407);
          _0x1c868a = Math.round(_0x1c868a * _0x4abfc4);
          _0x306407 = Math.round(_0x306407 * _0x4abfc4);
        }
        if (_0x156bb6.resizeCanvas) {
          if (_0x4ea34f.width != _0x1c868a) {
            _0x4ea34f.width = _0x1c868a;
          }
          if (_0x4ea34f.height != _0x306407) {
            _0x4ea34f.height = _0x306407;
          }
          if (typeof _0x4ea34f.style != "undefined") {
            _0x4ea34f.style.removeProperty("width");
            _0x4ea34f.style.removeProperty("height");
          }
        } else {
          if (_0x4ea34f.width != _0x3d897b) {
            _0x4ea34f.width = _0x3d897b;
          }
          if (_0x4ea34f.height != _0x32a8a0) {
            _0x4ea34f.height = _0x32a8a0;
          }
          if (typeof _0x4ea34f.style != "undefined") {
            if (_0x1c868a != _0x3d897b || _0x306407 != _0x32a8a0) {
              _0x4ea34f.style.setProperty("width", _0x1c868a + "px", "important");
              _0x4ea34f.style.setProperty("height", _0x306407 + "px", "important");
            } else {
              _0x4ea34f.style.removeProperty("width");
              _0x4ea34f.style.removeProperty("height");
            }
          }
        }
      }
    };
    var _0x2892f3 = {
      "inEventHandler": 0x0,
      "removeAllEventListeners": function () {
        for (var _0x55d048 = _0x2892f3.eventHandlers.length - 0x1; _0x55d048 >= 0x0; --_0x55d048) {
          _0x2892f3._removeHandler(_0x55d048);
        }
        _0x2892f3.eventHandlers = [];
        _0x2892f3.deferredCalls = [];
      },
      "registerRemoveEventListeners": function () {
        if (!_0x2892f3.removeEventListenersRegistered) {
          _0xe8f2c7.push(_0x2892f3.removeAllEventListeners);
          _0x2892f3.removeEventListenersRegistered = true;
        }
      },
      "deferredCalls": [],
      "deferCall": function (_0xf9ad8e, _0xf28ae3, _0x2df502) {
        function _0x131252(_0x4ca0fa, _0x4beb9b) {
          if (_0x4ca0fa.length != _0x4beb9b.length) {
            return false;
          }
          for (var _0x522b60 in _0x4ca0fa) {
            if (_0x4ca0fa[_0x522b60] != _0x4beb9b[_0x522b60]) {
              return false;
            }
          }
          return true;
        }
        for (var _0x3dbc46 in _0x2892f3.deferredCalls) {
          var _0xcbcea3 = _0x2892f3.deferredCalls[_0x3dbc46];
          if (_0xcbcea3.targetFunction == _0xf9ad8e && _0x131252(_0xcbcea3.argsList, _0x2df502)) {
            return;
          }
        }
        _0x2892f3.deferredCalls.push({
          "targetFunction": _0xf9ad8e,
          "precedence": _0xf28ae3,
          "argsList": _0x2df502
        });
        _0x2892f3.deferredCalls.sort(function (_0x6cbecc, _0x2f0f30) {
          return _0x6cbecc.precedence < _0x2f0f30.precedence;
        });
      },
      "removeDeferredCalls": function (_0x3ee46d) {
        for (var _0x3f1cbd = 0x0; _0x3f1cbd < _0x2892f3.deferredCalls.length; ++_0x3f1cbd) {
          if (_0x2892f3.deferredCalls[_0x3f1cbd].targetFunction == _0x3ee46d) {
            _0x2892f3.deferredCalls.splice(_0x3f1cbd, 0x1);
            --_0x3f1cbd;
          }
        }
      },
      "canPerformEventHandlerRequests": function () {
        return 0x0 && _0x2892f3.currentEventHandler.allowsDeferredCalls;
      },
      "runDeferredCalls": function () {
        if (!(0x0 && _0x2892f3.currentEventHandler.allowsDeferredCalls)) {
          return;
        }
        for (var _0x40f48a = 0x0; _0x40f48a < _0x2892f3.deferredCalls.length; ++_0x40f48a) {
          var _0x4850c1 = _0x2892f3.deferredCalls[_0x40f48a];
          _0x2892f3.deferredCalls.splice(_0x40f48a, 0x1);
          --_0x40f48a;
          _0x4850c1.targetFunction.apply(null, _0x4850c1.argsList);
        }
      },
      "eventHandlers": [],
      "removeAllHandlersOnTarget": function (_0x406513, _0x578f7a) {
        for (var _0x56718c = 0x0; _0x56718c < _0x2892f3.eventHandlers.length; ++_0x56718c) {
          if (_0x2892f3.eventHandlers[_0x56718c].target == _0x406513 && (!_0x578f7a || _0x578f7a == _0x2892f3.eventHandlers[_0x56718c].eventTypeString)) {
            _0x2892f3._removeHandler(_0x56718c--);
          }
        }
      },
      "_removeHandler": function (_0x2dbd90) {
        var _0x216a1f = _0x2892f3.eventHandlers[_0x2dbd90];
        _0x216a1f.target.removeEventListener(_0x216a1f.eventTypeString, _0x216a1f.eventListenerFunc, _0x216a1f.useCapture);
        _0x2892f3.eventHandlers.splice(_0x2dbd90, 0x1);
      },
      "registerOrRemoveHandler": function (_0x3fa5d9) {
        var _0x37d537 = function _0x41b07e(_0x3dae0d) {
          ++0x0;
          _0x2892f3.currentEventHandler = _0x3fa5d9;
          _0x2892f3.runDeferredCalls();
          _0x3fa5d9.handlerFunc(_0x3dae0d);
          _0x2892f3.runDeferredCalls();
          --0x0;
        };
        if (_0x3fa5d9.callbackfunc) {
          _0x3fa5d9.eventListenerFunc = _0x37d537;
          _0x3fa5d9.target.addEventListener(_0x3fa5d9.eventTypeString, _0x37d537, _0x3fa5d9.useCapture);
          _0x2892f3.eventHandlers.push(_0x3fa5d9);
          _0x2892f3.registerRemoveEventListeners();
        } else {
          for (var _0x730153 = 0x0; _0x730153 < _0x2892f3.eventHandlers.length; ++_0x730153) {
            if (_0x2892f3.eventHandlers[_0x730153].target == _0x3fa5d9.target && _0x2892f3.eventHandlers[_0x730153].eventTypeString == _0x3fa5d9.eventTypeString) {
              _0x2892f3._removeHandler(_0x730153--);
            }
          }
        }
      },
      "getNodeNameForTarget": function (_0x2b5350) {
        if (!_0x2b5350) {
          return '';
        }
        if (_0x2b5350 == window) {
          return "#window";
        }
        if (_0x2b5350 == screen) {
          return "#screen";
        }
        return _0x2b5350 && _0x2b5350.nodeName ? _0x2b5350.nodeName : '';
      },
      "fullscreenEnabled": function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    function _0x3e608c(_0x338cae) {
      var _0x35ed79 = _0x338cae.getExtension("ANGLE_instanced_arrays");
      if (_0x35ed79) {
        _0x338cae.vertexAttribDivisor = function (_0xccab6, _0x4c7064) {
          _0x35ed79.vertexAttribDivisorANGLE(_0xccab6, _0x4c7064);
        };
        _0x338cae.drawArraysInstanced = function (_0x5e3188, _0x40cb63, _0x56e5df, _0x4dcf50) {
          _0x35ed79.drawArraysInstancedANGLE(_0x5e3188, _0x40cb63, _0x56e5df, _0x4dcf50);
        };
        _0x338cae.drawElementsInstanced = function (_0x47ab51, _0x156d69, _0x24dbd9, _0x1e83ed, _0x3a0277) {
          _0x35ed79.drawElementsInstancedANGLE(_0x47ab51, _0x156d69, _0x24dbd9, _0x1e83ed, _0x3a0277);
        };
        return 0x1;
      }
    }
    function _0x5e7a4a(_0x35cf17) {
      var _0x1e78dc = _0x35cf17.getExtension("OES_vertex_array_object");
      if (_0x1e78dc) {
        _0x35cf17.createVertexArray = function () {
          return _0x1e78dc.createVertexArrayOES();
        };
        _0x35cf17.deleteVertexArray = function (_0x127d8c) {
          _0x1e78dc.deleteVertexArrayOES(_0x127d8c);
        };
        _0x35cf17.bindVertexArray = function (_0x5bbb7c) {
          _0x1e78dc.bindVertexArrayOES(_0x5bbb7c);
        };
        _0x35cf17.isVertexArray = function (_0x8c5e91) {
          return _0x1e78dc.isVertexArrayOES(_0x8c5e91);
        };
        return 0x1;
      }
    }
    function _0x5b415d(_0x56b75d) {
      var _0x5cfad1 = _0x56b75d.getExtension("WEBGL_draw_buffers");
      if (_0x5cfad1) {
        _0x56b75d.drawBuffers = function (_0x229a1a, _0x2ba4ff) {
          _0x5cfad1.drawBuffersWEBGL(_0x229a1a, _0x2ba4ff);
        };
        return 0x1;
      }
    }
    function _0x4dbd59(_0xa08d82) {
      return !!(_0xa08d82.dibvbi = _0xa08d82.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0x26677c(_0x1f8c63) {
      return !!(_0x1f8c63.mdibvbi = _0x1f8c63.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0x4eb011(_0x15edc7) {
      return !!(_0x15edc7.multiDrawWebgl = _0x15edc7.getExtension("WEBGL_multi_draw"));
    }
    var _0x6698b2 = {
      "counter": 0x1,
      "buffers": [],
      "mappedBuffers": {},
      "programs": [],
      "framebuffers": [],
      "renderbuffers": [],
      "textures": [],
      "shaders": [],
      "vaos": [],
      "contexts": [],
      "offscreenCanvases": {},
      "queries": [],
      "samplers": [],
      "transformFeedbacks": [],
      "syncs": [],
      "byteSizeByTypeRoot": 0x1400,
      "byteSizeByType": [0x1, 0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2, 0x3, 0x4, 0x8],
      "stringCache": {},
      "stringiCache": {},
      "unpackAlignment": 0x4,
      "recordError": function _0x521014(_0x4b0a3d) {
        if (!_0x6698b2.lastError) {
          _0x6698b2.lastError = _0x4b0a3d;
        }
      },
      "getNewId": function (_0x2c800b) {
        var _0x33cbfa = 0x1++;
        for (var _0x2f879c = _0x2c800b.length; _0x2f879c < _0x33cbfa; _0x2f879c++) {
          _0x2c800b[_0x2f879c] = null;
        }
        return _0x33cbfa;
      },
      "MAX_TEMP_BUFFER_SIZE": 0x200000,
      "numTempVertexBuffersPerSize": 0x40,
      "log2ceilLookup": function (_0x29de90) {
        return 0x20 - Math.clz32(_0x29de90 === 0x0 ? 0x0 : _0x29de90 - 0x1);
      },
      "generateTempBuffers": function (_0x463bd2, _0x484015) {
        var _0x472e29 = 0x20 - Math.clz32(2097151);
        _0x484015.tempVertexBufferCounters1 = [];
        _0x484015.tempVertexBufferCounters2 = [];
        _0x484015.tempVertexBufferCounters1.length = _0x484015.tempVertexBufferCounters2.length = _0x472e29 + 0x1;
        _0x484015.tempVertexBuffers1 = [];
        _0x484015.tempVertexBuffers2 = [];
        _0x484015.tempVertexBuffers1.length = _0x484015.tempVertexBuffers2.length = _0x472e29 + 0x1;
        _0x484015.tempIndexBuffers = [];
        _0x484015.tempIndexBuffers.length = _0x472e29 + 0x1;
        for (var _0x40c568 = 0x0; _0x40c568 <= _0x472e29; ++_0x40c568) {
          _0x484015.tempIndexBuffers[_0x40c568] = null;
          _0x484015.tempVertexBufferCounters1[_0x40c568] = _0x484015.tempVertexBufferCounters2[_0x40c568] = 0x0;
          _0x484015.tempVertexBuffers1[_0x40c568] = [];
          _0x484015.tempVertexBuffers2[_0x40c568] = [];
          var _0x21e273 = _0x484015.tempVertexBuffers1[_0x40c568];
          var _0x1cca2b = _0x484015.tempVertexBuffers2[_0x40c568];
          _0x21e273.length = _0x1cca2b.length = 0x40;
          for (var _0x4251c3 = 0x0; _0x4251c3 < 0x40; ++_0x4251c3) {
            _0x21e273[_0x4251c3] = _0x1cca2b[_0x4251c3] = null;
          }
        }
        if (_0x463bd2) {
          _0x484015.tempQuadIndexBuffer = _0x17a18a.createBuffer();
          _0x484015.GLctx.bindBuffer(0x8893, _0x484015.tempQuadIndexBuffer);
          var _0x142d7a = new Uint16Array(1048576);
          var _0x40c568 = 0x0;
          var _0x159cd7 = 0x0;
          while (0x1) {
            _0x142d7a[_0x40c568++] = _0x159cd7;
            if (_0x40c568 >= 1048576) {
              break;
            }
            _0x142d7a[_0x40c568++] = _0x159cd7 + 0x1;
            if (_0x40c568 >= 1048576) {
              break;
            }
            _0x142d7a[_0x40c568++] = _0x159cd7 + 0x2;
            if (_0x40c568 >= 1048576) {
              break;
            }
            _0x142d7a[_0x40c568++] = _0x159cd7;
            if (_0x40c568 >= 1048576) {
              break;
            }
            _0x142d7a[_0x40c568++] = _0x159cd7 + 0x2;
            if (_0x40c568 >= 1048576) {
              break;
            }
            _0x142d7a[_0x40c568++] = _0x159cd7 + 0x3;
            if (_0x40c568 >= 1048576) {
              break;
            }
            _0x159cd7 += 0x4;
          }
          _0x484015.GLctx.bufferData(0x8893, _0x142d7a, 0x88e4);
          _0x484015.GLctx.bindBuffer(0x8893, null);
        }
      },
      "getTempVertexBuffer": function _0x2c8e28(_0x4d735f) {
        var _0x4291ef = 0x20 - Math.clz32(_0x4d735f === 0x0 ? 0x0 : _0x4d735f - 0x1);
        var _0x10e57e = _0x6698b2.currentContext.tempVertexBuffers1[_0x4291ef];
        var _0x112d5e = _0x6698b2.currentContext.tempVertexBufferCounters1[_0x4291ef];
        _0x6698b2.currentContext.tempVertexBufferCounters1[_0x4291ef] = _0x6698b2.currentContext.tempVertexBufferCounters1[_0x4291ef] + 0x1 & 63;
        var _0x527705 = _0x10e57e[_0x112d5e];
        if (_0x527705) {
          return _0x527705;
        }
        var _0xf4ec6e = _0x17a18a.getParameter(0x8894);
        _0x10e57e[_0x112d5e] = _0x17a18a.createBuffer();
        _0x17a18a.bindBuffer(0x8892, _0x10e57e[_0x112d5e]);
        _0x17a18a.bufferData(0x8892, 0x1 << _0x4291ef, 0x88e8);
        _0x17a18a.bindBuffer(0x8892, _0xf4ec6e);
        return _0x10e57e[_0x112d5e];
      },
      "getTempIndexBuffer": function _0x30d2a7(_0x5aa98e) {
        var _0x5c92bb = 0x20 - Math.clz32(_0x5aa98e === 0x0 ? 0x0 : _0x5aa98e - 0x1);
        var _0x19987c = _0x6698b2.currentContext.tempIndexBuffers[_0x5c92bb];
        if (_0x19987c) {
          return _0x19987c;
        }
        var _0x14a0e8 = _0x17a18a.getParameter(0x8895);
        _0x6698b2.currentContext.tempIndexBuffers[_0x5c92bb] = _0x17a18a.createBuffer();
        _0x17a18a.bindBuffer(0x8893, _0x6698b2.currentContext.tempIndexBuffers[_0x5c92bb]);
        _0x17a18a.bufferData(0x8893, 0x1 << _0x5c92bb, 0x88e8);
        _0x17a18a.bindBuffer(0x8893, _0x14a0e8);
        return _0x6698b2.currentContext.tempIndexBuffers[_0x5c92bb];
      },
      "newRenderingFrameStarted": function _0x5ddd6a() {
        if (!_0x6698b2.currentContext) {
          return;
        }
        var _0x133478 = _0x6698b2.currentContext.tempVertexBuffers1;
        _0x6698b2.currentContext.tempVertexBuffers1 = _0x6698b2.currentContext.tempVertexBuffers2;
        _0x6698b2.currentContext.tempVertexBuffers2 = _0x133478;
        _0x133478 = _0x6698b2.currentContext.tempVertexBufferCounters1;
        _0x6698b2.currentContext.tempVertexBufferCounters1 = _0x6698b2.currentContext.tempVertexBufferCounters2;
        _0x6698b2.currentContext.tempVertexBufferCounters2 = _0x133478;
        var _0x487b76 = 0x20 - Math.clz32(2097151);
        for (var _0x2f08b0 = 0x0; _0x2f08b0 <= _0x487b76; ++_0x2f08b0) {
          _0x6698b2.currentContext.tempVertexBufferCounters1[_0x2f08b0] = 0x0;
        }
      },
      "getSource": function (_0xc09f23, _0x1f8b8c, _0x5ef4fb, _0x294e12) {
        var _0x331a04 = '';
        for (var _0x771c8e = 0x0; _0x771c8e < _0x1f8b8c; ++_0x771c8e) {
          var _0x128c4b = _0x294e12 ? _0x2aac64[_0x294e12 + _0x771c8e * 0x4 >> 0x2] : -0x1;
          _0x331a04 += _0x2aac64[_0x5ef4fb + _0x771c8e * 0x4 >> 0x2] ? _0x227981(_0x1dd929, _0x2aac64[_0x5ef4fb + _0x771c8e * 0x4 >> 0x2], _0x128c4b < 0x0 ? undefined : _0x128c4b) : '';
        }
        return _0x331a04;
      },
      "calcBufLength": function _0x3c7498(_0x4a9323, _0x3d3b6a, _0x413aa9, _0x36f980) {
        if (_0x413aa9 > 0x0) {
          return _0x36f980 * _0x413aa9;
        }
        var _0x2689da = _0x6698b2.byteSizeByType[_0x3d3b6a - 0x1400];
        return _0x4a9323 * _0x2689da * _0x36f980;
      },
      "usedTempBuffers": [],
      "preDrawHandleClientVertexAttribBindings": function _0x1d1abb(_0x22e9e0) {
        _0x6698b2.resetBufferBinding = false;
        for (var _0x55f1bc = 0x0; _0x55f1bc < _0x6698b2.currentContext.maxVertexAttribs; ++_0x55f1bc) {
          var _0xbeca00 = _0x6698b2.currentContext.clientBuffers[_0x55f1bc];
          if (!_0xbeca00.clientside || !_0xbeca00.enabled) {
            continue;
          }
          _0x6698b2.resetBufferBinding = true;
          var _0x177e90 = _0x6698b2.calcBufLength(_0xbeca00.size, _0xbeca00.type, _0xbeca00.stride, _0x22e9e0);
          var _0xd48d5c = _0x6698b2.getTempVertexBuffer(_0x177e90);
          _0x17a18a.bindBuffer(0x8892, _0xd48d5c);
          _0x17a18a.bufferSubData(0x8892, 0x0, _0x1dd929.subarray(_0xbeca00.ptr, _0xbeca00.ptr + _0x177e90));
          _0xbeca00.vertexAttribPointerAdaptor.call(_0x17a18a, _0x55f1bc, _0xbeca00.size, _0xbeca00.type, _0xbeca00.normalized, _0xbeca00.stride, 0x0);
        }
      },
      "postDrawHandleClientVertexAttribBindings": function _0x21ff7e() {
        if (_0x6698b2.resetBufferBinding) {
          _0x17a18a.bindBuffer(0x8892, _0x6698b2.buffers[_0x17a18a.currentArrayBufferBinding]);
        }
      },
      "createContext": function (_0x2bb00b, _0x3e506f) {
        if (!_0x2bb00b.getContextSafariWebGL2Fixed) {
          _0x2bb00b.getContextSafariWebGL2Fixed = _0x2bb00b.getContext;
          function _0x3bfe7e(_0x59475f, _0x45afe5) {
            var _0x4cbdee = _0x2bb00b.getContextSafariWebGL2Fixed(_0x59475f, _0x45afe5);
            return _0x59475f == "webgl" == _0x4cbdee instanceof WebGLRenderingContext ? _0x4cbdee : null;
          }
          _0x2bb00b.getContext = _0x3bfe7e;
        }
        var _0x1bb82b = _0x3e506f.majorVersion > 0x1 ? _0x2bb00b.getContext("webgl2", _0x3e506f) : _0x2bb00b.getContext("webgl", _0x3e506f);
        if (!_0x1bb82b) {
          return 0x0;
        }
        var _0x18a3e2 = _0x6698b2.registerContext(_0x1bb82b, _0x3e506f);
        return _0x18a3e2;
      },
      "registerContext": function (_0x513fb7, _0x42046b) {
        var _0x1e4304 = _0x6698b2.getNewId(_0x6698b2.contexts);
        var _0xf516ec = {
          "handle": _0x1e4304,
          "attributes": _0x42046b,
          "version": _0x42046b.majorVersion,
          "GLctx": _0x513fb7
        };
        if (_0x513fb7.canvas) {
          _0x513fb7.canvas.GLctxObject = _0xf516ec;
        }
        _0x6698b2.contexts[_0x1e4304] = _0xf516ec;
        if (typeof _0x42046b.enableExtensionsByDefault == "undefined" || _0x42046b.enableExtensionsByDefault) {
          _0x6698b2.initExtensions(_0xf516ec);
        }
        _0xf516ec.maxVertexAttribs = _0xf516ec.GLctx.getParameter(0x8869);
        _0xf516ec.clientBuffers = [];
        for (var _0x540f8d = 0x0; _0x540f8d < _0xf516ec.maxVertexAttribs; _0x540f8d++) {
          _0xf516ec.clientBuffers[_0x540f8d] = {
            "enabled": false,
            "clientside": false,
            "size": 0x0,
            "type": 0x0,
            "normalized": 0x0,
            "stride": 0x0,
            "ptr": 0x0,
            "vertexAttribPointerAdaptor": null
          };
        }
        _0x6698b2.generateTempBuffers(false, _0xf516ec);
        return _0x1e4304;
      },
      "makeContextCurrent": function (_0x1972fc) {
        _0x6698b2.currentContext = _0x6698b2.contexts[_0x1972fc];
        _0x134a3a.ctx = _0x17a18a = _0x6698b2.currentContext && _0x6698b2.currentContext.GLctx;
        return !(_0x1972fc && !_0x17a18a);
      },
      "getContext": function (_0x4b35df) {
        return _0x6698b2.contexts[_0x4b35df];
      },
      "deleteContext": function (_0x47d4f0) {
        if (_0x6698b2.currentContext === _0x6698b2.contexts[_0x47d4f0]) {
          _0x6698b2.currentContext = null;
        }
        if (typeof _0x2892f3 == "object") {
          _0x2892f3.removeAllHandlersOnTarget(_0x6698b2.contexts[_0x47d4f0].GLctx.canvas);
        }
        if (_0x6698b2.contexts[_0x47d4f0] && _0x6698b2.contexts[_0x47d4f0].GLctx.canvas) {
          _0x6698b2.contexts[_0x47d4f0].GLctx.canvas.GLctxObject = undefined;
        }
        _0x6698b2.contexts[_0x47d4f0] = null;
      },
      "initExtensions": function (_0xbf195c) {
        if (!_0xbf195c) {
          _0xbf195c = _0x6698b2.currentContext;
        }
        if (_0xbf195c.initExtensionsDone) {
          return;
        }
        _0xbf195c.initExtensionsDone = true;
        var _0x318993 = _0xbf195c.GLctx;
        _0x3e608c(_0x318993);
        _0x5e7a4a(_0x318993);
        _0x5b415d(_0x318993);
        _0x4dbd59(_0x318993);
        _0x26677c(_0x318993);
        if (_0xbf195c.version >= 0x2) {
          _0x318993.disjointTimerQueryExt = _0x318993.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (_0xbf195c.version < 0x2 || !_0x318993.disjointTimerQueryExt) {
          _0x318993.disjointTimerQueryExt = _0x318993.getExtension("EXT_disjoint_timer_query");
        }
        _0x4eb011(_0x318993);
        var _0x5d7ca3 = _0x318993.getSupportedExtensions() || [];
        _0x5d7ca3.forEach(function (_0x4e9434) {
          if (!_0x4e9434.includes("lose_context") && !_0x4e9434.includes("debug")) {
            _0x318993.getExtension(_0x4e9434);
          }
        });
      }
    };
    var _0x1eaa25 = {};
    function _0x29b669() {
      if (!_0x29b669.strings) {
        var _0x58701e = (typeof navigator == "object" && navigator.languages && navigator.languages[0x0] || "C").replace("-", "_") + ".UTF-8";
        var _0x4e9e24 = {
          "USER": "web_user",
          "LOGNAME": "web_user",
          "PATH": "/",
          "PWD": "/",
          "HOME": "/home/web_user",
          "LANG": _0x58701e,
          "_": _0x170acd || "./this.program"
        };
        for (var _0x38422b in _0x1eaa25) {
          if (_0x1eaa25[_0x38422b] === undefined) {
            delete _0x4e9e24[_0x38422b];
          } else {
            _0x4e9e24[_0x38422b] = _0x1eaa25[_0x38422b];
          }
        }
        var _0x159cd5 = [];
        for (var _0x38422b in _0x4e9e24) {
          _0x159cd5.push(_0x38422b + "=" + _0x4e9e24[_0x38422b]);
        }
        _0x29b669.strings = _0x159cd5;
      }
      return _0x29b669.strings;
    }
    var _0x1c683e = [];
    var _0x48a6fd = [];
    var _0x1b3637 = [];
    var _0x3e7305 = function (_0x551257, _0xf90228, _0x32acdc, _0x4b5f7e) {
      if (!_0x551257) {
        _0x551257 = this;
      }
      this.parent = _0x551257;
      this.mount = _0x551257.mount;
      this.mounted = null;
      this.id = 0x1++;
      this.name = _0xf90228;
      this.mode = _0x32acdc;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = _0x4b5f7e;
    };
    Object.defineProperties(_0x3e7305.prototype, {
      "read": {
        "get": function () {
          return (this.mode & 365) === 365;
        },
        "set": function (_0x360720) {
          if (_0x360720) {
            this.mode |= 365;
          } else {
            this.mode &= -366;
          }
        }
      },
      "write": {
        "get": function () {
          return (this.mode & 0x92) === 0x92;
        },
        "set": function (_0x280454) {
          if (_0x280454) {
            this.mode |= 0x92;
          } else {
            this.mode &= -147;
          }
        }
      },
      "isFolder": {
        "get": function () {
          return (this.mode & 0xf000) === 0x4000;
        }
      },
      "isDevice": {
        "get": function () {
          return (this.mode & 0xf000) === 0x2000;
        }
      }
    });
    _0x1279a6.FSNode = _0x3e7305;
    _0x1279a6.staticInit();
    _0x134a3a.FS_createPath = _0x1279a6.createPath;
    _0x134a3a.FS_createDataFile = _0x1279a6.createDataFile;
    _0x134a3a.requestFullscreen = function _0x557ead(_0x381da2, _0x5864c4) {
      _0x156bb6.requestFullscreen(_0x381da2, _0x5864c4);
    };
    _0x134a3a.requestAnimationFrame = function _0x34568e(_0x4c9f59) {
      _0x156bb6.requestAnimationFrame(_0x4c9f59);
    };
    _0x134a3a.setCanvasSize = function _0x1fb762(_0xd2d290, _0x1c3c94, _0x2701fa) {
      _0x156bb6.setCanvasSize(_0xd2d290, _0x1c3c94, _0x2701fa);
    };
    _0x134a3a.pauseMainLoop = function _0x8740ed() {
      _0x156bb6.mainLoop.pause();
    };
    _0x134a3a.resumeMainLoop = function _0xd928d7() {
      _0x156bb6.mainLoop.resume();
    };
    _0x134a3a.getUserMedia = function _0x31339() {
      _0x156bb6.getUserMedia();
    };
    _0x134a3a.createContext = function _0x17fcbd(_0x30e561, _0x58b015, _0xadc71, _0x35a4a9) {
      return _0x156bb6.createContext(_0x30e561, _0x58b015, _0xadc71, _0x35a4a9);
    };
    var _0x17a18a;
    for (var _0x39e543 = 0x0; _0x39e543 < 0x20; ++_0x39e543) {
      _0x1c683e.push(new Array(_0x39e543));
    }
    var _0x94399d = new Float32Array(0x120);
    for (var _0x39e543 = 0x0; _0x39e543 < 0x120; ++_0x39e543) {
      _0x48a6fd[_0x39e543] = _0x94399d.subarray(0x0, _0x39e543 + 0x1);
    }
    var _0x3ea983 = new Int32Array(0x120);
    for (var _0x39e543 = 0x0; _0x39e543 < 0x120; ++_0x39e543) {
      _0x1b3637[_0x39e543] = _0x3ea983.subarray(0x0, _0x39e543 + 0x1);
    }
    function _0x2ae60e(_0x1a3002, _0x4b97a2, _0x231f79) {
      var _0x319959 = _0x231f79 > 0x0 ? _0x231f79 : _0x169ac9(_0x1a3002) + 0x1;
      var _0x46327c = new Array(_0x319959);
      var _0x32fc91 = _0x57a287(_0x1a3002, _0x46327c, 0x0, _0x46327c.length);
      if (_0x4b97a2) {
        _0x46327c.length = _0x32fc91;
      }
      return _0x46327c;
    }
    var _0x255854 = _0x134a3a.___wasm_call_ctors = function () {
      return (_0x255854 = _0x134a3a.___wasm_call_ctors = _0x134a3a.asm.__wasm_call_ctors).apply(null, arguments);
    };
    var _0x2d6197 = _0x134a3a._ReleaseKeys = function () {
      return (_0x2d6197 = _0x134a3a._ReleaseKeys = _0x134a3a.asm.ReleaseKeys).apply(null, arguments);
    };
    var _0x37becb = _0x134a3a._getMemInfo = function () {
      return (_0x37becb = _0x134a3a._getMemInfo = _0x134a3a.asm.getMemInfo).apply(null, arguments);
    };
    var _0x4e87c3 = _0x134a3a._SendMessageFloat = function () {
      return (_0x4e87c3 = _0x134a3a._SendMessageFloat = _0x134a3a.asm.SendMessageFloat).apply(null, arguments);
    };
    var _0x400c1d = _0x134a3a._SendMessageString = function () {
      return (_0x400c1d = _0x134a3a._SendMessageString = _0x134a3a.asm.SendMessageString).apply(null, arguments);
    };
    var _0x41f0ab = _0x134a3a._SendMessage = function () {
      return (_0x41f0ab = _0x134a3a._SendMessage = _0x134a3a.asm.SendMessage).apply(null, arguments);
    };
    var _0x3c2bc5 = _0x134a3a._SetFullscreen = function () {
      return (_0x3c2bc5 = _0x134a3a._SetFullscreen = _0x134a3a.asm.SetFullscreen).apply(null, arguments);
    };
    var _0x4d6c7b = _0x134a3a._main = function () {
      return (_0x4d6c7b = _0x134a3a._main = _0x134a3a.asm.main).apply(null, arguments);
    };
    var _0x1900ef = _0x134a3a.___errno_location = function () {
      return (_0x1900ef = _0x134a3a.___errno_location = _0x134a3a.asm.__errno_location).apply(null, arguments);
    };
    var _0x42f336 = _0x134a3a.___dl_seterr = function () {
      return (_0x42f336 = _0x134a3a.___dl_seterr = _0x134a3a.asm.__dl_seterr).apply(null, arguments);
    };
    var _0xbae88b = _0x134a3a._htonl = function () {
      return (_0xbae88b = _0x134a3a._htonl = _0x134a3a.asm.htonl).apply(null, arguments);
    };
    var _0x4ef37f = _0x134a3a._htons = function () {
      return (_0x4ef37f = _0x134a3a._htons = _0x134a3a.asm.htons).apply(null, arguments);
    };
    var _0x24e258 = _0x134a3a._ntohs = function () {
      return (_0x24e258 = _0x134a3a._ntohs = _0x134a3a.asm.ntohs).apply(null, arguments);
    };
    var _0x47054c = _0x134a3a._strlen = function () {
      return (_0x47054c = _0x134a3a._strlen = _0x134a3a.asm.strlen).apply(null, arguments);
    };
    var _0x1f7001 = _0x134a3a._malloc = function () {
      return (_0x1f7001 = _0x134a3a._malloc = _0x134a3a.asm.malloc).apply(null, arguments);
    };
    var _0x484a7c = _0x134a3a._free = function () {
      return (_0x484a7c = _0x134a3a._free = _0x134a3a.asm.free).apply(null, arguments);
    };
    var _0x1286cb = _0x134a3a._emscripten_builtin_memalign = function () {
      return (_0x1286cb = _0x134a3a._emscripten_builtin_memalign = _0x134a3a.asm.emscripten_builtin_memalign).apply(null, arguments);
    };
    var _0x2d0869 = _0x134a3a._setThrew = function () {
      return (_0x2d0869 = _0x134a3a._setThrew = _0x134a3a.asm.setThrew).apply(null, arguments);
    };
    var _0x3932fa = _0x134a3a._saveSetjmp = function () {
      return (_0x3932fa = _0x134a3a._saveSetjmp = _0x134a3a.asm.saveSetjmp).apply(null, arguments);
    };
    var _0x134f9e = _0x134a3a.stackSave = function () {
      return (_0x134f9e = _0x134a3a.stackSave = _0x134a3a.asm.stackSave).apply(null, arguments);
    };
    var _0x40ed6c = _0x134a3a.stackRestore = function () {
      return (_0x40ed6c = _0x134a3a.stackRestore = _0x134a3a.asm.stackRestore).apply(null, arguments);
    };
    var _0xd0a0f2 = _0x134a3a.stackAlloc = function () {
      return (_0xd0a0f2 = _0x134a3a.stackAlloc = _0x134a3a.asm.stackAlloc).apply(null, arguments);
    };
    var _0x4de4bb = _0x134a3a.___cxa_can_catch = function () {
      return (_0x4de4bb = _0x134a3a.___cxa_can_catch = _0x134a3a.asm.__cxa_can_catch).apply(null, arguments);
    };
    var _0xc86641 = _0x134a3a.___cxa_is_pointer_type = function () {
      return (_0xc86641 = _0x134a3a.___cxa_is_pointer_type = _0x134a3a.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    var _0x2cedc0 = _0x134a3a.dynCall_iidiiii = function () {
      return (_0x2cedc0 = _0x134a3a.dynCall_iidiiii = _0x134a3a.asm.dynCall_iidiiii).apply(null, arguments);
    };
    var _0x565c00 = _0x134a3a.dynCall_vii = function () {
      return (_0x565c00 = _0x134a3a.dynCall_vii = _0x134a3a.asm.dynCall_vii).apply(null, arguments);
    };
    var _0x43b60a = _0x134a3a.dynCall_iiii = function () {
      return (_0x43b60a = _0x134a3a.dynCall_iiii = _0x134a3a.asm.dynCall_iiii).apply(null, arguments);
    };
    var _0x2cefa4 = _0x134a3a.dynCall_iii = function () {
      return (_0x2cefa4 = _0x134a3a.dynCall_iii = _0x134a3a.asm.dynCall_iii).apply(null, arguments);
    };
    var _0x2c52b3 = _0x134a3a.dynCall_ii = function () {
      return (_0x2c52b3 = _0x134a3a.dynCall_ii = _0x134a3a.asm.dynCall_ii).apply(null, arguments);
    };
    var _0x44c8e7 = _0x134a3a.dynCall_jiji = function () {
      return (_0x44c8e7 = _0x134a3a.dynCall_jiji = _0x134a3a.asm.dynCall_jiji).apply(null, arguments);
    };
    var _0xd34a60 = _0x134a3a.dynCall_vi = function () {
      return (_0xd34a60 = _0x134a3a.dynCall_vi = _0x134a3a.asm.dynCall_vi).apply(null, arguments);
    };
    var _0x575d1f = _0x134a3a.dynCall_iiiii = function () {
      return (_0x575d1f = _0x134a3a.dynCall_iiiii = _0x134a3a.asm.dynCall_iiiii).apply(null, arguments);
    };
    var _0x44285b = _0x134a3a.dynCall_viii = function () {
      return (_0x44285b = _0x134a3a.dynCall_viii = _0x134a3a.asm.dynCall_viii).apply(null, arguments);
    };
    var _0x14bc8b = _0x134a3a.dynCall_v = function () {
      return (_0x14bc8b = _0x134a3a.dynCall_v = _0x134a3a.asm.dynCall_v).apply(null, arguments);
    };
    var _0x2dba3d = _0x134a3a.dynCall_viiiiii = function () {
      return (_0x2dba3d = _0x134a3a.dynCall_viiiiii = _0x134a3a.asm.dynCall_viiiiii).apply(null, arguments);
    };
    var _0x48cd7d = _0x134a3a.dynCall_viiiii = function () {
      return (_0x48cd7d = _0x134a3a.dynCall_viiiii = _0x134a3a.asm.dynCall_viiiii).apply(null, arguments);
    };
    var _0x4ba8ef = _0x134a3a.dynCall_viiii = function () {
      return (_0x4ba8ef = _0x134a3a.dynCall_viiii = _0x134a3a.asm.dynCall_viiii).apply(null, arguments);
    };
    var _0x1d4d3f = _0x134a3a.dynCall_iiiiii = function () {
      return (_0x1d4d3f = _0x134a3a.dynCall_iiiiii = _0x134a3a.asm.dynCall_iiiiii).apply(null, arguments);
    };
    var _0x902bba = _0x134a3a.dynCall_iiiiiiii = function () {
      return (_0x902bba = _0x134a3a.dynCall_iiiiiiii = _0x134a3a.asm.dynCall_iiiiiiii).apply(null, arguments);
    };
    var _0x3beb68 = _0x134a3a.dynCall_iiijiii = function () {
      return (_0x3beb68 = _0x134a3a.dynCall_iiijiii = _0x134a3a.asm.dynCall_iiijiii).apply(null, arguments);
    };
    var _0x5bf628 = _0x134a3a.dynCall_iij = function () {
      return (_0x5bf628 = _0x134a3a.dynCall_iij = _0x134a3a.asm.dynCall_iij).apply(null, arguments);
    };
    var _0x54413a = _0x134a3a.dynCall_i = function () {
      return (_0x54413a = _0x134a3a.dynCall_i = _0x134a3a.asm.dynCall_i).apply(null, arguments);
    };
    var _0x4dfebf = _0x134a3a.dynCall_iiiiiii = function () {
      return (_0x4dfebf = _0x134a3a.dynCall_iiiiiii = _0x134a3a.asm.dynCall_iiiiiii).apply(null, arguments);
    };
    var _0x1589d5 = _0x134a3a.dynCall_jii = function () {
      return (_0x1589d5 = _0x134a3a.dynCall_jii = _0x134a3a.asm.dynCall_jii).apply(null, arguments);
    };
    var _0x23b05c = _0x134a3a.dynCall_iji = function () {
      return (_0x23b05c = _0x134a3a.dynCall_iji = _0x134a3a.asm.dynCall_iji).apply(null, arguments);
    };
    var _0x3d3bc3 = _0x134a3a.dynCall_iiijii = function () {
      return (_0x3d3bc3 = _0x134a3a.dynCall_iiijii = _0x134a3a.asm.dynCall_iiijii).apply(null, arguments);
    };
    var _0x188dc1 = _0x134a3a.dynCall_viiji = function () {
      return (_0x188dc1 = _0x134a3a.dynCall_viiji = _0x134a3a.asm.dynCall_viiji).apply(null, arguments);
    };
    var _0x3498c9 = _0x134a3a.dynCall_iiifii = function () {
      return (_0x3498c9 = _0x134a3a.dynCall_iiifii = _0x134a3a.asm.dynCall_iiifii).apply(null, arguments);
    };
    var _0x39e1ec = _0x134a3a.dynCall_viifi = function () {
      return (_0x39e1ec = _0x134a3a.dynCall_viifi = _0x134a3a.asm.dynCall_viifi).apply(null, arguments);
    };
    var _0x599811 = _0x134a3a.dynCall_iijiii = function () {
      return (_0x599811 = _0x134a3a.dynCall_iijiii = _0x134a3a.asm.dynCall_iijiii).apply(null, arguments);
    };
    var _0xd762af = _0x134a3a.dynCall_vijii = function () {
      return (_0xd762af = _0x134a3a.dynCall_vijii = _0x134a3a.asm.dynCall_vijii).apply(null, arguments);
    };
    var _0x25cf44 = _0x134a3a.dynCall_iiiifii = function () {
      return (_0x25cf44 = _0x134a3a.dynCall_iiiifii = _0x134a3a.asm.dynCall_iiiifii).apply(null, arguments);
    };
    var _0x2ce6c6 = _0x134a3a.dynCall_iiiijii = function () {
      return (_0x2ce6c6 = _0x134a3a.dynCall_iiiijii = _0x134a3a.asm.dynCall_iiiijii).apply(null, arguments);
    };
    var _0x3f9ca1 = _0x134a3a.dynCall_viji = function () {
      return (_0x3f9ca1 = _0x134a3a.dynCall_viji = _0x134a3a.asm.dynCall_viji).apply(null, arguments);
    };
    var _0xbb3017 = _0x134a3a.dynCall_vidi = function () {
      return (_0xbb3017 = _0x134a3a.dynCall_vidi = _0x134a3a.asm.dynCall_vidi).apply(null, arguments);
    };
    var _0x2007ea = _0x134a3a.dynCall_viidi = function () {
      return (_0x2007ea = _0x134a3a.dynCall_viidi = _0x134a3a.asm.dynCall_viidi).apply(null, arguments);
    };
    var _0x48d359 = _0x134a3a.dynCall_viiiiiii = function () {
      return (_0x48d359 = _0x134a3a.dynCall_viiiiiii = _0x134a3a.asm.dynCall_viiiiiii).apply(null, arguments);
    };
    var _0x46f1a7 = _0x134a3a.dynCall_viiffi = function () {
      return (_0x46f1a7 = _0x134a3a.dynCall_viiffi = _0x134a3a.asm.dynCall_viiffi).apply(null, arguments);
    };
    var _0x32a1c9 = _0x134a3a.dynCall_fifi = function () {
      return (_0x32a1c9 = _0x134a3a.dynCall_fifi = _0x134a3a.asm.dynCall_fifi).apply(null, arguments);
    };
    var _0xf80fc3 = _0x134a3a.dynCall_fiii = function () {
      return (_0xf80fc3 = _0x134a3a.dynCall_fiii = _0x134a3a.asm.dynCall_fiii).apply(null, arguments);
    };
    var _0x2f9c13 = _0x134a3a.dynCall_iijii = function () {
      return (_0x2f9c13 = _0x134a3a.dynCall_iijii = _0x134a3a.asm.dynCall_iijii).apply(null, arguments);
    };
    var _0x53ec2f = _0x134a3a.dynCall_iiddi = function () {
      return (_0x53ec2f = _0x134a3a.dynCall_iiddi = _0x134a3a.asm.dynCall_iiddi).apply(null, arguments);
    };
    var _0x3f97df = _0x134a3a.dynCall_diidi = function () {
      return (_0x3f97df = _0x134a3a.dynCall_diidi = _0x134a3a.asm.dynCall_diidi).apply(null, arguments);
    };
    var _0x4d69ed = _0x134a3a.dynCall_diiii = function () {
      return (_0x4d69ed = _0x134a3a.dynCall_diiii = _0x134a3a.asm.dynCall_diiii).apply(null, arguments);
    };
    var _0x11154d = _0x134a3a.dynCall_jiiii = function () {
      return (_0x11154d = _0x134a3a.dynCall_jiiii = _0x134a3a.asm.dynCall_jiiii).apply(null, arguments);
    };
    var _0x20d8eb = _0x134a3a.dynCall_fiiii = function () {
      return (_0x20d8eb = _0x134a3a.dynCall_fiiii = _0x134a3a.asm.dynCall_fiiii).apply(null, arguments);
    };
    var _0x31352e = _0x134a3a.dynCall_jiiji = function () {
      return (_0x31352e = _0x134a3a.dynCall_jiiji = _0x134a3a.asm.dynCall_jiiji).apply(null, arguments);
    };
    var _0xaac90f = _0x134a3a.dynCall_fiifi = function () {
      return (_0xaac90f = _0x134a3a.dynCall_fiifi = _0x134a3a.asm.dynCall_fiifi).apply(null, arguments);
    };
    var _0x45b269 = _0x134a3a.dynCall_iiffi = function () {
      return (_0x45b269 = _0x134a3a.dynCall_iiffi = _0x134a3a.asm.dynCall_iiffi).apply(null, arguments);
    };
    var _0x246b8f = _0x134a3a.dynCall_iiiifi = function () {
      return (_0x246b8f = _0x134a3a.dynCall_iiiifi = _0x134a3a.asm.dynCall_iiiifi).apply(null, arguments);
    };
    var _0x2756fc = _0x134a3a.dynCall_viiiiiiii = function () {
      return (_0x2756fc = _0x134a3a.dynCall_viiiiiiii = _0x134a3a.asm.dynCall_viiiiiiii).apply(null, arguments);
    };
    var _0x1ca186 = _0x134a3a.dynCall_viiiiiiiii = function () {
      return (_0x1ca186 = _0x134a3a.dynCall_viiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiii).apply(null, arguments);
    };
    var _0x29e70e = _0x134a3a.dynCall_viiiiiiiiii = function () {
      return (_0x29e70e = _0x134a3a.dynCall_viiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiii).apply(null, arguments);
    };
    var _0x3f510b = _0x134a3a.dynCall_viiiiiiiiiii = function () {
      return (_0x3f510b = _0x134a3a.dynCall_viiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiii).apply(null, arguments);
    };
    var _0x59183d = _0x134a3a.dynCall_jiii = function () {
      return (_0x59183d = _0x134a3a.dynCall_jiii = _0x134a3a.asm.dynCall_jiii).apply(null, arguments);
    };
    var _0x3705fb = _0x134a3a.dynCall_ddiii = function () {
      return (_0x3705fb = _0x134a3a.dynCall_ddiii = _0x134a3a.asm.dynCall_ddiii).apply(null, arguments);
    };
    var _0x847fd4 = _0x134a3a.dynCall_fii = function () {
      return (_0x847fd4 = _0x134a3a.dynCall_fii = _0x134a3a.asm.dynCall_fii).apply(null, arguments);
    };
    var _0x5f0a92 = _0x134a3a.dynCall_dii = function () {
      return (_0x5f0a92 = _0x134a3a.dynCall_dii = _0x134a3a.asm.dynCall_dii).apply(null, arguments);
    };
    var _0x2b3b3f = _0x134a3a.dynCall_vifi = function () {
      return (_0x2b3b3f = _0x134a3a.dynCall_vifi = _0x134a3a.asm.dynCall_vifi).apply(null, arguments);
    };
    var _0x3f8312 = _0x134a3a.dynCall_iiiiiiiiii = function () {
      return (_0x3f8312 = _0x134a3a.dynCall_iiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiii).apply(null, arguments);
    };
    var _0x354da0 = _0x134a3a.dynCall_fffi = function () {
      return (_0x354da0 = _0x134a3a.dynCall_fffi = _0x134a3a.asm.dynCall_fffi).apply(null, arguments);
    };
    var _0x3f6fef = _0x134a3a.dynCall_viifii = function () {
      return (_0x3f6fef = _0x134a3a.dynCall_viifii = _0x134a3a.asm.dynCall_viifii).apply(null, arguments);
    };
    var _0x174dfb = _0x134a3a.dynCall_iiiiiiiii = function () {
      return (_0x174dfb = _0x134a3a.dynCall_iiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiii).apply(null, arguments);
    };
    var _0x5be02a = _0x134a3a.dynCall_jjii = function () {
      return (_0x5be02a = _0x134a3a.dynCall_jjii = _0x134a3a.asm.dynCall_jjii).apply(null, arguments);
    };
    var _0x352740 = _0x134a3a.dynCall_ijji = function () {
      return (_0x352740 = _0x134a3a.dynCall_ijji = _0x134a3a.asm.dynCall_ijji).apply(null, arguments);
    };
    var _0x5e32a3 = _0x134a3a.dynCall_jji = function () {
      return (_0x5e32a3 = _0x134a3a.dynCall_jji = _0x134a3a.asm.dynCall_jji).apply(null, arguments);
    };
    var _0x470c81 = _0x134a3a.dynCall_jjji = function () {
      return (_0x470c81 = _0x134a3a.dynCall_jjji = _0x134a3a.asm.dynCall_jjji).apply(null, arguments);
    };
    var _0x4cb312 = _0x134a3a.dynCall_diii = function () {
      return (_0x4cb312 = _0x134a3a.dynCall_diii = _0x134a3a.asm.dynCall_diii).apply(null, arguments);
    };
    var _0x85bf8d = _0x134a3a.dynCall_iidi = function () {
      return (_0x85bf8d = _0x134a3a.dynCall_iidi = _0x134a3a.asm.dynCall_iidi).apply(null, arguments);
    };
    var _0x1ba2cd = _0x134a3a.dynCall_iifi = function () {
      return (_0x1ba2cd = _0x134a3a.dynCall_iifi = _0x134a3a.asm.dynCall_iifi).apply(null, arguments);
    };
    var _0x3c5c56 = _0x134a3a.dynCall_dddi = function () {
      return (_0x3c5c56 = _0x134a3a.dynCall_dddi = _0x134a3a.asm.dynCall_dddi).apply(null, arguments);
    };
    var _0x16f115 = _0x134a3a.dynCall_dji = function () {
      return (_0x16f115 = _0x134a3a.dynCall_dji = _0x134a3a.asm.dynCall_dji).apply(null, arguments);
    };
    var _0x13f573 = _0x134a3a.dynCall_idi = function () {
      return (_0x13f573 = _0x134a3a.dynCall_idi = _0x134a3a.asm.dynCall_idi).apply(null, arguments);
    };
    var _0x3df33d = _0x134a3a.dynCall_ijiii = function () {
      return (_0x3df33d = _0x134a3a.dynCall_ijiii = _0x134a3a.asm.dynCall_ijiii).apply(null, arguments);
    };
    var _0x1fc0bb = _0x134a3a.dynCall_vifii = function () {
      return (_0x1fc0bb = _0x134a3a.dynCall_vifii = _0x134a3a.asm.dynCall_vifii).apply(null, arguments);
    };
    var _0x33ec9f = _0x134a3a.dynCall_viiiiiiiiiiii = function () {
      return (_0x33ec9f = _0x134a3a.dynCall_viiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiii).apply(null, arguments);
    };
    var _0x121179 = _0x134a3a.dynCall_viiiiiiiiiiiii = function () {
      return (_0x121179 = _0x134a3a.dynCall_viiiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x4603ef = _0x134a3a.dynCall_viiiiiiiiiiiiii = function () {
      return (_0x4603ef = _0x134a3a.dynCall_viiiiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x5df630 = _0x134a3a.dynCall_viiiiiiiiiiiiiii = function () {
      return (_0x5df630 = _0x134a3a.dynCall_viiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x4116d6 = _0x134a3a.dynCall_viiiiiiiiiiiiiiii = function () {
      return (_0x4116d6 = _0x134a3a.dynCall_viiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x332062 = _0x134a3a.dynCall_viiiiiiiiiiiiiiiii = function () {
      return (_0x332062 = _0x134a3a.dynCall_viiiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3765e1 = _0x134a3a.dynCall_viiiiiiiiiiiiiiiiii = function () {
      return (_0x3765e1 = _0x134a3a.dynCall_viiiiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0xcec1c4 = _0x134a3a.dynCall_viiidi = function () {
      return (_0xcec1c4 = _0x134a3a.dynCall_viiidi = _0x134a3a.asm.dynCall_viiidi).apply(null, arguments);
    };
    var _0x200c54 = _0x134a3a.dynCall_viiiji = function () {
      return (_0x200c54 = _0x134a3a.dynCall_viiiji = _0x134a3a.asm.dynCall_viiiji).apply(null, arguments);
    };
    var _0x3f4f29 = _0x134a3a.dynCall_viiifi = function () {
      return (_0x3f4f29 = _0x134a3a.dynCall_viiifi = _0x134a3a.asm.dynCall_viiifi).apply(null, arguments);
    };
    var _0xb14788 = _0x134a3a.dynCall_vijijii = function () {
      return (_0xb14788 = _0x134a3a.dynCall_vijijii = _0x134a3a.asm.dynCall_vijijii).apply(null, arguments);
    };
    var _0x403319 = _0x134a3a.dynCall_iijiiii = function () {
      return (_0x403319 = _0x134a3a.dynCall_iijiiii = _0x134a3a.asm.dynCall_iijiiii).apply(null, arguments);
    };
    var _0x34ae9f = _0x134a3a.dynCall_jijiii = function () {
      return (_0x34ae9f = _0x134a3a.dynCall_jijiii = _0x134a3a.asm.dynCall_jijiii).apply(null, arguments);
    };
    var _0x1daf82 = _0x134a3a.dynCall_viijii = function () {
      return (_0x1daf82 = _0x134a3a.dynCall_viijii = _0x134a3a.asm.dynCall_viijii).apply(null, arguments);
    };
    var _0x28549f = _0x134a3a.dynCall_iijiiiiii = function () {
      return (_0x28549f = _0x134a3a.dynCall_iijiiiiii = _0x134a3a.asm.dynCall_iijiiiiii).apply(null, arguments);
    };
    var _0x338943 = _0x134a3a.dynCall_iijjiiiiii = function () {
      return (_0x338943 = _0x134a3a.dynCall_iijjiiiiii = _0x134a3a.asm.dynCall_iijjiiiiii).apply(null, arguments);
    };
    var _0x1ef3bc = _0x134a3a.dynCall_iiiijjii = function () {
      return (_0x1ef3bc = _0x134a3a.dynCall_iiiijjii = _0x134a3a.asm.dynCall_iiiijjii).apply(null, arguments);
    };
    var _0x8a5e41 = _0x134a3a.dynCall_jidi = function () {
      return (_0x8a5e41 = _0x134a3a.dynCall_jidi = _0x134a3a.asm.dynCall_jidi).apply(null, arguments);
    };
    var _0x27c20f = _0x134a3a.dynCall_iiji = function () {
      return (_0x27c20f = _0x134a3a.dynCall_iiji = _0x134a3a.asm.dynCall_iiji).apply(null, arguments);
    };
    var _0x13db72 = _0x134a3a.dynCall_jiiijii = function () {
      return (_0x13db72 = _0x134a3a.dynCall_jiiijii = _0x134a3a.asm.dynCall_jiiijii).apply(null, arguments);
    };
    var _0x475cff = _0x134a3a.dynCall_viiijiii = function () {
      return (_0x475cff = _0x134a3a.dynCall_viiijiii = _0x134a3a.asm.dynCall_viiijiii).apply(null, arguments);
    };
    var _0x40d1e2 = _0x134a3a.dynCall_jijii = function () {
      return (_0x40d1e2 = _0x134a3a.dynCall_jijii = _0x134a3a.asm.dynCall_jijii).apply(null, arguments);
    };
    var _0x442759 = _0x134a3a.dynCall_viijji = function () {
      return (_0x442759 = _0x134a3a.dynCall_viijji = _0x134a3a.asm.dynCall_viijji).apply(null, arguments);
    };
    var _0x26dae3 = _0x134a3a.dynCall_ji = function () {
      return (_0x26dae3 = _0x134a3a.dynCall_ji = _0x134a3a.asm.dynCall_ji).apply(null, arguments);
    };
    var _0x222df6 = _0x134a3a.dynCall_jdi = function () {
      return (_0x222df6 = _0x134a3a.dynCall_jdi = _0x134a3a.asm.dynCall_jdi).apply(null, arguments);
    };
    var _0x5db916 = _0x134a3a.dynCall_vijiii = function () {
      return (_0x5db916 = _0x134a3a.dynCall_vijiii = _0x134a3a.asm.dynCall_vijiii).apply(null, arguments);
    };
    var _0x5b0986 = _0x134a3a.dynCall_j = function () {
      return (_0x5b0986 = _0x134a3a.dynCall_j = _0x134a3a.asm.dynCall_j).apply(null, arguments);
    };
    var _0x570751 = _0x134a3a.dynCall_iiiiiiiiiji = function () {
      return (_0x570751 = _0x134a3a.dynCall_iiiiiiiiiji = _0x134a3a.asm.dynCall_iiiiiiiiiji).apply(null, arguments);
    };
    var _0x3e8b65 = _0x134a3a.dynCall_vji = function () {
      return (_0x3e8b65 = _0x134a3a.dynCall_vji = _0x134a3a.asm.dynCall_vji).apply(null, arguments);
    };
    var _0x45cbb7 = _0x134a3a.dynCall_viijiiijiiii = function () {
      return (_0x45cbb7 = _0x134a3a.dynCall_viijiiijiiii = _0x134a3a.asm.dynCall_viijiiijiiii).apply(null, arguments);
    };
    var _0x2fde21 = _0x134a3a.dynCall_vijjji = function () {
      return (_0x2fde21 = _0x134a3a.dynCall_vijjji = _0x134a3a.asm.dynCall_vijjji).apply(null, arguments);
    };
    var _0x46bace = _0x134a3a.dynCall_iiiiij = function () {
      return (_0x46bace = _0x134a3a.dynCall_iiiiij = _0x134a3a.asm.dynCall_iiiiij).apply(null, arguments);
    };
    var _0xabd5dc = _0x134a3a.dynCall_ifi = function () {
      return (_0xabd5dc = _0x134a3a.dynCall_ifi = _0x134a3a.asm.dynCall_ifi).apply(null, arguments);
    };
    var _0x36dad2 = _0x134a3a.dynCall_viiiifii = function () {
      return (_0x36dad2 = _0x134a3a.dynCall_viiiifii = _0x134a3a.asm.dynCall_viiiifii).apply(null, arguments);
    };
    var _0x171753 = _0x134a3a.dynCall_viiiijiii = function () {
      return (_0x171753 = _0x134a3a.dynCall_viiiijiii = _0x134a3a.asm.dynCall_viiiijiii).apply(null, arguments);
    };
    var _0x44284d = _0x134a3a.dynCall_fi = function () {
      return (_0x44284d = _0x134a3a.dynCall_fi = _0x134a3a.asm.dynCall_fi).apply(null, arguments);
    };
    var _0x174e84 = _0x134a3a.dynCall_iiifi = function () {
      return (_0x174e84 = _0x134a3a.dynCall_iiifi = _0x134a3a.asm.dynCall_iiifi).apply(null, arguments);
    };
    var _0x1dafb7 = _0x134a3a.dynCall_viiiiiiiiiiiiiiiiiii = function () {
      return (_0x1dafb7 = _0x134a3a.dynCall_viiiiiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_viiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3204ae = _0x134a3a.dynCall_didi = function () {
      return (_0x3204ae = _0x134a3a.dynCall_didi = _0x134a3a.asm.dynCall_didi).apply(null, arguments);
    };
    var _0x52df87 = _0x134a3a.dynCall_iijji = function () {
      return (_0x52df87 = _0x134a3a.dynCall_iijji = _0x134a3a.asm.dynCall_iijji).apply(null, arguments);
    };
    var _0x3fded0 = _0x134a3a.dynCall_iiiidii = function () {
      return (_0x3fded0 = _0x134a3a.dynCall_iiiidii = _0x134a3a.asm.dynCall_iiiidii).apply(null, arguments);
    };
    var _0x511d3e = _0x134a3a.dynCall_fiffffi = function () {
      return (_0x511d3e = _0x134a3a.dynCall_fiffffi = _0x134a3a.asm.dynCall_fiffffi).apply(null, arguments);
    };
    var _0x3ae2c8 = _0x134a3a.dynCall_viidii = function () {
      return (_0x3ae2c8 = _0x134a3a.dynCall_viidii = _0x134a3a.asm.dynCall_viidii).apply(null, arguments);
    };
    var _0x50ac64 = _0x134a3a.dynCall_fiifii = function () {
      return (_0x50ac64 = _0x134a3a.dynCall_fiifii = _0x134a3a.asm.dynCall_fiifii).apply(null, arguments);
    };
    var _0x4b899d = _0x134a3a.dynCall_viiiifi = function () {
      return (_0x4b899d = _0x134a3a.dynCall_viiiifi = _0x134a3a.asm.dynCall_viiiifi).apply(null, arguments);
    };
    var _0x30e30c = _0x134a3a.dynCall_fiiffi = function () {
      return (_0x30e30c = _0x134a3a.dynCall_fiiffi = _0x134a3a.asm.dynCall_fiiffi).apply(null, arguments);
    };
    var _0x339f3d = _0x134a3a.dynCall_viiififii = function () {
      return (_0x339f3d = _0x134a3a.dynCall_viiififii = _0x134a3a.asm.dynCall_viiififii).apply(null, arguments);
    };
    var _0x2bf56d = _0x134a3a.dynCall_iiiiji = function () {
      return (_0x2bf56d = _0x134a3a.dynCall_iiiiji = _0x134a3a.asm.dynCall_iiiiji).apply(null, arguments);
    };
    var _0x48f3bc = _0x134a3a.dynCall_vjjjiiii = function () {
      return (_0x48f3bc = _0x134a3a.dynCall_vjjjiiii = _0x134a3a.asm.dynCall_vjjjiiii).apply(null, arguments);
    };
    var _0x610360 = _0x134a3a.dynCall_vjiiiii = function () {
      return (_0x610360 = _0x134a3a.dynCall_vjiiiii = _0x134a3a.asm.dynCall_vjiiiii).apply(null, arguments);
    };
    var _0x4bf7d7 = _0x134a3a.dynCall_jiiiii = function () {
      return (_0x4bf7d7 = _0x134a3a.dynCall_jiiiii = _0x134a3a.asm.dynCall_jiiiii).apply(null, arguments);
    };
    var _0x2ff1c2 = _0x134a3a.dynCall_iiiffi = function () {
      return (_0x2ff1c2 = _0x134a3a.dynCall_iiiffi = _0x134a3a.asm.dynCall_iiiffi).apply(null, arguments);
    };
    var _0x4daec1 = _0x134a3a.dynCall_iifii = function () {
      return (_0x4daec1 = _0x134a3a.dynCall_iifii = _0x134a3a.asm.dynCall_iifii).apply(null, arguments);
    };
    var _0x2fcdac = _0x134a3a.dynCall_iiffii = function () {
      return (_0x2fcdac = _0x134a3a.dynCall_iiffii = _0x134a3a.asm.dynCall_iiffii).apply(null, arguments);
    };
    var _0x51caf6 = _0x134a3a.dynCall_iiifiii = function () {
      return (_0x51caf6 = _0x134a3a.dynCall_iiifiii = _0x134a3a.asm.dynCall_iiifiii).apply(null, arguments);
    };
    var _0x486ebb = _0x134a3a.dynCall_iiififii = function () {
      return (_0x486ebb = _0x134a3a.dynCall_iiififii = _0x134a3a.asm.dynCall_iiififii).apply(null, arguments);
    };
    var _0x5cdebe = _0x134a3a.dynCall_iiifiiiii = function () {
      return (_0x5cdebe = _0x134a3a.dynCall_iiifiiiii = _0x134a3a.asm.dynCall_iiifiiiii).apply(null, arguments);
    };
    var _0x392080 = _0x134a3a.dynCall_iiffifiiii = function () {
      return (_0x392080 = _0x134a3a.dynCall_iiffifiiii = _0x134a3a.asm.dynCall_iiffifiiii).apply(null, arguments);
    };
    var _0x10ba9e = _0x134a3a.dynCall_iifiifiiii = function () {
      return (_0x10ba9e = _0x134a3a.dynCall_iifiifiiii = _0x134a3a.asm.dynCall_iifiifiiii).apply(null, arguments);
    };
    var _0x87b918 = _0x134a3a.dynCall_iiiifiii = function () {
      return (_0x87b918 = _0x134a3a.dynCall_iiiifiii = _0x134a3a.asm.dynCall_iiiifiii).apply(null, arguments);
    };
    var _0x13104b = _0x134a3a.dynCall_iiifiiii = function () {
      return (_0x13104b = _0x134a3a.dynCall_iiifiiii = _0x134a3a.asm.dynCall_iiifiiii).apply(null, arguments);
    };
    var _0x4d2112 = _0x134a3a.dynCall_iiiffiii = function () {
      return (_0x4d2112 = _0x134a3a.dynCall_iiiffiii = _0x134a3a.asm.dynCall_iiiffiii).apply(null, arguments);
    };
    var _0x2a1f29 = _0x134a3a.dynCall_iiiiifii = function () {
      return (_0x2a1f29 = _0x134a3a.dynCall_iiiiifii = _0x134a3a.asm.dynCall_iiiiifii).apply(null, arguments);
    };
    var _0x2a5b9a = _0x134a3a.dynCall_iifiifffii = function () {
      return (_0x2a5b9a = _0x134a3a.dynCall_iifiifffii = _0x134a3a.asm.dynCall_iifiifffii).apply(null, arguments);
    };
    var _0x4718c1 = _0x134a3a.dynCall_viiiijii = function () {
      return (_0x4718c1 = _0x134a3a.dynCall_viiiijii = _0x134a3a.asm.dynCall_viiiijii).apply(null, arguments);
    };
    var _0x4f2aae = _0x134a3a.dynCall_vifiiii = function () {
      return (_0x4f2aae = _0x134a3a.dynCall_vifiiii = _0x134a3a.asm.dynCall_vifiiii).apply(null, arguments);
    };
    var _0x1fe878 = _0x134a3a.dynCall_iiiiiffi = function () {
      return (_0x1fe878 = _0x134a3a.dynCall_iiiiiffi = _0x134a3a.asm.dynCall_iiiiiffi).apply(null, arguments);
    };
    var _0x255667 = _0x134a3a.dynCall_viiiiiiifiii = function () {
      return (_0x255667 = _0x134a3a.dynCall_viiiiiiifiii = _0x134a3a.asm.dynCall_viiiiiiifiii).apply(null, arguments);
    };
    var _0x2f6c9e = _0x134a3a.dynCall_fiiifii = function () {
      return (_0x2f6c9e = _0x134a3a.dynCall_fiiifii = _0x134a3a.asm.dynCall_fiiifii).apply(null, arguments);
    };
    var _0x213896 = _0x134a3a.dynCall_fifii = function () {
      return (_0x213896 = _0x134a3a.dynCall_fifii = _0x134a3a.asm.dynCall_fifii).apply(null, arguments);
    };
    var _0x24c086 = _0x134a3a.dynCall_fiffi = function () {
      return (_0x24c086 = _0x134a3a.dynCall_fiffi = _0x134a3a.asm.dynCall_fiffi).apply(null, arguments);
    };
    var _0x25e3e5 = _0x134a3a.dynCall_iiifffii = function () {
      return (_0x25e3e5 = _0x134a3a.dynCall_iiifffii = _0x134a3a.asm.dynCall_iiifffii).apply(null, arguments);
    };
    var _0x472649 = _0x134a3a.dynCall_vifiii = function () {
      return (_0x472649 = _0x134a3a.dynCall_vifiii = _0x134a3a.asm.dynCall_vifiii).apply(null, arguments);
    };
    var _0x229550 = _0x134a3a.dynCall_viffi = function () {
      return (_0x229550 = _0x134a3a.dynCall_viffi = _0x134a3a.asm.dynCall_viffi).apply(null, arguments);
    };
    var _0x43da58 = _0x134a3a.dynCall_fifiii = function () {
      return (_0x43da58 = _0x134a3a.dynCall_fifiii = _0x134a3a.asm.dynCall_fifiii).apply(null, arguments);
    };
    var _0x3531b1 = _0x134a3a.dynCall_fiiifi = function () {
      return (_0x3531b1 = _0x134a3a.dynCall_fiiifi = _0x134a3a.asm.dynCall_fiiifi).apply(null, arguments);
    };
    var _0xf315b2 = _0x134a3a.dynCall_viiiiffii = function () {
      return (_0xf315b2 = _0x134a3a.dynCall_viiiiffii = _0x134a3a.asm.dynCall_viiiiffii).apply(null, arguments);
    };
    var _0x1f7356 = _0x134a3a.dynCall_viiiiifffi = function () {
      return (_0x1f7356 = _0x134a3a.dynCall_viiiiifffi = _0x134a3a.asm.dynCall_viiiiifffi).apply(null, arguments);
    };
    var _0x474e1a = _0x134a3a.dynCall_iiiiifi = function () {
      return (_0x474e1a = _0x134a3a.dynCall_iiiiifi = _0x134a3a.asm.dynCall_iiiiifi).apply(null, arguments);
    };
    var _0x1b408a = _0x134a3a.dynCall_viiifffi = function () {
      return (_0x1b408a = _0x134a3a.dynCall_viiifffi = _0x134a3a.asm.dynCall_viiifffi).apply(null, arguments);
    };
    var _0xc60d37 = _0x134a3a.dynCall_viiiffi = function () {
      return (_0xc60d37 = _0x134a3a.dynCall_viiiffi = _0x134a3a.asm.dynCall_viiiffi).apply(null, arguments);
    };
    var _0x51532f = _0x134a3a.dynCall_fifiiiii = function () {
      return (_0x51532f = _0x134a3a.dynCall_fifiiiii = _0x134a3a.asm.dynCall_fifiiiii).apply(null, arguments);
    };
    var _0x2affda = _0x134a3a.dynCall_ffi = function () {
      return (_0x2affda = _0x134a3a.dynCall_ffi = _0x134a3a.asm.dynCall_ffi).apply(null, arguments);
    };
    var _0x510bd3 = _0x134a3a.dynCall_viifiii = function () {
      return (_0x510bd3 = _0x134a3a.dynCall_viifiii = _0x134a3a.asm.dynCall_viifiii).apply(null, arguments);
    };
    var _0x5d32d9 = _0x134a3a.dynCall_vifiiiii = function () {
      return (_0x5d32d9 = _0x134a3a.dynCall_vifiiiii = _0x134a3a.asm.dynCall_vifiiiii).apply(null, arguments);
    };
    var _0x538cf9 = _0x134a3a.dynCall_viffiifffiii = function () {
      return (_0x538cf9 = _0x134a3a.dynCall_viffiifffiii = _0x134a3a.asm.dynCall_viffiifffiii).apply(null, arguments);
    };
    var _0x324e20 = _0x134a3a.dynCall_ffffffi = function () {
      return (_0x324e20 = _0x134a3a.dynCall_ffffffi = _0x134a3a.asm.dynCall_ffffffi).apply(null, arguments);
    };
    var _0xdf6a64 = _0x134a3a.dynCall_viiiiiifi = function () {
      return (_0xdf6a64 = _0x134a3a.dynCall_viiiiiifi = _0x134a3a.asm.dynCall_viiiiiifi).apply(null, arguments);
    };
    var _0x12b00b = _0x134a3a.dynCall_viiiiffi = function () {
      return (_0x12b00b = _0x134a3a.dynCall_viiiiffi = _0x134a3a.asm.dynCall_viiiiffi).apply(null, arguments);
    };
    var _0x3b2ca3 = _0x134a3a.dynCall_fiiiiii = function () {
      return (_0x3b2ca3 = _0x134a3a.dynCall_fiiiiii = _0x134a3a.asm.dynCall_fiiiiii).apply(null, arguments);
    };
    var _0x524f61 = _0x134a3a.dynCall_fifffi = function () {
      return (_0x524f61 = _0x134a3a.dynCall_fifffi = _0x134a3a.asm.dynCall_fifffi).apply(null, arguments);
    };
    var _0x648d31 = _0x134a3a.dynCall_viffiiiii = function () {
      return (_0x648d31 = _0x134a3a.dynCall_viffiiiii = _0x134a3a.asm.dynCall_viffiiiii).apply(null, arguments);
    };
    var _0x2230d3 = _0x134a3a.dynCall_vifffffi = function () {
      return (_0x2230d3 = _0x134a3a.dynCall_vifffffi = _0x134a3a.asm.dynCall_vifffffi).apply(null, arguments);
    };
    var _0x1bd6d2 = _0x134a3a.dynCall_iifiifiii = function () {
      return (_0x1bd6d2 = _0x134a3a.dynCall_iifiifiii = _0x134a3a.asm.dynCall_iifiifiii).apply(null, arguments);
    };
    var _0xa24a7 = _0x134a3a.dynCall_vifffi = function () {
      return (_0xa24a7 = _0x134a3a.dynCall_vifffi = _0x134a3a.asm.dynCall_vifffi).apply(null, arguments);
    };
    var _0x549001 = _0x134a3a.dynCall_iifiiii = function () {
      return (_0x549001 = _0x134a3a.dynCall_iifiiii = _0x134a3a.asm.dynCall_iifiiii).apply(null, arguments);
    };
    var _0x24791e = _0x134a3a.dynCall_viddi = function () {
      return (_0x24791e = _0x134a3a.dynCall_viddi = _0x134a3a.asm.dynCall_viddi).apply(null, arguments);
    };
    var _0x208db6 = _0x134a3a.dynCall_vijji = function () {
      return (_0x208db6 = _0x134a3a.dynCall_vijji = _0x134a3a.asm.dynCall_vijji).apply(null, arguments);
    };
    var _0x9f6ee9 = _0x134a3a.dynCall_vijjjji = function () {
      return (_0x9f6ee9 = _0x134a3a.dynCall_vijjjji = _0x134a3a.asm.dynCall_vijjjji).apply(null, arguments);
    };
    var _0x1b12ae = _0x134a3a.dynCall_iijjjji = function () {
      return (_0x1b12ae = _0x134a3a.dynCall_iijjjji = _0x134a3a.asm.dynCall_iijjjji).apply(null, arguments);
    };
    var _0x21a61b = _0x134a3a.dynCall_iiidi = function () {
      return (_0x21a61b = _0x134a3a.dynCall_iiidi = _0x134a3a.asm.dynCall_iiidi).apply(null, arguments);
    };
    var _0x378394 = _0x134a3a.dynCall_iijjjjiii = function () {
      return (_0x378394 = _0x134a3a.dynCall_iijjjjiii = _0x134a3a.asm.dynCall_iijjjjiii).apply(null, arguments);
    };
    var _0x14f63b = _0x134a3a.dynCall_iiiidi = function () {
      return (_0x14f63b = _0x134a3a.dynCall_iiiidi = _0x134a3a.asm.dynCall_iiiidi).apply(null, arguments);
    };
    var _0x3c45a5 = _0x134a3a.dynCall_ffffi = function () {
      return (_0x3c45a5 = _0x134a3a.dynCall_ffffi = _0x134a3a.asm.dynCall_ffffi).apply(null, arguments);
    };
    var _0x1049a3 = _0x134a3a.dynCall_viiifii = function () {
      return (_0x1049a3 = _0x134a3a.dynCall_viiifii = _0x134a3a.asm.dynCall_viiifii).apply(null, arguments);
    };
    var _0x5e64d8 = _0x134a3a.dynCall_viiiiiifiifiiii = function () {
      return (_0x5e64d8 = _0x134a3a.dynCall_viiiiiifiifiiii = _0x134a3a.asm.dynCall_viiiiiifiifiiii).apply(null, arguments);
    };
    var _0x5bda9c = _0x134a3a.dynCall_iiffffiii = function () {
      return (_0x5bda9c = _0x134a3a.dynCall_iiffffiii = _0x134a3a.asm.dynCall_iiffffiii).apply(null, arguments);
    };
    var _0x20b0ce = _0x134a3a.dynCall_viiiiifi = function () {
      return (_0x20b0ce = _0x134a3a.dynCall_viiiiifi = _0x134a3a.asm.dynCall_viiiiifi).apply(null, arguments);
    };
    var _0x1848c4 = _0x134a3a.dynCall_vffi = function () {
      return (_0x1848c4 = _0x134a3a.dynCall_vffi = _0x134a3a.asm.dynCall_vffi).apply(null, arguments);
    };
    var _0x11ddc6 = _0x134a3a.dynCall_iiidfi = function () {
      return (_0x11ddc6 = _0x134a3a.dynCall_iiidfi = _0x134a3a.asm.dynCall_iiidfi).apply(null, arguments);
    };
    var _0x30e576 = _0x134a3a.dynCall_iiijfi = function () {
      return (_0x30e576 = _0x134a3a.dynCall_iiijfi = _0x134a3a.asm.dynCall_iiijfi).apply(null, arguments);
    };
    var _0x1d5d7b = _0x134a3a.dynCall_iiiffii = function () {
      return (_0x1d5d7b = _0x134a3a.dynCall_iiiffii = _0x134a3a.asm.dynCall_iiiffii).apply(null, arguments);
    };
    var _0x18d8b9 = _0x134a3a.dynCall_iifffi = function () {
      return (_0x18d8b9 = _0x134a3a.dynCall_iifffi = _0x134a3a.asm.dynCall_iifffi).apply(null, arguments);
    };
    var _0x6a39a2 = _0x134a3a.dynCall_iiiififi = function () {
      return (_0x6a39a2 = _0x134a3a.dynCall_iiiififi = _0x134a3a.asm.dynCall_iiiififi).apply(null, arguments);
    };
    var _0x2bf3cd = _0x134a3a.dynCall_iiiffifiiii = function () {
      return (_0x2bf3cd = _0x134a3a.dynCall_iiiffifiiii = _0x134a3a.asm.dynCall_iiiffifiiii).apply(null, arguments);
    };
    var _0x85ccd9 = _0x134a3a.dynCall_iiifiifiii = function () {
      return (_0x85ccd9 = _0x134a3a.dynCall_iiifiifiii = _0x134a3a.asm.dynCall_iiifiifiii).apply(null, arguments);
    };
    var _0x372673 = _0x134a3a.dynCall_iiifiifiiiii = function () {
      return (_0x372673 = _0x134a3a.dynCall_iiifiifiiiii = _0x134a3a.asm.dynCall_iiifiifiiiii).apply(null, arguments);
    };
    var _0x2bf4cf = _0x134a3a.dynCall_ifii = function () {
      return (_0x2bf4cf = _0x134a3a.dynCall_ifii = _0x134a3a.asm.dynCall_ifii).apply(null, arguments);
    };
    var _0x5357e2 = _0x134a3a.dynCall_ifffii = function () {
      return (_0x5357e2 = _0x134a3a.dynCall_ifffii = _0x134a3a.asm.dynCall_ifffii).apply(null, arguments);
    };
    var _0x51b996 = _0x134a3a.dynCall_ffffii = function () {
      return (_0x51b996 = _0x134a3a.dynCall_ffffii = _0x134a3a.asm.dynCall_ffffii).apply(null, arguments);
    };
    var _0x41496d = _0x134a3a.dynCall_ffffifi = function () {
      return (_0x41496d = _0x134a3a.dynCall_ffffifi = _0x134a3a.asm.dynCall_ffffifi).apply(null, arguments);
    };
    var _0x56ae29 = _0x134a3a.dynCall_ffffiffi = function () {
      return (_0x56ae29 = _0x134a3a.dynCall_ffffiffi = _0x134a3a.asm.dynCall_ffffiffi).apply(null, arguments);
    };
    var _0x4f6f99 = _0x134a3a.dynCall_viiififi = function () {
      return (_0x4f6f99 = _0x134a3a.dynCall_viiififi = _0x134a3a.asm.dynCall_viiififi).apply(null, arguments);
    };
    var _0x56d197 = _0x134a3a.dynCall_viiififfi = function () {
      return (_0x56d197 = _0x134a3a.dynCall_viiififfi = _0x134a3a.asm.dynCall_viiififfi).apply(null, arguments);
    };
    var _0x41c9ed = _0x134a3a.dynCall_ifiii = function () {
      return (_0x41c9ed = _0x134a3a.dynCall_ifiii = _0x134a3a.asm.dynCall_ifiii).apply(null, arguments);
    };
    var _0x330f4f = _0x134a3a.dynCall_iifiiiiii = function () {
      return (_0x330f4f = _0x134a3a.dynCall_iifiiiiii = _0x134a3a.asm.dynCall_iifiiiiii).apply(null, arguments);
    };
    var _0x7f6688 = _0x134a3a.dynCall_iifiiiii = function () {
      return (_0x7f6688 = _0x134a3a.dynCall_iifiiiii = _0x134a3a.asm.dynCall_iifiiiii).apply(null, arguments);
    };
    var _0x37a811 = _0x134a3a.dynCall_iiffiiiii = function () {
      return (_0x37a811 = _0x134a3a.dynCall_iiffiiiii = _0x134a3a.asm.dynCall_iiffiiiii).apply(null, arguments);
    };
    var _0x2efd9d = _0x134a3a.dynCall_iiffifiii = function () {
      return (_0x2efd9d = _0x134a3a.dynCall_iiffifiii = _0x134a3a.asm.dynCall_iiffifiii).apply(null, arguments);
    };
    var _0x50f8f9 = _0x134a3a.dynCall_iififi = function () {
      return (_0x50f8f9 = _0x134a3a.dynCall_iififi = _0x134a3a.asm.dynCall_iififi).apply(null, arguments);
    };
    var _0x4fd5c5 = _0x134a3a.dynCall_iiififi = function () {
      return (_0x4fd5c5 = _0x134a3a.dynCall_iiififi = _0x134a3a.asm.dynCall_iiififi).apply(null, arguments);
    };
    var _0x702a05 = _0x134a3a.dynCall_iifiii = function () {
      return (_0x702a05 = _0x134a3a.dynCall_iifiii = _0x134a3a.asm.dynCall_iifiii).apply(null, arguments);
    };
    var _0x32969c = _0x134a3a.dynCall_iiiiifiiii = function () {
      return (_0x32969c = _0x134a3a.dynCall_iiiiifiiii = _0x134a3a.asm.dynCall_iiiiifiiii).apply(null, arguments);
    };
    var _0x135adf = _0x134a3a.dynCall_viidiii = function () {
      return (_0x135adf = _0x134a3a.dynCall_viidiii = _0x134a3a.asm.dynCall_viidiii).apply(null, arguments);
    };
    var _0x49caa0 = _0x134a3a.dynCall_fiifdi = function () {
      return (_0x49caa0 = _0x134a3a.dynCall_fiifdi = _0x134a3a.asm.dynCall_fiifdi).apply(null, arguments);
    };
    var _0x3b2a36 = _0x134a3a.dynCall_viiiiiifddfiiii = function () {
      return (_0x3b2a36 = _0x134a3a.dynCall_viiiiiifddfiiii = _0x134a3a.asm.dynCall_viiiiiifddfiiii).apply(null, arguments);
    };
    var _0x3c2820 = _0x134a3a.dynCall_viijiii = function () {
      return (_0x3c2820 = _0x134a3a.dynCall_viijiii = _0x134a3a.asm.dynCall_viijiii).apply(null, arguments);
    };
    var _0x518caf = _0x134a3a.dynCall_fiifji = function () {
      return (_0x518caf = _0x134a3a.dynCall_fiifji = _0x134a3a.asm.dynCall_fiifji).apply(null, arguments);
    };
    var _0xb79a23 = _0x134a3a.dynCall_viiiiiifjjfiiii = function () {
      return (_0xb79a23 = _0x134a3a.dynCall_viiiiiifjjfiiii = _0x134a3a.asm.dynCall_viiiiiifjjfiiii).apply(null, arguments);
    };
    var _0x22735f = _0x134a3a.dynCall_viiiifiii = function () {
      return (_0x22735f = _0x134a3a.dynCall_viiiifiii = _0x134a3a.asm.dynCall_viiiifiii).apply(null, arguments);
    };
    var _0x44d936 = _0x134a3a.dynCall_viiiiiiffffiiii = function () {
      return (_0x44d936 = _0x134a3a.dynCall_viiiiiiffffiiii = _0x134a3a.asm.dynCall_viiiiiiffffiiii).apply(null, arguments);
    };
    var _0xdb05a5 = _0x134a3a.dynCall_viifiiii = function () {
      return (_0xdb05a5 = _0x134a3a.dynCall_viifiiii = _0x134a3a.asm.dynCall_viifiiii).apply(null, arguments);
    };
    var _0x5b4551 = _0x134a3a.dynCall_iiiiifiii = function () {
      return (_0x5b4551 = _0x134a3a.dynCall_iiiiifiii = _0x134a3a.asm.dynCall_iiiiifiii).apply(null, arguments);
    };
    var _0xb7eefd = _0x134a3a.dynCall_fffffi = function () {
      return (_0xb7eefd = _0x134a3a.dynCall_fffffi = _0x134a3a.asm.dynCall_fffffi).apply(null, arguments);
    };
    var _0x14a977 = _0x134a3a.dynCall_fiiffffi = function () {
      return (_0x14a977 = _0x134a3a.dynCall_fiiffffi = _0x134a3a.asm.dynCall_fiiffffi).apply(null, arguments);
    };
    var _0x2792fc = _0x134a3a.dynCall_fffifffi = function () {
      return (_0x2792fc = _0x134a3a.dynCall_fffifffi = _0x134a3a.asm.dynCall_fffifffi).apply(null, arguments);
    };
    var _0xb720ea = _0x134a3a.dynCall_iffi = function () {
      return (_0xb720ea = _0x134a3a.dynCall_iffi = _0x134a3a.asm.dynCall_iffi).apply(null, arguments);
    };
    var _0x3af498 = _0x134a3a.dynCall_iiiiiiiiiii = function () {
      return (_0x3af498 = _0x134a3a.dynCall_iiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiii).apply(null, arguments);
    };
    var _0x3b6ccd = _0x134a3a.dynCall_iiiiiiiiiiii = function () {
      return (_0x3b6ccd = _0x134a3a.dynCall_iiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiii).apply(null, arguments);
    };
    var _0x47eee3 = _0x134a3a.dynCall_iiiiiiiiiiiii = function () {
      return (_0x47eee3 = _0x134a3a.dynCall_iiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x1b8b1a = _0x134a3a.dynCall_iiiiiiiiiiiiii = function () {
      return (_0x1b8b1a = _0x134a3a.dynCall_iiiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x25d247 = _0x134a3a.dynCall_iiiiiiiiiiiiiii = function () {
      return (_0x25d247 = _0x134a3a.dynCall_iiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x2ca71e = _0x134a3a.dynCall_iiiiiiiiiiiiiiii = function () {
      return (_0x2ca71e = _0x134a3a.dynCall_iiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x290ff7 = _0x134a3a.dynCall_iiiiiiiiiiiiiiiii = function () {
      return (_0x290ff7 = _0x134a3a.dynCall_iiiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x8b4419 = _0x134a3a.dynCall_viiffffi = function () {
      return (_0x8b4419 = _0x134a3a.dynCall_viiffffi = _0x134a3a.asm.dynCall_viiffffi).apply(null, arguments);
    };
    var _0x2e3707 = _0x134a3a.dynCall_viffii = function () {
      return (_0x2e3707 = _0x134a3a.dynCall_viffii = _0x134a3a.asm.dynCall_viffii).apply(null, arguments);
    };
    var _0x14a972 = _0x134a3a.dynCall_ifiiii = function () {
      return (_0x14a972 = _0x134a3a.dynCall_ifiiii = _0x134a3a.asm.dynCall_ifiiii).apply(null, arguments);
    };
    var _0x32a5c9 = _0x134a3a.dynCall_idiiiii = function () {
      return (_0x32a5c9 = _0x134a3a.dynCall_idiiiii = _0x134a3a.asm.dynCall_idiiiii).apply(null, arguments);
    };
    var _0x15da06 = _0x134a3a.dynCall_idiiii = function () {
      return (_0x15da06 = _0x134a3a.dynCall_idiiii = _0x134a3a.asm.dynCall_idiiii).apply(null, arguments);
    };
    var _0x37601f = _0x134a3a.dynCall_idii = function () {
      return (_0x37601f = _0x134a3a.dynCall_idii = _0x134a3a.asm.dynCall_idii).apply(null, arguments);
    };
    var _0x3bce1c = _0x134a3a.dynCall_vijiiii = function () {
      return (_0x3bce1c = _0x134a3a.dynCall_vijiiii = _0x134a3a.asm.dynCall_vijiiii).apply(null, arguments);
    };
    var _0x1a97a2 = _0x134a3a.dynCall_iiijiiii = function () {
      return (_0x1a97a2 = _0x134a3a.dynCall_iiijiiii = _0x134a3a.asm.dynCall_iiijiiii).apply(null, arguments);
    };
    var _0x120e30 = _0x134a3a.dynCall_iiiji = function () {
      return (_0x120e30 = _0x134a3a.dynCall_iiiji = _0x134a3a.asm.dynCall_iiiji).apply(null, arguments);
    };
    var _0x587b26 = _0x134a3a.dynCall_vjiiii = function () {
      return (_0x587b26 = _0x134a3a.dynCall_vjiiii = _0x134a3a.asm.dynCall_vjiiii).apply(null, arguments);
    };
    var _0x5cca35 = _0x134a3a.dynCall_iddi = function () {
      return (_0x5cca35 = _0x134a3a.dynCall_iddi = _0x134a3a.asm.dynCall_iddi).apply(null, arguments);
    };
    var _0x4e1c96 = _0x134a3a.dynCall_viffffi = function () {
      return (_0x4e1c96 = _0x134a3a.dynCall_viffffi = _0x134a3a.asm.dynCall_viffffi).apply(null, arguments);
    };
    var _0x321123 = _0x134a3a.dynCall_viifiifi = function () {
      return (_0x321123 = _0x134a3a.dynCall_viifiifi = _0x134a3a.asm.dynCall_viifiifi).apply(null, arguments);
    };
    var _0x317df6 = _0x134a3a.dynCall_vifiifi = function () {
      return (_0x317df6 = _0x134a3a.dynCall_vifiifi = _0x134a3a.asm.dynCall_vifiifi).apply(null, arguments);
    };
    var _0x5b3470 = _0x134a3a.dynCall_viddfffi = function () {
      return (_0x5b3470 = _0x134a3a.dynCall_viddfffi = _0x134a3a.asm.dynCall_viddfffi).apply(null, arguments);
    };
    var _0x471f01 = _0x134a3a.dynCall_viidfffi = function () {
      return (_0x471f01 = _0x134a3a.dynCall_viidfffi = _0x134a3a.asm.dynCall_viidfffi).apply(null, arguments);
    };
    var _0xa28998 = _0x134a3a.dynCall_vidifffi = function () {
      return (_0xa28998 = _0x134a3a.dynCall_vidifffi = _0x134a3a.asm.dynCall_vidifffi).apply(null, arguments);
    };
    var _0x24bab5 = _0x134a3a.dynCall_vidii = function () {
      return (_0x24bab5 = _0x134a3a.dynCall_vidii = _0x134a3a.asm.dynCall_vidii).apply(null, arguments);
    };
    var _0x6737aa = _0x134a3a.dynCall_viiiiiiifi = function () {
      return (_0x6737aa = _0x134a3a.dynCall_viiiiiiifi = _0x134a3a.asm.dynCall_viiiiiiifi).apply(null, arguments);
    };
    var _0x21ec1a = _0x134a3a.dynCall_viiffii = function () {
      return (_0x21ec1a = _0x134a3a.dynCall_viiffii = _0x134a3a.asm.dynCall_viiffii).apply(null, arguments);
    };
    var _0x4cf2df = _0x134a3a.dynCall_ffii = function () {
      return (_0x4cf2df = _0x134a3a.dynCall_ffii = _0x134a3a.asm.dynCall_ffii).apply(null, arguments);
    };
    var _0x329e30 = _0x134a3a.dynCall_fiiiii = function () {
      return (_0x329e30 = _0x134a3a.dynCall_fiiiii = _0x134a3a.asm.dynCall_fiiiii).apply(null, arguments);
    };
    var _0x2b059e = _0x134a3a.dynCall_ddddi = function () {
      return (_0x2b059e = _0x134a3a.dynCall_ddddi = _0x134a3a.asm.dynCall_ddddi).apply(null, arguments);
    };
    var _0xa950b1 = _0x134a3a.dynCall_ddi = function () {
      return (_0xa950b1 = _0x134a3a.dynCall_ddi = _0x134a3a.asm.dynCall_ddi).apply(null, arguments);
    };
    var _0x3effb6 = _0x134a3a.dynCall_iiiiiji = function () {
      return (_0x3effb6 = _0x134a3a.dynCall_iiiiiji = _0x134a3a.asm.dynCall_iiiiiji).apply(null, arguments);
    };
    var _0x4f5b9c = _0x134a3a.dynCall_viiijii = function () {
      return (_0x4f5b9c = _0x134a3a.dynCall_viiijii = _0x134a3a.asm.dynCall_viiijii).apply(null, arguments);
    };
    var _0x432b17 = _0x134a3a.dynCall_ijii = function () {
      return (_0x432b17 = _0x134a3a.dynCall_ijii = _0x134a3a.asm.dynCall_ijii).apply(null, arguments);
    };
    var _0x2efdba = _0x134a3a.dynCall_ijjiiii = function () {
      return (_0x2efdba = _0x134a3a.dynCall_ijjiiii = _0x134a3a.asm.dynCall_ijjiiii).apply(null, arguments);
    };
    var _0x20601c = _0x134a3a.dynCall_vdiiiii = function () {
      return (_0x20601c = _0x134a3a.dynCall_vdiiiii = _0x134a3a.asm.dynCall_vdiiiii).apply(null, arguments);
    };
    var _0x252e1c = _0x134a3a.dynCall_diiji = function () {
      return (_0x252e1c = _0x134a3a.dynCall_diiji = _0x134a3a.asm.dynCall_diiji).apply(null, arguments);
    };
    var _0x1c7c7b = _0x134a3a.dynCall_vjiiiiiiii = function () {
      return (_0x1c7c7b = _0x134a3a.dynCall_vjiiiiiiii = _0x134a3a.asm.dynCall_vjiiiiiiii).apply(null, arguments);
    };
    var _0xa00b2e = _0x134a3a.dynCall_vjiiiiiii = function () {
      return (_0xa00b2e = _0x134a3a.dynCall_vjiiiiiii = _0x134a3a.asm.dynCall_vjiiiiiii).apply(null, arguments);
    };
    var _0xdcb150 = _0x134a3a.dynCall_ijiiii = function () {
      return (_0xdcb150 = _0x134a3a.dynCall_ijiiii = _0x134a3a.asm.dynCall_ijiiii).apply(null, arguments);
    };
    var _0xa37cee = _0x134a3a.dynCall_iidii = function () {
      return (_0xa37cee = _0x134a3a.dynCall_iidii = _0x134a3a.asm.dynCall_iidii).apply(null, arguments);
    };
    var _0x25a128 = _0x134a3a.dynCall_iidiii = function () {
      return (_0x25a128 = _0x134a3a.dynCall_iidiii = _0x134a3a.asm.dynCall_iidiii).apply(null, arguments);
    };
    var _0x47e985 = _0x134a3a.dynCall_diji = function () {
      return (_0x47e985 = _0x134a3a.dynCall_diji = _0x134a3a.asm.dynCall_diji).apply(null, arguments);
    };
    var _0x5f2364 = _0x134a3a.dynCall_fidi = function () {
      return (_0x5f2364 = _0x134a3a.dynCall_fidi = _0x134a3a.asm.dynCall_fidi).apply(null, arguments);
    };
    var _0x504e92 = _0x134a3a.dynCall_vfi = function () {
      return (_0x504e92 = _0x134a3a.dynCall_vfi = _0x134a3a.asm.dynCall_vfi).apply(null, arguments);
    };
    var _0x52c4a0 = _0x134a3a.dynCall_ijjiii = function () {
      return (_0x52c4a0 = _0x134a3a.dynCall_ijjiii = _0x134a3a.asm.dynCall_ijjiii).apply(null, arguments);
    };
    var _0x3126f5 = _0x134a3a.dynCall_iffffi = function () {
      return (_0x3126f5 = _0x134a3a.dynCall_iffffi = _0x134a3a.asm.dynCall_iffffi).apply(null, arguments);
    };
    var _0x300f28 = _0x134a3a.dynCall_diiiii = function () {
      return (_0x300f28 = _0x134a3a.dynCall_diiiii = _0x134a3a.asm.dynCall_diiiii).apply(null, arguments);
    };
    var _0xc343bd = _0x134a3a.dynCall_vfffi = function () {
      return (_0xc343bd = _0x134a3a.dynCall_vfffi = _0x134a3a.asm.dynCall_vfffi).apply(null, arguments);
    };
    var _0x521328 = _0x134a3a.dynCall_vffffi = function () {
      return (_0x521328 = _0x134a3a.dynCall_vffffi = _0x134a3a.asm.dynCall_vffffi).apply(null, arguments);
    };
    var _0x32f34d = _0x134a3a.dynCall_viiiffii = function () {
      return (_0x32f34d = _0x134a3a.dynCall_viiiffii = _0x134a3a.asm.dynCall_viiiffii).apply(null, arguments);
    };
    var _0x4b222b = _0x134a3a.dynCall_viffffffi = function () {
      return (_0x4b222b = _0x134a3a.dynCall_viffffffi = _0x134a3a.asm.dynCall_viffffffi).apply(null, arguments);
    };
    var _0x5d677d = _0x134a3a.dynCall_vffffffii = function () {
      return (_0x5d677d = _0x134a3a.dynCall_vffffffii = _0x134a3a.asm.dynCall_vffffffii).apply(null, arguments);
    };
    var _0x5993da = _0x134a3a.dynCall_vffffii = function () {
      return (_0x5993da = _0x134a3a.dynCall_vffffii = _0x134a3a.asm.dynCall_vffffii).apply(null, arguments);
    };
    var _0x5dfaa0 = _0x134a3a.dynCall_viiiifffi = function () {
      return (_0x5dfaa0 = _0x134a3a.dynCall_viiiifffi = _0x134a3a.asm.dynCall_viiiifffi).apply(null, arguments);
    };
    var _0x27bcd9 = _0x134a3a.dynCall_vfiii = function () {
      return (_0x27bcd9 = _0x134a3a.dynCall_vfiii = _0x134a3a.asm.dynCall_vfiii).apply(null, arguments);
    };
    var _0x22aa4a = _0x134a3a.dynCall_fffifi = function () {
      return (_0x22aa4a = _0x134a3a.dynCall_fffifi = _0x134a3a.asm.dynCall_fffifi).apply(null, arguments);
    };
    var _0x4e2898 = _0x134a3a.dynCall_fdi = function () {
      return (_0x4e2898 = _0x134a3a.dynCall_fdi = _0x134a3a.asm.dynCall_fdi).apply(null, arguments);
    };
    var _0x4d7ae5 = _0x134a3a.dynCall_vfii = function () {
      return (_0x4d7ae5 = _0x134a3a.dynCall_vfii = _0x134a3a.asm.dynCall_vfii).apply(null, arguments);
    };
    var _0x594b48 = _0x134a3a.dynCall_jjjji = function () {
      return (_0x594b48 = _0x134a3a.dynCall_jjjji = _0x134a3a.asm.dynCall_jjjji).apply(null, arguments);
    };
    var _0x1969a5 = _0x134a3a.dynCall_iiiifiiiiii = function () {
      return (_0x1969a5 = _0x134a3a.dynCall_iiiifiiiiii = _0x134a3a.asm.dynCall_iiiifiiiiii).apply(null, arguments);
    };
    var _0x15a3fa = _0x134a3a.dynCall_iiiifiiiii = function () {
      return (_0x15a3fa = _0x134a3a.dynCall_iiiifiiiii = _0x134a3a.asm.dynCall_iiiifiiiii).apply(null, arguments);
    };
    var _0x581f8b = _0x134a3a.dynCall_iiiifiiii = function () {
      return (_0x581f8b = _0x134a3a.dynCall_iiiifiiii = _0x134a3a.asm.dynCall_iiiifiiii).apply(null, arguments);
    };
    var _0x90a029 = _0x134a3a.dynCall_vijjii = function () {
      return (_0x90a029 = _0x134a3a.dynCall_vijjii = _0x134a3a.asm.dynCall_vijjii).apply(null, arguments);
    };
    var _0x216541 = _0x134a3a.dynCall_viiiiiiiijijiii = function () {
      return (_0x216541 = _0x134a3a.dynCall_viiiiiiiijijiii = _0x134a3a.asm.dynCall_viiiiiiiijijiii).apply(null, arguments);
    };
    var _0x167701 = _0x134a3a.dynCall_viiiiiffii = function () {
      return (_0x167701 = _0x134a3a.dynCall_viiiiiffii = _0x134a3a.asm.dynCall_viiiiiffii).apply(null, arguments);
    };
    var _0x2f09a7 = _0x134a3a.dynCall_viffiii = function () {
      return (_0x2f09a7 = _0x134a3a.dynCall_viffiii = _0x134a3a.asm.dynCall_viffiii).apply(null, arguments);
    };
    var _0x3f4d54 = _0x134a3a.dynCall_viffffiii = function () {
      return (_0x3f4d54 = _0x134a3a.dynCall_viffffiii = _0x134a3a.asm.dynCall_viffffiii).apply(null, arguments);
    };
    var _0x142696 = _0x134a3a.dynCall_viffffii = function () {
      return (_0x142696 = _0x134a3a.dynCall_viffffii = _0x134a3a.asm.dynCall_viffffii).apply(null, arguments);
    };
    var _0x2930e7 = _0x134a3a.dynCall_viiifiii = function () {
      return (_0x2930e7 = _0x134a3a.dynCall_viiifiii = _0x134a3a.asm.dynCall_viiifiii).apply(null, arguments);
    };
    var _0x3168dd = _0x134a3a.dynCall_viffiiii = function () {
      return (_0x3168dd = _0x134a3a.dynCall_viffiiii = _0x134a3a.asm.dynCall_viffiiii).apply(null, arguments);
    };
    var _0x15a681 = _0x134a3a.dynCall_viiiffffiiii = function () {
      return (_0x15a681 = _0x134a3a.dynCall_viiiffffiiii = _0x134a3a.asm.dynCall_viiiffffiiii).apply(null, arguments);
    };
    var _0x48ba9a = _0x134a3a.dynCall_viifffffffiiiii = function () {
      return (_0x48ba9a = _0x134a3a.dynCall_viifffffffiiiii = _0x134a3a.asm.dynCall_viifffffffiiiii).apply(null, arguments);
    };
    var _0x5e5b97 = _0x134a3a.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
      return (_0x5e5b97 = _0x134a3a.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x134a3a.asm.dynCall_iiiiiiffiiiiiiiiiffffiiii).apply(null, arguments);
    };
    var _0x1e50cb = _0x134a3a.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
      return (_0x1e50cb = _0x134a3a.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiffiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x499d73 = _0x134a3a.dynCall_vififiii = function () {
      return (_0x499d73 = _0x134a3a.dynCall_vififiii = _0x134a3a.asm.dynCall_vififiii).apply(null, arguments);
    };
    var _0x1dc61f = _0x134a3a.dynCall_viififii = function () {
      return (_0x1dc61f = _0x134a3a.dynCall_viififii = _0x134a3a.asm.dynCall_viififii).apply(null, arguments);
    };
    var _0x50ba78 = _0x134a3a.dynCall_jijji = function () {
      return (_0x50ba78 = _0x134a3a.dynCall_jijji = _0x134a3a.asm.dynCall_jijji).apply(null, arguments);
    };
    var _0x193234 = _0x134a3a.dynCall_ifffi = function () {
      return (_0x193234 = _0x134a3a.dynCall_ifffi = _0x134a3a.asm.dynCall_ifffi).apply(null, arguments);
    };
    var _0x3dab04 = _0x134a3a.dynCall_fiifiii = function () {
      return (_0x3dab04 = _0x134a3a.dynCall_fiifiii = _0x134a3a.asm.dynCall_fiifiii).apply(null, arguments);
    };
    var _0x4c9d24 = _0x134a3a.dynCall_viffifi = function () {
      return (_0x4c9d24 = _0x134a3a.dynCall_viffifi = _0x134a3a.asm.dynCall_viffifi).apply(null, arguments);
    };
    var _0x5b0a04 = _0x134a3a.dynCall_fffffffi = function () {
      return (_0x5b0a04 = _0x134a3a.dynCall_fffffffi = _0x134a3a.asm.dynCall_fffffffi).apply(null, arguments);
    };
    var _0x40f965 = _0x134a3a.dynCall_viiffifi = function () {
      return (_0x40f965 = _0x134a3a.dynCall_viiffifi = _0x134a3a.asm.dynCall_viiffifi).apply(null, arguments);
    };
    var _0x2a1420 = _0x134a3a.dynCall_viiiffiiiiiiiii = function () {
      return (_0x2a1420 = _0x134a3a.dynCall_viiiffiiiiiiiii = _0x134a3a.asm.dynCall_viiiffiiiiiiiii).apply(null, arguments);
    };
    var _0x258d35 = _0x134a3a.dynCall_viiiffiiiiii = function () {
      return (_0x258d35 = _0x134a3a.dynCall_viiiffiiiiii = _0x134a3a.asm.dynCall_viiiffiiiiii).apply(null, arguments);
    };
    var _0x40878f = _0x134a3a.dynCall_viiffiiiiiiiiii = function () {
      return (_0x40878f = _0x134a3a.dynCall_viiffiiiiiiiiii = _0x134a3a.asm.dynCall_viiffiiiiiiiiii).apply(null, arguments);
    };
    var _0x486aaa = _0x134a3a.dynCall_viiffiiiiiii = function () {
      return (_0x486aaa = _0x134a3a.dynCall_viiffiiiiiii = _0x134a3a.asm.dynCall_viiffiiiiiii).apply(null, arguments);
    };
    var _0x22dbb0 = _0x134a3a.dynCall_iiiffiiii = function () {
      return (_0x22dbb0 = _0x134a3a.dynCall_iiiffiiii = _0x134a3a.asm.dynCall_iiiffiiii).apply(null, arguments);
    };
    var _0x13adc3 = _0x134a3a.dynCall_iiiiffiiii = function () {
      return (_0x13adc3 = _0x134a3a.dynCall_iiiiffiiii = _0x134a3a.asm.dynCall_iiiiffiiii).apply(null, arguments);
    };
    var _0x460e52 = _0x134a3a.dynCall_fiiiffi = function () {
      return (_0x460e52 = _0x134a3a.dynCall_fiiiffi = _0x134a3a.asm.dynCall_fiiiffi).apply(null, arguments);
    };
    var _0x29b1b2 = _0x134a3a.dynCall_vjii = function () {
      return (_0x29b1b2 = _0x134a3a.dynCall_vjii = _0x134a3a.asm.dynCall_vjii).apply(null, arguments);
    };
    var _0x1098eb = _0x134a3a.dynCall_viiiiiiiijiiii = function () {
      return (_0x1098eb = _0x134a3a.dynCall_viiiiiiiijiiii = _0x134a3a.asm.dynCall_viiiiiiiijiiii).apply(null, arguments);
    };
    var _0xfeb0c3 = _0x134a3a.dynCall_viiiiiifiiiiii = function () {
      return (_0xfeb0c3 = _0x134a3a.dynCall_viiiiiifiiiiii = _0x134a3a.asm.dynCall_viiiiiifiiiiii).apply(null, arguments);
    };
    var _0x3ab233 = _0x134a3a.dynCall_vifiiiiii = function () {
      return (_0x3ab233 = _0x134a3a.dynCall_vifiiiiii = _0x134a3a.asm.dynCall_vifiiiiii).apply(null, arguments);
    };
    var _0x35a14b = _0x134a3a.dynCall_vifffii = function () {
      return (_0x35a14b = _0x134a3a.dynCall_vifffii = _0x134a3a.asm.dynCall_vifffii).apply(null, arguments);
    };
    var _0x5438cc = _0x134a3a.dynCall_viiiiiffi = function () {
      return (_0x5438cc = _0x134a3a.dynCall_viiiiiffi = _0x134a3a.asm.dynCall_viiiiiffi).apply(null, arguments);
    };
    var _0x3ff6e1 = _0x134a3a.dynCall_viiidii = function () {
      return (_0x3ff6e1 = _0x134a3a.dynCall_viiidii = _0x134a3a.asm.dynCall_viiidii).apply(null, arguments);
    };
    var _0x35e47a = _0x134a3a.dynCall_ijiiiiiiiii = function () {
      return (_0x35e47a = _0x134a3a.dynCall_ijiiiiiiiii = _0x134a3a.asm.dynCall_ijiiiiiiiii).apply(null, arguments);
    };
    var _0x51c734 = _0x134a3a.dynCall_jjjii = function () {
      return (_0x51c734 = _0x134a3a.dynCall_jjjii = _0x134a3a.asm.dynCall_jjjii).apply(null, arguments);
    };
    var _0x548638 = _0x134a3a.dynCall_iijjijii = function () {
      return (_0x548638 = _0x134a3a.dynCall_iijjijii = _0x134a3a.asm.dynCall_iijjijii).apply(null, arguments);
    };
    var _0x23ec09 = _0x134a3a.dynCall_iiiiijji = function () {
      return (_0x23ec09 = _0x134a3a.dynCall_iiiiijji = _0x134a3a.asm.dynCall_iiiiijji).apply(null, arguments);
    };
    var _0x66b384 = _0x134a3a.dynCall_jiijii = function () {
      return (_0x66b384 = _0x134a3a.dynCall_jiijii = _0x134a3a.asm.dynCall_jiijii).apply(null, arguments);
    };
    var _0x451657 = _0x134a3a.dynCall_viijiiiiii = function () {
      return (_0x451657 = _0x134a3a.dynCall_viijiiiiii = _0x134a3a.asm.dynCall_viijiiiiii).apply(null, arguments);
    };
    var _0x2c66c2 = _0x134a3a.dynCall_jiidi = function () {
      return (_0x2c66c2 = _0x134a3a.dynCall_jiidi = _0x134a3a.asm.dynCall_jiidi).apply(null, arguments);
    };
    var _0x261469 = _0x134a3a.dynCall_viiiidijii = function () {
      return (_0x261469 = _0x134a3a.dynCall_viiiidijii = _0x134a3a.asm.dynCall_viiiidijii).apply(null, arguments);
    };
    var _0x205a76 = _0x134a3a.dynCall_viiiidii = function () {
      return (_0x205a76 = _0x134a3a.dynCall_viiiidii = _0x134a3a.asm.dynCall_viiiidii).apply(null, arguments);
    };
    var _0x496f3b = _0x134a3a.dynCall_iiidiii = function () {
      return (_0x496f3b = _0x134a3a.dynCall_iiidiii = _0x134a3a.asm.dynCall_iiidiii).apply(null, arguments);
    };
    var _0x15b54d = _0x134a3a.dynCall_iiidii = function () {
      return (_0x15b54d = _0x134a3a.dynCall_iiidii = _0x134a3a.asm.dynCall_iiidii).apply(null, arguments);
    };
    var _0x3dc124 = _0x134a3a.dynCall_vidiii = function () {
      return (_0x3dc124 = _0x134a3a.dynCall_vidiii = _0x134a3a.asm.dynCall_vidiii).apply(null, arguments);
    };
    var _0x614655 = _0x134a3a.dynCall_viijiiiii = function () {
      return (_0x614655 = _0x134a3a.dynCall_viijiiiii = _0x134a3a.asm.dynCall_viijiiiii).apply(null, arguments);
    };
    var _0x593515 = _0x134a3a.dynCall_viifffi = function () {
      return (_0x593515 = _0x134a3a.dynCall_viifffi = _0x134a3a.asm.dynCall_viifffi).apply(null, arguments);
    };
    var _0x2d3a50 = _0x134a3a.dynCall_viifffffi = function () {
      return (_0x2d3a50 = _0x134a3a.dynCall_viifffffi = _0x134a3a.asm.dynCall_viifffffi).apply(null, arguments);
    };
    var _0x2c66c4 = _0x134a3a.dynCall_viiffffffi = function () {
      return (_0x2c66c4 = _0x134a3a.dynCall_viiffffffi = _0x134a3a.asm.dynCall_viiffffffi).apply(null, arguments);
    };
    var _0x53bbd7 = _0x134a3a.dynCall_viifffffffi = function () {
      return (_0x53bbd7 = _0x134a3a.dynCall_viifffffffi = _0x134a3a.asm.dynCall_viifffffffi).apply(null, arguments);
    };
    var _0x2c8d1d = _0x134a3a.dynCall_viiffffffffi = function () {
      return (_0x2c8d1d = _0x134a3a.dynCall_viiffffffffi = _0x134a3a.asm.dynCall_viiffffffffi).apply(null, arguments);
    };
    var _0x5ce813 = _0x134a3a.dynCall_viiffffffffiii = function () {
      return (_0x5ce813 = _0x134a3a.dynCall_viiffffffffiii = _0x134a3a.asm.dynCall_viiffffffffiii).apply(null, arguments);
    };
    var _0x245e42 = _0x134a3a.dynCall_viiiiffffii = function () {
      return (_0x245e42 = _0x134a3a.dynCall_viiiiffffii = _0x134a3a.asm.dynCall_viiiiffffii).apply(null, arguments);
    };
    var _0x198180 = _0x134a3a.dynCall_ddidi = function () {
      return (_0x198180 = _0x134a3a.dynCall_ddidi = _0x134a3a.asm.dynCall_ddidi).apply(null, arguments);
    };
    var _0x209d66 = _0x134a3a.dynCall_di = function () {
      return (_0x209d66 = _0x134a3a.dynCall_di = _0x134a3a.asm.dynCall_di).apply(null, arguments);
    };
    var _0x2a9555 = _0x134a3a.dynCall_viddii = function () {
      return (_0x2a9555 = _0x134a3a.dynCall_viddii = _0x134a3a.asm.dynCall_viddii).apply(null, arguments);
    };
    var _0x442576 = _0x134a3a.dynCall_iiiddi = function () {
      return (_0x442576 = _0x134a3a.dynCall_iiiddi = _0x134a3a.asm.dynCall_iiiddi).apply(null, arguments);
    };
    var _0xd70e6a = _0x134a3a.dynCall_viddiiii = function () {
      return (_0xd70e6a = _0x134a3a.dynCall_viddiiii = _0x134a3a.asm.dynCall_viddiiii).apply(null, arguments);
    };
    var _0x2747c7 = _0x134a3a.dynCall_viiijji = function () {
      return (_0x2747c7 = _0x134a3a.dynCall_viiijji = _0x134a3a.asm.dynCall_viiijji).apply(null, arguments);
    };
    var _0x4ab30f = _0x134a3a.dynCall_vijiiiiiii = function () {
      return (_0x4ab30f = _0x134a3a.dynCall_vijiiiiiii = _0x134a3a.asm.dynCall_vijiiiiiii).apply(null, arguments);
    };
    var _0x14f6c7 = _0x134a3a.dynCall_vijiiiiiiii = function () {
      return (_0x14f6c7 = _0x134a3a.dynCall_vijiiiiiiii = _0x134a3a.asm.dynCall_vijiiiiiiii).apply(null, arguments);
    };
    var _0x3fbf41 = _0x134a3a.dynCall_jjiiii = function () {
      return (_0x3fbf41 = _0x134a3a.dynCall_jjiiii = _0x134a3a.asm.dynCall_jjiiii).apply(null, arguments);
    };
    var _0x36057b = _0x134a3a.dynCall_jjiiiii = function () {
      return (_0x36057b = _0x134a3a.dynCall_jjiiiii = _0x134a3a.asm.dynCall_jjiiiii).apply(null, arguments);
    };
    var _0x5dfc69 = _0x134a3a.dynCall_jijjji = function () {
      return (_0x5dfc69 = _0x134a3a.dynCall_jijjji = _0x134a3a.asm.dynCall_jijjji).apply(null, arguments);
    };
    var _0x594bcb = _0x134a3a.dynCall_jijjjii = function () {
      return (_0x594bcb = _0x134a3a.dynCall_jijjjii = _0x134a3a.asm.dynCall_jijjjii).apply(null, arguments);
    };
    var _0x5d5118 = _0x134a3a.dynCall_jjiii = function () {
      return (_0x5d5118 = _0x134a3a.dynCall_jjiii = _0x134a3a.asm.dynCall_jjiii).apply(null, arguments);
    };
    var _0x44b7df = _0x134a3a.dynCall_ijijiiiii = function () {
      return (_0x44b7df = _0x134a3a.dynCall_ijijiiiii = _0x134a3a.asm.dynCall_ijijiiiii).apply(null, arguments);
    };
    var _0x53ab53 = _0x134a3a.dynCall_ijjjiii = function () {
      return (_0x53ab53 = _0x134a3a.dynCall_ijjjiii = _0x134a3a.asm.dynCall_ijjjiii).apply(null, arguments);
    };
    var _0x2fe51e = _0x134a3a.dynCall_vijjjiijii = function () {
      return (_0x2fe51e = _0x134a3a.dynCall_vijjjiijii = _0x134a3a.asm.dynCall_vijjjiijii).apply(null, arguments);
    };
    var _0x4a467a = _0x134a3a.dynCall_ijjjiijii = function () {
      return (_0x4a467a = _0x134a3a.dynCall_ijjjiijii = _0x134a3a.asm.dynCall_ijjjiijii).apply(null, arguments);
    };
    var _0xdde8c = _0x134a3a.dynCall_vijiiiiii = function () {
      return (_0xdde8c = _0x134a3a.dynCall_vijiiiiii = _0x134a3a.asm.dynCall_vijiiiiii).apply(null, arguments);
    };
    var _0x547981 = _0x134a3a.dynCall_jfi = function () {
      return (_0x547981 = _0x134a3a.dynCall_jfi = _0x134a3a.asm.dynCall_jfi).apply(null, arguments);
    };
    var _0x584fc1 = _0x134a3a.dynCall_fji = function () {
      return (_0x584fc1 = _0x134a3a.dynCall_fji = _0x134a3a.asm.dynCall_fji).apply(null, arguments);
    };
    var _0x2877a4 = _0x134a3a.dynCall_dfi = function () {
      return (_0x2877a4 = _0x134a3a.dynCall_dfi = _0x134a3a.asm.dynCall_dfi).apply(null, arguments);
    };
    var _0x1462f2 = _0x134a3a.dynCall_jidii = function () {
      return (_0x1462f2 = _0x134a3a.dynCall_jidii = _0x134a3a.asm.dynCall_jidii).apply(null, arguments);
    };
    var _0x3e43af = _0x134a3a.dynCall_viiiiiiiji = function () {
      return (_0x3e43af = _0x134a3a.dynCall_viiiiiiiji = _0x134a3a.asm.dynCall_viiiiiiiji).apply(null, arguments);
    };
    var _0x3af20d = _0x134a3a.dynCall_viiiiiiiiji = function () {
      return (_0x3af20d = _0x134a3a.dynCall_viiiiiiiiji = _0x134a3a.asm.dynCall_viiiiiiiiji).apply(null, arguments);
    };
    var _0x64b4d9 = _0x134a3a.dynCall_viiiiiiiiiji = function () {
      return (_0x64b4d9 = _0x134a3a.dynCall_viiiiiiiiiji = _0x134a3a.asm.dynCall_viiiiiiiiiji).apply(null, arguments);
    };
    var _0x341b7c = _0x134a3a.dynCall_ijiijii = function () {
      return (_0x341b7c = _0x134a3a.dynCall_ijiijii = _0x134a3a.asm.dynCall_ijiijii).apply(null, arguments);
    };
    var _0x46d988 = _0x134a3a.dynCall_vjjiiiii = function () {
      return (_0x46d988 = _0x134a3a.dynCall_vjjiiiii = _0x134a3a.asm.dynCall_vjjiiiii).apply(null, arguments);
    };
    var _0xf8c246 = _0x134a3a.dynCall_vjjii = function () {
      return (_0xf8c246 = _0x134a3a.dynCall_vjjii = _0x134a3a.asm.dynCall_vjjii).apply(null, arguments);
    };
    var _0x350c11 = _0x134a3a.dynCall_ijiiji = function () {
      return (_0x350c11 = _0x134a3a.dynCall_ijiiji = _0x134a3a.asm.dynCall_ijiiji).apply(null, arguments);
    };
    var _0x1f3b59 = _0x134a3a.dynCall_ijiiiii = function () {
      return (_0x1f3b59 = _0x134a3a.dynCall_ijiiiii = _0x134a3a.asm.dynCall_ijiiiii).apply(null, arguments);
    };
    var _0x4ad838 = _0x134a3a.dynCall_ijiiiiji = function () {
      return (_0x4ad838 = _0x134a3a.dynCall_ijiiiiji = _0x134a3a.asm.dynCall_ijiiiiji).apply(null, arguments);
    };
    var _0x265607 = _0x134a3a.dynCall_jiiiiii = function () {
      return (_0x265607 = _0x134a3a.dynCall_jiiiiii = _0x134a3a.asm.dynCall_jiiiiii).apply(null, arguments);
    };
    var _0x1f9a23 = _0x134a3a.dynCall_ddii = function () {
      return (_0x1f9a23 = _0x134a3a.dynCall_ddii = _0x134a3a.asm.dynCall_ddii).apply(null, arguments);
    };
    var _0x9e3642 = _0x134a3a.dynCall_idiii = function () {
      return (_0x9e3642 = _0x134a3a.dynCall_idiii = _0x134a3a.asm.dynCall_idiii).apply(null, arguments);
    };
    var _0x4e5116 = _0x134a3a.dynCall_ifiiiii = function () {
      return (_0x4e5116 = _0x134a3a.dynCall_ifiiiii = _0x134a3a.asm.dynCall_ifiiiii).apply(null, arguments);
    };
    var _0x4ccdb5 = _0x134a3a.dynCall_vdiii = function () {
      return (_0x4ccdb5 = _0x134a3a.dynCall_vdiii = _0x134a3a.asm.dynCall_vdiii).apply(null, arguments);
    };
    var _0x52e76c = _0x134a3a.dynCall_jdii = function () {
      return (_0x52e76c = _0x134a3a.dynCall_jdii = _0x134a3a.asm.dynCall_jdii).apply(null, arguments);
    };
    var _0x467559 = _0x134a3a.dynCall_vijijji = function () {
      return (_0x467559 = _0x134a3a.dynCall_vijijji = _0x134a3a.asm.dynCall_vijijji).apply(null, arguments);
    };
    var _0xfc1c79 = _0x134a3a.dynCall_iijjji = function () {
      return (_0xfc1c79 = _0x134a3a.dynCall_iijjji = _0x134a3a.asm.dynCall_iijjji).apply(null, arguments);
    };
    var _0x344ba1 = _0x134a3a.dynCall_viijjji = function () {
      return (_0x344ba1 = _0x134a3a.dynCall_viijjji = _0x134a3a.asm.dynCall_viijjji).apply(null, arguments);
    };
    var _0x50e88f = _0x134a3a.dynCall_vdii = function () {
      return (_0x50e88f = _0x134a3a.dynCall_vdii = _0x134a3a.asm.dynCall_vdii).apply(null, arguments);
    };
    var _0x49ee59 = _0x134a3a.dynCall_diddi = function () {
      return (_0x49ee59 = _0x134a3a.dynCall_diddi = _0x134a3a.asm.dynCall_diddi).apply(null, arguments);
    };
    var _0x5140e7 = _0x134a3a.dynCall_iijjii = function () {
      return (_0x5140e7 = _0x134a3a.dynCall_iijjii = _0x134a3a.asm.dynCall_iijjii).apply(null, arguments);
    };
    var _0x225395 = _0x134a3a.dynCall_viijijii = function () {
      return (_0x225395 = _0x134a3a.dynCall_viijijii = _0x134a3a.asm.dynCall_viijijii).apply(null, arguments);
    };
    var _0xbdfefb = _0x134a3a.dynCall_viijijiii = function () {
      return (_0xbdfefb = _0x134a3a.dynCall_viijijiii = _0x134a3a.asm.dynCall_viijijiii).apply(null, arguments);
    };
    var _0x85f449 = _0x134a3a.dynCall_vijiji = function () {
      return (_0x85f449 = _0x134a3a.dynCall_vijiji = _0x134a3a.asm.dynCall_vijiji).apply(null, arguments);
    };
    var _0x363834 = _0x134a3a.dynCall_viijiijiii = function () {
      return (_0x363834 = _0x134a3a.dynCall_viijiijiii = _0x134a3a.asm.dynCall_viijiijiii).apply(null, arguments);
    };
    var _0x1d83e1 = _0x134a3a.dynCall_viiiijiiii = function () {
      return (_0x1d83e1 = _0x134a3a.dynCall_viiiijiiii = _0x134a3a.asm.dynCall_viiiijiiii).apply(null, arguments);
    };
    var _0xbc285d = _0x134a3a.dynCall_viijjii = function () {
      return (_0xbc285d = _0x134a3a.dynCall_viijjii = _0x134a3a.asm.dynCall_viijjii).apply(null, arguments);
    };
    var _0x1c0954 = _0x134a3a.dynCall_jiiiiiiiii = function () {
      return (_0x1c0954 = _0x134a3a.dynCall_jiiiiiiiii = _0x134a3a.asm.dynCall_jiiiiiiiii).apply(null, arguments);
    };
    var _0x691012 = _0x134a3a.dynCall_jiiiiiiiiii = function () {
      return (_0x691012 = _0x134a3a.dynCall_jiiiiiiiiii = _0x134a3a.asm.dynCall_jiiiiiiiiii).apply(null, arguments);
    };
    var _0x3ee365 = _0x134a3a.dynCall_iiiiijii = function () {
      return (_0x3ee365 = _0x134a3a.dynCall_iiiiijii = _0x134a3a.asm.dynCall_iiiiijii).apply(null, arguments);
    };
    var _0x575697 = _0x134a3a.dynCall_iiiiidii = function () {
      return (_0x575697 = _0x134a3a.dynCall_iiiiidii = _0x134a3a.asm.dynCall_iiiiidii).apply(null, arguments);
    };
    var _0x59912a = _0x134a3a.dynCall_viifffiii = function () {
      return (_0x59912a = _0x134a3a.dynCall_viifffiii = _0x134a3a.asm.dynCall_viifffiii).apply(null, arguments);
    };
    var _0x4fd0ef = _0x134a3a.dynCall_iidfii = function () {
      return (_0x4fd0ef = _0x134a3a.dynCall_iidfii = _0x134a3a.asm.dynCall_iidfii).apply(null, arguments);
    };
    var _0x351e46 = _0x134a3a.dynCall_iidfi = function () {
      return (_0x351e46 = _0x134a3a.dynCall_iidfi = _0x134a3a.asm.dynCall_iidfi).apply(null, arguments);
    };
    var _0x488c59 = _0x134a3a.dynCall_iiddfi = function () {
      return (_0x488c59 = _0x134a3a.dynCall_iiddfi = _0x134a3a.asm.dynCall_iiddfi).apply(null, arguments);
    };
    var _0xac7a6c = _0x134a3a.dynCall_iijfii = function () {
      return (_0xac7a6c = _0x134a3a.dynCall_iijfii = _0x134a3a.asm.dynCall_iijfii).apply(null, arguments);
    };
    var _0x398ae7 = _0x134a3a.dynCall_iijfi = function () {
      return (_0x398ae7 = _0x134a3a.dynCall_iijfi = _0x134a3a.asm.dynCall_iijfi).apply(null, arguments);
    };
    var _0x1b04d7 = _0x134a3a.dynCall_iijjfi = function () {
      return (_0x1b04d7 = _0x134a3a.dynCall_iijjfi = _0x134a3a.asm.dynCall_iijjfi).apply(null, arguments);
    };
    var _0x320d36 = _0x134a3a.dynCall_iiiiffiiiji = function () {
      return (_0x320d36 = _0x134a3a.dynCall_iiiiffiiiji = _0x134a3a.asm.dynCall_iiiiffiiiji).apply(null, arguments);
    };
    var _0x385e78 = _0x134a3a.dynCall_iiidfii = function () {
      return (_0x385e78 = _0x134a3a.dynCall_iiidfii = _0x134a3a.asm.dynCall_iiidfii).apply(null, arguments);
    };
    var _0x2aac18 = _0x134a3a.dynCall_iiijfii = function () {
      return (_0x2aac18 = _0x134a3a.dynCall_iiijfii = _0x134a3a.asm.dynCall_iiijfii).apply(null, arguments);
    };
    var _0x52696b = _0x134a3a.dynCall_jiiiiiii = function () {
      return (_0x52696b = _0x134a3a.dynCall_jiiiiiii = _0x134a3a.asm.dynCall_jiiiiiii).apply(null, arguments);
    };
    var _0x4a1632 = _0x134a3a.dynCall_iiiiffiiiii = function () {
      return (_0x4a1632 = _0x134a3a.dynCall_iiiiffiiiii = _0x134a3a.asm.dynCall_iiiiffiiiii).apply(null, arguments);
    };
    var _0x12e93f = _0x134a3a.dynCall_iiiidfii = function () {
      return (_0x12e93f = _0x134a3a.dynCall_iiiidfii = _0x134a3a.asm.dynCall_iiiidfii).apply(null, arguments);
    };
    var _0x433877 = _0x134a3a.dynCall_iiiijfii = function () {
      return (_0x433877 = _0x134a3a.dynCall_iiiijfii = _0x134a3a.asm.dynCall_iiiijfii).apply(null, arguments);
    };
    var _0x4fe9f9 = _0x134a3a.dynCall_iiiiffii = function () {
      return (_0x4fe9f9 = _0x134a3a.dynCall_iiiiffii = _0x134a3a.asm.dynCall_iiiiffii).apply(null, arguments);
    };
    var _0x4e1acd = _0x134a3a.dynCall_diiiidi = function () {
      return (_0x4e1acd = _0x134a3a.dynCall_diiiidi = _0x134a3a.asm.dynCall_diiiidi).apply(null, arguments);
    };
    var _0x3345ac = _0x134a3a.dynCall_jiiiiji = function () {
      return (_0x3345ac = _0x134a3a.dynCall_jiiiiji = _0x134a3a.asm.dynCall_jiiiiji).apply(null, arguments);
    };
    var _0x153c94 = _0x134a3a.dynCall_fiiiifi = function () {
      return (_0x153c94 = _0x134a3a.dynCall_fiiiifi = _0x134a3a.asm.dynCall_fiiiifi).apply(null, arguments);
    };
    var _0x4b6e1b = _0x134a3a.dynCall_iiiiiiiiiiiiiiiiii = function () {
      return (_0x4b6e1b = _0x134a3a.dynCall_iiiiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0xd9b0b4 = _0x134a3a.dynCall_iiiiiiiiiiiiiiiiiii = function () {
      return (_0xd9b0b4 = _0x134a3a.dynCall_iiiiiiiiiiiiiiiiiii = _0x134a3a.asm.dynCall_iiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x28bba9 = _0x134a3a.dynCall_iiijjii = function () {
      return (_0x28bba9 = _0x134a3a.dynCall_iiijjii = _0x134a3a.asm.dynCall_iiijjii).apply(null, arguments);
    };
    var _0x1a0014 = _0x134a3a.dynCall_ijiiiiii = function () {
      return (_0x1a0014 = _0x134a3a.dynCall_ijiiiiii = _0x134a3a.asm.dynCall_ijiiiiii).apply(null, arguments);
    };
    var _0x422246 = _0x134a3a.dynCall_ijjiiiiii = function () {
      return (_0x422246 = _0x134a3a.dynCall_ijjiiiiii = _0x134a3a.asm.dynCall_ijjiiiiii).apply(null, arguments);
    };
    var _0x8d34b = _0x134a3a.dynCall_vdi = function () {
      return (_0x8d34b = _0x134a3a.dynCall_vdi = _0x134a3a.asm.dynCall_vdi).apply(null, arguments);
    };
    var _0x58195c = _0x134a3a.dynCall_vjijii = function () {
      return (_0x58195c = _0x134a3a.dynCall_vjijii = _0x134a3a.asm.dynCall_vjijii).apply(null, arguments);
    };
    var _0x3d84cd = _0x134a3a.dynCall_fff = function () {
      return (_0x3d84cd = _0x134a3a.dynCall_fff = _0x134a3a.asm.dynCall_fff).apply(null, arguments);
    };
    var _0xbadeb = _0x134a3a.dynCall_ijj = function () {
      return (_0xbadeb = _0x134a3a.dynCall_ijj = _0x134a3a.asm.dynCall_ijj).apply(null, arguments);
    };
    var _0x1fc011 = _0x134a3a.dynCall_vjji = function () {
      return (_0x1fc011 = _0x134a3a.dynCall_vjji = _0x134a3a.asm.dynCall_vjji).apply(null, arguments);
    };
    var _0x4210de = _0x134a3a.dynCall_vif = function () {
      return (_0x4210de = _0x134a3a.dynCall_vif = _0x134a3a.asm.dynCall_vif).apply(null, arguments);
    };
    var _0x27c308 = _0x134a3a.dynCall_viif = function () {
      return (_0x27c308 = _0x134a3a.dynCall_viif = _0x134a3a.asm.dynCall_viif).apply(null, arguments);
    };
    var _0x4f8b63 = _0x134a3a.dynCall_vid = function () {
      return (_0x4f8b63 = _0x134a3a.dynCall_vid = _0x134a3a.asm.dynCall_vid).apply(null, arguments);
    };
    var _0x1b58ed = _0x134a3a.dynCall_viiiiif = function () {
      return (_0x1b58ed = _0x134a3a.dynCall_viiiiif = _0x134a3a.asm.dynCall_viiiiif).apply(null, arguments);
    };
    var _0x5c6f03 = _0x134a3a.dynCall_viiiif = function () {
      return (_0x5c6f03 = _0x134a3a.dynCall_viiiif = _0x134a3a.asm.dynCall_viiiif).apply(null, arguments);
    };
    var _0x16f9e9 = _0x134a3a.dynCall_viiiiiif = function () {
      return (_0x16f9e9 = _0x134a3a.dynCall_viiiiiif = _0x134a3a.asm.dynCall_viiiiiif).apply(null, arguments);
    };
    var _0x2fecb4 = _0x134a3a.dynCall_iiiijiii = function () {
      return (_0x2fecb4 = _0x134a3a.dynCall_iiiijiii = _0x134a3a.asm.dynCall_iiiijiii).apply(null, arguments);
    };
    var _0x56e5b1 = _0x134a3a.dynCall_iiiij = function () {
      return (_0x56e5b1 = _0x134a3a.dynCall_iiiij = _0x134a3a.asm.dynCall_iiiij).apply(null, arguments);
    };
    var _0x1dfa07 = _0x134a3a.dynCall_iiif = function () {
      return (_0x1dfa07 = _0x134a3a.dynCall_iiif = _0x134a3a.asm.dynCall_iiif).apply(null, arguments);
    };
    var _0xd2660 = _0x134a3a.dynCall_fif = function () {
      return (_0xd2660 = _0x134a3a.dynCall_fif = _0x134a3a.asm.dynCall_fif).apply(null, arguments);
    };
    var _0x38eb7a = _0x134a3a.dynCall_iiiiiifff = function () {
      return (_0x38eb7a = _0x134a3a.dynCall_iiiiiifff = _0x134a3a.asm.dynCall_iiiiiifff).apply(null, arguments);
    };
    var _0x1e934c = _0x134a3a.dynCall_iiiiiifiif = function () {
      return (_0x1e934c = _0x134a3a.dynCall_iiiiiifiif = _0x134a3a.asm.dynCall_iiiiiifiif).apply(null, arguments);
    };
    var _0x55e762 = _0x134a3a.dynCall_iiiiiifiii = function () {
      return (_0x55e762 = _0x134a3a.dynCall_iiiiiifiii = _0x134a3a.asm.dynCall_iiiiiifiii).apply(null, arguments);
    };
    var _0x177b4d = _0x134a3a.dynCall_iiiiiiifiif = function () {
      return (_0x177b4d = _0x134a3a.dynCall_iiiiiiifiif = _0x134a3a.asm.dynCall_iiiiiiifiif).apply(null, arguments);
    };
    var _0x538e5e = _0x134a3a.dynCall_fiff = function () {
      return (_0x538e5e = _0x134a3a.dynCall_fiff = _0x134a3a.asm.dynCall_fiff).apply(null, arguments);
    };
    var _0x4fa86f = _0x134a3a.dynCall_fiiiiiifiifif = function () {
      return (_0x4fa86f = _0x134a3a.dynCall_fiiiiiifiifif = _0x134a3a.asm.dynCall_fiiiiiifiifif).apply(null, arguments);
    };
    var _0x2947e0 = _0x134a3a.dynCall_fiiiiiifiiiif = function () {
      return (_0x2947e0 = _0x134a3a.dynCall_fiiiiiifiiiif = _0x134a3a.asm.dynCall_fiiiiiifiiiif).apply(null, arguments);
    };
    var _0x42a736 = _0x134a3a.dynCall_iifiiiijii = function () {
      return (_0x42a736 = _0x134a3a.dynCall_iifiiiijii = _0x134a3a.asm.dynCall_iifiiiijii).apply(null, arguments);
    };
    var _0x512d24 = _0x134a3a.dynCall_vifif = function () {
      return (_0x512d24 = _0x134a3a.dynCall_vifif = _0x134a3a.asm.dynCall_vifif).apply(null, arguments);
    };
    var _0x4bb611 = _0x134a3a.dynCall_vifijii = function () {
      return (_0x4bb611 = _0x134a3a.dynCall_vifijii = _0x134a3a.asm.dynCall_vifijii).apply(null, arguments);
    };
    var _0x3a372b = _0x134a3a.dynCall_iiiifffiii = function () {
      return (_0x3a372b = _0x134a3a.dynCall_iiiifffiii = _0x134a3a.asm.dynCall_iiiifffiii).apply(null, arguments);
    };
    var _0x24782b = _0x134a3a.dynCall_iiiifffffi = function () {
      return (_0x24782b = _0x134a3a.dynCall_iiiifffffi = _0x134a3a.asm.dynCall_iiiifffffi).apply(null, arguments);
    };
    var _0x1c3741 = _0x134a3a.dynCall_viffiiiif = function () {
      return (_0x1c3741 = _0x134a3a.dynCall_viffiiiif = _0x134a3a.asm.dynCall_viffiiiif).apply(null, arguments);
    };
    var _0x489818 = _0x134a3a.dynCall_viffiifffffiii = function () {
      return (_0x489818 = _0x134a3a.dynCall_viffiifffffiii = _0x134a3a.asm.dynCall_viffiifffffiii).apply(null, arguments);
    };
    var _0x49c086 = _0x134a3a.dynCall_viffffiifffiiiiif = function () {
      return (_0x49c086 = _0x134a3a.dynCall_viffffiifffiiiiif = _0x134a3a.asm.dynCall_viffffiifffiiiiif).apply(null, arguments);
    };
    var _0x50a2e4 = _0x134a3a.dynCall_iiiifffffii = function () {
      return (_0x50a2e4 = _0x134a3a.dynCall_iiiifffffii = _0x134a3a.asm.dynCall_iiiifffffii).apply(null, arguments);
    };
    var _0x173f27 = _0x134a3a.dynCall_viiiiiiiiiiifii = function () {
      return (_0x173f27 = _0x134a3a.dynCall_viiiiiiiiiiifii = _0x134a3a.asm.dynCall_viiiiiiiiiiifii).apply(null, arguments);
    };
    var _0xe25e6b = _0x134a3a.dynCall_viff = function () {
      return (_0xe25e6b = _0x134a3a.dynCall_viff = _0x134a3a.asm.dynCall_viff).apply(null, arguments);
    };
    var _0x2af387 = _0x134a3a.dynCall_iiiiifiiiiif = function () {
      return (_0x2af387 = _0x134a3a.dynCall_iiiiifiiiiif = _0x134a3a.asm.dynCall_iiiiifiiiiif).apply(null, arguments);
    };
    var _0x33793b = _0x134a3a.dynCall_viiff = function () {
      return (_0x33793b = _0x134a3a.dynCall_viiff = _0x134a3a.asm.dynCall_viiff).apply(null, arguments);
    };
    var _0x242040 = _0x134a3a.dynCall_viiifiiiii = function () {
      return (_0x242040 = _0x134a3a.dynCall_viiifiiiii = _0x134a3a.asm.dynCall_viiifiiiii).apply(null, arguments);
    };
    var _0x3ef857 = _0x134a3a.dynCall_viiiifiiiiif = function () {
      return (_0x3ef857 = _0x134a3a.dynCall_viiiifiiiiif = _0x134a3a.asm.dynCall_viiiifiiiiif).apply(null, arguments);
    };
    var _0x42730c = _0x134a3a.dynCall_iifff = function () {
      return (_0x42730c = _0x134a3a.dynCall_iifff = _0x134a3a.asm.dynCall_iifff).apply(null, arguments);
    };
    var _0x21cf49 = _0x134a3a.dynCall_iif = function () {
      return (_0x21cf49 = _0x134a3a.dynCall_iif = _0x134a3a.asm.dynCall_iif).apply(null, arguments);
    };
    var _0x1134d0 = _0x134a3a.dynCall_viij = function () {
      return (_0x1134d0 = _0x134a3a.dynCall_viij = _0x134a3a.asm.dynCall_viij).apply(null, arguments);
    };
    var _0x1b0c11 = _0x134a3a.dynCall_viijijj = function () {
      return (_0x1b0c11 = _0x134a3a.dynCall_viijijj = _0x134a3a.asm.dynCall_viijijj).apply(null, arguments);
    };
    var _0x2b0491 = _0x134a3a.dynCall_viijj = function () {
      return (_0x2b0491 = _0x134a3a.dynCall_viijj = _0x134a3a.asm.dynCall_viijj).apply(null, arguments);
    };
    var _0x43c9e6 = _0x134a3a.dynCall_viiiij = function () {
      return (_0x43c9e6 = _0x134a3a.dynCall_viiiij = _0x134a3a.asm.dynCall_viiiij).apply(null, arguments);
    };
    var _0x177d5d = _0x134a3a.dynCall_iiijji = function () {
      return (_0x177d5d = _0x134a3a.dynCall_iiijji = _0x134a3a.asm.dynCall_iiijji).apply(null, arguments);
    };
    var _0x4e8a58 = _0x134a3a.dynCall_ijjiiiii = function () {
      return (_0x4e8a58 = _0x134a3a.dynCall_ijjiiiii = _0x134a3a.asm.dynCall_ijjiiiii).apply(null, arguments);
    };
    var _0x116c18 = _0x134a3a.dynCall_vidd = function () {
      return (_0x116c18 = _0x134a3a.dynCall_vidd = _0x134a3a.asm.dynCall_vidd).apply(null, arguments);
    };
    var _0x4b3b30 = _0x134a3a.dynCall_iiiiiifffiiifiii = function () {
      return (_0x4b3b30 = _0x134a3a.dynCall_iiiiiifffiiifiii = _0x134a3a.asm.dynCall_iiiiiifffiiifiii).apply(null, arguments);
    };
    var _0x49869a = _0x134a3a.dynCall_viid = function () {
      return (_0x49869a = _0x134a3a.dynCall_viid = _0x134a3a.asm.dynCall_viid).apply(null, arguments);
    };
    var _0x211c9f = _0x134a3a.dynCall_viiif = function () {
      return (_0x211c9f = _0x134a3a.dynCall_viiif = _0x134a3a.asm.dynCall_viiif).apply(null, arguments);
    };
    var _0x401258 = _0x134a3a.dynCall_fiiiif = function () {
      return (_0x401258 = _0x134a3a.dynCall_fiiiif = _0x134a3a.asm.dynCall_fiiiif).apply(null, arguments);
    };
    var _0x40ed25 = _0x134a3a.dynCall_viiffiiii = function () {
      return (_0x40ed25 = _0x134a3a.dynCall_viiffiiii = _0x134a3a.asm.dynCall_viiffiiii).apply(null, arguments);
    };
    var _0x26e379 = _0x134a3a.dynCall_iiiiiff = function () {
      return (_0x26e379 = _0x134a3a.dynCall_iiiiiff = _0x134a3a.asm.dynCall_iiiiiff).apply(null, arguments);
    };
    var _0xe0b603 = _0x134a3a.dynCall_iiij = function () {
      return (_0xe0b603 = _0x134a3a.dynCall_iiij = _0x134a3a.asm.dynCall_iiij).apply(null, arguments);
    };
    var _0x5538d6 = _0x134a3a.dynCall_viffffffffffffiiii = function () {
      return (_0x5538d6 = _0x134a3a.dynCall_viffffffffffffiiii = _0x134a3a.asm.dynCall_viffffffffffffiiii).apply(null, arguments);
    };
    var _0x3d977c = _0x134a3a.dynCall_viffff = function () {
      return (_0x3d977c = _0x134a3a.dynCall_viffff = _0x134a3a.asm.dynCall_viffff).apply(null, arguments);
    };
    var _0x331fbe = _0x134a3a.dynCall_ij = function () {
      return (_0x331fbe = _0x134a3a.dynCall_ij = _0x134a3a.asm.dynCall_ij).apply(null, arguments);
    };
    var _0x2d7fdc = _0x134a3a.dynCall_vf = function () {
      return (_0x2d7fdc = _0x134a3a.dynCall_vf = _0x134a3a.asm.dynCall_vf).apply(null, arguments);
    };
    var _0xa435b5 = _0x134a3a.dynCall_vffff = function () {
      return (_0xa435b5 = _0x134a3a.dynCall_vffff = _0x134a3a.asm.dynCall_vffff).apply(null, arguments);
    };
    var _0x18e95c = _0x134a3a.dynCall_vff = function () {
      return (_0x18e95c = _0x134a3a.dynCall_vff = _0x134a3a.asm.dynCall_vff).apply(null, arguments);
    };
    var _0x43151e = _0x134a3a.dynCall_vifff = function () {
      return (_0x43151e = _0x134a3a.dynCall_vifff = _0x134a3a.asm.dynCall_vifff).apply(null, arguments);
    };
    var _0x518476 = _0x134a3a.dynCall_viifff = function () {
      return (_0x518476 = _0x134a3a.dynCall_viifff = _0x134a3a.asm.dynCall_viifff).apply(null, arguments);
    };
    var _0x1ada8f = _0x134a3a.dynCall_vij = function () {
      return (_0x1ada8f = _0x134a3a.dynCall_vij = _0x134a3a.asm.dynCall_vij).apply(null, arguments);
    };
    var _0x53cf34 = _0x134a3a.dynCall_vfff = function () {
      return (_0x53cf34 = _0x134a3a.dynCall_vfff = _0x134a3a.asm.dynCall_vfff).apply(null, arguments);
    };
    var _0x1f9c01 = _0x134a3a.dynCall_f = function () {
      return (_0x1f9c01 = _0x134a3a.dynCall_f = _0x134a3a.asm.dynCall_f).apply(null, arguments);
    };
    var _0x58d3f3 = _0x134a3a.dynCall_vffffffi = function () {
      return (_0x58d3f3 = _0x134a3a.dynCall_vffffffi = _0x134a3a.asm.dynCall_vffffffi).apply(null, arguments);
    };
    var _0x4993b = _0x134a3a.dynCall_ff = function () {
      return (_0x4993b = _0x134a3a.dynCall_ff = _0x134a3a.asm.dynCall_ff).apply(null, arguments);
    };
    var _0x494aae = _0x134a3a.dynCall_iiifiifii = function () {
      return (_0x494aae = _0x134a3a.dynCall_iiifiifii = _0x134a3a.asm.dynCall_iiifiifii).apply(null, arguments);
    };
    var _0x336bd5 = _0x134a3a.dynCall_fiif = function () {
      return (_0x336bd5 = _0x134a3a.dynCall_fiif = _0x134a3a.asm.dynCall_fiif).apply(null, arguments);
    };
    var _0xddb135 = _0x134a3a.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
      return (_0xddb135 = _0x134a3a.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x134a3a.asm.dynCall_iiiiiiffiiiiiiiiiffffiii).apply(null, arguments);
    };
    var _0x135cd0 = _0x134a3a.dynCall_viififi = function () {
      return (_0x135cd0 = _0x134a3a.dynCall_viififi = _0x134a3a.asm.dynCall_viififi).apply(null, arguments);
    };
    var _0x2653a6 = _0x134a3a.dynCall_viiffiiiiiiiii = function () {
      return (_0x2653a6 = _0x134a3a.dynCall_viiffiiiiiiiii = _0x134a3a.asm.dynCall_viiffiiiiiiiii).apply(null, arguments);
    };
    var _0x4d6968 = _0x134a3a.dynCall_viiffiiiiii = function () {
      return (_0x4d6968 = _0x134a3a.dynCall_viiffiiiiii = _0x134a3a.asm.dynCall_viiffiiiiii).apply(null, arguments);
    };
    var _0x4c3b13 = _0x134a3a.dynCall_viiiiiiiijiii = function () {
      return (_0x4c3b13 = _0x134a3a.dynCall_viiiiiiiijiii = _0x134a3a.asm.dynCall_viiiiiiiijiii).apply(null, arguments);
    };
    _0x134a3a.ccall = _0x7ef751;
    _0x134a3a.cwrap = _0x1b7265;
    _0x134a3a.stackTrace = _0x7c2ca9;
    _0x134a3a.addRunDependency = _0x15c051;
    _0x134a3a.removeRunDependency = _0x5ddd77;
    _0x134a3a.FS_createPath = _0x1279a6.createPath;
    _0x134a3a.FS_createDataFile = _0x1279a6.createDataFile;
    _0x134a3a.stackTrace = _0x7c2ca9;
    var _0x1550ce;
    function _0x5b2d15(_0x504660) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x504660 + ")";
      this.status = _0x504660;
    }
    var _0x1fda6e = false;
    _0x578dfa = function _0x7c3cb6() {
      if (!_0x1550ce) {
        _0x43d846();
      }
      if (!_0x1550ce) {
        _0x578dfa = _0x7c3cb6;
      }
    };
    function _0x44b21e(_0x2ac9d8) {
      var _0x2bf391 = _0x134a3a._main;
      _0x2ac9d8 = _0x2ac9d8 || [];
      var _0x129547 = _0x2ac9d8.length + 0x1;
      var _0x19c66d = _0xd0a0f2((_0x129547 + 0x1) * 0x4);
      _0x2aac64[_0x19c66d >> 0x2] = _0x2e28c8(_0x170acd);
      for (var _0x419dff = 0x1; _0x419dff < _0x129547; _0x419dff++) {
        _0x2aac64[(_0x19c66d >> 0x2) + _0x419dff] = _0x2e28c8(_0x2ac9d8[_0x419dff - 0x1]);
      }
      _0x2aac64[(_0x19c66d >> 0x2) + _0x129547] = 0x0;
      try {
        var _0x5f2c99 = _0x2bf391(_0x129547, _0x19c66d);
        _0x3780a0(_0x5f2c99, true);
        return _0x5f2c99;
      } catch (_0x29a44a) {
        return _0x4f1fa6(_0x29a44a);
      } finally {
        _0x1fda6e = true;
      }
    }
    function _0x43d846(_0x6e652a) {
      _0x6e652a = _0x6e652a || _0x3b7379;
      if (_0x654abb > 0x0) {
        return;
      }
      _0xffb3ea();
      if (_0x654abb > 0x0) {
        return;
      }
      function _0x2224ab() {
        if (_0x1550ce) {
          return;
        }
        _0x1550ce = true;
        _0x134a3a.calledRun = true;
        if (_0x548ac1) {
          return;
        }
        _0x3f60de();
        _0xafbfd3();
        _0x6450cc(_0x134a3a);
        if (_0x134a3a.onRuntimeInitialized) {
          _0x134a3a.onRuntimeInitialized();
        }
        if (_0x388573) {
          _0x44b21e(_0x6e652a);
        }
        _0x2f5297();
      }
      if (_0x134a3a.setStatus) {
        _0x134a3a.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            _0x134a3a.setStatus('');
          }, 0x1);
          _0x2224ab();
        }, 0x1);
      } else {
        _0x2224ab();
      }
    }
    _0x134a3a.run = _0x43d846;
    function _0x3780a0(_0x29a158, _0xb5be88) {
      _0xeccca7 = _0x29a158;
      _0x3b102(_0x29a158);
    }
    function _0x3b102(_0x2d10ac) {
      _0xeccca7 = _0x2d10ac;
      if (!_0x18c15f) {
        if (_0x134a3a.onExit) {
          _0x134a3a.onExit(_0x2d10ac);
        }
        _0x548ac1 = true;
      }
      _0x1a100c(_0x2d10ac, new _0x5b2d15(_0x2d10ac));
    }
    if (_0x134a3a.preInit) {
      if (typeof _0x134a3a.preInit == "function") {
        _0x134a3a.preInit = [_0x134a3a.preInit];
      }
      while (_0x134a3a.preInit.length > 0x0) {
        _0x134a3a.preInit.pop()();
      }
    }
    var _0x388573 = true;
    if (_0x134a3a.noInitialRun) {
      _0x388573 = false;
    }
    _0x43d846();
    return _0x1baab9.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object") {
  module.exports = unityFramework;
} else {
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return unityFramework;
    });
  } else {
    if (typeof exports === "object") {
      exports.unityFramework = unityFramework;
    }
  }
}
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
config.referrer = document.referrer;
function gmdebugtime(_0x70a999) {
  console.log("_TIME_" + _0x70a999 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x2e6859) {
  console.log(_0x2e6859);
}
function gmEvent(_0x37e8c9, _0xc41846) {
  loadGMData(_0x37e8c9, _0xc41846);
}
let fireFPS = 0x0;
async function loadGMData(_0x58e0c8, _0x29cf71) {
  try {
    if (!config.buildAPI) {
      return;
    }
    if (!config.eventLog && _0x58e0c8 != "document-ready" && _0x58e0c8 != "ban-game" && _0x58e0c8 != "start-game" && _0x58e0c8 != "unload-game") {
      return;
    }
    if (_0x58e0c8 == "fps") {
      try {
        let _0x4b04d0 = _0x29cf71.split("|");
        if (_0x4b04d0.length >= 0x2) {
          firebaseLogEventParameter("timecounter", _0x4b04d0[0x0]);
          if (fireFPS < 0x2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x4b04d0[0x1]);
          }
        }
      } catch (_0x229cea) {
        console.log("Error extracting time from abc:", _0x229cea.message);
      }
    }
    let _0x23d985 = '';
    if (_0x29cf71) {
      _0x23d985 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x29cf71));
    }
    _0x23d985 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x23d985 += "&gid=" + config.gameId;
    if (_0x58e0c8 == "ban-game" || _0x58e0c8 == "document-ready" || _0x58e0c8 == "start-game") {
      _0x23d985 += "&wtop=" + window.top.location.hostname;
      _0x23d985 += "&hn=" + window.location.hostname;
      _0x23d985 += "&referrer=" + config.referrer;
    }
    let _0x576e8c = "&data=" + btoa(_0x23d985);
    let _0x5061b3 = config.buildAPI + "?event=" + _0x58e0c8 + _0x576e8c;
    let _0x23117c = new XMLHttpRequest();
    _0x23117c.open("GET", _0x5061b3);
    _0x23117c.onreadystatechange = function () {
      if (_0x23117c.readyState !== 0x4) {
        return;
      }
      if (_0x23117c.status === 0xc8) {
        console.log(_0x23117c.responseText);
      } else {
        console.log("HTTP error", _0x23117c.status, _0x23117c.statusText);
      }
    };
    _0x23117c.send();
  } catch (_0x1f44de) {}
}
function xorEncryptMsg(_0x256e7b) {
  let _0x47931a = '';
  for (let _0x4e042a = 0x0; _0x4e042a < _0x256e7b.length; _0x4e042a++) {
    const _0x4a70d5 = _0x256e7b.charCodeAt(_0x4e042a) ^ "gmdata@&!message@!3!@".charCodeAt(_0x4e042a % "gmdata@&!message@!3!@".length);
    _0x47931a += String.fromCharCode(_0x4a70d5);
  }
  return btoa(_0x47931a);
}
function check_event_log() {
  const _0x18c275 = window.location.search;
  const _0x1941d9 = new URLSearchParams(_0x18c275);
  if (_0x1941d9.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
document.addEventListener("DOMContentLoaded", function () {
  gmEvent("document-ready");
});
window.addEventListener("beforeunload", function (_0x4c5085) {
  gmEvent("unload-game");
});
function _0xb8f06(_0x1b0712, _0x18c89c, _0x3ed874, _0x2c426b, _0x204e99) {
  return _0x174b(_0x18c89c + 0xee, _0x3ed874);
}
function _0x27e94c(_0x387901, _0x44f643, _0x565973, _0x175b03, _0x17d0f) {
  return _0x174b(_0x387901 + 0x35d, _0x17d0f);
}
(function (_0x9e983, _0x502b70) {
  const _0x347896 = _0x9e983();
  while (true) {
    try {
      const _0x14f87a = -parseInt(_0x174b(455, 'TtHJ')) / 0x1 + -parseInt(_0x174b(433, 'IIS%')) / 0x2 + -parseInt(_0x174b(461, 'TX*r')) / 0x3 * (-parseInt(_0x174b(425, 'F2gE')) / 0x4) + parseInt(_0x174b(401, '(Dg5')) / 0x5 + -parseInt(_0x174b(387, '*%GD')) / 0x6 + -parseInt(_0x174b(355, 'GNkQ')) / 0x7 * (-parseInt(_0x174b(458, 'qPU2')) / 0x8) + parseInt(_0x174b(388, '1xDy')) / 0x9;
      if (_0x14f87a === _0x502b70) {
        break;
      } else {
        _0x347896.push(_0x347896.shift());
      }
    } catch (_0x1296fa) {
      _0x347896.push(_0x347896.shift());
    }
  }
})(_0x53fb, 0x56469);
function _0x3c476e(_0x34967a, _0x3bbd1b, _0x2fb3e1, _0xa7e4c3, _0x379219) {
  return _0x174b(_0x3bbd1b + 0x315, _0x34967a);
}
function _0x232d60(_0x3fefc0, _0x5d514e, _0x4ed48b, _0x2d3c08, _0x438b08) {
  return _0x174b(_0x438b08 - 0x10e, _0x5d514e);
}
function _0x174b(_0x3920e, _0x123bac) {
  const _0x53fbc3 = _0x53fb();
  _0x174b = function (_0x174bb9, _0x41c077) {
    _0x174bb9 = _0x174bb9 - 0x14d;
    let _0x434ff9 = _0x53fbc3[_0x174bb9];
    if (_0x174b.Ofrxfi === undefined) {
      var _0x95e888 = function (_0x4c1e0e) {
        let _0x452076 = '';
        let _0x33badf = '';
        let _0x83a16 = 0x0;
        let _0x3e151b;
        let _0x1ec0be;
        for (let _0x421659 = 0x0; _0x1ec0be = _0x4c1e0e.charAt(_0x421659++); ~_0x1ec0be && (_0x3e151b = _0x83a16 % 0x4 ? _0x3e151b * 0x40 + _0x1ec0be : _0x1ec0be, _0x83a16++ % 0x4) ? _0x452076 += String.fromCharCode(0xff & _0x3e151b >> (-0x2 * _0x83a16 & 0x6)) : 0x0) {
          _0x1ec0be = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x1ec0be);
        }
        let _0x497655 = 0x0;
        for (let _0x16ffcf = _0x452076.length; _0x497655 < _0x16ffcf; _0x497655++) {
          _0x33badf += '%' + ('00' + _0x452076.charCodeAt(_0x497655).toString(0x10)).slice(-0x2);
        }
        return decodeURIComponent(_0x33badf);
      };
      const _0x45ad4a = function (_0x4eb8b2, _0x342207) {
        let _0x40f2c2 = [];
        let _0x3670b8 = 0x0;
        let _0x28c3b4;
        let _0x19a8f8 = '';
        _0x4eb8b2 = _0x95e888(_0x4eb8b2);
        let _0x47680f;
        for (_0x47680f = 0x0; _0x47680f < 0x100; _0x47680f++) {
          _0x40f2c2[_0x47680f] = _0x47680f;
        }
        for (_0x47680f = 0x0; _0x47680f < 0x100; _0x47680f++) {
          _0x3670b8 = (_0x3670b8 + _0x40f2c2[_0x47680f] + _0x342207.charCodeAt(_0x47680f % _0x342207.length)) % 0x100;
          _0x28c3b4 = _0x40f2c2[_0x47680f];
          _0x40f2c2[_0x47680f] = _0x40f2c2[_0x3670b8];
          _0x40f2c2[_0x3670b8] = _0x28c3b4;
        }
        _0x47680f = 0x0;
        _0x3670b8 = 0x0;
        for (let _0x434e63 = 0x0; _0x434e63 < _0x4eb8b2.length; _0x434e63++) {
          _0x47680f = (_0x47680f + 0x1) % 0x100;
          _0x3670b8 = (_0x3670b8 + _0x40f2c2[_0x47680f]) % 0x100;
          _0x28c3b4 = _0x40f2c2[_0x47680f];
          _0x40f2c2[_0x47680f] = _0x40f2c2[_0x3670b8];
          _0x40f2c2[_0x3670b8] = _0x28c3b4;
          _0x19a8f8 += String.fromCharCode(_0x4eb8b2.charCodeAt(_0x434e63) ^ _0x40f2c2[(_0x40f2c2[_0x47680f] + _0x40f2c2[_0x3670b8]) % 0x100]);
        }
        return _0x19a8f8;
      };
      _0x174b.DzPHpE = _0x45ad4a;
      _0x3920e = arguments;
      _0x174b.Ofrxfi = true;
    }
    const _0x3dff17 = _0x53fbc3[0x0];
    const _0xf01f9e = _0x174bb9 + _0x3dff17;
    const _0x7b81ea = _0x3920e[_0xf01f9e];
    if (!_0x7b81ea) {
      if (_0x174b.iRTbEk === undefined) {
        _0x174b.iRTbEk = true;
      }
      _0x434ff9 = _0x174b.DzPHpE(_0x434ff9, _0x41c077);
      _0x3920e[_0xf01f9e] = _0x434ff9;
    } else {
      _0x434ff9 = _0x7b81ea;
    }
    return _0x434ff9;
  };
  return _0x174b(_0x3920e, _0x123bac);
}
config.sourceHtml = "RHhrUUVRZGJid2xHVUFnV0IwY01HeE1FQ2doS0NCdE9MRTlESGdJZUJ3WUxGUWNCRERJU1ZGb0xNdz09";
function _0x2db935(_0x1cf468, _0x46dffd, _0x4aa162, _0x342bc2, _0x25370b) {
  return _0x174b(_0x342bc2 - 0x257, _0x4aa162);
}
function _0x53fb() {
  const _0x36f12b = ['fSkhuuG', 'W6JdKmoCWOGb', 'W6/cKhFdSgO', 'WRaas8oA', 'ivWgWP8E', 'tXdcJ1pcRq', 'W6ldOvFdHd0', 'd8oUttBcMW', 'wqNcJ1pcVa', 'jH0oW5DGtCksWRy5WQ7cHG', 'WQK1b8k3WQW', 'qwNcOhFdLG', 'DConxW', 'ccO+gmou', 'WO7dK8oBWRi4', 'WRNcPqVdVWO', 'WRdcUSoDy0y', 'CKnjWQ45', 'WOJcSJddGJi', 'm8kkd3/cIGRdIrlcUCoyW7FdNW', 'W4XXW791cG', 'W5JdVmkecJldGZ7cRSkr', 'W799FxW', 'ghCP', 'WPBdK8kVz1u', 'WPJdJZus', 'W6hdHMNdSam', 'W58sW7rRha', 'Dcukjvm', 'WRNdRCoKWPCu', 'umo9W73cRxa', 'bSkdovRcOW', 'WO4QDmkVxa', 'W7BdIN4TdmkrWPZcPLW', 'WQNdV8oipCkW', 'y8k0c2RdSq', 'uJZcH8o/W5W', 'yb/cVCkWWPK', 'CHJcQ8kCWP8', 'W7ldQwJdTXG', 'fx8IW7aE', 'dCkYmt7dV8otnXpcJtOXAG', 'WQ3dGwbYW74', 'vLCkm8ogc8owWR4', 'mK3cQSkQWP0', 'Bmk7zmoW', 'pgG+W7Gy', 'bCkNq8kaCG', 'zSkfz1Lk', 'F8oekCo5WQ8sW6hcU8oSr2SRWQ8', 'WRS2tmoT', 'WRVdGhrIW7e', 'jCoQk8kJWR4', 'W4rlnSknWPGKy8oUW59OW4xdKq', 'W7LAW61TaW', 'iSkyFmkV', 'CHtcOmo1W7y', 'hSoqW7RcK3G', 'W7RdRmkmWRZcQq', 'cKS8WP4', 'mmkrmSouFG', 'WRNdNH0eW5S', 'WPG4k8k9', 'deLsWOCKWQHjW5XtW4HiW4m', 'vWJcNCou', 'mmk+bN3dSq', 'DCoJrZZcOmo9W6Svp8kJW4b3', 'fCkjrCkcCG', 'W6BcS8kl', 'W6XYuCoSW70dW67cUhZdKSk8', 'W7ZdNhddPLa', 'WRZcM8o+jI8', 'WQ3dTSkpWRDp', 'CL9pWO0I', 'eZKV', 'fCofySogjW', 'WOOVzSkYEq', 'u8kPuwD9', 'W5VdOSoGWRCZ', 'CttdRCo9W4G', 'hNCOW7yE', 'kCksACkoW7a', 'W7tdMxJdGM0', 'DHhcQSk3WP0', 'Es4pbea', 'oSkMAW', 'wq/cIq', 'WOuOya', 'WPhdHCoPcSkq', 'W5DYfq', 'W4JdSmo8WQGH', 'W590nmo1dHTRqu8XeG', 'CSoJqJJcPCo3W4mrbmkaW7r0', 'kCoQl8k5WQ8', 'F8oelCo9WQSFWOdcISowsNOX', 'nr0EaCo8', 'q2RcP2FdGG', 'WP4oiCkmWOq', 'thhcOw7dQG', 'bmkCieddLa', 'WRVcSCovq1S', 'WRJdJqZdTG0', 'WOhdUXNdQwuWoSo5', 'CeHjWQC8', 'WQhcOCozBeG', 'WQZcJCo0pa', 'WPCXDSotW4y', 'WRxcNYCTnq', 'W4JdJ3FcOu4', 'W41nW7f1la', 'ruPY', 'W67dI8kbWQ3cPa', 'W7/cMSojWRmr', 'W6tcOW3dOhO', 'BeJcH1ZdQG', 'W6/dHgm', 'WRhdLmojpSkH', 'EZGoiei', 'W5NdHftdPW', 'W6RdUmodWOik', 'W6ZdKcXwAW', 'W7NcS8kzz8kZ', 'W5hdI3rQFq', 'Dcuiiei', 'W7ZdMgNdHNu', 'DGiemKi', 'FSktBq', 'jmk0b0RdVG', 'hhq4W5Sd', 'zmkFf8klDG', 'WR3cMrddSe4', 'umkpDtJdQW', 'DaxcU8osWRi', 'W6JdKMJdSxO', 'W4nknSkmWPKOlCoCW6HSW4FdSZW', 'ASoveSkamIHsWQxdS0FdOwS', 'WQRcJs7cTINcKrRcUrFdGCk6', 'WPm5ja', 'WR/dMXKyW6W'];
  _0x53fb = function () {
    return _0x36f12b;
  };
  return _0x53fb();
}
document.getElementById("gmsoft-jssdk").addEventListener("load", () => {
  console.log("loaded sdk");
});
(function (_0x45ad4a, _0x4c1e0e, _0xeeb9f0) {
  console.log("DOCUMENT_READY");
  let _0x83a16 = false;
  if (config && config.enableDebug == "yes") {
    _0x83a16 = true;
  }
  if (!window.GMSOFT_OPTIONS) {
    window.GMSOFT_OPTIONS = config;
    window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
  }
  let _0x1ec0be = xorDecrypt("gmdata@&nNhZmRzZGY=", "gmdata@&!1estimate");
  let _0x421659 = _0x45ad4a.getElementById(_0xeeb9f0);
  if (_0x421659 && _0x421659.src == _0x1ec0be) {
    _0x421659.addEventListener("error", _0x497655 => {
      appendJS(_0x45ad4a, _0x4c1e0e, _0xeeb9f0, _0x1ec0be);
    });
    return;
  }
  appendJS(_0x45ad4a, _0x4c1e0e, _0xeeb9f0, _0x1ec0be);
})(document, "script", "gmsoft-jssdk");
function appendJS(_0x16ffcf, _0x4eb8b2, _0x342207, _0x40f2c2) {
  var _0x3670b8;
  var _0x28c3b4 = _0x16ffcf.getElementsByTagName(_0x4eb8b2)[0x0];
  if (_0x16ffcf.getElementById(_0x342207) && _0x16ffcf.getElementById(_0x342207).src == _0x40f2c2) {
    return;
  }
  if (_0x16ffcf.getElementById(_0x342207)) {
    _0x16ffcf.getElementById(_0x342207).remove();
  }
  window.GMSOFT_OPTIONS.sourceHtml = config.sourceHtml;
  _0x3670b8 = _0x16ffcf.createElement(_0x4eb8b2);
  _0x3670b8.id = _0x342207;
  _0x3670b8.src = _0x40f2c2;
  _0x3670b8.async = true;
  _0x28c3b4.parentNode.insertBefore(_0x3670b8, _0x28c3b4);
}
function xorDecrypt(_0x19a8f8, _0x47680f) {
  const _0x434e63 = executeCode("atob(atob(\"" + config.sourceHtml + "\"))");
  let _0x337b1f = '';
  for (let _0x51202c = 0x0; _0x51202c < _0x434e63.length; _0x51202c++) {
    const _0x509ce4 = _0x434e63.charCodeAt(_0x51202c) ^ _0x47680f.charCodeAt(_0x51202c % _0x47680f.length);
    _0x337b1f += String.fromCharCode(_0x509ce4);
  }
  return _0x337b1f;
}
function executeCode(_0x4b68b7) {
  try {
    const _0xf79479 = eval(_0x4b68b7);
    gmdebug("Result:", _0xf79479);
    return _0xf79479;
  } catch (_0x54524f) {
    gmdebug("Error executing code:", _0x54524f);
  }
}
