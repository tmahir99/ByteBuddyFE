import {
  AnimationDriver,
  AnimationEngine,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-6UEW7PLC.js";
import {
  AnimationBuilder,
  AnimationFactory,
  sequence
} from "./chunk-B6D3TQPO.js";
import {
  BrowserModule,
  DomRendererFactory2
} from "./chunk-QODR4S6D.js";
import {
  DOCUMENT
} from "./chunk-D4UE5VFS.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  Inject,
  Injectable,
  NgModule,
  NgZone,
  RendererFactory2,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-JIBT2MMA.js";

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
  }
  build(animation) {
    const id = this._nextAnimationId.toString();
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
};
_BrowserAnimationBuilder.ɵfac = function BrowserAnimationBuilder_Factory(t) {
  return new (t || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
};
_BrowserAnimationBuilder.ɵprov = ɵɵdefineInjectable({
  token: _BrowserAnimationBuilder,
  factory: _BrowserAnimationBuilder.ɵfac
});
var BrowserAnimationBuilder = _BrowserAnimationBuilder;
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable
  }], function() {
    return [{
      type: RendererFactory2
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    return issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return this._renderer.engine.players[+this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id, command, args) {
  return renderer.setProperty(element, `@@${id}:${command}`, args);
}
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var _AnimationRendererFactory = class _AnimationRendererFactory {
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    this._currentId = 0;
    this._microtaskId = 1;
    this._animationCallbacksBuffer = [];
    this._rendererCache = /* @__PURE__ */ new Map();
    this._cdRecurDepth = 0;
    engine.onRemovalComplete = (element, delegate2) => {
      const parentNode = delegate2?.parentNode(element);
      if (parentNode) {
        delegate2.removeChild(parentNode, element);
      }
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type || !type.data || !type.data["animation"]) {
      let renderer = this._rendererCache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => this._rendererCache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        this._rendererCache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    if (this._animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          this._animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    this._animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
_AnimationRendererFactory.ɵfac = function AnimationRendererFactory_Factory(t) {
  return new (t || _AnimationRendererFactory)(ɵɵinject(RendererFactory2), ɵɵinject(AnimationEngine), ɵɵinject(NgZone));
};
_AnimationRendererFactory.ɵprov = ɵɵdefineInjectable({
  token: _AnimationRendererFactory,
  factory: _AnimationRendererFactory.ɵfac
});
var AnimationRendererFactory = _AnimationRendererFactory;
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationRendererFactory, [{
    type: Injectable
  }], function() {
    return [{
      type: RendererFactory2
    }, {
      type: AnimationEngine
    }, {
      type: NgZone
    }];
  }, null);
})();
var BaseAnimationRenderer = class {
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var _InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer, appRef) {
    super(doc.body, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
};
_InjectableAnimationEngine.ɵfac = function InjectableAnimationEngine_Factory(t) {
  return new (t || _InjectableAnimationEngine)(ɵɵinject(DOCUMENT), ɵɵinject(AnimationDriver), ɵɵinject(AnimationStyleNormalizer), ɵɵinject(ApplicationRef));
};
_InjectableAnimationEngine.ɵprov = ɵɵdefineInjectable({
  token: _InjectableAnimationEngine,
  factory: _InjectableAnimationEngine.ɵfac
});
var InjectableAnimationEngine = _InjectableAnimationEngine;
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: AnimationDriver
    }, {
      type: AnimationStyleNormalizer
    }, {
      type: ApplicationRef
    }];
  }, null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationBuilder,
  useClass: BrowserAnimationBuilder
}, {
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var _BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
};
_BrowserAnimationsModule.ɵfac = function BrowserAnimationsModule_Factory(t) {
  return new (t || _BrowserAnimationsModule)();
};
_BrowserAnimationsModule.ɵmod = ɵɵdefineNgModule({
  type: _BrowserAnimationsModule,
  exports: [BrowserModule]
});
_BrowserAnimationsModule.ɵinj = ɵɵdefineInjector({
  providers: BROWSER_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var BrowserAnimationsModule = _BrowserAnimationsModule;
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var _NoopAnimationsModule = class _NoopAnimationsModule {
};
_NoopAnimationsModule.ɵfac = function NoopAnimationsModule_Factory(t) {
  return new (t || _NoopAnimationsModule)();
};
_NoopAnimationsModule.ɵmod = ɵɵdefineNgModule({
  type: _NoopAnimationsModule,
  exports: [BrowserModule]
});
_NoopAnimationsModule.ɵinj = ɵɵdefineInjector({
  providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var NoopAnimationsModule = _NoopAnimationsModule;
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideNoopAnimations() {
  return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}

export {
  BrowserAnimationBuilder,
  BrowserAnimationFactory,
  AnimationRendererFactory,
  AnimationRenderer,
  InjectableAnimationEngine,
  BrowserAnimationsModule,
  provideAnimations,
  NoopAnimationsModule,
  provideNoopAnimations
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v16.2.12
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-MGK46TJI.js.map
