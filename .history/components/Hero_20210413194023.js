/** Landing section and the top navigation */

const Hero = () => {
    return(
  <>
   <section className="bg-red-200 text-green-900 relative">
  {/*     <div class="min-h-screen hero-image bg-center bg-cover flex" style="background-image: url(https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);"> */}
  <div className="min-h-screen hero-image bg-right-bottom bg-cover flex" style={{backgroundImage: 'url(https://source.unsplash.com/marketplace'}}>
    <div className="relative container mx-auto p-4 flex items-end z-10">
      <div>
        <div className="content float-left py-4 px-5 my-5">
          <div className="heading mb-3 text-2xl md:text-4xl">Affordable year-round care. No insurance required!</div>
          <div className="text leading-normal hidden sm:block">Helping Women Meet All of their Health Care Needs</div>
        </div>
        <div className="cta clear-left px-5">
          <a className="
          no-underline
          btn btn-primary 
          block sm:inline-block global-transition
          text-white" href target>
            <div className="flex justify-center items-center">
              <span>Join Alpha Today</span>
              <span className="fa fa-xs fa-arrow-right ml-4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Hero