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

  describe('Test seriesConfig', () => {

    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-boxplot-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          done();
        });
      });
    });

    it('Set new seriesConfig object', (done) => {
      chart.chartData = generateChartData(3); // eslint-disable-line
      chart.seriesConfig = {
        'series1': {
          'name': 'Series 1',
          'x': 'position',
          'y': 'data'
        },
        'series2': {
          'name': 'Series 2',
          'x': 'position',
          'y': 'data'
        },
        'series3': {
          'name': 'Series 3',
          'x': 'position',
          'y': 'data'
        }
      };

      waitDrawUpdate(chart, () => {
        done();
      });
    });


    it('Style outlier symbols, size, and color with seriesConfig', (done) => {
      chart.chartData = generateChartData(3); // eslint-disable-line
      chart.seriesConfig = {
        'series1': {
          'name': 'Series 1',
          'x': 'position',
          'y': 'data'
        },
        'series2': {
          'name': 'Series 2',
          'x': 'position',
          'y': 'data',
          'outlierSymbol': 'square',
          'outlierSize': 10,
          'outlierScale': 5,
          'meanSymbol': 'star',
          'meanSize': 15,
          'meanScale': 5
        },
        'series3': {
          'name': 'Series 3',
          'x': 'position',
          'y': 'data',
          'color': '#388bbc',
          'strokeColor': '#388bbc',
          'outlierStrokeColor': 'purple',
          'outlierFillColor': '#388bbc',
          'medianColor': '#58c1ff',
          'meanStrokeColor': '#FFF',
          'meanFillColor': '#1F31ff',
          'outlierSymbol': 'star',
          'outlierSize': 10,
          'outlierScale': 2,
          'meanSymbol': 'diamond',
          'meanSize': 15,
          'meanScale': 2.5
        }
      };

      waitDrawUpdate(chart, () => {
        done();
      });
    });
  });
});
