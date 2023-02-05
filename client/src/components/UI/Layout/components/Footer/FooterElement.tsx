import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Company, Legal, Social } from './components/common'
import style from './footer.module.css'

export const FooterElement: FC = (): JSX.Element => (
  <footer className={`pt-4 pb-2 ${style.Footer}`}>
    <Container>
      <Row>
        <Row className="col-lg-8">
          <Company/>
          <Legal/>
        </Row>
        <Social/>
      </Row>
      <Row className={`mb-2 ${style.Row}`}>
          <span className={style.CopyRightsText}>
            NotCopyright © {new Date().getFullYear()} Stanislao de Sichesku | All Rights Reserved
          </span>
      </Row>
    </Container>
  </footer>
)
