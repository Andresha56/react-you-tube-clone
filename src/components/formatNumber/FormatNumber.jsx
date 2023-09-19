function formatNumber(number) {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + "B";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number?.toString();
  }
}

function Formatnumber({ numbers }) {
  const number = formatNumber(numbers);
  return <span style={{ fontSize: "13px" }}>{number}</span>;
}

export default Formatnumber;
