import type { VSCodeTheme } from '../palette/types'

/**
 * Генератор цветов интерфейса (workbench colors) для Tokyo Night
 */
export const generateTokyoNightWorkbenchColors = () => {
  // Используем точные цвета из оригинальной темы
  return {
    foreground: '#787c99',
    descriptionForeground: '#515670',
    disabledForeground: '#545c7e',
    focusBorder: '#545c7e33',
    errorForeground: '#515670',
    'widget.shadow': '#ffffff00',
    'scrollbar.shadow': '#000033',
    'badge.background': '#7e83b230',
    'badge.foreground': '#acb0d0',
    'icon.foreground': '#787c99',
    'settings.headerForeground': '#6183bb',
    'window.activeBorder': '#0d0f17',
    'window.inactiveBorder': '#0d0f17',
    'sash.hoverBorder': '#29355a',
    'toolbar.activeBackground': '#202330',
    'toolbar.hoverBackground': '#202330',
    'extensionButton.prominentBackground': '#3d59a1DD',
    'extensionButton.prominentHoverBackground': '#3d59a1AA',
    'extensionButton.prominentForeground': '#ffffff',
    'extensionBadge.remoteBackground': '#3d59a1',
    'extensionBadge.remoteForeground': '#ffffff',
    'button.background': '#3d59a1dd',
    'button.foreground': '#ffffff',
    'button.hoverBackground': '#3d59a1AA',
    'button.secondaryBackground': '#3b3e52',
    'button.secondaryForeground': '#ffffff',
    'button.secondaryHoverBackground': '#3d59a1AA',
    'button.border': '#0f0f14ff',
    'progressBar.background': '#3d59a1',
    'input.background': '#14141b',
    'input.foreground': '#a9b1d6',
    'input.border': '#0f0f14',
    'input.placeholderForeground': '#787c998A',
    'inputOption.activeForeground': '#c0caf5',
    'inputOption.activeBackground': '#3d59a144',
    'inputValidation.infoForeground': '#bbc2e0',
    'inputValidation.infoBackground': '#3d59a15c',
    'inputValidation.infoBorder': '#3d59a1',
    'inputValidation.warningForeground': '#000',
    'inputValidation.warningBackground': '#c2985b',
    'inputValidation.warningBorder': '#e0af68',
    'inputValidation.errorForeground': '#bbc2e0',
    'inputValidation.errorBackground': '#85353e',
    'inputValidation.errorBorder': '#963c47',
    'dropdown.foreground': '#787c99',
    'dropdown.background': '#14141b',
    'dropdown.listBackground': '#14141b',
    'activityBar.background': '#16161e',
    'activityBar.foreground': '#787c99',
    'activityBar.inactiveForeground': '#3b3e52',
    'activityBar.border': '#16161e',
    'activityBarBadge.background': '#3d59a1',
    'activityBarBadge.foreground': '#fff',
    'activityBarTop.foreground': '#787c99',
    'activityBarTop.inactiveForeground': '#3b3e52',
    'tree.indentGuidesStroke': '#2b2b3b',
    'sideBar.foreground': '#787c99',
    'sideBar.background': '#16161e',
    'sideBar.border': '#101014',
    'sideBarTitle.foreground': '#787c99',
    'sideBarSectionHeader.background': '#16161e',
    'sideBarSectionHeader.foreground': '#a9b1d6',
    'sideBarSectionHeader.border': '#101014',
    'sideBar.dropBackground': '#1e202e',
    'list.dropBackground': '#1e202e',
    'list.deemphasizedForeground': '#787c99',
    'list.activeSelectionBackground': '#202330',
    'list.activeSelectionForeground': '#a9b1d6',
    'list.inactiveSelectionBackground': '#1c1d29',
    'list.inactiveSelectionForeground': '#a9b1d6',
    'list.focusBackground': '#1c1d29',
    'list.focusForeground': '#a9b1d6',
    'list.hoverBackground': '#13131a',
    'list.hoverForeground': '#a9b1d6',
    'list.highlightForeground': '#668ac4',
    'list.invalidItemForeground': '#c97018',
    'list.errorForeground': '#bb616b',
    'list.warningForeground': '#c49a5a',
    'listFilterWidget.background': '#101014',
    'listFilterWidget.outline': '#3d59a1',
    'listFilterWidget.noMatchesOutline': '#a6333f',
    'pickerGroup.foreground': '#a9b1d6',
    'pickerGroup.border': '#1014',
    'scrollbarSlider.background': '#868bc415',
    'scrollbarSlider.hoverBackground': '#868bc410',
    'scrollbarSlider.activeBackground': '#868bc422',
    'editorBracketHighlight.foreground1': '#698cd6',
    'editorBracketHighlight.foreground2': '#68b3de',
    'editorBracketHighlight.foreground3': '#9a7ecc',
    'editorBracketHighlight.foreground4': '#25aac2',
    'editorBracketHighlight.foreground5': '#80a856',
    'editorBracketHighlight.foreground6': '#c49a5a',
    'editorBracketHighlight.unexpectedBracket.foreground': '#db4b4b',
    'editorBracketPairGuide.activeBackground1': '#698cd6',
    'editorBracketPairGuide.activeBackground2': '#68b3de',
    'editorBracketPairGuide.activeBackground3': '#9a7ecc',
    'editorBracketPairGuide.activeBackground4': '#25aac2',
    'editorBracketPairGuide.activeBackground5': '#80a856',
    'editorBracketPairGuide.activeBackground6': '#c49a5a',
    'selection.background': '#515c7e40',
    'editor.background': '#1a1b26',
    'editor.foreground': '#a9b1d6',
    'editor.foldBackground': '#11174a',
    'editorLink.activeForeground': '#acb0d0',
    'editor.selectionBackground': '#515c7e4d',
    'editor.inactiveSelectionBackground': '#515c7e25',
    'editor.findMatchBackground': '#3d59a166',
    'editor.findMatchBorder': '#e0af68',
    'editor.findMatchHighlightBackground': '#3d59a166',
    'editor.findRangeHighlightBackground': '#515c7e33',
    'editor.rangeHighlightBackground': '#515c7e20',
    'editor.wordHighlightBackground': '#515c7e44',
    'editor.wordHighlightStrongBackground': '#515c7e55',
    'editor.selectionHighlightBackground': '#515c7e44',
    'editorCursor.foreground': '#c0caf5',
    'editorIndentGuide.background1': '#232433',
    'editorIndentGuide.activeBackground1': '#363b54',
    'editorLineNumber.foreground': '#363b54',
    'editorLineNumber.activeForeground': '#787c99',
    'editor.lineHighlightBackground': '#1e202e',
    'editorWhitespace.foreground': '#363b54',
    'editorMarkerNavigation.background': '#16161e',
    'editorHoverWidget.background': '#16161e',
    'editorHoverWidget.border': '#101014',
    'editorBracketMatch.background': '#16161e',
    'editorBracketMatch.border': '#42465d',
    'editorOverviewRuler.border': '#101014',
    'editorOverviewRuler.errorForeground': '#db4b4b',
    'editorOverviewRuler.warningForeground': '#e0af68',
    'editorOverviewRuler.infoForeground': '#1abc9c',
    'editorOverviewRuler.bracketMatchForeground': '#101014',
    'editorOverviewRuler.findMatchForeground': '#a9b1d644',
    'editorOverviewRuler.rangeHighlightForeground': '#a9b1d644',
    'editorOverviewRuler.selectionHighlightForeground': '#a9b1d622',
    'editorOverviewRuler.wordHighlightForeground': '#bb9af755',
    'editorOverviewRuler.wordHighlightStrongForeground': '#bb9af766',
    'editorOverviewRuler.modifiedForeground': '#394b70',
    'editorOverviewRuler.addedForeground': '#164846',
    'editorOverviewRuler.deletedForeground': '#703438',
    'editorRuler.foreground': '#101014',
    'editorError.foreground': '#db4b4b',
    'editorWarning.foreground': '#e0af68',
    'editorInfo.foreground': '#0da0ba',
    'editorHint.foreground': '#0da0ba',
    'editorGutter.modifiedBackground': '#394b70',
    'editorGutter.addedBackground': '#164846',
    'editorGutter.deletedBackground': '#823c41',
    'editorGhostText.foreground': '#646e9c',
    'minimapGutter.modifiedBackground': '#425882',
    'minimapGutter.addedBackground': '#1C5957',
    'minimapGutter.deletedBackground': '#944449',
    'editorGroup.border': '#1014',
    'editorGroup.dropBackground': '#1e202e',
    'editorGroupHeader.tabsBorder': '#101014',
    'editorGroupHeader.tabsBackground': '#16161e',
    'editorGroupHeader.noTabsBackground': '#16161e',
    'editorGroupHeader.border': '#101014',
    'editorPane.background': '#1a1b26',
    'editorWidget.foreground': '#787c99',
    'editorWidget.background': '#16161e',
    'editorWidget.border': '#101014',
    'editorWidget.resizeBorder': '#545c7e33',
    'editorSuggestWidget.background': '#16161e',
    'editorSuggestWidget.border': '#101014',
    'editorSuggestWidget.selectedBackground': '#20222c',
    'editorSuggestWidget.highlightForeground': '#6183bb',
    'editorCodeLens.foreground': '#51597d',
    'editorLightBulb.foreground': '#e0af68',
    'editorLightBulbAutoFix.foreground': '#e0af68',
    'editorInlayHint.foreground': '#646e9c',
    'peekView.border': '#101014',
    'peekViewEditor.background': '#161e',
    'peekViewEditor.matchHighlightBackground': '#3d59a166',
    'peekViewTitle.background': '#101014',
    'peekViewTitleLabel.foreground': '#a9b1d6',
    'peekViewTitleDescription.foreground': '#787c99',
    'peekViewResult.background': '#101014',
    'peekViewResult.selectionForeground': '#a9b1d6',
    'peekViewResult.selectionBackground': '#3d59a133',
    'peekViewResult.lineForeground': '#a9b1d6',
    'peekViewResult.fileForeground': '#787c99',
    'peekViewResult.matchHighlightBackground': '#3d59a166',
    'diffEditor.insertedTextBackground': '#41a6b520',
    'diffEditor.removedTextBackground': '#db4b4b22',
    'diffEditor.insertedLineBackground': '#41a6b520',
    'diffEditor.removedLineBackground': '#db4b4b22',
    'diffEditorGutter.insertedLineBackground': '#41a6b525',
    'diffEditorGutter.removedLineBackground': '#db4b4b22',
    'diffEditorOverview.insertedForeground': '#41a6b525',
    'diffEditorOverview.removedForeground': '#db4b4b22',
    'diffEditor.diagonalFill': '#292e42',
    'diffEditor.unchangedCodeBackground': '#282a3b66',
    'multiDiffEditor.headerBackground': '#1a1b26',
    'multiDiffEditor.border': '#1a1b26',
    'breadcrumb.background': '#16161e',
    'breadcrumbPicker.background': '#16161e',
    'breadcrumb.foreground': '#515670',
    'breadcrumb.focusForeground': '#a9b1d6',
    'breadcrumb.activeSelectionForeground': '#a9b1d6',
    'tab.activeBackground': '#16161e',
    'tab.inactiveBackground': '#16161e',
    'tab.activeForeground': '#a9b1d6',
    'tab.hoverForeground': '#a9b1d6',
    'tab.activeBorder': '#3d59a1',
    'tab.inactiveForeground': '#787c99',
    'tab.border': '#101014',
    'tab.unfocusedActiveForeground': '#a9b1d6',
    'tab.unfocusedInactiveForeground': '#787c99',
    'tab.unfocusedHoverForeground': '#a9b1d6',
    'tab.activeModifiedBorder': '#1a1b26',
    'tab.inactiveModifiedBorder': '#1f202e',
    'tab.unfocusedActiveBorder': '#1f202e',
    'tab.lastPinnedBorder': '#222333',
    'panel.background': '#16161e',
    'panel.border': '#101014',
    'panelTitle.activeForeground': '#787c99',
    'panelTitle.inactiveForeground': '#42465d',
    'panelTitle.activeBorder': '#16161e',
    'panelInput.border': '#101014',
    'statusBar.foreground': '#787c99',
    'statusBar.background': '#16161e',
    'statusBar.border': '#101014',
    'statusBar.noFolderBackground': '#16161e',
    'statusBar.debuggingBackground': '#16161e',
    'statusBar.debuggingForeground': '#787c99',
    'statusBarItem.activeBackground': '#101014',
    'statusBarItem.hoverBackground': '#2022c',
    'statusBarItem.prominentBackground': '#101014',
    'statusBarItem.prominentHoverBackground': '#20222c',
    'titleBar.activeForeground': '#787c99',
    'titleBar.inactiveForeground': '#787c99',
    'titleBar.activeBackground': '#16161e',
    'titleBar.inactiveBackground': '#16161e',
    'titleBar.border': '#101014',
    'walkThrough.embeddedEditorBackground': '#16161e',
    'textLink.foreground': '#6183bb',
    'textLink.activeForeground': '#7dcfff',
    'textPreformat.foreground': '#9699a8',
    'textBlockQuote.background': '#16161e',
    'textCodeBlock.background': '#16161e',
    'textSeparator.foreground': '#363b54',
    'debugExceptionWidget.border': '#963c47',
    'debugExceptionWidget.background': '#1014',
    'debugToolBar.background': '#101014',
    'debugConsole.infoForeground': '#787c99',
    'debugConsole.errorForeground': '#bb616b',
    'debugConsole.sourceForeground': '#787c99',
    'debugConsole.warningForeground': '#c49a5a',
    'debugConsoleInputIcon.foreground': '#73daca',
    'editor.stackFrameHighlightBackground': '#E2BD3A20',
    'editor.focusedStackFrameHighlightBackground': '#73daca20',
    'debugView.stateLabelForeground': '#787c99',
    'debugView.stateLabelBackground': '#14141b',
    'debugView.valueChangedHighlight': '#3d59a1aa',
    'debugTokenExpression.name': '#7dcfff',
    'debugTokenExpression.value': '#9aa5ce',
    'debugTokenExpression.string': '#9ece6a',
    'debugTokenExpression.boolean': '#ff9e64',
    'debugTokenExpression.number': '#ff9e64',
    'debugTokenExpression.error': '#bb616b',
    'debugIcon.breakpointForeground': '#db4b4b',
    'debugIcon.breakpointDisabledForeground': '#414761',
    'debugIcon.breakpointUnverifiedForeground': '#c24242',
    'terminal.background': '#16161e',
    'terminal.foreground': '#787c99',
    'terminal.selectionBackground': '#515c7e4d',
    'terminal.ansiBlack': '#363b54',
    'terminal.ansiRed': '#f7768e',
    'terminal.ansiGreen': '#73daca',
    'terminal.ansiYellow': '#e0af68',
    'terminal.ansiBlue': '#7aa2f7',
    'terminal.ansiMagenta': '#bb9af7',
    'terminal.ansiCyan': '#7dcfff',
    'terminal.ansiWhite': '#787c99',
    'terminal.ansiBrightBlack': '#363b54',
    'terminal.ansiBrightRed': '#f7768e',
    'terminal.ansiBrightGreen': '#73daca',
    'terminal.ansiBrightYellow': '#e0af68',
    'terminal.ansiBrightBlue': '#7aa2f7',
    'terminal.ansiBrightMagenta': '#bb9af7',
    'terminal.ansiBrightCyan': '#7dcfff',
    'terminal.ansiBrightWhite': '#acb0d0',
    'gitDecoration.modifiedResourceForeground': '#6183bb',
    'gitDecoration.ignoredResourceForeground': '#515670',
    'gitDecoration.deletedResourceForeground': '#914c54',
    'gitDecoration.renamedResourceForeground': '#449dab',
    'gitDecoration.addedResourceForeground': '#449dab',
    'gitDecoration.untrackedResourceForeground': '#449dab',
    'gitDecoration.conflictingResourceForeground': '#e0af68cc',
    'gitDecoration.stageDeletedResourceForeground': '#914c54',
    'gitDecoration.stageModifiedResourceForeground': '#6183bb',
    'notebook.editorBackground': '#1a1b26',
    'notebook.cellEditorBackground': '#16161e',
    'notebook.cellBorderColor': '#101014',
    'notebook.focusedCellBorder': '#29355a',
    'notebook.cellStatusBarItemHoverBackground': '#1c1d29',
    'charts.red': '#f7768e',
    'charts.blue': '#7aa2f7',
    'charts.yellow': '#e0af68',
    'charts.orange': '#ff9e64',
    'charts.green': '#41a6b5',
    'charts.purple': '#9d7cd8',
    'charts.foreground': '#9AA5CE',
    'charts.lines': '#16161e',
    'scmGraph.historyItemHoverLabelForeground': '#1b1e2e',
    'scmGraph.foreground1': '#ff9e64',
    'scmGraph.foreground2': '#e0af68',
    'scmGraph.foreground3': '#41a6b5',
    'scmGraph.foreground4': '#7aa2f7',
    'scmGraph.foreground5': '#bb9af7',
    'scmGraph.historyItemHoverAdditionsForeground': '#41a6b5',
    'scmGraph.historyItemHoverDeletionsForeground': '#f7768e',
    'scmGraph.historyItemRefColor': '#506FCA',
    'scmGraph.historyItemRemoteRefColor': '#41a6b5',
    'scmGraph.historyItemBaseRefColor': '#9d7cd8',
    'scmGraph.historyItemHoverDefaultLabelForeground': '#a9b1d6',
    'merge.currentHeaderBackground': '#41a6b525',
    'merge.currentContentBackground': '#007a7544',
    'merge.incomingHeaderBackground': '#3d59a1aa',
    'merge.incomingContentBackground': '#3d59a144',
    'mergeEditor.change.background': '#41a6b525',
    'mergeEditor.change.word.background': '#41a6b540',
    'mergeEditor.conflict.unhandledUnfocused.border': '#e0af6888',
    'mergeEditor.conflict.unhandledFocused.border': '#e0af68b0',
    'mergeEditor.conflict.handledUnfocused.border': '#41a6b525',
    'mergeEditor.conflict.handledFocused.border': '#41a6b565',
    'mergeEditor.conflict.handled.minimapOverViewRuler': '#449dab',
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': '#e0af68',
    'gitlens.trailingLineForegroundColor': '#646e9c',
    'gitlens.gutterUncommittedForegroundColor': '#7aa2f7',
    'gitlens.gutterForegroundColor': '#787c99',
    'gitlens.gutterBackgroundColor': '#16161e',
    'notificationCenterHeader.background': '#101014',
    'notifications.background': '#101014',
    'notificationLink.foreground': '#6183bb',
    'notificationsErrorIcon.foreground': '#bb616b',
    'notificationsWarningIcon.foreground': '#bba461',
    'notificationsInfoIcon.foreground': '#0da0ba',
    'menubar.selectionForeground': '#a9b1d6',
    'menubar.selectionBackground': '#1e202e',
    'menubar.selectionBorder': '#1b1e2e',
    'menu.foreground': '#787c99',
    'menu.background': '#16161e',
    'menu.selectionForeground': '#a9b1d6',
    'menu.selectionBackground': '#1e202e',
    'menu.separatorBackground': '#101014',
    'menu.border': '#101014',
    'chat.requestBorder': '#0f0f14',
    'chat.avatarBackground': '#3d59a1',
    'chat.avatarForeground': '#a9b1d6',
    'chat.slashCommandBackground': '#14141b',
    'chat.slashCommandForeground': '#7aa2f7',
    'inlineChat.foreground': '#a9b1d6',
    'inlineChatInput.background': '#14141b',
    'inlineChatDiff.inserted': '#41a6b540',
    'inlineChatDiff.removed': '#db4b4b42',
    'activityBar.activeBorder': '#101014',
    'tab.hoverBackground': '#1e202e',
    'editorGutter.background': '#1a1b26',
    'editorHoverWidget.foreground': '#787c99',
    'editorSuggestWidget.foreground': '#a9b1d6',
    'inputOption.activeBorder': '#3d59a1',
    'minimapSlider.background': '#868bc415',
    'minimapSlider.hoverBackground': '#868bc410',
    'minimapSlider.activeBackground': '#868bc422',
    'panelSection.border': '#101014',
    'diffEditor.unchangedRegionBackground': '#1a1b2633',
    'diffEditor.unchangedRegionForeground': '#3b3e52',
    'editorStickyScroll.shadow': '#ffffff00',
    'panelStickyScroll.shadow': '#ffffff00',
    'sideBarStickyScroll.shadow': '#ffffff00',
    'listFilterWidget.shadow': '#ffffff00',
    'textBlockQuote.border': '#101014',
    'notifications.foreground': '#a9b1d6',
    'notifications.border': '#101014',
    'gitDecoration.submoduleResourceForeground': '#3b3e52',
    'dropdown.border': '#101014',
    'minimap.findMatchHighlight': '#e0af6866',
    'minimap.selectionHighlight': '#3d59a133',
    'minimap.errorHighlight': '#db4b4b',
    'minimap.warningHighlight': '#e0af68',
    'minimap.background': '#1a1b26',
    'symbolIcon.arrayForeground': '#0db9d7',
    'symbolIcon.booleanForeground': '#ff9e64',
    'symbolIcon.classForeground': '#20222c',
    'symbolIcon.colorForeground': '#9ece6a',
    'symbolIcon.constantForeground': '#ff9e64',
    'symbolIcon.constructorForeground': '#545c7e33',
    'symbolIcon.enumeratorForeground': '#0db9d7',
    'symbolIcon.enumeratorMemberForeground': '#0db9d7',
    'symbolIcon.eventForeground': '#20222c',
    'symbolIcon.fieldForeground': '#7dcfff',
    'symbolIcon.fileForeground': '#3b3e52',
    'symbolIcon.folderForeground': '#3b3e52',
    'symbolIcon.functionForeground': '#7aa2f7',
    'symbolIcon.interfaceForeground': '#0db9d7',
    'symbolIcon.keyForeground': '#7dcfff',
    'symbolIcon.keywordForeground': '#bb9af7',
    'symbolIcon.methodForeground': '#7aa2f7',
    'symbolIcon.moduleForeground': '#3b3e52',
    'symbolIcon.namespaceForeground': '#3b3e52',
    'symbolIcon.nullForeground': '#ff9e64',
    'symbolIcon.numberForeground': '#ff9e64',
    'symbolIcon.objectForeground': '#c0caf5ff',
    'symbolIcon.operatorForeground': '#89ddff',
    'symbolIcon.packageForeground': '#3b3e52',
    'symbolIcon.propertyForeground': '#7dcfff',
    'symbolIcon.referenceForeground': '#3b3e52',
    'symbolIcon.snippetForeground': '#9ece6a',
    'symbolIcon.stringForeground': '#9ece6a',
    'symbolIcon.structForeground': '#0db9d7',
    'symbolIcon.textForeground': '#a9b1d6',
    'symbolIcon.typeParameterForeground': '#0db9d7',
    'symbolIcon.unitForeground': '#ff9e64',
    'symbolIcon.variableForeground': '#c0caf5',
    'settings.modifiedItemIndicator': '#e0af68',
    'settings.dropdownBackground': '#14141b',
    'settings.dropdownForeground': '#a9b1d6',
    'settings.dropdownBorder': '#101014',
    'settings.dropdownListBorder': '#101014',
    'settings.checkboxBackground': '#16161e',
    'settings.checkboxForeground': '#a9b1d6',
    'settings.checkboxBorder': '#101014',
    'settings.textInputBackground': '#16161e',
    'settings.textInputForeground': '#a9b1d6',
    'settings.textInputBorder': '#101014',
    'settings.numberInputBackground': '#16161e',
    'settings.numberInputForeground': '#a9b1d6',
    'settings.numberInputBorder': '#101014',
    'problemsErrorIcon.foreground': '#db4b4b',
    'problemsWarningIcon.foreground': '#e0af68',
    'problemsInfoIcon.foreground': '#0da0ba',
    'inlineChat.background': '#14141b',
    'inlineChat.border': '#101014',
    'inlineChat.shadow': '#ffffff00',
    'diffEditor.border': '#101014',
    'scmGraph.historyItemHoverDefaultLabelBackground': '#1a1b26',
  }
}

