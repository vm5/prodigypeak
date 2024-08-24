import React from 'react';
import './packages.css'; // Ensure this is linked to the correct CSS file

const PackagesOfferedPage = () => {
    const packages = [
        {
          name: "Basic Package",
          description: "Includes practice materials.",
          features: [
            "Test series"
          ]
        },
        {
          name: "Standard Package",
          description: "Offers in-depth coverage with additional resources.",
          features: [
            "Doubt clearing sessions",
            "Test series",
            "Counselling"
          ]
        },
        {
          name: "Premium Package",
          description: "Comprehensive support with personalized attention.",
          features: [
            "Live one-on-one class",
            "Doubt clearing sessions",
            "Test series",
            "Counselling"
          ]
        }
      ];
    
  return (
    <div className="packages-container">
      <h1 className="packages-title">Packages Offered</h1>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h2 className="package-name">{pkg.name}</h2>
            <p className="package-description">{pkg.description}</p>
            <ul className="package-features">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesOfferedPage;
