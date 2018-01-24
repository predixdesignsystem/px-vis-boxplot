document.addEventListener('WebComponentsReady', () => {

  describe('Orientation tests', () => {

    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-boxplot-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          done();
        });
      });
    });

    it('Toggle orientation to horizontal', (done) => {
      expect(chart.orientation).to.be.eq('vertical');
      chart.orientation = 'horizontal';
      chart.chartData = generateChartData(2); // eslint-disable-line

      waitDrawUpdate(() => {
        expect(chart.orientation).to.be.eq('horizontal');
        done();
      });
    });

    it('Stresholds in horizontal (currently behaving wrong)', (done) => {
      expect(chart.orientation).to.be.eq('vertical');
      chart.orientation = 'horizontal';
      chart.chartData = generateChartData(2); // eslint-disable-line
      chart.thresholdData = [
        {
          'for': 'x',
          'type': 'max',
          'value': 0.5
        }, {
          'for': 'x',
          'type': 'min',
          'value': 2.5
        }
      ];

      waitDrawUpdate(() => {
        expect(chart.orientation).to.be.eq('horizontal');
        done();
      });
    });
  });
});
