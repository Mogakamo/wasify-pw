const Service = () => {
    return (
        <div className="bg-light py-5 service-1" id="service">
            <div className="container">
                {/* Row  */}
                <div className="row">
                    {/* Column */}
                    <div className="col-md-4 wrap-service1-box">
                        <div className="card border-0 card-shadow mb-4">
                            <div className="card-body text-center">
                                <div className="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/market.png" alt="wrapkit" /></div>
                                <h6 className="font-weight-medium">Retargeting Market</h6>
                                <p className="mt-3">Use the platform that gets to really invest on you as our esteemed customers.</p>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-4 wrap-service1-box">
                        <div className="card border-0 card-shadow mb-4">
                            <div className="card-body text-center">
                                <div className="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/fruit.png" alt="wrapkit" /></div>
                                <h6 className="font-weight-medium">Fruitful Results</h6>
                                <p className="mt-3">Find the best housing solutions and some of the best services in the country.</p>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-4 wrap-service1-box">
                        <div className="card border-0 card-shadow mb-4">
                            <div className="card-body text-center">
                                <div className="my-3"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature1/instant.png" alt="wrapkit" /></div>
                                <h6 className="font-weight-medium">Instant Solutions</h6>
                                <p className="mt-3">Get to experience some of the greatest solutions on our platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-3 text-center">
                        <a className="btn btn-success-gradiant text-white btn-md border-0" href="#f1"><span>LEARN MORE</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service