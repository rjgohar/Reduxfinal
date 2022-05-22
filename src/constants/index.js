export const shortenAddress = (address) =>
  address ? `${address.slice(0, 7)}...${address.slice(-7)}` : null;
