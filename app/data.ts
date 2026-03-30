export const data = {
  name: "William Wu",
  email: "William.wu1239@gmail.com",
  phone: "408-832-8628",
  education: {
    school: "University of California, Santa Cruz",
    degree: "Bachelor of Science in Computer Science",
  },
  skills: {
    languages: ["Python", "C++", "Java", "JavaScript", "TypeScript", "HTML/CSS"],
    frameworks: ["Next.js", "FastAPI", "TensorFlow", "scikit-learn", "pandas", "NumPy", "Phaser"],
    tools: ["Git", "Figma", "Wireframing", "Tailwind CSS"],
    strengths: ["Problem Solving", "Data Analysis", "UI/UX Thinking"],
  },
  projects: [
    {
      title: "Real Estate Visualizer",
      subtitle: "AI Image Editing Web Application",
      tags: ["Python", "FastAPI", "JavaScript", "HTML/CSS", "Diffusion Models", "Computer Vision"],
      links: {
        code: "https://github.com/WilliamWu1239/real-estate-visualizer",
        demo: null,
      },
      bullets: [
        "Built a full-stack AI image editing web application for virtual home staging using a FastAPI backend and browser-based frontend.",
        "Integrated diffusion-based generative image models through Hugging Face to support image generation and targeted editing workflows.",
        "Implemented mask-based image manipulation features that let users add, remove, and modify objects within real estate photos.",
        "Developed image-processing pipelines for upload handling, preprocessing, model inference, and post-processing while preserving original room layouts.",
      ],
    },
    {
      title: "Multi-Label Weather Condition Predictor",
      subtitle: "",
      tags: ["Python", "TensorFlow", "Pandas", "scikit-learn"],
      links: {
        code: null,
        demo: "https://colab.research.google.com/drive/1UgofNOM3rxhUVuUhQryuKZeGSeqW6s3Q?usp=sharing",
      },
      bullets: [
        "Built a neural network to classify daily weather conditions from hourly temperature, humidity, wind, and pressure data.",
        "Cleaned and merged real-world datasets with pandas, normalized features with StandardScaler, and encoded multi-label outputs with MultiLabelBinarizer.",
        "Trained a Keras model with dropout layers and evaluated performance using classification metrics and Hamming loss.",
        "Generated daily forecasts from the most recent 24-hour input window.",
      ],
    },
    {
      title: "Wreck-It-Ralph Game Clone",
      subtitle: "",
      tags: ["JavaScript", "HTML5", "Phaser"],
      links: {
        code: "https://github.com/WilliamWu129/Wreck-It-Ralph",
        demo: "https://williamwu129.github.io/Wreck-It-Ralph/",
      },
      bullets: [
        "Developed a browser-based 2D game inspired by Wreck-It Ralph, featuring core scenes like Play, Menu, and Game Over.",
        "Implemented character movement, game state transitions, and collision logic using the Phaser framework.",
        "Created reusable prefabs for Ralph, Felix, and interactable elements.",
        "Deployed a complete HTML5 web game with asset bundling.",
      ],
    },
  ],
  experience: [
    {
      title: "Real Estate Agent",
      tags: ["Client Relations", "Negotiation", "Customer Service"],
      bullets: [
        "Worked directly with clients to understand needs, address concerns, and support property-related decision-making.",
        "Built communication and negotiation skills through ongoing client interaction, coordination, and issue resolution.",
        "Applied problem-solving in fast-paced situations requiring responsiveness and attention to changing client needs.",
      ],
    },
  ],
};
