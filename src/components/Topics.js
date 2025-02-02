import React from 'react';

const Topics = () => {
  return (
    <section id="topics" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Sujets Abordés</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">Apprenez les bases du HTML pour structurer vos pages web.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CSS</h5>
                <p className="card-text">Maîtrisez le CSS pour styliser vos sites web.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bootstrap</h5>
                <p className="card-text">Utilisez Bootstrap pour créer des designs responsives rapidement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;