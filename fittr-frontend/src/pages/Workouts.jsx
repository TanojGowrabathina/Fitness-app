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
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 2,
        title: "Barbell Rows",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
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
    ],
    Chest: [
      {
        id: 5,
        title: "Bench Press",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 6,
        title: "Incline Dumbbell Press",
        thumbnail: "https://images.unsplash.com/photo-1549060279-7ebb07a80e81?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 7,
        title: "Cable Flyes",
        thumbnail: "https://images.unsplash.com/photo-1595388322922-08ef5f4470b5?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 8,
        title: "Push-ups",
        thumbnail: "https://images.unsplash.com/photo-1566401899185-d2d6a575f146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
    Arms: [
      {
        id: 9,
        title: "Barbell Curls",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 10,
        title: "Tricep Dips",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 11,
        title: "Hammer Curls",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 12,
        title: "Rope Pushdowns",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
    Legs: [
      {
        id: 13,
        title: "Squats",
        thumbnail: "https://images.unsplash.com/photo-1590141192100-81ec8c9339e4?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 14,
        title: "Leg Press",
        thumbnail: "https://images.unsplash.com/photo-1574549191267-ef3009d1ffa6?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 15,
        title: "Lunges",
        thumbnail: "https://images.unsplash.com/photo-1590141192100-81ec8c9339e4?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 16,
        title: "Leg Curls",
        thumbnail: "https://images.unsplash.com/photo-1574549191267-ef3009d1ffa6?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
    ],
    Abs: [
      {
        id: 17,
        title: "Crunches",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 18,
        title: "Planks",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25ddf470146?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 19,
        title: "Ab Wheel Rollouts",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop",
        videoUrl: "https://www.coursera.org/learn/fitness-fundamentals",
      },
      {
        id: 20,
        title: "Cable Crunches",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=200&fit=crop",
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
