const courses =[
    {
        title: "AGT 102 - ANNUAL CROPS",
        code: "AGT 102",
        url: "course_materials/AGT 102_ANNUAL CROPS.pdf",
    },
    {
        title: "AGT 104 - CROP PROTECTION",
        code: "AGT 104",
        url: "course_materials/AGT 104_CROP PROTECTION.pdf",
    },
    {
        title: "AGT 110 - WOODLAND MANAGEMENT",
        code: "AGT 110",
        url: "course_materials/AGT 110_WOODLAND MANAGEMENT.pdf",
    },
    {
        title: "AGT 113 - INTRODUCTION TO SOIL SCIENCE",
        code: "AGT 113",
        url: "course_materials/AGT 113_INTRODUCTION TO SOIL SCIENCE.pdf"
    },
    {
        title: "AGT 114 - PRINCIPLES OF ANIMAL PRODUCTION",
        code: "AGT 114",
        url: "course_materials/AGT 114_PRINCIPLES OF ANIMAL PRODUCTION.pdf"
    },
    {
        title: "AGT 116 - INDUSTRIAL CROP PRODUCTION 1",
        code: "AGT 116",
        url: "course_materials/AGT 116_INDUSTRIAL CROP PRODUCTION 1.pdf"
    },
    {
        title: "AGT 126 - MICRO LIVESTOCK PRODUCTION",
        code: "AGT 126",
        url: "course_materials/AGT 126_MICROLIVESTOCK PRODUCTION.pdf"
    },
    {
        title: "AGT 127 - PRINCIPLES OF IRRIGATION AND DRAINAGE",
        code: "AGT 127",
        url: "course_materials/AGT 127_PRINCIPLES OF IRRIGATION AND DRAINAGE.pdf"
    },
    {
        title: "AGT 128 - POST HARVEST TECHNOLOGY AND BIOLOGY",
        code: "AGT 128",
        url: "course_materials/AGT 128_POST HARVEST TECHNOLOGY AND BIOLOGY.pdf"
    },
    {
        title: "AGT 211 - PASTURE AND FORAGE PRODUCTION",
        code: "AGT 211",
        url: "course_materials/AGT 211_PASTURE AND FORAGE PRODUCTION.pdf"
    },
    {
        title: "AGT 214 - INDUSTRIAL CROP PRODUCTION 2",
        code: "AGT 214",
        url: "course_materials/AGT 214_INDUSTRIAL CROP PRODUCTION 2.pdf"
    },
    {
        title: "AGT 215 - SOIL FERTILITY AND CROP NUTRITION",
        code: "AGT 215",
        url: "course_materials/AGT 215_SOIL FERTILITY AND CROP NUTRITION.pdf"
    },
    {
        title: "AGT 216 - FARM SOIL MANAGEMENT",
        code: "AGT 216",
        url: "course_materials/AGT 216_FARM SOIL MANAGEMENT.pdf"
    },
    {
        title: "AGT 227 - BASIC FISHERIES TECHNOLOGY",
        code: "AGT 227",
        url: "course_materials/AGT 227_BASIC FISHERIES TECHNOLOGY.pdf"
    },
    {
        title: "AGT 231 - STATISTICS AND FIELD EXPERIMENTATION",
        code: "AGT 231",
        url: "course_materials/AGT 231_STATISTICS AND FIELD EXPERIMENTATION.pdf"
    },
    {
        title: "BASICS_INTRODUCTION TO SOIL SCIENCE",
        code: "BASIC PROGRAM",
        url: "course_materials/BASICS_INTRODUCTION TO SOIL SCIENCE.pdf"
    },
    
]


// Populate course list

const courseList = document.getElementById("course-list");

courses.forEach((course, index) => {
  // 1. Create a NEW row instance for every iteration
  const row = document.createElement("tr");

  // 2. Set the content of that specific row
  row.innerHTML = `
    <td data-label="S/N">${index + 1}</td>
    <td data-label="Code">${course.code}</td>
    <td data-label="Title"><a href="${course.url}">${course.title}</a></td>
  `;

  // 3. Append the element node to the list
  courseList.appendChild(row);
});