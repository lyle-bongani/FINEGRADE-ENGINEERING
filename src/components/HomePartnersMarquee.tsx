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

const HomePartnersMarquee: React.FC = () => (
  <div className="w-full bg-white py-4 overflow-hidden">
    <div className="relative w-full">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {partners.concat(partners).map((p, i) => (
          <div key={p.name + i} className="mx-8 inline-block">
            <img
              src={p.img}
              alt={p.alt}
              className="h-12 md:h-16 max-w-[140px] object-contain"
              loading="lazy"
              style={{ filter: "none" }}
            />
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </div>
);

export default HomePartnersMarquee;
