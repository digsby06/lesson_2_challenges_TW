// Get the following values:

// Name of the course ('JavaScript Applications')
// Name of the second teacher ('Shane')
// Name of the first student ('Steve')
// Katy's computer type ('macbook')
// The preReq equipment object
// The second OSOption from equipment prereqs ('osx')
// string listing the OSOptions separated by 'or' ('linux or osx')

// An array of all the students that are using OSX.



var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};

course.name;
course.teachers[1];
course.students[0].name;
course.students[1].computer.type;
course.preReqs.equipment;
course.preReqs.equipment.OSOptions[1];
course.preReqs.equipment.OSOptions.join(" or ");

osxStudents = new Array();


for (var i = course.students.length - 1; i >= 0; i--) {
    if (course.students[i].computer.OS === 'OSX') {
        osxStudents.push(course.students[i].name);
    };
 }; 


console.log(osxStudents);
