document.addEventListener('WebComponentsReady', () => {

  describe('Threshold tests', () => {

    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-boxplot-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          done();
        });
      });
    });

    it('Adding thresholds', (done) => {
      expect(chart.thresholdData).to.be.eq(undefined);
      chart.chartData = generateChartData(2); // eslint-disable-line

      chart.thresholdData = [
        {
          'for': 'y',
          'type': 'max',
          'value': 3
        }, {
          'for': 'y',
          'type': 'min',
          'value': 1
        }
      ];

      waitDrawUpdate(chart, () => {
        done();
      });
    });
  });
});
