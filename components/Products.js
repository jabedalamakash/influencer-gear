
import React from 'react';
import Product from './Product';

// images
import triopod from "../public/tripod.png"
import mic from "../public/mic.png"
import setup from "../public/setup.png"
import drone from "../public/drone.png"
import light from "../public/single-light.png"
import action from "../public/action.png"
import lights from "../public/lights.png"
import airpod from "../public/airpod.png"
import camera from "../public/camera.png"

const Products = () => {
    return (
        <div>
            <div className='mb-20 sm:mx-20 '>
                <h2 className='text-3xl font-bold text-center mb-5'>Popular Collection</h2>
                <div className=' justify-items-center mx-auto grid grid-col-1 sm:grid-cols-3'>

                    <Product img={triopod} pname="tripod" name="Flex Tripod" price="50.48"/>
                    <Product img={drone} pname="drone" name="Drone" price="980.25"/>
                    <Product img={camera} pname="camera" name="Vlogging Camera" price="1800.80"/>
                    <Product img={mic} pname="Microphone" name="Microphone" price="120.25"/>
                    <Product img={light} pname="light" name="Green Screen" price="25.45"/>
                    <Product img={action} pname="action" name="Action Camera" price="380.00"/>
                    <Product img={airpod} pname="airbuds" name="Airbuds" price="100.00"/>
                    <Product img={lights} pname="Light Setup" name="Light Setup" price="1200.00"/>
                    <Product img={setup} pname="Photoshoot set" name="Photoshoot set" price="50.48"/>


                </div>
            </div>
        </div>
    );
};

export default Products;