const convertToFootInches = (totalInches) => {
  // seperate into parts
  var feet = Math.floor(totalInches / 12);
  var inches = totalInches % 12;

  // pluralize appropriately
  var feetString = feet === 0 ? "" : feet + "'";
  var inchString = inches === 0 ? "" : inches + `"`;
  var canonicalString = (feetString + inchString).trim();
  return canonicalString;
};

export { convertToFootInches };
