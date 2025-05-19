const studentsSubjects = [
  { name: 'Victor Ayeni', subjects: [
    { name: 'Maths', score: 85 },
    { name: 'English', score: 90 },
    { name: 'Chemistry', score: 75 },
    { name: 'Biology', score: 45 } 
  ] },
  { name: 'Olivia Garcia', subjects: [
    { name: 'Maths', score: 92 },
    { name: 'English', score: 88 },
    { name: 'Chemistry', score: 49 }, 
    { name: 'Biology', score: 82 }
  ] },
  { name: 'Noah Smith', subjects: [
    { name: 'Maths', score: 48 }, 
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
    { name: 'English', score: 42 }, 
    { name: 'Chemistry', score: 70 },
    { name: 'Biology', score: 72 }
  ] },
  { name: 'John Davis', subjects: [
    { name: 'Maths', score: 80 },
    { name: 'English', score: 82 },
    { name: 'Chemistry', score: 40 }, 
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
    { name: 'Chemistry', score: 33 }, 
    { name: 'Biology', score: 88 }
  ] }
];


const button = document.getElementById('button');
const result = document.querySelector('.result'); 

button.addEventListener('click', () => {
  const selectedStudent = document.getElementById('studentname').value;
  const selectedSubject = document.getElementById('selectedSubject').value;

  if (!selectedStudent || !selectedSubject) {
    result.textContent = 'Please select both a student and a subject.';
    setTimeout(() => {
      result.textContent = '';
    }, 2000);
    return;
  }

  const student = studentsSubjects.find(data => data.name.toLowerCase() === selectedStudent.toLowerCase());

  if (!student) {
    result.textContent = 'Student not found.';
     setTimeout(() => {
      result.textContent = '';
    }, 2000);
    return;
  }

  const subjectData = student.subjects.find(
    subject => subject.name.toLowerCase() === selectedSubject.toLowerCase()
  );

  if (!subjectData) {
    result.textContent = 'Subject not found for this student.';
     setTimeout(() => {
      result.textContent = '';
    }, 2000);
    return;
  }

  if (subjectData.score <= 50) {
    result.textContent = `${selectedStudent} ❎failed ${selectedSubject}.`;
     setTimeout(() => {
      result.textContent = '';
    }, 2000);
  } else {
    result.textContent = `${selectedStudent} ✅passed ${selectedSubject}.`;
     setTimeout(() => {
      result.textContent = '';
    }, 2000);
  }
});