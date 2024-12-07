import React from 'react';
import Banner from '../dynamiccomponent/Banner';
import Title from '../dynamiccomponent/Title';
import Button from '../dynamiccomponent/Button';
import Counter from '../dynamiccomponent/Counter';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div className="main">
                <section>
                    <Banner />

                </section>
                <section>
                    <Title text="Amazing start" styletype="headingh1" />
                    <div className="counter_wrap">
                        <Container>
                            


                                    <Counter
                                        title="users"
                                        subtitle="users value"
                                        startvalue="0"
                                        increment="100"
                                        unit="mbps"
                                    />
                                
                        </Container>
                    </div>
                    <div className="text-center">
                        <Button text="Learn More" styletype="brownbtn" />

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
