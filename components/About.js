const About = () => {
  return (
    <section id="about" className="bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-6 mt-4 text-blue-950 text-center">About</h2>
      <div className="text-black text-justify inset-0 bg-gray-50 shadow-inner text-large border mt-6 h-96 overflow-y-auto rounded-md">
        <p className="m-4">
          As a passionate software engineer with a love for web development, database management, and cloud technologies, my journey began with a curiosity for how the digital world works. That curiosity blossomed into a formal pursuit when I enrolled in the Bachelor of Technology program in Computer Science and Engineering at PES University, Bengaluru. Over the years, I immersed myself in the ever-evolving world of technology, driven by a desire to build innovative solutions that blend functionality with aesthetics.
        </p>
        <p className="m-4">
          During my academic journey, I honed my skills in both the front-end and back-end realms. I fell in love with the creativity of front-end development, where I could bring ideas to life through languages like JavaScript, HTML, and CSS, and frameworks such as ReactJS and Tailwind CSS. The art of crafting responsive, visually appealing interfaces that offer seamless user experiences became my canvas. However, I also found myself equally captivated by the logic and structure of back-end development. Learning Python, Flask, and FastAPI, I uncovered the power of building efficient and secure systems, where every line of code contributes to the robustness of an application.
        </p>
        <p className="m-4">
          One of the most rewarding experiences in my journey was my capstone project: "Image Classification Using Machine Learning." Working as part of a team of four, we embarked on the challenge of developing a machine learning model capable of identifying 20 different plant diseases across 3 crop species using images of leaves. At the heart of our solution was the RESNET9 model, a powerful convolutional neural network (CNN) that we trained on a vast dataset of over 8 million images. The outcome was remarkable, achieving an accuracy of 97%, which marked a significant accomplishment for our team.
        </p>
        <p className="m-4">
          For this project, my responsibilities included developing the backend infrastructure using Flask and Python, ensuring seamless communication between the machine learning model and the user interface, which we built using React. I was also involved in the data pre-processing phase, where we prepared and cleaned the extensive dataset, as well as fine-tuning the RESNET9 model to optimize its performance. We employed techniques such as data augmentation, normalization, and hyperparameter tuning to ensure the model’s accuracy and robustness.
        </p>
        <p className="m-4">
          The project followed a structured procedure: we first gathered and pre-processed the image data, followed by training the CNN using the RESNET9 architecture, known for its efficiency in handling complex image classification tasks. Once the model was trained, we integrated it with a user-friendly UI that allowed farmers to easily upload images of plant leaves and receive quick and accurate disease diagnoses. The Flask-based backend managed the requests, processed the images, and returned the predictions in real time.
        </p>
        <p className="m-4">
          This project not only strengthened my understanding of machine learning and web development integration but also underscored the power of collaboration and teamwork. It was a testament to how technology can provide impactful solutions in critical fields like agriculture, and I am proud to have played a pivotal role in its success.
        </p>
        <p className="m-4">
          Among the standout projects that shaped my journey was the creation of my personal portfolio website, built using ReactJS and NextJS. This project allowed me to showcase not only my skills but also my attention to detail and design sense. I poured my heart into making it responsive, with a clean and modern interface that would leave a lasting impression. It wasn’t just a portfolio; it was a reflection of the developer I aspired to be—someone who prioritizes user experience and functionality in equal measure.
        </p>
        <p className="m-4">
          My thirst for tackling real-world challenges led me to another milestone: developing a REST API application using FastAPI and PostgreSQL, hosted on AWS. This project tested my ability to design scalable systems and implement secure user authentication mechanisms, all while ensuring smooth data management. Every step of the way, I embraced the challenges, knowing they would help me grow as a developer.
        </p>
        <p className="m-4">
          Beyond my technical achievements, I have always believed that adaptability and quick learning are key ingredients for success in the fast-paced tech world. From problem-solving to creative thinking, I constantly push myself to evolve, seizing opportunities to learn from courses such as MERN Stack Development, Python Programming, and AWS Cloud Practitioner. Each course strengthened my foundation and provided new perspectives on how to approach challenges.
        </p>
        <p className="m-4">
          Language has also played an important role in my journey. I am fluent in English, proficient in Hindi, and have a basic understanding of Arabic, which has allowed me to connect with diverse teams and collaborate across cultures. This, paired with my love for teamwork, has helped me thrive in collaborative environments, where innovation is driven by shared goals.
        </p>
        <p className="m-4">
          Today, I stand as a developer eager to take on the world—armed with a versatile skill set, a creative mind, and the ability to turn challenges into opportunities. As I look ahead, I am excited about the prospect of contributing to cutting-edge projects, continuing to refine my craft, and growing alongside a community of passionate innovators.
        </p>
      </div>
    </section>
  );
};

export default About;
