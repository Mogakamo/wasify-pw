import React from "react";

const Hero = () => {
  return (
    <>
      <div class="absolute inset-0 z-negative lg:opacity-100 opacity-50">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div class="container mx-auto lg:mt-56 lg:px-16 px-4 py-4">
        <div class="md:pl-8 md:border-l border-white">
          <p class="text-white tracking-wide text-base font-light leading-none">
            Out now
          </p>
          <h1 class="text-white md:text-6xl text-2xl font-bold font-sans m-0 md:leading-none">
            Knights of Wales
          </h1>
          <p class="text-white text-lg md:max-w-lg w-full md:my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            laboriosam quae mollitia voluptatibus placeat. Libero adipisci
            ipsam, nobis, corrupti nesciunt id beatae laudantium quis dolorum
            aliquam impedit quae recusandae ad.
          </p>
          <a href="#" class="btn-primary">
            Steam/Buy
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
