import React from "react";

const partners = [
  {
    name: "Steel Services and Allied Industries",
    img: "https://www.steelservices.co.za/assets/images/steel-services-logo-new-317x128.png",
    alt: "Steel Services and Allied Industries logo",
  },
  {
    name: "KSB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnnFxSQLeC_kRtJrozeZHxqc2p6ym-B7Ctw&s",
    alt: "KSB Solutions For Life logo",
  },
  {
    name: "O-line (OBO Bettermann)",
    img: "https://www.obokunikwe.com/wp-content/uploads/2022/03/Oline_Logo_Box.jpg",
    alt: "O-line OBO Bettermann Group logo",
  },
  {
    name: "C.R.I. PUMPS",
    img: "https://pumpsforafrica.co.za/wp-content/uploads/2024/08/CRI-Logo-New-2023.jpg",
    alt: "CRI Pumps logo",
  },
  {
    name: "ElectroMechanica",
    img: "https://www.em.co.za/landmark-img/Global/logo/logo1.png",
    alt: "ElectroMechanica logo",
  },
  {
    name: "Schneider Electric",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZEjC2HZBmXTDpsXNLOpD7CcQ1fa-Dm0GoQ&s",
    alt: "Schneider Electric logo",
  },
];

const PartnersSection: React.FC = () => (
  <section className="w-full bg-white py-16 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-8 text-center">Our Partners</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl items-center justify-items-center">
      {partners.map((p) => (
        <div key={p.name} className="flex flex-col items-center justify-center p-4">
          <img
            src={p.img}
            alt={p.alt}
            className="max-h-32 max-w-[260px] object-contain mb-2"
            loading="lazy"
            style={{ filter: "none" }}
          />
          {/* <span className="text-xs text-gray-400 mt-1">{p.name}</span> */}
        </div>
      ))}
    </div>
  </section>
);

export default PartnersSection;
