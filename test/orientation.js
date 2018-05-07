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

      waitDrawUpdate(chart, () => {
        expect(chart.orientation).to.be.eq('horizontal');
        done();
      });
    });

    it('Thresholds in horizontal (currently behaving wrong)', (done) => {
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

      waitDrawUpdate(chart, () => {
        expect(chart.orientation).to.be.eq('horizontal');
        done();
      });
    });

    it('Set whisker box look and feel', (done) => {
      expect(chart.orientation).to.be.eq('vertical');
      chart.orientation = 'horizontal';
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
        expect(chart.orientation).to.be.eq('horizontal');
        done();
      });
    });
  });
});
