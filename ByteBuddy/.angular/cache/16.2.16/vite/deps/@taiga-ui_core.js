import {
  AbstractTuiDriverDirective,
  AbstractTuiTextfieldHost,
  DEFAULT_ICONS_PATH,
  MASK_CARET_TRAP,
  MODE_PROVIDER,
  SCROLL_REF_SELECTOR,
  STATUS_ICON,
  TEXTFIELD_CONTROLLER_PROVIDER,
  TUI_ALERT_POSITION,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_DURATION,
  TUI_ANIMATION_OPTIONS,
  TUI_ASSERT_ENABLED,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  TUI_CACHE_BUSTING_PAYLOAD,
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_ACCESSOR,
  TUI_DATA_LIST_HOST,
  TUI_DAY_TYPE_HANDLER,
  TUI_DECIMAL_SYMBOLS,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_DEFAULT_ICONS_PLACE,
  TUI_DEFAULT_MARKER_HANDLER,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_DEPRECATED_ICONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOG_OPTIONS,
  TUI_DIGIT_REGEXP,
  TUI_DOCUMENT_OR_SHADOW_ROOT,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  TUI_ELEMENT_REF,
  TUI_EXPAND_LOADED,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_HINT_COMPONENT,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_OPTIONS,
  TUI_ICONS,
  TUI_ICONS_PATH,
  TUI_ICONS_PLACE,
  TUI_ICON_ERROR,
  TUI_ICON_PADDINGS,
  TUI_IS_MOBILE_RES,
  TUI_IS_MOBILE_RES_PROVIDER,
  TUI_LAST_PUNCTUATION_MARK_REGEXP,
  TUI_LATIN_AND_NUMBERS_REGEXP,
  TUI_LATIN_REGEXP,
  TUI_LEADING_ZEROES_REGEXP,
  TUI_LEGACY_MASK,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  TUI_MASK_SYMBOLS_REGEXP,
  TUI_MEDIA,
  TUI_MODE,
  TUI_MONTHS,
  TUI_NON_DIGITS_REGEXP,
  TUI_NON_DIGIT_REGEXP,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  TUI_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT_OBSERVABLE,
  TUI_OPTION_CONTENT,
  TUI_ORDERED_SHORT_WEEK_DAYS,
  TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_PRIMITIVE_TEXTFIELD_OPTIONS,
  TUI_REDUCED_MOTION,
  TUI_SANITIZER,
  TUI_SCROLLABLE,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_SVG_CONTENT_PROCESSOR,
  TUI_SVG_DEFAULT_OPTIONS,
  TUI_SVG_OPTIONS,
  TUI_SVG_SRC_INTERCEPTORS,
  TUI_SVG_SRC_PROCESSOR,
  TUI_TEXTFIELD_APPEARANCE,
  TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
  TUI_TEXTFIELD_CLEANER,
  TUI_TEXTFIELD_CUSTOM_CONTENT,
  TUI_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_TEXTFIELD_FILLER,
  TUI_TEXTFIELD_HOST,
  TUI_TEXTFIELD_ICON,
  TUI_TEXTFIELD_ICON_LEFT,
  TUI_TEXTFIELD_LABEL_OUTSIDE,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TEXTFIELD_POSTFIX,
  TUI_TEXTFIELD_PREFIX,
  TUI_TEXTFIELD_SIZE,
  TUI_TEXTFIELD_WATCHED_CONTROLLER,
  TUI_THEME,
  TUI_VALUE_ACCESSOR,
  TUI_VIEWPORT,
  TuiAccessorProxyDirective,
  TuiAlertComponent,
  TuiAlertDirective,
  TuiAlertModule,
  TuiAlertService,
  TuiAppearance,
  TuiBreakpointService,
  TuiButtonComponent,
  TuiButtonModule,
  TuiCalendarComponent,
  TuiCalendarModule,
  TuiCalendarSheetPipe,
  TuiCalendarSheetPipeModule,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDataListModule,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogDirective,
  TuiDialogModule,
  TuiDialogService,
  TuiDriver,
  TuiDropdownAnimation,
  TuiDropdownComponent,
  TuiDropdownContextDirective,
  TuiDropdownDirective,
  TuiDropdownDriverDirective,
  TuiDropdownHostDirective,
  TuiDropdownHoverDirective,
  TuiDropdownManualDirective,
  TuiDropdownModule,
  TuiDropdownOpenDirective,
  TuiDropdownOpenMonitorDirective,
  TuiDropdownOptionsDirective,
  TuiDropdownPositionDirective,
  TuiDropdownPositionSidedDirective,
  TuiDropdownSelectionDirective,
  TuiErrorComponent,
  TuiErrorModule,
  TuiExpandComponent,
  TuiExpandContentDirective,
  TuiExpandModule,
  TuiFlagPipe,
  TuiFlagPipeModule,
  TuiFormatDatePipe,
  TuiFormatDatePipeModule,
  TuiFormatDateService,
  TuiFormatNumberPipe,
  TuiFormatNumberPipeModule,
  TuiFormatPhonePipe,
  TuiFormatPhonePipeModule,
  TuiGroupDirective,
  TuiGroupModule,
  TuiGroupStylesComponent,
  TuiHintComponent,
  TuiHintDescribeDirective,
  TuiHintDirective,
  TuiHintDriverDirective,
  TuiHintHostDirective,
  TuiHintHoverDirective,
  TuiHintManualDirective,
  TuiHintModule,
  TuiHintOptionsDirective,
  TuiHintPointerDirective,
  TuiHintPositionDirective,
  TuiHintService,
  TuiHintUnstyledComponent,
  TuiHintUnstyledDirective,
  TuiHintsHostComponent,
  TuiHintsHostModule,
  TuiHostedDropdownComponent,
  TuiHostedDropdownConnectorDirective,
  TuiHostedDropdownModule,
  TuiInteractiveState,
  TuiLabelComponent,
  TuiLabelModule,
  TuiLinkComponent,
  TuiLinkModule,
  TuiLoaderComponent,
  TuiLoaderModule,
  TuiMaskAccessorDirective,
  TuiMaskAccessorModule,
  TuiModeDirective,
  TuiModeModule,
  TuiMonthPipe,
  TuiMonthPipeModule,
  TuiNightThemeService,
  TuiNotification,
  TuiNotificationComponent,
  TuiNotificationModule,
  TuiNumberFormatDirective,
  TuiNumberFormatModule,
  TuiOptGroupDirective,
  TuiOptionComponent,
  TuiOrderWeekDaysPipe,
  TuiOrderWeekDaysPipeModule,
  TuiPositionAccessor,
  TuiPositionService,
  TuiPrimitiveCalendarComponent,
  TuiPrimitiveCalendarModule,
  TuiPrimitiveCheckboxComponent,
  TuiPrimitiveCheckboxModule,
  TuiPrimitiveSpinButtonComponent,
  TuiPrimitiveSpinButtonModule,
  TuiPrimitiveTextfieldComponent,
  TuiPrimitiveTextfieldDirective,
  TuiPrimitiveTextfieldModule,
  TuiPrimitiveYearMonthPaginationComponent,
  TuiPrimitiveYearMonthPaginationModule,
  TuiPrimitiveYearPickerComponent,
  TuiPrimitiveYearPickerModule,
  TuiRangeState,
  TuiRectAccessor,
  TuiRootComponent,
  TuiRootModule,
  TuiRouterLinkActiveService,
  TuiScrollControlsComponent,
  TuiScrollControlsModule,
  TuiScrollIntoViewDirective,
  TuiScrollIntoViewModule,
  TuiScrollRefDirective,
  TuiScrollableDirective,
  TuiScrollbarComponent,
  TuiScrollbarDirective,
  TuiScrollbarModule,
  TuiSvgComponent,
  TuiSvgDefsHostComponent,
  TuiSvgDefsHostModule,
  TuiSvgModule,
  TuiSvgService,
  TuiTextfieldAppearanceDirective,
  TuiTextfieldCleanerDirective,
  TuiTextfieldComponent,
  TuiTextfieldController,
  TuiTextfieldControllerModule,
  TuiTextfieldCustomContentDirective,
  TuiTextfieldFillerDirective,
  TuiTextfieldIconDirective,
  TuiTextfieldIconLeftDirective,
  TuiTextfieldLabelOutsideDirective,
  TuiTextfieldPostfixDirective,
  TuiTextfieldPrefixDirective,
  TuiTextfieldSizeDirective,
  TuiThemeNightComponent,
  TuiThemeNightModule,
  TuiTooltipComponent,
  TuiTooltipModule,
  TuiValueDecorationComponent,
  TuiVehicle,
  TuiVisualViewportService,
  TuiWrapperDirective,
  TuiWrapperModule,
  tuiAsDataList,
  tuiAsDataListAccessor,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsOptionContent,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  tuiAsTextfieldHost,
  tuiAsVehicle,
  tuiAsViewport,
  tuiButtonOptionsProvider,
  tuiCapitalize,
  tuiCapitalizeFirstLetter,
  tuiCheckFixedPosition,
  tuiCheckboxOptionsProvider,
  tuiCommonIconsProvider,
  tuiCreateAutoCorrectedNumberPipe,
  tuiCreateCorrectionMask,
  tuiCreateNumberMask,
  tuiDialogOptionsProvider,
  tuiDropdownAnimation,
  tuiDropdownHoverOptionsProvider,
  tuiDropdownOptionsProvider,
  tuiEditingKeys,
  tuiEnableAutoCorrectDecimalSymbol,
  tuiFadeIn,
  tuiFadeInBottom,
  tuiFadeInList,
  tuiFadeInTop,
  tuiFallbackAccessor,
  tuiFallbackRectAccessor,
  tuiFormatNumber,
  tuiFormatPhone,
  tuiGetBorder,
  tuiGetFractionPartPadded,
  tuiGetSafeAreaSize,
  tuiGetScreenWidth,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiHeightCollapse,
  tuiHeightCollapseList,
  tuiHintOptionsProvider,
  tuiIconsPathFactory,
  tuiIsEditingKey,
  tuiIsMobile,
  tuiIsObscured,
  tuiIsPresumedHTMLString,
  tuiLoaderOptionsProvider,
  tuiMaskedMoneyValueIsEmpty,
  tuiMaskedNumberStringToNumber,
  tuiNotificationOptionsProvider,
  tuiNumberFormatProvider,
  tuiNumberToStringWithoutExp,
  tuiOtherDecimalSymbol,
  tuiOverrideOptions,
  tuiPop,
  tuiPositionAccessorFor,
  tuiPrimitiveTextfieldOptionsProvider,
  tuiProcessIcon,
  tuiRectAccessorFor,
  tuiScaleIn,
  tuiScaleInList,
  tuiScrollbarOptionsProvider,
  tuiSizeBigger,
  tuiSlideIn,
  tuiSlideInBottom,
  tuiSlideInBottomList,
  tuiSlideInLeft,
  tuiSlideInLeftList,
  tuiSlideInRight,
  tuiSlideInRightList,
  tuiSlideInTop,
  tuiSlideInTopList,
  tuiSmartSearch,
  tuiSvgOptionsProvider,
  tuiSvgSrcInterceptors,
  tuiTextfieldOptionsProvider,
  tuiWatchedControllerFactory,
  tuiWidthCollapse,
  tuiWidthCollapseList,
  tuiZonefulMap
} from "./chunk-RENNRJXH.js";
import "./chunk-WTFXD3X5.js";
import "./chunk-TAQQTY2B.js";
import "./chunk-7IUQLMWK.js";
import "./chunk-3DDK7KHM.js";
import "./chunk-DS6Z6SBO.js";
import "./chunk-URYBJV6V.js";
import "./chunk-KQO2OZVL.js";
import "./chunk-DEK5RUFH.js";
import "./chunk-5VI6HJQQ.js";
import "./chunk-MOXL5CJG.js";
import "./chunk-HY7P5UUD.js";
import "./chunk-W44PFRPX.js";
import "./chunk-XSKKLE2R.js";
export {
  AbstractTuiDriverDirective,
  AbstractTuiTextfieldHost,
  DEFAULT_ICONS_PATH,
  MASK_CARET_TRAP,
  MODE_PROVIDER,
  SCROLL_REF_SELECTOR,
  STATUS_ICON,
  TEXTFIELD_CONTROLLER_PROVIDER,
  TUI_ALERT_POSITION,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_DURATION,
  TUI_ANIMATION_OPTIONS,
  TUI_ASSERT_ENABLED,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  TUI_CACHE_BUSTING_PAYLOAD,
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_ACCESSOR,
  TUI_DATA_LIST_HOST,
  TUI_DAY_TYPE_HANDLER,
  TUI_DECIMAL_SYMBOLS,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_DEFAULT_ICONS_PLACE,
  TUI_DEFAULT_MARKER_HANDLER,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_DEPRECATED_ICONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOG_OPTIONS,
  TUI_DIGIT_REGEXP,
  TUI_DOCUMENT_OR_SHADOW_ROOT,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  TUI_ELEMENT_REF,
  TUI_EXPAND_LOADED,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_HINT_COMPONENT,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_OPTIONS,
  TUI_ICONS,
  TUI_ICONS_PATH,
  TUI_ICONS_PLACE,
  TUI_ICON_ERROR,
  TUI_ICON_PADDINGS,
  TUI_IS_MOBILE_RES,
  TUI_IS_MOBILE_RES_PROVIDER,
  TUI_LAST_PUNCTUATION_MARK_REGEXP,
  TUI_LATIN_AND_NUMBERS_REGEXP,
  TUI_LATIN_REGEXP,
  TUI_LEADING_ZEROES_REGEXP,
  TUI_LEGACY_MASK,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  TUI_MASK_SYMBOLS_REGEXP,
  TUI_MEDIA,
  TUI_MODE,
  TUI_MONTHS,
  TUI_NON_DIGITS_REGEXP,
  TUI_NON_DIGIT_REGEXP,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  TUI_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT_OBSERVABLE,
  TUI_OPTION_CONTENT,
  TUI_ORDERED_SHORT_WEEK_DAYS,
  TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_PRIMITIVE_TEXTFIELD_OPTIONS,
  TUI_REDUCED_MOTION,
  TUI_SANITIZER,
  TUI_SCROLLABLE,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_SVG_CONTENT_PROCESSOR,
  TUI_SVG_DEFAULT_OPTIONS,
  TUI_SVG_OPTIONS,
  TUI_SVG_SRC_INTERCEPTORS,
  TUI_SVG_SRC_PROCESSOR,
  TUI_TEXTFIELD_APPEARANCE,
  TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
  TUI_TEXTFIELD_CLEANER,
  TUI_TEXTFIELD_CUSTOM_CONTENT,
  TUI_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_TEXTFIELD_FILLER,
  TUI_TEXTFIELD_HOST,
  TUI_TEXTFIELD_ICON,
  TUI_TEXTFIELD_ICON_LEFT,
  TUI_TEXTFIELD_LABEL_OUTSIDE,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TEXTFIELD_POSTFIX,
  TUI_TEXTFIELD_PREFIX,
  TUI_TEXTFIELD_SIZE,
  TUI_TEXTFIELD_WATCHED_CONTROLLER,
  TUI_THEME,
  TUI_VALUE_ACCESSOR,
  TUI_VIEWPORT,
  TuiAccessorProxyDirective,
  TuiAlertComponent,
  TuiAlertDirective,
  TuiAlertModule,
  TuiAlertService,
  TuiAppearance,
  TuiBreakpointService,
  TuiButtonComponent,
  TuiButtonModule,
  TuiCalendarComponent,
  TuiCalendarModule,
  TuiCalendarSheetPipe,
  TuiCalendarSheetPipeModule,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDataListModule,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogDirective,
  TuiDialogModule,
  TuiDialogService,
  TuiDriver,
  TuiDropdownAnimation,
  TuiDropdownComponent,
  TuiDropdownContextDirective,
  TuiDropdownDirective,
  TuiDropdownDriverDirective,
  TuiDropdownHostDirective,
  TuiDropdownHoverDirective,
  TuiDropdownManualDirective,
  TuiDropdownModule,
  TuiDropdownOpenDirective,
  TuiDropdownOpenMonitorDirective,
  TuiDropdownOptionsDirective,
  TuiDropdownPositionDirective,
  TuiDropdownPositionSidedDirective,
  TuiDropdownSelectionDirective,
  TuiErrorComponent,
  TuiErrorModule,
  TuiExpandComponent,
  TuiExpandContentDirective,
  TuiExpandModule,
  TuiFlagPipe,
  TuiFlagPipeModule,
  TuiFormatDatePipe,
  TuiFormatDatePipeModule,
  TuiFormatDateService,
  TuiFormatNumberPipe,
  TuiFormatNumberPipeModule,
  TuiFormatPhonePipe,
  TuiFormatPhonePipeModule,
  TuiGroupDirective,
  TuiGroupModule,
  TuiGroupStylesComponent,
  TuiHintComponent,
  TuiHintDescribeDirective,
  TuiHintDirective,
  TuiHintDriverDirective,
  TuiHintHostDirective,
  TuiHintHoverDirective,
  TuiHintManualDirective,
  TuiHintModule,
  TuiHintOptionsDirective,
  TuiHintPointerDirective,
  TuiHintPositionDirective,
  TuiHintService,
  TuiHintUnstyledComponent,
  TuiHintUnstyledDirective,
  TuiHintsHostComponent,
  TuiHintsHostModule,
  TuiHostedDropdownComponent,
  TuiHostedDropdownConnectorDirective,
  TuiHostedDropdownModule,
  TuiInteractiveState,
  TuiLabelComponent,
  TuiLabelModule,
  TuiLinkComponent,
  TuiLinkModule,
  TuiLoaderComponent,
  TuiLoaderModule,
  TuiMaskAccessorDirective,
  TuiMaskAccessorModule,
  TuiModeDirective,
  TuiModeModule,
  TuiMonthPipe,
  TuiMonthPipeModule,
  TuiNightThemeService,
  TuiNotification,
  TuiNotificationComponent,
  TuiNotificationModule,
  TuiNumberFormatDirective,
  TuiNumberFormatModule,
  TuiOptGroupDirective,
  TuiOptionComponent,
  TuiOrderWeekDaysPipe,
  TuiOrderWeekDaysPipeModule,
  TuiPositionAccessor,
  TuiPositionService,
  TuiPrimitiveCalendarComponent,
  TuiPrimitiveCalendarModule,
  TuiPrimitiveCheckboxComponent,
  TuiPrimitiveCheckboxModule,
  TuiPrimitiveSpinButtonComponent,
  TuiPrimitiveSpinButtonModule,
  TuiPrimitiveTextfieldComponent,
  TuiPrimitiveTextfieldDirective,
  TuiPrimitiveTextfieldModule,
  TuiPrimitiveYearMonthPaginationComponent,
  TuiPrimitiveYearMonthPaginationModule,
  TuiPrimitiveYearPickerComponent,
  TuiPrimitiveYearPickerModule,
  TuiRangeState,
  TuiRectAccessor,
  TuiRootComponent,
  TuiRootModule,
  TuiRouterLinkActiveService,
  TuiScrollControlsComponent,
  TuiScrollControlsModule,
  TuiScrollIntoViewDirective,
  TuiScrollIntoViewModule,
  TuiScrollRefDirective,
  TuiScrollableDirective,
  TuiScrollbarComponent,
  TuiScrollbarDirective,
  TuiScrollbarModule,
  TuiSvgComponent,
  TuiSvgDefsHostComponent,
  TuiSvgDefsHostModule,
  TuiSvgModule,
  TuiSvgService,
  TuiTextfieldAppearanceDirective,
  TuiTextfieldCleanerDirective,
  TuiTextfieldComponent,
  TuiTextfieldController,
  TuiTextfieldControllerModule,
  TuiTextfieldCustomContentDirective,
  TuiTextfieldFillerDirective,
  TuiTextfieldIconDirective,
  TuiTextfieldIconLeftDirective,
  TuiTextfieldLabelOutsideDirective,
  TuiTextfieldPostfixDirective,
  TuiTextfieldPrefixDirective,
  TuiTextfieldSizeDirective,
  TuiThemeNightComponent,
  TuiThemeNightModule,
  TuiTooltipComponent,
  TuiTooltipModule,
  TuiValueDecorationComponent,
  TuiVehicle,
  TuiVisualViewportService,
  TuiWrapperDirective,
  TuiWrapperModule,
  tuiAsDataList,
  tuiAsDataListAccessor,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsOptionContent,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  tuiAsTextfieldHost,
  tuiAsVehicle,
  tuiAsViewport,
  tuiButtonOptionsProvider,
  tuiCapitalize,
  tuiCapitalizeFirstLetter,
  tuiCheckFixedPosition,
  tuiCheckboxOptionsProvider,
  tuiCommonIconsProvider,
  tuiCreateAutoCorrectedNumberPipe,
  tuiCreateCorrectionMask,
  tuiCreateNumberMask,
  tuiDialogOptionsProvider,
  tuiDropdownAnimation,
  tuiDropdownHoverOptionsProvider,
  tuiDropdownOptionsProvider,
  tuiEditingKeys,
  tuiEnableAutoCorrectDecimalSymbol,
  tuiFadeIn,
  tuiFadeInBottom,
  tuiFadeInList,
  tuiFadeInTop,
  tuiFallbackAccessor,
  tuiFallbackRectAccessor,
  tuiFormatNumber,
  tuiFormatPhone,
  tuiGetBorder,
  tuiGetFractionPartPadded,
  tuiGetSafeAreaSize,
  tuiGetScreenWidth,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiHeightCollapse,
  tuiHeightCollapseList,
  tuiHintOptionsProvider,
  tuiIconsPathFactory,
  tuiIsEditingKey,
  tuiIsMobile,
  tuiIsObscured,
  tuiIsPresumedHTMLString,
  tuiLoaderOptionsProvider,
  tuiMaskedMoneyValueIsEmpty,
  tuiMaskedNumberStringToNumber,
  tuiNotificationOptionsProvider,
  tuiNumberFormatProvider,
  tuiNumberToStringWithoutExp,
  tuiOtherDecimalSymbol,
  tuiOverrideOptions,
  tuiPop,
  tuiPositionAccessorFor,
  tuiPrimitiveTextfieldOptionsProvider,
  tuiProcessIcon,
  tuiRectAccessorFor,
  tuiScaleIn,
  tuiScaleInList,
  tuiScrollbarOptionsProvider,
  tuiSizeBigger,
  tuiSlideIn,
  tuiSlideInBottom,
  tuiSlideInBottomList,
  tuiSlideInLeft,
  tuiSlideInLeftList,
  tuiSlideInRight,
  tuiSlideInRightList,
  tuiSlideInTop,
  tuiSlideInTopList,
  tuiSmartSearch,
  tuiSvgOptionsProvider,
  tuiSvgSrcInterceptors,
  tuiTextfieldOptionsProvider,
  tuiWatchedControllerFactory,
  tuiWidthCollapse,
  tuiWidthCollapseList,
  tuiZonefulMap
};
//# sourceMappingURL=@taiga-ui_core.js.map
