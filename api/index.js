module.exports = (req, res) => {
  res.json({
    body: stockData(),
  });
};

function getUpdatedRates(baseRate) {
  const maxRate = baseRate + 1;
  const minRate = baseRate - 5;
  return Math.random() * maxRate + minRate;
}

const stockData = () => {
  return [
    {
      company: "  Twitter Inc",
      ticker: "TWTR",
      stockPrice: getUpdatedRates(22.76).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Square Inc",
      ticker: "SQ",
      stockPrice: getUpdatedRates(45.28).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Shopify Inc",
      ticker: "SHOP",
      stockPrice: getUpdatedRates(341.79).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Sunrun Inc",
      ticker: "RUN",
      stockPrice: getUpdatedRates(9.87).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Adobe Inc",
      ticker: "ADBE",
      stockPrice: getUpdatedRates(300.99).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "HubSpot Inc",
      ticker: "HUBS",
      stockPrice: getUpdatedRates(115.22).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Paypal Holdings Inc",
      ticker: "PYPL",
      stockPrice: getUpdatedRates(92.81).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Vivint Solar Inc",
      ticker: "VSLR",
      stockPrice: getUpdatedRates(4.11).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Pluralsight Inc",
      ticker: "PS",
      stockPrice: getUpdatedRates(9.5).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Salesforce.com, inc.",
      ticker: "CRM",
      stockPrice: getUpdatedRates(134.31).toFixed(2) + " USD",
      timeElapsed: "10 sec ago",
    },
  ];
};
