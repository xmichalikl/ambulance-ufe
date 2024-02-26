import { newE2EPage } from '@stencil/core/testing';

describe('lmi-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lmi-ambulance-wl-editor></lmi-ambulance-wl-editor>');

    const element = await page.find('lmi-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
