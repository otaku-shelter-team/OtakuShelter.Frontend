import {inject, observer} from 'mobx-react'
import React, {Component} from 'react'
import {Col, Container, Image, Row, Spinner} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router'
import {IMManga} from '../../../store/MManga'
import Chapters from './Chapters'

interface IMangaProps extends RouteComponentProps {
    mangaStore?: IMManga
}

@inject((allStores: any) => ({
    mangaStore: allStores.mangaStore as IMManga
}))
@observer
class Manga extends Component<IMangaProps, { isLoading: boolean }> {
    public state = {
        isLoading: true
    }

    public async componentDidMount(): Promise<void> {
        // @ts-ignore
        this.props.mangaStore!.manga.id = this.props.match.params.id
        // @ts-ignore
        await this.props.mangaStore!.onFetchManga(this.props.match.params.id)

        this.setState({
            isLoading: false
        })
    }

    public render() {
        const {mangaStore} = this.props
        const {isLoading} = this.state
        return isLoading
            ? <Container className='h-100'>
                <Row className='h-100 align-content-center justify-content-center'>
                    <Col className='d-flex justify-content-center'>
                        <Spinner animation='grow' variant='primary'/>
                    </Col>
                </Row>
            </Container>
            : (
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Image className='w-75' src={this!.props!.mangaStore!.manga.image} rounded/>
                        </Col>
                        <Col sm={12} md={6} className=''>
                            <h3>{mangaStore!.manga.title}</h3>
                            <h5>Тип: {mangaStore!.manga.type.name}</h5>
                            <h5>Жанры: {mangaStore!.manga.tags.map(
                                (tag, index) => tag.name + (mangaStore!.manga.tags.length - 1 === index ? '' : ', ')
                            )}</h5>
                            <h5>Авторы: {mangaStore!.manga.authors.map(
                                (author, index) => author.name + (mangaStore!.manga.authors.length - 1 === index ? '' : ', ')
                            )}</h5>
                            <h5>Переводчики: {mangaStore!.manga.translators.map(
                                (translator, index) => translator.name + (mangaStore!.manga.translators.length - 1 === index ? '' : ', ')
                            )}</h5>
                            <h6>Описание: {mangaStore!.manga.description}</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Chapters {...this.props} mangaId={mangaStore!.manga.id}/>
                        </Col>
                    </Row>
                </Container>
            )
    }
}

export default Manga
