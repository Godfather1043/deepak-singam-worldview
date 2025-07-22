import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Filter, DollarSign, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Trade {
  id: string;
  symbol: string;
  company: string;
  type: "BUY" | "SELL";
  quantity: number;
  buyPrice: number;
  sellPrice?: number;
  date: string;
  sector: string;
  status: "OPEN" | "CLOSED";
  pnl?: number;
}

const mockTrades: Trade[] = [
  {
    id: "1",
    symbol: "AAPL",
    company: "Apple Inc.",
    type: "BUY",
    quantity: 100,
    buyPrice: 180.50,
    sellPrice: 195.20,
    date: "2024-01-15",
    sector: "Technology",
    status: "CLOSED",
    pnl: 1470
  },
  {
    id: "2",
    symbol: "TSLA",
    company: "Tesla Inc.",
    type: "BUY",
    quantity: 50,
    buyPrice: 240.80,
    sellPrice: 220.30,
    date: "2024-01-20",
    sector: "Automotive",
    status: "CLOSED",
    pnl: -1025
  },
  {
    id: "3",
    symbol: "NVDA",
    company: "NVIDIA Corp",
    type: "BUY",
    quantity: 75,
    buyPrice: 420.00,
    date: "2024-02-01",
    sector: "Technology",
    status: "OPEN"
  },
  {
    id: "4",
    symbol: "MSFT",
    company: "Microsoft Corp",
    type: "BUY",
    quantity: 80,
    buyPrice: 380.25,
    sellPrice: 415.60,
    date: "2024-02-10",
    sector: "Technology",
    status: "CLOSED",
    pnl: 2828
  },
  {
    id: "5",
    symbol: "AMZN",
    company: "Amazon.com Inc",
    type: "BUY",
    quantity: 60,
    buyPrice: 145.30,
    date: "2024-02-15",
    sector: "E-commerce",
    status: "OPEN"
  }
];

const TradesSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedSector, setSelectedSector] = useState("ALL");

  const filteredTrades = mockTrades.filter(trade => {
    const statusFilter = selectedFilter === "ALL" || trade.status === selectedFilter;
    const sectorFilter = selectedSector === "ALL" || trade.sector === selectedSector;
    return statusFilter && sectorFilter;
  });

  const totalPnL = mockTrades
    .filter(trade => trade.pnl !== undefined)
    .reduce((sum, trade) => sum + (trade.pnl || 0), 0);

  const totalTrades = mockTrades.length;
  const profitableTrades = mockTrades.filter(trade => (trade.pnl || 0) > 0).length;
  const winRate = totalTrades > 0 ? ((profitableTrades / totalTrades) * 100).toFixed(1) : "0";

  const sectors = ["ALL", ...Array.from(new Set(mockTrades.map(trade => trade.sector)))];

  return (
    <section id="trades" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Trades & P&L
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real trades, real results. Transparent tracking of my trading journey with detailed P&L analysis.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total P&L</p>
                  <p className={cn(
                    "text-3xl font-bold",
                    totalPnL >= 0 ? "text-profit" : "text-loss"
                  )}>
                    {totalPnL >= 0 ? "+" : ""}${totalPnL.toLocaleString()}
                  </p>
                </div>
                <div className={cn(
                  "p-3 rounded-full",
                  totalPnL >= 0 ? "bg-profit/10" : "bg-loss/10"
                )}>
                  <DollarSign className={cn(
                    "h-6 w-6",
                    totalPnL >= 0 ? "text-profit" : "text-loss"
                  )} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-accent transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Win Rate</p>
                  <p className="text-3xl font-bold text-accent">{winRate}%</p>
                </div>
                <div className="p-3 rounded-full bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Trades</p>
                  <p className="text-3xl font-bold text-primary">{totalTrades}</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex gap-2">
            <Button
              variant={selectedFilter === "ALL" ? "gradient" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("ALL")}
            >
              All Trades
            </Button>
            <Button
              variant={selectedFilter === "OPEN" ? "gradient" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("OPEN")}
            >
              Open
            </Button>
            <Button
              variant={selectedFilter === "CLOSED" ? "gradient" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter("CLOSED")}
            >
              Closed
            </Button>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {sectors.map(sector => (
              <Button
                key={sector}
                variant={selectedSector === sector ? "accent" : "ghost"}
                size="sm"
                onClick={() => setSelectedSector(sector)}
              >
                {sector}
              </Button>
            ))}
          </div>
        </div>

        {/* Trades Table */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Trading History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Symbol</th>
                    <th className="text-left py-3 px-4 font-semibold">Company</th>
                    <th className="text-left py-3 px-4 font-semibold">Quantity</th>
                    <th className="text-left py-3 px-4 font-semibold">Buy Price</th>
                    <th className="text-left py-3 px-4 font-semibold">Sell Price</th>
                    <th className="text-left py-3 px-4 font-semibold">P&L</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Sector</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTrades.map((trade) => (
                    <tr key={trade.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 font-mono font-semibold text-primary">{trade.symbol}</td>
                      <td className="py-3 px-4">{trade.company}</td>
                      <td className="py-3 px-4">{trade.quantity}</td>
                      <td className="py-3 px-4 font-mono">${trade.buyPrice.toFixed(2)}</td>
                      <td className="py-3 px-4 font-mono">
                        {trade.sellPrice ? `$${trade.sellPrice.toFixed(2)}` : "-"}
                      </td>
                      <td className="py-3 px-4">
                        {trade.pnl !== undefined ? (
                          <span className={cn(
                            "font-semibold",
                            trade.pnl >= 0 ? "text-profit" : "text-loss"
                          )}>
                            {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toLocaleString()}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={trade.status === "OPEN" ? "default" : "secondary"}>
                          {trade.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline">{trade.sector}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TradesSection;