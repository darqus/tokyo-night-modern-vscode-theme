/**
 * Source Control Graph colors - colors for SCM Graph view
 */

import { foundationColors } from '../palette/foundation/colors'

export const scmGraphColors = {
  // History item hover label foreground color
  'scmGraph.historyItemHoverLabelForeground': foundationColors.white,

  // Source control graph foreground colors (for different branches/lines)
  'scmGraph.foreground1': foundationColors.blue500,
  'scmGraph.foreground2': foundationColors.purple500,
  'scmGraph.foreground3': foundationColors.green500,
  'scmGraph.foreground4': foundationColors.yellow500,
  'scmGraph.foreground5': foundationColors.cyan500,

  // History item hover additions and deletions foreground colors
  'scmGraph.historyItemHoverAdditionsForeground': foundationColors.green500,
  'scmGraph.historyItemHoverDeletionsForeground': foundationColors.red500,

  // History item reference colors
  'scmGraph.historyItemRefColor': foundationColors.blue500,
  'scmGraph.historyItemRemoteRefColor': foundationColors.purple500,
  'scmGraph.historyItemBaseRefColor': foundationColors.red500,

  // History item hover default label - tag background and foreground
  'scmGraph.historyItemHoverDefaultLabelBackground': foundationColors.blue500,
  'scmGraph.historyItemHoverDefaultLabelForeground': foundationColors.white,
}
