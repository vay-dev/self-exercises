const studentsSubjects = [
  { name: 'Victor Ayeni', subjects: [
    { name: 'Maths', score: 85 },
    { name: 'English', score: 90 },
    { name: 'Chemistry', score: 75 },
    { name: 'Biology', score: 80 }
  ] },
  { name: 'Olivia Garcia', subjects: [
    { name: 'Maths', score: 92 },
    { name: 'English', score: 88 },
    { name: 'Chemistry', score: 79 },
    { name: 'Biology', score: 82 }
  ] },
  { name: 'Noah Smith', subjects: [
    { name: 'Maths', score: 78 },
    { name: 'English', score: 85 },
    { name: 'Chemistry', score: 90 },
    { name: 'Biology', score: 76 }
  ] },
  { name: 'Sophia Brown', subjects: [
    { name: 'Maths', score: 95 },
    { name: 'English', score: 92 },
    { name: 'Chemistry', score: 89 },
    { name: 'Biology', score: 80 }
  ] },
  { name: 'Olivia Garcia', subjects: [
    { name: 'Maths', score: 88 },
    { name: 'English', score: 85 },
    { name: 'Chemistry', score: 90 },
    { name: 'Biology', score: 85 }
  ] },
  { name: 'John Brown', subjects: [
    { name: 'Maths', score: 76 },
    { name: 'English', score: 80 },
    { name: 'Chemistry', score: 70 },
    { name: 'Biology', score: 72 }
  ] },
  { name: 'John Davis', subjects: [
    { name: 'Maths', score: 80 },
    { name: 'English', score: 82 },
    { name: 'Chemistry', score: 75 },
    { name: 'Biology', score: 79 }
  ] },
  { name: 'Olivia Martinez', subjects: [
    { name: 'Maths', score: 84 },
    { name: 'English', score: 78 },
    { name: 'Chemistry', score: 82 },
    { name: 'Biology', score: 88 }
  ] },
  { name: 'James Miller', subjects: [
    { name: 'Maths', score: 77 },
    { name: 'English', score: 91 },
    { name: 'Chemistry', score: 89 },
    { name: 'Biology', score: 80 }
  ] },
  { name: 'Sarah Rodriguez', subjects: [
    { name: 'Maths', score: 85 },
    { name: 'English', score: 83 },
    { name: 'Chemistry', score: 79 },
    { name: 'Biology', score: 88 }
  ] }
];

const button = document.getElementById('button');
const result = document.querySelector('.result');  // This now properly selects the <p class="result"></p>

button.addEventListener('click', () => {
  const selectedStudent = document.getElementById('studentname').value;
  const selectedSubject = document.getElementById('selectedSubject').value;

  if (!selectedStudent || !selectedSubject) {
    result.textContent = 'Please select both a student and a subject.';
    return;
  }

  const student = studentsSubjects.find(data => data.name.toLowerCase() === selectedStudent.toLowerCase());
  const subjectData = studentsSubjects.find(data => data.subjects.name.toLowerCase() === selectedSubject.toLowerCase());

  if (!student) {
    result.textContent = 'Student not found.';
    return;
  }


  if (!subjectData) {
    result.textContent = 'Subject not found for this student.';
    return;
  }

  if (subjectData.score <= 50) {
    result.textContent = `${selectedStudent} failed ${selectedSubject}.`;
  } else {
    result.textContent = `${selectedStudent} passed ${selectedSubject}.`;
  }
});