/**
 * Генератор токенов подсветки синтаксиса для Tokyo Night
 */
export const generateTokyoNightTokenColors = () => {
  return [
    // Comments
    {
      name: 'Comments',
      scope: [
        'comment',
        'punctuation.definition.comment',
        'comment.block.documentation',
        'comment.line.double-slash',
        'comment.line.number-sign',
      ],
      settings: {
        foreground: '#51597d',
        fontStyle: '',
      },
    },

    // Strings
    {
      name: 'Strings',
      scope: [
        'string',
        'string.quoted',
        'string.unquoted',
        'punctuation.definition.string',
      ],
      settings: {
        foreground: '#9ece6a',
      },
    },

    // Numbers
    {
      name: 'Numbers',
      scope: ['constant.numeric', 'variable.other.constant.number'],
      settings: {
        foreground: '#ff9e64',
      },
    },

    // Booleans
    {
      name: 'Booleans',
      scope: ['constant.language.boolean', 'keyword.constant'],
      settings: {
        foreground: '#ff9e64',
      },
    },

    // Null and Undefined
    {
      name: 'Null and Undefined',
      scope: ['constant.language.null', 'constant.language.undefined'],
      settings: {
        foreground: '#ff9e64',
      },
    },

    // Keywords
    {
      name: 'Keywords',
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.delete',
        'keyword.operator.sizeof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
      ],
      settings: {
        foreground: '#bb9af7',
      },
    },

    // Storage keywords
    {
      name: 'Storage Keywords',
      scope: [
        'storage.modifier',
        'storage.type',
        'storage.type.built-in',
        'storage.type.primitive',
      ],
      settings: {
        foreground: '#9d7cd8',
      },
    },

    // Operators
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'punctuation.accessor',
        'punctuation.separator',
        'punctuation.terminator',
      ],
      settings: {
        foreground: '#89ddff',
      },
    },

    // Punctuation
    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        'punctuation.section',
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
      ],
      settings: {
        foreground: '#9abdf5',
      },
    },

    // Types
    {
      name: 'Types',
      scope: [
        'support.type',
        'support.type.primitive',
        'storage.type.cs',
        'meta.type.annotation',
        'meta.return.type',
        'meta.type.parameters',
      ],
      settings: {
        foreground: '#0db9d7',
      },
    },

    // Classes
    {
      name: 'Classes',
      scope: [
        'entity.name.type.class',
        'support.class',
        'entity.other.inherited-class',
        'meta.class',
        'meta.class.identifier',
      ],
      settings: {
        foreground: '#0db9d7',
        fontStyle: 'bold',
      },
    },

    // Interfaces
    {
      name: 'Interfaces',
      scope: ['entity.name.type.interface', 'support.type.interface'],
      settings: {
        foreground: '#0db9d7',
      },
    },

    // Enums
    {
      name: 'Enums',
      scope: ['entity.name.type.enum', 'support.type.enum'],
      settings: {
        foreground: '#0db9d7',
      },
    },

    // Functions
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'variable.function',
      ],
      settings: {
        foreground: '#7aa2f7',
      },
    },

    // Methods
    {
      name: 'Methods',
      scope: ['entity.name.function.member', 'variable.other.method'],
      settings: {
        foreground: '#7aa2f7',
      },
    },

    // Variables
    {
      name: 'Variables',
      scope: [
        'variable',
        'variable.other',
        'variable.other.readwrite',
        'support.variable',
      ],
      settings: {
        foreground: '#c0caf5',
      },
    },

    // Parameters
    {
      name: 'Parameters',
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: {
        foreground: '#e0af68',
      },
    },

    // Constants
    {
      name: 'Constants',
      scope: ['variable.other.constant', 'constant.other', 'support.constant'],
      settings: {
        foreground: '#ff9e64',
      },
    },

    // Properties
    {
      name: 'Properties',
      scope: [
        'variable.other.property',
        'support.variable.property',
        'meta.object-literal.key',
      ],
      settings: {
        foreground: '#7dcfff',
      },
    },

    // Tags
    {
      name: 'Tags',
      scope: ['entity.name.tag', 'meta.tag'],
      settings: {
        foreground: '#f7768e',
      },
    },

    // Attributes
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name', 'meta.attribute'],
      settings: {
        foreground: '#bb9af7',
      },
    },

    // Invalid
    {
      name: 'Invalid',
      scope: [
        'invalid',
        'invalid.illegal',
        'invalid.broken',
        'invalid.deprecated',
        'invalid.unimplemented',
      ],
      settings: {
        foreground: '#db4b4b',
      },
    },

    // Errors
    {
      name: 'Errors',
      scope: ['message.error', 'punctuation.definition.error', 'markup.error'],
      settings: {
        foreground: '#db4b4b',
      },
    },

    // Warnings
    {
      name: 'Warnings',
      scope: [
        'message.warning',
        'punctuation.definition.warning',
        'markup.warning',
      ],
      settings: {
        foreground: '#e0af68',
      },
    },

    // Info
    {
      name: 'Info',
      scope: ['message.info', 'punctuation.definition.info', 'markup.info'],
      settings: {
        foreground: '#0da0ba',
      },
    },

    // Success
    {
      name: 'Success',
      scope: [
        'message.success',
        'punctuation.definition.success',
        'markup.success',
      ],
      settings: {
        foreground: '#41a6b5',
      },
    },

    // Decorators
    {
      name: 'Decorators',
      scope: ['meta.decorator', 'punctuation.decorator', 'tag.decorator'],
      settings: {
        foreground: '#7aa2f7',
      },
    },

    // Annotations
    {
      name: 'Annotations',
      scope: ['storage.type.annotation', 'meta.annotation.identifier'],
      settings: {
        foreground: '#7aa2f7',
      },
    },

    // Regular Expressions
    {
      name: 'Regular Expressions',
      scope: [
        'string.regexp',
        'constant.other.character-class',
        'keyword.operator.quantifier',
      ],
      settings: {
        foreground: '#9ece6a',
      },
    },

    // Escape Characters
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape', 'constant.other.character'],
      settings: {
        foreground: '#9ece6a',
      },
    },

    // Markdown specific
    {
      name: 'Markdown Headings',
      scope: [
        'markup.heading',
        'entity.name.section.markdown',
        'punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: '#89ddff',
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Links',
      scope: [
        'markup.underline.link',
        'meta.link',
        'constant.other.reference.link',
      ],
      settings: {
        foreground: '#73daca',
      },
    },
    {
      name: 'Markdown Code',
      scope: ['markup.inline.raw', 'markup.fenced_code.block'],
      settings: {
        foreground: '#89ddff',
      },
    },
    {
      name: 'Markdown Lists',
      scope: ['markup.list', 'beginning.punctuation.definition.list'],
      settings: {
        foreground: '#20222c',
      },
    },
    {
      name: 'Markdown Bold',
      scope: ['markup.bold', 'punctuation.definition.bold'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Italic',
      scope: ['markup.italic', 'punctuation.definition.italic'],
      settings: {
        fontStyle: 'italic',
      },
    },

    // JSON specific
    {
      name: 'JSON Keys',
      scope: ['support.type.property-name.json'],
      settings: {
        foreground: '#7aa2f7',
      },
    },

    // CSS/SCSS/LESS specific
    {
      name: 'CSS Selectors',
      scope: [
        'entity.name.tag.css',
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id.css',
      ],
      settings: {
        foreground: '#0db9d7',
      },
    },
    {
      name: 'CSS Properties',
      scope: ['support.type.property-name.css'],
      settings: {
        foreground: '#7aa2f7',
      },
    },
    {
      name: 'CSS Values',
      scope: [
        'support.constant.property-value.css',
        'support.constant.font-name.css',
      ],
      settings: {
        foreground: '#ff9e64',
      },
    },

    // HTML specific
    {
      name: 'HTML Tags',
      scope: ['entity.name.tag.html'],
      settings: {
        foreground: '#bb9af7',
      },
    },
    {
      name: 'HTML Attributes',
      scope: ['entity.other.attribute-name.html'],
      settings: {
        foreground: '#bb9af7',
      },
    },

    // JavaScript/TypeScript specific
    {
      name: 'TS Type Parameters',
      scope: ['meta.type.parameters'],
      settings: {
        foreground: '#0db9d7',
      },
    },
    {
      name: 'JS Template Strings',
      scope: [
        'string.template',
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: '#7dcfff',
      },
    },
    {
      name: 'JS Import/Export',
      scope: [
        'keyword.control.import',
        'keyword.control.export',
        'keyword.operator.accessor',
      ],
      settings: {
        foreground: '#7dcfff',
      },
    },

    // Python specific
    {
      name: 'Python Decorators',
      scope: [
        'entity.name.function.decorator',
        'punctuation.definition.decorator',
      ],
      settings: {
        foreground: '#7aa2f7',
      },
    },
    {
      name: 'Python Builtin Functions',
      scope: ['support.function.builtin.python'],
      settings: {
        foreground: '#0db9d7',
      },
    },

    // Java specific
    {
      name: 'Java Imports',
      scope: ['storage.modifier.import.java'],
      settings: {
        foreground: '#7dcfff',
      },
    },
    {
      name: 'Java Annotations',
      scope: [
        'storage.type.annotation.java',
        'meta.annotation.identifier.java',
      ],
      settings: {
        foreground: '#bb9af7',
      },
    },

    // C# specific
    {
      name: 'C# Attributes',
      scope: ['meta.attribute.cs'],
      settings: {
        foreground: '#0db9d7',
      },
    },
    {
      name: 'C# Preprocessor',
      scope: ['keyword.preprocessor'],
      settings: {
        foreground: '#bb9af7',
      },
    },

    // Go specific
    {
      name: 'Go Package',
      scope: ['entity.name.type.package.go'],
      settings: {
        foreground: '#0db9d7',
      },
    },
    {
      name: 'Go Receiver',
      scope: ['meta.function.receiver.go'],
      settings: {
        foreground: '#c0caf5',
      },
    },

    // Ruby specific
    {
      name: 'Ruby Symbols',
      scope: ['constant.other.symbol'],
      settings: {
        foreground: '#ff9e64',
      },
    },
    {
      name: 'Ruby Punctuation Separator',
      scope: ['punctuation.separator'],
      settings: {
        foreground: '#89ddff',
      },
    },

    // PHP specific
    {
      name: 'PHP Variables',
      scope: ['variable.other.php', 'variable.other.property.php'],
      settings: {
        foreground: '#e0af68',
      },
    },

    // SQL specific
    {
      name: 'SQL Keywords',
      scope: [
        'keyword.other.DML',
        'keyword.other.ddl',
        'keyword.other.data-type',
      ],
      settings: {
        foreground: '#7dcfff',
      },
    },
    {
      name: 'SQL Functions',
      scope: ['support.function.aggregate.sql'],
      settings: {
        foreground: '#0db9d7',
      },
    },

    // YAML specific
    {
      name: 'YAML Keys',
      scope: ['entity.name.tag.yaml'],
      settings: {
        foreground: '#7dcfff',
      },
    },
    {
      name: 'YAML Values',
      scope: ['string.unquoted.yaml', 'string.quoted.yaml'],
      settings: {
        foreground: '#9ece6a',
      },
    },
  ]
}

