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

    it('Set whisker box confid', (done) => {
      chart.chartData = generateChartData(3); // eslint-disable-line
      chart.boxWhiskerConfig = {
        'boxWidth': 30,
        'edgeWidth': 15,
        'meanRadius': 4,
        'outlierRadius': 4,
        'fillColor': 'green',
        'strokeColor': '#060',
        'medianStrokeColor': '#060',
        'meanFillColor': '#8F8',
        'outlierFillColor': '8F8',
        'drawDebounceTime': 50
      };

      waitDrawUpdate(() => {
        done();
      });
    });
  });
});
