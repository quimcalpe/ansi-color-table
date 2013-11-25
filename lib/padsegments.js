module.exports = exports = function (str, padLen, align, padChar) {
  var left = "";
  var right = "";
  if ( str.length >= padLen ) return { left: left, right: right };
  if ( padChar === undefined ) padChar = " ";
  if ( padChar.length > 1 ) padChar = padChar.substr(0, 1);
  switch ( align ) {
    case "center":
      var availableSlots = padLen - str.length;
      right = Math.ceil(availableSlots / 2);
      left = availableSlots - right;
      right = Array(right+1).join(padChar);
      left = Array(left+1).join(padChar);
    break;
    case "right":
      left = Array(padLen + 1 - str.length).join(padChar);
    break;
    default:
      right = Array(padLen + 1 - str.length).join(padChar);
    break;
  }
  return { left: left, right: right };
};