import React from "react";
import { valueCount } from "../../../utils/helperFunctions.js";
import Plot from "react-plotly.js";
import { getColorPalette, CHART_THEMES } from "../../../utils/colorThemes.js";

export default function ArrestGenderPie({ arrestData }) {
  const genderCount = valueCount(arrestData, "gender");

  const labels = genderCount ? Object.keys(genderCount) : [];
  const values = genderCount ? Object.values(genderCount) : [];
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
      text: 'Arrests by Gender',
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
          config={{ displayModeBar: false, responsive: true }}
          layout={layout}
          useResizeHandler={true}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
