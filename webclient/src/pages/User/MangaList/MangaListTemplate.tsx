import React, {FunctionComponent} from 'react'
import {Col, Container, Pagination, Row} from 'react-bootstrap'
import {IManga} from '../../../../interfaces'
import MangaCard from './MangaCard'

interface IMangaListTemplate {
    mangas: IManga[],
    onChangePage: (query: 'next' | 'prev') => void,
    offset: number
}

const MangaListTemplate: FunctionComponent<IMangaListTemplate> = ({mangas, onChangePage, offset}) =>
    <div>
        <Container className='h-100'>
            <Row className='h-100'>
                {mangas.map((manga) =>
                    <Col md={6} lg={3} key={manga.id}>
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
    </div>

export default MangaListTemplate
