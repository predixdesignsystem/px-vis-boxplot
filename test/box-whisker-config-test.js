document.addEventListener('WebComponentsReady', () => {

  describe('Test Box Whisker Config', () => {

    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-boxplot-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          done();
        });
      });
    });

    it('Set whisker box config', (done) => {
      chart.chartData = generateChartData(3); // eslint-disable-line
      chart.boxWhiskerConfig = {
        meanRadius: 20,
        outlierRadius: 20,
        drawDebounceTime: 10
      };

      waitDrawUpdate(chart, () => {
        done();
      });
    });


    it('Set whisker box look and feel', (done) => {
      chart.chartData = generateChartData(3); // eslint-disable-line
      chart.seriesConfig = {
        'series1': {
          'name': 'Series 1',
          'x': 'position',
          'y': 'data',
          'color': 'red'
        },
        'series2': {
          'name': 'Series 2',
          'x': 'position',
          'y': 'data',
          'color': 'green'
        },
        'series3': {
          'name': 'Series 3',
          'x': 'position',
          'y': 'data',
          'color': 'blue'
        }
      };

      waitDrawUpdate(chart, () => {
        done();
      });
    });
  });
});
