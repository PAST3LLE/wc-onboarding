const LOGOS = {
  METAMASK: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg',
  UNKNOWN:
    'https://e7.pngegg.com/pngimages/313/980/png-clipart-black-and-white-question-mark-inside-circle-logo-question-mark-icon-question-mark-text-trademark.png',
}

export function getConnectorLogo(name?: string) {
  if (!name) return null
  switch (name) {
    case 'MetaMask':
      return LOGOS.METAMASK
    default:
      return LOGOS.UNKNOWN
  }
}
