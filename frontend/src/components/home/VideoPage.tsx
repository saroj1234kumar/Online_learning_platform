import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query; // Get course ID from URL
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Fetch course details based on ID
      const fetchCourse = async () => {
        try {
          const response = await fetch(
            `http://localhost:3093/api/course/get/${id}`
          );
          if (response.ok) {
            const data = await response.json();
            setCourse(data.course);
          } else {
            console.error("Failed to fetch course. Status:", response.status);
          }
        } catch (error) {
          console.error("Error fetching course:", error);
        }
      };

      fetchCourse();
    }
  }, [id]);

  if (!course) return <p>Loading video...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl text-black font-bold mb-6">{course.title}</h1>
      <video
        controls
        className="w-full h-auto"
        src={`http://localhost:3093/videos/${course.video_path}`}
      >
        Your browser does not support the video tag.
      </video>
      <p className="mt-4 text-gray-800">{course.description}</p>
    </div>
  );
}
