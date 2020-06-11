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

require('./experimental.scss');

// import events from '../events/events.js';
import * as Button from '../button/button.js';
import FlyIn from '../fly-in/base.js';

export function createExperimentalView(target, trigger) {
  return new ExperimentalView(target, trigger);
}

const DESKTOP_WIDTH = 1024;

class ExperimentalView extends FlyIn {
  constructor(target, trigger) {
    super(target);

    this.target = target;
    this.trigger = Button.from(trigger, this.toggle.bind(this));

    const content = document.createElement('div');
    content.className = 'experimental-view';
    content.innerHTML = `
      <p class="experimental-view-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Learn more about experimental features.</p>
      <form class="url-bar" action="">
        <input class="url-bar-input" placeholder="Feature name" type="text" id="fname" name="input">
        <input class="url-bar-submit" type="submit" value="ADD">
      </form>`;

    this.upadateContent(content);
  }
}
