import { newSpecPage } from '@stencil/core/testing';
import { LmiAmbulanceWlList } from '../lmi-ambulance-wl-list';

describe('lmi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LmiAmbulanceWlList],
      html: `<lmi-ambulance-wl-list></lmi-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <lmi-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lmi-ambulance-wl-list>
    `);
  });
});
