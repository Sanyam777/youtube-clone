import React, { useEffect } from 'react'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'

const HomeScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All')
            dispatch(getPopularVideos())
        else dispatch(getVideosByCategory(activeCategory))
    }
    return (
        <Container>
            <CategoriesBar />
            <Row>
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className='spinner-border text-danger d-block mx-auto'>

                        </div>
                    }
                    className='row'>
                    {!loading
                        ? videos.map((video) =>
                            <Col lg={3} mg={4} >
                                <Video video={video} key={video.id} />
                            </Col>
                        )
                        : [...Array(20)].map(() => <Col lg={3} mg={4}><SkeletonVideo /></Col>)
                    }
                </InfiniteScroll>
            </Row>
        </Container>
    )
}

export default HomeScreen
