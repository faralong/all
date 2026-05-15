System.register("chunks:///_virtual/Account.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./AccountModelComp.ts", "./AccountNetData.ts"], (function(t) {
    var n, c, o, e, u;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        }
        , function(t) {
            c = t.cclegacy
        }
        , function(t) {
            o = t.ecs
        }
        , function(t) {
            e = t.AccountModelComp
        }
        , function(t) {
            u = t.AccountNetDataComp
        }
        ],
        execute: function() {
            var i;
            c._RF.push({}, "33c06qSPa9MRbTUOf1u+7SR", "Account", void 0);
            t("Account", o.register("Account")(i = function(t) {
                function c() {
                    for (var n, c = arguments.length, o = new Array(c), e = 0; e < c; e++)
                        o[e] = arguments[e];
                    return (n = t.call.apply(t, [this].concat(o)) || this).AccountModel = void 0,
                    n.AccountNetData = void 0,
                    n
                }
                n(c, t);
                var o = c.prototype;
                return o.init = function() {
                    this.addComponents(e)
                }
                ,
                o.connect = function() {
                    this.getPlayer()
                }
                ,
                o.getPlayer = function() {
                    this.add(u)
                }
                ,
                c
            }(o.Entity)) || i);
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AccountModelComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts"], (function(e) {
    var o, t, n;
    return {
        setters: [function(e) {
            o = e.inheritsLoose
        }
        , function(e) {
            t = e.cclegacy
        }
        , function(e) {
            n = e.ecs
        }
        ],
        execute: function() {
            var c;
            t._RF.push({}, "48e3172BRZA+ZLehWBTVmsA", "AccountModelComp", void 0);
            e("AccountModelComp", n.register("AccountModel")(c = function(e) {
                function t() {
                    for (var o, t = arguments.length, n = new Array(t), c = 0; c < t; c++)
                        n[c] = arguments[c];
                    return (o = e.call.apply(e, [this].concat(n)) || this).role = null,
                    o
                }
                return o(t, e),
                t.prototype.reset = function() {}
                ,
                t
            }(n.Comp)) || c);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AccountNetData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./ECS.ts", "./GameEvent.ts", "./Role.ts", "./AccountModelComp.ts", "./TableRoleSkill.ts", "./JsonUtil.ts", "./PlayerData.ts"], (function(e) {
    var t, o, n, l, i, c, s, a, u, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            o = e.cclegacy
        }
        , function(e) {
            n = e.oops
        }
        , function(e) {
            l = e.ecs
        }
        , function(e) {
            i = e.GameEvent
        }
        , function(e) {
            c = e.Role
        }
        , function(e) {
            s = e.AccountModelComp
        }
        , function(e) {
            a = e.TableRoleSkill
        }
        , function(e) {
            u = e.JsonUtil
        }
        , function(e) {
            r = e.default
        }
        ],
        execute: function() {
            var d, f;
            o._RF.push({}, "45219Y+nYhGDpMi+OVOquln", "AccountNetData", void 0);
            var p = e("AccountNetDataComp", l.register("AccountNetData")(d = function(e) {
                function o() {
                    return e.apply(this, arguments) || this
                }
                return t(o, e),
                o.prototype.reset = function() {}
                ,
                o
            }(l.Comp)) || d);
            e("AccountNetDataSystem", l.register("Account")(f = function(e) {
                function o() {
                    return e.apply(this, arguments) || this
                }
                t(o, e);
                var d = o.prototype;
                return d.filter = function() {
                    return l.allOf(p, s)
                }
                ,
                d.entityEnter = function(e) {
                    n.storage.setUser("1"),
                    this.createRole(e),
                    n.message.dispatchEvent(i.LoginSuccess),
                    e.remove(p)
                }
                ,
                d.createRole = function(e) {
                    var t = r.get()
                      , o = l.getEntity(c);
                    if (o.RoleModel.id = t.id,
                    o.RoleModelBase.coins = 0,
                    o.RoleModelBase.DOT = 0,
                    o.RoleModelBase.DPS = 0,
                    o.RoleModelBase.coin = t.coin,
                    o.upgrade(t.lv),
                    o.RoleModelJob.id = t.jobId,
                    0 === t.skills.length) {
                        var n = u.get(a.TableName);
                        Object.keys(n).forEach((function(e) {
                            var n = {
                                id: Number(e),
                                lv: 0
                            };
                            o.RoleModelSkill.id = n,
                            t.skills.push(n)
                        }
                        )),
                        t.saveData()
                    } else
                        t.skills.forEach((function(e) {
                            o.RoleModelSkill.id = e
                        }
                        ));
                    o.RoleModel.vmAdd(),
                    o.RoleModelLevel.vmAdd(),
                    o.RoleModelBase.vmAdd(),
                    o.RoleModelSkill.vmAdd(),
                    e.AccountModel.role = o
                }
                ,
                o
            }(l.ComblockSystem)) || f);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AdShowComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUIConfig.ts", "./UIUtil.ts", "./CCComp.ts", "./ECS.ts", "./Oops.ts", "./ModuleUtil.ts", "./MessageManager.ts", "./Enum.ts"], (function(t) {
    var e, n, o, i, s, c, a, r, l, u, h, f, d, p, m;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            o = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            s = t.cclegacy,
            c = t._decorator,
            a = t.Node
        }
        , function(t) {
            r = t.UIID
        }
        , function(t) {
            l = t.default
        }
        , function(t) {
            u = t.CCComp
        }
        , function(t) {
            h = t.ecs
        }
        , function(t) {
            f = t.oops
        }
        , function(t) {
            d = t.ModuleUtil
        }
        , function(t) {
            p = t.Message
        }
        , function(t) {
            m = t.EngineMessage
        }
        ],
        execute: function() {
            var w, A, y, g, b, v, C, S;
            s._RF.push({}, "a3c2fIsSVxJbJGhd+SoRW9B", "AdShowComp", void 0);
            var E = c.ccclass
              , G = c.property;
            t("AdShowComp", (w = E("AdShowComp"),
            A = h.register("AdShow", !1),
            y = G(a),
            g = G(a),
            w(b = A((C = e((v = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), c = 0; c < n; c++)
                        s[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(s)) || this,
                    o(e, "noBtn", C, i(e)),
                    o(e, "yesBtn", S, i(e)),
                    e.callback = null,
                    e
                }
                n(e, t);
                var s = e.prototype;
                return s.onAdded = function(t) {
                    return this.callback = t,
                    !0
                }
                ,
                s.onLoad = function() {
                    l.setClickFunc(this.noBtn, this, this.closeUI)
                   // l.setClickFunc(this.yesBtn, this, this.showAd)
                }
                ,
                s.onEnable = function() {}
                ,
                s.showAd = function () {
    this.callback();
    this.closeUI();
                }
                ,
                s.closeUI = function() {
                    this.ent.remove(e),
                    d.removeViewUi(this.ent, e, r.AdShow)
                }
                ,
                s.reset = function() {
                    f.gui.remove(r.AdShow, !1)
                }
                ,
                e
            }(u)).prototype, "noBtn", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = e(v.prototype, "yesBtn", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b = v)) || b) || b));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Ambilight.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, i, r, a, n, o, s, c, p, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            r = t.initializerDefineProperty,
            a = t.assertThisInitialized,
            n = t.createClass
        }
        , function(t) {
            o = t.cclegacy,
            s = t._decorator,
            c = t.CCInteger,
            p = t.Sprite,
            l = t.Component
        }
        ],
        execute: function() {
            var u, h, m, _, f;
            o._RF.push({}, "73c69GH9M9F2Ilsm0fvjTCX", "Ambilight", void 0);
            var y = s.ccclass
              , g = s.property;
            t("Ambilight", (u = y("Ambilight"),
            h = g(c),
            u((f = e((_ = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    r(e, "_max", f, a(e)),
                    e._start = 0,
                    e._material = void 0,
                    e
                }
                i(e, t);
                var o = e.prototype;
                return o.update = function(t) {
                    this._material = this.node.getComponent(p).getMaterial(0),
                    this.node.active && this._material && this._setShaderTime(t)
                }
                ,
                o._setShaderTime = function(t) {
                    var e = this._start;
                    e > this.max && (e = 0),
                    e += .015,
                    this._material.setProperty("speed", e),
                    this._start = e
                }
                ,
                n(e, [{
                    key: "max",
                    get: function() {
                        return this._max
                    },
                    set: function(t) {
                        this._max = t
                    }
                }]),
                e
            }(l)).prototype, "_max", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            e(_.prototype, "max", [h], Object.getOwnPropertyDescriptor(_.prototype, "max"), _.prototype),
            m = _)) || m));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationEventHandler.ts", ["cc"], (function(t) {
    var n;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "ee672gBunVEs77y6cOgLMci", "AnimationEventHandler", void 0);
            var e = function() {
                this.callback = void 0,
                this.target = void 0
            };
            t("AnimationEventHandler", function() {
                function t() {
                    this.frameEvents = new Map,
                    this.finishedEvents = new Map
                }
                var n = t.prototype;
                return n.addFrameEvent = function(t, n, a) {
                    var i = new e;
                    i.callback = n,
                    i.target = a,
                    this.frameEvents.set(t, i)
                }
                ,
                n.addFinishedEvent = function(t, n, a) {
                    var i = new e;
                    i.callback = n,
                    i.target = a,
                    this.finishedEvents.set(t, i)
                }
                ,
                n.onFrameEventCallback = function(t, n) {
                    var e = this.frameEvents.get(t);
                    e && e.callback.call(e.target, t, n)
                }
                ,
                n.onFinishedCallback = function(t) {
                    var n = this.finishedEvents.get(t.curStateName);
                    n && n.callback.call(n.target, t.curStateName, t)
                }
                ,
                n.playAnimation = function(t, n) {}
                ,
                n.scaleTime = function(t) {}
                ,
                t
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorBase.ts"], (function(t) {
    var i, n, a, s, e;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            a = t._decorator,
            s = t.Animation
        }
        , function(t) {
            e = t.default
        }
        ],
        execute: function() {
            var o;
            n._RF.push({}, "64571Qy/TlCEZI/28RxIG+E", "AnimatorAnimation", void 0);
            var h = a.ccclass
              , r = (a.property,
            a.requireComponent)
              , m = a.disallowMultiple
              , p = a.menu
              , l = a.help;
            t("default", h(o = m(o = r(s)(o = p("OopsFramework/Animator/AnimatorAnimation （动画状态机）")(o = l("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12036279&doc_id=2873565")(o = function(t) {
                function n() {
                    for (var i, n = arguments.length, a = new Array(n), s = 0; s < n; s++)
                        a[s] = arguments[s];
                    return (i = t.call.apply(t, [this].concat(a)) || this)._animation = null,
                    i._animState = null,
                    i._wrapModeMap = new Map,
                    i
                }
                i(n, t);
                var a = n.prototype;
                return a.start = function() {
                    this.PlayOnStart && !this._hasInit && (this._hasInit = !0,
                    this._animation = this.getComponent(s),
                    this._animation.on(s.EventType.FINISHED, this.onAnimFinished, this),
                    this._animation.on(s.EventType.LASTFRAME, this.onAnimFinished, this),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                a.onInit = function() {
                    this.PlayOnStart || this._hasInit || (this._hasInit = !0,
                    this.initArgs.apply(this, arguments),
                    this._animation = this.getComponent(s),
                    this._animation.on(s.EventType.FINISHED, this.onAnimFinished, this),
                    this._animation.on(s.EventType.LASTFRAME, this.onAnimFinished, this),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                a.playAnimation = function(t, i) {
                    t && (this._animation.play(t),
                    this._animState = this._animation.getState(t),
                    this._animState && (this._wrapModeMap.has(this._animState) || this._wrapModeMap.set(this._animState, this._animState.wrapMode),
                    this._animState.wrapMode = i ? 2 : this._wrapModeMap.get(this._animState)))
                }
                ,
                a.scaleTime = function(t) {
                    this._animState && (this._animState.speed = t)
                }
                ,
                n
            }(e)) || o) || o) || o) || o) || o);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorController.ts"], (function(t) {
    var a, n, e, i, o, r, s, c, u, l;
    return {
        setters: [function(t) {
            a = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            e = t.initializerDefineProperty,
            i = t.assertThisInitialized,
            o = t.createClass
        }
        , function(t) {
            r = t.cclegacy,
            s = t._decorator,
            c = t.JsonAsset,
            u = t.Component
        }
        , function(t) {
            l = t.default
        }
        ],
        execute: function() {
            var p, h, m, f, g, _, y, d, A, b;
            r._RF.push({}, "7ff14NOug1NAIB1XgQlC9Gc", "AnimatorBase", void 0);
            var v = s.ccclass
              , S = s.property
              , C = s.executionOrder
              , M = s.menu;
            t("default", (p = C(-1e3),
            h = M("animator/AnimatorBase"),
            m = S({
                type: c,
                tooltip: "状态机json文件"
            }),
            f = S({
                tooltip: "是否在start中自动启动状态机"
            }),
            g = S({
                tooltip: "是否在update中自动触发状态机逻辑更新"
            }),
            v(_ = p(_ = h((d = a((y = function(t) {
                function a() {
                    for (var a, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    return a = t.call.apply(t, [this].concat(o)) || this,
                    e(a, "AssetRawUrl", d, i(a)),
                    e(a, "PlayOnStart", A, i(a)),
                    e(a, "AutoUpdate", b, i(a)),
                    a._hasInit = !1,
                    a._ac = null,
                    a._stateLogicMap = null,
                    a._onStateChangeCall = null,
                    a._animationPlayer = null,
                    a
                }
                n(a, t);
                var r = a.prototype;
                return r.onFrameEvent = function(t) {
                    var a;
                    null == (a = this._animationPlayer) || a.onFrameEventCallback(t, this)
                }
                ,
                r.getState = function(t) {
                    return this._ac.states.get(t)
                }
                ,
                r.onInit = function() {}
                ,
                r.initArgs = function() {
                    for (var t = this, a = arguments.length, n = new Array(a), e = 0; e < a; e++)
                        n[e] = arguments[e];
                    n.forEach((function(a) {
                        a && ("function" == typeof a ? t._onStateChangeCall = a : "object" == typeof a && (a instanceof Map ? t._stateLogicMap = a : t._animationPlayer = a))
                    }
                    ))
                }
                ,
                r.updateAnimator = function() {
                    var t, a = this._ac.curState.speed;
                    this._ac.curState.multi && (a *= null != (t = this._ac.params.getNumber(this._ac.curState.multi)) ? t : 1);
                    if (this.scaleTime(a),
                    this._stateLogicMap) {
                        var n = this._stateLogicMap.get(this._ac.curState.name);
                        n && n.onUpdate()
                    }
                    this._ac.updateAnimator()
                }
                ,
                r.update = function() {
                    this._hasInit && this.AutoUpdate && this.updateAnimator()
                }
                ,
                r.manualUpdate = function() {
                    this._hasInit && !this.AutoUpdate && this.updateAnimator()
                }
                ,
                r.initJson = function(t) {
                    this._ac = new l(this,t)
                }
                ,
                r.onAnimFinished = function() {
                    var t;
                    this._ac.onAnimationComplete(),
                    null == (t = this._animationPlayer) || t.onFinishedCallback(this)
                }
                ,
                r.playAnimation = function(t, a) {}
                ,
                r.scaleTime = function(t) {}
                ,
                r.onStateChange = function(t, a) {
                    this.playAnimation(a.motion, a.loop);
                    var n = t ? t.name : "";
                    if (this._stateLogicMap) {
                        var e = this._stateLogicMap.get(n);
                        e && e.onExit();
                        var i = this._stateLogicMap.get(a.name);
                        i && i.onEntry()
                    }
                    this._onStateChangeCall && this._onStateChangeCall(n, a.name)
                }
                ,
                r.setBool = function(t, a) {
                    this._ac.params.setBool(t, a)
                }
                ,
                r.getBool = function(t) {
                    return 0 !== this._ac.params.getBool(t)
                }
                ,
                r.setNumber = function(t, a) {
                    this._ac.params.setNumber(t, a)
                }
                ,
                r.getNumber = function(t) {
                    return this._ac.params.getNumber(t)
                }
                ,
                r.setTrigger = function(t) {
                    this._ac.params.setTrigger(t)
                }
                ,
                r.resetTrigger = function(t) {
                    this._ac.params.resetTrigger(t)
                }
                ,
                r.autoTrigger = function(t) {
                    this._ac.params.autoTrigger(t)
                }
                ,
                r.play = function(t) {
                    this._hasInit && this._ac.play(t)
                }
                ,
                o(a, [{
                    key: "curStateName",
                    get: function() {
                        return this._ac.curState.name
                    }
                }, {
                    key: "curStateMotion",
                    get: function() {
                        return this._ac.curState.motion
                    }
                }]),
                a
            }(u)).prototype, "AssetRawUrl", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            A = a(y.prototype, "PlayOnStart", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            b = a(y.prototype, "AutoUpdate", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            _ = y)) || _) || _) || _));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorCondition.ts", ["cc"], (function(t) {
    var a, r;
    return {
        setters: [function(t) {
            a = t.cclegacy,
            r = t.error
        }
        ],
        execute: function() {
            a._RF.push({}, "8ade2h2C/ZA86thhI0NNuqu", "AnimatorCondition", void 0);
            var e = t("ParamType", function(t) {
                return t[t.COMPLETE = 0] = "COMPLETE",
                t[t.BOOLEAN = 1] = "BOOLEAN",
                t[t.NUMBER = 2] = "NUMBER",
                t[t.TRIGGER = 3] = "TRIGGER",
                t[t.AUTO_TRIGGER = 4] = "AUTO_TRIGGER",
                t
            }({}))
              , i = t("LogicType", function(t) {
                return t[t.EQUAL = 0] = "EQUAL",
                t[t.NOTEQUAL = 1] = "NOTEQUAL",
                t[t.GREATER = 2] = "GREATER",
                t[t.LESS = 3] = "LESS",
                t[t.GREATER_EQUAL = 4] = "GREATER_EQUAL",
                t[t.LESS_EQUAL = 5] = "LESS_EQUAL",
                t
            }({}));
            t("default", function() {
                function t(t, a) {
                    this._ac = void 0,
                    this._param = "",
                    this._value = 0,
                    this._logic = i.EQUAL,
                    this._ac = a,
                    this._param = t.param,
                    this._value = t.value,
                    this._logic = t.logic
                }
                var a = t.prototype;
                return a.getParamName = function() {
                    return this._param
                }
                ,
                a.getParamType = function() {
                    return this._ac.params.getParamType(this._param)
                }
                ,
                a.check = function() {
                    var t = this.getParamType();
                    if (t === e.BOOLEAN)
                        return this._ac.params.getBool(this._param) === this._value;
                    if (t !== e.NUMBER)
                        return t === e.AUTO_TRIGGER ? 0 !== this._ac.params.getAutoTrigger(this._param) : t === e.TRIGGER ? 0 !== this._ac.params.getTrigger(this._param) : (r("[AnimatorCondition.check] 错误的type: " + t),
                        !1);
                    var a = this._ac.params.getNumber(this._param);
                    switch (this._logic) {
                    case i.EQUAL:
                        return a === this._value;
                    case i.NOTEQUAL:
                        return a !== this._value;
                    case i.GREATER:
                        return a > this._value;
                    case i.LESS:
                        return a < this._value;
                    case i.GREATER_EQUAL:
                        return a >= this._value;
                    case i.LESS_EQUAL:
                        return a <= this._value;
                    default:
                        return !1
                    }
                }
                ,
                t
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorParams.ts", "./AnimatorState.ts"], (function(t) {
    var e, a, n, s, i;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            a = t.cclegacy,
            n = t.error
        }
        , function(t) {
            s = t.default
        }
        , function(t) {
            i = t.default
        }
        ],
        execute: function() {
            a._RF.push({}, "01df9SMBjRCyYDE7SgbZxua", "AnimatorController", void 0);
            t("default", function() {
                function t(t, e) {
                    this._jsonData = null,
                    this._animator = null,
                    this._params = null,
                    this._states = null,
                    this._anyState = null,
                    this._curState = null,
                    this._changeCount = 0,
                    this.animCompleteState = null,
                    this.animComplete = !1,
                    this._animator = t,
                    this._jsonData = e,
                    this._states = new Map,
                    this._params = new s(e.parameters),
                    this.init(e)
                }
                var a = t.prototype;
                return a.init = function(t) {
                    if (t.states.length <= 0)
                        n("[AnimatorController.init] 状态机json错误");
                    else {
                        var e = t.defaultState;
                        this._anyState = new i(t.anyState,this);
                        for (var a = 0; a < t.states.length; a++) {
                            var s = new i(t.states[a],this);
                            this._states.set(s.name, s)
                        }
                        this.changeState(e)
                    }
                }
                ,
                a.updateState = function() {
                    this._curState.checkAndTrans(),
                    this._curState !== this._anyState && null !== this._anyState && this._anyState.checkAndTrans()
                }
                ,
                a.updateAnimator = function() {
                    this._changeCount = 0,
                    this.updateState(),
                    this.animComplete && this.animCompleteState.loop && (this.animComplete = !1),
                    this.params.resetAllAutoTrigger()
                }
                ,
                a.onAnimationComplete = function() {
                    this.animComplete = !0,
                    this.animCompleteState = this._curState
                }
                ,
                a.play = function(t) {
                    this._states.has(t) && this._curState.name !== t && (this.animComplete = !1,
                    this.changeState(t))
                }
                ,
                a.changeState = function(t) {
                    if (this._changeCount++,
                    this._changeCount > 1e3)
                        n("[AnimatorController.changeState] error: 状态切换递归调用超过1000次，transition设置可能出错!");
                    else if (!this._states.has(t) || null !== this._curState && this._curState.name === t)
                        n("[AnimatorController.changeState] error state: " + t);
                    else {
                        var e = this._curState;
                        this._curState = this._states.get(t),
                        this._animator.onStateChange(e, this._curState),
                        this.updateState()
                    }
                }
                ,
                e(t, [{
                    key: "curState",
                    get: function() {
                        return this._curState
                    }
                }, {
                    key: "params",
                    get: function() {
                        return this._params
                    }
                }, {
                    key: "states",
                    get: function() {
                        return this._states
                    }
                }]),
                t
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorCustomization.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorBase.ts"], (function(i) {
    var t, n, a, e, o, r, s;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor,
            n = i.inheritsLoose,
            a = i.initializerDefineProperty,
            e = i.assertThisInitialized
        }
        , function(i) {
            o = i.cclegacy,
            r = i._decorator
        }
        , function(i) {
            s = i.default
        }
        ],
        execute: function() {
            var l, c, u, p, h, m;
            o._RF.push({}, "fe7aemTdvFBeJlAmC+6XphU", "AnimatorCustomization", void 0);
            var f = r.ccclass
              , y = r.property
              , d = r.disallowMultiple
              , A = r.menu
              , _ = r.help;
            i("default", (l = A("OopsFramework/Animator/AnimatorCustomization （自定义状态机）"),
            c = _("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12036279&doc_id=2873565"),
            u = y({
                override: !0,
                visible: !1
            }),
            f(p = d(p = l(p = c((m = t((h = function(i) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    return t = i.call.apply(i, [this].concat(o)) || this,
                    a(t, "PlayOnStart", m, e(t)),
                    t
                }
                n(t, i);
                var o = t.prototype;
                return o.onInit = function() {
                    this._hasInit || (this._hasInit = !0,
                    this.initArgs.apply(this, arguments),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                o.playAnimation = function(i, t) {
                    this._animationPlayer && i && this._animationPlayer.playAnimation(i, t)
                }
                ,
                o.scaleTime = function(i) {
                    this._animationPlayer && this._animationPlayer.scaleTime(i)
                }
                ,
                t
            }(s)).prototype, "PlayOnStart", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            p = h)) || p) || p) || p) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorDragonBones.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorBase.ts"], (function(t) {
    var n, s, i, o, e;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        }
        , function(t) {
            s = t.cclegacy,
            i = t._decorator,
            o = t.dragonBones
        }
        , function(t) {
            e = t.default
        }
        ],
        execute: function() {
            var a;
            s._RF.push({}, "dc324J03ptB8b2JV9Ljduzh", "AnimatorDragonBones", void 0);
            var r = i.ccclass
              , h = (i.property,
            i.requireComponent)
              , l = i.disallowMultiple
              , c = i.menu
              , u = i.help;
            t("default", r(a = l(a = h(o.ArmatureDisplay)(a = c("OopsFramework/Animator/AnimatorDragonBones （龙骨状态机）")(a = u("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12036279&doc_id=2873565")(a = function(t) {
                function s() {
                    for (var n, s = arguments.length, i = new Array(s), o = 0; o < s; o++)
                        i[o] = arguments[o];
                    return (n = t.call.apply(t, [this].concat(i)) || this)._dragonBones = null,
                    n
                }
                n(s, t);
                var i = s.prototype;
                return i.start = function() {
                    this.PlayOnStart && !this._hasInit && (this._hasInit = !0,
                    this._dragonBones = this.getComponent(o.ArmatureDisplay),
                    this._dragonBones.addEventListener("complete", this.onAnimFinished, this),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                i.onInit = function() {
                    this.PlayOnStart || this._hasInit || (this._hasInit = !0,
                    this.initArgs.apply(this, arguments),
                    this._dragonBones = this.getComponent(o.ArmatureDisplay),
                    this._dragonBones.addEventListener("complete", this.onAnimFinished, this),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                i.playAnimation = function(t, n) {
                    t && this._dragonBones.playAnimation(t, n ? 0 : -1)
                }
                ,
                i.scaleTime = function(t) {
                    t > 0 && (this._dragonBones.timeScale = t)
                }
                ,
                s
            }(e)) || a) || a) || a) || a) || a);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorParams.ts", ["cc", "./AnimatorCondition.ts"], (function(t) {
    var a, e;
    return {
        setters: [function(t) {
            a = t.cclegacy
        }
        , function(t) {
            e = t.ParamType
        }
        ],
        execute: function() {
            a._RF.push({}, "13926xryDRPXJ50lCnLvy4J", "AnimatorParams", void 0);
            t("default", function() {
                function t(t) {
                    var a = this;
                    this._paramMap = new Map,
                    t.forEach((function(t) {
                        var e = {
                            type: t.type,
                            value: t.init
                        };
                        a._paramMap.set(t.param, e)
                    }
                    ))
                }
                var a = t.prototype;
                return a.getParamType = function(t) {
                    var a = this._paramMap.get(t);
                    return a ? a.type : null
                }
                ,
                a.setNumber = function(t, a) {
                    var r = this._paramMap.get(t);
                    r && r.type === e.NUMBER && (r.value = a)
                }
                ,
                a.setBool = function(t, a) {
                    var r = this._paramMap.get(t);
                    r && r.type === e.BOOLEAN && (r.value = a ? 1 : 0)
                }
                ,
                a.setTrigger = function(t) {
                    var a = this._paramMap.get(t);
                    a && a.type === e.TRIGGER && (a.value = 1)
                }
                ,
                a.resetTrigger = function(t) {
                    var a = this._paramMap.get(t);
                    a && a.type === e.TRIGGER && (a.value = 0)
                }
                ,
                a.autoTrigger = function(t) {
                    var a = this._paramMap.get(t);
                    a && a.type === e.AUTO_TRIGGER && (a.value = 1)
                }
                ,
                a.resetAutoTrigger = function(t) {
                    var a = this._paramMap.get(t);
                    a && a.type === e.AUTO_TRIGGER && (a.value = 0)
                }
                ,
                a.resetAllAutoTrigger = function() {
                    this._paramMap.forEach((function(t, a) {
                        t.type === e.AUTO_TRIGGER && (t.value = 0)
                    }
                    ))
                }
                ,
                a.getNumber = function(t) {
                    var a = this._paramMap.get(t);
                    return a && a.type === e.NUMBER ? a.value : 0
                }
                ,
                a.getBool = function(t) {
                    var a = this._paramMap.get(t);
                    return a && a.type === e.BOOLEAN ? a.value : 0
                }
                ,
                a.getTrigger = function(t) {
                    var a = this._paramMap.get(t);
                    return a && a.type === e.TRIGGER ? a.value : 0
                }
                ,
                a.getAutoTrigger = function(t) {
                    var a = this._paramMap.get(t);
                    return a && a.type === e.AUTO_TRIGGER ? a.value : 0
                }
                ,
                t
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorSkeletal.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorAnimation.ts"], (function(t) {
    var i, e, a, n, o, r, s, l, c, u;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            e = t.inheritsLoose,
            a = t.initializerDefineProperty,
            n = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            r = t._decorator,
            s = t.SkeletalAnimation,
            l = t.CCFloat,
            c = t.game
        }
        , function(t) {
            u = t.default
        }
        ],
        execute: function() {
            var p, m, h, d, _, f, S;
            o._RF.push({}, "8c545jBn4xF7LWXjl506avi", "AnimatorSkeletal", void 0);
            var y = r.ccclass
              , g = r.property
              , w = r.requireComponent
              , A = r.disallowMultiple
              , k = r.menu
              , v = r.help;
            t("AnimatorSkeletal", (p = w(s),
            m = k("OopsFramework/Animator/AnimatorSkeletal （骨骼动画状态机）"),
            h = v("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12036279&doc_id=2873565"),
            d = g({
                type: l,
                tooltip: "动画切换过度时间"
            }),
            y(_ = A(_ = p(_ = m(_ = h((S = i((f = function(t) {
                function i() {
                    for (var i, e = arguments.length, o = new Array(e), r = 0; r < e; r++)
                        o[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(o)) || this,
                    a(i, "duration", S, n(i)),
                    i.cross_duration = 0,
                    i.current_time = 0,
                    i
                }
                e(i, t);
                var o = i.prototype;
                return o.onLoad = function() {
                    this.cross_duration = 1e3 * this.duration
                }
                ,
                o.playAnimation = function(t, i) {
                    t && (c.totalTime - this.current_time > this.cross_duration ? this._animation.crossFade(t, this.duration) : this._animation.play(t),
                    this.current_time = c.totalTime,
                    this._animState = this._animation.getState(t),
                    this._animState && (this._wrapModeMap.has(this._animState) || this._wrapModeMap.set(this._animState, this._animState.wrapMode),
                    this._animState.wrapMode = i ? 2 : 1))
                }
                ,
                i
            }(u)).prototype, "duration", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3
                }
            }),
            _ = f)) || _) || _) || _) || _) || _));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorSpine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorBase.ts"], (function(t) {
    var e, n, i, s, o;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            i = t._decorator,
            s = t.sp
        }
        , function(t) {
            o = t.default
        }
        ],
        execute: function() {
            var a;
            n._RF.push({}, "7fde8yJEfxMMqzjg+V4UVkT", "AnimatorSpine", void 0);
            var r = i.ccclass
              , p = (i.property,
            i.requireComponent)
              , l = i.disallowMultiple
              , h = i.menu
              , c = i.help;
            t("default", r(a = l(a = p(s.Skeleton)(a = h("OopsFramework/Animator/AnimatorSpine（Spine 状态机）")(a = c("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12036279&doc_id=2873565")(a = function(t) {
                function n() {
                    for (var e, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                        i[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(i)) || this)._spine = null,
                    e._completeListenerMap = new Map,
                    e._secondaryListenerMap = new Map,
                    e
                }
                e(n, t);
                var i = n.prototype;
                return i.start = function() {
                    this.PlayOnStart && !this._hasInit && (this._hasInit = !0,
                    this._spine = this.getComponent(s.Skeleton),
                    this._spine.setEventListener(this.onSpineEvent.bind(this)),
                    this._spine.setCompleteListener(this.onSpineComplete.bind(this)),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                i.onInit = function() {
                    this.PlayOnStart || this._hasInit || (this._hasInit = !0,
                    this.initArgs.apply(this, arguments),
                    this._spine = this.getComponent(s.Skeleton),
                    this._spine.setEventListener(this.onSpineEvent.bind(this)),
                    this._spine.setCompleteListener(this.onSpineComplete.bind(this)),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                i.getBone = function(t) {
                    return this._spine.findBone(t)
                }
                ,
                i.onSpineEvent = function(t, e) {
                    var n, i = t.animation ? e.data.name : "";
                    null == (n = this._animationPlayer) || n.onFrameEventCallback(i, this)
                }
                ,
                i.onSpineComplete = function(t) {
                    0 === t.trackIndex && this.onAnimFinished(),
                    this._completeListenerMap.forEach((function(e, n) {
                        e ? n.call(e, t) : n(t)
                    }
                    )),
                    this._secondaryListenerMap.forEach((function(e, n) {
                        t.trackIndex === e.TrackIndex && n.call(e, t)
                    }
                    ))
                }
                ,
                i.playAnimation = function(t, e) {
                    t ? this._spine.setAnimation(0, t, e) : this._spine.clearTrack(0)
                }
                ,
                i.scaleTime = function(t) {
                    t > 0 && (this._spine.timeScale = t)
                }
                ,
                i.addSecondaryListener = function(t, e) {
                    this._secondaryListenerMap.set(t, e)
                }
                ,
                i.addCompleteListener = function(t, e) {
                    void 0 === e && (e = null),
                    this._completeListenerMap.has(t) || this._completeListenerMap.set(t, e)
                }
                ,
                i.removeCompleteListener = function(t) {
                    this._completeListenerMap.delete(t)
                }
                ,
                i.clearCompleteListener = function() {
                    this._completeListenerMap.clear
                }
                ,
                n
            }(o)) || a) || a) || a) || a) || a);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorSpineSecondary.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorSpine.ts", "./AnimatorBase.ts"], (function(t) {
    var i, n, e, s, o, r, a, h, l;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            e = t.initializerDefineProperty,
            s = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            r = t._decorator,
            a = t.sp
        }
        , function(t) {
            h = t.default
        }
        , function(t) {
            l = t.default
        }
        ],
        execute: function() {
            var c, p, u, d, m, f, _;
            o._RF.push({}, "e47112s9c9Kwo8XQQ4KSW0c", "AnimatorSpineSecondary", void 0);
            var y = r.ccclass
              , A = r.property
              , S = r.requireComponent
              , g = r.menu
              , k = r.help;
            t("default", (c = S(a.Skeleton),
            p = g("OopsFramework/Animator/AnimatorSpine （Spine 次状态机）"),
            u = k("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12036279&doc_id=2873565"),
            d = A({
                tooltip: "动画播放的trackIndex，必须大于0"
            }),
            y(m = c(m = p(m = u((_ = i((f = function(t) {
                function i() {
                    for (var i, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(o)) || this,
                    e(i, "TrackIndex", _, s(i)),
                    i._main = null,
                    i._spine = null,
                    i
                }
                n(i, t);
                var o = i.prototype;
                return o.start = function() {
                    this.PlayOnStart && !this._hasInit && (this._hasInit = !0,
                    this._spine = this.getComponent(a.Skeleton),
                    this._main = this.getComponent(h),
                    this._main.addSecondaryListener(this.onAnimFinished, this),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                o.onInit = function() {
                    this.PlayOnStart || this._hasInit || (this._hasInit = !0,
                    this.initArgs.apply(this, arguments),
                    this._spine = this.getComponent(a.Skeleton),
                    this._main = this.getComponent(h),
                    this._main.addSecondaryListener(this.onAnimFinished, this),
                    null !== this.AssetRawUrl && this.initJson(this.AssetRawUrl.json))
                }
                ,
                o.playAnimation = function(t, i) {
                    t ? this._spine.setAnimation(this.TrackIndex, t, i) : this._spine.clearTrack(this.TrackIndex)
                }
                ,
                i
            }(l)).prototype, "TrackIndex", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            m = f)) || m) || m) || m) || m));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorTransition.ts"], (function(t) {
    var i, n, e;
    return {
        setters: [function(t) {
            i = t.createClass
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            e = t.default
        }
        ],
        execute: function() {
            n._RF.push({}, "bd2d1/E71JL1Jj3HzsYH82H", "AnimatorState", void 0);
            t("default", function() {
                function t(t, i) {
                    this._name = "",
                    this._motion = "",
                    this._loop = !1,
                    this._speed = 1,
                    this._multi = "",
                    this._transitions = [],
                    this._ac = null,
                    this._name = t.state,
                    this._motion = t.motion || "",
                    this._loop = t.loop || !1,
                    this._speed = t.speed || 1,
                    this._multi = t.multiplier || "",
                    this._ac = i;
                    for (var n = 0; n < t.transitions.length; n++) {
                        var s = new e(t.transitions[n],i);
                        s.isValid() && this._transitions.push(s)
                    }
                }
                return t.prototype.checkAndTrans = function() {
                    for (var t = 0; t < this._transitions.length; t++) {
                        var i = this._transitions[t];
                        if (i && i.check())
                            return void i.doTrans()
                    }
                }
                ,
                i(t, [{
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "motion",
                    get: function() {
                        return this._motion
                    }
                }, {
                    key: "loop",
                    get: function() {
                        return this._loop
                    }
                }, {
                    key: "multi",
                    get: function() {
                        return this._multi
                    }
                }, {
                    key: "speed",
                    get: function() {
                        return this._speed
                    },
                    set: function(t) {
                        this._speed = t
                    }
                }]),
                t
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorStateLogic.ts", ["cc"], (function(t) {
    var n;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "b06fbd3UdNKvooAUeDi9UTc", "AnimatorStateLogic", void 0);
            t("AnimatorStateLogic", function() {
                function t() {}
                var n = t.prototype;
                return n.onEntry = function() {}
                ,
                n.onUpdate = function() {}
                ,
                n.onExit = function() {}
                ,
                t
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimatorTransition.ts", ["cc", "./AnimatorCondition.ts"], (function(t) {
    var i, n, e;
    return {
        setters: [function(t) {
            i = t.cclegacy
        }
        , function(t) {
            n = t.ParamType,
            e = t.default
        }
        ],
        execute: function() {
            i._RF.push({}, "39224xRIkpEG7hvPJlKoGDy", "AnimatorTransition", void 0);
            t("default", function() {
                function t(t, i) {
                    this._toStateName = "",
                    this._hasExitTime = !1,
                    this._conditions = [],
                    this._ac = null,
                    this._toStateName = t.toState,
                    this._hasExitTime = t.hasExitTime,
                    this._ac = i;
                    for (var n = 0; n < t.conditions.length; n++) {
                        var a = new e(t.conditions[n],i);
                        this._conditions.push(a)
                    }
                }
                var i = t.prototype;
                return i.isValid = function() {
                    return this._hasExitTime || this._conditions.length > 0
                }
                ,
                i.check = function() {
                    if (this._toStateName === this._ac.curState.name)
                        return !1;
                    if (this._hasExitTime && (this._ac.curState !== this._ac.animCompleteState || !this._ac.animComplete))
                        return !1;
                    for (var t = 0; t < this._conditions.length; t++)
                        if (!this._conditions[t].check())
                            return !1;
                    return !0
                }
                ,
                i.doTrans = function() {
                    this._hasExitTime && (this._ac.animComplete = !1);
                    for (var t = 0; t < this._conditions.length; t++) {
                        var i = this._conditions[t].getParamType()
                          , e = this._conditions[t].getParamName();
                        i === n.TRIGGER ? this._ac.params.resetTrigger(e) : i === n.AUTO_TRIGGER && this._ac.params.resetAutoTrigger(e)
                    }
                    this._ac.changeState(this._toStateName)
                }
                ,
                t
            }());
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ArrayExt.ts", ["cc"], (function() {
    var t;
    return {
        setters: [function(r) {
            t = r.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "2696fVV0U1BcotwtuSW7qe9", "ArrayExt", void 0),
            !Array.prototype.__cc_extended && Object.defineProperties(Array.prototype, {
                remove: {
                    value: function(t) {
                        if ("function" == typeof t)
                            for (var r = this.length - 1; r > -1; --r)
                                t(this[r], r, this) && this.splice(r, 1);
                        else
                            for (var n = this.length - 1; n > -1; --n)
                                this[n] === t && this.splice(n, 1);
                        return this
                    }
                },
                removeOne: {
                    value: function(t) {
                        if ("function" == typeof t) {
                            for (var r = 0; r < this.length; ++r)
                                if (t(this[r], r, this))
                                    return this.splice(r, 1),
                                    this
                        } else
                            for (var n = 0; n < this.length; ++n)
                                if (this[n] === t)
                                    return this.splice(n, 1),
                                    this;
                        return this
                    }
                },
                random: {
                    value: function() {
                        return this[Math.floor(Math.random() * this.length)]
                    }
                },
                fastRemoveAt: {
                    value: function(t) {
                        var r = this.length;
                        if (t < 0 || t >= r)
                            return null;
                        var n = this[t];
                        return this[t] = this[r - 1],
                        this.length = r - 1,
                        n
                    }
                },
                fastRemove: {
                    value: function(t) {
                        function r(r) {
                            return t.apply(this, arguments)
                        }
                        return r.toString = function() {
                            return t.toString()
                        }
                        ,
                        r
                    }((function(t) {
                        var r = this.indexOf(t);
                        return r >= 0 && (this[r] = this[this.length - 1],
                        --this.length,
                        !0)
                    }
                    ))
                },
                first: {
                    value: function() {
                        return this.length ? this[0] : null
                    }
                },
                last: {
                    value: function() {
                        return this.length ? this[this.length - 1] : null
                    }
                },
                max: {
                    value: function(t) {
                        if (!this.length)
                            return null;
                        if ("function" == typeof t) {
                            for (var r = t(this[0], 0, this), n = 1; n < this.length; ++n) {
                                var i = t(this[n], n, this);
                                r = i > r ? i : r
                            }
                            return r
                        }
                        return this.reduce((function(t, r) {
                            return (n = t) > (i = r) ? n : i;
                            var n, i
                        }
                        ))
                    }
                },
                min: {
                    value: function(t) {
                        if (!this.length)
                            return null;
                        if ("function" == typeof t) {
                            for (var r = t(this[0], 0, this), n = 1; n < this.length; ++n) {
                                var i = t(this[n], n, this);
                                r = i < r ? i : r
                            }
                            return r
                        }
                        return this.reduce((function(t, r) {
                            return (n = t) < (i = r) ? n : i;
                            var n, i
                        }
                        ))
                    }
                },
                distinct: {
                    value: function() {
                        return this.filter((function(t, r, n) {
                            return n.indexOf(t) === r
                        }
                        ))
                    }
                },
                filterIndex: {
                    value: function(t) {
                        for (var r = [], n = 0; n < this.length; ++n)
                            t(this[n], n, this) && r.push(n);
                        return r
                    }
                },
                count: {
                    value: function(t) {
                        for (var r = 0, n = 0; n < this.length; ++n)
                            t(this[n], n, this) && ++r;
                        return r
                    }
                },
                sum: {
                    value: function(t) {
                        for (var r = 0, n = 0; n < this.length; ++n)
                            r += t ? t(this[n], n, this) : this[n];
                        return r
                    }
                },
                average: {
                    value: function(t) {
                        return this.sum(t) / this.length
                    }
                },
                orderBy: {
                    value: function() {
                        for (var t = [], r = 0; r < arguments.length; r++)
                            t[r] = arguments[r];
                        return this.slice().sort((function(r, n) {
                            for (var i = 0; i < t.length; ++i) {
                                var e = t[i](r)
                                  , u = t[i](n);
                                if (e > u)
                                    return 1;
                                if (e < u)
                                    return -1
                            }
                            return 0
                        }
                        ))
                    }
                },
                orderByDesc: {
                    value: function() {
                        for (var t = [], r = 0; r < arguments.length; r++)
                            t[r] = arguments[r];
                        return this.slice().sort((function(r, n) {
                            for (var i = 0; i < t.length; ++i) {
                                var e = t[i](r)
                                  , u = t[i](n);
                                if (e > u)
                                    return -1;
                                if (e < u)
                                    return 1
                            }
                            return 0
                        }
                        ))
                    }
                },
                binarySearch: {
                    value: function(t) {
                        function r(r, n) {
                            return t.apply(this, arguments)
                        }
                        return r.toString = function() {
                            return t.toString()
                        }
                        ,
                        r
                    }((function(t, r) {
                        for (var n = 0, i = this.length - 1; n <= i; ) {
                            var e = (i + n) / 2 | 0
                              , u = r ? r(this[e]) : this[e];
                            if (t === u)
                                return e;
                            t > u ? n = e + 1 : t < u && (i = e - 1)
                        }
                        return -1
                    }
                    ))
                },
                binaryInsert: {
                    value: function(t, r, n) {
                        "boolean" == typeof r && (n = r,
                        r = void 0);
                        for (var i = 0, e = this.length - 1, u = NaN, h = r ? r(t) : t; i <= e; ) {
                            u = (e + i) / 2 | 0;
                            var s = r ? r(this[u]) : this[u];
                            if (h === s) {
                                if (n)
                                    return u;
                                break
                            }
                            h > s ? i = u + 1 : h < s && (e = u - 1)
                        }
                        var f = i > u ? u + 1 : u;
                        return this.splice(f, 0, t),
                        f
                    }
                },
                binaryDistinct: {
                    value: function(t) {
                        return this.filter((function(r, n, i) {
                            return i.binarySearch(r, t) === n
                        }
                        ))
                    }
                },
                findLast: {
                    value: function(t) {
                        for (var r = this.length - 1; r > -1; --r)
                            if (t(this[r], r, this))
                                return this[r]
                    }
                },
                findLastIndex: {
                    value: function(t) {
                        for (var r = this.length - 1; r > -1; --r)
                            if (t(this[r], r, this))
                                return r;
                        return -1
                    }
                },
                groupBy: {
                    value: function(t) {
                        var r = this.reduce((function(r, n) {
                            var i = t(n);
                            return r[i] || (r[i] = []),
                            r[i].push(n),
                            r
                        }
                        ), {});
                        return Object.keys(r).map((function(t) {
                            var n = r[t];
                            return n.key = t,
                            n
                        }
                        ))
                    }
                },
                __cc_extended: {
                    value: !0
                }
            }),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ArrayUtil.ts", ["cc"], (function(r) {
    var n;
    return {
        setters: [function(r) {
            n = r.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "4613b2zY/dMSaGPBGo6eti3", "ArrayUtil", void 0);
            r("ArrayUtil", function() {
                function r() {}
                return r.noRepeated = function(r) {
                    for (var n = [r[0]], t = 1; t < r.length; t++) {
                        for (var e = !1, o = 0; o < n.length; o++)
                            if (r[t] == n[o]) {
                                e = !0;
                                break
                            }
                        e || n.push(r[t])
                    }
                    return n
                }
                ,
                r.copy2DArray = function(r) {
                    for (var n = [], t = 0; t < r.length; t++)
                        n.push(r[t].concat());
                    return n
                }
                ,
                r.fisherYatesShuffle = function(r) {
                    for (var n = r.length; n; ) {
                        var t = Math.floor(Math.random() * n--)
                          , e = r[n];
                        r[n] = r[t],
                        r[t] = e
                    }
                    return r
                }
                ,
                r.confound = function(r) {
                    return r.slice().sort((function() {
                        return Math.random() - .5
                    }
                    ))
                }
                ,
                r.flattening = function(r) {
                    for (; r.some((function(r) {
                        return Array.isArray(r)
                    }
                    )); )
                        r = [].concat.apply([], r);
                    return r
                }
                ,
                r.removeItem = function(r, n) {
                    for (var t = r.concat(), e = 0; e < t.length; e++) {
                        if (n == t[e]) {
                            r.splice(e, 1);
                            break
                        }
                    }
                }
                ,
                r.combineArrays = function(r, n) {
                    return [].concat(r, n)
                }
                ,
                r.getRandomValueInArray = function(r) {
                    return r[Math.floor(Math.random() * r.length)]
                }
                ,
                r
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AsyncQueue.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(s) {
    var n, i, e, u;
    return {
        setters: [function(s) {
            n = s.createClass
        }
        , function(s) {
            i = s.cclegacy,
            e = s.warn,
            u = s.log
        }
        ],
        execute: function() {
            i._RF.push({}, "8c48bBN521JzIxhITJunFji", "AsyncQueue", void 0),
            s("AsyncQueue", function() {
                function s() {
                    this._runningAsyncTask = null,
                    this._queues = [],
                    this._isProcessingTaskUUID = 0,
                    this._enable = !0,
                    this.complete = null
                }
                var i = s.prototype;
                return i.push = function(n, i) {
                    void 0 === i && (i = null);
                    var e = s._$uuid_count++;
                    return this._queues.push({
                        uuid: e,
                        callbacks: [n],
                        params: i
                    }),
                    e
                }
                ,
                i.pushMulti = function(n) {
                    for (var i = s._$uuid_count++, e = arguments.length, u = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
                        u[t - 1] = arguments[t];
                    return this._queues.push({
                        uuid: i,
                        callbacks: u,
                        params: n
                    }),
                    i
                }
                ,
                i.remove = function(s) {
                    var n;
                    if ((null == (n = this._runningAsyncTask) ? void 0 : n.uuid) !== s) {
                        for (var i = 0; i < this._queues.length; i++)
                            if (this._queues[i].uuid === s) {
                                this._queues.splice(i, 1);
                                break
                            }
                    } else
                        e("正在执行的任务不可以移除")
                }
                ,
                i.clear = function() {
                    this._queues = [],
                    this._isProcessingTaskUUID = 0,
                    this._runningAsyncTask = null
                }
                ,
                i.step = function() {
                    this.isProcessing && this.next(this._isProcessingTaskUUID)
                }
                ,
                i.play = function(s) {
                    var n = this;
                    if (void 0 === s && (s = null),
                    !this.isProcessing && this._enable) {
                        var i = this._queues.shift();
                        if (i) {
                            this._runningAsyncTask = i;
                            var e = i.uuid;
                            this._isProcessingTaskUUID = e;
                            var u = i.callbacks;
                            if (1 == u.length) {
                                u[0]((function(s) {
                                    void 0 === s && (s = null),
                                    n.next(e, s)
                                }
                                ), i.params, s)
                            } else
                                for (var t = u.length, r = [], c = function(s) {
                                    void 0 === s && (s = null),
                                    --t,
                                    r.push(s || null),
                                    0 === t && n.next(e, r)
                                }, l = t, a = 0; a < l; a++)
                                    u[a](c, i.params, s)
                        } else
                            this._isProcessingTaskUUID = 0,
                            this._runningAsyncTask = null,
                            this.complete && this.complete(s)
                    }
                }
                ,
                i.yieldTime = function(s, n) {
                    void 0 === n && (n = null);
                    this.push((function(i, e, u) {
                        var t = setTimeout((function() {
                            clearTimeout(t),
                            n && n(),
                            i(u)
                        }
                        ), s)
                    }
                    ), {
                        des: "AsyncQueue.yieldTime"
                    })
                }
                ,
                i.next = function(s, n) {
                    void 0 === n && (n = null),
                    this._isProcessingTaskUUID === s ? (this._isProcessingTaskUUID = 0,
                    this._runningAsyncTask = null,
                    this.play(n)) : this._runningAsyncTask && u(this._runningAsyncTask)
                }
                ,
                s.excuteTimes = function(s, n) {
                    void 0 === n && (n = null);
                    var i = s;
                    return function() {
                        0 === --i && n && n()
                    }
                }
                ,
                n(s, [{
                    key: "queues",
                    get: function() {
                        return this._queues
                    }
                }, {
                    key: "enable",
                    get: function() {
                        return this._enable
                    },
                    set: function(s) {
                        this._enable !== s && (this._enable = s,
                        s && this.size > 0 && this.play())
                    }
                }, {
                    key: "size",
                    get: function() {
                        return this._queues.length
                    }
                }, {
                    key: "isProcessing",
                    get: function() {
                        return this._isProcessingTaskUUID > 0
                    }
                }, {
                    key: "isStop",
                    get: function() {
                        return !(this._queues.length > 0) && !this.isProcessing
                    }
                }, {
                    key: "runningParams",
                    get: function() {
                        return this._runningAsyncTask ? this._runningAsyncTask.params : null
                    }
                }]),
                s
            }())._$uuid_count = 1,
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var o, e, n, c;
    return {
        setters: [function(t) {
            o = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy,
            n = t._decorator,
            c = t.AudioSource
        }
        ],
        execute: function() {
            var i;
            e._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", void 0);
            var r = n.ccclass;
            t("AudioEffect", r("AudioEffect")(i = function(t) {
                function e() {
                    for (var o, e = arguments.length, n = new Array(e), c = 0; c < e; c++)
                        n[c] = arguments[c];
                    return (o = t.call.apply(t, [this].concat(n)) || this).onComplete = null,
                    o
                }
                o(e, t);
                var n = e.prototype;
                return n.start = function() {
                    this.node.on(c.EventType.ENDED, this.onAudioEnded, this)
                }
                ,
                n.onAudioEnded = function() {
                    this.onComplete && this.onComplete()
                }
                ,
                e
            }(c)) || i);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioEffectPool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./ResLoader.ts", "./AudioEffect.ts"], (function(e) {
    var t, n, o, s, i, r, u, c, f, a;
    return {
        setters: [function(e) {
            t = e.createClass,
            n = e.asyncToGenerator,
            o = e.regeneratorRuntime
        }
        , function(e) {
            s = e.cclegacy,
            i = e.AudioClip,
            r = e.NodePool,
            u = e.Node
        }
        , function(e) {
            c = e.oops
        }
        , function(e) {
            f = e.resLoader
        }
        , function(e) {
            a = e.AudioEffect
        }
        ],
        execute: function() {
            s._RF.push({}, "01278BDjrtCr4CBpmO5DZlN", "AudioEffectPool", void 0);
            e("AudioEffectPool", function() {
                function e() {
                    this._switch = !0,
                    this._volume = 1,
                    this.pool = new r,
                    this.effects = new Map,
                    this.res = new Map,
                    this._aeId = 0
                }
                var s = e.prototype;
                return s.getAeId = function() {
                    return 3e4 == this._aeId && (this._aeId = 1),
                    this._aeId++,
                    this._aeId
                }
                ,
                s.load = function() {
                    var e = n(o().mark((function e(t, s, r) {
                        var l = this;
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return void 0 === s && (s = f.defaultBundleName),
                                    e.abrupt("return", new Promise(n(o().mark((function e(n, h) {
                                        var p, d, v, m, _, w;
                                        return o().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (l.switch) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", n(-1));
                                                case 2:
                                                    if (!(t instanceof i)) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    p = t,
                                                    e.next = 13;
                                                    break;
                                                case 6:
                                                    if (null != (p = f.get(t, i, s))) {
                                                        e.next = 13;
                                                        break
                                                    }
                                                    return null == (d = l.res.get(s)) ? (d = [],
                                                    l.res.set(s, d),
                                                    d.push(t)) : -1 == d.indexOf(t) && d.push(t),
                                                    e.next = 12,
                                                    f.loadAsync(s, t, i);
                                                case 12:
                                                    p = e.sent;
                                                case 13:
                                                    if (p.isValid) {
                                                        e.next = 16;
                                                        break
                                                    }
                                                    return n(-1),
                                                    e.abrupt("return");
                                                case 16:
                                                    v = l.getAeId(),
                                                    m = t instanceof i ? t.uuid : s + "_" + t,
                                                    m += "_" + v,
                                                    w = null,
                                                    0 == l.pool.size() ? ((w = new u).name = "AudioEffect",
                                                    w.parent = c.audio.node,
                                                    _ = w.addComponent(a)) : (w = l.pool.get(),
                                                    _ = w.getComponent(a)),
                                                    _.onComplete = function() {
                                                        l.put(v, t, s),
                                                        r && r()
                                                    }
                                                    ,
                                                    l.effects.set(m, _),
                                                    _.volume = l.volume,
                                                    _.clip = p,
                                                    _.play(),
                                                    n(v);
                                                case 27:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )))));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                s.put = function(e, t, n) {
                    var o;
                    void 0 === n && (n = f.defaultBundleName),
                    o = t instanceof i ? t.uuid : n + "_" + t,
                    o += "_" + e;
                    var s = this.effects.get(o);
                    s && s.clip && (this.effects.delete(o),
                    s.stop(),
                    this.pool.put(s.node))
                }
                ,
                s.release = function() {
                    this.effects.forEach((function(e) {
                        e.node.destroy()
                    }
                    )),
                    this.effects.clear(),
                    this.res.forEach((function(e, t) {
                        e.forEach((function(e) {
                            return f.release(e, t)
                        }
                        ))
                    }
                    )),
                    this.pool.clear()
                }
                ,
                s.stop = function() {
                    this.effects.forEach((function(e) {
                        e.stop()
                    }
                    ))
                }
                ,
                s.play = function() {
                    this.switch && this.effects.forEach((function(e) {
                        e.play()
                    }
                    ))
                }
                ,
                s.pause = function() {
                    this.switch && this.effects.forEach((function(e) {
                        e.pause()
                    }
                    ))
                }
                ,
                t(e, [{
                    key: "switch",
                    get: function() {
                        return this._switch
                    },
                    set: function(e) {
                        this._switch = e,
                        e && this.stop()
                    }
                }, {
                    key: "volume",
                    get: function() {
                        return this._volume
                    },
                    set: function(e) {
                        this._volume = e,
                        this.effects.forEach((function(t) {
                            t.volume = e
                        }
                        ))
                    }
                }]),
                e
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./AudioEffectPool.ts", "./AudioMusic.ts"], (function(t) {
    var s, i, e, c, u, o, n;
    return {
        setters: [function(t) {
            s = t.inheritsLoose,
            i = t.createClass
        }
        , function(t) {
            e = t.cclegacy,
            c = t.Component
        }
        , function(t) {
            u = t.oops
        }
        , function(t) {
            o = t.AudioEffectPool
        }
        , function(t) {
            n = t.AudioMusic
        }
        ],
        execute: function() {
            e._RF.push({}, "252f0z+vPNL8Y/jsLYmomtw", "AudioManager", void 0);
            var h = "game_audio";
            t("AudioManager", function(t) {
                function e() {
                    for (var s, i = arguments.length, e = new Array(i), c = 0; c < i; c++)
                        e[c] = arguments[c];
                    return (s = t.call.apply(t, [this].concat(e)) || this).music = null,
                    s.effect = new o,
                    s.local_data = {},
                    s
                }
                s(e, t);
                var c = e.prototype;
                return c.setMusicComplete = function(t) {
                    void 0 === t && (t = null),
                    this.music.onComplete = t
                }
                ,
                c.playMusic = function(t, s, i) {
                    this.music.switch && (this.music.loop = !1,
                    this.music.load(t, s, i).then())
                }
                ,
                c.playMusicLoop = function(t, s) {
                    this.music.switch && (this.music.loop = !0,
                    this.music.load(t, null, s).then())
                }
                ,
                c.playMusicLoopRemote = function(t) {
                    this.music.switch && (this.music.loop = !0,
                    this.music.loadRemote(t, null).then())
                }
                ,
                c.stopMusic = function() {
                    this.music.switch && this.music.playing && this.music.stop()
                }
                ,
                c.playEffect = function(t, s, i) {
                    return this.effect.load(t, s, i)
                }
                ,
                c.putEffect = function(t, s, i) {
                    this.effect.put(t, s, i)
                }
                ,
                c.resumeAll = function() {
                    !this.music.playing && this.music.progress > 0 && this.music.play(),
                    this.effect.play()
                }
                ,
                c.pauseAll = function() {
                    this.music.playing && this.music.pause(),
                    this.effect.pause()
                }
                ,
                c.stopAll = function() {
                    this.music.stop(),
                    this.effect.stop()
                }
                ,
                c.save = function() {
                    this.local_data.volume_music = this.music.volume,
                    this.local_data.volume_effect = this.effect.volume,
                    this.local_data.switch_music = this.music.switch,
                    this.local_data.switch_effect = this.effect.switch,
                    u.storage.set(h, this.local_data)
                }
                ,
                c.load = function() {
                    if (this.music = this.getComponent(n) || this.addComponent(n),
                    this.local_data = u.storage.getJson(h),
                    this.local_data)
                        try {
                            this.setState()
                        } catch (t) {
                            this.setStateDefault()
                        }
                    else
                        this.setStateDefault()
                }
                ,
                c.setState = function() {
                    this.music.volume = this.local_data.volume_music,
                    this.effect.volume = this.local_data.volume_effect,
                    this.music.switch = this.local_data.switch_music,
                    this.effect.switch = this.local_data.switch_effect
                }
                ,
                c.setStateDefault = function() {
                    this.local_data = {},
                    this.music.volume = 1,
                    this.effect.volume = 1,
                    this.music.switch = !0,
                    this.effect.switch = !0
                }
                ,
                i(e, [{
                    key: "progressMusic",
                    get: function() {
                        return this.music.progress
                    },
                    set: function(t) {
                        this.music.progress = t
                    }
                }, {
                    key: "volumeMusic",
                    get: function() {
                        return this.music.volume
                    },
                    set: function(t) {
                        this.music.volume = t,
                        this.save()
                    }
                }, {
                    key: "switchMusic",
                    get: function() {
                        return this.music.switch
                    },
                    set: function(t) {
                        this.music.switch = t,
                        t || this.music.stop(),
                        this.save()
                    }
                }, {
                    key: "volumeEffect",
                    get: function() {
                        return this.effect.volume
                    },
                    set: function(t) {
                        this.effect.volume = t,
                        this.save()
                    }
                }, {
                    key: "switchEffect",
                    get: function() {
                        return this.effect.switch
                    },
                    set: function(t) {
                        this.effect.switch = t,
                        t || this.effect.stop(),
                        this.save()
                    }
                }]),
                e
            }(c));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioMusic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts"], (function(t) {
    var e, n, i, s, r, o, u, a, l, c;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            n = t.createClass,
            i = t.asyncToGenerator,
            s = t.regeneratorRuntime
        }
        , function(t) {
            r = t.cclegacy,
            o = t._decorator,
            u = t.AudioSource,
            a = t.AudioClip,
            l = t.assetManager
        }
        , function(t) {
            c = t.resLoader
        }
        ],
        execute: function() {
            var h;
            r._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", void 0);
            var d = o.ccclass;
            o.menu,
            t("AudioMusic", d("AudioMusic")(h = function(t) {
                function r() {
                    for (var e, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                        i[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(i)) || this).switch = !0,
                    e.onComplete = null,
                    e._progress = 0,
                    e._isLoading = !1,
                    e._nextBundleName = null,
                    e._nowUrl = null,
                    e._nextUrl = null,
                    e
                }
                e(r, t);
                var o = r.prototype;
                return o.start = function() {
                    this.node.on(u.EventType.ENDED, this.onAudioEnded, this)
                }
                ,
                o.onAudioEnded = function() {
                    this.onComplete && this.onComplete()
                }
                ,
                o.load = function() {
                    var t = i(s().mark((function t(e, n, i) {
                        var r;
                        return s().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (void 0 === i && (i = c.defaultBundleName),
                                    !this._isLoading) {
                                        t.next = 5;
                                        break
                                    }
                                    return this._nextBundleName = i,
                                    this._nextUrl = e,
                                    t.abrupt("return");
                                case 5:
                                    return this._isLoading = !0,
                                    t.next = 8,
                                    c.loadAsync(i, e, a);
                                case 8:
                                    (r = t.sent) && (this._isLoading = !1,
                                    null != this._nextUrl ? (this.load(this._nextUrl, n, this._nextBundleName),
                                    this._nextBundleName = this._nextUrl = null) : (n && n(),
                                    this.playing && this.stop(),
                                    this.release(),
                                    this.clip = r,
                                    this.play()));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e, n, i) {
                        return t.apply(this, arguments)
                    }
                }(),
                o.loadRemote = function() {
                    var t = i(s().mark((function t(e, n) {
                        var i, r = this;
                        return s().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this._isLoading) {
                                        t.next = 4;
                                        break
                                    }
                                    return this._nextUrl = e,
                                    this._nextBundleName = null,
                                    t.abrupt("return");
                                case 4:
                                    i = window.BASE_URL + "/" + e,
                                    this._isLoading = !0,
                                    this._nowUrl == e ? (n && n(),
                                    this.play(),
                                    console.log("音频加载成功"),
                                    this._isLoading = !1) : l.loadRemote(i, {
                                        type: "audio"
                                    }, (function(t, s) {
                                        t ? console.error("[AudioMusic] 资源不存在 ", t) : (r._nowUrl = e,
                                        window.REMOTE_URL[i] = s,
                                        console.log("音频加载成功"),
                                        r._isLoading = !1,
                                        null != r._nextUrl ? (r.loadRemote(r._nextUrl, n),
                                        r._nextBundleName = r._nextUrl = null) : (n && n(),
                                        r.playing && r.stop(),
                                        r.release(),
                                        r.clip = s,
                                        r.play()))
                                    }
                                    ));
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                o.release = function() {
                    this.clip && (this.stop(),
                    this.clip.decRef(),
                    this.clip = null)
                }
                ,
                n(r, [{
                    key: "progress",
                    get: function() {
                        return this.duration > 0 && (this._progress = this.currentTime / this.duration),
                        this._progress
                    },
                    set: function(t) {
                        this._progress = t,
                        this.currentTime = t * this.duration
                    }
                }]),
                r
            }(u)) || h);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BehaviorTree.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BTreeNode.ts"], (function(t) {
    var e, r, i;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            r = t.cclegacy
        }
        , function(t) {
            i = t.BTreeNode
        }
        ],
        execute: function() {
            r._RF.push({}, "22a91RP3fNG/rWWAXlmM4BT", "BehaviorTree", void 0);
            var s = 0;
            t("BehaviorTree", function() {
                function t(t, e) {
                    this.title = void 0,
                    this._root = void 0,
                    this._current = void 0,
                    this._started = !1,
                    this._blackboard = void 0,
                    s += 1,
                    this.title = t.constructor.name + "(btree_" + s + ")",
                    this._root = t,
                    this._blackboard = e
                }
                var r = t.prototype;
                return r.setObject = function(t) {
                    this._blackboard = t
                }
                ,
                r.run = function() {
                    this._started && console.error("行为树【" + this.title + "】未调用步骤，在最后一次调用步骤时有一个任务未完成"),
                    this._started = !0;
                    var e = t.getNode(this._root);
                    this._current = e,
                    e.setControl(this),
                    e.start(this._blackboard),
                    e.run(this._blackboard)
                }
                ,
                r.running = function(t) {
                    this._started = !1
                }
                ,
                r.success = function() {
                    this._current.end(this._blackboard),
                    this._started = !1
                }
                ,
                r.fail = function() {
                    this._current.end(this._blackboard),
                    this._started = !1
                }
                ,
                t.register = function(t, e) {
                    this._registeredNodes.set(t, e)
                }
                ,
                t.getNode = function(t) {
                    var e = t instanceof i ? t : this._registeredNodes.get(t);
                    if (!e)
                        throw new Error("无法找到节点【" + t + "】，可能它没有注册过");
                    return e
                }
                ,
                e(t, [{
                    key: "started",
                    get: function() {
                        return this._started
                    }
                }]),
                t
            }())._registeredNodes = new Map,
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BhvButtonGroup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
    var t, i, e, r, o, a, l, u, s, p, c, b;
    return {
        setters: [function(n) {
            t = n.applyDecoratedDescriptor,
            i = n.inheritsLoose,
            e = n.initializerDefineProperty,
            r = n.assertThisInitialized
        }
        , function(n) {
            o = n.cclegacy,
            a = n._decorator,
            l = n.Enum,
            u = n.Button,
            s = n.SpriteFrame,
            p = n.EventHandler,
            c = n.Component,
            b = n.color
        }
        ],
        execute: function() {
            var f, m, v, h, d, y, E, C, g, T, S, z, L, w, R, I, D, N, _, H, O, B, P, A, G, M, k, x, F, X, J;
            o._RF.push({}, "41df676L55LvJ52uxkQpfxJ", "BhvButtonGroup", void 0);
            var U = a.ccclass
              , j = a.property
              , Q = a.menu
              , V = function(n) {
                return n[n.CHILDREN_INDEX = 0] = "CHILDREN_INDEX",
                n[n.CHILDREN_NAME = 1] = "CHILDREN_NAME",
                n
            }(V || {});
            n("BhvButtonGroup", (f = Q("OopsFramework/UI/Button Group （按钮组控制）"),
            m = j({
                type: l(u.Transition)
            }),
            v = j({
                visible: function() {
                    return this.transition === u.Transition.COLOR
                }
            }),
            h = j({
                visible: function() {
                    return this.transition === u.Transition.COLOR
                }
            }),
            d = j({
                visible: function() {
                    return this.transition === u.Transition.COLOR
                }
            }),
            y = j({
                visible: function() {
                    return this.transition === u.Transition.COLOR
                }
            }),
            E = j({
                type: s,
                visible: function() {
                    return this.transition === u.Transition.SPRITE
                }
            }),
            C = j({
                type: s,
                visible: function() {
                    return this.transition === u.Transition.SPRITE
                }
            }),
            g = j({
                type: s,
                visible: function() {
                    return this.transition === u.Transition.SPRITE
                }
            }),
            T = j({
                type: s,
                visible: function() {
                    return this.transition === u.Transition.SPRITE
                }
            }),
            S = j({
                visible: function() {
                    return this.transition === u.Transition.SCALE || this.transition === u.Transition.COLOR
                }
            }),
            z = j({
                visible: function() {
                    return this.transition === u.Transition.SCALE
                }
            }),
            L = j({
                type: l(V)
            }),
            w = j({
                type: [p]
            }),
            R = j({
                tooltip: "规避3.x引擎BUG，EventHandler.component位为空导致找不到触发事件的脚本名的问题",
                readonly: !0
            }),
            U(I = f((N = t((D = function(n) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                        o[a] = arguments[a];
                    return t = n.call.apply(n, [this].concat(o)) || this,
                    e(t, "transition", N, r(t)),
                    e(t, "hoverColor", _, r(t)),
                    e(t, "normalColor", H, r(t)),
                    e(t, "pressedColor", O, r(t)),
                    e(t, "disabledColor", B, r(t)),
                    e(t, "normalSprite", P, r(t)),
                    e(t, "pressedSprite", A, r(t)),
                    e(t, "hoverSprite", G, r(t)),
                    e(t, "disabledSprite", M, r(t)),
                    e(t, "duration", k, r(t)),
                    e(t, "zoomScale", x, r(t)),
                    e(t, "paramType", F, r(t)),
                    e(t, "touchEvents", X, r(t)),
                    e(t, "EventHandler_component", J, r(t)),
                    t
                }
                return i(t, n),
                t.prototype.onLoad = function() {
                    var n = this;
                    this.node.children.forEach((function(t, i) {
                        var e = t.getComponent(u);
                        null == e && (e = t.addComponent(u)),
                        n.touchEvents.forEach((function(r) {
                            var o = new p;
                            o.component = "" == r.component ? n.EventHandler_component : r.component,
                            o.handler = r.handler,
                            o.target = r.target,
                            n.paramType === V.CHILDREN_INDEX ? o.customEventData = i.toString() : o.customEventData = t.name,
                            e.clickEvents.push(o)
                        }
                        ))
                    }
                    ))
                }
                ,
                t
            }(c)).prototype, "transition", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return u.Transition.NONE
                }
            }),
            _ = t(D.prototype, "hoverColor", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return b(255, 255, 255)
                }
            }),
            H = t(D.prototype, "normalColor", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return b(214, 214, 214)
                }
            }),
            O = t(D.prototype, "pressedColor", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return b(211, 211, 211)
                }
            }),
            B = t(D.prototype, "disabledColor", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return b(124, 124, 124)
                }
            }),
            P = t(D.prototype, "normalSprite", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            A = t(D.prototype, "pressedSprite", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = t(D.prototype, "hoverSprite", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = t(D.prototype, "disabledSprite", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = t(D.prototype, "duration", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            x = t(D.prototype, "zoomScale", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1.1
                }
            }),
            F = t(D.prototype, "paramType", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return V.CHILDREN_INDEX
                }
            }),
            X = t(D.prototype, "touchEvents", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            J = t(D.prototype, "EventHandler_component", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "VMModify"
                }
            }),
            I = D)) || I) || I));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BhvFrameIndex.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, r, n, i, o, s, a, p, u, c, l, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            o = e.createClass
        }
        , function(e) {
            s = e.cclegacy,
            a = e._decorator,
            p = e.Sprite,
            u = e.SpriteFrame,
            c = e.CCInteger,
            l = e.error,
            d = e.Component
        }
        ],
        execute: function() {
            var h, m, f, x, y, F, v, g;
            s._RF.push({}, "c238ewfJ2VJnZ8Gb8YQs5Ts", "BhvFrameIndex", void 0);
            var I = a.ccclass
              , b = a.property
              , _ = a.executeInEditMode
              , w = a.requireComponent
              , C = a.menu;
            e("BhvFrameIndex", (h = w(p),
            m = C("OopsFramework/UI/Frame Index （图片切换）"),
            f = b({
                type: [u],
                tooltip: "sprite将会用到帧图片"
            }),
            x = b({
                type: c,
                tooltip: "当前显示的帧图"
            }),
            I(y = _(y = h(y = m((v = t((F = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                        o[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(t, "spriteFrames", v, i(t)),
                    n(t, "_index", g, i(t)),
                    t
                }
                r(t, e);
                var s = t.prototype;
                return s.setName = function(e) {
                    var t = this.spriteFrames.findIndex((function(t) {
                        return t.name == e
                    }
                    ));
                    t < 0 && l("frameIndex 设置了不存在的name:", e),
                    this.index = t || 0
                }
                ,
                s.random = function(e, t) {
                    if (this.spriteFrames) {
                        var r = this.spriteFrames.length;
                        (null == e || e < 0) && (e = 0),
                        (null == t || t > r) && (t = r),
                        this.index = Math.floor(Math.random() * (t - e) + e)
                    }
                }
                ,
                s.next = function() {
                    this.index++
                }
                ,
                s.previous = function() {
                    this.index--
                }
                ,
                o(t, [{
                    key: "index",
                    get: function() {
                        return this._index
                    },
                    set: function(e) {
                        e < 0 || (this._index = e % this.spriteFrames.length,
                        this.node.getComponent(p).spriteFrame = this.spriteFrames[this._index])
                    }
                }]),
                t
            }(d)).prototype, "spriteFrames", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [null]
                }
            }),
            t(F.prototype, "index", [x], Object.getOwnPropertyDescriptor(F.prototype, "index"), F.prototype),
            g = t(F.prototype, "_index", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            y = F)) || y) || y) || y) || y));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BhvRollNumber.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, i, r, l, a, o, n, u, s, c, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            r = t.initializerDefineProperty,
            l = t.assertThisInitialized,
            a = t.createClass
        }
        , function(t) {
            o = t.cclegacy,
            n = t._decorator,
            u = t.Label,
            s = t.Enum,
            c = t.lerp,
            p = t.Component
        }
        ],
        execute: function() {
            var h, b, f, g, m, y, E, v, d, T, M, S, R, w, F, I, V, _, C;
            o._RF.push({}, "72d13dwmG9LS4gkJhSuAp3F", "BhvRollNumber", void 0);
            var N = n.ccclass
              , A = n.property
              , L = n.menu
              , z = function(t) {
                return t[t.INTEGER = 0] = "INTEGER",
                t[t.FIXED_2 = 1] = "FIXED_2",
                t[t.TIMER = 2] = "TIMER",
                t[t.PERCENTAGE = 3] = "PERCENTAGE",
                t[t.KMBT_FIXED2 = 4] = "KMBT_FIXED2",
                t[t.CUSTOMER = 5] = "CUSTOMER",
                t
            }(z || {});
            t("BhvRollNumber", (h = L("OopsFramework/UI/Roll Number （滚动数字）"),
            b = A({
                type: u,
                tooltip: "需要滚动的 Label 组件,如果不进行设置，就会从自己的节点自动查找"
            }),
            f = A({
                tooltip: "当前的滚动值(开始的滚动值)"
            }),
            g = A({
                tooltip: "是否显示正负符号"
            }),
            m = A({
                tooltip: "滚动的目标值"
            }),
            y = A({
                tooltip: "滚动的线性差值",
                step: .01,
                max: 1,
                min: 0
            }),
            E = A({
                tooltip: "是否在开始时就播放"
            }),
            v = A({
                tooltip: "在滚动之前会等待几秒",
                step: .1,
                max: 1,
                min: 0
            }),
            d = A({
                type: s(z),
                tooltip: "是否在开始时就播放"
            }),
            N(T = h((S = e((M = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                        a[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    r(e, "label", S, l(e)),
                    r(e, "value", R, l(e)),
                    r(e, "showPlusSymbol", w, l(e)),
                    r(e, "_targetValue", F, l(e)),
                    r(e, "lerp", I, l(e)),
                    r(e, "playAtStart", V, l(e)),
                    r(e, "runWaitTimer", _, l(e)),
                    r(e, "valueType", C, l(e)),
                    e.onCustom = null,
                    e.isScrolling = !1,
                    e
                }
                i(e, t);
                var o = e.prototype;
                return o.onLoad = function() {
                    null == this.label && (this.label = this.node.getComponent(u)),
                    this.playAtStart && (this.updateLabel(),
                    this.scroll())
                }
                ,
                o.scroll = function() {
                    var t = this;
                    this.isScrolling || (this.runWaitTimer > 0 ? this.scheduleOnce((function() {
                        t.isScrolling = !0
                    }
                    ), this.runWaitTimer) : this.isScrolling = !0)
                }
                ,
                o.stop = function() {
                    this.value = this.targetValue,
                    this.isScrolling = !1,
                    this.updateLabel()
                }
                ,
                o.init = function(t, e, i) {
                    this.targetValue = e || 0,
                    this.value = t || 0,
                    this.lerp = i || .1
                }
                ,
                o.scrollTo = function(t) {
                    null != t && (this.targetValue = t)
                }
                ,
                o.updateLabel = function() {
                    var t = this.value
                      , e = "";
                    switch (this.valueType) {
                    case z.INTEGER:
                        e = Math.round(t) + "";
                        break;
                    case z.FIXED_2:
                        e = t.toFixed(2);
                        break;
                    case z.TIMER:
                        e = function(t, e) {
                            void 0 === t && (t = 0);
                            void 0 === e && (e = !0);
                            var i = Math.floor(t)
                              , r = Math.floor(i / 3600)
                              , l = Math.floor(i % 3600 / 60)
                              , a = i % 60
                              , o = "" + l
                              , n = "" + a;
                            a < 10 && (n = "0" + a);
                            return e ? (l < 10 && (o = "0" + l),
                            r + ":" + o + ":" + n) : (o = "" + (l + 60 * r),
                            l < 10 && (o = "0" + l),
                            o + ":" + n)
                        }(t);
                        break;
                    case z.PERCENTAGE:
                        e = Math.round(100 * t) + "%";
                        break;
                    case z.KMBT_FIXED2:
                        e = t >= Number.MAX_VALUE ? "MAX" : t > 1e12 ? (t / 1e12).toFixed(2) + "T" : t > 1e9 ? (t / 1e9).toFixed(2) + "B" : t > 1e6 ? (t / 1e6).toFixed(2) + "M" : t > 1e3 ? (t / 1e3).toFixed(2) + "K" : Math.round(t).toString();
                        break;
                    case z.CUSTOMER:
                        this.onCustom && (e = this.onCustom(this.value, this.targetValue))
                    }
                    if (this.showPlusSymbol && (t > 0 ? e = "+" + e : t < 0 && (e = "-" + e)),
                    this.label) {
                        if (e === this.label.string)
                            return;
                        this.label.string = e
                    }
                }
                ,
                o.update = function(t) {
                    if (0 != this.isScrolling)
                        return this.value = c(this.value, this.targetValue, this.lerp),
                        this.updateLabel(),
                        Math.abs(this.value - this.targetValue) <= 1e-4 ? (this.value = this.targetValue,
                        void (this.isScrolling = !1)) : void 0
                }
                ,
                a(e, [{
                    key: "targetValue",
                    get: function() {
                        return this._targetValue
                    },
                    set: function(t) {
                        this._targetValue = t,
                        this.scroll()
                    }
                }]),
                e
            }(p)).prototype, "label", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = e(M.prototype, "value", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            w = e(M.prototype, "showPlusSymbol", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            e(M.prototype, "targetValue", [m], Object.getOwnPropertyDescriptor(M.prototype, "targetValue"), M.prototype),
            F = e(M.prototype, "_targetValue", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 100
                }
            }),
            I = e(M.prototype, "lerp", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }),
            V = e(M.prototype, "playAtStart", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            _ = e(M.prototype, "runWaitTimer", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            C = e(M.prototype, "valueType", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return z.INTEGER
                }
            }),
            T = M)) || T) || T));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BhvSwitchPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMEnv.ts"], (function(e) {
    var i, t, n, r, o, a, s, c, h, u;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            o = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            s = e._decorator,
            c = e.CCInteger,
            h = e.Component
        }
        , function(e) {
            u = e.VMEnv
        }
        ],
        execute: function() {
            var d, p, g, l, f, x;
            a._RF.push({}, "b3d083kncpDPqVztMtiq6DO", "BhvSwitchPage", void 0);
            var v = s.ccclass
              , y = s.property
              , P = s.executeInEditMode
              , _ = s.menu;
            e("BhvSwitchPage", (d = _("OopsFramework/UI/Switch Page （页面切换）"),
            p = y({
                type: c
            }),
            v(g = P(g = d((f = i((l = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                        o[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(i, "isLoopPage", f, r(i)),
                    n(i, "_index", x, r(i)),
                    i.preIndex = 0,
                    i._isChanging = !1,
                    i
                }
                t(i, e);
                var a = i.prototype;
                return a.onLoad = function() {
                    this.preIndex = this.index
                }
                ,
                a._updateEditorPage = function(e) {
                    if (u.editor)
                        for (var i = this.node.children, t = 0; t < i.length; t++) {
                            var n = i[t];
                            n.active = t == e
                        }
                }
                ,
                a._updatePage = function(e) {
                    var i = this.node.children
                      , t = this.preIndex
                      , n = this.index;
                    if (t !== n) {
                        var r = i[t]
                          , o = i[n];
                        r.active = !1,
                        o.active = !0
                    }
                }
                ,
                a.next = function() {
                    return !this.isChanging && (this.index++,
                    !0)
                }
                ,
                a.previous = function() {
                    return !this.isChanging && (this.index--,
                    !0)
                }
                ,
                a.setEventIndex = function(e, i) {
                    return this.index >= 0 && null != this.index && !1 === this.isChanging && (this.index = i,
                    !0)
                }
                ,
                o(i, [{
                    key: "index",
                    get: function() {
                        return this._index
                    },
                    set: function(e) {
                        if (!this.isChanging) {
                            e = Math.round(e);
                            var i = this.node.children.length - 1;
                            this.isLoopPage ? (e > i && (e = 0),
                            e < 0 && (e = i)) : (e > i && (e = i),
                            e < 0 && (e = 0)),
                            this.preIndex = this._index,
                            this._index = e,
                            u.editor ? this._updateEditorPage(e) : this._updatePage(e)
                        }
                    }
                }, {
                    key: "isChanging",
                    get: function() {
                        return this._isChanging
                    }
                }]),
                i
            }(h)).prototype, "isLoopPage", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            x = i(l.prototype, "_index", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            i(l.prototype, "index", [p], Object.getOwnPropertyDescriptor(l.prototype, "index"), l.prototype),
            g = l)) || g) || g) || g));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BranchNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BehaviorTree.ts", "./BTreeNode.ts"], (function(n) {
    var t, i, o, e;
    return {
        setters: [function(n) {
            t = n.inheritsLoose
        }
        , function(n) {
            i = n.cclegacy
        }
        , function(n) {
            o = n.BehaviorTree
        }
        , function(n) {
            e = n.BTreeNode
        }
        ],
        execute: function() {
            i._RF.push({}, "beafaDMsw9FCbGDpLVmMfa1", "BranchNode", void 0);
            n("BranchNode", function(n) {
                function i(t) {
                    var i;
                    return (i = n.call(this) || this).children = void 0,
                    i._actualTask = void 0,
                    i._runningNode = void 0,
                    i._nodeRunning = void 0,
                    i._blackboard = void 0,
                    i.children = t || [],
                    i
                }
                t(i, n);
                var e = i.prototype;
                return e.start = function() {
                    this._actualTask = 0,
                    n.prototype.start.call(this)
                }
                ,
                e.run = function(n) {
                    0 == this.children.length ? this._control.fail() : (this._blackboard = n,
                    this.start(),
                    this._actualTask < this.children.length && this._run()),
                    this.end()
                }
                ,
                e._run = function(n) {
                    var t = o.getNode(this.children[this._actualTask]);
                    this._runningNode = t,
                    t.setControl(this),
                    t.start(this._blackboard),
                    t.run(this._blackboard)
                }
                ,
                e.running = function(n) {
                    this._nodeRunning = n,
                    this._control.running(n)
                }
                ,
                e.success = function() {
                    this._nodeRunning = null,
                    this._runningNode.end(this._blackboard)
                }
                ,
                e.fail = function() {
                    this._nodeRunning = null,
                    this._runningNode.end(this._blackboard)
                }
                ,
                i
            }(e));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BTreeNode.ts", ["cc"], (function(t) {
    var n;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "f0aeepAwndJP7wlpP6QKx06", "BTreeNode", void 0);
            t("BTreeNode", function() {
                function t() {
                    this._control = void 0,
                    this.title = void 0,
                    this.title = this.constructor.name
                }
                var n = t.prototype;
                return n.start = function(t) {}
                ,
                n.end = function(t) {}
                ,
                n.setControl = function(t) {
                    this._control = t
                }
                ,
                n.running = function(t) {
                    this._control.running(this)
                }
                ,
                n.success = function() {
                    this._control.success()
                }
                ,
                n.fail = function() {
                    this._control.fail()
                }
                ,
                t
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BuildTimeConstants.ts", ["cc", "./env"], (function(t) {
    var n, e;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        , function(t) {
            e = t
        }
        ],
        execute: function() {
            n._RF.push({}, "21a39/4HchJdJkSQKKKkLh9", "BuildTimeConstants", void 0);
            var o = Object.keys(e).sort();
            t("BuildTimeConstants", (function() {
                var t = o.reduce((function(t, n) {
                    return Math.max(t, n.length)
                }
                ), 0)
                  , n = "" + o.map((function(n) {
                    var o = e[n]
                      , u = "boolean" == typeof o ? o ? "true" : "false" : o;
                    return "\n" + n.padStart(t, " ") + " : " + u
                }
                ));
                console.log(n)
            }
            ));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ButtonEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./ButtonSimple.ts"], (function(t) {
    var e, n, o, i, a, r, s, c, l, u, p, f, d;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            o = t.initializerDefineProperty,
            i = t.assertThisInitialized,
            a = t.createClass
        }
        , function(t) {
            r = t.cclegacy,
            s = t._decorator,
            c = t.Animation,
            l = t.AnimationClip,
            u = t.Node,
            p = t.Sprite
        }
        , function(t) {
            f = t.oops
        }
        , function(t) {
            d = t.default
        }
        ],
        execute: function() {
            var h, m, y, g, T, _;
            r._RF.push({}, "1be36hrGO5Oz6Eapg6ygW03", "ButtonEffect", void 0);
            var b = s.ccclass
              , v = s.property
              , E = s.menu;
            t("default", (h = b("ButtonEffect"),
            m = E("OopsFramework/Button/ButtonEffect （有特效按钮）"),
            y = v({
                tooltip: "是否开启"
            }),
            h(g = m((_ = e((T = function(t) {
                function e() {
                    for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                        a[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    o(e, "disabledEffect", _, i(e)),
                    e.anim = void 0,
                    e
                }
                n(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    this.anim = this.node.addComponent(c);
                    var e = f.res.get("common/anim/button_scale_start", l)
                      , n = f.res.get("common/anim/button_scale_end", l);
                    this.anim.defaultClip = e,
                    this.anim.createState(e, null == e ? void 0 : e.name),
                    this.anim.createState(n, null == n ? void 0 : n.name),
                    this.node.on(u.EventType.TOUCH_START, this.onTouchtStart, this),
                    t.prototype.onLoad.call(this)
                }
                ,
                r.onTouchtStart = function(t) {
                    this.disabledEffect || this.anim.play("button_scale_start")
                }
                ,
                r.onTouchEnd = function(e) {
                    this.disabledEffect || this.anim.play("button_scale_end"),
                    t.prototype.onTouchEnd.call(this, e)
                }
                ,
                r.onDestroy = function() {
                    this.node.off(u.EventType.TOUCH_START, this.onTouchtStart, this),
                    t.prototype.onDestroy.call(this)
                }
                ,
                a(e, [{
                    key: "grayscale",
                    get: function() {
                        return this.node.getComponent(p).grayscale
                    },
                    set: function(t) {
                        this.node.getComponent(p) && (this.node.getComponent(p).grayscale = t)
                    }
                }]),
                e
            }(d)).prototype, "disabledEffect", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            g = T)) || g) || g));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ButtonSimple.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts"], (function(t) {
    var e, n, o, i, r, u, c, a, p, s, l, f, h;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            o = t.initializerDefineProperty,
            i = t.assertThisInitialized,
            r = t.asyncToGenerator,
            u = t.regeneratorRuntime
        }
        , function(t) {
            c = t.cclegacy,
            a = t._decorator,
            p = t.AudioClip,
            s = t.Node,
            l = t.game,
            f = t.Component
        }
        , function(t) {
            h = t.oops
        }
        ],
        execute: function() {
            var d, y, T, m, E, v, C, b, g, _;
            c._RF.push({}, "8d645yObX1FvJfk2sbi0rxp", "ButtonSimple", void 0);
            var w = a.ccclass
              , O = a.property
              , S = a.menu;
            t("default", (d = w("ButtonSimple"),
            y = S("OopsFramework/Button/ButtonSimple （节点按钮）"),
            T = O({
                tooltip: "是否只触发一次"
            }),
            m = O({
                tooltip: "每次触发间隔"
            }),
            E = O({
                tooltip: "触摸音效",
                type: p
            }),
            d(v = y((b = e((C = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), u = 0; u < n; u++)
                        r[u] = arguments[u];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    o(e, "once", b, i(e)),
                    o(e, "interval", g, i(e)),
                    o(e, "effect", _, i(e)),
                    e.touchCount = 0,
                    e.touchtEndTime = 0,
                    e
                }
                n(e, t);
                var c = e.prototype;
                return c.onLoad = function() {
                    this.node.on(s.EventType.TOUCH_END, this.onTouchEnd, this),
                    this.node.on(s.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }
                ,
                c.onTouchEnd = function(t) {
                    if (this.once) {
                        if (this.touchCount > 0)
                            return void (t.propagationStopped = !0);
                        this.touchCount++
                    }
                    this.touchtEndTime && l.totalTime - this.touchtEndTime < this.interval ? t.propagationStopped = !0 : (this.touchtEndTime = l.totalTime,
                    this.playEffect())
                }
                ,
                c.playEffect = function() {
                    var t = r(u().mark((function t() {
                        return u().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    this.effect && h.audio.playEffect(this.effect);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                c.onDestroy = function() {
                    this.node.off(s.EventType.TOUCH_END, this.onTouchEnd, this),
                    this.node.off(s.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
                }
                ,
                e
            }(f)).prototype, "once", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            g = e(C.prototype, "interval", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 500
                }
            }),
            _ = e(C.prototype, "effect", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = C)) || v) || v));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ButtonTouchLong.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ButtonEffect.ts"], (function(t) {
    var o, n, e, i, s, c, u, r;
    return {
        setters: [function(t) {
            o = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            e = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            s = t.cclegacy,
            c = t._decorator,
            u = t.EventHandler
        }
        , function(t) {
            r = t.default
        }
        ],
        execute: function() {
            var a, h, l, p, f, T, _, g;
            s._RF.push({}, "da96en7WYpPTaPIkO1l/Nux", "ButtonTouchLong", void 0);
            var v = c.ccclass
              , m = c.property
              , L = c.menu;
            t("ButtonTouchLong", (a = v("ButtonTouchLong"),
            h = L("OopsFramework/Button/ButtonTouchLong （长按按钮）"),
            l = m({
                tooltip: "长按时间（秒）"
            }),
            p = m({
                type: [u],
                tooltip: "长按时间（秒）"
            }),
            a(f = h((_ = o((T = function(t) {
                function o() {
                    for (var o, n = arguments.length, s = new Array(n), c = 0; c < n; c++)
                        s[c] = arguments[c];
                    return o = t.call.apply(t, [this].concat(s)) || this,
                    e(o, "time", _, i(o)),
                    e(o, "clickEvents", g, i(o)),
                    o._passTime = 0,
                    o._isTouchLong = !0,
                    o._event = null,
                    o
                }
                n(o, t);
                var s = o.prototype;
                return s.onLoad = function() {
                    this._isTouchLong = !1,
                    t.prototype.onLoad.call(this)
                }
                ,
                s.onTouchtStart = function(o) {
                    this._event = o,
                    this._passTime = 0,
                    t.prototype.onTouchtStart.call(this, o)
                }
                ,
                s.onTouchEnd = function(o) {
                    this._passTime > this.time && (o.propagationStopped = !0),
                    this._event = null,
                    this._passTime = 0,
                    this._isTouchLong = !1,
                    t.prototype.onTouchEnd.call(this, o)
                }
                ,
                s.removeTouchLong = function() {
                    this._event = null,
                    this._isTouchLong = !1
                }
                ,
                s.update = function(t) {
                    var o = this;
                    this._event && !this._isTouchLong && (this._passTime += t,
                    this._passTime >= this.time && (this._isTouchLong = !0,
                    this.clickEvents.forEach((function(t) {
                        t.emit([t.customEventData]),
                        o.playEffect()
                    }
                    )),
                    this.removeTouchLong()))
                }
                ,
                o
            }(r)).prototype, "time", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            g = o(T.prototype, "clickEvents", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            f = T)) || f) || f));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CameraUtil.ts", ["cc"], (function(e) {
    var t, n, r;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            n = e.Vec3,
            r = e.view
        }
        ],
        execute: function() {
            t._RF.push({}, "95c77QQpp1EjKj8UBFCCdKu", "CameraUtil", void 0);
            e("CameraUtil", function() {
                function e() {}
                return e.isInView = function(e, t) {
                    var i = e.node.getWorldPosition()
                      , o = e.worldToScreen(t)
                      , c = n.normalize(new n, t.subtract(i))
                      , u = e.node.forward
                      , a = n.dot(u, c)
                      , s = r.getViewportRect();
                    return a > 0 && o.x <= s.width && o.x >= 0 && o.y <= s.height && o.y >= 0
                }
                ,
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CardItemComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./CCComp.ts", "./UIUtil.ts", "./TableRoleJob.ts", "./Oops.ts", "./Utils.ts", "./PlayerData.ts", "./SingletonModuleComp.ts", "./MessageManager.ts", "./Enum.ts", "./ResLoader.ts", "./LanguageData.ts"], (function(t) {
    var e, i, n, o, a, s, l, c, r, u, h, b, d, g, v, p, f, m, B, C, R, J, y;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            o = t.assertThisInitialized
        }
        , function(t) {
            a = t.cclegacy,
            s = t._decorator,
            l = t.Sprite,
            c = t.Node,
            r = t.Label,
            u = t.Texture2D,
            h = t.SpriteFrame
        }
        , function(t) {
            b = t.ecs
        }
        , function(t) {
            d = t.CCComp
        }
        , function(t) {
            g = t.default
        }
        , function(t) {
            v = t.TableRoleJob
        }
        , function(t) {
            p = t.oops
        }
        , function(t) {
            f = t.default
        }
        , function(t) {
            m = t.default
        }
        , function(t) {
            B = t.smc
        }
        , function(t) {
            C = t.Message
        }
        , function(t) {
            R = t.EngineMessage
        }
        , function(t) {
            J = t.resLoader
        }
        , function(t) {
            y = t.LanguageData
        }
        ],
        execute: function() {
            var k, w, x, D, _, A, E, I, M, L, z, F, j, S, T, G, N, H;
            a._RF.push({}, "9e9609u7OBFzalIlh6fHkCD", "CardItemComp", void 0);
            var U = s.ccclass
              , O = s.property;
            t("CardItemComp", (k = U("CardItemComp"),
            w = b.register("CardItem", !1),
            x = O(l),
            D = O(c),
            _ = O(c),
            A = O(c),
            E = O(c),
            I = O(r),
            M = O(r),
            k(L = w((F = e((z = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
                        a[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    n(e, "icon", F, o(e)),
                    n(e, "chooseBtn", j, o(e)),
                    n(e, "locked", S, o(e)),
                    n(e, "usingBtn", T, o(e)),
                    n(e, "anniuBtn", G, o(e)),
                    n(e, "title", N, o(e)),
                    n(e, "max", H, o(e)),
                    e.tableRoleJob = void 0,
                    e
                }
                i(e, t);
                var a = e.prototype;
                return a.init = function(t) {
                    var e = this;
                    this.tableRoleJob = new v,
                    this.tableRoleJob.init(t);
                    var i = m.get();
                    this.anniuBtn.getComponentInChildren(r).string = f.formatNumberTo3Fixed(this.tableRoleJob.unlock),
                    this.title.string = this.tableRoleJob.name,
                    this.max.string = y.getLangByID("unlock_max") + f.formatNumberTo3Fixed(this.tableRoleJob.max);
                    var n = window.BASE_URL + "/" + this.tableRoleJob.image;
                    (J.loadRemote(n, {
                        ext: ".png"
                    }, (function(t, i) {
                        if (t)
                            console.error("[LanguageSprite] 资源不存在 " + n);
                        else {
                            window.REMOTE_URL[n] = i;
                            var o = new u;
                            o.image = i;
                            var a = new h;
                            a.texture = o,
                            e.icon.spriteFrame = a
                        }
                    }
                    )),
                    t == i.jobId) ? (this.locked.active = !1,
                    this.chooseBtn.active = !1,
                    this.usingBtn.active = !0,
                    this.anniuBtn.active = !1,
                    B.account.AccountModel.role.changeJob(this.tableRoleJob.id),
                    this.max.node.active = !1) : i.jobs.includes(t) ? (this.locked.active = !1,
                    this.chooseBtn.active = !0,
                    this.usingBtn.active = !1,
                    this.anniuBtn.active = !1,
                    this.max.node.active = !1) : (this.locked.active = !0,
                    this.chooseBtn.active = !1,
                    this.usingBtn.active = !1,
                    this.anniuBtn.active = !0,
                    this.max.node.active = !0)
                }
                ,
                a.start = function() {
                    g.setClickFunc(this.chooseBtn, this, this.changeCard),
                    g.setClickFunc(this.anniuBtn, this, this.buyCard),
                    C.on(R.GAME_CARD_CHANGE, this.change, this)
                }
                ,
                a.reset = function() {
                    this.node.destroy()
                }
                ,
                a.change = function(t, e) {
                    var i = m.get();
                    this.tableRoleJob.id == e ? (this.locked.active = !1,
                    this.chooseBtn.active = !1,
                    this.usingBtn.active = !0,
                    this.anniuBtn.active = !1) : i.jobs.includes(this.tableRoleJob.id) ? (this.locked.active = !1,
                    this.chooseBtn.active = !0,
                    this.usingBtn.active = !1,
                    this.anniuBtn.active = !1) : (this.locked.active = !0,
                    this.chooseBtn.active = !1,
                    this.usingBtn.active = !1,
                    this.anniuBtn.active = !0)
                }
                ,
                a.changeCard = function() {
                    B.account.AccountModel.role.changeJob(this.tableRoleJob.id),
                    C.dispatchEvent(R.GAME_CARD_CHANGE, this.tableRoleJob.id);
                    var t = m.get();
                    t.jobId = this.tableRoleJob.id,
                    t.saveData()
                }
                ,
                a.buyCard = function() {
                    var t = B.account.AccountModel.role
                      , e = this.tableRoleJob.unlock;
                    if (t.RoleModelBase.coin < e)
                        p.gui.toast(y.getLangByID("not_enough_coins"), !0);
                    else {
                        this.max.node.active = !1,
                        t.reduceCoins(e),
                        t.upgrade(),
                        t.changeJob(this.tableRoleJob.id),
                        C.dispatchEvent(R.GAME_CARD_CHANGE, this.tableRoleJob.id);
                        var i = m.get();
                        i.jobId = this.tableRoleJob.id,
                        i.lv += 1,
                        i.jobs.push(this.tableRoleJob.id),
                        i.saveData()
                    }
                }
                ,
                e
            }(d)).prototype, "icon", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            j = e(z.prototype, "chooseBtn", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = e(z.prototype, "locked", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            T = e(z.prototype, "usingBtn", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            G = e(z.prototype, "anniuBtn", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            N = e(z.prototype, "title", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            H = e(z.prototype, "max", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            L = z)) || L) || L));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CCComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameComponent.ts"], (function(o) {
    var t, e, n, c;
    return {
        setters: [function(o) {
            t = o.inheritsLoose
        }
        , function(o) {
            e = o.cclegacy,
            n = o._decorator
        }
        , function(o) {
            c = o.GameComponent
        }
        ],
        execute: function() {
            var r, i;
            e._RF.push({}, "dd207fiyGJLf5r+bkiMgwdt", "CCComp", void 0);
            var a = n.ccclass;
            n.property,
            o("CCComp", a("CCComp")(((i = function(o) {
                function e() {
                    for (var t, e = arguments.length, n = new Array(e), c = 0; c < e; c++)
                        n[c] = arguments[c];
                    return (t = o.call.apply(o, [this].concat(n)) || this).canRecycle = void 0,
                    t.ent = void 0,
                    t
                }
                return t(e, o),
                e
            }(c)).tid = -1,
            i.compName = void 0,
            r = i)) || r);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CCVMParentComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMParent.ts"], (function(t) {
    var e, n, r, o;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            r = t._decorator
        }
        , function(t) {
            o = t.default
        }
        ],
        execute: function() {
            var c, a;
            n._RF.push({}, "5908aTmM1lItpXgo7ROpQeQ", "CCVMParentComp", void 0);
            var i = r.ccclass;
            r.property,
            t("CCVMParentComp", i("CCVMParentComp")(((a = function(t) {
                function n() {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r)) || this).canRecycle = void 0,
                    e.ent = void 0,
                    e
                }
                return e(n, t),
                n
            }(o)).tid = -1,
            a.compName = void 0,
            c = a)) || c);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Collection.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var r, e, a, i;
    return {
        setters: [function(t) {
            r = t.inheritsLoose,
            e = t.createClass,
            a = t.wrapNativeSuper
        }
        , function(t) {
            i = t.cclegacy
        }
        ],
        execute: function() {
            i._RF.push({}, "1dcf5AtQQVK3KQ/2jHHD5gi", "Collection", void 0);
            t("Collection", function(t) {
                function a() {
                    for (var r, e = arguments.length, a = new Array(e), i = 0; i < e; i++)
                        a[i] = arguments[i];
                    return (r = t.call.apply(t, [this].concat(a)) || this)._array = [],
                    r
                }
                r(a, t);
                var i = a.prototype;
                return i.set = function(r, e) {
                    if (this.has(r)) {
                        var a = this.get(r)
                          , i = this._array.indexOf(a);
                        this._array[i] = e
                    } else
                        this._array.push(e);
                    return t.prototype.set.call(this, r, e)
                }
                ,
                i.delete = function(r) {
                    var e = this.get(r);
                    if (e) {
                        var a = this._array.indexOf(e);
                        return a > -1 && this._array.splice(a, 1),
                        t.prototype.delete.call(this, r)
                    }
                    return !1
                }
                ,
                i.clear = function() {
                    this._array.splice(0, this._array.length),
                    t.prototype.clear.call(this)
                }
                ,
                e(a, [{
                    key: "array",
                    get: function() {
                        return this._array
                    }
                }]),
                a
            }(a(Map)));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CommonPrompt.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LanguageLabel.ts", "./Oops.ts"], (function(n) {
    var t, e, o, i, c, l, a, r, s;
    return {
        setters: [function(n) {
            t = n.applyDecoratedDescriptor,
            e = n.inheritsLoose,
            o = n.initializerDefineProperty,
            i = n.assertThisInitialized
        }
        , function(n) {
            c = n.cclegacy,
            l = n._decorator,
            a = n.Component
        }
        , function(n) {
            r = n.LanguageLabel
        }
        , function(n) {
            s = n.oops
        }
        ],
        execute: function() {
            var u, f, h, b, p, g, d, m, _, y, C;
            c._RF.push({}, "653bf8VPC5Fn49zFJFqXVgx", "CommonPrompt", void 0);
            var F = l.ccclass
              , k = l.property;
            n("CommonPrompt", (u = F("CommonPrompt"),
            f = k(r),
            h = k(r),
            b = k(r),
            p = k(r),
            u((m = t((d = function(n) {
                function t() {
                    for (var t, e = arguments.length, c = new Array(e), l = 0; l < e; l++)
                        c[l] = arguments[l];
                    return t = n.call.apply(n, [this].concat(c)) || this,
                    o(t, "lab_title", m, i(t)),
                    o(t, "lab_content", _, i(t)),
                    o(t, "lab_ok", y, i(t)),
                    o(t, "lab_cancel", C, i(t)),
                    t.config = {},
                    t
                }
                e(t, n);
                var c = t.prototype;
                return c.onAdded = function(n) {
                    return this.config = n || {},
                    this.setTitle(),
                    this.setContent(),
                    this.setBtnOkLabel(),
                    this.setBtnCancelLabel(),
                    this.node.active = !0,
                    !0
                }
                ,
                c.setTitle = function() {
                    this.lab_title.dataID = this.config.title
                }
                ,
                c.setContent = function() {
                    this.lab_content.dataID = this.config.content
                }
                ,
                c.setBtnOkLabel = function() {
                    this.lab_ok.dataID = this.config.okWord
                }
                ,
                c.setBtnCancelLabel = function() {
                    this.lab_cancel && (this.lab_cancel.dataID = this.config.cancelWord,
                    this.lab_cancel.node.parent.active = this.config.needCancel || !1)
                }
                ,
                c.onOk = function() {
                    "function" == typeof this.config.okFunc && this.config.okFunc(),
                    this.close()
                }
                ,
                c.onClose = function() {
                    "function" == typeof this.config.closeFunc && this.config.closeFunc(),
                    this.close()
                }
                ,
                c.onCancel = function() {
                    "function" == typeof this.config.cancelFunc && this.config.cancelFunc(),
                    this.close()
                }
                ,
                c.close = function() {
                    s.gui.removeByNode(this.node)
                }
                ,
                c.onDestroy = function() {
                    this.config = null
                }
                ,
                t
            }(a)).prototype, "lab_title", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = t(d.prototype, "lab_content", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = t(d.prototype, "lab_ok", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            C = t(d.prototype, "lab_cancel", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g = d)) || g));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Config.ts", ["cc"], (function(i) {
    var t;
    return {
        setters: [function(i) {
            t = i.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "5034dEezo5Frr6dhZGVgmTh", "Config", void 0);
            i("Config", (function() {
                this.game = void 0,
                this.query = void 0
            }
            ));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DataBase.ts", ["cc", "./DataManager.ts"], (function(s) {
    var a, t;
    return {
        setters: [function(s) {
            a = s.cclegacy
        }
        , function(s) {
            t = s.default
        }
        ],
        execute: function() {
            a._RF.push({}, "ff984z4WLBG1rSjhskF9WeQ", "DataBase", void 0);
            var i = s("default", function() {
                function s() {
                    this.__className__ = void 0
                }
                s.get = function(s) {
                    if (this.all || (this.all = {}),
                    this.all[this.className] && this.all[this.className][s])
                        return this.all[this.className][s];
                    var a = new this;
                    a.__className__ = this.className;
                    var i = t.inst().get(this.className, s);
                    return i && a.parse(i),
                    t.inst().set(this.className, s, a),
                    this.all[this.className] || (this.all[this.className] = {}),
                    this.all[this.className][s] = a,
                    a
                }
                ;
                var a = s.prototype;
                return a.saveData = function() {
                    t.inst().saveData(this.__className__, this)
                }
                ,
                a.parse = function(s) {
                    if (null != s && "" != s) {
                        for (var a in s)
                            this[a] = s[a]
                    }
                }
                ,
                s
            }());
            i.className = void 0,
            i.all = null,
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DataManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Singleton.ts", "./Enum.ts", "./Oops.ts"], (function(t) {
    var a, e, n, s, i, c;
    return {
        setters: [function(t) {
            a = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy,
            n = t.Node
        }
        , function(t) {
            s = t.default
        }
        , function(t) {
            i = t.APP_CONFIG
        }
        , function(t) {
            c = t.oops
        }
        ],
        execute: function() {
            e._RF.push({}, "a49c74NuMVDTrLZp7daXJQu", "DataManager", void 0);
            t("default", function(t) {
                function e() {
                    for (var a, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                        n[s] = arguments[s];
                    return (a = t.call.apply(t, [this].concat(n)) || this).dataObjects = {},
                    a
                }
                a(e, t);
                var s = e.prototype;
                return s.get = function(t, a) {
                    if (!this.dataObjects[t]) {
                        var e = c.storage.get(i.NAME + "_" + window.GAME_ID + "_" + t);
                        null == e || "" == e || (this.dataObjects[t] = JSON.parse(e))
                    }
                    return null == a ? this.dataObjects[t] : this.dataObjects[t] ? this.dataObjects[t][a] : null
                }
                ,
                s.set = function(t, a, e) {
                    this.dataObjects[t] || (this.dataObjects[t] = []),
                    null == a || null == a ? this.dataObjects[t] = e : this.dataObjects[t][a] = e
                }
                ,
                s.saveData = function(t, a) {
                    this.dataObjects[t] && !this.dataObjects[t].shift || (a = this.dataObjects[t] || a);
                    var e = JSON.stringify(a, (function(t, a) {
                        if (!(a instanceof n))
                            return a
                    }
                    ));
                    c.storage.set(i.NAME + "_" + window.GAME_ID + "_" + t, e)
                }
                ,
                s.parse = function(t) {
                    for (var a = 0, e = Object.entries(t); a < e.length; a++) {
                        var n = e[a]
                          , s = n[0]
                          , i = n[1];
                        this.dataObjects[s] = i
                    }
                }
                ,
                e
            }(s));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DateExt.ts", ["cc"], (function() {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "80ebbBz8etB5qijWdYrU2HH", "DateExt", void 0),
            Date.prototype.format = function(e) {
                var t = this.getFullYear()
                  , r = this.getMonth() + 1
                  , c = this.getDate()
                  , s = this.getHours()
                  , a = this.getMinutes()
                  , i = this.getSeconds();
                return e.replace("yy", t.toString()).replace("mm", (r < 10 ? "0" : "") + r).replace("dd", (c < 10 ? "0" : "") + c).replace("hh", (s < 10 ? "0" : "") + s).replace("mm", (a < 10 ? "0" : "") + a).replace("ss", (i < 10 ? "0" : "") + i)
            }
            ,
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Decorator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BehaviorTree.ts", "./BTreeNode.ts"], (function(t) {
    var e, o, n, r;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            o = t.cclegacy
        }
        , function(t) {
            n = t.BehaviorTree
        }
        , function(t) {
            r = t.BTreeNode
        }
        ],
        execute: function() {
            o._RF.push({}, "0455agxsbxHlYleJPDpJX3l", "Decorator", void 0);
            t("Decorator", function(t) {
                function o(e) {
                    var o;
                    return (o = t.call(this) || this).node = void 0,
                    e && (o.node = n.getNode(e)),
                    o
                }
                e(o, t);
                var r = o.prototype;
                return r.setNode = function(t) {
                    this.node = n.getNode(t)
                }
                ,
                r.start = function() {
                    this.node.setControl(this),
                    this.node.start(),
                    t.prototype.start.call(this)
                }
                ,
                r.end = function() {
                    this.node.end()
                }
                ,
                r.run = function(t) {
                    this.node.run(t)
                }
                ,
                o
            }(r));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Defines.ts", ["cc"], (function(i) {
    var s;
    return {
        setters: [function(i) {
            s = i.cclegacy
        }
        ],
        execute: function() {
            s._RF.push({}, "82d3a9c71JEkI95d3qscHm8", "Defines", void 0);
            i("ViewParams", (function() {
                this.uiid = -1,
                this.config = null,
                this.params = null,
                this.callbacks = null,
                this.valid = !0,
                this.node = null
            }
            ));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DelegateComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts"], (function(e) {
    var o, n, t, s, r, i, a;
    return {
        setters: [function(e) {
            o = e.inheritsLoose,
            n = e.asyncToGenerator,
            t = e.regeneratorRuntime
        }
        , function(e) {
            s = e.cclegacy,
            r = e._decorator,
            i = e.Component
        }
        , function(e) {
            a = e.oops
        }
        ],
        execute: function() {
            var c;
            s._RF.push({}, "d8f1fGRD7dBzIeBSkOpd/Py", "DelegateComponent", void 0);
            var l = r.ccclass;
            e("DelegateComponent", l("DelegateComponent")(c = function(e) {
                function s() {
                    for (var o, n = arguments.length, t = new Array(n), s = 0; s < n; s++)
                        t[s] = arguments[s];
                    return (o = e.call.apply(e, [this].concat(t)) || this).vp = null,
                    o.onCloseWindowBefore = null,
                    o.onCloseWindow = null,
                    o
                }
                o(s, e);
                var r = s.prototype;
                return r.add = function() {
                    var e = this;
                    return new Promise(n(t().mark((function o(n, s) {
                        var r, i, a;
                        return t().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    r = 0;
                                case 1:
                                    if (!(r < e.node.components.length)) {
                                        o.next = 14;
                                        break
                                    }
                                    if (i = e.node.components[r],
                                    !(a = i.onAdded)) {
                                        o.next = 11;
                                        break
                                    }
                                    return o.next = 7,
                                    a.call(i, e.vp.params);
                                case 7:
                                    if (o.t0 = o.sent,
                                    0 != o.t0) {
                                        o.next = 11;
                                        break
                                    }
                                    return n(!1),
                                    o.abrupt("return");
                                case 11:
                                    r++,
                                    o.next = 1;
                                    break;
                                case 14:
                                    "function" == typeof e.vp.callbacks.onAdded && e.vp.callbacks.onAdded(e.node, e.vp.params),
                                    n(!0);
                                case 16:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    ))))
                }
                ,
                r.remove = function(e) {
                    this.vp.valid ? (this.applyComponentsFunction(this.node, "onBeforeRemove", this.vp.params),
                    "function" == typeof this.vp.callbacks.onBeforeRemove ? this.vp.callbacks.onBeforeRemove(this.node, this.onBeforeRemoveNext.bind(this, e)) : this.removed(this.vp, e)) : this.removed(this.vp, e)
                }
                ,
                r.onBeforeRemoveNext = function(e) {
                    this.onCloseWindowBefore && (this.onCloseWindowBefore(),
                    this.onCloseWindowBefore = null),
                    this.removed(this.vp, e)
                }
                ,
                r.removed = function(e, o) {
                    e.valid = !1,
                    e.callbacks && "function" == typeof e.callbacks.onRemoved && e.callbacks.onRemoved(this.node, e.params),
                    this.onCloseWindow && this.onCloseWindow(e),
                    o ? (this.node.destroy(),
                    a.res.release(e.config.prefab, e.config.bundle),
                    e.config.auto && a.gui.setConfig(e.uiid, null),
                    a.log.logView("【界面管理】释放【" + e.config.prefab + "】界面资源")) : this.node.removeFromParent(),
                    this.applyComponentsFunction(this.node, "onRemoved", this.vp.params)
                }
                ,
                r.onDestroy = function() {
                    this.vp = null
                }
                ,
                r.applyComponentsFunction = function(e, o, n) {
                    for (var t = 0; t < e.components.length; t++) {
                        var s = e.components[t]
                          , r = s[o];
                        r && r.call(s, n)
                    }
                }
                ,
                s
            }(i)) || c);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DeviceUtil.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, r, n;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            r = t.cclegacy,
            n = t.sys
        }
        ],
        execute: function() {
            r._RF.push({}, "287a3oHJD1OrKr6dp6idwn9", "DeviceUtil", void 0);
            t("DeviceUtil", function() {
                function t() {}
                return t.getSafeAreaRect = function() {
                    return n.getSafeAreaRect()
                }
                ,
                e(t, null, [{
                    key: "platform",
                    get: function() {
                        return n.platform
                    }
                }, {
                    key: "os",
                    get: function() {
                        return n.os
                    }
                }, {
                    key: "isNative",
                    get: function() {
                        return n.isNative
                    }
                }, {
                    key: "isBrowser",
                    get: function() {
                        return n.isBrowser
                    }
                }, {
                    key: "isMobile",
                    get: function() {
                        return n.isMobile
                    }
                }, {
                    key: "isAndroid",
                    get: function() {
                        return n.platform === n.Platform.ANDROID
                    }
                }, {
                    key: "isIPhone",
                    get: function() {
                        return n.platform === n.Platform.IOS
                    }
                }, {
                    key: "isMobileBrowser",
                    get: function() {
                        return n.platform === n.Platform.MOBILE_BROWSER
                    }
                }, {
                    key: "isDesktopBrowser",
                    get: function() {
                        return n.platform === n.Platform.DESKTOP_BROWSER
                    }
                }, {
                    key: "isWeChat",
                    get: function() {
                        return n.platform === n.Platform.WECHAT_GAME
                    }
                }, {
                    key: "isByteDance",
                    get: function() {
                        return n.platform === n.Platform.BYTEDANCE_MINI_GAME
                    }
                }, {
                    key: "isBaidu",
                    get: function() {
                        return n.platform === n.Platform.BAIDU_MINI_GAME
                    }
                }, {
                    key: "isVivo",
                    get: function() {
                        return n.platform === n.Platform.VIVO_MINI_GAME
                    }
                }, {
                    key: "isOPPO",
                    get: function() {
                        return n.platform === n.Platform.OPPO_MINI_GAME
                    }
                }, {
                    key: "isXiaomi",
                    get: function() {
                        return n.platform === n.Platform.XIAOMI_QUICK_GAME
                    }
                }, {
                    key: "isHuawei",
                    get: function() {
                        return n.platform === n.Platform.HUAWEI_QUICK_GAME
                    }
                }, {
                    key: "isAlipay",
                    get: function() {
                        return n.platform === n.Platform.ALIPAY_MINI_GAME
                    }
                }, {
                    key: "isOpenHarmony",
                    get: function() {
                        return n.platform === n.Platform.OPENHARMONY
                    }
                }]),
                t
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DirectorExt.ts", ["cc"], (function() {
    var e, t, c, i;
    return {
        setters: [function(r) {
            e = r.cclegacy,
            t = r.Director,
            c = r.director,
            i = r.js
        }
        ],
        execute: function() {
            if (e._RF.push({}, "37f48DDLR1EXKhzn+7pLlWB", "DirectorExt", void 0),
            !t.prototype["__$cc-director-speed-extension$__"]) {
                t.prototype["__$cc-director-speed-extension$__"] = !0;
                var r = c.tick.bind(c);
                c.tick = function(e) {
                    e *= c.globalGameTimeScale,
                    r(e)
                }
                ,
                i.mixin(t.prototype, {
                    globalGameTimeScale: 1
                })
            }
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECS.ts", ["cc", "./ECSComp.ts", "./ECSEntity.ts", "./ECSMatcher.ts", "./ECSModel.ts", "./ECSSystem.ts"], (function(t) {
    var n, e, i, o, r, c, u, s;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        , function(t) {
            e = t.ECSComp
        }
        , function(t) {
            i = t.ECSEntity
        }
        , function(t) {
            o = t.ECSMatcher
        }
        , function(t) {
            r = t.ECSModel
        }
        , function(t) {
            c = t.ECSSystem,
            u = t.ECSRootSystem,
            s = t.ECSComblockSystem
        }
        ],
        execute: function() {
            var d;
            t("ecs", void 0),
            n._RF.push({}, "be87fT76plLkaUKEYpkuV0n", "ECS", void 0),
            function(t) {
                var n = t.Entity = i;
                t.Comp = e,
                t.System = c,
                t.RootSystem = u,
                t.ComblockSystem = s;
                function a(t) {
                    return function() {
                        var t = new n;
                        return t.eid = r.eid++,
                        r.eid2Entity.set(t.eid, t),
                        t
                    }().add(t)
                }
                t.register = function(t, n) {
                    return void 0 === n && (n = !0),
                    function(e) {
                        if (e.s) {
                            var i = r.systems.get(t);
                            null == i && (i = new d.System,
                            r.systems.set(t, i)),
                            i.add(new e)
                        } else if (null == e.tid)
                            r.entityCtors.set(e, t);
                        else {
                            if (-1 !== e.tid)
                                throw new Error("重复注册组件： " + t + ".");
                            e.tid = r.compTid++,
                            e.compName = t,
                            n ? (r.compCtors.push(e),
                            r.compPools.set(e.tid, [])) : r.compCtors.push(null),
                            r.compAddOrRemove.set(e.tid, [])
                        }
                    }
                }
                ,
                t.getEntity = function(t) {
                    var n = r.entityCtors.get(t);
                    null == n && console.error(t.name + " 实体没有注册");
                    var e = (r.entityPool.get(n) || []).pop();
                    return e || ((e = new t).eid = r.eid++,
                    e.name = n),
                    e.init ? (e.isValid = !0,
                    e.init()) : console.error(t.name + " 实体缺少 init 方法初始化默认组件"),
                    r.eid2Entity.set(e.eid, e),
                    e
                }
                ,
                t.query = function(t) {
                    var n = r.groups.get(t.mid);
                    return n || (n = r.createGroup(t),
                    r.eid2Entity.forEach(n.onComponentAddOrRemove, n)),
                    n.matchEntities
                }
                ,
                t.clear = function() {
                    r.eid2Entity.forEach((function(t) {
                        t.destroy()
                    }
                    )),
                    r.groups.forEach((function(t) {
                        t.clear()
                    }
                    )),
                    r.compAddOrRemove.forEach((function(t) {
                        t.length = 0
                    }
                    )),
                    r.eid2Entity.clear(),
                    r.groups.clear()
                }
                ,
                t.getEntityByEid = function(t) {
                    return r.eid2Entity.get(t)
                }
                ,
                t.activeEntityCount = function() {
                    return r.eid2Entity.size
                }
                ,
                t.allOf = function() {
                    var t;
                    return (t = new o).allOf.apply(t, arguments)
                }
                ,
                t.anyOf = function() {
                    var t;
                    return (t = new o).anyOf.apply(t, arguments)
                }
                ,
                t.onlyOf = function() {
                    var t;
                    return (t = new o).onlyOf.apply(t, arguments)
                }
                ,
                t.excludeOf = function() {
                    var t;
                    return (t = new o).excludeOf.apply(t, arguments)
                }
                ,
                t.getSingleton = function(t) {
                    if (!r.tid2comp.has(t.tid)) {
                        var n = a(t);
                        r.tid2comp.set(t.tid, n)
                    }
                    return r.tid2comp.get(t.tid)
                }
                ,
                t.addSingleton = function(t) {
                    var n = t.constructor.tid;
                    r.tid2comp.has(n) || r.tid2comp.set(n, t)
                }
            }(d || (d = t("ecs", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECSComp.ts", ["cc"], (function(t) {
    var c;
    return {
        setters: [function(t) {
            c = t.cclegacy
        }
        ],
        execute: function() {
            c._RF.push({}, "3d017ZhAZRH4bPfpLr5++8F", "ECSComp", void 0);
            var e = t("ECSComp", (function() {
                this.ent = void 0,
                this.canRecycle = !0
            }
            ));
            e.tid = -1,
            e.compName = void 0,
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECSEntity.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECSMask.ts", "./ECSModel.ts"], (function(t) {
    var i, e, n, o;
    return {
        setters: [function(t) {
            i = t.createClass
        }
        , function(t) {
            e = t.cclegacy
        }
        , function(t) {
            n = t.ECSMask
        }
        , function(t) {
            o = t.ECSModel
        }
        ],
        execute: function() {
            function s(t, i) {
                for (var e = o.compAddOrRemove.get(i), n = e.length - 1; n >= 0; n--)
                    e[n](t);
                o.tid2comp.has(i) && o.tid2comp.delete(i)
            }
            e._RF.push({}, "1fb62WC3PZPvLhjoZQfrREJ", "ECSEntity", void 0);
            t("ECSEntity", function() {
                function t() {
                    this.eid = -1,
                    this.name = "",
                    this.isValid = !0,
                    this.mask = new n,
                    this.compTid2Ctor = new Map,
                    this.compTid2Obj = new Map,
                    this._parent = null,
                    this._children = null
                }
                var e = t.prototype;
                return e.addChild = function(t) {
                    t._parent = this,
                    this.children.set(t.eid, t)
                }
                ,
                e.removeChild = function(t, i) {
                    void 0 === i && (i = !0),
                    null != this.children && (t.parent = null,
                    this.children.delete(t.eid),
                    i && t.destroy())
                }
                ,
                e.add = function(t, i) {
                    if (void 0 === i && (i = !1),
                    "function" == typeof t) {
                        var e, n = t.tid;
                        if (-1 === t.tid)
                            throw Error("【" + this.name + "】实体【" + t.compName + "】组件未注册");
                        if (this.compTid2Ctor.has(n)) {
                            if (!i)
                                return console.log("【" + this.name + "】实体【" + t.compName + "】组件已存在"),
                                this[t.compName];
                            this.remove(t)
                        }
                        return this.mask.set(n),
                        this.compTid2Obj.has(n) ? (e = this.compTid2Obj.get(n),
                        this.compTid2Obj.delete(n)) : e = function(t) {
                            var i = o.compCtors[t.tid];
                            if (!i)
                                throw Error("没有找到该组件的构造函数，检查" + t.compName + "是否为不可构造的组件");
                            return o.compPools.get(t.tid).pop() || new i
                        }(t),
                        this[t.compName] = e,
                        this.compTid2Ctor.set(n, t),
                        e.ent = this,
                        s(this, n),
                        e
                    }
                    var r = t.constructor
                      , h = r.tid;
                    if (-1 === h || null == h)
                        throw Error("【" + this.name + "】实体【" + r.name + "】组件未注册");
                    if (this.compTid2Ctor.has(h))
                        throw Error("【" + this.name + "】实体【" + r.name + "】组件已经存在");
                    return this.mask.set(h),
                    this[r.compName] = t,
                    this.compTid2Ctor.set(h, r),
                    t.ent = this,
                    t.canRecycle = !1,
                    s(this, h),
                    this
                }
                ,
                e.addComponents = function() {
                    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
                        i[e] = arguments[e];
                    for (var n = 0, o = i; n < o.length; n++) {
                        var s = o[n];
                        this.add(s)
                    }
                    return this
                }
                ,
                e.get = function(t) {
                    return this[t.compName]
                }
                ,
                e.has = function(t) {
                    return "number" == typeof t ? this.mask.has(t) : this.compTid2Ctor.has(t.tid)
                }
                ,
                e.remove = function(t, i) {
                    void 0 === i && (i = !0);
                    var e = !1
                      , n = t.tid
                      , r = t.compName;
                    if (this.mask.has(n)) {
                        e = !0;
                        var h = this[t.compName];
                        if (h.ent = null,
                        i) {
                            if (h.reset(),
                            h.canRecycle)
                                o.compPools.get(n).push(h)
                        } else
                            this.compTid2Obj.set(n, h)
                    }
                    e && (this[r] = null,
                    this.mask.delete(n),
                    this.compTid2Ctor.delete(n),
                    s(this, n))
                }
                ,
                e.destroy = function() {
                    var t = this;
                    this.isValid = !1,
                    this._parent && (this._parent.removeChild(this, !1),
                    this._parent = null),
                    this._children && (this._children.forEach((function(i) {
                        t.removeChild(i)
                    }
                    )),
                    this._children = null),
                    this.compTid2Ctor.forEach(this._remove, this),
                    function(t) {
                        if (o.eid2Entity.has(t.eid)) {
                            var i = o.entityPool.get(t.name);
                            null == i && (i = [],
                            o.entityPool.set(t.name, i)),
                            i.push(t),
                            o.eid2Entity.delete(t.eid)
                        } else
                            console.warn("试图销毁不存在的实体")
                    }(this),
                    this.compTid2Obj.clear()
                }
                ,
                e._remove = function(t) {
                    this.remove(t, !0)
                }
                ,
                i(t, [{
                    key: "parent",
                    get: function() {
                        return this._parent
                    },
                    set: function(t) {
                        this._parent = t
                    }
                }, {
                    key: "children",
                    get: function() {
                        return null == this._children && (this._children = new Map),
                        this._children
                    }
                }]),
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECSGroup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, i;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            i = t.cclegacy
        }
        ],
        execute: function() {
            i._RF.push({}, "c21a23o9P5FNJamcMmoYWfs", "ECSGroup", void 0);
            t("ECSGroup", function() {
                function t(t) {
                    this.matcher = void 0,
                    this._matchEntities = new Map,
                    this._entitiesCache = null,
                    this.count = 0,
                    this._enteredEntities = null,
                    this._removedEntities = null,
                    this.matcher = t
                }
                var i = t.prototype;
                return i.onComponentAddOrRemove = function(t) {
                    this.matcher.isMatch(t) ? (this._matchEntities.set(t.eid, t),
                    this._entitiesCache = null,
                    this.count++,
                    this._enteredEntities && (this._enteredEntities.set(t.eid, t),
                    this._removedEntities.delete(t.eid))) : this._matchEntities.has(t.eid) && (this._matchEntities.delete(t.eid),
                    this._entitiesCache = null,
                    this.count--,
                    this._enteredEntities && (this._enteredEntities.delete(t.eid),
                    this._removedEntities.set(t.eid, t)))
                }
                ,
                i.watchEntityEnterAndRemove = function(t, e) {
                    this._enteredEntities = t,
                    this._removedEntities = e
                }
                ,
                i.clear = function() {
                    var t, e;
                    this._matchEntities.clear(),
                    this._entitiesCache = null,
                    this.count = 0,
                    null == (t = this._enteredEntities) || t.clear(),
                    null == (e = this._removedEntities) || e.clear()
                }
                ,
                e(t, [{
                    key: "matchEntities",
                    get: function() {
                        return null === this._entitiesCache && (this._entitiesCache = Array.from(this._matchEntities.values())),
                        this._entitiesCache
                    }
                }, {
                    key: "entity",
                    get: function() {
                        return this.matchEntities[0]
                    }
                }]),
                t
            }());
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECSMask.ts", ["cc", "./ECSModel.ts"], (function(t) {
    var s, i;
    return {
        setters: [function(t) {
            s = t.cclegacy
        }
        , function(t) {
            i = t.ECSModel
        }
        ],
        execute: function() {
            s._RF.push({}, "d18694PPbtGs5Ipgo/vaJBX", "ECSMask", void 0);
            t("ECSMask", function() {
                function t() {
                    this.mask = void 0,
                    this.size = 0;
                    var t = Math.ceil(i.compTid / 31);
                    this.mask = new Uint32Array(t),
                    this.size = t
                }
                var s = t.prototype;
                return s.set = function(t) {
                    this.mask[t / 31 >>> 0] |= 1 << t % 31
                }
                ,
                s.delete = function(t) {
                    this.mask[t / 31 >>> 0] &= ~(1 << t % 31)
                }
                ,
                s.has = function(t) {
                    return !!(this.mask[t / 31 >>> 0] & 1 << t % 31)
                }
                ,
                s.or = function(t) {
                    for (var s = 0; s < this.size; s++)
                        if (this.mask[s] & t.mask[s])
                            return !0;
                    return !1
                }
                ,
                s.and = function(t) {
                    for (var s = 0; s < this.size; s++)
                        if ((this.mask[s] & t.mask[s]) != this.mask[s])
                            return !1;
                    return !0
                }
                ,
                s.clear = function() {
                    for (var t = 0; t < this.size; t++)
                        this.mask[t] = 0
                }
                ,
                t
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECSMatcher.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECSMask.ts", "./ECSModel.ts"], (function(t) {
    var i, n, r, e, s, h, u;
    return {
        setters: [function(t) {
            i = t.construct,
            n = t.createForOfIteratorHelperLoose,
            r = t.createClass,
            e = t.inheritsLoose
        }
        , function(t) {
            s = t.cclegacy
        }
        , function(t) {
            h = t.ECSMask
        }
        , function(t) {
            u = t.ECSModel
        }
        ],
        execute: function() {
            s._RF.push({}, "37e8arlqPlN7amZYyHFvBIp", "ECSMatcher", void 0);
            var o = 1
              , c = (t("ECSMatcher", function() {
                function t() {
                    this.rules = [],
                    this._indices = null,
                    this.isMatch = void 0,
                    this.mid = -1,
                    this._key = null,
                    this.mid = o++
                }
                var e = t.prototype;
                return e.anyOf = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return this.rules.push(i(a, n)),
                    this.bindMatchMethod(),
                    this
                }
                ,
                e.allOf = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return this.rules.push(i(f, n)),
                    this.bindMatchMethod(),
                    this
                }
                ,
                e.onlyOf = function() {
                    for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
                        r[e] = arguments[e];
                    this.rules.push(i(f, r));
                    for (var s, h = [], o = n(u.compCtors); !(s = o()).done; ) {
                        var c = s.value;
                        r.indexOf(c) < 0 && h.push(c)
                    }
                    return this.rules.push(i(l, h)),
                    this.bindMatchMethod(),
                    this
                }
                ,
                e.excludeOf = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return this.rules.push(i(l, n)),
                    this.bindMatchMethod(),
                    this
                }
                ,
                e.bindMatchMethod = function() {
                    1 === this.rules.length ? this.isMatch = this.isMatch1 : 2 === this.rules.length ? this.isMatch = this.isMatch2 : this.isMatch = this.isMatchMore
                }
                ,
                e.isMatch1 = function(t) {
                    return this.rules[0].isMatch(t)
                }
                ,
                e.isMatch2 = function(t) {
                    return this.rules[0].isMatch(t) && this.rules[1].isMatch(t)
                }
                ,
                e.isMatchMore = function(t) {
                    for (var i, r = n(this.rules); !(i = r()).done; ) {
                        if (!i.value.isMatch(t))
                            return !1
                    }
                    return !0
                }
                ,
                e.clone = function() {
                    var i = new t;
                    return i.mid = o++,
                    this.rules.forEach((function(t) {
                        return i.rules.push(t)
                    }
                    )),
                    i
                }
                ,
                r(t, [{
                    key: "key",
                    get: function() {
                        if (!this._key) {
                            for (var t = "", i = 0; i < this.rules.length; i++)
                                t += this.rules[i].getKey(),
                                i < this.rules.length - 1 && (t += " && ");
                            this._key = t
                        }
                        return this._key
                    }
                }, {
                    key: "indices",
                    get: function() {
                        var t = this;
                        return null === this._indices && (this._indices = [],
                        this.rules.forEach((function(i) {
                            Array.prototype.push.apply(t._indices, i.indices)
                        }
                        ))),
                        this._indices
                    }
                }]),
                t
            }()),
            function() {
                function t() {
                    this.indices = [],
                    this.mask = new h;
                    for (var t = -1, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                        n[r] = arguments[r];
                    for (var e = n.length, s = 0; s < e; s++) {
                        if (-1 == (t = "number" == typeof n[s] ? n[s] : n[s].tid))
                            throw Error("存在没有注册的组件！");
                        this.mask.set(t),
                        this.indices.indexOf(t) < 0 && this.indices.push(t)
                    }
                    e > 1 && this.indices.sort((function(t, i) {
                        return t - i
                    }
                    ))
                }
                return t.prototype.toString = function() {
                    return this.indices.join("-")
                }
                ,
                t
            }())
              , a = function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                e(i, t);
                var n = i.prototype;
                return n.isMatch = function(t) {
                    return this.mask.or(t.mask)
                }
                ,
                n.getKey = function() {
                    return "anyOf:" + this.toString()
                }
                ,
                i
            }(c)
              , f = function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                e(i, t);
                var n = i.prototype;
                return n.isMatch = function(t) {
                    return this.mask.and(t.mask)
                }
                ,
                n.getKey = function() {
                    return "allOf:" + this.toString()
                }
                ,
                i
            }(c)
              , l = function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                e(i, t);
                var n = i.prototype;
                return n.getKey = function() {
                    return "excludeOf:" + this.toString()
                }
                ,
                n.isMatch = function(t) {
                    return !this.mask.or(t.mask)
                }
                ,
                i
            }(c);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECSModel.ts", ["cc", "./ECSGroup.ts"], (function(e) {
    var o, n;
    return {
        setters: [function(e) {
            o = e.cclegacy
        }
        , function(e) {
            n = e.ECSGroup
        }
        ],
        execute: function() {
            o._RF.push({}, "1d60egM6r9Gta4Op3VABSGM", "ECSModel", void 0);
            var t = e("ECSModel", function() {
                function e() {}
                return e.createGroup = function(o) {
                    var t = e.groups.get(o.mid);
                    if (!t) {
                        t = new n(o),
                        e.groups.set(o.mid, t);
                        for (var r = o.indices, p = 0; p < r.length; p++)
                            e.compAddOrRemove.get(r[p]).push(t.onComponentAddOrRemove.bind(t))
                    }
                    return t
                }
                ,
                e
            }());
            t.eid = 1,
            t.entityCtors = new Map,
            t.entityPool = new Map,
            t.eid2Entity = new Map,
            t.compTid = 0,
            t.compPools = new Map,
            t.compCtors = [],
            t.compAddOrRemove = new Map,
            t.tid2comp = new Map,
            t.groups = new Map,
            t.systems = new Map,
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ECSSystem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECSModel.ts"], (function(t) {
    var e, i, s, n;
    return {
        setters: [function(t) {
            e = t.createForOfIteratorHelperLoose,
            i = t.createClass
        }
        , function(t) {
            s = t.cclegacy
        }
        , function(t) {
            n = t.ECSModel
        }
        ],
        execute: function() {
            s._RF.push({}, "9261fRWg2RBY5kxbFJsY1QC", "ECSSystem", void 0),
            t("ECSComblockSystem", function() {
                function t() {
                    this.group = void 0,
                    this.dt = 0,
                    this.enteredEntities = null,
                    this.removedEntities = null,
                    this.hasEntityEnter = !1,
                    this.hasEntityRemove = !1,
                    this.hasUpdate = !1,
                    this.tmpExecute = null,
                    this.execute = void 0;
                    var t = Object.hasOwnProperty
                      , e = Object.getPrototypeOf(this)
                      , i = t.call(e, "entityEnter")
                      , s = t.call(e, "entityRemove")
                      , o = t.call(e, "firstUpdate")
                      , r = t.call(e, "update");
                    this.hasEntityEnter = i,
                    this.hasEntityRemove = s,
                    this.hasUpdate = r,
                    i || s ? (this.enteredEntities = new Map,
                    this.removedEntities = new Map,
                    this.execute = this.execute1,
                    this.group = n.createGroup(this.filter()),
                    this.group.watchEntityEnterAndRemove(this.enteredEntities, this.removedEntities)) : (this.execute = this.execute0,
                    this.group = n.createGroup(this.filter())),
                    o && (this.tmpExecute = this.execute,
                    this.execute = this.updateOnce)
                }
                var i = t.prototype;
                return i.init = function() {}
                ,
                i.onDestroy = function() {}
                ,
                i.hasEntity = function() {
                    return this.group.count > 0
                }
                ,
                i.updateOnce = function(t) {
                    if (0 !== this.group.count) {
                        if (this.dt = t,
                        this.enteredEntities.size > 0) {
                            for (var i, s = this.enteredEntities.values(), n = e(s); !(i = n()).done; ) {
                                var o = i.value;
                                this.entityEnter(o)
                            }
                            this.enteredEntities.clear()
                        }
                        for (var r, h = e(this.group.matchEntities); !(r = h()).done; ) {
                            var u = r.value;
                            this.firstUpdate(u)
                        }
                        this.execute = this.tmpExecute,
                        this.execute(t),
                        this.tmpExecute = null
                    }
                }
                ,
                i.execute0 = function(t) {
                    if (0 !== this.group.count && (this.dt = t,
                    this.hasUpdate))
                        for (var i, s = e(this.group.matchEntities); !(i = s()).done; ) {
                            var n = i.value;
                            this.update(n)
                        }
                }
                ,
                i.execute1 = function(t) {
                    var i;
                    if (this.removedEntities.size > 0) {
                        if (this.hasEntityRemove) {
                            i = this.removedEntities.values();
                            for (var s, n = e(i); !(s = n()).done; ) {
                                var o = s.value;
                                this.entityRemove(o)
                            }
                        }
                        this.removedEntities.clear()
                    }
                    if (0 !== this.group.count) {
                        if (this.dt = t,
                        this.enteredEntities.size > 0) {
                            if (this.hasEntityEnter) {
                                i = this.enteredEntities.values();
                                for (var r, h = e(i); !(r = h()).done; ) {
                                    var u = r.value;
                                    this.entityEnter(u)
                                }
                            }
                            this.enteredEntities.clear()
                        }
                        if (this.hasUpdate)
                            for (var c, a = e(this.group.matchEntities); !(c = a()).done; ) {
                                var l = c.value;
                                this.update(l)
                            }
                    }
                }
                ,
                t
            }()).s = !0;
            t("ECSRootSystem", function() {
                function t() {
                    this.executeSystemFlows = [],
                    this.systemCnt = 0
                }
                var e = t.prototype;
                return e.add = function(t) {
                    return t instanceof o ? Array.prototype.push.apply(this.executeSystemFlows, t.comblockSystems) : this.executeSystemFlows.push(t),
                    this.systemCnt = this.executeSystemFlows.length,
                    this
                }
                ,
                e.init = function() {
                    var t = this;
                    n.systems.forEach((function(e) {
                        return t.add(e)
                    }
                    )),
                    this.executeSystemFlows.forEach((function(t) {
                        return t.init()
                    }
                    ))
                }
                ,
                e.execute = function(t) {
                    for (var e = 0; e < this.systemCnt; e++)
                        this.executeSystemFlows[e].execute(t)
                }
                ,
                e.clear = function() {
                    this.executeSystemFlows.forEach((function(t) {
                        return t.onDestroy()
                    }
                    ))
                }
                ,
                t
            }());
            var o = t("ECSSystem", function() {
                function t() {
                    this._comblockSystems = []
                }
                return t.prototype.add = function(e) {
                    return e instanceof t ? (Array.prototype.push.apply(this._comblockSystems, e._comblockSystems),
                    e._comblockSystems.length = 0) : this._comblockSystems.push(e),
                    this
                }
                ,
                i(t, [{
                    key: "comblockSystems",
                    get: function() {
                        return this._comblockSystems
                    }
                }]),
                t
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Effect2DFollow3D.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./MathUtil.ts"], (function(t) {
    var e, o, i, n, r, a, s, l, c, u, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            i = t.initializerDefineProperty,
            n = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            a = t._decorator,
            s = t.Node,
            l = t.Vec3,
            c = t.Component
        }
        , function(t) {
            u = t.oops
        }
        , function(t) {
            p = t.MathUtil
        }
        ],
        execute: function() {
            var f, d, h, m, y, w, b, v;
            r._RF.push({}, "f04f92UNY1J34UPA0VrEIsH", "Effect2DFollow3D", void 0);
            var D = a.ccclass
              , g = a.property;
            t("Effect2DFollow3D", (f = D("Effect2DFollow3D"),
            d = g({
                type: s
            }),
            h = g({
                type: s
            }),
            f((w = e((y = function(t) {
                function e() {
                    for (var e, o = arguments.length, r = new Array(o), a = 0; a < o; a++)
                        r[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    i(e, "node3d", w, n(e)),
                    i(e, "nodeUi", b, n(e)),
                    i(e, "distance", v, n(e)),
                    e.camera = null,
                    e.pos = new l,
                    e
                }
                o(e, t);
                var r = e.prototype;
                return r.setTarget = function(t) {
                    this.node3d = t
                }
                ,
                r.start = function() {
                    var t = this.zoom();
                    this.node.setScale(t, t, 1)
                }
                ,
                r.lateUpdate = function(t) {
                    var e = this.zoom();
                    e = p.lerp(this.node.scale.x, e, .1),
                    this.node.setScale(e, e, 1)
                }
                ,
                r.zoom = function() {
                    this.camera.convertToUINode(this.node3d.worldPosition, u.gui.game, this.pos),
                    this.nodeUi.setPosition(this.pos),
                    l.transformMat4(this.pos, this.node3d.worldPosition, this.camera._camera.matView);
                    var t = this.distance / Math.abs(this.pos.z);
                    return Math.floor(100 * t) / 100
                }
                ,
                e
            }(c)).prototype, "node3d", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b = e(y.prototype, "nodeUi", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = e(y.prototype, "distance", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            m = y)) || m));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EffectDelayRelease.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EffectSingleCase.ts"], (function(e) {
    var t, n, i, a, r, c, l, o;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            c = e._decorator,
            l = e.Component
        }
        , function(e) {
            o = e.EffectSingleCase
        }
        ],
        execute: function() {
            var s, f, u;
            r._RF.push({}, "01359fvxlFJZKx7BLUcTSWS", "EffectDelayRelease", void 0);
            var p = c.ccclass
              , y = c.property;
            e("EffectDelayRelease", p("EffectDelayRelease")((u = t((f = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), c = 0; c < n; c++)
                        r[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    i(t, "delay", u, a(t)),
                    t
                }
                n(t, e);
                var r = t.prototype;
                return r.onEnable = function() {
                    this.scheduleOnce(this.onDelay, this.delay)
                }
                ,
                r.onDelay = function() {
                    o.instance.put(this.node)
                }
                ,
                t
            }(l)).prototype, "delay", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            s = f)) || s);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EffectEvent.ts", ["cc"], (function(t) {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "445875CzyRKaLiSXTYH66lm", "EffectEvent", void 0);
            t("EffectEvent", function(t) {
                return t.Put = "EffectEvent_Put",
                t
            }({}));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EffectFinishedRelease.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EffectEvent.ts", "./MessageManager2.ts"], (function(e) {
    var t, n, i, o, a, s, r, c, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            n = e.cclegacy,
            i = e._decorator,
            o = e.sp,
            a = e.Animation,
            s = e.ParticleSystem,
            r = e.Component
        }
        , function(e) {
            c = e.EffectEvent
        }
        , function(e) {
            u = e.message
        }
        ],
        execute: function() {
            var l;
            n._RF.push({}, "a751fmayL5JMYH0D4uJoK5H", "EffectFinishedRelease", void 0);
            var f = i.ccclass;
            i.property,
            e("EffectFinishedRelease", f("EffectFinishedRelease")(l = function(e) {
                function n() {
                    for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                        i[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(i)) || this).maxDuration = 0,
                    t
                }
                t(n, e);
                var i = n.prototype;
                return i.onEnable = function() {
                    var e = this
                      , t = this.getComponent(o.Skeleton);
                    if (t) {
                        var n = t.skeletonData.skeletonJson.animations;
                        for (var i in n) {
                            t.setCompleteListener(this.onRecovery.bind(this)),
                            t.setAnimation(0, i, !1);
                            break
                        }
                    } else {
                        var r = this.node.getComponentsInChildren(a);
                        if (r.length > 0)
                            r.forEach((function(t) {
                                var n, i = null == (n = t.defaultClip) ? void 0 : n.name;
                                if (i) {
                                    var o = t.getState(i);
                                    if (o) {
                                        var a = o.duration;
                                        e.maxDuration = a > e.maxDuration ? a : e.maxDuration
                                    }
                                }
                                t.play()
                            }
                            )),
                            this.scheduleOnce(this.onRecovery.bind(this), this.maxDuration);
                        else if (s) {
                            this.node.getComponentsInChildren(s).forEach((function(t) {
                                t.clear(),
                                t.stop(),
                                t.play();
                                var n = t.duration;
                                e.maxDuration = n > e.maxDuration ? n : e.maxDuration
                            }
                            )),
                            this.scheduleOnce(this.onRecovery.bind(this), this.maxDuration)
                        }
                    }
                }
                ,
                i.onRecovery = function() {
                    this.node.parent && u.dispatchEvent(c.Put, this.node)
                }
                ,
                n
            }(r)) || l);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EffectSingleCase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MessageManager2.ts", "./ResLoader.ts", "./ViewUtil.ts", "./EffectEvent.ts", "./EffectFinishedRelease.ts"], (function(e) {
    var t, n, s, i, r, a, f, c, o, u, l, d, h, p;
    return {
        setters: [function(e) {
            t = e.asyncToGenerator,
            n = e.regeneratorRuntime,
            s = e.createClass
        }
        , function(e) {
            i = e.cclegacy,
            r = e.Prefab,
            a = e.NodePool,
            f = e.sp,
            c = e.Animation,
            o = e.ParticleSystem
        }
        , function(e) {
            u = e.message
        }
        , function(e) {
            l = e.resLoader
        }
        , function(e) {
            d = e.ViewUtil
        }
        , function(e) {
            h = e.EffectEvent
        }
        , function(e) {
            p = e.EffectFinishedRelease
        }
        ],
        execute: function() {
            i._RF.push({}, "bf338Z+oYxIUbd4bPREw9Ud", "EffectSingleCase", void 0),
            e("EffectSingleCase", function() {
                function e() {
                    this._speed = 1,
                    this.effects = new Map,
                    this.effects_use = new Map,
                    this.res = new Map,
                    u.on(h.Put, this.onPut, this)
                }
                var i = e.prototype;
                return i.onPut = function(e, t) {
                    this.put(t)
                }
                ,
                i.getCount = function(e) {
                    var t = this.effects.get(e);
                    return t ? t.size() : 0
                }
                ,
                i.preload = function(e, s, i) {
                    var f = this;
                    return void 0 === i && (i = l.defaultBundleName),
                    new Promise(t(n().mark((function t(c, o) {
                        var u, h, p;
                        return n().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return null == (u = f.effects.get(s)) && (u = new a,
                                    f.effects.set(s, u)),
                                    f.res.set(s, i),
                                    t.next = 5,
                                    l.loadAsync(i, s, r);
                                case 5:
                                    for (h = 0; h < e; h++)
                                        (p = d.createPrefabNode(s, i)).res_path = s,
                                        u.put(p);
                                    c();
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))))
                }
                ,
                i.loadAndShow = function(e, s, i) {
                    var a = this;
                    return new Promise(t(n().mark((function t(f, c) {
                        var o, u;
                        return n().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (null != a.effects.get(e)) {
                                        t.next = 15;
                                        break
                                    }
                                    if (!i || !i.bundleName) {
                                        t.next = 8;
                                        break
                                    }
                                    return a.res.set(e, i.bundleName),
                                    t.next = 6,
                                    l.loadAsync(i.bundleName, e, r);
                                case 6:
                                    t.next = 11;
                                    break;
                                case 8:
                                    return a.res.set(e, l.defaultBundleName),
                                    t.next = 11,
                                    l.loadAsync(e, r);
                                case 11:
                                    o = a.show(e, s, i),
                                    f(o),
                                    t.next = 17;
                                    break;
                                case 15:
                                    u = a.show(e, s, i),
                                    f(u);
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))))
                }
                ,
                i.show = function(e, t, n) {
                    var s, i = this.effects.get(e);
                    if (null == i && (i = new a,
                    this.effects.set(e, i)),
                    0 == i.size()) {
                        var r = l.defaultBundleName;
                        n && n.bundleName && (r = n.bundleName),
                        (s = d.createPrefabNode(e, r)).res_path = e,
                        n && n.isPlayFinishedRelease && s.addComponent(p)
                    } else
                        s = i.get();
                    return this.setSpeed(s),
                    n && (n.pos && (s.position = n.pos),
                    n.worldPos && (s.worldPosition = n.worldPos)),
                    t && (s.parent = t),
                    this.effects_use.set(s, !0),
                    s
                }
                ,
                i.put = function(e) {
                    var t = e.res_path;
                    if (t) {
                        var n = this.effects.get(t);
                        n && (this.effects_use.delete(e),
                        n.put(e))
                    }
                }
                ,
                i.clear = function(e) {
                    if (e) {
                        var t = this.effects.get(e);
                        t && t.clear()
                    } else
                        this.effects.forEach((function(e) {
                            e.clear()
                        }
                        )),
                        this.effects.clear()
                }
                ,
                i.release = function(e) {
                    if (e) {
                        this.clear(e);
                        var t = this.res.get(e);
                        l.release(e, t),
                        this.res.delete(e)
                    } else
                        this.clear(),
                        this.res.forEach((function(e, t) {
                            l.release(t, e)
                        }
                        )),
                        this.res.clear()
                }
                ,
                i.setSpeed = function(e) {
                    var t = this
                      , n = e.getComponent(f.Skeleton);
                    if (n)
                        n.timeScale = this.speed;
                    else {
                        var s = e.getComponentsInChildren(c);
                        if (s.length > 0)
                            s.forEach((function(e) {
                                var n, s = null == (n = e.defaultClip) ? void 0 : n.name;
                                if (s) {
                                    var i = e.getState(s);
                                    i && (i.speed = t.speed)
                                }
                            }
                            ));
                        else if (o) {
                            e.getComponentsInChildren(o).forEach((function(e) {
                                e.simulationSpeed = t.speed
                            }
                            ))
                        }
                    }
                }
                ,
                s(e, [{
                    key: "speed",
                    get: function() {
                        return this._speed
                    },
                    set: function(e) {
                        var t = this;
                        this._speed = e,
                        this.effects_use.forEach((function(e, n) {
                            t.setSpeed(n)
                        }
                        ))
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return null == this._instance && (this._instance = new e),
                        this._instance
                    }
                }]),
                e
            }())._instance = void 0,
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EncryptUtil.ts", ["cc"], (function() {
    var t;
    return {
        setters: [function(c) {
            t = c.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "46d12Bx4JdKnIYHhcvNk6S1", "EncryptUtil", void 0),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Enum.ts", ["cc"], (function(n) {
    var e;
    return {
        setters: [function(n) {
            e = n.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "cc5c9rmCItDq7++Kh2zk63Y", "Enum", void 0);
            n("APP_CONFIG", function(n) {
                return n.NAME = "Prank-Call-Tung-Tung-Sahur",
                n.BGM = "snd/BGM",
                n.BGMREMOTE = "home/bgm.mp3",
                n.CLICK = "snd/click",
                n.FULL = "snd/full",
                n
            }({})),
            n("EngineMessage", function(n) {
                return n.GAME_ADBEFORE = "EngineMessage.GAME_ADBEFORE",
                n.GAME_ADAFTER = "EngineMessage.GAME_ADAFTER",
                n.GAME_CARD_CHANGE = "EngineMessage.GAME_CARD_CHANGE",
                n.GAME_SKILL_CHANGE = "EngineMessage.GAME_SKILL_CHANGE",
                n
            }({}));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EventDispatcher.ts", ["cc", "./MessageManager.ts"], (function(t) {
    var s, n;
    return {
        setters: [function(t) {
            s = t.cclegacy
        }
        , function(t) {
            n = t.MessageEventData
        }
        ],
        execute: function() {
            s._RF.push({}, "68c88KVwbBMF4GxOTbAX7H4", "EventDispatcher", void 0);
            t("EventDispatcher", function() {
                function t() {
                    this._msg = null
                }
                var s = t.prototype;
                return s.on = function(t, s, e) {
                    null == this._msg && (this._msg = new n),
                    this._msg.on(t, s, e)
                }
                ,
                s.off = function(t) {
                    this._msg && this._msg.off(t)
                }
                ,
                s.dispatchEvent = function(t, s) {
                    null == this._msg && (this._msg = new n),
                    this._msg.dispatchEvent(t, s)
                }
                ,
                s.destroy = function() {
                    this._msg && this._msg.removes(),
                    this._msg = null
                }
                ,
                t
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EventDispatcher2.ts", ["cc", "./MessageManager2.ts"], (function(t) {
    var s, n;
    return {
        setters: [function(t) {
            s = t.cclegacy
        }
        , function(t) {
            n = t.MessageEventData
        }
        ],
        execute: function() {
            s._RF.push({}, "c680af5iPNKeIO4cArf/90m", "EventDispatcher", void 0);
            t("EventDispatcher", function() {
                function t() {
                    this._msg = null
                }
                var s = t.prototype;
                return s.on = function(t, s, e) {
                    null == this._msg && (this._msg = new n),
                    this._msg.on(t, s, e)
                }
                ,
                s.off = function(t) {
                    this._msg && this._msg.off(t)
                }
                ,
                s.dispatchEvent = function(t) {
                    var s;
                    null == this._msg && (this._msg = new n);
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), c = 1; c < e; c++)
                        i[c - 1] = arguments[c];
                    (s = this._msg).dispatchEvent.apply(s, [t].concat(i))
                }
                ,
                s.destroy = function() {
                    this._msg && this._msg.clear(),
                    this._msg = null
                }
                ,
                t
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/EventMessage.ts", ["cc"], (function(E) {
    var e;
    return {
        setters: [function(E) {
            e = E.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "beea7u9xnJD4rMj6ua/LTcF", "EventMessage", void 0);
            E("EventMessage", function(E) {
                return E.GAME_SHOW = "GAME_ENTER",
                E.GAME_HIDE = "GAME_EXIT",
                E.GAME_RESIZE = "GAME_RESIZE",
                E.GAME_FULL_SCREEN = "GAME_FULL_SCREEN",
                E.GAME_ORIENTATION = "GAME_ORIENTATION",
                E
            }({}));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FlashSpine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, i, n, s, a, o;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            i = t.cclegacy,
            n = t._decorator,
            s = t.sp,
            a = t.Material,
            o = t.Component
        }
        ],
        execute: function() {
            var r;
            i._RF.push({}, "61de7pPhiNF5plXR5pVKfXu", "FlashSpine", void 0);
            var l = n.ccclass;
            n.property,
            t("default", l("FlashSpine")(r = function(t) {
                function i() {
                    for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                        n[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(n)) || this).duration = .5,
                    e._median = 0,
                    e._time = 0,
                    e._material = null,
                    e._skeleton = null,
                    e
                }
                e(i, t);
                var n = i.prototype;
                return n.onLoad = function() {
                    this._median = this.duration / 2,
                    this._skeleton = this.node.getComponent(s.Skeleton),
                    this._material = this._skeleton.customMaterial,
                    this._material.setProperty("u_rate", 1)
                }
                ,
                n.update = function(t) {
                    if (this._time > 0) {
                        this._time -= t,
                        this._time = this._time < 0 ? 0 : this._time;
                        var e = 2 * Math.abs(this._time - this._median) / this.duration
                          , i = new a;
                        i.copy(this._material),
                        this._skeleton.customMaterial = i,
                        i.setProperty("u_rate", e)
                    }
                }
                ,
                n.clickFlash = function() {
                    this._time = this.duration
                }
                ,
                i
            }(o)) || r);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FlashSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var i, e, r, a, n;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy,
            r = t._decorator,
            a = t.Sprite,
            n = t.Component
        }
        ],
        execute: function() {
            var s;
            e._RF.push({}, "a7a9eXWbUpJ3rONqlgUYCY/", "FlashSprite", void 0);
            var o = r.ccclass;
            r.property,
            t("default", o("FlashSprite")(s = function(t) {
                function e() {
                    for (var i, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
                        r[a] = arguments[a];
                    return (i = t.call.apply(t, [this].concat(r)) || this).duration = .5,
                    i._median = 0,
                    i._time = 0,
                    i._material = null,
                    i
                }
                i(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    this._median = this.duration / 2,
                    this._material = this.node.getComponent(a).getMaterial(0),
                    this._material.setProperty("u_rate", 1)
                }
                ,
                r.update = function(t) {
                    if (this._time > 0) {
                        this._time -= t,
                        this._time = this._time < 0 ? 0 : this._time;
                        var i = 2 * Math.abs(this._time - this._median) / this.duration;
                        this._material.setProperty("u_rate", i)
                    }
                }
                ,
                r.clickFlash = function() {
                    this._time = this.duration
                }
                ,
                e
            }(n)) || s);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FreeFlightCamera.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, o, i, n, r, s, a, h, c, p, l, y, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            s = e._decorator,
            a = e.math,
            h = e.KeyCode,
            c = e.CCFloat,
            p = e.input,
            l = e.Input,
            y = e.game,
            u = e.Component
        }
        ],
        execute: function() {
            var d, f, v, _, C, S, T, m, E, g, k, w;
            r._RF.push({}, "6c841mU+4JNvqwHy5tJsJh0", "FreeFlightCamera", void 0);
            var x = s.ccclass
              , z = s.property
              , F = s.menu
              , A = a.Vec2
              , U = a.Vec3
              , b = a.Quat
              , D = new A
              , O = new A
              , L = new U
              , H = new b
              , K = "W".charCodeAt(0)
              , M = "S".charCodeAt(0)
              , P = "A".charCodeAt(0)
              , W = "D".charCodeAt(0)
              , N = "Q".charCodeAt(0)
              , R = "E".charCodeAt(0)
              , Y = h.SHIFT_LEFT;
            e("FreeFlightCamera", (d = x("FreeFlightCamera"),
            f = F("OopsFramework/Camera/FreeFlightCamera （自由飞行摄像机）"),
            v = z({
                type: c,
                tooltip: "移动速度"
            }),
            _ = z({
                type: c,
                tooltip: "按Shift键后的速度"
            }),
            C = z({
                type: c,
                slide: !0,
                range: [.05, .5, .01],
                tooltip: "移动后惯性效果"
            }),
            S = z({
                type: c,
                tooltip: "旋转速度"
            }),
            d(T = f((E = t((m = function(e) {
                function t() {
                    for (var t, o = arguments.length, r = new Array(o), s = 0; s < o; s++)
                        r[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    i(t, "moveSpeed", E, n(t)),
                    i(t, "moveSpeedShiftScale", g, n(t)),
                    i(t, "damp", k, n(t)),
                    i(t, "rotateSpeed", w, n(t)),
                    t._euler = new U,
                    t._velocity = new U,
                    t._position = new U,
                    t._speedScale = 1,
                    t
                }
                o(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    p.on(l.EventType.MOUSE_WHEEL, this.onMouseWheel, this),
                    p.on(l.EventType.KEY_DOWN, this.onKeyDown, this),
                    p.on(l.EventType.KEY_UP, this.onKeyUp, this),
                    p.on(l.EventType.TOUCH_START, this.onTouchStart, this),
                    p.on(l.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    p.on(l.EventType.TOUCH_END, this.onTouchEnd, this),
                    U.copy(this._euler, this.node.eulerAngles),
                    U.copy(this._position, this.node.position)
                }
                ,
                r.onDestroy = function() {
                    p.off(l.EventType.MOUSE_WHEEL, this.onMouseWheel, this),
                    p.off(l.EventType.KEY_DOWN, this.onKeyDown, this),
                    p.off(l.EventType.KEY_UP, this.onKeyUp, this),
                    p.off(l.EventType.TOUCH_START, this.onTouchStart, this),
                    p.off(l.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    p.off(l.EventType.TOUCH_END, this.onTouchEnd, this)
                }
                ,
                r.update = function(e) {
                    U.transformQuat(L, this._velocity, this.node.rotation),
                    U.scaleAndAdd(this._position, this._position, L, this.moveSpeed * this._speedScale),
                    U.lerp(L, this.node.position, this._position, e / this.damp),
                    this.node.setPosition(L),
                    b.fromEuler(H, this._euler.x, this._euler.y, this._euler.z),
                    b.slerp(H, this.node.rotation, H, e / this.damp),
                    this.node.setRotation(H)
                }
                ,
                r.onMouseWheel = function(e) {
                    var t = -e.getScrollY() * this.moveSpeed * .1;
                    U.transformQuat(L, U.UNIT_Z, this.node.rotation),
                    U.scaleAndAdd(this._position, this.node.position, L, t)
                }
                ,
                r.onKeyDown = function(e) {
                    var t = this._velocity;
                    e.keyCode === Y ? this._speedScale = this.moveSpeedShiftScale : e.keyCode === K ? 0 === t.z && (t.z = -1) : e.keyCode === M ? 0 === t.z && (t.z = 1) : e.keyCode === P ? 0 === t.x && (t.x = -1) : e.keyCode === W ? 0 === t.x && (t.x = 1) : e.keyCode === N ? 0 === t.y && (t.y = -1) : e.keyCode === R && 0 === t.y && (t.y = 1)
                }
                ,
                r.onKeyUp = function(e) {
                    var t = this._velocity;
                    e.keyCode === Y ? this._speedScale = 1 : e.keyCode === K ? t.z < 0 && (t.z = 0) : e.keyCode === M ? t.z > 0 && (t.z = 0) : e.keyCode === P ? t.x < 0 && (t.x = 0) : e.keyCode === W ? t.x > 0 && (t.x = 0) : e.keyCode === N ? t.y < 0 && (t.y = 0) : e.keyCode === R && t.y > 0 && (t.y = 0)
                }
                ,
                r.onTouchStart = function(e) {
                    y.canvas.requestPointerLock()
                }
                ,
                r.onTouchMove = function(e) {
                    e.getStartLocation(D),
                    D.x > .4 * y.canvas.width ? (e.getDelta(O),
                    this._euler.y -= O.x * this.rotateSpeed * .1,
                    this._euler.x += O.y * this.rotateSpeed * .1) : (e.getLocation(O),
                    A.subtract(O, O, D),
                    this._velocity.x = .01 * O.x,
                    this._velocity.z = .01 * -O.y)
                }
                ,
                r.onTouchEnd = function(e) {
                    document.exitPointerLock && document.exitPointerLock(),
                    e.getStartLocation(D),
                    D.x < .4 * y.canvas.width && (this._velocity.x = 0,
                    this._velocity.z = 0)
                }
                ,
                t
            }(u)).prototype, "moveSpeed", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            g = t(m.prototype, "moveSpeedShiftScale", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5
                }
            }),
            k = t(m.prototype, "damp", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .2
                }
            }),
            w = t(m.prototype, "rotateSpeed", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            T = m)) || T) || T));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameCollision.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
    var o, n, t, e, r, l, s, c, a;
    return {
        setters: [function(i) {
            o = i.applyDecoratedDescriptor,
            n = i.inheritsLoose,
            t = i.initializerDefineProperty,
            e = i.assertThisInitialized
        }
        , function(i) {
            r = i.cclegacy,
            l = i._decorator,
            s = i.ccenum,
            c = i.Collider,
            a = i.Component
        }
        ],
        execute: function() {
            var h, g, u, p, f;
            r._RF.push({}, "7fa3eqzDkpBUq8OUNr05VJh", "GameCollision", void 0);
            var y = l.ccclass
              , C = l.property
              , d = i("CollisionType", function(i) {
                return i[i.Role = 0] = "Role",
                i[i.Ballistic = 1] = "Ballistic",
                i[i.Wall = 2] = "Wall",
                i
            }({}));
            s(d);
            var T = "onTriggerEnter"
              , E = "onTriggerStay"
              , m = "onTriggerExit"
              , b = "onCollisionEnter"
              , v = "onCollisionStay"
              , x = "onCollisionExit";
            i("GameCollision", (h = y("GameCollision"),
            g = C({
                type: d,
                tooltip: "碰撞物体类型"
            }),
            h((f = o((p = function(i) {
                function o() {
                    for (var o, n = arguments.length, r = new Array(n), l = 0; l < n; l++)
                        r[l] = arguments[l];
                    return (o = i.call.apply(i, [this].concat(r)) || this).collider = null,
                    t(o, "type", f, e(o)),
                    o
                }
                n(o, i);
                var r = o.prototype;
                return r.onLoad = function() {
                    this.collider = this.getComponent(c),
                    this.collider.isTrigger ? (this.collider.on(T, this.onTrigger, this),
                    this.collider.on(E, this.onTrigger, this),
                    this.collider.on(m, this.onTrigger, this)) : (this.collider.on(b, this.onCollision, this),
                    this.collider.on(v, this.onCollision, this),
                    this.collider.on(x, this.onCollision, this))
                }
                ,
                r.onTrigger = function(i) {
                    switch (i.type) {
                    case T:
                        this.onTriggerEnter(i);
                        break;
                    case E:
                        this.onTriggerStay(i);
                        break;
                    case m:
                        this.onTriggerExit(i)
                    }
                }
                ,
                r.onTriggerEnter = function(i) {}
                ,
                r.onTriggerStay = function(i) {}
                ,
                r.onTriggerExit = function(i) {}
                ,
                r.onCollision = function(i) {
                    switch (i.type) {
                    case b:
                        this.onCollisionEnter(i);
                        break;
                    case v:
                        this.onCollisionStay(i);
                        break;
                    case x:
                        this.onCollisionExit(i)
                    }
                }
                ,
                r.onCollisionEnter = function(i) {}
                ,
                r.onCollisionStay = function(i) {}
                ,
                r.onCollisionExit = function(i) {}
                ,
                o
            }(a)).prototype, "type", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return d.Ballistic
                }
            }),
            u = p)) || u));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameComponent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./EventDispatcher2.ts", "./EventMessage.ts", "./ResLoader.ts", "./ViewUtil.ts"], (function(e) {
    var t, n, s, o, r, i, a, u, c, h, f, d, l, p, v, y, m, E, g, P;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.asyncToGenerator,
            s = e.regeneratorRuntime,
            o = e.createClass
        }
        , function(e) {
            r = e.cclegacy,
            i = e._decorator,
            a = e.Prefab,
            u = e.Node,
            c = e.Button,
            h = e.EventHandler,
            f = e.input,
            d = e.Input,
            l = e.Component,
            p = e.isValid,
            v = e.SpriteFrame
        }
        , function(e) {
            y = e.oops
        }
        , function(e) {
            m = e.EventDispatcher
        }
        , function(e) {
            E = e.EventMessage
        }
        , function(e) {
            g = e.resLoader
        }
        , function(e) {
            P = e.ViewUtil
        }
        ],
        execute: function() {
            var G;
            r._RF.push({}, "62362nWbWZP653j6XL/zJDq", "GameComponent", void 0);
            var R = i.ccclass
              , _ = function(e) {
                return e[e.Load = 0] = "Load",
                e[e.LoadDir = 1] = "LoadDir",
                e[e.Audio = 2] = "Audio",
                e
            }(_ || {});
            e("GameComponent", R("GameComponent")(G = function(e) {
                function r() {
                    for (var t, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                        s[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(s)) || this)._event = null,
                    t.nodes = null,
                    t.resPaths = null,
                    t
                }
                t(r, e);
                var i = r.prototype;
                return i.on = function(e, t, n) {
                    this.event.on(e, t, n)
                }
                ,
                i.off = function(e) {
                    this.event.off(e)
                }
                ,
                i.dispatchEvent = function(e) {
                    for (var t, n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                        s[o - 1] = arguments[o];
                    (t = this.event).dispatchEvent.apply(t, [e].concat(s))
                }
                ,
                i.getNode = function(e) {
                    if (this.nodes)
                        return this.nodes.get(e)
                }
                ,
                i.nodeTreeInfoLite = function() {
                    this.nodes = new Map,
                    P.nodeTreeInfoLite(this.node, this.nodes)
                }
                ,
                i.createPrefabNode = function(e, t) {
                    return void 0 === t && (t = y.res.defaultBundleName),
                    P.createPrefabNode(e, t)
                }
                ,
                i.createPrefabNodeAsync = function(e, t) {
                    var o = this;
                    return void 0 === t && (t = y.res.defaultBundleName),
                    new Promise(n(s().mark((function n(r, i) {
                        var u;
                        return s().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    o.loadAsync(t, e, a);
                                case 2:
                                    u = P.createPrefabNode(e, t),
                                    r(u);
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    ))))
                }
                ,
                i.getRes = function(e, t, n) {
                    return y.res.get(e, t, n)
                }
                ,
                i.addPathToRecord = function(e, t, n, s) {
                    null == this.resPaths && (this.resPaths = new Map);
                    var o = this.resPaths.get(e);
                    if (null == o && (o = new Map,
                    this.resPaths.set(e, o)),
                    n instanceof Array)
                        for (var r = t, i = 0; i < n.length; i++) {
                            var a = n[i]
                              , u = this.getResKey(r, a, s)
                              , c = o.get(u);
                            c ? c.refCount++ : o.set(u, {
                                path: a,
                                bundle: r,
                                refCount: 1,
                                resId: s
                            })
                        }
                    else if ("string" == typeof n) {
                        var h = t
                          , f = n
                          , d = this.getResKey(h, f, s)
                          , l = o.get(d);
                        l ? l.refCount++ : o.set(d, {
                            path: f,
                            bundle: h,
                            refCount: 1,
                            resId: s
                        })
                    } else {
                        var p = y.res.defaultBundleName
                          , v = t
                          , m = this.getResKey(p, v, s)
                          , E = o.get(m);
                        E ? E.refCount++ : o.set(m, {
                            path: v,
                            bundle: p,
                            refCount: 1,
                            resId: s
                        })
                    }
                }
                ,
                i.getResKey = function(e, t, n) {
                    var s = e + ":" + t;
                    return null != n && (s += ":" + n),
                    s
                }
                ,
                i.load = function(e, t, n, s, o) {
                    this.addPathToRecord(_.Load, e, t),
                    y.res.load(e, t, n, s, o)
                }
                ,
                i.loadAsync = function(e, t, n) {
                    return this.addPathToRecord(_.Load, e, t),
                    y.res.loadAsync(e, t, n)
                }
                ,
                i.loadDir = function(e, t, n, s, o) {
                    var r, i;
                    "string" == typeof t ? (r = t,
                    i = e) : (r = e,
                    i = y.res.defaultBundleName),
                    this.addPathToRecord(_.LoadDir, i, r),
                    y.res.loadDir(e, t, n, s, o)
                }
                ,
                i.release = function() {
                    if (this.resPaths) {
                        var e = this.resPaths.get(_.Load);
                        e && (e.forEach((function(e) {
                            for (var t = 0; t < e.refCount; t++)
                                y.res.release(e.path, e.bundle)
                        }
                        )),
                        e.clear())
                    }
                }
                ,
                i.releaseDir = function() {
                    if (this.resPaths) {
                        var e = this.resPaths.get(_.LoadDir);
                        e && e.forEach((function(e) {
                            y.res.releaseDir(e.path, e.bundle)
                        }
                        ))
                    }
                }
                ,
                i.releaseAudioEffect = function() {
                    if (this.resPaths) {
                        var e = this.resPaths.get(_.Audio);
                        e && e.forEach((function(e) {
                            y.audio.putEffect(e.resId, e.path, e.bundle)
                        }
                        ))
                    }
                }
                ,
                i.setSprite = function() {
                    var e = n(s().mark((function e(t, n, o) {
                        var r, i, a;
                        return s().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return void 0 === o && (o = g.defaultBundleName),
                                    e.next = 3,
                                    this.loadAsync(o, n, v);
                                case 3:
                                    if ((r = e.sent) && p(t)) {
                                        e.next = 8;
                                        break
                                    }
                                    return (i = this.resPaths.get(_.Load)) && (a = this.getResKey(o, n),
                                    i.delete(a),
                                    y.res.release(n, o)),
                                    e.abrupt("return");
                                case 8:
                                    r.addRef(),
                                    t.spriteFrame = r;
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, n, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                i.playMusic = function(e, t, n) {
                    y.audio.playMusic(e, t, n)
                }
                ,
                i.playMusicLoop = function(e, t) {
                    y.audio.stopMusic(),
                    y.audio.playMusicLoop(e, t)
                }
                ,
                i.playEffect = function() {
                    var e = n(s().mark((function e(t, n) {
                        var o, r = this;
                        return s().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return null == n && (n = y.res.defaultBundleName),
                                    e.next = 3,
                                    y.audio.playEffect(t, n, (function() {
                                        if (r.isValid) {
                                            var e = r.resPaths.get(_.Audio);
                                            if (e) {
                                                var s = r.getResKey(n, t);
                                                e.delete(s)
                                            }
                                        }
                                    }
                                    ));
                                case 3:
                                    o = e.sent,
                                    this.addPathToRecord(_.Audio, n, t, o);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                i.setButton = function(e) {
                    var t = this;
                    void 0 === e && (e = !0),
                    e && this.node.on(u.EventType.TOUCH_END, (function(e) {
                        var n = t[e.target.name];
                        n && n.call(t, e)
                    }
                    ), this);
                    var n = /<([^>]+)>/;
                    this.node.getComponentsInChildren(c).forEach((function(e) {
                        var s = e.node;
                        if (t[s.name]) {
                            var o = new h;
                            o.target = t.node,
                            o.handler = e.node.name,
                            o.component = t.name.match(n)[1],
                            e.clickEvents.push(o)
                        }
                    }
                    ))
                }
                ,
                i.setEvent = function() {
                    for (var e = this, t = arguments.length, n = new Array(t), s = 0; s < t; s++)
                        n[s] = arguments[s];
                    for (var o = 0, r = n; o < r.length; o++) {
                        var i = r[o]
                          , a = e[i];
                        a ? this.on(i, a, this) : console.error("名为【" + i + "】的全局事方法不存在")
                    }
                }
                ,
                i.setKeyboard = function(e) {
                    e ? (f.on(d.EventType.KEY_DOWN, this.onKeyDown, this),
                    f.on(d.EventType.KEY_UP, this.onKeyUp, this),
                    f.on(d.EventType.KEY_PRESSING, this.onKeyPressing, this)) : (f.off(d.EventType.KEY_DOWN, this.onKeyDown, this),
                    f.off(d.EventType.KEY_UP, this.onKeyUp, this),
                    f.off(d.EventType.KEY_PRESSING, this.onKeyPressing, this))
                }
                ,
                i.onKeyDown = function(e) {}
                ,
                i.onKeyUp = function(e) {}
                ,
                i.onKeyPressing = function(e) {}
                ,
                i.setGameShow = function() {
                    this.on(E.GAME_SHOW, this.onGameShow, this)
                }
                ,
                i.setGameHide = function() {
                    this.on(E.GAME_HIDE, this.onGameHide, this)
                }
                ,
                i.setGameResize = function() {
                    this.on(E.GAME_RESIZE, this.onGameResize, this)
                }
                ,
                i.setGameFullScreen = function() {
                    this.on(E.GAME_FULL_SCREEN, this.onGameFullScreen, this)
                }
                ,
                i.setGameOrientation = function() {
                    this.on(E.GAME_ORIENTATION, this.onGameOrientation, this)
                }
                ,
                i.onGameShow = function() {}
                ,
                i.onGameHide = function() {}
                ,
                i.onGameResize = function() {}
                ,
                i.onGameFullScreen = function() {}
                ,
                i.onGameOrientation = function() {}
                ,
                i.onDestroy = function() {
                    this._event && (this._event.destroy(),
                    this._event = null),
                    this.nodes && (this.nodes.clear(),
                    this.nodes = null),
                    this.resPaths && (this.releaseAudioEffect(),
                    this.release(),
                    this.releaseDir(),
                    this.resPaths.clear(),
                    this.resPaths = null)
                }
                ,
                o(r, [{
                    key: "event",
                    get: function() {
                        return null == this._event && (this._event = new m),
                        this._event
                    }
                }]),
                r
            }(l)) || G);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts"], (function(t) {
    var e, n, a;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            a = t.oops
        }
        ],
        execute: function() {
            n._RF.push({}, "54585zBsmtGfZEDczLG3SH5", "GameConfig", void 0);
            t("GameConfig", function() {
                function t(t) {
                    this._data = null,
                    this._data = Object.freeze(t.json),
                    a.log.logConfig(this._data, "游戏配置")
                }
                return e(t, [{
                    key: "version",
                    get: function() {
                        return this._data.config.version
                    }
                }, {
                    key: "package",
                    get: function() {
                        return this._data.config.package
                    }
                }, {
                    key: "frameRate",
                    get: function() {
                        return this._data.config.frameRate
                    }
                }, {
                    key: "localDataKey",
                    get: function() {
                        return this._data.config.localDataKey
                    }
                }, {
                    key: "localDataIv",
                    get: function() {
                        return this._data.config.localDataIv
                    }
                }, {
                    key: "httpServer",
                    get: function() {
                        return this._data.config.httpServer
                    }
                }, {
                    key: "httpTimeout",
                    get: function() {
                        return this._data.config.httpTimeout
                    }
                }, {
                    key: "language",
                    get: function() {
                        return this._data.language.type || ["zh"]
                    }
                }, {
                    key: "languagePathJson",
                    get: function() {
                        return this._data.language.path.json || "language/json"
                    }
                }, {
                    key: "languagePathTexture",
                    get: function() {
                        return this._data.language.path.texture || "language/texture"
                    }
                }, {
                    key: "languageDefault",
                    get: function() {
                        return this._data.language.default || "zh"
                    }
                }, {
                    key: "bundleEnable",
                    get: function() {
                        return this._data.bundle.enable
                    }
                }, {
                    key: "bundleServer",
                    get: function() {
                        return this._data.bundle.server
                    }
                }, {
                    key: "bundleDefault",
                    get: function() {
                        return this._data.bundle.default
                    }
                }, {
                    key: "bundlePackages",
                    get: function() {
                        return this._data.bundle.packages
                    }
                }, {
                    key: "loadingTimeoutGui",
                    get: function() {
                        return this._data.config.loadingTimeoutGui || 1e3
                    }
                }, {
                    key: "mobileSafeArea",
                    get: function() {
                        return this._data.config.mobileSafeArea || !1
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._data
                    }
                }]),
                t
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameEvent.ts", ["cc"], (function(e) {
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "28ac0rWU79HGpJWrnyK01Gn", "GameEvent", void 0);
            e("GameEvent", function(e) {
                return e.GameServerConnected = "GameServerConnected",
                e.LoginSuccess = "LoginSuccess",
                e
            }({}));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameManager.ts", ["cc"], (function(e) {
    var t, a;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            a = e.director
        }
        ],
        execute: function() {
            t._RF.push({}, "73fa0CEfOhMdJUoZwoFIIZV", "GameManager", void 0);
            e("GameManager", function() {
                function e(e) {
                    this.root = void 0,
                    this.root = e
                }
                var t = e.prototype;
                return t.setTimeScale = function(e) {
                    a.globalGameTimeScale = e
                }
                ,
                t.getTimeScale = function() {
                    return a.globalGameTimeScale
                }
                ,
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameQueryConfig.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./StringUtil.ts"], (function(t) {
    var n, e, r, i, o;
    return {
        setters: [function(t) {
            n = t.createClass
        }
        , function(t) {
            e = t.cclegacy,
            r = t.sys
        }
        , function(t) {
            i = t.oops
        }
        , function(t) {
            o = t.StringUtil
        }
        ],
        execute: function() {
            e._RF.push({}, "d09acUxcU5Hg4kUjKxVEWLy", "GameQueryConfig", void 0);
            t("GameQueryConfig", function() {
                function t() {
                    this._data = null,
                    r.isBrowser ? (this._data = this.parseUrl(),
                    this._data.username || (this._data.username = o.guid()),
                    i.log.logConfig(this._data, "查询参数")) : this._data = {}
                }
                return t.prototype.parseUrl = function() {
                    if ("object" != typeof window)
                        return {};
                    if (!window.document)
                        return {};
                    var t = window.document.location.href.toString().split("?");
                    if ("string" == typeof t[1]) {
                        for (var n = {}, e = 0, r = (t = t[1].split("&")).length; e < r; ++e) {
                            var i = t[e]
                              , o = i.indexOf("=");
                            if (!(o < 0)) {
                                var a = i.substring(0, o)
                                  , u = i.substring(o + 1);
                                n[decodeURIComponent(a)] = u && decodeURIComponent(u)
                            }
                        }
                        return n
                    }
                    return {}
                }
                ,
                n(t, [{
                    key: "debug",
                    get: function() {
                        return this._data.debug
                    }
                }, {
                    key: "username",
                    get: function() {
                        return this._data.username
                    }
                }, {
                    key: "lang",
                    get: function() {
                        return this._data.lang || "zh"
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._data
                    }
                }]),
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameResPath.ts", ["cc"], (function(t) {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "928107scyVN/oYNbTosO6yO", "GameResPath", void 0);
            t("GameResPath", function() {
                function t() {}
                return t.getConfigPath = function(t) {
                    return "gui/game/texture/" + t
                }
                ,
                t.getRolePath = function(t) {
                    return "gui/game/texture/" + t
                }
                ,
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameStorageConfig.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "a9e20POivtPKppEugdcVI1N", "GameStorageConfig", void 0);
            e("GameStorageConfig", function(e) {
                return e.AccountName = "AccountName",
                e
            }({}));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameUIConfig.ts", ["cc", "./LayerEnum.ts"], (function(e) {
    var a, r;
    return {
        setters: [function(e) {
            a = e.cclegacy
        }
        , function(e) {
            r = e.LayerType
        }
        ],
        execute: function() {
            var o;
            a._RF.push({}, "14663z2+5JJIYupyDayZnc3", "GameUIConfig", void 0);
            var n = e("UIID", function(e) {
                return e[e.Loading = 1] = "Loading",
                e[e.Alert = 2] = "Alert",
                e[e.Confirm = 3] = "Confirm",
                e[e.Home = 4] = "Home",
                e[e.Game = 5] = "Game",
                e[e.VideoPanel = 6] = "VideoPanel",
                e[e.AdShow = 7] = "AdShow",
                e
            }({}));
            e("UIConfigData", ((o = {})[n.Loading] = {
                layer: r.UI,
                prefab: "gui/loading/loading"
            },
            o[n.Alert] = {
                layer: r.Dialog,
                prefab: "common/prefab/alert"
            },
            o[n.Confirm] = {
                layer: r.Dialog,
                prefab: "common/prefab/confirm"
            },
            o[n.Home] = {
                layer: r.UI,
                prefab: "gui/home/home"
            },
            o[n.Game] = {
                layer: r.UI,
                prefab: "gui/game/game"
            },
            o[n.VideoPanel] = {
                layer: r.UI,
                prefab: "gui/prefab/videoPanel"
            },
            o[n.AdShow] = {
                layer: r.UI,
                prefab: "gui/prefab/adShow"
            },
            o));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameViewComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CCComp.ts", "./ECS.ts", "./UIUtil.ts", "./Oops.ts", "./VideoPanelComp.ts", "./GameUIConfig.ts", "./SingletonModuleComp.ts", "./RoleEnum.ts", "./Timer2.ts", "./TableRoleSkill.ts", "./JsonUtil.ts", "./UpgradeItemComp.ts", "./TableRoleJob.ts", "./CardItemComp.ts", "./Utils.ts", "./LanguageData.ts", "./RoleEvent.ts", "./VMLabelRewrite.ts", "./Enum.ts", "./PlayerData.ts", "./AdShowComp.ts"], (function(t) {
    var e, i, n, a, o, r, l, s, u, c, h, p, d, m, g, b, f, v, C, w, k, B, y, S, z, T, P, V, A, M, O, F, I, R, D, E, L, N, U, x, G, _;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            a = t.assertThisInitialized,
            o = t.asyncToGenerator,
            r = t.regeneratorRuntime
        }
        , function(t) {
            l = t.cclegacy,
            s = t._decorator,
            u = t.Vec3,
            c = t.Color,
            h = t.Node,
            p = t.ProgressBar,
            d = t.Sprite,
            m = t.SpriteFrame,
            g = t.ScrollView,
            b = t.Prefab,
            f = t.UITransform,
            v = t.tween,
            C = t.instantiate,
            w = t.Label,
            k = t.Vec2
        }
        , function(t) {
            B = t.CCComp
        }
        , function(t) {
            y = t.ecs
        }
        , function(t) {
            S = t.default
        }
        , function(t) {
            z = t.oops
        }
        , function(t) {
            T = t.VideoPanelComp
        }
        , function(t) {
            P = t.UIID
        }
        , function(t) {
            V = t.smc
        }
        , function(t) {
            A = t.RoleAttributeType
        }
        , function(t) {
            M = t.default
        }
        , function(t) {
            O = t.TableRoleSkill
        }
        , function(t) {
            F = t.JsonUtil
        }
        , function(t) {
            I = t.UpgradeItemComp
        }
        , function(t) {
            R = t.TableRoleJob
        }
        , function(t) {
            D = t.CardItemComp
        }
        , function(t) {
            E = t.default
        }
        , function(t) {
            L = t.LanguageData
        }
        , function(t) {
            N = t.RoleEvent
        }
        , function(t) {
            U = t.VMLabelRewrite
        }
        , function(t) {
            x = t.APP_CONFIG
        }
        , function(t) {
            G = t.default
        }
        , function(t) {
            _ = t.AdShowComp
        }
        ],
        execute: function() {
            var H, J, j, Y, K, W, q, X, Q, Z, $, tt, et, it, nt, at, ot, rt, lt, st, ut, ct, ht, pt, dt, mt, gt, bt, ft, vt, Ct, wt, kt, Bt, yt, St, zt, Tt, Pt, Vt, At, Mt, Ot, Ft, It, Rt, Dt, Et, Lt, Nt, Ut, xt, Gt, _t, Ht, Jt, jt, Yt, Kt, Wt, qt, Xt, Qt, Zt, $t, te, ee, ie, ne, ae, oe, re;
            l._RF.push({}, "c0b0fX1k7FKvJT7buEb0aVB", "GameViewComp", void 0);
            var le = s.ccclass
              , se = s.property
              , ue = new u
              , ce = [new c(175,250,125,255), new c(255,255,255,255)]
              , he = new c(255,216,0,255)
              , pe = [];
            t("GameViewComp", (H = le("GameViewComp"),
            J = y.register("GameView", !1),
            j = se(h),
            Y = se(h),
            K = se(h),
            W = se(h),
            q = se(h),
            X = se(h),
            Q = se(h),
            Z = se(h),
            $ = se(p),
            tt = se(p),
            et = se(d),
            it = se([m]),
            nt = se(h),
            at = se(h),
            ot = se([m]),
            rt = se([m]),
            lt = se(g),
            st = se(b),
            ut = se(g),
            ct = se(b),
            ht = se(h),
            pt = se(h),
            dt = se(h),
            mt = se(h),
            gt = se(h),
            bt = se(U),
            ft = se(U),
            vt = se(h),
            Ct = se(h),
            wt = se(h),
            kt = se(h),
            Bt = se(h),
            yt = se(h),
            St = se(h),
            H(zt = J((Pt = e((Tt = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), r = 0; r < i; r++)
                        o[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    n(e, "leftPanel", Pt, a(e)),
                    n(e, "soundBtn", Vt, a(e)),
                    n(e, "soundOn", At, a(e)),
                    n(e, "soundOff", Mt, a(e)),
                    n(e, "adClickBtn", Ot, a(e)),
                    n(e, "adClickBtnMask", Ft, a(e)),
                    n(e, "videoBtn", It, a(e)),
                    n(e, "roleBtn", Rt, a(e)),
                    n(e, "progressBarTop", Dt, a(e)),
                    n(e, "progressBarBottom", Et, a(e)),
                    n(e, "barBottom", Lt, a(e)),
                    n(e, "barBottomSF", Nt, a(e)),
                    n(e, "bar1Bottom", Ut, a(e)),
                    n(e, "bar2Bottom", xt, a(e)),
                    n(e, "upgrades", Gt, a(e)),
                    n(e, "cards", _t, a(e)),
                    n(e, "skillSV", Ht, a(e)),
                    n(e, "skillItemPf", Jt, a(e)),
                    n(e, "cardSV", jt, a(e)),
                    n(e, "cardItemPf", Yt, a(e)),
                    n(e, "tempLabelNode", Kt, a(e)),
                    n(e, "upgradeChange", Wt, a(e)),
                    n(e, "cardChange", qt, a(e)),
                    n(e, "upgradePanel", Xt, a(e)),
                    n(e, "cardPanel", Qt, a(e)),
                    n(e, "clickSpeedVM", Zt, a(e)),
                    n(e, "automaticSpeedVM", $t, a(e)),
                    n(e, "tanhao", te, a(e)),
                    n(e, "tanhaoMash", ee, a(e)),
                    n(e, "hongdian", ie, a(e)),
                    n(e, "guide", ne, a(e)),
                    n(e, "multiplier1", ae, a(e)),
                    n(e, "multiplier2", oe, a(e)),
                    n(e, "multiplier3", re, a(e)),
                    e.bottomBar = 0,
                    e.multiplierNumber = 1,
                    e.automatic = !1,
                    e.shakeAngle = 5,
                    e.scaleRatio = 1.05,
                    e.shakeDuration = .2,
                    e.tanhaoTween = null,
                    e.isTanhaoShaking = !1,
                    e.guideFinish = !1,
                    e
                }
                i(e, t);
                var l = e.prototype;
                return l.onLoad = function() {
                    this.clickSpeedVM.setLabelValue(L.getLangByID("per_click_m")),
                    this.automaticSpeedVM.setLabelValue(L.getLangByID("per_sec_m")),
                    this.initSkillScrollView(),
                    this.initCardScrollView(),
                    this.upgradePanel.active = !0,
                    this.cardPanel.active = !1,
                    this.upgradeChange.getComponent(d).spriteFrame = this.upgrades[0],
                    this.cardChange.getComponent(d).spriteFrame = this.cards[1];
                    var t = G.get();
                    this.guideFinish = t.guideFinish,
                    t.guideFinish || (this.guide.active = !0)
                }
                ,
                l.onEnable = function() {
                    "undefined" != typeof YYGGames && YYGGames.setAutoInterstitialEnable(!0)
                }
                ,
                l.start = function() {
                    var t = this;
                    S.setClickFunc(this.soundBtn, this, this.onSoundBtnClick),
                    S.setClickFunc(this.adClickBtn, this, this.automaticClick),
                    S.setClickFunc(this.videoBtn, this, this.openVideoPanel),
                    this.roleBtn.on(h.EventType.TOUCH_END, this.clickAddCoin, this),
                    this.upgradeChange.on(h.EventType.TOUCH_END, this.clickUpgradeChange, this),
                    this.cardChange.on(h.EventType.TOUCH_END, this.clickCardChange, this),
                    this.tanhao.on(h.EventType.TOUCH_END, this.clickCardChange, this),
                    this.initSound(),
                    this.videoShake(),
                    window.addEventListener("resize", (function() {
                        M.frameOnce(2, t, (function() {
                            t.onWindowResized()
                        }
                        ))
                    }
                    )),
                    M.timerLoop(300, this, this.barDecay),
                    M.timerLoop(1e3, this, this.automaticAddCoin)
                }
                ,
                l.onWindowResized = function() {
                    var t = this.node.getComponent(f)
                      , e = 1;
                    e = t.height < 750 ? t.height / 750 - .1 : 1,
                    this.roleBtn.parent.setScale(e, e, 1)
                }
                ,
                l.videoShake = function() {
                    var t = this
                      , e = this.videoBtn.children[0].eulerAngles.clone()
                      , i = this.videoBtn.children[0].scale.clone()
                      , n = v(this.videoBtn.children[0]).to(this.shakeDuration / 4, {
                        eulerAngles: new u(0,0,e.z + this.shakeAngle),
                        scale: i.clone().multiplyScalar(this.scaleRatio)
                    }, {
                        easing: "sineInOut"
                    }).to(this.shakeDuration / 2, {
                        eulerAngles: new u(0,0,e.z - this.shakeAngle)
                    }, {
                        easing: "sineInOut"
                    }).to(this.shakeDuration / 4, {
                        eulerAngles: e,
                        scale: i
                    }, {
                        easing: "sineInOut"
                    });
                    M.timerLoop(5e3, this, (function() {
                        v(t.videoBtn.children[0]).then(n).repeat(2).start()
                    }
                    ))
                }
                ,
                l.tanhaoShake = function() {
                    if (!this.isTanhaoShaking) {
                        this.isTanhaoShaking = !0;
                        var t = this.tanhao.eulerAngles.clone()
                          , e = this.tanhao.scale.clone()
                          , i = v(this.tanhao).to(this.shakeDuration / 4, {
                            eulerAngles: new u(0,0,t.z + this.shakeAngle),
                            scale: e.clone().multiplyScalar(this.scaleRatio)
                        }, {
                            easing: "sineInOut"
                        }).to(this.shakeDuration / 2, {
                            eulerAngles: new u(0,0,t.z - this.shakeAngle)
                        }, {
                            easing: "sineInOut"
                        }).to(this.shakeDuration / 4, {
                            eulerAngles: t,
                            scale: e
                        }, {
                            easing: "sineInOut"
                        });
                        this.tanhaoTween = v(this.tanhao).then(i).repeatForever().start()
                    }
                }
                ,
                l.tanhaoStopShake = function() {
                    this.isTanhaoShaking && (this.isTanhaoShaking = !1,
                    this.tanhaoTween.stop(),
                    this.tanhao.setScale(1, 1, 1),
                    this.tanhao.eulerAngles = new u(0,0,0))
                }
                ,
                l.initSkillScrollView = function() {
                    var t = this;
                    this.skillSV.content.removeAllChildren();
                    var e = F.get(O.TableName);
                    Object.keys(e).forEach((function(e) {
                        var i = C(t.skillItemPf);
                        i.setParent(t.skillSV.content),
                        i.getComponent(I).init(Number(e))
                    }
                    )),
                    M.timerOnce(100, this, (function() {
                        t.skillSV.scrollToPercentVertical(1, 1, !0)
                    }
                    ))
                }
                ,
                l.initCardScrollView = function() {
                    var t = this;
                    this.cardSV.content.removeAllChildren();
                    var e = F.get(R.TableName);
                    Object.keys(e).forEach((function(e) {
                        var i = C(t.cardItemPf);
                        i.setParent(t.cardSV.content),
                        i.getComponent(D).init(Number(e))
                    }
                    ))
                }
                ,
                l.update = function(t) {
                    this.progressBarBottom.progress = Math.min(1, this.bottomBar),
                    this.progressBarBottom.progress > .8 ? (this.barBottom.spriteFrame = this.barBottomSF[2],
                    this.bar1Bottom.active = !0,
                    this.bar2Bottom.active = !0,
                    this.multiplierNumber = 3,
                    this.multiplier1.active = !0,
                    this.multiplier2.active = !0,
                    this.multiplier3.active = !0) : this.progressBarBottom.progress > .55 ? (this.barBottom.spriteFrame = this.barBottomSF[1],
                    this.bar1Bottom.active = !0,
                    this.bar2Bottom.active = !1,
                    this.multiplierNumber = 2,
                    this.multiplier1.active = !0,
                    this.multiplier2.active = !0,
                    this.multiplier3.active = !1) : (this.barBottom.spriteFrame = this.barBottomSF[0],
                    this.bar1Bottom.active = !1,
                    this.bar2Bottom.active = !1,
                    this.multiplierNumber = 1,
                    this.multiplier1.active = this.progressBarBottom.progress > 0,
                    this.multiplier2.active = !1,
                    this.multiplier3.active = !1),
                    1 == this.progressBarTop.progress ? (this.hongdian.active = !0,
                    this.tanhao.active = !0,
                    this.tanhaoMash.active = !0,
                    this.tanhaoShake()) : (this.hongdian.active = !1,
                    this.tanhao.active = !1,
                    this.tanhaoMash.active = !1,
                    this.tanhaoStopShake())
                }
                ,
                l.barDecay = function() {
                    this.bottomBar <= 0 || (this.bottomBar -= .005)
                }
                ,
                l.reset = function() {
                    this.node.destroy()
                }
                ,
                l.initSound = function() {
                    z.audio.switchMusic ? (this.soundOn.active = !0,
                    this.soundOff.active = !1) : (this.soundOn.active = !1,
                    this.soundOff.active = !0)
                }
                ,
                l.onSoundBtnClick = function() {
                    this.soundOn.active ? (this.soundOn.active = !1,
                    this.soundOff.active = !0,
                    z.audio.switchMusic = !1,
                    z.audio.switchEffect = !1) : (this.soundOn.active = !0,
                    this.soundOff.active = !1,
                    z.audio.switchMusic = !0,
                    z.audio.switchEffect = !0,
                    z.audio.playMusicLoopRemote(x.BGMREMOTE))
                }
                ,
                l.openVideoPanel = function() {
                    var t = o(r().mark((function t() {
                        var e, i;
                        return r().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = V.account.AccountModel.role,
                                    t.next = 3,
                                    z.gui.openAsync(P.VideoPanel, "传递参数");
                                case 3:
                                    (i = t.sent) && e.add(i.getComponent(T));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                l.automaticClick = function() {
                    var t = o(r().mark((function t() {
                        var e, i, n, a = this;
                        return r().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.automatic) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.automatic = !0,
                                    e = function() {
                                        S.cancelClickFunc(a.adClickBtn),
                                        a.adClickBtnMask.active = !0,
                                        M.timerLoop(250, a, a.clickAddCoin);
                                        var t = a.adClickBtnMask.getChildByName("progress").getComponent(f);
                                        t.setContentSize(146, 146),
                                        v(t).to(30, {
                                            height: 0
                                        }).call((function() {
                                            a.adClickBtnMask.active = !1,
                                            M.clear(a, a.clickAddCoin),
                                            S.setClickFunc(a.adClickBtn, a, a.automaticClick)
                                        }
                                        )).start()
                                    }
                                    ,
                                    i = V.account.AccountModel.role,
                                    t.next = 7,
                                    z.gui.openAsync(P.AdShow, e);
                                case 7:
                                    (n = t.sent) && i.add(n.getComponent(_)),
                                    this.automatic = !1;
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                l.clickAddCoin = function(t) {
                    if (!this.guideFinish) {
                        var e = G.get();
                        e.guideFinish = !0,
                        e.saveData(),
                        this.guide.active = !1
                    }
                    z.audio.playEffect(x.CLICK);
                    var i = V.account.AccountModel.role
                      , n = i.RoleModel.attributes.get(A.DPS).value * this.multiplierNumber
                      , a = E.formatNumberTo3Fixed(n);
                    1 == this.progressBarTop.progress || this.spawnRandomText("+" + a, t ? 2 : 1, t ? t.getUILocation() : null),
                    z.message.dispatchEvent(N.RoleHurt),
                    i.Hurt(n),
                    this.bottomBar += .01,
                    this.bottomBar = Math.min(1, this.bottomBar)
                }
                ,
                l.automaticAddCoin = function() {
                    var t = V.account.AccountModel.role
                      , e = t.RoleModel.attributes.get(A.DOT).value
                      , i = E.formatNumberTo3Fixed(e);
                    1 == this.progressBarTop.progress || 0 == e || this.spawnRandomText("+" + i, 3),
                    t.Hurt(e)
                }
                ,
                l.spawnRandomText = function(t, e, i) {
                    var n = this.roleBtn.getComponent(f).contentSize
                      , a = this.roleBtn.worldPosition;
                    he.set(255, 216, 0, 255);
                    var o;
                    switch (e) {
                    case 3:
                        he.set(ce[0]);
                        var r = (Math.random() - .5) * n.width
                          , l = (Math.random() - .5) * n.height;
                        ue.set(a.x + r, a.y + l, 0);
                        break;
                    case 2:
                        he.set(ce[1]),
                        ue.set(i.x, i.y, 0);
                        break;
                    default:
                        ue.set(a.x, a.y, 0)
                    }
                    o = ue;
                    var s = null;
                    pe.length > 0 ? (s = pe.shift()).active = !0 : (s = C(this.tempLabelNode)).setParent(this.roleBtn.parent),
                    s.worldPosition = o;
                    var u = s.getComponent(w);
                    u.string = t,
                    u.color = he;
                    var h = s.worldPosition.clone().clone().add3f(0, 100, 0)
                      , p = u.color.clone();
                    v(s).to(1.5 * .8, {
                        worldPosition: h
                    }, {
                        easing: "quadOut"
                    }).to(1.5 * .2, {}, {
                        onUpdate: function(t, e) {
                            u && u.isValid && (u.color = new c(p.r,p.g,p.b,p.a * (1 - e)))
                        }
                    }).call((function() {
                        s.active = !1,
                        pe.push(s)
                    }
                    )).start()
                }
                ,
                l.clickUpgradeChange = function() {
                    var t = this;
                    this.upgradePanel.active || (this.upgradeChange.getComponent(d).spriteFrame = this.upgrades[0],
                    this.cardChange.getComponent(d).spriteFrame = this.cards[1],
                    this.upgradePanel.active = !0,
                    this.cardPanel.active = !1,
                    M.timerOnce(100, this, (function() {
                        t.skillSV.scrollToPercentVertical(1, 1, !0)
                    }
                    )))
                }
                ,
                l.clickCardChange = function() {
                    var t = this;
                    this.cardPanel.active || (this.upgradeChange.getComponent(d).spriteFrame = this.upgrades[1],
                    this.cardChange.getComponent(d).spriteFrame = this.cards[0],
                    this.upgradePanel.active = !1,
                    this.cardPanel.active = !0,
                    M.timerOnce(100, this, (function() {
                        var e = G.get()
                          , i = t.tanhao.active ? e.lv : e.jobId - 1;
                        t.cardSV.scrollTo(new k(0,1 - i / 13), 1, !0)
                    }
                    )))
                }
                ,
                e
            }(B)).prototype, "leftPanel", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Vt = e(Tt.prototype, "soundBtn", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            At = e(Tt.prototype, "soundOn", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Mt = e(Tt.prototype, "soundOff", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ot = e(Tt.prototype, "adClickBtn", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ft = e(Tt.prototype, "adClickBtnMask", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            It = e(Tt.prototype, "videoBtn", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Rt = e(Tt.prototype, "roleBtn", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Dt = e(Tt.prototype, "progressBarTop", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Et = e(Tt.prototype, "progressBarBottom", [tt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Lt = e(Tt.prototype, "barBottom", [et], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Nt = e(Tt.prototype, "barBottomSF", [it], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Ut = e(Tt.prototype, "bar1Bottom", [nt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            xt = e(Tt.prototype, "bar2Bottom", [at], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Gt = e(Tt.prototype, "upgrades", [ot], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _t = e(Tt.prototype, "cards", [rt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Ht = e(Tt.prototype, "skillSV", [lt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Jt = e(Tt.prototype, "skillItemPf", [st], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            jt = e(Tt.prototype, "cardSV", [ut], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Yt = e(Tt.prototype, "cardItemPf", [ct], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Kt = e(Tt.prototype, "tempLabelNode", [ht], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Wt = e(Tt.prototype, "upgradeChange", [pt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            qt = e(Tt.prototype, "cardChange", [dt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Xt = e(Tt.prototype, "upgradePanel", [mt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Qt = e(Tt.prototype, "cardPanel", [gt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Zt = e(Tt.prototype, "clickSpeedVM", [bt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            $t = e(Tt.prototype, "automaticSpeedVM", [ft], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            te = e(Tt.prototype, "tanhao", [vt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ee = e(Tt.prototype, "tanhaoMash", [Ct], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ie = e(Tt.prototype, "hongdian", [wt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ne = e(Tt.prototype, "guide", [kt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ae = e(Tt.prototype, "multiplier1", [Bt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            oe = e(Tt.prototype, "multiplier2", [yt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            re = e(Tt.prototype, "multiplier3", [St], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            zt = Tt)) || zt) || zt));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GuiEnum.ts", ["cc"], (function(t) {
    var n;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "80ba5x3hLRNsJ8PfuNL29y6", "GuiEnum", void 0);
            t("PromptResType", function(t) {
                return t.Toast = "common/prefab/notify",
                t.Wait = "common/prefab/wait",
                t.Mask = "common/prefab/mask",
                t
            }({}));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/HomeViewComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./CCComp.ts", "./UIUtil.ts", "./Oops.ts", "./Enum.ts", "./ModuleUtil.ts", "./SingletonModuleComp.ts", "./GameUIConfig.ts", "./GameViewComp.ts"], (function(n) {
    var t, i, e, o, a, s, u, r, c, l, d, m, w, f, h, p, g, G, B;
    return {
        setters: [function(n) {
            t = n.applyDecoratedDescriptor,
            i = n.inheritsLoose,
            e = n.initializerDefineProperty,
            o = n.assertThisInitialized,
            a = n.asyncToGenerator,
            s = n.regeneratorRuntime
        }
        , function(n) {
            u = n.cclegacy,
            r = n._decorator,
            c = n.Node,
            l = n.Layers
        }
        , function(n) {
            d = n.ecs
        }
        , function(n) {
            m = n.CCComp
        }
        , function(n) {
            w = n.default
        }
        , function(n) {
            f = n.oops
        }
        , function(n) {
            h = n.APP_CONFIG
        }
        , function(n) {
            p = n.ModuleUtil
        }
        , function(n) {
            g = n.smc
        }
        , function(n) {
            G = n.UIID
        }
        , function(n) {
            B = n.GameViewComp
        }
        ],
        execute: function() {
            var C, y, v, b, O, L, M, x, E, k, S, U, z, F;
            u._RF.push({}, "7bedcoGUNlN4JojXF9qxd5K", "HomeViewComp", void 0);
            var Y = r.ccclass
              , I = r.property;
            n("HomeViewComp", (C = Y("HomeViewComp"),
            y = d.register("HomeView", !1),
            v = I(c),
            b = I(c),
            O = I(c),
            L = I(c),
            M = I(c),
            C(x = y((k = t((E = function(n) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
                        a[s] = arguments[s];
                    return t = n.call.apply(n, [this].concat(a)) || this,
                    e(t, "soundBtn", k, o(t)),
                    e(t, "startBtn", S, o(t)),
                    e(t, "soundOn", U, o(t)),
                    e(t, "soundOff", z, o(t)),
                    e(t, "langBtn", F, o(t)),
                    t.lang = "zh",
                    t
                }
                i(t, n);
                var u = t.prototype;
                return u.start = function() {
                    var n = this;
                    if (w.setClickFunc(this.soundBtn, this, this.onSoundBtnClick),
                    w.setClickIADFun(this.startBtn, this, this.onStartBtnClick),
                    w.setClickFunc(this.langBtn, this, this.onLangBtnClick),
                    this.lang = f.language.current,
                    "undefined" != typeof YYGGames) {
                        window.GameLogo = YYGGames.createEnvLogo(),
                        window.GameLogo.skin(0),
                        window.GameLogo.top = 10,
                        window.GameLogo.right = 10,
                        this.node.addChild(window.GameLogo);
                        var t = YYGGames.createGameBox(2)
                          , i = t[0]
                          , e = t[1];
                        window.GameBox1 = i,
                        window.GameBox1.left = 100,
                        window.GameBox1.bottom = 80,
                        window.GameBox1.layer = l.Enum.UI_2D,
                        this.node.addChild(window.GameBox1),
                        window.GameBox2 = e,
                        window.GameBox2.right = 100,
                        window.GameBox2.bottom = 80,
                        window.GameBox2.layer = l.Enum.UI_2D,
                        this.node.addChild(window.GameBox2),
                        window.gameFlag || (window.gameFlag = !0,
                        YYGGames.hideLoadingSourceScene((function() {
                            f.audio.playMusicLoopRemote(h.BGMREMOTE),
                            n.initSound()
                        }
                        )),
                        YYGGames.onLoadingFinished())
                    } else
                        f.audio.playMusicLoopRemote(h.BGMREMOTE),
                        this.initSound()
                }
                ,
                u.reset = function() {
                    this.node.destroy()
                }
                ,
                u.initSound = function() {
                    f.audio.switchMusic ? (this.soundOn.active = !0,
                    this.soundOff.active = !1) : (this.soundOn.active = !1,
                    this.soundOff.active = !0)
                }
                ,
                u.onSoundBtnClick = function() {
                    this.soundOn.active ? (this.soundOn.active = !1,
                    this.soundOff.active = !0,
                    f.audio.switchMusic = !1,
                    f.audio.switchEffect = !1) : (this.soundOn.active = !0,
                    this.soundOff.active = !1,
                    f.audio.switchMusic = !0,
                    f.audio.switchEffect = !0,
                    f.audio.playMusicLoopRemote(h.BGMREMOTE))
                }
                ,
                u.onLangBtnClick = function() {
                    "zh" == this.lang ? this.lang = "en" : this.lang = "zh",
                    f.language.setLanguage(this.lang)
                }
                ,
                u.onStartBtnClick = function() {
                    var n = a(s().mark((function n() {
                        return s().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    p.addViewUiAsync(g.account, B, G.Game);
                                case 2:
                                    p.removeViewUi(this.ent, t, G.Home);
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                t
            }(m)).prototype, "soundBtn", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = t(E.prototype, "startBtn", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            U = t(E.prototype, "soundOn", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            z = t(E.prototype, "soundOff", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            F = t(E.prototype, "langBtn", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            x = E)) || x) || x));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/HttpRequest.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, n, r, s;
    return {
        setters: [function(e) {
            t = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            n = e.cclegacy,
            r = e.error,
            s = e.warn
        }
        ],
        execute: function() {
            n._RF.push({}, "806e5t8UetFy4spn89dnuan", "HttpRequest", void 0);
            var u = {}
              , i = {}
              , o = e("HttpEvent", function(e) {
                return e.NO_NETWORK = "http_request_no_network",
                e.UNKNOWN_ERROR = "http_request_unknown_error",
                e.TIMEOUT = "http_request_timout",
                e
            }({}))
              , a = e("HttpReturn", (function() {
                this.isSucc = !1,
                this.res = void 0,
                this.err = void 0
            }
            ));
            e("HttpRequest", function() {
                function e() {
                    this.server = "http://127.0.0.1/",
                    this.timeout = 1e4,
                    this.header = new Map
                }
                var n = e.prototype;
                return n.addHeader = function(e, t) {
                    this.header.set(e, t)
                }
                ,
                n.get = function(e, t, n) {
                    void 0 === n && (n = null),
                    this.sendRequest(e, n, !1, t)
                }
                ,
                n.getAsync = function(e, t) {
                    var n = this;
                    return void 0 === t && (t = null),
                    new Promise((function(r, s) {
                        n.sendRequest(e, t, !1, (function(e) {
                            r(e)
                        }
                        ))
                    }
                    ))
                }
                ,
                n.getByArraybuffer = function(e, t, n) {
                    void 0 === n && (n = null),
                    this.sendRequest(e, n, !1, t, "arraybuffer", !1)
                }
                ,
                n.getAsyncByArraybuffer = function(e, t) {
                    var n = this;
                    return void 0 === t && (t = null),
                    new Promise((function(r, s) {
                        n.sendRequest(e, t, !1, (function(e) {
                            r(e)
                        }
                        ), "arraybuffer", !1)
                    }
                    ))
                }
                ,
                n.post = function(e, t, n) {
                    void 0 === n && (n = null),
                    this.sendRequest(e, n, !0, t)
                }
                ,
                n.postAsync = function(e, t) {
                    var n = this;
                    return void 0 === t && (t = null),
                    new Promise((function(r, s) {
                        n.sendRequest(e, t, !0, (function(e) {
                            r(e)
                        }
                        ))
                    }
                    ))
                }
                ,
                n.abort = function(e) {
                    var t = u[this.server + e];
                    t && t.abort()
                }
                ,
                n.getParamString = function(e) {
                    var t = "";
                    for (var n in e) {
                        var r = e[n];
                        if (r instanceof Object)
                            for (var s in r)
                                t += s + "=" + r[s] + "&";
                        else
                            t += n + "=" + r + "&"
                    }
                    return t.substring(0, t.length - 1)
                }
                ,
                n.sendRequest = function(e, n, c, f, d, l) {
                    var h = this;
                    if (void 0 === l && (l = !0),
                    null != e && "" != e) {
                        var v, p, R = "";
                        if (v = 0 == e.toLocaleLowerCase().indexOf("http") ? e : this.server + e,
                        n ? (R = this.getParamString(n),
                        p = v.indexOf("?") > -1 ? v + "&" + R : v + "?" + R) : p = v,
                        null == u[p] || i[p] != R) {
                            var y = new XMLHttpRequest;
                            u[p] = y,
                            i[p] = R,
                            c ? y.open("POST", v) : y.open("GET", p);
                            for (var O, _ = t(this.header); !(O = _()).done; ) {
                                var q = O.value
                                  , g = q[0]
                                  , N = q[1];
                                y.setRequestHeader(g, N)
                            }
                            var S = {};
                            S.url = v,
                            S.params = n,
                            l && (y.timeout = this.timeout,
                            y.ontimeout = function() {
                                h.deleteCache(p),
                                m.isSucc = !1,
                                m.err = o.TIMEOUT,
                                f(S)
                            }
                            );
                            var m = new a;
                            y.onloadend = function() {
                                500 == y.status && (h.deleteCache(p),
                                m.isSucc = !1,
                                m.err = o.NO_NETWORK,
                                f(m))
                            }
                            ,
                            y.onerror = function() {
                                h.deleteCache(p),
                                m.isSucc = !1,
                                0 == y.readyState || 1 == y.readyState || 0 == y.status ? m.err = o.NO_NETWORK : m.err = o.UNKNOWN_ERROR,
                                f(m)
                            }
                            ,
                            y.onreadystatechange = function() {
                                4 == y.readyState && (h.deleteCache(p),
                                200 == y.status && f && (m.isSucc = !0,
                                "arraybuffer" == d ? (y.responseType = d,
                                m.res = y.response) : m.res = JSON.parse(y.response),
                                f(m)))
                            }
                            ,
                            null == n || "" == n ? y.send() : y.send(R)
                        } else
                            s("地址【" + v + "】已正在请求中，不能重复请求")
                    } else
                        r("请求地址不能为空")
                }
                ,
                n.deleteCache = function(e) {
                    delete u[e],
                    delete i[e]
                }
                ,
                e
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/IControl.ts", ["cc"], (function() {
    var t;
    return {
        setters: [function(c) {
            t = c.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "58450TyE3JB069KO8P5+hl4", "IControl", void 0),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ImageUtil.ts", ["cc"], (function(e) {
    var t, n, r;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            n = e.Color,
            r = e.Texture2D
        }
        ],
        execute: function() {
            t._RF.push({}, "ebdf3rRnEdIYpKgGdW8gSmZ", "ImageUtil", void 0);
            e("ImageUtil", function() {
                function e() {}
                return e.getPixelColor = function(e, t, r) {
                    var a, i = document.createElement("canvas"), o = i.getContext("2d");
                    i.width = e.width,
                    i.height = e.height;
                    var g = null == (a = e.image) ? void 0 : a.data;
                    o.drawImage(g, 0, 0, e.width, e.height);
                    var c = o.getImageData(0, 0, e.width, e.height)
                      , u = (r - 1) * e.width * 4 + 4 * (t - 1)
                      , l = c.data.slice(u, u + 4)
                      , m = new n(l[0],l[1],l[2],l[3]);
                    return g.remove(),
                    i.remove(),
                    m
                }
                ,
                e.imageToBase64 = function(e, t) {
                    return new Promise((function(n) {
                        var r, a = null == (r = /\.png|\.jpg|\.jpeg/.exec(e)) ? void 0 : r[0];
                        if ([".png", ".jpg", ".jpeg"].includes(a)) {
                            var i = document.createElement("canvas")
                              , o = i.getContext("2d")
                              , g = new Image;
                            g.src = e,
                            g.onload = function() {
                                i.height = g.height,
                                i.width = g.width,
                                o.drawImage(g, 0, 0),
                                a = ".jpg" === a ? "jpeg" : a.replace(".", "");
                                var e = i.toDataURL("image/" + a);
                                t && t(e),
                                n(e),
                                g.remove(),
                                i.remove()
                            }
                        } else
                            console.warn("Not a jpg/jpeg or png resource!"),
                            t && t(""),
                            n("")
                    }
                    ))
                }
                ,
                e.base64ToTexture = function(e) {
                    var t = document.createElement("img");
                    t.src = e;
                    var n = new r;
                    return n.initWithElement(t),
                    t.remove(),
                    n
                }
                ,
                e.base64ToBlob = function(e) {
                    for (var t = e.split(","), n = /image\/\w+|;/.exec(t[0])[0], r = window.atob(t[1]), a = new ArrayBuffer(r.length), i = new Uint8Array(a), o = 0; o < r.length; o++)
                        i[o] = 255 & r.charCodeAt(o);
                    return new Blob([i],{
                        type: n
                    })
                }
                ,
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/index.ts", ["cc", "./BehaviorTree.ts", "./BranchNode.ts", "./Decorator.ts", "./BTreeNode.ts", "./Priority.ts", "./Sequence.ts", "./Task.ts", "./Selector.ts"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        , function(t) {
            e("BehaviorTree", t.BehaviorTree)
        }
        , function(t) {
            e("BranchNode", t.BranchNode)
        }
        , function(t) {
            e("Decorator", t.Decorator)
        }
        , function(t) {
            e("BTreeNode", t.BTreeNode)
        }
        , function(t) {
            e("Priority", t.Priority)
        }
        , function(t) {
            e("Sequence", t.Sequence)
        }
        , function(t) {
            e("Task", t.Task)
        }
        , function(t) {
            e("Selector", t.Selector)
        }
        ],
        execute: function() {
            t._RF.push({}, "96257XYurdITbWhyEf7Qlbn", "index", void 0),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Initialize.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./InitRes.ts"], (function(t) {
    var i, n, e, s;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            e = t.ecs
        }
        , function(t) {
            s = t.InitResComp
        }
        ],
        execute: function() {
            var o;
            n._RF.push({}, "ffbceQs6Z9IoI5z6mt1avMw", "Initialize", void 0);
            t("Initialize", e.register("Initialize")(o = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                return i(n, t),
                n.prototype.init = function() {
                    this.add(s)
                }
                ,
                n
            }(e.Entity)) || o);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/InitRes.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./AsyncQueue.ts", "./ECS.ts", "./ModuleUtil.ts", "./GameUIConfig.ts", "./LoadingViewComp.ts"], (function(n) {
    var t, e, o, i, u, r, s, a, c, l;
    return {
        setters: [function(n) {
            t = n.inheritsLoose,
            e = n.asyncToGenerator,
            o = n.regeneratorRuntime
        }
        , function(n) {
            i = n.cclegacy
        }
        , function(n) {
            u = n.oops
        }
        , function(n) {
            r = n.AsyncQueue
        }
        , function(n) {
            s = n.ecs
        }
        , function(n) {
            a = n.ModuleUtil
        }
        , function(n) {
            c = n.UIID
        }
        , function(n) {
            l = n.LoadingViewComp
        }
        ],
        execute: function() {
            var f, p;
            i._RF.push({}, "2ee0c8+7R9EFKQb+OPn9mlk", "InitRes", void 0);
            var m = n("InitResComp", s.register("InitRes")(f = function(n) {
                function e() {
                    return n.apply(this, arguments) || this
                }
                return t(e, n),
                e.prototype.reset = function() {}
                ,
                e
            }(s.Comp)) || f);
            n("InitResSystem", s.register("Initialize")(p = function(n) {
                function i() {
                    return n.apply(this, arguments) || this
                }
                t(i, n);
                var f = i.prototype;
                return f.filter = function() {
                    return s.allOf(m)
                }
                ,
                f.entityEnter = function(n) {
                    var t = new r;
                    this.loadCustom(t),
                    this.loadLanguage(t),
                    this.loadCommon(t),
                    this.onComplete(t, n),
                    t.play()
                }
                ,
                f.loadCustom = function(n) {
                    n.push(e(o().mark((function n(t, e, i) {
                        return o().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    u.res.load("language/font/" + u.language.current, t);
                                case 1:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    ))))
                }
                ,
                f.loadLanguage = function(n) {
                    n.push((function(n, t, e) {
                        var o = window.LANG;
                        u.language.setLanguage(o, n)
                    }
                    ))
                }
                ,
                f.loadCommon = function(n) {
                    n.push((function(n, t, e) {
                        u.res.loadDir("common", n)
                    }
                    ))
                }
                ,
                f.onComplete = function(n, t) {
                    n.complete = e(o().mark((function n() {
                        return o().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    a.addViewUi(t, l, c.Loading),
                                    t.remove(m);
                                case 2:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))
                }
                ,
                i
            }(s.ComblockSystem)) || p);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/JsonOb.ts", ["cc"], (function(t) {
    var r;
    return {
        setters: [function(t) {
            r = t.cclegacy
        }
        ],
        execute: function() {
            r._RF.push({}, "000b00Lx19Ke4hAFc9/Qlnh", "JsonOb", void 0);
            var e = Object.prototype
              , o = "[object Object]"
              , c = "[object Array]"
              , i = ["push", "pop", "shift", "unshift", "sort", "reverse", "splice"];
            t("JsonOb", function() {
                function t(t, r) {
                    this._callback = void 0,
                    e.toString.call(t) !== o && e.toString.call(t) !== c && console.error("请传入一个对象或数组"),
                    this._callback = r,
                    this.observe(t)
                }
                var r = t.prototype;
                return r.observe = function(t, r) {
                    var i = this;
                    e.toString.call(t) === c && this.overrideArrayProto(t, r),
                    Object.keys(t).forEach((function(n) {
                        var s = i
                          , a = t[n]
                          , l = r && r.slice();
                        l ? l.push(n) : l = [n],
                        Object.defineProperty(t, n, {
                            get: function() {
                                return a
                            },
                            set: function(t) {
                                if (a !== t) {
                                    "[object Object]" === e.toString.call(t) && s.observe(t, l);
                                    var r = a;
                                    a = t,
                                    s._callback(t, r, l)
                                }
                            }
                        }),
                        e.toString.call(t[n]) !== o && e.toString.call(t[n]) !== c || i.observe(t[n], l)
                    }
                    ), this)
                }
                ,
                r.overrideArrayProto = function(t, r) {
                    var e, o = Array.prototype, c = Object.create(Array.prototype), n = this;
                    i.forEach((function(t) {
                        Object.defineProperty(c, t, {
                            value: function() {
                                var c = this.slice();
                                return e = o[t].apply(this, arguments),
                                n.observe(this, r),
                                n._callback(this, c, r),
                                e
                            }
                        })
                    }
                    )),
                    t.__proto__ = c
                }
                ,
                t
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/JsonUtil.ts", ["cc", "./ResLoader.ts"], (function(n) {
    var e, o, s;
    return {
        setters: [function(n) {
            e = n.cclegacy,
            o = n.JsonAsset
        }
        , function(n) {
            s = n.resLoader
        }
        ],
        execute: function() {
            e._RF.push({}, "1a24ank4nRC46jfzaIfOmtQ", "JsonUtil", void 0);
            var t = "config/game/"
              , a = new Map;
            n("JsonUtil", function() {
                function n() {}
                return n.get = function(n) {
                    if (a.has(n))
                        return a.get(n)
                }
                ,
                n.load = function(n, e) {
                    if (a.has(n))
                        e(a.get(n));
                    else {
                        var r = t + n;
                        s.load(r, o, (function(o, t) {
                            o ? (console.warn(o.message),
                            e(null)) : (a.set(n, t.json),
                            s.release(r),
                            e(t.json))
                        }
                        ))
                    }
                }
                ,
                n.loadAsync = function(n) {
                    return new Promise((function(e, r) {
                        if (a.has(n))
                            e(a.get(n));
                        else {
                            var c = t + n;
                            s.load(c, o, (function(o, t) {
                                o ? (console.warn(o.message),
                                e(null)) : (a.set(n, t.json),
                                s.release(c),
                                e(t.json))
                            }
                            ))
                        }
                    }
                    ))
                }
                ,
                n.loadRemoteAsync = function(n) {
                    return new Promise((function(e, o) {
                        if (a.has(n))
                            e(a.get(n));
                        else {
                            var t = window.BASE_URL + "/config/" + n + ".json";
                            s.loadRemote(t, {
                                ext: ".json"
                            }, (function(o, r) {
                                o ? (console.warn(o.message),
                                e(null)) : (a.set(n, r.json),
                                s.release(t),
                                e(r.json))
                            }
                            ))
                        }
                    }
                    ))
                }
                ,
                n.loadDirAsync = function() {
                    return new Promise((function(n, e) {
                        s.loadDir(t, (function(e, o) {
                            e ? (console.warn(e.message),
                            n(!1)) : (o.forEach((function(n) {
                                a.set(n.name, n.json)
                            }
                            )),
                            s.releaseDir(t),
                            n(!0))
                        }
                        ))
                    }
                    ))
                }
                ,
                n.release = function(n) {
                    a.delete(n)
                }
                ,
                n.clear = function() {
                    a.clear()
                }
                ,
                n
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LabelChange.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LabelNumber.ts"], (function(i) {
    var t, e, n, s, a, h, r;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor,
            e = i.inheritsLoose,
            n = i.initializerDefineProperty,
            s = i.assertThisInitialized
        }
        , function(i) {
            a = i.cclegacy,
            h = i._decorator
        }
        , function(i) {
            r = i.default
        }
        ],
        execute: function() {
            var c, l, o;
            a._RF.push({}, "fff0fLwVNhNe59VirWTCPFJ", "LabelChange", void 0);
            var u = h.ccclass
              , d = h.property
              , p = h.menu;
            i("LabelChange", u("LabelChange")(c = p("OopsFramework/Label/LabelChange （数值变化动画标签）")((o = t((l = function(i) {
                function t() {
                    for (var t, e = arguments.length, a = new Array(e), h = 0; h < e; h++)
                        a[h] = arguments[h];
                    return t = i.call.apply(i, [this].concat(a)) || this,
                    n(t, "isInteger", o, s(t)),
                    t.duration = 0,
                    t.callback = void 0,
                    t.isBegin = !1,
                    t.speed = 0,
                    t.end = 0,
                    t._data = 0,
                    t
                }
                e(t, i);
                var a = t.prototype;
                return a.changeTo = function(i, t, e) {
                    0 != i ? this.playAnim(i, this.num, t, e) : e && e()
                }
                ,
                a.changeBy = function(i, t, e) {
                    0 != i ? this.playAnim(i, this.num, this.num + t, e) : e && e()
                }
                ,
                a.stop = function(i) {
                    void 0 === i && (i = !0),
                    this.num = this.end,
                    this.isBegin = !1,
                    i && this.callback && this.callback()
                }
                ,
                a.playAnim = function(i, t, e, n) {
                    this.duration = i,
                    this.end = e,
                    this.callback = n,
                    this.speed = (e - t) / i,
                    this._data = t,
                    this.num = t,
                    this.isBegin = !0
                }
                ,
                a.isEnd = function(i) {
                    return this.speed > 0 ? i >= this.end : i <= this.end
                }
                ,
                a.update = function(i) {
                    if (this.isBegin) {
                        if (this.num == this.end)
                            return this.isBegin = !1,
                            void (this.callback && this.callback());
                        this._data += i * this.speed,
                        this.isInteger ? this.end < this._data ? this.num = Math.floor(this._data) : this.num = Math.ceil(this._data) : this.num = this._data,
                        this.isEnd(this._data) && (this.num = this.end,
                        this.isBegin = !1,
                        this.callback && this.callback())
                    }
                }
                ,
                t
            }(r)).prototype, "isInteger", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            c = l)) || c) || c);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LabelNumber.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, r, n, i, o, u, a, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            n = t.initializerDefineProperty,
            i = t.assertThisInitialized,
            o = t.createClass
        }
        , function(t) {
            u = t.cclegacy,
            a = t._decorator,
            l = t.Label
        }
        ],
        execute: function() {
            var s, p, c, b, m, f, y, h, L;
            u._RF.push({}, "f7b43F70BhPlrz4IPhZGmsL", "LabelNumber", void 0);
            var g = a.ccclass
              , d = a.property
              , _ = a.menu;
            t("default", (s = g("LabelNumber"),
            p = _("OopsFramework/Label/LabelNumber （只显示数字的标签）"),
            c = d({
                tooltip: "数字"
            }),
            b = d({
                tooltip: "数字"
            }),
            m = d({
                tooltip: "货币符号"
            }),
            s(f = p((h = e((y = function(t) {
                function e() {
                    for (var e, r = arguments.length, o = new Array(r), u = 0; u < r; u++)
                        o[u] = arguments[u];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    n(e, "_num", h, i(e)),
                    n(e, "symbol", L, i(e)),
                    e
                }
                r(e, t);
                var u = e.prototype;
                return u.start = function() {
                    this.updateLabel()
                }
                ,
                u.updateLabel = function() {
                    this.string = this.num.toString() + this.symbol
                }
                ,
                o(e, [{
                    key: "num",
                    get: function() {
                        return this._num
                    },
                    set: function(t) {
                        this._num = t,
                        this.updateLabel()
                    }
                }]),
                e
            }(l)).prototype, "_num", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            e(y.prototype, "num", [b], Object.getOwnPropertyDescriptor(y.prototype, "num"), y.prototype),
            L = e(y.prototype, "symbol", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            f = y)) || f) || f));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LabelTime.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./EventMessage.ts", "./TimeUtils.ts"], (function(t) {
    var e, i, n, o, r, s, a, l, c, h;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            o = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            s = t._decorator,
            a = t.Label
        }
        , function(t) {
            l = t.oops
        }
        , function(t) {
            c = t.EventMessage
        }
        , function(t) {
            h = t.TimeUtil
        }
        ],
        execute: function() {
            var u, m, f, p, d, g, b, S, y, D, v, w, T, _;
            r._RF.push({}, "57786GMN6RPbaAT9b9RmX18", "LabelTime", void 0);
            var z = s.ccclass
              , F = s.property
              , M = s.menu;
            t("default", (u = z("LabelTime"),
            m = M("OopsFramework/Label/LabelTime （倒计时标签）"),
            f = F({
                tooltip: "到计时间总时间（单位秒）"
            }),
            p = F({
                tooltip: "天数数据格式化"
            }),
            d = F({
                tooltip: "时间格式化"
            }),
            g = F({
                tooltip: "是否有00"
            }),
            b = F({
                tooltip: "游戏进入后台时间暂时"
            }),
            u(S = m((D = e((y = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                        r[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    n(e, "countDown", D, o(e)),
                    n(e, "dayFormat", v, o(e)),
                    n(e, "timeFormat", w, o(e)),
                    n(e, "zeroize", T, o(e)),
                    n(e, "paused", _, o(e)),
                    e.backStartTime = 0,
                    e.dateDisable = void 0,
                    e.result = void 0,
                    e.onSecond = null,
                    e.onComplete = null,
                    e
                }
                i(e, t);
                var r = e.prototype;
                return r.replace = function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                        i[n - 1] = arguments[n];
                    return t.replace(/\{(\d+)\}/g, (function(t, e) {
                        return i[e]
                    }
                    ))
                }
                ,
                r.format = function() {
                    var t = this.countDown
                      , e = Math.floor(t / 86400);
                    t -= 86400 * e;
                    var i = Math.floor(t / 3600);
                    t -= 3600 * i;
                    var n = Math.floor(t / 60)
                      , o = t -= 60 * n;
                    if (this.dateDisable = this.dateDisable || !1,
                    0 == e && 0 == i && 0 == n && 0 == o)
                        this.zeroize ? this.result = this.replace(this.timeFormat, "00", "00", "00") : this.result = this.replace(this.timeFormat, "0", "0", "0");
                    else if (e > 0 && !this.dateDisable) {
                        var r = this.dayFormat
                          , s = r.indexOf("{1}");
                        0 == i && s > -1 && (r = r.substring(0, s - 1));
                        var a = r;
                        e > 1 && r.indexOf("days") < 0 && (a = a.replace("day", "days")),
                        e < 2 && (a = a.replace("days", "day")),
                        this.result = this.replace(a, e, i)
                    } else
                        i += 24 * e,
                        this.zeroize ? this.result = this.replace(this.timeFormat, this.coverString(i), this.coverString(n), this.coverString(o)) : this.result = this.replace(this.timeFormat, i, n, o);
                    this.string = this.result
                }
                ,
                r.coverString = function(t) {
                    return t < 10 ? "0" + t : t.toString()
                }
                ,
                r.setDateDisable = function(t) {
                    this.dateDisable = t
                }
                ,
                r.setTime = function(t) {
                    this.countDown = t,
                    this.timing_end(),
                    this.timing_start(),
                    this.format()
                }
                ,
                r.setTimeStamp = function(t) {
                    this.countDown = h.secsBetween(l.timer.getServerTime(), t),
                    this.timing_end(),
                    this.timing_start(),
                    this.format()
                }
                ,
                r.start = function() {
                    l.message.on(c.GAME_SHOW, this.onGameShow, this),
                    l.message.on(c.GAME_HIDE, this.onGameHide, this),
                    this.timing_start(),
                    this.format()
                }
                ,
                r.onDestroy = function() {
                    l.message.off(c.GAME_SHOW, this.onGameShow, this),
                    l.message.off(c.GAME_HIDE, this.onGameHide, this)
                }
                ,
                r.onGameShow = function() {
                    if (!(this.countDown <= 0 || this.paused)) {
                        var t = Math.floor((l.timer.getTime() - (this.backStartTime || l.timer.getTime())) / 1e3);
                        this.countDown -= t,
                        this.countDown < 0 && (this.countDown = 0,
                        this.onScheduleComplete())
                    }
                }
                ,
                r.onGameHide = function() {
                    this.backStartTime = l.timer.getTime()
                }
                ,
                r.onScheduleSecond = function() {
                    this.countDown--,
                    this.format(),
                    this.onSecond && this.onSecond(this.node),
                    0 == this.countDown && this.onScheduleComplete()
                }
                ,
                r.onScheduleComplete = function() {
                    this.timing_end(),
                    this.format(),
                    this.onComplete && this.onComplete(this.node)
                }
                ,
                r.timing_start = function() {
                    this.schedule(this.onScheduleSecond, 1)
                }
                ,
                r.timing_end = function() {
                    this.unscheduleAllCallbacks()
                }
                ,
                e
            }(a)).prototype, "countDown", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1e3
                }
            }),
            v = e(y.prototype, "dayFormat", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "{0} day"
                }
            }),
            w = e(y.prototype, "timeFormat", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "{0}:{1}:{2}"
                }
            }),
            T = e(y.prototype, "zeroize", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            _ = e(y.prototype, "paused", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            S = y)) || S) || S));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Language.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./LanguageData.ts", "./LanguagePack.ts"], (function(a) {
    var e, n, t, g, u, s;
    return {
        setters: [function(a) {
            e = a.createClass
        }
        , function(a) {
            n = a.cclegacy,
            t = a.sys
        }
        , function(a) {
            g = a.Logger
        }
        , function(a) {
            u = a.LanguageData
        }
        , function(a) {
            s = a.LanguagePack
        }
        ],
        execute: function() {
            n._RF.push({}, "3757cxZqLZObIdvP/gQ6Yuj", "Language", void 0);
            a("LanguageManager", function() {
                function a() {
                    this._languages = [t.Language.CHINESE, t.Language.ENGLISH],
                    this._languagePack = new s,
                    this._defaultLanguage = t.Language.CHINESE
                }
                var n = a.prototype;
                return n.isExist = function(a) {
                    return this.languages.indexOf(a) > -1
                }
                ,
                n.getNextLang = function() {
                    var a = this.languages
                      , e = a.indexOf(u.current);
                    return a[(e + 1) % a.length]
                }
                ,
                n.setLanguage = function(a, e) {
                    var n = this;
                    a = null == a || "" == a ? this._defaultLanguage : a.toLowerCase(),
                    this.languages.indexOf(a) < 0 && (console.log("当前不支持【" + a + "】语言，将自动切换到【" + this._defaultLanguage + "】语言"),
                    a = this._defaultLanguage),
                    a !== u.current ? this.loadLanguageAssets(a, (function(t) {
                        g.instance.logConfig("当前语言为【" + a + "】");
                        var s = u.current;
                        u.current = a,
                        s && n._languagePack.releaseLanguageAssets(s),
                        n._languagePack.updateLanguage(a),
                        e && e(!0)
                    }
                    )) : e && e(!1)
                }
                ,
                n.getLangByID = function(a) {
                    return u.getLangByID(a)
                }
                ,
                n.loadLanguageAssets = function(a, e) {
                    return a = a.toLowerCase(),
                    this._languagePack.loadLanguageAssets(a, e)
                }
                ,
                n.releaseLanguageAssets = function(a) {
                    a = a.toLowerCase(),
                    this._languagePack.releaseLanguageAssets(a)
                }
                ,
                e(a, [{
                    key: "languages",
                    get: function() {
                        return this._languages
                    },
                    set: function(a) {
                        this._languages = a
                    }
                }, {
                    key: "default",
                    set: function(a) {
                        this._defaultLanguage = a || t.Language.CHINESE
                    }
                }, {
                    key: "current",
                    get: function() {
                        return u.current
                    }
                }, {
                    key: "pack",
                    get: function() {
                        return this._languagePack
                    }
                }]),
                a
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LanguageData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var a, n;
    return {
        setters: [function(e) {
            a = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "27fb3sjD81JlIP2KFTSWUp4", "LanguageData", void 0);
            var t = e("LanguageDataType", function(e) {
                return e.Json = "Json",
                e.Excel = "Excel",
                e
            }({}))
              , u = e("LanguageData", function() {
                function e() {}
                return e.getLangByID = function(e) {
                    for (var n, u = null, r = a(this.language); !(n = r()).done; ) {
                        var g = n.value
                          , l = g[0]
                          , o = g[1];
                        if (l == t.Excel) {
                            var c = o[e];
                            c && (u = c[this.current])
                        } else
                            u = o[e];
                        if (u)
                            return u
                    }
                    return e
                }
                ,
                e
            }());
            u.path_json = "language/json",
            u.path_texture = "language/texture",
            u.path_spine = "language/spine",
            u.current = "",
            u.language = new Map,
            u.font = null;
            e("LanguageType", ["LanguageLabel", "LanguageSprite", "LanguageSpine"]);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LanguageLabel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LanguageData.ts"], (function(t) {
    var e, a, n, i, r, o, s, p, u, l, c, g, h;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            a = t.initializerDefineProperty,
            n = t.inheritsLoose,
            i = t.assertThisInitialized,
            r = t.createClass
        }
        , function(t) {
            o = t.cclegacy,
            s = t._decorator,
            p = t.CCString,
            u = t.Label,
            l = t.RichText,
            c = t.warn,
            g = t.Component
        }
        , function(t) {
            h = t.LanguageData
        }
        ],
        execute: function() {
            var d, f, y, m, b, L, _, v, D, I, z, k, w, C;
            o._RF.push({}, "110c8vEd5NEPL/N9meGQnaX", "LanguageLabel", void 0);
            var U = s.ccclass
              , P = s.property
              , S = s.menu
              , F = t("LangLabelParamsItem", U("LangLabelParamsItem")((y = e((f = function() {
                a(this, "key", y, this),
                a(this, "value", m, this)
            }
            ).prototype, "key", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            m = e(f.prototype, "value", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            d = f)) || d);
            t("LanguageLabel", (b = U("LanguageLabel"),
            L = S("OopsFramework/Language/LanguageLabel （文本多语言）"),
            _ = P({
                type: F,
                displayName: "params"
            }),
            v = P({
                type: F,
                displayName: "params"
            }),
            D = P({
                serializable: !0
            }),
            I = P({
                type: p,
                serializable: !0
            }),
            b(z = L((w = e((k = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    a(e, "_params", w, i(e)),
                    a(e, "_dataID", C, i(e)),
                    e.initFontSize = 0,
                    e._needUpdate = !1,
                    e
                }
                n(e, t);
                var o = e.prototype;
                return o.language = function() {
                    this._needUpdate = !0
                }
                ,
                o.onLoad = function() {
                    this._needUpdate = !0
                }
                ,
                o.setVars = function(t, e) {
                    for (var a = !1, n = 0; n < this._params.length; n++) {
                        var i = this._params[n];
                        i.key === t && (i.value = e,
                        a = !0)
                    }
                    if (!a) {
                        var r = new F;
                        r.key = t,
                        r.value = e,
                        this._params.push(r)
                    }
                    this._needUpdate = !0
                }
                ,
                o.update = function() {
                    this._needUpdate && (this.updateContent(),
                    this._needUpdate = !1)
                }
                ,
                o.updateContent = function() {
                    var t = this.getComponent(u)
                      , e = this.getComponent(l)
                      , a = h.font;
                    t ? (a && (t.font = a),
                    t.string = this.string,
                    this.initFontSize = t.fontSize) : e ? (a && (e.font = a),
                    e.string = this.string,
                    this.initFontSize = e.fontSize) : c("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件")
                }
                ,
                r(e, [{
                    key: "params",
                    get: function() {
                        return this._params || []
                    },
                    set: function(t) {
                        this._params = t,
                        this._needUpdate = !0
                    }
                }, {
                    key: "dataID",
                    get: function() {
                        return this._dataID || ""
                    },
                    set: function(t) {
                        this._dataID = t,
                        this._needUpdate = !0
                    }
                }, {
                    key: "string",
                    get: function() {
                        var t = h.getLangByID(this._dataID);
                        return t && this._params.length > 0 && this._params.forEach((function(e) {
                            t = t.replace("%{" + e.key + "}", e.value)
                        }
                        )),
                        t || (c("[LanguageLabel] 未找到语言标识，使用dataID替换"),
                        t = this._dataID),
                        t
                    }
                }]),
                e
            }(g)).prototype, "_params", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            e(k.prototype, "params", [v], Object.getOwnPropertyDescriptor(k.prototype, "params"), k.prototype),
            C = e(k.prototype, "_dataID", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            e(k.prototype, "dataID", [I], Object.getOwnPropertyDescriptor(k.prototype, "dataID"), k.prototype),
            z = k)) || z) || z));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LanguagePack.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts", "./Logger.ts", "./JsonUtil.ts", "./LanguageData.ts"], (function(n) {
    var e, t, a, r, o, s, u, c, i, l, g, f, p, d;
    return {
        setters: [function(n) {
            e = n.asyncToGenerator,
            t = n.regeneratorRuntime
        }
        , function(n) {
            a = n.cclegacy,
            r = n.director,
            o = n.error,
            s = n.assetManager,
            u = n.TTFFont,
            c = n.JsonAsset
        }
        , function(n) {
            i = n.resLoader
        }
        , function(n) {
            l = n.Logger
        }
        , function(n) {
            g = n.JsonUtil
        }
        , function(n) {
            f = n.LanguageData,
            p = n.LanguageDataType,
            d = n.LanguageType
        }
        ],
        execute: function() {
            a._RF.push({}, "2ffebyj59xIc4v4BZty8SDm", "LanguagePack", void 0);
            n("LanguagePack", function() {
                function n() {}
                var a = n.prototype;
                return a.updateLanguage = function(n) {
                    for (var e = r.getScene().children, t = function(n) {
                        d.forEach((function(t) {
                            for (var a = e[n].getComponentsInChildren(t), r = 0; r < a.length; r++)
                                a[r].language()
                        }
                        ))
                    }, a = 0; a < e.length; ++a)
                        t(a)
                }
                ,
                a.loadLanguageAssets = function() {
                    var n = e(t().mark((function n(e, a) {
                        return t().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.loadTexture(e);
                                case 2:
                                    return n.next = 4,
                                    this.loadSpine(e);
                                case 4:
                                    return n.next = 6,
                                    this.loadJson(e);
                                case 6:
                                    return n.next = 8,
                                    this.loadTable(e);
                                case 8:
                                    a(e);
                                case 9:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                a.loadTable = function(n) {
                    return new Promise(e(t().mark((function n(e, a) {
                        var r;
                        return t().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    g.loadAsync("Language");
                                case 2:
                                    (r = n.sent) && (f.language.set(p.Excel, r),
                                    l.instance.logConfig("config/game/Language", "下载语言包 table 资源")),
                                    e(null);
                                case 5:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    ))))
                }
                ,
                a.loadTexture = function(n) {
                    return new Promise((function(e, t) {
                        var a = f.path_texture + "/" + n;
                        i.loadDir(a, (function(n, t) {
                            if (n)
                                return o(n),
                                void e(null);
                            t.forEach((function(n) {
                                s.assets.has(n._uuid) || s.assets.add(n._uuid, n)
                            }
                            )),
                            l.instance.logConfig(a, "下载语言包 textures 资源"),
                            e(null)
                        }
                        ))
                    }
                    ))
                }
                ,
                a.loadJson = function(n) {
                    return new Promise(e(t().mark((function e(a, r) {
                        var o, s;
                        return t().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = f.path_json + "/" + n,
                                    e.next = 3,
                                    i.loadAsync(o, c);
                                case 3:
                                    if (!(s = e.sent)) {
                                        e.next = 9;
                                        break
                                    }
                                    f.language.set(p.Json, s.json),
                                    l.instance.logConfig(o, "下载语言包 json 资源"),
                                    e.next = 11;
                                    break;
                                case 9:
                                    return a(null),
                                    e.abrupt("return");
                                case 11:
                                    i.load(o, u, (function(n, e) {
                                        null == n && l.instance.logConfig(o, "下载语言包 ttf 资源"),
                                        f.font = e,
                                        a(null)
                                    }
                                    ));
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))))
                }
                ,
                a.loadSpine = function(n) {
                    return new Promise(e(t().mark((function e(a, r) {
                        var s;
                        return t().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    s = f.path_spine + "/" + n,
                                    i.loadDir(s, (function(n, e) {
                                        if (n)
                                            return o(n),
                                            void a(null);
                                        l.instance.logConfig(s, "下载语言包 spine 资源"),
                                        a(null)
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))))
                }
                ,
                a.releaseLanguageAssets = function(n) {
                    var e = f.path_texture + "/" + n;
                    i.releaseDir(e);
                    var t = f.path_json + "/" + n
                      , a = i.get(t, c);
                    a && a.decRef();
                    var r = i.get(t, u);
                    r && r.decRef();
                    var o = f.path_spine + "/" + n;
                    i.release(o)
                }
                ,
                n
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LanguageSpine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts", "./LanguageData.ts"], (function(e) {
    var t, a, n, i, o, r, u, p, s, c, l, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            a = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            o = e.createClass
        }
        , function(e) {
            r = e.cclegacy,
            u = e._decorator,
            p = e.CCString,
            s = e.sp,
            c = e.Component
        }
        , function(e) {
            l = e.resLoader
        }
        , function(e) {
            g = e.LanguageData
        }
        ],
        execute: function() {
            var d, f, h, y, D, S, L;
            r._RF.push({}, "53e25hqV6VEJqayXfz6Qam2", "LanguageSpine", void 0);
            var m = u.ccclass
              , _ = u.property
              , v = u.menu;
            e("LanguageSpine", (d = m("LanguageSpine"),
            f = v("OopsFramework/Language/LanguageSpine （Spine 动画多语言）"),
            h = _({
                serializable: !0
            }),
            y = _({
                type: p,
                serializable: !0
            }),
            d(D = f((L = t((S = function(e) {
                function t() {
                    for (var t, a = arguments.length, o = new Array(a), r = 0; r < a; r++)
                        o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(t, "_dataID", L, i(t)),
                    t._defaultAnimation = "",
                    t
                }
                a(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    var e = this.getComponent(s.Skeleton);
                    this._defaultAnimation = e.animation
                }
                ,
                r.start = function() {
                    this.updateSpine()
                }
                ,
                r.language = function() {
                    this.updateSpine()
                }
                ,
                r.updateSpine = function() {
                    var e = "language/spine/" + g.current + "/" + this.dataID
                      , t = l.get(e, s.SkeletonData);
                    if (t) {
                        var a = this.getComponent(s.Skeleton);
                        a.skeletonData = t,
                        a.setAnimation(0, this._defaultAnimation, !0)
                    } else
                        console.error("[LanguageSpine] 资源不存在 " + e)
                }
                ,
                o(t, [{
                    key: "dataID",
                    get: function() {
                        return this._dataID || ""
                    },
                    set: function(e) {
                        this._dataID = e,
                        this.updateSpine()
                    }
                }]),
                t
            }(c)).prototype, "_dataID", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            t(S.prototype, "dataID", [y], Object.getOwnPropertyDescriptor(S.prototype, "dataID"), S.prototype),
            D = S)) || D) || D));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LanguageSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts", "./LanguageData.ts"], (function(e) {
    var t, r, a, i, n, o, p, u, s, c, l, g, f, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            a = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            n = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            p = e._decorator,
            u = e.CCString,
            s = e.SpriteFrame,
            c = e.Sprite,
            l = e.UITransform,
            g = e.Component
        }
        , function(e) {
            f = e.resLoader
        }
        , function(e) {
            d = e.LanguageData
        }
        ],
        execute: function() {
            var S, y, h, D, L, m, b, z, I;
            o._RF.push({}, "11b96k/RIZF57Loehxyl6Hs", "LanguageSprite", void 0);
            var v = p.ccclass
              , _ = p.property
              , w = p.menu;
            e("LanguageSprite", (S = v("LanguageSprite"),
            y = w("OopsFramework/Language/LanguageSprite （图片多语言）"),
            h = _({
                serializable: !0
            }),
            D = _({
                type: u,
                serializable: !0
            }),
            L = _({
                tooltip: "是否设置为图片原始资源大小"
            }),
            S(m = y((z = t((b = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    a(t, "_dataID", z, i(t)),
                    a(t, "isRawSize", I, i(t)),
                    t
                }
                r(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.updateSprite()
                }
                ,
                o.language = function() {
                    this.updateSprite()
                }
                ,
                o.updateSprite = function() {
                    var e = "language/texture/" + d.current + "/" + this.dataID + "/spriteFrame"
                      , t = f.get(e, s);
                    if (t) {
                        var r = this.getComponent(c);
                        if (r.spriteFrame = t,
                        this.isRawSize) {
                            var a, i = t._originalSize;
                            null == (a = r.getComponent(l)) || a.setContentSize(i)
                        }
                    } else
                        console.error("[LanguageSprite] 资源不存在 " + e)
                }
                ,
                n(t, [{
                    key: "dataID",
                    get: function() {
                        return this._dataID || ""
                    },
                    set: function(e) {
                        this._dataID = e,
                        this.updateSprite()
                    }
                }]),
                t
            }(g)).prototype, "_dataID", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            t(b.prototype, "dataID", [D], Object.getOwnPropertyDescriptor(b.prototype, "dataID"), b.prototype),
            I = t(b.prototype, "isRawSize", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            m = b)) || m) || m));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LanguageSpriteRewrite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts", "./LanguageData.ts", "./LanguageSprite.ts"], (function(e) {
    var t, i, r, a, n, o, s, u, g, p, l, c, f, S;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            r = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            o = e._decorator,
            s = e.isValid,
            u = e.Texture2D,
            g = e.SpriteFrame,
            p = e.Sprite,
            l = e.UITransform
        }
        , function(e) {
            c = e.resLoader
        }
        , function(e) {
            f = e.LanguageData
        }
        , function(e) {
            S = e.LanguageSprite
        }
        ],
        execute: function() {
            var L, m, d, w, h, v, R;
            n._RF.push({}, "106eaBxwOxHFZ3CMZxBx8uw", "LanguageSpriteRewrite", void 0);
            var y = o.ccclass
              , z = o.property;
            o.menu,
            e("LanguageSpriteRewrite", (L = y("LanguageSpriteRewrite"),
            m = z({
                tooltip: "是否远程资源"
            }),
            d = z({
                tooltip: "是否多语言"
            }),
            L((v = t((h = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    r(t, "isRemote", v, a(t)),
                    r(t, "isLanguage", R, a(t)),
                    t
                }
                return i(t, e),
                t.prototype.updateSprite = function() {
                    var e = this;
                    if (this.isRemote) {
                        var t = this.isLanguage ? window.BASE_URL + "/" + this.dataID + "-" + f.current.toUpperCase() + ".png" : window.BASE_URL + "/" + this.dataID
                          , i = t.endsWith(".jpg") ? ".jpg" : ".png";
                        c.loadRemote(t, {
                            ext: i
                        }, (function(i, r) {
                            if (i)
                                console.error("[LanguageSprite] 资源不存在 " + t);
                            else if (s(e.node)) {
                                var a = new u;
                                a.image = r;
                                var n = new g;
                                n.texture = a;
                                var o = e.getComponent(p);
                                if (o.spriteFrame = n,
                                e.isRawSize) {
                                    var c, f = n._originalSize;
                                    null == (c = o.getComponent(l)) || c.setContentSize(f)
                                }
                            }
                        }
                        ))
                    } else {
                        var r = "language/texture/" + f.current + "/" + this.dataID + "/spriteFrame"
                          , a = c.get(r, g);
                        if (a) {
                            var n = this.getComponent(p);
                            if (n.spriteFrame = a,
                            this.isRawSize) {
                                var o, S = a._originalSize;
                                null == (o = n.getComponent(l)) || o.setContentSize(S)
                            }
                        } else
                            console.error("[LanguageSprite] 资源不存在 " + r)
                    }
                }
                ,
                t
            }(S)).prototype, "isRemote", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            R = t(h.prototype, "isLanguage", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            w = h)) || w));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LayerDialog.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Defines.ts", "./LayerPopup.ts"], (function(i) {
    var s, t, a, n;
    return {
        setters: [function(i) {
            s = i.inheritsLoose
        }
        , function(i) {
            t = i.cclegacy
        }
        , function(i) {
            a = i.ViewParams
        }
        , function(i) {
            n = i.LayerPopUp
        }
        ],
        execute: function() {
            t._RF.push({}, "dcad5w8wHlEDJpIKJ4gUxEP", "LayerDialog", void 0);
            i("LayerDialog", function(i) {
                function t() {
                    for (var s, t = arguments.length, a = new Array(t), n = 0; n < t; n++)
                        a[n] = arguments[n];
                    return (s = i.call.apply(i, [this].concat(a)) || this).params = [],
                    s
                }
                s(t, i);
                var n = t.prototype;
                return n.add = function(i, s, t, a) {
                    this.ui_nodes.size > 0 ? this.params.push({
                        uiid: i,
                        config: s,
                        params: t,
                        callbacks: a
                    }) : this.show(i, s, t, a)
                }
                ,
                n.show = function(i, s, t, n) {
                    var e = this.ui_cache.get(s.prefab);
                    null == e && ((e = new a).uiid = i,
                    e.valid = !0,
                    e.config = s),
                    e.params = t || {},
                    e.callbacks = null != n ? n : {},
                    this.ui_nodes.set(e.config.prefab, e),
                    this.load(e, s.bundle)
                }
                ,
                n.onCloseWindow = function(s) {
                    i.prototype.onCloseWindow.call(this, s),
                    setTimeout(this.next.bind(this), 0)
                }
                ,
                n.setBlackDisable = function() {
                    0 == this.params.length && (this.black.enabled = !1,
                    this.closeVacancyRemove(),
                    this.closeMask())
                }
                ,
                n.next = function() {
                    if (this.params.length > 0) {
                        var i = this.params.shift();
                        this.show(i.uiid, i.config, i.params, i.callbacks)
                    }
                }
                ,
                t
            }(n));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LayerEnum.ts", ["cc"], (function(e) {
    var r;
    return {
        setters: [function(e) {
            r = e.cclegacy
        }
        ],
        execute: function() {
            r._RF.push({}, "a33b5ZFcqBFkIDJsP9KM/6c", "LayerEnum", void 0);
            e("ScreenAdapterType", function(e) {
                return e[e.Auto = 0] = "Auto",
                e[e.Landscape = 1] = "Landscape",
                e[e.Portrait = 2] = "Portrait",
                e
            }({})),
            e("LayerType", function(e) {
                return e.Game = "LayerGame",
                e.UI = "LayerUI",
                e.PopUp = "LayerPopUp",
                e.Dialog = "LayerDialog",
                e.System = "LayerSystem",
                e.Notify = "LayerNotify",
                e.Guide = "LayerGuide",
                e
            }({})),
            e("LayerTypeCls", function(e) {
                return e.UI = "UI",
                e.PopUp = "PopUp",
                e.Dialog = "Dialog",
                e.Notify = "Notify",
                e.Node = "Node",
                e
            }({}));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LayerManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./DelegateComponent.ts", "./LayerDialog.ts", "./LayerEnum.ts", "./LayerNotify.ts", "./LayerPopup.ts", "./LayerUI.ts"], (function(e) {
    var t, n, i, o, r, s, a, c, u, l, f, h, p, y, g, d, v, L, m, w;
    return {
        setters: [function(e) {
            t = e.asyncToGenerator,
            n = e.regeneratorRuntime
        }
        , function(e) {
            i = e.cclegacy,
            o = e.Camera,
            r = e.view,
            s = e.screen,
            a = e.ResolutionPolicy,
            c = e.SafeArea,
            u = e.warn,
            l = e.Node,
            f = e.Layers,
            h = e.Widget
        }
        , function(e) {
            p = e.oops
        }
        , function(e) {
            y = e.DelegateComponent
        }
        , function(e) {
            g = e.LayerDialog
        }
        , function(e) {
            d = e.LayerTypeCls,
            v = e.LayerType
        }
        , function(e) {
            L = e.LayerNotify
        }
        , function(e) {
            m = e.LayerPopUp
        }
        , function(e) {
            w = e.LayerUI
        }
        ],
        execute: function() {
            i._RF.push({}, "7ba675xFGdHqIOykTysNzEu", "LayerManager", void 0);
            var A = 1e6
              , C = A;
            function R() {
                return 9999999 == C && (C = A),
                ++C
            }
            e("LayerManager", function() {
                function e() {
                    this.root = void 0,
                    this.camera = void 0,
                    this.game = void 0,
                    this.guide = void 0,
                    this.windowAspectRatio = 0,
                    this.designAspectRatio = 0,
                    this.mobileSafeArea = !1,
                    this.notify = void 0,
                    this.configs = {},
                    this.uiLayers = new Map,
                    this.clsLayers = new Map,
                    this.clsLayers.set(d.UI, w),
                    this.clsLayers.set(d.PopUp, m),
                    this.clsLayers.set(d.Dialog, g),
                    this.clsLayers.set(d.Notify, L),
                    this.clsLayers.set(d.Node, null)
                }
                var i = e.prototype;
                return i.registerLayerCls = function(e, t) {
                    this.clsLayers.has(e) ? console.error("已存在自定义界面层类型", e) : this.clsLayers.set(e, t)
                }
                ,
                i.initLayer = function(e, t) {
                    if (null != t) {
                        this.root = e,
                        this.initScreenAdapter(),
                        this.camera = this.root.getComponentInChildren(o);
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n]
                              , r = null;
                            if (i.type == d.Node)
                                switch (r = this.create_node(i.name),
                                i.name) {
                                case v.Game:
                                    this.game = r;
                                    break;
                                case v.Guide:
                                    this.guide = r
                                }
                            else {
                                var s = this.clsLayers.get(i.type);
                                s ? r = new s(i.name) : console.error("未识别的界面层类型", i.type)
                            }
                            e.addChild(r),
                            r instanceof w ? this.uiLayers.set(i.name, r) : r instanceof L && (this.notify = r)
                        }
                    } else
                        console.error("请升级到最新版本框架,界面层级管理修改为数据驱动。参考模板项目中的config.json配置文件")
                }
                ,
                i.initScreenAdapter = function() {
                    var e = r.getDesignResolutionSize()
                      , t = s.windowSize;
                    this.windowAspectRatio = t.width / t.height,
                    this.designAspectRatio = e.width / e.height;
                    var n = 0
                      , i = 0;
                    this.windowAspectRatio > this.designAspectRatio ? (n = (i = e.height) * t.width / t.height,
                    p.log.logView("适配屏幕高度", "【横屏】")) : (i = (n = e.width) * t.height / t.width,
                    p.log.logView("适配屏幕宽度", "【竖屏】")),
                    r.setDesignResolutionSize(n, i, a.UNKNOWN),
                    this.mobileSafeArea && (this.root.addComponent(c),
                    p.log.logView("开启移动设备安全区域适配"))
                }
                ,
                i.init = function(e) {
                    this.configs = e
                }
                ,
                i.setOpenFailure = function(e) {
                    this.uiLayers.forEach((function(t) {
                        t.onOpenFailure = e
                    }
                    ))
                }
                ,
                i.toast = function(e, t) {
                    void 0 === t && (t = !1),
                    this.notify.toast(e, t)
                }
                ,
                i.waitOpen = function() {
                    this.notify.waitOpen()
                }
                ,
                i.waitClose = function() {
                    this.notify.waitClose()
                }
                ,
                i.setConfig = function(e, t) {
                    t ? this.configs[e] = t : delete this.configs[e]
                }
                ,
                i.open = function(e, t, n) {
                    void 0 === t && (t = null);
                    var i = this.configs[e];
                    if (null != i) {
                        var o = this.uiLayers.get(i.layer);
                        o ? o.add(e, i, t, n) : console.error("打开编号为【" + e + "】的界面失败，界面层不存在")
                    } else
                        u("打开编号为【" + e + "】的界面失败，配置信息不存在")
                }
                ,
                i.openAsync = function() {
                    var e = t(n().mark((function e(t, i) {
                        var o = this;
                        return n().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return void 0 === i && (i = null),
                                    e.abrupt("return", new Promise((function(e, n) {
                                        var r = {
                                            onAdded: function(t, n) {
                                                e(t)
                                            },
                                            onLoadFailure: function() {
                                                e(null)
                                            }
                                        };
                                        o.open(t, i, r)
                                    }
                                    )));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                i.openAsyncConfig = function(e) {
                    var i = this;
                    return new Promise(t(n().mark((function t(o, r) {
                        var s;
                        return n().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return s = R(),
                                    e.auto = !0,
                                    i.setConfig(s, e),
                                    t.next = 5,
                                    p.gui.openAsync(s, {
                                        uiid: s
                                    });
                                case 5:
                                    o(s);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))))
                }
                ,
                i.replace = function(e, t, n) {
                    var i = this;
                    void 0 === n && (n = null);
                    var o = {
                        onAdded: function(t, n) {
                            i.remove(e)
                        }
                    };
                    this.open(t, n, o)
                }
                ,
                i.replaceAsync = function(e, i, o) {
                    var r = this;
                    return void 0 === o && (o = null),
                    new Promise(t(n().mark((function t(s, a) {
                        var c;
                        return n().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    r.openAsync(i, o);
                                case 2:
                                    (c = t.sent) ? (r.remove(e),
                                    s(c)) : s(null);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))))
                }
                ,
                i.has = function(e) {
                    var t = this.configs[e];
                    if (null == t)
                        return u("编号为【" + e + "】的界面配置不存在，配置信息不存在"),
                        !1;
                    var n = !1
                      , i = this.uiLayers.get(t.layer);
                    return i ? n = i.has(t.prefab) : console.error("验证编号为【" + e + "】的界面失败，界面层不存在"),
                    n
                }
                ,
                i.get = function(e) {
                    var t = this.configs[e];
                    if (null == t)
                        return u("编号为【" + e + "】的界面配置不存在，配置信息不存在"),
                        null;
                    var n = null
                      , i = this.uiLayers.get(t.layer);
                    return i ? n = i.get(t.prefab) : console.error("获取编号为【" + e + "】的界面失败，界面层不存在"),
                    n
                }
                ,
                i.remove = function(e, t) {
                    void 0 === t && (t = !0);
                    var n = this.configs[e];
                    if (null != n) {
                        var i = this.uiLayers.get(n.layer);
                        i ? i.remove(n.prefab, t) : console.error("移除编号为【" + e + "】的界面失败，界面层不存在")
                    } else
                        u("删除编号为【" + e + "】的界面失败，配置信息不存在")
                }
                ,
                i.removeByNode = function(e, t) {
                    if (void 0 === t && (t = !0),
                    e instanceof l) {
                        var n = e.getComponent(y);
                        if (n && n.vp) {
                            if (e.parent)
                                this.remove(n.vp.uiid, t);
                            else if (t) {
                                var i = this.uiLayers.get(n.vp.config.layer);
                                i && i.removeCache(n.vp.config.prefab)
                            }
                        } else
                            u("当前删除的 Node 不是通过界面管理器添加"),
                            e.destroy()
                    }
                }
                ,
                i.clear = function(e) {
                    void 0 === e && (e = !1),
                    this.uiLayers.forEach((function(t) {
                        t.clear(e)
                    }
                    ))
                }
                ,
                i.create_node = function(e) {
                    var t = new l(e);
                    t.layer = f.Enum.UI_2D;
                    var n = t.addComponent(h);
                    return n.isAlignLeft = n.isAlignRight = n.isAlignTop = n.isAlignBottom = !0,
                    n.left = n.right = n.top = n.bottom = 0,
                    n.alignMode = 2,
                    n.enabled = !0,
                    t
                }
                ,
                e
            }());
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LayerNotify.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ViewUtil.ts", "./GuiEnum.ts", "./Notify.ts"], (function(t) {
    var n, e, i, a, o, r, s, l, c, u, f, h;
    return {
        setters: [function(t) {
            n = t.inheritsLoose,
            e = t.asyncToGenerator,
            i = t.regeneratorRuntime
        }
        , function(t) {
            a = t.cclegacy,
            o = t.Widget,
            r = t.Layers,
            s = t.BlockInputEvents,
            l = t.Node,
            c = t.instantiate
        }
        , function(t) {
            u = t.ViewUtil
        }
        , function(t) {
            f = t.PromptResType
        }
        , function(t) {
            h = t.Notify
        }
        ],
        execute: function() {
            a._RF.push({}, "da14ax+B2xNsL2taQFOh7we", "LayerNotify", void 0);
            t("LayerNotify", function(t) {
                function a(n) {
                    var e;
                    (e = t.call(this, n) || this).black = void 0,
                    e.wait = null,
                    e.notify = null,
                    e.notifyItem = null;
                    var i = e.addComponent(o);
                    return i.isAlignLeft = i.isAlignRight = i.isAlignTop = i.isAlignBottom = !0,
                    i.left = i.right = i.top = i.bottom = 0,
                    i.alignMode = 2,
                    i.enabled = !0,
                    e.layer = r.Enum.UI_2D,
                    e.black = e.addComponent(s),
                    e.black.enabled = !1,
                    e
                }
                n(a, t);
                var l = a.prototype;
                return l.waitOpen = function() {
                    var t = e(i().mark((function t() {
                        return i().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (null != this.wait) {
                                        t.next = 8;
                                        break
                                    }
                                    t.next = 7;
                                    break;
                                case 4:
                                    this.wait = t.sent,
                                    t.next = 8;
                                    break;
                                case 7:
                                    this.wait = u.createPrefabNode(f.Wait);
                                case 8:
                                    null == this.wait.parent && (this.wait.parent = this,
                                    this.black.enabled = !0);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                l.waitClose = function() {
                    this.wait && this.wait.parent && (this.wait.parent = null,
                    this.black.enabled = !1)
                }
                ,
                l.toast = function() {
                    var t = e(i().mark((function t(n, e) {
                        var a, o, r, s = this;
                        return i().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (null != this.notify) {
                                        t.next = 10;
                                        break
                                    }
                                    t.next = 7;
                                    break;
                                case 4:
                                    this.notify = t.sent,
                                    t.next = 8;
                                    break;
                                case 7:
                                    this.notify = u.createPrefabNode(f.Toast);
                                case 8:
                                    this.notifyItem = this.notify.children[0],
                                    this.notifyItem.parent = null;
                                case 10:
                                    this.notify.parent = this,
                                    a = c(this.notifyItem),
                                    o = a.getChildByName("prompt"),
                                    r = o.getComponent(h),
                                    a.parent = this.notify,
                                    r.onComplete = function() {
                                        0 == s.notify.children.length && (s.notify.parent = null)
                                    }
                                    ,
                                    r.toast(n, e),
                                    this.notify.children.length > 1 && this.notify.children[0].destroy();
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(n, e) {
                        return t.apply(this, arguments)
                    }
                }(),
                a
            }(l));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LayerPopup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ViewUtil.ts", "./GuiEnum.ts", "./LayerUI.ts"], (function(e) {
    var n, t, i, s, o, a, c, r, h, l, u, d;
    return {
        setters: [function(e) {
            n = e.inheritsLoose,
            t = e.createForOfIteratorHelperLoose,
            i = e.assertThisInitialized,
            s = e.asyncToGenerator,
            o = e.regeneratorRuntime
        }
        , function(e) {
            a = e.cclegacy,
            c = e.Node,
            r = e.BlockInputEvents,
            h = e.Layers
        }
        , function(e) {
            l = e.ViewUtil
        }
        , function(e) {
            u = e.PromptResType
        }
        , function(e) {
            d = e.LayerUI
        }
        ],
        execute: function() {
            a._RF.push({}, "25d07BQBCFADaSsh/I3GrTX", "LayerPopup", void 0);
            e("LayerPopUp", function(e) {
                function a(n) {
                    var t;
                    return (t = e.call(this, n) || this).black = void 0,
                    t.mask = void 0,
                    t.layer = h.Enum.UI_2D,
                    t.on(c.EventType.CHILD_ADDED, t.onChildAdded, i(t)),
                    t.on(c.EventType.CHILD_REMOVED, t.onChildRemoved, i(t)),
                    t
                }
                n(a, e);
                var d = a.prototype;
                return d.onChildAdded = function(e) {
                    this.mask && this.mask.setSiblingIndex(this.children.length - 2)
                }
                ,
                d.onChildRemoved = function(e) {
                    this.mask && this.mask.setSiblingIndex(this.children.length - 2)
                }
                ,
                d.showUi = function() {
                    var n = s(o().mark((function n(t) {
                        var i;
                        return o().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    e.prototype.showUi.call(this, t);
                                case 2:
                                    return (i = n.sent) && (this.openVacancyRemove(t.config),
                                    this.black.enabled = !0),
                                    n.abrupt("return", i);
                                case 5:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                d.onCloseWindow = function(n) {
                    e.prototype.onCloseWindow.call(this, n),
                    this.setBlackDisable()
                }
                ,
                d.setBlackDisable = function() {
                    0 == this.ui_nodes.size && (this.black && (this.black.enabled = !1),
                    this.closeVacancyRemove(),
                    this.closeMask())
                }
                ,
                d.closeMask = function() {
                    if (null != this.mask) {
                        for (var e, n = !0, i = t(this.ui_nodes.values()); !(e = i()).done; ) {
                            if (e.value.config.mask) {
                                n = !1;
                                break
                            }
                        }
                        n && (this.mask.parent = null)
                    }
                }
                ,
                d.openVacancyRemove = function(e) {
                    null == this.mask && (this.mask = l.createPrefabNode(u.Mask),
                    this.mask.on(c.EventType.TOUCH_END, this.onTouchEnd, this),
                    this.black = this.mask.addComponent(r),
                    this.black.enabled = !1),
                    e.mask && (this.mask.parent = this)
                }
                ,
                d.onTouchEnd = function(e) {
                    if (this.ui_nodes.size > 0) {
                        var n = this.ui_nodes.array[this.ui_nodes.size - 1];
                        n.valid && n.config.vacancy && this.remove(n.config.prefab, n.config.destroy)
                    }
                }
                ,
                d.closeVacancyRemove = function() {
                    for (var e, n = !0, i = t(this.ui_nodes.values()); !(e = i()).done; ) {
                        if (e.value.config.vacancy) {
                            n = !1;
                            break
                        }
                    }
                    n && this.hasEventListener(c.EventType.TOUCH_END, this.onTouchEnd, this) && this.off(c.EventType.TOUCH_END, this.onTouchEnd, this)
                }
                ,
                d.clear = function(n) {
                    e.prototype.clear.call(this, n),
                    this.black && (this.black.enabled = !1),
                    this.closeVacancyRemove(),
                    this.closeMask()
                }
                ,
                a
            }(d));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LayerUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Collection.ts", "./Oops.ts", "./Defines.ts", "./DelegateComponent.ts"], (function(e) {
    var n, o, t, i, a, r, s, c, u, l, d, f, h;
    return {
        setters: [function(e) {
            n = e.inheritsLoose,
            o = e.asyncToGenerator,
            t = e.regeneratorRuntime
        }
        , function(e) {
            i = e.cclegacy,
            a = e.Widget,
            r = e.Node,
            s = e.instantiate,
            c = e.SafeArea,
            u = e.Prefab
        }
        , function(e) {
            l = e.Collection
        }
        , function(e) {
            d = e.oops
        }
        , function(e) {
            f = e.ViewParams
        }
        , function(e) {
            h = e.DelegateComponent
        }
        ],
        execute: function() {
            i._RF.push({}, "bc8b86Br9dGeKxeLijkyJKE", "LayerUI", void 0);
            e("LayerUI", function(e) {
                function i(n) {
                    var o;
                    (o = e.call(this, n) || this).onOpenFailure = null,
                    o.ui_nodes = new l,
                    o.ui_cache = new Map;
                    var t = o.addComponent(a);
                    return t.isAlignLeft = t.isAlignRight = t.isAlignTop = t.isAlignBottom = !0,
                    t.left = t.right = t.top = t.bottom = 0,
                    t.alignMode = 2,
                    t.enabled = !0,
                    o
                }
                n(i, e);
                var r = i.prototype;
                return r.add = function(e, n, o, t) {
                    if (this.ui_nodes.has(n.prefab))
                        console.warn("路径为【" + n.prefab + "】的预制重复加载");
                    else {
                        var i = this.ui_cache.get(n.prefab);
                        null == i && ((i = new f).uiid = e,
                        i.config = n),
                        this.ui_nodes.set(n.prefab, i),
                        i.params = null != o ? o : {},
                        i.callbacks = null != t ? t : {},
                        i.valid = !0,
                        this.load(i, n.bundle)
                    }
                }
                ,
                r.load = function() {
                    var e = o(t().mark((function e(n, o) {
                        var i, a, r;
                        return t().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = setTimeout(this.onLoadingTimeoutGui, d.config.game.loadingTimeoutGui),
                                    !n || !n.node) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4,
                                    this.showUi(n);
                                case 4:
                                    e.next = 22;
                                    break;
                                case 6:
                                    return o = o || d.res.defaultBundleName,
                                    e.next = 9,
                                    d.res.loadAsync(o, n.config.prefab, u);
                                case 9:
                                    if (!(a = e.sent)) {
                                        e.next = 20;
                                        break
                                    }
                                    return n.node = s(a),
                                    n.config.safeArea && n.node.addComponent(c),
                                    (r = n.node.addComponent(h)).vp = n,
                                    r.onCloseWindow = this.onCloseWindow.bind(this),
                                    e.next = 18,
                                    this.showUi(n);
                                case 18:
                                    e.next = 22;
                                    break;
                                case 20:
                                    console.warn("路径为【" + n.config.prefab + "】的预制加载失败"),
                                    this.failure(n);
                                case 22:
                                    d.gui.waitClose(),
                                    clearTimeout(i);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(n, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                r.onLoadingTimeoutGui = function() {
                    d.gui.waitOpen()
                }
                ,
                r.onCloseWindow = function(e) {
                    this.ui_nodes.delete(e.config.prefab)
                }
                ,
                r.showUi = function() {
                    var e = o(t().mark((function e(n) {
                        var o, i;
                        return t().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = n.node.getComponent(h),
                                    e.next = 3,
                                    o.add();
                                case 3:
                                    return (i = e.sent) ? (n.node.parent = this,
                                    n.valid = !0) : (console.warn("路径为【" + n.config.prefab + "】的自定义预处理逻辑异常.检查预制上绑定的组件中 onAdded 方法,返回true才能正确完成窗口显示流程"),
                                    this.failure(n)),
                                    e.abrupt("return", i);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                r.failure = function(e) {
                    this.onCloseWindow(e),
                    e.callbacks && e.callbacks.onLoadFailure && e.callbacks.onLoadFailure(),
                    this.onOpenFailure && this.onOpenFailure()
                }
                ,
                r.remove = function(e, n) {
                    var o = void 0;
                    void 0 !== n && (o = n);
                    var t = this.ui_nodes.get(e);
                    t && (void 0 === o && (o = void 0 === t.config.destroy || t.config.destroy),
                    !1 === o && this.ui_cache.set(t.config.prefab, t),
                    t.node.getComponent(h).remove(o));
                    !0 === o && this.removeCache(e)
                }
                ,
                r.removeCache = function(e) {
                    var n = this.ui_cache.get(e);
                    if (n) {
                        this.onCloseWindow(n),
                        this.ui_cache.delete(e);
                        var o = n.node
                          , t = o.getComponent(h);
                        t && t.remove(!0),
                        o.destroy()
                    }
                }
                ,
                r.get = function(e) {
                    var n = this.ui_nodes.get(e);
                    return n ? n.node : null
                }
                ,
                r.has = function(e) {
                    return this.ui_nodes.has(e)
                }
                ,
                r.clear = function(e) {
                    var n = this;
                    this.ui_nodes.forEach((function(o, t) {
                        n.remove(o.config.prefab, e),
                        o.valid = !1
                    }
                    )),
                    this.ui_nodes.clear(),
                    e && this.ui_cache.forEach((function(e, o) {
                        n.removeCache(o)
                    }
                    ))
                }
                ,
                i
            }(r));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LayerUtil.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var n, t;
    return {
        setters: [function(e) {
            n = e.createClass
        }
        , function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "b7a864Zpb5N4Zm7onWE1i9D", "LayerUtil", void 0);
            var i = e("LayerItem", function() {
                function e(e, n) {
                    this._value = void 0,
                    this._name = void 0,
                    this._value = e,
                    this._name = n
                }
                return n(e, [{
                    key: "value",
                    get: function() {
                        return this._value
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "mask",
                    get: function() {
                        return 1 << this._value
                    }
                }]),
                e
            }())
              , r = e("LayerUtil", function() {
                function e() {}
                return e.setNodeLayer = function(n, t) {
                    t.layer = n.mask,
                    t.children.forEach((function(t) {
                        t.layer = n.mask,
                        e.setNodeLayer(n, t)
                    }
                    ))
                }
                ,
                e
            }());
            r.MAP = new i(0,"MAP"),
            r.AVATAR = new i(1,"AVATAR"),
            r.IGNORE_RAYCAST = new i(20,"IGNORE_RAYCAST"),
            r.GIZMOS = new i(21,"GIZMOS"),
            r.EDITOR = new i(22,"EDITOR"),
            r.UI_3D = new i(23,"UI_3D"),
            r.SCENE_GIZMO = new i(24,"SCENE_GIZMO"),
            r.UI_2D = new i(25,"UI_2D"),
            r.PROFILTER = new i(28,"PROFILTER"),
            r.DEFAULT = new i(30,"DEFAULT"),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/List.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, n;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "f4d36IVkDZEFYGJyOy6wiZw", "List", void 0);
            e("List", function() {
                function e(e) {
                    void 0 === e && (e = !0),
                    this.element = void 0,
                    this.only = !1,
                    this.count = 0,
                    this.only = e,
                    this.element = []
                }
                var n = e.prototype;
                return n.push = function(e) {
                    if (this.only && this.element.indexOf(e) >= 0)
                        return !1;
                    return this.element.push(e),
                    this.count = this.element.length,
                    !0
                }
                ,
                n.unshift = function(e) {
                    if (this.only && this.element.indexOf(e) >= 0)
                        return !1;
                    return this.element.unshift(e),
                    this.count = this.element.length,
                    !0
                }
                ,
                n.pop = function() {
                    if (this.element.length > 0) {
                        var e = this.element.pop();
                        return this.count = this.element.length,
                        e
                    }
                    return null
                }
                ,
                n.shift = function() {
                    if (this.element.length > 0) {
                        var e = this.element.shift();
                        return this.count = this.element.length,
                        e
                    }
                    return null
                }
                ,
                n.removeAt = function(e) {
                    if (e >= this.element.length)
                        throw new Error("删除索引超出范围！");
                    var t = this.element[e];
                    return this.element.splice(e, 1),
                    this.count = this.element.length,
                    t
                }
                ,
                n.remove = function(e) {
                    var t = this.element.indexOf(e);
                    if (t < 0)
                        throw new Error("要删除的内容不在列表中！" + e);
                    this.element[t];
                    this.element.splice(t, 1),
                    this.count = this.element.length
                }
                ,
                n.clear = function() {
                    this.count = 0,
                    this.element.length = 0
                }
                ,
                n.has = function(e) {
                    return this.find(e) >= 0
                }
                ,
                n.find = function(e) {
                    return this.element.indexOf(e)
                }
                ,
                n.findIndex = function(e) {
                    return this.element.findIndex(e)
                }
                ,
                n.get = function(e) {
                    if (e >= this.element.length)
                        throw new Error("超出索引范围:" + e + "/" + this.element.length);
                    return this.element[e]
                }
                ,
                t(e, [{
                    key: "elements",
                    get: function() {
                        return this.element
                    }
                }]),
                e
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LoadingIndicator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var o, i, n, r, e, a, l, c;
    return {
        setters: [function(t) {
            o = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            e = t.cclegacy,
            a = t._decorator,
            l = t.Node,
            c = t.Component
        }
        ],
        execute: function() {
            var s, d, u, p, g;
            e._RF.push({}, "95143M/82NCOLKGzw14JlmS", "LoadingIndicator", void 0);
            var h = a.ccclass
              , f = a.property;
            t("LoadingIndicator", (s = h("LoadingIndicator"),
            d = f(l),
            s((g = o((p = function(t) {
                function o() {
                    for (var o, i = arguments.length, e = new Array(i), a = 0; a < i; a++)
                        e[a] = arguments[a];
                    return o = t.call.apply(t, [this].concat(e)) || this,
                    n(o, "loading", g, r(o)),
                    o.loading_rotate = 0,
                    o
                }
                return i(o, t),
                o.prototype.update = function(t) {
                    this.loading_rotate += 220 * t,
                    this.loading.setRotationFromEuler(0, 0, -this.loading_rotate % 360),
                    this.loading_rotate > 360 && (this.loading_rotate -= 360)
                }
                ,
                o
            }(c)).prototype, "loading", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            u = p)) || u));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LoadingViewComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./ECS.ts", "./CCVMParentComp.ts", "./ModuleUtil.ts", "./HomeViewComp.ts", "./SingletonModuleComp.ts", "./GameUIConfig.ts", "./JsonUtil.ts", "./TableRoleJob.ts", "./TableRoleLevelUp.ts", "./TableRoleSkill.ts"], (function(e) {
    var t, n, o, a, r, s, i, c, l, u, p, d, f, g, m, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.asyncToGenerator,
            o = e.regeneratorRuntime
        }
        , function(e) {
            a = e.cclegacy,
            r = e._decorator
        }
        , function(e) {
            s = e.oops
        }
        , function(e) {
            i = e.ecs
        }
        , function(e) {
            c = e.CCVMParentComp
        }
        , function(e) {
            l = e.ModuleUtil
        }
        , function(e) {
            u = e.HomeViewComp
        }
        , function(e) {
            p = e.smc
        }
        , function(e) {
            d = e.UIID
        }
        , function(e) {
            f = e.JsonUtil
        }
        , function(e) {
            g = e.TableRoleJob
        }
        , function(e) {
            m = e.TableRoleLevelUp
        }
        , function(e) {
            h = e.TableRoleSkill
        }
        ],
        execute: function() {
            var C;
            a._RF.push({}, "92429ykTnxFCrcGyW58JWjj", "LoadingViewComp", void 0);
            var y = r.ccclass;
            r.property,
            e("LoadingViewComp", y("LoadingViewComp")(C = i.register("LoadingView", !1)(C = function(e) {
                function a() {
                    for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                        o[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(o)) || this).data = {
                        finished: 0,
                        total: 0,
                        progress: "0",
                        prompt: ""
                    },
                    t.progress = 0,
                    t
                }
                t(a, e);
                var r = a.prototype;
                return r.start = function() {
                    this.enter()
                }
                ,
                r.enter = function() {
                    this.loadRes()
                }
                ,
                r.loadRes = function() {
                    var e = n(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.data.progress = 0,
                                    e.next = 3,
                                    this.loadCustom();
                                case 3:
                                    this.loadGameRes();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                r.loadCustom = function() {
                    return this.data.prompt = s.language.getLangByID("loading_load_json"),
                    new Promise(n(o().mark((function e(t, n) {
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    f.loadRemoteAsync(g.TableName);
                                case 2:
                                    return e.next = 4,
                                    f.loadRemoteAsync(m.TableName);
                                case 4:
                                    return e.next = 6,
                                    f.loadRemoteAsync(h.TableName);
                                case 6:
                                    t(null);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))))
                }
                ,
                r.loadGameRes = function() {
                    this.data.prompt = s.language.getLangByID("loading_load_game"),
                    s.res.loadDir("game", this.onProgressCallback.bind(this), this.onCompleteCallback.bind(this))
                }
                ,
                r.onProgressCallback = function(e, t, n) {
                    this.data.finished = e,
                    this.data.total = t;
                    var o = e / t;
                    o > this.progress && (this.progress = o,
                    this.data.progress = (100 * o).toFixed(2))
                }
                ,
                r.onCompleteCallback = function() {
                    var e = n(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.data.prompt = s.language.getLangByID("loading_load_player"),
                                    p.account.connect(),
                                    e.next = 4,
                                    l.addViewUiAsync(p.account, u, d.Home);
                                case 4:
                                    l.removeViewUi(this.ent, a, d.Loading);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                r.reset = function() {}
                ,
                a
            }(c)) || C) || C);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Logger.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var n, i, e;
    return {
        setters: [function(t) {
            n = t.createClass
        }
        , function(t) {
            i = t.cclegacy,
            e = t.log
        }
        ],
        execute: function() {
            i._RF.push({}, "479cdJANP5KaJgU+8z0DdSE", "Logger", void 0);
            var s = t("LogType", function(t) {
                return t[t.Net = 1] = "Net",
                t[t.Model = 2] = "Model",
                t[t.Business = 4] = "Business",
                t[t.View = 8] = "View",
                t[t.Config = 16] = "Config",
                t[t.Trace = 32] = "Trace",
                t
            }({}))
              , o = {
                1: "网络日志",
                2: "数据日志",
                4: "业务日志",
                8: "视图日志",
                16: "配置日志",
                32: "标准日志"
            };
            t("Logger", function() {
                function t() {
                    this.tags = 0,
                    this.lc = null
                }
                var i = t.prototype;
                return i.setLoggerConsole = function(t) {
                    this.lc = t
                }
                ,
                i.init = function() {
                    this.tags = s.Net | s.Model | s.Business | s.View | s.Config | s.Trace
                }
                ,
                i.setTags = function(t) {
                    void 0 === t && (t = null),
                    t && (this.tags = t)
                }
                ,
                i.start = function(t) {
                    void 0 === t && (t = "Time"),
                    console.time(t)
                }
                ,
                i.end = function(t) {
                    void 0 === t && (t = "Time"),
                    console.timeEnd(t)
                }
                ,
                i.table = function(t, n) {
                    this.isOpen(s.Trace) && console.table(t)
                }
                ,
                i.trace = function(t, n) {
                    void 0 === n && (n = "#000000"),
                    this.print(s.Trace, t, n)
                }
                ,
                i.logNet = function(t, n) {
                    this.orange(s.Net, t, n)
                }
                ,
                i.logModel = function(t, n) {
                    this.violet(s.Model, t, n)
                }
                ,
                i.logBusiness = function(t, n) {
                    this.blue(s.Business, t, n)
                }
                ,
                i.logView = function(t, n) {
                    this.green(s.View, t, n)
                }
                ,
                i.logConfig = function(t, n) {
                    this.gray(s.Config, t, n)
                }
                ,
                i.orange = function(t, n, i) {
                    this.print(t, n, "#ee7700", i)
                }
                ,
                i.violet = function(t, n, i) {
                    this.print(t, n, "#800080", i)
                }
                ,
                i.blue = function(t, n, i) {
                    this.print(t, n, "#3a5fcd", i)
                }
                ,
                i.green = function(t, n, i) {
                    this.print(t, n, "#008000", i)
                }
                ,
                i.gray = function(t, n, i) {
                    this.print(t, n, "#808080", i)
                }
                ,
                i.isOpen = function(t) {
                    return 0 != (this.tags & t)
                }
                ,
                i.print = function(t, n, i, s) {
                    if (this.isOpen(t)) {
                        var r = o[t];
                        if (null == this.lc) {
                            var c = console.log || e;
                            i = "color:" + i + ";",
                            s ? c.call(null, "%c%s%s%s:%s%o", i, this.getDateString(), "[" + r + "]", this.stack(5), s, n) : c.call(null, "%c%s%s%s:%o", i, this.getDateString(), "[" + r + "]", this.stack(5), n)
                        } else
                            this.lc.trace(this.getDateString() + "[" + r + "]" + n, i)
                    }
                }
                ,
                i.stack = function(t) {
                    var n = (new Error).stack.split("\n")
                      , i = [];
                    n.forEach((function(t) {
                        var n, e = (t = t.substring(7)).split(" ");
                        e.length < 2 ? i.push(e[0]) : i.push(((n = {})[e[0]] = e[1],
                        n))
                    }
                    ));
                    var e, s = [], o = [];
                    if (t < i.length - 1)
                        for (var r in i[t])
                            if (2 == (o = r.split(".")).length)
                                s = o.concat();
                            else {
                                var c = (e = i[t][r]).lastIndexOf("/")
                                  , l = e.lastIndexOf(".");
                                if (c > -1 && l > -1) {
                                    var g = e.substring(c + 1, l);
                                    s.push(g)
                                } else
                                    s.push(e)
                            }
                    return 1 == s.length ? "[" + s[0] + ".ts]" : 2 == s.length ? "[" + s[0] + ".ts->" + s[1] + "]" : ""
                }
                ,
                i.getDateString = function() {
                    var t = new Date
                      , n = t.getHours().toString()
                      , i = "";
                    return i += (1 == n.length ? "0" + n : n) + ":",
                    i += (1 == (n = t.getMinutes().toString()).length ? "0" + n : n) + ":",
                    i += (1 == (n = t.getSeconds().toString()).length ? "0" + n : n) + ":",
                    1 == (n = t.getMilliseconds().toString()).length && (n = "00" + n),
                    2 == n.length && (n = "0" + n),
                    i = "[" + (i += n) + "]"
                }
                ,
                n(t, null, [{
                    key: "instance",
                    get: function() {
                        return null == this._instance && (this._instance = new t,
                        this._instance.init()),
                        this._instance
                    }
                }]),
                t
            }())._instance = void 0,
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main", ["./Main.ts", "./Account.ts", "./AccountNetData.ts", "./AccountModelComp.ts", "./GameViewComp.ts", "./HomeViewComp.ts", "./DataBase.ts", "./DataManager.ts", "./Enum.ts", "./Singleton.ts", "./ScrollBarEnhance.ts", "./SingletonModuleComp.ts", "./GameEvent.ts", "./GameStorageConfig.ts", "./GameUIConfig.ts", "./TableLanguage.ts", "./TablePromptWindow.ts", "./TipsManager.ts", "./GameResPath.ts", "./PlayerData.ts", "./EventDispatcher.ts", "./MessageManager.ts", "./Initialize.ts", "./InitRes.ts", "./LoadingViewComp.ts", "./CardItemComp.ts", "./UpgradeItemComp.ts", "./Role.ts", "./RoleEvent.ts", "./RoleChangeJob.ts", "./RoleSkillUpgrade.ts", "./RoleUpgrade.ts", "./RoleEnum.ts", "./RoleModelBaseComp.ts", "./RoleModelComp.ts", "./RoleModelJobComp.ts", "./RoleModelLevelComp.ts", "./RoleModelSkillComp.ts", "./RoleNumeric.ts", "./RoleNumericMap.ts", "./AdShowComp.ts", "./RoleViewAnimator.ts", "./RoleViewComp.ts", "./RoleViewLoader.ts", "./VideoPanelComp.ts", "./AnimationEventHandler.ts", "./RoleStateHit.ts", "./TableRoleJob.ts", "./TableRoleLevelUp.ts", "./TableRoleSkill.ts", "./Timer2.ts", "./Pool.ts", "./UIUtil.ts", "./Utils.ts", "./LanguageSpriteRewrite.ts", "./VMLabelRewrite.ts", "./VMProgressRewrite.ts", "./Oops.ts", "./Root.ts", "./AudioEffect.ts", "./AudioEffectPool.ts", "./AudioManager.ts", "./AudioMusic.ts", "./EventDispatcher2.ts", "./EventMessage.ts", "./MessageManager2.ts", "./ResLoader.ts", "./Logger.ts", "./RandomManager.ts", "./SeedRandom.ts", "./StorageManager.ts", "./StorageSecurityCrypto.ts", "./StorageSecuritySimple.ts", "./Timer.ts", "./TimerManager.ts", "./GameManager.ts", "./GuiEnum.ts", "./Defines.ts", "./DelegateComponent.ts", "./LayerDialog.ts", "./LayerEnum.ts", "./LayerManager.ts", "./LayerNotify.ts", "./LayerPopup.ts", "./LayerUI.ts", "./UIConfig.ts", "./CommonPrompt.ts", "./LoadingIndicator.ts", "./Notify.ts", "./ArrayUtil.ts", "./CameraUtil.ts", "./DeviceUtil.ts", "./EncryptUtil.ts", "./ImageUtil.ts", "./JsonUtil.ts", "./LayerUtil.ts", "./MathUtil.ts", "./ObjectUtil.ts", "./PhysicsUtil.ts", "./PlatformUtil.ts", "./RegexUtil.ts", "./RotateUtil.ts", "./StringUtil.ts", "./TimeUtils.ts", "./Vec3Util.ts", "./ViewUtil.ts", "./Ambilight.ts", "./FlashSpine.ts", "./FlashSprite.ts", "./SpineFinishedRelease.ts", "./Effect2DFollow3D.ts", "./EffectDelayRelease.ts", "./EffectEvent.ts", "./EffectFinishedRelease.ts", "./EffectSingleCase.ts", "./MoveRigidBody.ts", "./MoveTo.ts", "./MoveTranslate.ts", "./AnimatorAnimation.ts", "./AnimatorCustomization.ts", "./AnimatorDragonBones.ts", "./AnimatorSkeletal.ts", "./AnimatorSpine.ts", "./AnimatorSpineSecondary.ts", "./AnimatorBase.ts", "./AnimatorCondition.ts", "./AnimatorController.ts", "./AnimatorParams.ts", "./AnimatorState.ts", "./AnimatorStateLogic.ts", "./AnimatorTransition.ts", "./BTreeNode.ts", "./BehaviorTree.ts", "./BranchNode.ts", "./Decorator.ts", "./IControl.ts", "./Priority.ts", "./Selector.ts", "./Sequence.ts", "./Task.ts", "./index.ts", "./FreeFlightCamera.ts", "./OrbitCamera.ts", "./AsyncQueue.ts", "./Collection.ts", "./List.ts", "./ECS.ts", "./ECSComp.ts", "./ECSEntity.ts", "./ECSGroup.ts", "./ECSMask.ts", "./ECSMatcher.ts", "./ECSModel.ts", "./ECSSystem.ts", "./ArrayExt.ts", "./DateExt.ts", "./DirectorExt.ts", "./NodeDragExt.ts", "./NodeExt.ts", "./ButtonEffect.ts", "./ButtonSimple.ts", "./ButtonTouchLong.ts", "./UIButton.ts", "./LabelChange.ts", "./LabelNumber.ts", "./LabelTime.ts", "./Language.ts", "./LanguageData.ts", "./LanguageLabel.ts", "./LanguagePack.ts", "./LanguageSpine.ts", "./LanguageSprite.ts", "./JsonOb.ts", "./StringFormat.ts", "./VMBase.ts", "./VMCompsEdit.ts", "./VMCustom.ts", "./VMEnv.ts", "./VMEvent.ts", "./VMLabel.ts", "./VMModify.ts", "./VMParent.ts", "./VMProgress.ts", "./VMState.ts", "./ViewModel.ts", "./BhvButtonGroup.ts", "./BhvFrameIndex.ts", "./BhvRollNumber.ts", "./BhvSwitchPage.ts", "./HttpRequest.ts", "./NetInterface.ts", "./NetManager.ts", "./NetNode.ts", "./NetProtocolPako.ts", "./WebSock.ts", "./RtToModel.ts", "./RtToSprite.ts", "./CCComp.ts", "./CCVMParentComp.ts", "./GameCollision.ts", "./GameComponent.ts", "./ModuleUtil.ts", "./BuildTimeConstants.ts", "./Config.ts", "./GameConfig.ts", "./GameQueryConfig.ts"], (function() {
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}
));

System.register("chunks:///_virtual/Main.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Account.ts", "./SingletonModuleComp.ts", "./GameUIConfig.ts", "./Initialize.ts", "./Root.ts", "./ECS.ts", "./Oops.ts", "./Enum.ts", "./Utils.ts", "./MessageManager.ts", "./Timer2.ts"], (function(n) {
    var i, t, o, e, a, r, c, u, s, l, f, w, E, g, d, p, A, M, m, _, h, G, v;
    return {
        setters: [function(n) {
            i = n.applyDecoratedDescriptor,
            t = n.inheritsLoose,
            o = n.initializerDefineProperty,
            e = n.assertThisInitialized
        }
        , function(n) {
            a = n.cclegacy,
            r = n._decorator,
            c = n.Vec3,
            u = n.Prefab,
            s = n.Node,
            l = n.instantiate,
            f = n.Animation
        }
        , function(n) {
            w = n.Account
        }
        , function(n) {
            E = n.smc
        }
        , function(n) {
            g = n.UIConfigData
        }
        , function(n) {
            d = n.Initialize
        }
        , function(n) {
            p = n.Root
        }
        , function(n) {
            A = n.ecs
        }
        , function(n) {
            M = n.oops
        }
        , function(n) {
            m = n.APP_CONFIG,
            _ = n.EngineMessage
        }
        , function(n) {
            h = n.default
        }
        , function(n) {
            G = n.Message
        }
        , function(n) {
            v = n.default
        }
        ],
        execute: function() {
            var U, y, N, R, I;
            a._RF.push({}, "0eec0s4qrZF7onPlYBrD+y+", "Main", void 0);
            var P = r.ccclass
              , L = r.property
              , T = new c
              , C = [];
            n("Main", (U = P("Main"),
            y = L(u),
            U((I = i((R = function(n) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return i = n.call.apply(n, [this].concat(a)) || this,
                    o(i, "clickEffect", I, e(i)),
                    i
                }
                t(i, n);
                var a = i.prototype;
                return a.onLoad = function() {
                    var n = this;
                    if ("undefined" != typeof YYGGames) {
                        var i = YYGGames.browser.ENV_DOMAIN.includes("localhost") || YYGGames.browser.ENV_DOMAIN.includes("192.168.1") ? "https://www.h5games4u.com/" : YYGGames.browser.ENV_DOMAIN;
                        window.GAME_BASE_URL = i + "forgame/prank-call",
                        window.GAME_ID = h.getUrlParam("id") || "Prank-Call-Tung-Tung-Sahur",
                        window.BASE_URL = window.GAME_BASE_URL + "/" + window.GAME_ID,
                        window.REMOTE_URL = {},
                        window.LANG = null == h.getUrlParam("lang") ? "zh-CN" == window.navigator.language ? "ZH" : "EN" : "ZH" == h.getUrlParam("lang") ? "ZH" : "EN",
                        window.REMOTE_CACHE = {},
                        YYGGames.init({
                            appName: m.NAME,
                            cb: function() {
                                n.initMain()
                            }
                        })
                    } else {
                        window.GAME_BASE_URL = "https://www.h5games4u.com/forgame/prank-call",
                        window.GAME_ID = h.getUrlParam("id") || "Prank-Call-Tung-Tung-Sahur",
                        window.BASE_URL = window.GAME_BASE_URL + "/" + window.GAME_ID,
                        window.REMOTE_URL = {},
                        window.LANG = null == h.getUrlParam("lang") ? "zh-CN" == window.navigator.language ? "ZH" : "EN" : "ZH" == h.getUrlParam("lang") ? "ZH" : "EN",
                        window.REMOTE_CACHE = {},
                        this.initMain()
                    }
                }
                ,
                a.initMain = function() {
                    var i = this;
                    n.prototype.onLoad.call(this),
                    v.register(),
                    G.on(_.GAME_ADBEFORE, (function() {
                        M.audio.volumeMusic = 0,
                        M.audio.volumeEffect = 0
                    }
                    )),
                    G.on(_.GAME_ADAFTER, (function() {
                        M.audio.volumeMusic = 1,
                        M.audio.volumeEffect = 1
                    }
                    )),
                    this.gui.on(s.EventType.TOUCH_START, (function(n) {
                        var t = null;
                        if (C.length > 0) {
                            t = C.shift();
                            var o = n.getUILocation();
                            T.set(o.x, o.y, 0),
                            t.worldPosition = T,
                            t.active = !0
                        } else {
                            (t = l(i.clickEffect)).setParent(i.gui);
                            var e = n.getUILocation();
                            T.set(e.x, e.y, 0),
                            t.worldPosition = T
                        }
                        var a = t.getComponent(f);
                        a.on(f.EventType.FINISHED, (function() {
                            t.active = !1,
                            C.push(t)
                        }
                        ), i),
                        a.play()
                    }
                    ), this)
                }
                ,
                a.start = function() {}
                ,
                a.run = function() {
                    E.initialize = A.getEntity(d),
                    E.account = A.getEntity(w)
                }
                ,
                a.initGui = function() {
                    M.gui.init(g)
                }
                ,
                i
            }(p)).prototype, "clickEffect", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N = R)) || N));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MathUtil.ts", ["cc"], (function(t) {
    var n;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "8c615ZS4PRMPKPA9ZqKjiJC", "MathUtil", void 0);
            var r = t("MathUtil", function() {
                function t() {}
                return t.sign = function(t) {
                    return t > 0 ? 1 : t < 0 ? -1 : 0
                }
                ,
                t.progress = function(t, n, r) {
                    return t + (n - t) * r
                }
                ,
                t.lerp = function(t, n, r) {
                    return r > 1 ? r = 1 : r < 0 && (r = 0),
                    t * (1 - r) + n * r
                }
                ,
                t.lerpAngle = function(n, r, e) {
                    var u = (r %= 360) - (n %= 360);
                    return u > 180 ? r = n - (360 - u) : u < -180 && (r = n + (360 + u)),
                    (t.lerp(n, r, e) % 360 + 360) % 360
                }
                ,
                t.angleTowards = function(t, n, r) {
                    var e = (n %= 360) - (t %= 360);
                    e > 180 ? n = t - (360 - e) : e < -180 && (n = t + (360 + e));
                    var u = n - t;
                    return r > Math.abs(u) ? n : ((t + r * Math.sign(u)) % 360 + 360) % 360
                }
                ,
                t.clamp = function(t, n, r) {
                    return t < n ? n : t > r ? r : t
                }
                ,
                t.probability = function(t) {
                    return Math.random() < t
                }
                ,
                t
            }());
            r.deg2Rad = Math.PI / 180,
            r.rad2Deg = 180 / Math.PI,
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MessageManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var n, t, s, i;
    return {
        setters: [function(e) {
            n = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            t = e.cclegacy,
            s = e.warn,
            i = e.log
        }
        ],
        execute: function() {
            var o;
            t._RF.push({}, "9b2f8XbOrNG+oTzzOjPqPD7", "MessageManager", void 0);
            var r = function() {
                this.event = void 0,
                this.listener = void 0,
                this.obj = void 0
            }
              , v = (e("MessageEventData", function() {
                function e() {
                    this.events = {}
                }
                var t = e.prototype;
                return t.on = function(e, n, t) {
                    var s = this.events[e];
                    null == s && (s = [],
                    this.events[e] = s);
                    var i = new r;
                    i.event = e,
                    i.listener = n,
                    i.obj = t,
                    s.push(i),
                    a.on(e, n, t)
                }
                ,
                t.off = function(e) {
                    var t = this.events[e];
                    if (t) {
                        for (var s, i = n(t); !(s = i()).done; ) {
                            var o = s.value;
                            a.off(e, o.listener, o.obj)
                        }
                        delete this.events[e]
                    }
                }
                ,
                t.dispatchEvent = function(e, n) {
                    void 0 === n && (n = null),
                    a.dispatchEvent(e, n)
                }
                ,
                t.removes = function() {
                    for (var e in this.events)
                        this.off(e)
                }
                ,
                e
            }()),
            function() {
                function e() {
                    this.events = {}
                }
                var n = e.prototype;
                return n.on = function(e, n, t) {
                    if (e && n) {
                        var i = this.events[e];
                        null == i && (i = [],
                        this.events[e] = i);
                        for (var o = i.length, v = 0; v < o; v++) {
                            var a = i[v];
                            a.listener == n && a.obj == t && s("名为【" + e + "】的事件重复注册侦听器")
                        }
                        var f = new r;
                        f.event = e,
                        f.listener = n,
                        f.obj = t,
                        i.push(f)
                    } else
                        s("注册【" + e + "】事件的侦听器函数为空")
                }
                ,
                n.once = function(e, n, t) {
                    var s = this
                      , i = function(o, r) {
                        s.off(e, i, t),
                        i = null,
                        n.call(t, o, r)
                    };
                    this.on(e, i, t)
                }
                ,
                n.off = function(e, n, t) {
                    var s = this.events[e];
                    if (s) {
                        for (var o = s.length, r = 0; r < o; r++) {
                            var v = s[r];
                            if (v.listener == n && v.obj == t) {
                                s.splice(r, 1);
                                break
                            }
                        }
                        0 == s.length && delete this.events[e]
                    } else
                        i("名为【" + e + "】的事件不存在")
                }
                ,
                n.dispatchEvent = function(e, n) {
                    var t = this.events[e];
                    if (null != t)
                        for (var s = t.concat(), i = s.length, o = 0; o < i; o++) {
                            var r = s[o];
                            r.listener.call(r.obj, e, n)
                        }
                }
                ,
                n.clear = function() {
                    this.events = {}
                }
                ,
                e
            }());
            o = v,
            v.Instance = new o;
            var a = e("Message", v.Instance);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MessageManager2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, n, r, s;
    return {
        setters: [function(e) {
            t = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            n = e.cclegacy,
            r = e.warn,
            s = e.log
        }
        ],
        execute: function() {
            n._RF.push({}, "a401fY+wj9NsqOACoZ7Zy/R", "MessageManager", void 0);
            var o = function() {
                this.event = void 0,
                this.listener = void 0,
                this.object = void 0
            }
              , a = (e("MessageEventData", function() {
                function e() {
                    this.events = new Map
                }
                var n = e.prototype;
                return n.on = function(e, t, n) {
                    var r = this.events.get(e);
                    null == r && (r = [],
                    this.events.set(e, r));
                    var s = new o;
                    s.event = e,
                    s.listener = t,
                    s.object = n,
                    r.push(s),
                    i.on(e, t, n)
                }
                ,
                n.off = function(e) {
                    var n = this.events.get(e);
                    if (n) {
                        for (var r, s = t(n); !(r = s()).done; ) {
                            var o = r.value;
                            i.off(e, o.listener, o.object)
                        }
                        this.events.delete(e)
                    }
                }
                ,
                n.dispatchEvent = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    i.dispatchEvent.apply(i, [e].concat(n))
                }
                ,
                n.clear = function() {
                    for (var e = 0, t = Array.from(this.events.keys()); e < t.length; e++) {
                        var n = t[e];
                        this.off(n)
                    }
                }
                ,
                e
            }()),
            e("MessageManager", function() {
                function e() {
                    this.events = new Map
                }
                var t = e.prototype;
                return t.on = function(e, t, n) {
                    if (e && t) {
                        var s = this.events.get(e);
                        null == s && (s = [],
                        this.events.set(e, s));
                        for (var a = s.length, i = 0; i < a; i++) {
                            var v = s[i];
                            v.listener == t && v.object == n && r("名为【" + e + "】的事件重复注册侦听器")
                        }
                        var c = new o;
                        c.event = e,
                        c.listener = t,
                        c.object = n,
                        s.push(c)
                    } else
                        r("注册【" + e + "】事件的侦听器函数为空")
                }
                ,
                t.once = function(e, t, n) {
                    var r = this
                      , s = function(o) {
                        r.off(e, s, n),
                        s = null;
                        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), v = 1; v < a; v++)
                            i[v - 1] = arguments[v];
                        t.call(n, o, i)
                    };
                    this.on(e, s, n)
                }
                ,
                t.off = function(e, t, n) {
                    var r = this.events.get(e);
                    if (r) {
                        for (var o = r.length, a = 0; a < o; a++) {
                            var i = r[a];
                            if (i.listener == t && i.object == n) {
                                r.splice(a, 1);
                                break
                            }
                        }
                        0 == r.length && this.events.delete(e)
                    } else
                        s("名为【" + e + "】的事件不存在")
                }
                ,
                t.dispatchEvent = function(e) {
                    var t = this.events.get(e);
                    if (null != t) {
                        for (var n = t.concat(), r = n.length, s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
                            o[a - 1] = arguments[a];
                        for (var i = 0; i < r; i++) {
                            var v, c = n[i];
                            (v = c.listener).call.apply(v, [c.object, e].concat(o))
                        }
                    }
                }
                ,
                e
            }()))
              , i = e("message", new a);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ModuleUtil.ts", ["cc", "./Oops.ts", "./ResLoader.ts", "./DelegateComponent.ts", "./ViewUtil.ts"], (function(e) {
    var n, o, t, i, u;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        , function(e) {
            o = e.oops
        }
        , function(e) {
            t = e.resLoader
        }
        , function(e) {
            i = e.DelegateComponent
        }
        , function(e) {
            u = e.ViewUtil
        }
        ],
        execute: function() {
            n._RF.push({}, "52a6cdAO5tGxaeE1TprZ5VK", "ModuleUtil", void 0);
            e("ModuleUtil", function() {
                function e() {}
                return e.addViewUi = function(e, n, t, i) {
                    void 0 === i && (i = null);
                    var u = {
                        onAdded: function(o, t) {
                            var i = o.getComponent(n);
                            e.has(n) || e.add(i)
                        }
                    };
                    o.gui.open(t, i, u)
                }
                ,
                e.addViewUiAsync = function(e, n, t, i) {
                    return void 0 === i && (i = null),
                    new Promise((function(u, d) {
                        var r = {
                            onAdded: function(o, t) {
                                var i = o.getComponent(n);
                                e.add(i),
                                u(o)
                            },
                            onLoadFailure: function() {
                                u(null)
                            }
                        };
                        o.gui.open(t, i, r)
                    }
                    ))
                }
                ,
                e.addView = function(e, n, o, i, d) {
                    void 0 === d && (d = t.defaultBundleName);
                    var r = u.createPrefabNode(i, d)
                      , a = r.getComponent(n);
                    e.add(a),
                    r.parent = o
                }
                ,
                e.removeViewUi = function(e, n, t, u, d) {
                    void 0 === u && (u = !0);
                    var r = o.gui.get(t);
                    if (r) {
                        var a = r.getComponent(i);
                        a ? a.vp.callbacks.onBeforeRemove ? a.onCloseWindowBefore = function() {
                            e.remove(n, u),
                            d && d()
                        }
                        : a.vp.callbacks.onRemoved ? a.onCloseWindow = function() {
                            e.remove(n, u),
                            d && d()
                        }
                        : (e.remove(n, u),
                        d && d()) : (e.remove(n, u),
                        d && d()),
                        o.gui.remove(t, u)
                    } else
                        d && d()
                }
                ,
                e
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MoveRigidBody.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, i, r, o, n, s, a, p, l, c, y;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            r = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            n = t.createClass
        }
        , function(t) {
            s = t.cclegacy,
            a = t._decorator,
            p = t.Vec3,
            l = t.RigidBody,
            c = t.EPSILON,
            y = t.Component
        }
        ],
        execute: function() {
            var d, u, h, g, _, f, v, m, b, B, M;
            s._RF.push({}, "4e8cedkWeJDEZoUMtauac/M", "MoveRigidBody", void 0);
            var w = a.ccclass
              , A = a.property
              , S = new p
              , z = new p;
            t("MoveRigidBody", (d = w("MoveRigidBody"),
            u = A({
                tooltip: "阻尼"
            }),
            h = A({
                tooltip: "重力"
            }),
            g = A({
                tooltip: "移动速度"
            }),
            _ = A({
                tooltip: "速度比率"
            }),
            d((m = e((v = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                        n[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    r(e, "damping", m, o(e)),
                    r(e, "gravity", b, o(e)),
                    r(e, "_speed", B, o(e)),
                    r(e, "_ratio", M, o(e)),
                    e._rigidBody = null,
                    e._grounded = !0,
                    e._curMaxSpeed = 0,
                    e._prevAngleY = 0,
                    e._stateX = 0,
                    e._stateZ = 0,
                    e._velocity = new p,
                    e
                }
                i(e, t);
                var s = e.prototype;
                return s.start = function() {
                    this._rigidBody = this.getComponent(l),
                    this._prevAngleY = this.node.eulerAngles.y
                }
                ,
                s.stop = function() {
                    this._stateX = 0,
                    this._stateZ = 0,
                    this._rigidBody.clearVelocity()
                }
                ,
                s.update = function(t) {
                    this.applyGravity(),
                    this.applyDamping(t),
                    this.grounded && this.applyLinearVelocity(S, 1)
                }
                ,
                s.applyGravity = function() {
                    var t = this.gravity
                      , e = this._rigidBody.mass;
                    z.set(0, e * t, 0),
                    this._rigidBody.applyForce(z)
                }
                ,
                s.applyDamping = function(t) {
                    this._rigidBody.getLinearVelocity(z),
                    z.lengthSqr() > c && (z.multiplyScalar(Math.pow(1 - this.damping, t)),
                    this._rigidBody.setLinearVelocity(z))
                }
                ,
                s.applyLinearVelocity = function(t, e) {
                    if (this._stateX || this._stateZ) {
                        S.set(this._stateX, 0, this._stateZ),
                        S.normalize(),
                        this._rigidBody.getLinearVelocity(z),
                        p.scaleAndAdd(z, z, t, e);
                        var i = this._curMaxSpeed
                          , r = 1;
                        z.lengthSqr() > i && (Math.abs(this.node.eulerAngles.y - this._prevAngleY) >= 10 && (r = 2),
                        this._prevAngleY = this.node.eulerAngles.y,
                        z.normalize(),
                        z.multiplyScalar(i / r)),
                        this._rigidBody.setLinearVelocity(z)
                    }
                }
                ,
                n(e, [{
                    key: "speed",
                    get: function() {
                        return this._speed
                    },
                    set: function(t) {
                        this._speed = t,
                        this._curMaxSpeed = t * this.ratio
                    }
                }, {
                    key: "ratio",
                    get: function() {
                        return this._ratio
                    },
                    set: function(t) {
                        this._ratio = t,
                        this._curMaxSpeed = this.speed * t
                    }
                }, {
                    key: "grounded",
                    get: function() {
                        return this._grounded
                    }
                }, {
                    key: "velocity",
                    get: function() {
                        return this._velocity
                    },
                    set: function(t) {
                        this._velocity = t;
                        var e = t.x
                          , i = t.z;
                        (e > 0 && this._stateX < 0 || e < 0 && this._stateX > 0 || i > 0 && this._stateZ < 0 || i < 0 && this._stateZ > 0) && this._rigidBody.clearVelocity(),
                        this._stateX = e,
                        this._stateZ = i
                    }
                }]),
                e
            }(y)).prototype, "damping", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5
                }
            }),
            b = e(v.prototype, "gravity", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return -10
                }
            }),
            B = e(v.prototype, "_speed", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5
                }
            }),
            e(v.prototype, "speed", [g], Object.getOwnPropertyDescriptor(v.prototype, "speed"), v.prototype),
            M = e(v.prototype, "_ratio", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            e(v.prototype, "ratio", [_], Object.getOwnPropertyDescriptor(v.prototype, "ratio"), v.prototype),
            f = v)) || f));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MoveTo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Timer.ts", "./Vec3Util.ts"], (function(t) {
    var e, i, s, o, n, l, h, r;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            i = t.cclegacy,
            s = t._decorator,
            o = t.Node,
            n = t.Vec3,
            l = t.Component
        }
        , function(t) {
            h = t.Timer
        }
        , function(t) {
            r = t.Vec3Util
        }
        ],
        execute: function() {
            var a;
            i._RF.push({}, "5e22a+qWUpI6ZHSVRRj2DYT", "MoveTo", void 0);
            var c = s.ccclass;
            s.property,
            t("MoveTo", c("MoveTo")(a = function(t) {
                function i() {
                    for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                        s[n] = arguments[n];
                    return (e = t.call.apply(t, [this].concat(s)) || this).target = null,
                    e.velocity = r.zero,
                    e.speed = 0,
                    e.hasYAxis = !0,
                    e.ns = o.NodeSpace.LOCAL,
                    e.offset = 0,
                    e.offsetVector = null,
                    e.onStart = null,
                    e.onComplete = null,
                    e.onChange = null,
                    e.timer = new h,
                    e.end = null,
                    e
                }
                e(i, t);
                var s = i.prototype;
                return s.onLoad = function() {
                    this.enabled = !1
                }
                ,
                s.move = function() {
                    this.enabled = !0
                }
                ,
                s.update = function(t) {
                    var e;
                    if (this.speed <= 0)
                        console.error("移动速度必须要大于零");
                    else if (null != (e = this.target instanceof o ? this.ns == o.NodeSpace.WORLD ? this.target.worldPosition : this.target.position : this.target)) {
                        if (null == this.end || !this.end.strictEquals(e)) {
                            var i, s = e.clone();
                            this.offsetVector && (s = s.add(this.offsetVector)),
                            0 == this.hasYAxis && (s.y = 0);
                            var l = this.ns == o.NodeSpace.WORLD ? this.node.worldPosition : this.node.position;
                            this.velocity = r.sub(s, l).normalize();
                            var h, a = n.distance(l, s) - this.offset;
                            if (null == (i = this.onChange) || i.call(this),
                            a <= 0)
                                return void this.exit();
                            null == (h = this.onStart) || h.call(this),
                            this.timer.step = a / this.speed,
                            this.end = e.clone()
                        }
                        if (this.speed > 0) {
                            var c = r.mul(this.velocity, this.speed * t);
                            this.ns == o.NodeSpace.WORLD ? this.node.worldPosition = r.add(this.node.worldPosition, c) : this.node.position = r.add(this.node.position, c)
                        }
                        this.timer.update(t) && (0 == this.offset && (this.ns == o.NodeSpace.WORLD ? this.node.worldPosition = this.end : this.node.position = this.end),
                        this.exit())
                    } else
                        this.exit()
                }
                ,
                s.exit = function() {
                    var t;
                    null == (t = this.onComplete) || t.call(this),
                    this.enabled = !1,
                    this.target = null,
                    this.velocity = r.zero,
                    this.speed = 0,
                    this.hasYAxis = !0,
                    this.ns = o.NodeSpace.LOCAL,
                    this.offset = 0,
                    this.offsetVector = null,
                    this.onStart = null,
                    this.onComplete = null,
                    this.onChange = null,
                    this.timer.reset(),
                    this.end = null
                }
                ,
                i
            }(l)) || a);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MoveTranslate.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Vec3Util.ts"], (function(e) {
    var t, o, r, n, c, s, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            o = e.cclegacy,
            r = e._decorator,
            n = e.Vec3,
            c = e.Node,
            s = e.Component
        }
        , function(e) {
            a = e.Vec3Util
        }
        ],
        execute: function() {
            var i;
            o._RF.push({}, "e626612zClLO4OZDEWvT+fr", "MoveTranslate", void 0);
            var l = r.ccclass;
            r.property,
            e("MoveTranslate", l("MoveTranslate")(i = function(e) {
                function o() {
                    for (var t, o = arguments.length, r = new Array(o), c = 0; c < o; c++)
                        r[c] = arguments[c];
                    return (t = e.call.apply(e, [this].concat(r)) || this).velocity = a.zero,
                    t.speed = 0,
                    t.vector = new n,
                    t
                }
                return t(o, e),
                o.prototype.update = function(e) {
                    this.speed > 0 && (n.multiplyScalar(this.vector, this.velocity, this.speed * e),
                    this.node.translate(this.vector, c.NodeSpace.WORLD))
                }
                ,
                o
            }(s)) || i);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/NetInterface.ts", ["cc"], (function() {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "d9f8b+CV69FyKwnUdCjOtad", "NetInterface", void 0),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/NetManager.ts", ["cc"], (function(n) {
    var e;
    return {
        setters: [function(n) {
            e = n.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "d8cd5el6GBGTYTW+N8b8EuJ", "NetManager", void 0),
            n("NetManager", function() {
                function n() {
                    this._channels = {}
                }
                n.getInstance = function() {
                    return this._instance || (this._instance = new n),
                    this._instance
                }
                ;
                var e = n.prototype;
                return e.setNetNode = function(n, e) {
                    void 0 === e && (e = 0),
                    this._channels[e] = n
                }
                ,
                e.removeNetNode = function(n) {
                    delete this._channels[n]
                }
                ,
                e.connect = function(n, e) {
                    return void 0 === e && (e = 0),
                    !!this._channels[e] && this._channels[e].connect(n)
                }
                ,
                e.send = function(n, e, t) {
                    void 0 === e && (e = !1),
                    void 0 === t && (t = 0);
                    var i = this._channels[t];
                    return i ? i.send(n, e) : -1
                }
                ,
                e.request = function(n, e, t, i, s) {
                    void 0 === t && (t = !0),
                    void 0 === i && (i = !1),
                    void 0 === s && (s = 0);
                    var c = this._channels[s];
                    c && c.request(n, e, t, i)
                }
                ,
                e.requestUnique = function(n, e, t, i, s) {
                    void 0 === t && (t = !0),
                    void 0 === i && (i = !1),
                    void 0 === s && (s = 0);
                    var c = this._channels[s];
                    return !!c && c.requestUnique(n, e, t, i)
                }
                ,
                e.close = function(n, e, t) {
                    if (void 0 === t && (t = 0),
                    this._channels[t])
                        return this._channels[t].closeSocket(n, e)
                }
                ,
                n
            }())._instance = void 0,
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/NetNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(e) {
    var t, s, i, n, o;
    return {
        setters: [function(e) {
            t = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            s = e.cclegacy,
            i = e.error,
            n = e.warn
        }
        , function(e) {
            o = e.Logger
        }
        ],
        execute: function() {
            s._RF.push({}, "57f0fB90kNBUJ98yyu+jxjx", "NetNode", void 0);
            var c = ["已关闭", "连接中", "验证中", "可传输数据"]
              , r = e("NetTipsType", function(e) {
                return e[e.Connecting = 0] = "Connecting",
                e[e.ReConnecting = 1] = "ReConnecting",
                e[e.Requesting = 2] = "Requesting",
                e
            }({}))
              , l = e("NetNodeState", function(e) {
                return e[e.Closed = 0] = "Closed",
                e[e.Connecting = 1] = "Connecting",
                e[e.Checking = 2] = "Checking",
                e[e.Working = 3] = "Working",
                e
            }({}));
            e("NetNode", function() {
                function e() {
                    this._connectOptions = null,
                    this._autoReconnect = 0,
                    this._isSocketInit = !1,
                    this._isSocketOpen = !1,
                    this._state = l.Closed,
                    this._socket = null,
                    this._networkTips = null,
                    this._protocolHelper = null,
                    this._connectedCallback = null,
                    this._disconnectCallback = null,
                    this._callbackExecuter = null,
                    this._keepAliveTimer = null,
                    this._receiveMsgTimer = null,
                    this._reconnectTimer = null,
                    this._heartTime = 1e4,
                    this._receiveTime = 6e6,
                    this._reconnetTimeOut = 8e6,
                    this._requests = Array(),
                    this._listener = {}
                }
                var s = e.prototype;
                return s.init = function(e, t, s, i) {
                    void 0 === s && (s = null),
                    void 0 === i && (i = null),
                    o.instance.logNet("网络初始化"),
                    this._socket = e,
                    this._protocolHelper = t,
                    this._networkTips = s,
                    this._callbackExecuter = i || function(e, t) {
                        e.callback.call(e.target, t)
                    }
                }
                ,
                s.connect = function(e) {
                    return !(!this._socket || this._state != l.Closed) && (this._isSocketInit || this.initSocket(),
                    this._state = l.Connecting,
                    this._socket.connect(e) ? (null == this._connectOptions && "number" == typeof e.autoReconnect && (this._autoReconnect = e.autoReconnect),
                    this._connectOptions = e,
                    this.updateNetTips(r.Connecting, !0),
                    !0) : (this.updateNetTips(r.Connecting, !1),
                    !1))
                }
                ,
                s.initSocket = function() {
                    var e = this;
                    this._socket && (this._socket.onConnected = function(t) {
                        e.onConnected(t)
                    }
                    ,
                    this._socket.onMessage = function(t) {
                        e.onMessage(t)
                    }
                    ,
                    this._socket.onError = function(t) {
                        e.onError(t)
                    }
                    ,
                    this._socket.onClosed = function(t) {
                        e.onClosed(t)
                    }
                    ,
                    this._isSocketInit = !0)
                }
                ,
                s.updateNetTips = function(e, t) {
                    this._networkTips && (e == r.Requesting ? this._networkTips.requestTips(t) : e == r.Connecting ? this._networkTips.connectTips(t) : e == r.ReConnecting && this._networkTips.reconnectTips(t))
                }
                ,
                s.onConnected = function(e) {
                    var t = this;
                    o.instance.logNet("网络已连接"),
                    this._isSocketOpen = !0,
                    null !== this._connectedCallback ? (this._state = l.Checking,
                    this._connectedCallback((function() {
                        t.onChecked()
                    }
                    ))) : this.onChecked(),
                    o.instance.logNet("网络已连接当前状态为【" + c[this._state] + "】")
                }
                ,
                s.onChecked = function() {
                    o.instance.logNet("连接验证成功，进入工作状态"),
                    this._state = l.Working,
                    this.updateNetTips(r.Connecting, !1),
                    this.updateNetTips(r.ReConnecting, !1);
                    var e = this._requests.concat();
                    if (e.length > 0) {
                        o.instance.logNet("请求【" + this._requests.length + "】个待发送的信息");
                        for (var t = 0; t < e.length; ) {
                            var s = e[t];
                            this._socket.send(s.buffer),
                            null == s.rspObject || "" != s.rspCmd ? e.splice(t, 1) : ++t
                        }
                        this.updateNetTips(r.Requesting, this._requests.length > 0)
                    }
                }
                ,
                s.onMessage = function(e) {
                    var s = JSON.parse(e);
                    if (this._protocolHelper.checkResponsePackage(s)) {
                        this._protocolHelper.handlerResponsePackage(s) || this._networkTips && this._networkTips.responseErrorCode(s.code),
                        this.resetReceiveMsgTimer(),
                        this.resetHearbeatTimer();
                        var n = this._protocolHelper.getPackageId(s);
                        if (o.instance.logNet("接受到命令【" + n + "】的消息"),
                        this._requests.length > 0) {
                            for (var c in this._requests) {
                                var l = this._requests[c];
                                if (l.rspCmd == n && l.rspObject) {
                                    o.instance.logNet("触发请求命令【" + n + "】的回调"),
                                    this._callbackExecuter(l.rspObject, s.data),
                                    this._requests.splice(parseInt(c), 1);
                                    break
                                }
                            }
                            0 == this._requests.length ? this.updateNetTips(r.Requesting, !1) : o.instance.logNet("请求队列中还有【" + this._requests.length + "】个请求在等待")
                        }
                        var h = this._listener[n];
                        if (null != h)
                            for (var a, u = t(h); !(a = u()).done; ) {
                                var _ = a.value;
                                o.instance.logNet("触发监听命令【" + n + "】的回调"),
                                this._callbackExecuter(_, s.data)
                            }
                    } else
                        i("校验接受消息数据异常")
                }
                ,
                s.onError = function(e) {
                    i(e)
                }
                ,
                s.onClosed = function(e) {
                    var t = this;
                    this.clearTimer(),
                    !this._disconnectCallback || this._disconnectCallback() ? this.isAutoReconnect() ? (this.updateNetTips(r.ReConnecting, !0),
                    this._reconnectTimer = setTimeout((function() {
                        t._socket.close(),
                        t._state = l.Closed,
                        t.connect(t._connectOptions),
                        t._autoReconnect > 0 && (t._autoReconnect -= 1)
                    }
                    ), this._reconnetTimeOut)) : this._state = l.Closed : o.instance.logNet("断开连接")
                }
                ,
                s.close = function(e, t) {
                    this.clearTimer(),
                    this._listener = {},
                    this._requests.length = 0,
                    this._networkTips && (this._networkTips.connectTips(!1),
                    this._networkTips.reconnectTips(!1),
                    this._networkTips.requestTips(!1)),
                    this._socket ? this._socket.close(e, t) : this._state = l.Closed
                }
                ,
                s.closeSocket = function(e, t) {
                    this._socket && this._socket.close(e, t)
                }
                ,
                s.send = function(e, t) {
                    return void 0 === t && (t = !1),
                    this._state == l.Working || t ? this._socket.send(e) : this._state == l.Checking || this._state == l.Connecting ? (this._requests.push({
                        buffer: e,
                        rspCmd: "",
                        rspObject: null
                    }),
                    o.instance.logNet("当前状态为【" + c[this._state] + "】,繁忙并缓冲发送数据"),
                    0) : (i("当前状态为【" + c[this._state] + "】,请求错误"),
                    -1)
                }
                ,
                s.request = function(e, t, s, i) {
                    void 0 === s && (s = !0),
                    void 0 === i && (i = !1);
                    var n = this._protocolHelper.handlerRequestPackage(e);
                    this.base_request(e, n, t, s, i)
                }
                ,
                s.requestUnique = function(e, t, s, i) {
                    void 0 === s && (s = !0),
                    void 0 === i && (i = !1);
                    for (var n = this._protocolHelper.handlerRequestPackage(e), c = 0; c < this._requests.length; ++c)
                        if (this._requests[c].rspCmd == n)
                            return o.instance.logNet("命令【" + n + "】重复请求"),
                            !1;
                    return this.base_request(e, n, t, s, i),
                    !0
                }
                ,
                s.base_request = function(e, t, s, i, n) {
                    void 0 === i && (i = !0),
                    void 0 === n && (n = !1);
                    var c = JSON.stringify(e);
                    (this._state == l.Working || n) && this._socket.send(c),
                    o.instance.logNet("队列命令为【" + t + "】的请求，等待请求数据的回调"),
                    this._requests.push({
                        buffer: c,
                        rspCmd: t,
                        rspObject: s
                    }),
                    i && this.updateNetTips(r.Requesting, !0)
                }
                ,
                s.setResponeHandler = function(e, t, s) {
                    return null == t ? (i("命令为【" + e + "】设置响应处理程序错误"),
                    !1) : (this._listener[e] = [{
                        target: s,
                        callback: t
                    }],
                    !0)
                }
                ,
                s.addResponeHandler = function(e, t, s) {
                    if (null == t)
                        return i("命令为【" + e + "】添加响应处理程序错误"),
                        !1;
                    var n = {
                        target: s,
                        callback: t
                    };
                    null == this._listener[e] ? this._listener[e] = [n] : -1 == this.getNetListenersIndex(e, n) && this._listener[e].push(n);
                    return !0
                }
                ,
                s.removeResponeHandler = function(e, t, s) {
                    if (null != this._listener[e] && null != t) {
                        var i = this.getNetListenersIndex(e, {
                            target: s,
                            callback: t
                        });
                        -1 != i && this._listener[e].splice(i, 1)
                    }
                }
                ,
                s.cleanListeners = function(e) {
                    void 0 === e && (e = ""),
                    "" == e ? this._listener = {} : delete this._listener[e]
                }
                ,
                s.getNetListenersIndex = function(e, t) {
                    for (var s = -1, i = 0; i < this._listener[e].length; i++) {
                        var n = this._listener[e][i];
                        if (n.callback == t.callback && n.target == t.target) {
                            s = i;
                            break
                        }
                    }
                    return s
                }
                ,
                s.resetReceiveMsgTimer = function() {
                    var e = this;
                    null !== this._receiveMsgTimer && clearTimeout(this._receiveMsgTimer),
                    this._receiveMsgTimer = setTimeout((function() {
                        n("接收消息定时器关闭网络连接"),
                        e._socket.close()
                    }
                    ), this._receiveTime)
                }
                ,
                s.resetHearbeatTimer = function() {
                    var e = this;
                    null !== this._keepAliveTimer && clearTimeout(this._keepAliveTimer),
                    this._keepAliveTimer = setTimeout((function() {
                        o.instance.logNet("网络节点保持活跃发送心跳信息"),
                        e.send(e._protocolHelper.getHearbeat())
                    }
                    ), this._heartTime)
                }
                ,
                s.clearTimer = function() {
                    null !== this._receiveMsgTimer && clearTimeout(this._receiveMsgTimer),
                    null !== this._keepAliveTimer && clearTimeout(this._keepAliveTimer),
                    null !== this._reconnectTimer && clearTimeout(this._reconnectTimer)
                }
                ,
                s.isAutoReconnect = function() {
                    return 0 != this._autoReconnect
                }
                ,
                s.rejectReconnect = function() {
                    this._autoReconnect = 0,
                    this.clearTimer()
                }
                ,
                e
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/NetProtocolPako.ts", ["cc"], (function(t) {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "88ae0lIg5BFWb1O1E8/Etwi", "NetProtocolPako", void 0);
            t("NetProtocolPako", function() {
                function t() {}
                var e = t.prototype;
                return e.getHeadlen = function() {
                    return 0
                }
                ,
                e.getHearbeat = function() {
                    return ""
                }
                ,
                e.getPackageLen = function(t) {
                    return t.toString().length
                }
                ,
                e.checkResponsePackage = function(t) {
                    return !0
                }
                ,
                e.handlerResponsePackage = function(t) {
                    return 1 == t.code && (t.isCompress && (t.data = (e = t.data,
                    n = e.split("").map((function(t) {
                        return t.charCodeAt(0)
                    }
                    )),
                    a = new Uint8Array(n),
                    pako.inflate(a, {
                        to: "string"
                    }))),
                    t.data = JSON.parse(t.data),
                    !0);
                    var e, n, a
                }
                ,
                e.handlerRequestPackage = function(t) {
                    var e, n = t.cmd;
                    return t.callback = n,
                    t.isCompress && (t.data = (e = t.data,
                    pako.gzip(e, {
                        to: "string"
                    }))),
                    n
                }
                ,
                e.getPackageId = function(t) {
                    return t.callback
                }
                ,
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/NodeDragExt.ts", ["cc"], (function() {
    var t, i, n, e, o;
    return {
        setters: [function(s) {
            t = s.cclegacy,
            i = s.Node,
            n = s.js,
            e = s.Vec2,
            o = s.v3
        }
        ],
        execute: function() {
            if (t._RF.push({}, "1a072/udu9MtbdbyL5xB8iR", "NodeDragExt", void 0),
            !i.prototype.__$NodeDragExt$__) {
                i.prototype.__$NodeDragExt$__ = !0;
                n.mixin(i, {
                    DragEvent: {
                        DRAG_START: "drag_start",
                        DRAG_MOVE: "drag_move",
                        DRAG_END: "drag_end"
                    }
                }),
                n.mixin(i.prototype, {
                    _draggable: !1,
                    _dragging: !1,
                    _dragTesting: !1,
                    _dragStartPoint: null,
                    initDrag: function() {
                        this._draggable ? (this.on(i.EventType.TOUCH_START, this.onTouchBegin_0, this),
                        this.on(i.EventType.TOUCH_MOVE, this.onTouchMove_0, this),
                        this.on(i.EventType.TOUCH_END, this.onTouchEnd_0, this),
                        this.on(i.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this)) : (this.off(i.EventType.TOUCH_START, this.onTouchBegin_0, this),
                        this.off(i.EventType.TOUCH_MOVE, this.onTouchMove_0, this),
                        this.off(i.EventType.TOUCH_END, this.onTouchEnd_0, this),
                        this.off(i.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this))
                    },
                    onTouchBegin_0: function(t) {
                        null == this._dragStartPoint && (this._dragStartPoint = new e);
                        var i = t.getUILocation();
                        this._dragStartPoint.set(i),
                        this._dragTesting = !0
                    },
                    onTouchMove_0: function(t) {
                        if (!this._dragging && this._draggable && this._dragTesting) {
                            var n = t.getUILocation();
                            if (Math.abs(this._dragStartPoint.x - n.x) < 10 && Math.abs(this._dragStartPoint.y - n.y) < 10)
                                return;
                            this._dragging = !0,
                            this._dragTesting = !1,
                            this.emit(i.DragEvent.DRAG_START, t)
                        }
                        if (this._dragging) {
                            var e = t.getUIDelta()
                              , s = o(e.x, e.y, 0).add(this.position);
                            this.position = s,
                            this.emit(i.DragEvent.DRAG_MOVE, t)
                        }
                    },
                    onTouchEnd_0: function(t) {
                        this._dragging && (this._dragging = !1,
                        this.emit(i.DragEvent.DRAG_END, t))
                    },
                    onTouchCancel_0: function(t) {
                        this._dragging && (this._dragging = !1,
                        this.emit(i.DragEvent.DRAG_END, t))
                    },
                    startDrag: function() {
                        this.activeInHierarchy && this.dragBegin()
                    },
                    dragBegin: function() {
                        this._dragging = !0,
                        this._dragTesting = !0,
                        this.on(i.EventType.TOUCH_MOVE, this.onTouchMove_0, this),
                        this.on(i.EventType.TOUCH_END, this.onTouchEnd_0, this),
                        this.on(i.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this)
                    },
                    dragEnd: function() {
                        this._dragging && (this._dragTesting = !1,
                        this._dragging = !1)
                    },
                    stopDrag: function() {
                        this.dragEnd()
                    },
                    removeDragEvent: function() {
                        this.off(i.EventType.TOUCH_START, this.onTouchBegin_0, this),
                        this.off(i.EventType.TOUCH_MOVE, this.onTouchMove_0, this),
                        this.off(i.EventType.TOUCH_END, this.onTouchEnd_0, this),
                        this.off(i.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this)
                    }
                }),
                Object.defineProperty(i.prototype, "draggable", {
                    get: function() {
                        return this._draggable
                    },
                    set: function(t) {
                        this._draggable != t && (this._draggable = t,
                        this.initDrag())
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "dragTesting", {
                    get: function() {
                        return this._dragTesting
                    },
                    set: function(t) {
                        this._dragTesting != t && (this._dragTesting = t)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/NodeExt.ts", ["cc"], (function() {
    var t, e, n, o, r, i, p, c, s, u, f, g, y, h, l, a, d, m, C, P, b, O, j;
    return {
        setters: [function(v) {
            t = v.cclegacy,
            e = v.Node,
            n = v.Graphics,
            o = v.Label,
            r = v.RichText,
            i = v.Sprite,
            p = v.Button,
            c = v.Canvas,
            s = v.EditBox,
            u = v.Layout,
            f = v.PageView,
            g = v.ProgressBar,
            y = v.ScrollView,
            h = v.Slider,
            l = v.Toggle,
            a = v.Widget,
            d = v.UIOpacity,
            m = v.UITransform,
            C = v.Mask,
            P = v.Size,
            b = v.UIRenderer,
            O = v.Color,
            j = v.v3
        }
        ],
        execute: function() {
            t._RF.push({}, "493a6vtAsNCi7/drbKHIAaL", "NodeExt", void 0),
            Object.defineProperty(e.prototype, "uiGraphics", {
                get: function() {
                    return this.getComponent(n)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiLabel", {
                get: function() {
                    return this.getComponent(o)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiRichText", {
                get: function() {
                    return this.getComponent(r)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiSprite", {
                get: function() {
                    return this.getComponent(i)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiButton", {
                get: function() {
                    return this.getComponent(p)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiCanvas", {
                get: function() {
                    return this.getComponent(c)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiEditBox", {
                get: function() {
                    return this.getComponent(s)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiLayout", {
                get: function() {
                    return this.getComponent(u)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiPageView", {
                get: function() {
                    return this.getComponent(f)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiProgressBar", {
                get: function() {
                    return this.getComponent(g)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiScrollView", {
                get: function() {
                    return this.getComponent(y)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiSlider", {
                get: function() {
                    return this.getComponent(h)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiToggle", {
                get: function() {
                    return this.getComponent(l)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiWidget", {
                get: function() {
                    return this.getComponent(a)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiOpacity", {
                get: function() {
                    return this.getComponent(d)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiTransform", {
                get: function() {
                    return this.getComponent(m)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "uiMask", {
                get: function() {
                    return this.getComponent(C)
                },
                set: function(t) {}
            }),
            Object.defineProperty(e.prototype, "x", {
                get: function() {
                    return this.position.x
                },
                set: function(t) {
                    this.setPosition(t, this.position.y)
                }
            }),
            Object.defineProperty(e.prototype, "y", {
                get: function() {
                    return this.position.y
                },
                set: function(t) {
                    this.setPosition(this.position.x, t)
                }
            }),
            Object.defineProperty(e.prototype, "z", {
                get: function() {
                    return this.position.z
                },
                set: function(t) {
                    var e = this;
                    e.setPosition(e.position.x, e.position.y, t)
                }
            }),
            Object.defineProperty(e.prototype, "w", {
                configurable: !0,
                get: function() {
                    var t, e;
                    return null != (t = null == (e = this.getComponent(m)) ? void 0 : e.width) ? t : 0
                },
                set: function(t) {
                    (this.getComponent(m) || this.addComponent(m)).width = t
                }
            }),
            Object.defineProperty(e.prototype, "h", {
                configurable: !0,
                get: function() {
                    var t, e;
                    return null != (t = null == (e = this.getComponent(m)) ? void 0 : e.height) ? t : 0
                },
                set: function(t) {
                    (this.getComponent(m) || this.addComponent(m)).height = t
                }
            }),
            Object.defineProperty(e.prototype, "size", {
                get: function() {
                    var t = this.getComponent(m);
                    return new P(t.width,t.height)
                },
                set: function(t) {
                    var e = this.getComponent(m) || this.addComponent(m);
                    e.width = t.width,
                    e.height = t.height
                }
            }),
            Object.defineProperty(e.prototype, "opacity", {
                get: function() {
                    var t = this.getComponent(d);
                    if (null != t)
                        return t.opacity;
                    var e = this.getComponent(b);
                    return e ? e.color.a : 255
                },
                set: function(t) {
                    var e = this
                      , n = e.getComponent(d);
                    if (null == n) {
                        var o = e.getComponent(b);
                        o ? (this.$__color__ ? this.$__color__.a = t : this.$__color__ = new O(o.color.r,o.color.g,o.color.b,t),
                        o.color = this.$__color__) : e.addComponent(d).opacity = t
                    } else
                        n.opacity = t
                }
            }),
            Object.defineProperty(e.prototype, "color", {
                get: function() {
                    var t;
                    return null == (t = this.getComponent(b)) ? void 0 : t.color
                },
                set: function(t) {
                    var e = this.getComponent(b);
                    e && (e.color = t)
                }
            }),
            Object.defineProperty(e.prototype, "scale_x", {
                get: function() {
                    return this.scale.x
                },
                set: function(t) {
                    var e = this;
                    e.scale = j(t, e.scale.y, e.scale.z)
                }
            }),
            Object.defineProperty(e.prototype, "scale_y", {
                get: function() {
                    return this.scale.y
                },
                set: function(t) {
                    var e = this;
                    e.scale = j(e.scale.x, t, e.scale.z)
                }
            }),
            Object.defineProperty(e.prototype, "scale_z", {
                get: function() {
                    return this.scale.z
                },
                set: function(t) {
                    var e = this;
                    e.scale = j(e.scale.x, e.scale.y, t)
                }
            }),
            Object.defineProperty(e.prototype, "anchor_x", {
                get: function() {
                    var t, e;
                    return null != (t = null == (e = this.getComponent(m)) ? void 0 : e.anchorX) ? t : .5
                },
                set: function(t) {
                    (this.getComponent(m) || this.addComponent(m)).anchorX = t
                }
            }),
            Object.defineProperty(e.prototype, "anchor_y", {
                get: function() {
                    var t, e;
                    return null != (t = null == (e = this.getComponent(m)) ? void 0 : e.anchorY) ? t : .5
                },
                set: function(t) {
                    (this.getComponent(m) || this.addComponent(m)).anchorY = t
                }
            }),
            Object.defineProperty(e.prototype, "angle_x", {
                get: function() {
                    return this.eulerAngles.x
                },
                set: function(t) {
                    var e = this;
                    e.setRotationFromEuler(t, e.eulerAngles.y, e.eulerAngles.z)
                }
            }),
            Object.defineProperty(e.prototype, "angle_y", {
                get: function() {
                    return this.eulerAngles.y
                },
                set: function(t) {
                    var e = this;
                    e.setRotationFromEuler(e.eulerAngles.x, t, e.eulerAngles.z)
                }
            }),
            Object.defineProperty(e.prototype, "angle_z", {
                get: function() {
                    return this.eulerAngles.y
                },
                set: function(t) {
                    var e = this;
                    e.setRotationFromEuler(e.eulerAngles.x, e.eulerAngles.y, t)
                }
            }),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Notify.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LanguageLabel.ts"], (function(n) {
    var t, e, i, o, a, r, l, s, c, u;
    return {
        setters: [function(n) {
            t = n.applyDecoratedDescriptor,
            e = n.inheritsLoose,
            i = n.initializerDefineProperty,
            o = n.assertThisInitialized
        }
        , function(n) {
            a = n.cclegacy,
            r = n._decorator,
            l = n.Label,
            s = n.Animation,
            c = n.Component
        }
        , function(n) {
            u = n.LanguageLabel
        }
        ],
        execute: function() {
            var p, f, h, b, y, m, d;
            a._RF.push({}, "01391Mp6X1Gn554rkzavN4K", "Notify", void 0);
            var g = r.ccclass
              , v = r.property;
            n("Notify", (p = g("Notify"),
            f = v(l),
            h = v(s),
            p((m = t((y = function(n) {
                function t() {
                    for (var t, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                        a[r] = arguments[r];
                    return t = n.call.apply(n, [this].concat(a)) || this,
                    i(t, "lab_content", m, o(t)),
                    i(t, "animation", d, o(t)),
                    t.onComplete = null,
                    t
                }
                e(t, n);
                var a = t.prototype;
                return a.onLoad = function() {
                    this.animation && this.animation.on(s.EventType.FINISHED, this.onFinished, this)
                }
                ,
                a.onFinished = function() {
                    this.node.parent.destroy(),
                    this.onComplete && this.onComplete(),
                    this.onComplete = null
                }
                ,
                a.toast = function(n, t) {
                    var e = this.lab_content.getComponent(u);
                    t ? (e.enabled = !0,
                    e.dataID = n) : (e.enabled = !1,
                    this.lab_content.string = n)
                }
                ,
                t
            }(c)).prototype, "lab_content", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d = t(y.prototype, "animation", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b = y)) || b));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ObjectUtil.ts", ["cc"], (function(t) {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "86827QLFSRM7Zojsx0WqWuQ", "ObjectUtil", void 0);
            t("ObjectUtil", function() {
                function t() {}
                return t.isObject = function(t) {
                    return "[object Object]" === Object.prototype.toString.call(t)
                }
                ,
                t.deepCopy = function(t) {
                    if (null == t || "object" != typeof t)
                        return t;
                    var e = null;
                    if (t instanceof Date)
                        return (e = new Date).setTime(t.getTime()),
                        e;
                    if (t instanceof Array) {
                        e = [];
                        for (var n = 0, r = t.length; n < r; n++)
                            e[n] = this.deepCopy(t[n]);
                        return e
                    }
                    if (t instanceof Object) {
                        for (var c in e = {},
                        t)
                            t.hasOwnProperty(c) && (e[c] = this.deepCopy(t[c]));
                        return e
                    }
                    console.warn("不支持的类型：" + e)
                }
                ,
                t.copy = function(t) {
                    return JSON.parse(JSON.stringify(t))
                }
                ,
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Oops.ts", ["cc", "./EffectSingleCase.ts", "./ECS.ts", "./Language.ts", "./ViewModel.ts", "./HttpRequest.ts", "./NetManager.ts", "./Config.ts", "./Logger.ts", "./RandomManager.ts"], (function(n) {
    var e, t, o, i, s, a, c, g, u, f;
    return {
        setters: [function(n) {
            e = n.cclegacy
        }
        , function(n) {
            t = n.EffectSingleCase
        }
        , function(n) {
            o = n.ecs
        }
        , function(n) {
            i = n.LanguageManager
        }
        , function(n) {
            s = n.VM
        }
        , function(n) {
            a = n.HttpRequest
        }
        , function(n) {
            c = n.NetManager
        }
        , function(n) {
            g = n.Config
        }
        , function(n) {
            u = n.Logger
        }
        , function(n) {
            f = n.RandomManager
        }
        ],
        execute: function() {
            e._RF.push({}, "cbae5wzfSZGzZMuyeAetSfg", "Oops", void 0);
            n("version", "2.0.0.20250514");
            var r = n("oops", (function() {}
            ));
            r.log = u.instance,
            r.config = new g,
            r.storage = void 0,
            r.res = void 0,
            r.message = void 0,
            r.random = f.instance,
            r.timer = void 0,
            r.audio = void 0,
            r.gui = void 0,
            r.game = void 0,
            r.language = new i,
            r.http = new a,
            r.tcp = new c,
            r.ecs = new o.RootSystem,
            r.mvvm = s,
            r.pool = t.instance,
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/OrbitCamera.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, i, o, r, a, n, s, u, l, h, c, p, g, R, d;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            o = t.initializerDefineProperty,
            r = t.assertThisInitialized,
            a = t.createClass
        }
        , function(t) {
            n = t.cclegacy,
            s = t._decorator,
            u = t.Vec3,
            l = t.Quat,
            h = t.Node,
            c = t.input,
            p = t.Input,
            g = t.lerp,
            R = t.Component,
            d = t.Vec2
        }
        ],
        execute: function() {
            var _, f, b, y, w, m, S, T, v, x, z, O, C, E, D, M, P, Y, k, A, U, j, F, H, W, Q, V, L, N, B, I, X;
            n._RF.push({}, "4e454G/OQ1NB7tjzAUf269U", "OrbitCamera", void 0);
            var G = s.ccclass
              , q = s.property
              , J = s.menu
              , K = new u
              , Z = new u
              , $ = new l;
            t("OrbitCamera", (_ = G("OrbitCamera"),
            f = J("OopsFramework/Camera/OrbitCamera （轨道摄影机）"),
            b = q({
                tooltip: "是否启动触摸控制"
            }),
            y = q({
                tooltip: "是否开启启用缩放半径（鼠标滚轮控制摄像机与目标距离）"
            }),
            w = q({
                tooltip: "摄像机与目标的半径缩放速度",
                visible: function() {
                    return !0 === this.enableScaleRadius
                }
            }),
            m = q({
                tooltip: "摄像机与目标的半径最小值",
                visible: function() {
                    return !0 === this.enableScaleRadius
                }
            }),
            S = q({
                tooltip: "摄像机与目标的半径最大值",
                visible: function() {
                    return !0 === this.enableScaleRadius
                }
            }),
            T = q({
                tooltip: "自动旋转是否开启"
            }),
            v = q({
                tooltip: "自动旋转速度",
                visible: function() {
                    return !0 === this.autoRotate
                }
            }),
            x = q({
                tooltip: "旋转速度"
            }),
            z = q({
                tooltip: "跟随速度"
            }),
            O = q({
                tooltip: "X轴旋转范围（人物上下看的角度控制）"
            }),
            C = q({
                tooltip: "摄像机与目标的距离（以玩家为中心环绕球半径）"
            }),
            E = q({
                type: h,
                tooltip: "跟随目标"
            }),
            D = q({
                type: u,
                tooltip: "目标旋转偏移量（初始旋转向量）"
            }),
            M = q({
                tooltip: "是否跟随目标 Y 轴旋转"
            }),
            _(P = f((k = e((Y = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), n = 0; n < i; n++)
                        a[n] = arguments[n];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    o(e, "enableTouch", k, r(e)),
                    o(e, "enableScaleRadius", A, r(e)),
                    o(e, "radiusScaleSpeed", U, r(e)),
                    o(e, "minRadius", j, r(e)),
                    o(e, "maxRadius", F, r(e)),
                    o(e, "autoRotate", H, r(e)),
                    o(e, "autoRotateSpeed", W, r(e)),
                    o(e, "rotateSpeed", Q, r(e)),
                    o(e, "followSpeed", V, r(e)),
                    o(e, "xRotationRange", L, r(e)),
                    o(e, "_targetRadius", N, r(e)),
                    o(e, "_target", B, r(e)),
                    o(e, "_startRotation", I, r(e)),
                    o(e, "followTargetRotationY", X, r(e)),
                    e._center = new u,
                    e._targetCenter = new u,
                    e._touched = !1,
                    e._targetRotation = new u,
                    e._rotation = new l,
                    e._radius = 10,
                    e
                }
                i(e, t);
                var n = e.prototype;
                return n.start = function() {
                    this.enableTouch && (c.on(p.EventType.TOUCH_START, this.onTouchStart, this),
                    c.on(p.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    c.on(p.EventType.TOUCH_END, this.onTouchEnd, this)),
                    this.enableScaleRadius && c.on(p.EventType.MOUSE_WHEEL, this.onMouseWheel, this),
                    this.target && this.resetTargetRotation(),
                    l.fromEuler(this._rotation, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z),
                    this.target && (this._targetCenter.set(this.target.worldPosition),
                    this._center.set(this._targetCenter)),
                    this._radius = this.radius,
                    this.limitRotation()
                }
                ,
                n.resetTargetRotation = function() {
                    var t = this._targetRotation.set(this._startRotation);
                    this.followTargetRotationY && (t = Z.set(t),
                    l.toEuler(K, this.target.worldRotation),
                    t.add(K))
                }
                ,
                n.limitRotation = function() {
                    var t = this._targetRotation;
                    t.x < this.xRotationRange.x ? t.x = this.xRotationRange.x : t.x > this.xRotationRange.y && (t.x = this.xRotationRange.y),
                    t.z = 0
                }
                ,
                n.onTouchStart = function() {
                    this._touched = !0
                }
                ,
                n.onTouchMove = function(t) {
                    if (this._touched) {
                        var e = t.touch.getDelta();
                        l.fromEuler($, this._targetRotation.x, this._targetRotation.y, this._targetRotation.z),
                        l.rotateX($, $, .005 * -e.y),
                        l.rotateY($, $, .005 * -e.x),
                        l.toEuler(this._targetRotation, $),
                        this.limitRotation()
                    }
                }
                ,
                n.onTouchEnd = function() {
                    this._touched = !1
                }
                ,
                n.onMouseWheel = function(t) {
                    var e = t.getScrollY();
                    this._targetRadius += this.radiusScaleSpeed * -Math.sign(e),
                    this._targetRadius = Math.min(this.maxRadius, Math.max(this.minRadius, this._targetRadius))
                }
                ,
                n.update = function(t) {
                    var e = this._targetRotation;
                    this.autoRotate && !this._touched && (e.y += this.autoRotateSpeed * t),
                    this.target && this.target.isValid && (this._targetCenter.set(this.target.worldPosition),
                    this.followTargetRotationY && (e = Z.set(e),
                    l.toEuler(K, this.target.worldRotation),
                    e.y += K.y)),
                    l.fromEuler($, e.x, e.y, e.z),
                    l.slerp(this._rotation, this._rotation, $, 7 * t * this.rotateSpeed),
                    u.lerp(this._center, this._center, this._targetCenter, 5 * t * this.followSpeed),
                    this._radius = g(this._radius, this._targetRadius, 5 * t),
                    u.transformQuat(K, u.FORWARD, this._rotation),
                    u.multiplyScalar(K, K, this._radius),
                    K.add(this._center),
                    this.node.position = K,
                    this.node.lookAt(this._center)
                }
                ,
                n.follow = function() {
                    var t = this._targetRotation;
                    this.target && (this._targetCenter.set(this.target.worldPosition),
                    this.followTargetRotationY && (t = Z.set(t),
                    l.toEuler(K, this.target.worldRotation),
                    t.y += K.y)),
                    l.fromEuler($, t.x, t.y, t.z),
                    this._rotation = $,
                    this._center = this._targetCenter,
                    this._radius = this._targetRadius,
                    u.transformQuat(K, u.FORWARD, this._rotation),
                    u.multiplyScalar(K, K, this._radius),
                    K.add(this._center),
                    this.node.position = K,
                    this.node.lookAt(this._center)
                }
                ,
                a(e, [{
                    key: "radius",
                    get: function() {
                        return this._targetRadius
                    },
                    set: function(t) {
                        this._targetRadius = t
                    }
                }, {
                    key: "target",
                    get: function() {
                        return this._target
                    },
                    set: function(t) {
                        this._target = t,
                        this._targetRotation.set(this._startRotation),
                        this._targetCenter.set(t.worldPosition)
                    }
                }, {
                    key: "targetRotation",
                    get: function() {
                        return this._startRotation.set(this._targetRotation),
                        this._startRotation
                    },
                    set: function(t) {
                        this._targetRotation.set(t),
                        this._startRotation.set(t)
                    }
                }]),
                e
            }(R)).prototype, "enableTouch", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            A = e(Y.prototype, "enableScaleRadius", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            U = e(Y.prototype, "radiusScaleSpeed", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            j = e(Y.prototype, "minRadius", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5
                }
            }),
            F = e(Y.prototype, "maxRadius", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            H = e(Y.prototype, "autoRotate", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            W = e(Y.prototype, "autoRotateSpeed", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 90
                }
            }),
            Q = e(Y.prototype, "rotateSpeed", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            V = e(Y.prototype, "followSpeed", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            L = e(Y.prototype, "xRotationRange", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new d(5,70)
                }
            }),
            N = e(Y.prototype, "_targetRadius", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            e(Y.prototype, "radius", [C], Object.getOwnPropertyDescriptor(Y.prototype, "radius"), Y.prototype),
            B = e(Y.prototype, "_target", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            e(Y.prototype, "target", [E], Object.getOwnPropertyDescriptor(Y.prototype, "target"), Y.prototype),
            I = e(Y.prototype, "_startRotation", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u
                }
            }),
            e(Y.prototype, "targetRotation", [D], Object.getOwnPropertyDescriptor(Y.prototype, "targetRotation"), Y.prototype),
            X = e(Y.prototype, "followTargetRotationY", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            P = Y)) || P) || P));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PhysicsUtil.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, n;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "c1584nuvI9HtJ5IHcmFEBzR", "PhysicsUtil", void 0);
            var i = e("GroupItem", function() {
                function e(e, t) {
                    this._value = void 0,
                    this._name = void 0,
                    this._value = e,
                    this._name = t
                }
                return t(e, [{
                    key: "value",
                    get: function() {
                        return this._value
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "mask",
                    get: function() {
                        return 1 << this._value
                    }
                }]),
                e
            }())
              , u = e("PhysicsUtil", function() {
                function e() {}
                return e.setNodeLayer = function(t, n) {
                    n.layer = t.mask,
                    n.children.forEach((function(n) {
                        n.layer = t.mask,
                        e.setNodeLayer(t, n)
                    }
                    ))
                }
                ,
                e
            }());
            u.DEFAULT = new i(0,"DEFAULT"),
            u.GAME_OBJECT_SELECT = new i(1,"GAME_OBJECT_SELECT"),
            u.GAME_OWNER = new i(2,"GAME_OWNER"),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlatformUtil.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, n, r, o, i;
    return {
        setters: [function(t) {
            e = t.asyncToGenerator,
            n = t.regeneratorRuntime
        }
        , function(t) {
            r = t.cclegacy,
            o = t.sys,
            i = t.native
        }
        ],
        execute: function() {
            r._RF.push({}, "c08229jnmdPP5vR721N6GG9", "PlatformUtil", void 0);
            t("PlatformUtil", function() {
                function t() {}
                return t.getNetworkType = function() {
                    return o.getNetworkType()
                }
                ,
                t.getBatteryLevel = function() {
                    return o.getBatteryLevel()
                }
                ,
                t.openURL = function(t) {
                    o.openURL(t)
                }
                ,
                t.copyText = function() {
                    var t = e(n().mark((function t(e) {
                        return n().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!o.isNative) {
                                        t.next = 4;
                                        break
                                    }
                                    i.copyTextToClipboard(e),
                                    t.next = 6;
                                    break;
                                case 4:
                                    return t.next = 6,
                                    navigator.clipboard.writeText(e);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                t
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DataBase.ts"], (function(t) {
    var e, a, n;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            a = t.cclegacy
        }
        , function(t) {
            n = t.default
        }
        ],
        execute: function() {
            a._RF.push({}, "30185oydARK3K4QoNNfZKRB", "PlayerData", void 0),
            t("default", function(t) {
                function a() {
                    for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
                        n[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(n)) || this).id = 1,
                    e.coin = 0,
                    e.skills = [],
                    e.lv = 1,
                    e.jobId = 1,
                    e.jobs = [1],
                    e.guideFinish = !1,
                    e
                }
                return e(a, t),
                a
            }(n)).className = "PlayerData",
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Pool.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, n, i;
    return {
        setters: [function(t) {
            e = t.construct,
            n = t.inheritsLoose
        }
        , function(t) {
            i = t.cclegacy
        }
        ],
        execute: function() {
            t("Poolableify", (function(t, e) {
                return function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return n(i, t),
                    i.create = function() {
                        var t;
                        return this.POOL || (this.POOL = new r(this),
                        this.POOL.getor = null == e ? void 0 : e.bind(this.POOL)),
                        (t = this.POOL).get.apply(t, arguments)
                    }
                    ,
                    i.free = function(t) {
                        return this.POOL.free(t)
                    }
                    ,
                    i
                }(t)
            }
            )),
            i._RF.push({}, "e5b77yClwNG3ob+FLkwIh7j", "Pool", void 0);
            var r = t("default", function() {
                function t(t) {
                    this.className = void 0,
                    this.freeObjects = [],
                    this.getor = void 0,
                    this.className = t
                }
                var n = t.prototype;
                return n.free = function(t) {
                    if (null == t)
                        throw "object cannot be null.";
                    this.freeObjects.push(t),
                    t.free && t.free()
                }
                ,
                n.obtain = function() {}
                ,
                n.get = function() {
                    var t = this;
                    this.getor || (this.getor = function() {
                        if (t.freeObjects.length > 0)
                            return t.freeObjects.pop()
                    }
                    );
                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    var o = this.getor.apply(this, i);
                    return o || (o = this.className.new ? this.className.new() : e(this.className, i)),
                    o.obtain && o.obtain(),
                    o
                }
                ,
                t
            }());
            t("Poolableified", function() {
                function t() {}
                return t.create = function() {
                    return this.POOL || (this.POOL = new r(this)),
                    this.POOL.get()
                }
                ,
                t.free = function(t) {
                    return this.POOL.free(t)
                }
                ,
                t
            }());
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Priority.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BranchNode.ts"], (function(t) {
    var i, s, c;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            s = t.cclegacy
        }
        , function(t) {
            c = t.BranchNode
        }
        ],
        execute: function() {
            s._RF.push({}, "f7555DSpj9LbYpRDi8/UKdN", "Priority", void 0);
            t("Priority", function(t) {
                function s() {
                    return t.apply(this, arguments) || this
                }
                i(s, t);
                var c = s.prototype;
                return c.success = function() {
                    t.prototype.success.call(this),
                    this._control.success()
                }
                ,
                c.fail = function() {
                    t.prototype.fail.call(this),
                    this._actualTask += 1,
                    this._actualTask < this.children.length ? this._run(this._blackboard) : this._control.fail()
                }
                ,
                s
            }(c));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RandomManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
    var t, e;
    return {
        setters: [function(n) {
            t = n.createClass
        }
        , function(n) {
            e = n.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "3e09eJBwfZBsLPqFszZLvMS", "RandomManager", void 0),
            n("RandomManager", function() {
                function n() {
                    this.random = null
                }
                var e = n.prototype;
                return e.setRandom = function(n) {
                    this.random = n
                }
                ,
                e.getRandom = function() {
                    return this.random()
                }
                ,
                e.getRandomFloat = function(n, t) {
                    return void 0 === n && (n = 0),
                    void 0 === t && (t = 1),
                    this.getRandom() * (t - n) + n
                }
                ,
                e.getRandomInt = function(n, t, e) {
                    switch (void 0 === e && (e = 2),
                    n = Math.ceil(n),
                    t = Math.floor(t),
                    e) {
                    case 1:
                        return Math.floor(this.getRandom() * (t - n)) + n;
                    case 2:
                        return Math.floor(this.getRandom() * (t - n + 1)) + n;
                    case 3:
                        return Math.floor(this.getRandom() * (t - n - 1)) + n + 1
                    }
                    return 0
                }
                ,
                e.getRandomByMinMaxList = function(n, t, e) {
                    for (var o = [], a = 0; a < e; a++)
                        o.push(this.getRandomInt(n, t));
                    return o
                }
                ,
                e.getRandomByObjectList = function(n, t) {
                    for (var e = n.slice(), o = [], a = 0; a < t; a++) {
                        var r = this.getRandomInt(0, e.length, 1);
                        o.push(e.splice(r, 1)[0])
                    }
                    return o
                }
                ,
                e.getRandomBySumList = function(n, t) {
                    for (var e = t, o = 0, a = [], r = 0; r < n; r++)
                        o = this.getRandomInt(0, e, 3),
                        r == n - 1 ? o = e : e -= o,
                        a.push(o);
                    return a
                }
                ,
                t(n, null, [{
                    key: "instance",
                    get: function() {
                        return null == this._instance && (this._instance = new n,
                        this._instance.setRandom(Math.random)),
                        this._instance
                    }
                }]),
                n
            }())._instance = void 0,
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RegexUtil.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "dec9bVPigFCmKy5NVk+0y7h", "RegexUtil", void 0);
            e("RegexUtil", function() {
                function e() {}
                return e.isDoubleWord = function(e) {
                    return /[^\x00-\xff]/.test(e)
                }
                ,
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ResLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var n, t, r, s, o, a, l, u, i, d, c, f, p, g, h, m, y, v, A, B, R;
    return {
        setters: [function(e) {
            n = e.createClass,
            t = e.asyncToGenerator,
            r = e.regeneratorRuntime
        }
        , function(e) {
            s = e.cclegacy,
            o = e.assetManager,
            a = e.error,
            l = e.warn,
            u = e.Asset,
            i = e.JsonAsset,
            d = e.Prefab,
            c = e.SpriteFrame,
            f = e.Texture2D,
            p = e.ImageAsset,
            g = e.AudioClip,
            h = e.AnimationClip,
            m = e.Font,
            y = e.Material,
            v = e.Mesh,
            A = e.sp,
            B = e.js,
            R = e.resources
        }
        ],
        execute: function() {
            s._RF.push({}, "1a2e4jFffpHrYjrpxbnC760", "ResLoader", void 0);
            var b = e("ResLoader", function() {
                function e() {
                    this.defaultBundleName = "resources"
                }
                var s = e.prototype;
                return s.loadRemote = function(e) {
                    var n = null
                      , t = null;
                    2 == (arguments.length <= 1 ? 0 : arguments.length - 1) ? (n = arguments.length <= 1 ? void 0 : arguments[1],
                    t = arguments.length <= 2 ? void 0 : arguments[2]) : t = arguments.length <= 1 ? void 0 : arguments[1],
                    o.loadRemote(e, n, t)
                }
                ,
                s.getBundle = function(e) {
                    return o.bundles.get(e)
                }
                ,
                s.loadBundle = function(e) {
                    return new Promise((function(n, t) {
                        o.loadBundle(e, (function(e, t) {
                            if (e)
                                return a(e);
                            n(t)
                        }
                        ))
                    }
                    ))
                }
                ,
                s.removeBundle = function(e) {
                    var n = o.bundles.get(e);
                    n && (n.releaseAll(),
                    o.removeBundle(n))
                }
                ,
                s.preload = function(e, n, t, r, s) {
                    var o = null;
                    "string" == typeof n || n instanceof Array ? (o = this.parseLoadResArgs(n, t, r, s)).bundle = e : (o = this.parseLoadResArgs(e, n, t, r)).bundle = this.defaultBundleName,
                    o.preload = !0,
                    this.loadByArgs(o)
                }
                ,
                s.preloadAsync = function(e, n, t) {
                    var r = this;
                    return new Promise((function(s, o) {
                        r.preload(e, n, t, (function(e, n) {
                            e && l(e.message),
                            s(n)
                        }
                        ))
                    }
                    ))
                }
                ,
                s.preloadDir = function(e, n, t, r, s) {
                    var o = null;
                    "string" == typeof n ? (o = this.parseLoadResArgs(n, t, r, s)).bundle = e : (o = this.parseLoadResArgs(e, n, t, r)).bundle = this.defaultBundleName,
                    o.dir = o.paths,
                    o.preload = !0,
                    this.loadByArgs(o)
                }
                ,
                s.load = function(e, n, t, r, s) {
                    var o = null;
                    "string" == typeof n || n instanceof Array ? (o = this.parseLoadResArgs(n, t, r, s)).bundle = e : (o = this.parseLoadResArgs(e, n, t, r)).bundle = this.defaultBundleName,
                    this.loadByArgs(o)
                }
                ,
                s.loadAsync = function(e, n, t) {
                    var r = this;
                    return new Promise((function(s, o) {
                        r.load(e, n, t, (function(e, n) {
                            e && l(e.message),
                            s(n)
                        }
                        ))
                    }
                    ))
                }
                ,
                s.loadDir = function(e, n, t, r, s) {
                    var o = null;
                    "string" == typeof n ? (o = this.parseLoadResArgs(n, t, r, s)).bundle = e : (o = this.parseLoadResArgs(e, n, t, r)).bundle = this.defaultBundleName,
                    o.dir = o.paths,
                    this.loadByArgs(o)
                }
                ,
                s.release = function(e, n) {
                    null == n && (n = this.defaultBundleName);
                    var t = o.getBundle(n);
                    if (t) {
                        var r = t.get(e);
                        r && this.releasePrefabtDepsRecursively(n, r)
                    }
                }
                ,
                s.releaseDir = function(e, n) {
                    var t = this;
                    void 0 === n && (n = this.defaultBundleName);
                    var r = o.getBundle(n);
                    if (r) {
                        var s = r.getDirWithPath(e);
                        s && s.map((function(e) {
                            t.releasePrefabtDepsRecursively(n, e.uuid)
                        }
                        )),
                        "" == e && "resources" != n && o.removeBundle(r)
                    }
                }
                ,
                s.getAssetPath = function(e, n) {
                    return this.getBundle(e).getAssetInfo(n).path
                }
                ,
                s.releasePrefabtDepsRecursively = function(e, n) {
                    if (n instanceof u)
                        n.decRef();
                    else {
                        var t = o.assets.get(n);
                        t && t.decRef()
                    }
                }
                ,
                s.debugLogReleasedAsset = function(e, n) {
                    if (0 == n.refCount) {
                        var t = this.getAssetPath(e, n.uuid)
                          , r = "";
                        r = n instanceof i ? "【释放资源】Json【路径】" + t : n instanceof d ? "【释放资源】Prefab【路径】" + t : n instanceof c ? "【释放资源】SpriteFrame【路径】" + t : n instanceof f ? "【释放资源】Texture2D【路径】" + t : n instanceof p ? "【释放资源】ImageAsset【路径】" + t : n instanceof g ? "【释放资源】AudioClip【路径】" + t : n instanceof h ? "【释放资源】AnimationClip【路径】" + t : n instanceof m ? "【释放资源】Font【路径】" + t : n instanceof y ? "【释放资源】Material【路径】" + t : n instanceof v ? "【释放资源】Mesh【路径】" + t : n instanceof A.SkeletonData ? "【释放资源】Spine【路径】" + t : "【释放资源】未知【路径】" + t,
                        console.log(r)
                    }
                }
                ,
                s.get = function(e, n, t) {
                    return void 0 === t && (t = this.defaultBundleName),
                    o.getBundle(t).get(e, n)
                }
                ,
                s.parseLoadResArgs = function(e, n, t, r) {
                    var s = e
                      , o = n
                      , a = t
                      , l = r;
                    if (void 0 === r) {
                        var i = B.isChildClassOf(n, u);
                        t ? (l = t,
                        i && (a = null)) : void 0 !== t || i || (l = n,
                        a = null,
                        o = null),
                        void 0 === t || i || (a = n,
                        o = null)
                    }
                    return {
                        paths: s,
                        type: o,
                        onProgress: a,
                        onComplete: l
                    }
                }
                ,
                s.loadByBundleAndArgs = function(e, n) {
                    n.dir ? n.preload ? e.preloadDir(n.paths, n.type, n.onProgress, n.onComplete) : e.loadDir(n.paths, n.type, n.onProgress, n.onComplete) : n.preload ? e.preload(n.paths, n.type, n.onProgress, n.onComplete) : e.load(n.paths, n.type, n.onProgress, n.onComplete)
                }
                ,
                s.loadByArgs = function() {
                    var e = t(r().mark((function e(n) {
                        var t;
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!n.bundle) {
                                        e.next = 12;
                                        break
                                    }
                                    if (!(t = o.bundles.get(n.bundle))) {
                                        e.next = 6;
                                        break
                                    }
                                    this.loadByBundleAndArgs(t, n),
                                    e.next = 10;
                                    break;
                                case 6:
                                    return e.next = 8,
                                    this.loadBundle(n.bundle);
                                case 8:
                                    (t = e.sent) && this.loadByBundleAndArgs(t, n);
                                case 10:
                                    e.next = 13;
                                    break;
                                case 12:
                                    this.loadByBundleAndArgs(R, n);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                s.dump = function() {
                    o.assets.forEach((function(e, n) {
                        console.log("引用数量:" + e.refCount, o.assets.get(n))
                    }
                    )),
                    console.log("当前资源总数:" + o.assets.count)
                }
                ,
                n(e, [{
                    key: "maxConcurrency",
                    get: function() {
                        return o.downloader.maxConcurrency
                    },
                    set: function(e) {
                        o.downloader.maxConcurrency = e
                    }
                }, {
                    key: "maxRequestsPerFrame",
                    get: function() {
                        return o.downloader.maxRequestsPerFrame
                    },
                    set: function(e) {
                        o.downloader.maxRequestsPerFrame = e
                    }
                }, {
                    key: "maxRetryCount",
                    get: function() {
                        return o.downloader.maxRetryCount
                    },
                    set: function(e) {
                        o.downloader.maxRetryCount = e
                    }
                }, {
                    key: "retryInterval",
                    get: function() {
                        return o.downloader.retryInterval
                    },
                    set: function(e) {
                        o.downloader.retryInterval = e
                    }
                }]),
                e
            }());
            e("resLoader", new b);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Role.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./RoleEnum.ts", "./RoleModelComp.ts", "./RoleModelBaseComp.ts", "./RoleModelLevelComp.ts", "./RoleModelJobComp.ts", "./RoleChangeJob.ts", "./RoleModelSkillComp.ts", "./RoleUpgrade.ts", "./RoleSkillUpgrade.ts", "./RoleViewComp.ts", "./PlayerData.ts", "./Oops.ts", "./Enum.ts"], (function(o) {
    var e, l, t, i, n, s, d, a, c, u, r, R, p, f, v, h;
    return {
        setters: [function(o) {
            e = o.inheritsLoose
        }
        , function(o) {
            l = o.cclegacy
        }
        , function(o) {
            t = o.ecs
        }
        , function(o) {
            i = o.RoleAttributeType
        }
        , function(o) {
            n = o.RoleModelComp
        }
        , function(o) {
            s = o.RoleModelBaseComp
        }
        , function(o) {
            d = o.RoleModelLevelComp
        }
        , function(o) {
            a = o.RoleModelJobComp
        }
        , function(o) {
            c = o.RoleChangeJobComp
        }
        , function(o) {
            u = o.RoleModelSkillComp
        }
        , function(o) {
            r = o.RoleUpgradeComp
        }
        , function(o) {
            R = o.RoleSkillUpgradeComp
        }
        , function(o) {
            p = o.RoleViewComp
        }
        , function(o) {
            f = o.default
        }
        , function(o) {
            v = o.oops
        }
        , function(o) {
            h = o.APP_CONFIG
        }
        ],
        execute: function() {
            var C;
            l._RF.push({}, "89c25q/dCBJhYcso7BRCjV9", "Role", void 0);
            o("Role", t.register("Role")(C = function(o) {
                function l() {
                    for (var e, l = arguments.length, t = new Array(l), i = 0; i < l; i++)
                        t[i] = arguments[i];
                    return (e = o.call.apply(o, [this].concat(t)) || this).RoleModel = void 0,
                    e.RoleModelBase = void 0,
                    e.RoleModelJob = void 0,
                    e.RoleModelLevel = void 0,
                    e.RoleModelSkill = void 0,
                    e.RoleChangeJob = void 0,
                    e.RoleUpgrade = void 0,
                    e.RoleSkillUpgrade = void 0,
                    e.RoleView = void 0,
                    e
                }
                e(l, o);
                var t = l.prototype;
                return t.init = function() {
                    this.addComponents(n, s, a, d, u)
                }
                ,
                t.changeJob = function(o) {
                    this.add(c).jobId = o
                }
                ,
                t.upgrade = function(o) {
                    void 0 === o && (o = 0),
                    this.add(r).lv = o
                }
                ,
                t.skillUpgrade = function(o) {
                    void 0 === o && (o = 0),
                    this.add(R).skillId = o
                }
                ,
                t.destroy = function() {
                    this.remove(p),
                    o.prototype.destroy.call(this)
                }
                ,
                t.Hurt = function(o) {
                    var e = this.RoleModel.attributes.get(i.coins).value
                      , l = this.RoleModelBase.coin + o;
                    this.RoleModelBase.coin < e && l >= e && v.audio.playEffect(h.FULL),
                    l >= e && (l = e),
                    this.RoleModelBase.coin = l;
                    var t = f.get();
                    t.coin = this.RoleModelBase.coin,
                    t.saveData()
                }
                ,
                t.reduceCoins = function(o) {
                    var e = this.RoleModelBase.coin - o;
                    if (!(e < 0)) {
                        this.RoleModelBase.coin = e;
                        var l = f.get();
                        l.coin = this.RoleModelBase.coin,
                        l.saveData()
                    }
                }
                ,
                l
            }(t.Entity)) || C);
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleChangeJob.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts", "./ECS.ts", "./RoleModelJobComp.ts", "./RoleEvent.ts"], (function(o) {
    var e, t, n, r, i, l;
    return {
        setters: [function(o) {
            e = o.inheritsLoose
        }
        , function(o) {
            t = o.cclegacy
        }
        , function(o) {
            n = o.oops
        }
        , function(o) {
            r = o.ecs
        }
        , function(o) {
            i = o.RoleModelJobComp
        }
        , function(o) {
            l = o.RoleEvent
        }
        ],
        execute: function() {
            var s, c;
            t._RF.push({}, "dda57abSV9Ip7X7M34ApP3p", "RoleChangeJob", void 0);
            var u = o("RoleChangeJobComp", r.register("RoleChangeJob")(s = function(o) {
                function t() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return (e = o.call.apply(o, [this].concat(n)) || this).jobId = -1,
                    e
                }
                return e(t, o),
                t.prototype.reset = function() {
                    this.jobId = -1
                }
                ,
                t
            }(r.Comp)) || s);
            o("RoleChangeJobSystem", r.register("Role")(c = function(o) {
                function t() {
                    return o.apply(this, arguments) || this
                }
                e(t, o);
                var s = t.prototype;
                return s.filter = function() {
                    return r.allOf(u, i)
                }
                ,
                s.entityEnter = function(o) {
                    o.RoleModelJob.id = o.RoleChangeJob.jobId,
                    n.message.dispatchEvent(l.ChangeJob),
                    o.remove(u)
                }
                ,
                t
            }(r.ComblockSystem)) || c);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleEnum.ts", ["cc"], (function(e) {
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "44cb55op2dHxJQkHl7HxJD0", "RoleEnum", void 0);
            e("RoleAttributeType", function(e) {
                return e.coins = "coins",
                e.coin = "coin",
                e.DOT = "DOT",
                e.DPS = "DPS",
                e
            }({})),
            e("RoleAnimatorType", function(e) {
                return e.Idle = "Idle",
                e.Hurt = "Hurt",
                e
            }({}));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleEvent.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "6d604GCPdFAUq44wWwc0EIe", "RoleEvent", void 0);
            e("RoleEvent", function(e) {
                return e.ChangeJob = "ChangeJob",
                e.RoleHurt = "RoleHurt",
                e
            }({}));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleModelBaseComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./RoleEnum.ts", "./RoleModelComp.ts", "./ViewModel.ts"], (function(t) {
    var e, n, o, i, s, c, r;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            n = t.createClass
        }
        , function(t) {
            o = t.cclegacy
        }
        , function(t) {
            i = t.ecs
        }
        , function(t) {
            s = t.RoleAttributeType
        }
        , function(t) {
            c = t.RoleModelComp
        }
        , function(t) {
            r = t.VM
        }
        ],
        execute: function() {
            var u;
            o._RF.push({}, "8db1bFe/UZCwIKhJv49PUQl", "RoleModelBaseComp", void 0);
            t("RoleModelBaseComp", i.register("RoleModelBase")(u = function(t) {
                function o() {
                    for (var e, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                        o[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(o)) || this).vm = {},
                    e._coins = 0,
                    e._coin = 0,
                    e._DOT = 0,
                    e._DPS = 0,
                    e
                }
                e(o, t);
                var i = o.prototype;
                return i.vmAdd = function() {
                    r.add(this.vm, "RoleBase")
                }
                ,
                i.vmRemove = function() {
                    r.remove("RoleBase")
                }
                ,
                i.reset = function() {
                    for (var t in this.vmRemove(),
                    this.vm)
                        this.vm[t] = 0
                }
                ,
                n(o, [{
                    key: "coins",
                    get: function() {
                        return this._coins
                    },
                    set: function(t) {
                        this._coins = t,
                        this.ent.get(c).attributes.get(s.coins).base = t || 0,
                        this.vm[s.coins] = t
                    }
                }, {
                    key: "coin",
                    get: function() {
                        return this._coin
                    },
                    set: function(t) {
                        this._coin = t,
                        this.ent.get(c).attributes.get(s.coin).base = t || 0,
                        this.vm[s.coin] = t
                    }
                }, {
                    key: "DOT",
                    get: function() {
                        return this._DOT
                    },
                    set: function(t) {
                        this._DOT = t,
                        this.ent.get(c).attributes.get(s.DOT).base = t || 0,
                        this.vm[s.DOT] = t
                    }
                }, {
                    key: "DPS",
                    get: function() {
                        return this._DPS
                    },
                    set: function(t) {
                        this._DPS = t,
                        this.ent.get(c).attributes.get(s.DPS).base = t || 0,
                        this.vm[s.DPS] = t
                    }
                }]),
                o
            }(i.Comp)) || u);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleModelComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./ViewModel.ts", "./RoleNumericMap.ts"], (function(e) {
    var o, t, n, i, r;
    return {
        setters: [function(e) {
            o = e.inheritsLoose
        }
        , function(e) {
            t = e.cclegacy
        }
        , function(e) {
            n = e.ecs
        }
        , function(e) {
            i = e.VM
        }
        , function(e) {
            r = e.RoleNumericMap
        }
        ],
        execute: function() {
            var l;
            t._RF.push({}, "64072r0w2tL54bQyY2QzPK4", "RoleModelComp", void 0);
            e("RoleModelComp", n.register("RoleModel")(l = function(e) {
                function t() {
                    var o;
                    return (o = e.call(this) || this).id = -1,
                    o.anim = "model1",
                    o.attributes = null,
                    o.vm = {},
                    o.attributes = new r(o.vm),
                    o
                }
                o(t, e);
                var n = t.prototype;
                return n.vmAdd = function() {
                    i.add(this.vm, "Role")
                }
                ,
                n.vmRemove = function() {
                    i.remove("Role")
                }
                ,
                n.reset = function() {
                    for (var e in this.vmRemove(),
                    this.id = -1,
                    this.vm)
                        this.vm[e] = 0
                }
                ,
                n.toString = function() {
                    console.log('【人物】的属性"--------------------------------------------'),
                    this.attributes.forEach((function(e, o) {
                        console.log(o, e.value)
                    }
                    ))
                }
                ,
                t
            }(n.Comp)) || l);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleModelJobComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./TableRoleJob.ts"], (function(e) {
    var t, n, o, i, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.createClass
        }
        , function(e) {
            o = e.cclegacy
        }
        , function(e) {
            i = e.ecs
        }
        , function(e) {
            r = e.TableRoleJob
        }
        ],
        execute: function() {
            var l;
            o._RF.push({}, "c7777y5YQdJCrwcaqr+Yz9v", "RoleModelJobComp", void 0);
            e("RoleModelJobComp", i.register("RoleModelJob")(l = function(e) {
                function o() {
                    for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                        o[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(o)) || this).table = new r,
                    t._id = -1,
                    t
                }
                return t(o, e),
                o.prototype.reset = function() {
                    this._id = -1
                }
                ,
                n(o, [{
                    key: "id",
                    get: function() {
                        return this._id
                    },
                    set: function(e) {
                        this.table.init(e),
                        this._id = e
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this.table.name
                    }
                }, {
                    key: "image",
                    get: function() {
                        return this.table.image
                    }
                }, {
                    key: "video",
                    get: function() {
                        return this.table.video
                    }
                }, {
                    key: "unlock",
                    get: function() {
                        return this.table.unlock
                    }
                }]),
                o
            }(i.Comp)) || l);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleModelLevelComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./TableRoleLevelUp.ts", "./ViewModel.ts"], (function(e) {
    var t, o, n, i, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            o = e.cclegacy
        }
        , function(e) {
            n = e.ecs
        }
        , function(e) {
            i = e.TableRoleLevelUp
        }
        , function(e) {
            l = e.VM
        }
        ],
        execute: function() {
            var r;
            o._RF.push({}, "bb38fYusnBJMqecW88a7wha", "RoleModelLevelComp", void 0);
            e("RoleModelLevelComp", n.register("RoleModelLevel")(r = function(e) {
                function o() {
                    for (var t, o = arguments.length, n = new Array(o), l = 0; l < o; l++)
                        n[l] = arguments[l];
                    return (t = e.call.apply(e, [this].concat(n)) || this).rtluNext = new i,
                    t.rtluCurrent = new i,
                    t.vm = new s,
                    t
                }
                t(o, e);
                var n = o.prototype;
                return n.vmAdd = function() {
                    l.add(this.vm, "RoleLevel")
                }
                ,
                n.vmRemove = function() {
                    this.vm.reset(),
                    l.remove("RoleLevel")
                }
                ,
                n.reset = function() {
                    this.vmRemove()
                }
                ,
                o
            }(n.Comp)) || r);
            var s = function() {
                function e() {
                    this.lv = 0,
                    this.coin = 0,
                    this.coins = 0
                }
                return e.prototype.reset = function() {
                    this.lv = 0,
                    this.coin = 0,
                    this.coins = 0
                }
                ,
                e
            }();
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleModelSkillComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./TableRoleSkill.ts", "./ViewModel.ts", "./RoleModelComp.ts", "./RoleEnum.ts", "./PlayerData.ts"], (function(t) {
    var e, i, s, n, r, o, l, a, u;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            i = t.createClass
        }
        , function(t) {
            s = t.cclegacy
        }
        , function(t) {
            n = t.ecs
        }
        , function(t) {
            r = t.TableRoleSkill
        }
        , function(t) {
            o = t.VM
        }
        , function(t) {
            l = t.RoleModelComp
        }
        , function(t) {
            a = t.RoleAttributeType
        }
        , function(t) {
            u = t.default
        }
        ],
        execute: function() {
            var h;
            s._RF.push({}, "6530cZ71cpOF5/SYplI3cHH", "RoleModelSkillComp", void 0);
            t("RoleModelSkillComp", n.register("RoleModelSkill")(h = function(t) {
                function s() {
                    for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                        s[n] = arguments[n];
                    return (e = t.call.apply(t, [this].concat(s)) || this).tableMap = new Map,
                    e._id = -1,
                    e.vm = new c,
                    e
                }
                e(s, t);
                var n = s.prototype;
                return n.vmAdd = function() {
                    o.add(this.vm, "RoleSkill")
                }
                ,
                n.vmRemove = function() {
                    this.vm.reset(),
                    o.remove("RoleSkill")
                }
                ,
                n.reset = function() {
                    this.vmRemove()
                }
                ,
                i(s, [{
                    key: "id",
                    get: function() {
                        return this._id
                    },
                    set: function(t) {
                        if ("number" == typeof t) {
                            this._id = t;
                            var e = this.vm.getNumber("lv" + t);
                            e < this.tableMap.get(t).maxLv && (this.vm.setNumber("lv" + t, ++e),
                            this.vm.setNumber("cost" + t, this.cost),
                            this.vm.setNumber("DPS" + t, this._DPS),
                            this.vm.setNumber("DOT" + t, this._DOT));
                            var i = u.get();
                            i.skills.forEach((function(i) {
                                i.id == t && (i.lv = e)
                            }
                            )),
                            i.saveData()
                        } else {
                            this._id = t.id;
                            var s = new r;
                            s.init(t.id),
                            this.tableMap.set(t.id, s),
                            this.vm.setNumber("lv" + t.id, t.lv),
                            this.vm.setNumber("cost" + t.id, this.cost),
                            this.vm.setNumber("DPS" + t.id, this._DPS),
                            this.vm.setNumber("DOT" + t.id, this._DOT),
                            this.vm.setString("name" + t.id, this.name),
                            this.vm.setString("image" + t.id, this.image)
                        }
                        var n = this.ent.get(l).attributes;
                        n.get(a.DPS).skill = this.DPS || 0,
                        n.get(a.DOT).skill = this.DOT || 0
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this.tableMap.get(this.id).name
                    }
                }, {
                    key: "image",
                    get: function() {
                        return this.tableMap.get(this.id).image
                    }
                }, {
                    key: "cost",
                    get: function() {
                        var t = this.tableMap.get(this.id).cost
                          , e = 1 + this.tableMap.get(this.id).costUp
                          , i = this.vm.getNumber("lv" + this.id)
                          , s = t * Math.pow(e, i);
                        return Math.ceil(s)
                    }
                }, {
                    key: "maxLv",
                    get: function() {
                        return this.tableMap.get(this.id).maxLv
                    }
                }, {
                    key: "DPS",
                    get: function() {
                        var t = this
                          , e = 0;
                        return this.tableMap.forEach((function(i, s) {
                            t.vm.getNumber("lv" + s) >= 1 && 0 != i.DPS && (e += i.DPS + (t.vm.getNumber("lv" + s) - 1) * i.dUp)
                        }
                        )),
                        Math.ceil(e)
                    }
                }, {
                    key: "DOT",
                    get: function() {
                        var t = this
                          , e = 0;
                        return this.tableMap.forEach((function(i, s) {
                            t.vm.getNumber("lv" + s) >= 1 && 0 != i.DOT && (e += i.DOT + (t.vm.getNumber("lv" + s) - 1) * i.dUp)
                        }
                        )),
                        Math.ceil(e)
                    }
                }, {
                    key: "_DPS",
                    get: function() {
                        var t = this.tableMap.get(this.id).DPS + (this.vm.getNumber("lv" + this.id) - 1) * this.dUp;
                        return Math.ceil(t)
                    }
                }, {
                    key: "_DOT",
                    get: function() {
                        var t = this.tableMap.get(this.id).DOT + (this.vm.getNumber("lv" + this.id) - 1) * this.dUp;
                        return Math.ceil(t)
                    }
                }, {
                    key: "costUp",
                    get: function() {
                        return this.tableMap.get(this.id).costUp
                    }
                }, {
                    key: "dUp",
                    get: function() {
                        return this.tableMap.get(this.id).dUp
                    }
                }]),
                s
            }(n.Comp)) || h);
            var c = function() {
                function t() {}
                var e = t.prototype;
                return e.setNumber = function(t, e) {
                    this[t] = e
                }
                ,
                e.setString = function(t, e) {
                    this[t] = e
                }
                ,
                e.getNumber = function(t) {
                    return this[t]
                }
                ,
                e.getString = function(t) {
                    return this[t]
                }
                ,
                e.reset = function() {}
                ,
                t
            }();
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleNumeric.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, u;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            u = e.cclegacy
        }
        ],
        execute: function() {
            u._RF.push({}, "8212eNzx8lMcICR0XHhfkyF", "RoleNumeric", void 0);
            var s = e("RoleModuleType", function(e) {
                return e[e.Base = 0] = "Base",
                e[e.Job = 1] = "Job",
                e[e.Level = 2] = "Level",
                e[e.Skill = 3] = "Skill",
                e
            }({}));
            e("RoleNumeric", function() {
                function e(e, t) {
                    this.onUpdate = null,
                    this.type = null,
                    this.value = 0,
                    this.attributes = void 0,
                    this.values = new Map,
                    this.type = e,
                    this.attributes = t;
                    var u = s;
                    for (var i in u) {
                        var n = Number(i);
                        n > -1 && this.values.set(n, 0)
                    }
                }
                var u = e.prototype;
                return u.getValue = function(e) {
                    return this.values.get(e)
                }
                ,
                u.setValue = function(e, t) {
                    this.values.set(e, t),
                    this.update()
                }
                ,
                u.update = function() {
                    var e = 0;
                    this.values.forEach((function(t) {
                        e += t
                    }
                    )),
                    this.value = e,
                    this.onUpdate && this.onUpdate(this)
                }
                ,
                u.reset = function() {
                    this.values.clear(),
                    this.update()
                }
                ,
                t(e, [{
                    key: "base",
                    get: function() {
                        return this.getValue(s.Base)
                    },
                    set: function(e) {
                        this.setValue(s.Base, e)
                    }
                }, {
                    key: "level",
                    get: function() {
                        return this.getValue(s.Level)
                    },
                    set: function(e) {
                        this.setValue(s.Level, e)
                    }
                }, {
                    key: "job",
                    get: function() {
                        return this.getValue(s.Job)
                    },
                    set: function(e) {
                        this.setValue(s.Job, e)
                    }
                }, {
                    key: "skill",
                    get: function() {
                        return this.getValue(s.Skill)
                    },
                    set: function(e) {
                        this.setValue(s.Skill, e)
                    }
                }]),
                e
            }());
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleNumericMap.ts", ["cc", "./RoleNumeric.ts"], (function(t) {
    var e, i;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        , function(t) {
            i = t.RoleNumeric
        }
        ],
        execute: function() {
            e._RF.push({}, "24030kmAY1HppwTaUhGfp0P", "RoleNumericMap", void 0);
            t("RoleNumericDecorator", (function() {
                this.attribute = null,
                this.value = 0
            }
            )),
            t("RoleNumericMap", function() {
                function t(t) {
                    this.attributes = new Map,
                    this.decorators = new Map,
                    this.vm = null,
                    this.vm = t
                }
                var e = t.prototype;
                return e.get = function(t) {
                    var e = this
                      , r = this.attributes.get(t);
                    return null == r && (r = new i(t,this),
                    this.attributes.set(t, r),
                    r.onUpdate = function(t) {
                        e.vm[t.type] = t.value
                    }
                    ),
                    r
                }
                ,
                e.forEach = function(t, e) {
                    this.attributes.forEach(t, e)
                }
                ,
                e.reset = function() {
                    this.decorators.clear(),
                    this.attributes.forEach((function(t, e, i) {
                        t.reset()
                    }
                    ))
                }
                ,
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleSkillUpgrade.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./RoleModelSkillComp.ts"], (function(e) {
    var l, t, o, r;
    return {
        setters: [function(e) {
            l = e.inheritsLoose
        }
        , function(e) {
            t = e.cclegacy
        }
        , function(e) {
            o = e.ecs
        }
        , function(e) {
            r = e.RoleModelSkillComp
        }
        ],
        execute: function() {
            var i, n;
            t._RF.push({}, "c8395B4cwtBxZN4WUOxRlDH", "RoleSkillUpgrade", void 0);
            var c = e("RoleSkillUpgradeComp", o.register("RoleSkillUpgrade")(i = function(e) {
                function t() {
                    for (var l, t = arguments.length, o = new Array(t), r = 0; r < t; r++)
                        o[r] = arguments[r];
                    return (l = e.call.apply(e, [this].concat(o)) || this).skillId = -1,
                    l
                }
                return l(t, e),
                t.prototype.reset = function() {
                    this.skillId = 0
                }
                ,
                t
            }(o.Comp)) || i);
            e("RoleSkillUpgradeSystem", o.register("Role")(n = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                l(t, e);
                var i = t.prototype;
                return i.filter = function() {
                    return o.allOf(c, r)
                }
                ,
                i.entityEnter = function(e) {
                    e.RoleModelSkill.id = e.RoleSkillUpgrade.skillId,
                    e.remove(c)
                }
                ,
                t
            }(o.ComblockSystem)) || n);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleStateHit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimatorStateLogic.ts"], (function(t) {
    var o, n, i;
    return {
        setters: [function(t) {
            o = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            i = t.AnimatorStateLogic
        }
        ],
        execute: function() {
            n._RF.push({}, "357ae5SvW1F2KRpt4iLE25o", "RoleStateHit", void 0);
            t("RoleStateHit", function(t) {
                function n(o, n) {
                    var i;
                    return (i = t.call(this) || this).role = void 0,
                    i.anim = void 0,
                    i.role = o,
                    i.anim = n,
                    i
                }
                o(n, t);
                var i = n.prototype;
                return i.onEntry = function() {}
                ,
                i.onUpdate = function() {}
                ,
                i.onExit = function() {
                    var t = this.role.RoleView.animator.onHitActionComplete;
                    t && t()
                }
                ,
                n
            }(i));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleUpgrade.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./RoleEnum.ts", "./RoleModelLevelComp.ts"], (function(e) {
    var t, r, l, o, n;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            r = e.cclegacy
        }
        , function(e) {
            l = e.ecs
        }
        , function(e) {
            o = e.RoleAttributeType
        }
        , function(e) {
            n = e.RoleModelLevelComp
        }
        ],
        execute: function() {
            var i, u;
            r._RF.push({}, "09d3e+BS/lJ0LwzQqXz+Ln8", "RoleUpgrade", void 0);
            var s = e("RoleUpgradeComp", l.register("RoleUpgrade")(i = function(e) {
                function r() {
                    for (var t, r = arguments.length, l = new Array(r), o = 0; o < r; o++)
                        l[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(l)) || this).lv = 0,
                    t
                }
                return t(r, e),
                r.prototype.reset = function() {
                    this.lv = 0
                }
                ,
                r
            }(l.Comp)) || i);
            e("RoleUpgradeSystem", l.register("Role")(u = function(e) {
                function r() {
                    return e.apply(this, arguments) || this
                }
                t(r, e);
                var i = r.prototype;
                return i.filter = function() {
                    return l.allOf(s, n)
                }
                ,
                i.entityEnter = function(e) {
                    var t = e.RoleModel
                      , r = e.RoleModelLevel
                      , l = e.RoleUpgrade;
                    0 == l.lv ? r.vm.lv++ : r.vm.lv = l.lv,
                    r.rtluCurrent.init(r.vm.lv),
                    t.attributes.get(o.coins).level = r.rtluCurrent.coins,
                    t.attributes.get(o.DOT).level = r.rtluCurrent.DOT,
                    t.attributes.get(o.DPS).level = r.rtluCurrent.DPS,
                    r.rtluNext.init(r.vm.lv + 1),
                    r.vm.coins = r.rtluNext.coins,
                    e.remove(s)
                }
                ,
                r
            }(l.ComblockSystem)) || u);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleViewAnimator.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RoleEnum.ts", "./AnimationEventHandler.ts", "./RoleStateHit.ts", "./AnimatorSpine.ts"], (function(t) {
    var e, n, o, i, r, a, l, c;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            o = t._decorator,
            i = t.sp
        }
        , function(t) {
            r = t.RoleAnimatorType
        }
        , function(t) {
            a = t.AnimationEventHandler
        }
        , function(t) {
            l = t.RoleStateHit
        }
        , function(t) {
            c = t.default
        }
        ],
        execute: function() {
            var s;
            n._RF.push({}, "07e1eTDDLFI3pZI1EVRQ8eA", "RoleViewAnimator", void 0);
            var u = o.ccclass
              , p = (o.property,
            o.requireComponent)
              , f = o.disallowMultiple;
            t("RoleViewAnimator", u("RoleViewAnimator")(s = f(s = p(i.Skeleton)(s = function(t) {
                function n() {
                    for (var e, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                        o[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(o)) || this).onAttackComplete = null,
                    e.onHitActionComplete = null,
                    e.role = null,
                    e.weaponAnimName = null,
                    e
                }
                e(n, t);
                var o = n.prototype;
                return o.start = function() {
                    t.prototype.start.call(this);
                    var e = new a
                      , n = new Map;
                    n.set(r.Hurt, new l(this.role,e)),
                    this.initArgs(n, e)
                }
                ,
                o.left = function() {
                    this.node.parent.setScale(1, 1, 1)
                }
                ,
                o.right = function() {
                    this.node.parent.setScale(-1, 1, 1)
                }
                ,
                o.refresh = function() {
                    this.onStateChange(this._ac.curState, this._ac.curState)
                }
                ,
                o.playAnimation = function(t, e) {}
                ,
                n
            }(c)) || s) || s) || s);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleViewComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./CCComp.ts", "./RoleEvent.ts", "./RoleViewLoader.ts", "./SingletonModuleComp.ts", "./ResLoader.ts"], (function(e) {
    var o, t, n, i, r, a, c, s, l, u, p, d, h, f, m, w, R;
    return {
        setters: [function(e) {
            o = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            a = e._decorator,
            c = e.Sprite,
            s = e.tween,
            l = e.Vec3,
            u = e.Texture2D,
            p = e.SpriteFrame
        }
        , function(e) {
            d = e.ecs
        }
        , function(e) {
            h = e.CCComp
        }
        , function(e) {
            f = e.RoleEvent
        }
        , function(e) {
            m = e.RoleViewLoader
        }
        , function(e) {
            w = e.smc
        }
        , function(e) {
            R = e.resLoader
        }
        ],
        execute: function() {
            var C, g, v, S, y, L;
            r._RF.push({}, "ac804WNkuBFmrcuI06Q1364", "RoleViewComp", void 0);
            var b = a.ccclass
              , V = a.property;
            e("RoleViewComp", (C = b("RoleViewComp"),
            g = d.register("RoleView", !1),
            v = V(c),
            C(S = g((L = o((y = function(e) {
                function o() {
                    for (var o, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                        r[a] = arguments[a];
                    return o = e.call.apply(e, [this].concat(r)) || this,
                    n(o, "iconSprite", L, i(o)),
                    o.loader = null,
                    o
                }
                t(o, e);
                var r = o.prototype;
                return r.onLoad = function() {
                    var e = this.ent;
                    this.loader = this.node.addComponent(m),
                    this.node.emit("load", e),
                    this.on(f.ChangeJob, this.onHandler, this),
                    this.on(f.RoleHurt, this.onHandler, this)
                }
                ,
                r.onHandler = function(e) {
                    var o = this;
                    switch (e) {
                    case f.ChangeJob:
                        var t = w.account.AccountModel.role.RoleModelJob.image
                          , n = window.BASE_URL + "/" + t;
                        R.loadRemote(n, {
                            ext: ".png"
                        }, (function(e, t) {
                            if (e)
                                console.error("[LanguageSprite] 资源不存在 " + n);
                            else {
                                var i = new u;
                                i.image = t;
                                var r = new p;
                                r.texture = i,
                                o.iconSprite.spriteFrame = r
                            }
                        }
                        ));
                        break;
                    case f.RoleHurt:
                        s(this.iconSprite.node).to(.05, {
                            scale: new l(.95,.95,1)
                        }).call((function() {
                            o.iconSprite.node.setScale(new l(1,1,1))
                        }
                        )).start()
                    }
                }
                ,
                r.reset = function() {
                    this.node.destroy()
                }
                ,
                o
            }(h)).prototype, "iconSprite", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = y)) || S) || S));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RoleViewLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameResPath.ts"], (function(o) {
    var e, t, n, i, r;
    return {
        setters: [function(o) {
            e = o.inheritsLoose
        }
        , function(o) {
            t = o.cclegacy,
            n = o._decorator,
            i = o.Component
        }
        , function(o) {
            r = o.GameResPath
        }
        ],
        execute: function() {
            var a;
            t._RF.push({}, "8bfaerM7lhIUY17UXiBDYfw", "RoleViewLoader", void 0);
            var c = n.ccclass;
            n.property,
            o("RoleViewLoader", c("RoleViewLoader")(a = function(o) {
                function t() {
                    return o.apply(this, arguments) || this
                }
                e(t, o);
                var n = t.prototype;
                return n.onLoad = function() {
                    this.node.on("load", this.onEmitLoad, this)
                }
                ,
                n.onEmitLoad = function(o) {}
                ,
                n.load = function(o) {
                    this.node.active = !1;
                    r.getRolePath(o)
                }
                ,
                n.onDestroy = function() {}
                ,
                t
            }(i)) || a);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Root.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./GameQueryConfig.ts", "./Oops.ts", "./AudioManager.ts", "./EventMessage.ts", "./MessageManager2.ts", "./ResLoader.ts", "./StorageManager.ts", "./StorageSecuritySimple.ts", "./TimerManager.ts", "./GameManager.ts", "./LayerManager.ts"], (function(e) {
    var n, t, i, o, a, r, s, u, c, g, f, l, p, m, d, h, E, y, M, S, v, w, G, b, A, C, R, _, L, N;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            i = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            a = e.asyncToGenerator,
            r = e.regeneratorRuntime
        }
        , function(e) {
            s = e.cclegacy,
            u = e._decorator,
            c = e.Node,
            g = e.director,
            f = e.game,
            l = e.Game,
            p = e.sys,
            m = e.screen,
            d = e.Component,
            h = e.resources,
            E = e.JsonAsset
        }
        , function(e) {
            y = e.GameConfig
        }
        , function(e) {
            M = e.GameQueryConfig
        }
        , function(e) {
            S = e.version,
            v = e.oops
        }
        , function(e) {
            w = e.AudioManager
        }
        , function(e) {
            G = e.EventMessage
        }
        , function(e) {
            b = e.message
        }
        , function(e) {
            A = e.resLoader
        }
        , function(e) {
            C = e.StorageManager
        }
        , function(e) {
            R = e.StorageSecuritySimple
        }
        , function(e) {
            _ = e.TimerManager
        }
        , function(e) {
            L = e.GameManager
        }
        , function(e) {
            N = e.LayerManager
        }
        ],
        execute: function() {
            var O, T, H, D, I;
            s._RF.push({}, "90b9cOmlmBCnpCpEpgvdrQr", "Root", void 0);
            var z = u.property;
            e("Root", (O = z({
                type: c,
                tooltip: "游戏层"
            }),
            T = z({
                type: c,
                tooltip: "界面层"
            }),
            D = n((H = function(e) {
                function n() {
                    for (var n, t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return n = e.call.apply(e, [this].concat(a)) || this,
                    i(n, "game", D, o(n)),
                    i(n, "gui", I, o(n)),
                    n.persist = null,
                    n
                }
                t(n, e);
                var s = n.prototype;
                return s.onLoad = function() {
                    console.log("Oops Framework " + S),
                    this.enabled = !1,
                    this.initModule(),
                    this.iniStart(),
                    this.loadConfig().then()
                }
                ,
                s.initModule = function() {
                    this.persist = new c("OopsFrameworkPersistNode"),
                    g.addPersistRootNode(this.persist),
                    v.config.query = new M,
                    v.res = A,
                    v.message = b,
                    v.timer = this.persist.addComponent(_),
                    v.game = new L(this.game),
                    v.gui = new N
                }
                ,
                s.loadConfig = function() {
                    var e = a(r().mark((function e() {
                        var n, t = this;
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    n = "config",
                                    h.load(n, E, (function(e, i) {
                                        e ? t.loadConfig().then() : (v.config.game = new y(i),
                                        v.storage = new C,
                                        v.storage.init(new R),
                                        v.audio = t.persist.addComponent(w),
                                        v.audio.load(),
                                        v.res.defaultBundleName = v.config.game.bundleDefault,
                                        v.gui.mobileSafeArea = v.config.game.mobileSafeArea,
                                        v.gui.initLayer(t.gui, i.json.gui),
                                        f.frameRate = v.config.game.frameRate,
                                        t.enabled = !0,
                                        t.init(),
                                        t.run(),
                                        h.release(n))
                                    }
                                    ));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                s.update = function(e) {
                    v.ecs.execute(e)
                }
                ,
                s.iniStart = function() {}
                ,
                s.initGui = function() {}
                ,
                s.initEcsSystem = function() {}
                ,
                s.run = function() {}
                ,
                s.init = function() {
                    this.initGui(),
                    this.initEcsSystem(),
                    v.ecs.init(),
                    f.on(l.EVENT_SHOW, this.onShow, this),
                    f.on(l.EVENT_HIDE, this.onHide, this),
                    p.isMobile || (m.on("window-resize", (function() {
                        v.message.dispatchEvent(G.GAME_RESIZE)
                    }
                    ), this),
                    m.on("fullscreen-change", (function() {
                        v.message.dispatchEvent(G.GAME_FULL_SCREEN)
                    }
                    ), this)),
                    m.on("orientation-change", (function() {
                        v.message.dispatchEvent(G.GAME_ORIENTATION)
                    }
                    ), this)
                }
                ,
                s.onShow = function() {
                    v.timer.load(),
                    v.audio.resumeAll(),
                    g.resume(),
                    f.resume(),
                    v.message.dispatchEvent(G.GAME_SHOW)
                }
                ,
                s.onHide = function() {
                    v.timer.save(),
                    v.audio.pauseAll(),
                    g.pause(),
                    f.pause(),
                    v.message.dispatchEvent(G.GAME_HIDE)
                }
                ,
                n
            }(d)).prototype, "game", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = n(H.prototype, "gui", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            H));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RotateUtil.ts", ["cc", "./Vec3Util.ts"], (function(t) {
    var o, n, r, e, i;
    return {
        setters: [function(t) {
            o = t.cclegacy,
            n = t.Quat,
            r = t.Vec3,
            e = t.toRadian
        }
        , function(t) {
            i = t.Vec3Util
        }
        ],
        execute: function() {
            o._RF.push({}, "103324kr75Hi5d7RZCcRt3P", "RotateUtil", void 0);
            t("RotateUtil", function() {
                function t() {}
                return t.rotateAround = function(t, o, r) {
                    var e = new n;
                    n.rotateAround(e, t.getRotation(), o.normalize(), r),
                    t.setRotation(e)
                }
                ,
                t.rotateAroundTarget = function(t, o, e, i) {
                    var a = t.worldPosition
                      , u = o.worldPosition
                      , c = new n
                      , s = new r;
                    n.fromAxisAngle(c, e, i),
                    r.subtract(s, u, a),
                    r.transformQuat(s, s, c),
                    r.add(s, a, s),
                    o.setWorldPosition(s),
                    n.rotateAround(c, o.worldRotation, e, i),
                    n.normalize(c, c),
                    o.setWorldRotation(c)
                }
                ,
                t.circularEdgePosition = function(t, o, a) {
                    var u = i.z.multiplyScalar(o)
                      , c = i.sub(u, t)
                      , s = new r
                      , l = new n;
                    return n.fromAxisAngle(l, r.UP, e(a)),
                    r.transformQuat(s, c, l),
                    r.add(s, t, s),
                    s
                }
                ,
                t
            }());
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RtToModel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, r, i, n, o, a, l, s, c, u, h, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            l = e.Camera,
            s = e.MeshRenderer,
            c = e.RenderTexture,
            u = e.view,
            h = e.gfx,
            p = e.Component
        }
        ],
        execute: function() {
            var d, f, m, y, g, w, b;
            o._RF.push({}, "dbd7dMQYutDs7I7uj+3zIiU", "RtToModel", void 0);
            var v = a.ccclass
              , R = a.property;
            e("RtToModel", (d = v("RtToModel"),
            f = R(l),
            m = R(s),
            d((w = t((g = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(t, "camara", w, n(t)),
                    i(t, "model", b, n(t)),
                    t.rt = new c,
                    t
                }
                r(t, e);
                var o = t.prototype;
                return o.start = function() {
                    var e = u.getVisibleSize()
                      , t = new h.ColorAttachment
                      , r = new h.DepthStencilAttachment
                      , i = new h.RenderPassInfo([t],r);
                    this.rt.reset({
                        width: e.width,
                        height: e.height,
                        passInfo: i
                    }),
                    this.camara.targetTexture = this.rt,
                    this.model.material.setProperty("mainTexture", this.rt)
                }
                ,
                o.onDestroy = function() {
                    this.rt.destroy()
                }
                ,
                t
            }(p)).prototype, "camara", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b = t(g.prototype, "model", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = g)) || y));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RtToSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    var e, i, o, r, n, s, h, a, p, u, c, l, f, T;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            o = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            n = t.cclegacy,
            s = t._decorator,
            h = t.Camera,
            a = t.Sprite,
            p = t.Node,
            u = t.RenderTexture,
            c = t.UITransform,
            l = t.gfx,
            f = t.SpriteFrame,
            T = t.Component
        }
        ],
        execute: function() {
            var d, y, v, m, g, E, b, C, R, S, w;
            n._RF.push({}, "f608cdDWBNEKLILVNBcQYvf", "RtToSprite", void 0);
            var _ = s.ccclass
              , O = s.property;
            t("RtToSprite", (d = _("RtToSprite"),
            y = O({
                type: h,
                tooltip: "渲染模型的三维摄像机"
            }),
            v = O({
                type: a,
                tooltip: "显示模型的二维精灵组件"
            }),
            m = O({
                tooltip: "是否触摸控制旋转"
            }),
            g = O({
                type: p,
                tooltip: "三维模型",
                visible: function() {
                    return !0 === this.rotation
                }
            }),
            d((C = e((b = function(t) {
                function e() {
                    for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                        n[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    o(e, "camera", C, r(e)),
                    o(e, "sprite", R, r(e)),
                    o(e, "rotation", S, r(e)),
                    o(e, "model", w, r(e)),
                    e.rt = new u,
                    e.touched = !1,
                    e
                }
                i(e, t);
                var n = e.prototype;
                return n.start = function() {
                    var t = this.sprite.getComponent(c);
                    this.refreshRenderTexture(t.width, t.height),
                    this.rotation && (this.sprite.node.on(p.EventType.TOUCH_START, this.onTouchStart, this),
                    this.sprite.node.on(p.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    this.sprite.node.on(p.EventType.TOUCH_END, this.onTouchEnd, this),
                    this.sprite.node.on(p.EventType.TOUCH_CANCEL, this.onTouchEnd, this))
                }
                ,
                n.onTouchStart = function(t) {
                    this.touched = !0
                }
                ,
                n.onTouchMove = function(t) {
                    if (this.touched) {
                        var e = this.model.eulerAngles
                          , i = t.touch.getDelta().x;
                        e.y += -i,
                        this.model.eulerAngles = e
                    }
                }
                ,
                n.onTouchEnd = function(t) {
                    this.touched = !1
                }
                ,
                n.refreshRenderTexture = function(t, e) {
                    var i = new l.ColorAttachment
                      , o = new l.DepthStencilAttachment
                      , r = new l.RenderPassInfo([i],o);
                    this.rt.reset({
                        width: t,
                        height: e,
                        passInfo: r
                    });
                    var n = this.sprite.spriteFrame
                      , s = new f;
                    s.reset({
                        originalSize: n.originalSize,
                        rect: n.rect,
                        offset: n.offset,
                        isRotate: n.rotated,
                        borderTop: n.insetTop,
                        borderLeft: n.insetLeft,
                        borderBottom: n.insetBottom,
                        borderRight: n.insetRight
                    }),
                    this.camera.targetTexture = this.rt,
                    s.texture = this.rt,
                    this.sprite.spriteFrame = s
                }
                ,
                n.onDestroy = function() {
                    this.rotation && (this.sprite.node.off(p.EventType.TOUCH_START, this.onTouchStart, this),
                    this.sprite.node.off(p.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    this.sprite.node.off(p.EventType.TOUCH_END, this.onTouchEnd, this),
                    this.sprite.node.off(p.EventType.TOUCH_CANCEL, this.onTouchEnd, this)),
                    this.rt.destroy()
                }
                ,
                e
            }(T)).prototype, "camera", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = e(b.prototype, "sprite", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = e(b.prototype, "rotation", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            w = e(b.prototype, "model", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = b)) || E));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ScrollBarEnhance.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var r, t, l, n, i, o, s, c, a, h, v;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            l = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            i = e.cclegacy,
            o = e._decorator,
            s = e.Slider,
            c = e.ScrollView,
            a = e.Component,
            h = e.js,
            v = e.v2
        }
        ],
        execute: function() {
            var d, f, u, p, S, E, g, w;
            i._RF.push({}, "0affdr1/iZLZL807prHgLxa", "ScrollBarEnhance", void 0);
            var y = o.ccclass
              , V = o.property
              , m = o.requireComponent
              , x = o.menu;
            e("ScrollBarEnhance", (d = m(s),
            f = x("组件库/ScrollBarEnhance"),
            u = V({
                tooltip: "对应的（ScrollView）滑动列表",
                type: c
            }),
            p = V({
                type: [a.EventHandler],
                tooltip: "滑动事件改变事件"
            }),
            y(S = d(S = f((g = r((E = function(e) {
                function r() {
                    for (var r, t = arguments.length, i = new Array(t), o = 0; o < t; o++)
                        i[o] = arguments[o];
                    return r = e.call.apply(e, [this].concat(i)) || this,
                    l(r, "scrollView", g, n(r)),
                    l(r, "renderEvent", w, n(r)),
                    r.vSlider = null,
                    r
                }
                t(r, e),
                r.creatEventHandler = function(e, r, t) {
                    var l = new a.EventHandler;
                    return l.target = e,
                    l.component = r,
                    l.handler = t,
                    l
                }
                ;
                var i = r.prototype;
                return i.refresh = function(e) {
                    var r, t = this.vSlider || this.node.getComponent(s);
                    Math.min(e, 1),
                    r = Math.max(e, 0),
                    t.progress = r,
                    this.onSliderEvent(t, "")
                }
                ,
                i.start = function() {
                    this.addScrollChildIndex()
                }
                ,
                i.addScrollChildIndex = function() {
                    var e = this.scrollView;
                    this.vSlider = this.node.getComponent(s);
                    var t = h.getClassName(this);
                    this.vSlider.slideEvents.push(r.creatEventHandler(this.node, t, "onSliderEvent")),
                    e.scrollEvents.push(r.creatEventHandler(this.node, t, "onScrollEvent")),
                    this.scrollMoveEvent()
                }
                ,
                i.onScrollEvent = function(e, r, t) {
                    this.scrollMoveEvent()
                }
                ,
                i.scrollMoveEvent = function() {
                    var e, r;
                    this.scrollView.vertical ? (e = this.scrollView.getMaxScrollOffset().y,
                    r = this.scrollView.getScrollOffset().y) : (e = this.scrollView.getMaxScrollOffset().x,
                    r = -1 * this.scrollView.getScrollOffset().x),
                    this.vSlider.progress = r / e > 0 && r / e < 1 ? 1 - r / e : r / e <= 0 ? 1 : 0,
                    this.renderEvent && this.renderEvent.length && a.EventHandler.emitEvents(this.renderEvent, this.vSlider.progress)
                }
                ,
                i.onSliderEvent = function(e, r) {
                    var t = 0
                      , l = 0;
                    this.scrollView.vertical ? (t = this.scrollView.getScrollOffset().x,
                    l = this.scrollView.getMaxScrollOffset().y * (1 - e.progress)) : (t = this.scrollView.getMaxScrollOffset().x * e.progress,
                    l = this.scrollView.getScrollOffset().y),
                    this.scrollView.scrollToOffset(v(t, l), .05)
                }
                ,
                r
            }(a)).prototype, "scrollView", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = r(E.prototype, "renderEvent", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            S = E)) || S) || S) || S));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SeedRandom.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./RandomManager.ts"], (function(n) {
    var t, e, r;
    return {
        setters: [function(n) {
            t = n.createClass
        }
        , function(n) {
            e = n.cclegacy
        }
        , function(n) {
            r = n.RandomManager
        }
        ],
        execute: function() {
            e._RF.push({}, "9b02bnNwwZEWq9Ft59BRCIB", "SeedRandom", void 0);
            n("SeedRandom", function() {
                function n(n) {
                    this.rm = void 0,
                    this.sr = void 0,
                    this.sr = new Math.seedrandom(n),
                    this.rm = new r,
                    this.rm.setRandom(this.sr)
                }
                return n.prototype.destroy = function() {
                    this.rm = null,
                    this.sr = null
                }
                ,
                t(n, [{
                    key: "random",
                    get: function() {
                        return this.rm
                    }
                }]),
                n
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Selector.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BranchNode.ts"], (function(t) {
    var n, c, o;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        }
        , function(t) {
            c = t.cclegacy
        }
        , function(t) {
            o = t.BranchNode
        }
        ],
        execute: function() {
            c._RF.push({}, "90470XqT/FGHo/PRQktLcYy", "Selector", void 0);
            t("Selector", function(t) {
                function c() {
                    return t.apply(this, arguments) || this
                }
                n(c, t);
                var o = c.prototype;
                return o.success = function() {
                    t.prototype.success.call(this),
                    this._control.success()
                }
                ,
                o.fail = function() {
                    t.prototype.fail.call(this),
                    this._actualTask += 1,
                    this._actualTask < this.children.length ? this._run(this._blackboard) : this._control.fail()
                }
                ,
                o._run = function(n) {
                    this._nodeRunning ? this._nodeRunning.run(this._blackboard) : t.prototype._run.call(this)
                }
                ,
                c
            }(o));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Sequence.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BranchNode.ts"], (function(t) {
    var n, e, c;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy
        }
        , function(t) {
            c = t.BranchNode
        }
        ],
        execute: function() {
            e._RF.push({}, "1ef80bgYZBPXqCDIpzHpbBJ", "Sequence", void 0);
            t("Sequence", function(t) {
                function e(n) {
                    return t.call(this, n) || this
                }
                n(e, t);
                var c = e.prototype;
                return c.success = function() {
                    t.prototype.success.call(this),
                    this._actualTask += 1,
                    this._actualTask < this.children.length ? this._run(this._blackboard) : this._control.success()
                }
                ,
                c.fail = function() {
                    t.prototype.fail.call(this),
                    this._control.fail()
                }
                ,
                c._run = function(n) {
                    this._nodeRunning ? this._nodeRunning.run(this._blackboard) : t.prototype._run.call(this)
                }
                ,
                e
            }(c));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Singleton.ts", ["cc"], (function(n) {
    var t;
    return {
        setters: [function(n) {
            t = n.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "9309e7eVbtI66XAaVDNQU85", "Singleton", void 0);
            n("default", function() {
                function n() {}
                return n.inst = function() {
                    return this.instance || (this.instance = new this),
                    this.instance
                }
                ,
                n
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SingletonModuleComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts"], (function(n) {
    var e, t, o;
    return {
        setters: [function(n) {
            e = n.inheritsLoose
        }
        , function(n) {
            t = n.cclegacy
        }
        , function(n) {
            o = n.ecs
        }
        ],
        execute: function() {
            var i;
            t._RF.push({}, "17a56vOVQFMMarANxr6JvP7", "SingletonModuleComp", void 0);
            var r = n("SingletonModuleComp", o.register("SingletonModule")(i = function(n) {
                function t() {
                    for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    return (e = n.call.apply(n, [this].concat(o)) || this).initialize = null,
                    e.account = null,
                    e
                }
                return e(t, n),
                t.prototype.reset = function() {}
                ,
                t
            }(o.Comp)) || i);
            n("smc", o.getSingleton(r));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SpineFinishedRelease.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts"], (function(e) {
    var t, i, n, s, o, r, a, p, l;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            s = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            r = e._decorator,
            a = e.sp,
            p = e.Component
        }
        , function(e) {
            l = e.oops
        }
        ],
        execute: function() {
            var h, c, u;
            o._RF.push({}, "9589eKB/RZKXpxoYhz5SyC7", "SpineFinishedRelease", void 0);
            var d = r.ccclass
              , f = r.property;
            e("SpineFinishedRelease", d("SpineFinishedRelease")((u = t((c = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++)
                        o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(t, "isDestroy", u, s(t)),
                    t.spine = void 0,
                    t.resPath = null,
                    t
                }
                i(t, e);
                var o = t.prototype;
                return o.setResPath = function(e) {
                    this.resPath = e
                }
                ,
                o.onLoad = function() {
                    var e = this;
                    this.spine = this.getComponent(a.Skeleton),
                    this.spine.setCompleteListener(this.onSpineComplete.bind(this)),
                    this.resPath ? l.res.load(this.resPath, a.SkeletonData, (function(t, i) {
                        t ? console.error("加载【" + e.resPath + "】的 SPINE 资源不存在") : (e.spine.skeletonData = i,
                        e.spine.setAnimation(0, "animation", !1))
                    }
                    )) : this.spine.setAnimation(0, "animation", !1)
                }
                ,
                o.onSpineComplete = function() {
                    this.isDestroy ? this.node.destroy() : this.node.removeFromParent()
                }
                ,
                t
            }(p)).prototype, "isDestroy", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            h = c)) || h);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/StorageManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./env"], (function(e) {
    var t, r, n, i;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            r = e.cclegacy,
            n = e.sys
        }
        , function(e) {
            i = e.PREVIEW
        }
        ],
        execute: function() {
            r._RF.push({}, "ed226gLF85Oyr+WhA9TJZLX", "StorageManager", void 0);
            e("StorageManager", function() {
                function e() {
                    this.id = null,
                    this.iss = null
                }
                var r = e.prototype;
                return r.init = function(e) {
                    this.iss = e
                }
                ,
                r.setUser = function(e) {
                    this.id = e
                }
                ,
                r.set = function(e, t) {
                    var r = this.getKey(e);
                    if (null != e) {
                        if (this.encrypted && (r = this.iss.encryptKey(r)),
                        null == t)
                            return console.warn("存储的值为空，则直接移除该存储"),
                            void this.remove(e);
                        if ("function" != typeof t) {
                            if ("object" == typeof t)
                                try {
                                    t = JSON.stringify(t)
                                } catch (e) {
                                    return void console.error("解析失败，str = " + t)
                                }
                            else
                                "number" == typeof t ? t += "" : "boolean" == typeof t && (t = String(t));
                            this.encrypted && (t = this.iss.encrypt(t)),
                            n.localStorage.setItem(r, t)
                        } else
                            console.error("储存的值不能为方法")
                    } else
                        console.error("存储的key不能为空")
                }
                ,
                r.get = function(e, t) {
                    if (void 0 === t && (t = ""),
                    null == e)
                        return console.error("存储的key不能为空"),
                        null;
                    e = this.getKey(e),
                    this.encrypted && (e = this.iss.encryptKey(e));
                    var r = n.localStorage.getItem(e);
                    return null != r && "" !== r && this.encrypted && (r = this.iss.decrypt(r)),
                    null === r ? t : r
                }
                ,
                r.getNumber = function(e, t) {
                    void 0 === t && (t = 0);
                    var r = this.get(e);
                    return "0" == r ? Number(r) : Number(r) || t
                }
                ,
                r.getBoolean = function(e) {
                    return "true" === this.get(e).toLowerCase()
                }
                ,
                r.getJson = function(e, t) {
                    var r = this.get(e);
                    return r && JSON.parse(r) || t
                }
                ,
                r.remove = function(e) {
                    if (null != e) {
                        var t = this.getKey(e);
                        this.encrypted && (t = this.iss.encryptKey(t)),
                        n.localStorage.removeItem(t)
                    } else
                        console.error("存储的key不能为空")
                }
                ,
                r.clear = function() {
                    n.localStorage.clear()
                }
                ,
                r.getKey = function(e) {
                    return null == this.id || "" == this.id ? e : this.id + "_" + e
                }
                ,
                t(e, [{
                    key: "encrypted",
                    get: function() {
                        return !i
                    }
                }]),
                e
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/StorageSecurityCrypto.ts", ["cc"], (function() {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "fbbbdioMCNOmI7KMEU46FfN", "StorageSecurityCrypto", void 0),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/StorageSecuritySimple.ts", ["cc", "./Oops.ts"], (function(e) {
    var t, r;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        , function(e) {
            r = e.oops
        }
        ],
        execute: function() {
            t._RF.push({}, "386e3+fu+RJB5VSgow0kwS4", "StorageSecuritySimple", void 0);
            e("StorageSecuritySimple", function() {
                function e() {
                    this.secretkey = null;
                    var e = r.config.game.localDataKey
                      , t = r.config.game.localDataIv;
                    this.secretkey = e + t
                }
                var t = e.prototype;
                return t.encrypt = function(e) {
                    for (var t = "", r = 0; r < e.length; r++)
                        t += String.fromCharCode(e.charCodeAt(r) ^ this.secretkey.charCodeAt(r % this.secretkey.length));
                    return t
                }
                ,
                t.decrypt = function(e) {
                    for (var t = "", r = 0; r < e.length; r++)
                        t += String.fromCharCode(e.charCodeAt(r) ^ this.secretkey.charCodeAt(r % this.secretkey.length));
                    return t
                }
                ,
                t.encryptKey = function(e) {
                    return this.encrypt(e)
                }
                ,
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/StringFormat.ts", ["cc"], (function(t) {
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "85fe8Gc6h5Ava+JsdbBs8cR", "StringFormat", void 0);
            t("StringFormatFunction", new (function() {
                function t() {}
                var e = t.prototype;
                return e.deal = function(t, e) {
                    if ("" === e)
                        return t;
                    var n = (e = e.toLowerCase().trim()).match(/^[a-z|A-Z]+/gi)
                      , i = e.match(/\d+$/gi)
                      , r = ""
                      , o = 0
                      , c = "";
                    if (n && (r = n[0]),
                    i && (o = parseInt(i[0])),
                    "number" == typeof t)
                        switch (r) {
                        case "int":
                            c = this.int(t);
                            break;
                        case "fix":
                            c = this.fix(t, o);
                            break;
                        case "kmbt":
                            c = this.KMBT(t);
                            break;
                        case "per":
                            c = this.per(t, o);
                            break;
                        case "sep":
                            c = this.sep(t)
                        }
                    else {
                        switch (r) {
                        case "limit":
                            c = this.limit(t, o)
                        }
                        c = t
                    }
                    return c
                }
                ,
                e.sep = function(t) {
                    return Math.round(t).toString().replace(new RegExp("(\\d)(?=(\\d{3})+$)","ig"), "$1,")
                }
                ,
                e.time_m = function(t) {}
                ,
                e.time_s = function(t) {}
                ,
                e.time_ms = function(t) {}
                ,
                e.timeStamp = function(t) {
                    return new Date(t).toString()
                }
                ,
                e.per = function(t, e) {
                    return Math.round(100 * t).toFixed(e)
                }
                ,
                e.int = function(t) {
                    return Math.round(t)
                }
                ,
                e.fix = function(t, e) {
                    return t.toFixed(e)
                }
                ,
                e.limit = function(t, e) {
                    return t.substring(0, e)
                }
                ,
                e.KMBT = function(t, e) {
                    return this.compressUnit(t, [1e3, 1e6, 1e9, 1e12], ["", "K", "M", "B", "T"], 2)
                }
                ,
                e.compressUnit = function(t, e, n, i) {
                    void 0 === i && (i = 2);
                    var r, o = e, c = n, u = "";
                    for (r = 0; r < o.length; r++) {
                        if (t < o[r]) {
                            u = r > 0 ? (t / o[r - 1]).toFixed(i) : t.toFixed(0);
                            break
                        }
                    }
                    return u + c[r]
                }
                ,
                t
            }()));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/StringUtil.ts", ["cc"], (function(r) {
    var t;
    return {
        setters: [function(r) {
            t = r.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "aa8435LSBtAR5HPsje6IJ2w", "StringUtil", void 0);
            r("StringUtil", function() {
                function r() {}
                return r.guid = function() {
                    for (var r = "", t = 1; t <= 32; t++) {
                        r += Math.floor(16 * Math.random()).toString(16),
                        8 != t && 12 != t && 16 != t && 20 != t || (r += "-")
                    }
                    return r
                }
                ,
                r.numberTotPermil = function(r) {
                    return r.toLocaleString()
                }
                ,
                r.numberToThousand = function(r, t) {
                    void 0 === t && (t = 2);
                    var n = 1e3;
                    if (r < n)
                        return r.toString();
                    var e = Math.floor(Math.log(r) / Math.log(n));
                    return (r / Math.pow(n, e)).toFixed(t) + ["", "K", "M", "G"][e]
                }
                ,
                r.numberToTenThousand = function(r, t) {
                    void 0 === t && (t = 2);
                    var n = 1e4;
                    if (r < n)
                        return r.toString();
                    var e = Math.floor(Math.log(r) / Math.log(n));
                    return (r / Math.pow(n, e)).toFixed(t) + ["", "万", "亿", "万亿"][e]
                }
                ,
                r.stringToArray1 = function(r) {
                    return "" == r ? [] : r.split(",")
                }
                ,
                r.stringToArray2 = function(r) {
                    return "" == r ? [] : r.split("|")
                }
                ,
                r.stringToArray3 = function(r) {
                    return "" == r ? [] : r.split(":")
                }
                ,
                r.stringToArray4 = function(r) {
                    return "" == r ? [] : r.split(";")
                }
                ,
                r.sub = function(r, t, n) {
                    void 0 === n && (n = !1);
                    var e = /[^\x00-\xff]/g;
                    if (r.replace(e, "mm").length <= t)
                        return r;
                    for (var o = Math.floor(t / 2); o < r.length; o++)
                        if (r.substr(0, o).replace(e, "mm").length >= t)
                            return n ? r.substr(0, o) + "..." : r.substr(0, o);
                    return r
                }
                ,
                r.stringLen = function(r) {
                    for (var t = 0, n = r.length, e = -1, o = 0; o < n; o++)
                        t += (e = r.charCodeAt(o)) >= 0 && e <= 128 ? 1 : 2;
                    return t
                }
                ,
                r.IsEmpty = function(r) {
                    return null == r || null == r || 0 == r.length
                }
                ,
                r.substitute = function(r) {
                    if (null == r)
                        return "";
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++)
                        n[e - 1] = arguments[e];
                    var o, u = n.length;
                    1 == u && n[0]instanceof Array ? u = (o = n[0]).length : o = n;
                    for (var i = 0; i < u; i++)
                        r = r.replace(new RegExp("\\{" + i + "\\}","g"), o[i]);
                    return r
                }
                ,
                r
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TableLanguage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./JsonUtil.ts"], (function(t) {
    var e, n, a;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            a = t.JsonUtil
        }
        ],
        execute: function() {
            n._RF.push({}, "74f4fgFfZxHnqCfURfaciMV", "TableLanguage", void 0),
            t("TableLanguage", function() {
                function t() {
                    this.data = void 0,
                    this.id = 0
                }
                return t.prototype.init = function(e) {
                    var n = a.get(t.TableName);
                    this.data = n[e],
                    this.id = e
                }
                ,
                e(t, [{
                    key: "zh",
                    get: function() {
                        return this.data.zh
                    }
                }, {
                    key: "en",
                    get: function() {
                        return this.data.en
                    }
                }]),
                t
            }()).TableName = "Language",
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TablePromptWindow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./JsonUtil.ts"], (function(t) {
    var i, e, n;
    return {
        setters: [function(t) {
            i = t.createClass
        }
        , function(t) {
            e = t.cclegacy
        }
        , function(t) {
            n = t.JsonUtil
        }
        ],
        execute: function() {
            e._RF.push({}, "1e3d7uann5MRokAL2wULm9y", "TablePromptWindow", void 0),
            t("TablePromptWindow", function() {
                function t() {
                    this.data = void 0,
                    this.id = 0,
                    this.id1 = 0,
                    this.id2 = 0
                }
                return t.prototype.init = function(i, e, r) {
                    var a = n.get(t.TableName);
                    this.data = a[i][e][r],
                    this.id = i,
                    this.id1 = e,
                    this.id2 = r
                }
                ,
                i(t, [{
                    key: "title",
                    get: function() {
                        return this.data.title
                    }
                }, {
                    key: "describe",
                    get: function() {
                        return this.data.describe
                    }
                }, {
                    key: "array",
                    get: function() {
                        return this.data.array
                    }
                }, {
                    key: "hp",
                    get: function() {
                        return this.data.hp
                    }
                }]),
                t
            }()).TableName = "PromptWindow",
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TableRoleJob.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./JsonUtil.ts"], (function(t) {
    var e, n, i;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            i = t.JsonUtil
        }
        ],
        execute: function() {
            n._RF.push({}, "6ef83PQPjtDY6yytdl5tsAk", "TableRoleJob", void 0),
            t("TableRoleJob", function() {
                function t() {
                    this.data = void 0,
                    this.id = 0
                }
                return t.prototype.init = function(e) {
                    var n = i.get(t.TableName);
                    this.data = n[e],
                    this.id = e
                }
                ,
                e(t, [{
                    key: "name",
                    get: function() {
                        return this.data.name
                    }
                }, {
                    key: "image",
                    get: function() {
                        return this.data.image
                    }
                }, {
                    key: "video",
                    get: function() {
                        return this.data.video
                    }
                }, {
                    key: "unlock",
                    get: function() {
                        return this.data.unlock
                    }
                }, {
                    key: "max",
                    get: function() {
                        return this.data.max
                    }
                }]),
                t
            }()).TableName = "RoleJob",
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TableRoleLevelUp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./JsonUtil.ts"], (function(e) {
    var t, n, i;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            n = e.cclegacy
        }
        , function(e) {
            i = e.JsonUtil
        }
        ],
        execute: function() {
            n._RF.push({}, "52981IJRi9DsJZgQcTmrQKb", "TableRoleLevelUp", void 0),
            e("TableRoleLevelUp", function() {
                function e() {
                    this.data = void 0,
                    this.id = 0
                }
                return e.prototype.init = function(t) {
                    var n = i.get(e.TableName);
                    this.data = n[t],
                    this.id = t
                }
                ,
                t(e, [{
                    key: "coins",
                    get: function() {
                        return this.data.coins
                    }
                }, {
                    key: "DPS",
                    get: function() {
                        return this.data.DPS
                    }
                }, {
                    key: "DOT",
                    get: function() {
                        return this.data.DOT
                    }
                }]),
                e
            }()).TableName = "RoleLevelUp",
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TableRoleSkill.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./JsonUtil.ts"], (function(t) {
    var e, n, i;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            n = t.cclegacy
        }
        , function(t) {
            i = t.JsonUtil
        }
        ],
        execute: function() {
            n._RF.push({}, "88800xV9MxEJ7bgslUp0VFQ", "TableRoleSkill", void 0),
            t("TableRoleSkill", function() {
                function t() {
                    this.data = void 0,
                    this.id = 0
                }
                return t.prototype.init = function(e) {
                    var n = i.get(t.TableName);
                    this.data = n[e],
                    this.id = e
                }
                ,
                e(t, [{
                    key: "name",
                    get: function() {
                        return this.data.name
                    }
                }, {
                    key: "image",
                    get: function() {
                        return this.data.image
                    }
                }, {
                    key: "cost",
                    get: function() {
                        return this.data.cost
                    }
                }, {
                    key: "costUp",
                    get: function() {
                        return this.data.costUp
                    }
                }, {
                    key: "maxLv",
                    get: function() {
                        return this.data.maxLv
                    }
                }, {
                    key: "DPS",
                    get: function() {
                        return this.data.DPS
                    }
                }, {
                    key: "DOT",
                    get: function() {
                        return this.data.DOT
                    }
                }, {
                    key: "dUp",
                    get: function() {
                        return this.data.dUp
                    }
                }]),
                t
            }()).TableName = "RoleSkill",
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Task.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BTreeNode.ts"], (function(e) {
    var n, t, o;
    return {
        setters: [function(e) {
            n = e.inheritsLoose
        }
        , function(e) {
            t = e.cclegacy
        }
        , function(e) {
            o = e.BTreeNode
        }
        ],
        execute: function() {
            t._RF.push({}, "95087QhEU1G1LWnM2D7haTQ", "Task", void 0);
            e("Task", function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return n(t, e),
                t.prototype.run = function(e) {}
                ,
                t
            }(o));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Timer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, s;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            s = e.cclegacy
        }
        ],
        execute: function() {
            s._RF.push({}, "6021fct1uhJsImEuhdFWC0f", "Timer", void 0);
            e("Timer", function() {
                function e(e) {
                    void 0 === e && (e = 0),
                    this.callback = null,
                    this._elapsedTime = 0,
                    this._step = -1,
                    this.step = e
                }
                var s = e.prototype;
                return s.update = function(e) {
                    return !(this.step <= 0) && (this._elapsedTime += e,
                    this._elapsedTime >= this._step && (this._elapsedTime -= this._step,
                    null == (t = this.callback) || t.call(this),
                    !0));
                    var t
                }
                ,
                s.reset = function() {
                    this._elapsedTime = 0
                }
                ,
                s.stop = function() {
                    this._elapsedTime = 0,
                    this.step = -1
                }
                ,
                t(e, [{
                    key: "elapsedTime",
                    get: function() {
                        return this._elapsedTime
                    }
                }, {
                    key: "step",
                    get: function() {
                        return this._step
                    },
                    set: function(e) {
                        this._step = e,
                        this._elapsedTime = 0
                    }
                }, {
                    key: "progress",
                    get: function() {
                        return this._elapsedTime / this._step
                    }
                }]),
                e
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Timer2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Utils.ts", "./Oops.ts"], (function(e) {
    var t, i, r, n;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            i = e.cclegacy
        }
        , function(e) {
            r = e.default
        }
        , function(e) {
            n = e.oops
        }
        ],
        execute: function() {
            i._RF.push({}, "9b754RJLH5OkYppJjdO/hqZ", "Timer", void 0);
            var a = e("default", function() {
                function e() {}
                return e.register = function() {
                    this.t = new s,
                    n.timer.schedule(this._update.bind(this), 0)
                }
                ,
                e._update = function(e) {
                    this.t._update()
                }
                ,
                e.clearAll = function(e) {
                    this.t.clearAll(e)
                }
                ,
                e.frameOnce = function(e, t, i, r, n) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    this.t.frameOnce(e, t, i, r, n)
                }
                ,
                e.frameLoop = function(e, t, i, r, n) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    this.t.frameLoop(e, t, i, r, n)
                }
                ,
                e.timerOnce = function(e, t, i, r, n) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    this.t.timerOnce(e, t, i, r, n)
                }
                ,
                e.timerLoop = function(e, t, i, r, n, a) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    this.t.timerLoop(e, t, i, r, n)
                }
                ,
                e.clear = function(e, t) {
                    this.t.clear(e, t)
                }
                ,
                e
            }());
            a._mid = 1,
            a.t = void 0,
            a._id = "Timer";
            var s = function() {
                function e(e) {
                    this.scale = 1,
                    this.currTimer = void 0,
                    this.currFrame = 0,
                    this._delta = 0,
                    this._lastTimer = void 0,
                    this._map = {},
                    this._handlers = [],
                    this._temp = [],
                    this._count = 0,
                    this.currTimer = this._getNowData(),
                    this._lastTimer = this._getNowData()
                }
                var i = e.prototype;
                return i._update = function() {
                    if (this.scale <= 0)
                        return this._lastTimer = this._getNowData(),
                        void (this._delta = 0);
                    var e = this.currFrame = this.currFrame + this.scale
                      , t = this._getNowData()
                      , i = t - this._lastTimer > 3e4;
                    this._delta = (t - this._lastTimer) * this.scale;
                    var r = this.currTimer = this.currTimer + this._delta;
                    this._lastTimer = t;
                    var n = this._handlers;
                    this._count = 0;
                    for (var a = 0, s = n.length; a < s; a++) {
                        var l = n[a];
                        if (null !== l.method) {
                            var h = l.userFrame ? e : r;
                            if (h >= l.exeTime)
                                if (l.repeat)
                                    if (!l.jumpFrame || i)
                                        l.exeTime += l.delay,
                                        l.run(!1),
                                        h > l.exeTime && (l.exeTime += Math.ceil((h - l.exeTime) / l.delay) * l.delay);
                                    else
                                        for (; h >= l.exeTime; )
                                            l.exeTime += l.delay,
                                            l.run(!1);
                                else
                                    l.run(!0)
                        } else
                            this._count++
                    }
                    (this._count > 30 || e % 200 == 0) && this._clearHandlers()
                }
                ,
                i._clearHandlers = function() {
                    for (var e = this._handlers, t = 0, i = e.length; t < i; t++) {
                        var r = e[t];
                        null !== r.method ? this._temp.push(r) : this._recoverHandler(r)
                    }
                    this._handlers = this._temp,
                    e.length = 0,
                    this._temp = e
                }
                ,
                i._recoverHandler = function(t) {
                    this._map[t.key] == t && delete this._map[t.key],
                    t.clear(),
                    e._pool.push(t)
                }
                ,
                i._getNowData = function() {
                    return Date.now()
                }
                ,
                i._create = function(t, i, r, n, a, s, h) {
                    if (!r)
                        return a.apply(n, s),
                        null;
                    if (h) {
                        var o = this._getHandler(n, a);
                        if (o)
                            return o.repeat = i,
                            o.userFrame = t,
                            o.delay = r,
                            o.caller = n,
                            o.method = a,
                            o.args = s,
                            o.exeTime = r + (t ? this.currFrame : this.currTimer + this._getNowData() - this._lastTimer),
                            o
                    }
                    return (o = e._pool.length > 0 ? e._pool.pop() : new l).repeat = i,
                    o.userFrame = t,
                    o.delay = r,
                    o.caller = n,
                    o.method = a,
                    o.args = s,
                    o.exeTime = r + (t ? this.currFrame : this.currTimer + this._getNowData() - this._lastTimer),
                    this._indexHandler(o),
                    this._handlers.push(o),
                    o
                }
                ,
                i._indexHandler = function(e) {
                    var t = e.caller
                      , i = e.method
                      , n = t ? t.$_GID || (t.$_GID = r.getGID()) : 0
                      , s = i.$_TID || (i.$_TID = a._mid++);
                    e.key = n + "_" + s,
                    this._map[e.key] = e
                }
                ,
                i.timerOnce = function(e, t, i, r, n) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    this._create(!1, !1, e, t, i, r, n)
                }
                ,
                i.timerLoop = function(e, t, i, r, n, a) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    void 0 === a && (a = !1);
                    var s = this._create(!1, !0, e, t, i, r, n);
                    s && (s.jumpFrame = a)
                }
                ,
                i.frameOnce = function(e, t, i, r, n) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    this._create(!0, !1, e, t, i, r, n)
                }
                ,
                i.frameLoop = function(e, t, i, r, n) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = !0),
                    this._create(!0, !0, e, t, i, r, n)
                }
                ,
                i.toString = function() {
                    return " handlers:" + this._handlers.length + " pool:" + e._pool.length
                }
                ,
                i.clear = function(e, t) {
                    var i = this._getHandler(e, t);
                    i && i.clear()
                }
                ,
                i.clearAll = function(e) {
                    if (e)
                        for (var t = 0, i = this._handlers.length; t < i; t++) {
                            var r = this._handlers[t];
                            r.caller === e && r.clear()
                        }
                }
                ,
                i._getHandler = function(e, t) {
                    var i = (e ? e.$_GID || (e.$_GID = r.getGID()) : 0) + "_" + (t.$_TID || (t.$_TID = a._mid++));
                    return this._map[i]
                }
                ,
                i.runTimer = function(e, t) {
                    var i = this._getHandler(e, t);
                    i && null != i.method && (this._map[i.key] = null,
                    i.run(!0))
                }
                ,
                i.pause = function() {
                    this.scale = 0
                }
                ,
                i.resume = function() {
                    this.scale = 1
                }
                ,
                i.destroy = function() {
                    for (var e = 0, t = this._handlers.length; e < t; e++) {
                        this._handlers[e].clear()
                    }
                    this._handlers.length = 0,
                    this._map = {},
                    this._temp.length = 0
                }
                ,
                t(e, [{
                    key: "delta",
                    get: function() {
                        return this._delta
                    }
                }]),
                e
            }();
            s._pool = [];
            var l = function() {
                function e() {
                    this.key = void 0,
                    this.repeat = void 0,
                    this.delay = void 0,
                    this.userFrame = void 0,
                    this.exeTime = void 0,
                    this.caller = void 0,
                    this.method = void 0,
                    this.args = void 0,
                    this.jumpFrame = void 0
                }
                var t = e.prototype;
                return t.clear = function() {
                    this.caller = null,
                    this.method = null,
                    this.args = null
                }
                ,
                t.run = function(e) {
                    var t = this.caller;
                    if (t && t.destroyed)
                        return this.clear();
                    var i = this.method
                      , r = this.args;
                    e && this.clear(),
                    null != i && (r ? i.apply(t, r) : i.call(t))
                }
                ,
                e
            }();
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TimerManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtil.ts", "./Timer.ts"], (function(e) {
    var t, i, n, s, r, o;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            i = e.cclegacy,
            n = e.game,
            s = e.Component
        }
        , function(e) {
            r = e.StringUtil
        }
        , function(e) {
            o = e.Timer
        }
        ],
        execute: function() {
            i._RF.push({}, "73600VLsIBLOKhOhd7td4P8", "TimerManager", void 0);
            e("TimerManager", function(e) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                        n[s] = arguments[s];
                    return (t = e.call.apply(e, [this].concat(n)) || this).times = {},
                    t.date_s = new Date,
                    t.date_s_start = new Date,
                    t.polymeric_s = 0,
                    t.date_c = new Date,
                    t
                }
                t(i, e);
                var s = i.prototype;
                return s.update = function(e) {
                    for (var t in this.times) {
                        var i = this.times[t];
                        i.timer.update(e) && i.object[i.field] > 0 && (i.object[i.field]--,
                        0 == i.object[i.field] ? this.onTimerComplete(i) : i.onSecond && i.onSecond.call(i.object))
                    }
                }
                ,
                s.onTimerComplete = function(e) {
                    e.onComplete && e.onComplete.call(e.target, e.object),
                    e.event && this.node.dispatchEvent(e.event),
                    delete this.times[e.id]
                }
                ,
                s.register = function(e, t, i, n, s) {
                    var a = new o;
                    a.step = 1;
                    var m = {};
                    return m.id = r.guid(),
                    m.timer = a,
                    m.object = e,
                    m.field = t,
                    m.onSecond = n,
                    m.onComplete = s,
                    m.target = i,
                    this.times[m.id] = m,
                    m.id
                }
                ,
                s.unRegister = function(e) {
                    this.times[e] && delete this.times[e]
                }
                ,
                s.setServerTime = function(e) {
                    this.polymeric_s = this.getTime(),
                    this.date_s_start.setTime(e)
                }
                ,
                s.getServerTime = function() {
                    return this.date_s_start.getTime() + this.getTime() - this.polymeric_s
                }
                ,
                s.getServerDate = function() {
                    return this.date_s.setTime(this.getServerTime()),
                    this.date_s
                }
                ,
                s.getClientTime = function() {
                    return Date.now()
                }
                ,
                s.getClientDate = function() {
                    return this.date_c.setTime(this.getClientTime()),
                    this.date_c
                }
                ,
                s.getTime = function() {
                    return n.totalTime
                }
                ,
                s.save = function() {
                    for (var e in this.times)
                        this.times[e].startTime = this.getTime()
                }
                ,
                s.load = function() {
                    for (var e in this.times) {
                        var t = Math.floor((this.getTime() - (this.times[e].startTime || this.getTime())) / 1e3)
                          , i = this.times[e];
                        i.object[i.field] = i.object[i.field] - t,
                        i.object[i.field] <= 0 ? (i.object[i.field] = 0,
                        this.onTimerComplete(i)) : this.times[e].startTime = null
                    }
                }
                ,
                i
            }(s));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TimeUtils.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    var t, n, r;
    return {
        setters: [function(e) {
            t = e.asyncToGenerator,
            n = e.regeneratorRuntime
        }
        , function(e) {
            r = e.cclegacy
        }
        ],
        execute: function() {
            r._RF.push({}, "c2070jsq0FDcaTrFhyA8yzm", "TimeUtils", void 0);
            e("TimeUtil", function() {
                function e() {}
                return e.daysBetween = function(e, t) {
                    null == t && (t = +new Date);
                    var n = new Date(e).toLocaleDateString()
                      , r = new Date(t).toLocaleDateString()
                      , u = new Date(n).getTime()
                      , a = new Date(r).getTime();
                    return Math.abs(u - a) / 864e5
                }
                ,
                e.secsBetween = function(e, t) {
                    var n = Math.abs(t - e) / 1e3;
                    return n = Math.floor(n) + 1
                }
                ,
                e.sleep = function() {
                    var e = t(n().mark((function e(t) {
                        return n().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e) {
                                        setTimeout((function() {
                                            e()
                                        }
                                        ), t)
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                e
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TipsManager.ts", ["cc", "./Oops.ts", "./GameUIConfig.ts"], (function(o) {
    var n, e, t, c, r;
    return {
        setters: [function(o) {
            n = o.cclegacy,
            e = o.tween,
            t = o.Vec3
        }
        , function(o) {
            c = o.oops
        }
        , function(o) {
            r = o.UIID
        }
        ],
        execute: function() {
            n._RF.push({}, "9748eriEcJOp6OSdnZ/qhs5", "TipsManager", void 0);
            var i = o("tips", new (function() {
                function o() {}
                var n = o.prototype;
                return n.alert = function(o, n, e, t) {
                    var f = {
                        title: e || "common_prompt_title",
                        content: o,
                        okWord: t || "common_prompt_ok",
                        okFunc: n,
                        needCancel: !1
                    };
                    c.gui.open(r.Alert, f, i.getPopCommonEffect())
                }
                ,
                n.confirm = function(o, n, e, t, f) {
                    var m = {
                        title: t || "common_prompt_title",
                        content: o,
                        okWord: f || "common_prompt_ok",
                        cancelWord: "common_prompt_cancal",
                        okFunc: n,
                        cancelFunc: e,
                        needCancel: !0
                    };
                    c.gui.open(r.Confirm, m, i.getPopCommonEffect())
                }
                ,
                n.getPopCommonEffect = function(o) {
                    var n = {
                        onAdded: function(o, n) {
                            o.setScale(.1, .1, .1),
                            e(o).to(.2, {
                                scale: new t(1,1,1)
                            }).start()
                        },
                        onBeforeRemove: function(o, n) {
                            e(o).to(.2, {
                                scale: new t(.1,.1,.1)
                            }).call((function() {
                                return n()
                            }
                            )).start()
                        }
                    };
                    if (o) {
                        if (o && o.onAdded) {
                            var c = o.onAdded;
                            o.onAdded = function(o, e) {
                                c(o, e),
                                n.onAdded(o, e)
                            }
                        }
                        if (o && o.onBeforeRemove) {
                            var r = o.onBeforeRemove;
                            o.onBeforeRemove = function(o, e) {
                                r(o, e),
                                n.onBeforeRemove(o, e)
                            }
                        }
                        return o
                    }
                    return n
                }
                ,
                o
            }()));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIButton.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Oops.ts"], (function(t) {
    var e, i, n, o, r, a, u, c, s, p, l, f, h;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            r = t.asyncToGenerator,
            a = t.regeneratorRuntime
        }
        , function(t) {
            u = t.cclegacy,
            c = t._decorator,
            s = t.AudioClip,
            p = t.game,
            l = t.EventHandler,
            f = t.Button
        }
        , function(t) {
            h = t.oops
        }
        ],
        execute: function() {
            var d, y, m, v, _, E, g, b, T, w;
            u._RF.push({}, "86cefAWukVE77lEwgfFdYeD", "UIButton", void 0);
            var B = c.ccclass
              , I = c.property
              , C = c.menu;
            t("default", (d = B("UIButton"),
            y = C("OopsFramework/Button/UIButton （通用按钮）"),
            m = I({
                tooltip: "每次触发间隔"
            }),
            v = I({
                tooltip: "是否只触发一次"
            }),
            _ = I({
                tooltip: "触摸音效",
                type: s
            }),
            d(E = y((b = e((g = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                        r[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    n(e, "interval", b, o(e)),
                    n(e, "once", T, o(e)),
                    n(e, "effect", w, o(e)),
                    e._touchCount = 0,
                    e._touchEndTime = 0,
                    e
                }
                i(e, t);
                var u = e.prototype;
                return u._onTouchEnded = function(t) {
                    if (this._interactable && this.enabledInHierarchy) {
                        if (this._pressed) {
                            if (this.once) {
                                if (this._touchCount > 0)
                                    return void (t.propagationStopped = !0);
                                this._touchCount++
                            }
                            this._touchEndTime && p.totalTime - this._touchEndTime < this.interval ? t.propagationStopped = !0 : (this._touchEndTime = p.totalTime,
                            l.emitEvents(this.clickEvents, t),
                            this.node.emit(f.EventType.CLICK, this),
                            this.playEffect())
                        }
                        this._pressed = !1,
                        this._updateState(),
                        t && (t.propagationStopped = !0)
                    }
                }
                ,
                u.playEffect = function() {
                    var t = r(a().mark((function t() {
                        return a().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    this.effect && h.audio.playEffect(this.effect);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                e
            }(f)).prototype, "interval", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 500
                }
            }),
            T = e(g.prototype, "once", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            w = e(g.prototype, "effect", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = g)) || E) || E));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIConfig.ts", ["cc"], (function() {
    var n;
    return {
        setters: [function(t) {
            n = t.cclegacy
        }
        ],
        execute: function() {
            n._RF.push({}, "41bb5JsqTRFZJxu4vanumEU", "UIConfig", void 0),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIUtil.ts", ["cc", "./Oops.ts", "./MessageManager.ts", "./Enum.ts", "./Timer2.ts"], (function(n) {
    var e, c, t, o, a, l, i, u;
    return {
        setters: [function(n) {
            e = n.cclegacy,
            c = n.isValid,
            t = n.math,
            o = n.Node
        }
        , function(n) {
            a = n.oops
        }
        , function(n) {
            l = n.Message
        }
        , function(n) {
            i = n.EngineMessage
        }
        , function(n) {
            u = n.default
        }
        ],
        execute: function() {
            e._RF.push({}, "5b9e7jwswZEj5wGazMDfesz", "UIUtil", void 0);
            n("default", function() {
                function n() {}
                return n.setClickFunc = function(n, e, l, i, u) {
                    if (void 0 === u && (u = null),
                    c(n, !0)) {
                        var s = n._clickData = n._clickData || {};
                        s.caller && n.targetOff(s.caller),
                        s.soundKey = i || "snd/click",
                        s.caller = e;
                        var r = n.getScale();
                        s.onTouchStart = function() {
                            n.setScale(t.Vec3.clone(r).multiplyScalar(1.05))
                        }
                        ,
                        s.onTouchCancel = function() {
                            n.setScale(r)
                        }
                        ,
                        s.onTouchEnd = function() {
                            return n.setScale(r),
                            a.audio.playEffect(s.soundKey),
                            l.apply(e, u)
                        }
                        ,
                        n.on(o.EventType.MOUSE_LEAVE, s.onTouchCancel, e),
                        n.on(o.EventType.TOUCH_CANCEL, s.onTouchCancel, e),
                        n.on(o.EventType.TOUCH_START, s.onTouchStart, e),
                        n.on(o.EventType.TOUCH_END, s.onTouchEnd, e)
                    }
                }
                ,
                n.setLongClickFunc = function(n, e, a, l, i) {
                    if (void 0 === i && (i = null),
                    c(n, !0)) {
                        var s = n._clickData = n._clickData || {};
                        s.caller && n.targetOff(s.caller),
                        s.soundKey = l || "snd/click",
                        s.caller = e;
                        var r = n.getScale();
                        s.onTouchStart = function() {
                            n.setScale(t.Vec3.clone(r).multiplyScalar(1.05)),
                            u.timerLoop(1, s, (function() {
                                a.apply(e, i)
                            }
                            ))
                        }
                        ,
                        s.onTouchCancel = function() {
                            n.setScale(r),
                            u.clearAll(s)
                        }
                        ,
                        s.onTouchEnd = function() {
                            u.clearAll(s),
                            n.setScale(r)
                        }
                        ,
                        n.on(o.EventType.MOUSE_LEAVE, s.onTouchCancel, e),
                        n.on(o.EventType.TOUCH_CANCEL, s.onTouchCancel, e),
                        n.on(o.EventType.TOUCH_START, s.onTouchStart, e),
                        n.on(o.EventType.TOUCH_END, s.onTouchEnd, e)
                    }
                }
                ,
                n.cancelClickFunc = function(n) {
                    var e;
                    n.targetOff(null == (e = n._clickData) ? void 0 : e.caller)
                }
                ,
                n.setClickIADFun = function(n, e, c, t, o) {
                    void 0 === o && (o = null),
                    this.setClickFunc(n, e, (function() {
                        "undefined" != typeof YYGGames ? (console.error("========插屏广告========"),
                        c.apply(e, o)) : c.apply(e, o)
                    }
                    ), t, o)
                }
                ,
                n.setClickRADFunc = function(n, e, c, t, o) {
                    void 0 === o && (o = null),
                    this.setClickFunc(n, e, (function() {
                        window.unShowAD || ("undefined" != typeof YYGGames ? (console.error("========激励广告========"),
                        YYGGames.rewardReady ? YYGGames.showReward({
                            beforeShowAd: function() {
                                l.dispatchEvent(i.GAME_ADBEFORE)
                            },
                            afterShowAd: function() {
                                l.dispatchEvent(i.GAME_ADAFTER)
                            },
                            complete: function(n) {
                                n ? c.apply(e, o) : a.gui.toast("Pls watch the ad completely, so that you can claim your reward", !1)
                            }
                        }) : a.gui.toast("No Available Video", !1)) : c.apply(e, o))
                    }
                    ), t, o)
                }
                ,
                n
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UpgradeItemComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ECS.ts", "./CCComp.ts", "./UIUtil.ts", "./SingletonModuleComp.ts", "./VMLabel.ts", "./Oops.ts", "./TableRoleSkill.ts", "./LanguageData.ts", "./MessageManager.ts", "./Enum.ts", "./VMLabelRewrite.ts", "./Timer2.ts"], (function(t) {
    var e, i, n, a, l, s, o, r, c, u, h, p, v, g, m, d, B, b, k, L, f, x, T;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            a = t.assertThisInitialized
        }
        , function(t) {
            l = t.cclegacy,
            s = t._decorator,
            o = t.Node,
            r = t.Sprite,
            c = t.Label,
            u = t.SpriteFrame,
            h = t.ParticleSystem2D
        }
        , function(t) {
            p = t.ecs
        }
        , function(t) {
            v = t.CCComp
        }
        , function(t) {
            g = t.default
        }
        , function(t) {
            m = t.smc
        }
        , function(t) {
            d = t.default
        }
        , function(t) {
            B = t.oops
        }
        , function(t) {
            b = t.TableRoleSkill
        }
        , function(t) {
            k = t.LanguageData
        }
        , function(t) {
            L = t.Message
        }
        , function(t) {
            f = t.EngineMessage
        }
        , function(t) {
            x = t.VMLabelRewrite
        }
        , function(t) {
            T = t.default
        }
        ],
        execute: function() {
            var y, C, N, S, R, w, M, I, D, _, z, A, P, U, E, F, G, H, K, O, V, j, J, Y;
            l._RF.push({}, "5faebhvYPlFJ6FK4gHT7h2h", "UpgradeItemComp", void 0);
            var q = s.ccclass
              , Q = s.property;
            t("UpgradeItemComp", (y = q("UpgradeItemComp"),
            C = p.register("UpgradeItem", !1),
            N = Q(o),
            S = Q(o),
            R = Q(r),
            w = Q(o),
            M = Q(o),
            I = Q(o),
            D = Q(o),
            _ = Q(o),
            z = Q(o),
            A = Q(o),
            y(P = C((E = e((U = function(t) {
                function e() {
                    for (var e, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
                        l[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(l)) || this,
                    n(e, "nameNd", E, a(e)),
                    n(e, "lvNd", F, a(e)),
                    n(e, "iconSprite", G, a(e)),
                    n(e, "upRes", H, a(e)),
                    n(e, "costNd", K, a(e)),
                    n(e, "upgradeBtn", O, a(e)),
                    n(e, "lockBtn", V, a(e)),
                    n(e, "maxBtn", j, a(e)),
                    n(e, "nextBtn", J, a(e)),
                    n(e, "animNode", Y, a(e)),
                    e.skillTable = void 0,
                    e.upgradeType = !1,
                    e.animation1 = void 0,
                    e.currentLv = 0,
                    e.previousLv = 0,
                    e.previousNextLv = 0,
                    e
                }
                i(e, t);
                var l = e.prototype;
                return l.init = function(t) {
                    var e = this;
                    this.node.active = !1,
                    this.skillTable = new b,
                    this.skillTable.init(t),
                    this.nameNd.getComponent(c).string = k.getLangByID(this.skillTable.name),
                    this.nextBtn.getComponentInChildren(c).string = k.getLangByID("unlock_lv"),
                    this.lvNd.getComponent(d).watchPathArr[0] = "RoleSkill.lv" + this.skillTable.id;
                    var i = m.account.AccountModel.role;
                    this.costNd.getComponent(x).watchPathArr[0] = "RoleSkill.cost" + this.skillTable.id,
                    0 == this.skillTable.DPS ? (this.upRes.getComponent(x).originText = k.getLangByID("per_sec"),
                    this.upRes.getComponent(x).watchPathArr[0] = "RoleSkill.DOT" + this.skillTable.id) : (this.upRes.getComponent(x).originText = k.getLangByID("per_click"),
                    this.upRes.getComponent(x).watchPathArr[0] = "RoleSkill.DPS" + this.skillTable.id),
                    this.previousNextLv = i.RoleModelSkill.vm.getNumber("lv" + (t - 2)),
                    this.previousLv = i.RoleModelSkill.vm.getNumber("lv" + (t - 1)),
                    this.currentLv = i.RoleModelSkill.vm.getNumber("lv" + t),
                    null == this.previousLv ? this.currentLv == this.skillTable.maxLv ? (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !0,
                    this.nextBtn.active = !1) : (this.upgradeBtn.active = !0,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !1) : null == this.previousNextLv ? this.currentLv == this.skillTable.maxLv ? (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !0,
                    this.nextBtn.active = !1) : this.previousLv >= 50 ? (this.upgradeBtn.active = !0,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !1) : (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !0) : this.currentLv == this.skillTable.maxLv ? (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !0,
                    this.nextBtn.active = !1) : this.previousLv >= 50 ? (this.upgradeBtn.active = !0,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !1) : this.previousNextLv >= 50 ? (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !0) : (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !0,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !1),
                    B.res.load(this.skillTable.image + "/spriteFrame", u, (function(t, i) {
                        e.iconSprite.spriteFrame = i,
                        e.node.active = !0
                    }
                    ))
                }
                ,
                l.start = function() {
                    g.setClickFunc(this.upgradeBtn, this, this.skillUpgrade),
                    L.on(f.GAME_SKILL_CHANGE, this.change, this),
                    this.animation1 = this.animNode.getComponent(h)
                }
                ,
                l.change = function(t, e) {
                    this.skillTable.id == e + 1 && (this.previousLv++,
                    this.previousLv >= 50 && (this.upgradeBtn.active = !0,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !1)),
                    this.skillTable.id == e + 2 && (this.previousNextLv++,
                    this.previousNextLv >= 50 && this.previousLv < 50 && (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !1,
                    this.nextBtn.active = !0))
                }
                ,
                l.reset = function() {
                    this.node.destroy()
                }
                ,
                l.skillUpgrade = function() {
                    var t = this
                      , e = m.account.AccountModel.role
                      , i = e.RoleModelSkill.vm.getNumber("cost" + this.skillTable.id);
                    e.RoleModelBase.coin < i ? B.gui.toast(k.getLangByID("not_enough_coins"), !0) : this.upgradeType || (this.upgradeType = !0,
                    L.dispatchEvent(f.GAME_SKILL_CHANGE, this.skillTable.id),
                    this.currentLv++,
                    this.currentLv == this.skillTable.maxLv && (this.upgradeBtn.active = !1,
                    this.lockBtn.active = !1,
                    this.maxBtn.active = !0),
                    this.animation1.resetSystem(),
                    e.reduceCoins(i),
                    e.skillUpgrade(this.skillTable.id),
                    T.timerOnce(100, this, (function() {
                        t.upgradeType = !1
                    }
                    )))
                }
                ,
                e
            }(v)).prototype, "nameNd", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            F = e(U.prototype, "lvNd", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            G = e(U.prototype, "iconSprite", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            H = e(U.prototype, "upRes", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            K = e(U.prototype, "costNd", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            O = e(U.prototype, "upgradeBtn", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            V = e(U.prototype, "lockBtn", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            j = e(U.prototype, "maxBtn", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            J = e(U.prototype, "nextBtn", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Y = e(U.prototype, "animNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            P = U)) || P) || P));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Utils.ts", ["cc"], (function(e) {
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "0d0ecy7KEpEkpk7vlbw1JC/", "Utils", void 0);
            var r = 1;
            e("default", function() {
                function e() {}
                return e.getGID = function() {
                    return r++
                }
                ,
                e.typeof = function(e) {
                    return {
                        "[object Boolean]": "boolean",
                        "[object Number]": "number",
                        "[object String]": "string",
                        "[object Function]": "function",
                        "[object Array]": "array",
                        "[object Date]": "date",
                        "[object RegExp]": "regExp",
                        "[object Undefined]": "undefined",
                        "[object Null]": "null",
                        "[object Object]": "object"
                    }[Object.prototype.toString.call(e)]
                }
                ,
                e.clone = function(t) {
                    var r, o = e.typeof(t);
                    if ("object" === o)
                        r = {};
                    else {
                        if ("array" !== o)
                            return t;
                        r = []
                    }
                    if ("array" === o)
                        for (var a = 0, n = t.length; a < n; a++)
                            r.push(e.clone(t[a]));
                    else if ("object" === o)
                        for (var l in t)
                            r[l] = e.clone(t[l]);
                    return r
                }
                ,
                e.formatTime = function(e) {
                    var t = e % 60
                      , r = "";
                    return r += Math.floor(e % 3600 / 60).toString().padStart(2, "0") + ":",
                    r += t.toString().padStart(2, "0") + ""
                }
                ,
                e.shuffleArray = function(e) {
                    for (var t = [].concat(e), r = t.length - 1; r > 0; r--) {
                        var o = Math.floor(Math.random() * (r + 1))
                          , a = [t[o], t[r]];
                        t[r] = a[0],
                        t[o] = a[1]
                    }
                    return t
                }
                ,
                e.getUrlParam = function(e) {
                    return new URLSearchParams(window.location.search).get(e)
                }
                ,
                e.percentToDecimal = function(e) {
                    if ("string" != typeof e)
                        throw new TypeError("输入必须为字符串类型");
                    var t = e.trim();
                    if (!t.endsWith("%"))
                        throw new Error('输入字符串必须以 "%" 结尾');
                    var r = t.slice(0, -1).trim()
                      , o = parseFloat(r);
                    if (isNaN(o))
                        throw new Error('无法解析数值部分："' + r + '"');
                    if (o < 0 || o > 100)
                        throw new RangeError("百分比数值应在 0 到 100 之间");
                    return o / 100
                }
                ,
                e.parseNumber = function(e) {
                    var t = e.trim().toLowerCase()
                      , r = {
                        t: 1e12,
                        b: 1e9,
                        m: 1e6,
                        k: 1e3
                    }
                      , o = t.slice(-1);
                    return r.hasOwnProperty(o) ? parseFloat(t.slice(0, -1)) * r[o] : parseFloat(t)
                }
                ,
                e.formatNumber = function(e, t) {
                    if (void 0 === t && (t = 1),
                    isNaN(e))
                        return "0";
                    for (var r = 0, o = [{
                        value: 1e12,
                        symbol: "t"
                    }, {
                        value: 1e9,
                        symbol: "b"
                    }, {
                        value: 1e6,
                        symbol: "m"
                    }, {
                        value: 1e3,
                        symbol: "k"
                    }]; r < o.length; r++) {
                        var a = o[r];
                        if (Math.abs(e) >= a.value)
                            return t = e % a.value == 0 ? 0 : t,
                            (e / a.value).toFixed(t) + a.symbol
                    }
                    return e.toFixed(0)
                }
                ,
                e.formatNumberTo3Fixed = function(e, t) {
                    if (void 0 === t && (t = !1),
                    isNaN(e))
                        return "0";
                    for (var r = 0, o = [{
                        value: 1e30,
                        symbol: "gg"
                    }, {
                        value: 1e27,
                        symbol: "ff"
                    }, {
                        value: 1e24,
                        symbol: "dd"
                    }, {
                        value: 1e21,
                        symbol: "cc"
                    }, {
                        value: 1e18,
                        symbol: "bb"
                    }, {
                        value: 1e15,
                        symbol: "aa"
                    }, {
                        value: 1e12,
                        symbol: "t"
                    }, {
                        value: 1e9,
                        symbol: "b"
                    }, {
                        value: 1e6,
                        symbol: "m"
                    }, {
                        value: 1e3,
                        symbol: "k"
                    }]; r < o.length; r++) {
                        var a = o[r];
                        if (Math.abs(e) >= a.value) {
                            var n = Math.floor(e / a.value);
                            return n >= 100 ? this.ceilToDecimal(e / a.value, 0, t) + a.symbol : n >= 10 ? this.ceilToDecimal(e / a.value, 1, t) + a.symbol : this.ceilToDecimal(e / a.value, 2, t) + a.symbol
                        }
                    }
                    return e.toFixed(0)
                }
                ,
                e.ceilToDecimal = function(e, t, r) {
                    var o = Math.pow(10, t);
                    return r ? Math.ceil(e * o) / o + "" : (Math.trunc(e * o) / o).toFixed(t)
                }
                ,
                e.prototype.keepTwoDecimalsAsString = function(e) {
                    return (Math.trunc(100 * e) / 100).toFixed(2)
                }
                ,
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Vec3Util.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MathUtil.ts"], (function(n) {
    var e, r, t, u, a;
    return {
        setters: [function(n) {
            e = n.createClass
        }
        , function(n) {
            r = n.cclegacy,
            t = n.Vec3,
            u = n.Mat4
        }
        , function(n) {
            a = n.MathUtil
        }
        ],
        execute: function() {
            r._RF.push({}, "38947ih8d5EQ7HG4buug+SR", "Vec3Util", void 0);
            n("Vec3Util", function() {
                function n() {}
                return n.progress = function(n, e, r) {
                    var u = new t;
                    return u.x = a.progress(n.x, e.x, r),
                    u.y = a.progress(n.y, e.y, r),
                    u.z = a.progress(n.z, e.z, r),
                    u
                }
                ,
                n.add = function(n, e) {
                    var r = new t;
                    return t.add(r, n, e),
                    r
                }
                ,
                n.sub = function(n, e) {
                    var r = new t;
                    return t.subtract(r, n, e),
                    r
                }
                ,
                n.mul = function(n, e) {
                    var r = new t;
                    return t.multiplyScalar(r, n, e),
                    r
                }
                ,
                n.div = function(n, e) {
                    var r = new t;
                    return r.x = n.x / e,
                    r.y = n.y / e,
                    r.z = n.z / e,
                    r
                }
                ,
                n.equals = function(n, e) {
                    return n.x == e.x && n.y == e.y && n.z == e.z
                }
                ,
                n.magnitude = function(n) {
                    return n.length()
                }
                ,
                n.normalize = function(n) {
                    return new t(n.x,n.y,n.z).normalize()
                }
                ,
                n.direction = function(n, e) {
                    var r = new t;
                    return t.subtract(r, e, n),
                    r.normalize()
                }
                ,
                n.distance = function(n, e) {
                    return t.distance(n, e)
                }
                ,
                n.lerp = function(n, e, r) {
                    return this.bezierOne(r, n, e)
                }
                ,
                n.slerp = function(n, e, r) {
                    if (r <= 0)
                        return n;
                    if (r >= 1)
                        return e;
                    var u = this.rotateTo(n, e, t.angle(n, e) / Math.PI * 180 * r)
                      , a = e.length() * r + n.length() * (1 - r);
                    return u.normalize().multiplyScalar(a)
                }
                ,
                n.rotateTo = function(n, e, r) {
                    if (0 == t.angle(n, e))
                        return e;
                    var a = new t;
                    t.cross(a, n, e),
                    a.normalize();
                    var i = r * Math.PI / 180
                      , l = new u;
                    return l.rotate(i, a),
                    new t(n.x * l.m00 + n.y * l.m04 + n.z * l.m08,n.x * l.m01 + n.y * l.m05 + n.z * l.m09,n.x * l.m02 + n.y * l.m06 + n.z * l.m10)
                }
                ,
                n.bezierOne = function(n, e, r) {
                    n > 1 ? n = 1 : n < 0 && (n = 0);
                    var t = e.clone()
                      , u = r.clone();
                    return t.multiplyScalar(1 - n).add(u.multiplyScalar(n))
                }
                ,
                n.bezierTwo = function(n, e, r, u) {
                    n > 1 ? n = 1 : n < 0 && (n = 0);
                    var a = 1 - n
                      , i = n * n
                      , l = e.clone()
                      , o = new t
                      , c = r.clone()
                      , y = u.clone();
                    return o.add(l.multiplyScalar(a * a)),
                    o.add(c.multiplyScalar(2 * a * n)),
                    o.add(y.multiplyScalar(i)),
                    o
                }
                ,
                n.bezierThree = function(n, e, r, t, u) {
                    n > 1 ? n = 1 : n < 0 && (n = 0);
                    var a = 1 - n
                      , i = a * a
                      , l = i * a
                      , o = n * n
                      , c = o * n
                      , y = e.clone()
                      , f = e.clone()
                      , s = r.clone()
                      , d = t.clone()
                      , m = u.clone();
                    return f.add(y.multiplyScalar(l)),
                    f.add(s.multiplyScalar(3 * i * n)),
                    f.add(d.multiplyScalar(3 * a * o)),
                    f.add(m.multiplyScalar(c)),
                    f
                }
                ,
                n.dot = function(n, e) {
                    var r = n
                      , t = e;
                    return r.x * t.x + r.y * t.y + r.z * t.z
                }
                ,
                n.cross = function(n, e) {
                    var r = new t(1,0,0)
                      , u = new t(0,1,0)
                      , a = new t(0,0,1)
                      , i = new t(n.x,n.y,n.z)
                      , l = new t(e.x,e.y,e.z)
                      , o = r.multiplyScalar(i.y * l.z - l.y * i.z)
                      , c = u.multiplyScalar(l.x * i.z - i.x * l.z)
                      , y = a.multiplyScalar(i.x * l.y - l.x * i.y);
                    return o.add(c).add(y)
                }
                ,
                n.angle = function(n, e) {
                    var r = this.dot(n.clone().normalize(), e.clone().normalize());
                    return Math.acos(r) / Math.PI * 180 * Math.sign(r)
                }
                ,
                n.dirAngle = function(e, r) {
                    var t = n.cross(e, r);
                    return n.angle(e, r) * Math.sign(n.dot(t.normalize(), n.cross(r.normalize(), e.normalize())))
                }
                ,
                e(n, null, [{
                    key: "x",
                    get: function() {
                        return new t(1,0,0)
                    }
                }, {
                    key: "y",
                    get: function() {
                        return new t(0,1,0)
                    }
                }, {
                    key: "z",
                    get: function() {
                        return new t(0,0,1)
                    }
                }, {
                    key: "left",
                    get: function() {
                        return new t(-1,0,0)
                    }
                }, {
                    key: "right",
                    get: function() {
                        return new t(1,0,0)
                    }
                }, {
                    key: "up",
                    get: function() {
                        return new t(0,1,0)
                    }
                }, {
                    key: "down",
                    get: function() {
                        return new t(0,-1,0)
                    }
                }, {
                    key: "forward",
                    get: function() {
                        return new t(0,0,1)
                    }
                }, {
                    key: "back",
                    get: function() {
                        return new t(0,0,-1)
                    }
                }, {
                    key: "one",
                    get: function() {
                        return new t(1,1,1)
                    }
                }, {
                    key: "zero",
                    get: function() {
                        return new t(0,0,0)
                    }
                }]),
                n
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VideoPanelComp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUIConfig.ts", "./UIUtil.ts", "./CCComp.ts", "./ECS.ts", "./Oops.ts", "./SingletonModuleComp.ts", "./ModuleUtil.ts", "./Timer2.ts", "./LanguageData.ts", "./MessageManager.ts", "./Enum.ts"], (function(e) {
    var n, t, i, o, r, a, l, s, c, u, d, h, p, f, g, m, v, w, y, b, S, C, P, E, z;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            i = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            a = e._decorator,
            l = e.Node,
            s = e.Label,
            c = e.Texture2D,
            u = e.SpriteFrame,
            d = e.Sprite,
            h = e.VideoPlayer,
            p = e.UITransform,
            f = e.Vec3
        }
        , function(e) {
            g = e.UIID
        }
        , function(e) {
            m = e.default
        }
        , function(e) {
            v = e.CCComp
        }
        , function(e) {
            w = e.ecs
        }
        , function(e) {
            y = e.oops
        }
        , function(e) {
            b = e.smc
        }
        , function(e) {
            S = e.ModuleUtil
        }
        , function(e) {
            C = e.default
        }
        , function(e) {
            P = e.LanguageData
        }
        , function(e) {
            E = e.Message
        }
        , function(e) {
            z = e.EngineMessage
        }
        ],
        execute: function() {
            var A, M, R, N, k, L, U, D, B, I, _, V, T, F, O, x, G, J;
            r._RF.push({}, "4fcc8NQXrREwpXdvsb8Ie7N", "VideoPanelComp", void 0);
            var W = a.ccclass
              , X = a.property;
            e("VideoPanelComp", (A = W("VideoPanelComp"),
            M = w.register("VideoPanel", !1),
            R = X(l),
            N = X(l),
            k = X(l),
            L = X(l),
            U = X(s),
            D = X(s),
            B = X(l),
            A(I = M((V = n((_ = function(e) {
                function n() {
                    for (var n, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                        r[a] = arguments[a];
                    return n = e.call.apply(e, [this].concat(r)) || this,
                    i(n, "closeBtn", V, o(n)),
                    i(n, "content", T, o(n)),
                    i(n, "loadNode", F, o(n)),
                    i(n, "ren", O, o(n)),
                    i(n, "renName", x, o(n)),
                    i(n, "connection", G, o(n)),
                    i(n, "videoNode", J, o(n)),
                    n.videoPlayer = null,
                    n.shakeAngle = 5,
                    n.scaleRatio = 1.05,
                    n.shakeDuration = .2,
                    n.isShaking = !1,
                    n.shakeTween = null,
                    n
                }
                t(n, e);
                var r = n.prototype;
                return r.onAdded = function(e) {
                    return !0
                }
                ,
                r.onLoad = function() {
                    this.videoNode.setScale(0, 0, 1),
                    m.setClickFunc(this.closeBtn, this, this.closeUI)
                }
                ,
                r.onEnable = function() {
                    var e = this
                      , n = b.account.AccountModel.role
                      , t = n.RoleModelJob.image
                      , i = n.RoleModelJob.video;
                    this.startShake(),
                    this.renName.string = n.RoleModelJob.name;
                    var o = window.BASE_URL + "/" + t
                      , r = new c;
                    r.image = window.REMOTE_URL[o];
                    var a = new u;
                    a.texture = r,
                    this.ren.getComponentInChildren(d).spriteFrame = a;
                    var l = window.BASE_URL + "/" + i;
                    this.videoPlayer = this.videoNode.getComponent(h),
                    this.videoPlayer.remoteURL = l;
                    var s = this.videoPlayer.node.parent.getComponent(p).contentSize;
                    this.videoPlayer.node.once(h.EventType.READY_TO_PLAY, (function(n) {
                        var t = n.getComponent(p)
                          , i = Math.min(s.width / t.width, s.height / t.height);
                        e.videoPlayer.node.setScale(i, i, 1),
                        e.stopShake(),
                        e.loadNode.active = !1,
                        e.videoPlayer.play()
                    }
                    ), this),
                    window.addEventListener("resize", (function() {
                        e.onWindowResized()
                    }
                    )),
                    C.frameOnce(2, this, (function() {
                        e.initSize()
                    }
                    ))
                }
                ,
                r.onWindowResized = function() {
                    this.initSize();
                    var e = this.videoPlayer.node.parent.getComponent(p).contentSize
                      , n = this.videoPlayer.getComponent(p)
                      , t = Math.min(e.width / n.width, e.height / n.height);
                    this.videoPlayer.node.setScale(t, t, 1)
                }
                ,
                r.initSize = function() {
                    var e = this.node.getComponent(p)
                      , n = 1;
                    n = e.width / e.height > 450 / 734 ? e.height / 734 : e.width / 450,
                    this.content.setScale(n, n, 1)
                }
                ,
                r.closeUI = function() {
                    C.clearAll(this),
                    E.dispatchEvent(z.GAME_ADAFTER),
                    this.ent.remove(n),
                    S.removeViewUi(this.ent, n, g.VideoPanel)
                }
                ,
                r.reset = function() {
                    y.gui.remove(g.VideoPanel, !0)
                }
                ,
                r.onDestroy = function() {
                    console.log("释放角色信息界面")
                }
                ,
                r.startShake = function() {
                    var e = this;
                    if (!this.isShaking) {
                        this.isShaking = !0;
                        this.closeBtn.eulerAngles.clone(),
                        this.closeBtn.scale.clone();
                        this.loadNode.active = !0;
                        var n = 0;
                        C.timerLoop(300, this, (function() {
                            n++,
                            e.connection.string = P.getLangByID("connection") + "...".substring(0, n),
                            n >= 3 && (n = 0)
                        }
                        ))
                    }
                }
                ,
                r.stopShake = function() {
                    this.isShaking && (this.isShaking = !1,
                    C.clearAll(this),
                    E.dispatchEvent(z.GAME_ADBEFORE),
                    this.loadNode.active = !1,
                    this.closeBtn.eulerAngles = new f(0,0,0),
                    this.closeBtn.scale = new f(1,1,1))
                }
                ,
                n
            }(v)).prototype, "closeBtn", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = n(_.prototype, "content", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = n(_.prototype, "loadNode", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = n(_.prototype, "ren", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = n(_.prototype, "renName", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = n(_.prototype, "connection", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = n(_.prototype, "videoNode", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = _)) || I) || I));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ViewModel.ts", ["cc", "./JsonOb.ts"], (function(t) {
    var e, n, i;
    return {
        setters: [function(t) {
            e = t.cclegacy,
            n = t.director
        }
        , function(t) {
            i = t.JsonOb
        }
        ],
        execute: function() {
            e._RF.push({}, "54f75k4X+RP0qaXOzrfZysL", "ViewModel", void 0);
            var o = "VC:";
            function r(t, e, n, i) {
                void 0 === i && (i = "");
                for (var o = e.split("."), r = 0; r < o.length; r++) {
                    var a = o[r];
                    if (a in t == !1) {
                        console.error("[" + a + "] not find in " + i + "." + e);
                        break
                    }
                    r == o.length - 1 ? t[a] = n : t = t[a]
                }
            }
            function a(t, e, n, i) {
                void 0 === i && (i = "");
                for (var o = e.split("."), r = 0; r < o.length; r++) {
                    var a = o[r];
                    if (a in t == !1)
                        return console.error("[" + a + "] not find in " + i + "." + e),
                        n;
                    t = t[a]
                }
                return null == t && (t = n),
                t
            }
            var s = function() {
                function t(t, e) {
                    this.$data = void 0,
                    this._tag = null,
                    this.active = !0,
                    this.emitToRootPath = !1,
                    new i(t,this._callback.bind(this)),
                    this.$data = t,
                    this._tag = e
                }
                var e = t.prototype;
                return e._callback = function(t, e, i) {
                    if (1 == this.active) {
                        var r = o + this._tag + "." + i.join(".");
                        if (n.emit(r, t, e, [this._tag].concat(i)),
                        this.emitToRootPath && n.emit(o + this._tag, t, e, i),
                        i.length >= 2)
                            for (var a = 0; a < i.length - 1; a++)
                                i[a]
                    }
                }
                ,
                e.setValue = function(t, e) {
                    r(this.$data, t, e, this._tag)
                }
                ,
                e.getValue = function(t, e) {
                    return a(this.$data, t, e, this._tag)
                }
                ,
                t
            }();
            t("VM", new (function() {
                function t() {
                    this._mvs = new Map,
                    this.setObjValue = r,
                    this.getObjValue = a
                }
                var e = t.prototype;
                return e.add = function(t, e, n) {
                    void 0 === e && (e = "global"),
                    void 0 === n && (n = !1);
                    var i = new s(t,e)
                      , o = this._mvs.get(e);
                    e.includes(".") ? console.error("cant write . in tag:", e) : o ? console.error("already set VM tag:" + e) : (i.emitToRootPath = n,
                    this._mvs.set(e, i))
                }
                ,
                e.remove = function(t) {
                    this._mvs.delete(t)
                }
                ,
                e.get = function(t) {
                    return this._mvs.get(t)
                }
                ,
                e.addValue = function(t, e) {
                    var n = (t = t.trim()).split(".");
                    n.length < 2 && console.error("Cant find path:" + t);
                    var i = this.get(n[0]);
                    if (i) {
                        var o = n.slice(1).join(".");
                        i.setValue(o, i.getValue(o) + e)
                    } else
                        console.error("Cant Set VM:" + n[0])
                }
                ,
                e.getValue = function(t, e) {
                    var n = (t = t.trim()).split(".");
                    if (n.length < 2)
                        console.error("Get Value Cant find path:" + t);
                    else {
                        var i = this.get(n[0]);
                        if (i)
                            return i.getValue(n.slice(1).join("."), e);
                        console.error("Cant Get VM:" + n[0])
                    }
                }
                ,
                e.setValue = function(t, e) {
                    var n = (t = t.trim()).split(".");
                    if (n.length < 2)
                        console.error("Set Value Cant find path:" + t);
                    else {
                        var i = this.get(n[0]);
                        i ? i.setValue(n.slice(1).join("."), e) : console.error("Cant Set VM:" + n[0])
                    }
                }
                ,
                e.bindPath = function(t, e, i, r) {
                    "" != (t = t.trim()) ? "*" !== t.split(".")[0] ? n.on(o + t, e, i, r) : console.error(t, "路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本") : console.error(i.node.name, "节点绑定的路径为空")
                }
                ,
                e.unbindPath = function(t, e, i) {
                    "*" !== (t = t.trim()).split(".")[0] ? n.off(o + t, e, i) : console.error(t, "路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本")
                }
                ,
                e.inactive = function() {
                    this._mvs.forEach((function(t) {
                        t.active = !1
                    }
                    ))
                }
                ,
                e.active = function() {
                    this._mvs.forEach((function(t) {
                        t.active = !1
                    }
                    ))
                }
                ,
                t
            }()));
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ViewUtil.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResLoader.ts"], (function(e) {
    var n, t, o, r, a, i, c, u, l, f, s;
    return {
        setters: [function(e) {
            n = e.asyncToGenerator,
            t = e.regeneratorRuntime
        }
        , function(e) {
            o = e.cclegacy,
            r = e.UITransform,
            a = e.v3,
            i = e.Size,
            c = e.Prefab,
            u = e.instantiate,
            l = e.Animation,
            f = e.AnimationClip
        }
        , function(e) {
            s = e.resLoader
        }
        ],
        execute: function() {
            o._RF.push({}, "f607cCjAEZHVKVZ/FyRs5bA", "ViewUtil", void 0);
            e("ViewUtil", function() {
                function e() {}
                return e.nodeTreeInfoLite = function(n, t) {
                    for (var o = t || new Map, r = n.children, a = 0; a < r.length; a++) {
                        var i = r[a];
                        i.name.length > 0 && (o.has(i.name) ? console.error("使用ViewUtil.nodeTreeInfoLite方法时发现重复的节点名称【" + i.name + "】") : o.set(i.name, i)),
                        e.nodeTreeInfoLite(i, o)
                    }
                    return o
                }
                ,
                e.findNodes = function(n, t, o) {
                    for (var r = o || [], a = t.children, i = 0; i < a.length; i++) {
                        var c = a[i].name;
                        n.test(c) && r.push(a[i]),
                        e.findNodes(n, a[i], r)
                    }
                    return r
                }
                ,
                e.calculateASpaceToBSpacePos = function(e, n, t) {
                    var o = e.getComponent(r).convertToWorldSpaceAR(t);
                    return n.getComponent(r).convertToNodeSpaceAR(o)
                }
                ,
                e.calculateScreenPosToSpacePos = function(e, n) {
                    var t = e.getUILocation()
                      , o = a(t.x, t.y);
                    return n.getComponent(r).convertToNodeSpaceAR(o)
                }
                ,
                e.uniformScale = function(e, n, t, o) {
                    var r, a = t / e, c = o / n;
                    return r = a < c ? a : c,
                    new i(Math.floor(e * r),Math.floor(n * r))
                }
                ,
                e.createPrefabNode = function(e, n) {
                    void 0 === n && (n = s.defaultBundleName);
                    var t = s.get(e, c, n);
                    return t ? u(t) : null
                }
                ,
                e.createPrefabNodeAsync = function(e, o) {
                    return void 0 === o && (o = s.defaultBundleName),
                    new Promise(n(t().mark((function n(r, a) {
                        var i;
                        return t().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    s.loadAsync(o, e, c);
                                case 2:
                                    (i = n.sent) ? r(u(i)) : (console.error("名为【" + e + "】的资源加载失败"),
                                    r(null));
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    ))))
                }
                ,
                e.addNodeAnimation = function(e, n, t, o) {
                    if (void 0 === t && (t = !0),
                    void 0 === o && (o = !1),
                    n && n.isValid) {
                        var r = n.getComponent(l);
                        null == r && (r = n.addComponent(l));
                        var a = s.get(e, f);
                        if (a && !(t && r.getState(a.name) && r.getState(a.name).isPlaying)) {
                            if (o)
                                return r.defaultClip = a,
                                void r.play();
                            r.once(l.EventType.FINISHED, (function() {
                                r.defaultClip && r.play()
                            }
                            ), this),
                            r.getState(a.name) || r.createState(a, a.name),
                            r.play(a.name)
                        }
                    }
                }
                ,
                e
            }());
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMBase.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ViewModel.ts", "./VMEnv.ts"], (function(t) {
    var n, e, i, a, h, o, r;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy,
            i = t._decorator,
            a = t.log,
            h = t.Component
        }
        , function(t) {
            o = t.VM
        }
        , function(t) {
            r = t.VMEnv
        }
        ],
        execute: function() {
            var s;
            e._RF.push({}, "2f6f36IvUdPO7xynnVTPgzb", "VMBase", void 0);
            var c = i.ccclass
              , l = i.help;
            t("VMBase", c(s = l("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037631&doc_id=2873565")(s = function(t) {
                function e() {
                    for (var n, e = arguments.length, i = new Array(e), a = 0; a < e; a++)
                        i[a] = arguments[a];
                    return (n = t.call.apply(t, [this].concat(i)) || this).VM = o,
                    n.watchPath = "",
                    n.templateMode = !1,
                    n.watchPathArr = [],
                    n.templateValueArr = [],
                    n
                }
                n(e, t);
                var i = e.prototype;
                return i.onLoad = function() {
                    var t = this;
                    if (!r.editor) {
                        for (var n = this.watchPath.split("."), e = 1; e < n.length; e++) {
                            if ("*" == n[e]) {
                                var i = this.node.parent.children.findIndex((function(n) {
                                    return n === t.node
                                }
                                ));
                                i <= 0 && (i = 0),
                                n[e] = i.toString();
                                break
                            }
                        }
                        this.watchPath = n.join(".");
                        var h = this.watchPathArr;
                        if (h.length >= 1)
                            for (var o = 0; o < h.length; o++) {
                                for (var s = h[o].split("."), c = 1; c < s.length; c++) {
                                    if ("*" == s[c]) {
                                        var l = this.node.parent.children.findIndex((function(n) {
                                            return n === t.node
                                        }
                                        ));
                                        l <= 0 && (l = 0),
                                        s[c] = l.toString();
                                        break
                                    }
                                }
                                this.watchPathArr[o] = s.join(".")
                            }
                        "" == this.watchPath && "" == this.watchPathArr.join("") && a("可能未设置路径的节点:", this.node.parent.name + "." + this.node.name)
                    }
                }
                ,
                i.onEnable = function() {
                    r.editor || (this.templateMode ? this.setMultPathEvent(!0) : "" != this.watchPath && this.VM.bindPath(this.watchPath, this.onValueChanged, this),
                    this.onValueInit())
                }
                ,
                i.onDisable = function() {
                    r.editor || (this.templateMode ? this.setMultPathEvent(!1) : "" != this.watchPath && this.VM.unbindPath(this.watchPath, this.onValueChanged, this))
                }
                ,
                i.setMultPathEvent = function(t) {
                    if (void 0 === t && (t = !0),
                    !r.editor)
                        for (var n = this.watchPathArr, e = 0; e < n.length; e++) {
                            var i = n[e];
                            t ? this.VM.bindPath(i, this.onValueChanged, this) : this.VM.unbindPath(i, this.onValueChanged, this)
                        }
                }
                ,
                i.onValueInit = function() {}
                ,
                i.onValueChanged = function(t, n, e) {}
                ,
                e
            }(h)) || s) || s);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMCompsEdit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMEnv.ts"], (function(e) {
    var t, r, o, i, n, a, c, l, s, p, u, h, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            o = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            n = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            c = e._decorator,
            l = e.CCString,
            s = e.Enum,
            p = e.Node,
            u = e.log,
            h = e.Component
        }
        , function(e) {
            f = e.VMEnv
        }
        ],
        execute: function() {
            var _, g, d, E, y, T, P, b, C, N, O, v, m, A, w, M, L, k, H, D, R, j, z;
            a._RF.push({}, "2359eFXKF5HFYS74K7Y17/U", "VMCompsEdit", void 0);
            var S = c.ccclass
              , V = c.property
              , F = c.executeInEditMode
              , B = c.menu
              , W = c.help
              , x = function(e) {
                return e[e.SEARCH_COMPONENT = 0] = "SEARCH_COMPONENT",
                e[e.ENABLE_COMPONENT = 1] = "ENABLE_COMPONENT",
                e[e.REPLACE_WATCH_PATH = 2] = "REPLACE_WATCH_PATH",
                e[e.DELETE_COMPONENT = 3] = "DELETE_COMPONENT",
                e
            }(x || {});
            e("default", (_ = B("OopsFramework/Mvvm/Edit-Comps （快速组件操作）"),
            g = W("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037632&doc_id=2873565"),
            d = V({
                type: [l]
            }),
            E = V({
                type: s(x)
            }),
            y = V({
                tooltip: "勾选后,会自动查找 find list 中填写的组件",
                visible: function() {
                    return this.actionType === x.SEARCH_COMPONENT
                }
            }),
            T = V({
                tooltip: "勾选后,会批量激活 find list 中填写的组件",
                visible: function() {
                    return this.actionType === x.ENABLE_COMPONENT
                }
            }),
            P = V({
                tooltip: "勾选后,会批量关闭 find list 中填写的组件",
                visible: function() {
                    return this.actionType === x.ENABLE_COMPONENT
                }
            }),
            b = V({
                tooltip: "允许删除节点的组件,确定需要移除请勾选,防止误操作",
                visible: function() {
                    return this.actionType === x.DELETE_COMPONENT
                }
            }),
            C = V({
                tooltip: "勾选后,会批量删除 find list 中填写的组件",
                displayName: "[ X DELETE X ]",
                visible: function() {
                    return this.allowDelete && this.actionType === x.DELETE_COMPONENT
                }
            }),
            N = V({
                tooltip: "勾选后,会批量替换掉指定的路径",
                visible: function() {
                    return this.actionType === x.REPLACE_WATCH_PATH
                }
            }),
            O = V({
                tooltip: "匹配的路径,匹配规则: 搜索开头为 game的路径",
                visible: function() {
                    return this.actionType === x.REPLACE_WATCH_PATH
                }
            }),
            v = V({
                tooltip: "替换的路径,将匹配到的路径替换",
                visible: function() {
                    return this.actionType === x.REPLACE_WATCH_PATH
                }
            }),
            m = V({
                tooltip: "是否搜集绑定VM组件的节点?",
                visible: function() {
                    return this.actionType === x.SEARCH_COMPONENT
                }
            }),
            A = V({
                type: [p],
                readonly: !0,
                tooltip: "收集到绑定了VM组件相关的节点，可以自己跳转过去",
                visible: function() {
                    return this.canCollectNodes && this.actionType === x.SEARCH_COMPONENT
                }
            }),
            S(w = F(w = _(w = g((L = t((M = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                        n[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    o(t, "findList", L, i(t)),
                    o(t, "actionType", k, i(t)),
                    o(t, "allowDelete", H, i(t)),
                    o(t, "targetPath", D, i(t)),
                    o(t, "replacePath", R, i(t)),
                    o(t, "canCollectNodes", j, i(t)),
                    o(t, "collectNodes", z, i(t)),
                    t
                }
                r(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    if (!f.editor) {
                        var e = this.getNodePath(this.node);
                        console.error("you forget delete MVEditFinder,[path]", e)
                    }
                }
                ,
                a.setComponents = function(e) {
                    var t = this
                      , r = this.findList
                      , o = "搜索到当前节点下面的组件";
                    switch (e) {
                    case 0:
                        o = "搜索到当前节点下面的组件";
                        break;
                    case 1:
                        o = "激活以下节点的组件";
                        break;
                    case 2:
                        o = "关闭以下节点的组件";
                        break;
                    case 3:
                        o = "删除以下节点的组件";
                        break;
                    case 4:
                        o = "替换以下节点的路径"
                    }
                    u(o),
                    u("______________________"),
                    r.forEach((function(r) {
                        t.searchComponent(r, e)
                    }
                    )),
                    u("______________________")
                }
                ,
                a.searchComponent = function(e, t) {
                    var r = this;
                    void 0 === t && (t = 0),
                    this.collectNodes = [];
                    var o = this.node.getComponentsInChildren(e);
                    null == o || o.length < 1 || (u("[" + e + "]:"),
                    o.forEach((function(e) {
                        var o = "";
                        switch (t <= 3 && (o = !0 === e.templateMode ? e.watchPathArr ? ":[Path:" + e.watchPathArr.join("|") + "]" : "" : e.watchPath ? ":[Path:" + e.watchPath + "]" : ""),
                        u(r.getNodePath(e.node) + o),
                        t) {
                        case 0:
                            r.canCollectNodes && -1 === r.collectNodes.indexOf(e.node) && r.collectNodes.push(e.node);
                            break;
                        case 1:
                            e.enabled = !0;
                            break;
                        case 2:
                            e.enabled = !1;
                            break;
                        case 3:
                            e.node.removeComponent(e);
                            break;
                        case 4:
                            var i = r.targetPath
                              , n = r.replacePath;
                            if (!0 === e.templateMode)
                                for (var a = 0; a < e.watchPathArr.length; a++) {
                                    var c = e.watchPathArr[a];
                                    e.watchPathArr[a] = r.replaceNodePath(c, i, n)
                                }
                            else
                                e.watchPath = r.replaceNodePath(e.watchPath, i, n)
                        }
                    }
                    )))
                }
                ,
                a.replaceNodePath = function(e, t, r) {
                    for (var o = e.split("."), i = t.split("."), n = r.split("."), a = !0, c = 0; c < i.length; c++)
                        if (o[c] !== i[c]) {
                            a = !1;
                            break
                        }
                    if (!0 === a) {
                        for (var l = 0; l < n.length; l++)
                            o[l] = n[l];
                        u(" 路径更新:", e, ">>>", o.join("."))
                    }
                    return o.join(".")
                }
                ,
                a.getNodePath = function(e) {
                    for (var t = e, r = []; t; ) {
                        var o = t.getParent();
                        if (!o)
                            break;
                        r.push(t.name),
                        t = o
                    }
                    return r.reverse().join("/")
                }
                ,
                n(t, [{
                    key: "findTrigger",
                    get: function() {
                        return !1
                    },
                    set: function(e) {
                        this.setComponents(0)
                    }
                }, {
                    key: "enableTrigger",
                    get: function() {
                        return !1
                    },
                    set: function(e) {
                        this.setComponents(1)
                    }
                }, {
                    key: "disableTrigger",
                    get: function() {
                        return !1
                    },
                    set: function(e) {
                        this.setComponents(2)
                    }
                }, {
                    key: "deleteTrigger",
                    get: function() {
                        return !1
                    },
                    set: function(e) {
                        this.setComponents(3)
                    }
                }, {
                    key: "replaceTrigger",
                    get: function() {
                        return !1
                    },
                    set: function(e) {
                        this.setComponents(4)
                    }
                }]),
                t
            }(h)).prototype, "findList", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ["VMBase", "VMParent"]
                }
            }),
            k = t(M.prototype, "actionType", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return x.SEARCH_COMPONENT
                }
            }),
            t(M.prototype, "findTrigger", [y], Object.getOwnPropertyDescriptor(M.prototype, "findTrigger"), M.prototype),
            t(M.prototype, "enableTrigger", [T], Object.getOwnPropertyDescriptor(M.prototype, "enableTrigger"), M.prototype),
            t(M.prototype, "disableTrigger", [P], Object.getOwnPropertyDescriptor(M.prototype, "disableTrigger"), M.prototype),
            H = t(M.prototype, "allowDelete", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            t(M.prototype, "deleteTrigger", [C], Object.getOwnPropertyDescriptor(M.prototype, "deleteTrigger"), M.prototype),
            t(M.prototype, "replaceTrigger", [N], Object.getOwnPropertyDescriptor(M.prototype, "replaceTrigger"), M.prototype),
            D = t(M.prototype, "targetPath", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "game"
                }
            }),
            R = t(M.prototype, "replacePath", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "*"
                }
            }),
            j = t(M.prototype, "canCollectNodes", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            z = t(M.prototype, "collectNodes", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            w = M)) || w) || w) || w) || w));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMCustom.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMBase.ts", "./VMEnv.ts"], (function(t) {
    var e, o, n, i, r, c, a, s, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            n = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            c = t._decorator,
            a = t.Toggle
        }
        , function(t) {
            s = t.VMBase
        }
        , function(t) {
            l = t.VMEnv
        }
        ],
        execute: function() {
            var h, p, u, m, f, d, g, C, V, _, y, b, w, v;
            r._RF.push({}, "ce662fwsSVPLKpmHx+KocFu", "VMCustom", void 0);
            var P = c.ccclass
              , M = c.property
              , k = c.executeInEditMode
              , x = c.menu
              , B = c.help
              , R = [["BhvFrameIndex", "index", !1], ["BhvGroupToggle", "index", !1], ["BhvRollNumber", "targetValue", !1], ["cc.Label", "string", !1], ["cc.RichText", "string", !1], ["cc.EditBox", "string", !0], ["cc.Slider", "progress", !0], ["cc.ProgressBar", "progress", !1], ["cc.Toggle", "isChecked", !0]];
            t("VMCustom", (h = x("OopsFramework/Mvvm/VM-Custom （自定义）"),
            p = B("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037634&doc_id=2873565"),
            u = M({
                tooltip: "激活controller,以开启双向绑定，否则只能接收消息"
            }),
            m = M({
                tooltip: "监视对象路径"
            }),
            f = M({
                tooltip: "绑定组件的名字"
            }),
            d = M({
                tooltip: "组件上需要监听的属性"
            }),
            g = M({
                tooltip: "刷新间隔频率(只影响脏检查的频率)",
                step: .01,
                range: [0, 1],
                visible: function() {
                    return !0 === this.controller
                }
            }),
            P(C = k(C = h(C = p((_ = e((V = function(t) {
                function e() {
                    for (var e, o = arguments.length, r = new Array(o), c = 0; c < o; c++)
                        r[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    n(e, "controller", _, i(e)),
                    n(e, "watchPath", y, i(e)),
                    n(e, "componentName", b, i(e)),
                    n(e, "componentProperty", w, i(e)),
                    n(e, "refreshRate", v, i(e)),
                    e._timer = 0,
                    e._watchComponent = null,
                    e._canWatchComponent = !1,
                    e._oldValue = null,
                    e
                }
                o(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    t.prototype.onLoad.call(this),
                    this.checkEditorComponent(),
                    l.editor || (this._watchComponent = this.node.getComponent(this.componentName),
                    this.checkComponentState())
                }
                ,
                r.onRestore = function() {
                    this.checkEditorComponent()
                }
                ,
                r.start = function() {
                    this.onValueInit()
                }
                ,
                r.checkEditorComponent = function() {
                    if (!l.editor)
                        for (var t = R, e = 0; e < t.length; e++) {
                            var o = t[e];
                            if (this.node.getComponent(o[0])) {
                                "" == this.componentName && (this.componentName = o[0]),
                                "" == this.componentProperty && (this.componentProperty = o[1]),
                                null !== o[2] && (this.controller = o[2]);
                                break
                            }
                        }
                }
                ,
                r.checkComponentState = function() {
                    this._canWatchComponent = !1,
                    this._watchComponent ? this.componentProperty ? this.componentProperty in this._watchComponent != !1 ? this._canWatchComponent = !0 : console.error("需要监听的组件的属性不存在") : console.error("未设置需要监听的组件 的属性") : console.error("未设置需要监听的组件")
                }
                ,
                r.getComponentValue = function() {
                    return this._watchComponent[this.componentProperty]
                }
                ,
                r.setComponentValue = function(t) {
                    "cc.Toggle" == this.componentName ? this.node.getComponent(a).isChecked = t : this._watchComponent[this.componentProperty] = t
                }
                ,
                r.onValueInit = function() {
                    l.editor || this.setComponentValue(this.VM.getValue(this.watchPath))
                }
                ,
                r.onValueController = function(t, e) {
                    this.VM.setValue(this.watchPath, t)
                }
                ,
                r.onValueChanged = function(t, e, o) {
                    this.setComponentValue(t)
                }
                ,
                r.update = function(t) {
                    if (!l.editor && this.controller && this._canWatchComponent && !1 !== this._watchComponent.enabled && (this._timer += t,
                    !(this._timer < this.refreshRate))) {
                        this._timer = 0;
                        var e = this._oldValue
                          , o = this.getComponentValue();
                        this._oldValue !== o && (this._oldValue = this.getComponentValue(),
                        this.onValueController(o, e))
                    }
                }
                ,
                e
            }(s)).prototype, "controller", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            y = e(V.prototype, "watchPath", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            b = e(V.prototype, "componentName", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            w = e(V.prototype, "componentProperty", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            v = e(V.prototype, "refreshRate", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }),
            C = V)) || C) || C) || C) || C));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMEnv.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./env"], (function(n) {
    var e, t, u;
    return {
        setters: [function(n) {
            e = n.createClass
        }
        , function(n) {
            t = n.cclegacy
        }
        , function(n) {
            u = n.EDITOR
        }
        ],
        execute: function() {
            t._RF.push({}, "fdf72Q91PdCXpPQ+62s1ufi", "VMEnv", void 0);
            n("VMEnv", function() {
                function n() {}
                return e(n, null, [{
                    key: "editor",
                    get: function() {
                        return u
                    }
                }]),
                n
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMBase.ts"], (function(e) {
    var t, r, n, i, a, o, c, u, l, s;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            c = e.CCString,
            u = e.Enum,
            l = e.EventHandler
        }
        , function(e) {
            s = e.VMBase
        }
        ],
        execute: function() {
            var p, f, h, b, g, d, m, v, y, w, M, k, E, z, V, P, A, C;
            a._RF.push({}, "a9ce7kf8XZJeLPlT2iWn2zD", "VMEvent", void 0);
            var _ = o.ccclass
              , D = o.property
              , O = o.executeInEditMode
              , B = o.menu
              , F = o.help
              , I = function(e) {
                return e[e.none = 0] = "none",
                e[e["=="] = 1] = "==",
                e[e["!="] = 2] = "!=",
                e[e[">"] = 3] = ">",
                e[e[">="] = 4] = ">=",
                e[e["<"] = 5] = "<",
                e[e["<="] = 6] = "<=",
                e
            }(I || {});
            e("default", (p = B("OopsFramework/Mvvm/VM-EventCall （调用函数）"),
            f = F("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037640&doc_id=2873565"),
            h = D({
                tooltip: "使用模板模式，可以使用多路径监听"
            }),
            b = D({
                tooltip: "监听获取值的路径",
                visible: function() {
                    return !1 === this.templateMode
                }
            }),
            g = D({
                tooltip: "触发一次后会自动关闭该事件"
            }),
            d = D({
                tooltip: "监听获取值的多条路径,这些值的改变都会通过这个函数回调,请使用 pathArr 区分获取的值 ",
                type: [c],
                visible: function() {
                    return !0 === this.templateMode
                }
            }),
            m = D({
                tooltip: "过滤模式，会根据条件过滤掉时间的触发",
                type: u(I)
            }),
            v = D({
                visible: function() {
                    return this.filterMode !== I.none
                }
            }),
            y = D([l]),
            _(w = O(w = p(w = f((k = t((M = function(e) {
                function t() {
                    for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    n(t, "templateMode", k, i(t)),
                    n(t, "watchPath", E, i(t)),
                    n(t, "triggerOnce", z, i(t)),
                    n(t, "watchPathArr", V, i(t)),
                    n(t, "filterMode", P, i(t)),
                    n(t, "compareValue", A, i(t)),
                    n(t, "changeEvents", C, i(t)),
                    t
                }
                r(t, e);
                var a = t.prototype;
                return a.onValueInit = function() {}
                ,
                a.onValueChanged = function(e, t, r) {
                    this.conditionCheck(e, this.compareValue) && (Array.isArray(this.changeEvents) && this.changeEvents.forEach((function(n) {
                        n.emit([e, t, r])
                    }
                    )),
                    !0 === this.triggerOnce && (this.enabled = !1))
                }
                ,
                a.conditionCheck = function(e, t) {
                    var r = I;
                    switch (this.filterMode) {
                    case r.none:
                        return !0;
                    case r["=="]:
                        if (e == t)
                            return !0;
                        break;
                    case r["!="]:
                        if (e != t)
                            return !0;
                        break;
                    case r["<"]:
                        if (e < t)
                            return !0;
                        break;
                    case r[">"]:
                        if (e > t)
                            return !0;
                        break;
                    case r[">="]:
                        if (e >= t)
                            return !0;
                        break;
                    case r["<"]:
                        if (e < t)
                            return !0;
                        break;
                    case r["<="]:
                        if (e <= t)
                            return !0
                    }
                    return !1
                }
                ,
                t
            }(s)).prototype, "templateMode", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            E = t(M.prototype, "watchPath", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            z = t(M.prototype, "triggerOnce", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            V = t(M.prototype, "watchPathArr", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            P = t(M.prototype, "filterMode", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return I.none
                }
            }),
            A = t(M.prototype, "compareValue", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            C = t(M.prototype, "changeEvents", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            w = M)) || w) || w) || w) || w));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMLabel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringFormat.ts", "./VMBase.ts", "./VMEnv.ts"], (function(t) {
    var e, r, i, a, n, l, o, s, c, u, h;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            i = t.initializerDefineProperty,
            a = t.assertThisInitialized
        }
        , function(t) {
            n = t.cclegacy,
            l = t._decorator,
            o = t.CCString,
            s = t.error
        }
        , function(t) {
            c = t.StringFormatFunction
        }
        , function(t) {
            u = t.VMBase
        }
        , function(t) {
            h = t.VMEnv
        }
        ],
        execute: function() {
            var p, f, m, g, b, d, V, v, y, L, M, T;
            n._RF.push({}, "545c05XsG9GDJispEGWKvYv", "VMLabel", void 0);
            var w = l.ccclass
              , x = l.property
              , A = l.menu
              , F = l.executeInEditMode
              , P = l.help
              , k = "cc.Label";
            t("default", (p = A("OopsFramework/Mvvm/VM-Label （标签）"),
            f = P("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037641&doc_id=2873565"),
            m = x({
                tooltip: "是否启用模板代码,只能在运行时之前设置,\n将会动态解析模板语法 {{0}},并且自动设置监听的路径"
            }),
            g = x({
                visible: function() {
                    return !1 === this.templateMode
                }
            }),
            b = x({
                readonly: !0
            }),
            d = x({
                type: [o],
                visible: function() {
                    return !0 === this.templateMode
                }
            }),
            w(V = F(V = p(V = f((y = e((v = function(t) {
                function e() {
                    for (var e, r = arguments.length, n = new Array(r), l = 0; l < r; l++)
                        n[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    i(e, "templateMode", y, a(e)),
                    i(e, "watchPath", L, a(e)),
                    i(e, "labelType", M, a(e)),
                    i(e, "watchPathArr", T, a(e)),
                    e.templateValueArr = [],
                    e.templateFormatArr = [],
                    e.originText = null,
                    e
                }
                r(e, t);
                var n = e.prototype;
                return n.onRestore = function() {
                    this.checkLabel()
                }
                ,
                n.onLoad = function() {
                    t.prototype.onLoad.call(this),
                    this.checkLabel(),
                    h.editor || this.templateMode && (this.originText = this.getLabelValue(),
                    this.parseTemplate())
                }
                ,
                n.start = function() {
                    h.editor || this.onValueInit()
                }
                ,
                n.parseTemplate = function() {
                    var t = /\{\{(.+?)\}\}/
                      , e = this.originText.match(/\{\{(.+?)\}\}/g);
                    if (null != e)
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r].match(t)[1].split(":")[1] || "";
                            this.templateFormatArr[r] = i
                        }
                }
                ,
                n.getReplaceText = function() {
                    if (!this.originText)
                        return "";
                    var t = /\{\{(.+?)\}\}/
                      , e = this.originText.match(/\{\{(.+?)\}\}/g);
                    if (null == e)
                        return "";
                    for (var r = this.originText, i = 0; i < e.length; i++) {
                        var a, n = e[i], l = n.match(t), o = parseInt(l[1] || "0") || 0, s = this.templateFormatArr[i];
                        a = this.templateValueArr[o],
                        r = r.replace(n, this.getValueFromFormat(a, s))
                    }
                    return r
                }
                ,
                n.getValueFromFormat = function(t, e) {
                    return c.deal(t, e)
                }
                ,
                n.onValueInit = function() {
                    if (!1 === this.templateMode)
                        this.setLabelValue(this.VM.getValue(this.watchPath));
                    else {
                        for (var t = this.watchPathArr.length, e = 0; e < t; e++)
                            this.templateValueArr[e] = this.VM.getValue(this.watchPathArr[e], "?");
                        this.setLabelValue(this.getReplaceText())
                    }
                }
                ,
                n.onValueChanged = function(t, e, r) {
                    if (!1 === this.templateMode)
                        this.setLabelValue(t);
                    else {
                        var i = r.join(".")
                          , a = this.watchPathArr.findIndex((function(t) {
                            return t === i
                        }
                        ));
                        a >= 0 && (this.templateValueArr[a] = t,
                        this.setLabelValue(this.getReplaceText()))
                    }
                }
                ,
                n.setLabelValue = function(t) {
                    this.getComponent(this.labelType).string = t + ""
                }
                ,
                n.getLabelValue = function() {
                    return this.getComponent(this.labelType).string
                }
                ,
                n.checkLabel = function() {
                    for (var t = ["cc.Label", "cc.RichText", "cc.EditBox"], e = 0; e < t.length; e++) {
                        var r = t[e];
                        if (this.node.getComponent(r))
                            return this.labelType = r,
                            !0
                    }
                    return s("没有挂载任何label组件"),
                    !1
                }
                ,
                e
            }(u)).prototype, "templateMode", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            L = e(v.prototype, "watchPath", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            M = e(v.prototype, "labelType", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return k
                }
            }),
            T = e(v.prototype, "watchPathArr", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            V = v)) || V) || V) || V) || V));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMLabelRewrite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMLabel.ts", "./Utils.ts"], (function(e) {
    var t, r, i, a, n, l, o, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            l = e._decorator
        }
        , function(e) {
            o = e.default
        }
        , function(e) {
            u = e.default
        }
        ],
        execute: function() {
            var s, h, c, p, f;
            n._RF.push({}, "8f043uiKj9BB4yqdMvajnDY", "VMLabelRewrite", void 0);
            var b = l.ccclass
              , m = l.property;
            e("VMLabelRewrite", (s = b("VMLabelRewrite"),
            h = m({
                tooltip: "小数取整的位数"
            }),
            s((f = t((p = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), l = 0; l < r; l++)
                        n[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    i(t, "up", f, a(t)),
                    t.originText = null,
                    t
                }
                r(t, e);
                var n = t.prototype;
                return n.onValueInit = function() {
                    if (!1 === this.templateMode) {
                        var e = this.VM.getValue(this.watchPath);
                        e = "number" == typeof e ? u.formatNumberTo3Fixed(e, this.up) : e,
                        this.setLabelValue(e)
                    } else {
                        for (var t = this.watchPathArr.length, r = 0; r < t; r++) {
                            var i = this.VM.getValue(this.watchPathArr[r], "?");
                            this.templateValueArr[r] = "number" == typeof i ? u.formatNumberTo3Fixed(i, this.up) : i
                        }
                        this.setLabelValue(this.getReplaceText())
                    }
                }
                ,
                n.onValueChanged = function(e, t, r) {
                    if (!1 === this.templateMode) {
                        var i = e;
                        i = "number" == typeof i ? u.formatNumberTo3Fixed(i, this.up) : i,
                        this.setLabelValue(i)
                    } else {
                        var a = r.join(".")
                          , n = this.watchPathArr.findIndex((function(e) {
                            return e === a
                        }
                        ));
                        n >= 0 && (this.templateValueArr[n] = "number" == typeof e ? u.formatNumberTo3Fixed(e, this.up) : e,
                        this.setLabelValue(this.getReplaceText()))
                    }
                }
                ,
                t
            }(o)).prototype, "up", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            c = p)) || c));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMModify.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMBase.ts"], (function(t) {
    var a, e, i, n, r, u, l, o;
    return {
        setters: [function(t) {
            a = t.applyDecoratedDescriptor,
            e = t.inheritsLoose,
            i = t.initializerDefineProperty,
            n = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            u = t._decorator,
            l = t.Enum
        }
        , function(t) {
            o = t.VMBase
        }
        ],
        execute: function() {
            var s, h, c, v, p, M, f, d, m, V, b, w, g, y;
            r._RF.push({}, "7d2a4voaOJJGJZRWFPG6Bk7", "VMModify", void 0);
            var P = u.ccclass
              , I = u.property
              , A = u.menu
              , C = u.help
              , N = function(t) {
                return t[t.MIN = 0] = "MIN",
                t[t.MAX = 1] = "MAX",
                t[t.MIN_MAX = 2] = "MIN_MAX",
                t
            }(N || {});
            t("default", (s = A("OopsFramework/Mvvm/VM-Modify （修改数据）"),
            h = C("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037642&doc_id=2873565"),
            c = I({
                tooltip: "监视对象路径"
            }),
            v = I({
                tooltip: "是不启用取值范围限制"
            }),
            p = I({
                type: l(N),
                visible: function() {
                    return !0 === this.valueClamp
                }
            }),
            M = I({
                visible: function() {
                    return !0 === this.valueClamp && this.valueClampMode !== N.MAX
                }
            }),
            f = I({
                visible: function() {
                    return !0 === this.valueClamp && this.valueClampMode !== N.MIN
                }
            }),
            P(d = s(d = h((V = a((m = function(t) {
                function a() {
                    for (var a, e = arguments.length, r = new Array(e), u = 0; u < e; u++)
                        r[u] = arguments[u];
                    return a = t.call.apply(t, [this].concat(r)) || this,
                    i(a, "watchPath", V, n(a)),
                    i(a, "valueClamp", b, n(a)),
                    i(a, "valueClampMode", w, n(a)),
                    i(a, "valueMin", g, n(a)),
                    i(a, "valueMax", y, n(a)),
                    a
                }
                e(a, t);
                var r = a.prototype;
                return r.clampValue = function(t) {
                    var a = this.valueMin
                      , e = this.valueMax;
                    if (0 == this.valueClamp)
                        return t;
                    switch (this.valueClampMode) {
                    case N.MIN_MAX:
                        t > e && (t = e),
                        t < a && (t = a);
                        break;
                    case N.MIN:
                        t < a && (t = a);
                        break;
                    case N.MAX:
                        t > e && (t = e)
                    }
                    return t
                }
                ,
                r.vAddInt = function(t, a) {
                    this.vAdd(t, a, !0)
                }
                ,
                r.vSubInt = function(t, a) {
                    this.vSub(t, a, !0)
                }
                ,
                r.vMulInt = function(t, a) {
                    this.vMul(t, a, !0)
                }
                ,
                r.vDivInt = function(t, a) {
                    this.vDiv(t, a, !0)
                }
                ,
                r.vAdd = function(t, a, e) {
                    void 0 === e && (e = !1);
                    var i = parseFloat(a)
                      , n = this.VM.getValue(this.watchPath, 0) + i;
                    e && (n = Math.round(n)),
                    this.VM.setValue(this.watchPath, this.clampValue(n))
                }
                ,
                r.vSub = function(t, a, e) {
                    void 0 === e && (e = !1);
                    var i = parseFloat(a)
                      , n = this.VM.getValue(this.watchPath, 0) - i;
                    e && (n = Math.round(n)),
                    this.VM.setValue(this.watchPath, this.clampValue(n))
                }
                ,
                r.vMul = function(t, a, e) {
                    void 0 === e && (e = !1);
                    var i = parseFloat(a)
                      , n = this.VM.getValue(this.watchPath, 0) * i;
                    e && (n = Math.round(n)),
                    this.VM.setValue(this.watchPath, this.clampValue(n))
                }
                ,
                r.vDiv = function(t, a, e) {
                    void 0 === e && (e = !1);
                    var i = parseFloat(a)
                      , n = this.VM.getValue(this.watchPath, 0) / i;
                    e && (n = Math.round(n)),
                    this.VM.setValue(this.watchPath, this.clampValue(n))
                }
                ,
                r.vString = function(t, a) {
                    var e = a;
                    this.VM.setValue(this.watchPath, e)
                }
                ,
                r.vNumberInt = function(t, a) {
                    this.vNumber(t, a, !0)
                }
                ,
                r.vNumber = function(t, a, e) {
                    void 0 === e && (e = !1);
                    var i = parseFloat(a);
                    e && (i = Math.round(i)),
                    this.VM.setValue(this.watchPath, this.clampValue(i))
                }
                ,
                a
            }(o)).prototype, "watchPath", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            b = a(m.prototype, "valueClamp", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            w = a(m.prototype, "valueClampMode", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return N.MIN_MAX
                }
            }),
            g = a(m.prototype, "valueMin", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            y = a(m.prototype, "valueMax", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            d = m)) || d) || d) || d));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMParent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameComponent.ts", "./ViewModel.ts"], (function(t) {
    var n, e, o, i, a;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy,
            o = t._decorator
        }
        , function(t) {
            i = t.GameComponent
        }
        , function(t) {
            a = t.VM
        }
        ],
        execute: function() {
            var r;
            e._RF.push({}, "15ccciO+ZRH476sPKD/LvB7", "VMParent", void 0);
            var s = o.ccclass
              , c = o.help
              , h = o.executionOrder;
            t("default", s(r = h(-1)(r = c("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037729&doc_id=2873565")(r = function(t) {
                function e() {
                    for (var n, e = arguments.length, o = new Array(e), i = 0; i < e; i++)
                        o[i] = arguments[i];
                    return (n = t.call.apply(t, [this].concat(o)) || this).tag = "_temp",
                    n.data = {},
                    n.VM = a,
                    n
                }
                n(e, t);
                var o = e.prototype;
                return o.onLoad = function() {
                    if (null != this.data) {
                        this.tag = "_temp<" + this.node.uuid.replace(".", "") + ">",
                        a.add(this.data, this.tag);
                        for (var t = this.getVMComponents(), n = 0; n < t.length; n++) {
                            var e = t[n];
                            this.replaceVMPath(e, this.tag)
                        }
                        this.onBind()
                    }
                }
                ,
                o.onBind = function() {}
                ,
                o.onUnBind = function() {}
                ,
                o.replaceVMPath = function(t, n) {
                    var e = t.watchPath;
                    if (1 == t.templateMode) {
                        var o = t.watchPathArr;
                        if (o)
                            for (var i = 0; i < o.length; i++) {
                                var a = o[i];
                                o[i] = a.replace("*", n)
                            }
                    } else
                        "*" === e.split(".")[0] && (t.watchPath = e.replace("*", n))
                }
                ,
                o.getVMComponents = function() {
                    var t = this
                      , n = this.node.getComponentsInChildren("VMBase")
                      , e = this.node.getComponentsInChildren("VMParent").filter((function(n) {
                        return n.uuid !== t.uuid
                    }
                    ))
                      , o = [];
                    return e.forEach((function(t) {
                        o = o.concat(t.getComponentsInChildren("VMBase"))
                    }
                    )),
                    n = n.filter((function(t) {
                        return o.indexOf(t) < 0
                    }
                    ))
                }
                ,
                o.onDestroy = function() {
                    this.onUnBind(),
                    a.remove(this.tag),
                    this.data = null,
                    t.prototype.onDestroy.call(this)
                }
                ,
                e
            }(i)) || r) || r) || r);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMProgress.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringFormat.ts", "./VMCustom.ts", "./VMEnv.ts"], (function(t) {
    var e, r, a, i, n, o, s, l, u, h;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            a = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            n = t.cclegacy,
            o = t._decorator,
            s = t.CCString
        }
        , function(t) {
            l = t.StringFormatFunction
        }
        , function(t) {
            u = t.VMCustom
        }
        , function(t) {
            h = t.VMEnv
        }
        ],
        execute: function() {
            var c, p, m, f, V, g, d, v, w, P;
            n._RF.push({}, "2a50eqI7JZNV5Sh0y/Qd9C6", "VMProgress", void 0);
            var y = o.ccclass
              , A = o.property
              , M = o.menu
              , b = o.help;
            t("default", (c = M("OopsFramework/Mvvm/VM-Progress （进度条）"),
            p = b("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037843&doc_id=2873565"),
            m = A({
                visible: !1,
                override: !0
            }),
            f = A({
                type: [s],
                tooltip: "第一个值是min 值，第二个值 是 max 值，会计算出两者的比例"
            }),
            V = A({
                visible: function() {
                    return "string" === this.componentProperty
                },
                tooltip: "字符串格式化，和 VMLabel 的字段一样，需要填入对应的格式化字符串"
            }),
            y(g = c(g = p((v = e((d = function(t) {
                function e() {
                    for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                        n[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    a(e, "watchPath", v, i(e)),
                    a(e, "watchPathArr", w, i(e)),
                    e.templateMode = !0,
                    a(e, "stringFormat", P, i(e)),
                    e
                }
                r(e, t);
                var n = e.prototype;
                return n.onLoad = function() {
                    (this.watchPathArr.length < 2 || "[min]" == this.watchPathArr[0] || "[max]" == this.watchPathArr[1]) && console.error("VMProgress must have two values!"),
                    t.prototype.onLoad.call(this)
                }
                ,
                n.start = function() {
                    h.editor || this.onValueInit()
                }
                ,
                n.onValueInit = function() {
                    for (var t = this.watchPathArr.length, e = 0; e < t; e++)
                        this.templateValueArr[e] = this.VM.getValue(this.watchPathArr[e]);
                    var r = this.templateValueArr[0] / this.templateValueArr[1];
                    this.setComponentValue(r)
                }
                ,
                n.setComponentValue = function(e) {
                    if ("" !== this.stringFormat) {
                        var r = l.deal(e, this.stringFormat);
                        t.prototype.setComponentValue.call(this, r)
                    } else
                        t.prototype.setComponentValue.call(this, e)
                }
                ,
                n.onValueController = function(t, e) {
                    var r = Math.round(t * this.templateValueArr[1]);
                    Number.isNaN(r) && (r = 0),
                    this.VM.setValue(this.watchPathArr[0], r)
                }
                ,
                n.onValueChanged = function(t, e, r) {
                    if (!1 !== this.templateMode) {
                        var a = r.join(".")
                          , i = this.watchPathArr.findIndex((function(t) {
                            return t === a
                        }
                        ));
                        i >= 0 && (this.templateValueArr[i] = t);
                        var n = this.templateValueArr[0] / this.templateValueArr[1];
                        n > 1 && (n = 1),
                        (n < 0 || Number.isNaN(n)) && (n = 0),
                        this.setComponentValue(n)
                    }
                }
                ,
                e
            }(u)).prototype, "watchPath", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            w = e(d.prototype, "watchPathArr", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ["[min]", "[max]"]
                }
            }),
            P = e(d.prototype, "stringFormat", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            g = d)) || g) || g) || g));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMProgressRewrite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMProgress.ts", "./Utils.ts"], (function(e) {
    var t, r, s, a, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            r = e.cclegacy,
            s = e._decorator
        }
        , function(e) {
            a = e.default
        }
        , function(e) {
            i = e.default
        }
        ],
        execute: function() {
            var n;
            r._RF.push({}, "1663c0+Me1DRr2H1RbJ7isZ", "VMProgressRewrite", void 0);
            var o = s.ccclass;
            s.property,
            e("VMProgressRewrite", o("VMProgressRewrite")(n = function(e) {
                function r() {
                    return e.apply(this, arguments) || this
                }
                t(r, e);
                var s = r.prototype;
                return s.onValueInit = function() {
                    for (var e = this.watchPathArr.length, t = 0; t < e; t++) {
                        var r = this.VM.getValue(this.watchPathArr[t]);
                        r = "number" == typeof r ? r : i.parseNumber(r),
                        this.templateValueArr[t] = r
                    }
                    var s = this.templateValueArr[0] / this.templateValueArr[1];
                    this.setComponentValue(s)
                }
                ,
                s.onValueChanged = function(e, t, r) {
                    if (!1 !== this.templateMode) {
                        var s = r.join(".")
                          , a = this.watchPathArr.findIndex((function(e) {
                            return e === s
                        }
                        ));
                        if (a >= 0) {
                            var n = e;
                            n = "number" == typeof n ? n : i.parseNumber(n),
                            this.templateValueArr[a] = n
                        }
                        var o = this.templateValueArr[0] / this.templateValueArr[1];
                        o > 1 && (o = 1),
                        (o < 0 || Number.isNaN(o)) && (o = 0),
                        this.setComponentValue(o)
                    }
                }
                ,
                r
            }(a)) || n);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VMState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./VMBase.ts", "./ViewModel.ts"], (function(e) {
    var t, i, n, o, a, r, l, u, c, s, p, h, f, N, C, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            r = e._decorator,
            l = e.Enum,
            u = e.CCInteger,
            c = e.Node,
            s = e.Button,
            p = e.Sprite,
            h = e.UIRenderer,
            f = e.color,
            N = e.UIOpacity
        }
        , function(e) {
            C = e.VMBase
        }
        , function(e) {
            d = e.VM
        }
        ],
        execute: function() {
            var b, v, O, m, E, y, A, T, _, g, w, D, M, V, I, S, P, k, L, R, z, B, U, Y, F, X, G, j, x, H, q;
            a._RF.push({}, "47052uw/Y5O1LXaLObj4ARx", "VMState", void 0);
            var J = r.ccclass
              , K = r.property
              , Q = r.menu
              , W = r.help
              , Z = function(e) {
                return e[e["=="] = 0] = "==",
                e[e["!="] = 1] = "!=",
                e[e[">"] = 2] = ">",
                e[e[">="] = 3] = ">=",
                e[e["<"] = 4] = "<",
                e[e["<="] = 5] = "<=",
                e[e.range = 6] = "range",
                e
            }(Z || {})
              , $ = function(e) {
                return e[e.NODE_ACTIVE = 0] = "NODE_ACTIVE",
                e[e.NODE_VISIBLE = 1] = "NODE_VISIBLE",
                e[e.NODE_OPACITY = 2] = "NODE_OPACITY",
                e[e.NODE_COLOR = 3] = "NODE_COLOR",
                e[e.COMPONENT_CUSTOM = 4] = "COMPONENT_CUSTOM",
                e[e.SPRITE_GRAYSCALE = 5] = "SPRITE_GRAYSCALE",
                e[e.BUTTON_INTERACTABLE = 6] = "BUTTON_INTERACTABLE",
                e
            }($ || {})
              , ee = function(e) {
                return e[e.NODE_INDEX = 0] = "NODE_INDEX",
                e[e.NODE_NAME = 1] = "NODE_NAME",
                e
            }(ee || {});
            e("default", (b = Q("OopsFramework/Mvvm/VM-State （状态控制）"),
            v = W("https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037846&doc_id=2873565"),
            O = K({
                tooltip: "遍历子节点,根据子节点的名字或名字转换为值，判断值满足条件 来激活"
            }),
            m = K({
                type: l(Z)
            }),
            E = K({
                type: l(ee),
                tooltip: "遍历子节点,根据子节点的名字转换为值，判断值满足条件 来激活",
                visible: function() {
                    return !0 === this.foreachChildMode
                }
            }),
            y = K({
                displayName: "Value: a",
                visible: function() {
                    return !1 === this.foreachChildMode
                }
            }),
            A = K({
                displayName: "Value: b",
                visible: function() {
                    return !1 === this.foreachChildMode && this.condition === Z.range
                }
            }),
            T = K({
                type: l($),
                tooltip: "一旦满足条件就对节点执行操作"
            }),
            _ = K({
                visible: function() {
                    return this.valueAction === $.NODE_OPACITY
                },
                range: [0, 255],
                type: u,
                displayName: "Action Opacity"
            }),
            g = K({
                visible: function() {
                    return this.valueAction === $.NODE_COLOR
                },
                displayName: "Action Color"
            }),
            w = K({
                visible: function() {
                    return this.valueAction === $.COMPONENT_CUSTOM
                },
                displayName: "Component Name"
            }),
            D = K({
                visible: function() {
                    return this.valueAction === $.COMPONENT_CUSTOM
                },
                displayName: "Component Property"
            }),
            M = K({
                visible: function() {
                    return this.valueAction === $.COMPONENT_CUSTOM
                },
                displayName: "Default Value"
            }),
            V = K({
                visible: function() {
                    return this.valueAction === $.COMPONENT_CUSTOM
                },
                displayName: "Action Value"
            }),
            I = K({
                type: [c],
                tooltip: "需要执行条件的节点，如果不填写则默认会执行本节点以及本节点的所有子节点 的状态"
            }),
            J(S = b(S = v((k = t((P = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), r = 0; r < i; r++)
                        a[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    n(t, "watchPath", k, o(t)),
                    n(t, "foreachChildMode", L, o(t)),
                    n(t, "condition", R, o(t)),
                    n(t, "foreachChildType", z, o(t)),
                    n(t, "valueA", B, o(t)),
                    n(t, "valueB", U, o(t)),
                    n(t, "valueAction", Y, o(t)),
                    n(t, "valueActionOpacity", F, o(t)),
                    n(t, "valueActionColor", X, o(t)),
                    n(t, "valueComponentName", G, o(t)),
                    n(t, "valueComponentProperty", j, o(t)),
                    n(t, "valueComponentDefaultValue", x, o(t)),
                    n(t, "valueComponentActionValue", H, o(t)),
                    n(t, "watchNodes", q, o(t)),
                    t
                }
                i(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    e.prototype.onLoad.call(this),
                    0 == this.watchNodes.length && (this.valueAction !== $.NODE_ACTIVE && !1 === this.foreachChildMode && this.watchNodes.push(this.node),
                    this.watchNodes = this.watchNodes.concat(this.node.children))
                }
                ,
                a.start = function() {
                    this.enabled && this.onValueInit()
                }
                ,
                a.onValueInit = function() {
                    var e = d.getValue(this.watchPath);
                    this.checkNodeFromValue(e)
                }
                ,
                a.onValueChanged = function(e, t, i) {
                    this.checkNodeFromValue(e)
                }
                ,
                a.checkNodeFromValue = function(e) {
                    var t = this;
                    if (this.foreachChildMode)
                        this.watchNodes.forEach((function(i, n) {
                            var o = t.foreachChildType === ee.NODE_INDEX ? n : i.name
                              , a = t.conditionCheck(e, o);
                            t.setNodeState(i, a)
                        }
                        ));
                    else {
                        var i = this.conditionCheck(e, this.valueA, this.valueB);
                        this.setNodesStates(i)
                    }
                }
                ,
                a.setNodesStates = function(e) {
                    var t = this
                      , i = this.watchNodes
                      , n = e;
                    i.forEach((function(e) {
                        t.setNodeState(e, n)
                    }
                    ))
                }
                ,
                a.setNodeState = function(e, t) {
                    var i = t;
                    switch (this.valueAction) {
                    case $.NODE_ACTIVE:
                        e.active = !!i;
                        break;
                    case $.NODE_VISIBLE:
                        var n = e.getComponent(N);
                        null == n && (n = e.addComponent(N)),
                        n && (n.opacity = i ? 255 : 0);
                        break;
                    case $.NODE_OPACITY:
                        var o = e.getComponent(N);
                        null == o && (o = e.addComponent(N)),
                        o && (o.opacity = i ? this.valueActionOpacity : 255);
                        break;
                    case $.NODE_COLOR:
                        var a = e.getComponent(h);
                        a && (a.color = i ? this.valueActionColor : f(255, 255, 255));
                        break;
                    case $.COMPONENT_CUSTOM:
                        var r = e.getComponent(this.valueComponentName);
                        if (null == r)
                            return;
                        this.valueComponentProperty in r && (r[this.valueComponentProperty] = i ? this.valueComponentActionValue : this.valueComponentDefaultValue);
                        break;
                    case $.SPRITE_GRAYSCALE:
                        var l = e.getComponent(p);
                        l && (l.grayscale = i);
                        break;
                    case $.BUTTON_INTERACTABLE:
                        var u = e.getComponent(s);
                        u && (u.interactable = i)
                    }
                }
                ,
                a.conditionCheck = function(e, t, i) {
                    var n = Z;
                    switch (this.condition) {
                    case n["=="]:
                        if (e == t)
                            return !0;
                        break;
                    case n["!="]:
                        if (e != t)
                            return !0;
                        break;
                    case n["<"]:
                        if (e < t)
                            return !0;
                        break;
                    case n[">"]:
                        if (e > t)
                            return !0;
                        break;
                    case n[">="]:
                        if (e >= t)
                            return !0;
                        break;
                    case n["<"]:
                        if (e < t)
                            return !0;
                        break;
                    case n["<="]:
                        if (e <= t)
                            return !0;
                        break;
                    case n.range:
                        if (e >= t && e <= i)
                            return !0
                    }
                    return !1
                }
                ,
                t
            }(C)).prototype, "watchPath", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            L = t(P.prototype, "foreachChildMode", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            R = t(P.prototype, "condition", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Z["=="]
                }
            }),
            z = t(P.prototype, "foreachChildType", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ee.NODE_INDEX
                }
            }),
            B = t(P.prototype, "valueA", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            U = t(P.prototype, "valueB", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            Y = t(P.prototype, "valueAction", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return $.NODE_ACTIVE
                }
            }),
            F = t(P.prototype, "valueActionOpacity", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            X = t(P.prototype, "valueActionColor", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return f(155, 155, 155)
                }
            }),
            G = t(P.prototype, "valueComponentName", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            j = t(P.prototype, "valueComponentProperty", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            x = t(P.prototype, "valueComponentDefaultValue", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            H = t(P.prototype, "valueComponentActionValue", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            q = t(P.prototype, "watchNodes", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            S = P)) || S) || S) || S));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/WebSock.ts", ["cc", "./Logger.ts"], (function(t) {
    var e, n;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        , function(t) {
            n = t.Logger
        }
        ],
        execute: function() {
            e._RF.push({}, "70df2VbIU9B66Fr+op8FKJp", "WebSock", void 0);
            t("WebSock", function() {
                function t() {
                    this._ws = null,
                    this.onConnected = null,
                    this.onMessage = null,
                    this.onError = null,
                    this.onClosed = null
                }
                var e = t.prototype;
                return e.connect = function(t) {
                    var e = this;
                    if (this._ws && this._ws.readyState === WebSocket.CONNECTING)
                        return n.logNet("websocket connecting, wait for a moment..."),
                        !1;
                    var s = null;
                    if (t.url)
                        s = t.url;
                    else {
                        var o = t.ip
                          , r = t.port;
                        s = t.protocol + "://" + o + ":" + r
                    }
                    return this._ws = new WebSocket(s),
                    this._ws.binaryType = t.binaryType ? t.binaryType : "arraybuffer",
                    this._ws.onmessage = function(t) {
                        (0,
                        e.onMessage)(t.data)
                    }
                    ,
                    this._ws.onopen = this.onConnected,
                    this._ws.onerror = this.onError,
                    this._ws.onclose = this.onClosed,
                    !0
                }
                ,
                e.send = function(t) {
                    return this._ws && this._ws.readyState == WebSocket.OPEN ? (this._ws.send(t),
                    1) : -1
                }
                ,
                e.close = function(t, e) {
                    this._ws && this._ws.close(t, e)
                }
                ,
                t
            }());
            e._RF.pop()
        }
    }
}
));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
}
)(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule")
                        _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }
            ],
            execute: function() {}
        };
    });
});
