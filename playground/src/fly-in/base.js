// Copyright 2018 The AMPHTML Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

require('./fly-in.scss');

class FlyIn {
  constructor() {
    const btnOpen = document.getElementById('fly-in-open');
    const btnClose = document.getElementById('fly-in-close');
    const layer = document.getElementById('fly-in-layer');

    btnOpen.addEventListener('click', () => {
      layer.classList.add('active');
    });

    btnClose.addEventListener('click', () => {
      layer.classList.remove('active');
    });
  }
}



export default new FlyIn();
