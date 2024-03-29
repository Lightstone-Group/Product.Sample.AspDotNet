import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { HelloWorldProcess } from '../src/HelloWorldProcess.js';
import '../src/hello-world-process.js';

describe('HelloWorldProcess', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<HelloWorldProcess>(
      html`<hello-world-process></hello-world-process>`
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<HelloWorldProcess>(
      html`<hello-world-process></hello-world-process>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<HelloWorldProcess>(
      html`<hello-world-process
        header="attribute header"
      ></hello-world-process>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<HelloWorldProcess>(
      html`<hello-world-process></hello-world-process>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
