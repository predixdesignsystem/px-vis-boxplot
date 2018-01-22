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
      chart.chartData = [
        {
          position: 1,
          data: {
            max: 9,
            mean: 5,
            median: 4,
            min: 1,
            outliers: [0, 10],
            q3: 7,
            q1: 3
          }
        }
      ];

      Polymer.RenderStatus.afterNextRender(chart, () => {
        done();
      });
    });

    it('Two whisker box with outliers', (done) => {
      chart.chartData = [
        {
          position: 0,
          data: {
            max: 9,
            mean: 5,
            median: 4,
            min: 1,
            outliers: [0, 10],
            q3: 7,
            q1: 3
          }
        },
        {
          position: 1,
          data: {
            max: 10,
            mean: 6,
            median: 5,
            min: 2,
            outliers: [1, 11],
            q3: 8,
            q1: 4
          }
        }
      ];

      Polymer.RenderStatus.afterNextRender(chart, () => {
        done();
      });
    });
  });
});
