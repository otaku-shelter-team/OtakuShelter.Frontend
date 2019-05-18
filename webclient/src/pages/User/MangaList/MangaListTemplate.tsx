import * as H from 'history'
import React, {FunctionComponent} from 'react'
import {Col, Container, Pagination, Row} from 'react-bootstrap'
import {IManga} from '../../../../interfaces'
import MangaCard from './MangaCard'

interface IMangaListTemplate {
    mangas: IManga[],
    onChangePage: (query: 'next' | 'prev') => void,
    offset: number,
    history: H.History
}

const MangaListTemplate: FunctionComponent<IMangaListTemplate> = ({mangas, onChangePage, offset, history}) =>
    <Container className='h-100'>
        <Row className='h-100'>
            {mangas.map((manga) =>
                <Col style={{cursor: 'pointer'}} onClick={() => history.push(`/manga/${manga.id}`)} key={manga.id}
                     xs={12} sm={6} md={4} lg={3}>
                    <MangaCard manga={manga}/>
                </Col>
            )}
            <Container>
                <Row>
                    <Col>
                        <Pagination>
                            <Pagination.Prev disabled={offset === 0} onClick={() => onChangePage('prev')}/>
                            <Pagination.Next onClick={() => onChangePage('next')}/>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        </Row>
    </Container>

export default MangaListTemplate
