import React, {FunctionComponent} from 'react'
import {Card} from 'react-bootstrap'
import {IManga} from '../../../../../interfaces'

interface IMangaCard {
    manga: IManga
}

const MangaCard: FunctionComponent<IMangaCard> = ({manga}) =>
    <Card style={{height: 450, marginBottom: 20}}>
        <Card.Img style={{maxHeight: 350}} variant='top' src={manga.image}/>
        <Card.Body>
            <Card.Title className='h6'>{manga.title}</Card.Title>
        </Card.Body>
    </Card>

export default MangaCard
