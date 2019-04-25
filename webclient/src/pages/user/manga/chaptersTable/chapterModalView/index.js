import * as React from "react";
import './ChapteModalView.scss'
import PageModel from "../../../../../models/PageModel";

class ChapterModelView extends React.Component {
    state = {
        currentPage: 0,
        pages: this.props.pages,
        currentChapter: 0,
        chapters: this.props.chapters,
        scale: 100,
        pageY: 0,
        pageX: 0
    }

    nextPage = async () => {
        const {currentPage, currentChapter, chapters} = this.state
        const isLastPage = currentPage === this.props.pages.length - 1
        const isLastChapter = currentPage === this.props.chapters.length - 1
        if (!isLastPage) {
            this.setState(state => ({
                currentPage: state.currentPage + 1
            }))
        } else if (!isLastChapter) {
            try {
                const pages = await PageModel.getPages(chapters[currentChapter + 1].id)
                this.setState({
                    pages,
                    currentPage: 0,
                    currentChapter: currentChapter + 1,
                })
            } catch (e) {

            }
        }
    }

    prevPage = () => {
        this.setState(state => ({
            currentPage: state.currentPage === 0 ? state.currentPage : state.currentPage - 1
        }))
    }

    onWheel = (elem) => {
        const {scale, pageY, pageX} = this.state
        const newScale = elem.deltaY > 0
            ? scale >= 400 ? 400 : scale + 12
            : scale <= 100 ? 100 : scale - 12
        this.setState({
            scale: newScale,
            pageY: pageY > (((newScale - 100) / 12) * 40)
                ? ((newScale - 100) / 12) * 40
                : pageY < -(((newScale - 100) / 12) * 40)
                    ? -(((newScale - 100) / 12) * 40)
                    : pageY,
            pageX: pageX > ((newScale - 100) / 12) * 40
                ? ((newScale - 100) / 12) * 40
                : pageX < -(((newScale - 100) / 12) * 40)
                    ? -(((newScale - 100) / 12) * 40)
                    : pageX
        })
    }

    onMouseDown = (e) => {
        const [X, Y] = [e.clientX, e.clientY]
        const {pageX, pageY} = this.state
        e.stopPropagation();
        e.target.ondragstart = () => {
            return false
        }
        e.target.onmousemove = (e) => {
            this.setState({
                pageY: pageY + (e.clientY - Y),
                pageX: pageX + (e.clientX - X)
            })
        }
        e.target.onmouseup = (e) => {
            const {pageX, pageY, scale} = this.state
            e.target.onmousemove = null
            this.setState({
                pageY: pageY > (((scale - 100) / 12) * 40)
                    ? ((scale - 100) / 12) * 40
                    : pageY < -(((scale - 100) / 12) * 40)
                        ? -(((scale - 100) / 12) * 40)
                        : pageY,
                pageX: pageX > ((scale - 100) / 12) * 40
                    ? ((scale - 100) / 12) * 40
                    : pageX < -(((scale - 100) / 12) * 40)
                        ? -(((scale - 100) / 12) * 40)
                        : pageX
            })
            return null
        }
    }

    onKeyDown = (key) => {
        const {pageY, pageX} = this.state
        const newScale = 100
        if (key.keyCode === 39) {
            this.nextPage()
            this.setState({
                scale: newScale,
                pageY: pageY > (((newScale - 100) / 12) * 40)
                    ? ((newScale - 100) / 12) * 40
                    : pageY < -(((newScale - 100) / 12) * 40)
                        ? -(((newScale - 100) / 12) * 40)
                        : pageY,
                pageX: pageX > ((newScale - 100) / 12) * 40
                    ? ((newScale - 100) / 12) * 40
                    : pageX < -(((newScale - 100) / 12) * 40)
                        ? -(((newScale - 100) / 12) * 40)
                        : pageX
            })
        }
        if (key.keyCode === 37) {
            this.prevPage()
            this.setState({
                scale: newScale,
                pageY: pageY > (((newScale - 100) / 12) * 40)
                    ? ((newScale - 100) / 12) * 40
                    : pageY < -(((newScale - 100) / 12) * 40)
                        ? -(((newScale - 100) / 12) * 40)
                        : pageY,
                pageX: pageX > ((newScale - 100) / 12) * 40
                    ? ((newScale - 100) / 12) * 40
                    : pageX < -(((newScale - 100) / 12) * 40)
                        ? -(((newScale - 100) / 12) * 40)
                        : pageX
            })
        }
    }

    render() {
        document.onkeydown = this.onKeyDown
        const {onModalClose, chapters} = this.props
        const {currentPage, scale, pageX, pageY, pages} = this.state
        return (
            <div className="chapter-pages__container modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="chapter-pages__current"
                         onKeyDown={(key) => this.onKeyDown(key)}
                         onMouseDown={(e) => this.onMouseDown(e)}
                         style={{
                             transform: `translate(${pageX}px,${pageY}px)`,
                             transition: 'all 0s ease'
                         }}
                        // onClick={() => this.nextPage()}
                    >
                        <img onWheel={(e) => this.onWheel(e)} style={{
                            transform: `scale(${scale / 100},${scale / 100})`
                        }} src={pages[currentPage].image} alt="#"/>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => onModalClose()}/>
            </div>
        )
    }
}

export default ChapterModelView