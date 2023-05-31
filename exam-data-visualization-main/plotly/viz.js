fetch('data.json')
  .then((response) => response.json())
  .then((data) => run_visualization(data));

function run_visualization(data) {
  sortByCountryPopulation(data);
  data.reverse();

  const selectedData = data.slice(0, 30);

  const countries = selectedData.map((d) => d.country);
  const populations = selectedData.map((d) => d.population);

  countries.reverse();
  populations.reverse();

  const chartData = [{
    x: countries,
    y: populations,
    type: 'bar'
  }];

  const layout = {
    title: '30 pays avec la plus grande population',
    xaxis: { title: 'Pays' },
    yaxis: { title: 'Population' }
  };

  Plotly.newPlot('chart', chartData, layout);
}

function sortByCountryPopulation(data) {
  data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}
