import { v4 as uuid } from "uuid";

const exampleData = {
  personalInfo: {
    fullName: "Jane Doe",
    title: "Mechanical Engineer",
    email: "jane.doe@mail.com",
    phoneNumber: "+57 300 123 4567",
    address: "Barranquilla, Co",
  },

  sections: {
    educations: [
      {
        degree: "Mechanical Engineer Degre",
        schoolName: "Atlantico University",
        location: "Barranquilla, CO",
        startDate: "2016",
        endDate: "2021",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
      {
        degree: "Master's Degree in Mechanical Engineering",
        schoolName: "Hidden University",
        location: "New York City, US",
        startDate: "2021",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
    ],

    experiences: [
      {
        companyName: "Umbrella Inc.",
        positionTitle: "UX & UI Designer",
        location: "New York City, US",
        description:
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
      {
        companyName: "Black Mesa Labs",
        positionTitle: "UX Research Assistant",
        location: "Berlin, Germany",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
    ],
  },
};

export default exampleData;
