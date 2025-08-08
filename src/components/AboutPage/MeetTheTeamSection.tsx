import React from 'react';

const team = [
  {
    name: 'Josiah Platt',
    role: 'CEO & Founder',
    img: '',
    highlight: true,
  },
  {
    name: 'Dustin Bates',
    role: 'Co-Founder',
    img: '',
    highlight: false,
  },
  {
    name: 'Keon Byrd',
    role: 'Chief Product Officer',
    img: '',
    highlight: false,
  },
  {
    name: 'Charles Williams',
    role: 'UX & UI Lead',
    img: '',
    highlight: false,
  },
  {
    name: 'Luke Keith',
    role: 'Facilitator',
    img: '',
    highlight: false,
  },
  {
    name: 'Samuel Dillow',
    role: 'Senior Developer',
    img: '',
    highlight: false,
  },
  {
    name: 'Chris Byler',
    role: 'Ninjaneer',
    img: '',
    highlight: false,
  },
  {
    name: 'Chris Fontenault',
    role: 'Developer',
    img: '',
    highlight: false,
  },
];

const MeetTheTeamSection: React.FC = () => (
  <section className="w-full py-20 bg-white flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 text-center tracking-wider">MEET <span className="font-light">the TEAM</span></h2>
    <div className="text-gray-400 text-md font-medium mb-12 text-center uppercase tracking-widest">Responsible for making the magic happen</div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-5xl w-full">
      {team.map((member, idx) => (
        <div key={member.name} className="flex flex-col items-center">
          <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-white ${member.highlight ? 'bg-blue-500' : 'bg-gray-200'}`}>
            {/* Placeholder for image or initials */}
            <span className={`text-4xl md:text-5xl font-bold ${member.highlight ? 'text-white' : 'text-gray-400'}`}>{member.img ? <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" /> : member.name.split(' ').map(n=>n[0]).join('')}</span>
          </div>
          <div className="text-lg font-bold text-gray-900 text-center tracking-wide uppercase">{member.name}</div>
          <div className="text-sm font-light text-gray-400 text-center mt-1">{member.role}</div>
        </div>
      ))}
    </div>
  </section>
);

export default MeetTheTeamSection;
