import { useState } from "react";
import "../pages/Workouts.css";

function Workouts() {
  // Dummy data with Coursera-style video links
  const workoutCategories = {
    Back: [
      {
        id: 1,
        title: "Lat Pulldowns",
        thumbnail: "https://images.unsplash.com/photo-1574680178050-55c6a6be3876?w=300&h=200&fit=crop",
        videoUrl: "https://res.cloudinary.com/dtkumlotl/image/upload/v1769448652/fittr/n0fi14x87wk0jghoz4ng.png",
      },
      {
        id: 2,
        title: "Barbell Rows",
        thumbnail: "https://res.cloudinary.com/dtkumlotl/image/upload/v1771326153/fittr/cyzj7ywrq2wzbxo5xi3w.jpg",
        videoUrl: "https://res.cloudinary.com/dtkumlotl/video/upload/v1769450950/fittr/videos/b2ds9icfr0hswlx1xu6g.mp4",
      },
      {
        id: 3,
        title: "Deadlifts",
        thumbnail: "https://images.unsplash.com/photo-1521139409697-5e25fbb2ea22?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 4,
        title: "Pull-ups",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 5,
        title: "Dumbbell rows",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 6,
        title: "T-Bar rows",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 7,
        title: "bent-Over rows",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 8,
        title: "seated cable rows",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
    Chest: [
      {
        id: 9,
        title: "Bench Press",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 10,
        title: "Incline Dumbbell Press",
        thumbnail: "https://images.unsplash.com/photo-1549060279-7ebb07a80e81?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 11,
        title: "Cable Flyes",
        thumbnail: "https://images.unsplash.com/photo-1595388322922-08ef5f4470b5?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 12,
        title: "Push-ups",
        thumbnail: "https://images.unsplash.com/photo-1566401899185-d2d6a575f146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 13,
        title: "decline bench press",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 14,
        title: "pec deck",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 15,
        title: "dumbbell pulll overs",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 16,
        title: "chest press machine",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
    Arms: [
      {
        id: 17,
        title: "Barbell Curls",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 18,
        title: "Tricep Dips",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 19,
        title: "Hammer Curls",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 20,
        title: "Rope Pushdowns",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 21,
        title: "cable curls",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 22,
        title: "tricep pushdowns",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 23,
        title: "tricep kickbacks",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 24,
        title: "skull crushers",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
    Legs: [
      {
        id: 25,
        title: "Squats",
        thumbnail: "https://images.unsplash.com/photo-1590141192100-81ec8c9339e4?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 26,
        title: "Leg Press",
        thumbnail: "https://images.unsplash.com/photo-1574549191267-ef3009d1ffa6?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 27,
        title: "Lunges",
        thumbnail: "https://images.unsplash.com/photo-1590141192100-81ec8c9339e4?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 28,
        title: "Leg Curls",
        thumbnail: "https://images.unsplash.com/photo-1574549191267-ef3009d1ffa6?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 29,
        title: "glute bridges",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 30,
        title: "step ups",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 31,
        title: "leg extensions",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 32,
        title: "calf raises",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
    Abs: [
      {
        id: 33,
        title: "Crunches",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 34,
        title: "Planks",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 35,
        title: "Ab Wheel Rollouts",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 36,
        title: "Cable Crunches",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 37,
        title: "leg raises",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 38,
        title: "pallof press",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 39,
        title: "bicycle crunches",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
       {
        id: 40,
        title: "mountain climbers",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
  };

  const [scrollPositions, setScrollPositions] = useState({});

  const handleScroll = (category, direction) => {
    const carousel = document.getElementById(`carousel-${category}`);
    if (carousel) {
      const scrollAmount = 320; // item width + gap
      carousel.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="workouts-page">
      <div className="workouts-header">
        <h1>💪 Workout Programs</h1>
        <p>Choose your category and explore workout videos</p>
      </div>

      <div className="workouts-container">
        {Object.entries(workoutCategories).map(([category, videos]) => (
          <div key={category} className="workout-category-section">
            <h2 className="category-title">{category}</h2>

            <div className="carousel-wrapper">
              <button
                className="carousel-btn carousel-prev"
                onClick={() => handleScroll(category, "left")}
              >
                ❮
              </button>

              <div className="carousel" id={`carousel-${category}`}>
                {videos.map((video) => (
                  <a
                    key={video.id}
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-card"
                  >
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-icon">▶</div>
                    </div>
                    <h3>{video.title}</h3>
                  </a>
                ))}

                {/* Infinite loop - duplicate videos at the end */}
                {videos.map((video) => (
                  <a
                    key={`duplicate-${video.id}`}
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-card"
                  >
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-icon">▶</div>
                    </div>
                    <h3>{video.title}</h3>
                  </a>
                ))}
              </div>

              <button
                className="carousel-btn carousel-next"
                onClick={() => handleScroll(category, "right")}
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
