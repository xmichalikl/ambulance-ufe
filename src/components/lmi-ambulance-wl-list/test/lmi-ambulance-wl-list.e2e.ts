import { newE2EPage } from '@stencil/core/testing';

describe('lmi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lmi-ambulance-wl-list></lmi-ambulance-wl-list>');

    // const element = await page.find('lmi-ambulance-wl-list');
    // expect(element).toHaveClass('hydrated');
  });
});
