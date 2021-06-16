const Hero = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    {/* Slide One - Set the background image for this slide in the line below */}
                    <div className="carousel-item active" style={{ backgroundImage: 'url("https://3.bp.blogspot.com/-_7vaKiNZPXk/XCWoF-0xj7I/AAAAAAAAAMk/Bx7Ne5WLEvINHPDoG1jwY6rGO2d62pprwCKgBGAs/s1600/ux-design.jpeg")' }}>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="display-4">First Slide</h2>
                            <p className="lead">This is a description for the first slide.</p>
                        </div>
                    </div>
                    {/* Slide Two - Set the background image for this slide in the line below */}
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://4.bp.blogspot.com/-InDD3Hm_bhU/XB4_TK3TT7I/AAAAAAAAAJ4/r5tUeCOqq1MTchFh7D7pWdf582A4qYIIwCEwYBhgL/s1600/Businesswoman-working-at-a-computer-1280x720.jpg")' }}>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="display-4">Second Slide</h2>
                            <p className="lead">This is a description for the second slide.</p>
                        </div>
                    </div>
                    {/* Slide Three - Set the background image for this slide in the line below */}
                    <div className="carousel-item" style={{ backgroundImage: 'url("https://1.bp.blogspot.com/-GWl5F8P4t-8/XB4_VV4VE5I/AAAAAAAAAKE/SmHRzas-LpMpDBoLn6otR9AznVsr6L7OgCEwYBhgL/s1600/t1larg.africa.cnn.jpg")' }}>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="display-4">Third Slide</h2>
                            <p className="lead">This is a description for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}

export default Hero