/**
 * Генератор семантических токенов для Tokyo Night
 */
export const generateTokyoNightSemanticTokenColors = () => {
  return {
    'parameter.declaration': {
      foreground: '#e0af68',
    },
    parameter: {
      foreground: '#d9d4cd',
    },
    'property.declaration': {
      foreground: '#73daca',
    },
    'property.defaultLibrary': {
      foreground: '#2ac3de',
    },
    '*.defaultLibrary': {
      foreground: '#2ac3de',
    },
    'variable.defaultLibrary': {
      foreground: '#2ac3de',
    },
    'variable.declaration': {
      foreground: '#bb9af7',
    },
    variable: {
      foreground: '#c0caf5',
    },
    namespace: {
      foreground: '#0db9d7',
    },
    type: {
      foreground: '#0db9d7',
    },
    class: {
      foreground: '#0db9d7',
    },
    interface: {
      foreground: '#0db9d7',
      fontStyle: 'italic',
    },
    'variable.readonly': {
      foreground: '#41a6b5',
    },
    method: {
      foreground: '#7aa2f7',
    },
    function: {
      foreground: '#7aa2f7',
    },
    enum: {
      foreground: '#0db9d7',
    },
    enumMember: {
      foreground: '#41a6b5',
    },
    struct: {
      foreground: '#0db9d7',
    },
    typeParameter: {
      foreground: '#0db9d7',
    },
    macro: {
      foreground: '#7aa2f7',
    },
    label: {
      foreground: '#c0caf5',
    },
    comment: {
      foreground: '#51597d',
    },
    string: {
      foreground: '#9ece6a',
    },
    number: {
      foreground: '#ff9e64',
    },
    boolean: {
      foreground: '#ff9e64',
    },
    regexp: {
      foreground: '#b4f9f8',
    },
    operator: {
      foreground: '#89ddff',
    },
    keyword: {
      foreground: '#bb9af7',
    },
    modifier: {
      foreground: '#9d7cd8',
    },
    decorator: {
      foreground: '#7aa2f7',
    },
    selfKeyword: {
      foreground: '#f7768e',
    },
    selfTypeKeyword: {
      foreground: '#2ac3de',
    },
    this: {
      foreground: '#f7768e',
    },
    nil: {
      foreground: '#ff9e64',
    },
    null: {
      foreground: '#ff9e64',
    },
    undefined: {
      foreground: '#ff9e64',
    },
  }
}

/**
 * Генерация полной темы Tokyo Night
 */
export const generateTokyoNightTheme = (): VSCodeTheme => {
  return {
    name: 'Tokyo Night',
    type: 'dark',
    semanticHighlighting: true,
    colors: generateTokyoNightWorkbenchColors(),
    tokenColors: generateTokyoNightTokenColors(),
    semanticTokenColors: generateTokyoNightSemanticTokenColors(),
  }
}
