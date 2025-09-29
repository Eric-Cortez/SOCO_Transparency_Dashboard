import React from "react";
import Plot from "react-plotly.js";
import { getColorPalette, CHART_THEMES } from "../../../utils/colorThemes.js";

function ArrestsByAgency({ arrestData }) {
  const arrestsByAgency = {};
  arrestData.forEach((arrest) => {
    const agency = arrest.fullagencyname;
    arrestsByAgency[agency] = (arrestsByAgency[agency] || 0) + 1;
  });

  const agencies = Object.keys(arrestsByAgency).sort(
    (a, b) => arrestsByAgency[b] - arrestsByAgency[a]
  );

  // Function to abbreviate long agency names
  const abbreviateAgency = (agencyName) => {
    if (!agencyName) return 'Unknown';

    const abbreviations = {
      'Windsor Police Department': 'Windsor PD',
      'Sonoma County Sheriff\'s Office': 'SCSO',
      'Santa Rosa Police Department': 'Santa Rosa PD',
      'Petaluma Police Department': 'Petaluma PD',
      'Sebastopol Police Department': 'Sebastopol PD',
      'Healdsburg Police Department': 'Healdsburg PD',
      'Cloverdale Police Department': 'Cloverdale PD',
      'California Highway Patrol': 'CHP',
      'Sonoma Police Department': 'Sonoma PD',
      'Cotati Police Department': 'Cotati PD'
    };

    return abbreviations[agencyName] ||
      (agencyName.length > 15 ?
        agencyName.replace(/Police Department/g, 'PD')
          .replace(/Sheriff's Office/g, 'SO')
          .substring(0, 15) + '...' :
        agencyName);
  };

  // Use consistent color theme
  const colors = getColorPalette(agencies.length, CHART_THEMES.AGENCY_CHARTS);

  const plotData = [
    {
      type: "bar",
      x: agencies.map(abbreviateAgency),
      y: agencies.map((agency) => arrestsByAgency[agency]),
      text: agencies.map((agency) => arrestsByAgency[agency]),
      textposition: 'auto',
      hovertemplate: '<b>%{customdata}</b><br>Arrests: %{y}<extra></extra>',
      customdata: agencies, // Full names for hover
      marker: {
        color: colors,
      },
    },
  ];

  const layout = {
    title: {
      text: 'Arrests by Agency',
      font: {
        family: 'Inter, sans-serif',
        size: 16,
        color: '#1f2937'
      },
      x: 0.5,
      xanchor: 'center'
    },
    showlegend: false,
    responsive: true,
    xaxis: {
      title: "Arresting Agency",
      automargin: true,
      tickangle: -45,
      tickfont: {
        size: 11
      }
    },
    yaxis: {
      title: "Number of Arrests",
      tickmode: "linear",
      automargin: true,
      dtick: Math.max(1, Math.ceil(Math.max(...agencies.map(agency => arrestsByAgency[agency])) / 10)),
    },
    margin: {
      l: 60,
      r: 20,
      t: 60,
      b: 80, // Increased bottom margin for angled labels
    },
    font: {
      family: 'Inter, sans-serif',
      size: 12,
    },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)',
  };

  const config = {
    displayModeBar: false,
    responsive: true,
  };

  return (
    <div className="bar-chart">
      <Plot
        data={plotData}
        layout={layout}
        useResizeHandler={true}
        config={config}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
} export default ArrestsByAgency;
