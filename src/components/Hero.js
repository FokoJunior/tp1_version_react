import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-dark text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Apprenez le Développement Web Moderne</h1>
        <p className="lead">Découvrez les bases du HTML, CSS, et Bootstrap pour créer des sites web modernes et responsives.</p>
        <a href="#topics" className="btn btn-primary btn-lg">Commencer</a>
      </div>
    </section>
  );
};

export default Hero;