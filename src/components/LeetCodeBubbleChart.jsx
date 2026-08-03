import React, { useState } from 'react';

export default function LeetCodeBubbleChart({ categories }) {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  // Position packed bubble nodes in an organic interlocking cluster (like LeetCode progress page)
  const bubblePositions = [
    { x: 140, y: 110, r: 44 }, // Array (x12)
    { x: 230, y: 100, r: 38 }, // Hash Table (x9)
    { x: 90,  y: 180, r: 34 }, // DFS (x7)
    { x: 170, y: 195, r: 32 }, // Tree (x6)
    { x: 250, y: 175, r: 30 }, // String (x5)
    { x: 235, y: 240, r: 28 }, // Dynamic Programming (x4)
    { x: 110, y: 255, r: 27 }, // Two Pointers (x4)
    { x: 50,  y: 125, r: 24 }, // Matrix (x3)
    { x: 175, y: 265, r: 22 }  // Bit Manipulation (x2)
  ];

  const categoriesWithPositions = categories.map((cat, idx) => ({
    ...cat,
    ...(bubblePositions[idx] || { x: 150 + (idx % 3) * 50, y: 150 + Math.floor(idx / 3) * 50, r: 24 })
  }));

  return (
    <div className="w-full relative select-none">
      <svg
        viewBox="0 0 310 300"
        className="w-full h-auto max-h-[260px] overflow-visible drop-shadow-md"
      >
        {/* Subtle grid background dots like LeetCode Progress */}
        <pattern id="grid-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.05)" />
        </pattern>
        <rect width="310" height="300" fill="url(#grid-dots)" rx="12" />

        {/* Render Bubbles */}
        {categoriesWithPositions.map((node, idx) => {
          const isHovered = hoveredTopic === node.name;

          return (
            <g
              key={idx}
              className="cursor-pointer transition-transform duration-300"
              onMouseEnter={() => setHoveredTopic(node.name)}
              onMouseLeave={() => setHoveredTopic(null)}
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
                transform: isHovered ? 'scale(1.12)' : 'scale(1)'
              }}
            >
              {/* Outer Glow Halo on Hover */}
              {isHovered && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r + 6}
                  fill="rgba(255, 255, 255, 0.1)"
                  stroke="#ffffff"
                  strokeWidth="1"
                  className="animate-pulse"
                />
              )}

              {/* Main Bubble Circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={isHovered ? '#ffffff' : '#18181b'}
                stroke={isHovered ? '#ffffff' : '#3f3f46'}
                strokeWidth="1.5"
                className="transition-colors duration-200"
              />

              {/* Topic Text Label */}
              <text
                x={node.x}
                y={node.y - (node.r > 30 ? 3 : 0)}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isHovered ? '#000000' : '#f4f4f5'}
                fontSize={node.r > 35 ? '11' : node.r > 28 ? '10' : '9'}
                fontWeight="700"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                className="pointer-events-none"
              >
                {node.name.length > 10 && node.r < 35 ? `${node.name.substring(0, 8)}..` : node.name}
              </text>

              {/* Question Count Sublabel */}
              <text
                x={node.x}
                y={node.y + (node.r > 30 ? 11 : 10)}
                textAnchor="middle"
                dominantBaseline="central"
                fill={isHovered ? '#3f3f46' : '#a1a1aa'}
                fontSize="9"
                fontWeight="600"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                className="pointer-events-none"
              >
                {node.count} solved
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Tooltip Summary */}
      {hoveredTopic && (
        <div className="mt-2 text-center text-xs font-mono text-zinc-300 bg-zinc-900 py-1.5 px-3 rounded border border-zinc-800 animate-fadeIn">
          <span>Topic: <strong className="text-white">{hoveredTopic}</strong></span>
        </div>
      )}
    </div>
  );
}
