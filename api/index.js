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
      website: "https://twitter.com/",
    },
    {
      company: "Square Inc",
      ticker: "SQ",
      stockPrice: getUpdatedRates(45.28).toFixed(2) + " USD",
      website: "https://squareup.com/",
    },
    {
      company: "Shopify Inc",
      ticker: "SHOP",
      stockPrice: getUpdatedRates(341.79).toFixed(2) + " USD",
      website: "https://www.shopify.ca/",
    },
    {
      company: "Sunrun Inc",
      ticker: "RUN",
      stockPrice: getUpdatedRates(19.87).toFixed(2) + " USD",
      website: "https://www.sunrun.com",
    },
    {
      company: "Adobe Inc",
      ticker: "ADBE",
      stockPrice: getUpdatedRates(300.99).toFixed(2) + " USD",
      website: "https://www.adobe.com",
    },
    {
      company: "HubSpot Inc",
      ticker: "HUBS",
      stockPrice: getUpdatedRates(115.22).toFixed(2) + " USD",
      website: "https://www.hubspot.com/",
    },
    {
      company: "Paypal Holdings Inc",
      ticker: "PYPL",
      stockPrice: getUpdatedRates(92.81).toFixed(2) + " USD",
      website: "https://www.paypal.com",
    },
    {
      company: "Vivint Solar Inc",
      ticker: "VSLR",
      stockPrice: getUpdatedRates(10.11).toFixed(2) + " USD",
      website: "https://www.vivintsolar.com/",
    },
    {
      company: "Alphabet Inc",
      ticker: "GOOGL",
      stockPrice: getUpdatedRates(1264.22).toFixed(2) + " USD",
      website: "https://www.google.com/",
    },
    {
      company: "Salesforce.com, inc.",
      ticker: "CRM",
      stockPrice: getUpdatedRates(134.31).toFixed(2) + " USD",
      website: "https://www.salesforce.com/",
    },
  ];
};
