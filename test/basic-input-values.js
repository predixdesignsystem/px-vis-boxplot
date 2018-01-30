document.addEventListener('WebComponentsReady', () => {

  describe('Test basic input values', () => {

    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-boxplot-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          done();
        });
      });
    });

    it('One whisker box with outliers', (done) => {
      chart.chartData = generateChartData(1); // eslint-disable-line

      waitDrawUpdate(() => {
        done();
      });
    });

    it('Two whisker box with outliers', (done) => {
      chart.chartData = generateChartData(2); // eslint-disable-line

      waitDrawUpdate(() => {
        done();
      });
    });

    it('Negative values', (done) => {
      var chartData = generateChartData(2); // eslint-disable-line
      chartData[0].series1.data.min = -1;
      chartData[1].series2.data.min = -2;
      chart.chartData = chartData;

      waitDrawUpdate(() => {
        done();
      });
    });
  });
});
