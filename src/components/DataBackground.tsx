const DataBackground = () => {
  // Professional data visualization elements
  const dataNodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 85 + 7.5,
    top: Math.random() * 80 + 10,
    delay: Math.random() * 12,
    size: Math.random() * 6 + 4,
    type: Math.random() > 0.5 ? 'primary' : 'secondary',
  }));

  // Data flow connections between nodes
  const dataConnections = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * 80 + 10,
    startY: Math.random() * 70 + 15,
    endX: Math.random() * 80 + 10,
    endY: Math.random() * 70 + 15,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 8,
  }));

  // Professional metrics display
  const metricsData = [
    { label: 'Accuracy', value: '94.7%', x: 15, y: 20 },
    { label: 'Processing', value: '2.3s', x: 75, y: 35 },
    { label: 'Insights', value: '847', x: 25, y: 70 },
    { label: 'Models', value: '23', x: 80, y: 75 },
  ];

  // Subtle grid pattern for professional look
  const gridLines = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    position: (i + 1) * 10,
    delay: Math.random() * 5,
  }));

  // Data stream indicators
  const dataStreams = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: 15 + i * 14,
    delay: i * 0.8,
    height: 60 + Math.random() * 40,
  }));

  // Chart-like visualization elements
  const chartBars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    height: 20 + Math.random() * 60,
    left: 10 + i * 10,
    delay: i * 0.3,
  }));

  // Floating analytics indicators
  const analyticsSymbols = ['∑', 'μ', 'σ', 'Δ', 'λ', 'π', '∇', 'Ω'];
  const floatingIndicators = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    symbol: analyticsSymbols[Math.floor(Math.random() * analyticsSymbols.length)],
    left: Math.random() * 90 + 5,
    delay: Math.random() * 15,
    fontSize: Math.random() * 6 + 12,
  }));

  return (
    <div className="data-background">
      {/* Professional Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        {gridLines.map((line) => (
          <div key={`v-${line.id}`}>
            <div 
              className="absolute h-full w-px bg-primary"
              style={{ 
                left: `${line.position}%`,
                animationDelay: `${line.delay}s`
              }}
            />
            <div 
              className="absolute w-full h-px bg-primary"
              style={{ 
                top: `${line.position}%`,
                animationDelay: `${line.delay + 2}s`
              }}
            />
          </div>
        ))}
      </div>

      {/* Data Visualization Nodes */}
      {dataNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute rounded-full border-2 animate-pulse ${
            node.type === 'primary' 
              ? 'border-primary/30 bg-primary/10' 
              : 'border-accent/30 bg-accent/10'
          }`}
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            animationDelay: `${node.delay}s`,
            animationDuration: '3s',
          }}
        >
          <div className={`absolute inset-1 rounded-full ${
            node.type === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
          }`} />
        </div>
      ))}

      {/* Data Flow Connections */}
      {dataConnections.map((connection) => (
        <svg
          key={connection.id}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ animationDelay: `${connection.delay}s` }}
        >
          <line
            x1={`${connection.startX}%`}
            y1={`${connection.startY}%`}
            x2={`${connection.endX}%`}
            y2={`${connection.endY}%`}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeOpacity="0.15"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>
      ))}

      {/* Professional Data Streams */}
      {dataStreams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"
          style={{
            left: `${stream.left}%`,
            height: `${stream.height}%`,
            animationDelay: `${stream.delay}s`,
            animationDuration: '4s',
          }}
        />
      ))}

      {/* Chart Bar Visualization */}
      <div className="absolute bottom-10 left-10 flex items-end space-x-2 opacity-20">
        {chartBars.map((bar) => (
          <div
            key={bar.id}
            className="w-2 bg-gradient-to-t from-primary/40 to-primary/10 rounded-t animate-pulse"
            style={{
              height: `${bar.height}px`,
              animationDelay: `${bar.delay}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>

      {/* Floating Mathematical Symbols */}
      {floatingIndicators.map((indicator) => (
        <div
          key={indicator.id}
          className="absolute text-primary/15 font-mono animate-float"
          style={{
            left: `${indicator.left}%`,
            top: `${Math.random() * 80 + 10}%`,
            fontSize: `${indicator.fontSize}px`,
            animationDelay: `${indicator.delay}s`,
            animationDuration: '8s',
          }}
        >
          {indicator.symbol}
        </div>
      ))}

      {/* Real-time Metrics Display */}
      {metricsData.map((metric, i) => (
        <div
          key={i}
          className="absolute text-xs text-primary/20 font-mono animate-pulse"
          style={{
            left: `${metric.x}%`,
            top: `${metric.y}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: '3s',
          }}
        >
          <div className="border border-primary/10 bg-background/5 px-2 py-1 rounded backdrop-blur-sm">
            <div className="text-primary/30 text-[10px]">{metric.label}</div>
            <div className="text-primary/40 font-semibold">{metric.value}</div>
          </div>
        </div>
      ))}

      {/* Subtle Data Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DataBackground;