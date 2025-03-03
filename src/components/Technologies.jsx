import React from "react";
import {
  SiFastapi,
  SiFlask,
  SiScikitlearn,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
} from "react-icons/si";
import { FaReact, FaPython } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [3, -3],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techLinks = {
  pandas: "https://pandas.pydata.org/",
  numpy: "https://numpy.org/",
  tensorflow: "https://www.tensorflow.org/",
  pytorch: "https://pytorch.org/",
  scikitlearn: "https://scikit-learn.org/",
  python: "https://www.python.org/",
  jupyter: "https://jupyter.org/",
  react: "https://react.dev/",
  fastapi: "https://fastapi.tiangolo.com/",
  streamlit: "https://streamlit.io/",
  flask: "https://flask.palletsprojects.com/",
};

const Technologies = () => {
  return (
    <>
      <div className="pb-24" id="technologies">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href={techLinks.pandas} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2)}
              className="p-4"
            >
              <SiPandas className="text-4xl text-blue-900" />
            </motion.div>
          </a>
          <a href={techLinks.numpy} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(6)}
              className="p-4"
            >
              <SiNumpy className="text-4xl text-blue-600" />
            </motion.div>
          </a>
          <a
            href={techLinks.tensorflow}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
              className="p-4"
            >
              <SiTensorflow className="text-4xl text-orange-600" />
            </motion.div>
          </a>
          <a href={techLinks.pytorch} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
              className="p-4"
            >
              <SiPytorch className="text-4xl text-red-600" />
            </motion.div>
          </a>
          <a
            href={techLinks.scikitlearn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(6)}
              className="p-4"
            >
              <SiScikitlearn className="text-4xl text-orange-400" />
            </motion.div>
          </a>
          <a href={techLinks.python} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3.5)}
              className="p-4"
            >
              <FaPython className="text-4xl bg-gradient-to-b from-[#3776AB] to-[#FFD43B] p-1 rounded-lg" />
            </motion.div>
          </a>
          <a href={techLinks.jupyter} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="p-4"
            >
              <SiJupyter className="text-4xl text-orange-500" />
            </motion.div>
          </a>
          <a href={techLinks.react} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="p-4"
            >
              <FaReact className="text-4xl text-cyan-400" />
            </motion.div>
          </a>
          <a href={techLinks.fastapi} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
              className="p-4"
            >
              <SiFastapi className="text-4xl text-teal-500" />
            </motion.div>
          </a>
          <a
            href={techLinks.streamlit}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
              className="p-4"
            >
              <SiStreamlit className="text-4xl text-red-500" />
            </motion.div>
          </a>
          <a href={techLinks.flask} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2)}
              className="p-4"
            >
              <SiFlask className="text-4xl text-gray-800" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
