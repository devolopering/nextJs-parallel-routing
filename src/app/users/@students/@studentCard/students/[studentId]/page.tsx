import ProfileCard from "@/components/ProfileCard";
import React from "react";

interface User {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
}

export default async function studentCard({
  params,
}: {
  params: { studentId: string };
}) {
  const { studentId } = params;

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Fetch the student data
  const response = await fetch(`https://fakestoreapi.com/users/${studentId}`);
  const student: User | null = await response.json();

  console.log(student);

  return (
    <div className="page">
      <h3>Student Page</h3>
      {student && student.name && student.name.firstname ? (
        <ProfileCard name={student.name.firstname} />
      ) : (
        "Student not found!"
      )}
    </div>
  );
}
