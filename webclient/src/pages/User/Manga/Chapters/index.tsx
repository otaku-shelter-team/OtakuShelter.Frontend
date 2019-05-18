import {inject, observer} from 'mobx-react'
import React, {Component} from 'react'
import {Col, Container, Pagination, Row, Table} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router'
import {IMChapter} from '../../../../store/MChapter'
import {IMReader} from '../../../../store/MReader'

interface IChaptersProps extends RouteComponentProps {
    chaptersStore?: IMChapter,
    readerStore?: IMReader,
    mangaId: number
}

@inject((allStores: any) => ({
    chaptersStore: allStores.chaptersStore as IMChapter,
    readerStore: allStores.readerStore as IMReader
}))
@observer
class Chapters extends Component<IChaptersProps, {}> {
    public async componentDidMount(): Promise<void> {
        this.props.chaptersStore!.mangaId = this.props.mangaId
        // @ts-ignore
        await this.props.chaptersStore!.onFetchChapters()
    }

    public onClick = (chapterId: string) => {
        this.props.history.push(`/manga/${this.props.mangaId}/chapter/${chapterId}`)
    }

    public render() {
        const {chaptersStore} = this.props
        return (
            <Container className='h-100 mt-5'>
                <Row className='h-100 flex-column align-content-center justify-content-center'>
                    <Col className='d-flex justify-content-center'>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Название</th>
                                <th>Загружено</th>
                            </tr>
                            </thead>
                            <tbody>
                            {chaptersStore!.chapters.map(chapter => (
                                <tr onClick={() => this.onClick(chapter.id.toString())} key={chapter.id}>
                                    <th>{chapter.title}</th>
                                    <th>{chapter.uploadDate}</th>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Pagination>
                            <Pagination.Prev disabled={chaptersStore!.offset === 0}
                                             onClick={() => chaptersStore!.onPrevPage()}/>
                            <Pagination.Next disabled={chaptersStore!.chapters.length < 10}
                                             onClick={() => chaptersStore!.onNextPage()}/>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Chapters
