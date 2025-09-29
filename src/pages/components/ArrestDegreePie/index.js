import React from "react";
import Plot from "react-plotly.js";
import { valueCount } from "../../../utils/helperFunctions.js";
import { getColorPalette, CHART_THEMES } from "../../../utils/colorThemes.js";

export default function ArrestDegreePie({ arrestData }) {
  const types = valueCount(arrestData, "arrestdegree");

  const labels = types ? Object.keys(types) : [];
  const values = types ? Object.values(types) : [];
  const colors = getColorPalette(labels.length, CHART_THEMES.PIE_CHARTS);

  let data = [
    {
      type: "pie",
      values: values,
      labels: labels,
      textinfo: "label+percent",
      insidetextorientation: "radial",
      hovertemplate: '<b>%{label}</b><br>Count: %{value}<br>Percentage: %{percent}<extra></extra>',
      marker: {
        colors: colors,
        line: {
          color: '#ffffff',
          width: 2
        }
      },
      textfont: {
        family: 'Inter, sans-serif',
        size: 12
      }
    },
  ];

  const chartStyle = {
    height: "100%",
    width: "100%",
  };

  const layout = {
    title: {
      text: 'Arrests by Degree',
      font: {
        family: 'Inter, sans-serif',
        size: 16,
        color: '#1f2937'
      },
      x: 0.5,
      xanchor: 'center'
    },
    showlegend: true,
    legend: {
      orientation: 'h',
      x: 0,
      y: -0.1,
      xanchor: 'left',
      yanchor: 'top',
      font: {
        family: 'Inter, sans-serif',
        size: 11
      }
    },
    margin: {
      l: 20,
      r: 20,
      t: 60,
      b: 60 // Increased for legend
    },
    font: {
      family: 'Inter, sans-serif'
    },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)',
  };

  return (
    <div className="pie-chart">
      {arrestData ? (
        <Plot
          data={data}
          style={chartStyle}
          layout={layout}
          config={{ displayModeBar: false, responsive: true }}
          useResizeHandler={true}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
