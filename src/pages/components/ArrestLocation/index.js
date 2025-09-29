import React from "react";
import Plot from "react-plotly.js";
import { valueCount } from "../../../utils/helperFunctions.js";
import { getColorPalette, CHART_THEMES } from "../../../utils/colorThemes.js";

export default function ArrestLocation({ arrestData }) {
  const location = valueCount(arrestData, "arrestcity");

  // Sort locations by count (descending)
  const sortedLocations = location
    ? Object.keys(location).sort((a, b) => location[b] - location[a])
    : [];

  // Use consistent warm color theme for locations
  const colors = getColorPalette(sortedLocations.length, CHART_THEMES.LOCATION_CHARTS);

  const data = [
    {
      x: sortedLocations,
      y: sortedLocations.map(city => location[city]),
      type: "bar",
      text: sortedLocations.map(city => location[city]),
      textposition: "auto",
      hovertemplate: '<b>%{x}</b><br>Arrests: %{y}<extra></extra>',
      marker: {
        color: colors,
      },
    },
  ];

  const layout = {
    title: {
      text: 'Arrests by City',
      font: {
        family: 'Inter, sans-serif',
        size: 16,
        color: '#1f2937'
      },
      x: 0.5,
      xanchor: 'center'
    },
    showlegend: false,
    xaxis: {
      title: "City",
      tickangle: -45,
      automargin: true,
      tickfont: {
        size: 11
      }
    },
    yaxis: {
      title: "Number of Arrests",
      tickmode: "linear",
      dtick: Math.max(1, Math.ceil(Math.max(...Object.values(location || {})) / 10)),
      automargin: true,
    },
    margin: {
      l: 60,
      r: 20,
      t: 60,
      b: 80, // Increased for angled labels
    },
    font: {
      family: 'Inter, sans-serif',
      size: 12,
    },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)',
  };

  return (
    <div className="bar-chart">
      <Plot
        data={data}
        layout={layout}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
