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
  });
});
