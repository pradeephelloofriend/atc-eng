export const menuItem = [
  {
    menuId: 1,
    menuName: 'Home',
    routeName: '/',
    menuType: 'root',
    subMenu: [],
  },
  {
    menuId: 2,
    menuName: 'About Us',
    routeName: 'about-us',
    menuType: 's_menu',
    // subMenu: [
    //   {
    //     subMenuId: 2.1,
    //     subMenuName: 'COMPANY PROFILE',
    //     routeName: 'about-us',
    //     childMenu: [
    //       {
    //         cmId: 2.11,
    //         cmName: 'Corporate Overview',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.12,
    //         cmName: 'Mission / Vision',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.13,
    //         cmName: 'Our Story',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.14,
    //         cmName: 'Testimonials',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.15,
    //         cmName: 'Certification; Achievement and Rewards',
    //         cmRoute: '',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    menuId: 3,
    menuName: 'Services',
    routeName: 'servicesSolutions',
    menuType: 'm_menu',
    subMenu: [
      {
        compId: 3.1,
        companyName: 'Marine and Industrial Engine Repairs',
        companydesc: 'APURVA ENGINEERING  stands as a renowned provider of comprehensive marine engine repair and overhaul services, catering to the complex needs of the maritime industry. With a team of highly skilled and experienced engineers & technicians, we specialize in delivering precise and efficient solutions for a wide array of leading marine engine brands.',
        compImage: '/images/companies/repair.jpg',
        subrouteName: 'marineRepairs',
      },
      {
        compId: 3.2,
        companyName: 'Marine Hydraulic Steering System',
        companydesc: 'APURVA ENGINEERING IS EXPIRIENCED IN WORKING ON HYDRAULIC STEERING SYSTEM.Our highly skilled, experienced technicians will perform hydraulic maintenance tasks to maintain any brand of marine-related hydraulic equipment to the highest standards. As far as our services are concerned, there is no job too small or too large.We also offer insightful troubleshooting and repair of marine hydraulic systems and components, including pumps, motors, valves, cylinders, fittings, and hoses. Whether it’s a hydraulic pump that needs a seal replaced or a hydraulic cylinder that is not working properly, our technicians can perform the repairs quickly and effectively on-site or at our own facility, as needed.',
        compImage: '/images/companies/marinehydraulic.jpg',
        subrouteName: 'steeringSystem',
      },
      {
        compId: 3.3,
        companyName: 'Hydraulic System',
        companydesc: 'At APURVA ENGINEERING, we are specialize in repairs of all types of hydraulic lifting systems. Our team has the experience needed to diagnose and repair your system while providing parts from existing stock, or fabricating parts that are not immediately available.',
        compImage: '/images/companies/hydraulic.jpg',
      },
      {
        compId: 3.4,
        companyName: 'Marine Transmissions',
        companydesc: 'APURVA ENGINEERING is a specialist on services to marine gearboxes.Our equipment is suitable for a wide range of applications and is preferred in for instance: Supply vessels, tugs, ferries, cargo vessels, yachts, trawlers and other vessels with varying load and work conditions.Our expertise, experience and capabilities makes us the preferred provider of service solutions for marine gearboxes.',
        compImage: '/images/companies/transmission.jpg',
        subrouteName: 'marinetransmission',
      },
      {
        compId: 3.5,
        companyName: 'Windlass Servicing',
        companydesc: 'APURVA ENGINEERING provides complete service for all types of windlass. with our expert team we make sure the job is carried out to the satisfaction of our customer.',
        compImage: '/images/companies/windlass.jpg',
        subrouteName: 'windlass',
      },
      {
        compId: 3.6,
        companyName: 'Valves and Pumps',
        companydesc: 'Apurva Engineering have highly skilled technician to cope up with repairs of all types of valves & pumps. The overall workshop area is divided into separate areas for disassembly and cleaning, welding, grinding, machining, reassembly, testing and finally painting. This ensures the lowest possible particle levels in the various working areas.Separate machining department with the capacity to carry out all types of repairs to shafts, gearbox and pump housings, various engine parts and related equipment.',
        compImage: '/images/companies/valves.jpeg',
        subrouteName: 'valvesandpumps',
      },
      {
        compId: 3.7,
        companyName: 'Pipe Fabrication',
        companydesc: 'We provide various services to our clients, including design, fabrication, Erection, testing, commissioning, maintenance, repair, and replacement of Oil, gas, water, chemicals, and other products are transported via pipelines. We have a highly skilled staff of specialists who are up to date on the latest technology and equipment. They verify that the pipelines satisfy the highest quality and safety standards.',
        compImage: '/images/companies/pipe.jpg',
        subrouteName: 'pipe',
        
      },
    ],
  },
  // {
  //   menuId: 4,
  //   menuName: 'Our Portfolio',
  //   subrouteName: 'portforlio',
  //   menuType: 'nodropDown',
  //   subMenu: [],
  // },
  {
    menuId: 5,
    menuName: 'Contact-Us',
    routeName: 'contact-us',
    menuType: 'nodrop',
    subMenu: [],
  },
];


// export async function filterCompanyById(compId) {
//   const data= comp.filter(d=>d.compId==compId)
//     return data;
//   };


//   export async function filterCompanyName() {
//     const extractedData = comp.map(company => ({
//   compId: company.compId,
//   compName: company.companyName
// }));

// return extractedData
//   }