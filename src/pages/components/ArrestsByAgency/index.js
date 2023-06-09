import React from "react";
import Plot from "react-plotly.js";

function ArrestsByAgency({ arrestData }) {
  const arrestsByAgency = {};
  arrestData.forEach((arrest) => {
    const agency = arrest.fullagencyname;
    arrestsByAgency[agency] = (arrestsByAgency[agency] || 0) + 1;
  });

  const agencies = Object.keys(arrestsByAgency).sort(
    (a, b) => arrestsByAgency[b] - arrestsByAgency[a]
  );

  const plotData = [
    {
      type: "bar",
      // orientation: "h",
      x: agencies,
      y: agencies.map((agency) => arrestsByAgency[agency]),
      marker: {
        color: "rgb(32,119,180)",
      },
    },
  ];

  const layout = {
    title: "Arrests by Agency",
    responsive: true,
    xaxis: {
      title: "Arresting Agency",
      automargin: true,
    },
    yaxis: {
      title: "Number of Arrests",
      tickmode: "linear",
      automargin: true,
      dtick: 1,
    },
    margin: {
      l: 120,
      r: 20,
      t: 60,
      b: 20,
    },
  };
  const config = {
    displayModeBar: false,
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
}

export default ArrestsByAgency;
