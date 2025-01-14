import {
  INTERSECTION_ROOT_MARGIN,
  INTERSECTION_THRESHOLD,
  IntersectionObserverService,
  TUI_ARROW_OPTIONS,
  TUI_INPUT_COUNT_OPTIONS,
  TuiTileComponent,
  TuiTileHandleDirective,
  TuiTilesComponent,
  TuiTilesModule
} from "./chunk-WQ3YKBMM.js";
import {
  ALWAYS_TRUE_HANDLER,
  AbstractTuiController,
  EMPTY_QUERY,
  MODE_PROVIDER,
  PolymorpheusModule,
  PolymorpheusOutletDirective,
  TUI_COMMON_ICONS,
  TUI_ELEMENT_REF,
  TUI_MODE,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
  TUI_TEXTFIELD_LABEL_OUTSIDE,
  TUI_TEXTFIELD_SIZE,
  TuiAppearance,
  TuiButtonComponent,
  TuiButtonModule,
  TuiDataListComponent,
  TuiDataListModule,
  TuiDestroyService,
  TuiHostedDropdownComponent,
  TuiHostedDropdownModule,
  TuiLinkComponent,
  TuiLinkModule,
  TuiMapperPipe,
  TuiMapperPipeModule,
  TuiOptionComponent,
  TuiSvgComponent,
  TuiSvgModule,
  TuiTableSortKeyException,
  TuiTextfieldAppearanceDirective,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiDefaultSort,
  tuiExtractI18n,
  tuiPreventDefault,
  tuiProvideOptions,
  tuiPure,
  tuiQueryListChanges,
  tuiTypedFromEvent,
  tuiWatchedControllerFactory
} from "./chunk-ZCMKX7LW.js";
import "./chunk-J4J4264W.js";
import "./chunk-6UEW7PLC.js";
import "./chunk-B6D3TQPO.js";
import "./chunk-QODR4S6D.js";
import {
  NgControl
} from "./chunk-4UOO7GJQ.js";
import "./chunk-ZVOY2GPJ.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-D4UE5VFS.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  Pipe,
  SkipSelf,
  TemplateRef,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JIBT2MMA.js";
import "./chunk-JD4XVWEJ.js";
import {
  defer,
  merge
} from "./chunk-WCP4RZ4Y.js";
import {
  EMPTY,
  Observable,
  ReplaySubject,
  __awaiter,
  __decorate,
  delay,
  distinctUntilChanged,
  filter,
  identity,
  map,
  startWith,
  switchMap,
  takeUntil
} from "./chunk-7A7WJ6DX.js";
import "./chunk-XSKKLE2R.js";

// node_modules/@taiga-ui/addon-table/fesm2015/taiga-ui-addon-table-tokens.js
var TUI_TABLE_SHOW_HIDE_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n("showHideText"));
var TUI_TABLE_PAGINATION_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("paginationTexts"));

