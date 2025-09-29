import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { getColorPalette, CHART_THEMES } from "../../../utils/colorThemes.js";

export default function TopChargedescription({ arrestData }) {
  const [topCharges, setTopCharges] = useState([]);
  const [chargeCounts, setChargeCounts] = useState([]);

  // Function to abbreviate long charge descriptions
  const abbreviateCharge = (charge) => {
    if (!charge) return 'UNKNOWN';

    // Convert to lowercase for comparison, but return uppercase
    const lowerCharge = charge.toLowerCase();

    const abbreviations = {
      'possess unlawful paraphernalia': 'DRUG PARAPHERNALIA',
      'battery on person': 'BATTERY',
      'drive while lic susp': 'SUSP. LICENSE',
      'outside warrant (misdemeanor)': 'WARRANT (MISD.)',
      'outside warrant (felony)': 'WARRANT (FEL.)',
      'public peace officer/emergency med tech': 'OBSTRUCT OFFICER',
      'driving under the influence': 'DUI',
      'possession of controlled substance': 'DRUG POSSESSION',
      'disorderly conduct': 'DISORDERLY',
      'domestic violence': 'DOMESTIC VIOLENCE',
      'assault and battery': 'ASSAULT & BATTERY',
      'resist/obstruct/delay peace officer': 'RESIST ARREST',
      'violation of probation': 'PROBATION VIOLATION',
      'burglary': 'BURGLARY',
      'theft/larceny': 'THEFT',
      'vandalism/malicious mischief': 'VANDALISM'
    };

    // Check for exact matches first
    if (abbreviations[lowerCharge]) {
      return abbreviations[lowerCharge];
    }

    // If charge is longer than 25 characters, try to abbreviate it
    if (charge.length > 25) {
      let abbreviated = charge
        .replace(/paraphernalia/gi, 'PARA.')
        .replace(/misdemeanor/gi, 'MISD.')
        .replace(/felony/gi, 'FEL.')
        .replace(/officer/gi, 'OFF.')
        .replace(/emergency/gi, 'EMERG.')
        .replace(/medical/gi, 'MED.')
        .replace(/technician/gi, 'TECH.')
        .replace(/possession/gi, 'POSS.')
        .replace(/controlled substance/gi, 'CONT. SUB.')
        .replace(/under the influence/gi, 'UNDER INFL.')
        .replace(/obstruct/gi, 'OBSTR.')
        .replace(/warrant/gi, 'WARR.')
        .replace(/outside/gi, 'OUT.')
        .replace(/driving/gi, 'DRV.')
        .replace(/license/gi, 'LIC.')
        .replace(/suspended/gi, 'SUSP.');

      // If still too long, truncate and add ellipsis
      if (abbreviated.length > 25) {
        abbreviated = abbreviated.substring(0, 22) + '...';
      }

      return abbreviated.toUpperCase();
    }

    return charge.toUpperCase();
  }; useEffect(() => {
    const chargeCounts = {};
    arrestData.forEach((arrest) => {
      const charges = arrest.chargedescription
        .split("<br/>")
        .filter((charge) => charge !== "----------");
      charges.forEach((charge) => {
        charge = charge.trim().split(";");

        if (charge) {
          const shortName = charge[charge.length - 1];
          chargeCounts[shortName] = (chargeCounts[shortName] || 0) + 1;
        }
      });
    });

    const topCharges = Object.keys(chargeCounts)
      .sort((a, b) => chargeCounts[b] - chargeCounts[a])
      .slice(0, 10);

    setTopCharges(topCharges);
    setChargeCounts(chargeCounts);
  }, [arrestData]);

  if (topCharges.length === 0) {
    return null;
  }

  // Use consistent color theme
  const colors = getColorPalette(topCharges.length, CHART_THEMES.BAR_CHARTS);

  const data = [
    {
      x: topCharges.map((charge) => chargeCounts[charge]),
      y: topCharges.map(abbreviateCharge),
      type: "bar",
      orientation: "h",
      text: topCharges.map((charge) => chargeCounts[charge]),
      textposition: 'auto',
      hovertemplate: '<b>%{customdata}</b><br>Arrests: %{x}<extra></extra>',
      customdata: topCharges, // Full charge names for hover
      marker: {
        color: colors,
      },
    },
  ];

  const layout = {
    title: {
      text: 'Top Charges',
      font: {
        family: 'Inter, sans-serif',
        size: 16,
        color: '#1f2937'
      },
      x: 0.5,
      xanchor: 'center'
    },
    showlegend: false,
    margin: {
      l: 180, // Increased for longer abbreviated labels
      r: 20,
      t: 60,
      b: 50,
    },
    xaxis: {
      title: "Number of Arrests",
      automargin: true,
    },
    yaxis: {
      title: "Charge Description",
      tickmode: "linear",
      automargin: true,
      dtick: 1,
      tickfont: {
        size: 11
      }
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
