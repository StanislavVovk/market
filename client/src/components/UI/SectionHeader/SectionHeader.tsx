import type { FC } from 'react'
import style from './section.header.module.css'

interface ISectionHeaderProps {
  headerText: string
}

export const SectionHeader: FC<ISectionHeaderProps> = ({ headerText }): JSX.Element => {
  return (
    <div className={'d-flex align-items-center'}>
      <h2 className={'pe-2'}>{headerText}</h2>
      <div className={`ms-auto ${style.sectionHeaderLine}`}/>
    </div>
  )
}
