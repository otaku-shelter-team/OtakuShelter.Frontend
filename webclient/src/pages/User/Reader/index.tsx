import {inject, observer} from 'mobx-react'
import React, {Component} from 'react'
import {Col, Container, Dropdown, DropdownButton, Image, Row, Spinner} from 'react-bootstrap'
import {RouteComponentProps} from 'react-router'
import ChaptersModel from '../../../models/ChaptersModel'
import {IMReader} from '../../../store/MReader'

interface IReader extends RouteComponentProps {
    readerStore?: IMReader
}

@inject((allStores: any) => ({
    readerStore: allStores.readerStore as IMReader
}))
@observer
class Reader extends Component<IReader, { isLoading: boolean }> {
    public state = {
        isLoading: true
    }

    public onFetch = async () => {
        const {readerStore, match} = this.props
        // @ts-ignore
        readerStore!.chapterId = Number(match.params.chapterId)
        await readerStore!.onFetchPages()
    }

    public nextChapter = () => {
        const {history, readerStore} = this.props
        const chapterId = readerStore!.chapters[readerStore!.chapters
            .findIndex(chapter => chapter.id === readerStore!.chapterId) + 1].id
        if (!chapterId) {
            return
        }
        history.push(`/manga/${readerStore!.mangaId}/chapter/${chapterId}`)
        return ''
    }

    public prevChapter = () => {
        const {history, readerStore} = this.props
        const chapterId = readerStore!.chapters[readerStore!.chapters
            .findIndex(chapter => chapter.id === readerStore!.chapterId) - 1].id
        if (!chapterId) {
            return
        }
        history.push(`/manga/${readerStore!.mangaId}/chapter/${chapterId}`)
        return ''
    }

    public async componentDidMount(): Promise<void> {
        const {match, readerStore} = this.props
        // @ts-ignore
        readerStore!.chapterId = Number(match.params.chapterId)
        // @ts-ignore
        readerStore!.mangaId = Number(match.params.mangaId)
        readerStore!.chapters = await ChaptersModel.getChaptersByMangaId(readerStore!.mangaId, {
            offset: null,
            limit: null
        })
        await this.onFetch()
        this.setState({
            isLoading: false
        })
    }

    public async componentDidUpdate(prevProps: Readonly<IReader>, prevState: Readonly<{}>, snapshot?: any): Promise<void> {
        // @ts-ignore
        if (prevProps.match.params.chapterId !== this.props.match.params.chapterId) {
            this.setState({
                isLoading: true
            })
            await this.onFetch()
            this.setState({
                isLoading: false
            })
        }
    }

    public render() {
        const {readerStore, history} = this.props
        const {isLoading} = this.state
        if (!isLoading) {
            if (readerStore!.nextChapter) {
                this.nextChapter()
            }
            if (readerStore!.prevChapter) {
                this.prevChapter()
            }
        }
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
                        <Col className='d-flex'>
                            <DropdownButton id='dropdown-basic-button'
                                            title={`Глава: ${
                                            readerStore!.chapterId && readerStore!.chapters
                                                .findIndex(chapter => chapter.id === readerStore!.chapterId)
                                            + 1}`}>
                                {readerStore!.chapters.map((chapter, index) => (
                                    <Dropdown.Item
                                        onClick={() => history.push(`/manga/${readerStore!.mangaId}/chapter/${chapter.id}`)}
                                        key={chapter.id}>{index + 1}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                            <DropdownButton className='ml-2' id='dropdown-basic-button'
                                            title={`Страница: ${
                                            readerStore!.currentPage && readerStore!.pages
                                                .findIndex(page => page.id === readerStore!.currentPage.id)
                                            + 1}`}>
                                {readerStore!.pages.map((page, index) => (
                                    <Dropdown.Item
                                        onClick={() => readerStore!.onChangePage(page)}
                                        key={page.id}>{index + 1}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='w-100'>
                            <Image className='position-relative w-100'
                                   src={readerStore!.currentPage ? readerStore!.currentPage.image : ''}/>
                            <div onClick={() => this.props.readerStore!.onNextPage()}
                                 className='next_page position-absolute w-50 h-100' style={{top: 0, left: '50%'}}/>
                            <div onClick={() => this.props.readerStore!.onPrevPage()}
                                 className='prev_page position-absolute w-50 h-100' style={{top: 0, left: 0}}/>
                            <img className='d-none' src={readerStore!.prevPage && readerStore!.prevPage.image} alt='#'/>
                            <img className='d-none' src={readerStore!.nextPage && readerStore!.nextPage.image} alt='#'/>
                        </Col>
                    </Row>
                </Container>
            )
    }
}

export default Reader
