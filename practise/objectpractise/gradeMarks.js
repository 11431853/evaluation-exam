var data = [
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
]

for (var i=0;i<data.length;i++) {
  var data_obj = data[i];
  var max = 0;
  var student_name = null;
  for (var j=0;j<data_obj.students.length;j++) {
    var details = data_obj.students[j];
    var marks = details.marks;
    var sum = marks.reduce(function (ac, el) {
      return ac + el;
    }, 0)
    if (sum>max) {
      max = sum;
      student_name = details.name;
    }
  }
  console.log(`${data[i].grade}-${student_name}-${max}`);
}