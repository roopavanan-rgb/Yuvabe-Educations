
import { Program } from '@/types/programs';

// Helper function to generate calendar days for a month
const generateMonth = (
  month: string,
  active: number[],
  highlight: number[] = [],
  dates?: { start: string; end: string }
) => {
  const monthIndex = new Date(`${month} 1, 2025`).getMonth();
  const year = 2025;

  const firstDay = new Date(year, monthIndex, 1).getDay(); // 0-6
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const days: { day: number; active: boolean; highlight?: boolean }[] = [];

  // Fill leading empty days
  for (let i = 0; i < firstDay; i++) {
    days.push({ day: 0, active: false });
  }

  // Fill actual days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      active: active.includes(i),
      highlight: highlight.includes(i),
    });
  }

  return {
    month,
    days,
    dates,
  };
};



export const programsData: Program[] = [
  {
    id: '1',
    name: 'Deepanam School',
    description: 'Experience how Deepanam School brings STEAM to life.',
    type: 'Full Year Program',
    location: 'Auroville, Tamil Nadu',
    status: 'active',
    calendar: [
      generateMonth('Jan', [6], [], { start: '01/01/25', end: '31/01/25' }),
      generateMonth('Feb', [20], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [3], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [30], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '1/05/25', end: '31/05/25' }),
      generateMonth('Jun', [], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [14], [], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [], [], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [19], [], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [19], [], { start: '1/12/25', end: '31/12/25' })
    ]
  },
  {
    id: '2',
    name: 'NESS School',
    description: 'Experience how NESS School brings STEAM to life.',
    type: 'Full Year Program',
    location: 'Auroville, Tamil Nadu',
    status: 'active',
    calendar: [
      generateMonth('Jan', [6], [], { start: '01/01/25', end: '31/01/25' }),
      generateMonth('Feb', [20], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [3], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [7, 30], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '1/05/25', end: '31/05/25' }),
      generateMonth('Jun', [9], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [], [], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [], [], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [12], [], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [6], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [19], [], { start: '1/12/25', end: '31/12/25' })
    ]
  },
  {
    id: '3',
    name: 'Weekend Program',
    description: 'Weekends are where curiosity takes center stage!',
    type: 'One Session/Week',
    location: 'Auroville, Tamil Nadu',
    status: 'upcoming',
    calendar: [
      generateMonth('Jan', [], [], { start: '01/01/25', end: '31/01/25' }),
      generateMonth('Feb', [20], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [3], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '1/05/25', end: '31/05/25' }),
      generateMonth('Jun', [], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 30,], [8,15,22,29], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [ 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28,  30], [1, 8, 15, 22, 29], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26], [1, 8, 15, 22], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [], [], { start: '1/12/25', end: '31/12/25' })
    ]
  },
  {
    id: '4',
    name: 'Steam Fest',
    description: 'a celebration of creativity, where students and mentors showcase projects and explore ideas! ',
    type: 'Annual Event',
    location: 'bio- region schools',
    status: 'upcoming',
    calendar: [
      generateMonth('Jan', [], [], { start: '01/01/25', end: '31/01/25' }),
      generateMonth('Feb', [], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [5], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '6/05/25', end: '24/05/25' }),
      generateMonth('Jun', [], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [], [], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [], [], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [], [], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [], [], { start: '1/12/25', end: '31/12/25' })
    ]
  },
  {
    id: '5',
    name: "Visitor Program",
    description: 'an interactive opportunity for guests to explore innovative projects and engage with students and mentors.',
    type: 'Full year Program',
    location: 'bio- region schools',
    status: 'completed',
    calendar: [
      generateMonth('Jan', [15, 16, 17, 18, 19], [15, 16, 17, 18, 19], { start: '15/01/25', end: '19/01/25' }),
      generateMonth('Feb', [], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '1/05/25', end: '31/05/25' }),
      generateMonth('Jun', [], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [], [], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [], [], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [], [], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [], [], { start: '1/12/25', end: '31/12/25' })
    ]
  },
  {
    id: '6',
    name: "Seasonal STEAM Camps",
    description: 'Immersive, hands-on learning experiences where students explore STEAM through fun, seasonal projects and activities.',
    type: 'Only on School Holidays',
    location: 'bio- region schools',
    status: 'completed',
    calendar: [
      generateMonth('Jan', [], [15, 16, 17, 18, 19], { start: '15/01/25', end: '19/01/25' }),
      generateMonth('Feb', [10, 21,], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '1/05/25', end: '31/05/25' }),
      generateMonth('Jun', [], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [], [], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [], [], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [], [], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [], [], { start: '1/12/25', end: '31/12/25' })
    ]
  },
  {
    id: '7',
    name: "Sustainability Program",
    description: 'This sparks creativity by combining science, tech, engineering, arts, and math to empower students to design innovative solutions for a greener, more sustainable future.',
    type: 'Two months',
    location: 'bio- region schools',
    status: 'completed',
    calendar: [
      generateMonth('Jan', [15, 16, 17, 18, 19], [15, 16, 17, 18, 19], { start: '15/01/25', end: '19/01/25' }),
      generateMonth('Feb', [10, 21,], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '1/05/25', end: '31/05/25' }),
      generateMonth('Jun', [], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [], [], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [], [], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [], [], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [], [], { start: '1/12/25', end: '31/12/25' })
    ]
  },
   {
    id: '8',
    name: "STEAM Kit Development",
    description: 'This program designs hands-on, interactive kits enabling students to explore concepts through engaging, self-guided projects.',
    type: 'Full Year',
    location: 'bio- region schools',
    status: 'completed',
    calendar: [
      generateMonth('Jan', [15, 16, 17, 18, 19], [15, 16, 17, 18, 19], { start: '15/01/25', end: '19/01/25' }),
      generateMonth('Feb', [10, 21,], [], { start: '1/02/25', end: '29/02/25' }),
      generateMonth('Mar', [], [], { start: '1/03/25', end: '31/03/25' }),
      generateMonth('Apr', [], [], { start: '1/04/25', end: '30/04/25' }),
      generateMonth('May', [], [], { start: '1/05/25', end: '31/05/25' }),
      generateMonth('Jun', [], [], { start: '1/06/25', end: '30/06/25' }),
      generateMonth('Jul', [], [], { start: '1/07/25', end: '31/07/25' }),
      generateMonth('Aug', [], [], { start: '1/08/25', end: '31/08/25' }),
      generateMonth('Sep', [], [], { start: '1/09/25', end: '30/09/25' }),
      generateMonth('Oct', [], [], { start: '1/10/25', end: '31/10/25' }),
      generateMonth('Nov', [], [], { start: '1/11/25', end: '30/11/25' }),
      generateMonth('Dec', [], [], { start: '1/12/25', end: '31/12/25' })
    ]
  }
];
