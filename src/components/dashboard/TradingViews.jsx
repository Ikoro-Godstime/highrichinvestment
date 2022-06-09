import { Box, Typography } from "@mui/material";
import React from "react";
import { SymbolOverview, TickerTape } from "react-tradingview-embed";

const TradingViews = () => {
  // symbols to display in the Ticker Tap
  const symbol = [
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "Rune",
      proName: "BINANCE:RUNEUSDT",
    },
    {
      description: "Shiba",
      proName: "BINANCE:SHIBUSDT",
    },
    {
      description: "Doge",
      proName: "BINGX:DOGEUSDT",
    },
  ];

  return (
    <div>
      <Box>
        <TickerTape
          widgetProps={{
            symbols: symbol,
          }}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <SymbolOverview
          widgetPropsAny={{
            symbols: [
              ["Bitcoin", "BINANCE:BTCUSDT|1D"],
              ["Ethereum", "BINANCE:ETHUSDT|1D"],
              ["Tether", "COINBASE:USDTUSD|12M"],
            ],
            autosize: true,
          }}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" textAlign="center">
          Quickiebooks © 2022
        </Typography>
      </Box>
    </div>
  );
};

export default TradingViews;
