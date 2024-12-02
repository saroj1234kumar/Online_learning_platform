import React, { useState, useEffect } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  video_path: string;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]); // Explicitly typed courses state
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3093/api/course/getall");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data.courses || []); // Extract 'courses' array from the response
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!courses.length) {
    return <p>No courses available.</p>;
  }

  const handleVideoClick = (e: React.MouseEvent) => {
    const videoElement = e.currentTarget as HTMLVideoElement;
    if (videoElement.paused) {
      videoElement.play(); // Play video if paused
    } else {
      videoElement.pause(); // Pause video if already playing
    }
  };

  return (
    <div className="min-h-screen p-10 m-0 bg-teal-100">
      <div className="header bg-blue-700 w-100 p-2 m-2 h-16 rounded-full">
        <h2 className="text-4xl text-white mb-8 text-center font-bold ">
          Our Courses
        </h2>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-5 p-5 bg-slate-500"> */}
      <div className="flex flex-col gap-8 m-5 p-5 bg-red-100 rounded-3xl border border-emerald-300">
        {courses.map((course) => (
          <div className="couseDetails flex flex-row bg-slate-700 m-1 p-6 w-full rounded-3xl">
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Video Element with Play Button */}
              <div>
                <video
                  controls
                  playsInline
                  muted
                  className="w-full h-48 object-cover"
                  src={`${process.env.NEXT_PUBLIC_BASEURL}/uploads/videos/${course.video_path}`} // Replace with correct video URL path
                  title={course.title}
                  onClick={handleVideoClick}
                >
                  Your browser does not support the video tag.
                </video>
                <h3 className="text-xl text-center text-gray-600 font-semibold mb-2">
                  {course.title}
                </h3>
              </div>
              {/* <div className="p-4">
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </div> */}
            </div>
            <div className="p-4">
              <h3 className="text-3xl text-gray-100 font-bold mb-2">
                {course.title}
              </h3>
              <p className="text-gray-100">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
