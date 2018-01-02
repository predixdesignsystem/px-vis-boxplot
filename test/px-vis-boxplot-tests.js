document.addEventListener('WebComponentsReady', () => {
  describe('px-vis-boxplot tests', () => {
    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-boxplot-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          window.flush(done);
        });
      });
    });

    it('should be able to find rendered chart', (done) => {
      const chartExists = chart !== undefined;
      expect(chartExists).to.be.eql(true);
      done();
    });

  });
  
}); 