import { useState, useEffect } from "react";

const exercises = [
  {
    name: "Pelvic Tilt",
    description:
      "Lie on your back with knees bent. Flatten your lower back into the floor.",
    duration: 20,
    image: "https://www.verywellfit.com/thmb/pelvic-tilt.jpg"
  },
  {
    name: "Bridge",
    description:
      "Lie on your back, knees bent, feet flat. Lift hips until your body forms a line.",
    duration: 20,
    image: "https://www.verywellfit.com/thmb/bridge-exercise.jpg"
  },
  {
    name: "Bird-Dog",
    description:
      "From hands and knees, extend one arm and opposite leg. Hold and switch.",
    duration: 20,
    image: "https://www.verywellfit.com/thmb/bird-dog-exercise.jpg"
  },
  {
    name: "Clamshell",
    description:
      "Lie on your side, knees bent. Open your top knee while keeping feet together.",
    duration: 20,
    image: "https://www.verywellfit.com/thmb/clamshell-exercise.jpg"
  }
];

export default function CoreCareApp() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(exercises[0].duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (time === 0) {
      if (index < exercises.length - 1) {
        setIndex(index + 1);
        setTime(exercises[index + 1].duration);
      } else {
        setIsRunning(false);
      }
      return;
    }
    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, isRunning]);

  const startWorkout = () => {
    setIsRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">CoreCare</h1>
      <div className="max-w-md w-full bg-gray-100 rounded-2xl p-6 shadow">
        <img
          src={exercises[index].image}
          alt={exercises[index].name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold">{exercises[index].name}</h2>
        <p className="mb-4">{exercises[index].description}</p>
        <div className="text-4xl font-mono mb-4">{time}s</div>
        {!isRunning ? (
          <button
            onClick={startWorkout}
            className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
          >
            Start Workout
          </button>
        ) : (
          <p className="text-green-600 font-semibold">Workout in progress...</p>
        )}
      </div>
    </div>
  );
}