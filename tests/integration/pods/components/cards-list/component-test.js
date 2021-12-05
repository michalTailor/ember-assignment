import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cards-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    const obj = [];
    obj.push({ url: '' });
    const fields = {
      Headline: 'Yabadabadu!',
      HeaderImage: obj,
      'Sub-headline': 'subsub',
    };
    const listItem = {
      fields: fields,
    };
    let listOfItems = [];
    for (let i = 0; i < 20; i++) {
      listOfItems.push(listItem);
    }
    this.set('list', listOfItems);
    // this.set('list', [listItem, listItem, listItem, listItem, listItem, listItem, listItem ]);
    // console.log(this.list)
    //
    // // debugger

    //assert.dom(this.element).hasText('');
    //
    // // Template block usage:
    await render(hbs`<CardsList @list={{this.list}}/>`);
    //     assert.equal(this.element.querySelector('h2').textContent.trim(), 'This is Magic', 'title changes after click');
    //   });
    // });
    assert.dom('.selected').hasText('1');
    // assert.dom(this.element).hasText('template block text');
    await click('[data-test-nextpage]');
    assert.dom('.selected').hasText('2');
    await click('[data-test-nextpage]');
    assert.dom('.selected').hasText('3');
    await click('[data-test-nextpage]');
    assert.dom('.selected').hasText('4');
    await click('[data-test-prevpage]');
    assert.dom('.selected').hasText('3');
    await this.pauseTest();
  });
});
