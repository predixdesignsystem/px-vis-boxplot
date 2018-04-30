/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Two whisker box with outliers', (done) => {
      chart.chartData = generateChartData(2); // eslint-disable-line

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Without gridlines', (done) => {
      chart.chartData = generateChartData(2); // eslint-disable-line
      chart.hideGridLines = true;

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Negative values', (done) => {
      var chartData = generateChartData(2); // eslint-disable-line
      chartData[0].series1.data.min = -1;
      chartData[1].series2.data.min = -2;
      chart.chartData = chartData;

      waitDrawUpdate(chart, () => {
        done();
      });
    });
  });
});
