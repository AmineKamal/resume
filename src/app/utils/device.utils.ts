export function isMobile() {
  return new RegExp(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/,
    'i'
  ).test(window.navigator.userAgent);
}
