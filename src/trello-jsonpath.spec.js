const json = require('./../test/trello.json')
const jp = require('jsonpath')

describe('Trello JSON', () => {
  it('Should pull out columns', () => {
    expect(jp.query(json, '$..lists[*].name'))
      .to.eql([
        'Backlog',
        'Ready for work',
        'In refinement',
        'In progress',
        'Done'
      ])
  })

  it('Should pull out columns', () => {
    expect(jp.query(json, '$..lists[?(@.name=="Done")].id'))
      .to.eql([
        '584841ac29384cfce5dfc4ea'
      ])
  })

  it('Should regex', () => {
    expect(jp.query(json, '$..lists[?(@.name.match("In.+"))].name'))
      .to.eql([
        'In refinement',
        'In progress'
      ])
  })



})
