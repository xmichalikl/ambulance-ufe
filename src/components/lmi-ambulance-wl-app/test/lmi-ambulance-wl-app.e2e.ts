import { newE2EPage } from '@stencil/core/testing';

describe('lmi-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lmi-ambulance-wl-app></lmi-ambulance-wl-app>');

    const element = await page.find('lmi-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
