import React from 'react';
import { Row, Col,  Card, Avatar } from 'antd';

import { useGetUpdatesQuery } from '../services/cryptoEventApi';
import Loader from './Loader';

const { Meta } = Card;

const StatusUpdates = () => {

    const {data, isFetching} = useGetUpdatesQuery();
    const statusUpdates = data ?.status_updates;

    if(isFetching) return <Loader />;

    return (
        <>
        
        <Row gutter={[32,32] } className="event-card-container">
            {statusUpdates.map ( (updates) => (
                <Col xs={24} sm={12} lg={12} className="event-card" key={updates.id} >
                <Card
                    hoverable
                >
                <Meta
                    avatar={<Avatar src={updates.project.image.thumb} />}
                    title={updates.user}
                    description={updates.description}
                />
                </Card>
            </Col>

            ))}

        </Row>
        
        
        
        
        
        </>
    )
}

export default StatusUpdates;
