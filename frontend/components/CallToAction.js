import Link from 'next/link'

const CallToAction = () => {
    return (
        <div className="py-5 bg-light c2a1" style={{ backgroundImage: 'url(https://source.unsplash.com/weekly?house)' }}>
            <div className="container">
                {/* Row */}
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center">
                        <h2 className="mb-3 text-dark font-weight-medium">Wanna know more</h2>
                        <p className="font-weight-light text-dark op-8">Get to know how our platform works.</p>
                        <Link href="register">
                            <a className="btn btn-info btn-md border-0 text-dark mt-3 text-uppercase" href="#"><span>join us now</span></a>
                        </Link>
                    </div>
                </div>
                {/* Row */}
            </div>
        </div>
    )
}

export default CallToAction