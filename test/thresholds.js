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
