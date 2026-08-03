export function openNavigation(
  latitude: number,
  longitude: number,
  label: string,
) {
  const encoded = encodeURIComponent(label);

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const isAndroid =
    /Android/i.test(navigator.userAgent);

  if (isIOS) {
    window.open(
      `maps://?q=${encoded}&ll=${latitude},${longitude}`,
      "_blank",
    );

    return;
  }

  if (isAndroid) {
    window.open(
      `geo:${latitude},${longitude}?q=${latitude},${longitude}(${encoded})`,
      "_blank",
    );

    return;
  }

  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    "_blank",
  );
}