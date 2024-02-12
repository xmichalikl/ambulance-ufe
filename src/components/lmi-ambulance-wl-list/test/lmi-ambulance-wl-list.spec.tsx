import { newSpecPage } from '@stencil/core/testing';
import { LmiAmbulanceWlList } from '../lmi-ambulance-wl-list';

describe('lmi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LmiAmbulanceWlList],
      html: `<lmi-ambulance-wl-list></lmi-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as LmiAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
