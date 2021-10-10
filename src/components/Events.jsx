import React from 'react';
import { Row, Col,  Card } from 'antd';


import { useGetEventsQuery } from '../services/cryptoEventApi';
import Loader from './Loader';


const { Meta } = Card;

const Events = () => {
    const {data, isFetching} = useGetEventsQuery();
    const eventsData = data ?.data;
    const totalEvents = data;
    

    if(isFetching) return <Loader />;
    

    return(
        <>
            <h1 id="events-heading" >Cryptocurrency Events</h1>
            <h1 id="event-count">Total Events: {totalEvents.count}</h1>
            <Row gutter={[32,32] } className="event-card-container">
                {eventsData.map( (events) => (
                    <Col xs={24} sm={12} lg={12} className="event-card" key={events.id} >
                    <Card
                        hoverable
                        cover={<img alt="example" src={events.screenshot} />}
                    >
                    <Meta
                        title={events.title}
                        description={events.description}
                    />
                    <h4 className="event-format" >Start:  {events.start_date}</h4> <span className="event-date-float"><h4 className="event-format">End:  {events.end_date}</h4></span>
                    <h4>Website: <a href={events.website} target="_blank">{events.website}</a></h4>
                    </Card>
                </Col>
                ))}
                
            </Row>
      
        
        </>
    );





};

export default Events;

