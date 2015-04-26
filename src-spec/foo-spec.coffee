foo = require '../dist/foo'

describe 'foo', ->

  it 'should return bar invoking foo.bar', ->
    expect(foo.bar()).toEqual('bar')