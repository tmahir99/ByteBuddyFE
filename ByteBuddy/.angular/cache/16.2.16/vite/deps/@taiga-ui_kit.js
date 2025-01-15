import {
  AbstractTuiDataListWrapper,
  AbstractTuiFilterByInput,
  AbstractTuiNativeMultiSelect,
  AbstractTuiNativeSelect,
  DATE_TIME_SEPARATOR,
  DEFAULT_ROUTER_LINK_OPTIONS,
  DEFAULT_ROWS,
  EMPTY_MASK,
  FIXED_DROPDOWN_CONTROLLER_PROVIDER,
  GROUP_CLASS_NAMES,
  LINE_HEIGHT_L,
  LINE_HEIGHT_M,
  MASK_AFTER_CODE_REGEXP,
  MAX_DAY_RANGE_LENGTH_MAPPER,
  MAX_TIME_VALUES,
  MaskedInputDirective,
  TUI_ARROW,
  TUI_ARROW_DEFAULT_MODE,
  TUI_ARROW_DEFAULT_OPTIONS,
  TUI_ARROW_MODE,
  TUI_ARROW_OPTIONS,
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  TUI_BREADCRUMBS_DEFAULT_OPTIONS,
  TUI_BREADCRUMBS_OPTIONS,
  TUI_CALENDAR_DATE_STREAM,
  TUI_CALENDAR_MONTHS,
  TUI_CANCEL_WORD,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_COPY_TEXTS,
  TUI_COUNTRIES,
  TUI_COUNTRIES_DEFAULT_MASKS,
  TUI_COUNTRIES_MASKS,
  TUI_DATE_MODE_MASKITO_ADAPTER,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TEXTS,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DEFAULT_TREE_CONTROLLER,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_DONE_WORD,
  TUI_FILE_DEFAULT_OPTIONS,
  TUI_FILE_OPTIONS,
  TUI_FILE_TEXTS,
  TUI_FLOATING_PRECISION,
  TUI_FROM_TO_TEXTS,
  TUI_HIDE_TEXT,
  TUI_INPUT_COPY_DEFAULT_OPTIONS,
  TUI_INPUT_COPY_OPTIONS,
  TUI_INPUT_COUNT_DEFAULT_OPTIONS,
  TUI_INPUT_COUNT_OPTIONS,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  TUI_INPUT_FILES_DEFAULT_OPTIONS,
  TUI_INPUT_FILES_OPTIONS,
  TUI_INPUT_FILE_TEXTS,
  TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
  TUI_INPUT_NUMBER_OPTIONS,
  TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
  TUI_INPUT_PASSWORD_OPTIONS,
  TUI_INPUT_PHONE_DEFAULT_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
  TUI_INPUT_PHONE_OPTIONS,
  TUI_INPUT_TAG_DEFAULT_OPTIONS,
  TUI_INPUT_TAG_OPTIONS,
  TUI_INPUT_TIME_DEFAULT_OPTIONS,
  TUI_INPUT_TIME_OPTIONS,
  TUI_ITEMS_HANDLERS,
  TUI_LINE_CLAMP_DEFAULT_OPTIONS,
  TUI_LINE_CLAMP_OPTIONS,
  TUI_MOBILE_CALENDAR,
  TUI_MONTH_FORMATTER,
  TUI_MONTH_FORMATTER_PROVIDER,
  TUI_MORE_WORD,
  TUI_MULTI_SELECT_DEFAULT_OPTIONS,
  TUI_MULTI_SELECT_OPTION,
  TUI_MULTI_SELECT_OPTIONS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_NUMBER_VALUE_TRANSFORMER,
  TUI_OTHER_DATE_TEXT,
  TUI_PAGINATION_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_PDF_VIEWER_DEFAULT_OPTIONS,
  TUI_PDF_VIEWER_OPTIONS,
  TUI_PHONE_MASK,
  TUI_PLUS_MINUS_TEXTS,
  TUI_PROMPT,
  TUI_PROMPT_WORDS,
  TUI_PUSH_DEFAULT_OPTIONS,
  TUI_PUSH_OPTIONS,
  TUI_RADIO_DEFAULT_OPTIONS,
  TUI_RADIO_OPTIONS,
  TUI_RATING_DEFAULT_OPTIONS,
  TUI_RATING_OPTIONS,
  TUI_SELECT_DEFAULT_OPTIONS,
  TUI_SELECT_OPTION,
  TUI_SELECT_OPTIONS,
  TUI_SHOW_ALL_TEXT,
  TUI_SLIDER_DEFAULT_OPTIONS,
  TUI_SLIDER_OPTIONS,
  TUI_TABS_DEFAULT_OPTIONS,
  TUI_TABS_OPTIONS,
  TUI_TABS_PROVIDERS,
  TUI_TABS_REFRESH,
  TUI_TAB_ACTIVATE,
  TUI_TAB_EVENT,
  TUI_TAB_MARGIN,
  TUI_TAB_PROVIDERS,
  TUI_TAG_DEFAULT_OPTIONS,
  TUI_TAG_OPTIONS,
  TUI_TIME_MASK,
  TUI_TIME_TEXTS,
  TUI_TOGGLE_DEFAULT_OPTIONS,
  TUI_TOGGLE_OPTIONS,
  TUI_TREE_ACCESSOR,
  TUI_TREE_CONTENT,
  TUI_TREE_CONTROLLER,
  TUI_TREE_ITEM_CONTENT,
  TUI_TREE_ITEM_PROVIDERS,
  TUI_TREE_LEVEL,
  TUI_TREE_LOADER,
  TUI_TREE_LOADING,
  TUI_TREE_NODE,
  TUI_TREE_START,
  TUI_VALIDATION_ERRORS,
  TUI_VALUE_ACCESSOR_PROVIDER,
  TextMaskModule,
  TuiAccordionComponent,
  TuiAccordionItemComponent,
  TuiAccordionItemContentDirective,
  TuiAccordionItemEagerContentDirective,
  TuiAccordionModule,
  TuiActionComponent,
  TuiActionModule,
  TuiArrowComponent,
  TuiArrowModule,
  TuiAvatarComponent,
  TuiAvatarModule,
  TuiBadgeComponent,
  TuiBadgeModule,
  TuiBadgedContentComponent,
  TuiBadgedContentModule,
  TuiBreadcrumbsComponent,
  TuiBreadcrumbsModule,
  TuiCalendarMonthComponent,
  TuiCalendarMonthModule,
  TuiCalendarRangeComponent,
  TuiCalendarRangeModule,
  TuiCarouselAutoscrollDirective,
  TuiCarouselButtonsDirective,
  TuiCarouselComponent,
  TuiCarouselDirective,
  TuiCarouselModule,
  TuiCarouselScrollDirective,
  TuiCheckboxBlockComponent,
  TuiCheckboxBlockModule,
  TuiCheckboxComponent,
  TuiCheckboxLabeledComponent,
  TuiCheckboxLabeledModule,
  TuiCheckboxModule,
  TuiComboBoxComponent,
  TuiComboBoxDirective,
  TuiComboBoxModule,
  TuiComboBoxStrictDirective,
  TuiDataListDropdownManagerDirective,
  TuiDataListDropdownManagerModule,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapperComponent,
  TuiDataListWrapperModule,
  TuiDayRangePeriod,
  TuiDialogFormService,
  TuiElasticContainerComponent,
  TuiElasticContainerDirective,
  TuiElasticContainerModule,
  TuiExtractCountryCodeModule,
  TuiFieldErrorContentPipe,
  TuiFieldErrorPipe,
  TuiFieldErrorPipeModule,
  TuiFileComponent,
  TuiFilesComponent,
  TuiFilesModule,
  TuiFilterByInputPipe,
  TuiFilterByInputPipeModule,
  TuiFilterByInputWithPipe,
  TuiFilterComponent,
  TuiFilterModule,
  TuiHideSelectedPipe,
  TuiHighlightDirective,
  TuiHighlightModule,
  TuiInputComponent,
  TuiInputCopyComponent,
  TuiInputCopyDirective,
  TuiInputCopyModule,
  TuiInputCountComponent,
  TuiInputCountDirective,
  TuiInputCountModule,
  TuiInputDateComponent,
  TuiInputDateDirective,
  TuiInputDateModule,
  TuiInputDateMultiComponent,
  TuiInputDateMultiModule,
  TuiInputDateRangeComponent,
  TuiInputDateRangeDirective,
  TuiInputDateRangeModule,
  TuiInputDateTimeComponent,
  TuiInputDateTimeDirective,
  TuiInputDateTimeModule,
  TuiInputDirective,
  TuiInputFilesComponent,
  TuiInputFilesDirective,
  TuiInputFilesModule,
  TuiInputInlineComponent,
  TuiInputInlineModule,
  TuiInputModule,
  TuiInputMonthComponent,
  TuiInputMonthDirective,
  TuiInputMonthModule,
  TuiInputMonthRangeComponent,
  TuiInputMonthRangeDirective,
  TuiInputMonthRangeModule,
  TuiInputNumberComponent,
  TuiInputNumberDirective,
  TuiInputNumberModule,
  TuiInputPasswordComponent,
  TuiInputPasswordDirective,
  TuiInputPasswordModule,
  TuiInputPhoneComponent,
  TuiInputPhoneDirective,
  TuiInputPhoneInternationalComponent,
  TuiInputPhoneInternationalModule,
  TuiInputPhoneModule,
  TuiInputRangeComponent,
  TuiInputRangeModule,
  TuiInputSliderComponent,
  TuiInputSliderModule,
  TuiInputTagComponent,
  TuiInputTagModule,
  TuiInputTimeComponent,
  TuiInputTimeDirective,
  TuiInputTimeModule,
  TuiInputYearComponent,
  TuiInputYearDirective,
  TuiInputYearModule,
  TuiIslandComponent,
  TuiIslandModule,
  TuiIsoToCountryCodeModule,
  TuiIsoToCountryCodePipe,
  TuiItemsWithMoreComponent,
  TuiItemsWithMoreDirective,
  TuiItemsWithMoreModule,
  TuiItemsWithMoreService,
  TuiLazyLoadingDirective,
  TuiLazyLoadingModule,
  TuiLazyLoadingService,
  TuiLineClampBoxComponent,
  TuiLineClampComponent,
  TuiLineClampModule,
  TuiMarkerIconComponent,
  TuiMarkerIconModule,
  TuiMoreDirective,
  TuiMultiSelectComponent,
  TuiMultiSelectDirective,
  TuiMultiSelectGroupComponent,
  TuiMultiSelectGroupDirective,
  TuiMultiSelectModule,
  TuiMultiSelectOptionComponent,
  TuiMultiSelectOptionModule,
  TuiNamedDay,
  TuiNativeMultiSelectComponent,
  TuiNativeMultiSelectGroupComponent,
  TuiNativeSelectComponent,
  TuiNativeSelectGroupComponent,
  TuiPaginationComponent,
  TuiPaginationModule,
  TuiPdfViewerComponent,
  TuiPdfViewerDirective,
  TuiPdfViewerModule,
  TuiPdfViewerService,
  TuiPresentDirective,
  TuiPresentModule,
  TuiPrimitiveCalendarRangeComponent,
  TuiPrimitiveCalendarRangeModule,
  TuiProgressBarComponent,
  TuiProgressCircleComponent,
  TuiProgressColorSegmentsDirective,
  TuiProgressLabelComponent,
  TuiProgressModule,
  TuiProgressSegmentedComponent,
  TuiProjectClassDirective,
  TuiProjectClassModule,
  TuiPromptComponent,
  TuiPromptModule,
  TuiPushAlertComponent,
  TuiPushAlertDirective,
  TuiPushComponent,
  TuiPushDirective,
  TuiPushModule,
  TuiPushService,
  TuiRadioBlockComponent,
  TuiRadioBlockModule,
  TuiRadioComponent,
  TuiRadioGroupComponent,
  TuiRadioGroupModule,
  TuiRadioLabeledComponent,
  TuiRadioLabeledModule,
  TuiRadioListComponent,
  TuiRadioListModule,
  TuiRadioModule,
  TuiRangeChangeDirective,
  TuiRangeComponent,
  TuiRangeModule,
  TuiRatingComponent,
  TuiRatingModule,
  TuiRoutableDialogComponent,
  TuiRoutableDialogModule,
  TuiSelectComponent,
  TuiSelectDirective,
  TuiSelectModule,
  TuiSelectOptionComponent,
  TuiSelectOptionModule,
  TuiSliderComponent,
  TuiSliderKeyStepsDirective,
  TuiSliderModule,
  TuiSliderReadonlyDirective,
  TuiSliderThumbLabelComponent,
  TuiSortCountriesPipe,
  TuiSortCountriesPipeModule,
  TuiStepComponent,
  TuiStepperComponent,
  TuiStepperModule,
  TuiStringifiableItem,
  TuiStringifyContentPipe,
  TuiStringifyContentPipeModule,
  TuiStringifyPipe,
  TuiStringifyPipeModule,
  TuiTabComponent,
  TuiTabsComponent,
  TuiTabsDirective,
  TuiTabsModule,
  TuiTabsVerticalComponent,
  TuiTabsWithMoreComponent,
  TuiTagComponent,
  TuiTagModule,
  TuiTextAreaComponent,
  TuiTextAreaDirective,
  TuiTextAreaModule,
  TuiTextareaComponent,
  TuiTextareaDirective,
  TuiTextareaModule,
  TuiTileComponent,
  TuiTileHandleDirective,
  TuiTileService,
  TuiTilesComponent,
  TuiTilesModule,
  TuiToCountryCodePipe,
  TuiToYearPipe,
  TuiToYearPipeModule,
  TuiToggleComponent,
  TuiToggleModule,
  TuiTreeChildrenDirective,
  TuiTreeComponent,
  TuiTreeControllerDirective,
  TuiTreeItemComponent,
  TuiTreeItemContentComponent,
  TuiTreeItemControllerDirective,
  TuiTreeModule,
  TuiTreeNodeDirective,
  TuiTreeService,
  TuiUnderlineComponent,
  TuiUnfinishedValidatorDirective,
  TuiUnfinishedValidatorModule,
  TuiUnmaskHandlerDirective,
  TuiUnmaskHandlerModule,
  TuiValueAccessorDirective,
  TuiValueAccessorModule,
  tuiArrowModeProvider,
  tuiArrowOptionsProvider,
  tuiAvatarOptionsProvider,
  tuiBreadcrumbsOptionsProvider,
  tuiControlValueFactory,
  tuiCountriesMasksProvider,
  tuiCreateAutoCorrectedDatePipe,
  tuiCreateAutoCorrectedDateRangePipe,
  tuiCreateAutoCorrectedDateTimePipe,
  tuiCreateAutoCorrectedTimePipe,
  tuiCreateDateMask,
  tuiCreateDateRangeMask,
  tuiCreateDefaultDayRangePeriods,
  tuiCreateTimeMask,
  tuiCreateTimePeriods,
  tuiCreateUnfinishedValidator,
  tuiDateStreamWithTransformer,
  tuiExtractValueFromEvent,
  tuiFormatSize,
  tuiGenerateDialogableRoute,
  tuiGetAcceptArray,
  tuiGetMaxAllowedPhoneLength,
  tuiGetPrecision,
  tuiHorizontalDirectionToNumber,
  tuiImmutableUpdateInputDateMulti,
  tuiInputCopyOptionsProvider,
  tuiInputCountOptionsProvider,
  tuiInputDateOptionsProvider,
  tuiInputFilesOptionsProvider,
  tuiInputNumberOptionsProvider,
  tuiInputPasswordOptionsProvider,
  tuiInputPhoneInternationalOptionsProvider,
  tuiInputPhoneOptionsProvider,
  tuiInputTagOptionsProvider,
  tuiInputTimeOptionsProvider,
  tuiIsFlat,
  tuiIsoToCountryCode,
  tuiItemsHandlersProvider,
  tuiKeyStepValueToPercentage,
  tuiLineClampOptionsProvider,
  tuiMultiSelectOptionsProvider,
  tuiNormalizeDateValue,
  tuiNotKzRegion,
  tuiPdfViewerOptionsProvider,
  tuiPercentageToKeyStepValue,
  tuiPushOptionsProvider,
  tuiRadioOptionsProvider,
  tuiRatingOptionsProvider,
  tuiSelectOptionsProvider,
  tuiSliderOptionsProvider,
  tuiStringHashToHsl,
  tuiTabsOptionsProvider,
  tuiTagOptionsProvider,
  tuiToggleOptionsProvider
} from "./chunk-UQAIKJRN.js";
import "./chunk-YYZ25BTP.js";
import "./chunk-J4J4264W.js";
import "./chunk-VWL4RCA6.js";
import "./chunk-7IUQLMWK.js";
import "./chunk-4UOO7GJQ.js";
import "./chunk-QODR4S6D.js";
import "./chunk-ZVOY2GPJ.js";
import "./chunk-D4UE5VFS.js";
import "./chunk-JIBT2MMA.js";
import "./chunk-JD4XVWEJ.js";
import "./chunk-WCP4RZ4Y.js";
import "./chunk-7A7WJ6DX.js";
import "./chunk-XSKKLE2R.js";
export {
  AbstractTuiDataListWrapper,
  AbstractTuiFilterByInput,
  AbstractTuiNativeMultiSelect,
  AbstractTuiNativeSelect,
  DATE_TIME_SEPARATOR,
  DEFAULT_ROUTER_LINK_OPTIONS,
  DEFAULT_ROWS,
  EMPTY_MASK,
  FIXED_DROPDOWN_CONTROLLER_PROVIDER,
  GROUP_CLASS_NAMES,
  LINE_HEIGHT_L,
  LINE_HEIGHT_M,
  MASK_AFTER_CODE_REGEXP,
  MAX_DAY_RANGE_LENGTH_MAPPER,
  MAX_TIME_VALUES,
  MaskedInputDirective,
  TUI_ARROW,
  TUI_ARROW_DEFAULT_MODE,
  TUI_ARROW_DEFAULT_OPTIONS,
  TUI_ARROW_MODE,
  TUI_ARROW_OPTIONS,
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  TUI_BREADCRUMBS_DEFAULT_OPTIONS,
  TUI_BREADCRUMBS_OPTIONS,
  TUI_CALENDAR_DATE_STREAM,
  TUI_CALENDAR_MONTHS,
  TUI_CANCEL_WORD,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_COPY_TEXTS,
  TUI_COUNTRIES,
  TUI_COUNTRIES_DEFAULT_MASKS,
  TUI_COUNTRIES_MASKS,
  TUI_DATE_MODE_MASKITO_ADAPTER,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TEXTS,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DEFAULT_TREE_CONTROLLER,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_DONE_WORD,
  TUI_FILE_DEFAULT_OPTIONS,
  TUI_FILE_OPTIONS,
  TUI_FILE_TEXTS,
  TUI_FLOATING_PRECISION,
  TUI_FROM_TO_TEXTS,
  TUI_HIDE_TEXT,
  TUI_INPUT_COPY_DEFAULT_OPTIONS,
  TUI_INPUT_COPY_OPTIONS,
  TUI_INPUT_COUNT_DEFAULT_OPTIONS,
  TUI_INPUT_COUNT_OPTIONS,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  TUI_INPUT_FILES_DEFAULT_OPTIONS,
  TUI_INPUT_FILES_OPTIONS,
  TUI_INPUT_FILE_TEXTS,
  TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
  TUI_INPUT_NUMBER_OPTIONS,
  TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
  TUI_INPUT_PASSWORD_OPTIONS,
  TUI_INPUT_PHONE_DEFAULT_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
  TUI_INPUT_PHONE_OPTIONS,
  TUI_INPUT_TAG_DEFAULT_OPTIONS,
  TUI_INPUT_TAG_OPTIONS,
  TUI_INPUT_TIME_DEFAULT_OPTIONS,
  TUI_INPUT_TIME_OPTIONS,
  TUI_ITEMS_HANDLERS,
  TUI_LINE_CLAMP_DEFAULT_OPTIONS,
  TUI_LINE_CLAMP_OPTIONS,
  TUI_MOBILE_CALENDAR,
  TUI_MONTH_FORMATTER,
  TUI_MONTH_FORMATTER_PROVIDER,
  TUI_MORE_WORD,
  TUI_MULTI_SELECT_DEFAULT_OPTIONS,
  TUI_MULTI_SELECT_OPTION,
  TUI_MULTI_SELECT_OPTIONS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_NUMBER_VALUE_TRANSFORMER,
  TUI_OTHER_DATE_TEXT,
  TUI_PAGINATION_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_PDF_VIEWER_DEFAULT_OPTIONS,
  TUI_PDF_VIEWER_OPTIONS,
  TUI_PHONE_MASK,
  TUI_PLUS_MINUS_TEXTS,
  TUI_PROMPT,
  TUI_PROMPT_WORDS,
  TUI_PUSH_DEFAULT_OPTIONS,
  TUI_PUSH_OPTIONS,
  TUI_RADIO_DEFAULT_OPTIONS,
  TUI_RADIO_OPTIONS,
  TUI_RATING_DEFAULT_OPTIONS,
  TUI_RATING_OPTIONS,
  TUI_SELECT_DEFAULT_OPTIONS,
  TUI_SELECT_OPTION,
  TUI_SELECT_OPTIONS,
  TUI_SHOW_ALL_TEXT,
  TUI_SLIDER_DEFAULT_OPTIONS,
  TUI_SLIDER_OPTIONS,
  TUI_TABS_DEFAULT_OPTIONS,
  TUI_TABS_OPTIONS,
  TUI_TABS_PROVIDERS,
  TUI_TABS_REFRESH,
  TUI_TAB_ACTIVATE,
  TUI_TAB_EVENT,
  TUI_TAB_MARGIN,
  TUI_TAB_PROVIDERS,
  TUI_TAG_DEFAULT_OPTIONS,
  TUI_TAG_OPTIONS,
  TUI_TIME_MASK,
  TUI_TIME_TEXTS,
  TUI_TOGGLE_DEFAULT_OPTIONS,
  TUI_TOGGLE_OPTIONS,
  TUI_TREE_ACCESSOR,
  TUI_TREE_CONTENT,
  TUI_TREE_CONTROLLER,
  TUI_TREE_ITEM_CONTENT,
  TUI_TREE_ITEM_PROVIDERS,
  TUI_TREE_LEVEL,
  TUI_TREE_LOADER,
  TUI_TREE_LOADING,
  TUI_TREE_NODE,
  TUI_TREE_START,
  TUI_VALIDATION_ERRORS,
  TUI_VALUE_ACCESSOR_PROVIDER,
  TextMaskModule,
  TuiAccordionComponent,
  TuiAccordionItemComponent,
  TuiAccordionItemContentDirective,
  TuiAccordionItemEagerContentDirective,
  TuiAccordionModule,
  TuiActionComponent,
  TuiActionModule,
  TuiArrowComponent,
  TuiArrowModule,
  TuiAvatarComponent,
  TuiAvatarModule,
  TuiBadgeComponent,
  TuiBadgeModule,
  TuiBadgedContentComponent,
  TuiBadgedContentModule,
  TuiBreadcrumbsComponent,
  TuiBreadcrumbsModule,
  TuiCalendarMonthComponent,
  TuiCalendarMonthModule,
  TuiCalendarRangeComponent,
  TuiCalendarRangeModule,
  TuiCarouselAutoscrollDirective,
  TuiCarouselButtonsDirective,
  TuiCarouselComponent,
  TuiCarouselDirective,
  TuiCarouselModule,
  TuiCarouselScrollDirective,
  TuiCheckboxBlockComponent,
  TuiCheckboxBlockModule,
  TuiCheckboxComponent,
  TuiCheckboxLabeledComponent,
  TuiCheckboxLabeledModule,
  TuiCheckboxModule,
  TuiComboBoxComponent,
  TuiComboBoxDirective,
  TuiComboBoxModule,
  TuiComboBoxStrictDirective,
  TuiDataListDropdownManagerDirective,
  TuiDataListDropdownManagerModule,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapperComponent,
  TuiDataListWrapperModule,
  TuiDayRangePeriod,
  TuiDialogFormService,
  TuiElasticContainerComponent,
  TuiElasticContainerDirective,
  TuiElasticContainerModule,
  TuiExtractCountryCodeModule,
  TuiFieldErrorContentPipe,
  TuiFieldErrorPipe,
  TuiFieldErrorPipeModule,
  TuiFileComponent,
  TuiFilesComponent,
  TuiFilesModule,
  TuiFilterByInputPipe,
  TuiFilterByInputPipeModule,
  TuiFilterByInputWithPipe,
  TuiFilterComponent,
  TuiFilterModule,
  TuiHideSelectedPipe,
  TuiHighlightDirective,
  TuiHighlightModule,
  TuiInputComponent,
  TuiInputCopyComponent,
  TuiInputCopyDirective,
  TuiInputCopyModule,
  TuiInputCountComponent,
  TuiInputCountDirective,
  TuiInputCountModule,
  TuiInputDateComponent,
  TuiInputDateDirective,
  TuiInputDateModule,
  TuiInputDateMultiComponent,
  TuiInputDateMultiModule,
  TuiInputDateRangeComponent,
  TuiInputDateRangeDirective,
  TuiInputDateRangeModule,
  TuiInputDateTimeComponent,
  TuiInputDateTimeDirective,
  TuiInputDateTimeModule,
  TuiInputDirective,
  TuiInputFilesComponent,
  TuiInputFilesDirective,
  TuiInputFilesModule,
  TuiInputInlineComponent,
  TuiInputInlineModule,
  TuiInputModule,
  TuiInputMonthComponent,
  TuiInputMonthDirective,
  TuiInputMonthModule,
  TuiInputMonthRangeComponent,
  TuiInputMonthRangeDirective,
  TuiInputMonthRangeModule,
  TuiInputNumberComponent,
  TuiInputNumberDirective,
  TuiInputNumberModule,
  TuiInputPasswordComponent,
  TuiInputPasswordDirective,
  TuiInputPasswordModule,
  TuiInputPhoneComponent,
  TuiInputPhoneDirective,
  TuiInputPhoneInternationalComponent,
  TuiInputPhoneInternationalModule,
  TuiInputPhoneModule,
  TuiInputRangeComponent,
  TuiInputRangeModule,
  TuiInputSliderComponent,
  TuiInputSliderModule,
  TuiInputTagComponent,
  TuiInputTagModule,
  TuiInputTimeComponent,
  TuiInputTimeDirective,
  TuiInputTimeModule,
  TuiInputYearComponent,
  TuiInputYearDirective,
  TuiInputYearModule,
  TuiIslandComponent,
  TuiIslandModule,
  TuiIsoToCountryCodeModule,
  TuiIsoToCountryCodePipe,
  TuiItemsWithMoreComponent,
  TuiItemsWithMoreDirective,
  TuiItemsWithMoreModule,
  TuiItemsWithMoreService,
  TuiLazyLoadingDirective,
  TuiLazyLoadingModule,
  TuiLazyLoadingService,
  TuiLineClampBoxComponent,
  TuiLineClampComponent,
  TuiLineClampModule,
  TuiMarkerIconComponent,
  TuiMarkerIconModule,
  TuiMoreDirective,
  TuiMultiSelectComponent,
  TuiMultiSelectDirective,
  TuiMultiSelectGroupComponent,
  TuiMultiSelectGroupDirective,
  TuiMultiSelectModule,
  TuiMultiSelectOptionComponent,
  TuiMultiSelectOptionModule,
  TuiNamedDay,
  TuiNativeMultiSelectComponent,
  TuiNativeMultiSelectGroupComponent,
  TuiNativeSelectComponent,
  TuiNativeSelectGroupComponent,
  TuiPaginationComponent,
  TuiPaginationModule,
  TuiPdfViewerComponent,
  TuiPdfViewerDirective,
  TuiPdfViewerModule,
  TuiPdfViewerService,
  TuiPresentDirective,
  TuiPresentModule,
  TuiPrimitiveCalendarRangeComponent,
  TuiPrimitiveCalendarRangeModule,
  TuiProgressBarComponent,
  TuiProgressCircleComponent,
  TuiProgressColorSegmentsDirective,
  TuiProgressLabelComponent,
  TuiProgressModule,
  TuiProgressSegmentedComponent,
  TuiProjectClassDirective,
  TuiProjectClassModule,
  TuiPromptComponent,
  TuiPromptModule,
  TuiPushAlertComponent,
  TuiPushAlertDirective,
  TuiPushComponent,
  TuiPushDirective,
  TuiPushModule,
  TuiPushService,
  TuiRadioBlockComponent,
  TuiRadioBlockModule,
  TuiRadioComponent,
  TuiRadioGroupComponent,
  TuiRadioGroupModule,
  TuiRadioLabeledComponent,
  TuiRadioLabeledModule,
  TuiRadioListComponent,
  TuiRadioListModule,
  TuiRadioModule,
  TuiRangeChangeDirective,
  TuiRangeComponent,
  TuiRangeModule,
  TuiRatingComponent,
  TuiRatingModule,
  TuiRoutableDialogComponent,
  TuiRoutableDialogModule,
  TuiSelectComponent,
  TuiSelectDirective,
  TuiSelectModule,
  TuiSelectOptionComponent,
  TuiSelectOptionModule,
  TuiSliderComponent,
  TuiSliderKeyStepsDirective,
  TuiSliderModule,
  TuiSliderReadonlyDirective,
  TuiSliderThumbLabelComponent,
  TuiSortCountriesPipe,
  TuiSortCountriesPipeModule,
  TuiStepComponent,
  TuiStepperComponent,
  TuiStepperModule,
  TuiStringifiableItem,
  TuiStringifyContentPipe,
  TuiStringifyContentPipeModule,
  TuiStringifyPipe,
  TuiStringifyPipeModule,
  TuiTabComponent,
  TuiTabsComponent,
  TuiTabsDirective,
  TuiTabsModule,
  TuiTabsVerticalComponent,
  TuiTabsWithMoreComponent,
  TuiTagComponent,
  TuiTagModule,
  TuiTextAreaComponent,
  TuiTextAreaDirective,
  TuiTextAreaModule,
  TuiTextareaComponent,
  TuiTextareaDirective,
  TuiTextareaModule,
  TuiTileComponent,
  TuiTileHandleDirective,
  TuiTileService,
  TuiTilesComponent,
  TuiTilesModule,
  TuiToCountryCodePipe,
  TuiToYearPipe,
  TuiToYearPipeModule,
  TuiToggleComponent,
  TuiToggleModule,
  TuiTreeChildrenDirective,
  TuiTreeComponent,
  TuiTreeControllerDirective,
  TuiTreeItemComponent,
  TuiTreeItemContentComponent,
  TuiTreeItemControllerDirective,
  TuiTreeModule,
  TuiTreeNodeDirective,
  TuiTreeService,
  TuiUnderlineComponent,
  TuiUnfinishedValidatorDirective,
  TuiUnfinishedValidatorModule,
  TuiUnmaskHandlerDirective,
  TuiUnmaskHandlerModule,
  TuiValueAccessorDirective,
  TuiValueAccessorModule,
  tuiArrowModeProvider,
  tuiArrowOptionsProvider,
  tuiAvatarOptionsProvider,
  tuiBreadcrumbsOptionsProvider,
  tuiControlValueFactory,
  tuiCountriesMasksProvider,
  tuiCreateAutoCorrectedDatePipe,
  tuiCreateAutoCorrectedDateRangePipe,
  tuiCreateAutoCorrectedDateTimePipe,
  tuiCreateAutoCorrectedTimePipe,
  tuiCreateDateMask,
  tuiCreateDateRangeMask,
  tuiCreateDefaultDayRangePeriods,
  tuiCreateTimeMask,
  tuiCreateTimePeriods,
  tuiCreateUnfinishedValidator,
  tuiDateStreamWithTransformer,
  tuiExtractValueFromEvent,
  tuiFormatSize,
  tuiGenerateDialogableRoute,
  tuiGetAcceptArray,
  tuiGetMaxAllowedPhoneLength,
  tuiGetPrecision,
  tuiHorizontalDirectionToNumber,
  tuiImmutableUpdateInputDateMulti,
  tuiInputCopyOptionsProvider,
  tuiInputCountOptionsProvider,
  tuiInputDateOptionsProvider,
  tuiInputFilesOptionsProvider,
  tuiInputNumberOptionsProvider,
  tuiInputPasswordOptionsProvider,
  tuiInputPhoneInternationalOptionsProvider,
  tuiInputPhoneOptionsProvider,
  tuiInputTagOptionsProvider,
  tuiInputTimeOptionsProvider,
  tuiIsFlat,
  tuiIsoToCountryCode,
  tuiItemsHandlersProvider,
  tuiKeyStepValueToPercentage,
  tuiLineClampOptionsProvider,
  tuiMultiSelectOptionsProvider,
  tuiNormalizeDateValue,
  tuiNotKzRegion,
  tuiPdfViewerOptionsProvider,
  tuiPercentageToKeyStepValue,
  tuiPushOptionsProvider,
  tuiRadioOptionsProvider,
  tuiRatingOptionsProvider,
  tuiSelectOptionsProvider,
  tuiSliderOptionsProvider,
  tuiStringHashToHsl,
  tuiTabsOptionsProvider,
  tuiTagOptionsProvider,
  tuiToggleOptionsProvider
};
//# sourceMappingURL=@taiga-ui_kit.js.map