// node_modules/@taiga-ui/addon-table/fesm2015/taiga-ui-addon-table-components-reorder.js
function TuiReorderComponent_tui_tile_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const template_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", template_r4, " ");
  }
}
var _c0 = function(a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};
function TuiReorderComponent_tui_tile_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-tile")(1, "div", 2)(2, "div", 3);
    ɵɵelement(3, "tui-svg", 4);
    ɵɵtemplate(4, TuiReorderComponent_tui_tile_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 6);
    ɵɵlistener("click", function TuiReorderComponent_tui_tile_1_Template_button_click_5_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.toggle(item_r1));
    })("keydown.arrowDown.prevent", function TuiReorderComponent_tui_tile_1_Template_button_keydown_arrowDown_prevent_5_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const index_r2 = restoredCtx.index;
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.move(index_r2, 1));
    })("keydown.arrowUp.prevent", function TuiReorderComponent_tui_tile_1_Template_button_keydown_arrowUp_prevent_5_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const index_r2 = restoredCtx.index;
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.move(index_r2, -1));
    });
    ɵɵpipe(6, "async");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("order", ctx_r0.order.get(index_r2));
    ɵɵadvance(3);
    ɵɵproperty("src", ctx_r0.options.icons.drag);
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r0.content)("polymorpheusOutletContext", ɵɵpureFunction2(11, _c0, item_r1, index_r2));
    ɵɵadvance(1);
    ɵɵclassProp("t-button_hidden", !ctx_r0.isEnabled(item_r1));
    ɵɵproperty("icon", ctx_r0.getIcon(item_r1))("title", ɵɵpipeBind1(6, 9, ctx_r0.showHideText$));
  }
}
var TUI_REORDER_DEFAULT_OPTIONS = {
  icons: {
    hide: "tuiIconEye",
    show: "tuiIconEyeOff",
    drag: "tuiIconDrag"
  }
};
var TUI_REORDER_OPTIONS = tuiCreateToken(TUI_REORDER_DEFAULT_OPTIONS);
function tuiReorderOptionsProvider(options) {
  return tuiProvideOptions(TUI_REORDER_OPTIONS, options, TUI_REORDER_DEFAULT_OPTIONS);
}
var TuiReorderComponent = class {
  constructor(options, showHideText$) {
    this.options = options;
    this.showHideText$ = showHideText$;
    this.dragging = false;
    this.enabled = [];
    this.itemsChange = new EventEmitter();
    this.enabledChange = new EventEmitter();
    this.order = /* @__PURE__ */ new Map();
    this.unsortedItems = [];
    this.content = ({
      $implicit
    }) => String($implicit);
  }
  set items(items) {
    if (items.length !== this.unsortedItems.length || !items.every((item) => this.unsortedItems.includes(item))) {
      this.unsortedItems = items;
    }
  }
  noop() {
  }
  onDrag() {
    this.dragging = true;
  }
  onDrop() {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    this.updateItems();
  }
  isEnabled(item) {
    return this.enabled.includes(item);
  }
  getIcon(item) {
    return this.isEnabled(item) ? this.options.icons.hide : this.options.icons.show;
  }
  toggle(toggled) {
    this.enabled = this.isEnabled(toggled) ? this.enabled.filter((item) => item !== toggled) : this.enabled.concat(toggled);
    this.updateEnabled();
  }
  move(index, direction) {
    var _a;
    const oldIndex = (_a = this.order.get(index)) !== null && _a !== void 0 ? _a : index;
    if (!oldIndex && direction < 0 || oldIndex === this.unsortedItems.length - 1 && direction > 0) {
      return;
    }
    const newIndex = oldIndex + direction;
    const oldItem = Array.from(this.order.values()).findIndex((item) => item === newIndex);
    this.order.set(index, newIndex);
    this.order.set(oldItem, oldIndex);
    this.order = new Map(this.order);
    this.updateItems();
  }
  getSortedItems() {
    const items = new Array(this.unsortedItems.length);
    this.unsortedItems.forEach((item, index) => {
      var _a;
      items[(_a = this.order.get(index)) !== null && _a !== void 0 ? _a : index] = item;
    });
    return items;
  }
  updateItems() {
    this.itemsChange.emit(this.getSortedItems());
    this.updateEnabled();
  }
  updateEnabled() {
    const enabled = this.getSortedItems().filter((item) => this.isEnabled(item));
    this.enabled = enabled;
    this.enabledChange.emit(enabled);
  }
};
TuiReorderComponent.ɵfac = function TuiReorderComponent_Factory(t) {
  return new (t || TuiReorderComponent)(ɵɵdirectiveInject(TUI_REORDER_OPTIONS), ɵɵdirectiveInject(TUI_TABLE_SHOW_HIDE_MESSAGE));
};
TuiReorderComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiReorderComponent,
  selectors: [["tui-reorder"]],
  hostBindings: function TuiReorderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusout.stop", function TuiReorderComponent_focusout_stop_HostBindingHandler() {
        return ctx.noop();
      })("pointerdown.silent", function TuiReorderComponent_pointerdown_silent_HostBindingHandler() {
        return ctx.onDrag();
      })("pointerup.silent", function TuiReorderComponent_pointerup_silent_HostBindingHandler() {
        return ctx.onDrop();
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    items: "items",
    enabled: "enabled",
    content: "content"
  },
  outputs: {
    itemsChange: "itemsChange",
    enabledChange: "enabledChange"
  },
  decls: 2,
  vars: 2,
  consts: [[1, "t-wrapper", 3, "order", "orderChange"], [3, "order", 4, "ngFor", "ngForOf"], [1, "t-item"], ["tuiTileHandle", "", 1, "t-draggable"], [1, "t-icon", 3, "src"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "icon", "title", "click", "keydown.arrowDown.prevent", "keydown.arrowUp.prevent"]],
  template: function TuiReorderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "tui-tiles", 0);
      ɵɵlistener("orderChange", function TuiReorderComponent_Template_tui_tiles_orderChange_0_listener($event) {
        return ctx.order = $event;
      });
      ɵɵtemplate(1, TuiReorderComponent_tui_tile_1_Template, 7, 14, "tui-tile", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("order", ctx.order);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.unsortedItems);
    }
  },
  dependencies: [TuiTilesComponent, TuiTileComponent, TuiSvgComponent, TuiButtonComponent, NgForOf, TuiTileHandleDirective, PolymorpheusOutletDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-base-01)}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%], .t-button[_ngcontent-%COMP%]:focus{opacity:1}"],
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReorderComponent, [{
    type: Component,
    args: [{
      selector: "tui-reorder",
      templateUrl: "./reorder.template.html",
      styleUrls: ["./reorder.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_REORDER_OPTIONS]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_TABLE_SHOW_HIDE_MESSAGE]
      }]
    }];
  }, {
    items: [{
      type: Input
    }],
    enabled: [{
      type: Input
    }],
    itemsChange: [{
      type: Output
    }],
    enabledChange: [{
      type: Output
    }],
    content: [{
      type: Input
    }],
    noop: [{
      type: HostListener,
      args: ["focusout.stop"]
    }],
    onDrag: [{
      type: HostListener,
      args: ["pointerdown.silent"]
    }],
    onDrop: [{
      type: HostListener,
      args: ["document:pointerup.silent"]
    }]
  });
})();
var TuiReorderModule = class {
};
TuiReorderModule.ɵfac = function TuiReorderModule_Factory(t) {
  return new (t || TuiReorderModule)();
};
TuiReorderModule.ɵmod = ɵɵdefineNgModule({
  type: TuiReorderModule,
  declarations: [TuiReorderComponent],
  imports: [CommonModule, TuiSvgModule, TuiButtonModule, TuiTilesModule, PolymorpheusModule],
  exports: [TuiReorderComponent]
});
TuiReorderModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiSvgModule, TuiButtonModule, TuiTilesModule, PolymorpheusModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReorderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiSvgModule, TuiButtonModule, TuiTilesModule, PolymorpheusModule],
      declarations: [TuiReorderComponent],
      exports: [TuiReorderComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-table/fesm2015/taiga-ui-addon-table-components-table.js
var _c02 = ["tuiTh", ""];
function TuiThComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TuiThComponent_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.updateSorterAndDirection());
    });
    ɵɵelementContainer(1, 4);
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "tui-svg", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r1 = ɵɵreference(2);
    ɵɵclassProp("t-sort_sorted", ctx_r0.isCurrent);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, ctx_r0.table.change$), " ");
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r0.icon);
  }
}
function TuiThComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiThComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("tuiResized", function TuiThComponent_div_3_Template_div_tuiResized_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onResized($event));
    });
    ɵɵelementEnd();
  }
}
var _c1 = ["*"];
var _c2 = ["tuiTd", ""];
var _c3 = ["tuiTr", ""];
function TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.ngIf;
    const key_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r7[key_r3], " ");
  }
}
function TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_td_0_Template, 2, 1, "td", 4);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r5.item$));
  }
}
function TuiTrComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 2);
    ɵɵtemplate(1, TuiTrComponent_ng_container_0_ng_container_1_ng_template_1_Template, 2, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const _r4 = ɵɵreference(2);
    const items_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngTemplateOutlet", (items_r1[key_r3] == null ? null : items_r1[key_r3].template) || _r4);
  }
}
function TuiTrComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTrComponent_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.table.columns);
  }
}
var _c4 = ["tuiTbody", ""];
function TuiTbodyComponent_tr_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiTbodyComponent_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr")(1, "th", 1)(2, "button", 2);
    ɵɵlistener("click", function TuiTbodyComponent_tr_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onClick());
    });
    ɵɵelementStart(3, "span", 3);
    ɵɵtemplate(4, TuiTbodyComponent_tr_0_ng_container_4_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelement(5, "tui-svg", 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("colSpan", ctx_r0.table.columns.length);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheusOutlet", ctx_r0.heading);
    ɵɵadvance(1);
    ɵɵclassProp("t-chevron_rotated", ctx_r0.open);
    ɵɵproperty("src", ctx_r0.arrowOptions.iconLarge);
  }
}
function TuiTbodyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
function TuiTbodyComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 7);
    ɵɵpipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.row.template)("ngTemplateOutletContext", ɵɵpipeBind3(1, 2, item_r8, ctx_r7.toContext, index_r9));
  }
}
function TuiTbodyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTbodyComponent_ng_container_2_ng_container_1_Template, 2, 6, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.sorted);
  }
}
var _c5 = ["tuiThGroup", ""];
function TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_th_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const key_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", key_r3.toString(), " ");
  }
}
function TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_th_0_Template, 2, 1, "th", 4);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", !ctx_r5.th && !ctx_r5.heads.length);
  }
}
function TuiThGroupComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 2);
    ɵɵtemplate(1, TuiThGroupComponent_ng_container_1_ng_container_1_ng_template_1_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const _r4 = ɵɵreference(2);
    const headings_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("ngTemplateOutlet", (headings_r1[key_r3.toString()] == null ? null : headings_r1[key_r3.toString()].template) || _r4);
  }
}
function TuiThGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiThGroupComponent_ng_container_1_ng_container_1_Template, 3, 1, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.table.columns);
  }
}
var TuiCellDirective = class {
  constructor(template) {
    this.template = template;
    this.tuiCell = "";
  }
};
TuiCellDirective.ɵfac = function TuiCellDirective_Factory(t) {
  return new (t || TuiCellDirective)(ɵɵdirectiveInject(TemplateRef));
};
TuiCellDirective.ɵdir = ɵɵdefineDirective({
  type: TuiCellDirective,
  selectors: [["ng-template", "tuiCell", ""]],
  inputs: {
    tuiCell: "tuiCell"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCellDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiCell]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiCell: [{
      type: Input
    }]
  });
})();
var TUI_STUCK = new InjectionToken("[TUI_STUCK]");
var TUI_STUCK_PROVIDER = {
  provide: TUI_STUCK,
  deps: [ElementRef, IntersectionObserverService],
  useFactory: ({
    nativeElement
  }, entries$) => {
    const stream$ = entries$.pipe(map(([{
      intersectionRatio
    }]) => intersectionRatio < 1));
    nativeElement["$.class._stuck"] = stream$;
    return stream$;
  }
};
var TUI_TABLE_PROVIDERS = [{
  provide: INTERSECTION_ROOT_MARGIN,
  useValue: "10000px 10000px 10000px 0px"
}, {
  provide: INTERSECTION_THRESHOLD,
  useValue: [0, 1]
}, {
  provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
  useFactory: () => {
    const directive = new TuiTextfieldAppearanceDirective();
    directive.appearance = TuiAppearance.Table;
    return directive;
  }
}, {
  provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
  useValue: {
    labelOutside: true
  }
}, {
  provide: TUI_INPUT_COUNT_OPTIONS,
  deps: [[new SkipSelf(), TUI_INPUT_COUNT_OPTIONS]],
  useFactory: (options) => Object.assign(Object.assign({}, options), {
    hideButtons: true
  })
}, {
  provide: TUI_TEXTFIELD_SIZE,
  useExisting: forwardRef(() => TuiTableDirective)
}, IntersectionObserverService, MODE_PROVIDER, TUI_STUCK_PROVIDER];
var TUI_TABLE_DEFAULT_OPTIONS = {
  sticky: false,
  resizable: false,
  open: true,
  size: "m",
  direction: 1,
  sortIcons: {
    asc: "tuiIconSortAscending",
    desc: "tuiIconSortDescending",
    off: "tuiIconSortOff"
  }
};
var TUI_TABLE_OPTIONS = tuiCreateToken(TUI_TABLE_DEFAULT_OPTIONS);
function tuiTableOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}
var TuiTableDirective = class extends AbstractTuiController {
  constructor(entries$, mode$, stuck$, options, cdr) {
    super();
    this.entries$ = entries$;
    this.mode$ = mode$;
    this.stuck$ = stuck$;
    this.options = options;
    this.cdr = cdr;
    this.columns = [];
    this.size = this.options.size;
    this.direction = this.options.direction;
    this.directionChange = new EventEmitter();
    this.sorterChange = new EventEmitter();
    this.sorter = () => 0;
  }
  updateSorterAndDirection(sorter) {
    if (this.sorter === sorter) {
      this.updateDirection(this.direction === 1 ? -1 : 1);
    } else {
      this.updateSorter(sorter);
      this.updateDirection(1);
    }
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  updateSorter(sorter) {
    this.sorter = sorter || (() => 0);
    this.sorterChange.emit(this.sorter);
    this.change$.next();
  }
  updateDirection(direction) {
    this.direction = direction;
    this.directionChange.emit(this.direction);
    this.change$.next();
  }
};
TuiTableDirective.ɵfac = function TuiTableDirective_Factory(t) {
  return new (t || TuiTableDirective)(ɵɵdirectiveInject(IntersectionObserverService), ɵɵdirectiveInject(TUI_MODE), ɵɵdirectiveInject(TUI_STUCK), ɵɵdirectiveInject(TUI_TABLE_OPTIONS), ɵɵdirectiveInject(ChangeDetectorRef));
};
TuiTableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTableDirective,
  selectors: [["table", "tuiTable", ""]],
  hostAttrs: [2, "border-collapse", "separate"],
  hostVars: 1,
  hostBindings: function TuiTableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.data-mode.attr", function TuiTableDirective___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      })("$.class._stuck", function TuiTableDirective___class__stuck_HostBindingHandler() {
        return ctx.stuck$;
      });
    }
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
    }
  },
  inputs: {
    columns: "columns",
    size: "size",
    direction: "direction",
    sorter: "sorter"
  },
  outputs: {
    directionChange: "directionChange",
    sorterChange: "sorterChange"
  },
  features: [ɵɵProvidersFeature(TUI_TABLE_PROVIDERS), ɵɵInheritDefinitionFeature]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableDirective, [{
    type: Directive,
    args: [{
      selector: "table[tuiTable]",
      providers: TUI_TABLE_PROVIDERS,
      host: {
        "($.data-mode.attr)": "mode$",
        "($.class._stuck)": "stuck$",
        style: "border-collapse: separate"
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [IntersectionObserverService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_STUCK]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TABLE_OPTIONS]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }];
  }, {
    columns: [{
      type: Input
    }],
    size: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    direction: [{
      type: Input
    }],
    directionChange: [{
      type: Output
    }],
    sorterChange: [{
      type: Output
    }],
    sorter: [{
      type: Input
    }]
  });
})();
var TuiDirectionOrderDirective = class {
  constructor(table) {
    this.table = table;
    this.directionOrderChange = this.table.directionChange.pipe(map((dir) => dir === 1 ? "asc" : "desc"));
  }
  set directionOrder(order) {
    this.table.direction = order === "asc" ? 1 : -1;
  }
};
TuiDirectionOrderDirective.ɵfac = function TuiDirectionOrderDirective_Factory(t) {
  return new (t || TuiDirectionOrderDirective)(ɵɵdirectiveInject(TuiTableDirective));
};
TuiDirectionOrderDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDirectionOrderDirective,
  selectors: [["table", "tuiTable", "", "tuiDirectionOrder", ""]],
  inputs: {
    directionOrder: "directionOrder"
  },
  outputs: {
    directionOrderChange: "directionOrderChange"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDirectionOrderDirective, [{
    type: Directive,
    args: [{
      selector: "table[tuiTable][tuiDirectionOrder]"
    }]
  }], function() {
    return [{
      type: TuiTableDirective,
      decorators: [{
        type: Inject,
        args: [TuiTableDirective]
      }]
    }];
  }, {
    directionOrder: [{
      type: Input
    }],
    directionOrderChange: [{
      type: Output
    }]
  });
})();
var TuiHeadDirective = class {
  constructor(template) {
    this.template = template;
    this.tuiHead = "";
  }
};
TuiHeadDirective.ɵfac = function TuiHeadDirective_Factory(t) {
  return new (t || TuiHeadDirective)(ɵɵdirectiveInject(TemplateRef));
};
TuiHeadDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHeadDirective,
  selectors: [["", "tuiHead", ""]],
  inputs: {
    tuiHead: "tuiHead"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHeadDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHead]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiHead: [{
      type: Input
    }]
  });
})();
var TuiResizedDirective = class {
  constructor(doc, el, parentRef) {
    this.doc = doc;
    this.el = el;
    this.parentRef = parentRef;
    this.tuiResized = tuiTypedFromEvent(this.el.nativeElement, "mousedown").pipe(tuiPreventDefault(), switchMap(() => {
      const {
        width,
        right
      } = this.parentRef.nativeElement.getBoundingClientRect();
      return tuiTypedFromEvent(this.doc, "mousemove").pipe(distinctUntilChanged(), map(({
        clientX
      }) => width + clientX - right), takeUntil(tuiTypedFromEvent(this.doc, "mouseup")));
    }));
  }
};
TuiResizedDirective.ɵfac = function TuiResizedDirective_Factory(t) {
  return new (t || TuiResizedDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_ELEMENT_REF));
};
TuiResizedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiResizedDirective,
  selectors: [["", "tuiResized", ""]],
  outputs: {
    tuiResized: "tuiResized"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizedDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiResized]"
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_ELEMENT_REF]
      }]
    }];
  }, {
    tuiResized: [{
      type: Output
    }]
  });
})();
var TuiRowDirective = class {
  constructor(template) {
    this.template = template;
    this.tuiRowOf = [];
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
TuiRowDirective.ɵfac = function TuiRowDirective_Factory(t) {
  return new (t || TuiRowDirective)(ɵɵdirectiveInject(TemplateRef));
};
TuiRowDirective.ɵdir = ɵɵdefineDirective({
  type: TuiRowDirective,
  selectors: [["ng-template", "tuiRow", ""]],
  inputs: {
    tuiRowOf: "tuiRowOf"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRowDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiRow]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiRowOf: [{
      type: Input
    }]
  });
})();
var TuiThComponent = class {
  constructor(options, head, table) {
    this.options = options;
    this.head = head;
    this.table = table;
    this.sorter = this.head ? (a, b) => tuiDefaultSort(a[this.key], b[this.key]) : null;
    this.resizable = this.options.resizable;
    this.sticky = this.options.sticky;
    this.width = null;
  }
  get key() {
    if (!this.head) {
      throw new TuiTableSortKeyException();
    }
    return this.head.tuiHead;
  }
  get isCurrent() {
    return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
  }
  get icon() {
    var _a;
    if (this.isCurrent) {
      return ((_a = this.table) === null || _a === void 0 ? void 0 : _a.direction) === 1 ? this.options.sortIcons.desc : this.options.sortIcons.asc;
    }
    return this.options.sortIcons.off;
  }
  updateSorterAndDirection() {
    var _a;
    (_a = this.table) === null || _a === void 0 ? void 0 : _a.updateSorterAndDirection(this.isCurrentAndAscDirection ? null : this.sorter);
  }
  onResized(width) {
    this.width = width;
  }
  get isCurrentAndAscDirection() {
    var _a, _b;
    return this.sorter === ((_a = this.table) === null || _a === void 0 ? void 0 : _a.sorter) && ((_b = this.table) === null || _b === void 0 ? void 0 : _b.direction) === -1;
  }
};
TuiThComponent.ɵfac = function TuiThComponent_Factory(t) {
  return new (t || TuiThComponent)(ɵɵdirectiveInject(TUI_TABLE_OPTIONS), ɵɵdirectiveInject(TuiHeadDirective, 8), ɵɵdirectiveInject(forwardRef(() => TuiTableDirective), 8));
};
TuiThComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiThComponent,
  selectors: [["th", "tuiTh", ""]],
  hostVars: 4,
  hostBindings: function TuiThComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width, "px");
      ɵɵclassProp("_sticky", ctx.sticky);
    }
  },
  inputs: {
    sorter: "sorter",
    resizable: "resizable",
    sticky: "sticky"
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_ELEMENT_REF,
    useExisting: ElementRef
  }])],
  attrs: _c02,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 3,
  consts: [["type", "button", "class", "t-sort", 3, "t-sort_sorted", "click", 4, "ngIf", "ngIfElse"], ["content", ""], ["class", "t-bar", 3, "tuiResized", 4, "ngIf"], ["type", "button", 1, "t-sort", 3, "click"], [3, "ngTemplateOutlet"], [1, "t-sort-icon", 3, "src"], [1, "t-bar", 3, "tuiResized"]],
  template: function TuiThComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiThComponent_button_0_Template, 5, 7, "button", 0);
      ɵɵtemplate(1, TuiThComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵtemplate(3, TuiThComponent_div_3_Template, 1, 0, "div", 2);
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.sorter && ctx.table)("ngIfElse", _r1);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.resizable);
    }
  },
  dependencies: [TuiSvgComponent, NgIf, NgTemplateOutlet, TuiResizedDirective, AsyncPipe],
  styles: ['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:bold;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translate(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:-webkit-sticky;position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%], table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:bold;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}'],
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThComponent, [{
    type: Component,
    args: [{
      selector: "th[tuiTh]",
      templateUrl: "./th.template.html",
      styleUrls: ["./th.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_ELEMENT_REF,
        useExisting: ElementRef
      }]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TABLE_OPTIONS]
      }]
    }, {
      type: TuiHeadDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiHeadDirective]
      }]
    }, {
      type: TuiTableDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [forwardRef(() => TuiTableDirective)]
      }]
    }];
  }, {
    sorter: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    sticky: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class._sticky"]
    }],
    width: [{
      type: HostBinding,
      args: ["style.width.px"]
    }]
  });
})();
var TuiSortableDirective = class {
  constructor(sortBy, table, th) {
    this.sortBy = sortBy;
    this.table = table;
    this.th = th;
    this.sorter = () => 0;
  }
  get key() {
    return this.th.key;
  }
  ngOnInit() {
    this.sorter = this.match ? this.table.sorter : this.sorter;
    this.th.sorter = this.sorter;
  }
  check() {
    if (this.match && this.table.sorter !== this.sorter) {
      this.table.updateSorter(this.sorter);
    }
  }
  get match() {
    return this.sortBy.tuiSortBy === this.key;
  }
};
TuiSortableDirective.ɵfac = function TuiSortableDirective_Factory(t) {
  return new (t || TuiSortableDirective)(ɵɵdirectiveInject(forwardRef(() => TuiSortByDirective)), ɵɵdirectiveInject(TuiTableDirective), ɵɵdirectiveInject(TuiThComponent));
};
TuiSortableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiSortableDirective,
  selectors: [["th", "tuiTh", "", "tuiSortable", ""]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSortableDirective, [{
    type: Directive,
    args: [{
      selector: "th[tuiTh][tuiSortable]"
    }]
  }], function() {
    return [{
      type: TuiSortByDirective,
      decorators: [{
        type: Inject,
        args: [forwardRef(() => TuiSortByDirective)]
      }]
    }, {
      type: TuiTableDirective,
      decorators: [{
        type: Inject,
        args: [TuiTableDirective]
      }]
    }, {
      type: TuiThComponent,
      decorators: [{
        type: Inject,
        args: [TuiThComponent]
      }]
    }];
  }, null);
})();
var TuiSortByDirective = class {
  constructor(table) {
    this.table = table;
    this.sortables = EMPTY_QUERY;
    this.tuiSortByChange = this.table.sorterChange.pipe(
      // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
      delay(0),
      filter(() => !!this.sortables.length),
      map((sorter) => this.getKey(sorter))
    );
    this.tuiSortBy = null;
  }
  set sortBy(sortBy) {
    this.tuiSortBy = sortBy;
    this.checkSortables();
  }
  checkSortables() {
    this.sortables.forEach((s) => s.check());
  }
  getKey(sorter) {
    var _a;
    return ((_a = this.sortables.find((s) => s.sorter === sorter)) === null || _a === void 0 ? void 0 : _a.key) || null;
  }
};
TuiSortByDirective.ɵfac = function TuiSortByDirective_Factory(t) {
  return new (t || TuiSortByDirective)(ɵɵdirectiveInject(TuiTableDirective));
};
TuiSortByDirective.ɵdir = ɵɵdefineDirective({
  type: TuiSortByDirective,
  selectors: [["table", "tuiTable", "", "tuiSortBy", ""]],
  contentQueries: function TuiSortByDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiSortableDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sortables = _t);
    }
  },
  inputs: {
    sortBy: ["tuiSortBy", "sortBy"]
  },
  outputs: {
    tuiSortByChange: "tuiSortByChange"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSortByDirective, [{
    type: Directive,
    args: [{
      selector: "table[tuiTable][tuiSortBy]"
    }]
  }], function() {
    return [{
      type: TuiTableDirective,
      decorators: [{
        type: Inject,
        args: [TuiTableDirective]
      }]
    }];
  }, {
    sortables: [{
      type: ContentChildren,
      args: [TuiSortableDirective, {
        descendants: true
      }]
    }],
    sortBy: [{
      type: Input,
      args: ["tuiSortBy"]
    }],
    tuiSortByChange: [{
      type: Output
    }]
  });
})();
var TuiTheadDirective = class {
  constructor(stuck$) {
    this.stuck$ = stuck$;
  }
};
TuiTheadDirective.ɵfac = function TuiTheadDirective_Factory(t) {
  return new (t || TuiTheadDirective)(ɵɵdirectiveInject(TUI_STUCK));
};
TuiTheadDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTheadDirective,
  selectors: [["thead", "tuiThead", ""]],
  hostBindings: function TuiTheadDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.class._stuck", function TuiTheadDirective___class__stuck_HostBindingHandler() {
        return ctx.stuck$;
      });
    }
  },
  features: [ɵɵProvidersFeature([TUI_STUCK_PROVIDER, IntersectionObserverService, {
    provide: INTERSECTION_ROOT_MARGIN,
    useValue: "0px 10000px 10000px 10000px"
  }])]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTheadDirective, [{
    type: Directive,
    args: [{
      selector: "thead[tuiThead]",
      providers: [TUI_STUCK_PROVIDER, IntersectionObserverService, {
        provide: INTERSECTION_ROOT_MARGIN,
        useValue: "0px 10000px 10000px 10000px"
      }],
      host: {
        "($.class._stuck)": "stuck$"
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_STUCK]
      }]
    }];
  }, null);
})();
var TuiTableSortPipe = class {
  constructor(table) {
    this.table = table;
  }
  transform(data) {
    return this.sort(data, this.table.sorter, this.table.direction);
  }
  sort(data, sorter, direction) {
    return [...data].sort((a, b) => direction * sorter(a, b));
  }
};
TuiTableSortPipe.ɵfac = function TuiTableSortPipe_Factory(t) {
  return new (t || TuiTableSortPipe)(ɵɵdirectiveInject(TuiTableDirective, 16));
};
TuiTableSortPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiTableSort",
  type: TuiTableSortPipe,
  pure: false
});
__decorate([tuiPure], TuiTableSortPipe.prototype, "sort", null);
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableSortPipe, [{
    type: Pipe,
    args: [{
      name: "tuiTableSort",
      pure: false
    }]
  }], function() {
    return [{
      type: TuiTableDirective,
      decorators: [{
        type: Inject,
        args: [TuiTableDirective]
      }]
    }];
  }, {
    sort: []
  });
})();
var TUI_TABLE_PROVIDER = [TuiDestroyService, TuiTableSortPipe, {
  provide: TuiTableDirective,
  deps: [[new SkipSelf(), TuiTableDirective], ChangeDetectorRef, TuiDestroyService],
  useFactory: tuiWatchedControllerFactory
}];
var TuiTdComponent = class {
};
TuiTdComponent.ɵfac = function TuiTdComponent_Factory(t) {
  return new (t || TuiTdComponent)();
};
TuiTdComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiTdComponent,
  selectors: [["th", "tuiTd", ""], ["td", "tuiTd", ""]],
  contentQueries: function TuiTdComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TuiTdComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_editable", ctx.control);
    }
  },
  attrs: _c2,
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function TuiTdComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ['[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translate(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTdComponent, [{
    type: Component,
    args: [{
      selector: "th[tuiTd], td[tuiTd]",
      template: `
        <ng-content></ng-content>
    `,
      styleUrls: ["./td.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    control: [{
      type: HostBinding,
      args: ["class._editable"]
    }, {
      type: ContentChild,
      args: [NgControl]
    }]
  });
})();
var TuiTrComponent = class {
  constructor(table, body) {
    this.table = table;
    this.body = body;
    this.cells = EMPTY_QUERY;
    this.contentReady$ = new ReplaySubject(1);
    this.cells$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.cells)), map((cells) => cells.reduce((record, item) => Object.assign(Object.assign({}, record), {
      [item.tuiCell]: item
    }), {})));
    this.item$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.body.rows)), map((rows) => (
      /**
       * TODO v4.0 replace `this.body.sorted` with `this.body.data` (don't forget to drop `sorted`-getter).
       */
      this.body.sorted[rows.findIndex((row) => row === this)]
    )));
  }
  ngAfterContentInit() {
    return __awaiter(this, void 0, void 0, function* () {
      yield Promise.resolve();
      this.contentReady$.next(true);
    });
  }
};
TuiTrComponent.ɵfac = function TuiTrComponent_Factory(t) {
  return new (t || TuiTrComponent)(ɵɵdirectiveInject(forwardRef(() => TuiTableDirective)), ɵɵdirectiveInject(forwardRef(() => TuiTbodyComponent)));
};
TuiTrComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiTrComponent,
  selectors: [["tr", "tuiTr", ""]],
  contentQueries: function TuiTrComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiCellDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cells = _t);
    }
  },
  features: [ɵɵProvidersFeature([TUI_TABLE_PROVIDER])],
  attrs: _c3,
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["plain", ""], ["tuiTd", "", 4, "ngIf"], ["tuiTd", ""]],
  template: function TuiTrComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiTrComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cells$));
    }
  },
  dependencies: [TuiTdComponent, NgIf, NgForOf, NgTemplateOutlet, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTrComponent, [{
    type: Component,
    args: [{
      selector: "tr[tuiTr]",
      templateUrl: "./tr.template.html",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_TABLE_PROVIDER]
    }]
  }], function() {
    return [{
      type: TuiTableDirective,
      decorators: [{
        type: Inject,
        args: [forwardRef(() => TuiTableDirective)]
      }]
    }, {
      type: TuiTbodyComponent,
      decorators: [{
        type: Inject,
        args: [forwardRef(() => TuiTbodyComponent)]
      }]
    }];
  }, {
    cells: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiCellDirective)]
    }]
  });
})();
var TuiTbodyComponent = class {
  constructor(pipe, options, arrowOptions, table) {
    this.pipe = pipe;
    this.options = options;
    this.arrowOptions = arrowOptions;
    this.table = table;
    this.data = [];
    this.open = this.options.open;
    this.openChange = new EventEmitter();
    this.rows = EMPTY_QUERY;
    this.toContext = ($implicit, index) => ({
      $implicit,
      index
    });
  }
  get sorted() {
    return this.pipe.transform(this.data);
  }
  onClick() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
};
TuiTbodyComponent.ɵfac = function TuiTbodyComponent_Factory(t) {
  return new (t || TuiTbodyComponent)(ɵɵdirectiveInject(TuiTableSortPipe), ɵɵdirectiveInject(TUI_TABLE_OPTIONS), ɵɵdirectiveInject(TUI_ARROW_OPTIONS), ɵɵdirectiveInject(forwardRef(() => TuiTableDirective)));
};
TuiTbodyComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiTbodyComponent,
  selectors: [["tbody", "tuiTbody", ""]],
  contentQueries: function TuiTbodyComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiRowDirective, 5);
      ɵɵcontentQuery(dirIndex, TuiTrComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.row = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rows = _t);
    }
  },
  inputs: {
    data: "data",
    heading: "heading",
    open: "open"
  },
  outputs: {
    openChange: "openChange"
  },
  features: [ɵɵProvidersFeature(TUI_TABLE_PROVIDER)],
  attrs: _c4,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [1, "t-heading", 3, "colSpan"], ["type", "button", 1, "t-expand", 3, "click"], [1, "t-name"], [4, "polymorpheusOutlet"], [1, "t-chevron", 3, "src"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TuiTbodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiTbodyComponent_tr_0_Template, 6, 5, "tr", 0);
      ɵɵtemplate(1, TuiTbodyComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
      ɵɵtemplate(2, TuiTbodyComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.heading);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.open);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.open && ctx.row);
    }
  },
  dependencies: [TuiSvgComponent, NgIf, PolymorpheusOutletDirective, NgForOf, NgTemplateOutlet, TuiMapperPipe],
  styles: ['[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:bold;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:-webkit-sticky;position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:-webkit-sticky;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}'],
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTbodyComponent, [{
    type: Component,
    args: [{
      selector: "tbody[tuiTbody]",
      templateUrl: "./tbody.template.html",
      styleUrls: ["./tbody.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_TABLE_PROVIDER
    }]
  }], function() {
    return [{
      type: TuiTableSortPipe,
      decorators: [{
        type: Inject,
        args: [TuiTableSortPipe]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TABLE_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ARROW_OPTIONS]
      }]
    }, {
      type: TuiTableDirective,
      decorators: [{
        type: Inject,
        args: [forwardRef(() => TuiTableDirective)]
      }]
    }];
  }, {
    data: [{
      type: Input
    }],
    heading: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }],
    row: [{
      type: ContentChild,
      args: [forwardRef(() => TuiRowDirective)]
    }],
    rows: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTrComponent)]
    }]
  });
})();
var TuiThGroupComponent = class {
  constructor(table) {
    this.table = table;
    this.heads = EMPTY_QUERY;
    this.heads$ = null;
  }
  ngAfterContentInit() {
    this.heads$ = this.heads.changes.pipe(startWith(null), map(() => this.heads.reduce((record, item) => Object.assign(Object.assign({}, record), {
      [item.tuiHead]: item
    }), {})));
  }
};
TuiThGroupComponent.ɵfac = function TuiThGroupComponent_Factory(t) {
  return new (t || TuiThGroupComponent)(ɵɵdirectiveInject(forwardRef(() => TuiTableDirective)));
};
TuiThGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiThGroupComponent,
  selectors: [["tr", "tuiThGroup", ""]],
  contentQueries: function TuiThGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiThComponent, 5);
      ɵɵcontentQuery(dirIndex, TuiHeadDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.th = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.heads = _t);
    }
  },
  features: [ɵɵProvidersFeature([TUI_TABLE_PROVIDER])],
  attrs: _c5,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["plain", ""], ["tuiTh", "", 4, "ngIf"], ["tuiTh", ""]],
  template: function TuiThGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, TuiThGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
      ɵɵpipe(2, "async");
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.heads$));
    }
  },
  dependencies: [TuiThComponent, NgIf, NgForOf, NgTemplateOutlet, AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThGroupComponent, [{
    type: Component,
    args: [{
      selector: "tr[tuiThGroup]",
      templateUrl: "./th-group.template.html",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_TABLE_PROVIDER]
    }]
  }], function() {
    return [{
      type: TuiTableDirective,
      decorators: [{
        type: Inject,
        args: [forwardRef(() => TuiTableDirective)]
      }]
    }];
  }, {
    th: [{
      type: ContentChild,
      args: [forwardRef(() => TuiThComponent)]
    }],
    heads: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiHeadDirective)]
    }]
  });
})();
var TuiTableModule = class {
};
TuiTableModule.ɵfac = function TuiTableModule_Factory(t) {
  return new (t || TuiTableModule)();
};
TuiTableModule.ɵmod = ɵɵdefineNgModule({
  type: TuiTableModule,
  declarations: [TuiTableDirective, TuiTbodyComponent, TuiThGroupComponent, TuiThComponent, TuiTdComponent, TuiTrComponent, TuiCellDirective, TuiHeadDirective, TuiRowDirective, TuiSortByDirective, TuiSortableDirective, TuiTheadDirective, TuiResizedDirective, TuiTableSortPipe, TuiDirectionOrderDirective],
  imports: [CommonModule, PolymorpheusModule, TuiMapperPipeModule, TuiSvgModule],
  exports: [TuiTableDirective, TuiTbodyComponent, TuiThGroupComponent, TuiThComponent, TuiTdComponent, TuiTrComponent, TuiCellDirective, TuiHeadDirective, TuiRowDirective, TuiSortByDirective, TuiSortableDirective, TuiTheadDirective, TuiTableSortPipe, TuiDirectionOrderDirective]
});
TuiTableModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule, TuiMapperPipeModule, TuiSvgModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule, TuiMapperPipeModule, TuiSvgModule],
      declarations: [TuiTableDirective, TuiTbodyComponent, TuiThGroupComponent, TuiThComponent, TuiTdComponent, TuiTrComponent, TuiCellDirective, TuiHeadDirective, TuiRowDirective, TuiSortByDirective, TuiSortableDirective, TuiTheadDirective, TuiResizedDirective, TuiTableSortPipe, TuiDirectionOrderDirective],
      exports: [TuiTableDirective, TuiTbodyComponent, TuiThGroupComponent, TuiThComponent, TuiTdComponent, TuiTrComponent, TuiCellDirective, TuiHeadDirective, TuiRowDirective, TuiSortByDirective, TuiSortableDirective, TuiTheadDirective, TuiTableSortPipe, TuiDirectionOrderDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-table/fesm2015/taiga-ui-addon-table-components-table-pagination.js
function TuiTablePaginationComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementStart(2, "strong", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r1 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", texts_r1.pages, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.pages);
  }
}
function TuiTablePaginationComponent_ng_container_0_button_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 8)(1, "strong");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", ctx_r3.start + 1, "–", ctx_r3.end, "");
  }
}
function TuiTablePaginationComponent_ng_container_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "strong");
    ɵɵtext(1, "0 - 0");
    ɵɵelementEnd();
  }
}
function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r16 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r16, " ");
  }
}
function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 15);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(4);
    ɵɵproperty("src", ctx_r13.commonIcons.check);
  }
}
function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
}
var _c03 = function(a0, a1) {
  return {
    $implicit: a0,
    total: a1
  };
};
function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11);
    ɵɵlistener("click", function TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_Template_button_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r18);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r17 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r17.onItem(item_r11));
    });
    ɵɵtemplate(2, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 12);
    ɵɵtemplate(3, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_tui_svg_3_Template, 1, 1, "tui-svg", 13);
    ɵɵtemplate(4, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", null, 14, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const _r14 = ɵɵreference(5);
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r10.options.sizeOptionContent)("polymorpheusOutletContext", ɵɵpureFunction2(4, _c03, item_r11, ctx_r10.total));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r11 === ctx_r10.size)("ngIfElse", _r14);
  }
}
function TuiTablePaginationComponent_ng_container_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 9);
    ɵɵtemplate(1, TuiTablePaginationComponent_ng_container_0_ng_template_9_ng_container_1_Template, 6, 7, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r7.items);
  }
}
function TuiTablePaginationComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 17);
    ɵɵlistener("click", function TuiTablePaginationComponent_ng_container_0_ng_container_14_Template_button_click_1_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r20.back());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 18);
    ɵɵlistener("click", function TuiTablePaginationComponent_ng_container_0_ng_container_14_Template_button_click_2_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r22 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r22.forth());
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const spinTexts_r19 = ctx.ngIf;
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r8.leftDisabled)("icon", ctx_r8.icons.decrement)("title", spinTexts_r19[0]);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r8.rightDisabled)("icon", ctx_r8.icons.increment)("title", spinTexts_r19[1]);
  }
}
function TuiTablePaginationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 1);
    ɵɵtemplate(2, TuiTablePaginationComponent_ng_container_0_ng_container_2_Template, 4, 2, "ng-container", 0);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 2);
    ɵɵtext(4);
    ɵɵelementStart(5, "tui-hosted-dropdown", 3);
    ɵɵlistener("openChange", function TuiTablePaginationComponent_ng_container_0_Template_tui_hosted_dropdown_openChange_5_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r23 = ɵɵnextContext();
      return ɵɵresetView(ctx_r23.open = $event);
    });
    ɵɵtemplate(6, TuiTablePaginationComponent_ng_container_0_button_6_Template, 3, 2, "button", 4);
    ɵɵtemplate(7, TuiTablePaginationComponent_ng_container_0_ng_template_7_Template, 2, 0, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵtemplate(9, TuiTablePaginationComponent_ng_container_0_ng_template_9_Template, 2, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵtext(11);
    ɵɵelementStart(12, "strong", 7);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵtemplate(14, TuiTablePaginationComponent_ng_container_0_ng_container_14_Template, 3, 6, "ng-container", 0);
    ɵɵpipe(15, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const _r4 = ɵɵreference(8);
    const _r6 = ɵɵreference(10);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.options.showPages);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", texts_r1.linesPerPage, " ");
    ɵɵadvance(1);
    ɵɵproperty("content", _r6)("open", ctx_r0.open);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.total !== 0)("ngIfElse", _r4);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", texts_r1.of, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.total);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ɵɵpipeBind1(15, 9, ctx_r0.spinTexts$));
  }
}
function defaultSizeOptionContent({
  $implicit
}) {
  return `${$implicit}`;
}
var TUI_TABLE_PAGINATION_DEFAULT_OPTIONS = {
  sizeOptionContent: defaultSizeOptionContent,
  showPages: true,
  items: [10, 20, 50, 100],
  size: 10
};
var TUI_TABLE_PAGINATION_OPTIONS = tuiCreateToken(TUI_TABLE_PAGINATION_DEFAULT_OPTIONS);
function tuiTablePaginationOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABLE_PAGINATION_OPTIONS, options, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS);
}
var TuiTablePaginationComponent = class {
  constructor(icons, spinTexts$, texts$, options, commonIcons) {
    this.icons = icons;
    this.spinTexts$ = spinTexts$;
    this.texts$ = texts$;
    this.options = options;
    this.commonIcons = commonIcons;
    this.items = this.options.items;
    this.total = 0;
    this.page = 0;
    this.size = this.options.size;
    this.pageChange = new EventEmitter();
    this.sizeChange = new EventEmitter();
    this.paginationChange = new EventEmitter();
    this.open = false;
  }
  get pages() {
    return Math.ceil(this.total / this.size);
  }
  get start() {
    return this.page * this.size;
  }
  get end() {
    return Math.min(this.start + this.size, this.total);
  }
  get leftDisabled() {
    return !this.start;
  }
  get rightDisabled() {
    return this.end === this.total;
  }
  get pagination() {
    return {
      page: this.page,
      size: this.size
    };
  }
  onItem(size) {
    const {
      start
    } = this;
    this.size = size;
    this.sizeChange.emit(size);
    this.open = false;
    this.page = Math.floor(start / this.size);
    this.pageChange.emit(this.page);
    this.paginationChange.emit(this.pagination);
  }
  back() {
    this.page--;
    this.pageChange.emit(this.page);
    this.paginationChange.emit(this.pagination);
  }
  forth() {
    this.page++;
    this.pageChange.emit(this.page);
    this.paginationChange.emit(this.pagination);
  }
};
TuiTablePaginationComponent.ɵfac = function TuiTablePaginationComponent_Factory(t) {
  return new (t || TuiTablePaginationComponent)(ɵɵdirectiveInject(TUI_SPIN_ICONS), ɵɵdirectiveInject(TUI_SPIN_TEXTS), ɵɵdirectiveInject(TUI_TABLE_PAGINATION_TEXTS), ɵɵdirectiveInject(TUI_TABLE_PAGINATION_OPTIONS), ɵɵdirectiveInject(TUI_COMMON_ICONS));
};
TuiTablePaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiTablePaginationComponent,
  selectors: [["tui-table-pagination"]],
  inputs: {
    items: "items",
    total: "total",
    page: "page",
    size: "size"
  },
  outputs: {
    pageChange: "pageChange",
    sizeChange: "sizeChange",
    paginationChange: "paginationChange"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "t-pages"], ["automation-id", "tui-table-pagination__lines-per-page-wrapper"], [3, "content", "open", "openChange"], ["tuiLink", "", "type", "button", 4, "ngIf", "ngIfElse"], ["zeroTotal", ""], ["content", ""], [1, "t-strong"], ["tuiLink", "", "type", "button"], ["size", "s"], [4, "ngFor", "ngForOf"], ["tuiOption", "", 1, "t-item", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["class", "t-checkmark", 3, "src", 4, "ngIf", "ngIfElse"], ["fakeIcon", ""], [1, "t-checkmark", 3, "src"], [1, "t-checkmark"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-back", 3, "disabled", "icon", "title", "click"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 3, "disabled", "icon", "title", "click"]],
  template: function TuiTablePaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiTablePaginationComponent_ng_container_0_Template, 16, 11, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.texts$));
    }
  },
  dependencies: [TuiHostedDropdownComponent, TuiLinkComponent, TuiDataListComponent, TuiOptionComponent, TuiSvgComponent, TuiButtonComponent, NgIf, NgForOf, PolymorpheusOutletDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTablePaginationComponent, [{
    type: Component,
    args: [{
      selector: "tui-table-pagination",
      templateUrl: "./table-pagination.template.html",
      styleUrls: ["./table-pagination.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_SPIN_ICONS]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_SPIN_TEXTS]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_TABLE_PAGINATION_TEXTS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TABLE_PAGINATION_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_COMMON_ICONS]
      }]
    }];
  }, {
    items: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    sizeChange: [{
      type: Output
    }],
    paginationChange: [{
      type: Output
    }]
  });
})();
var TuiTablePaginationModule = class {
};
TuiTablePaginationModule.ɵfac = function TuiTablePaginationModule_Factory(t) {
  return new (t || TuiTablePaginationModule)();
};
TuiTablePaginationModule.ɵmod = ɵɵdefineNgModule({
  type: TuiTablePaginationModule,
  declarations: [TuiTablePaginationComponent],
  imports: [CommonModule, TuiButtonModule, TuiLinkModule, TuiHostedDropdownModule, TuiDataListModule, TuiSvgModule, PolymorpheusModule],
  exports: [TuiTablePaginationComponent]
});
TuiTablePaginationModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiButtonModule, TuiLinkModule, TuiHostedDropdownModule, TuiDataListModule, TuiSvgModule, PolymorpheusModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTablePaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiButtonModule, TuiLinkModule, TuiHostedDropdownModule, TuiDataListModule, TuiSvgModule, PolymorpheusModule],
      declarations: [TuiTablePaginationComponent],
      exports: [TuiTablePaginationComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-table/fesm2015/taiga-ui-addon-table-directives-table-filters.js
var AbstractTuiTableFilter = class {
};
var TuiGenericFilterDirective = class extends AbstractTuiTableFilter {
  constructor() {
    super(...arguments);
    this.filter = ALWAYS_TRUE_HANDLER;
  }
};
TuiGenericFilterDirective.ɵfac = function() {
  let ɵTuiGenericFilterDirective_BaseFactory;
  return function TuiGenericFilterDirective_Factory(t) {
    return (ɵTuiGenericFilterDirective_BaseFactory || (ɵTuiGenericFilterDirective_BaseFactory = ɵɵgetInheritedFactory(TuiGenericFilterDirective)))(t || TuiGenericFilterDirective);
  };
}();
TuiGenericFilterDirective.ɵdir = ɵɵdefineDirective({
  type: TuiGenericFilterDirective,
  selectors: [["", "tuiGenericFilter", ""]],
  inputs: {
    filter: ["tuiGenericFilter", "filter"]
  },
  features: [ɵɵProvidersFeature([{
    provide: AbstractTuiTableFilter,
    useExisting: TuiGenericFilterDirective
  }]), ɵɵInheritDefinitionFeature]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGenericFilterDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiGenericFilter]",
      providers: [{
        provide: AbstractTuiTableFilter,
        useExisting: TuiGenericFilterDirective
      }]
    }]
  }], null, {
    filter: [{
      type: Input,
      args: ["tuiGenericFilter"]
    }]
  });
})();
var TuiTableFiltersDirective = class {
  constructor() {
    this.refresh$ = new ReplaySubject(1);
    this.filters = [];
  }
  register(filter2) {
    this.filters = this.filters.concat(filter2);
    this.update();
  }
  unregister(filter2) {
    this.filters = this.filters.filter((item) => item !== filter2);
    this.update();
  }
  filter(items) {
    return this.refresh$.pipe(switchMap(identity), startWith(null), map(() => items.filter((item) => this.check(item))));
  }
  check(item) {
    return this.filters.every((filter2) => filter2.filter(item));
  }
  update() {
    this.refresh$.next(merge(...this.filters.map(({
      refresh$
    }) => refresh$)));
  }
};
TuiTableFiltersDirective.ɵfac = function TuiTableFiltersDirective_Factory(t) {
  return new (t || TuiTableFiltersDirective)();
};
TuiTableFiltersDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTableFiltersDirective,
  selectors: [["", "tuiTableFilters", ""]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFiltersDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTableFilters]"
    }]
  }], null, null);
})();
var TuiTableFilterDirective = class {
  constructor(head, delegate, control, filters) {
    this.head = head;
    this.delegate = delegate;
    this.control = control;
    this.filters = filters;
    this.refresh$ = defer(() => {
      var _a;
      return merge(this.control.valueChanges || EMPTY, ((_a = this.control.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(distinctUntilChanged())) || EMPTY);
    });
  }
  ngOnInit() {
    this.filters.register(this);
  }
  ngOnDestroy() {
    this.filters.unregister(this);
  }
  filter(item) {
    const {
      disabled,
      value
    } = this.control;
    return !!disabled || !this.key || this.delegate.filter(item[this.key], value);
  }
  get key() {
    var _a;
    return this.tuiTableFilter || ((_a = this.head) === null || _a === void 0 ? void 0 : _a.tuiHead);
  }
};
TuiTableFilterDirective.ɵfac = function TuiTableFilterDirective_Factory(t) {
  return new (t || TuiTableFilterDirective)(ɵɵdirectiveInject(TuiHeadDirective, 8), ɵɵdirectiveInject(AbstractTuiTableFilter), ɵɵdirectiveInject(NgControl), ɵɵdirectiveInject(TuiTableFiltersDirective));
};
TuiTableFilterDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTableFilterDirective,
  selectors: [["", "tuiTableFilter", ""]],
  inputs: {
    tuiTableFilter: "tuiTableFilter"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFilterDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTableFilter]"
    }]
  }], function() {
    return [{
      type: TuiHeadDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiHeadDirective]
      }]
    }, {
      type: AbstractTuiTableFilter,
      decorators: [{
        type: Inject,
        args: [AbstractTuiTableFilter]
      }]
    }, {
      type: NgControl,
      decorators: [{
        type: Inject,
        args: [NgControl]
      }]
    }, {
      type: TuiTableFiltersDirective,
      decorators: [{
        type: Inject,
        args: [TuiTableFiltersDirective]
      }]
    }];
  }, {
    tuiTableFilter: [{
      type: Input
    }]
  });
})();
var TuiTableFiltersPipe = class {
  constructor(filters) {
    this.filters = filters;
  }
  transform(items) {
    return this.filters.filter(items);
  }
};
TuiTableFiltersPipe.ɵfac = function TuiTableFiltersPipe_Factory(t) {
  return new (t || TuiTableFiltersPipe)(ɵɵdirectiveInject(TuiTableFiltersDirective, 16));
};
TuiTableFiltersPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiTableFilters",
  type: TuiTableFiltersPipe,
  pure: true
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFiltersPipe, [{
    type: Pipe,
    args: [{
      name: "tuiTableFilters"
    }]
  }], function() {
    return [{
      type: TuiTableFiltersDirective,
      decorators: [{
        type: Inject,
        args: [TuiTableFiltersDirective]
      }]
    }];
  }, null);
})();
var TuiTableFiltersModule = class {
};
TuiTableFiltersModule.ɵfac = function TuiTableFiltersModule_Factory(t) {
  return new (t || TuiTableFiltersModule)();
};
TuiTableFiltersModule.ɵmod = ɵɵdefineNgModule({
  type: TuiTableFiltersModule,
  declarations: [TuiTableFiltersDirective, TuiTableFilterDirective, TuiTableFiltersPipe, TuiGenericFilterDirective],
  exports: [TuiTableFiltersDirective, TuiTableFilterDirective, TuiTableFiltersPipe, TuiGenericFilterDirective]
});
TuiTableFiltersModule.ɵinj = ɵɵdefineInjector({});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableFiltersModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiTableFiltersDirective, TuiTableFilterDirective, TuiTableFiltersPipe, TuiGenericFilterDirective],
      exports: [TuiTableFiltersDirective, TuiTableFilterDirective, TuiTableFiltersPipe, TuiGenericFilterDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/addon-table/fesm2015/taiga-ui-addon-table-utils.js
var tuiDefaultSort2 = tuiDefaultSort;
export {
  AbstractTuiTableFilter,
  TUI_REORDER_DEFAULT_OPTIONS,
  TUI_REORDER_OPTIONS,
  TUI_STUCK,
  TUI_STUCK_PROVIDER,
  TUI_TABLE_DEFAULT_OPTIONS,
  TUI_TABLE_OPTIONS,
  TUI_TABLE_PAGINATION_DEFAULT_OPTIONS,
  TUI_TABLE_PAGINATION_OPTIONS,
  TUI_TABLE_PAGINATION_TEXTS,
  TUI_TABLE_PROVIDER,
  TUI_TABLE_PROVIDERS,
  TUI_TABLE_SHOW_HIDE_MESSAGE,
  TuiCellDirective,
  TuiDirectionOrderDirective,
  TuiGenericFilterDirective,
  TuiHeadDirective,
  TuiReorderComponent,
  TuiReorderModule,
  TuiResizedDirective,
  TuiRowDirective,
  TuiSortByDirective,
  TuiSortableDirective,
  TuiTableDirective,
  TuiTableFilterDirective,
  TuiTableFiltersDirective,
  TuiTableFiltersModule,
  TuiTableFiltersPipe,
  TuiTableModule,
  TuiTablePaginationComponent,
  TuiTablePaginationModule,
  TuiTableSortPipe,
  TuiTbodyComponent,
  TuiTdComponent,
  TuiThComponent,
  TuiThGroupComponent,
  TuiTheadDirective,
  TuiTrComponent,
  tuiDefaultSort2 as tuiDefaultSort,
  tuiReorderOptionsProvider,
  tuiTableOptionsProvider,
  tuiTablePaginationOptionsProvider
};
//# sourceMappingURL=@taiga-ui_addon-table.js.map
