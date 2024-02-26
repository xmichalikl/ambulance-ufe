import { newSpecPage } from '@stencil/core/testing';
import { LmiAmbulanceWlApp } from '../lmi-ambulance-wl-app';

describe('lmi-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [LmiAmbulanceWlApp],
      html: `<lmi-ambulance-wl-app base-path="/"></lmi-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('lmi-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [LmiAmbulanceWlApp],
      html: `<lmi-ambulance-wl-app base-path="/ambulance-wl/"></lmi-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('lmi-ambulance-wl-list');
  });
});
