import React from 'react'

import { create } from 'react-test-renderer'

import { PickerModal } from '../src/'

it('CountryPicker can be created', () => {
  const picker = create(<PickerModal items={[]} onSelect={() => {}} />)
  expect(picker).toBeDefined()
})
