map = [
['*', ' ', ' ', ' ', ' '],
['*', ' ', 'P', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', '1', ' '],
['*', ' ', ' ', ' ', ' ']];

map1 = [
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', 'P', ' ', ' '],
['*', ' ', ' ', ' ', ' '],
['*', ' ', ' ', '1', ' '],
['*', ' ', ' ', ' ', ' ']];

QUnit.test( "testUpdateMap", function( assert ) {
  assert.equal( update_map(map, "P", "d"), map1, "Passed!" );
});
