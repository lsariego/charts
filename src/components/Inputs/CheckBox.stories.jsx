import React from 'react'
import CheckBox, { useCheckBox } from './CheckBox'
import CheckBoxGroup from './CheckBoxGroup'
import CheckBoxSkeleton from '../Skeletons/CheckBoxSkeleton'
import Typography from '../Basics/Typography'

const CheckBoxStories = {
  component: CheckBox,
  // FIXME: https://github.com/storybookjs/storybook/issues/12022
  decorators: [Story => <div style={{ width: '100%' }}>{Story()}</div>],
  title: 'Inputs/Checkbox'
}

const SimpleCheckBoxTemplate = props => {
  const { ...storyControlProps } = props
  const { value: checked, onChange } = useCheckBox()

  return (
    <>
      <p style={{ margin: '0 0 1em' }}>
        Checkboxes are used when there are multiple items to select from a list. Users can select zero, one, or any
        number of items. They are used for multiple options, not mutually exclusive options, and work independently of
        the other options in the list.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <CheckBox
          label="I declare that all the information entered in this form is true, complete, verifiable and up to date. If inconsistencies, maliciously false or outdated data are found, suppliers may be suspended or eliminated from the Registro de Proveedores, in accordance with Articles 95 and 96 of the Public Procurement Regulations."
          {...storyControlProps}
          checked={checked}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export const SimpleCheckBox = SimpleCheckBoxTemplate.bind({})
SimpleCheckBox.args = {
  accessibility: {
    label: 'declare checkbox'
  }
}
SimpleCheckBox.storyName = 'Simple checkbox'

const SimpleCheckBoxLoadingTemplate = () => {
  return (
    <>
      <p style={{ margin: '0 0 1em' }}>
        The component itself doesn't have a loading effect, instead use the CheckBoxSkeleton component.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <CheckBoxSkeleton margin="0 0 20px" rows={2} />
        <CheckBoxSkeleton rows={3} />
      </div>
    </>
  )
}

export const SimpleCheckBoxLoading = SimpleCheckBoxLoadingTemplate.bind({})
SimpleCheckBoxLoading.storyName = 'Simple checkbox loading'

const GroupCheckBoxTemplate = props => {
  const { ...storyControlProps } = props
  const { value: checked0, onChange: onChange0 } = useCheckBox()
  const { value: checked1, onChange: onChange1 } = useCheckBox()
  const { value: checked2, onChange: onChange2 } = useCheckBox()

  const { value: checked3, onChange: onChange3 } = useCheckBox()
  const { value: checked4, onChange: onChange4 } = useCheckBox()
  const { value: checked5, onChange: onChange5 } = useCheckBox()

  return (
    <>
      <p style={{ margin: '0 0 1em' }}>
        You can also group checkboxes and specify the direction that the elements will have.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <CheckBoxGroup label="Documentos permitidos" direction="horizontal">
          <CheckBox label="Administrativos" {...storyControlProps} checked={checked0} onChange={onChange0} />
          <CheckBox label="Legales" {...storyControlProps} checked={checked1} onChange={onChange1} />
          <CheckBox label="Técnicos" {...storyControlProps} checked={checked2} onChange={onChange2} />
        </CheckBoxGroup>
      </div>

      <p style={{ margin: '0 0 1em' }}>You can also change the group label to any element you want.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <CheckBoxGroup
          label={
            <div style={{ alignItems: 'baseline', display: 'flex' }}>
              <Typography fontWeight="bold" variant="h4">
                Documentación
              </Typography>
              <a href="#example" style={{ color: '#0064FF', marginLeft: '8px', textTransform: 'none' }}>
                Limpiar
              </a>
            </div>
          }
          direction="vertical"
        >
          <CheckBox
            label="Certificado de vigencia (PJ)"
            {...storyControlProps}
            checked={checked3}
            onChange={onChange3}
          />
          <CheckBox
            label="Certificado de poderes vigentes (PJ)"
            {...storyControlProps}
            checked={checked4}
            onChange={onChange4}
          />
          <CheckBox label="Cédula de identidad (PN)" {...storyControlProps} checked={checked5} onChange={onChange5} />
        </CheckBoxGroup>
      </div>
    </>
  )
}

export const GroupCheckBox = GroupCheckBoxTemplate.bind({})
GroupCheckBox.args = {
  accessibility: {
    label: 'Docs group checkbox'
  }
}
GroupCheckBox.storyName = 'Group checkbox'

export default CheckBoxStories
