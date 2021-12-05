import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    // this.set('headline', { foo: 'bar' });
    const obj = [];
    obj.push({ url: '' });
    this.set('cardFields', {
      Headline: 'Yabadabadu!',
      HeaderImage: obj,
      'Sub-headline': 'subsub',
    });
    console.log(this.cardFields);
    this.set('test', 'Hello');
    // debugger
    // await render(hbs`<Card @cardFields="{{this.cardFields}} @test={{this.test}}"/>`);
    //await render(hbs`<Card @cardFields={{this.cardFields}} @test={{this.test}}/>`);
    await render(hbs`<Card @cardFields={{this.cardFields}}/>`);
    //await this.pauseTest();
    assert.dom('[data-test-headLine]').hasText('Yabadabadu!');
    assert.dom('[data-test-subHeadLine]').hasText('subsub');
    // assert.dom('[data-test-hello]').hasText('Hello');

    // await this.pauseTest();
    // assert.dom(this.element).hasText('');
    //
    // // Template block usage:
    // await render(hbs`
    //   <Card>
    //     template block text
    //   </Card>
    // `);
    //
    // assert.dom(this.element).hasText('template block text');
  });
});
