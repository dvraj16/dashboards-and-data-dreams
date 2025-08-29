const DataBackground = () => {
  // Generate more dynamic data points for analytics theme
  const dataPoints = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    left: Math.random() * 90 + 5,
    delay: Math.random() * 15,
    size: Math.random() * 8 + 3,
    speed: Math.random() * 3 + 1,
  }));

  // Enhanced network connection lines for data flow
  const networkLines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: Math.random() * 80 + 10,
    width: Math.random() * 300 + 150,
    left: Math.random() * 60 + 20,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  // Analytics symbols and icons
  const dataSymbols = ['📊', '📈', '📉', '💹', '⚡', '🔍', '🎯', '⭐', '🚀', '💎', '🔥', '✨'];
  const mathSymbols = ['∑', '∫', 'μ', 'σ', 'χ²', 'λ', 'π', 'α', 'β', 'γ', '∆', '∇', 'ρ', 'θ', 'Ω'];
  
  const floatingSymbols = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    symbol: i % 2 === 0 ? mathSymbols[Math.floor(Math.random() * mathSymbols.length)] : dataSymbols[Math.floor(Math.random() * dataSymbols.length)],
    left: Math.random() * 95 + 2.5,
    delay: Math.random() * 25,
    fontSize: Math.random() * 8 + 10,
    isEmoji: i % 2 === 1,
  }));

  // Moving data particles with trails
  const dataParticles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * 15 + 10,
    size: Math.random() * 4 + 2,
  }));

  // Binary code streams
  const binaryStreams = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 95 + 2.5,
    delay: Math.random() * 10,
    numbers: Array.from({ length: 8 }, () => Math.random() > 0.5 ? '1' : '0').join(''),
  }));

  return (
    <div className="data-background">
      {/* Enhanced Vertical Data Streams */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div 
          key={i} 
          className="data-stream" 
          style={{ 
            left: `${8 + i * 8}%`,
            animationDelay: `${i * 0.5}s`,
            height: `${100 + Math.random() * 50}px`
          }}
        />
      ))}

      {/* Dynamic Circuit Lines */}
      <div className="circuit-lines">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="circuit-line"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Floating Data Points with Trails */}
      {dataPoints.map((point) => (
        <div
          key={point.id}
          className="floating-data-point enhanced"
          style={{
            left: `${point.left}%`,
            animationDelay: `${point.delay}s`,
            animationDuration: `${8 + point.speed * 2}s`,
            width: `${point.size}px`,
            height: `${point.size}px`,
          }}
        />
      ))}

      {/* Network Connection Lines */}
      {networkLines.map((line) => (
        <div
          key={line.id}
          className="network-line enhanced"
          style={{
            top: `${line.top}%`,
            left: `${line.left}%`,
            width: `${line.width}px`,
            animationDelay: `${line.delay}s`,
            opacity: line.opacity,
          }}
        />
      ))}

      {/* Floating Analytics Symbols */}
      {floatingSymbols.map((symbol) => (
        <div
          key={symbol.id}
          className={`floating-symbol ${symbol.isEmoji ? 'emoji-symbol' : 'math-symbol'}`}
          style={{
            left: `${symbol.left}%`,
            animationDelay: `${symbol.delay}s`,
            fontSize: `${symbol.fontSize}px`,
          }}
        >
          {symbol.symbol}
        </div>
      ))}

      {/* Binary Code Streams */}
      {binaryStreams.map((stream) => (
        <div
          key={stream.id}
          className="binary-stream"
          style={{
            left: `${stream.left}%`,
            animationDelay: `${stream.delay}s`,
          }}
        >
          {stream.numbers}
        </div>
      ))}

      {/* Enhanced Data Particles */}
      {dataParticles.map((particle) => (
        <div
          key={particle.id}
          className="data-particle enhanced"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      {/* Floating Analytics Icons */}
      <div className="analytics-icons">
        {['📊', '📈', '⚡', '🎯'].map((icon, i) => (
          <div
            key={i}
            className="analytics-icon"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataBackground;