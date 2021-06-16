const Hero = () => {
    return (
        <>
            <header>
                {/* Intro settings */}
                <style dangerouslySetInnerHTML={{ __html: "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  " }} />
                {/* Background image */}
                <div id="intro-example" className="p-5 text-center bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/041.jpg")' }}>
                    <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white">
                                <h1 className="mb-3">Welcome to Wasify</h1>
                                <h5 className="mb-4">Get the best services &amp; and affordable housing </h5>
                                <h5 className="mb-4">just right here in our platform</h5>
                                <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button" rel="nofollow" target="_blank">Pricing</a>
                                <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank" role="button">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background image */}
            </header>

        </>
    )
}

export default Hero